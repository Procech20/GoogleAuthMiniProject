const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasOne(models.Profile, {
				foreignKey: 'id',
				as: 'profiles',
				onDelete: 'CASCADE',
			});
		}
	}
	User.init(
		{
			googleId: DataTypes.STRING,
			givenName: DataTypes.STRING,
			familyName: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
