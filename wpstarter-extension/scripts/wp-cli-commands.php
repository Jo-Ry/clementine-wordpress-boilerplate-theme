<?php

namespace WpStarterExtension\Scripts;

/** @var Util\Locator $locator */
global $locator;

$env = $locator->env();

// If env configuration is invalid or WP is already
// installed, there's nothing to do.
if (
    !$env->read(Util\DbChecker::WPDB_ENV_VALID)
    || $env->read(Util\DbChecker::WP_INSTALLED)
) {
    return [];
}

$commands = [];

// If DB does not exist, let's tell WP CLI to create it.
if (!$env->read(Util\DbChecker::WPDB_EXISTS)) {
    $commands[] = 'wp db create';
}

// Home URL is required.
$home = $env->read('WP_HOME');
if (!filter_var($home, FILTER_VALIDATE_URL)) {
    $locator->io()->writeError('Can not install WP, WP_HOME not provided.');

    return [];
}
$user = $env->read('PROJECT_USERNAME') ?: 'admin';
$host = parse_url($home, PHP_URL_HOST);
$email = $env->read('PROJECT_ADMIN_EMAIL') ?: "{$user}@{$host}";

// Build and add install command.
$install = "wp core install";
$install .= " --title='WP Starter Example' --url={$home}";
$install .= " --admin_user='{$user}' --admin_email='{$email}'";
$commands[] = $install;

// Add commands to set up website language if needed.
$language = $env->read('WP_LANG');
if (is_string($language) && (trim($language) !== '')) {
    $language = trim($language);
    $commands[] = "wp language core install {$language}";
    $commands[] = "wp site switch-language {$language}";
}

return $commands;

echo "WP CLI commands to install WordPress:\n";
