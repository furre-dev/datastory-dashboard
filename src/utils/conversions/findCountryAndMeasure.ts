import { supportedMeasureOptions } from "../measures/supportedMeasures";
import { CountriesType } from "../types/country";

export const findCountryAndMeasure = (countries: CountriesType, country_id: string | null, measure_id: string | null) => {
  const country = countries.find((country) => country.id === country_id);
  const measure = supportedMeasureOptions.find((measure) => measure.value === measure_id);

  return {
    country,
    measure
  }
}