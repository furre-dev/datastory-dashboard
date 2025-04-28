"use client"
import { SelectInputType, SupportedSelectTypes } from "@/utils/types/select"
import SelectInput from "../SelectInput"
import { useRouter, useSearchParams } from "next/navigation"
import { setUrlParams } from "@/utils/searchParams/setUrlParams";

export default function SelectInputSection(
  {
    inputsArray,
    loading
  }: {
    inputsArray: SelectInputType[],
    loading: boolean
  }) {
  const searchParams = useSearchParams();
  const router = useRouter()

  const onChange = (e: string, selectType: SupportedSelectTypes) => {
    setUrlParams(
      selectType,
      e,
      searchParams,
      router
    )
  }

  return (
    <section className="mt-5 space-y-5">
      {inputsArray.map((input) => {
        return (
          <SelectInput
            key={input.id}
            inputValues={input}
            onChangeAction={(e) => onChange(e, input.selectType)}
            loading={loading}
          />
        )
      })}
    </section>
  )
}