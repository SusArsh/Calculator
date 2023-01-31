// // var num = 0;
// // var quest1 = prompt ("Hayastani mayraqaghaqy");
// // var quest2 = prompt ("Hayastani petakan lezun");
// // var quest3 = prompt ("Hayastani petakan krony");
// // var quest4 = prompt ("Rusastani mayraqaghaqy");
// // var quest5 = prompt ("AMN-i mayraqaghaqy");



// // if (quest1 === "Yerevan"){
// //     num += 1;
// // }
// // if (quest2 === "Hayeren"){
// //     num += 1;
// // }
// // if (quest3 === "Qristoneutyun"){
// //     num += 1;
// // }
// // if (quest4 === "Moscow"){
// //     num += 1;
// // }
// // if (quest5 === "Washington"){
// //     num += 1;
// // }
// // console.log("Duq vastaketsiq " + num + " miavor");




// // var num = 658;
// // var sum = 0;

// // while (num > 0) {
// //     sum += num % 10;
// //     num = parseInt(num / 10);
// // }
// // console.log(sum);



// // var x = parseFloat(prompt ('Enter a number'));
// // var y = prompt ('Mathematical operation type');
// // var z = parseFloat(prompt('Enter a number'));
// // var result = 0;

// // if(y === "+"){
// //   result = x + z;
// // }else if(y === "-"){
// //   result = x - z;
// // }else if(y === "*"){
// //   result = x * z;
// // }else{
// //   result = x / z;
// // }
// // console.log (parseFloat(result));




// // var n = prompt('Enter any number')
// //   var power = 0;
// //   if(n==1 || n == 0){
// //     power = undefined;
// //   }
// //   while(n > 1 ){
// //     n = n / 2;
// //     if(n % 2 != 0 && n != 1){
// //       power = false;
// //     }else{
// //       power = true;
// //     }
// //   }
// // console.log(power);


// // for (var i = 0; i < 10; i++){
// //     for (var j = 1; j < 10; j++){
// //         var s = '  ';
// //         console.log (s+= ' ');
// //     }
// //     console.log ('*');
// // }



// // var s = '';
// // var i = prompt();
// // var j = prompt();

// // while (i < j){
// //     console.log (' ');
// //     j--;

// //     if (i > j){
// //         console.log (s + '*');
// //         i+=2;
// //         j= 0;

// //     }
// // }


// // var i = 6;
// // var j =0;
// // debugger;
// // while (j < i) {
// //   var s = '' ;
// //   j --;
// //      console.log( s += ' ');

// //    if (j < i){

// //     console.log ( s += '*');
// //     i+=2;
// //    }
// //  }


// // var num1 = parseFloat(prompt('Enter any number'));

// //  switch (true){
// //   case num1 >= 0 && num1 <= 9 : console.log('Tivy mianuish e');
// //   break;
// //   case num1 >= 10 && num1 <= 99 : console.log('Tivy erknish e');
// //   break;
// //   case num1 >= 100 && num1 <= 999 : console.log('Tivy eranish e');
// //   break;
// //   case num1 >= 1000 && num1 <= 9999 : console.log('Tivy qaranish e');
// //   break;
// //   default: console.log ('Tvi nisheri qanaky mets e chorsits');
// //  }

// //  if (num1 >= 0 && num1 <= 9){
// //     console.log('Tivy mianuish e');
// //  }else if (num1 >= 10 && num1 <= 99){
// //     console.log('Tivy erknish e');
// //  }else if (num1 >= 100 && num1 <= 999){
// //     console.log('Tivy eranish e');
// //  }else if (num1 >= 1000 && num1 <= 9999){
// //     console.log('Tivy qaranish e');
// //  }else {
// //     console.log ('Tvi nisheri qanaky mets e chorsits');
// //  }



// // var space = "";
// // var line = "*";

// // for (var i = 5; i >= 1; i--){
// //     space += " ";
// //     for (var j = 1 ; j <= i; j++){

// //         console.log("*");
// //     }
// //     console.log('<br/>');



// // }

// // var i;
// // for(i = 0; i <= 5; i++){
// //     document.write('*'.repeat(i).concat("<br>"))
// // }

// // var i = 0;
// // out = '';
// //   while( i <= 4){

// //     out = out + '*';     

// //     console.log( out);
// //     i++;
// // } 

// // var i, j, k;
// // for(i=5; i>=1; i--)
// // {
// //  for(j=i; j<5; j++)
// //   document.write("  " + "  ");
// //  for(k=i*2; k>1; k--)
// //   document.write("*");

// // }

// //  var i = 0;
// //  var j= 0 ;
// //  var str = " ";
// //  var line = "*";
// //  while (i  < 5){

// //     i++;

// //     if (j === i){

// //         j+=2;
// //         j = 0;
// //     }

// //     console.log (str + line);

// //    line += "**";
// //    str = "";

// //  }


// // var str = "";
// // var line = "*";

// // 			for (var i = 5; i > 1; i--){
// // 				str = "";
// // 				for (var j = i; j > 4; j--){
// //                     str += " ";

// // 			}
// //             console.log (str + line);
// //             line += "**";
// //         }


// // function fib(n) {
// //     if (fib(n) === fib(n - 1) + fib(n - 2)){
// //         console.log (fib(n));
// //     }

// //   }

// //    fib(3) ; 
// //    fib(7) ; 


// // var x = 0;
// // var y = 1;

// // for (var i = 1; i <= 15; i++) {
// // 	var current = x + y;
// // 	x = y;
// // 	y = current;
// // 	console.log(current);
// // }



// // function power(a, b){
// //     var res = 1;
// //     for (var i = 0; i < b; i++){
// //         res *= a;
// //     }
// //     console.log(res);
// // }

// // power(5, 2);


// // function summ(a){
// //     var answer = 0;
// //     for (var i = 0; i <= a; i++){
// //         answer += i;
// //     }
// //     console.log(answer);
// // }

// // summ(5);

// // function agr(num){
// //     var rev = 0;
// //     var x = 0;
// //     var amount = 0;
// //     while(num !=0){
// //       x = num % 10;
// //       rev = rev *10 + x;
// //       num = parseInt(num/10);
// //       if(num % x ===0){
// //         console.log(x);
// //       }
// //     }
// //   }
// //   agr(123456789);


// // var count = 0;
// // function sum( a, b ) {
// //   count++;
// //   return a+b;
// //   }
// //   sum (5, 10);
// //   sum (5, 10);
// //   sum (5, 10);
// //   sum (5, 10);

// //   console.log(count);



// //   var num = +prompt("Enter any number");
// //   var count = 0;
// //   for(var i = 0; i < num; i++){
// //     if (num % i == 0){
// //       count += i;
// //     }
// //   }
// //     if (count == num){
// //       console. log("Tivy idealakan e")
// //     }else {
// //       console.log("Tivy idealakan che");
// //     }



// var sec = 3704; // 3704 / 60 = 61.74 = 62 rope 14 vrk 

// var min = sec /60 ;
// // min = sec - min;
// var hour = min / 60; // 61.74 / 60 = 1. 74 = 1 zham 1 rope 14 vrk
// // hour = min - hour;


