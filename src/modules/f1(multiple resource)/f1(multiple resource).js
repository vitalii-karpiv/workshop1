module.exports = (left, right, ...args) => {
    const argsObj = args.reduceRight((accumulator, el) => {
        Object.assign(accumulator, el);
        return accumulator;
    }, {});
    return Object.assign({}, argsObj, right, left);
}
