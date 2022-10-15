/**
 * for..in
 * 
 * Create a loop only iterating over enumerable.
 * 
 * berbeda dengan for..of, for..in dapat iterate properti
 * di dalam object.
 */
bruh();bruh();

let me = {
    nama: "Binar Nugroho",
    umur: "18"
}

for(let p in me) {
    // p adalah nama properti nya
    console.log(p);
}
bruh();
for(let p in me) {
    console.log(me[p]);
}