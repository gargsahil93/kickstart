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
        let test = readLine();
        let res = magic(test);
        console.log(`Case #${i++}: ${res.y} ${res.x}`);
    }
}

function magic(path) {
    let MAX_STEPS = 1000000000;
    let x = 1, y = 1;
    let countStack = [1];
    [...path].forEach(ch => {
        if (!isNaN(ch)) {
            let newMul = ((countStack[countStack.length-1]*(+ch) - 1) % MAX_STEPS) + 1;
            countStack.push(newMul);
        } else if (ch === ')') {
            countStack.pop();
        } else if (ch !== '(') {
            let steps = countStack[countStack.length-1];
            if (ch === 'N') x -= steps;
            if (ch === 'S') x += steps;
            if (ch === 'E') y += steps;
            if (ch === 'W') y -= steps;
            if (x < 1) x+=MAX_STEPS;
            if (y < 1) y+=MAX_STEPS;
            if (x > MAX_STEPS) x-=MAX_STEPS;
            if (y > MAX_STEPS) y-=MAX_STEPS;
        }
    });
    return {
        x: x,
        y: y
    };
}
