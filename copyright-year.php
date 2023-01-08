<?php
/**
 * Plugin Name:       Copyright Year
 * Description:       Dynamically output the calendar year with a copyright symbol and editable text
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Michelle Schulp
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockspring
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function blockspring_copyright_year_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'blockspring_copyright_year_block_init' );
