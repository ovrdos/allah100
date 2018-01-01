// Copywright 2018 Allah100.com
// Kamal Hakim
// names-app.js
// Functions for displaying the names of Allah on allah100.com

let names = [
"ALLAH",
"AR-RAHMAAN",
"AR-RAHEEM",
"AL-MALIK",
"AL-QUDDUS",
"AS-SALAM",
"AL-MU’MIN",
"AL-MUHAYMIN",
"AL-AZIZ",
"AL-JABBAR",
"AL-MUTAKABBIR",
"AL-KHAALIQ",
"AL-BAARI",
"AL-MUSAWWIR",
"AL-GHAFFAAR",
"AL-QAHHAAR",
"AL-WAHHAB",
"AR-RAZZAQ",
"AL-FATTAH",
"AL-ALIM",
"AL-QAABID",
"AL-BAASIT",
"AL-KHAAFID",
"AR-RAFI",
"AL-MU’IZZ",
"AL-MUZIL",
"AS-SAMI’",
"AL-BASEER",
"AL-HAKAM",
"AL-ADL",
"AL-LATEEF",
"AL-KHABEER",
"AL-HALEEM",
"AL-AZEEM",
"AL-GHAFOOR",
"ASH-SHAKOOR",
"AL-ALIYY",
"AL-KABEER",
"AL-HAFIZ",
"AL-MUQEET",
"AL-HASEEB",
"AL-JALEEL",
"AL-KAREEM",
"AR-RAQEEB",
"AL-MUJEEB",
"AL-WAASI’",
"AL-HAKEEM",
"AL-WADUD",
"AL-MAJEED",
"AL-BA’ITH",
"ASH-SHAHEED",
"AL-HAQQ",
"AL-WAKEEL",
"AL-QAWWIYY",
"AL-MATEEN",
"AL-WALIYY",
"AL-HAMEED",
"AL-MUHSEE",
"AL-MUBDI",
"AL-MUEED",
"AL-MUHYI",
"AL-MUMEET",
"AL-HAYY",
"AL-QAYYOOM",
"AL-WAAJID",
"AL-MAAJID",
"AL-WAAHID",
"AL-AHAD",
"AS-SAMAD",
"AL-QAADIR",
"AL-MUQTADIR",
"AL-MUQADDIM",
"AL-MU’AKHKHIR",
"AL-AWWAL",
"AL-AKHIR",
"AZ-ZAAHIR",
"AL-BAATIN",
"AL-WAALI",
"AL-MUTA’ALI",
"AL-BARR",
"AT-TAWWAAB",
"AL-MUNTAQIM",
"AL-AFUWW",
"AR-RA’OOF",
"MAALIK-UL-MULK",
"ZUL-JALAALI-WAL-IKRAM",
"AL-MUQSIT",
"AL-JAAMI’",
"AL-GHANIYY",
"AL-MUGHNI",
"AL-MAANI’",
"AD-DAARR",
"AN-NAAFI’",
"AN-NOOR",
"AL-HAADI",
"AL-BADI’",
"AL-BAAQI",
"AL-WAARIS",
"AR-RASHEED",
"AS-SABOOR"
];

var displayName = function(name) {
  var obj = document.createElement('div');
  obj.onmouseover = function(){highlight(this)};
  obj.onmouseout = function(){content(this)};
  obj.className = 'cont cover';
  obj.innerHTML = '<span>'+name+'</span>';
  var element = document.getElementById('content');
  if (element.appendChild) element.appendChild(obj);
  console.log(name);
}

var highlight = function(obj) {
 obj.className = 'cont light';
}

var content = function(obj) {
 obj.className = 'cont cover';
}

var init = function() {
  for (let name of names) {
    displayName(name);
  }
}

