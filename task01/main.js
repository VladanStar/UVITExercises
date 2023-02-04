console.log("почетак");
for (let i = 0; i < 7; i++) {
    console.log(i);
}
console.log("крај");
console.log(" Trla baba lan,\"\\n\" da joj prođe dan ");
console.log("Trla \
baba lan, \
da joj prođe \
dan ");
console.log(" Trla baba lan,\n da joj prođe dan ");


console.log('Operator ==');
console.log('0 == false <=>', 0 == false);
console.log('42 == \'42\' <=>', 42 == '42');
console.log('1 == "jedan" <=>', 1 == 'jedan');
// Operator === zahteva da vrednosti imaju i isti tip i istu vrednost.
console.log("Operator ===");
console.log("0 === false <=>", 0 === false);
console.log("42 === '42' <=>", 42 === '42');
console.log("1 === 'jedan' <=>", 1 === 'jedan');
console.log("0 === 0 <=>", 0 === 0);
console.log("false === false <=>", false === false);
console.log("'jedan' === \"jedan\" <=>", 'jedan' === "jedan");

// definicija promenljive
let prom = 5 * 5;

// prikaz vrednosti izraza koji sadrži promenljivu
let broj = 10;
console.log(broj * broj);

// promenljiva ne mora imati svo vreme istu vrednost
let raspolozenje = "Srećan \t :)";
console.log(raspolozenje);
raspolozenje = "Tužan \t :(";
console.log(raspolozenje);

// promenljiva se može uvećati i/ili umanjiti
let dug = 200;
dug = dug - 72;
console.log(dug);

// jednom naredbm se mogu definisati dve promenljive
let prva = 1, druga = 2;
console.log(prva + druga);

// // deklaracija i postavljanje vrednosti
// console.log('---');
// let osoba1 = 'Драгослав';
// let osoba2 = 'Драгослав';
// // u ovom trenutku promenljive osoba1 i osoba2 imaju istu vrednost
// console.log(osoba1);
// console.log(osoba2);

// // promena vrednosti promenljive osoba1 ne utice na osoba2
// console.log('---');
// osoba1 = 'Павле';
// console.log(osoba1);
// console.log(osoba2);

// // promena vrednosti promenljive osoba2 ne utice na osoba1
// console.log('---');
// osoba2 = 'Никола';
// console.log(osoba1);
// console.log(osoba2);

// // postavljenje vrednosti
// console.log('---');
// osoba1 = 'Драгослав';
// osoba2 = osoba1;
// console.log(osoba1);
// console.log(osoba2);

// // promena vrednosti promenljive osoba1 ne utice na osoba2
// console.log('---');
// osoba1 = 'Павле';
// console.log(osoba1);
// console.log(osoba2);


// const osoba1 = "Никола";
// console.log(osoba1);

// let osoba2 = osoba1 + "!!!!";
// console.log(osoba2);

// nemoguce - pokusaj postavljanja 
// vrednosti za konstantnu promenljivu
//osoba1 = "Драгослав"

// rad sa promenljivom deklarisanom
// pomocu var
{
    var osoba3 = "Петар";
    console.log(osoba3);
}
console.log(osoba3 + " " + osoba2)

// rad sa promenljivom deklarisanom
// pomocu let
{
    let osoba4 = "Јован"
    console.log(osoba4)
}
// nemoguce - pokusaj pristupa
// promenljvoj van njenog opsega
// definisanosti
console.log(оsoba4 + " " + osoba2)

console.log(123 % 10);
console.log(Infinity == Infinity)
let vladan = "Vladan Cupric";
console.log(vladan.replace("Vladan", "Milan"));

console.log("---");
let x = 0 / (2 - 2);
console.log(x);
console.log(Number.isFinite(x));
console.log(Number.isNaN(x));

console.log("---");
x = 7 / 3;
console.log(x);
console.log(Number.isFinite(x));
console.log(Number.isInteger(x));
console.log(x.toFixed(3));

// specijalna vrednost NaN
console.log(NaN);
console.log(000);

// let x = false;

let y = 3 + x;
console.log(y);

let z = 'Miki' + x;
console.log(z);

console.log('---');
x = true;

y = 3 + x;
console.log(y);

z = 'Miki' + x;
console.log(z);

console.log('---');
x = 0;

y = x ? 'nije nula' : 'nula';
console.log(y);

