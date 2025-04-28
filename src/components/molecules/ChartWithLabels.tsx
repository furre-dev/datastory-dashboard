"use client";

import { LoadingOutlined } from "@ant-design/icons";
import DataChart from "../organisms/DataChart";
import { MeasureDataWithDisplayText } from "@/utils/types/measure";

export default function ChartWithLabels({
  measureData,
  loading,
}: {
  measureData: MeasureDataWithDisplayText,
  loading: boolean,
}) {
  return (
    <section className="w-full h-[200px] md:h-[300px] md:text-left">
      {measureData.displayText && (
        <>
          <p className="text-ds-dark font-normal text-xl flex items-center gap-2">
            {measureData.displayText.heading}
            {loading && <LoadingOutlined className="!align-baseline" />}
          </p>
          <p className="text-[#5A4D9F] font-normal text-md mb-2">
            {measureData.displayText.subheading}
          </p>
        </>
      )}
      <DataChart
        mesureData={{
          data: measureData.measureData,
          heading: measureData.displayText?.heading
        }}
      />
    </section>
  )
}