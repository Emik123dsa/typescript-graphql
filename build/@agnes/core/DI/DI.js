"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyInjection = void 0;
/**
 * Let's create class for binding all of the required schema queries
 *
 * @export
 * @class DependencyInjection
 * @implements {DependencyInjectionInstance}
 */
class DependencyInjection {
    /**
     * Creates an instance of Singleton.
     * @memberof DependencyInjection
     */
    constructor() {
        /**
         * Container for data accumulating
         *
         * @protected
         * @type {any[]}
         * @memberof DependencyInjection
         */
        this.state = [];
    }
    /**
     * GetInstance to receive and create new instance of class
     *
     * @static
     * @returns
     * @memberof DependencyInjection
     */
    static getInstance() {
        if (!DependencyInjection.instanceInjection) {
            DependencyInjection.instanceInjection = new DependencyInjection();
        }
        return DependencyInjection.instanceInjection;
    }
    /**
     * Establish for container
     *
     * @param {number} key
     * @param {Object} value
     * @memberof DependencyInjection
     */
    setContext(key, _) {
        return new Promise((res, rej) => {
            try {
                if (!_)
                    rej(_);
                res(this.state[key] = _);
            }
            catch (e) {
                rej(e);
            }
        });
    }
    /**
     * Get Values from container
     *
     * @memberof DependencyInjection
     */
    getContext(key) {
        return this.hasContext(key) ? this.state[key] : [];
    }
    /**
     * Checkout appropriately container
     *
     * @returns
     * @memberof DependencyInjection
     */
    hasContext(key) {
        return !this.state[key] ? false : true;
    }
    /**
     * We can also demolish context from the container
     *
     * @param {number} key
     * @returns {void}
     * @memberof DependencyInjection
     */
    demolishContext(key) {
        if (!this.hasContext(key))
            return;
        delete this.state[key];
    }
}
exports.DependencyInjection = DependencyInjection;
/**
* instance for binding classes
*
* @private
* @static
* @type {Singleton}
* @memberof Singleton
*/
DependencyInjection.instanceInjection = null;
//# sourceMappingURL=DI.js.map