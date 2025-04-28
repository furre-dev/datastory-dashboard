"use client";

import { supportedMeasureOptions } from "@/utils/measures/supportedMeasures";
import { SelectInputType } from "@/utils/types/select";
import SelectInputSection from "../molecules/sections/SelectInputSection";
import useMeasure from "@/utils/hooks/useMeasure";
import { CountriesType } from "@/utils/types/country";
import { convertCountryToOption } from "@/utils/conversions/convertCountryToOption";
import DataSection from "../molecules/sections/DataSection";
import ErrorToast from "../atoms/ErrorToast";
import StepsRequired from "../molecules/StepsRequired";

export default function DashboardView({ countriesArray }: { countriesArray: CountriesType }) {
  const { data, error, loading, stepRequired } = useMeasure(countriesArray);

  const inputsArray: SelectInputType[] = [
    {
      id: 1,
      label: "Country",
      selectType: "country",
      options: convertCountryToOption(countriesArray),
      placeholder: "Please select a country...",
      showSearch: true,
    }, {
      id: 2,
      label: "Measure",
      selectType: "measure",
      options: supportedMeasureOptions,
      placeholder: "Please select a measure..."
    }
  ]

  return (
    <section>
      {error && <ErrorToast />}
      <h1 className="text-ds-light text-2xl md:text-3xl font-bold">Dashboard / Countries</h1>
      <SelectInputSection
        loading={loading}
        inputsArray={inputsArray} />
      <DataSection
        loading={loading}
        data={data}
        stepRequired={stepRequired}
      />

    </section>
  )
}