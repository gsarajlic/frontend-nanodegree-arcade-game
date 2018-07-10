// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x,y,speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update (dt) {
    // You should multiply any movement by the dt parameter
        this.x += this.speed * dt; 
    // which will ensure the game runs at the same speed for
    // all computers.
    // Updating enemy's position when it comes to the end of the board
        if (this.x >= 505){
            this.x = -150;
        }    

    }


// Draw the enemy on the screen, required method for game
    render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(x,y){
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }

    update() {
        
        if (this.x >= 402){
            this.x = 1;
        }
         
        if (this.x <= -2){
            this.x = 400;
        }

        if (this.y > 404){
            this.y = 404;
        }

        if (this.y < -10){
            this.y = -10;
        }


    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(direction) {
        switch(direction) {
            case 'left' : 
                this.update(this.x -= 100);
                break;

            case 'right' : 
                this.update(this.x += 100);
                break;
            
            case 'up' : 
                this.update(this.y -= 83);
                break;

            case 'down' : 
                this.update(this.y += 83);
                break;
        }

    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
const enemyOne = new Enemy(-50, 60, Math.floor(Math.random() * 100) + 100); 
const enemyTwo = new Enemy(-100, 145, Math.floor(Math.random() * 100) + 100);
const enemyThree = new Enemy(-200, 225, Math.floor(Math.random() * 100) + 100);
const enemyFour = new Enemy(-300, 60, enemyOne.speed);
const enemyFive = new Enemy(-350, 145, enemyTwo.speed);
const enemySix = new Enemy(-450, 225, enemyThree.speed);
// Pushing enemies into allEnemies array
allEnemies.push (enemyOne,enemyTwo,enemyThree,enemyFour,enemyFive,enemySix);
console.log(allEnemies);
// Place the player object in a variable called player
const player = new Player(200,405);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', (e) => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
