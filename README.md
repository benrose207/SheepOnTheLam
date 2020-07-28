# Sheep on the Lam

Play the game [here](https://benrose207.github.io/SheepOnTheLam)!

## About
Sheep on the Lam is a browser-based game in which the user, a sheepdog, has to herd sheep back into their pasture before the time runs out. As the user progresses through the levels, they are presented with additional challenges, such as more sheep, obstacles around which they need to maneuver, and/or other animals that need to be herded separately. Instructions are simple, but the sheep might not be as compliant as you hope!

The game was inspired by my childhood growing up with sheep in Maine.

## Technologies
This project was built using:
* JavaScript ES6
* CSS3
* HTML5 Canvas

## How to Play
The sheep have gotten out of their pasture! As the sheepdog, your goal is to herd all the loose sheep back into their pasture before the timer runs out. Move around the field using the arrow keys; sheep will respond by running away from you, so make sure you're herding them in the right direction. Until all the sheep are back in their pasture, the gate in the fence remains open, so keep an eye out for sheep sneaking back into the field!

Once you have herded all the sheep back into the pasture, you will be presented with a brief message outlining what to expect for the next level of the game. Examples of additional levels include: more/faster sheep, hay bales around which you'll need to navigate, and goats that need to be herded into a separate pen. Despite the different challenges, the goal for every level remains the same -- herd everyone back into their pasture before the time is up! 

## Feature Highlights

### ES6 Classes and Inheritance
I used ES6 classes and import/export syntax throughout this project to cleanly separate game and object logic. In particular, I took advantage of the ES6 class implementation of JavaScript's prototypal inheritance in setting up my Sheep and Goat classes. Since these two game objects share many similar variables and functions, I created a parent class (`MovingObject`) and then set up Sheep and Goat classes that extended this class, and held any functions or variables that were not shared. This allowed for DRYer code, and easier maintenance of both classes. 

```js
import { randomVec } from "./util";

class MovingObject {
    constructor(ctx, img, radius, speed) {
        this.ctx = ctx;
        this.radius = radius;
        this.speed = speed;
        this.img = img;

        this.pos = this.generateRandomPosition();
        this.vel = randomVec(this.speed);
        this.friction = 0.02;
        ...
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        ...
    }

    collideWithObstacle(direction) {
        ...
    }
}
```

```js
import MovingObject from "./moving_object";

const sheepConstants = {
    RADIUS: 32,
}

class Sheep extends MovingObject {
    constructor(ctx, img, speed) {
        super(ctx, img, sheepConstants.RADIUS, speed);

        this.scale = 0.3;
        this.frameWidth = 160;
        this.frameHeight = 124;
        this.scaledWidth = this.scale * this.frameWidth;
        this.scaledHeight = this.scale * this.frameHeight;
        this.numCols = 3;
    }
    ...
}
```

### Simulating Sheep Response to Sheepdog
One challenge of creating this game was to at least approximate some realistic interactions between the animals. In the case of the the sheep's interaction with the sheepdog, I wanted to have the sheep respond to the sheepdog's proximity by "running away" from it, but then slowing back down a standard speed once they were no longer close. 

![Sheep Velocity Change Example](/assets/demo_files/sheep-velocity-example.gif)

In order to achieve this effect, I started by implementing realistic collision interactions between the sheep and the sheepdog. When the two objects in the game "collide" the sheep responds by moving away from the sheepdog at a faster pace, as the dog is moving faster than the sheep. However the key to solving this problem was adding an additional "friction" variable to the sheep objects. With this established, I updated my `move()` function for sheep objects so that any time the sheep's velocity was over a certain threshold, the friction variable would be applied until their velocity was at or below the threshold. I also combined this with an adjustment to the rate at which the sheep image was animated, to further visualize the change in speed.

```js
move() {
    ...
    if (Math.abs(this.vel[0]) > this.speed || Math.abs(this.vel[1]) > this.speed) {
        this.frameRate = 8;
        if (this.vel[0] > 0) this.vel[0] -= this.friction;
        if (this.vel[0] < 0) this.vel[0] += this.friction;

        if (this.vel[1] > 0) this.vel[1] -= this.friction;
        if (this.vel[1] < 0) this.vel[1] += this.friction;
    }

    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}
```

Ultimately, this had the desired effect -- the sheep speed up upon "colliding" with the sheepdog, but then begin to slow back down to their baseline speed as soon as they are no longer colliding. 

### Game Level Management
One additional challenge in designing this game was how to manage the differences in objects and elements for the various levels. In order to implement this, I created a plain JavaScript object that holds all of the variables for each level such as the number and speed of sheep and goats, the number of hay bales, and even any different text to display in the messages prior to each level.

```js
const levels = {
    ...
    3: {
        numSheep: 8,
        sheepSpeed: 0.5,
        numGoats: 0,
        goatSpeed: 0.25,
        timeRemaining: "2:00",
        numHayBales: 8,
        menuTitle: "Great Job!",
        menuText: "You're becoming an expert! But can you navigate the hay bales to get sheep back in time again?"
    },
    ...
}
```

By keeping track of the game's level in my file that manages the overall state and animation of the game, I was able to easily grab the relevant level data using the object's keys, and pass the value associated with that key (the variables specific to that level) down into the necessary game components. 

```js
import Game from "./game";
import levels from "./levels";

class GameView {
    ...
    start() {
        this.game = new Game(this.ctx, levels[this.round]);
        ...
    }    
    ...
}
```

```js
class Game {
    constructor(ctx, levelData) {
        this.currentLevel = levelData;
        this.numSheep = this.currentLevel.numSheep;
        ...
    }
    ...
    addSheep() {
        let sheepImg = new Image();
        sheepImg.src = "assets/images/sheep_walking.png";

        for (let i = 0; i < this.numSheep; i++) {
            let newSheep = new Sheep(this.ctx, sheepImg, this.currentLevel.sheepSpeed);
            this.ensureNewObjectPosition(newSheep);
            this.sheep.push(newSheep);
        }
    }
}
```

This strategy had two primary benefits:
* I could very quickly and easily make adjustments to the variables for any given level, which helped to calibrate the game difficulty, and greatly aided in testing.
* It became almost trivial to add additional levels to the game, because the actual game components and functions all referenced the key names in the level object received from the game management file. 

![Level 3 Screenshot](/assets/demo_files/level-3-screenshot.png)

## Feature Backlog
* Different sheepdog options for selection prior to game start
* Additional levels with new obstacles 
