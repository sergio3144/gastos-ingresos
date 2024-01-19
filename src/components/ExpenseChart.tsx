import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../hooks/context/GlobalState'
const ExpenseChart = () => {

  const { transactions } = useGlobalState()

  const totalIncome = transactions.filter((transaction:any) => transaction.amount > 0).reduce((acc:number, transaction:any) => (acc += transaction.amount), 0)

  const totalExpense = transactions.filter((transaction:any) => transaction.amount < 0).reduce((acc:number, transaction:any) => (acc += transaction.amount), 0) * -1

  const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100)

  const totalIncomePercentage = 100 - totalExpensesPercentage;

  console.log(totalExpensesPercentage)
  console.log(totalIncomePercentage)

  return (
    <>
      <span className='flex items-center gap-2'> <span className='w-2 h-2 rounded-full bg-[#2ecc71]'></span> Ingreso </span>
      <span className='flex items-center gap-2'> <span className='w-2 h-2 rounded-full bg-[#e74c3c]'></span> Gasto </span>
      <VictoryPie
        colorScale={[ "#e74c3c", "#2ecc71" ]}
        data={[
          { x: 'Expenses', y: totalExpensesPercentage || 0},
          { x: 'Incomes', y: totalIncomePercentage || 0}
        ]}
        animate={{ duration: 200 }}
        labels={({ datum }) => `${ datum.y } %` }
        labelComponent={<VictoryLabel
          angle={ 45 }
          style={{ fill: 'white' }}
        />}
      />
    </>
  )
}

export { ExpenseChart } 
