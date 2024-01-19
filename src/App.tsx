
import { GlobalProvider } from "./hooks/context/GlobalState"

import { Balance } from "./components/Balance"
import { Header } from "./components/Header"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { TransactionForm } from "./components/transactions/TransactionForm"
import { TransactionsList } from "./components/transactions/TransactionsList"
import { ExpenseChart } from "./components/ExpenseChart"

function App() {

  return (
    <>
      <GlobalProvider>
        <div className="flex justify-center items-center bg-zinc-950 text-white h-screen">
          <div className="contaner mx-auto w-3/6">
            <h1 className="text-2xl font-bold mb-5">Seguidor de gastos</h1>
            <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-5">
              <div>
                <Header/>
                <IncomeExpenses/>
                <Balance/>
                <TransactionForm/>
              </div>
              <div className="flex flex-col">
                <ExpenseChart/>
                <TransactionsList/>
              </div>
          </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
