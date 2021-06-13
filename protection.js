
function noselect(){
	return false;
};
document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;

window.onkeydown = function(evt){
	if(evt.keyCode === 123){
		return false;
	};
};

window.onkeypress = function(evt){
	if(evt.keyCode == 123){
		return false;
	};
};

document.onkeydown = function(e){
	if(event.keyCode == 123){
		return false;
	};
	if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
		return false;
	};
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
		return false;
	};
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
		return false;
	};
	if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
		return false;
	};
	if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
		return false;
	};
	if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
		return false;
	};
	if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
		return false;
	};
	if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
		return false;
	};
};

(function(){
	var el = document.createElement("div");
	el.style.cssText = "pointer-events:auto";

	if(el.style.pointerEvents !== "auto"){
		el = null;

		var _lock = function(evt){
			evt = evt || window.event;
			var el = evt.target || evt.srcElement;

			if(el && /\slocked\s/.test(" " + el.className + " ")){
				if(evt.stopPropagation){
					evt.preventDefault();
					evt.stopPropagation();
				}else{
					evt.returnValue = true;
					evt.cancelBubble = true;
				}
			};
		};
		if(document.addEventListener){
			document.addEventListener("mousedown", _lock, false);
			document.addEventListener("contextmenu", _lock, false);
		}else{
			document.attachEvent("onmousedown", _lock);
			document.attachEvent("oncontextmenu", _lock);
		}
	};
})();