//     // for (var i = 1; i <= 12; i++){
//     //   for (var j = 1; j < 59; j++){
//       // function time(a){
//       //   min = sec / 60;
//       //   hour = min / 60;
//       //   var duration = hour + ":" + 
//       //   min + ":";
//       //   console.log (duration);
//       //  return hour + ":" + min + ":" + sec; 

//       // }

//       // time(3704);

//   //   function time(a){
//   //   for (var i = 1; i <= 12; i+=60){
//   //     for (var j = 1; j < 59; j+=60){
//   //       var duration = hour + ":" + min + ":" + (sec - min - hour);
//   //       console.log(duration); 
//   //     }

//   //   }
//   //   return hour + ":" + min + ":" + sec; 
//   // }

//   // time(3704);


//   function Time(date) {
//     date = Number(date);
//     var x = parseInt(date / 3600);
//     console.log(x);
//     var y = parseInt(date % 3600 / 60);
//     console.log(y);
//     var z = parseInt(date % 3600 % 60);
//     console.log(z);

//     if(x<0){
//       var hour = x;
//     }else if (x==1){
//       hour = x + "hour";
//     }else if(x>1){
//       hour = x + "hours";
//     }else{
//       hour = '';
//     }
//     if(y<0){
//       var minute = y;
//     }else if (y==1){
//       minute = y + "minute";
//     }else if(y>1){
//      minute = y + "minutes";
//     }else{
//       minute = '';
//     }
//     if(z<0){
//       var second = z;
//     }else if (z==1){
//       second = z + "second";
//     }else if(z>1){
//      second = z + "second";
//     }else{
//       second = '';
//     }

//     return hour +":"+ minute +":"+ second;
//   }
//   console.log(Time(3704));


// var count = 0;
// function Word (a, b){
//     for (i = 0; i <= a.length; i++){
//         if (a[i]+ a[i+1]=== b){
//             count++;
//         }

//     }
//     return count;
// }
// console.log(Word("kakach", "ka"));



// var array = [5, 23, 85, 62];
// var max = 0;
// function arr (maximum){
//     for (i = 0; i <= array.length; i++){
//         if (max = array[i]){
//             max++;
//         }
//     }
//     return max;
// }
// console.log(arr(array));


// var num1 = +prompt('Enter any number');
// var num2 = +prompt('Enter any number');

// function isBig(num1, num2){
//     if (num1 - num2 > 0){
//         return num1;
//     }else if (num1 - num2 < 0){
//         return num2;
//     }else{
//         return num1, num2;
//     }

// }
// console.log(isBig(num1, num2));

// let one = prompt("first number")
// let two = prompt("second number")


// while(two - one > 0 ){
//   console.log(two + ' is max');
//   break;

//   }
//   while(one - two > 0){
//     console.log(one + ' is max');
//     break;
//   }
//   while(one - two === 0){
//     console.log('one === two');
//     break;
//   }


// var max = 0;
// var x = 0;
// var num = +prompt('Enter any number');
// function bigger(num){
//     while (num !== 0){
//         x = num % 10 ;

//         max *= 10 + x;
//         num = parseInt(num / 10);
//         console.log (x);

//     }
// }
// console.log();
// bigger(num)


// function Num(num){
//     if(num === parseInt(num)){
//       return num +  "   "+ "amboghj tiv e"
//     }else if(num > parseInt(num)){
//       return num +  "   "+"kotorakayin tiv e"
//     }
//   }
//   console.log(Num(58));


// var num = String(prompt('Enter any number'));
// var str = '123456789';
// var str1 = '';
// var comma = ',';
// for (var i = 0; i < str.length; i +=3){
//     if (str[i]= 5){
//         str1 += str[i] += comma;
//     }
// }
// console.log(str1);


// var max = 0;
// var x = 0;
// var num = +prompt('Enter any number');
// function bigger(num){
//     while (num !== 0){
//         x = num % 10 ;

//         max *= 10 + x;
//         num = parseInt(num / 10);
//         console.log (x);

//     }
// }
// console.log();
// bigger(num)



// function fibonachi(n){
//     if (n == 0){
//         return 0;
//     }else if (n == 1){
//         return 1;
//     }else {
//         return fibonachi(n - 1) + fibonachi(n - 2);
//     }

// }
// console.log(fibonachi(15));





// var count = 0;
// function divider(n){
//     for (var i = 0; i <= 50 ; i++){
//         if(50  % i == 0){
//             count ++;

//         }

//     }
//     return count;
// }
// console.log(divider(50));


// var lines = 7;
// var str = " ";
// var star = "*";
// for (var i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }



// var n = prompt();
// var x = "";
// for (var i = 1; i <= n; i++) {
//   for (var j = 0; j < i; j++) {
//     x += "*";
//   }
//   x += "\n";  
// }
// for (var i = 1; i <= n - 1; i++) {
//   for (var j = 0; j < n - i; j++) {
//     x += "*";
//   }
//   x += "\n";
// }
// console.log(x);

// var erankyun = {
//     a: 3,
//     b: 4,
//     c: 5
// };
// function pyut(){
//     if(this.c **2 == this.a **2 + this.b **2){
//         return 'yes';
//     }else {
//         return 'no';
//     }
// }
// erankyun.pyut = pyut;
// console.log(erankyun.pyut());


// var num = 0;
// var user = {
//     name: 'Jane',
//     surname: 'Johnson',
//     age: '30',
//     city: 'Yerevan',
//     count: function(){
//         for(var i in user){            
//             if(typeof user[i] !== 'function' ){
//                 num += 1;
//             }
//         }
//         return num;
// }
// };
// console.log(user.count());

//  var obj1 = {
//     name: 'John',
//     surname: 'Johnson',
//     age: null,
//     nationality: null,
//     child:{
//         name: 'Jane',
//         age: 8,
//         gender: 'female'
//         },
//     };
//     for(var i in obj1){
//         if(typeof obj1[i] == 'object' ){
//             // for (var j in obj1[j]){
//                 return obj1[i];


//             }  
//             console.log(i + ': ' + obj1[i]);
//         }
//     }

// let obj1 = {
//     herou: "Vardan Mamikonyan",
//     age: 1561
//   };


//   let obj2 = {
//     herou: "Vardan Mamikonyan",
//     age: 1561
//   };
//   function poxos(obj1, obj2){
//   for (let i in obj1){
//     if(obj1[i]= obj2[i]){
//         return true;
//     }
//     return false;
//   }
// }
//   console.log(poxos());


// var arr = [5, 13, 25, 85, 46, 58];
// var count = 0;
// for(var i = 0; i < arr.length; i++){           OKOKOKOKOKOK
//     count += arr[i];
// }
// console.log(count);
// 



// var arr1 = [5, 13, 25, 85, 46, 58];
// var arr2 = [];
// for(var i = 0; i < arr1.length; i++){                 OKOKOKOK
//     arr2[i] = arr1[arr1.length-i-1];

// }
// console.log(arr2);



// var arr = [5, 13, 25, 18, 74, 56];

// for(var i = 0; i < arr.length; i++){   ??????????????????
//     arr[i] = arr[arr.length-i-1];
// }
// console.log(arr);


