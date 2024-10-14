// raccolta dati
const userKmNumber = parseInt(
  prompt("Inserisci il numero di km che desideri percorrere")
);
console.log(typeof userKmNumber, userKmNumber);

const userPassengerAge = parseInt(prompt("Inserisci l'età del passeggero"));
console.log(typeof userPassengerAge, userPassengerAge);

// elaborazione

let outputPrice;

const ticketPrice = userKmNumber * 0.21;
console.log(typeof ticketPrice, ticketPrice);

if (userPassengerAge <= 18) {
  // minors discount
  let minorDiscountPrice = ticketPrice - (ticketPrice * 20) / 100;
  outputPrice = minorDiscountPrice.toFixed(2);
  console.log(minorDiscountPrice, outputPrice);
} else if (userPassengerAge >= 65) {
  // senior discount
  let seniorDiscountPrice = ticketPrice - (ticketPrice * 40) / 100;
  outputPrice = seniorDiscountPrice.toFixed(2);
  console.log(seniorDiscountPrice, outputPrice);
} else {
  // no discount
  outputPrice = ticketPrice.toFixed(2);
  console.log(ticketPrice);
}

// output

alert(
  "Il prezzo del tuo biglietto è " + outputPrice + "€ " + "Buon viaggio! 🚅"
);
