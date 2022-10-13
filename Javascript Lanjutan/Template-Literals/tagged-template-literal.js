/**
 * 
 */

const Highlight = (str, ...exp) => {
    return str.reduce((string, val, idx) => `${string}${val}<span class="hl">${exp[idx] || ''}</span>`, '')
}

const Me = {
    nama: "Binar Nugroho",
    umur: 18,
    // tambah properti baru, email
    email: "binarnugroho775@gmail.com"
}
const Halo = Highlight`Halo nama Saya ${Me.nama}, 
Saya ${Me.umur} tahun. Email Saya ${Me.email}`;
// semua expression atau template literal pada variabel Halo
// otomatis akan terdapat hightlight saat di tampilkan
console.log(Halo);