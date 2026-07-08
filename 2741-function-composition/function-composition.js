/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return (initial) => functions.reduceRight((acc, fn)=> fn(acc), initial);
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */