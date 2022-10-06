/**
 * slice() dan splice()
 * 
 * splice => menambahkan dan menghapus elemen pada indeks
 * tertentu pada array
 * splice(indeks-awal, banyak-elemen-yang-dihapus,
 * elemen-baru1, elemen-baru2, ....)
 * 
 * slice => membuat array baru dengan mengambil elemnen
 * pada array yang sudah ada
 * slice(indeks-awal, indeks-akhir)
 * elemen pada indeks awal akan masuk pada array baru yang akan dibuat
 * namun elemen pada indeks akhir tidak
 */

// splice()
var MABA = ['Ucup','Otong','Ani'];
// menambahkan Yeni dan Dika dimulai dari indeks 2
MABA.splice(2, 0, 'Yeni','Dika');
console.log(MABA.join(" - "));

/// menghapus Yeni
MABA.splice(2, 1);
console.log(MABA.join(" - "))
console.log("===============");

// slice()
var MABA = ['Ucup','Otong','Ani','Budi','Joko','Juki'];
// membuat array baru dengan elemen dari array MABA
// dari indeks 2 sampai indeks 5. Ani, Budi, Joko
var MABA2 = MABA.slice(2, 5)
console.log(MABA2)