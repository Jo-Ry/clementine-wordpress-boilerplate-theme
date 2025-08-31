<?php 
// file: wpstarter-extension/wpstarter-autoload.php

/**
 * Registers a custom **PSR-4 autoloader** for classes within the `WpStarterExtension\` namespace.
 * This means that each class's fully qualified name directly **maps to its file path**
 * (e.g., `WpStarterExtension\Scripts\MyClass` maps to `wpstarter-extension/Scripts/MyClass.php`).
 * This ensures that custom WP Starter components are autoloaded only when WP Starter is running,
 * preventing them from being added to Composer's main autoloader for general WordPress requests.
 */
spl_autoload_register( function ( $class ) {

    // 1. Define the namespace prefix for the custom WP Starter extensions.
    //    This is the root of your custom classes (e.g., 'WpStarterExtension\').
    $prefix = 'WpStarterExtension\\';

    // 2. Determine the base directory for these classes.
    //    __DIR__ refers to the current directory of this wpstarter-autoload.php file,
    //    wich is the root of your 'wpstarter-extension' folder.
    $base_dir = __DIR__ . DIRECTORY_SEPARATOR;

    // 3. Check if the requested class falls under this autoloader's responsibiity.
    //    if the class name does not start with the predifined namespace prefix, exit early. 
    $string_length_of_prefix = strlen( $prefix );
    if ( strncmp( $prefix, $class, $string_length_of_prefix ) !== 0 ) {
        // If the $prefix does not match the namespace, exit early.
        return;
    }

    // 4. Extract the part of the class after the namespace prefix.
    //    E.g., if $class is 'WpStarterExtension\Steps\PublicReadmeStep', $relativeClass becomes 'Steps\PublicReadmeStep'.
    $relative_class = substr( $class, $string_length_of_prefix );

    // 5. Construct the full, expected file path.
    //    This involves combining the base directory, converting namespace separators
    //    to directory separators, and appending the '.php' extension.
    //    Example: wpstarter-extension/Steps/PublicReadmeStep.php.
    $file = $base_dir . str_replace( '\\', DIRECTORY_SEPARATOR, $relative_class ) . '.php';

    // If the constructed file path exists, include it.
     if (file_exists($file)) {
        require_once $file;

        if (!class_exists($class, false) && !interface_exists($class, false) && !trait_exists($class, false)) {
            error_log("\nWPStarter Autoload: CRITICAL ERROR: Class '{$class}' was requested, and its file '{$file}' was found and included, but the 'class/interface/trait' '{$class}' was NOT defined within it. Please verify: Typo in the class/interface/trait name or namespace inside '{$file}'.\n");
        }
    } else {
        error_log("\nWPStarter Autoload: ERROR: File for class '{$class}' NOT found at: '{$file}'. Please verify your file name, capitalization, directory structure or if wpstarter.json config entry has wrong path.\n");
    }
});