export function Escape(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = original.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
