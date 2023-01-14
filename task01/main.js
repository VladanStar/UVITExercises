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