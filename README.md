# Map Marker Awesome

For years I have been surprised at the dearth of quality map marker icons with a choice of colours, sizes and symbols. No longer! This project provides ...

* Nice, simple, scalable SVG map markers
* with any [Font Awesome](http://fontawesome.io/) icon
* that you can use with Google Maps (and beyond)

## Use it two ways

1. [Generate and download individual SVGs](http://) with your choice of size, colour and [Font Awesome](http://fontawesome.io/) icon.

2. Embed [the JS library](http://) (~130KB gzipped), to dynamically generate markers with any size, colour and icon at run-time (as [data: URIs](http://)).

## Library usage

Use it like this:

    <script src="mma.js"></script>
    <script>
      var plainIconSrc = mapMarkerAwesome(null);

      var musicIconSrc = mapMarkerAwesome('music');
      var alsoMusicIconSrc = mapMarkerAwesome('fa-music');
      var alsoAlsoMusicIconSrc = mapMarkerAwesome('\uf001');
      
      var largeHeartIconSrc = mapMarkerAwesome('heart', { height: 52 });
      var redWithYellowStarIconSrc = mapMarkerAwesome('star', { fill: '#ff0000', icon: '#ffff00' });
      var shiftedHomeIconSrc = mapMarkerAwesome('home', { iconTransform: 'translate(20 0)', icon: '#4182c3' });
    </script>

![plain icon](data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2242%22%20viewBox%3D%220%200%2030%2042%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22scale%281.3125%29%22%3E%3Cpath%20d%3D%22M22%2011c0%201.42-.226%202.585-.677%203.496l-7.465%2015.117c-.218.43-.543.77-.974%201.016-.43.246-.892.37-1.384.37-.492%200-.954-.124-1.384-.37-.43-.248-.75-.587-.954-1.017L1.677%2014.496C1.227%2013.586%201%2012.42%201%2011c0-2.76%201.025-5.117%203.076-7.07C6.126%201.977%208.602%201%2011.5%201c2.898%200%205.373.977%207.424%202.93C20.974%205.883%2022%208.24%2022%2011z%22%20stroke%3D%22%23fff%22%20stroke-width%3D%22.6%22%20fill%3D%22%234182c3%22%20fill-rule%3D%22nonzero%22/%3E%3C/g%3E%3C/svg%3E)
This will create a blue marker with a white star and white outline that's 42px high. 

You can pass either the Font Awesome icon id (with or without the `fa-` prefix) or the equivalent Unicode character — so `star`, `fa-star` or `\uf005` are equivalent. Pass `null` for a plain marker.

