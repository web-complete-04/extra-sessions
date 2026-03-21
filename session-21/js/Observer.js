export default class Observer {
    constructor(observable) {
        this.observable = observable;
        this.updatableElements = [];
    }

    addUpdatableElement(element, observedProperty) {
        this.updatableElements.push({element, observedProperty});
    }

    updateUI() {
        // for al the graphic components that need to be updated
        this.updatableElements.forEach(updatableElement => {            
            updatableElement.element.textContent = this.observable[updatableElement.observedProperty]
        })
    }
}