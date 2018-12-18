'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('projects', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', unique: true, notNull: true },
      description: 'text',
      state: 'string',
      type: 'string',
      created_at: { type: 'timestamp', notNull: true, defaultValue: new String('CURRENT_TIMESTAMP') },
      finished_at: 'timestamp'
    },
    ifNotExists: true
  }, callback);
}

exports.down = function(db) {
  return db.dropTable('projects');
};

exports._meta = {
  "version": 1
};
