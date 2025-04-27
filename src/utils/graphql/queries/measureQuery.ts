import { gql } from "urql";
import { client } from "../client";
import { MeasureQuery, MeasureQueryVariables } from "../gql/graphql";
import { MeasrueQueryResponse } from "@/utils/types/measure";


const MEASURE_QUERY = gql`
  query Measure($input: cube_cube_M6Lh5is0FtqUhZ_bool_exp) {
  cube_cube_M6Lh5is0FtqUhZ(where: $input) {
    value
    year
  }
}
`;

export async function measureQuery(input: MeasureQueryVariables): Promise<MeasrueQueryResponse> {
  const result = await client.query<MeasureQuery>(MEASURE_QUERY, input).toPromise();

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

  return {
    data: result.data.cube_cube_M6Lh5is0FtqUhZ,
    error: null
  }
}
