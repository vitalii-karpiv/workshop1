const f1_deepMerge= (left, right) => {
    const newArr = { ...right };
    for (const key of Object.keys(left)) {
        if (left[key] instanceof Object) Object.assign(left[key], f1_deepMerge(left[key], newArr[key]))
    }
    return Object.assign(newArr || {}, left);
}

module.exports = f1_deepMerge;
