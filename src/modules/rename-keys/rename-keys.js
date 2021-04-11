const rename_keys = (obj, keyValues) => {
    debugger;
    for (const key of Object.keys(obj)) {
        if (key == Object.keys(keyValues)) {
            obj[Object.values(keyValues)] = obj[key];
            delete obj[key];
            return obj[Object.values(keyValues)];
        }
        if (obj[key] instanceof Object) rename_keys(obj[key], keyValues);
        else return obj[key];
    }
    return obj;
}

module.exports = rename_keys;