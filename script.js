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
    const euroE = rsd/eur;
    const usdD = rsd/usd;
    const chfSwiss = rsd/chf;
    inputEuro.value = euroE.toFixed(4);
    inputDolar.value = usdD.toFixed(4);
    inputFranak.value = chfSwiss.toFixed(4);
}

inputEuro.addEventListener('input', euro);

function euro() {
    const dinarRSD = eur/rsd;
    const usdD = eur/usd;
    const chfSwiss = eur/chf;
    inputDinar.value = dinarRSD.toFixed(4);
    inputDolar.value = usdD.toFixed(4);
    inputFranak.value = chfSwiss.toFixed(4);
}

inputDolar.addEventListener('input', dolar);

function dolar() {
    const dinarRSD = usd/rsd;
    const euroE = usd/eur;
    const chfSwiss = usd/chf;
    inputDinar.value = dinarRSD.toFixed(4);
    inputEuro.value = euroE.toFixed(4);
    inputFranak.value = chfSwiss.toFixed(4);
}

inputFranak.addEventListener('input', franak);

function franak() {
    const dinarRSD = chf/rsd;
    const euroE = chf/eur;
    const usdD = chf/usd;
    inputDinar.value = dinarRSD.toFixed(4);
    inputEuro.value = euroE.toFixed(4);
    inputDolar.value = usdD.toFixed(4);
}

$(document).ready(function() {
    let mydata = JSON.parse(data);
    console.log(mydata);
});



