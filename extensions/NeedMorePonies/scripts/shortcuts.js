shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:false,disable_in_input:false,target:document,keycode:false};if(!c)c=d;else{for(var e in d){if(typeof c[e]=="undefined")c[e]=d[e]}}var f=c.target;if(typeof c.target=="string")f=document.getElementById(c.target);var g=this;a=a.toLowerCase();var h=function(d){d=d||window.event;if(c["disable_in_input"]){var e;if(d.target)e=d.target;else if(d.srcElement)e=d.srcElement;if(e.nodeType==3)e=e.parentNode;if(e.tagName=="INPUT"||e.tagName=="TEXTAREA")return}if(d.keyCode)code=d.keyCode;else if(d.which)code=d.which;var f=String.fromCharCode(code).toLowerCase();if(code==188)f=",";if(code==190)f=".";var g=a.split("+");var h=0;var i={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"};var j={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123};var l={shift:{wanted:false,pressed:false},ctrl:{wanted:false,pressed:false},alt:{wanted:false,pressed:false},meta:{wanted:false,pressed:false}};if(d.ctrlKey)l.ctrl.pressed=true;if(d.shiftKey)l.shift.pressed=true;if(d.altKey)l.alt.pressed=true;if(d.metaKey)l.meta.pressed=true;for(var m=0;k=g[m],m<g.length;m++){if(k=="ctrl"||k=="control"){h++;l.ctrl.wanted=true}else if(k=="shift"){h++;l.shift.wanted=true}else if(k=="alt"){h++;l.alt.wanted=true}else if(k=="meta"){h++;l.meta.wanted=true}else if(k.length>1){if(j[k]==code)h++}else if(c["keycode"]){if(c["keycode"]==code)h++}else{if(f==k)h++;else{if(i[f]&&d.shiftKey){f=i[f];if(f==k)h++}}}}if(h==g.length&&l.ctrl.pressed==l.ctrl.wanted&&l.shift.pressed==l.shift.wanted&&l.alt.pressed==l.alt.wanted&&l.meta.pressed==l.meta.wanted){b(d);if(!c["propagate"]){d.cancelBubble=true;d.returnValue=false;if(d.stopPropagation){d.stopPropagation();d.preventDefault()}return false}}};this.all_shortcuts[a]={callback:h,target:f,event:c["type"]};if(f.addEventListener)f.addEventListener(c["type"],h,false);else if(f.attachEvent)f.attachEvent("on"+c["type"],h);else f["on"+c["type"]]=h},remove:function(a){a=a.toLowerCase();var b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(!b)return;var c=b["event"];var d=b["target"];var e=b["callback"];if(d.detachEvent)d.detachEvent("on"+c,e);else if(d.removeEventListener)d.removeEventListener(c,e,false);else d["on"+c]=false}}