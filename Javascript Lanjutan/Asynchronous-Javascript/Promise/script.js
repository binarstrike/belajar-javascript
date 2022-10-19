/**
 * Promise
 * 
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * Promise adalah objek yang mewakili penyelesaian akhir atau kegagalan operasi asinkron.
 */
const axios = require('axios');
/**
 * Method untuk memeriksa apakah sebuah bilangan ganjil atau bukan
 * @param {number} num
 * @returns Promise Object
 */
const isGanjil = num => new Promise((benar, bukan) => {
    if (num % 2 !== 0) {
        benar({msg: `angka ${num} adalah Ganjil`, num});
    } else bukan(msg=`angka ${num} bukan angka Ganjil`);
});

// method then akan menjalankan method benar jika kondisi terpenuhi
// dan method catch menjalankan method bukan
isGanjil(97)
    .then(bruh => console.log(`${bruh.msg}\n${bruh.num} % 2 = ${bruh.num % 2}`))
    .catch(err => console.log(err));


// salah satu penggunaan Promise pada library axios
axios({
    method: 'get',
    url: 'http://www.omdbapi.com/?apikey=13384b9d&s=harry potter'
})
    .then(res => console.log(res.data.Search[0]))
    .catch(err => console.log(err.cause))