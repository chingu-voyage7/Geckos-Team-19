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
  db.createTable('team_members', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      team_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'teams_teams_member_foreign',
          table: 'teams',
          mapping: 'id',
          rules: {
            onDelete: 'cascade',
            onUpdate: 'restrict',
          }
        }
      },
      developer_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'developers_teams_member_foreign',
          table: 'developers',
          mapping: 'id',
          rules: {
            onDelete: 'cascade',
            onUpdate: 'restrict',
          }
        }
      },
      status: 'string',
      position: 'string',
      joined_at: { type: 'timestamp', notNull: true, defaultValue: new String('CURRENT_TIMESTAMP') },
      left_at: { type: 'timestamp'},
    },
    ifNotExists: true
  },
  callback);
}

exports.down = function(db) {
  return db.dropTable('team_members');
};

exports._meta = {
  "version": 1
};
