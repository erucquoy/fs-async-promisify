const fs = require('fs')
const { promisify } = require('util')

const fsAsync = {}

for (let funcName of Object.keys(fs)) {
	if (typeof fs[funcName] == 'function') {
		fsAsync[`${funcName}`] = promisify(fs[funcName])
	}
}

module.exports.fsAsync = fsAsync
