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

// deklaracija i postavljanje vrednosti
console.log('---');
let osoba1 = 'Драгослав';
let osoba2 = 'Драгослав';
// u ovom trenutku promenljive osoba1 i osoba2 imaju istu vrednost
console.log(osoba1);
console.log(osoba2);

// promena vrednosti promenljive osoba1 ne utice na osoba2
console.log('---');
osoba1 = 'Павле';
console.log(osoba1);
console.log(osoba2);

// promena vrednosti promenljive osoba2 ne utice na osoba1
console.log('---');
osoba2 = 'Никола';
console.log(osoba1);
console.log(osoba2);

// postavljenje vrednosti
console.log('---');
osoba1 = 'Драгослав';
osoba2 = osoba1;
console.log(osoba1);
console.log(osoba2);

// promena vrednosti promenljive osoba1 ne utice na osoba2
console.log('---');
osoba1 = 'Павле';
console.log(osoba1);
console.log(osoba2);