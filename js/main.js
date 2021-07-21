//Snack 1 --------------------------------------------



// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// var num = parseInt(prompt("Inserisci un numero"));

// if (num % 2 == 0)
// {
//     console.log(num);
// }
// else if (num % 2 != 0)
// {
//     console.log(num + 1);
// }



//Snack 2 --------------------------------------------



// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// var nomi = ["Giovanni", "Andrea", "Alessio", "Marco", "Mauro" ];
// var cognomi = ["Rossi", "Verdi", "Esposito", "Gialli", "Neri" ];

// for ( i=0 ; i < 5 ; i++)
// {
//     nomiRandom = Math.floor(Math.random()*nomi.length);
//     cognomiRandom = Math.floor(Math.random()*cognomi.length);
//     console.log((nomi[nomiRandom]) + " " + (cognomi[cognomiRandom]));
// }



//Snack 3 --------------------------------------------



// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// var num = [1,2,3,4,5,6,7,8,9,10];
// var sommaDispari = 0;

// for ( i=0 ; i < num.length ; i++ )
// {
//     if (num[i] % 2 != 0)
//     {
//         sommaDispari += num[i];
//     }
// }

// console.log(sommaDispari);



//Snack 4 --------------------------------------------



// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


var primoContenitore = [1,2,3,4,5,6,7];
var secondoContenitore = [10,20,30,40];

while (primoContenitore.length != secondoContenitore.length) {
    secondoContenitore.push(prompt("Inserisci un qualcosa"));
}


console.log(primoContenitore);
console.log(secondoContenitore);