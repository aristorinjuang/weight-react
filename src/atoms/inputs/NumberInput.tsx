type Props = {
  action: (number: number) => void
  defaultValue: number
  name: string
  placeholder: string
}

export default function NumberInput(props: Props) {
  return <input
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.action(Number(e.target.value))}
    defaultValue={props.defaultValue}
    name={props.name}
    type="number"
    placeholder={props.placeholder}
    className="h-8 w-full rounded-full text-xs"
  />
}