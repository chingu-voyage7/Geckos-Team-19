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
  db.createTable('developers', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', unique: true, notNull: true },
      profile_img: 'string',
      email: { type: 'string', unique: true, notNull: true },
      skills: 'text',
      created_at: { type: 'timestamp', notNull: true, defaultValue: new String('CURRENT_TIMESTAMP') },
    },
    ifNotExists: true
  }, callback);
}

exports.down = function(db) {
  return db.dropTable('developers');
};

exports._meta = {
  "version": 1
};
