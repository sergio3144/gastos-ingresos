
import { useGlobalState } from '../hooks/context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useGlobalState()

  const amounts = transactions.map((transaction:any) => transaction.amount)
  const income:string = amounts
    .filter((item:number) => item > 0)
    .reduce((acc:number, item:number) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item:number) => item < 0)
    .reduce((acc:number, item:number) => (acc += item), 0).toFixed(2) * -1

  return (
    <>
      <div className='flex justify-between my-2'>
        <h4>Ingresos</h4>
        <p>{ income }</p>
      </div>
      <div className='flex justify-between my-2'>
        <h4>Gasto</h4>
        <p>{ expense }</p>
      </div>
    </>
  )
}

export { IncomeExpenses }
