## Demo

This demo section is actually runnable code written in [literate](http://coffeescript.org/#literate)-[iced](http://maxtaco.github.io/coffee-script/)-[coffee-script](http://coffeescript.org).

You can view its source at [test.coffee.md](https://raw.github.com/amitport/darbak/master/test/fixtures/test.coffee.md).

This section was rendered using:

`for (var i = 0; i < test.sections.length; i++){`

`  document.write(test.sections[i].docsHtml);`

`  document.write(test.sections[i].codeHtml);`

`}`

but notice that any client side rendering method, such as angular-js templates, could have easily been used. 

---

You can open the console and run this code using `var t = new test()`

	alert('welcome to darbak!')
and don't forget that it's **iced**-coffee-script:

	@saveForLater = (@later) -> 
	await @saveForLater defer()
so the code can wait for you to call `t.later()` before running the next block

	alert('now is later!')