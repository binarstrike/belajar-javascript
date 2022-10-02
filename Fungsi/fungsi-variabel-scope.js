/**
 * javascript tidak menganut sistem block scope melainkan function scope
 * jadi variabel didalam blok if-else sama saja scope nya dengan scope global
 * kecuali function
 */

// ini variabel dengan scope global / window dalam javascript
var nama = "Ucup";

function displayName() {
    // variabel global bisa diakses dimana saja
    console.log(nama);
}
displayName();

function changeName1() {
    // variabel global bisa diubah nilai nya didalam fungsi
    nama = "Otong";
}
changeName1();
console.log(nama);

// nama = Otong
function changeName2() {
    // ini sama saja dengan membuat variabel baru jadi variabel global tidak berubah
    // nilai nya
    var nama = "Andi";
}
changeName2();
console.log(nama);