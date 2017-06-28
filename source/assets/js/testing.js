// var animal = {
// 	'genus':'bird',
// 	'species':'raven',
// 	'callType':'sqawk',
// 	'noisy':'true',
// 	'maxOffspring':5
// }


// var counties = ['Humboldt', 'Del Norte', 'Mondecito', 'Marin'];

// var year	=	2017,
// 	month	=	"October",
// 	day		=	31,
// 	holiday	=	"Halloween";

// var myObject = {
// 	'year'		:	2017,
// 	'month'		:	'October',
// 	'day'		:	31,
// 	'holiday'	:	'Halloween'
// };

// var string1 = 'This is a sample string';
// var string2 = 'This is another sample string';
// var string3 = 'Is this the thing called Mt, Everest';
// var string4 = 'This is the sherpa on the Mount';

// var regex = /this/;

// console.log(regex.test(string1));
// console.log(regex.test(string2));
// console.log(regex.test(string3));
// console.log(regex.test(string4));


// var animal1 = 'Tiger';
// var animal2 = 'Bear';
// var animal3 = 'Rhino';

// var answer = window.prompt('Type YES, NO, or MAYBE. Then click OK');

// if(answer === 'YES'){
// 	console.log('You typed YES');
// }
// else if(answer === 'NO'){
// 	console.log('You typed NO');
// }
// else if(answer === 'MAYBE'){
// 	console.log('You typed MAYBE');
// }
// else {
// 	console.log('You rebel');
// }


// var anotherAnswer = window.prompt('Type YES, NO, or MAYBE. Then click OK');

// switch(anotherAnswer){
// 	case "YES":
// 	console.log('You typed YES');
// 	break;
// 	case "NO":
// 	console.log('You typed NO');
// 	break;
// 	case "MABYE":
// 	console.log('Undecided');
// 	break;
// 	default:
// 	console.log('You REBEL');
// 	break;
// }

// var wantForChristmas = 'puppy',
// 	gotForChristmas = 'cat',
// 	cryAboutIt = false;

// if(wantForChristmas === gotForChristmas){
// 	console.log('Yay');
// 	cryAboutIt = false
// }
// else{
// 	console.log('Sad Kids');
// 	cryAboutIt = true
// }

// if(cryAboutIt){
// 	console.log("KIds say AAAAAHHHHHH");
// }

// var animal = 'cat';
// //var dog == 'dog';

// animal === 'cat' ? console.log('You will be a cat herder') : console.log('You will be a dog catcher')

// var job = (animal === 'cat'?'Cat herder':'dog ctacher');

// for(var i = 0; i < 20; i+=1){
// 	console.log(i);
// }

// var pageNames = ['Home', 'About', 'Products', 'Sandbox', 'Services'];

// for(var p in pageNames){
// 	console.log(p + ' is '+ pageNames[p])
// }


// var pages = {
// 	'first'  : 'Home',
// 	'second' : 'About',
// 	'third'  : 'Products',
// 	'fourth' : 'Sandbox',
// 	'fifth'  :' Services',
// };

// for(var p in pages){
// 	if(pages.hasOwnProperty(p)){
// 		console.log(p + ' is '+ pages[p])
// 	}
// }

// for(var i = 0; i < 10; i++){
// 	console.log(i+"This will loop 10 times");
// } 

// var myArray = [true, true, true, false, true, true];
// var myItem = null;
// while(myItem != false){
// 	console.log('myArray has' + myArray.length + 'items now. This loop will go until we pop() a false')
// 	myItem = myArray.pop();
// }

// for(i = 0; i < pageNames.length; i += 1){
// 	var currentPageTitle = pageNames[i];
// 	if(document.title == currentPageTitle){
// 		console.log('We ARE here: ' + currentPageTitle);
// 	}else{
// 		console.log('We are NOT here: ' + currentPageTitle);
// 	}
// }


// function speak(){
// 	console.log('Arf');
// 	console.log('Meow');
// 	console.log('Moo');
// }

// function fuddify(speech){
// 	if(typeof speech !== 'string') return 'Nice twt Wabbit';

// 	speech = speech.replace(/r/g, 'w');
// 	speech = speech.replace(/R/g, 'W');
// 	return speech;
// }


// function isOdd(num){
// 	if(num % 2 === 0){
// 		return false;
// 	}
// 	else{
// 		return true;
// 	}
// }

// function saySomething(what, howMany){
// 	var what = (typeof what != 'undefined') ? what: 'Default Speech';
// 	var howMany = (typeof howMany != 'undefined') ? howMany: 10;

// 	for(var i = 0; i < howMany; i++){
// 		console.log(what +"("+1+")");
// 	}
// }

var date = new Date();

document.body.innerHTML = "<p>The date today is: " +(date.getMonth()+1)+ "/" +date.getDate() + "/" + date.getFullYear() + "</p>"









