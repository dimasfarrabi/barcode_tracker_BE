module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("t_employee", {
      nik: {
        type: Sequelize.STRING
      },
      division: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
  