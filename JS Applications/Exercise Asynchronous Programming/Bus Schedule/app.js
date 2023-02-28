 function solve() {

const label = document.querySelector('#info span');
const departBtn = document.getElementById('depart');
const arriveBtn = document.getElementById('arrive');

let stop = {
    next: 'depot'
};

async function depart() {

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
        const response = await fetch(url);
        stop = await response.json();
        label.textContent = `Next stop ${stop.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        
    }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled= false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
