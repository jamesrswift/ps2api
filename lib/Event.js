/**
 * PS2API
 * https://github.com/JamesxX/ps2api
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

/**
 * Adds the event emitter to the module
 *
 * @module ps2api
 * @submodule ps2api-event
 * @main ps2api
 */

const EventEmitter = require('events');

/**
 * An Event emitter used by the connection
 * class
 *
 * @class Event
 * @constructor
 */
class Event extends EventEmitter {}

module.exports = Event;