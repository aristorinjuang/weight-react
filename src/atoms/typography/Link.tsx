import { Link as RouterLink } from 'react-router-dom';

type Props = {
  to: string
  text: string
}

export default function Link(props: Props) {
  return <RouterLink to={props.to} className="hover:underline">
    {props.text}
  </RouterLink>
}