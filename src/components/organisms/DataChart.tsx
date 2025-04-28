
import { numberFormatter } from "@/utils/conversions/numberFormatting";
import { MeasureData } from "@/utils/types/measure";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  BarChart,
} from "recharts";

type DataChartProps = {
  data: MeasureData,
  heading?: string
}

export default function DataChart({ mesureData }: { mesureData: DataChartProps }) {
  return (
    <div className="w-full md:w-[80%] max-w-[700px] h-full relative">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          data={mesureData.data}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#e0e0e0" }}
            tickLine={{ stroke: "#e0e0e0" }}
            interval={"preserveStartEnd"}
            minTickGap={10}
          />
          <YAxis
            orientation="right"
            tickFormatter={numberFormatter}
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#e0e0e0" }}
            tickLine={{ stroke: "#e0e0e0" }}
            width={30}
          />
          <Tooltip
            formatter={(value) => [`${Math.round(Number(value)).toLocaleString()}`, mesureData.heading]}
            labelFormatter={(label) => `Year: ${label}`}
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              border: "none"
            }}
          />
          <Bar
            dataKey="value"
            fill="#8b5cf6"
            radius={[4, 4, 0, 0]}
            name={mesureData.heading}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

