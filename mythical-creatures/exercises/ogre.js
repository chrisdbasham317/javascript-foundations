class Ogre {
	constructor(name, home = 'Swamp') {
		this.name = name;
		this.home = home;
		this.swings = 0;
	}

	encounter(human) {
		if (human.encounterCounter === 2 || human.encounterCounter === 5) {
			this.swingAt();
		};
		if (this.swings % 2) {
			human.knockedOut = true;
		}
		return ++human.encounterCounter;
	};

	swingAt() {
		return ++this.swings;
	}

	apologize(human) {
		human.knockedOut = false;
	}
}








module.exports = Ogre