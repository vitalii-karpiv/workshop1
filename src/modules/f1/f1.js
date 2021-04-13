const f1 = (left, right, ...args) => {
    const copyRight = { ...right };
    const copyLeft = { ...left };

    for (const key of Object.keys(copyLeft)) {
        if (copyLeft[key] instanceof Object) Object.assign(copyLeft[key], f1(copyLeft[key], copyRight[key]))
    }
    Object.assign(copyRight || {}, copyLeft);

    if (args.length) return f1(copyRight, ...args);
    return copyRight;
}

module.exports = f1;
