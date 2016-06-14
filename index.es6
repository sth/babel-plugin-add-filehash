
const crypto = require('crypto');

export default function({ types: t }) {
	return {
		visitor: {
			Program(path, state) {
				const hash = crypto.createHash('sha1');
				hash.update(state.file.code);
				path.unshiftContainer("body",
						t.expressionStatement(t.stringLiteral("filehash " + hash.digest('base64')))
					);
			}
		}
	};
}

