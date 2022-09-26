/*
    Operator perbandingan
    operastor ini akan melakukan operasi perbandingan seperti
    > \ < | == | != | >= | <= 'lebih dari | kurang dari | sama dengan | bukan sama dengan
    | lebih dari sama dengan | kurang dari sama dengan'
    dan satu lagi `===` operator ini akan tidak hanya membandingkan nilai saya tapi tipe data juga
*/

w = "10";
x = 10;
y = 15;
z = 10;

console.log(x < y);
console.log(x > y);
console.log(x == y);
console.log(x == z);
console.log(x >= z);
console.log(y != z);
console.log(w === x); // false, karena tipe data var x berbeda dengan var w
console.log(x == w); // true
