/**
 * Asynchronous Function
 * 
 */

const tunggu = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("siap"), 3000);
        setTimeout(() => reject("bruhh..."), 2000);
    })
};

console.log("bruh1");
(async () => {
    let siap = "";
    try {
        siap = await tunggu().then(s => s).catch(err => err);
    } catch (error) {
        console.log(error);
    }
    console.log(siap);
})();
console.log("bruh2");