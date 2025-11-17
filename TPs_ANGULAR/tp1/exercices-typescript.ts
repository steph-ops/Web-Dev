//1

let nom: string = "Alaa";
let age: number = 20;
let estEtudiant: boolean = true;

function somme(a: number, b: number): number {
    return a + b;
}
console.log(somme(5, 7));

interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

class EtudiantClass implements Etudiant {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public age: number
    ) {}

    afficherInfo() {
        console.log(`ID: ${this.id}, Nom: ${this.nom} ${this.prenom}, Age: ${this.age}`);
    }
}

const etu = new EtudiantClass(1, "Alaa", "Karchoud", 20);
etu.afficherInfo();

//2


function creerTableau<T>(...elements: T[]): T[] {
    return elements;
}
console.log(creerTableau<number>(1, 2, 3));


function afficherMessage(msg: string | null, prefix?: string) {
    console.log(`${prefix ?? 'Info'}: ${msg}`);
}
afficherMessage("Bonjour");


enum Couleur { Rouge, Vert, Bleu }
let couleurPreferee: Couleur = Couleur.Vert;
console.log(couleurPreferee); 