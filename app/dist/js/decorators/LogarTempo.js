export function logarTempo(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = original.apply(this, args);
            const t2 = performance.now();
            console.log(`tempo de execução método ${propertyKey}: ${(t2 - t1) / divisor} ${unidade}.`);
            return retorno;
        };
        return descriptor;
    };
}
