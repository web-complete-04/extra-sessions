export default class Observable {
    constructor(){
        // the objects that need to be notified on change
        this.observers = [];
    }
    

    addObserver(newObserver) {
        this.observers.push(newObserver);
    }


    notifyObservers() {
        this.observers.forEach(observer => observer.updateUI());
    }
}