import { MeasureQuery } from "../graphql/gql/graphql";

export type MeasureData = MeasureQuery["cube_cube_M6Lh5is0FtqUhZ"]

export type MeasureDataWithDisplayText = {
  measureData: MeasureData,
  displayText: {
    heading: string;
    subheading: string | undefined;
  } | null
}


export type MeasrueQueryResponse = {
  data: MeasureData,
  error: null
} | {
  data: null,
  error: Error
}