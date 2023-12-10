import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const{DataTypes} = Sequelize;

const Pes = db.define('pesawat',{
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

export default Pes;

// (async()=>{
//     await db.sync();
// })();