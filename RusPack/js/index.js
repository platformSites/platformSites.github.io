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

let hour = data.getHours();
let minute = data.getMinutes();
if(hour == "1"){
	var hours = "01";
}else if(hour == "2"){
	var hours = "02";
}else if(hour == "3"){
	var hours = "03";
}else if(hour == "4"){
	var hours = "04";
}else if(hour == "5"){
	var hours = "05";
}else if(hour == "6"){
	var hours = "06";
}else if(hour == "7"){
	var hours = "07";
}else if(hour == "8"){
	var hours = "08";
}else if(hour == "9"){
	var hours = "09";
}else{
	var hours = `${hour}`;
}
if(minute == "1"){
	var minutes = "01";
}else if(minute == "2"){
	var minutes = "02";
}else if(minute == "3"){
	var minutes = "03";
}else if(minute == "4"){
	var minutes = "04";
}else if(minute == "5"){
	var minutes = "05";
}else if(minute == "6"){
	var minutes = "06";
}else if(minute == "7"){
	var minutes = "07";
}else if(minute == "8"){
	var minutes = "08";
}else if(minute == "9"){
	var minutes = "09";
}else{
	var minutes = `${minute}`;
}
var tim = `${hours}:${minutes}`;

let month = data.getMonth();
let date = data.getDate();
let year = data.getFullYear();
if(month > 12){ var getmonth = month - 1 }else{ var getmonth = `${month}`; }
if(month => 0){ var getmonth = month + 1; };
var dat = `${date}.${getmonth}.${year}`;

console.info("Дата: " + `${dat} ${tim}`);
//addEventListener
window.onload = (function(){
	document.addEventListener("keydown",function(event){
		if(event.keyCode == 13){
			buttonId.blur();
			alert("А хер те");
		};
	});
	//Показ даты
	setInterval(() => {
		const dater = document.getElementById("dater");

		dater.textContent = `Дата: ${dat} ${tim}`;
	}, 5000);
});