//1
function add(a, b) {
    return a + b;
}
//2
function greet(name, age) {
    if (age != undefined) {
        console.log("hello ".concat(name, ", you are ").concat(age, " years old!"));
    }
    else {
        console.log("Hello ".concat(name, "!"));
    }
}
greet('messi');
greet('bellingham', 22);
//3
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    //return base**exp;
    console.log(Math.pow(base, exp));
}
power(3, 3);
