$(document).ready(function(){

    doContentLoad();
    getRandomAdvice();

    $(".dice-button").click(function(){
        $(this).attr("rolled-condition", "on");
        doContentLoad();
        getRandomAdvice();

        setTimeout(() => {
            $(this).attr("rolled-condition", "off");
        }, 150);
    });
});


function getRandomAdvice(){
    $.ajax({
        url : "https://api.adviceslip.com/advice",
        success : function(data){
            consumeAdviceData(data);
        },
        error : function(e){
            console.log("Error :", e);	
        }
    });
}

function consumeAdviceData(data){
    let dataObject = JSON.parse(data);
    let adviceId = dataObject.slip.id;
    let advice = dataObject.slip.advice;

    $(".advice-header").text("Advice #" + adviceId);
    $(".advice-body").text('"' + advice + '"');
    setTimeout(() => {
        stopContentLoad();
    }, 50);
}

function doContentLoad(){
    $(".advice-card").attr("data-preloader", "on");
}

function stopContentLoad(){
    $(".advice-card").attr("data-preloader", "off");
}