z = 'Miki' + x;
console.log(z);

console.log('---');
x = 11;

y = x ? 'nije nula' : 'nula';
console.log(y);

z = 'Miki' + x;
console.log(z);

/* automatska konveryija tipova pri izvršenju aritmetičkih operacija */
// prikazaće 0
console.log(8 * null);

// prikazaće 4
console.log('5' - 1);

// prikazaće 51
console.log('5' + 1);

// prikazaće NaN
console.log('pet' * 2);

/* automatska konverzija tipova pri izvršenju operacija poređenja*/
// prikazaće true
console.log(false == 0);

/* poređenje jednakosti za vrednosti null i/ili undefined se realizuje na pomalo specifičan način  */
// prikazaće true
console.log(null == undefined);

// prikazaće false
console.log(null == 0);

/* logički operatori se 'skraćeno' izvršavaju */
// prikazaće Karlo
console.log(undefined || 'Karlo');

// prikazaće Karlo
console.log('Karlo' || 'Korisnik');

console.log(2 != 1 && 4 != 3 &&
    0 == 4 && 2 != 3);

console.log('--- broj 10');
console.log(null > 10);
console.log(null < 10);
console.log(null == 10);

console.log('---');
// zapis vrednosti null
console.log(null);

// poredjenja null sa drugim vrednostima
console.log('--- broj 10');
console.log(null > 10);
console.log(null < 10);
console.log(null == 10);

console.log('--- broj 0');
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);

console.log(`--- niska 'miki'`);
console.log(null > 'miki');
console.log(null < 'miki');
console.log(null == 'miki');

console.log(`--- niska ''`);
console.log(null > '');
console.log(null < '');
console.log(null == '');

console.log(`--- niska '0'`);
console.log(null > '0');
console.log(null < '0');
console.log(null == '0');

console.log('--- logicke vrednosti');
console.log(null == true);
console.log(null != true);
console.log(null == false);
console.log(null != false);

console.log('--- nedostajuce vrednosti');
console.log(null == null);
console.log(null == undefined);

console.log('---')
// zapis vrednosti undefined
console.log(undefined);

// poredjenja undefined sa drugim vrednostima
console.log('--- broj 10');
console.log(undefined > 10);
console.log(undefined < 10);
console.log(undefined == 10);

console.log('--- broj 0');
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

console.log(`--- niska 'miki'`);
console.log(undefined > 'miki');
console.log(undefined < 'miki');
console.log(undefined == 'miki');

console.log(`--- niska ''`);
console.log(undefined > '');
console.log(undefined < '');
console.log(undefined == '');

console.log(`--- niska '0'`);
console.log(undefined > '0');
console.log(undefined < '0');
console.log(undefined == '0');

console.log('--- logicke vrednosti');
console.log(undefined == true);
console.log(undefined != true);
console.log(undefined == false);
console.log(undefined != false);

console.log('--- nedostajuce vrednosti');
console.log(undefined == null);
console.log(undefined == undefined);

console.log((Math.random() - 3) * 6);

console.log(Math.round(Math.random() * 10));

var slucajan = Math.random();
for (var pokusaja = 1; ; pokusaja++) {
    console.log(slucajan);
    if (slucajan < 0.1)
        break;
    slucajan = Math.random();
}
console.log(`Извучен је случајан број ${slucajan} мањи од 0.1 \
    из покушаја бр. ${pokusaja}`);

const osoba1 = "Никола";
console.log(osoba1);

let osoba2 = osoba1 + "!!!!";
console.log(osoba2);

// nemoguce - pokusaj postavljanja
// vrednosti za konstantnu promenljivu
//osoba1 = "Драгослав"
{
    var osoba3 = "Петар";
    console.log(osoba3);
}
console.log(osoba3 + " " + osoba2)
// rad sa promenljivom deklarisanom
// pomocu let
{
    let osoba4 = "Јован"
    console.log(osoba4)
}
// nemoguce - pokusaj pristupa
// promenljvoj van njenog opsega
// definisanosti

console.log('--- logicke vrednosti');
console.log(undefined == true);
console.log(undefined != true);
console.log(undefined == false);
console.log(undefined != false);

console.log(`--- niska ''`);
console.log(undefined > '');
console.log(undefined < '');
console.log(undefined == '');

console.log(`--- niska '0'`);
console.log(undefined > '0');
console.log(undefined < '0');
console.log(undefined == '0');

