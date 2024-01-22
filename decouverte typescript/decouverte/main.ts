interface Tirer {
    tirer(): void;
}

class Enemy implements Tirer {
    tirer(): void {
        throw new Error("Method not implemented.");
    }
    
}

class Jedi implements Tirer {
    private prenom: string;

    constructor(prenom: string) {
        this.prenom = prenom;
    }
    tirer(): void {
        throw new Error("Method not implemented.");
    }

    
}

 const jedi = new Jedi('Qui Gon');
//const jedi = new Jedi(1);

