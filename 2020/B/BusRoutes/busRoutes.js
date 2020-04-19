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
        let arr = readLine().split(' ').slice(0, test[0]).map(n=>+n);
        let res = magic(arr, test[1]);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(arr, dDay) {
    arr = arr.reverse();
    let prevDay = dDay;
    arr.forEach(el => {
        prevDay = Math.floor(prevDay/el) * el;
    });
    return prevDay;
}