console.log('--- broj 0');
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

console.log(`--- niska 'miki'`);
console.log(undefined > 'miki');
console.log(undefined < 'miki');
console.log(undefined == 'miki');

console.log('--- nedostajuce vrednosti');
console.log(null == null);
console.log(null == undefined);

console.log('---')
// zapis vrednosti undefined
console.log(undefined);

// poredjenja undefined sa drugim vrednostima
console.log('--- broj 10');
console.log(undefined > 10);
console.log(undefined < 10);
console.log(undefined == 10);

console.log('---');
// zapis vrednosti null
console.log(null);

// poredjenja null sa drugim vrednostima
console.log('--- broj 10');
console.log(null > 10);
console.log(null < 10);
console.log(null == 10);

console.log('--- broj 0');
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);

console.log(`--- niska 'miki'`);
console.log(null > 'miki');
console.log(null < 'miki');
console.log(null == 'miki');

console.log(`--- niska ''`);
console.log(null > '');
console.log(null < '');
console.log(null == '');

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
const buka = function () {
    console.log(" Tras !");
};

buka();
buka();
// broj argumenata sa moze raylikovati od broja parametara
buka("Petar");

const triArgumenta = function (a, b, c) {
    console.log('---\n' + a);
    console.log(b);
    console.log(c);
};

triArgumenta(1, 2, 'tri');
triArgumenta(1, 2);
triArgumenta(1);
triArgumenta();

const stepen = function (osnova = 10, izlozilac = 2) {
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(3, 4));
console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen());

let test = "globalna vrednost";
function testirajOpsegDefinisanosti() {
    test = "lokalna vrednost";
    console.log(test);
}
console.log(test);
testirajOpsegDefinisanosti();
console.log(test);


console.log('---');
// parametri i opsezi
let x = 'van';
const f1 = function () {
    let x = 'unutar f1';
    console.log(x);
    // prikazaće: unutar f1
};
f1();
console.log(x);
// prikazaće: van

console.log('---');
const f2 = function () {
    x = 'unutar f2';
    console.log(x);
    // prikazaće: unutar f2
};
f2();
console.log(x);
// prikazaće: unutar f2

function stepen(osnova, izlozilac) {
    if (izlozilac == 0)
        return 1;
    return osnova * stepen(osnova, izlozilac - 1);
}

console.log(stepen(3, 4));
let buka = function() {
    console.log(" Tras !");
};

buka();
buka();
// broj argumenata moze biti veci
// od broja parametara funkcije
buka("Petar");

const stepen = function (osnova, izlozilac) {
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(3, 4));
console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen());



let stepen = function (osnova, izlozilac) {
    if (osnova == undefined)
        osnova = 10;
    if (izlozilac == undefined)
        izlozilac = 2;
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(3, 4));
console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen());


console.log('---');
// parametri i opsezi
let x = 'van';
const f1 = function () {
    let x = 'unutar f1';
    console.log(x);
    // prikazaće: unutar f1
};
f1();
console.log(x);
// prikazaće: van

console.log('---');
const f2 = function () {
    x = 'unutar f2';
    console.log(x);
    // prikazaće: unutar f2
};
f2();
console.log(x);
// prikazaće: unutar f2

console.log("buducnost vraće:", buducnost());

function buducnost() {
    return "Još uvek ne postoje leteći automobili";
};


console.log(x);
let x = 5;

console.log(x);
var x = 5;

console.log(x);
x = 5;

console.log("buducnost vraće:", buducnost());

function buducnost() {
    return "Još uvek ne postoje leteći automobili";
};
test();

var test = function () {
    console.log("prikaz iz funkcijskog izraza");
};

test();

function test() {
    console.log("prikaz iz deklarisane funkcije");
};

test();


let object1 = {
    value: 10
};

let object2 = object1;

let object3 = {
    value: 10
};

console.log(object1 == object2);
// Prikazuje true

console.log(object1 == object3);
// Prikazuje false

object1.value = 15;
console.log(object2.value);
// Prikazuje 15

object2.value = 17;
console.log(object1.value);
// Prikazuje 17

console.log(object3.value);
// Prikazuje 10

// vrednosti null i undefined ne poseduju osobine
// pokusaj pristupa ma kojoj njihovoj osobini dovodi do greske u izvrsavanju
console.log(null.length);
console.log(null.duzina);
console.log(undefined.length);
console.log(undefined.duzina);

