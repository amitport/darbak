# darbak

> Compiles literate-iced-coffee-script and appends it with its source and formatted documentation.

Useful for creating [Docco](http://jashkenas.github.io/docco/)-like code pages that can run while being displayed, compile with client side templates, and be edited on the client side.

## Installation

Using node:
```shell
npm install darbak --save-dev
```

The code is written in coffee-script so you may need to install node's coffee-script globally:
```shell
npm install -g coffee-script
```

## Includes a grunt plugin
Requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

Once the plugin node package has been installed, it may be enabled inside your Gruntfile with this line of coffee-script:

```coffeescript
grunt.loadNpmTasks 'darbak'
```

## The "darbak" task

### Overview
_Run this task with the `grunt darbak` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## Misc
Re-factored from:
- [grunt-contrib-copy task](https://github.com/gruntjs/grunt-contrib-copy/blob/65600edcd99ac911d0021e30827c080097d5a895/tasks/copy.js), May 13, 2013.
- [docco](https://github.com/jashkenas/docco/blob/8fe2924dd7db9cfb5f6988627987b5738932b973/docco.litcoffee), June 25, 2013.


Licensed under the [MIT license](LICENSE-MIT).
