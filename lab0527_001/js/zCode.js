var arr = Array.from([1, 2, 3, 4, 5, 6, 7, 8], x => x * 10);  
// arr[0] == 10;  
// arr[1] == 20;  
// arr[2] == 30;  

var c=document.getElementById("aCanvas");
var ctx=c.getContext("2d");
var i=0
for(i = 0; i < 6; i++){
    ctx.fillStyle="#FF0000";
    ctx.fillRect(200-i*5,10+i*15,arr[i],10);
};


$(document).ready(function() {
    $("#aToB").click(function() {
        var c = document.getElementById("aCanvas");
        var ctx = c.getContext("2d");

        for (i = i+1; i < 6; i++) {
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(200 - i * 5, 10 + i * 15, arr[i], 10);
        };
    })
})
    
        
        
            
    