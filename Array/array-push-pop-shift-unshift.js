/**
 * array pada javascript dapat dimanipulasi seperti
 * menghapus dan menambahkan elemen pada array
 * 
 */
 var Mahasiswa = ["Binar","Andi","Dika","Budi","Ani"];

 // Menghapus elemen di indeks terakhir pada array
 // dengan menggunakan method pop()
Mahasiswa.pop();
console.log(Mahasiswa)
console.log("===================");

Mahasiswa = ["Binar","Andi","Dika","Budi","Ani"];

// Menambahkan elemen di indeks terakhir pada array
// dengan menggunakan method push()
Mahasiswa.push("Joko");
console.log(Mahasiswa);
Mahasiswa.push("Dodi","Jamal");
console.log(Mahasiswa)
console.log("===================")

// Menghapus elemen dari indeks pertama pada array
// dengan menggunakan method shift()
Mahasiswa.shift()
console.log(Mahasiswa)
console.log("===================")

// Menambahkan elemen pada indeks pertama pada array
// dengan menggunakan method unshift()
Mahasiswa.unshift("Otong","Ucup")
console.log(Mahasiswa)