let obj = {
    rad: "Odlazak na posao",
    drvo: "Grljenje drveća",
    pica: "Jedenje pice",
    trcanje: "Trčanje kroz park",
    televizija: "Gledanje televizije"
};

for (let osobina in obj)
    console.log(`${osobina} - ${obj[osobina]}`);

console.log("---");

obj = {
    ime: "Miki",
    length: 4
};

for (let osobina in obj)
    console.log(`${osobina} - ${obj[osobina]}`);

    let  object1 = {
    value: 10
};

let object2 = object1;

let object3 = {
    value: 10
};

console.log(object1 == object2);
// Prikazuje true

console.log(object1 == object3);
// Prikazuje false

object1.value = 15;
console.log(object2.value);
// Prikazuje 15

object2.value = 17;
console.log(object1.value);
// Prikazuje 17

console.log(object3.value);
// Prikazuje 10

let rabbit = {};
rabbit.name = "Душко Дугоушко";
rabbit.speak = function(tekst) {
    console.log("Зека каже: '" + tekst + "'");
};

console.log(rabbit.name);

rabbit.speak("Који ти је враг, шефе?");

let x = rabbit.name;
rabbit.name = rabbit.speak;/rabbit.speak = x;
rabbit.name("Проба! 1,2,3...");


let tacka1 = {
    xKoordinata: 1.3,
    yKoordinata: 2.8,
    pojaviSe: ()=> console.log('ja sam tacka 1')
};

// prikaz osobina objekta
console.log(tacka1.xKoordinata);
console.log(tacka1["yKoordinata"]);

// poziva metod
tacka1.pojaviSe();

// provera da li je osobina sadržana u objektu
console.log("xKoordinata" in tacka1);
// provera da li je metod sadržan u objektu
console.log("pojaviSe" in tacka1);

// redefinisanje metoda
tacka1.pojaviSe = (x,y) => console.log(`ja sam tacka 1(${x}, ${y})`); 

// poziv redefinisanog metoda
tacka1.pojaviSe(tacka1.xKoordinata, tacka1.yKoordinata);
// poziv redefinisanog metoda
tacka1.pojaviSe();

// uklanjanje osobine objekta
delete tacka1.xKoordinata;
// pokusaj pristupanja uklonjenoj osobini
console.log(tacka1.xKoordinata);

// provera da li je osobina sadržana u objektu
console.log("xKoordinata" in tacka1);

// uklanjanje metode objekta
delete tacka1.pojaviSe;

// pokusaj poziva uklonjenog metoda dovodo do greske u izvrsavanju
tacka1.pojaviSe();


let niz = [1, 3, "Mika", "pera", false];

console.log("---");
for (let i = 0; i < niz.length; i++)
   console.log(niz[i]);

console.log("---");
for (let i in niz)
   console.log(niz[i]);

console.log("---");
for (let x of niz)
   console.log(x);



   let poruka = [];

poruka.push("nema");
poruka.push("povlačenja","nema");
poruka.push("predaje", 2 );

console.log(poruka);

console.log(poruka.join(" "));

console.log(poruka.join("+"));

console.log(poruka.pop());

poruka.pop()

console.log(poruka);


var podsetnik = [];

function podsetiMe(zadatak) {
    podsetnik.push(zadatak);
}

function staJeSledece() {
    return podsetnik.shift();
}

function hitnoMePodseti(zadatak) {
    podsetnik.unshift(zadatak);
}


podsetiMe("priprema slajdova za predavanja");
podsetiMe("priprema zadataka");
hitnoMePodseti("odgovoriti na pisma");
podsetiMe("kupovina knjige");


let sumaBrojeva = function () {
    let ret = 0.0;
    for (let i in arguments) {
        let elem = Number(arguments[i]);
        if (!isNaN(elem))
            ret += elem;
    }
    return ret;
}

console.log(sumaBrojeva(1, 2, 3));
console.log(sumaBrojeva(1, 2, 3, [1,2]));
console.log(sumaBrojeva(1, 2, 3, [1]));
console.log(sumaBrojeva("Miki", "1", 2, "100.5", 3));

