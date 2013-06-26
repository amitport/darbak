#Darbak

Compiles **literate-iced-coffee-script** into a **javascript** file which includes its **source** and its **docco-style** documentation.

Upon loading this page a literate-iced-coffee-script function called `darbak` was included. You are currently reading the documentation of that function - it is constructed from `darbak.sections`. You can also check its complete source code at `.src`

---

You can open the console and run this code: `var c = new darbak()`
	alert('welcome to darbak!')
It's **iced**-coffee-script

	@saveForLater = (@later) -> 
	await @saveForLater defer()

the code waits until you call `c.later()`, only then it will run the next block:

	alert('now is later!')
	
	