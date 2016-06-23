/**
 * PS2API
 * https://github.com/JamesxX/ps2api
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

/**
 * Adds the item structure to the module
 *
 * @module ps2api
 * @submodule ps2api-item
 * @main ps2api
 */

/**
 * A structure for containing information
 * pertaining to pointshop items
 *
 * @class Item
 * @constructor
 * @param {string} Name Name of the item
 * @param {string} Description Description of the item
 * @param {integer} ID ID for the item
 */
class Item{
	
	constructor( name, description, id){
		this.name = name;
		this.description = description;
		this.id = id;
	}
	
}

module.exports = Item