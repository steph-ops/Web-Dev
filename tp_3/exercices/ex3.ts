//1
let id : number | string;
//2
type A = {
    id:number,
    name:string;
}

type B = {
    age : number,
    etat : string;
}

type intersection = A & B; 
//3
type Status = 'pending' | 'done' | 'canceled';

//4

let bienvenue: unknown = "Bonjour Typescript";

let length_bienvenue = (bienvenue as string).length;
console.log('longueur : ',length_bienvenue);