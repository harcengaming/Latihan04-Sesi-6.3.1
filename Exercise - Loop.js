//No. 1
// ini khusus tampilan hanya HTML
// var count;
// document.write("Mulai" + "<br />");

// for(count = 0; count <= 100 ; count++) {
//     document.write("User ke - " + count );
//     document.write("<br />");
// }         
// document.write("Berhenti!");

// atau rumus singkat untuk tampilan console
// for (let i = 1; i <= 100; i++) {
//     console.log('User ke - ' +i);
// }

//Berhasil
document.write("Mulai" + "<br />");
for (let i = 1; i <= 100; i++) {
    console.log('User ke - ' +i);
    document.write("User ke - " +i );
    document.write("<br />");
}
document.write("Berhenti!" + "<br /><br />");


//No. 2
for (let i = 0; i <= 18; i++) {
    console.log(i);
    i += 1   
}

//No. 3
// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i <= 20)

//Berhasil
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i, "genap");
    } else if (i % 1 == 0) {
        console.log (i, "ganjil");
    } else {
        console.log(i);
    }
}

//No. 4
//Berhasil
let ulangi = confirm("Apakah anda mau mengulang?");
let count = 0;

while(ulangi) {
    count++;
    ulangi = confirm("Apakah anda mau mengulang?");
}

document.write("Perulangan sudah dilakukan sebanyak "+ count +" kali");

//No. 5
//Berhasil
let input = prompt("Sebutkan kepanjangan dari nama IB?");

    if(input == "Impact Byte"){
        document.write("<h1>Selamat jawaban anda benar!</h1>");
    } else {
        document.write("<h1>Jawaban salah, COBA LAGI!</h1>");
    }

    document.write("<p>Terima kasih atas sudah menjawab kuis ini!</p>");