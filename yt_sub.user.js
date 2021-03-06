// ==UserScript==
// @name        YouTube Subscriptions as Default Page
// @namespace   http://dvbris.com
// @version     1.1.3
// @description Switches the YouTube homepage to your subscriptions view
// @match     *://*.youtube.com/*
// @copyright   2014, Geraint White
// ==/UserScript==

var url = 'http://www.youtube.com/feed/subscriptions';

if (/^https?:\/\/www.youtube.com\/$/.test(window.location.href)) {
  window.location.replace(url);
}

document.getElementById('logo').onclick = function(e) {
  e.preventDefault();

  if (!e.ctrlKey && e.which != 2) {
    window.location.replace(url);
  } else {
    window.open(url, '_blank');
  }
};

document.getElementById('appbar-nav').querySelector('li:first-child a').href += '?wtw';
document.getElementById('guide').querySelector('a[data-external-id=what_to_watch]').href += '?wtw';
