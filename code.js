$(document).ready(function(){
    
    var gCell = 0;
    var bCell = 0;
     
    $(window).keypress(function(e) {
           
        var key = e.which;
            //Move grey player avatar
        if(key === 97){
            $('#player1-track div').eq(gCell).text("");
            $('#player1-track div').eq(gCell + 1).text("X");
            checkForWinner();
            gCell++;
        }   //Move green player avatar
        else if(key === 108){
            $('#player2-track div').eq(bCell).text("");
            $('#player2-track div').eq(bCell + 1).text("X");
            checkForWinner();
            bCell++;
        }
            
   });
    
});

//Check last cells to see who reaches finish first. Redirect to "win" page.
function checkForWinner(){
    if(($('#g10').text() === 'X') && ($('#b10').text() === "")){
        $('#message').text('Grey Racer Wins!');
        window.location = 'greyWins.html';
        return;
    } else if(($('#b10').text() === 'X') && ($('#g10').text() === "")){
        $('#message').text('Blue Racer Wins!');
        window.location = 'greenWins.html';
        return;
    } else {
        return;
    }
}