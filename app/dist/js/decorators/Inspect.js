export function Inspect(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`----- Método ${propertyKey}`);
        console.log(`----- Parametros ${JSON.stringify(args)}`);
        const retorno = original.apply(this, args);
        console.log(`----- Retorno ${retorno}`);
        return retorno;
    };
    return descriptor;
}
