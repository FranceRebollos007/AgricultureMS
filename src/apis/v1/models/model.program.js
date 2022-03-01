const { setConnection } = require('server');
const mapObjectKey = require('util.map.object-key');

class Program {
    constructor() {}

    /**
     * @param - Object {identifier}
     * @returns - Array
     */
    static async findOne(identifier) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(identifier);

        const sql = `SELECT * FROM programs WHERE ${toPlaceholder}`;

        const response = await setConnection(sql, toObjectValue);

        return response;
    }

    /**
     * @param - Object {data}
     * @returns - Array
     */
    static async create(data) {
        const { toPlaceholder, toObjectValue } = mapObjectKey(data);

        const sql = `INSERT INTO programs SET ${toPlaceholder}`;

        const response = await setConnection(sql, toObjectValue);

        return response;
    }

    /**
     * @paramOne - Object {identifier}
     * @paramTwo - Object {dataToUpdate}
     * @returns - Array
     */
    static async updateOne(identifier, data) {
        const mappedIdentifier = mapObjectKey(identifier);
        const mappedData = mapObjectKey(data);

        const sql = `UPDATE programs SET ${mappedData.toPlaceholder} WHERE ${mappedIdentifier.toObjectKey} = '${mappedIdentifier.toObjectValue[0]}'`;

        const response = await setConnection(sql, mappedData.toObjectValue);

        return response;
    }
}

module.exports = Program;
