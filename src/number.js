const {
    boolTrue,
    boolFlase,
    not,
} = require('./logic');

const zero = f => x => x;

const succ = n => f => x => f(n(f)(x));

const add = n => m => f => x => m(f)(n(f)(x));

const mul = n => m => f => x => m(n(f))(x);

const power = n => m => m(n);

const pred = n => f => x => n(d => e => e(d(f)))(_ => x)(n => n)

const sub = n => m => m(pred)(n)

const isZero = n => n(() => boolFalse)(boolTrue);

const isEven = n => n(not)(boolTrue);

module.exports = {
    zero,
    succ,
    add,
    mul,
    power,
    pred,
    sub,
    isZero,
    isEven,
};