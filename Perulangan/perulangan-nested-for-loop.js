/**
 * nested = bersarang
 * 
 * sebuah loop yang terdapat loop lagi di dalam nya
 */

for(let i = 0; i < 10; i++) {
    for(let a = 10; a > 0; a--) {
        console.log(`(${i},${a})`)
    }
}

for (let i = 0; i < 2; i++) {
    for (let a = 0; a < 7; a++) {
        console.log("* ".repeat(a))
    }
}