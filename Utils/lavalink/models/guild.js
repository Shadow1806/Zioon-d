"use strict";

module.exports.guildPost = (req) => {
	return {
		id: req,
		prefix: "z!",
		autoconfig: {
			radio: false,
			link: null,
			channel: null
		}
	}
};