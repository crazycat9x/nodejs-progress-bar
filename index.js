function progressBar(total, percentChar) {
	this.total = total;
	this.current = 0;
	this.percentChar = percentChar;
	this.barLength = process.stdout.columns - 100;
	this.render();
}

progressBar.prototype.setTotal = function(total) {
	this.total = total;
};

progressBar.prototype.update = function(current) {
	this.current++;
	this.render();
};

progressBar.prototype.render = function() {
	let percentageProgress = parseFloat((this.current / this.total).toFixed(2));
	isNaN(percentageProgress) && (percentageProgress = 0);
	let filledBarLength = Math.floor(percentageProgress * this.barLength);
	let filledBar = this.percentChar.repeat(filledBarLength);
	let emptyBar = " ".repeat(this.barLength - filledBarLength);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(
		`Current progress: [${filledBar}${emptyBar}] | ${percentageProgress *
			100}%`
	);
};

module.exports = progressBar;

// Testing script:

// let progress = new progressBar(5, "=");
// for (var i = 0; i < 5; i++) {
//     (function (i) {
//       setTimeout(function () {
//         progress.update();
//       }, 1000*i);
//     })(i);
//   };
