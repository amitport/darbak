## Demo

This demo section is actually runnable code written in [literate](http://coffeescript.org/#literate)-[iced](http://maxtaco.github.io/coffee-script/)-[coffee-script](http://coffeescript.org)
This section was rendered using:

`for (var i = 0; i < test.sections.length; i++){`

`  document.write(test.sections[i].docsHtml);`

`  document.write(test.sections[i].codeHtml);`

`}`

Notice that any client side rendering method, such as angular-js templates, could have easily been used. 

You can view the complete source of this section [here](https://raw.github.com/amitport/darbak/master/test/fixtures/test.coffee.md).

You can open the console and run this code using: `var t = new test()`

	alert('welcome to darbak!')
And don't forget it's **iced**-coffee-script:

	@saveForLater = (@later) -> 
	await @saveForLater defer()
The code waits until you call `t.later()`, only then it will run the next block:

	alert('now is later!')