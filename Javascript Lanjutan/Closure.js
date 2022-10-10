/**
 * Apa itu Closure?
 * CLosure adalah sebuah fungsi yang memiliki akses
 * ke parent scope nya, meskipun parent scope-nya
 * sudah selesai di eksekusi.
 *  -- w3school
 */

function inilisasi() {
    let nama = "Binar"; // local variabel

    return function() { // inner function (closure*)
        console.log(`${nama}`);
    }
    // return namaku;
}

//inilisasi()();
var me = inilisasi();
me();

// fungsi counter
// dengan cara ini var num tidak bisa di ubah di global scope
// num akan terus bertambah ketika fungsi di jalankan
let add = function() {
    let num = 0;

    return function() {
        return ++num;
    }
}
let a = add();
let b = add();
console.log(a()); // 1
console.log(a()); // 2
console.log(a()); // 3
console.log(b()); // 1
console.log("=============");
// jika ingin menjalankan fungsi tanpa di deklarasikan
// di dalam variabel bisa menggunakan IIFE
let min = (function() {
    let num = 10;

    return function() {
        return --num;
    }
})();
console.log(min());
console.log(min());
console.log(min());