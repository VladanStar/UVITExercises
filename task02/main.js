console.log("---");
let objekat = "Miki Maus";
console.log(objekat);

let rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: "aaa", 2: 42 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: "aaa", 2: 42, length: 3 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: "aaa", 2: 42, 4: false, length: 3 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: "aaa", 2: 42, 4: false, length: 6 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);

let tackaA = {
    x: 1.3,
    y: 2.8,
    pojaviSe: function() {
        console.log(`ja sam tacka (${this.x},${this.y})`);
    }
};

console.log('---');
tackaA.pojaviSe();

let tackaB = {
    x: -1.3,
    y: -42.0
};

console.log('---');
tackaA.pojaviSe.call(tackaB);

console.log('---');
tackaA.pojaviSe.apply(tackaB);

const bucna = function (f) {
  return function (arg) {
    console.log(`poziv   '${f.name}' sa argumentom , ${arg}`);
    let val = f(arg);
    console.log(`pozvana '${f.name}' sa argumentom`, arg, " - rezultat ", val);
    return val;
  };
};

bucna(Boolean)(0);
bucna(Boolean)(2);
bucna(Math.sin)(Math.PI / 2);
bucna(Math.cos)(Math.PI / 2);