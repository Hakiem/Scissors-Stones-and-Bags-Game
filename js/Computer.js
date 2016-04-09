
function ComputerClass() {
}

// Return a random number between 1 and 3:
ComputerClass.prototype.Randomize = function () {
   return Math.floor((Math.random() * 3 ) + 1); 
};

/* save string equivalence to the randomized string contained in the multi-dimensional array */
ComputerClass.prototype.PersistComputerChoosenPictureToHiddenInput = function (imageString) {
	$('#datorVal').val(imageString);
};