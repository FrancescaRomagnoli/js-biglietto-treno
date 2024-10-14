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
  console.log("applica sconto 20%");
} else if (userPassengerAge >= 65) {
  console.log("applica sconto 40%");
}

// output