// var arr = [5, 13, 25, 18, 74, 56, 26,];

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] < arr[i - 1]){
//         arr[i] = arr[i - 1];                  

//     }

// }

// console.log(arr);


// var arr = [5, 13, 25, 18, 74, 56, 26];
// var arr1 = [];
// function forArray(arr, num1, num2){

//     for(var i = 0; i < arr.length; i++){



//         // arr1[0] = num1;
//         // arr1[arr1.length - 1] = num2;
//         if(num1 < num2){
//           arr1.length = num2 - num1;
//           arr1.i = arr.num1;

//         }

//     }
//     console.log(arr1);

//     return arr1;
// }

// console.log(forArray(arr, 2, 5));




//     var arr = [42, 25, 652, 85, 72,9]
//     for(var i = 0; i <= arr.length; i++){
//      for(var j = 0; j <= arr.length; j++){
//         if(arr[j] > arr[j+1]){
//           var x = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = x;
//     }
//   }
// }
// console.log(arr);





// var arr = [15, 32, 85, 57, 42];
// var arr1 = [623, 85, 96, 32, 412];
// var newArr = [];
// function concat(a, b){
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr1.length; j++){
//             newArr[i] = arr[i] ;
//             newArr[i+j+1] = arr1[j];
//         }
//     }
//     return newArr;

// }

// concat(arr, arr1);
// console.log(newArr);


// var arr = [15, 32, 85, 57, 42];
// var newStr = '';
// function join(a, b){
//      for(var i = 0; i < arr.length; i++){
//         for(var k = 0; k < newStr.length; k++){

//         }

//         if(newStr[newStr.length-1] === '+'){

//             console.log(newStr[newStr.length-1]);
//         }
//         newStr += arr[i] + b;
//      }
//      return newStr;
// }
// join(arr, '+');
// console.log(newStr);




// var arr = [[],[], 5, 87, null, undefined, {},'hello'];
// var max = arr[0];

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//         if(typeof arr[i]=='number' && arr[i] == max){
//             console.log(arr[i]);
//     }
//     }
// }


// var arr = [12, undefined, 52, 'hello', 83, true, 5, 326];
// var x = 0;
// function pop (a){
//         var newArr = arr.length;
//         x = arr[arr.length-1];
//         arr.length = newArr-1;
//     return x;
// }
// pop(arr);
// console.log(x);



// var arr = [12, undefined, 52, 'hello', 83, true, 5, 326];
// function push(array, a, b){
//         arr[arr.length] = a;
//         arr[arr.length] = b;
//     return arr;
// }
// push(arr,  25, false);
// console.log(arr.length);

// var arr = [ 5, 87, null, 25, 63, [true, 132],undefined, {},'hello'];
// var arr1 = [];
// var nested = arr;

// function flat(array, a){
//     for(var i = 0; i < arr.length; i++){


//         if(typeof arr[i] === 'object' && typeof arr[i] !== null && Array.isArray(arr[i])){
//             var nestedArray = arr[i];
//             for(var j in nestedArray){
//                 arr1[j] = nestedArray[j];  
//             }
//         }
//             arr1[i] = arr[i]; 
//     }
//     return arr1;
// }
// flat(arr, 2);
// console.log(arr1);


// var arr = [ 5, 87, null, 25, 63, [true, 132],undefined, {},'hello'];
// function indexOf( arr,a, b){
//     for(var i = 0; i < arr.length; i++){
//         if( arr[i] === a && typeof b == 'number' && b >=0){
//             return i;
//         }else{
//             return -1;
//         }
//     }
// }
// console.log(indexOf( arr, 45, 0));




// function round(num){
//     if(typeof num === 'number' && num < parseInt(num + 0.5)){
//         return parseInt(num + 1);
//     }else{
//         return parseInt(num);
//     }
// }
// console.log(round(15.4));




















// var user1 = {
//     0: 1,
//     1: 2,
//     2: 5,
//     3: 3,
//     4: 6
// };

// var user2 = {
//     0: 2,
//     1: 8,
//     2: 9,
//     3: 7,
//     4: 1
// };

// function random(num1){   
//     for(var i in user1){
//         for(var j in user2){
//             if(Math.floor(Math.random(num1 * 100)) === user1.i || (Math.floor(Math.random(num1 * 100))=== user2.i)){
//                 delete user1.i || delete user2.i;
//     }
// }
//     }

//     return user1;
// }
// console.log(random(0.8407960827847412));
// console.log(random(0.9377062521450508));
// console.log(random(0.22396569927753185));
// console.log(random(0.5134471553544357));


// console.log(user1, user2);
// var obj1 = {};
// var obj2 = {};

// function random(){
//     var i = 90;
//     while(i !==0){
//         Math.random() * i;
//         --i;
//     }
//     return i;
// }
// console.log(random(user1, user2));


// function random(){
//     var x = Math.floor(Math.random()*10);
//      for(var i in user1){
//         if(x === user1[i]){
//             continue;
//             user1[i] = obj1[i];
//             return obj1;
//         }else{
//             return user1;
//         }
//      }
//     for(var j in user2){
//         if(x === user2[j]){
//             continue;

//             user2[j] = obj2[j];
//             return obj2;

//         }else{
//             return user2;
//         }
//         }

// };
//  console.log(random(user1, user2));

// function random(){
//     var x = Math.floor(Math.random()*10);
//      for(var i in user1){
//         for(var j in user2){
//             if(x === user1[i] || x === user2[j]){
//             delete user1[i] || delete user2[j];

//             user1[i] = obj1[i];
//             user2[j] = obj2[j];
//             return user1;
//         }else{
//             return user2;
//         }
//      }
//     }
// };

// console.log(random(user1, user2));


// let f = Math.floor(Math.random() * 90)
// console.log(f);
// var user1 = {
//     0: 15,
//     1: 2,
//     2: 64,
//     3: 72,
//     4: 3
// };

// var ob1 = {};


// for(var i in user1){
//    if(f === user1[i]){
//     delete user1[i];
//     i = '';


//   }
// }

// console.log(user1); 
// var user2 = {
//     0: 5,
//     1: 2,
//     2: 88,
//     3: 39,
//     4: 18
// };
// var ob2 = {};
// for(var j in user2){
//   if(f === user2[j]){
//     delete user2[j];
//     j = '';

//   }
// }
// console.log(user2);

// let f = Math.floor(Math.random() * 10)
// console.log(f);
// let o1 = {
//   x:1,
//   y:9
// }

// let ob1 = {}


// for(let i in o1){

//   if(f === o1[i]){
//     delete o1[i]
//     i = ''

//     console.log(o1);


//   }
// }


// let o2 = {
//   e:8,
//   o:5
// }
// let ob2 = {}
// for(let j in o2){

//   if(f === o2[j]){
//     delete o2[j]
//     j = ''

//     console.log(o2);


//   }
// }

// var str = 'This is a text';
// var newStr = str.split('');
// function substring(a, b){
//   for(var i = 0; i < newStr.length; i++){
//       if(a > b){
//         var x = 0;
//       a = x;
//       x = b;
//       b = x;
//       x = a;
//     }else {
//       a = a;
//       b = b;
//   }

// var answer = [];
// answer[0] = newStr[2];
// answer[answer.length-1] = newStr[7];
//   }
// return answer.toString();
// }
// console.log(substring(2, 8));

// var str = 'This is a text';
// var newStr = '';
// function substring(a, b){
//   if(a > b){

//     a = a;
//     b = b;
// }
// for(var i = 0; i < str.length; i++){
// newStr[i] = str[i];   

// }
// return newStr;
// }

// console.log(substring(2, 8));



// var str = 'This is a text';
// var newStr = '';

// function capitalize(){

//   for(var i = 0; i < str.length; i++){
//     if(str[i] == ''){
//       str[i + 1] == str[i + 1].toUpperCase();
//     }

//     }
//     return newStr;
//   }

// console.log(capitalize(str));


// var str = 'This is a text';
// var newStr = str.split(' ');
// var text = newStr.map(function(elem){
//     newStr.shift();
//     return elem[0].toUpperCase() + elem.toLowerCase();

// });
// console.log(text);

// function capital(){

//   for (var i = 0; i < newStr.length; i++) {

//      var answer = newStr[i].toString().substring(0,1).toUpperCase() + newStr[i].toString().substring(1, newStr.length).toLowerCase();
//   }
//   return answer;
// }
// console.log(capital(str));

// var str = 'This is a text';
// var newStr = str.split(' ');
// var arr = [];
// for(var i = 0; i < newStr.length; i++){
//     var k = newStr[i].slice(1, newStr.length);
//     var x = newStr[i][0];
//     var y = x.toUpperCase();
//     var z =  y + k;
//     console.log(z);
//     arr.push(z);
// }
// console.log(arr);
// let u = arr.join(' ');
// console.log(u);


// var text = "This is a text";
// var newText = text.split(' ');
// // console.log(newText);
// var str = newText.pop();
// // console.log(str);
// var newStr = str.slice(2,str.length);
// // console.log(newStr);
// var answer = newText.map((elem,index)=>{

//     if(elem.length <= 2){
//         return elem;
//     }else{
//         var x = elem.slice(2, elem.length);
//         return x;
//     }


// })
// console.log(answer);
// var fin = answer.join(' ')
// console.log(fin);

// var str = 'Hello World';
// var indexof = function(a, b, c){
//     if(a == null) return -1;
//     var length = str.length;
//     if(c){
//         if(typeof c == 'number'){
//             i = (c < 0 ? Math.max(0, length + c) :c);
//          }
//     }
//     for(i = 0; i < length; i++){
//         if(str[i] === b){
//             return i;
//         }
//     }
//     return -1;
//  }

//   console.log (indexof (str, 'W', 2)); 

// var str = '   Hello World   ';

//     var newStr = '';
//     for(var i = 0; i < str.length; i++){

//         if(str[i ] === ' ' ){
//             continue;
//         }else if (str[i ] === ' '  && str[i + 1] !== ' '){
//             newStr += str[i] ;
//         }else{
//             newStr += str[i] ;

//         }
//     } 
// console.log(newStr);


// var i = 0;
// var j = 0;
// var x = '';
// var y = '*';
// while(i < 5){
//     if(j > 4){
//         j = ++i;
//         console.log(x + y);
//         y += '**';
//         x = '';
//     }else{ x += ' ';
//         ++j;
// }

// }

// function max(){

//     // var b= arguments[0];
//     // for(var i = 1; i < arguments.length; i++){
//     //     if(arguments[0] > b){
//     //         b = arguments[i];
//     //     }
//     // }
//     // var arr = [];

//     //     arr === arr.push(arguments[i]);
//     // var b= arr[0];

//     // for(var i = 0; i < arr.length; i++){
//     //     if(arr[i] > b){
//     //                 b = arr[i];
//     //             }
//     // }
//     // console.log(arr);
//     return Math.max.call(this, 45, 78, 63, 25, 456, 963, 123, 4, 8, 23);
// }
// console.log(max(45, 78, 63, 25, 456, 963, 123, 4, 8, 23));

// let a = 0;
// let b = 0;
// let x = '*';
// let y = ' ';
// while(a < 5 || b < 5){
//     a++;
//     b++;
//     console.log(x + y);
//     x += '**';


// }



// var str = '   This is a text   ';
// function trim(string){
//     var index = '';
//     var index1 = '';
//     for(var i = 0; i < str.length  ; i++){

//         var newStr = '';
//         for(var  j = i; j < str.length-j; j++){
//             newStr += str[i];

//         if(str[i] == ' ' ){
//             index += str[i] ;
//         }
//         if(str[i + 1]!= ' '){
//             break;

//         }
//         if(str[str.length - j] == ' '){
//             index1 += str[str.length - j];

//         }

//         }

//     }
//     // var newStr = '';
//     // newStr[i] += str[i]; 
//     return newStr;

// }
// console.log(trim(str));

// let str = '   This is a text   ';
// function trim(string){
//     let newStr = '';

//     let index = '';
//     let index1 = '';

//     for(let i = 0; i < str.length  ; i++){
//         // for(let j = 0; j < str.length; j++){

//             if(str[i] == ' ' && str[i +1] != ' '){
//                 index += str[i];

//             }else if(str[i] == ' ' && str[

//             ])
//             // if(str[str.length - i] == ' '){
//             //     index1 += str[str.length - i];

//             // }

//             if(str[i] !== index[i] ){
//                 newStr += str[i] ;
//             }

//         }
//         console.log(index.length);

//         console.log(newStr.length);


//     // }
//     return newStr;
// }
// console.log(trim(str));

// let str = '   This is a text   ';
// function trim(){
//     let newStr = '';
//     let index = '';
//     let index1 = '';
//     for(let i = 0; i < str.length  ; i++){
//             if(str[i] == ' '){
//                 index += str[i];  
//             }
//             if(str[str.length - i] == ' '){
//                 index1 += str[str.length - i];
//             }
//             if(str[i] != index[i] ){
//                 newStr += str[i] ;
//             }
//         }
//     return newStr;
// }
// console.log(trim(str));



// var user1 = {
//     0: 5,
//     1: 2,
//     2: 88,
//     3: 39,
//     4: 18
// };
// var user2 = {
//     0: 16,
//     1: 83,
//     2: 24,
//     3: 53,
//     4: 6
// };
// var user1 = {};
// var user2 = {};
// var arr1 = [];
// var arr2 = [];
// user1[0] = Math.floor(Math.random() * 90);
// user1[1] = Math.floor(Math.random() * 90);
// user1[2] = Math.floor(Math.random() * 90);
// user1[3] = Math.floor(Math.random() * 90);
// user1[4] = Math.floor(Math.random() * 90);
// console.log(user1);
// user2[0] = Math.floor(Math.random() * 90);
// user2[1] = Math.floor(Math.random() * 90);
// user2[2] = Math.floor(Math.random() * 90);
// user2[3] = Math.floor(Math.random() * 90);
// user2[4] = Math.floor(Math.random() * 90);
// console.log(user2);

// function random(){


//     var x = Math.floor(Math.random() * 90);
//     x--;
//          for(var i in user1){

//             for(var j in user2){
//                 if(x === user1[i] ){
//                      arr1[i] = x  ;

//                 }else if(x === user2[j] ){
//                      arr2[j] = x;
//                 }
//                 if(arr1.length == 5 && arr1.length > arr2.length){

//                 return 'Winner is user1';
//             }else{
//                 return 'Winner is user2';
//             }
//          }
//         }
//     }
//                 console.log(arr1);

//     console.log(random(user1, user2));


// let a = (comp, compare) => {
//     comp > compare ? console.log ('true'): console.log('false');

// }
// a(35, 20);


// let obj = {
//   count : 0,

//   up: function() {

//     this.count++;
//     return this;
//   },
//   down: function() {
//     this.count--;
//     return this;

//   },
//   startCount: function() {
//     this.count = 0;
//   }
// };
// // obj.up() + obj.up() + obj.down() + obj.up() + obj.up() + obj.down();
// obj.up().up().down().up().up().down();


// console.log(obj.count);



// let obj = {x: 1, y: 2, z: 3};
// let values  = Object.values(obj)

// console.log(values);


// let pattern = /[a-zA-Z]{1,5}\:[\/\/]{1,}[a-z]{3}\.[a-zA-Z0-9\-_\.\+]{1,}\.[a-z]{1,5}$/;
// console.log(pattern.test('https://www.photopea.ru'));


// let pattern = /^[0-9]{4}[\-|\.|\/]{1}(0?[1-9]|1[0-2]){2}[\-|\.|\/]{1}(0?[1-9]|1[0-9]|2[0-9]|3[0-1]){2}$/;
// console.log(pattern.test('2020/12/31'));


// let str = 'This is a text';

// String.prototype.capitalize = function(){
//   let newStr = this.split(' ');  
//   for (let i = 0; i < this.length; i++) {
//     if(newStr)
//     // return this[i].toString().substring(0,1).toUpperCase() + this[i].toString().substring(1, this.length).toLowerCase();
//   }
// }
// console.log(str.capitalize());

// let str = 'This is a text';
// let arr = str.split(' ');
// String.prototype.capitalize = function(){
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// let str2 = arr.join(' ');
// return str2;

// }
// console.log(str.capitalize(str));


// let arr= [12, true, 48, 39, 2, 'hello', 85];

// let arr = [25, 95, 7, 39, 11, 68, true];
// Array.prototype.sortingNumber = function(){
//     for (let i = 0; i < this.length; i++) {
//         if(typeof this[i] != 'number'){
//             return 'Array is empty'; 
//         }
// }
//     return this.sort(function(a, b){
//         return b - a;

//     })
// }

// console.log(arr.sortingNumber(arr));



// let obj = {
//     name: 'John',
//     surname: 'Johnson',
//     age: 53,
//     children: function(){
//         return this.surname;
//     }
// }
// let cnt = 0;
// Object.prototype.count = function(){
//     for(let i in obj){
//         if(typeof obj[i] !== 'function'){
//             cnt += 1;
//     }
//     }
//     return cnt;
// }
// console.log(cnt.count(obj));



// let arr = [12, 54, 63, true, 85, 'hello'];
// function filter(){
//     let numArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(typeof arr[i] == 'number'){
//             numArr.push(arr[i]);
//         }
//     }
//     return numArr;
// }
// console.log(filter(arr));

// let arr = [12, 54, 63, true, 85, 'hello'];
// let newArr = [];
// function filter(a){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr [i]== 'number'){
//              newArr.push(arr[i]);
//     }
// }
// }
// let a = filter(function(item, i, arr){
//     return a;
//     });
// console.log(newArr);

//         let arr = [12, 54, 63, true, 85, 'hello'];
//         let newArr = [];
//         let filter = (f) => {
//             for(let i = 0; i < arr.length; i++){
//                         if(typeof arr [i]=== 'number'){
//                              newArr.push(arr[i]);
//         }
//     }
// }
// let a = filter((item) => a);
// console.log(newArr);




// let arr = [12, 54, 63, true, 85, 'hello'];
// function find(x){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             return arr[i];
//         }
//     }
// }
// let x = find(function(item, i, arr){
//     if(typeof x == 'number'){
//             return x;
//      }
// });
// console.log(x);


//  let arr = [12, 54, 63, true, 85, 'hello'];
// let find = (i) => {
//     for(let i = 0; i < arr.length; i++){
//                 if(arr[i] % 2 == 0){
//                     return arr[i];
//                 }
//             }   
// }
// let x = find((item) => arr[i] % 2 == 0);

// console.log(x);


// let arr = [12, 54, 63, true, 2, 'hello'];
// function findLast(x){
//       for(let i = arr.length-1; i >= 0; i--){
//         if(arr[i] % 2 == 0){
//             return  arr[i];
//         }
//       }

// }

// let x = findLast(function(item, i, arr){
//     if(typeof x == 'number'){
//         return x;
//     }
// });
// console.log(x);

// let arr = [12, 54, 63, true, 2, 'hello'];
// let findLast = (i) => {
//     for(let i = arr.length-1; i >= 0; i--){
//                 if(arr[i] % 2 == 0){
//                     return  arr[i];
//                 }
//               }
// }
// let x = findLast((item) => typeof x === 'number');
// console.log(x);




//  let arr = [12,  54, 63,  true, 2, 'hello'];
// function findIndex(x){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] == 'boolean'){
//             return arr.indexOf(arr[i]);
//         }
//     }
//     }
// let x = findIndex(function(i){
//     return x ;
// });
// console.log(x);




//  let arr = [12,  54, 63,  true, 2, 'hello'];
//  let findIndex = (x) =>{
//     for(let i = 0; i < arr.length; i++){
//                 if(typeof arr[i] == 'boolean'){
//                     return arr.indexOf(arr[i]);
//                 }
//             }
//  }
//  let x = findIndex((i) => x);
//  console.log(x);




// let arr = [12,  54, 63,  true, 2, 'hello'];
// function findLastIndex(){
//     for(let i = arr.length - 1; i >= 0; i--){
//         if(typeof arr[i] == 'string'){
//             return arr.indexOf(arr[i]);
//         }
//     }
// }
// let x = findLastIndex(function(item, index, arr){
//     return x;
// });
// console.log(x);



// let arr = [12,  54, 63,  true, 2, 'hello'];
// let findLastIndex = () => {
//     for(let i = arr.length - 1; i >= 0; i--){
//                 if(typeof arr[i] == 'string'){
//                     return arr.indexOf(arr[i]);
//                 }
//             }
// }
// let x = findLastIndex((index) => x);
// console.log(x);


// class User {
//     firstName = null;
//     lastName = null;
//     age = null;
//     email = null;
//     #password = null;
//     constructor(_firstName, _lastName, _age, _email, _password){
//         this.firstName = _firstName;
//         this.lastName = _lastName;
//         this.age = _age;
//         this.email= _email;
//         this.#password = _password;
//     }
//     isDifficultPassword(){

//         if(this.#password = /^[0-9]{1,}$/.test('johnJ36*')){
//            return 1;
//         }else if(this.#password =/^[a-zA-Z0-9]{6,}$/.test('johnJ36*')){
//             return  2;
//         }else if(this.#password =/^[a-zA-Z0-9\-_\.\*]{6,}$/.test('johnJ36*')){
//             return 3;
//         }
//     }

// }
// let user11 = new User('John', 'Johnson', 36, 'john@mail.ru', 'johnJ36*')
// console.log(user11.isDifficultPassword());


// class Animal {
//     type = null;
//     lives = null;
//     eats = null;
//     constructor(_type, _lives, _eats){
//         this.type = _type;
//         this.lives = _lives;
//         this.eats = _eats;

//     }

// }
// class Dog extends Animal{
//     breeds = null;
//     constructor(_type, _lives, _eats,_breeds){
//         super(_type, _lives, _eats);
//         this.breeds = _breeds;

//     }
// }

// class Eagle extends Animal{
//     skin = null;
//     constructor(_type, _lives, _eats, _skin){
//         super(_type, _lives, _eats, _skin);
//         this.skin = _skin;
//     }
// }

// let myDog = new Dog('pet', 'land', 'meat', 'dog');
// let myBird = new Eagle('predator', 'sky', 'meat', 'feather');
// console.log(myDog.breeds);
// console.log(myBird.skin);



// class Electronic {
//     price;
//     works;
//     type;
//     brand;
//     model;
//     year;
//     constructor(_price, _works, _type, _brand, _model, _year){
//         this.price = _price;
//         this.works = _works;
//         this.type = _type;
//         this.brand = _brand;
//         this.model = _model;
//         this.year = _year;
//     }
//     showPrice(){
//         return this.price;
//     }
//     forBranding(){
//         return this.price / 4;
//     }
//     productionYear(){
//         if(this.year < 2020){
//             return this.price * 10 / 100;
//         }else{
//             return this.price * 20 / 100;
//         }
//     }
// }
// class TV extends Electronic{
//     display;
//     processor;
//     capacity;
//     constructor(_display, _processor, _capacity, _price, _works, _type, _brand, _model, _year){
//         super(_price, _works, _type, _brand, _model, _year);
//         this.display = _display;
//         this.processor = _processor;
//         this.capacity = _capacity;
//     }
//     showPrice(){
//         return this.price + this.productionYear() + this.forBranding();
//     }
// }
// let television = new TV('85 inch', 'Quad Core', 1200, 100000, 'electric current', 'LED', 'Samsung', 'F9000', 2020);
// console.log(television.showPrice()); 

// class Phone extends Electronic {
//     memory;
//     operatingSystem;
//     constructor( _memory, _operatingSystem, _price, _works, _type, _brand, _model, _year){
//         super(_price, _works, _type, _brand, _model, _year);
//         this.memory = _memory;
//     }
//     forOperatingSystem(){
//         return this.price * 50 / 100;
//     }
//     showPrice(){
//         return this.price + this.productionYear() + this.forBranding() + this.forOperatingSystem();

//     }
// }
// class Ios extends Phone {
//     simCards;
//     constructor(_simCards,_memory, _operatingSystem, _price, _works, _type, _brand, _model, _year){
//         super(_memory, _operatingSystem, _price, _works, _type, _brand, _model, _year);
//         this.simCards = _simCards;
//     }
//     showPrice(){
//         return this.price + this.productionYear() + this.forBranding() + this.forOperatingSystem();

//     }

// }
// let iphone = new Ios('single', 128, 'IOS', 250000, 'battery', 'mobile phone', 'Apple', 'iphone 13', 2021);
// console.log(iphone.showPrice()); 

// class Android extends Phone {
//     simCards;
//     constructor(_simCards, _memory, _operatingSystem, _price, _works, _type, _brand, _model, _year){
//         super(_memory, _operatingSystem, _price, _works, _type, _brand, _model, _year);
//         this.simCards = _simCards;
//     }
//     showPrice(){
//         return this.price + this.productionYear() + this.forBranding() + this.forOperatingSystem();

//     }
// }
// let mobile = new Android('two', 64, 'Android', 120000, 'battery', 'mobile phone', 'Samsung', 'A5', 2014);
// console.log(mobile.showPrice()); 

// class Computer extends Electronic {
//     display;
//     processor;
//     ram;
//     constructor(_display, _processor, _ram, _price, _works, _type, _brand, _model, _year){
//     super(_price, _works, _type, _brand, _model, _year);
//     this.display = _display;
//     this.processor = _processor;
//     this.ram = _ram;
//     }
//     propertiesForPrice(){
//         if(this.ram > 54){
//             return this.price * 15 / 100;
//         }else{
//             return this.price * 20 / 100;
//         }
//     }
//     showPrice(){
//         return this.price + this.productionYear() + this.forBranding() + this.propertiesForPrice();

//     }
// }
// class PersonalComp extends Computer{
//     constructor(_display, _processor, _ram, _price, _works, _type, _brand, _model, _year){
//         super(_display, _processor, _ram, _price, _works, _type, _brand, _model, _year);
//     }
//     // showPrice(){
//     //     return this.price + this.productionYear() + this.forBranding() + this.propertiesForPrice();
//     // }

//  }
// let bigComp = new PersonalComp('24 inches', 'Intel Core i7', 48, 160000, 'battery', 'computer', 'Samsung', 'Odyssey 2', 2019);
// console.log(bigComp.showPrice());

// class Notebook extends Computer {
//     constructor(_display, _processor, _ram, _price, _works, _type, _brand, _model, _year){
//         super(_display, _processor, _ram, _price, _works, _type, _brand, _model, _year);
//     }
//     // showPrice(){
//     //     return this.price + this.productionYear() + this.forBranding() + this.propertiesForPrice();
//     // }
// }
// let newMac = new Notebook('16inches', 'Core Duo', 64, 250000, 'battery', 'computer', 'Apple MacBook', 'Core Duo 1.83 13 Specs', 2016);
// console.log(newMac.showPrice());



// Date.prototype.toArmenianTime = function (){
// if(date.getDay().toLocaleString('hy') == '0'){
//     return 'կիրակի'
// }else if(date.getDay().toLocaleString('hy') == '1'){
//     return 'երկուշաբթի'
// }else if(date.getDay().toLocaleString('hy') == '2'){
//     return 'երեքշաբթի'
// }else if(date.getDay().toLocaleString('hy') == '3'){
//     return 'չորեքշաբթի'
// }else if(date.getDay().toLocaleString('hy') == '4'){
//     return 'հինգշաբթի'
// }else if(date.getDay().toLocaleString('hy') == '5'){
//     return 'ուրբաթ'
// }else if(date.getDay().toLocaleString('hy') == '6'){
//     return 'շաբաթ'
// }
// }
// let date = new Date()
// console.log(date.toArmenianTime(2));



// Date.prototype.toArmenianTime = function (){
//     let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let arr222 = ['հունվար', 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր', 'նոյեմբեր', 'դեկտեմբեր']
//     for(let i in arr3){
//         for(let j in arr222){
//         if(date.getMonth() == arr3[i]){
//             arr222[j] = arr3[i];
//         }
//     }
//     // return j;
//     }

// }
// let date = new Date()

// console.log(date.toArmenianTime(5));

// const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
// console.log([month, day, year]);



// let date1 = new Date();

// let options = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   weekday: 'long',
//   timezone: 'UTC',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',

// };

// console.log( date1.toLocaleString('ARM-hy', options) ); 

// let date = new Date();

// Date.prototype.toArmenianTime = function (){
//     let days = ['երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ', 'կիրակի'];
//     let dayIndex = this.getDay();
//     return days[dayIndex];
// };
// console.log(date.toArmenianTime());
// Date.prototype.toArmenianMonth = function(){
//     let months = ["հունվար", 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր', 'նոյեմբեր'];
//     let monthIndex = this.getMonth();
//     return months.monthIndex;
// }
// console.log(date.toArmenianMonth());
// Date.prototype.toArmenianTime = function (){
//     let newDate = this.getDate() + this.toArmenianMonth() + this.toArmenianTime() + this.getFullYear();
//     return newDate;
// }

// console.log(date.toArmenianTime(5))

// let date1212 = new Date;
// let str = '2022-08-28';
// let newDate = str.split('-').reverse().join('.');
// console.log(newDate);

// let date2 = new Date();

// Date.prototype.format = function(x){
//     if(/^[d]{2}[\.\-_\/]{1}[M]{2}[\.\-_\/]{1}[Y]{4}$/.test(x)){
//         return this.getDate() + '-' + (this.getMonth()+1) + '-' + this.getFullYear() ;
//     }else if(/^[M]{2}[\.\-_\/]{1}[Y]{4}[\.\-_\/]{1}[d]{2}$/.test(x)){
//         return  (this.getMonth()+1) + '-' + this.getFullYear() + '-' +  this.getDate();
//     }else if(/^[Y]{4}[\.\-_\/]{1}[M]{2}[\.\-_\/]{1}[d]{2}$/.test(x)){
//         return  this.getFullYear() + '-' + (this.getMonth()+1) + '-' +  this.getDate();
//     }else if(/^[d]{2}[\.\-_\/]{1}[Y]{4}[\.\-_\/]{1}[M]{2}$/.test(x)){
//         return  this.getDate() + '-' + this.getFullYear() + '-' + (this.getMonth()+1);
//     }else if(/^[M]{2}[\.\-_\/]{1}[d]{2}[\.\-_\/]{1}[Y]{4}$/.test(x)){
//         return  (this.getMonth()+1) + '-' + this.getDate() + '-' + this.getFullYear()  ;
//     }else if(/^[Y]{4}[\.\-_\/]{1}[d]{2}[\.\-_\/]{1}[M]{2}$/.test(x)){
//         return  this.getFullYear() + '-' + this.getDate() + '-' +  (this.getMonth()+1);
//     }
// }

// console.log(date2.format('MM.dd.YYYY'));


// let data = [
//   {
//     name: 'Phone',
//     url: '/phone',
//     children: [
//       {
//         name: 'Samsung',
//         url: '/samsung',
//         children: [
//           {
//             name: 'galaxy',
//             url: '/galaxy',
//             children: null
//           }
//         ]
//       },
//       {
//         name: 'Xiaomi',
//         url: '/xiaomi',
//         children: [
//           {
//             name: 'a45',
//             url: '/a45',
//             children: null
//           }
//         ]
//       }
//     ]
//   }
// ];


// function names(data) {
//     let i;
//         if(Array.isArray(this[i])){
//             return names(this[i][0]);

//         }

// return this.name;

// }

// console.log(names(data));



// function pow(num1, num2){
//     if(num2 == 0){
//         return 1;
//     }
//     return num1 * pow(num1,num2-1);
// };
// console.log(pow(2, 3));


// function a(x){
//     for(let i = 0; i < x[0].length; i ++){
//     if(x[0][i] == 'name'){
//         return x[0][i];
//     }

// }
// }

// console.log(a(data));
// let map = new Map(data);
// console.log(map.get('name'));

// function res(){
//   for(let n of this){
//     for(let elem in this.children){
//       while(this.children.elem != null){
//         return this.children.name;
//       }
//   }
//   }
//   return res(this.name + this.children.name);

// }

// console.log(res(data));

// let result = [];

// function getNames(arr) {

//     if (arr instanceof Array) {
//         for (let i = 0; i < arr.length; i++) {
//             getNames(arr[i]);
//         }
//     }
//     else {
//         for (let prop in arr) {
//             if (prop == 'name') {
//                 result.push(arr[prop])


//             }
//             if (arr[prop] instanceof Object || arr[prop] instanceof Array) {
//                 getNames(arr[prop]);

//             }
//         }
//     }
// return result;
// }

// console.log(getNames(data));

// let arr = [];

// function func1(num){

//   return function(num1){
//     return function(num2){
//       return function(){
//         return arr.push(num), arr.push(num1), arr.push(num2);
//       }
//     }
//   }

// }

// console.log(func1(1)(2)(3)());

// function test() {
// 	let counter = 0;

// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };

// let func = test();

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// function currentTime() {
//     let date = new Date(); 
//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     hour = updateTime(hour);
//     min = updateTime(min);
//     sec = updateTime(sec);

//     document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
//     let t = setTimeout(function(){ currentTime() }, 1000); 
// }

//   function updateTime(k) {
//     if (k < 10) {
//       return "0" + k;
//     }
//     else {
//       return k;
//     }
//   }

//  console.log(currentTime()); 


// let table = '<table>';
// let id = 1;
// for (i = 0; i < 10; i++) {
//     table += '<tr>';
//     for (j = 0; j < 10; j++) {
//         table += "<td class = 'datas' id = '" + (id++) + "'></td>";
//     }
//     table += '</tr>';

// }
// table += '</table>';

// let div = document.getElementById('for_main_table');
// div.innerHTML = table;

// let one = Math.floor(Math.random() * 100);
// let two = Math.floor(Math.random() * 100);
// let three = Math.floor(Math.random() * 100);
// console.log('one', one);
// console.log('two', two);
// console.log('three', three);

// document.querySelectorAll('.datas').forEach(el => {

//     el.addEventListener('click', function () {

//         if (+el.id === one) {
//             this.innerHTML = '<img src="money.jpg">';
//             alert('You win!!!!!!!!!!!!')
//         } else if (+el.id === two) {
//             this.innerHTML = '<img src="money.jpg">'
//             alert('You win!!!!!!!!!!!!')
//         } else if (+el.id === three) {
//             this.innerHTML = '<img src="money.jpg">'
//             alert('You win!!!!!!!!!!!!')
//         }
//         else {
//             this.innerHTML = '<img src="icon.jpg">'
//         }

//     })

// })






// let h1 = document.getElementsByTagName('h1')[0];
// let start = document.getElementById('strt');
// let stop = document.getElementById('stp');
// let reset = document.getElementById('rst');
// let sec = 0;
// let min = 0;
// let hrs = 0;
// let t;

// function work() {
//     sec++;
//     if (sec >= 60) {
//         sec = 0;
//         min++;
//         if (min >= 60) {
//             min = 0;
//             hrs++;
//         }
//     }
// }
// function add() {
//     work();
//     h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
//         + ":" + (min > 9 ? min : "0" + min)
//         + ":" + (sec > 9 ? sec : "0" + sec);
//     timer();
// }
// function timer() {
//     t = setTimeout(add, 1000);
// }

// timer();
// start.addEventListener('click', function () {
//     timer();

// })
// stop.addEventListener('click', function () {
//     clearTimeout(t);
// })
// reset.addEventListener('click', function () {
//     h1.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hrs = 0;
// })



// let date = new Date();


// document.querySelectorAll('th').forEach(el => {
// for(let i of days){
//     el.innerHTML =day();

// }


// })

// var D1 = new Date(),
//     D1last = new Date(D1.getFullYear(),D1.getMonth()+1,0).getDate(), // последний день месяца
//     D1Nlast = new Date(D1.getFullYear(),D1.getMonth(),D1last).getDay(), // день недели последнего дня месяца
//     D1Nfirst = new Date(D1.getFullYear(),D1.getMonth(),1).getDay(), // день недели первого дня месяца
//     calendar1 = '<tr>',
//     month=["հունվար", 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր', 'նոյեմբեր']; // название месяца, вместо цифр 0-11

// // пустые клетки до первого дня текущего месяца
// if (D1Nfirst != 0) {
//   for(var  i = 1; i < D1Nfirst; i++) calendar1 += '<td>';
// }else{ // если первый день месяца выпадает на воскресенье, то требуется 7 пустых клеток 
//   for(var  i = 0; i < 6; i++) calendar1 += '<td>';
// }

// // дни месяца
// for(var  i = 1; i <= D1last; i++) {
//   if (i != D1.getDate()) {
//     calendar1 += '<td>' + i;
//   }else{
//     calendar1 += '<td id="today">' + i;  // сегодняшней дате можно задать стиль CSS
//   }
//   if (new Date(D1.getFullYear(),D1.getMonth(),i).getDay() == 0) {  // если день выпадает на воскресенье, то перевод строки
//     calendar1 += '<tr>';
//   }
// }

// // пустые клетки после последнего дня месяца
// if (D1Nlast != 0) {
//   for(var  i = D1Nlast; i < 7; i++) calendar1 += '<td>';
// }

// document.querySelector('#calendar1 tbody').innerHTML = calendar1;
// document.querySelector('#calendar1 thead td:last-child').innerHTML = D1.getFullYear();
// document.querySelector('#calendar1 thead td:first-child').innerHTML = month[D1.getMonth()];


// let date = new Date(),
//     lastDayOfMonth = new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); 
//     lastDayOfWeek = new Date(date.getFullYear(),date.getMonth(),lastDayOfMonth).getDay();
//     firstWeekDay  = new Date(date.getFullYear(),date.getMonth(),1).getDay();
//     calendar1 = '<tr>',
//     month=["հունվար", 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր', 'նոյեմբեր']; // название месяца, вместо цифр 0-11


// if (firstWeekDay != 0) {
//   for(let  i = 1; i < firstWeekDay; i++){
//      calendar1 += '<td>';
//   }
//   } else { 
//   for(let  i = 0; i < 6; i++){
//      calendar1 += '<td>';
//   }

// }


// for(let  i = 1; i <= lastDayOfMonth; i++) {
//   if (i != date.getDate()) {
//     calendar1 += '<td>' + i;
//   }else{
//     calendar1 += '<td id="today">' + i;  
//   }
//   if (new Date(date.getFullYear(),date.getMonth(),i).getDay() == 0) { 
//     calendar1 += '<tr>';
//   }
// }


// if (lastDayOfMonth != 0) {
//   for(let  i = lastDayOfMonth; i < 7; i++) {
//     calendar1 += '<td>';
//   }
// }

// document.querySelector('#calendar1 tbody').innerHTML = calendar1;
// document.querySelector('#calendar1 thead td:last-child').innerHTML = date.getFullYear();
// document.querySelector('#calendar1 thead td:first-child').innerHTML = month[date.getMonth()];


// let backgr = document.getElementById('for_pics');
// let one = document.getElementById('first_pic');
// let two = document.getElementById('second_pic');
// let three = document.getElementById('third_pic');
// let four = document.getElementById('fourth_pic');
// let five = document.getElementById('fifth_pic');




//     one.addEventListener('click', function (){
//     one.style = "width: 700px; height: 500px; position: absolute;margin-left: 300px; "
//     two.style = "opacity: 0.1";
//     three.style = "opacity: 0.1";
//     four.style = "opacity: 0.1";
//     five.style = "opacity:0.1";
//     del();

//   })
//   two.addEventListener('click', function (){
//     two.style = "width: 700px; height: 500px; position: absolute;margin-left: 300px; "
//     one.style = "opacity: 0.1";
//     three.style = "opacity: 0.1";
//     four.style = "opacity: 0.1";
//     five.style = "opacity:0.1";
//     del();

//   })
//   three.addEventListener('click', function (){
//     three.style = "width: 700px; height: 500px; position: absolute;margin-left: 300px; "
//     two.style = "opacity: 0.1";
//     one.style = "opacity: 0.1";
//     four.style = "opacity: 0.1";
//     five.style = "opacity:0.1";
//     del();

//   })
//   four.addEventListener('click', function (){
//     four.style = "width: 700px; height: 500px; position: absolute;margin-left: 300px; "
//     two.style = "opacity: 0.1";
//     three.style = "opacity: 0.1";
//     one.style = "opacity: 0.1";
//     five.style = "opacity:0.1";
//     del();

//   })
//   five.addEventListener('click', function (){
//     five.style = "width: 700px; height: 500px; position: absolute;margin-left: 300px; "
//     two.style = "opacity: 0.1";
//     three.style = "opacity: 0.1";
//     four.style = "opacity: 0.1";
//     one.style = "opacity:0.1";
//     del();
//   })




//   function del(){
//     this.addEventListener('click', function(){
//       this.style = "width: 200px; height: 200px; position: static; opacity: 1 ";

//     })
//   }






// //  let one = document.getElementById('one');
//  let input = document.getElementById('nums');
// //  let plus = document.getElementById('plus');
// //  let numbers = document.getElementById('numbers');
// let numbers = document.getElementsByClassName('numbers');
// console.log(numbers);

//   for(let i = 0; i < numbers.length; i++){
//     numbers[i].addEventListener('click',function(){
//     numbers.append += input;
//   })
//  }


// 

let a = '';
let b = '';
let sign = '';
let finish = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%'];

const out = document.querySelector('.screen p');

function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;



document.querySelector('.buttons').addEventListener('click', function () {
  if (!event.target.classList.contains('btn')) {      // click ենք անում ոչ թե button-ի վրա, այլ դատարկ տեղում
    return;
  }
  if (event.target.classList.contains('ac')) {      // click ենք անում AC-ի վրա, որի համար արդեն ունենք ֆունկցիա
    return;
  }
  out.textContent = '';
  const key = event.target.textContent;                // Ստանում ենք սեղմած կոճակը
 
  if (digit.includes(key)) {                      // Սեղմել ենք 0-9 թիվ կամ․
    if (b === '' && sign === '') {
      a += key;

      out.textContent = a;                      // մեր սեղմած թիվը վերագրում ենք a փոփոխականին
    } else if (a !== '' && b !== '' && finish) {
        b = key;
        finish = false;
        out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
      console.log(a, b, sign);
      return;
    }
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    
    return;
  }
  if (key === '=') {
    if(b === ''){
      b === a;
    }
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        a = parseFloat(a);
        break;
      case '-':
        a = a - b;
        break;
      case 'X':
        a = a * b;
        break;
      case '/':
        if(b === '0'){
          out.textContent = '!!!!!!!';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a / b;
        break;
        case '%':
        a = a * b / 100;
        break;

    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
    processNumString();
  }
})               
var processNumString = function (str) {
  var floatNum = parseFloat(str);
  var res = floatNum % 1 == 0 ? floatNum.toFixed(0) : floatNum.toFixed(1);
  return res;
}
