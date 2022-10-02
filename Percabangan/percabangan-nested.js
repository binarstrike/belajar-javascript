/**
 * percabangan bersarang atau nested
 */

var user = "binar";
var password = "binar123";

if (user === "binar") {
    if (password === "binar123") {
        console.log("login sebagai " + user)
    }
}
else {
    console.log("username atau password invalid")
}

// kita bisa membuat nya lebih simpel dengan menggunakan logic gate AND

if (user === "binar" && password === "binar123")
    console.log("login sebagai " + user)
else
    console.log("username atau password invalid")