export const transactions = []
import { setup } from "../js/setup.js"
import {saveTransaction} from "../js/saveTransaction.js"


document.addEventListener('DOMContentLoaded', setup())
document.querySelector('form').addEventListener('submit', saveTransaction)