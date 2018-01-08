// Copyright 2018 Allah100.com
// Kamal Hakim
// algos-app.js
// Functions for displaying the names of Allah on allah100.com

var displayName = function(name,index) {
  var obj = document.createElement('div');
  obj.id = index;
  obj.onmouseover = function(){highlight(this)};
  obj.onmouseout = function(){content(this)};
  obj.className = 'cont cover';
  obj.innerHTML = '<span>'+name+'</span>';
  var element = document.getElementById('content');
  if (element.appendChild) element.appendChild(obj);
}

var current_index;
var displayAttributes = function(index) {
   if (!index||index==current_index) return;
   var attr = values[index];
   document.getElementById('arabic').innerText=attr[0];
   document.getElementById('name').innerText=attr[1];
   document.getElementById('desc').innerText=attr[2];
   document.getElementById('detail').innerText=attr[3];
   document.getElementById('attributes').style.display='block';
   current_index = index;
   setBackground();
}

var setBackground = function() {
  var max = 1765;
  var min = 0;
  var idx = Math.random() * (max - min) + min;
  document.body.style.backgroundImage='url('+nature[Math.round(idx)]+')';
  curr = idx;
}
  
var highlight = function(obj) {
 displayAttributes(obj.id);
 obj.className = 'cont light';
}

var content = function(obj) {
 obj.className = 'cont cover';
}

var init = function() {
  var i=0;
  for (let attr of names) {
    displayName(attr,i);
    i++;
  }
displayAttributes(0);
}

