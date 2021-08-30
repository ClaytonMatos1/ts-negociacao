export function DomInjector(seletor: string) {
    return function (target: any, propertyKey: string) {
        let elemento: HTMLElement;
        const getter = function () {
            if (!elemento) {
                console.log(`buscando elemento com o seletor ${seletor}`);
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
        }
        console.log(`seletor -> ${seletor} - propertyKey -> ${propertyKey}`);
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    }
}