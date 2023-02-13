// function prikaziNisku(niska, povratniPoziv) {
//     setTimeout(
//         () => {
//             console.log(niska);
//             povratniPoziv();
//         },
//         Math.floor(Math.random() * 50) + 1
//     );
// }

// function prikaziSve() {
//     prikaziNisku("А", () => {});
//     prikaziNisku("Б", () => {});
//     prikaziNisku("В", () => prikaziNisku("Г", () => {}));
//     prikaziNisku("Д", () => {});
// }

// prikaziSve();
// function prikaziNisku(niska, povratniPoziv) {
//   setTimeout(() => {
//     console.log(niska);
//     if (typeof povratniPoziv === "function") povratniPoziv();
//   }, Math.floor(Math.random() * 50) + 1);
// }

// function prikaziSveRedom() {
//   prikaziNisku("A", () => {
//     prikaziNisku("Б", () => {
//       prikaziNisku("В", () => {
//         prikaziNisku("Г", () => {
//           prikaziNisku("Д");
//         });
//       });
//     });
//   });
// }

// prikaziSveRedom();

// function prikaziNisku(niska) {
//     return new Promise((razresi, odbij) => {
//         setTimeout(
//             () => {
//                 console.log(niska);
//                 razresi();
//             },
//             Math.floor(Math.random() * 50) + 1
//         );
//     });
// }

// function prikaziSve() {
//     prikaziNisku("A");
//     prikaziNisku("Б");
//     prikaziNisku("В");
//     prikaziNisku("Г");
//     prikaziNisku("Д");
// }

// prikaziSve();

// function asinhronaFunkcija() {
//     return new Promise(function (resolve, reject) {
//             //...kod za asinhronu operaciju...

//             if (true) {
//                resolve(result_value);
//             } else {
//                reject(error);
//             }
//         }
//     );
// }


// function prikaziNisku(niska) {
//     return new Promise((razresi, odbij) => {
//         setTimeout(
//             () => {
//                 console.log(niska);
//                 razresi();
//             },
//             Math.floor(Math.random() * 50) + 1
//         );
//     });
// }

// function prikaziTriRedom() {
//     prikaziNisku("А")
//         .then(() => {
//             return prikaziNisku("Б");
//         })
//         .then(() => prikaziNisku("В"));
//     prikaziNisku("Г");
//     prikaziNisku("Д");
// }

// prikaziTriRedom();

function dodajNisku(prethodna, tekuca) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                razresi(prethodna + ' ' + tekuca);
            },
            Math.floor(Math.random() * 50) + 1
        )
    })
}

function dodajSveRedom() {
    dodajNisku('', 'A')
        .then(result => dodajNisku(result, 'Б'))
        .then(result => dodajNisku(result, 'В'))
        .then(result => console.log(result));
}

dodajSveRedom();