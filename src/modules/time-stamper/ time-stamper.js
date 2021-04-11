const timer = () => {
    const arr = [];
    return  () => {
        arr.push(new Date().getTime())
        return arr;
    }
}

module.exports = timer();
