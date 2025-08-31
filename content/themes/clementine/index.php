<?php
/**
 * The main template file
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package clementine
 * @since   1.0
 */

get_header();
?>

<h1>Welcome to the clementine theme!</h1>

<img src="<?php echo esc_attr( clementine_resolve_url( 'src/images/test.jpg' ) ); ?>" alt=""/>

<p><?php the_content(); ?></p>

<?php get_footer(); ?>
