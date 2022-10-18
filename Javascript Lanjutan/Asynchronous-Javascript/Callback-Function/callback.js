/**
 * Callback Function
 * 
 * Sebuah function yang di jadikan function oleh fungsi lain
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Asynchronous function
const halo = nama => console.log(`Halo ${nama}`);
const sapa = callback => {
    rl.question("What is Your name: ", name => {
        callback(name);
        rl.close();
    });

}
console.log("mulai");
sapa(halo);
console.log("\nselesai");

// const req = (url, success, error) => {
//     const xhr = new XMLHttpRequest();

//     if (xhr.readyState === 4 && xhr.status === 200) {
//         success(xhr.response);
//     } else if (xhr.status === 404) error();

//     xhr.open('get', url);
//     xhr.send();
// }

// req('coba.json', res => {
//     console.log(JSON.parse(res));
// }, () => document.write("Error 404"));

rl.on('close', () => process.exit(0));

