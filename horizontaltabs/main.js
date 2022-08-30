$(document).ready(function(){
    var $tabs = $(".tabs-container .tabs");

    var one = $($tabs[0]).css("left");
    var two = $($tabs[1]).css("left");
    var three = $($tabs[2]).css("left");
    var four = $($tabs[3]).css("left");
    var five = $($tabs[4]).css("left");

    $tabs.each(function(index, el){

        $(el).on("mouseover", function(){
            $(this).animate({
                left: "0px"
            }, 500, "linear",  function(){
                $(this).css("left", "0px"); 
            });

        }); 

        $(el).on("mouseout", function(){
            $(this).animate({
                left: "450px"
            }, 500, "linear", function(){
                $($tabs[0]).css("left", one); 
                $($tabs[1]).css("left", two); 
                $($tabs[2]).css("left", three); 
                $($tabs[3]).css("left", four); 
                $($tabs[4]).css("left", five); 
            });
        });
    });
});
