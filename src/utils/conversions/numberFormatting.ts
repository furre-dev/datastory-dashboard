import { NumberFormats } from "../measures/supportedMeasures";

export const numberFormatter = (value: number) => {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  if (value <= 10) {
    return value.toString()
  }
  return Math.round(value).toString();
};

export const numberMultiplier = (value: number, from: NumberFormats, to: NumberFormats) => {
  if (from === to) return 1
  return value * (formatMap[to] / formatMap[from])
}

const formatMap: Record<NumberFormats, number> = {
  thousand: 1_000,
  million: 1_000_000,
}
