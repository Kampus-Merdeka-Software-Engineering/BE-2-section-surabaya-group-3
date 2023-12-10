import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const{DataTypes} = Sequelize;

const Ker = db.define('kereta',{
    name: DataTypes.STRING,
    asal: DataTypes.STRING,
    tujuan: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
    tipe: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    telpon: DataTypes.STRING,

},{
    freezeTableName:true
});

export default Ker;

// (async()=>{
//     await db.sync();
// })();