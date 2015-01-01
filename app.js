var number = 1;
var string = 'string';
var bool = true;

var arr = [number, string, bool];


$(document).ready(function(){
	var x = 1;
	var xo = function(elem){

	if(x == 1){
	// text('X');
	console.log('X');
	$(elem).text('X');
	x--;
	} else {
	// text('O')
	$(elem).text('O');
	x++;
	}
  }
  var a1=1;
  var a2=1;
  var a3=1;
  var b1=1;
  var b2=1;
  var b3=1;
  var c1=1;
  var c2=1;
  var c3=1;
  $("#a1").click(function(){
    
    if(a1==1){
    	xo(this);
    	a1++;
    }
    	
   
  });
  $("#a2").click(function(){
    xo('#a2');
  });
  $("#a3").click(function(){
    xo(this);
  });
  $("#b1").click(function(){
    xo(this);
  });
  $("#b2").click(function(){
    xo(this);
  });
  $("#b3").click(function(){
    xo(this);
  });
  $("#c1").click(function(){
    xo(this);
  });
  $("#c2").click(function(){
    xo(this);
  });
  $("#c3").click(function(){
    xo(this);
  });
});



// $(document).ready(function(){
//   $("#b1").click(function(){
//     $("#b1").text("x");
//   });
// });

// $(document).ready(function(){
//   $("#b2").click(function(){
//     $("#b2").text("x");
//   });
// });

// $(document).ready(function(){
//   $("#b3").click(function(){
//     $("#b3").text("x");
//   });
// });

// $(document).ready(function(){
//   $("#c1").click(function(){
//     $("#c1").text("x");
//   });
// });

// $(document).ready(function(){
//   $("#c2").click(function(){
//     $("#c2").text("x");
//   });
// });

// $(document).ready(function(){
//   $("#c3").click(function(){
//     $("#c3").text("x");
//   });
// });






//console.log('herp');

//console.log(arr[0]);

//var obj = {key:'value'};
//console.log(obj['key']);

//if(false) {
// 	console.log(1);
// } else {

// console.log('else');

// }

// for(var x=1; x<5; x++) {

// 	console.log(x);
// }

// for (var x = 2; x<=10; x+=2) {
// console.log(x);

// }


// for(var x = 1; x <= 10; x++) {
// 	if(x % 2 == 0) {
// 		console.log(x);
// 	} 
// }

// for(var x = 1; x <= 100; x++) {
// 	if(x % 5 == 0) {
// 		console.log(x);
// 	} 
// }

// while (x < 10) {
// 	console.log('derp');
// 	x++;
// }

// var derp = function(x) {
// 	console.log(x);
// }

// derp('adas');



// var greater = function(x,y) {
// 	if(x > y) {
// 		console.log(x);
// 	} else if(y > x) {
// 		console.log(y);
// 	} else {
// 		console.log(x);
// 		console.log(y);
// 	}
// }

// greater(7, 10);

// var arr1to10 = [];
// var ray = function (y) {
//  for(x = 1; x<=10; x++) {
//  	y.push(x);
//  }
// }
// ray(arr1to10);
// console.log(arr1to10);



// for(var x = 1; x <= 10; x++) {
	
// 		console.log(x);
	
// }
