// START problem 001
console.log("=================");
console.log("START Test Problem 001 (N=15)");
var test = 15;
for (var i = 1; i <= test; i+=1) {
	console.log(i);
}
console.log("END Test Problem 001 (N=15)");
console.log("=================");
var output = 'All number from 1 to N : ';

function processFormData () {
	var input = document.getElementById('task1-input').value;
	for (var i = 1; i <= input; i+=1) {
		output += i + ' ';
	}
	console.log('Start test (problem 001)');
	console.log(output);
	console.log('End test (problem 001)');
	var div = document.getElementById("answer-element");
	div.innerHTML = output ;
	document.body.appendChild(div);
	output = 'All number from 1 to N : ';
}
// END problem 001 - 		START 002
console.log("=================");
console.log("START Test Problem 002 (N=30)");
var test = 30;
for (var i = 0; i <= test; i++) {
	if (i % 3 !==0 && i % 7 !==0) {
		console.log(i);
	}
}
console.log("END Test Problem 002 (N=30)");
console.log("=================");
var numCheck = function () {
var number = document.getElementById('task2-input').value;
	for (var i = 0; i <= number; i++) {
		if (i % 3 !==0 && i % 7 !==0) {
		output += ' '+i;
		}
	}
	var div = document.getElementById("answer-element2");
	div.innerHTML = '';
	div.innerHTML += output ;
	document.body.appendChild(div);
	output = 'All number from 1 to N : ';
};
// END problem 002			START 003
console.log("=================");
console.log("START Test Problem 003");
var arr = [5,-2, 0.5, 2, 221.05,  220, -68, 12 ];
var data = ''
for (var i = arr.length - 1; i >= 0; i--) {
	data += arr[i]+ ' ';
};
console.log('Test array of numbers for problem 3 : '+data);
var max = 0;
var min = 0;
max += arr[0];
min += arr[0];
for (var i = 0; i < arr.length; i++) {
	if (max < arr[i]) {
		max = arr[i];
		console.log(max);
	}
	if (min > arr[i]) {
		min = arr[i];
	}
}
console.log('Min = '+min+' Max = '+max);
console.log("END Test Problem 003");
console.log("=================");
console.log("=================");
console.log("START Test Problem 004");
var sortProperties = function (object) {
	var props = [];
	for (var propName in object) {
		props.push(propName);
	}
	props.sort();
	console.log('First property: '+props[0]);
	console.log('Last property: '+props[props.length-1]);
};
sortProperties(document);
sortProperties(window);
sortProperties(navigator);
console.log("END Test Problem 004");
console.log("=================");
