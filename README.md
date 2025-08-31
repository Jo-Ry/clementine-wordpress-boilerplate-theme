# Wordpress boilerplate with Vite 
A boilerplate designed for rapid development using modern technologies. It leverages Docker for streamlined local development, providing containerized environments for `php`, `apache`, and `mariaDB`. Theme development is powered by Vite for fast asset compilation, while block development follows the official WordPress approach using the `@wordpress/create-block` plugin.

## Getting started

### Step 1: Set Up Your Environment Variables
First things first, let's get your environment variables ready.
To do this, simply copy the example environment file to create your own local `.env` file:

```bash
    cp .env.example .env
```

After that, you need to fill out each **variable** with the correct credentials **before proceeding** to Step 2.

### Step 2: Set up your docker containers
```bash
    docker compose build
    docker compose up -d
```

### Step 3: Install Composer Dependencies
**Composer** is already set up and version-controlled at 2.8.9, running globally inside the Docker PHP container (check the `Dockerfile` for details!. **Always run Composer commands directly within the container** to ensure all dependencies are installed correctly within your isolated development environment:

```bash
    docker compose exec php composer install
```
You can now access the WordPress admin login page at [http://localhost:8080](http://localhost:8080).
***but remember that 'username' and 'password' should correspond with the one set in you `.env` file***

### Step 4: Theme & Block Development
To get started with development, you'll need to build your theme assets and WordPress blocks separately, as they use different tools.

---


### Theme Development
All theme-related scripts, styles, and assets are handled by **Vite**.

#### 1. Initial Setup
Before you can use the Vite development server, you must first run a production build. This is a critical initial step because it generates the **`manifest.json`** file, which Vite needs to correctly reference and handle your theme's assets within WordPress.

Navigate to the theme directory in your terminal and run the build command:
```bash
    cd content/themes/clementine && npm install && npm run build
```
This step ensures that all files are correctly processed by WordPress in both development and production environments.

---

#### 2. Development
Once the manifest file is created, you can start the development server. This server will watch for file changes, provide a live-reload environment, and handle HMR for a quick and efficient development workflow.

```bash
    npm run dev
```
Vite handles all theme scripts, styles, images, and fonts.

---

#### Production build
When you're ready to deploy your theme, you need to run a production build to generate all the final, optimized assets for your live site.

```bash
    npm run build
```
**Important Note:** If you add any new static assets to your theme (such as images or fonts) that are handled by Vite, you will need to run npm run build again to update the manifest.json file. Your JavaScript and SCSS files are handled through a main import file, so they will maintain their references after the initial build without this extra step.

---

#### Previewing the Theme
After building your theme for production, you can preview how it will look in a production-like environment using Vite's preview server. This is useful for testing final assets before deploying.

Run:
```bash
    npm run preview
```
This will start a local server that serves your built theme as it would appear in production. Open the provided URL in your browser to view the preview.

---


### Block Development
Blocks are developed separately as a **plugin** using the official `@wordpress/scripts` package, which relies on **Webpack**. This provides three key benefits:

1.  **Separation of Concerns:** The compiled files from Vite (for the theme) and Webpack (for the blocks) are kept in their own directories, preventing any conflicts.
2.  **Portability:** Since blocks are built separately from the theme, they can be used with any theme you choose in the future.
3. **Maintenence:** Since the packages are consistently updated by the WordPress core team, there is no need for us to maintain individual instances.

---

#### 1. Building Blocks (Plugin Workflow)

For more information regarding the build commands, refer to the official WordPress documentation [here](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/).

1.  Navigate to your block's plugin directory in your terminal:
    ```bash
        cd content/plugins/theme-blocks
    ```
2.  Build the code for [development](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#start)
    ```bash
        npm start
    ```
3.  Build the code for [production](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#build)
    ```bash
        npm run build
    ```

### 2. Creating a New Block
To create a new block, a pre-configured script has been set up to simplify the process. This script uses the official `@wordpress/create-block` package with predefined values to ensure all new blocks adhere to the theme's guidelines.
For more information on the `create-block` package, see the official documentation [here](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/).

1.  **Run the command:** Open your terminal and navigate to your plugin `/src` folder. Then, run the following command to create a new block in that directory:
    ```bash
        > cd src
        > npm run create-block
    ```
2.  **Follow the prompts:** The command will ask you a few simple questions. Just type your answer and press Enter after each one:
    * **Template variant**: You will be asked to choose between a static and dynamic block.
        - **Dynamic Block: *( prefered option )*** Content is rendered live when the page loads. If you change the block's code, all instances of the  block are automatically updated. This is the preferred option.
        - **Static Block**: Content is saved to the database. If you change the block's code, you have to manually update each instance on your site.

        Press here more indepth [information](https://developer.wordpress.org/block-editor/getting-started/fundamentals/static-dynamic-rendering/) 
    * **The block slug:** The name of your new block's folder (e.g., `example-folder`).
    * **The display title:** The name that will be shown in the WordPress editor (e.g., `Title`).
    * **The short description:** A brief description of what your block does (e.g., `Description`).
    * **The dashicon:** An icon for your block (e.g., `dashicon`).
    * **The category name:** Where your block will be found in the editor (e.g., `widgets`).
3.  **Done!** The tool will automatically create a new folder with all the files needed for your new block.

### Summary:
- **Theme assets:** 
    - Managed and built with Vite in the theme folder (`content/themes/clementine`).
    - If new assets are added in your theme dont forget to run `npm run build` to keep `manifest.json` up to date.
- **Blocks:**
    - Managed and built with Webpack in the plugins folder, following WordPress standards.


## Under the Hood
This section explains the core components and their interaction, giving you insight into the magic behind your WordPress setup.

### Docker & Docker Compose
- **Docker:** Creates isolated, lightweight containers for our application's services.
- **Docker Compose:** Manages these containers. Our `docker-compose.yml` defines two main services:
  - **`php`**: Runs your WordPress application, PHP, and Composer.
  - **`mariadb`**: Hosts your WordPress database.
- **Seamless Connection:** Docker Compose sets up an internal network, allowing the `php` container to connect to the database simply by using `mariadb` as the **hostname** (e.g. , `DB_HOST=mariadb`).

### The `public/` Folder: Your Web Root
The `public/` folder serves as the web root for your WordPress site. It's **automatically managed** by WP Starter as part of a Composer-based scaffold. This means all files within this directory are generated or updated during the build process, and the entire folder is **not tracked by Git**.

***⚠️ Important: Do Not Edit Manually***

**Never manually edit, delete, or add files directly to the `public/` folder.**

WP Starter structures your project by:

* Placing all WordPress core files into the `public/wp` folder.
* Generating essential files like `index.php` and `wp-config.php`.
* Creating a symbolic link (symlink) between your project's `content/` folder and `public/wp-content`.

This symlink is why your themes, plugins, and other assets are accessible to the web server. To make any changes to your site's code, you **must work exclusively within the `content/` folder.** Your updates will then be reflected in `public/` via the symlink.

---

### Environment Variables

This project leverages a root `.env` file to manage sensitive information and environment-specific settings, keeping them separate from your codebase.

**Configuration Lifecycle**

WP Starter automatically reads values from your `.env` file during the setup and build process.

1.  **Initial Setup (`composer install`):**
When you run `docker compose exec php composer install` for the **very first time** and then access your WordPress site in a web browser (e.g., `http://localhost:8080`),  `wp-config.php` registers a function to be run on “shutdown” that dumps the environment variables into a PHP file so that on subsequent requests the environment “bootstrap” will be much faster. This cache file is then saved in the same folder that contains the `.env` file and is named [`.env.cached.php`](https://wecodemore.github.io/wpstarter/02-Environment-Variables.html#cached-environment)

2.  **Subsequent Operations & Updates:**
   `wp-config.php` will directly load the existing `.env.cached.php` file, providing highly optimized configuration access.
    
**Updating Environment Variables**

If you modify your project's `.env` file, WP Starter is designed to automatically detect these changes and update the cached environment (`.env.cached.php`). Simply follow these steps:

1.  **Modify your `.env` file** with the desired changes.
2.  **Access your site in the browser** (e.g., `http://localhost:8080`). WP Starter will detect the `.env` file has changed, automatically invalidate the old cache, and generate a new `.env.cached.php` with your updated settings upon page reload.

*Optional: If the cache doesn't seem to update as expected, you can manually delete `.env.cached.php` (`rm .env.cached.php`) and then reload the page to force a regeneration. or run `docker compose exec php composer wpstarter flush-env-cache
`* 



