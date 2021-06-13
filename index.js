let on = true;
let off = false;
//Для тех кто увидел код :)
if(on){
	console.log("%c ЧТОООООООООООООООООООООООООООООООООООООООООООООООООО, да ты по умнел, если хочешь помочь проекту или идеями, пишите создателю сайта, в дискорд сервер Котик#9821", "background: #222; color: #bada55");
};
//Запоминалочка сайтов
localStorage.index_kc = "Compilater Codes";
localStorage.index_kc_info = "Category: kc, index: information";
localStorage.index_kc_pf = "Category: kc, index: profiles";
localStorage.index_kc_wH = "Category: kc, index: new News";
localStorage.index_kc_ts = "Category: kc, index: the task";
localStorage.index_kc_bh = "Category: kc, index: buy host";

//dater
var data = new Date();
let month = data.getMonth();
let date = data.getDate();
let year = data.getFullYear();
if(month > 12){ var getmonth = month - 1 }else{ var getmonth = `${month}`; }
if(month => 0){ var getmonth = month + 1; };
var dat = `${date}.${getmonth}.${year}`;
console.info("Дата: " + dat);
//addEventListener
window.onload = (function(){
	document.addEventListener("keydown",function(event){
		if(event.keyCode == 13){
			buttonId.blur();
			alert("А хер те");
		};
	});
	//Показ даты
	const dater = document.getElementById("dater");

	setInterval(() => {
		dater.textContent = `Дата: ${dat}`;
	}, 10000);
});