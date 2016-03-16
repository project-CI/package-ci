Package.describe({
  name: 'project-ci:package-ci',
  version: '0.0.5',
  summary: 'Test project for package development',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/project-ci/package-ci.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'templating', 'session']);
  api.addFiles(['logger.js', 'package-ci.js'], ['server']);
  // api.addFiles(['usage_example.html', 'usage_example.js' ], ['client']);
  api.export(['Logger', 'PetStore']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.addFiles(['logger.js', 'package-ci.js', 'package-ci-tests.js'], ['server']);
  api.export(['Logger', 'PetStore']);
});

Npm.depends({
  'bunyan': '1.7.1',
  'swagger-client': '2.1.5',
});
