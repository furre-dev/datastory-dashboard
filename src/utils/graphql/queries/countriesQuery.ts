import { gql } from "urql";
import { CountriesQuery } from "../gql/graphql";
import { client } from "../client";
import { CountriesQueryResponse } from "@/utils/types/country";

const COUNTRIES_QUERY = gql`
  query Countries {
    item(where: {class_id: {_eq: "Country"}}) {
      id
      name: name(path: "en")
      iso2: statements(where: {property_id: {_eq: "iso2"}}) {
        value: postgres_varchar
      }
    }
  }
`;

// I could make the input optional or allow undefined, but that would weaken type safety if CountriesQueryVariables ever requires a value in the future.
export async function countriesQuery(): Promise<CountriesQueryResponse> {
  const result = await client.query<CountriesQuery>(COUNTRIES_QUERY, {}).toPromise();

  if (result.error) {
    return {
      data: null,
      error: {
        message: result.error.message,
        name: result.error.name
      }
    }
  }

  if (!result.data) {
    return {
      data: null,
      error: {
        message: "No results were found from your query!",
        name: "NoResultsFromQuery"
      }
    }
  }

  // sort alphabetic order.
  const sortedData = result.data.item.sort((a, b) => a.name.localeCompare(b.name));

  return {
    data: sortedData,
    error: null
  }
}
