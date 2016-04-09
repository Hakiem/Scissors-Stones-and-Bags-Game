
function PlayMaterialsClass() {
	/* Multi-dimensional array to hold a static resource container of choices to be made */
	this.playMaterials = [
							 ["Sax", "bilder/sax.gif"],
							 ["Sten", "bilder/sten.gif"],
							 ["Påse", "bilder/pase.gif"]
						  ];
}

// Update games played Label Method:
PlayMaterialsClass.prototype.UpdatePlayedGamesAttempt = function (val) {
    // reset computer played label
    $('#computerPlayAttemptsLabel').text('');
    $('#computerPlayAttemptsLabel').text(val + 1);
  
    //reset player played label as well
    $('#playerPlayAttemptsLabel').text('');
    $('#playerPlayAttemptsLabel').text(val + 1);
	  
    // Persist the new value to the hidden label
    $('#currentPlayAttempsBothPlayerAndComputerValueHolder').val(val + 1);
};

/* Show both Player and Computer Images in the ImageBoxes*/
PlayMaterialsClass.prototype.AppendImagesToRespectiveSides = function(){
	$("#dittval").attr("src", $('#playerVal').val());	
	$("#compsval").attr("src", $('#datorVal').val());	
};