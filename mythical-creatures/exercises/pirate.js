class Pirate {
	constructor(name, job = 'Scallywag', cursed, booty){
	  this.name = name;
	  this.job = job;
	  this.cursed = false;
	  this.heinousActs = 0;
	  this.booty = 0
	}
	
	commitHeinousAct(){
		this.heinousActs++
		this.cursed = this.heinousActs >= 3? true : false;
	}

	robShip(){
		this.booty = 100;
		return 'YAARRR!';
	}
}








module.exports = Pirate