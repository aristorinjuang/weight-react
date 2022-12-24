import HeaderCell from '../../atoms/table/HeaderCell';
import CreateButton from '../../atoms/buttons/CreateButton';

export default function TableHead() {
  return <thead>
    <tr>
      <HeaderCell value="Date" />
      <HeaderCell value="Max" />
      <HeaderCell value="Min" />
      <HeaderCell value="Difference" />
      <HeaderCell value={<CreateButton />} />
    </tr>
  </thead>
}