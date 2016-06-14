'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var t = _ref.types;

	return {
		visitor: {
			Program: function Program(path, state) {
				//console.log(state.file);
				//console.log(path.resolve(state.file.opts.filename));
				var hash = crypto.createHash('sha1');
				hash.update(state.file.code);
				path.unshiftContainer("body", t.expressionStatement(t.stringLiteral("fileid " + hash.digest('base64'))));
			}
		}
	};
};

'fileid woSpdx5QcsD1S1zSVC9t3dP7PKU=';

var crypto = require('crypto');

