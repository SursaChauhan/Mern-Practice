function counter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

// Usage
const { increment, decrement, getCount } = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(decrement()); // Output: 1
console.log(getCount()); // Output: 1
