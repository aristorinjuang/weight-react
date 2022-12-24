import moment from 'moment';
import DataCell from '../../atoms/table/DataCell';
import DeleteButton from '../../atoms/buttons/DeleteButton';
import Link from '../../atoms/typography/Link';

type Weight = {
  date: Date,
  difference: number,
  max: number,
  min: number
}

export type Weights = Weight[]

type Props = {
  deleteAction: (date: Date) => void
  weights: Weights
}

export default function TableBody(props: Props) {
  return <tbody>
    {props.weights !== undefined && props.weights.map((weight: Weight) => 
      <tr key={moment(weight.date).format('YYYY-MM-DD')}>
        <DataCell value={<Link
          to={'/' + moment(weight.date).format('YYYY-MM-DD')}
          text={moment(weight.date).format('YYYY-MM-DD')}
        />} />
        <DataCell value={weight.max} />
        <DataCell value={weight.min} />
        <DataCell value={weight.difference} />
        <DataCell value={<DeleteButton action={props.deleteAction} date={weight.date} />} />
      </tr>
    )}
  </tbody>
}