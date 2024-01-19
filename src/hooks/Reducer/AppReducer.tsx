export default (state:any, action:any) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [ ...state.transactions, action.payload ]
      }
    case "DELETE_TRANSACTION": 
      return {
        /* ...state, */
        transactions: state.transactions.filter((transaction: { id: string }) => 
          transaction.id !== action.payload
        )
      }
    default:
      return state;
  }
}