/**
 * Interface for Dependency injection implementation
 *
 * @export
 * @interface DependencyInjectionInstance
 */
export interface DependencyInjectionInstance {
  setContext(key: number, _: Object): Promise<Object>,
  getContext(key: number): void,
  hasContext(key: number): Boolean,
  demolishContext(key: number): void
}