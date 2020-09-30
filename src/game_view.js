import Game from './game';
import levels from './levels';

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.round = 1;
    this.gameMenu = document.getElementById('start-menu');
    this.startButton = document.querySelector('.start-button');
    this.menuTitle = document.querySelector('.menu-title');
    this.menuText = document.querySelector('.menu-text');
    this.inProgress = false;

    this.bindMenuHandlers();
  }

  start() {
    this.game = new Game(this.ctx, levels[this.round]);
    this.inProgress = true;
    this.bindGameHandlers();
    this.gameLoop();
  }

  gameLoop() {
    this.game.moveObjects();
    this.game.checkCollision();
    this.game.draw(this.ctx);

    if (this.roundOver()) {
      this.gameMenu.classList.toggle('hide');
      this.inProgress = false;
    } else {
      this.animationRequestId = window.requestAnimationFrame(this.gameLoop.bind(this));
    }
  }

  roundOver() {
    if (this.game.won()) {
      window.cancelAnimationFrame(this.animationRequestId);
      this.round += 1;

      this.menuTitle.innerHTML = levels[this.round].menuTitle;
      this.menuText.innerHTML = levels[this.round].menuText;

      if (this.round < 5) {
        this.startButton.innerHTML = 'Start';
      } else {
        this.startButton.innerHTML = 'Play Again';
        this.round = 1;
      }

      return true;
    } else if (this.game.lost()) {
      window.cancelAnimationFrame(this.animationRequestId);
      this.menuTitle.innerHTML = 'Not Quite!';
      this.menuText.innerHTML = 'Better luck next time! Give it another shot and hone those herding skills.'
      this.startButton.innerHTML = 'Play Again';

      this.round = 1;
      return true;
    }

    return false;
  }

  bindMenuHandlers() {
    const startGame = () => {
      this.gameMenu.classList.toggle('hide');
      this.start();
    };

    this.startButton.addEventListener('click', () => {
      if (!this.inProgress) startGame();
    });

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 13 && !this.inProgress) startGame();
    });
  }

  bindGameHandlers() {
    const sheepDog = this.game.sheepDog;
    const keyDownHandler = sheepDog.keyDownHandler.bind(sheepDog);
    const keyUpHandler = sheepDog.keyUpHandler.bind(sheepDog);

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
  }
}

export default GameView;
