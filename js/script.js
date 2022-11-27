let km = parseInt('numero dei km');
let eta = parseInt('numero eta');
let prezzo = km * 0.21;
if(eta < 18){
    price = price - ((price/100) * 20);
    console.log('l"eta è inferiore a 18 anni')
}
else if(eta > 65){
    price = price - ((price/100) * 40);
    console.log('l"eta è inferiore a 65 anni')
}
else{
    console.log('eta normale')
}

document.getElementById('prezzo').innerHTML = 'il tuo prezzo è' + " " + price.toFixed(2)