/**
 * builtin method pada javascript
 * 
 */

const angka = [-1,3,2,9,8,17,12,-2,-9,3,2,6,8,7,-7];

// mencari angka yang lebih dari 5
let filter = angka.filter(e => e >= 5);
console.log(filter);

// mengalikan semua elemnt dengan 2
let map = angka.map(e => e * 2);
console.log(map);

// menjumlahkan element pada array angka satu persatu
// prevnum sama saja dengan angka sebelumnya atau hasil
// dari jumlah angka sebelumnya
let reduce =  angka.reduce((prevnum, currnum) => prevnum + currnum);
console.log(reduce);

// chaining method
let chainAngka = angka.map(e => e * 2)
    .filter(e => e >= 4)
    .reduce((prev, curr) => prev + curr + prev);

console.log(chainAngka);