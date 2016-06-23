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
 */
class Connection{
	
	constructor( ){
		var object = this;
		
		object.Event = new EventManager;
		object.Users = {};
		object.Items = {}
		
		// Load users from libk_player
		
		// Load items from ps2_itempersistence
	}
	
}

module.exports = Connection;