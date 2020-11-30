const inputDinar = document.getElementById('dinar');
const inputEuro = document.getElementById('euro');
const inputDolar = document.getElementById('dolar');
const inputFranak = document.getElementById('franak');

let mydata = JSON.parse(data);
let rsd = 1;
let eur = mydata[0]["SREDNJI KURS"];
let usd = mydata[15]["SREDNJI KURS"];
let chf = mydata[13]["SREDNJI KURS"];

inputDinar.addEventListener('input', dinar);

function dinar() {
    const dinarRSD = parseInt(inputDinar.value);
    const euroE = dinarRSD/eur;
    const usdD = dinarRSD/usd;
    const chfSwiss = dinarRSD/chf;
    setOutput(dinarRSD, euroE, usdD, chfSwiss);
}

inputEuro.addEventListener('input', euro);

function euro() {
    const euroE = parseInt(inputEuro.value);
    const dinarRSD = euroE/rsd;    
    const usdD = euroE/usd;
    const chfSwiss = euroE/chf;
    setOutput(dinarRSD, euroE, usdD, chfSwiss);
}

inputDolar.addEventListener('input', dolar);

function dolar() {
    const usdD = parseInt(inputDolar.value);
    const dinarRSD = usdD/rsd;
    const euroE = usdD/eur;    
    const chfSwiss = usdD/chf;
    setOutput(dinarRSD, euroE, usdD, chfSwiss);
}

inputFranak.addEventListener('input', franak);

function franak() {
    const chfSwiss = parseInt(inputFranak.value);
    const dinarRSD = chfSwiss/rsd;
    const euroE = chfSwiss/eur;
    const usdD = chfSwiss/usd;    
    setOutput(dinarRSD, euroE, usdD, chfSwiss);
}

function setOutput(rsd, eur, usd, chf) {
    inputDinar.value = rsd;
    inputEuro.value = eur.toFixed(4);
    inputDolar.value = usd.toFixed(4);
    inputFranak.value = chf.toFixed(4);
}

$(document).ready(function() {
    let mydata = JSON.parse(data);
    console.log(mydata);
});



