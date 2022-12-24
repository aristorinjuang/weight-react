export type Props = {
  action: (e: React.MouseEvent) => void
}

export default function SubmitButton(props: Props) {
  return <button
    onClick={(e: React.MouseEvent) => props.action(e)}
    className="h-8 w-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-700 py-2 rounded-full font-semibold text-white text-xs"
  >
    Submit
  </button>
}