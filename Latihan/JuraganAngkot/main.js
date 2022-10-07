var Angkot1 = [];

function tambahPenumpang(namaPenumpang, angkot) {
    if (angkot.length === 0) {
        angkot.push(namaPenumpang);
        return angkot;
    }
    else {
        if (angkot.includes(namaPenumpang)) {
            console.log(`${namaPenumpang} sudah ada di dalam angkot`);
            return angkot;
        }
        let tempatKosong = [];
        angkot.forEach(function(e, i) {
            if (e === undefined)
                tempatKosong.push(i);
        });
        if (tempatKosong.length !== 0) {
            angkot[tempatKosong[0]] = namaPenumpang;
            return angkot;
        }
        else
            angkot.push(namaPenumpang);
            return angkot;
    }
    
}

function hapusPenumpang(namaPenumpang, angkot) {
    if (angkot.length === 0) {
        console.log("tidak ada penumpang di dalam angkot");
        return angkot;
    }
    else {
        // check jika penumpang tidak ada di dalam angkot
        if (!angkot.includes(namaPenumpang)) {
            console.log(`${namaPenumpang} tidak ada di dalam angkot`);
            return angkot;
        }
        else {
            let tempatDuduk = angkot.indexOf(namaPenumpang);
            angkot[tempatDuduk] = undefined;
            return angkot;
        }
    }
}