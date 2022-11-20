/**
 * Spread Operator
 * memecah (expand/unpack) iterables menjadi singgel element
 */
const bruh = () => console.log("=============");

const mhs = ["Budi","Dika","Ani"];
console.log(...mhs);
console.log(...mhs[0]);

bruh();

// menggabungkan array
const dosen = ["Joko","Eko","Hendra"];
const whatever = [...mhs,...dosen];
console.log(whatever);

bruh();

// copy array
const dosen2 = [...dosen];
console.log(dosen2);

const nama = document.querySelector('.name');
const span = [...nama.textContent].map(e => `<span>${e}</span>`).join('');
nama.innerHTML = span;