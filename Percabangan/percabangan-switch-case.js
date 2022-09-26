/**
 * langsung aja
 */

// switch (variabel) {
//     case <value>:
//         // blok kode
//         break;
//     case <value>:
//         // blok kode
//         break;
//     case <value>:
//         // blok kode
//         break;
//     default:
//         // blok kode
// }
 var nilai = 80;
 var grade = "";

 switch(true) {
    case nilai >= 90: grade = "A+"; break;
    case nilai >= 80: grade = "B+"; break;
    case nilai >= 70: grade = "C+"; break;
    default: grade = "D";
 }

 console.log(`nilai kamu ${grade}`)