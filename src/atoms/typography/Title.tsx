import { Link } from 'react-router-dom';

type Props = {
  content: string
}

export default function Title(props: Props) {
  return <h1 className="text-2xl font-bold">
    <Link to="/">{props.content}</Link>
  </h1>
}