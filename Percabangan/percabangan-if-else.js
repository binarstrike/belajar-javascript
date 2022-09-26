/**
 * sama seperti bahasa pemrograman lainnya cuman beda syntax
 * kalau di bilang mirip lebih mirip percabangan pada c++
 * syntax : 
 * if(kondisi) {
 *      baris perintah
 * } else {
 *      baris perintah
 * }
 * 
 * bila di dalam blok if-else hanya terdapat satu baris ekspresi atau statement
 * bisa ditulis tanpa kurung kurawal
 */

var nilai = 90;

var grade;

// tanpa kurung kurawal {} karena hanya satu baris ekspresi atau statement
if(nilai >= 90) grade = "A+"
else if(nilai >= 80) grade = "B+"
else if(nilai >= 70) grade = "C+"
else if(nilai >= 60) grade = "D+"
else grade = "E"

console.log(`grade kamu ${grade}`)