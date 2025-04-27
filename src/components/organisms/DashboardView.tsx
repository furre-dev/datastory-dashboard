"use client";
import { SelectOptionType, supportedMeasureOptions } from "@/utils/measures/supportedMeasures";
import { SelectInputType } from "@/utils/types/select";
import SelectInputSection from "../molecules/sections/SelectInputSection";

export default function DashboardView({ countriesAsOptionsArray }: { countriesAsOptionsArray: SelectOptionType[] }) {
  const inputsArray: SelectInputType[] = [
    {
      id: 1,
      label: "Country",
      selectType: "country",
      options: countriesAsOptionsArray,
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
      <h1 className="text-ds-light text-2xl md:text-3xl font-bold">Dashboard / Countries</h1>
      <SelectInputSection inputsArray={inputsArray} />
    </section>
  )
}