const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3));

let unEuro = {
    "yen": 156.5, 
    "dolar": 1.07, 
    "libra": 0.87, 
};

function fromDollarToYen(cantidad) {
    let euroCantidad = cantidad / unEuro.dolar;
    return euroCantidad * unEuro.yen;
}

function fromEuroToDollar(cantidad) {
    return cantidad * unEuro.dolar;
}

function fromYenToPound(cantidad) {
    let euroCantidad = cantidad / unEuro.yen;
    return euroCantidad * unEuro.libra;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };