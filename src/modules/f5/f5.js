const f5 = (obj, path, value) => {
    debugger;
    const pathArr = path.split('.');
    if (pathArr.length == 1) {
        return obj[path] = value;
    }

    f5(obj[path[0]], pathArr.slice(1).join('.'), value);
    return obj
}

module.exports = f5;
