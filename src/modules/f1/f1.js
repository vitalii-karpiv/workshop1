// Merges two objects, but it doesn't affect the properties that are already defined. Right objects are merged to the left
const f1 = (leftObj, rightObj) => {
    return { ...rightObj, ...leftObj }
}

module.exports = f1;