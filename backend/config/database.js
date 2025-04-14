import {Sequelize} from "sequelize";

const db = new Sequelize('rental', 'root', '',{
    host: '34.42.177.101',
    dialect: 'mysql'
});

export default db;
