class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.activityCount = 0
	}

	shoot() {
		if(this.cranky === true) {
			return 'NO!';
		} else if (this.standing === false) {
			return 'NO!';
		} else {
		this.activityCount++;
		this.meltdownTimer();
		return 'Twang!!!';
		}
	}

	run() {
		if (this.standing === false) {
			return 'NO!';
		}
		this.activityCount++;
		this.meltdownTimer();
		return 'Clop clop clop clop!!!';
	}

	meltdownTimer() {
		if (this.activityCount >= 3) {
			this.cranky = true;
		} else {
			this.cranky = false;
		}
	}

	sleep() {
		if (this.standing === true) {
			return 'NO!';
		} else {
			this.activityCount = 0;
			this.meltdownTimer();
			return 'ZZZZ';
		}
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}

	drinkPotion() {
		if (this.standing === false) {
			return 'Not while I\'m laying down!';
		} else if (this.standing === true && this.cranky === false) {
			this.activityCount = 3;
			this.meltdownTimer();
		} else {	
		this.activityCount = 0;
		this.meltdownTimer();
		}
	}
}








module.exports = Centaur