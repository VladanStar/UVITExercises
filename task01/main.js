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

while (podsetnik.length != 0) {
    