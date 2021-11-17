import { Sequelize } from "sequelize";

const db = new Sequelize('testdb', 'postgres', 'password',{
    dialect:'postgres',
    host:'localhost'
})

export default db;