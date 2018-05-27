//$("<div>Hello World!</div>").appendTo('#aTower');

//var aTower = ["1", "2", "3"]




//$("#aTower").html("*<br>**<br>***")



//設定母陣列
var towerArray = ["*<br>", "**<br>", "***<br>"];

//設定A陣列
var upStarA = 0,downStarA = 3
var aTowerArray = towerArray.slice(upStarA, downStarA);
$("#aTower").html(aTowerArray)


//設定B陣列
//var upStarB = 0,downStarB = 0

//var bTowerArray = towerArray.slice(upStarB, downStarB)


//$("#bTower").html(bTowerArray)


//$("#aTower").html(towerArray[0]+"<br>")

$(document).ready(function() {
    $("#aToB").click(function() {
        
        var upStarA = upStarA +1;
        
        var aTowerArray = towerArray.slice(upStarA, downStarA);
        $("#aTower").html(upStarA)
        
        //lert(upStarA)
        
        
        while (upStarA +1){ 
            var upStarB = -1
            bTowerArray = towerArray.slice(upStarB, downStarB);
            upStarB = upStarB + 1
            
        }
       
    });

    $("#bToA").click(function() {
        $("#bTower").html("<br>");
        $("#aTower").html("*<br>**<br>***");

    });


});