const boolTrue = thenDo => elseDo => thenDo;

const boolFalse = thenDo => elseDo => elseDo;

const ifThenElse = bool => thenDo => elseDo => bool(thenDo)(elseDo);

const not = bool => thenDo => elseDo => bool(elseDo)(thenDo);

const and = bool1 => bool2 => bool1(bool2)(bool1)

const or = bool1 => bool2 => bool1(bool1)(bool2);

module.exports = {
    boolTrue,
    boolFalse,
    ifThenElse,
    not,
    and,
    or,
};