export function logarTempo() {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = original.apply(this, args);
            const t2 = performance.now();
            console.log(`tempo de execução método ${propertyKey}: ${(t2 - t1) / 1000}s`);
            return retorno;
        };
        return descriptor;
    };
}
