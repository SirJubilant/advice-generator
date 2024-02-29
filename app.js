const header = document.querySelector(".header");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".btn");

const renderSlips = () => {

    fetch('https://api.adviceslip.com/advice')
        .then(resp => resp.json())
        .then(data => {
            const slip = data.slip;
            header.innerText = `ADVICE ${' '} #${slip.id}`;
            advice.innerText = `"${slip.advice}"`;
        });

}

window.addEventListener('DOMContentLoaded', ()=> renderSlips());
btn.addEventListener('click', ()=> renderSlips());