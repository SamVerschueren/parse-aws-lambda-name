'use strict';
module.exports = function (arn) {
	if (typeof arn !== 'string') {
		throw new TypeError('Expected a string');
	}

	var regex = [
		/^([0-9]{12}:[a-z0-9\-_]+):?([a-z0-9\-_]+)?$/i,
		/^([a-z0-9\-_]+):?([a-z0-9\-_]+)?$/i,
		/^(arn:aws:lambda:[a-z0-9\-]+:[0-9]{12}:function:[a-z0-9\-_]+):?([a-zA-Z0-9-_]+)?$/i
	];

	for (var i = 0; i < regex.length; i++) {
		var match = arn.match(regex[i]);

		if (match) {
			if (!match[2]) {
				return {functionName: match[1]};
			}

			return {functionName: match[1], qualifier: match[2]};
		}
	}

	return undefined;
};
