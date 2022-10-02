/**
 * while loop
 */

var kenyang = false;
var piring = 20;
var sudahDimakan = 1;

while (!kenyang) {
    if (piring == 1) kenyang = true;
    console.log("sudah makan "+sudahDimakan+" piring");
    sudahDimakan++;
    piring--;
}
console.log("sudah kenyang");