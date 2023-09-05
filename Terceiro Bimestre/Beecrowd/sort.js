var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [num1, num2, num3] = lines.shift().split(' ').map(Number);

var crescente = [num1, num2, num3].sort((a, b) => a - b);

console.log(crescente.join('\n'));
console.log();
console.log([num1, num2, num3].join('\n'));
