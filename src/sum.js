function sumWithFor(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

sumWithFor.details = 'for';

function sumWithForEach(array) {
    let sum = 0;
    array.forEach(item => {
        sum += item;
    });
    return sum;
}

sumWithForEach.details = 'forEach';

function sumWithForOf(array) {
    let sum = 0;
    for(let item of array) {
        sum += item
    }
    return sum;
}

sumWithForOf.details = 'for of';

function sumWithReduce(array) {
    return array.reduce((acc, item) => acc + item, 0);
}

sumWithReduce.details = 'reduce'

const functions = [
    sumWithFor,
    sumWithForEach,
    sumWithForOf,
    sumWithReduce,
];

functions.forEach(f => {
    f.mark = `Sum with ${f.details}`;
})

function createRandomArray() {
    return new Array(1_000_000).fill(0).map(() => Math.random() * 5);
}

module.exports = {
    functions,
    createRandomArray,
};