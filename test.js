const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Suma
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Euro a Dólar
test("One euro should be 1.07 dollars", function() {
    const euros = 3.5;
    const dollars = fromEuroToDollar(euros);
    const expected = euros * 1.07; 
    expect(dollars).toBe(expected);
});

// Dólar a Yen
test("One dollar should be 146.261 yen", function() {
    const dollars = 3.5;
    const yen = fromDollarToYen(dollars);
    const expected = (dollars / 1.07) * 156.5;
    expect(yen).toBe(expected);
});

// Yen a Libras
test("From Yen to Pounds should be correct", function() {
    const yen = 3.5;
    const pounds = fromYenToPound(yen);
    const expected = (yen / 156.5) * 0.87;
    expect(pounds).toBe(expected);
});