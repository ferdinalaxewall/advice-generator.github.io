$(document).ready(function(){

    getRandomAdvice();

    $(".dice-button").click(function(){
        $(this).attr("rolled-condition", "on");
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
            console.log(data)
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

    $(".advice-id").text(adviceId);
    $(".advice-body").text('"' + advice + '"');
}