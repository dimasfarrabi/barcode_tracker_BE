module.exports = (sequelize, Sequelize) => {
    const Pricing = sequelize.define("t_barcode", {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        barcode_id: {
            type: Sequelize.STRING
        },
        date_cnc_in: {
            type: Sequelize.DATE
        },
        date_cnc_out: {
            type: Sequelize.DATE
        },
        date_finishing_in: {
            type: Sequelize.DATE
        },
        date_finishing_out: {
            type: Sequelize.DATE
        },
        date_packing_in: {
            type: Sequelize.DATE
        },
        date_packing_out: {
            type: Sequelize.DATE
        },
        end_status:{
            type:Sequelize.TINYINT,
            allowNull:false,
            defaultValue: "0"
        }
    });
    return Pricing;
};
  