let nizBrojeva = [1, 2, 3, "mika", "zika";

function prikaziSvaki(niz) {
    for (let i = 0; i < niz.length; i++)
        console.log(niz[i]);
}

prikaziSvaki(nizBrojeva);


function filter(array, test) {
    let rez = [];
    for (let i = 0; i < array.length; i++) {
      if (test(array[i])) rez.push(array[i]);
    }
    return rez;
  }
  
  var opis = `[{"name":"Emma de Milliano","sex":"f",
  "born":1876,"died":1956,
  "father":"Petrus de Milliano","
  mother":"Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", 
  "born": 1683, "died": 1724, 
  "father": "Frederik de Rycke", "
  mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", 
  "born": 1714, "died": 1748, 
  "father": "Jacobus van Brussel", 
  "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", 
  "born": 1907, "died": 1997, 
  "father": "Emile Haverbeke", 
  "mother": "Emma de Milliano"}, 
  {"name": "Jan Frans van Brussel", "sex": "m", 
  "born": 1761, "died": 1833, 
  "father": "Jacobus Bernardus van Brussel", 
  "mother":null}, 
  {"name": "Pauwels van Haverbeke", "sex": "m", 
  "born": 1535, "died": 1582, 
  "father": "N. van Haverbeke", 
  "mother":null}, 
  {"name": "Clara Aernoudts", "sex": "f", 
  "born": 1918, "died": 2012, 
  "father": "Henry Aernoudts", 
  "mother": "Sidonie Coene"}, 
  {"name": "Emile Haverbeke", "sex": "m", 
  "born": 1877, "died": 1968, 
  "father": "Carolus Haverbeke", 
  "mother": "Maria Sturm"}, 
  {"name": "Lieven de Causmaecker", "sex": "m", 
  "born": 1696, "died": 1724, 
  "father": "Carel de Causmaecker", 
  "mother": "Joanna Claes"}, 
  {"name": "Pieter Haverbeke", "sex": "m", 
  "born": 1602, "died": 1642, 
  "father": "Lieven van Haverbeke", 
  "mother":null}, 
  {"name": "Livina Haverbeke", "sex": "f", 
  "born": 1692, "died": 1743, 
  "father": "Daniel Haverbeke", 
  "mother": "Joanna de Pape"}, 
  {"name": "Pieter Bernard Haverbeke", "sex": "m",
   "born": 1695, "died": 1762, 
   "father": "Willem Haverbeke", 
   "mother": "Petronella Wauters"}, 
  {"name": "Lieven van Haverbeke", "sex": "m", 
  "born": 1570, "died": 1636, 
  "father": "Pauwels van Haverbeke", 
  "mother": "Lievijne Jans"}, 
  {"name": "Joanna de Causmaecker", "sex": "f", 
  "born": 1762, "died": 1807, 
  "father": "Bernardus de Causmaecker", 
  "mother":null}, 
  {"name": "Willem Haverbeke", "sex": "m", 
  "born": 1668, "died": 1731, 
  "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}, 
  {"name": "Pieter Antone Haverbeke", "sex": "m", 
  "born": 1753, "died": 1798, 
  "father": "Jan Francies Haverbeke", 
  "mother": "Petronella de Decker"}, 
  {"name": "Maria van Brussel", "sex": "f", 
  "born": 1801, "died": 1834, 
  "father": "Jan Frans van Brussel", 
  "mother": "Joanna de Causmaecker"}, 
  {"name": "Angela Haverbeke", "sex": "f", 
  "born": 1728, "died": 1734, 
  "father": "Pieter Bernard Haverbeke", 
  "mother": "Livina de Vrieze"}, 
  {"name": "Elisabeth Haverbeke", "sex": "f", 
  "born": 1711, "died": 1754, 
  "father": "Jan Haverbeke", 
  "mother": "Maria de Rycke"}, 
  {"name": "Lievijne Jans", "sex": "f", 
  "born": 1542, "died": 1582, 
  "father":null, "mother":null}, 
  {"name": "Bernardus de Causmaecker", "sex": "m", 
  "born": 1721, "died": 1789, 
  "father": "Lieven de Causmaecker", 
  "mother": "Livina Haverbeke"}, 
  {"name": "Jacoba Lammens", "sex": "f", 
  "born": 1699, "died": 1740, 
  "father": "Lieven Lammens", 
  "mother": "Livina de Vrieze"}, 
  {"name": "Pieter de Decker", "sex": "m", 
  "born": 1705, "died": 1780, 
  "father": "Joos de Decker", 
  "mother": "Petronella van de Steene"}, 
  {"name": "Joanna de Pape", "sex": "f", 
  "born": 1654, "died": 1723, 
  "father": "Vincent de Pape", 
  "mother": "Petronella Wauters"}, 
  {"name": "Daniel Haverbeke", "sex": "m", 
  "born": 1652, "died": 1723, 
  "father": "Lieven Haverbeke", 
  "mother": "Elisabeth Hercke"}, 
  {\"name\": \"Lieven Haverbeke\", \"sex\": \"m\", 
  \"born\": 1631, \"died\": 1676, 
  \"father\": \"Pieter Haverbeke\", 
  \"mother\": \"Anna van Hecke\"},
  {"name":"Carolus Haverbeke","sex":"m",
  "born":1832,"died":1905,
  "father":"Carel Haverbeke",
  "mother":"Maria van Brussel"}]`;
  
  let family = JSON.parse(opis);
  
  // prikaz ljudi rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    filter(family, function (person) {
      return person.born > 1900 && person.born < 1925;
    })
  );
  
  // prikaz ljudi rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    filter(family, (person) => person.born > 1900 && person.born < 1925)
  );
  
  // prikaz rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(family.filter((x) => x.born > 1900 && x.born < 1925));
  
  // prikaz muskaraca rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    filter(family, function (person) {
      return person.sex == "m" && person.born > 1900 && person.born < 1925;
    })
  );
  
  // prikaz muskaraca rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    family.filter(
      (person) => person.sex == "m" && person.born > 1900 && person.born < 1925
    )
  );
  
  // prikaz muskaraca rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    family
      .filter((person) => person.sex == "m")
      .filter(person.born > 1900 && person.born < 1925)
      );
