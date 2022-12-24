import TableHead from '../molecules/table/TableHead';
import TableFoot from '../molecules/table/TableFoot';
import TableBody, { Weights } from '../molecules/table/TableBody';

type Average = {
  max: number
  min: number
  difference: number
}

type Props = {
  items: Weights
  average: Average
  deleteAction: (date: Date) => void
}

export default function Table(props: Props) {
  return <table className="table-auto mx-auto my-2">
    <TableHead />
    <TableBody weights={props.items} deleteAction={props.deleteAction} />
    <TableFoot averageMax={props.average.max} averageMin={props.average.min} averageDifference={props.average.difference} />
  </table>
}