/**
 * @file function-generator.js
 * 
 * @note
 * function generator adalah sebuah fungsi yang menghasilkan atau mengmebalikan iterasi berupa data hasil
 * dari fungsi tersebut saat dijalankan. Pada function generator ini terdapat keyword khusus yaitu 'yield'
 * berfungsi untuk mengembalikan data dari function generator.
 * 
 * @syntax
 * function* namaKu() {
 *      yield "Binar";
 *      yield "Nugroho";
 * }
 * 
 * @note
 * fungsi diatas akan menghasilkan iterasi yang akan disimpan ke sebuah variabel dan biasanya variabel tersebut
 * akan di looping dengan statement for..of.
 */

function* hasilGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1)
            yield i
    }
}

const angkaGanjil = hasilGanjil(50);
for (const angka of angkaGanjil) {
    console.log(angka);
}