$(document).ready(function(){
    $(".baa-container").on("mouseover", function(event){
        var $this = $(this);
        var $tint = $this.find(".baa-two img");
        var $divider = $this.find(".baa-divider");
        var $imagecontainer = $this.find(".baa-two-container");

        $this.on("mousemove", function(events) {
            var tintWidth = events.pageX + "px";
            //$tint.css("width", tintWidth);
            $divider.css("left", tintWidth);
            $imagecontainer.css("width", tintWidth);
            console.log(events.pageX);
        });
    });
});
