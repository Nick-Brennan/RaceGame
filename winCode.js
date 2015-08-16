$(document).ready(function(){    
    $('#button').on("click", function(){
        window.location = "index.html";
    });
    
    $('#button').hover(function(){
        $('#button').toggleClass('hover');
    });
});