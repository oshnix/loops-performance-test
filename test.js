const { PerformanceObserver, performance} = require("perf_hooks");
const testSum = require('./src/sum');

const observer = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(entry);
    });
});

observer.observe({ type: 'measure' });

function testModule(module) {
    const arr = module.createRandomArray();

    module.functions.forEach(f => {
        performance.mark(f.mark);
        f(arr);
        performance.measure(f.mark, f.mark);
    });
}

testModule(testSum);






