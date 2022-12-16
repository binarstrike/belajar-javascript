#!/bin/env node
/**
 * * super() juga bisa digunakan untuk memanggil method dari class parent ke class child
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
    // * return this agar method dapat di chaining
    return this
  }
   addAttack(att) {
    this._ability.att += att
    return this
  }
  addDefense(def) {
    this._ability.def += def
    return this
  }
  addHealtPoint(hp) {
    this._ability.hp += hp
    return this
  }
}

class Player extends HeroAbility {
  constructor(heroName, ability = { att, def, hp }, level) {
    super(ability, level)
    this._heroName = heroName
  }
  displayHeroData() {
    return {
      ability: this._ability,
      level: this._level,
    }
  }
  upOneLevel() {
    // * super.METHOD
    super.levelUp(1)
    return this
  }
}

const p1 = new Player("Layla", { att: 80, def: 67, hp: 1200 }, 1).levelUp(2)
console.log(p1.displayHeroData())
p1.upOneLevel().addAttack(20).addHealtPoint(900)
console.log(p1.displayHeroData())
