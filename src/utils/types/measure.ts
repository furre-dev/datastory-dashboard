import { MeasureQuery } from "../graphql/gql/graphql";
import { SelectInputOptions } from "./select";

export type MeasureData = MeasureQuery["cube_cube_M6Lh5is0FtqUhZ"]

export type MeasureDataWithDisplayText = {
  measureData: MeasureData,
  displayText: {
    heading: string;
    subheading: string | undefined;
  } | null
}

export type MeasureType = SelectInputOptions

export type MeasrueQueryResponse = {
  data: MeasureData,
  error: null
} | {
  data: null,
  error: Error
}