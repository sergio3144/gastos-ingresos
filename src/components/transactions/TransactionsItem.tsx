import { useGlobalState } from "../../hooks/context/GlobalState"
import { IoMdClose } from "react-icons/io";

type TransactionsItemProps = {
  transaction: any
}

const TransactionsItem = ({ transaction }:TransactionsItemProps) => {
  const { deleteTransaction } = useGlobalState()
  return (
    <>
      <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
        <p className="text-sm">{ transaction.description }</p>
        <div className="flex items-center gap-2">
          <span>${ transaction.amount }</span>
          <span className="bg-red-500 rounded-full mt-0.5 cursor-pointer" onClick={() => deleteTransaction(transaction.id) }><IoMdClose size={20} color="white"/></span>
        </div>
      </li>
    </>
  )
}

export { TransactionsItem }
