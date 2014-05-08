/**
 * DeliveryController
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

	create: function (req, res) {
		Delivery.create().done(function (err, delivery) {
			if (err) return console.log(err);
			return res.redirect('/delivery/' + delivery.id + '/manage');
		});
	},

	manage: function (req, res) {
		var delivery_id = req.param('delivery_id');
		// Get cars at station not process
		Delivery.findOne(delivery_id, function (err, delivery) {
			if (err) return console.log(err);
			if (!delivery) return res.view('404');
			CarsAtStation.find().where({ isProcessed: false }).exec(function (err, cars_at_station) {
				if (err) return console.log(err);
				CarsFromDelivery.find().where({ delivery_id: delivery_id }).exec(function (err, cars_from_delivery) {
					if (err) return console.log(err);
					return res.view({ 
						delivery_id        : delivery_id,
						cars_at_station    : cars_at_station,
						cars_from_delivery : cars_from_delivery,
					});

				});

			});
		});
	},

	addCar: function (req, res) {
		var car_id      = req.param('car_id');
		var delivery_id = req.param('delivery_id');
		var newCar = { 
			car_id      : car_id, 
			delivery_id : delivery_id,

		};
		CarsAtStation.findOne({ RailCarID: car_id }, function (err, car) {
			if (err) return console.log(err);
			console.log(car);
			var newCar = { 
				car_id      : car_id, 
				delivery_id : delivery_id,
				Railcar: car.Railcar,
			};
			CarsFromDelivery.create(newCar).done(function (err, car) {
				if (err) return console.log(err);
				console.log('car from delivery: DONE');
				CarsAtStation.update({ RailCarID: car_id }, { isProcessed: true }, function (err, cars) {
					if (err) return console.log(err);
					console.log('car from station update: DONE');
					return res.redirect('/delivery/' + delivery_id + '/manage');
				});
			});		
		})

		// Add car to delivery cars table
		// Update car from cars at station with isProcessed = true
	},

	removeCar: function (req, res) {
		var car_id      = req.param('car_id');
		var delivery_id = req.param('delivery_id');
		CarsFromDelivery.destroy({ car_id: car_id }).done(function (err) {
			if (err) return console.log(err);
			CarsAtStation.update({ RailCarID: car_id }, { isProcessed: false }, function (err, cars) {
				if (err) return console.log(err);
				return res.redirect('/delivery/' + delivery_id + '/manage');
			});
		});
		// Remove car from delivery cars table
		// Update car from cars at station with isProcessed = false
	},

	deleteDelivery: function (req, res) {
		// For all cars in delivery cars, remove it from table and update cars at station car with isProcessed = false
		// Remove delivery from table
	},

    


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to DeliveryController)
   */
  _config: {}

  
};
