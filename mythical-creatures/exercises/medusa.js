class Medusa {
	constructor(name, statues, victim) {
		this.name = name;
		this.statues = [];
	}
	stare(victim){
		if (this.statues.length < 3) {
			this.statues.push(victim);
			this.statues[0].stoned = false;
		} else {
			this.statues.shift();
			this.statues.push(victim);
		}
			return victim.stoned = true;
	}
};










module.exports = Medusa
