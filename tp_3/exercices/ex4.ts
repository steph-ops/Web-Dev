//1
interface User {
    id : number;
    name : string;
    email? : string;
    isAdmin : boolean;
}

//2

let user1 : User = {
    id : 1,
    name : 'Rayen',
    email : 'Rayen@yahoo.fr',
    isAdmin : true
}

//3
interface Admin extends User {
    permissions : string[];
}