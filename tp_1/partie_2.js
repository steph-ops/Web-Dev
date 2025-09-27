//ex5

let livre ={
    titre :'Le Petit Prince',
    auteur:'Saint-Exupéry',
    annee:'1943',
    getInfo : function(){
        return `${this.titre}, écrit par ${this.auteur} en ${this.annee}.`;
    }
}

console.log(livre.getInfo());

//ex6

/*Structure d'une classe en javascript

class NomDeClasse {
  // Le constructeur : appelé automatiquement lors de la création de l’objet
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  // Méthode classique
  afficherInfos() {
    console.log(`Param1: ${this.param1}, Param2: ${this.param2}`);
  }

  // Méthode statique (accessible sans créer un objet)
  static hello() {
    console.log("Bonjour depuis une méthode statique !");
  }
}

*/
class Etudiant{
    constructor(nom,note){
        this.nom = nom;
        this.note=note;
    }

    getMention(){
        if(this.note>=16){
            return "Très Bien";
        }
        else if(this.note>=14){
            return "Bien";
        }
        else if(this.note>=10){
            return "Passaable";
        }
        else return "Echec";
    }
}

/*Creer une instance d'une classe
const objet1 = new NomDeClasse("valeur1", "valeur2");
*/

let E1=new Etudiant("Khaled",19);
console.log(E1.getMention());


let E2=new Etudiant("Mounir",15);
console.log(E2.getMention());


let E3=new Etudiant("Sami",11);
console.log(E3.getMention());

//ex7
/*Methode reduce??

reduce() is an array method in JavaScript.

It reduces an array to a single value (number, object, string, etc.) 
by applying a function to each element one by one.

Syntax

array.reduce((accumulator, currentValue) => {
  // return the updated accumulator
}, initialValue);


accumulator → stores the result as we go.

currentValue → the current element of the array.

initialValue → the starting value of the accumulator (often 0).
*/
const notes=[12,5,17,9,20];

//1
sum=notes.reduce((acc,val)=>{
    return acc+val;
},0)
avg=sum/notes.length;
console.log(avg);

//2
notes.sort((a, b) => b - a); // tri decroissant
console.log(notes);

//3
/*
La fonction filter en JavaScript sert à créer un nouveau tableau
contenant seulement les éléments qui passent un certain test.

Syntaxe de base :

let nouveauTableau = tableau.filter(element => condition);
*/
const notes_10=notes.filter(element => (element >=10));
console.log(notes_10);