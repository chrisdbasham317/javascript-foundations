// class Sphinx {
// 	constructor() {
// 		this.riddles = [];
// 		this.heroesEaten = 0;
// 		this.heroGuesses = 0;
// 		this.correctGuesses = 0;
// 	}

// 	collectRiddle(obj) {
// 		var riddle = {riddle: obj.riddle, answer: obj.answer};
// 		if(this.riddles.length < 3) {
// 			this.riddles.push(riddle);
// 		} else if (this.riddles.length === 3) {
// 			this.riddles.shift();
// 			this.riddles.push(riddle);
// 		};
// 	};

// 	attemptAnswer(newAnswer) {
// 		var response = 'That wasn\'t that hard, I bet you don\'t get the next one';
// 		for (var i = this.riddles.length - 1; i >= 0; i--) {
// 			if (this.riddles[i].answer == newAnswer) {
// 				var goodAnswer = this.riddles[i].answer
// 				this.riddles.splice(i, 1);
// 				this.correctGuesses++;
// 				if (this.correctGuesses === 1) {
// 					return response; 
// 				} else {
// 					return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "' + goodAnswer + '"???';
// 				};
// 			} else if (this.heroGuesses == 2){
// 				this.heroesEaten++;
// 			} else {
// 				this.heroGuesses++;
// 			};
// 		};
// 	};
// };
class Sphinx{
    constructor(riddles=[], response = '', heroesEaten = 0){
        this.riddles=riddles
        this.response=response
        this.heroesEaten = heroesEaten
    }
    collectRiddle(riddle){
        if(this.riddles.length < 3){
        this.riddles.push(riddle)
    } else {
        this.riddles.splice(0,1)
        this.riddles.push(riddle)
    }
    }
    attemptAnswer(answer){
        let startLength = this.riddles.length
        for(var i=0;i<this.riddles.length;i++){
            if(answer === this.riddles[i].answer){
                this.riddles.splice(i,1)
                this.response = 'That wasn\'t that hard, I bet you don\'t get the next one'
            }
        }
         this.riddles.length === startLength ? this.heroesEaten++  : this.riddles.length === 0 ? this.response = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???` : null
        return this.response 
    }
}







module.exports = Sphinx