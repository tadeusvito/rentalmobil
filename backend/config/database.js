import {Sequelize} from "sequelize";

const db = new Sequelize('rental', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;