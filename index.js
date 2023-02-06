let person = {
    name: "Miki Maus",
    born: 1980,
    father: "Volt Dizni"
};

let niska = JSON.stringify(person);

console.log(niska);

let family = [
    {
        "name": "Emma de Milliano", "sex": "f",
        "born": 1876, "died": 1956,
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Carolus Haverbeke", "sex": "m",
        "born": 1832, "died": 1905,
        "father": "Carel Haverbeke",
        "mother": "Maria van Brussel"
    }
];

let niska1 = JSON.stringify(family);
console.log(niska1);

let nizBrojeva = [1, 2, 3, 4, "mika", "zika"];

function zaSvaki(niz, akcija) {
    for (let x of niz) akcija(x);
}

prikazNaKonzolu = function (x) {
    console.log(x);
};
zaSvaki(nizBrojeva, prikazNaKonzolu);
console.log("---");

prikazNaKonzolu2 = (x) => console.log(x);
zaSvaki(nizBrojeva, prikazNaKonzolu2);
console.log("---");

zaSvaki(nizBrojeva, function (x) {
    console.log(x);
});
console.log("---");

zaSvaki(nizBrojeva, (x) => console.log(x));