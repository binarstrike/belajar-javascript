/**
 * for..of
 * 
 * membuat looping pada iterable object
 * for..of => statement ini dapat iterate array like object
 * seperti NodeList dan arguments pada function.
 * 
 * cara lain untuk iterate array selain dengan forEach.
 */
const bruh = function(){console.log("=================");}

const listku = document.querySelectorAll(".list");
console.log(listku);
bruh();
for(const e of listku) {
    console.log(e);
}
bruh();

function hitung() {
    let hasil = 0;
    for(let e of arguments) {
        hasil += e;
    }
    return hasil;
}

console.log(hitung(1,2,3,4,5,6,8,7));
bruh();
const Barang = ["Sampo","Minyak","Telur","Beras"];
for(const e of Barang) {
    console.log(e);
}