/**
 * PS2API
 * https://github.com/JamesxX/ps2api
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

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