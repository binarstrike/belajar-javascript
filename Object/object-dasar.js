/**
 * Object
 * 
 * Sama seperti dictionaries pada python
 * Object pada javascript di dalam nya terdapat key dan value atau
 * nama variabel dan isi dari variabel yang disebut property
 * 
 */
var Alamat = {
    kabupaten: "Cilacap", // ini property
    kecamatan: "Cipari",
    desa: "Segaralangu",
    rt_rw: "02/04"
};
console.log(Alamat);
console.log(Alamat.kecamatan);
console.log(Alamat["desa"]);

// Object dapat menyimpan sebuah object lagi di dalam nya
var Hero = {
    name: "Balmond",
    type: "fighter",
    ability : {
        attack: 256,
        defense: 72.6,
        hp: 1450
    }
};
console.log(Hero);
console.log(Hero.ability);
console.log(Hero["ability"]["hp"]);