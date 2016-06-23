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
 */
class User{
	
	constructor( player, name, uniqueid, steam64, invid, parent ){
		this.player = player;
		this.name = name;
		this.uniqueid = uniqueid;
		this.steam64 = steam64;
		this.invid = invid;
		
		this.parent = parent;
	}
	
}

module.exports = User