const body = document.querySelector("body");
const swalst = Swal.mixin({
  timer: 2300,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
});

const audio = new Audio('' + document.getElementById('linkmp3').src);
let ftganti = 0;
let fungsi = 0;
let fungsiAwal = 0;
const deffotostiker = document.getElementById('fotostiker').src;

// ====== FUNGSI JATUHAN ======
function berjatuhan() {
  const heart = document.createElement("div");
  heart.className = "fas fa-snowflake";
  heart.style.left = (Math.random() * 90) + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  body.appendChild(heart);
}

setInterval(function() {
  const heartArr = document.querySelectorAll(".fa-snowflake");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);

document.getElementById('Content').style = "opacity:1;margin-top:16vh";

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: '#FF0040',
  imageHeight: 80,
});

// ====== KLIK KADO ======
document.getElementById("kadoIn").onclick = function() {
  if (fungsiAwal == 0) {
    audio.play();
    fungsiAwal = 1;
    const kadoIn = document.getElementById('kadoIn');
    kadoIn.style = "transition:all .8s ease;transform:scale(10);opacity:0";
    document.getElementById('wallpaper').style = "transform: scale(1.5);";
    document.getElementById('ket').style = "display:none";
    setTimeout(initengahan, 300);
    setTimeout(inipesan, 500);
  }
}

// ====== INPUT NAMA ======
async function inipesan() {
  const { value: nama } = await swals.fire({
    title: 'Masukin Nama Kamu',
    input: 'text',
    inputPlaceholder: 'Ketik namamu...',
    confirmButtonText: '✨ Lanjut',
    confirmButtonColor: '#FF6B9D',
  });
  if (nama && nama.length < 11) {
    window.nama = nama;
    vketikhalo = "Hai, " + nama + " ✨";
    mulainama();
  } else {
    await swals.fire({
      title: 'Ups! 😅',
      text: 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!',
      icon: 'warning',
      confirmButtonColor: '#FF6B9D',
    });
    inipesan();
  }
}

// ====== VARIABEL PERTANYAAN AKHIR ======
const tanya = 'Mau Kado Gak Nih? 😶❤️';
const opstanya = 'Ayo jawab 😆';
const tompositif = 'Mau dong! 🥺';
const tomnegatif = 'Engga deh 😜';

async function menuju() {
  const pesanwhatsapp = "Makasii udah ngucapin " + nama + " ultah ><";
  await swals.fire({
    title: 'OK! 🎉',
    text: 'Kirim jawabannya ke WhatsApp aku, ya!',
    icon: 'success',
    confirmButtonColor: '#FF6B9D',
  });
  window.location = "https://api.whatsapp.com/send?phone=6285649455626&text=" + pesanwhatsapp;
}

// ====== FUNCTION INIT ======
function initengahan() {
  document.getElementById('kadoIn').style = "display:none";
  document.getElementById('ket').style = "display:none";
  document.getElementById('Content').style = "opacity:1;margin-top:0";
  document.getElementById('bodyblur').style = "opacity:.7";
  document.getElementById('wallpaper').style = "transform: scale(1.5);";
}

async function mulainama() {
  document.getElementById('bodyblur').style = "opacity:.7";
  document.getElementById('wallpaper').style = "transform: scale(1);";
  document.getElementById('fotostiker').style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  setTimeout(kethalo, 500);
}

