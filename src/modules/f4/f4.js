module.exports = (obj, path) => {
    // debugger;
    const pathArr = path.split('.')
    return pathArr.reduce((accum, el) => {
        if(accum === undefined) return undefined;
        accum = accum[el];
        return accum;
    }, obj);
};