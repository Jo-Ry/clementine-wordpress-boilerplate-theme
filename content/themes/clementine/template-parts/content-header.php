<?php
/**
 * Header template for the Clementine theme.
 *
 * @package clementine
 * @since 1.0
 */

?>

<!DOCTYPE html>
<html <?php language_attributes(); // Displays the language attributes for the ‘html’ tag. ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); // Ensure correct page coding. ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<header class="site-header">
		<nav>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary', // The location of the menu in the theme, found in functions.php.
					'container'      => '', // No container for the menu.
					'menu_class'     => 'nav-menu', // Class for the menu.
				)
			);
			?>
		</nav>
	</header>

	<main class="site-main">
		<div class="site-content">