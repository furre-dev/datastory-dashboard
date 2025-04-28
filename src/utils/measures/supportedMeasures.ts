import { MeasureType } from "../types/measure"

export type NumberFormats = "thousand" | "million"

export type SelectOptionType = {
  label: string,
  value: string,
  subheading?: string,
  convert?: {
    from: NumberFormats,
    to: NumberFormats
  }
}

export const supportedMeasureOptions: MeasureType[] = [
  {
    label: "Life expectancy",
    value: "life_expectancy",
    subheading: "The average number of years a person is expected to live."
  },
  {
    label: "Population",
    value: "population",
    subheading: "The total number of people living in a specific country or region at a given time.",
    convert: {
      from: "thousand",
      to: "million"
    }
  },
  {
    label: "Net migration rate",
    value: "net_migration_rate",
    subheading: "The difference between the number of people entering and leaving a country per 1,000 residents in a year."
  },
]