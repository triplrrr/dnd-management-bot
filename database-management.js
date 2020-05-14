const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'data.sqlite'
});

exports.db = db;

// Establish model for `server` table
/**
 * Returns a `Server` model
 * @param [Sequelize] - The database for the model
 */
exports.ServersModel = db.define('servers', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  main_channel_name: {
    type: Sequelize.DataTypes.STRING
  },
  main_channel_id: {
    type: Sequelize.INTEGER.UNSIGNED
  }
});

exports.authenticate = () => {
  // test the connection to the database
  db.authenticate()
    .then(() => {})
    .catch(err => {
      throw err;
    });
}
