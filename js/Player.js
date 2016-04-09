
function PlayerClass() {
}

PlayerClass.prototype.CaptureInputFromUser = function() {
    var promptText = "Skriver (1, 2 eller 3)" +
        "\n 1 - Sax " +
        "\n 2 - Sten" +
        "\n 3 - Påse";
    return window.prompt(promptText, "");
};

PlayerClass.prototype.PersistPlayerChoosenPictureToHiddenInput = function(imageString) {
    $('#playerVal').val(imageString);
};

PlayerClass.prototype.CheckIfPlayerWonBasedOnEarlierComputerInput = function() {

    var playerChoice = $.trim($('#playerVal').val());
    var computerChoice = $.trim($('#datorVal').val());

    if (playerChoice == computerChoice) {
        // Then it was a tie
        var tieValue = parseInt($('#tieVal').val());
        $('#tieVal').val('');
        $('#tieVal').val(tieValue + 1);

        // Update tie labels for both players
        this.UpdatePlayerTieAttemptsValue(tieValue);
        this.UpdateComputerTieAttemptsValue(tieValue);
    } else {
        // Sax > Påse
        // Påse > sten
        // Sten > Sax
        if (computerChoice == "bilder/sax.gif") {
            if (playerChoice == "bilder/sten.gif") {
                // Player Wins
                this.UpdatePlayerWinValue();
            } else { // bilder/pase.gif | Computer Wins
                this.UpdateComputerWinValue();
            }
        }
        if (computerChoice == "bilder/sten.gif") {
            if (playerChoice == "bilder/sax.gif") { // Computer Wins
                this.UpdateComputerWinValue();
            } else { // bilder/pase.gif | Player Wins
                this.UpdatePlayerWinValue();
            }
        }
        if (computerChoice == "bilder/pase.gif") {
            if (playerChoice == "bilder/sax.gif") { // Player Wins
                this.UpdatePlayerWinValue();
            } else { // // bilder/sten.gif | Computer Wins
                this.UpdateComputerWinValue();
            }
        }
    }
};

PlayerClass.prototype.UpdatePlayerTieAttemptsValue = function (val) {
	$('#playerAttemptsTie').text('');
	$('#playerAttemptsTie').text(val + 1);
};

PlayerClass.prototype.UpdateComputerTieAttemptsValue = function (val) {
	$('#computerAttemptsTie').text('');
	$('#computerAttemptsTie').text(val + 1);
};

PlayerClass.prototype.UpdatePlayerWinValue = function () {
	var prevPlayerWins = parseInt($('#playerWins').val());
	$('#playerAttemptsWon').text('');
	$('#playerAttemptsWon').text(prevPlayerWins + 1);
	
	// Persist the new won value to hidden input element
	$('#playerWins').val(prevPlayerWins + 1);
};

PlayerClass.prototype.UpdateComputerWinValue = function () {
	var prevComputerWins = parseInt($('#computerWins').val());
	$('#computerAttemptsWon').text('');
	$('#computerAttemptsWon').text(prevComputerWins + 1);
	
	// Persist the new won value to hidden input element
	$('#computerWins').val(prevComputerWins + 1);
};