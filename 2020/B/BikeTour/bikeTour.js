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
        let test = +readLine();
        let arr = readLine().split(' ').slice(0, test).map(n=>+n);
        let res = magic(arr);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(arr) {
    let peaks = 0;
    arr.forEach((el, index) => {
        if (index !== 0 && index !== arr.length-1) {
            if (el > arr[index-1] && el > arr[index+1]) peaks++;
        }
    });
    return peaks;
}
