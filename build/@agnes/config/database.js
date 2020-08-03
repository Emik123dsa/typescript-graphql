"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConfig = void 0;
/**
 * Interface implementation for database connection
 *
 * @export
 * @class MongoConfig
 * @implements {connectToMongoDb}
 */
class MongoConfig {
    constructor() {
        /**
         * Database user
         *
         * @type {string}
         * @memberof MongoConfig
         */
        this.DB_USER = "debian-thief";
        /**
         * Password from the database
         *
         * @type {string}
         * @memberof MongoConfig
         */
        this.DB_PASSWORD = "Rjyafqyvtyn15";
        /**
         * Databasae cluster
         *
         * @type {string}
         * @memberof MongoConfig
         */
        this.DB_CLUSETER = "cluster0-o72en.mongodb.net";
        /**
         * Schema for database
         *
         * @type {string}
         * @memberof MongoConfig
         */
        this.DB_SCHEMA = "mongodb+srv://";
        /**
         * DB Features
         *
         * @type {string}
         * @memberof MongoConfig
         */
        this.DB_FEATURES = [{ 'retryWrites': true }, { 'w': 'majority' }];
    }
    /**
     * getPassword
     *
     * @returns
     * @memberof MongoConfig
     */
    getPassword() {
        return this && this.DB_PASSWORD;
    }
    /**
     * Get user
     *
     * @returns {string}
     * @memberof MongoConfig
     */
    getUser() {
        return this && this.DB_USER;
    }
    /**
     * Db schema getter
     *
     * @returns {string}
     * @memberof MongoConfig
     */
    getSchema() {
        return this && this.DB_SCHEMA;
    }
    /**
     * Get cluster
     *
     * @returns {string}
     * @memberof MongoConfig
     */
    getCluster() {
        return this && this.DB_CLUSETER;
    }
    /**
     * Get features for connection
     *
     * @returns {Object[]}
     * @memberof MongoConfig
     */
    getFeatures() {
        return this && this.DB_FEATURES;
    }
}
exports.MongoConfig = MongoConfig;
//# sourceMappingURL=database.js.map