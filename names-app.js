// Copywright 2018 Allah100.com
// Kamal Hakim
// names-app.js
// Functions for displaying the names of Allah on allah100.com

let names = ["Allah", "Al-Rahman", "Al-Malik", "Al-Hakim", "Al-Shakur", 
"Al-Rashid", "Al-Lateef", "Al-Salaam", "Al-Basir", "Malik-Ul-Mulk"];

var displayName = function(name) {
  var obj = document.createElement('div');
  obj.className = 'cont';
  obj.innerHTML = '<span>'+name+'</span>';
  if (document.body.appendChild) document.body.appendChild(obj);
  console.log(name);
}

var init = function() {
  for (let name of names) {
    displayName(name);
  }
}

