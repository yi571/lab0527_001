var numDisk = [1,2,3,4,5,6,7.8];
var aDisk= [1];
var bDisk = [] ,cDisk= []  , x=null, y=null,z=null
$("#aTowerP").html(aDisk);

//數量選擇函數
function selectBox (){
    var startBox = $("#numBox option:selected").text();
    aDisk= numDisk.slice(0,startBox);
    
    // return(aDisk)
}

// $("#aTowerP").html(aDisk);


$(document).ready(function(){
    
    //數量選擇選單
    $("#selectBox").click(function() {
        selectBox();
        bDisk = [];
        cDisk = [];
        $("#aTowerP").html(aDisk);
        $("#bTowerP").html(bDisk);
        $("#cTowerP").html(cDisk);
        
        //數量1隱形
        if(aDisk[0]==1){
            $("#alv01").removeClass("d-none")
            $("#alv02").addClass("d-none")
            $("#alv03").addClass("d-none")
            $("#alv04").addClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        //數量2隱形
        if(aDisk[1]==2){
            $("#alv01").removeClass("d-none")
            $("#alv02").removeClass("d-none")
            $("#alv03").addClass("d-none")
            $("#alv04").addClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        //數量3隱形
        if(aDisk[2]==3){
            $("#alv01").removeClass("d-none")
            $("#alv02").removeClass("d-none")
            $("#alv03").removeClass("d-none")
            $("#alv04").addClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        //數量4隱形
        if(aDisk[3]==4){
            $("#alv01").removeClass("d-none")
            $("#alv02").removeClass("d-none")
            $("#alv03").removeClass("d-none")
            $("#alv04").removeClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        
        // alert(aDisk[1]);
        
        
    })
    
    // $("#aTowerP").html(aDisk);
    
    //A到B
    $("#aToB").click(function() {
        
        
     
        
        if (bDisk[0] != null && aDisk[0] < bDisk[0] || bDisk[0] == null) {
            // x=aDisk.shift();
            bDisk.unshift(aDisk.shift());
            $("#bTowerP").html(bDisk);
            $("#aTowerP").html(aDisk);
            
        }
        
        
        // // A到B隱藏設定
        // if ($.inArray(1, bDisk) >= 0) {
        //     $("#alv01").addClass("d-none")
        //     $("#blv01").removeClass("d-none")
        //     $("#clv01").addClass("d-none")
        // }
        
        // if ($.inArray(2, bDisk) >= 0) {
        //     $("#alv02").addClass("d-none")
        //     $("#blv02").removeClass("d-none")
        //     $("#clv02").addClass("d-none")
        // }
        // if ($.inArray(3, bDisk) >= 0) {
        //     $("#alv03").addClass("d-none")
        //     $("#blv03").removeClass("d-none")
        //     $("#clv03").addClass("d-none")
        // }
        
        // if ($.inArray(4, bDisk) >= 0) {
        //     $("#alv04").addClass("d-none")
        //     $("#blv04").removeClass("d-none")
        //     $("#clv04").addClass("d-none")
        // }
        
            $("#alv01").animate({left: '250px'});
        
        
        
        
    })
    
    
    
    //A到C---------------------------------
    $("#aToC").click(function() {
        
        
        
        
        
        if (cDisk[0] != null && aDisk[0] < cDisk[0] || cDisk[0] == null) {
            // x=aDisk.shift();
            cDisk.unshift(aDisk.shift());
            $("#cTowerP").html(cDisk);
            $("#aTowerP").html(aDisk);
            
        }
        
        // // A到C隱藏設定-----------------------------------
        // if ($.inArray(1, cDisk) >= 0) {
        //     $("#alv01").addClass("d-none")
        //     $("#blv01").addClass("d-none")
        //     $("#clv01").removeClass("d-none")
        // }
        
        // if ($.inArray(2, cDisk) >= 0) {
        //     $("#alv02").addClass("d-none")
        //     $("#blv02").addClass("d-none")
        //     $("#clv02").removeClass("d-none")
        // }
        // if ($.inArray(3, cDisk) >= 0) {
        //     $("#alv03").addClass("d-none")
        //     $("#blv03").addClass("d-none")
        //     $("#clv03").removeClass("d-none")
        // }
        // if ($.inArray(4, cDisk) >= 0) {
        //     $("#alv04").addClass("d-none")
        //     $("#blv04").addClass("d-none")
        //     $("#clv04").removeClass("d-none")
        // }
        //--------------------------------------------------
        //過關提示
        if (aDisk.length < 1 && bDisk.length < 1) {
            
            $('#successModal').modal()
        }
        //----------------------------------------------
        
    })
    //-----------------------------------------------
    
    //B到A--------------------------------------------
    $("#bToA").click(function() {
        
        
        
        
        if (aDisk[0] != null && bDisk[0] < aDisk[0] || aDisk[0] == null) {
            
            // y = bDisk.shift();
            aDisk.unshift(bDisk.shift());
            $("#bTowerP").html(bDisk);
            $("#aTowerP").html(aDisk);
            
            
        }
        
        // //B到A隱藏設定
        // if ($.inArray(1, aDisk) >= 0) {
        //     $("#blv01").addClass("d-none")
        //     $("#alv01").removeClass("d-none")
        //     $("#clv01").addClass("d-none")
        // }
        //  if ($.inArray(2, aDisk) >= 0) {
        //     $("#blv02").addClass("d-none")
        //     $("#alv02").removeClass("d-none")
        //     $("#clv02").addClass("d-none")
        // }
        //  if ($.inArray(3, aDisk) >= 0) {
        //     $("#blv03").addClass("d-none")
        //     $("#alv03").removeClass("d-none")
        //     $("#clv03").addClass("d-none")
        // }
        // if ($.inArray(4, aDisk) >= 0) {
        //     $("#blv04").addClass("d-none")
        //     $("#alv04").removeClass("d-none")
        //     $("#clv04").addClass("d-none")
        // }
        //-----------------------------------------------------
    })
    //------------------------------------------------------------
    
    //B到C-------------------------------------------------------------
    $("#bToC").click(function() {
        
        
        
        
        if (cDisk[0] != null && bDisk[0] < cDisk[0] || cDisk[0] == null) {
            
            // y = bDisk.shift();
            cDisk.unshift(bDisk.shift());
            $("#bTowerP").html(bDisk);
            $("#cTowerP").html(cDisk);
            
            
        }
        // B到C隱藏設定-------------------------------------------------
        // if ($.inArray(1, cDisk) >= 0) {
        //     $("#alv01").addClass("d-none")
        //     $("#blv01").addClass("d-none")
        //     $("#clv01").removeClass("d-none")
        // }
        
        // if ($.inArray(2, cDisk) >= 0) {
        //     $("#alv02").addClass("d-none")
        //     $("#blv02").addClass("d-none")
        //     $("#clv02").removeClass("d-none")
        // }
        // if ($.inArray(3, cDisk) >= 0) {
        //     $("#alv03").addClass("d-none")
        //     $("#blv03").addClass("d-none")
        //     $("#clv03").removeClass("d-none")
        // }
        // if ($.inArray(4, cDisk) >= 0) {
        //     $("#alv04").addClass("d-none")
        //     $("#blv04").addClass("d-none")
        //     $("#clv04").removeClass("d-none")
        // }
        //-------------------------------------------------
        //過關提示
        if (aDisk.length < 1 && bDisk.length < 1) {
            $('#successModal').modal()
        }
        
    })
    //-------------------------------------------------------------
    
    //c到A------------------------------------------------------
    $("#cToA").click(function() {
        
        
        
        
        if (aDisk[0] != null && cDisk[0] < aDisk[0] || aDisk[0] == null) {
            
            // z = cDisk.shift();
            aDisk.unshift(cDisk.shift());
            $("#cTowerP").html(cDisk);
            $("#aTowerP").html(aDisk);
            
            
        }
        // // c到A隱藏設定----------------------------------------------
        // if ($.inArray(1, aDisk) >= 0) {
        //     $("#clv01").addClass("d-none")
        //     $("#alv01").removeClass("d-none")
        //     $("#blv01").addClass("d-none")
        // }
        // if ($.inArray(2, aDisk) >= 0) {
        //     $("#clv02").addClass("d-none")
        //     $("#alv02").removeClass("d-none")
        //     $("#blv02").addClass("d-none")
        // }
        // if ($.inArray(3, aDisk) >= 0) {
        //     $("#clv03").addClass("d-none")
        //     $("#alv03").removeClass("d-none")
        //     $("#blv03").addClass("d-none")
        // }
        // if ($.inArray(4, aDisk) >= 0) {
        //     $("#clv04").addClass("d-none")
        //     $("#alv04").removeClass("d-none")
        //     $("#blv04").addClass("d-none")
        // }
        //--------------------------------------
        
        
    })
    //------------------------------------------------------------
    
    //C到B--------------------------------------------------------
    $("#cToB").click(function() {
        
        
        
        
        
        if (bDisk[0] != null && cDisk[0] < bDisk[0] || bDisk[0] == null) {
            
            bDisk.unshift(cDisk.shift());
            $("#bTowerP").html(bDisk);
            $("#cTowerP").html(cDisk);
        
            
        }
        // // C到B隱藏設定------------------------
        // if ($.inArray(1, bDisk) >= 0) {
        //     $("#clv01").addClass("d-none")
        //     $("#alv01").addClass("d-none")
        //     $("#blv01").removeClass("d-none")
        // }
        // if ($.inArray(2, bDisk) >= 0) {
        //     $("#clv02").addClass("d-none")
        //     $("#alv02").addClass("d-none")
        //     $("#blv02").removeClass("d-none")
        // }
        // if ($.inArray(3, bDisk) >= 0) {
        //     $("#clv03").addClass("d-none")
        //     $("#alv03").addClass("d-none")
        //     $("#blv03").removeClass("d-none")
        // }
        // if ($.inArray(4, bDisk) >= 0) {
        //     $("#clv04").addClass("d-none")
        //     $("#alv04").addClass("d-none")
        //     $("#blv04").removeClass("d-none")
        // }
        //-------------------------------------------
        
    })
    //--------------------------------------------------------------
    
    $("#btDebug").click(function() {
    //     alert(aDisk.length)
    //     alert(bDisk.length)
    if (aDisk.length < 1 && bDisk.length < 1) {
    alert("Success~~!")
    }
    
    })
    
    // 定義重置功能---------------------------
    $("#reGame").click(function() {
        selectBox();
        bDisk = [];
        cDisk = [];
        $("#aTowerP").html(aDisk);
        $("#bTowerP").html(bDisk);
        $("#cTowerP").html(cDisk);
        
        //數量1隱形
        if(aDisk[0]==1){
            $("#alv01").removeClass("d-none")
            $("#alv02").addClass("d-none")
            $("#alv03").addClass("d-none")
            $("#alv04").addClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        //數量2隱形
        if(aDisk[1]==2){
            $("#alv01").removeClass("d-none")
            $("#alv02").removeClass("d-none")
            $("#alv03").addClass("d-none")
            $("#alv04").addClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        //數量3隱形
        if(aDisk[2]==3){
            $("#alv01").removeClass("d-none")
            $("#alv02").removeClass("d-none")
            $("#alv03").removeClass("d-none")
            $("#alv04").addClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        //數量4隱形
        if(aDisk[3]==4){
            $("#alv01").removeClass("d-none")
            $("#alv02").removeClass("d-none")
            $("#alv03").removeClass("d-none")
            $("#alv04").removeClass("d-none")
            // $("#blv01").addClass("d-none")
            // $("#blv02").addClass("d-none")
            // $("#blv03").addClass("d-none")
            // $("#blv04").addClass("d-none")
            // $("#clv01").addClass("d-none")
            // $("#clv02").addClass("d-none")
            // $("#clv03").addClass("d-none")
            // $("#clv04").addClass("d-none")
        };
        
        
        // alert(aDisk[1]);
        
        
    })
    //---------------------------------------------
    
})




