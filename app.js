const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const sum = (a, b) => {
    return a + b;
}

const fromDollarToYen = (dollar) => {
    return (dollar / 1.2)*127.9;
}

const fromEuroToDollar = (euro) => {
    return euro * 1.2;
}

const fromYanToPound = (yan) => {
    return (yan / 127.5) * 0.8;
}

console.log(fromYanToPound(1))

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYanToPound}