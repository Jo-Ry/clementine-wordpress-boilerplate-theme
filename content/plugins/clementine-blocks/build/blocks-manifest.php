<?php
// This file is generated. Do not modify it manually.
return array(
	'example-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'clementine-blocks/example-block',
		'version' => '0.1.0',
		'title' => 'Example block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with \'npm run create-block\'',
		'attributes' => array(
			'name' => array(
				'type' => 'string',
				'default' => 'Haley'
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'textdomain' => 'clementine',
		'editorScript' => array(
			'file:..\\runtime.js',
			'file:./index.js'
		),
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => array(
			'file:..\\runtime.js',
			'file:./view.js'
		)
	)
);
