// Copywright 2018 Allah100.com
// Kamal Hakim
// names-app.js
// Functions for displaying the names of Allah on allah100.com

let names = ["ALLAH","ALRAHMAN","ALMALIK","ALHAKIM","ALSHAKUR", 
             "ALJABBAR","ALKARIM","ALGAFFAR", "ALHAKAM","ALHAQQ",
"ALRASHID", "ALLATEEF", "ALSALAAM", "ALBASIR", "MALIK-UL-MULK"];

var displayName = function(name) {
  var obj = document.createElement('div');
  obj.className = 'cont';
  obj.onmouseover = function(){highlight(this)};
  obj.onmouseout = function(){content(this)};
  obj.innerHTML = '<span>'+name+'</span>';
  var element = document.getElementById('content');
  if (element.appendChild) element.appendChild(obj);
  console.log(name);
}

var highlight = function(obj) {
 obj.className = 'cover';
}

var content = function(obj) {
 obj.className = 'cont';
}

var init = function() {
  for (let name of names) {
    displayName(name);
  }
}

