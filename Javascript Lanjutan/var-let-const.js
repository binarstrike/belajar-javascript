/**
 * ada tiga cara mendeklarasikan sebuah variabel pada javascript yaitu
 * dengan keyword var - let - const
 * 
 * var => menganut jenis scope "function scope" jadii ketika membuat sebuah
 * loop statement seperti for-loop variabel yang dideklarasikan di dalam block
 * for-loop bisa di akses oleh scope global.
 * 
 * let => berbeda dengan 'var' , let menganut jenis scope atatu sistem "block scope"
 * jadi variabel ini hanya dapat di akses di dalam block statement
 * di mana variabel ini di deklarasikan.
 * 
 * const => atau konstanta adalah variabel yang tidak bisa di ubah nilai nya
 * 
 * jadi lupakan var dan memulai memakai let
 */

// var
// for (var i = 0; i < 5; ++i) {
//     console.log(i);
// }
// console.log("=========\n",i);

// let
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // <= error

