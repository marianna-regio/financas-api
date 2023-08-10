import { fetchTransactions } from "./fetchTransaction.js"
import { renderTransaction } from "./renderTransaction.js"
import { updateBalance } from "./updateBalance.js"
import { transactions } from "../public/index.js"

export async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(renderTransaction)
    updateBalance()
}
