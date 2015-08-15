$(document).ready(function(){
    
    var gCell = 0;
    var bCell = 0;
     
    $(window).keypress(function(e) {
           
        var key = e.which;
           //do stuff with "key" here...
            //$('#message').text(key);
        if(key === 97){
            //$('#message').text('"A" key pressed');
            $('#player1-track div').eq(gCell).text("");
            $('#player1-track div').eq(gCell + 1).text("X");
            checkForWinner();
            gCell++;
        }
        else if(key === 108){
            //$('#message').text('"L" key pressed');
            $('#player2-track div').eq(bCell).text("");
            $('#player2-track div').eq(bCell + 1).text("X");
            checkForWinner();
            bCell++;
        }
        if(gCell > 9 || bCell > 9){
            return;
        }       
            
   });
    
});

function checkForWinner(){
    if(($('#g10').text() === 'X') && ($('#b10').text() === "")){
        $('#message').text('Grey Racer Wins!');
        window.location = 'greyWins.html'
        return true;
    } else if(($('#b10').text() === 'X') && ($('#g10').text() === "")){
        $('#message').text('Blue Racer Wins!');
        window.location = 'greenWins.html'
        return true;
    } else {
        return false;
    }
}