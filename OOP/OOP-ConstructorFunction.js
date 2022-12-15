/**
 * * Constructor Function adalah sebuah method untuk membuat object seperti class, namun itu untuk javascript
 * * versi lama dan sekarang jika ingin membuat class dapat menggunakan keyword 'class'
 */

function Orang(nama, umur) {
  this.nama = nama
  this.umur = umur
  this.ubahNama = (nama) => (this.nama = nama)
  this.all = () => [this.nama, this.umur]
}

const coba = new Orang("Dika", 18)
console.log(coba)
coba.ubahNama("Budi")
console.log(coba.all())
