/**
 * ada berbagai cara membuat object pada javascript
 * 
 * 1. Literal => ada pada file object-dasar.js
 * 2. Function Declaration
 * 3. Constructor Function
 * 4. Object.create()
 */

// Function Declaration
function buatObjectHero(hero, tipe, lane) {
    var Hero = {};
    Hero.hero = hero;
    Hero.tipe = tipe;
    Hero.lane = lane;
    return Hero;
}
var hero1 = buatObjectHero("Lancelot", "Assassin","Mid lane");
console.log(hero1,"\n");

// Constructor Function
function Hero(nama, tipe, lane) {
    this.hero = nama;
    this.tipe = tipe;
    this.lane = lane;
}
var hero2 = new Hero("Miya", "Marksman", "Exp lane");
console.log(hero2);
console.log(hero2.hero);