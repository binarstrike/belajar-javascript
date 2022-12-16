#!/bin/env node
/**
 * 
 */

class Mahasiswa {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }
  get fullName() {
    return {
      firstname: this.firstname,
      lastname: this.lastname
    }
  }
  set fullName(name) {
    const split_name = name.split(" ")
    this.firstname = split_name[0]
    this.lastname = split_name[1]
  }
}

const mh1 = new Mahasiswa("Budi", "Pratama")
console.log(mh1.fullName)
mh1.fullName = "Joko Santoso"
console.log(mh1.fullName)