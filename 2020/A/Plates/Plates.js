'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function main() {
    let line = 0;
    let readLine = () => {
        return inputString[line++];
    };
    let tests = +readLine();
    let i = 1;
    while(i <= tests) {
        let test = readLine().split(' ').slice(0, 3).map(n=>+n);
        let stacks = [];
        for (let stacki = 0; stacki < test[0]; stacki++) {
            stacks[stacki] = readLine().split(' ').slice(0, test[1]).map(n=>+n);
        }
        // let n = readLine().split(' ').slice(0, test[0]).map(n=>+n);
        let res = magic(stacks, test[2]);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(stacks, plates) {
    let sumStacks = [];
    let perStackPlates = plates > stacks[0].length ? stacks[0].length : plates;
    let totalPlates = stacks.length * perStackPlates;
    stacks.forEach((stack, index) => {
        sumStacks[index] = [];
        let sum = 0;
        for (let i=0; i < perStackPlates; i++) {
            sum += stack[i];
            sumStacks[index][i] = sum;
        }
    });
    let cache = {};
    let findMax = (fromStack, needPlates, remainingPlates) => {
        if (needPlates === 0) return 0;
        if (needPlates > remainingPlates || needPlates < 0) return -1;
        if (cache[fromStack] === undefined) cache[fromStack] = {};
        if (cache[fromStack][needPlates] !== undefined) return cache[fromStack][needPlates];
        if (needPlates === remainingPlates) {
            let sum = 0;
            for (let i=fromStack; i< sumStacks.length; i++) {
                sum+=sumStacks[i][perStackPlates-1];
            }
            cache[fromStack][needPlates] = sum;
            return sum;
        }
        let max;
        for (let i = -1; i < perStackPlates; i++) {
            let currentStackSum = sumStacks[fromStack][i] || 0;
            let platesFromCurrentStack = i+1;
            let sumFromNextStack = findMax(fromStack+1, needPlates-platesFromCurrentStack, remainingPlates-perStackPlates);
            if (sumFromNextStack !== -1) {
                if (!max || max < sumFromNextStack+currentStackSum) max = currentStackSum+sumFromNextStack;
            }
        }
        cache[fromStack][needPlates] = max;
        return max;
    };
    return findMax(0, plates, totalPlates);
}
