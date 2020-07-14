import MovingObject from "./moving_object";
import { randomVec } from "./util";

const constants = {
    COLOR: "rgb(255, 255, 255)",
    RADIUS: 10
}

class Sheep extends MovingObject {
    constructor(pos) {
        super(pos);
        this.vel = randomVec(0.25);
        this.color = constants.COLOR;
        this.radius = constants.RADIUS;
    }
}

export default Sheep;