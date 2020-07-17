import Sheep from "./sheep";
import SheepDog from "./sheepdog";

export const randomVec = (length) => {
    const deg = 2 * Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
}

const scale = (vec, m) => {
    return [vec[0] * m, vec[1] * m];
}

export const isCollidedWith = (object1, otherObject) => {
    if (otherObject instanceof Sheep || otherObject instanceof SheepDog) {
        return collideCircles(object1, otherObject);
    } else {
        return collideCircleRectangle(object1, otherObject);
    }
}

const collideCircles = (object1, otherObject) => {
    let radiiSum = object1.radius + otherObject.radius;
    let distanceBtwn = Math.sqrt(
        (object1.pos[0] - otherObject.pos[0]) ** 2 + (object1.pos[1] - otherObject.pos[1]) ** 2
    );
    
    if (otherObject instanceof SheepDog) return distanceBtwn < radiiSum;
    return distanceBtwn < radiiSum;
}

const collideCircleRectangle = (object1, otherObject) => {
    let testX = object1.pos[0];
    let testY = object1.pos[1];
    const rx = otherObject.pos[0]
    const ry = otherObject.pos[1]
    let collisionDirection;

    if (testX < rx) {
        testX = rx;
        collisionDirection = "left";
    }
    if (testX > rx + otherObject.width) {
        testX = rx + otherObject.width;
        collisionDirection = "right";
    }

    if (testY < ry) {
        testY = ry;
        collisionDirection = "top";
    }
    if (testY > ry + otherObject.height) {
        testY = ry + otherObject.height;
        collisionDirection = "bottom";
    }

    const distX = object1.pos[0] - testX;
    const distY = object1.pos[1] - testY;
    const distance = Math.sqrt((distX * distX) + (distY * distY)) - 5;

    return { collided: distance <= object1.radius, direction: collisionDirection }
}

const rotateVelocities = (velocity, angle) => {
    const rotatedVelocities = {
        x: velocity[0] * Math.cos(angle) - velocity[1] * Math.sin(angle),
        y: velocity[0] * Math.sin(angle) + velocity[1] * Math.cos(angle)
    }

    return rotatedVelocities;
}

export const resolveCollision = (obj1, obj2) => {
    const xVelocityDiff = obj1.vel[0] - obj2.vel[0];
    const yVelocityDiff = obj1.vel[1] - obj2.vel[1];

    const xDist = obj2.pos[0] - obj1.pos[0];
    const yDist = obj2.pos[1] - obj1.pos[1];

    if ((xVelocityDiff * xDist + yVelocityDiff * yDist) >= 0) {
        const angle = -Math.atan2(obj2.pos[1] - obj1.pos[1], obj2.pos[0] - obj1.pos[0]);

        const m1 = 1;
        const m2 = 1;

        const u1 = rotateVelocities(obj1.vel, angle);
        const u2 = rotateVelocities(obj2.vel, angle);

        const v1 = [(u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2)), u1.y]

        const finalV1 = rotateVelocities(v1, -angle);
        
        obj1.vel[0] = finalV1.x;
        obj1.vel[1] = finalV1.y;
    }
}