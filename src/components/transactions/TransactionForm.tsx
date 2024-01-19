import { useState, ChangeEvent, FormEvent } from "react"
import { useGlobalState } from "../../hooks/context/GlobalState"

const TransactionForm = () => {
  const { addTransaction } = useGlobalState()
  const [ description, setDescription ] = useState<string>('')
  const [ amount, setAmount ] = useState<number | string>(0)

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleOnSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: + amount
    })
    setAmount(0)
    setDescription('')
  }

  return (
    <>
      <div className="w-[200px]">
        <form onSubmit={ handleOnSubmit }>
          <input 
            type="text" 
            placeholder='Ingresa una descripción'
            onChange={ handleChangeDescription }
            value={ description }
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 outline-none w-full"
          />
          <input 
            type="number" 
            placeholder='Ingresa un monto' 
            step={0.01}
            onChange={ handleChangeAmount }
            value={ amount }
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 outline-none w-full"
          />

          <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Añade una transacción</button>
        </form>
      </div>
    </>
  )
}

export { TransactionForm }
