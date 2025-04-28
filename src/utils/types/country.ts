import { CountriesQuery } from "../graphql/gql/graphql";

export type CountriesProp = CountriesQuery["item"] | null

export type CountriesType = CountriesQuery["item"]
export type CountryType = CountriesType extends (infer U)[] ? U : never;

export type CountriesQueryResponse = {
  data: CountriesType,
  error: null
} | {
  data: null,
  error: Error
}