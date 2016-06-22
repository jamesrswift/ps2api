/**
 * PS2API
 * https://github.com/JamesxX/ps2api
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

const EventManager = require('./Event.js');

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