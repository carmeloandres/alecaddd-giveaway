<?php
/**
 * Plugin Name:       Alecaddd Giveaway
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       alecaddd-giveaway
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {die;} ; // to prevent direct access

if ( ! defined('PLUGIN_DIR')) define ('PLUGIN_DIR',plugin_dir_path(__FILE__));

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_blocks_alecaddd_giveaway_blocks_init() {

	/**
	 * Register custom-cta block
	 */
	$custom_cta_assets = include_once(PLUGIN_DIR.'/custom-cta/build/index.asset.php');

	wp_register_script('custom-cta',plugins_url('./custom-cta/build/index.js',__FILE__),$custom_cta_assets['dependencies'],$custom_cta_assets['version']);
	wp_register_style('custom-cta',plugins_url('./custom-cta/build/index.css',__FILE__),array(),$custom_cta_assets['version']);

	register_block_type('alecaddd/custom-cta',array(
		'editor_script' => 'custom-cta',
	));
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_blocks_alecaddd_giveaway_blocks_init' );
