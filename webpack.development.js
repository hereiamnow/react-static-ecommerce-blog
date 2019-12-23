/**
 * Created by S Miller <hereiamnow@gmail.com>
 * User: Developer
 * Project: https://react-static-ecom-blog.netlify.com
 * GitRepo: https://github.com/hereiamnow/react-static-ecom-blog.git
 * Date: 12/22/2019 12:05 PM
 * Relative Path: webpack.development.js
 * Description:
 */

const Dotenv = require('dotenv-webpack')

module.exports = {
	plugins: [
		new Dotenv({
			path: `./.env.development`
		})
	]
}
