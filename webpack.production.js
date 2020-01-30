/**
 * Created by S Miller <hereiamnow@gmail.com>
 * Date: 12/22/2019 12:06 PM
 * Relative Path: webpack.production.js
 * Description:
 */

const Dotenv = require('dotenv-webpack')

module.exports = {
	plugins: [
		new Dotenv({
			path: `./.env.production`
		})
	]
}
