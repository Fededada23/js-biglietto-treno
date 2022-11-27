let km = parseInt(prompt('numero dei km'));
let eta = parseInt(prompt('numero eta'));
let prezzo = km * 0.21;
if(eta < 18){
    prezzo = prezzo - ((prezzo/100) * 20);
    console.log('l"eta è inferiore a 18 anni')
}
else if(eta > 65){
    prezzo = prezzo - ((prezzo/100) * 40);
    console.log('l"eta è superiore a 65 anni')
}
else{
    console.log('eta normale')
}

document.getElementById('prezzo').innerHTML = 'il tuo prezzo è ' + '' + prezzo.toFixed(2)