"use client";

import { MeasureDataWithDisplayText } from "@/utils/types/measure";
import VisualData from "../ChartWithLabels";
import ChartWithLabels from "../ChartWithLabels";
import StepsRequired from "../StepsRequired";

export default function DataSection({
  data,
  loading,
  stepRequired
}: {
  data: MeasureDataWithDisplayText | null,
  loading: boolean,
  stepRequired: number | null
}) {
  // if we have data, render chart.
  if (data) {
    return (
      <section className="fadeIn mt-5">
        <h4 className="text-ds-light font-semibold text-3xl md:text-4xl">Data visualizaiton</h4>
        <section className="mt-3 w-full h-[200px] md:h-[300px]">
          <ChartWithLabels
            measureData={data}
            loading={loading}
          />
        </section>
      </section>
    )
  }

  // if we have no data & stepsrequired is not null, render steps.
  if (stepRequired !== null) {
    return (
      <section className="fadeIn mt-5">
        <StepsRequired stepIndex={stepRequired} />
      </section>
    )
  }

}