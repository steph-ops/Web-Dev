//1
function add(a:number,b:number):number{
    return a+b;
}

//2
function greet(name:string,age?:number){
    if(age != undefined){
        console.log(`hello ${name}, you are ${age} years old!`);
    }
    else{
        console.log(`Hello ${name}!`);
    }
}


greet('messi');
greet('bellingham',22);

//3
function power(base:number,exp:number=2){
    return base**exp;
}

//4
function combine(a: number | string, b: number | string): number | string{
    if(typeof(a)==='number' && typeof(b)==='number'){
        return a+b;
    }
    else if(typeof(a)==='string' && typeof(b)==='string'){
        return a+b;
    }
    else{
        throw new Error("erreur de type!!!")
        
    }
}

