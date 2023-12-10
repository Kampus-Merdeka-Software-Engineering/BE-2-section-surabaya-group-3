import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const{DataTypes} = Sequelize;

const Kap = db.define('kapal',{
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

export default Kap;

// (async()=>{
//     await db.sync();
// })();