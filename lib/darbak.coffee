module.exports = (contents, name) ->
  marked      = require 'marked'
  {highlight} = require 'highlight.js'
  coffee      = require 'iced-coffee-script'

  lines    = contents.split '\n'
  sections = []
  wroteCode = false
  fullCode = name + " = ->\n"
  docsText = codeText = ''

  closeCurrentSection = ->
    sections.push  
      docsText: docsText
      codeText: codeText
      docsHtml: marked(docsText),
      codeHtml: "<div class='highlight'><pre>#{highlight('coffeescript', codeText).value}</pre></div>"
    docsText = codeText = ''
    wroteCode = false

  for line, i in lines
    line = '' if /^\s*$/.test line
    if (wroteCode and not line) or match = /^([ ]{4}|\t)/.exec line
      if line 
        line = line[match[0].length..] + "\n"
        fullCode += "\t" + line
        codeText += line
        wroteCode = true
      else 
        codeText += "\n"
    else
      closeCurrentSection() if wroteCode
      docsText += line + '\n' 
      closeCurrentSection() if /^(---+|===+)$/.test line

  closeCurrentSection()

  fullCode += "\n\treturn"
  res = coffee.compile fullCode, {bare: true}
  res += name + ".src = " + JSON.stringify(contents) + "\n"
  res += name + ".sections = " + JSON.stringify(sections) + "\n"
  res += name + ".name = " + name + "\n"
  res += "darbak = " + name + "\n"
  return res