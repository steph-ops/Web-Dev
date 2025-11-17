//1
var nom = "Alaa";
var age = 20;
var estEtudiant = true;
function somme(a, b) {
    return a + b;
}
console.log(somme(5, 7));
var EtudiantClass = /** @class */ (function () {
    function EtudiantClass(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantClass.prototype.afficherInfo = function () {
        console.log("ID: ".concat(this.id, ", Nom: ").concat(this.nom, " ").concat(this.prenom, ", Age: ").concat(this.age));
    };
    return EtudiantClass;
}());
var etu = new EtudiantClass(1, "Alaa", "Karchoud", 20);
etu.afficherInfo();
//2
function creerTableau() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements;
}
console.log(creerTableau(1, 2, 3));
function afficherMessage(msg, prefix) {
    console.log("".concat(prefix !== null && prefix !== void 0 ? prefix : 'Info', ": ").concat(msg));
}
afficherMessage("Bonjour");
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Bleu"] = 2] = "Bleu";
})(Couleur || (Couleur = {}));
var couleurPreferee = Couleur.Vert;
console.log(couleurPreferee);
