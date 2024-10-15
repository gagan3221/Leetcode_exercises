/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init;
    var increment = function(){
        current++;
        return current;
    }
    var decrement = function(){
        current--;
        return current;
    }
    var reset = function(){
        current = init;
        return current;
    }

    return {increment , decrement , reset}
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */