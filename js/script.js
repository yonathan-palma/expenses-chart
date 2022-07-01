"use strict";

const url = "js/data.json";

const updateBAr = (qSelector, start = 0, end)=>{
    const target = document.querySelector(qSelector);
    const step = ()=>{
        const progress = start; 
        if (progress < end) {
            progress++;
            target.style.height = progress + '%';
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

const upload_bar = ()=>{
    fetch(url)
        .then(response => response.json())
        .then(data => { 
            const mon =document.getElementById("mon");
            mon.setAttribute("data-amount", `$${data[0].amount}`);
            mon.style.height = `${data[0].amount}%`;
            
            const tue =document.getElementById("tue");
            tue.setAttribute("data-amount", `$${data[1].amount}`);
            tue.style.height = `${data[1].amount}%`;

            const wed =document.getElementById("wed");
            wed.setAttribute("data-amount", `$${data[2].amount}`);
            wed.style.height = `${data[2].amount}%`;

            const thu =document.getElementById("thu");
            thu.setAttribute("data-amount", `$${data[3].amount}`);
            thu.style.height = `${data[3].amount}%`;

            const fri =document.getElementById("fri");
            fri.setAttribute("data-amount", `$${data[4].amount}`);
            fri.style.height = `${data[4].amount}%`;

            const sat =document.getElementById("sat");
            sat.setAttribute("data-amount", `$${data[5].amount}`);
            sat.style.height = `${data[5].amount}%`

            const sun =document.getElementById("sun");
            sun.setAttribute("data-amount", `$${data[6].amount}`);
            sun.style.height = `${data[6].amount}%`;

            let date = new Date();
            let getDay = date.getDay();
            let cyan = document.querySelector(`.bar_container:nth-child(${getDay}) .bar`);
            cyan.classList.add("cyan");

        })
        .catch(() => {
            console.log("error"); 
        });  
}

const amountCounter = (qSelector, start, end, duration)=>{
    const nodo = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp)=>{
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let progresfixed = progress * (end - start) + start;
        nodo.innerText = progresfixed.toFixed(2);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}
   
document.addEventListener("DOMContentLoaded", () => {
    amountCounter("#amount", 10, 941.48, 2000);
    upload_bar();
});



   