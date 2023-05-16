// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const footballTeams = [

    {
        nome: "servolana",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "chiarbola",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "ponziana",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

function randomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};
    
console.log(randomNumberGenerator(10));


// for (let i = 0; i < footballTeams.length, i++;){
//     footballTeams[i].puntiFatti = randomNumberGenerator(10);
//     console.log(footballTeams[i].puntiFatti);
    
// };
let element;

footballTeams.forEach((element, index) => {
    footballTeams[index].puntiFatti = randomNumberGenerator(10);
    footballTeams[index].falliSubiti = randomNumberGenerator(10);
    console.log(footballTeams[index].puntiFatti);
    console.log(footballTeams[index].falliSubiti);
   

});

console.log(footballTeams);
const newTeamsStats = [];

for (let i = 0; i < footballTeams.length; i++){
    const thisTeam = footballTeams[i];

    const {nome, falliSubiti} = thisTeam;

    newTeamsStats.push({
        nome, 
        falliSubiti
    });
}


console.log(newTeamsStats);
