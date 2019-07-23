class Werewolf {
	constructor(name, location, human = true, wolf = false, hungry, victim){
		this.name = name;
		this.location = location;
		this.human = human;
		this.wolf = wolf;
		this.hungry = false;
		this.canEat = false;
	}
	change() {
		this.human = (this.human === true)? false : true;
		this.wolf = (this.wolf === false)? true : false;
		this.hungry = (this.wolf === true)? true : false;
	}
	eat(victim) {
		this.canEat = (this.hungry === true)? true : false;
		this.canEat = (this.human === true)? false : true;
		this.human = true;
		victim.alive = false;
	}
}








module.exports = Werewolf