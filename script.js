class Valuta {
    constructor(oznakaValute, sifraValute, nazivZemlje, vaziZa, srednjiKurs) {
        this.oznakaValute = oznakaValute;
        this.sifraValute = sifraValute;
        this.nazivZemlje = nazivZemlje;
        this.vaziZa = vaziZa;
        this.srednjiKurs = srednjiKurs;
    }
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

let mydata = JSON.parse(data);
let valute = mydata.map(valuta => new Valuta(valuta["oznakaValute"], valuta["sifraValute"], valuta["nazivZemlje"], valuta["vaziZa"], valuta["srednjiKurs"]));
console.log(valute);

<<<<<<< HEAD
let listaSrednjihKurseva = []; //Empty arrey populate
console.log(listaSrednjihKurseva);

mydata.forEach(function(data) {
    let sKurs = new Valuta(data["oznakaValute"], data["sifraValute"], data["nazivZemlje"], data["vaziZa"], data["srednjiKurs"]);
    console.log(sKurs);
    listaSrednjihKurseva.push(sKurs);
});
=======
var calcRsd = debounce(function(){
    console.log("calcRsd");
    const dinarRSD = Number(inputDinar.value);
    const euroE = dinarRSD/eur;
    const usdD = dinarRSD/usd;
    const chfSwiss = dinarRSD/chf;
    setOutput(dinarRSD, euroE, usdD, chfSwiss);
}, 250);

inputDinar.addEventListener('input', calcRsd);

// function dinar() {
//     console.log("dinar");
//     const dinarRSD = parseInt(inputDinar.value);
//     const euroE = dinarRSD/eur;
//     const usdD = dinarRSD/usd;
//     const chfSwiss = dinarRSD/chf;
//     setOutput(dinarRSD, euroE, usdD, chfSwiss);
// }
>>>>>>> 6bdb282f1803e640d8ab8c8146e5db94626f0d4a

let eur = valute.find(v => v.sifraValute === 978);
let usd = valute.find(v => v.sifraValute === 840);
let chf = valute.find(v => v.sifraValute === 756);

function dinarConverter(value) {
    document.converter.euro.value = Number(value / eur.srednjiKurs).toFixed(4);
    document.converter.dolar.value = Number(value / usd.srednjiKurs).toFixed(4);
    document.converter.franak.value = Number(value / chf.srednjiKurs).toFixed(4);
}

function euroConverter(value) {
    document.converter.dinar.value = Number(value * eur.srednjiKurs).toFixed(4);
    document.converter.dolar.value = Number(value * (eur.srednjiKurs / usd.srednjiKurs)).toFixed(4);
    document.converter.franak.value = Number(value * (eur.srednjiKurs / chf.srednjiKurs)).toFixed(4);
}

function dolarConverter(value) {
    document.converter.dinar.value = Number(value * usd.srednjiKurs).toFixed(4);
    document.converter.euro.value = Number(value * (usd.srednjiKurs / eur.srednjiKurs)).toFixed(4);
    document.converter.franak.value = Number(value * (usd.srednjiKurs / chf.srednjiKurs)).toFixed(4);
}

function franakConverter(value) {
    document.converter.dinar.value = Number(value * chf.srednjiKurs).toFixed(4);
    document.converter.euro.value = Number(value * (chf.srednjiKurs / eur.srednjiKurs)).toFixed(4);
    document.converter.dolar.value = Number(value * (chf.srednjiKurs / usd.srednjiKurs)).toFixed(4);
}

function Reset() {
    document.getElementById("myForm").reset();
}