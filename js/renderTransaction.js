import { createTransactionContainer } from "./createTags/createContainer.js"
import { createTransactionTitle } from "./createTags/createTitle.js"
import { createTransactionAmount } from "./createTags/createAmount.js"
import { createEditTransactionBtn } from "./createTags/createEditBtn.js"
import {createDeleteTransactionBtn} from "./createTags/createDeleteBtn.js"

export function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const editBtn = createEditTransactionBtn(transaction)
    const deleteBtn = createDeleteTransactionBtn(transaction.id)

    container.append(title, amount, editBtn,deleteBtn)
    document.querySelector("#transactions").appendChild(container)
}
