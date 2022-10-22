
/**
 * 
 */

/**
 * Whatever
 * @param {bool} isLaper 
 * @returns Promise
 */
const madang = isLaper => {
    return new Promise((yes, no) => {
        if (isLaper) yes("mari madang")
        else no("asih wareg");
    });
}

(async () => {
    console.log(await madang(false)
        // yes disini mewakili parameter atau isi dari method yes() => then()
        .then(yes => yes)
        .catch(err => err));
})();