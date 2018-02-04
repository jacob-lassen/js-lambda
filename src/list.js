const {
    boolTrue,
    boolFalse,
} = require('./logic');

const left = pair => pair(boolTrue);
const right = pair => pair(boolFalse);

const makePair = left => right => f => f(left)(right);

const nil = makePair(boolTrue)(boolTrue);

const isEmpty = left;

const prepend = item => l => makePair(boolFalse)(makePair(item)(l));

const head = l => left(right(l));
const tail = l => right(right(l));

module.exports = {
    nil,
    isEmpty,
    prepend,
    head,
    tail,
}

