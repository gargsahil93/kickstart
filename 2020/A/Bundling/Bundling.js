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
        let strs = [];
        while (test[0]-- > 0) {
            strs.push(readLine());
        }
        let res = magic(strs, test[1]);
        console.log(`Case #${i++}: ${res}`);
    }
}

function magic(strs, group) {
    let trie = {
        itemMap : {},
        count : 0
    };
    strs.forEach(str => {
        let root = trie;
        [...str].forEach(ch => {
            if (root.itemMap[ch] === undefined) {
                root.itemMap[ch] = {
                    itemMap : {},
                    count : 0
                };
            }
            root.itemMap[ch].count++;
            root = root.itemMap[ch];
        });
    });
    let sum = 0;
    let rootKeys = Object.keys(trie.itemMap);
    let queue = [];
    rootKeys.forEach(ch => {
        queue.push(trie.itemMap[ch]);
    });
    let index = 0;
    while (index < queue.length) {
        let root  = queue[index];
        let num = Math.floor(root.count/group);
        if (num > 0) {
            sum+=num;
            let keys = Object.keys(root.itemMap);
            keys.forEach(ch => {
                queue.push(root.itemMap[ch]);
            });
        }
        index++;
    }
    return sum;
}
