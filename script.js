// Global Variables
let quote = document.querySelector('#quote');
let number = document.querySelector('#number');

// Randomly provide an advice on all
async function randomAdvice() {
    let advice = await fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {return data});
    quote.innerText = `"${advice.slip.advice}"`;
    number.innerText = `Advice #${advice.slip.id}`;
}
