module.exports = (grunt) ->
  darbak = require '../lib/darbak'
  path  = require 'path'
  
  grunt.registerMultiTask 'darbak', 'Compile literate-iced-coffee-script with its docco-style docs', ->
    tally = 
      dirs:  0
      files: 0
    
    @files.forEach (filePair) ->
      isExpandedPair = filePair.orig.expand || false

      filePair.src.forEach (src) ->
        dest = if grunt.util._.endsWith(filePair.dest, '/') #destination is a directory
          unixifyPath = (filepath) -> if process.platform is 'win32' then filepath.replace(/\\/g, '/') else filepath        
          if isExpandedPair then filePair.dest else unixifyPath(path.join(filePair.dest, src))
        else 
          filePair.dest

        if grunt.file.isDir src 
          grunt.verbose.writeln 'Creating ' + dest.cyan
          grunt.file.mkdir dest
          tally.dirs++;
        else
          grunt.verbose.writeln 'Copying ' + src.cyan + ' -> ' + dest.cyan
          grunt.file.copy src, dest, {process: ((contents, srcpath) -> darbak(contents, path.basename(srcpath, '.coffee.md')))}
          tally.files++
        
    if tally.dirs
      grunt.log.write('Created ' + tally.dirs.toString().cyan + ' directories')

    if tally.files
      grunt.log.write((if tally.dirs then ', copied ' else 'Copied ') + tally.files.toString().cyan + ' files')

    grunt.log.writeln()
