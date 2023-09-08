module.exports = (sequelize, Sequelize) => {
    const Pricing = sequelize.define("t_cnc_log", {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        process_type: {
            type: Sequelize.STRING
        },
        transaction_type: {
            type: Sequelize.STRING
        },
        transact_by: {
            type: Sequelize.STRING
        }
    });
    return Pricing;
};
  