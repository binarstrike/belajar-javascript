/**
 * Try Catch
 * Error Handler
 * 
 * sama seperti bahasa pemrograman lain javascript juga mempunyai
 * statement untuk menghandle error
 */
const madang = (isLaper) => {
    if (isLaper) {
        console.log("Madang uy");
    } else {
        throw new Error("Asih Wareg");
    }
}
try {
    madang(false);
} catch (error) {
    console.log(error.message);
}