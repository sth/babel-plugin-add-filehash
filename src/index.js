
const crypto = require('crypto');

export default function({ types: t }) {
	return {
		visitor: {
			Program(path, state) {
				const hash = crypto.createHash('sha1');
				hash.update(state.file.code);
				const hashstmt = t.expressionStatement(t.stringLiteral("filehash " + hash.digest('base64')));
				path.pushContainer("body", hashstmt);
			}
		}
	};
}

