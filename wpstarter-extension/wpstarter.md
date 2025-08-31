## Filestructure, configuration, key explanations

Here's a brief overview of what each key in the wpstarter.json configuration implies:

*  **`skip-db-check`**
	- **Implication**: When set to `true`, this instructs `wecodemore/wpstarter` to bypass the database connection check during its build process.
	*  **Consideration**: This is particularly crucial for the initial setup using Composer to prevent it from failing due to the database not being created yet. After the first successful setup and you have gone through the installer.php step, you have the option to switch this value back to `false` if you prefer the database check to be active for subsequent operations.

*  **`register-theme-folder`**
	*  **Implication**: Setting this to `true` creates an internal alias, effectively linking this setting with the `content-dev-dir`. This helps `wpstarter` properly recognize and manage the theme-related files within that specified development content directory.
	*  **Consideration**: This ensures that your development content directory is correctly treated as a valid theme folder.

*  **`content-dev-dir`**: This key specifies the name of the directory where your development-related content, such as themes and plugins, will be located. In this configuration, it's set to `"content"`, centralizing the development assets in a clearly defined location.

*  **`install-wp-cli`**: Set to false. This is because WP-CLI is installed directly by Docker, ensuring the wp command is immediately accessible within the container without the need for a separate download check via WPStarter.

*  **`env-example`**: When this key is set to `false`, `wpstarter` will **not** automatically generate an example `.env` file.

*  **`autoload`**: This key points to `wpstarter-extension/wpstarter-autoload.php`, indicating that `wpstarter` should include this custom autoload file. This allows for the integration of custom classes, functions, or other components that are essential for your specific `wpstarter` extensions or project customizations.

*  **`custom-steps`** 
This object is used to define and execute custom steps as part of `wpstarter`'s build process.
  
	*  **`build-public-readme`**: Points to `WpStarterExtension\\Steps\\PublicReadmeStep`, a custom step that creates documentation for the `public/` folder by adding a `README.md` file.

	*  **`build-public-htaccess`**: Points to `WpStarterExtension\\Steps\\PublicHtaccessStep`, a custom step that generates the `.htaccess` file containing the necessary rules and redirects for Apache.

### Defining Custom Scripts

If you want to implement the scripts object, here's an example of how it would look. This is useful if you run into issues finding the correct structure, as I did.

```
"scripts": {
	"pre-wpstarter": [
		"WpStarterExtension\\Scripts\\ScriptsHandler::runScriptOne"
	],
	"post-wpstarter": [
		"WpStarterExtension\\Scripts\\ScriptsHandler::runScriptTwo"
	]
}
```
  * `"pre-wpstarter"`: Scripts listed here run before WPStarter performs its main operations.

  * `"post-wpstarter"`: Scripts listed here run after WPStarter has completed its installation.