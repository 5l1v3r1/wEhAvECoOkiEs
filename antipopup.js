// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.8.41&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var blacklist = ['#ccc-notify-accept','.cc-compliance > a','.cc_btn_accept_all','#top-cookieinfo-desktop-button','#cn-accept-cookie','.cookie_button','#continue_button',
                     '#privacybanner','.confirm-cookies','.cookie-layer__close','.cc-btn','#cookie-disclaimer-read','.cookie-banner__close','.js-acceptCookiePolicy'];
  	var accepts = ['accept','akzeptieren','einverstanden','okay', 'ja, ich stimme zu', 'schließen', 'close','ok','verstanden','understood','got it','ich habe verstanden!'
                   ,'i understand','×','i agree.','i agree']
    function runBlacklist() {
      blacklist.forEach(function(item){
        if ((document.querySelector(item)) != null) {
            document.querySelector(item).click()
        }
      })
    }

  	function runTextBlacklist() {
      var buttons = document.querySelectorAll('button')

      for (var x = 0;x < buttons.length;x++) {
        	var item = buttons[x]
          if(accepts.includes(item.innerHTML.toLowerCase().trim())) {
              item.click();
           	 	return;
          }
      }

      var arefs = document.querySelectorAll('a');

      for (var x = 0;x < arefs.length;x++) {
        	var item = arefs[x]
          if(accepts.includes(item.innerHTML.toLowerCase().trim())) {
              item.click();
           	 	return;
          }
      }
    }

  	function runTimeout() {
  		var interval = setInterval(runBlacklist, 1000);
  		var interval2 = setInterval(runTextBlacklist, 1000);

      setTimeout(function() {
				clearInterval(interval)
				clearInterval(interval2)
      }, 10 * 1000);
    }

		runTimeout();
})()


document.querySelectorAll('button')
