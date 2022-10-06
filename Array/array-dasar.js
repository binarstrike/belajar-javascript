/**
 * index array pada javascript dimulai dari 0
 * elemen array pada javascript dapat berupa string dan angka - bisa dicampur
 * karena javascript merupakan bahasa pemrograman yang dynamic typing
 * maka kita bisa menyimpan dan mencampur apapun di dalam array.
 * var namaArray = ["element array atau isi dari array", "index ke 1"]
 */

var namaHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

console.log(namaHari);
console.log(namaHari[4]+"\n");
console.log("===================");
// menampilkan seluruh isi array
for (let i = 0; i < namaHari.length; ++i) {
    console.log(namaHari[i]);
}
console.log("===================");
// method join() digunakan untuk mengubah array menjadi sebuah string
console.log(namaHari.join());
console.log(namaHari.join(" - "));