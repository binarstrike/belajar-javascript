/**
 * dari berbagai cara membuat object pada javascript cara tersebut memiliki
 * kelemahan dari pengelolaan memori, efektifitas, tingkat efisien dan waktu
 * 
 * Object Literal => kita perlu mendeklarasikan ulang untuk membuat object baru
 * namun isi atau properti di dalam nya sama
 * 
 * Function Declaration => bila kita membuat variabel atau instance baru dengan object
 * yang dibuat dengan cara Function Declaration dan bila terdapat properti berupa method
 * didalam object tersebut, method itu akan di duplikasi setiap membuat instance baru dan
 * ini akan memakan memori
 */

// ada cara untuk mengatasi problem dari membuat object dengan cara Function Declaration 

const ability = {
    tambahAttack: function(att) {
        this.attack += att;
    },
    tambahDefense: function(def) {
        this.defense += def;
    },
    info: function() {
        console.log(`Hero: ${this.hero}\nAttack: ${this.attack}\nDefense: ${this.defense}`);
    }
};

function Player(hero, att, def) {
    // mirip seperti pewarisan class pada bahasa pemrograman lain nya sperti java
    let Hero = Object.create(ability);
    Hero.hero = hero;
    Hero.attack = att;
    Hero.defense = def;

    return Hero;
}

var player1 = new Player("Miya",80,70);
player1.info()
player1.tambahAttack(100);
player1.tambahDefense(40);
player1.info();
