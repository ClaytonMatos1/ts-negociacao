export function DomInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(`buscando elemento com o seletor ${seletor}`);
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        console.log(`seletor -> ${seletor} - propertyKey -> ${propertyKey}`);
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
