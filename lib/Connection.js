/**
 * PS2API
 * https://github.com/JamesxX/ps2api
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

/**
 * Adds the connection capability to the module
 *
 * @module ps2api
 * @submodule ps2api-connection
 * @main ps2api
 */

const EventManager = require('./Event.js');
var User = require('./User.js');
var Item = require('./Item.js');

/**
 * A utility that manages the connection between
 * Node JS and the MySQL database
 *
 * @class Connection
 * @constructor
 * @param {string} IP The IP address of the MySQL database
 * @param {string} User The username to connect to the MyQL database
 * @param {string} Password The password associated with the username provided
 * @param {string} Database The name of the database with the data from pointshop
 */
class Connection{
	
	constructor( ip, user, pw, db, OnConnect){
		var object = this;
		
/**
 * The Event Manager for the Connection class
 *
 * @property Event
 * @type EventManager
 */
		object.Event = new EventManager;
		
/**
 * Table of users retrieved from the connection
 *
 * @property Users
 * @type Object
 */
		object.Users = {};
		
/**
 * Table of Items retrieved from the connection
 *
 * @property Items
 * @type Object
 */
		object.Items = {}

/**
 * The MySQL connection used by the connection class
 *
 * @property Connection
 * @type MySQLConnection
 */		
		object.Connection = mysql.createConnection({
			host     : ip,
			user     : user,
			password : pw,
			database : db
		});
		
		object.loadUsers(function(object){
			
			object.loadItems(function(object){
				
/**
 * Fired when the connection class connects to the database
 *
 * @event connected
 */
				object.Event.emit('connected', obj);
				
			});
			
		});
	}
	
/**
 * Manages errors thrown by the connection
 *
 * @method onError
 * @return
 */
	onError(err){
 /**
 * Fired when the connection fails
 *
 * @event error
 * @param {String} Error The message from the MySQL connection
 */
		this.Event.emit('error', err);
		
	}
 
 
/**
 * Loads the users from the database
 *
 * @method loadUsers
 * @param {function} Callback Called when query has finished
 * @return
 */
	loadUsers( cb ){
		var object = this;
		
		object.Connection.query('SELECT * FROM libk_player', function(err, rows, fields) {
			if (err) {
				object.onError(err);
				return;
			}
			
			for (var i = 0; i < rows.length; i++) { 
				var row = rows[i]
				object.Users[row.steam64] = new User(
					row.player,
					row.name,
					row.uid,
					row.steam64,
					row.id,
					object
				);
			}
			
			cb( object );
		});
	}
	
/**
 * Gets a user that has been loaded from the database
 *
 * @method getUser
 * @param {integer} SteamID64 The 64 bit representation of the Steam ID of the user to be retrieved
 * @return {User}
 */
	getUser( steam64 ){
		return this.Users[steam64] || false;
	}
	
/**
 * Loads the items from the database
 *
 * @method loadItems
 * @param {function} Callback Called when query has finished
 * @return
 */
	loadItems( cb ){
		var object = this;
		
		object.Connection.query('SELECT * FROM ps2_itempersistence', function(err, rows, fields) {
			if (err) {
				object.onError(err);
				return;
			}
			
			for (var i = 0; i < rows.length; i++) { 
				var row = rows[i]
				object.Users[row.name] = new User(
					row.name,
					row.description,
					row.id
				);
			}
			
			cb( object );
		});
	}
	
/**
 * Gets an item that has been loaded from the database
 *
 * @method getItem
 * @param {string} itemName The name of the item to be given
 * @return {User}
 */
	getUser( sitemName ){
		return this.Items[itemName] || false;
	}
	
/**
 * Gives an item to a user
 *
 * @method giveItem
 * @param {User} User User to give the item to
 * @param {Item} Item User to be given
 * @param {Function} Callback Called when the query has finished
 * @return
 */
	giveItem( User, Item, cb ){
		var object = this;
		
		object.Connection.query('INSERT INTO kinv_items (itemclass, data, inventory_id) VALUES("' + Item.itemClass + '", "' + Item.purchaseData + '", ' + User.invid + ');', function(err, rows, fields) {
			
			if (err) {
				object.onError(err);
				return;
			}
			
			cb( object );
		});
	}
	
}
 
module.exports = Connection;