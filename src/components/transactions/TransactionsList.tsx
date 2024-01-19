import { useGlobalState } from "../../hooks/context/GlobalState"
import { TransactionsItem } from "./TransactionsItem"

const TransactionsList = () => {
  
  const { transactions } = useGlobalState()

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block">Historial de transacciones</h3>
      <ul>
        {
          transactions.map((transaction: any) => 
            <TransactionsItem 
              transaction={ transaction } 
              key={ transaction.id }
            />
          )
        }
      </ul>
    
    </>
  )
}
export { TransactionsList } 
