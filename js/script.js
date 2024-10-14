// raccolta dati
const userKmNumber = parseInt(
  prompt("Inserisci il numero di km che desideri percorrere")
);
console.log(typeof userKmNumber, userKmNumber);

const userPassengerAge = parseInt(prompt("Inserisci l'età del passeggero"));
console.log(typeof userPassengerAge, userPassengerAge);

// elaborazione

const ticketPrice = userKmNumber * 0.21;
console.log(typeof ticketPrice, ticketPrice);

if (userPassengerAge <= 18) {
  let minorDiscountPrice = ticketPrice - (ticketPrice * 20) / 100;
  console.log(minorDiscountPrice);
} else if (userPassengerAge >= 65) {
  let seniorDiscountPrice = ticketPrice - (ticketPrice * 40) / 100;
  console.log(seniorDiscountPrice);
}

// output
