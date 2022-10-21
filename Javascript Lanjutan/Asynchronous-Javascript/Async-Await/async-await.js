/**
 * Asynchronous Function
 * 
 */
const tunggu = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("siap");
        }, 3000);
    })
};

console.log("bruh1");
(async () => {
    let siap = await tunggu().then(s => s);
    console.log(siap);
})();
console.log("bruh2");