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
	Connection: require("./lib/connection.js"),
	User: require("./lib/user.js"),
	Item: require("./lib/item.js"),
};