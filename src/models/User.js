'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', {
    user_id: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.ENUM('kakao', 'google', 'facebook', 'naver'),
    created_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  
  user.associate = function(models) {
    user.belongsToMany(models.Challenges, { through: 'UserChallenges' });
  };
  return user;
};