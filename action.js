// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli
//  di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Esattamente quelle devono essere le stringhe di output.
// *NOTE=* fate output in console -
// poi se vi sentite di andar oltre fate l’output in una ul,
//  come abbiamo visto nuovamente stamattina
//  (ovviamente nell’ul van sempre dei <li>) su altra versione
//  (quindi altra sottocartella).

// Mi stabilisco le variabili

var stampa, stampain;

stampa = document.getElementById('my');



// Faccio il ciclo for
// Faccio la stampa in ul


for (i = 1; i < 101; i++) {
  // console.log(i);
  stampain = stampa.innerHTML;
  // Faccio le causali
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
    stampa.innerHTML = stampain + "<li>" + "FizzBuzz" + "</li>";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    stampa.innerHTML = stampain + "<li>" + "Buzz" + "</li>";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    stampa.innerHTML = stampain + "<li>" + "Fizz" + "</li>";
  } else {
    console.log(i);
    stampa.innerHTML = stampain + "<li>" + i + "</li>";
  }
}
