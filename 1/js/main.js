// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bycicleList = [

    {
        nome: "royal-1",
        peso: 15

    },
    {
        nome: "royal-2",
        peso: 10

    },
    {
        nome: "royal-3",
        peso: 6

    },
    {
        nome: "royal-4",
        peso: 8

    },
    {
        nome: "royal-5",
        peso: 3

    }

];

// const {nome, peso} = bycicleList;
// console.log(nome ,peso);

let pesoList =[];
let min;
let lightestBycicle = {};

bycicleList.forEach((peso, index,) => {
    pesoList.push(bycicleList[index].peso);
    if (min === bycicleList[index].peso){
        lightestBycicle = bycicleList[index];
    }

});
min = Math.min(...pesoList);
console.log(min);
console.log(pesoList);
console.log(lightestBycicle);








// const lightestBycicle = bycicleList.filter((bycicleList) => {})

// const students = {
//     name: 'Paolo',
//     age: 30,
//     email:'paolo@email.it',
// };

// const {name, email} = students;

// console.log(name ,email);