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

function magic(arr, sum) {
    arr = arr.sort((a,b) => a-b);
    let index = 0;
    while (sum >= arr[index]) {
        sum -= arr[index++];
    }
    return index;
}
