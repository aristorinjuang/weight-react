import DateInput, { Props } from '../../atoms/inputs/DateInput';

export default function DateField(props: Props) {
  return <p className="my-2 col-span-2">
    <DateInput disabled={props.disabled} action={props.action} date={props.date} />
  </p>
}