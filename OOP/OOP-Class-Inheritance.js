/**
 * * Class Inheritance atau pewarisan method dan properti dari sebuah class parent ke
 * * class yang diwariskan nya atau class child
 */
const INC = {
  ATT_INC: 6,
  DEF_INC: 4,
  HP_INC: 50,
}

class HeroAbility {
  constructor(ability = { att, def, hp }, level) {
    this._ability = ability
    this._level = level
  }
  levelUp(level) {
    this._ability.att += level * INC.ATT_INC
    this._ability.def += level * INC.DEF_INC
    this._ability.hp += level * INC.HP_INC
    this._level += level
  }
  addAttack(att) {
    this._ability.att += att
  }
  addDefense(def) {
    this._ability.def += def
  }
  addHealtPoint(hp) {
    this._ability.hp += hp
  }
}

class Player extends HeroAbility {
  constructor(heroName, ability = { att, def, hp }, level) {
    /**
     * * method super() digunakan jika didalam class child dibuat sebuah constructor dan untuk
     * * parameter nya menyesuaikan urutan parameter dari constructor class parent nya.
     * * untuk penamaan variabel pada parameter constructor class child bisa bebas yang penting urutan parameter nya.
     */
    super(ability, level)
    this._heroName = heroName
  }
  displayHeroData() {
    return {
      ability: this._ability,
      level: this._level,
    }
  }
}

const p1 = new Player("Layla", { att: 80, def: 90, hp: 1000 }, 10)
const p2 = new Player("Miya", { att: 70, def: 50, hp: 900 }, 8)
console.log(p1.displayHeroData())
p1.levelUp(90)
p1.addHealtPoint(900)
console.log(p1.displayHeroData())
