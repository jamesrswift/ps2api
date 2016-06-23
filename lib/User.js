/**
 * PS2API
 * https://github.com/JamesxX/ps2api
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

/**
 * Adds the user class to the module
 *
 * @module ps2api
 * @submodule ps2api-user
 * @main ps2api
 */

/**
 * A class for performing actions on a
 * user basis for pointshop 2
 *
 * @class User
 * @constructor
 * @param {string} Player
 * @param {string} Name Name of the User
 * @param {integer} UniqueID UniqueID of the User
 * @param {integer} Steam64 64 bit representation of the User's SteamID
 * @param {integer} InventoryID ID for the associated inventory of the User
 * @param {Connection} Parent The Connection class this user is from.
 */
class User{
	
	constructor( player, name, uniqueid, steam64, invid, parent ){
		
/**
 * Player variable
 *
 * @property player
 * @type string
 */
		this.player = player;
		
/**
 * Name of the user
 *
 * @property name
 * @type string
 */
		this.name = name;
		
/**
 * UniqueID of the user
 *
 * @property uniqueid
 * @type integer
 */
		this.uniqueid = uniqueid;
		
/**
 * SteamID64 of the user
 *
 * @property steam64
 * @type integer
 */
		this.steam64 = steam64;
		
/**
 * Inventory ID of the user
 *
 * @property invid
 * @type integer
 */
		this.invid = invid;
		
/**
 * Parent Connection class of User object
 *
 * @property parent
 * @type Connection
 */		
		this.parent = parent;
	}
	
/**
 * Gives an item to the user by name of the item
 *
 * @method giveItem
 * @param {string} ItemName Item to be given
 * @param {Function} Callback Called when the query has finished
 * @return {Boolean} Returns false if the item doesn't exist
 */
	giveItem( itemName, cb ){
		var item = this.parent.getItem( itemName );
		
		if ( item ){
			this.parent.GiveItem( this, item, cb );
			return true;
		}
		
		return false;
	}
	
}

module.exports = User