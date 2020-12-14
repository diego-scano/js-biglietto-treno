var output = document.getElementById('container');
var userNumber = prompt('Scegli un numero da 1 a 5. Se coincide con il numero che sceglierà il PC in modo casuale, vincerai una bella somma!');
var min = 1;
var max = 5;
var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);

if (userNumber < 1 || userNumber > 5) {
  alert('Errore: devi inserire un numero compreso tra 1 e 5');
} else if (isNaN(userNumber)) {
  alert('Errore: devi inserire ESCLUSIVAMENTE un numero compreso tra 1 e 5');
} else {

  userNumber = parseInt(userNumber);

  output.innerText = 'Il tuo numero: ' + userNumber + '\nIl numero del PC: ' + pcNumber;

  if (userNumber === pcNumber) {
    output.append('\n\nComplimenti! Hai vinto 50.000 €!');
  } else {
    output.append('\n\nNon hai vinto. Ritenta!');
  }

}
