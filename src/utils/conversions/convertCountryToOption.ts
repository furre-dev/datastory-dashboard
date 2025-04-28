import { SelectOptionType } from "../measures/supportedMeasures"
import { CountriesType } from "../types/country"

export const convertCountryToOption = (countries: CountriesType): SelectOptionType[] => {
  return countries.map((country) => {
    return {
      label: country.name,
      value: country.id
    }
  })
}