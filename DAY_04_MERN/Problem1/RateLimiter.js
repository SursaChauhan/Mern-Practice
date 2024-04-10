function rateLimiter(limitPerSec) {
    let lastCheckTime = Date.now();
    let count = 0;

    return function() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastCheckTime;

        if (elapsedTime < 1000) { // 1000 milliseconds = 1 second
            if (count >= limitPerSec) {
                return false;
            }
        } else {
            lastCheckTime = currentTime;
            count = 0;
        }

        count++;
        return true;
    };
}

// Usage
const limiter = rateLimiter(3); // Allow 3 calls per second
for (let i = 0; i < 5; i++) {
    if (limiter()) {
        console.log("Allowed");
    } else {
        console.log("Rate limit exceeded");
    }
    setTimeout(() => {}, 200); // To demonstrate multiple calls within a second
}
