/**
 * 
 */
const bruh = (function() {console.log("=============")});


const me = ["Binar Nugroho", 18, "binarnugroho775@gmail.com"];

const [a, b, c] = me;
console.log(a, b, c);

//console.log("============");
bruh();

const [x, ...val] = me;
console.log(x, val[0], val[1]);

bruh();

// skip element
const [h, , j] = me;
console.log(h, j);

// swap element atau items
let l = 10;
let m = 20;
console.log(m, l);
[m, l] = [l, m]
console.log(m, l);
bruh();

const Hero = {
    hero: "Miya",
    tipe: "MM",
    lane: "mid",
    att: 100
}
// nama variabel harus sama dengan nama prop
const {hero, tipe, lane} = Hero;
console.log(hero, tipe, lane);

// jika ingin menambahkan nama variabel
const {hero: hr, tipe: ti, lane: ln} = Hero;
bruh();
console.log(hr, ti, ln);
bruh();

// mengisi nilai default pada variabel
const {hero: p, tipe: q, lane: r, att = 80}  = Hero;
// bila terdapat properti att pada objek Hero maka default
// value akan ter override oleh isi dari properti att pada objek Hero
console.log(p, q, r, att);

function coba() {
    return [2,4,6];
}
let angka = coba();
console.log(angka);

let [t, u, v] = coba();
console.log(t, u, v);
bruh();

const Maha = {
    nama: "Ucup",
    fakultas: "Informatika",
    id: 2545432436,
    nilai: {
        uts: 100,
        uas: 90
    }
}
function getId(mhs) {
    return mhs.id;
}
console.log(getId(Maha));

function getFakultas({fakultas}) {
    return fakultas;
}
console.log(getFakultas(Maha));

function getNilai({nilai: {uts, uas}}) {
    return {uas, uts};
}

console.log(getNilai(Maha));