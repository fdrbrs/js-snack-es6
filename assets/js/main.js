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
console.log(bicileggera);

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

console.log(squadre);

let [squ1, squ2, squ3, squ4, squ5] = squadre;



