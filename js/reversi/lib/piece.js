/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
	this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
	let oppColor = (this.color === "black") ? "white" : "black";
	return oppColor;
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
	this.color = this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
	let letter = (this.color === "black")? "B" : "W";
	return letter;
};

module.exports = Piece;
