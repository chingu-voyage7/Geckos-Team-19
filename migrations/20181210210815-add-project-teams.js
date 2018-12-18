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
  db.createTable('project_teams', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      project_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'project_project_teams_foreign',
          table: 'projects',
          mapping: 'id',
          rules: {
            onDelete: 'cascade',
            onUpdate: 'restrict',
          }
        }
      },
      team_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'team_project_teams_foreign',
          table: 'teams',
          mapping: 'id',
          rules: {
            onDelete: 'cascade',
            onUpdate: 'restrict',
          }
        }
      },
      status: 'string',
      joined_at: { type: 'timestamp', notNull: true, defaultValue: new String('CURRENT_TIMESTAMP') },
    },
    ifNotExists: true
  },
  callback);
}

exports.down = function(db) {
  return db.dropTable('project_teams');
};

exports._meta = {
  "version": 1
};
