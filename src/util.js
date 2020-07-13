export const randomVec = (length) => {
    const deg = 2 * Math.PI * Math.random();
    return scale([Math.sin(deg), Math.cos(deg)], length);
}

const scale = (vec, m) => {
    return [vec[0] * m, vec[1] * m];
}