'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var t = _ref.types;

	return {
		visitor: {
			Program: function Program(path, state) {
				var hash = crypto.createHash('sha1');
				hash.update(state.file.code);
				path.unshiftContainer("body", t.expressionStatement(t.stringLiteral("filehash " + hash.digest('base64'))));
			}
		}
	};
};

var crypto = require('crypto');

