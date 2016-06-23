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
		
/**
 * Name of the item
 *
 * @property name
 * @type string
 */
		this.name = name;
		
/**
 * Description of the item
 *
 * @property description
 * @type string
 */
		this.description = description;
		
/**
 * ID of the item
 *
 * @property id
 * @type integer
 */
		this.id = id;
	}
	
/**
 * Value used by pointshop 2 to determine the class of the item
 *
 * @property itemClass
 * @type string
 */
	get itemClass( ){
		return 'KInventory.Items.' + this.id;
	}
	
/**
 * Value used by pointshop 2 to determine the purchase data of the item
 *
 * @property purchaseData
 * @type string
 */
	get purchaseData( ){
		return JSON.stringify({
			purchaseData: {
				amount: 0,
				time: Math.floor( new Date().getTime() / 1000 ),
				currency: "points",
				origin: "SHOP"
			}
		});
	}
	
}

module.exports = Item