//>>built
define("xstyle/core/load-css",[],function(){function h(c){if(d.createStyleSheet){var b=d.createStyleSheet();b.cssText=c;return b.owningElement}b=d.createElement("style");b.setAttribute("type","text/css");b.appendChild(d.createTextNode(c));g.insertBefore(b,g.firstChild);return b}function e(c,b,e){var k=l[c];if(k)return a=h(k),b(a);var a=d.createElement("link");a.type="text/css";a.rel="stylesheet";a.href=c;var f=!e||!1!==e.wait;c=(c=navigator.userAgent.match(/AppleWebKit\/(\d+\.?\d*)/))&&+c[1];if(null===
a.onload&&!(536>c))a.onload=function(){a.onload=null;a.onerror=null;f&&b(a)},a.onerror=function(){f&&b(a)};else if(f)var m=setInterval(function(){a.style&&(clearInterval(m),b(a))},15);(g||d.getElementsByTagName("head")[0]).appendChild(a);f||b(a)}var l="undefined"==typeof _css_cache?{}:_css_cache,d=document,g=d.head;e.insertCss=h;return e});
//# sourceMappingURL=load-css.js.map