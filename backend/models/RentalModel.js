import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const rental = db.define('rentalan', {
    nama_penyewa: DataTypes.STRING,
    tipe_mobil: DataTypes.STRING,
    durasi_sewa: DataTypes.INTEGER, // Ubah ke INTEGER untuk perhitungan
    harga: DataTypes.INTEGER,
    total_harga: DataTypes.INTEGER, 
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
}, {
    freezeTableName: true,
    hooks: {
        beforeCreate: (rental) => {
            rental.total_harga = rental.durasi_sewa * rental.harga;
        },
        beforeUpdate: (rental) => {
            rental.total_harga = rental.durasi_sewa * rental.harga;
        }
    }
});

export default rental;

(async () => {
   await db.sync(); 
})();