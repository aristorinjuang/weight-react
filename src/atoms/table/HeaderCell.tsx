type Props = {
  value?: string | number | JSX.Element
  isTextLeft?: boolean
}

export default function HeaderCell(props: Props) {
  if (props.isTextLeft) {
    return <th className="p-2 text-left">{props.value}</th>
  }
  return <th className="p-2">{props.value}</th>
}