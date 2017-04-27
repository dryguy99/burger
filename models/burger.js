
module.exports = function (sequelize, DataTypes) {
	var Burgers = sequelize.define("Burgers",{
		burger_name: {
			type: DataTypes.STRING,
			validate: { 
				len: [1,140] }
		},
		devoured: DataTypes.BOOLEAN,
		date: { 
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW }

	});


	return Burgers;
};