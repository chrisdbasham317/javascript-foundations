class Stark {
	constructor(name, location, safe = false) {
		this.name = name;
		this.location = location || 'Winterfell';
		this.safe = safe;

	}

	houseWords() {
		var houseWords = ['Winter is Coming', 'The North Remembers']
		if (this.safe === false) {
			return houseWords[0];
		} else {
			return houseWords[1];
		}
	}
}




module.exports = Stark