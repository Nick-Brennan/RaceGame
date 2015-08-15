$(document).ready(function(){    
    $('div').on("click", function(){
        window.location = "index.html";
    });
    
    $('div').hover(function(){
        $('div').toggleClass('hover');
    });
});