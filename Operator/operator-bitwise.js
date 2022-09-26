/**
 * Operator bitwise merupakan operator yang digunakan untuk operasi berdasarkan 
 * bit (biner)
 * 
 * & = AND
 * | = OR
 * ^ = XOR
 * ~ = negasi/kebalikan
 * << =left shift
 * >> = right shift
 * <<> = left shift (unsigned
 * >>< = right shift (unsigned
 * 
 * operator ini berlaku untuk tipe data 'int', 'long', 'short', 'char' dan 'byte'
 * operator ini akan menghitung dari bit ke bit
 * 
 * perasaan dulu pernah belajar materi ini waktu smk tapi dah lupa, hehe
 */

x = 4;
y = 3;

console.log(x & y);
console.log(x | y);
console.log(x << y);
console.log(~x);
console.log(x >> y);