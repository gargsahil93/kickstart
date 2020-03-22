/*
* TEST CASES NT PASSING
* */
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var fs = require('fs');
var readStream = fs.createReadStream('roundA/inputParcel.txt', 'utf8');

let inputString = '';
let currentLine = 0;

readStream.on('data', inputStdin => {
    inputString += inputStdin;
});

readStream.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let tests = +readLine();
    let i = 0;
    while (++i <= tests) {
        let test = readLine().split(' ').slice(0, 2).map(n=>+n);
        let nRows = test[0], nCols = test[1];
        let rowId = 0;
        let matrix = [];
        while (rowId < nRows) {
            matrix[rowId++] = readLine().split('').slice(0, nCols).map(n=>+n);
        }
        let res = magic(matrix, nRows, nCols);
        console.log(`Case #${i}: ${res}`);
    }
}

function range (i, j, nRows, nCols, dist) {
    let rangeSet = {};
    rangeSet[i*nRows + j] = 1;
    let queue = [];
    queue.push([i, j, dist]);
    let index = 0;
    let addToProcess = (x, y, dist) => {
        if (x > -1 && y > -1 && x < nRows && y < nCols && rangeSet[x*nRows + y] !== 1) {
            rangeSet[x*nRows + y] = 1;
            queue.push([x, y, dist]);
        }
    };
    while (index < queue.length) {
        let processing = queue[index];
        let x = processing[0];
        let y = processing[1];
        let d = processing[2];
        if (d > 0) {
            addToProcess(x-1, y, d-1);
            addToProcess(x+1, y, d-1);
            addToProcess(x, y-1, d-1);
            addToProcess(x, y+1, d-1);
        }
        index++;
    }
    return rangeSet;
}

function intersect (set1, set2) {
    let set = {};
    let keys = Object.keys(set1);
    keys.forEach(key => {
        if (set2[key] === 1) set[key] = 1;
    });
    return set;
}
function isPossible (matrix, dist, nRows, nCols) {
    let localRange;
    for (let rowIndex = 0; rowIndex < nRows; rowIndex++) {
        for (let colIndex = 0; colIndex < nCols; colIndex++) {
            if (matrix[rowIndex][colIndex] > dist) {
                let itemSet = range(rowIndex, colIndex, nRows, nCols, dist);
                if (localRange === undefined) localRange = itemSet;
                else localRange = intersect(localRange, itemSet);
                if (Object.keys(localRange).length === 0) {
                    return false;
                }
            }
        }
    }
    return true;
}

function findDistForEachCell (matrix, map, nRows, nCols) {
    let queue = [];
    queue.push(...map[0]);
    let addToQueue = (x, y, dist) => {
        if (x > -1 && y > -1 && x < nRows && y < nCols && matrix[x][y] === -1) {
            matrix[x][y] = dist;
            queue.push([x, y]);
            if (map[dist] === undefined) map[dist] = [];
            map[dist].push([x, y]);
        }
    };
    let index = 0;
    while (index < queue.length) {
        let processing = queue[index];
        let x = processing[0];
        let y = processing[1];
        let dist = matrix[x][y];
        addToQueue(x-1, y, dist+1);
        addToQueue(x+1, y, dist+1);
        addToQueue(x, y-1, dist+1);
        addToQueue(x, y+1, dist+1);
        index++;
    }
}

function magic(matrix, nRows, nCols) {
    let distanceMap = [[]];
    let distanceMatrix = [];
    matrix.forEach((row, rowIndex) => {
        distanceMatrix[rowIndex] = [];
        row.forEach((rowItem, colIndex) => {
            if (rowItem === 1) {
                distanceMatrix[rowIndex][colIndex]  = 0;
                distanceMap[0].push([rowIndex, colIndex]);
            } else {
                distanceMatrix[rowIndex][colIndex] = -1;
            }
        });
    });
    if (distanceMap[0].length === 0) {
        let res = 0;
        if (nRows%2 === 0) res+=nRows/2;
        else res+=(nRows-1)/2;
        if (nCols%2 === 0) res+=nCols/2;
        else res+=(nCols-1)/2;
        return res;
    }
    findDistForEachCell(distanceMatrix, distanceMap, nRows, nCols);
    let maxDist = distanceMap.length-1;
    let processInRange = (i, j) => {
        if (i === j) return i;
        let mid = Math.floor((i+j) / 2);
        let res = isPossible(distanceMatrix, mid, nRows, nCols);
        if (res) {
            return processInRange(i, mid);
        } else {
            return processInRange(mid+1, j);
        }
    };
    // return processInRange(0, maxDist);
    for (let i =0; i<= maxDist; i++) {
        let res = isPossible(distanceMatrix, i, nRows, nCols);
        if (res) return i;
    }
}
