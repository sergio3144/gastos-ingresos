import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "../Reducer/AppReducer";

const initialState = {
  transactions: []
}

interface PropsContext  {
  children: ReactNode
}

export const context = createContext<any>(null)

export const useGlobalState = () => {
  const contextInstance = useContext(context)
  return contextInstance
}

interface TransactionsType {
  description: string,
  amount: number | string
}

export const GlobalProvider = ({ children }:PropsContext) => {
  const [ state, dispatch ] = useReducer( AppReducer, initialState, () => {
    const localData = localStorage.getItem('transactions')
    return localData ? JSON.parse(localData) : initialState
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state))
  }, [state])

  const addTransaction = (transaction: TransactionsType) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  const deleteTransaction = (id: string) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (
    <context.Provider 
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      { children }
    </context.Provider>
  )
}