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
		object.Users = {};
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
		
		// Load users from libk_player
		
		// Load items from ps2_itempersistence
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
				this.onError(err);
				return;
			}
			
			for (var i = 0; i < rows.length; i++) { 
				var row = rows[i]
				THIS_OBJECT.Users[row.uniqueid] = new User(row.uniqueid, row.points, row.items, this);
			}
			
			cb( object );
		});
	}
	
}
	
/**
 * Fired when the connection class connects to the database
 *
 * @event connected
 */

 
module.exports = Connection;