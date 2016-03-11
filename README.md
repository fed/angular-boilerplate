# Angular, Grunt and Sass Boilerplate

## Building

Run `npm install` the first time you clone this project in order to fetch all of the dependencies.

For development purposes, Grunt's default task will automatically watch all of your source files for changes, build the appropriate distribution files and refresh the page for you. To run start the app and the watch task, run `npm start`. The app will go live on http://0.0.0.0:6789/.

To just build the app, run `npm run build` instead.

## Release Versions

This repo uses [grunt-bump](https://github.com/vojtajina/grunt-bump) to version and tag releases. To version a release, move to master and run the appropriate command:

```
grunt release:major       # bump major version, eg. 1.0.2 -> 2.0.0
grunt release:minor       # bump minor version, eg. 0.1.3 -> 0.2.0
grunt release:patch       # bump patch version, eg. 0.0.1 -> 0.0.2
grunt release:prerelease  # bump pre-release version, eg. 1.0.0 -> 1.0.0-1
```

Make sure to push tags:

```
git push --tags origin master
```

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.

## Release History

See the [CHANGELOG](CHANGELOG.md).
