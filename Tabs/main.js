$(document).ready(function(){
    var $body = $(".tabs-container");
    var chickenTab = $body.find(".tabs.left a");
    var chickenBody = $body.find(".tabs-text.left");
    var beefTab = $body.find(".tabs.center a");
    var beefBody = $body.find(".tabs-text.center");
    var seafoodTab = $body.find(".tabs.right a");
    var seafoodBody = $body.find(".tabs-text.right");

    $(chickenTab).on("click", function(){
        $(chickenBody).show();
        $(beefBody).hide();
        $(seafoodBody).hide();
    });

    $(beefTab).on("click", function(){
        $(chickenBody).hide();
        $(beefBody).show();
        $(seafoodBody).hide();
    });

    $(seafoodTab).on("click", function(){
        $(chickenBody).hide();
        $(beefBody).hide();
        $(seafoodBody).show();
    });

});
