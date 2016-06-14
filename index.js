"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var t = _ref.types;

	return {
		visitor: {
			Program: function Program(path) {
				path.unshiftContainer("body", t.expressionStatement(t.stringLiteral("fileid ?")));
			}
		}
	};
};

