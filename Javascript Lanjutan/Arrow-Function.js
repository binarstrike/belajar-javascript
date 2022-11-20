/**
 * Arrow Function
 *
 * salah satu cara mendeklarasikan sebuah fungsi pada javasccript
 * namun dengan syntax yang lebih simpel.
 */

// function biasa
let add = function (x, y) {
  return x + y;
};
console.log(add(5, 20));

// arrow function
let min = (x, y) => {
  return x - y;
};
console.log(min(10, 6));

// bentuk lain arrow function
// jika parameter hanya satu
let namaKu = (nama) => {
  console.log(nama);
};
// jika block kode atau statement hanya satu baris
// bila menggunakan arrow function keyword 'return' dapat
// tidak di tulis jika hanya satu baris
let mod_dua = (num) => num % 2;
console.log(mod_dua(9));

//
let MAHA = ["Budi", "Ani", "Dika"];

let banyakHuruf = MAHA.map((huruf) => huruf.length);
console.log(banyakHuruf);

// bila ingin me return sebuah object, object tersebut harus di apit dengan kurung
// let whatever  = MAHA.map(nama => ({nama: nama, jumlahHuruf: nama.length}))
// dan jika nama properti sama dengan nama variabel untuk isi dari properti
// tersebut, maka dapat ditulis langsung nama variabel nya
let whatever = MAHA.map((nama) => ({ nama, jumlahHuruf: nama.length }));
console.table(whatever);
