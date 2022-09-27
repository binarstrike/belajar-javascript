/**
 * sebuah fungsi yang akan memanggil fungsi itu sendiri
 * 
 * function example() {
 *      return example();
 * }
 * 
 * di dalam fungsi rekursif harus terdapat "base case" dimana dimana sebuah
 * kondisi untuk memberhentikan fungsi rekursif memanggil diri nya sendiri
 * secara terus menerus.
 */

function displayName(jumlah) {
    // base case
    if (jumlah === 0) {
        return;
    }
    console.log("Ucup");
    displayName(jumlah - 1);
}
displayName(10);

// Faktorial
// 5! = 5x4x3x2x1

function faktorial(f) {
    if (f === 0) return 1;
    return f * faktorial(f-1);
}
console.log(faktorial(5));

// Fibonacci
// 0 1 1 2 3 5 8 13 21 34 ....

function fibonacci(n) {
    if (n < 2) return n;

    return (fibonacci(n-1) + fibonacci(n-2));
}
console.log(fibonacci(6));

var x = [];
var y = 10;

while (y > 1) {
    x.push(fibonacci(y));
    y--;
}
console.log(x.reverse());