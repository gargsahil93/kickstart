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
        let test = readLine().split(' ').slice(0, 2).map(n=>+n);
        let n = readLine().split(' ').slice(0, test[0]).map(n=>+n);
        let res = magic(n, test[1]);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(arr, train) {
    let diffArr = [];
    let isPossibleForN = (n) => {
        let sessions = train;
        for (let i = 0; i < diffArr.length; i++) {
            if (diffArr[i] > n) {
                sessions -= (Math.ceil(diffArr[i]/n) - 1);
            }
            if (sessions < 0) return false;
        }
        return true;
    };
    let min;
    let isPossible = (i, j) => {
        if (i === j) {
            min = i;
            return;
        }
        let mid = Math.floor((i+j)/2);
        let possible = isPossibleForN(mid);
        if (possible) {
            if (!min || min > mid) min = mid;
            isPossible(i, mid);
        } else {
            isPossible(mid+1, j);
        }
    };
    let maxDiff;
    for (let i=0; i< arr.length-1; i++) {
        let diff = arr[i+1] - arr[i];
        diffArr.push(diff);
        if (!maxDiff || maxDiff < diff) maxDiff = diff;
    }
    isPossible(0, maxDiff);
    return min;
}
