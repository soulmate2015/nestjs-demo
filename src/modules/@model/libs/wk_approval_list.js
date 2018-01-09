'use strict';

/* 流程列表 */
export default (sequelize, DataTypes) => {
  const Model = sequelize.define((__filename.substr(__dirname.length + 1)).split('.')[0], {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {
    // 默认false修改表名为复数，true不修改表名
    freezeTableName: true,
    timestamps: false,
    paranoid: true,
    underscored: true
  });

  return Model;
};
