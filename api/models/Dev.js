/**
 * Dev
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	tableName: 'dbo.dev',
	migrate: 'safe',

  attributes: {
  	
  	id: { 
  		type: 'integer'
  	},
  	title: { 
  		type: 'string' 
  	},	
	    
  }

};
