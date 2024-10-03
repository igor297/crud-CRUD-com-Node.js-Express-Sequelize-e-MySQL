// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // O caminho deve ser correto

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = User;