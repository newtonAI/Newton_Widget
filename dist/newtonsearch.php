<?php
/*
Plugin Name: Newton Job Search
Plugin URI: http://newtonai.github.io/Newton_Widget/
Description: Newton Job Search v1.0.0 for Wordpress
Version: 1.0.1
Author: Newton.ai
Author URI: https://newton.ai
License: MIT
*/
wp_enqueue_style(
	'newtonjobstyles',
	WP_PLUGIN_URL.'/newtonjobs/search-newton-1.0.1.css',
	false,
	all);

// Add the scripts to the footer
function newtonjobs(){
	// Identify our javascript files
	wp_register_script(
		'jquery.newtonjobs',
		WP_PLUGIN_URL.'/newtonjobs/search-newton-1.0.1.js',
		array( 'jquery' ),
		"1.0.1",
		1 );
	wp_register_script(
		'jquery.newtoncustom',
		WP_PLUGIN_URL.'/newtonjobs/search.custom.js',
		array( 'jquery', 'jquery.newtonjobs' ),
		"1.0",
		1 );
	// Then enqueue them
	wp_enqueue_script( 'jquery.newtoncustom' );
}
// Action our scripts
add_action( 'wp_enqueue_scripts', 'newtonjobs' );
?>