//1
function identity(value) {
    return value;
}
//2
function getFirst(arr) {
    return (arr[0]);
}
//3
var Repository = /** @class */ (function () {
    function Repository() {
        this.arr = [];
    }
    Repository.prototype.add = function (element) {
        this.arr.push(element);
    };
    Repository.prototype.remove = function (element) {
        this.arr = this.arr.filter(function (i) { return i != element; });
    };
    Repository.prototype.getAll = function () {
        return this.arr;
    };
    return Repository;
}());
//
var numberRepo = new Repository();
numberRepo.add(10);
numberRepo.add(20);
numberRepo.remove(10);
console.log(numberRepo.getAll()); // [20]
// Repository de chaînes
var stringRepo = new Repository();
stringRepo.add("Hello");
stringRepo.add("World");
console.log(stringRepo.getAll()); // ["Hello", "World"]
