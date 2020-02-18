module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3,
          max: 160
        }
      },
      slug: {
        type: DataTypes.STRING,
        //allowNull: false,
        validate: {
          min: 3,
          max: 160
        }
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          min: 20,
          max: 2000
        }
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );

  // Post.associate = models => {
  //   Post.belongsTo(models.author);
  // };

  return Post;
};
