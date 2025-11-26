is.num = function(val) {
    return typeof(val) === 'number';
};

is.nan = function(val) {
    return val !== val;
};

is.str = function(a) {
    return typeof a === 'string';
};

is.bool = function(a) {
    return typeof(a) === 'boolean';
};

is.undef = function(a) {
    return typeof(a) === 'undefined';
};

is.def = function(a) {
    return typeof(a) !== 'undefined';
};

is.arr = function(a) {
    return Array.isArray(a);
};

is.obj = function(a) {
    return typeof(a) === 'object' && !is.arr(a) && a !== null;
};

is.fun = function(a) {
    return typeof(a) === 'function';
};

is.truthy = function(a) {
    return !!a;
};

is.falsy = function(a) {
    return !a;
};
