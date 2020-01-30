/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/22/2019 12:05 PM
 * Relative Path: webpack.development.js
 */

const Dotenv = require('dotenv-webpack')

module.exports = {
	plugins: [
		new Dotenv({
			path: `./.env.development`
		})
	]
}
