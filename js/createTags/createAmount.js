export function createTransactionAmount(amount) {
    const span = document.createElement('span')

    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formattedAmount = formater.format(amount)

    if (amount > 0) {
        span.textContent = `${formattedAmount} C`
        span.classList.add('transaction-amount','credit')
    } else {
        span.textContent = `${formattedAmount} D`
        span.classList.add('transaction-amount','debit')
    }

    return span
}