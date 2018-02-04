const toInt = n => n((i) => i+1)(0);

const toBool = bool => bool(true)(false);

module.exports = {
    toInt,
    toBool,
};