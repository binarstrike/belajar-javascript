/**
 * ada sebuah proeprti spesial di javascript yaitu
 * prototype.
 * properti prototype ini selalu ada ketika mendeklarasikan sebuah array, variabel, fungsi dan object
 * properti prototype ini akan menyimpan method - method yang akan
 * di gunakan oleh object.
 */

function Player(hero) {
    this.hero = hero;
    this.att = 80;
    this.def = 20;
}
// jadi ketika membuat sebuah object di dalam
// object tersebut akan ada properti prototype
Player.prototype.info = function() {
    return `${this.hero}\n${this.att}\n${this.def}`
}
Player.prototype.plusAtt = function(att) {
    this.att += att;
}
const player1 = new Player("Lancelot");
console.log(player1.info())
player1.plusAtt(90);
console.log(player1.info())