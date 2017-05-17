#!/usr/bin/env node

var fs = require('fs');
var mapMarkerAwesome = require('./mma')(false);

// from README

var plainIconSrc = mapMarkerAwesome();

var musicIconSrc = mapMarkerAwesome('music');
var alsoMusicIconSrc = mapMarkerAwesome('fa-music');
var alsoAlsoMusicIconSrc = mapMarkerAwesome('\uf001');

var largeHeartIconSrc = mapMarkerAwesome('heart', { height: 52 });
var redWithYellowStarIconSrc = mapMarkerAwesome('star', { fill: '#ff0000', icon: '#ffff00' });
var shiftedHomeIconSrc = mapMarkerAwesome('home', { iconTransform: 'translate(20 0)', icon: '#4182c3' });

function randByte() { return Math.floor(Math.random() * 256); }
var randomColourPlainIconSrc = mapMarkerAwesome(null, { fill: { r: randByte(), g: randByte(), b: randByte() } });

// end from README

['plain', 'music', 'largeHeart', 'redWithYellowStar', 'shiftedHome', 'randomColourPlain'].forEach(function (stem) {
  fs.writeFileSync('examples/' + stem + '.svg', eval(stem + 'IconSrc'));
});
