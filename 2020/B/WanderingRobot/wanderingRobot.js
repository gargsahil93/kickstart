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
        let test = readLine().split(' ').slice(0, 6).map(n=>+n);
        let res = magic(...test);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(cols, rows, startCol, startRow, endCol, endRow) {
    if (cols===1 || rows===1 || (endCol===cols && endRow === rows) || (startRow===1 && startCol===1)) {
        return 0;
    }
    startCol--;
    startRow--;
    endCol--;
    endRow--;
    let matrix = [], prob=1;
    for (let i = 0; i <= endRow; i++) {
        matrix[i] = Array(cols).fill(0);
        matrix[i][0] = prob;
        prob = prob/2;
    }
    prob = 1;
    for (let j = 0; j <= endCol; j++) {
        matrix[0][j] = prob;
        prob = prob/2;
    }
    for (let i = 1; i<= endRow; i++) {
        for (let j = 1; j <= endCol; j++) {
            let cellProb = 0;
            if (i === rows-1) cellProb+=matrix[i][j-1];
            else cellProb+=matrix[i][j-1]/2;
            if (j === cols-1) cellProb+=matrix[i-1][j];
            else cellProb+=matrix[i-1][j]/2;
            matrix[i][j] = cellProb;
        }
        if (i < startRow && i> 0) matrix[i-1].fill(0);
    }
    let res=0, zero_prob = true;
    if (startCol > 0) {
        zero_prob = false;
        for (let i = startRow; i<= endRow; i++) {
            if (i<rows-1) res+=matrix[i][startCol-1]/2;
            else res+=matrix[i][startCol-1];
        }
    }
    if (startRow > 0) {
        zero_prob=false;
        for (let j = startCol; j <= endCol ; j++) {
            if (j<cols-1) res+=matrix[startRow-1][j]/2;
            else res+=matrix[startRow-1][j];
        }
    }
    return zero_prob ? 0: 1-res;
}