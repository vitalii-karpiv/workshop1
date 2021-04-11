module.exports= (left, right) => {
    return left.reduce((accumulator, el) => {
        if(right.includes(el)) accumulator.push(el);
        return accumulator;
    }, []);
};