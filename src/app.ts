// classes
import { Invoice } from './class/Invoice.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('input#toFrom') as HTMLInputElement;
const details = document.querySelector('input#details') as HTMLInputElement;
const amount = document.querySelector('input#amount') as HTMLInputElement;

// console.log(type)
// console.log(toFrom)
// console.log(details)
// console.log(amount)

const itemList = document.querySelector('.item-list') as HTMLUListElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.value
    )

    const newInvoice = new Invoice(toFrom.value, details.value, +amount.value);
    const newInvoiceItem = document.createElement('li') as HTMLLIElement;

    console.log(newInvoiceItem)
    itemList.appendChild(newInvoiceItem)

})

const invOne = new Invoice('mario', 'work on mario website', 250);
console.log('invOne', invOne)

const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log('invTwo', invTwo)

let invoices: Invoice[] = []

invoices.push(invOne, invTwo)

console.log('invoices', invoices)