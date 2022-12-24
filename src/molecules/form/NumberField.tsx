import NumberInput from '../../atoms/inputs/NumberInput';
import DisabledNumberInput from '../../atoms/inputs/DisabledNumberInput';

type Props = {
  action?: (number: number) => void
  value: number
  name: string
  placeholder?: string
}

export default function NumberField(props: Props) {
  if (props.action !== undefined) {
    return  <p className="my-2">
      <NumberInput action={props.action} defaultValue={props.value} name={props.name} placeholder={props.placeholder ?? ""} />
    </p>
  }
  return  <p className="my-2">
    <DisabledNumberInput value={props.value} />
  </p>
}