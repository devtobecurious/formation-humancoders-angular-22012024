"use strict";
class Enemy {
    tirer() {
        throw new Error("Method not implemented.");
    }
}
class Jedi {
    constructor(prenom) {
        this.prenom = prenom;
    }
    tirer() {
        throw new Error("Method not implemented.");
    }
}
const jedi = new Jedi('Qui Gon');
//const jedi = new Jedi(1);
