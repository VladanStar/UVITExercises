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

function prikaziNisku(niska) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                console.log(niska);
                razresi();
            },
            Math.floor(Math.random() * 50) + 1
        );
    });
}

function prikaziSve() {
    prikaziNisku("A");
    prikaziNisku("Б");
    prikaziNisku("В");
    prikaziNisku("Г");
    prikaziNisku("Д");
}

prikaziSve();
