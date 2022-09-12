$(document).ready(function(){
    var $categories = $(".menu-category");
    $categories.each(function(){
        var $this = $(this);
        $this.on("mouseover", function(){
            $this.animate({
                bottom: "+=200px"
            }, 500, function(){
            });
        });
        
        $this.on("mouseleave", function(){
            $this.animate({
                bottom: "-=200px"
            }, 500, function(){
            });
        });




    });
});
