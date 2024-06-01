const me = {
    name: 'man',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log('I spent', person.name);
};
const persongroup = (iyanu) => {
    console.log('i display', iyanu.age);
};
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// invOne.client = 'yoshi';
// invOne.amount = 50;
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
