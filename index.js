/**
 * PS2API
 * https://github.com/JamesxX/ps2api
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

/**
 * Node JS interface for pointshop 2 data 
 * in a MySQL database
 *
 * @module ps2api
 */
module.exports = {
	
/**
 * The Connection class used connect and retrieve data
 *
 * @property Connection
 * @type Connection
 */	
	Connection: require("./lib/connection.js"),
	
/**
 * The User class used to do actions on a per user basis
 *
 * @property User
 * @type User
 */	
	User: require("./lib/user.js"),
	
/**
 * The Item structure used internally to store item data
 *
 * @property Item
 * @type Item
 */	
	Item: require("./lib/item.js"),
};