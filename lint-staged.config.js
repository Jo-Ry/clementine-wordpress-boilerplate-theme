import path from 'path';

const ROOT = path.resolve(process.cwd());

/*
	Convert respective file paths to be relative to the repository's root directory. This
	ensures the subsequent linting command can correctly locate the files, as it
	executes from the repo root.
*/
const formatFilenames = filenames => {
	return filenames
		.map(file => {
			let relativePath = path
				.relative(ROOT, file) // Get path relative to repo root
				.replace(/\\/g, '/'); // Replace backslashes with forward slashes for cross-platform compatibility.

			// If the file is actually inside the root, remove leading './' if any
			if (!relativePath) {
				relativePath = path.basename(absolutePath);
			}

			return `${relativePath}`;
		})
		.join(' ');
};
console.log('🚀 ~ formatFilenames ~ formatFilenames:', formatFilenames);

export default {
	// '*.{js}': (filenames) => {
	// 	const scriptFiles = formatFilenames(filenames)
	// 	return `npx --no-install wp-scripts lint-js --fix ${scriptFiles}`
	// },

	// '**/*.{js,mjs,cjs}': (filenames) => {
	// 	const scriptFiles = formatFilenames(filenames)
	// 	console.log("🚀 ~ scriptFiles:", scriptFiles)

	// 	return [
	// 		// `npx --no-install prettier --config ./content/themes/clementine/prettier.config.js --check -- ${scriptFiles}`,
	// 		`npx --no-install wp-scripts lint-js --fix -- ${scriptFiles}`,
	// 	]
	// },

	'content/themes/clementine/**/*.{js,mjs,cjs}': filenames => {
		const scriptFiles = formatFilenames(filenames);

		return [
			// `npx --no-install prettier --config ./content/themes/clementine/prettier.config.js --check -- ${scriptFiles}`,
			//`npx --prefix ./content/themes/clementine --no-install wp-scripts lint-js --fix -- ${scriptFiles}`,
		];
	},

	'content/plugins/clementine-blocks/**/*.{js,jsx,ts,tsx,mjs,cjs}': filenames => {
		const scriptFiles = formatFilenames(filenames);

		return [
			`npm --prefix content/plugins/clementine-blocks run lint:js -- ${scriptFiles}`,
			`wp-scripts lint-js --fix -- ${scriptFiles}`,
			// `cd ./content/plugins/clementine-blocks && wp-scripts lint-js --fix -- ${scriptFiles}`,
			// `npx --prefix ./content/plugins/clementine-blocks wp-scripts lint-js --fix -- ${scriptFiles}`
		];
	},
	'**/*.{css,scss}': filenames => {
		const cssFiles = formatFilenames(filenames);

		return [
			//`npx --prefix ./content/themes/clementine --no-install stylelint --config ./content/themes/clementine/stylelint.config.js ${cssFiles}`,
		];
	},
	'**/*.{json,html,yml}': filenames => {
		const phpFiles = formatFilenames(filenames);

		return ['echo skip'];
	},
	'**/*.php': filenames => {
		const phpFiles = formatFilenames(filenames);

		return [
			//`docker-compose exec -T php sh -c "vendor/bin/phpcs ${phpFiles}"`,
			//`docker-compose exec -T php sh -c 'vendor/bin/phpcbf ${phpFiles}'`,
		];
	},
};
