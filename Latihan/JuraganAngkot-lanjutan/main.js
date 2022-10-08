/**
 *
 */
class AngkotKita {
  constructor(sopir, trayek, harga) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.harga = harga;
    this.kas = 0;
    this.penumpang = [];
  }
  // menampilkan info angkot
  info() {
    console.log(`Sopir: ${this.sopir}\nTrayek: ${this.trayek}\
        \nPenumpang: ${this.penumpang}\nHarga: ${this.harga}\nKas: ${this.kas}`);
  }
  tempatKosong() {
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === "kosong") return i + 1;
    }
    return 0;
  }
  penumpangNaik(penumpang) {
    if (this.penumpang.length === 0) {
      this.penumpang.push(penumpang);
      return this.penumpang;
    } else {
      if (this.penumpang.includes(penumpang)) {
        console.log(`${penumpang} sudah ada di dalam angkot`);
        return this.penumpang;
      }
      else if (this.tempatKosong() !== 0) {
        this.penumpang[this.tempatKosong() - 1] = penumpang;
        return this.penumpang;
      } else {
        this.penumpang.push(penumpang);
        return this.penumpang;
      }
    }
  }
  penumpangTurun(penumpang) {
    if (this.penumpang.length === 0) {
      console.log("tidak penumpang di dalam angkot");
      return this.penumpang;
    } else {
      if (!this.penumpang.includes(penumpang)) {
        console.log(`${penumpang} tidak ada di dalam angkot`);
        return this.penumpang;
      } else {
        let indexPenumpang = this.penumpang.indexOf(penumpang);
        this.penumpang[indexPenumpang] = "kosong";
        this.kas += this.harga;
        console.log(`kas bertambah menjadi ${this.kas}`);
        return this.penumpang;
      }
    }
  }
}
