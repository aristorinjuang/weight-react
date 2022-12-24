import SubmitButton, { Props } from '../../atoms/buttons/SubmitButton';

export default function SubmitField(props: Props) {
  return <p className="my-2 text-center">
    <SubmitButton action={props.action} />
  </p>
}