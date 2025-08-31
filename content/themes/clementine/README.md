the PREFIX 'cl' represents the theme name: 'clementine'

`/husky` = Configuration for pre-commit
`/.vite` = Configuration for Vite
`/dist` = compliled code for production
`/src` = Frontend code relating to the main wordpress files 

// When you run 'npm run preview' be sure to change the enviroment to production inside you .env file.
`WP_ENVIRONMENT_TYPE=development` to `WP_ENVIRONMENT_TYPE=production`

## Git Hooks with Husky

This project uses [Husky](https://typicode.github.io/husky/) to automatically run the `pre-commit.sh` script before each commit.  
Husky is configured in `package.json` to trigger the pre-commit hook, which ensures code style checks and WordPress version checks are performed every time you commit changes. This helps maintain code quality and checks that the WordPress core up to date.

You can find the Husky configuration under the `"husky"` section in `package.json`.

## (phpcbf) and (phpcs) code check

/\*\*

- // my text
- can you add a comment that is use script to handle phpcs and phpcbf checking instead of a watcher as it is not the most develpment
- friendly way to handle it as there is some delay when talking to docker as it need to se the changes and report back, also this
- script will get run in pre-commit, but for a better dev experience i also added a script to handle the same checking in order to not
- be finished with the code and trying to push it to git and realising that there are errors still need fixing
-
- // chatgpt
- This script is used to handle PHP_CodeSniffer (phpcs) and PHP Code Beautifier and Fixer (phpcbf) checks.
- Instead of relying on a file watcher—which can introduce delays when interacting with Docker due to the need to detect changes and
- report back this script provides a more developer-friendly approach for running code style checks.
-
- The script is configured to run automatically as a pre-commit hook to ensure code quality before pushing changes.
- Additionally, a separate script is provided to allow developers to manually run the same checks during development.
- This helps catch and fix errors earlier, improving the development workflow and preventing last-minute issues before committing code.
  \*/

# WP-CLI

### User Permissions

When running WP-CLI inside the `php` container, you will encounter an error because you are operating as the **root** user by default. WP-CLI recommends against this for security reasons. Instead, you should run commands as the user that owns the WordPress files, which is in this case `www-data` *- this happends trough the dockerfile*.

So to ensure that all file operations have the correct permissions, use the `--user` flag.

```bash
docker compose exec --user www-data php bash
```
**TIP:** *When you are in the shell, run `whoami` to see what user you run as.*

