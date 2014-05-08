/**
 * MainController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  index: function (req, res) {

    /*
  	// Get the all column names from the table schema
		CarsAtStation.query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='"+ CarsAtStation.tableName +"'", function (err, columns) {
			// If error, log
  		if (err) return console.log(err);
  		// Get all the cars 
			CarsAtStation.find().done(function (err, cars) {
				// If error, log
	  		if (err) return console.log(err);
	  		// Return the view
	  		return res.view({ cars: cars, columns: columns });
			});
		});
    */

    return res.view();

  },







  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MainController)
   */
  _config: {}

  
};
