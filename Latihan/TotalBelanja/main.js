/**
 * script utama dari index.html
 */

// return value dari document,querySelectorAll adalah NodeList
// bukan array yang biasa pada javascript untuk itu harus diubah
// dulu menjadi array biasa dengan method Array.from
const barang = Array.from(document.querySelectorAll('[data-harga]'))

const jumlah = document.querySelector('.jumlah');
const total = document.querySelector('.total-harga');

const totalHarga = barang.map(e => e.dataset.harga)
    .map(e => parseFloat(e))
    .reduce((prev, curr) => prev + curr);

jumlah.textContent = barang.length;
total.textContent = totalHarga;