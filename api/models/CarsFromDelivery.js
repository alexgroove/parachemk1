/**
 * CarFromDelivery
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	tableName: 'CarsFromDelivery',
	migrate: 'safe',


  attributes: {
  	// id: {type: 'integer', default: null },
  	car_id: { type: 'string' },
  	delivery_id: { type: 'integer' },
  	Railcar: { type: 'string'},
  }

};
