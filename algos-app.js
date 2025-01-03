import data from data-app.js;

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

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
  var max = 43;
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
  for (let attr of data.names) {
    displayName(attr,i);
    i++;
  }
displayAttributes(0);
}



}
/*
     FILE ARCHIVED ON 13:44:36 Aug 22, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:04:24 Dec 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.528
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.012
  cdx.remote: 10.044
  LoadShardBlock: 659.372 (3)
  PetaboxLoader3.resolve: 526.468 (4)
  PetaboxLoader3.datanode: 176.372 (4)
  load_resource: 141.895
*/