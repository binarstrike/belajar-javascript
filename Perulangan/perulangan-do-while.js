/**
 * sama seperti while loop namun kondisi akan diperiksa setelah blok
 * kode dijalankan
 * 
 * do while loop
 */

var isCapek = false
var pushUpCount = 20
var pushUp = 1;

do {
    console.log("Push Up "+pushUp)
    pushUp++;
    pushUpCount--;
    isCapek = pushUpCount == 0 ? true : false
} while (!isCapek)

console.log("hadeuh capek juga")