//1
function identity<T>(value : T):T{
    return value;
}

//2
function getFirst<T>(arr : T[]):T{
    return(arr[0]);

}

//3
class Repository<T>{
    arr : T[] = [];
    add(element:T){
        this.arr.push(element);
    }
    remove(element:T){
        this.arr = this.arr.filter(i => i != element);
    }
    getAll():T[]{
        return this.arr;
    }
}


//
const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
numberRepo.remove(10);
console.log(numberRepo.getAll()); // [20]

// Repository de chaînes
const stringRepo = new Repository<string>();
stringRepo.add("Hello");
stringRepo.add("World");
console.log(stringRepo.getAll()); // ["Hello", "World"]