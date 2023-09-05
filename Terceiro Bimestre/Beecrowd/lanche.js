var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [codigo, quantidade] = lines.shift().split(' ').map(Number);

var preco = 0.0;
parseFloat(preco);

switch (codigo) {
    case 1:
        preco = 4.0;
        var total = preco * quantidade;
        parseFloat(total)
        console.log("Total: R$ " + total.toFixed(2));
    break;
    case 2:
        preco = 4.5;
        var total = preco * quantidade;
        parseFloat(total)
        console.log("Total: R$ " + total.toFixed(2));
    break;
    case 3:
        preco = 5.0;
        var total = preco * quantidade;
        parseFloat(total)
        console.log("Total: R$ " + total.toFixed(2));
    break;
    case 4:
        preco = 2.0;
        var total = preco * quantidade;
        parseFloat(total)
        console.log("Total: R$ " + total.toFixed(2));
    break;
    case 5:
        preco = 1.5;
        var total = preco * quantidade;
        parseFloat(total)
        console.log("Total: R$ " + total.toFixed(2));
    break;
    default:
        console.log('Código inválido.');
}