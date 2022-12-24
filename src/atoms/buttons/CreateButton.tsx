import { Link } from 'react-router-dom';

export default function CreateButton() {
  return <Link
    to="/create"
    className="cursor-pointer bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700 px-5 py-2 leading-5 rounded-full font-semibold text-white"
  >
    Create
  </Link>
}