console.log("=======")
console.log("Soal nomor 1")
console.log("=======")

let name = "Alfian Eka Rahman", role = "";

if(role == "Ksatria"){
    console.log(`halo Ksatria ${name} , kamu dapat menyerang dengan senjatamu!`);
}else if(role == "Tabib"){
    console.log(`halo Tabib ${name} , kamu akan membantu temanmu yang terluka`);
}else if(role == "Penyihir"){
    console.log(`halo Penyihir ${name} , ciptakan keajaiban yang membantu kemenanganmu!`);
}else(role == "");{
    console.log(`hei ${name} lu itu ngga diajak, lu wibu`)
}


console.log("=======");
console.log("Soal nomor 2");
console.log("======="); 

let hari = 21;
let bulan = 1;
let tahun = 1945;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
}

console.log(`${hari} ${bulan} ${tahun}`);