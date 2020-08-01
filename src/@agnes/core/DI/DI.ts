import { DependencyInjectionInstance } from "./DIInterface";
/**
 * Let's create class for binding all of the required schema queries
 *
 * @export
 * @class DependencyInjection
 * @implements {DependencyInjectionInstance}
 */
export class DependencyInjection implements DependencyInjectionInstance {
  /**
  * instance for binding classes
  *
  * @private
  * @static
  * @type {Singleton}
  * @memberof Singleton
  */
  protected static instanceInjection: DependencyInjection = null;
  /**
   * Creates an instance of Singleton.
   * @memberof DependencyInjection 
   */
  private constructor() { }
  /**
   * GetInstance to receive and create new instance of class
   *
   * @static
   * @returns
   * @memberof DependencyInjection 
   */
  public static getInstance() {
    if (!DependencyInjection.instanceInjection) {
      DependencyInjection.instanceInjection = new DependencyInjection();
    }
    return DependencyInjection.instanceInjection;
  }
  /**
   * Container for data accumulating
   *
   * @protected
   * @type {any[]}
   * @memberof DependencyInjection
   */
  protected state: any[] = [];
  /**
   * Establish for container
   *
   * @param {number} key
   * @param {Object} value
   * @memberof DependencyInjection
   */
  public setContext(key: number, _: Object): Promise<Object> {
    return new Promise((res, rej) => {
      try {
        if (!_) rej(_);

        res(this.state[key] = _);
      }
      catch (e) {
        rej(e);
      }
    })
  }
  /**
   * Get Values from container
   *
   * @memberof DependencyInjection
   */
  public getContext(key: number): void {
    return this.hasContext(key) ? this.state[key] : [];
  }
  /**
   * Checkout appropriately container
   *
   * @returns
   * @memberof DependencyInjection
   */
  public hasContext(key: number): Boolean {
    return !this.state[key] ? false : true;
  }
  /**
   * We can also demolish context from the container
   *
   * @param {number} key
   * @returns {void}
   * @memberof DependencyInjection
   */
  public demolishContext(key: number): void {
    if (!this.hasContext(key)) return;
    delete this.state[key];
  }
}