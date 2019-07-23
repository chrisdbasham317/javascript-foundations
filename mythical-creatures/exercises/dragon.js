var feedMe = 0

class Dragon {
  constructor(name, rider, color, hungry) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    if (hungry === undefined) {
    	this.hungry = true; 
    } else {
    	this.hungry = hungry;
    }
  }
  eat() {
  	if (feedMe !== 2) {
  		feedMe++;
  	} else if (feedMe === 2) {
  		 this.hungry = false;
  	} 
  }
}








module.exports = Dragon;