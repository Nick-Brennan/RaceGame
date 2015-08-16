$(document).ready(function(){
    
    var gCell = 0;
    var bCell = 0;
     
    $(window).keypress(function(e) {
           
        var key = e.which;
            //Move grey player avatar
        if(key === 97){
            $('#player1-track div img').eq(gCell).addClass("hidden");
            $('#player1-track div img').eq(gCell + 1).removeClass("hidden");
            checkForWinner();
            gCell++;
        }   //Move green player avatar
        else if(key === 108){
            $('#player2-track div img').eq(bCell).addClass("hidden");
            $('#player2-track div img').eq(bCell + 1).removeClass("hidden");
            checkForWinner();
            bCell++;
        }
            
   });
    
});

//Check last cells to see who reaches finish first. Redirect to "win" page.
function checkForWinner(){
    if(($('#g10 img').hasClass('hidden') === false) && ($('#b10 img').hasClass('hidden') === true)){
        $('#message').text('Grey Racer Wins!');
        window.location = 'greyWins.html';
        return;
    } else if(($('#b10 img').hasClass('hidden') === false) && ($('#g10 img').hasClass('hidden') === true)){
        $('#message').text('Blue Racer Wins!');
        window.location = 'greenWins.html';
        return;
    } else {
        return;
    }
}