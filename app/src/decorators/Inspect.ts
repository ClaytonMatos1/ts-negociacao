export function Inspect (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`----- Método ${propertyKey}`);
        console.log(`----- Parametros ${JSON.stringify(args)}`);
        const retorno = original.apply(this, args);
        console.log(`----- Retorno ${retorno}`);
        return retorno;
    }
    return descriptor;
}
