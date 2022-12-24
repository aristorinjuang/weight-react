import moment from 'moment';

export type Props = {
  disabled: boolean
  action: (date: Date) => void
  date: Date
}

export default function DateInput(props: Props) {
  return <input
    disabled={props.disabled}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.action(new Date(e.target.value))}
    defaultValue={moment(props.date).format('YYYY-MM-DD')}
    name="date"
    type="date"
    placeholder="Date"
    className={`h-8 w-full rounded-full text-xs ${props.disabled ? 'bg-gray-300' : ''}`}
  />
}