let arr =[1,2,3,4,5,6,7,8,9,]
      function maxNumber(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return max;
      }
      console.log(maxNumber(arr));

      function filter(array, test) {
  let rez = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) rez.push(array[i]);
  }
  return rez;
}

var opis = `[{"name":"Emma de Milliano","sex":"f",
"born":1876,"died":1956,
"father":"Petrus de Milliano","
mother":"Sophia van Damme"},
{"name": "Maria de Rycke", "sex": "f", 
"born": 1683, "died": 1724, 
"father": "Frederik de Rycke", "
mother": "Laurentia van Vlaenderen"},
{"name": "Jan van Brussel", "sex": "m", 
"born": 1714, "died": 1748, 
"father": "Jacobus van Brussel", 
"mother": "Joanna van Rooten"},
{"name": "Philibert Haverbeke", "sex": "m", 
"born": 1907, "died": 1997, 
"father": "Emile Haverbeke", 
"mother": "Emma de Milliano"}, 
{"name": "Jan Frans van Brussel", "sex": "m", 
"born": 1761, "died": 1833, 
"father": "Jacobus Bernardus van Brussel", 
"mother":null}, 
{"name": "Pauwels van Haverbeke", "sex": "m", 
"born": 1535, "died": 1582, 
"father": "N. van Haverbeke", 
"mother":null}, 
{"name": "Clara Aernoudts", "sex": "f", 
"born": 1918, "died": 2012, 
"father": "Henry Aernoudts", 
"mother": "Sidonie Coene"}, 
{"name": "Emile Haverbeke", "sex": "m", 
"born": 1877, "died": 1968, 
"father": "Carolus Haverbeke", 
"mother": "Maria Sturm"}, 
{"name": "Lieven de Causmaecker", "sex": "m", 
"born": 1696, "died": 1724, 
"father": "Carel de Causmaecker", 
"mother": "Joanna Claes"}, 
{"name": "Pieter Haverbeke", "sex": "m", 
"born": 1602, "died": 1642, 
"father": "Lieven van Haverbeke", 
"mother":null}, 
{"name": "Livina Haverbeke", "sex": "f", 
"born": 1692, "died": 1743, 
"father": "Daniel Haverbeke", 
"mother": "Joanna de Pape"}, 
{"name": "Pieter Bernard Haverbeke", "sex": "m",
 "born": 1695, "died": 1762, 
 "father": "Willem Haverbeke", 
 "mother": "Petronella Wauters"}, 
{"name": "Lieven van Haverbeke", "sex": "m", 
"born": 1570, "died": 1636, 
"father": "Pauwels van Haverbeke", 
"mother": "Lievijne Jans"}, 
{"name": "Joanna de Causmaecker", "sex": "f", 
"born": 1762, "died": 1807, 
"father": "Bernardus de Causmaecker", 
"mother":null}, 
{"name": "Willem Haverbeke", "sex": "m", 
"born": 1668, "died": 1731, 
"father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}, 
{"name": "Pieter Antone Haverbeke", "sex": "m", 
"born": 1753, "died": 1798, 
"father": "Jan Francies Haverbeke", 
"mother": "Petronella de Decker"}, 
{"name": "Maria van Brussel", "sex": "f", 
"born": 1801, "died": 1834, 
"father": "Jan Frans van Brussel", 
"mother": "Joanna de Causmaecker"}, 
{"name": "Angela Haverbeke", "sex": "f", 
"born": 1728, "died": 1734, 
"father": "Pieter Bernard Haverbeke", 
"mother": "Livina de Vrieze"}, 
{"name": "Elisabeth Haverbeke", "sex": "f", 
"born": 1711, "died": 1754, 
"father": "Jan Haverbeke", 
"mother": "Maria de Rycke"}, 
{"name": "Lievijne Jans", "sex": "f", 
"born": 1542, "died": 1582, 
"father":null, "mother":null}, 
{"name": "Bernardus de Causmaecker", "sex": "m", 
"born": 1721, "died": 1789, 
"father": "Lieven de Causmaecker", 
"mother": "Livina Haverbeke"}, 
{"name": "Jacoba Lammens", "sex": "f", 
"born": 1699, "died": 1740, 
"father": "Lieven Lammens", 
"mother": "Livina de Vrieze"}, 
{"name": "Pieter de Decker", "sex": "m", 
"born": 1705, "died": 1780, 
"father": "Joos de Decker", 
"mother": "Petronella van de Steene"}, 
{"name": "Joanna de Pape", "sex": "f", 
"born": 1654, "died": 1723, 
"father": "Vincent de Pape", 
"mother": "Petronella Wauters"}, 
{"name": "Daniel Haverbeke", "sex": "m", 
"born": 1652, "died": 1723, 
"father": "Lieven Haverbeke", 
"mother": "Elisabeth Hercke"}, 
{\"name\": \"Lieven Haverbeke\", \"sex\": \"m\", 
\"born\": 1631, \"died\": 1676, 
\"father\": \"Pieter Haverbeke\", 
\"mother\": \"Anna van Hecke\"},
{"name":"Carolus Haverbeke","sex":"m",
"born":1832,"died":1905,
"father":"Carel Haverbeke",
"mother":"Maria van Brussel"}]`;

