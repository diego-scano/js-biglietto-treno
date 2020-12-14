var output = document.getElementById('container');
var km = prompt('Quanti km devi percorrere?');
var age = prompt('Quanti anni hai?');
var discount;

var price = 0.21 * km;

if (isNaN(km) || isNaN(age)) {
  alert('Errore: inserisci solo numeri');
} else {

  if (age < 18) {
    price = price - (price * 0.2);
    discount = '20%';
  } else if (age > 65) {
    price = price - (price * 0.4);
    discount = '40%';
  } else {
    discount = '0%';
  }

  output.innerText = 'Distanza da percorrere: ' + km + ' km' + '\nEtà: ' + age + ' anni' + '\nSconto applicato: ' + discount + '\n\nIl prezzo del biglietto è: ' + price + ' €';

}
