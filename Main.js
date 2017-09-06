$(document).ready(function(){

    var mode = 0; // app mode
    var timeCounter= 0; //time counter
    var lapCounter = 0  //lap counter
    var action;
    
    var lapNumber = 0;
    
    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;
    
    //on app load show start and lap buttons
    hideshowButtons("#startButton","#lapButton");
    //click on startButton
    //mode on
    $("#startButton").click(function(){
       mode = 1;
    hideshowButtons("#stopButton","#lapButton");
        
        startAction();
 
    });
    
    //click on stop button
    $("#stopButton").click(function(){
       //show resume and reset button
        hideshowButtons("#resumeButton", "#resetButton");
        //stop counter
        clearInterval(action);
    });
    
    //resume button
    
     //click on stop button
    $("#resumeButton").click(function(){
       //show resume and reset button
        hideshowButtons("#stopButton", "#lapButton");
        //start counter
        startAction();
    });
    
     //click on reset button
    $("#resetButton").click(function(){
       //reload page
        location.reload();
    });
    
    //click on lap button
    
    $("#lapButton").click(function(){
            if(mode){
            clearInterval(action);
            //resetlap and print lap details
            lapCounter=0
            addLap();
            //start action
            startAction();
        }
    })
    
    
    
    
    
    
    //function
    
    //hide show two buttons
    function hideshowButtons(x,y){
        $(".control").hide();
        $(x).show();
        $(y).show();
    }
    
    //start teh counter
    
    function startAction(){
        action=setInterval(function(){
            timeCounter++;
            if(timeCounter==100*60*100){
                timeCounter =0
            }
            lapCounter++;
            if(lapCounter==100*60*100){
                lapCounter=0
            }
            updateTime();
        },10)
    }
    //update time:converts counter to min,sec, centi
    function updateTime(){
        //1min =60x100centisecn=6000seconds
        timeMinutes = Math.floor(timeCounter/6000);
        //1sec=100centiseconds
        timeSeconds=Math.floor((timeCounter%6000)/100)
        
        timeCentiseconds=(timeCounter%6000)%100
        $("#timeminute").text(format(timeMinutes))
        $("#timesecond").text(format(timeSeconds))
        $("#timecentisecond").text(format(timeCentiseconds))
        
        
       lapMinutes = Math.floor(lapCounter/6000);
        //1sec=100centiseconds
        lapSeconds=Math.floor((lapCounter%6000)/100)
        //
        lapCentiseconds=(lapCounter%6000)%100 
        
         $("#lapmeminute").text(format(lapMinutes))
        $("#lapsecond").text(format(lapSeconds))
        $("#lapcentisecond").text(format(lapCentiseconds))
        
    }
    //format number
    function format(number){
        if(number<10){
            return '0' + number
        }else{
            return number
        }
    }
    //print lap details inside the lap box
    function addLap(){
        lapNumber++;
        var myLapDetails = 
            '<div class="lap">'+  
                '<div class="laptimetitle">'+
                    'Lap'+lapNumber+
                '</div>'+
                '<div class="laptime">'+
                    '<sapn>'+ format(lapMinutes)+'</span>'+
                    ':<span>'+format(lapSeconds)+
                    '</span>'+
                    ':<span>'+format(lapCentiseconds)+
                    '</span>'
                '</div>'+
            '</div>'
        $(myLapDetails).prependTo("#laps");
    }
    
});