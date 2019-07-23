class Wizard {
	constructor({name, bearded = true, incantation, isRested = true}) {
	  this.name = name;
	  this.bearded = bearded;
	  this.isRested = isRested;
	  this.spellsCast = 0
	}

	incantation (incantation){
		return incantation.toUpperCase();
	}

	cast (incantation){
		this.spellsCast++
		if(this.spellsCast <= 2){
			return incantation.toUpperCase(); 
		} else {
			this.isRested = false;
			return 'I SHALL NOT CAST!';
		}
	}
}








module.exports = Wizard