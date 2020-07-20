const levels = {
    1: {
        numSheep: 5,
        sheepSpeed: 0.25,
        timeRemaining: "1:30",
        numHayBales: 0,
        menuTitle: "Great Job!",
    },
    2: {
        numSheep: 10,
        sheepSpeed: 0.6,
        timeRemaining: "2:00",
        numHayBales: 0,
        menuTitle: "Great Job!",
        menuText: "It was good while it lasted, but somehow the sheep are out again! This time even more have escaped."
    },
    3: {
        numSheep: 10,
        sheepSpeed: 0.5,
        timeRemaining: "2:00",
        numHayBales: 8,
        menuTitle: "Great Job!",
        menuText: "You're becoming an expert! But can you navigate the hay bales to get sheep back in time again?"
    },
    4: {
        menuTitle: "Congrats!",
        menuText: "You did it! You're now an expert herder. Play again using the button below, or click on the links to the side to check out some of my other work."
    }
};

export default levels;
