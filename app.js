// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
   let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a yenes
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromEuroToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}

const fromDollarToYen = function(valueInDollar) {
    // tomamos el valor en dólares y lo convertimos en yenes
    let valueInYenes = (3.5 / 1.07) * 156.5;
    // Retornamos el valor en yenes
    return valueInYenes;
}

const fromYenToPound = function(valueInDollar) {
    let valueInPounds = (3.5 / 156.5) * 0.87;
    return valueInPounds;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound}