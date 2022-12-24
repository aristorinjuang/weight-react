import HeaderCell from '../../atoms/table/HeaderCell';

type Props = {
  averageMax: number
  averageMin: number
  averageDifference: number
}

export default function TableFoot(props: Props) {
  return <tfoot>
    <tr>
      <HeaderCell value="Average" />
      <HeaderCell value={props.averageMax} isTextLeft={true} />
      <HeaderCell value={props.averageMin} isTextLeft={true} />
      <HeaderCell value={props.averageDifference} isTextLeft={true} />
      <HeaderCell />
    </tr>
  </tfoot>
}