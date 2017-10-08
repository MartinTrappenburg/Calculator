var display = document.getElementById("Display");
var Ans = 0;
var Operator = '';
function Buttons (F) {
	display.innerHTML = display.innerHTML + F;
}
console.log("testing")
function Operator1 (F) {
	Getal1 = display.innerHTML;
	Operator = '+';
	console.log('Getal1='+Getal1);
	display.innerHTML='';

}
function Operator2 (F) {
	Getal1 = display.innerHTML;
	Operator = '-';
	display.innerHTML='';
}
function Operator3 (F) {
	
	Getal2 = display.innerHTML;
	console.log('Getal2='+Getal2);
	if (Operator == '+') {
		Ans = +Getal1 + +Getal2;
		display.innerHTML = Ans;
	}
	if (Operator == '-') {
		Ans = +Getal1 - +Getal2;
		display.innerHTML = Ans;
	}
	if (Operator == '*') {
		Ans = Math.round(+Getal1) * +Getal2;
		display.innerHTML = Ans;
	}
	if (Operator == '/') {
		Ans = +Getal1 / +Getal2;
		display.innerHTML = Ans;
	}
}

function Operator4 (F) {
	Getal1 = display.innerHTML;
	Operator = '*';
	display.innerHTML='';
}
function Operator5 (F) {
	Getal1 = display.innerHTML;
	Operator = '/';
	display.innerHTML='';
}

function Operator7 (F) {
	display.innerHTML = '';
}
var Getal1 = '';
var Getal2 = '';