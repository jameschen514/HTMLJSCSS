function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}

$(document).ready(function(){
    init();
    /*
    $(".scroller-knob").live("mousedown", function(event) {
        console.log("Live: " + event.pageY);
    });
    */
   
    $(".scroller-knob").draggable({
        axis: "y",
        containment: "parent",
        start: function(event, ui) {
                //console.log("dragstart: " + ui.position.top);
        },
        drag: function(event, ui) {
            var y = $(this).scrollTop();
            console.log(event.pageY + " " + y);
            console.log("drag: " + ui.position.top);
            var h = $(".info-text").height();
            var yPos = ui.position.top / 450 * (h - 500); 
            console.log("Y Pos: " + yPos);
            $(".info").scrollTop(yPos);
        }
        
    });

    $(".scroller-track").on("click", function(event) {
        var offset = $(this).offset();
        var h = $(".info-text").height();
        var d = event.pageY - $(this).offset().top - 50;
        var kHeight = $(".scroller-knob").height() / 2;
        var yPos = d / 450 * (h - 500);
        if (d < 0 && d < kHeight) {
            d = 0;
            $(".scroller-knob").css("top", d + "px");
        } else if (d > 400) {
            d = 450;
            $(".scroller-knob").css("top", d + "px");
            console.log("bottom: " + d);
        } else {
            $(".scroller-knob").css("top", d + kHeight + "px");
            console.log("middle of track: " + d );
        }

        var yPos = d / 450 * (h - 500);
 
        //$(".scroller-knob").css("top", d + "px");
        $(".info").scrollTop(yPos);

        console.log("y: " + d);
        console.log("Content y: " + yPos);
        
    });


    /*
    $(".scroller-wrapper").on('mousedown', function(event) {
        console.log(event.pageY);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log("scrollTop: " + scrollTop);
        $(".scroller-knob").scroll(function(){
            var scroll = $(this).scrollTop();
            console.log("scroll: " + scroll);
        });
    });

    $(".scroller-knob a").on('mouseup', function(event) {
        console.log(event.pageY);
    });
    */

    /*
    $(".scroller-wrapper").off('mousedown', function(event) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log("scrollTop: " + scrollTop);
        $(".scroller-knob").css("top", scrollTop + "px");
    });
    */

    // if 
});
