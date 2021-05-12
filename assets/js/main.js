/* 
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

let bici = [
    {
        nome: 'Savadeck',
        peso: 9.6
    },
    {
        nome: 'Pinarello',
        peso: 11.2
    },
    {
        nome: 'LRHD',
        peso: 10.9
    },
    {
        nome: 'Atala',
        peso: 9.3
    },
    {
        nome: 'Bianchi',
        peso: 10.3
    },
    
]

let [ , , , bicileggera] = bici;

document.getElementById('bici_leggera').insertAdjacentHTML("beforeend", `
La bici più leggera  è la <strong>${bicileggera.nome}</strong>, che pesa <strong>${bicileggera.peso} kilogrammi

`)

/* 
Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

let squadre = [
    {
        nome: 'Genova',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Empoli',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Chievo',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Palermo',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Cagliari',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    
]

for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random() * 100);
    squadre[i].falliSubiti = Math.floor(Math.random() * 250);
}

let nuovoArray = [];

for (let i = 0; i < squadre.length; i++) {

    let {nome, falliSubiti} = squadre[i];
    nuovoArray.push({nome, falliSubiti});
    console.log(nuovoArray[i]);
    //nuovoArray.push({nome: squadre[i].nome, falliSubiti: squadre[i].falliSubiti});

    
}

/* 
Snack 3:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
:boom: Usiamo i nuovi metodi degli array foreach o filter.
*/

const alfabeto = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];

function fromToArray (array, from, to) {
    let estratto = array.filter((lettera)=> {
        if (array.indexOf(lettera) >= array.indexOf(array[from]) && array.indexOf(lettera) <= array.indexOf(array[to])) {return true;}
        return false;
    });
    return estratto;
}



console.log(fromToArray(alfabeto,3,19));