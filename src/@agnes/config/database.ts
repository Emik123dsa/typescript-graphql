/**
 * MongoDB connection accordingly to the interface
 */
export interface connectToMongoDb {
  DB_USER: string,
  DB_PASSWORD: string,
  DB_SCHEMA: string,
  DB_CLUSETER: string,
  DB_FEATURES: Object[]
}
/**
 * Interface implementation for database connection
 *
 * @export
 * @class MongoConfig
 * @implements {connectToMongoDb}
 */
export class MongoConfig implements connectToMongoDb {
  /**
   * Database user
   *
   * @type {string}
   * @memberof MongoConfig
   */
  public readonly DB_USER: string = "debian-thief";
  /**
   * Password from the database
   *
   * @type {string}
   * @memberof MongoConfig
   */
  public readonly DB_PASSWORD: string = "Rjyafqyvtyn15";
  /**
   * Databasae cluster
   *
   * @type {string}
   * @memberof MongoConfig
   */
  public readonly DB_CLUSETER: string = "cluster0-o72en.mongodb.net";
  /**
   * Schema for database
   *
   * @type {string}
   * @memberof MongoConfig
   */
  public readonly DB_SCHEMA: string = "mongodb+srv://";
  /**
   * DB Features
   *
   * @type {string}
   * @memberof MongoConfig
   */
  public readonly DB_FEATURES: Object[] = [{ 'retryWrites': true }, { 'w': 'majority' }];
  public constructor() { }
  /**
   * getPassword
   *
   * @returns
   * @memberof MongoConfig
   */
  public getPassword(): string {
    return this && this.DB_PASSWORD;
  }
  /**
   * Get user
   *
   * @returns {string}
   * @memberof MongoConfig
   */
  public getUser(): string {
    return this && this.DB_USER;
  }
  /**
   * Db schema getter
   *
   * @returns {string}
   * @memberof MongoConfig
   */
  public getSchema(): string {
    return this && this.DB_SCHEMA;
  }
  /**
   * Get cluster
   *
   * @returns {string}
   * @memberof MongoConfig
   */
  public getCluster(): string {
    return this && this.DB_CLUSETER;
  }
  /**
   * Get features for connection
   *
   * @returns {Object[]}
   * @memberof MongoConfig
   */
  public getFeatures(): Object[] {
    return this && this.DB_FEATURES;
  }
}


