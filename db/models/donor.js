'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Donor = db.define('donors', {
  first_name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  last_name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
   Contact_No:{
     type: Sequelize.STRING,
     allowNull: false
   },
  email: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  password: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  date_Of_Birth:{
    type: Sequelize.STRING,
    allowNull: false
  },
  blood_Group:{
    type: Sequelize.STRING,
    allowNull: false
  },
  address:{
    type: Sequelize.STRING,
    allowNull: false
  }


});

module.exports = Donor;