let family = JSON.parse(opis);

// prikaz ljudi rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(
  filter(family, function (person) {
    return person.born > 1900 && person.born < 1925;
  })
);

// prikaz ljudi rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(
  filter(family, (person) => person.born > 1900 && person.born < 1925)
);


function filter(array, test) {
    let rez = [];
    for (let i = 0; i < array.length; i++) {
      if (test(array[i])) rez.push(array[i]);
    }
    return rez;
  }
  
  var opis = `[{"name":"Emma de Milliano","sex":"f",
  "born":1876,"died":1956,
  "father":"Petrus de Milliano","
  mother":"Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", 
  "born": 1683, "died": 1724, 
  "father": "Frederik de Rycke", "
  mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", 
  "born": 1714, "died": 1748, 
  "father": "Jacobus van Brussel", 
  "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", 
  "born": 1907, "died": 1997, 
  "father": "Emile Haverbeke", 
  "mother": "Emma de Milliano"}, 
  {"name": "Jan Frans van Brussel", "sex": "m", 
  "born": 1761, "died": 1833, 
  "father": "Jacobus Bernardus van Brussel", 
  "mother":null}, 
  {"name": "Pauwels van Haverbeke", "sex": "m", 
  "born": 1535, "died": 1582, 
  "father": "N. van Haverbeke", 
  "mother":null}, 
  {"name": "Clara Aernoudts", "sex": "f", 
  "born": 1918, "died": 2012, 
  "father": "Henry Aernoudts", 
  "mother": "Sidonie Coene"}, 
  {"name": "Emile Haverbeke", "sex": "m", 
  "born": 1877, "died": 1968, 
  "father": "Carolus Haverbeke", 
  "mother": "Maria Sturm"}, 
  {"name": "Lieven de Causmaecker", "sex": "m", 
  "born": 1696, "died": 1724, 
  "father": "Carel de Causmaecker", 
  "mother": "Joanna Claes"}, 
  {"name": "Pieter Haverbeke", "sex": "m", 
  "born": 1602, "died": 1642, 
  "father": "Lieven van Haverbeke", 
  "mother":null}, 
  {"name": "Livina Haverbeke", "sex": "f", 
  "born": 1692, "died": 1743, 
  "father": "Daniel Haverbeke", 
  "mother": "Joanna de Pape"}, 
  {"name": "Pieter Bernard Haverbeke", "sex": "m",
   "born": 1695, "died": 1762, 
   "father": "Willem Haverbeke", 
   "mother": "Petronella Wauters"}, 
  {"name": "Lieven van Haverbeke", "sex": "m", 
  "born": 1570, "died": 1636, 
  "father": "Pauwels van Haverbeke", 
  "mother": "Lievijne Jans"}, 
  {"name": "Joanna de Causmaecker", "sex": "f", 
  "born": 1762, "died": 1807, 
  "father": "Bernardus de Causmaecker", 
  "mother":null}, 
  {"name": "Willem Haverbeke", "sex": "m", 
  "born": 1668, "died": 1731, 
  "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}, 
  {"name": "Pieter Antone Haverbeke", "sex": "m", 
  "born": 1753, "died": 1798, 
  "father": "Jan Francies Haverbeke", 
  "mother": "Petronella de Decker"}, 
  {"name": "Maria van Brussel", "sex": "f", 
  "born": 1801, "died": 1834, 
  "father": "Jan Frans van Brussel", 
  "mother": "Joanna de Causmaecker"}, 
  {"name": "Angela Haverbeke", "sex": "f", 
  "born": 1728, "died": 1734, 
  "father": "Pieter Bernard Haverbeke", 
  "mother": "Livina de Vrieze"}, 
  {"name": "Elisabeth Haverbeke", "sex": "f", 
  "born": 1711, "died": 1754, 
  "father": "Jan Haverbeke", 
  "mother": "Maria de Rycke"}, 
  {"name": "Lievijne Jans", "sex": "f", 
  "born": 1542, "died": 1582, 
  "father":null, "mother":null}, 
  {"name": "Bernardus de Causmaecker", "sex": "m", 
  "born": 1721, "died": 1789, 
  "father": "Lieven de Causmaecker", 
  "mother": "Livina Haverbeke"}, 
  {"name": "Jacoba Lammens", "sex": "f", 
  "born": 1699, "died": 1740, 
  "father": "Lieven Lammens", 
  "mother": "Livina de Vrieze"}, 
  {"name": "Pieter de Decker", "sex": "m", 
  "born": 1705, "died": 1780, 
  "father": "Joos de Decker", 
  "mother": "Petronella van de Steene"}, 
  {"name": "Joanna de Pape", "sex": "f", 
  "born": 1654, "died": 1723, 
  "father": "Vincent de Pape", 
  "mother": "Petronella Wauters"}, 
  {"name": "Daniel Haverbeke", "sex": "m", 
  "born": 1652, "died": 1723, 
  "father": "Lieven Haverbeke", 
  "mother": "Elisabeth Hercke"}, 
  {\"name\": \"Lieven Haverbeke\", \"sex\": \"m\", 
  \"born\": 1631, \"died\": 1676, 
  \"father\": \"Pieter Haverbeke\", 
  \"mother\": \"Anna van Hecke\"},
  {"name":"Carolus Haverbeke","sex":"m",
  "born":1832,"died":1905,
  "father":"Carel Haverbeke",
  "mother":"Maria van Brussel"}]`;
  
  let family = JSON.parse(opis);
  
  // prikaz ljudi rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    filter(family, function (person) {
      return person.born > 1900 && person.born < 1925;
    })
  );
  
  // prikaz ljudi rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    filter(family, (person) => person.born > 1900 && person.born < 1925)
  );
  
  // prikaz rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(family.filter((x) => x.born > 1900 && x.born < 1925));
  
  // prikaz muskaraca rodjenih izmedju 1900 i 1925
  console.log(`---`);
  console.log(
    filter(family, function (person) {
      return person.sex == "m" && person.born > 1900 && person.born < 1925;
    })
  );