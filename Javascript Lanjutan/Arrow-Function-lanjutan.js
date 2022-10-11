/**
 * Arrow Function
 * 
 * salah satu cara mendeklarasikan sebuah fungsi pada javasccript
 * namun dengan syntax yang lebih simpel.
 * 
 * note: this pada nodejs adalah sebuah object kosong {}
 *       tapi jika di browser seperti chrome this sama dengan
 *       object window
 */
 let player1 = {
    hero: "Miya",
    type: "MM",

    // fungsi biasa akan mencari objek this di dalam
    // lexical scope atau scope parent nya
    display: function() {
        console.log(`${this.hero}, ${this.type}`);
    },
    // berbeda dengan arrow function, this di dalam dalam
    // arrow function di anggap tidak ada atau dia akan mencari
    // hingga parent terluar
    display2: () => {
        console.log(this);
        // jika di eksekusi dengna nodejs maka this = {}
        // namun jika di jalankan pada browser this = object
        console.log(`${this.hero}, ${this.type}`);
    }
 }


player1.display();

player1.display2();