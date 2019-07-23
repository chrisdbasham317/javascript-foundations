class Hobbit {
	constructor(name, age = 0, disposition = 'homebody', adult, old, isShort = true) {
		console.log(name, disposition, age, adult, old)
		this.name = name;
		this.age = age;
		this.disposition = disposition;
		this.adult = false
		this.old = false

		this.isShort = isShort;

		if(name === 'Frodo') {
			this.hasRing = true;
		} else {
			this.hasRing = false;
		}
		// console.log(age)
	}

	celebrateBirthday() {
		this.age++;
		this.adult = this.age >= 33;
		this.old = this.age >= 101;
	}
}


module.exports = Hobbit;