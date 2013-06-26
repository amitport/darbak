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
test.src = "#Darbak\r\n\r\nCompiles **literate-iced-coffee-script** into a **javascript** file which includes its **source** and its **docco-style** documentation.\r\n\r\nUpon loading this page a literate-iced-coffee-script function called `darbak` was included. You are currently reading the documentation of that function - it is constructed from `darbak.sections`. You can also check its complete source code at `.src`\r\n\r\n---\r\n\r\nYou can open the console and run this code: `var c = new darbak()`\r\n\talert('welcome to darbak!')\r\nIt's **iced**-coffee-script\r\n\r\n\t@saveForLater = (@later) -> \r\n\tawait @saveForLater defer()\r\n\r\nthe code waits until you call `c.later()`, only then it will run the next block:\r\n\r\n\talert('now is later!')\r\n\t\r\n\t"
test.sections = [{"docsText":"#Darbak\r\n\nCompiles **literate-iced-coffee-script** into a **javascript** file which includes its **source** and its **docco-style** documentation.\r\n\nUpon loading this page a literate-iced-coffee-script function called `darbak` was included. You are currently reading the documentation of that function - it is constructed from `darbak.sections`. You can also check its complete source code at `.src`\r\n\n---\r\n\nYou can open the console and run this code: `var c = new darbak()`\r\n","codeText":"alert('welcome to darbak!')\r\n","docsHtml":"<h1>Darbak</h1>\n<p>Compiles <strong>literate-iced-coffee-script</strong> into a <strong>javascript</strong> file which includes its <strong>source</strong> and its <strong>docco-style</strong> documentation.</p>\n<p>Upon loading this page a literate-iced-coffee-script function called <code>darbak</code> was included. You are currently reading the documentation of that function - it is constructed from <code>darbak.sections</code>. You can also check its complete source code at <code>.src</code></p>\n<hr>\n<p>You can open the console and run this code: <code>var c = new darbak()</code></p>\n","codeHtml":"<div class='highlight'><pre>alert(<span class=\"string\">'welcome to darbak!'</span>)\r\n</pre></div>"},{"docsText":"It's **iced**-coffee-script\r\n\n","codeText":"@saveForLater = (@later) -> \r\nawait @saveForLater defer()\r\n\n","docsHtml":"<p>It&#39;s <strong>iced</strong>-coffee-script</p>\n","codeHtml":"<div class='highlight'><pre><span class=\"property\">@saveForLater</span> = (<span class=\"property\">@later</span>) -&gt; \r\nawait <span class=\"property\">@saveForLater</span> defer()\r\n\n</pre></div>"},{"docsText":"the code waits until you call `c.later()`, only then it will run the next block:\r\n\n","codeText":"alert('now is later!')\r\n\n\n","docsHtml":"<p>the code waits until you call <code>c.later()</code>, only then it will run the next block:</p>\n","codeHtml":"<div class='highlight'><pre>alert(<span class=\"string\">'now is later!'</span>)\r\n\n\n</pre></div>"}]
test.name = test
darbak = test
