type Props = {
  value: string | number | JSX.Element
}

export default function DataCell(props: Props) {
  return <td className="p-2">{props.value}</td>
}