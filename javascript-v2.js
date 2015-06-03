console.log('##############');
console.log('Start ---- 001');
var numbersToN = function (n) {
	var result = [];
	while(n) {
		result.push(n);
		n-=1;
	}
	return result.reverse().join(', ');	
};
var numbersToN2 = function(n) {
	var result = [];
	for (var i = 0; i < n; i++) {
		result[i] = i+1;
	}
	return result.join(', ');
};
var numbersToN3 = function(n) {
	var result = '';
	for (var i = n ; i > 0; i-=1) {
		result = i + ' ' + result ;
	}
	return result;
};
var sampleNumbers = [3,7,1];
for (var i = sampleNumbers.length - 1; i >= 0; i--) {
	console.log(numbersToN3(sampleNumbers[i]));
}
console.log('End ------ 001');
console.log('##############');
console.log('##############');
console.log('Start ---- 002');
var numNotbyThreeSeven = function(n) {
	var result = [];
	while(n) {
		if (n % 3 !== 0 && n % 7 !== 0) {
			result.push(n);
		}
		n-=1;
	}
	return result.reverse().join(', ');
};
var numNotbyThreeSeven2 = function(n) {
	var result = [];
	for (var i = 0; i < n; i++) {
		if (i % 3 !== 0 && i % 7 !== 0) {
			result.push(i);
		}
	}
	return result.join(', ');
};
var numNotbyThreeSeven3 = function(n) {
	var result = [];
	for (var i = 0; i < n; i++) {
		result.push( (i % 3 !== 0 && i % 7 !==0) ? i : undefined);
	}
	result = result.filter(function(n){ return n !== undefined }); // removes all undefined elements
	return result.join(' ');
};
var sampleNumbers = [10, 30, 60];
for (var i = 0; i < sampleNumbers.length; i++) {
	console.log('Numbers NOT divisible by 3 and 7 (from 1 to '+sampleNumbers[i]+')');
	console.log(numNotbyThreeSeven3(sampleNumbers[i]));
	console.log('================');
}
console.log('End ------ 002');
console.log('##############');
console.log('##############');
console.log('Start ---- 003');
var minAndMax = function(numArr) {
	var result = [];
	var min = numArr[0];
	var max = numArr[0];
	for (var i = numArr.length - 1; i >= 0; i--) {
		if (numArr[i] < min) {
			min = numArr[i];
		}
		if (numArr[i] > max) {
			max = numArr[i];
		}
	}
	result.push(min);
	result.push(max);
	return result;
};
var minAndMax2 = function(numArr) {
	var len = numArr.length;
	var result = {
		max: numArr[0],
		min: numArr[0]
	};
	for (var i = len - 1; i >= 0; i--) {
		if (result.max < numArr[i]) {
			result.max = numArr[i];
		}
		if (result.min > numArr[i]) {
			result.min = numArr[i];
		}
	}
	return result;
};
var arr = [5,-2, 0.5, 2, 221.05,  220, -68, 12 ];
console.log('Original sequence of numbers: '+ arr);
var minMax = minAndMax(arr);
console.log('Min = '+minMax[0]+'	 Max = '+minMax[1]);
var minMaxObj = minAndMax2(arr);
console.log('Min = '+minMaxObj.min+'	 Max = '+minMaxObj.max + ' (using object)');
console.log('End ------ 003');
console.log('##############');
console.log('##############');
console.log('Start ---- 004');
var lexicoProps = function(obj) {
	var props = [];
	for(var prop in obj) {
		props.push(prop);
	}
	props.sort();
	return props;
};
var merry = {name:'Maria',age:25,eyeColor:'gray'}; // for test 
console.log(lexicoProps(merry));
console.log(lexicoProps(document));// doc.,window and nav. ca be tested only in browser
console.log(lexicoProps(window)); // doc.,window and nav. ca be tested only in browser
console.log(lexicoProps(navigator)); // doc.,window and nav. ca be tested only in browser
console.log('End ------ 004');
console.log('##############');