
export default function({ types: t }) {
	return {
		visitor: {
			Program(path) {
				path.unshiftContainer("body",
						t.expressionStatement(t.stringLiteral("fileid ?"))
					);
			}
		}
	};
}

