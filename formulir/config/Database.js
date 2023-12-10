import { Sequelize } from "sequelize";

const db = new Sequelize('trav','root','',{
    host:'localhost',
    dialect: 'mysql' 
});

export default db;