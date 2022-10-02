/**
 * Perulangan foreach biasanya digunakan untuk mencetak item di dalam array.
 * Perulangan ini termasuk dalam perulangan counted loop, karena jumlah
 * perulangannya akan dituentukan oleh panjang dari array.
 * Ada dua cara menggunakan perulangan foreach di Javascript:
 * 
 * Menggunakan 'for' dengan operator 'in'
 * Mengguunakan method forEach().
 */

var days = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"]

for(let i = 0; i < days.length; i++) {
    console.log(`${i}. ${days[i]}`)
}
console.log("Semoga hari mu Senin terus")

// ada cara yang lebih simpel dengan menggunakan 'in'
console.log("\nPerulangan for each menggunakan in")
for(i in days) {
    console.log(`${i}. ${days[i]}`)
}

// Menggunakan method atau fungsi forEach
console.log("\nPerulangan for each menggunakan method forEach")
days.forEach(function(day){
    console.log(`${day}`)
});

// satu lagi perulangan menggunakan repeat
console.log("Hai guys ".repeat(5))