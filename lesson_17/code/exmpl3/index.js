let x;

setTimeout(() => {
    x = 10;
}, 0);

console.log(x);

// Intervals

const printHello = () => {
    console.log('Hello');
};

const printHelloInterval = setInterval(printHello, 1500);

// Остановит повторение через 10 секунд
const timeout = setTimeout(() => {
    clearInterval(printHelloInterval);
}, 10_000);


// clearTimeout(timeout);