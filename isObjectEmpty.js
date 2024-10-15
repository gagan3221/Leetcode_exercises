/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
      // Check if obj is an array
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    // Check if obj is an object (and not null)
    if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }

    // Return false for non-object and non-array types
    return false;
};