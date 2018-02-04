const {
    boolTrue,
    boolFlase,
    not,
} = require('./logic');

const succ = n => f => x => f(n(f)(x));

const add = n => m => f => x => m(f)(n(f)(x));

const mul = n => m => f => x => m(n(f))(x);

const power = n => m => m(n);

const isZero = n => n(() => boolFalse)(boolTrue);

const isEven = n => n(not)(boolTrue);

module.exports = {
    succ,
    add,
    mul,
    power,
    isZero,
    isEven,
};