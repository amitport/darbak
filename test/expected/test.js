var test, __iced_k, __iced_k_noop;

__iced_k = __iced_k_noop = function() {};

test = function() {
  var ___iced_passed_deferral, __iced_deferrals, __iced_k,
    _this = this;
  __iced_k = __iced_k_noop;
  ___iced_passed_deferral = iced.findDeferral(arguments);
  alert('welcome to darbak!');
  this.saveForLater = function(later) {
    this.later = later;
  };
  (function(__iced_k) {
    __iced_deferrals = new iced.Deferrals(__iced_k, {
      parent: ___iced_passed_deferral,
      funcname: "test"
    });
    _this.saveForLater(__iced_deferrals.defer({
      lineno: 3
    }));
    __iced_deferrals._fulfill();
  })(function() {
    alert('now is later!');
  });
};
test.src = "## Demo\r\n\r\nThis demo section is actually runnable code written in [literate](http://coffeescript.org/#literate)-[iced](http://maxtaco.github.io/coffee-script/)-[coffee-script](http://coffeescript.org)\r\nThis section was rendered using:\r\n\r\n`for (var i = 0; i < test.sections.length; i++){`\r\n\r\n`  document.write(test.sections[i].docsHtml);`\r\n\r\n`  document.write(test.sections[i].codeHtml);`\r\n\r\n`}`\r\n\r\nNotice that any client side rendering method, such as angular-js templates, could have easily been used. \r\n\r\nYou can view the complete source of this section [here](https://raw.github.com/amitport/darbak/master/test/fixtures/test.coffee.md).\r\n\r\nYou can open the console and run this code using: `var t = new test()`\r\n\r\n\talert('welcome to darbak!')\r\nAnd don't forget it's **iced**-coffee-script:\r\n\r\n\t@saveForLater = (@later) -> \r\n\tawait @saveForLater defer()\r\nThe code waits until you call `t.later()`, only then it will run the next block:\r\n\r\n\talert('now is later!')";
test.sections = [{"docsText":"## Demo\r\n\nThis demo section is actually runnable code written in [literate](http://coffeescript.org/#literate)-[iced](http://maxtaco.github.io/coffee-script/)-[coffee-script](http://coffeescript.org)\r\nThis section was rendered using:\r\n\n`for (var i = 0; i < test.sections.length; i++){`\r\n\n`  document.write(test.sections[i].docsHtml);`\r\n\n`  document.write(test.sections[i].codeHtml);`\r\n\n`}`\r\n\nNotice that any client side rendering method, such as angular-js templates, could have easily been used. \r\n\nYou can view the complete source of this section [here](https://raw.github.com/amitport/darbak/master/test/fixtures/test.coffee.md).\r\n\nYou can open the console and run this code using: `var t = new test()`\r\n\n","codeText":"alert('welcome to darbak!')\r\n","docsHtml":"<h2>Demo</h2>\n<p>This demo section is actually runnable code written in <a href=\"http://coffeescript.org/#literate\">literate</a>-<a href=\"http://maxtaco.github.io/coffee-script/\">iced</a>-<a href=\"http://coffeescript.org\">coffee-script</a>\nThis section was rendered using:</p>\n<p><code>for (var i = 0; i &lt; test.sections.length; i++){</code></p>\n<p><code>document.write(test.sections[i].docsHtml);</code></p>\n<p><code>document.write(test.sections[i].codeHtml);</code></p>\n<p><code>}</code></p>\n<p>Notice that any client side rendering method, such as angular-js templates, could have easily been used. </p>\n<p>You can view the complete source of this section <a href=\"https://raw.github.com/amitport/darbak/master/test/fixtures/test.coffee.md\">here</a>.</p>\n<p>You can open the console and run this code using: <code>var t = new test()</code></p>\n","codeHtml":"<div class='highlight'><pre>alert(<span class=\"string\">'welcome to darbak!'</span>)\r\n</pre></div>"},{"docsText":"And don't forget it's **iced**-coffee-script:\r\n\n","codeText":"@saveForLater = (@later) -> \r\nawait @saveForLater defer()\r\n","docsHtml":"<p>And don&#39;t forget it&#39;s <strong>iced</strong>-coffee-script:</p>\n","codeHtml":"<div class='highlight'><pre><span class=\"property\">@saveForLater</span> = (<span class=\"property\">@later</span>) -&gt; \r\nawait <span class=\"property\">@saveForLater</span> defer()\r\n</pre></div>"},{"docsText":"The code waits until you call `t.later()`, only then it will run the next block:\r\n\n","codeText":"alert('now is later!')\n","docsHtml":"<p>The code waits until you call <code>t.later()</code>, only then it will run the next block:</p>\n","codeHtml":"<div class='highlight'><pre>alert(<span class=\"string\">'now is later!'</span>)\n</pre></div>"}];
test.name = test;
