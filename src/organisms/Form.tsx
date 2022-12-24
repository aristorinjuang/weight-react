import SubmitField from '../molecules/form/SubmitField';
import NumberField from '../molecules/form/NumberField';
import DateField from '../molecules/form/DateField';

type Props = {
  date: Date
  max: number
  min: number
  difference: number
  disabled: boolean
  changeDateAction: (value: Date) => void
  changeMaxAction: (value: number) => void
  changeMinAction: (value: number) => void
  submitAction: (e: React.MouseEvent) => void
}

export default function Form(props: Props) {
  return <form className="my-2 grid grid-cols-6 gap-1 sm:gap-2">
    <DateField disabled={props.disabled} action={props.changeDateAction} date={props.date} />
    <NumberField action={props.changeMaxAction} value={props.max} name="max" />
    <NumberField action={props.changeMinAction} value={props.min} name="min" />
    <NumberField value={props.difference} name="difference" />
    <SubmitField action={props.submitAction} />
  </form>
}