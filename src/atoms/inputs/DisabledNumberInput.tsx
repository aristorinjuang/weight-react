type Props = {
  value: number
}

export default function DisabledNumberInput(props: Props) {
  return <input disabled name="difference" type="number" value={props.value} className="h-8 w-full rounded-full text-xs bg-gray-300" />
}