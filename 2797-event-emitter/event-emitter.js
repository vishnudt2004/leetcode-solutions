class EventEmitter {

    constructor() {
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (eventName in this.events) this.events[eventName].push(callback);
        else this.events[eventName] = [callback];

        return {
            unsubscribe: () => {
                const fnInd = this.events[eventName].findIndex((fn) => fn === callback)
                if(fnInd !== -1) this.events[eventName].splice(fnInd, 1);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (eventName in this.events) return this.events[eventName].map((fn) => fn(...args))
        else return [];
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */