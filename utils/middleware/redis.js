/*!
 * redis client
 */
'use strict';

var settings = require('../../configs/settings');
var redis = require('redis');
// var client = redis.createClient(settings.redis_port, settings.redis_host);
var client = {};
// client.auth(settings.redis_psd);
module.exports = client;