function ftmuncul() {
  const fotostiker = document.getElementById('fotostiker');
  if (ftganti == 0) { fotostiker.src = deffotostiker; }
  if (ftganti == 1) { fotostiker.src = document.getElementById('fotostiker1').src; }
  if (ftganti == 2) { fotostiker.src = document.getElementById('fotostiker2').src; }
  if (ftganti == 3) { fotostiker.src = document.getElementById('fotostiker3').src; }
  if (ftganti == 4) { fotostiker.src = document.getElementById('fotostiker4').src; }
  if (ftganti == 5) { fotostiker.src = document.getElementById('fotostiker5').src; }
  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

function fthilang() {
  document.getElementById('fotostiker').style = "display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";
}

function bqmuncul() {
  const bq = document.getElementById('bq');
  bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
  mulaiketik1();
}

function bqhilang() {
  document.getElementById('wallpaper').style = "transform: scale(2);";
  document.getElementById('bodyblur').style = "opacity:.3";
  const bq = document.getElementById('bq');
  bq.style = "position:relative;transition:all .7s ease;";
}

function kethalo() {
  new TypeIt("#halo", {
    strings: ["" + vketikhalo],
    startDelay: 50,
    speed: 40,
    waitUntilVisible: true,
    afterComplete: function() {
      document.getElementById('halo').innerHTML = vketikhalo;
      setTimeout(bqmuncul, 200);
    },
  }).go();
}

function tombol() {
  document.getElementById('wallpaper').style = "transform: scale(1);";
  document.getElementById('Tombol').style = "opacity:1;transform: scale(1);";
  if (fungsi == 2) {
    document.getElementById('By').innerHTML = "💖 Balas";
  }
}

document.getElementById("By").onclick = function() {
  if (fungsi == 1) {
    document.getElementById('Tombol').style = "";
    fthilang();
    fungsi = 0;
    pertanyaan();
  }
  if (fungsi == 2) {
    document.getElementById('Tombol').style = "";
    menuju();
  }
}

const waktuSekarang = new Date().getHours();
let ucapan;
if (waktuSekarang < 10) { ucapan = "Selamat Pagi, "; } else if (waktuSekarang < 16) { ucapan = "Selamat Siang, "; } else if (waktuSekarang < 19) { ucapan = "Selamat Sore, "; } else { ucapan = "Selamat Malam, "; }

const vketik1 = document.getElementById('kalimat').innerHTML;
document.getElementById('kalimat').innerHTML = "";

function mulaiketik1() {
  new TypeIt("#kalimat", {
    strings: ["" + vketik1],
    startDelay: 400,
    speed: 20,
    cursor: false,
    deleteSpeed: 20,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function() {
      aktiopsL();
    },
  }).go();
}

let opsLclick = 0;
let opsLcheck = 0;
const defopsL = document.getElementById('opsL').innerHTML;

document.getElementById("bq").onclick = function() {
  if (opsLclick == 1) {
    if (opsLcheck == 1) {
      setTimeout(aktipesan1, 400);
      fthilang();
      ftganti = 1;
      setTimeout(ftmuncul, 300);
    }
    if (opsLcheck == 2) { mulaiketik3(); }
    if (opsLcheck == 3) { mulaiketik4(); }
    if (opsLcheck == 4) { mulaiketik5(); }
    if (opsLcheck == 5) { kethalo2(); }
    otomatis();
    document.getElementById('opsL').style.opacity = "0";
    opsLclick = 0;
  }
}

function aktiopsL() {
  document.getElementById('opsL').innerHTML = defopsL;
  document.getElementById('opsL').style.opacity = ".8";
  opsLclick = 1;
  opsLcheck += 1;
}

function gantiopsL() {
  document.getElementById('opsL').innerHTML = "[ Klik beberapa LOVE-nya ]";
  document.getElementById('opsL').style.opacity = ".8";
}

function otomatis() {
  document.getElementById('pesan3').style = "transition:none";
  document.getElementById('pesan8').style = "display:none";
  document.getElementById('kalimat').style = "opacity:0";
  if (otoaktipesan == 0) {
    setTimeout(otolanj, 400);
  }
}

function otolanj() {
  document.getElementById('kalimat').style = "opacity:1";
}

function aktipesan1() {
  document.getElementById('kalimat').innerHTML = document.getElementById('pesan1').innerHTML;
  document.getElementById('kolombaru').style = "position:relative;opacity:1;transform:scale(1);";
}

const vketik2 = document.getElementById('pesan2').innerHTML;

function aktipesan2() {
  document.getElementById('wallpaper').style = "transform: scale(1.5);";
  document.getElementById('kolombaru').style = "";
  document.getElementById('kalimat').innerHTML = "";
  new TypeIt("#kalimat", {
    strings: ["" + vketik2],
    startDelay: 20,
    speed: 40,
    cursor: true,
    deleteSpeed: 50,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function() {
      setTimeout(aktipesan3, 500);
    },
  }).go();
}

const vketik3 = document.getElementById('pesan3').innerHTML;
document.getElementById('pesan3').innerHTML = "";

function aktipesan3() {
  document.getElementById('kalimat').style = "display:none";
  const pesan3 = document.getElementById('pesan3');
  pesan3.style = "position:relative;opacity:1;transform: scale(1)";
  document.getElementById('wallpaper').style = "transform: scale(1)";
  fthilang();
  ftganti = 2;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan3", {
    strings: ["" + vketik3],
    startDelay: 1,
    speed: 45,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function() {
      pesan3.innerHTML = vketik3;
      setTimeout(otomatis, 600);
      setTimeout(aktipesan4, 1010);
    },
  }).go();
}

function aktipesan4() {
  document.getElementById('wallpaper').style = "transform: scale(1.5);";
  document.getElementById('kalimat').innerHTML = document.getElementById('pesan4').innerHTML + nama + " 🥳";
  document.getElementById('kalimat').style = "transform:scale(1.2)";
  setTimeout(aktipesan5, 1000);
}

const vketik5 = document.getElementById('pesan5').innerHTML;
document.getElementById('pesan5').innerHTML = "";

function aktipesan5() {
  fthilang();
  ftganti = 3;
  setTimeout(ftmuncul, 300);
  document.getElementById('wallpaper').style = "transform: scale(1);";
  new TypeIt("#pesan5", {
    strings: ["" + vketik5],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function() {
      document.getElementById('pesan5').innerHTML = vketik5;
      setTimeout(aktipesan6, 800);
    },
  }).go();
}

