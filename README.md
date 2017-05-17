# Map Marker Awesome

For years I have been surprised at the dearth of quality map marker icons with a choice of colours, sizes and symbols. No longer! This project provides ...

* Nice, simple, scalable SVG map markers
* with any [Font Awesome](http://fontawesome.io/) icon
* that you can use with Google Maps (and beyond)

## Use it two ways

1. [Generate and download individual SVGs](http://) with your choice of size, colour and [Font Awesome](http://fontawesome.io/) icon.

2. Embed [the JS library](http://) (~130KB gzipped), to dynamically generate markers with any size, colour and icon at run-time (as [data: URIs](http://)).

## Library examples

Use it like this:

    <script src="mma.js"></script>
    <script>
      var plainIconSrc = mapMarkerAwesome();

      var musicIconSrc = mapMarkerAwesome('music');
      var alsoMusicIconSrc = mapMarkerAwesome('fa-music');
      var alsoAlsoMusicIconSrc = mapMarkerAwesome('\uf001');
      
      var largeHeartIconSrc = mapMarkerAwesome('heart', { height: 52 });
      var redWithYellowStarIconSrc = mapMarkerAwesome('star', { fill: '#ff0000', icon: '#ffff00' });
      var shiftedHomeIconSrc = mapMarkerAwesome('home', { iconTransform: 'translate(20 0)', icon: '#4182c3' });

      function randByte() { return Math.floor(Math.random() * 256); }
      var randomColorPlainIcon = mapMarkerAwesome(null, { fill: {r: randByte(), g: randByte(), b: randByte() });
    </script>

## Library docs

    var iconSVGAsDataURI = mapMarkerAwesome(code, opts);

`code` is a string identifying the [Font Awesome](http://fontawesome.io/) icon that's required. You can pass either the Font Awesome icon id (with or without the `fa-` prefix) or the equivalent Unicode character — so `star`, `fa-star` or `\uf005` are exactly equivalent. Pass `null` (or nothing) for a plain marker with no icon.

`opts` is an object with the following keys:

* `fill` specifies the color of the body of the marker — default `#4182c3` (a nice mid blue)
* `stroke` specifies the color of the marker outline — default `#fff` (white)
* `icon` specifies the color for the icon on the marker — default `#fff` (white)
* `height` is an integer specifying the size of the markere via the height, in pixels — default `42`
* `transform` is a string specifying any [SVG transforms](https://developer.mozilla.org/en/docs/Web/SVG/Attribute/transform) to be applied to the icon — default `''` (none)

Colour values (`fill`, `stroke` and `icon`) can be specified as any valid SVG colour string (so `white`, `#fff`, `#ffffff`, `rgb(255,255,255)` and `rgba(255,255,255,1)` are all equivalent). 

They can alternatively be specified as an object with `r`, `g`, `b` keys (with integer values 0 – 255) and an optional `a` key (with numeric value 0 – 1).
