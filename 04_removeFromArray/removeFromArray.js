const removeFromArray = function(array, ...remove) {
    const result = [];
    array.forEach(item => {
        if (!remove.includes(item)) {
            result.push(item);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
