//1
class Person{
    name : string;
    age : number;

    constructor(name : string,age : number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello ${this.name}, you are ${this.age} old!`);
    }
}
//2
class Student extends Person{
    school : string;
    constructor(name:string,age:number,school:string){
        super(name,age);
        this.school= school;
    }
}
//3
abstract class Shape{
    abstract area():number;
}

const PI = 3.14;

class Circle extends Shape{
    radius : number;
    constructor(radius:number){
        super();
        this.radius = radius;
    }
    area():number{
        return (this.radius **2)*PI;
    }
}


class Rectangle extends Shape{
    h : number;
    w : number;
    constructor(w:number,h:number){
        super();
        this.w=w;
        this.h=h;
    }
    area():number{
        return this.h * this.w;
    }
}