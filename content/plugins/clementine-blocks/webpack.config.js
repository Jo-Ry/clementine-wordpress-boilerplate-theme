/**
 * Custom Webpack configuration for the clementine-blocks workspace.
 *
 * This configuration extends the default configuration provided by
 * @wordpress/scripts, but modifies the `stats` option to reduce
 * verbosity in the terminal during development.
 *
 * Stats levels control what Webpack prints to the console. By using
 * 'minimal', we only see essential information such as compilation
 * success, errors, and warnings. This makes running multiple dev
 * servers concurrently (e.g., with `concurrently`) much more readable.
 *
 * @see https://webpack.js.org/configuration/stats/
 */

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,

	/**
	 * Configure Webpack stats output.
	 * Options:
	 *  - 'none'          - No output
	 *  - 'errors-only'   - Only errors
	 *  - 'minimal'       - Errors, warnings, and basic compilation info
	 *  - 'normal'        - Moderate output (default)
	 *  - 'detailed'      - Detailed info on chunks and modules
	 *  - 'verbose'       - Extremely verbose
	 */
	stats: 'minimal',
};
