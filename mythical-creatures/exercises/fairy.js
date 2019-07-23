class Fairy {
	constructor(name, disposition) {
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
	};

	receiveBelief() {
		this.dust++;
	};

	believe() {
		this.dust += 10;
	};

	makeDresses(array) {
		var newDresses = array;
		var oldDresses = this.clothes.dresses;
		var totalDresses = oldDresses.concat(newDresses);
		this.clothes.dresses = totalDresses;
	};

	provoke() {
		this.disposition = 'Vengeful';
	};

	replaceInfant(infantObj) {
	  var obj = {name: infantObj.name, eyes: infantObj.eyes, disposition: 'Malicious'};
	  infantObj.disposition = 'Malicious';
	  if (this.humanWards.length >= 2) {
	  	this.disposition = 'Good natured'
	  };
	  this.disposition === 'Vengeful'? this.humanWards.push(obj) : (obj = undefined);
	};
};




module.exports = Fairy