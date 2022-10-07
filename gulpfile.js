const { registry, task } = require('gulp');
const CommonRegistry = require('iconic-plugin');

const deps = {
	// 'src' : 'dest'
	'vendor/iconicwp/iconic-core/class-core-licence.php': 'inc',
	'vendor/iconicwp/iconic-core/class-core-settings.php': 'inc',
	'vendor/iconicwp/iconic-core/class-core-helpers.php': 'inc',
	'vendor/iconicwp/iconic-core/class-core-cross-sells.php': 'inc',
	'vendor/iconicwp/iconic-core/class-core-autoloader.php': 'inc',
	'vendor/iconicwp/iconic-core/plugin-icon.png': 'assets/img',
	'vendor/iconicwp/workflows/release/release.yml': '.github/workflows',
	'vendor/iconicwp/workflows/phpcs/auto_assign.yml': '.github/workflows',
	'vendor/iconicwp/workflows/phpcs/phpcs.yml': '.github/workflows',
	'vendor/iconicwp/workflows/phpcs/phpcs.xml': '.',
	'vendor/iconicwp/workflows/changelog/changelog.yml': '.github/workflows',
	'vendor/iconicwp/workflows/templates/ISSUE_TEMPLATE/bug.md': '.github/ISSUE_TEMPLATE',
	'vendor/iconicwp/workflows/templates/ISSUE_TEMPLATE/feature.md': '.github/ISSUE_TEMPLATE',
	'vendor/iconicwp/workflows/templates/PULL_REQUEST_TEMPLATE.md': '.github'
}

registry(new CommonRegistry({
	plugin_id: 1038.1,
	plugin_name: 'WooCommerce Delivery Slots by Iconic: Google Calendar Addon',
	plugin_filename: 'iconic-wds-google-calendar',
	premium_suffix: false,
	textdomain: 'iconic-wds-gcal',
	is_envato_constant: false,
	is_upload: true,
	class_prefix: 'Iconic_WDS_Gcal_',
	nolic: false,
}));