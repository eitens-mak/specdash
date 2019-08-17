import $ from 'jquery';
global.$ = global.jQuery = $;
global.fetch = require('jest-fetch-mock');

global.vega = {
    parse: jest.fn(),
    View: jest.fn().mockImplementation(() => {
	return {
	    logLevel: global.vega.View,
	    renderer: global.vega.View,
	    initialize: global.vega.View,
	    hover: global.vega.View,
	    runAsync: jest.fn().mockImplementation(
		() => Promise.resolve(true))
	};
    })
};

global.JSONEditor =
    jest.fn().mockImplementation(() => {
	return {on: jest.fn()};
    });
