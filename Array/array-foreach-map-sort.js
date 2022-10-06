/**
 * forEach(), map() dan sort()
 * 
 */
const SISWA = ["Ucup","Otong","Budi","Ani","Dewi"];

/**
 * forEach()
 * menggunakan fungsi calllback dengan parameter pertama
 * untuk element dari array dan parameter kedua unduk indeks
 */
SISWA.forEach(function(elemen) {
    console.log(`Siswa ${elemen}`);
});
console.log("===================");
SISWA.forEach(function(e, i) {
    console.log(`Siswa ke - ${i+1} ${e}`);
});
console.log("===================");

/**
 * map()
 * sama seperti forEach() namun map() akan mengembalikan sebuah array
 */
const ANGKA = [1,2,3,4,5,6];
// bisa menyimpan nya ke variabel
var angka2 = ANGKA.map(function(e) {
    // mengalikan 2 pada semua elemen dari array ANGKA
    return e * 2;
});
console.log(angka2.join(" - "));
console.log("===================");

/**
 * sort()
 * digunakan untuk mengurutkan elemen pada array
 * 
 */
var angka = [2,1,4,5,9,8,7];
angka.sort();
console.log(angka.join(" - "));
console.log("===================");
// namun jika angka nya puluhan harus dilakukan komparasi
var angka = [2,1,4,5,9,8,7,21,11,10,23,14];
angka.sort();
console.log(angka.join(" - "));
console.log("===================");
var angka = [2,1,4,5,9,8,7,21,11,10,23,14];
//angka.sort(function(a, b) { return a - b });
angka.sort((a, b) => a - b);
console.log(angka.join(" - "));