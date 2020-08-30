const { Model } = require('objection');

module.exports = class Message extends Model {
    static get tableName() {
        return 'messages';
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
};
