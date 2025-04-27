export type NumberFormats = "thousand" | "million"

export type SelectInputOptions = {
  label: string,
  value: string,
  subheading?: string,
  convert?: {
    from: NumberFormats,
    to: NumberFormats
  }
}

export type SupportedSelectTypes = "country" | "measure"

export type SelectInputType = {
  id: number,
  selectType: SupportedSelectTypes;
  placeholder: string;
  options: SelectInputOptions[];
  label: string,
  showSearch?: boolean
}