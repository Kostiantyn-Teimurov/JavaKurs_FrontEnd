function gardener(operation, item) {
    operation(item);
}

const waterFlower = (flower) => {
    console.log("I water this " + flower);
}

const plantTree = (tree) => {
    console.log("I plant this " + tree);
}

const work = (hours) => {
    if(hours > 0) {
        console.log("I worked " + hours + " hours!");
    } else {
        console.log("I didn't work");
    }
}

gardener(waterFlower, "rose");
gardener(plantTree, "oak");
gardener(work, 2);
gardener(work, 0);