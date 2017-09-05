$(document).ready(function(){

    var mode = 0; // app mode
    var timeCounter= 0; //time counter
    var lapCounter = 0  //lap counter
    var action;
    
    var lapNumber = 0;
    
    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;
    
    //on app load show start and lap buttons
    hideshowButtons("#startButton","#lapButton");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //function
    function hideshowButtons(x,y){
        $(".control").hide();
        $(x).show();
        $(y).show();
    }
    
});