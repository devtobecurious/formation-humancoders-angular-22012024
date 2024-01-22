console.info('DEBUT FICHIER');

//#region Le this est contextualisé
function Jedi(name) {
    this.name = name;
    console.info('Je suis un jedi', this, this.name);
    console.info('Mon prenom en majuscule', this.name.toUpperCase());
}

Jedi('Luke'); // Window 

const jedi = new Jedi('Leia'); // Jedi
//#region Le js n'est pas typé
// const jedi2 = new Jedi(123); // Le js n'est pas typé !
//#endregion
//#endregion

//#region Asynchrone
// setTimeout(() => {
//     console.info('Apres coup !') ;
// }, 0);
const calbackTimeout = () => console.info('Apres coup !');
setTimeout(calbackTimeout, 0);
//#endregion

//#region Arrow / Lambda
// const callback = () => {
//     console.info('Apres coup, bis!') ;
// }
// const callback = param1 => {
//     console.info('Apres coup, bis!', param1) ;
// }

const callback = param1 => console.info('Apres coup, bis!', param1);
callback(1);
//#endregion

console.info('FIN FICHIER');