'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
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
    let i = 1;
    while(i <= tests) {
        let test = readLine().split(' ').slice(0, 2).map(n=>+n);
        let n = readLine().split(' ').slice(0, test[0]).map(n=>+n);
        let res = magic(n, test[1]);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(arr, n) {
    arr = arr.sort((a, b) => a-b);
    let sum = 0;
    let sumArr = arr.map((number, index) => {
        sum+=number;
        if (index >= n-1) sum -= arr[index-n+1];
        return sum;
    });
    let multiplier = n-1;
    let res;
    for (let i = n-1; i< arr.length; i++) {
        let val = arr[i]*multiplier - sumArr[i-1];
        if (res === undefined || res > val) res = val;
    }
    return res;
}
