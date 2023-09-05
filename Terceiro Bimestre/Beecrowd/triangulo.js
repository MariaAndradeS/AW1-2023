var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(' ').map(parseFloat);

if (A + B > C && A + C > B && B + C > A) {
    var perimeter = A + B + C;
    console.log("Perimetro = " + perimeter.toFixed(1));
} else {
    var area = ((A + B) * C) / 2;
    console.log("Area = " + area.toFixed(1));
}
