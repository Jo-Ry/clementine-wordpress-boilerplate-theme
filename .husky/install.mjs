import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { exec } from "node:child_process";

// Get absolute path to the current directory.
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of which this file is in.
const __dirname = path.dirname(__filename);
// Define the path in order to check if Husky hooks folder '_' exists yet.
const filePath = path.join(__dirname, "_");
// get repo root.
const ROOT = path.resolve(__dirname, '../');

// load .env from repo root.
dotenv.config({ path: path.join(ROOT, ".env"), quiet: true });

/* 
    Exit the script if the "_" directory exists inside the husky folder 
    or the environment is not "development".
*/
if (
	fs.existsSync(filePath) == true ||
	process.env.WP_ENVIRONMENT_TYPE !== "development"
) {
	process.exit(0);
}

/* 
    If we get here, run installer (run from repo root and use husky install).
    This creates the ".husky/_" folder. 
*/
console.log("Installing Husky...");

exec(
	`npx husky`,
	{ cwd: ROOT },
	(error, stdout, stderr) => {
		if (error) {
			console.error(`Error installing Husky: ${error.message}`);
            return
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`);
            return
		}
		console.log(`Husky installed successfully${stdout ? ': ' + stdout : "!"}`);
	},
);
