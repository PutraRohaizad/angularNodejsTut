const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    // company_name: {
    //   type: Sequelize.STRING
    // },
    // company_pic: {
    //   type: Sequelize.STRING
    // },
    // register_no: {
    //   type: Sequelize.STRING
    // },
    // password: {
    //   type: Sequelize.STRING
    // },
    // address: {
    //   type: Sequelize.STRING
    // },
    // company_cert: {
    //   type: Sequelize.STRING
    // },
    // departments: {
    //   type: Sequelize.STRING




    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    register_no: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)
