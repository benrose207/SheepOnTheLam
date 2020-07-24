import SheepDog from "./sheepdog";

// Random vector calculations

export const randomVec = (length) => {
    const deg = 2 * Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
}

const scale = (vec, m) => {
    return [vec[0] * m, vec[1] * m];
}

// Collision detections functions

export const isCollidedWith = (object1, otherObject) => {
    if (otherObject.objectShape === "circle") {
        return collideCircles(object1, otherObject);
    } else if (object1.object1 === "rect" && otherObject.objectShape === "rect") {
        return collideRectangles(object1, otherObject);
    } else {
        return collideCircleRectangle(object1, otherObject);
    }
}

const collideCircles = (object1, otherObject) => {
    let radiiSum = object1.radius + otherObject.radius;
    let distanceBtwn = Math.sqrt(
        (object1.pos[0] - otherObject.pos[0]) ** 2 + (object1.pos[1] - otherObject.pos[1]) ** 2
    );
    
    if (otherObject instanceof SheepDog) return distanceBtwn < radiiSum + 30;
    return distanceBtwn < radiiSum;
}

const collideCircleRectangle = (object1, otherObject) => {
    let testX = object1.pos[0];
    let testY = object1.pos[1];
    const rx = otherObject.pos[0]
    const ry = otherObject.pos[1]

    let collisionDirections = [];

    if (testX < rx) {
        testX = rx;
        collisionDirections.push("left");
    }
    if (testX > rx + otherObject.width) {
        testX = rx + otherObject.width;
        collisionDirections.push("right");
    }

    if (testY < ry) {
        testY = ry;
        collisionDirections.push("top");
    }
    if (testY > ry + otherObject.height) {
        testY = ry + otherObject.height;
        collisionDirections.push("bottom");
    }

    const distX = object1.pos[0] - testX;
    const distY = object1.pos[1] - testY;
    const distance = Math.sqrt((distX * distX) + (distY * distY));

    return { collided: distance <= object1.radius, direction: collisionDirections }
}

const collideRectangles = (object1, otherObject) => {
    const [x1, y1] = object1.pos;
    const [x2, y2] = otherObject.pos;
    const w1 = object1.width;
    const h1 = object1.height;
    const w2 = otherObject.width;
    const h2 = otherObject.height;

    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}

// Collision resolution functions

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
        const v2 = [(u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2)), u2.y]

        const finalV1 = rotateVelocities(v1, -angle);
        const finalV2 = rotateVelocities(v2, -angle);
        
        obj1.vel[0] = finalV1.x;
        obj1.vel[1] = finalV1.y;
        
        if (!(obj2 instanceof SheepDog)) {
            obj2.vel[0] = finalV2.x;
            obj2.vel[1] = finalV2.y;
        }
    }
}