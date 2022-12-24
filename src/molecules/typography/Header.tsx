import Title from '../../atoms/typography/Title';

type Props = {
  title: string
  description: string
}

export default function Header(props: Props) {
  return <header className="text-center">
    <Title content={props.title} />
    <p>{props.description}</p>
  </header>
}