/**
 * Higher Order Funtion
 * adalah sebuah fungsi yang parameter nya berupa fungsi atau
 * fungsi yang return value nya adalah sebuah fungsi
 * 
 */

let add = (x, y) => x + y;
let multiply = (x, y) => x * y;

// ini disebut higher order func.
let hitung = (par1, par2, opr) => opr(par1, par2); // opr:  calback function

console.log(hitung(15, 8, add));
console.log(hitung(40, 20, multiply));

let banyakNum = (arr, num, fun) => {
    let banyak = [];
    let banyak_index = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            banyak.push(num);
            banyak_index.push(i);
        }
    }
    let panjang = banyak.length;
    return fun(banyak, banyak_index, panjang);
}

const mynumber = [2,4,5,2,8,5,3,5,8,4,2,2,6,2];
let coba = banyakNum(mynumber, 2, (a, b, c) => {
    return `${a}\n${b}\n${c}`;
});
console.log(coba);
