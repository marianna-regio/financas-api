import { transactions } from "../index.js"
import { renderTransaction } from "./renderTransaction.js"
import { updateBalance } from "./updateBalance.js"

export async function saveTransaction(ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector("#name").value
    const amount = parseFloat(document.querySelector("#amount").value)

    if (id) {
        //editar transção
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const transaction = await response.json()
        const indexToRemove = transactions.findIndex(t => t.id === transaction.id)
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)


    } else {
        //criar nova transação
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)
    }

    ev.target.reset()
    updateBalance()

}
