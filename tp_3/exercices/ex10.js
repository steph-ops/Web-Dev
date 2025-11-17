class Person {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}
class User extends Person {
    constructor(id, name) {
        super(id, name, "User");
        this.borrowedBooks = [];
    }
}
class Admin extends Person {
    constructor(id, name) {
        super(id, name, "Admin");
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log('Livre ajouté : ', book.title);
    }
    removeBook(id) {
        this.books = this.books.filter(b => b.id !== id);
        console.log('Livre retiré avec succès !!');
    }
    findBook(id) {
        return this.books.find(b => b.id === id);
    }
    emprunterBook(id) {
        const foundBook = this.findBook(id);
        if (!foundBook) {
            console.log('ma3anech menou lkteb hedha!!');
        }
        else if (!foundBook.available) {
            console.log('kteb mekri dsl!');
        }
        else {
            foundBook.available = false;
            console.log('mabrouk!!');
        }
    }
    rendreBook(id) {
        const foundBook = this.findBook(id);
        if (!foundBook) {
            console.log('ma3anech menou lkteb hedha!!');
        }
        else if (foundBook.available) {
            console.log('kteb deja disponible!');
        }
        else {
            foundBook.available = true;
            console.log('lkteb rja3!!');
        }
    }
}
// Ajouter des livres à la bibliothèque
const library = new Library();
library.addBook({ id: 1, title: "1984", author: "Orwell", year: 1949, available: true });
library.addBook({ id: 2, title: "Le Petit Prince", author: "Saint-Exupéry", year: 1943, available: true });
// Emprunter et rendre un livre
library.emprunterBook(1); // Affiche "mabrouk!!"
library.emprunterBook(1); // Affiche "kteb mekri dsl!"
library.rendreBook(1); // Affiche "lkteb rja3!!"
// Créer des utilisateurs/admins
const user = new User(1, "Alice");
const admin = new Admin(2, "Bob");
//Repo generique
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
        console.log("Ajouté :", item);
    }
    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
        console.log("Retiré id:", id);
    }
    find(id) {
        return this.items.find(item => item.id === id);
    }
    getAll() {
        return [...this.items];
    }
}
// Créer un repository pour les livres
const bookRepo = new Repository();
bookRepo.add({ id: 3, title: "L'Étranger", author: "Camus", year: 1942, available: true });
console.log(bookRepo.find(3)); // Affiche le livre avec id 3
// Créer un repository pour les utilisateurs
const userRepo = new Repository();
userRepo.add(new User(10, "Charlie"));
console.log(userRepo.find(10)); // Affiche l'utilisateur avec id 10
// Retirer un utilisateur
userRepo.remove(10);
console.log(userRepo.getAll()); // Affiche []
