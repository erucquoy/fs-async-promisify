# fs-async-promisify
### Node Async FS - File System promsified - promisify - promises

## Install

```sh
npm i -S fs-async-promisify
```

## How to use

You get exactly the **same result** as with ***fs.functionName(args)***

```js
const fsAsync = require('fs-async-promisify')

/* async function way to go */
async function testFsAsync() {
	try {
		const arrayOfFileName = await fsAsync.readdir('/path')
		const stat = await fsAsync.lstat('/path')
	}
	catch (err) {
		console.error(err)
	}
}

/* Promise way to go */
fsAsync.readdir('/path')
	.then(readdirResult => {
		const arrayOfFileName = readdirResult

	})
	.catch(err => {
		console.error(err)
	})

fsAsync.lstat('/path')
	.then(stat => {
		// stat = fs.Stats instance
	})
	.catch(err => {
		console.error(err)
	})

```
