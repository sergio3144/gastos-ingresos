import { useGlobalState } from "../hooks/context/GlobalState"

const Balance = () => {

  const { transactions } = useGlobalState()

  const amounts:[] = transactions.map((transaction:any) => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <>
      <div className="flex justify-between items-center">
        <h3>Tu balance</h3>
        <h1 className="text-2xl font-bold">{ total }</h1>
      </div>
    </>
  )
}

export { Balance }
