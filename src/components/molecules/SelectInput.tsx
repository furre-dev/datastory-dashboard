
import { SelectInputType } from "@/utils/types/select";
import { Select } from "antd";

export default function SelectInput({
  inputValues,
  loading,
  onChangeAction
}: {
  inputValues: SelectInputType,
  loading: boolean,
  onChangeAction: (value: string) => void
}) {
  return (
    <div key={inputValues.id} className="flex flex-col gap-2">
      <label className="text-ds-dark font-medium">{inputValues.label}</label>
      <Select
        style={{ cursor: "pointer" }}
        showSearch={inputValues.showSearch}
        loading={loading}
        /* value={alreadySelected[inputValues.selectType]} */
        onChange={onChangeAction}
        className="w-[300px]"
        placeholder={inputValues.placeholder}
        options={inputValues.options} />
    </div>
  )
}