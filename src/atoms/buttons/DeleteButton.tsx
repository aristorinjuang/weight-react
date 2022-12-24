type Props = {
  action: (date: Date) => void
  date: Date
}

export default function DeleteButton(props: Props) {
  return <button
    onClick={() => window.confirm('Are you sure want to delete this?') && props.action(props.date)}
    className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 px-5 py-2 leading-5 rounded-full font-semibold text-white"
  >
    Delete
  </button>
}