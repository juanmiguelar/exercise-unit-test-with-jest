

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //import the function from app.js
    const { sum } = require('./app.js')
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test('add 1 + 1 to equal 2', () => {
    //import the function from app.js
    const { sum } = require('./app.js');

    let total = sum(1,1)

    expect(total).toBe(2)
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.58333333333334 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 106.58333333333334; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yens);
})

test("One yan should be 0.006274509803921569 pound", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYanToPound(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 0.006274509803921569; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
})