const vketik6 = document.getElementById('pesan6').innerHTML;
document.getElementById('pesan6').innerHTML = "";

function aktipesan6() {
  document.getElementById('wallpaper').style = "transform: scale(1.5);";
  new TypeIt("#pesan6", {
    strings: ["" + vketik6],
    startDelay: 1,
    speed: 52,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function() {
      document.getElementById('pesan6').innerHTML = vketik6;
      setTimeout(aktipesan7, 800);
    },
  }).go();
}

const vketik7 = document.getElementById('pesan7').innerHTML;
document.getElementById('pesan7').innerHTML = "";

function aktipesan7() {
  fthilang();
  ftganti = 1;
  setTimeout(ftmuncul, 300);
  document.getElementById('wallpaper').style = "transform: scale(1);";
  
  // TAMPILIN PESAN 7 DULU
  document.getElementById('pesan7').style.display = "block";
  document.getElementById('pesan7').style.opacity = "1";
  document.getElementById('pesan7').style.transform = "scale(1)";
  document.getElementById('pesan7').innerHTML = vketik7;
  
  // BARU MUNCULIN TOMBOL
  fungsi = 1;
  setTimeout(tombol, 600);
}

const vketik81 = document.getElementById('pesan8').innerHTML;
document.getElementById('pesan8').innerHTML = "";
const vketik9 = document.getElementById('pesan9').innerHTML;
document.getElementById('pesan9').innerHTML = "";
const vketik10 = document.getElementById('pesan10').innerHTML;
document.getElementById('pesan10').innerHTML = "";

function aktipesan8() {
  document.getElementById('pesan5').style = "display:none";
  document.getElementById('pesan6').style = "display:none";
  document.getElementById('pesan7').style = "display:none";
  document.getElementById('pesan8').style = "";
  document.getElementById('wallpaper').style = "transform: scale(1);";
  ftganti = 4;
  ftmuncul();
  new TypeIt("#pesan8", {
    strings: ["" + vketik8, "" + vketik9],
    startDelay: 20,
    speed: 45,
    cursor: true,
    deleteSpeed: 30,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function() {
      document.getElementById('pesan8').innerHTML = vketik9;
      setTimeout(otomatis, 1300);
      setTimeout(aktipesan10, 1710);
    },
  }).go();
}

function aktipesan10() {
  document.getElementById('wallpaper').style = "transform: scale(1.5);";
  fthilang();
  ftganti = 5;
  setTimeout(ftmuncul, 300);
  otoaktipesan = 1;
  otomatis();
  setTimeout(toaktipesan, 300);
  setInterval(berjatuhan, 400);
  fungsi = 2;
  setTimeout(tombol, 2000);
}

let otoaktipesan = 0;

function toaktipesan() {
  document.getElementById('kalimat').innerHTML = vketik10;
  document.getElementById('kalimat').style = "transform:scale(1);font-size:24px;font-family:var(--gaya-font2)";
}

// ====== KLIK LOVE ======
let slov = 0;

document.getElementById("lv1").onclick = function() {
  document.getElementById('lv1').style = "opacity:0;transform:scale(0.5)";
  slov += 1;
  this.onclick = null;
  checkslov();
}
document.getElementById("lv2").onclick = function() {
  document.getElementById('lv2').style = "opacity:0;transform:scale(0.5)";
  slov += 1;
  this.onclick = null;
  checkslov();
}
document.getElementById("lv3").onclick = function() {
  document.getElementById('lv3').style = "opacity:0;transform:scale(0.5)";
  slov += 1;
  this.onclick = null;
  checkslov();
}
document.getElementById("lv4").onclick = function() {
  document.getElementById('lv4').style = "opacity:0;transform:scale(0.5)";
  slov += 1;
  this.onclick = null;
  checkslov();
}

function checkslov() {
  if (slov == 4) {
    document.getElementById('kolombaru').style = "position:relative;transform:scale(1)";
    otomatis();
    setTimeout(aktipesan2, 400);
  }
}

// ====== PERTANYAAN AKHIR ======
async function pertanyaan() {
  const { isConfirmed: prtanya } = await swals.fire({
    title: nama + ' ' + tanya,
    text: '' + opstanya,
    imageUrl: '' + document.getElementById('fotostiker6').src,
    showCancelButton: true,
    confirmButtonText: '' + tompositif,
    cancelButtonText: '' + tomnegatif,
    confirmButtonColor: '#FF6B9D',
    cancelButtonColor: '#B8A9C9',
  });
  if (prtanya) {
    await swalst.fire({
      title: '' + document.getElementById('katatambahan').innerHTML,
      timer: 2000,
      imageUrl: '' + document.getElementById('stikerditolak').src,
    });
    vketik8 = vketik81;
    aktipesan8();
  } else {
    await swalst.fire({
      title: '' + document.getElementById('kataditolak').innerHTML,
      timer: 2000,
      imageUrl: '' + document.getElementById('stikerditolak').src,
    });
    vketik8 = "";
    aktipesan8();
  }
}