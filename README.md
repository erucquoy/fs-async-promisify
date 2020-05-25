# fs-async-promisify
### Node Async FS - File System promsified - promisify - promises

- [Install](#install)
- [How to use](#how-to-use)
- [Tests](#tests)
- [Contribute](#contribute)
- [Credits](#credits)

> By default this npm module is auto-updated with each version of NodeJS !

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

## Tests

There is NO tests actually. 

## Contribute

Hello ! Don't hesitate to contribute (for make tests and what you want)
Add your issues and do your pull requests, I will review and answer fast as possible !

Thank you :)

## Credits

There is no real credits. I just see than people do ONE function by ONE. It was too long for me to code it, so I decided to make it automatic and to release this package to help people with async filesystem stuff with Node.JS

By default it is auto-updated with each version of NodeJS !


