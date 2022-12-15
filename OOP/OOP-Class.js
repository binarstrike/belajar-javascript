/**
 * * Class adalah keyword pada javascript yang mulai dikenalkan pada javascript versi ES6 untuk menggantikan
 * * constructor function yang dimana digunakan untuk membuat object seperti class pada javascript versi lama.
 */

class Hero {
  constructor(nama_hero, ability = { att, def, hp }) {
    this.hero = nama_hero
    this.ability = ability
  }
  all() {
    return [this.hero, this.ability]
  }
  getHeroData() {
    return {
      hero: this.hero,
      ability: this.ability,
    }
  }
}
const hero1 = new Hero("Miya", { att: 32, def: 98, hp: 1000 })

console.info(Hero.prototype)
console.info(hero1)
console.log("===============")
console.log(hero1.getHeroData())
console.log(hero1.all())
