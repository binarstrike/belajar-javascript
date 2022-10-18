/**
 * Rest Parameter
 * 
 * merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
 */
const bruh = () => console.log("================");
const coba = (a, b, ...val) => {
    return `a = ${a}\nb = ${b}\nval = ${val}`;
}

console.log(coba(3,4,4,3,2,7,8));
bruh();

const jumlah = (...angka) => angka.reduce((acc, curr) => acc + curr);
console.log(jumlah(2,3,1,3,4,2));
bruh();

const kelompok1 = ["Rizal","Budi","Hendra","Ani","Hendra"];
const [ketua, waka, ...anggota] = kelompok1;
console.log(`ketua: ${ketua}\nWaka: ${waka}\nAnggota: ${anggota}`);
bruh();

// object destructuring
const team1 = {
    pm: "Dika",
    frontend: "Budi",
    backend: "Ani",
    ux: "Otong",
    DevOps: "Ucup"
}
const {pm, ...team} = team1;
console.log(team);
console.log(`pm: ${pm}`);
bruh();

// filter tipe data
const filterBy = (tipe, ...val) => val.filter(e => typeof(e) === tipe);

console.log(filterBy('number',3,2,"Dika","Ucup",8,true,"Ani",false,0));