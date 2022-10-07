/**
 * filter() dan find()
 * 
 * digunakan untuk menfilter atau menemukan sebuah elemen
 * dengan kondisi tertentu
 * 
 * filter => menemukan elemen pada array sesuai kondisi yang diberikan
 * method ini akan mengembalikan sebuah array
 * 
 * find => sama seperti filter() namun hanya mengembalikan 1 nilai atau elemen dan bukan array
 */

 /**
  * filter()
  */
var angka = [2,1,4,5,7,3,9,8];
// memfilter atau mencari angka yang lebih dari 6 pada array angka
var angka2 = angka.filter((e) => e > 6);
console.log(angka2);

/**
 * find()
 * menemukan angka yang pertama kali sesuai dengan kondisi
 */
var angka2 = angka.find(function(e, i) {
    return e > 5;
});
console.log(angka2);

// indeks dari element yang di cari
var indeks_angka = (function() {
    let idx = [];
    angka.filter(function(e, i) {
        if (e > 5) {
            idx.push(i);
            return true;
        }
    });
    return idx;
})();
console.log(indeks_angka);