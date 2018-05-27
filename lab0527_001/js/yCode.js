// var c = $("#aCanvas")
// var ctx = c.getContext("2d");
// // Create gradient


var s= $("#sel1").val();
 
var c=document.getElementById("aCanvas");
var ctx=c.getContext("2d");


var lastXstart = 0, lastYstart = 390, lastYwidth = 400



// //第8層
// ctx.fillStyle="#FF0000";
// ctx.fillRect(lastXstart,lastYstart,lastYwidth,10);

//第6層
$.lvSix = function(){
ctx.fillStyle="#FF0000";
ctx.fillRect(lastXstart+10,lastYstart-15,lastYwidth-20,10);}

//5
$.lvFive = function(){
ctx.fillStyle="#FF0000";
ctx.fillRect(lastXstart+10*4,lastYstart-15*2,lastYwidth-20*4,10);}

//4
$.lvFour = function(){
ctx.fillStyle="#FF0000";
ctx.fillRect(lastXstart+10*4*2,lastYstart-15*3,lastYwidth-20*4*2,10);}

//3
$.lvThree = function(){
ctx.fillStyle="#FF0000";
ctx.fillRect(lastXstart+10*4*3,lastYstart-15*4,lastYwidth-20*4*3,10);}

//2
$.lvTwo = function(){
ctx.fillStyle="#FF0000";
ctx.fillRect(lastXstart+10*4*4,lastYstart-15*5,lastYwidth-20*4*4,10);}

//1
$.lvOne = function(){
ctx.fillStyle="#FF0000";
ctx.fillRect(lastXstart+10*4*5,lastYstart-15*6,lastYwidth-20*4*5,10);}

function lvOne(){}






// //產生A塔
// for(var leNum = 1;leNum<4;leNum++){
//     var levColor = 'rgb('+
//       Math.floor(Math.random()*256)+','+
//       Math.floor(Math.random()*256)+','+
//       Math.floor(Math.random()*256)+')';
//     ctx.fillStyle=levColor;
// ctx.fillRect(lastXstart+leNum*10,lastYstart-leNum*15,lastYwidth-leNum*20,10);
// }