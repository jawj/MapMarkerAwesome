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

var homeIconSrc = mapMarkerAwesome('home');
var bigHomeIconSrc = mapMarkerAwesome('home', { iconTransform: 'scale(1.25)' });

var arrowIconSrc = mapMarkerAwesome('arrow-up', { fill: '#fff', icon: '#444', stroke: '#444' });
var rotatedArrowIconSrc = mapMarkerAwesome('arrow-up', { iconTransform: 'rotate(22.5)', fill: '#fff', icon: '#444', stroke: '#444' });


function randByte() { return Math.floor(Math.random() * 256); }
var randomColourPlainIconSrc = mapMarkerAwesome(null, { fill: { r: randByte(), g: randByte(), b: randByte() } });

// end from README

['plain', 'music', 'alsoMusic', 'alsoAlsoMusic', 'largeHeart', 'redWithYellowStar', 'home', 'bigHome', 'arrow', 'rotatedArrow', 'randomColourPlain'].forEach(function (stem) {
  fs.writeFileSync('examples/' + stem + '.svg', eval(stem + 'IconSrc'));
});
