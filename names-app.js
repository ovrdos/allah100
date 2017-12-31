// Copywright 2018 Allah100.com
// Kamal Hakim
// names-app.js
// Functions for displaying the names of Allah on allah100.com

let names = ["ALLAH","ALRAHMAN","ALMALIK","ALHAKIM","ALSHAKUR", 
             "ALJABBAR","ALKARIM","ALGAFFAR", "ALHAKAM","ALHAQQ",
"ALRASHID", "ALLATEEF", "ALSALAAM", "ALBASIR", "MALIK-UL-MULK"];

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
 obj.className = 'cont lite';
}

var content = function(obj) {
 obj.className = 'cont cover';
}

var init = function() {
  for (let name of names) {
    displayName(name);
  }
}

