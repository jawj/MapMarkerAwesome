var mapMarkerAwesome = (function () {
    var fontAwesome = {
        "codes": {
            "glass": "\uf000",
            "music": "\uf001",
            "search": "\uf002",
            "envelope-o": "\uf003",
            "heart": "\uf004",
            "star": "\uf005",
            "star-o": "\uf006",
            "user": "\uf007",
            "film": "\uf008",
            "th-large": "\uf009",
            "th": "\uf00a",
            "th-list": "\uf00b",
            "check": "\uf00c",
            "times": "\uf00d",
            "search-plus": "\uf00e",
            "search-minus": "\uf010",
            "power-off": "\uf011",
            "signal": "\uf012",
            "cog": "\uf013",
            "trash-o": "\uf014",
            "home": "\uf015",
            "file-o": "\uf016",
            "clock-o": "\uf017",
            "road": "\uf018",
            "download": "\uf019",
            "arrow-circle-o-down": "\uf01a",
            "arrow-circle-o-up": "\uf01b",
            "inbox": "\uf01c",
            "play-circle-o": "\uf01d",
            "repeat": "\uf01e",
            "refresh": "\uf021",
            "list-alt": "\uf022",
            "lock": "\uf023",
            "flag": "\uf024",
            "headphones": "\uf025",
            "volume-off": "\uf026",
            "volume-down": "\uf027",
            "volume-up": "\uf028",
            "qrcode": "\uf029",
            "barcode": "\uf02a",
            "tag": "\uf02b",
            "tags": "\uf02c",
            "book": "\uf02d",
            "bookmark": "\uf02e",
            "print": "\uf02f",
            "camera": "\uf030",
            "font": "\uf031",
            "bold": "\uf032",
            "italic": "\uf033",
            "text-height": "\uf034",
            "text-width": "\uf035",
            "align-left": "\uf036",
            "align-center": "\uf037",
            "align-right": "\uf038",
            "align-justify": "\uf039",
            "list": "\uf03a",
            "outdent": "\uf03b",
            "indent": "\uf03c",
            "video-camera": "\uf03d",
            "picture-o": "\uf03e",
            "pencil": "\uf040",
            "map-marker": "\uf041",
            "adjust": "\uf042",
            "tint": "\uf043",
            "pencil-square-o": "\uf044",
            "share-square-o": "\uf045",
            "check-square-o": "\uf046",
            "arrows": "\uf047",
            "step-backward": "\uf048",
            "fast-backward": "\uf049",
            "backward": "\uf04a",
            "play": "\uf04b",
            "pause": "\uf04c",
            "stop": "\uf04d",
            "forward": "\uf04e",
            "fast-forward": "\uf050",
            "step-forward": "\uf051",
            "eject": "\uf052",
            "chevron-left": "\uf053",
            "chevron-right": "\uf054",
            "plus-circle": "\uf055",
            "minus-circle": "\uf056",
            "times-circle": "\uf057",
            "check-circle": "\uf058",
            "question-circle": "\uf059",
            "info-circle": "\uf05a",
            "crosshairs": "\uf05b",
            "times-circle-o": "\uf05c",
            "check-circle-o": "\uf05d",
            "ban": "\uf05e",
            "arrow-left": "\uf060",
            "arrow-right": "\uf061",
            "arrow-up": "\uf062",
            "arrow-down": "\uf063",
            "share": "\uf064",
            "expand": "\uf065",
            "compress": "\uf066",
            "plus": "\uf067",
            "minus": "\uf068",
            "asterisk": "\uf069",
            "exclamation-circle": "\uf06a",
            "gift": "\uf06b",
            "leaf": "\uf06c",
            "fire": "\uf06d",
            "eye": "\uf06e",
            "eye-slash": "\uf070",
            "exclamation-triangle": "\uf071",
            "plane": "\uf072",
            "calendar": "\uf073",
            "random": "\uf074",
            "comment": "\uf075",
            "magnet": "\uf076",
            "chevron-up": "\uf077",
            "chevron-down": "\uf078",
            "retweet": "\uf079",
            "shopping-cart": "\uf07a",
            "folder": "\uf07b",
            "folder-open": "\uf07c",
            "arrows-v": "\uf07d",
            "arrows-h": "\uf07e",
            "bar-chart": "\uf080",
            "twitter-square": "\uf081",
            "facebook-square": "\uf082",
            "camera-retro": "\uf083",
            "key": "\uf084",
            "cogs": "\uf085",
            "comments": "\uf086",
            "thumbs-o-up": "\uf087",
            "thumbs-o-down": "\uf088",
            "star-half": "\uf089",
            "heart-o": "\uf08a",
            "sign-out": "\uf08b",
            "linkedin-square": "\uf08c",
            "thumb-tack": "\uf08d",
            "external-link": "\uf08e",
            "sign-in": "\uf090",
            "trophy": "\uf091",
            "github-square": "\uf092",
            "upload": "\uf093",
            "lemon-o": "\uf094",
            "phone": "\uf095",
            "square-o": "\uf096",
            "bookmark-o": "\uf097",
            "phone-square": "\uf098",
            "twitter": "\uf099",
            "facebook": "\uf09a",
            "github": "\uf09b",
            "unlock": "\uf09c",
            "credit-card": "\uf09d",
            "rss": "\uf09e",
            "hdd-o": "\uf0a0",
            "bullhorn": "\uf0a1",
            "bell": "\uf0f3",
            "certificate": "\uf0a3",
            "hand-o-right": "\uf0a4",
            "hand-o-left": "\uf0a5",
            "hand-o-up": "\uf0a6",
            "hand-o-down": "\uf0a7",
            "arrow-circle-left": "\uf0a8",
            "arrow-circle-right": "\uf0a9",
            "arrow-circle-up": "\uf0aa",
            "arrow-circle-down": "\uf0ab",
            "globe": "\uf0ac",
            "wrench": "\uf0ad",
            "tasks": "\uf0ae",
            "filter": "\uf0b0",
            "briefcase": "\uf0b1",
            "arrows-alt": "\uf0b2",
            "users": "\uf0c0",
            "link": "\uf0c1",
            "cloud": "\uf0c2",
            "flask": "\uf0c3",
            "scissors": "\uf0c4",
            "files-o": "\uf0c5",
            "paperclip": "\uf0c6",
            "floppy-o": "\uf0c7",
            "square": "\uf0c8",
            "bars": "\uf0c9",
            "list-ul": "\uf0ca",
            "list-ol": "\uf0cb",
            "strikethrough": "\uf0cc",
            "underline": "\uf0cd",
            "table": "\uf0ce",
            "magic": "\uf0d0",
            "truck": "\uf0d1",
            "pinterest": "\uf0d2",
            "pinterest-square": "\uf0d3",
            "google-plus-square": "\uf0d4",
            "google-plus": "\uf0d5",
            "money": "\uf0d6",
            "caret-down": "\uf0d7",
            "caret-up": "\uf0d8",
            "caret-left": "\uf0d9",
            "caret-right": "\uf0da",
            "columns": "\uf0db",
            "sort": "\uf0dc",
            "sort-desc": "\uf0dd",
            "sort-asc": "\uf0de",
            "envelope": "\uf0e0",
            "linkedin": "\uf0e1",
            "undo": "\uf0e2",
            "gavel": "\uf0e3",
            "tachometer": "\uf0e4",
            "comment-o": "\uf0e5",
            "comments-o": "\uf0e6",
            "bolt": "\uf0e7",
            "sitemap": "\uf0e8",
            "umbrella": "\uf0e9",
            "clipboard": "\uf0ea",
            "lightbulb-o": "\uf0eb",
            "exchange": "\uf0ec",
            "cloud-download": "\uf0ed",
            "cloud-upload": "\uf0ee",
            "user-md": "\uf0f0",
            "stethoscope": "\uf0f1",
            "suitcase": "\uf0f2",
            "bell-o": "\uf0a2",
            "coffee": "\uf0f4",
            "cutlery": "\uf0f5",
            "file-text-o": "\uf0f6",
            "building-o": "\uf0f7",
            "hospital-o": "\uf0f8",
            "ambulance": "\uf0f9",
            "medkit": "\uf0fa",
            "fighter-jet": "\uf0fb",
            "beer": "\uf0fc",
            "h-square": "\uf0fd",
            "plus-square": "\uf0fe",
            "angle-double-left": "\uf100",
            "angle-double-right": "\uf101",
            "angle-double-up": "\uf102",
            "angle-double-down": "\uf103",
            "angle-left": "\uf104",
            "angle-right": "\uf105",
            "angle-up": "\uf106",
            "angle-down": "\uf107",
            "desktop": "\uf108",
            "laptop": "\uf109",
            "tablet": "\uf10a",
            "mobile": "\uf10b",
            "circle-o": "\uf10c",
            "quote-left": "\uf10d",
            "quote-right": "\uf10e",
            "spinner": "\uf110",
            "circle": "\uf111",
            "reply": "\uf112",
            "github-alt": "\uf113",
            "folder-o": "\uf114",
            "folder-open-o": "\uf115",
            "smile-o": "\uf118",
            "frown-o": "\uf119",
            "meh-o": "\uf11a",
            "gamepad": "\uf11b",
            "keyboard-o": "\uf11c",
            "flag-o": "\uf11d",
            "flag-checkered": "\uf11e",
            "terminal": "\uf120",
            "code": "\uf121",
            "reply-all": "\uf122",
            "star-half-o": "\uf123",
            "location-arrow": "\uf124",
            "crop": "\uf125",
            "code-fork": "\uf126",
            "chain-broken": "\uf127",
            "question": "\uf128",
            "info": "\uf129",
            "exclamation": "\uf12a",
            "superscript": "\uf12b",
            "subscript": "\uf12c",
            "eraser": "\uf12d",
            "puzzle-piece": "\uf12e",
            "microphone": "\uf130",
            "microphone-slash": "\uf131",
            "shield": "\uf132",
            "calendar-o": "\uf133",
            "fire-extinguisher": "\uf134",
            "rocket": "\uf135",
            "maxcdn": "\uf136",
            "chevron-circle-left": "\uf137",
            "chevron-circle-right": "\uf138",
            "chevron-circle-up": "\uf139",
            "chevron-circle-down": "\uf13a",
            "html5": "\uf13b",
            "css3": "\uf13c",
            "anchor": "\uf13d",
            "unlock-alt": "\uf13e",
            "bullseye": "\uf140",
            "ellipsis-h": "\uf141",
            "ellipsis-v": "\uf142",
            "rss-square": "\uf143",
            "play-circle": "\uf144",
            "ticket": "\uf145",
            "minus-square": "\uf146",
            "minus-square-o": "\uf147",
            "level-up": "\uf148",
            "level-down": "\uf149",
            "check-square": "\uf14a",
            "pencil-square": "\uf14b",
            "external-link-square": "\uf14c",
            "share-square": "\uf14d",
            "compass": "\uf14e",
            "caret-square-o-down": "\uf150",
            "caret-square-o-up": "\uf151",
            "caret-square-o-right": "\uf152",
            "eur": "\uf153",
            "gbp": "\uf154",
            "usd": "\uf155",
            "inr": "\uf156",
            "jpy": "\uf157",
            "rub": "\uf158",
            "krw": "\uf159",
            "btc": "\uf15a",
            "file": "\uf15b",
            "file-text": "\uf15c",
            "sort-alpha-asc": "\uf15d",
            "sort-alpha-desc": "\uf15e",
            "sort-amount-asc": "\uf160",
            "sort-amount-desc": "\uf161",
            "sort-numeric-asc": "\uf162",
            "sort-numeric-desc": "\uf163",
            "thumbs-up": "\uf164",
            "thumbs-down": "\uf165",
            "youtube-square": "\uf166",
            "youtube": "\uf167",
            "xing": "\uf168",
            "xing-square": "\uf169",
            "youtube-play": "\uf16a",
            "dropbox": "\uf16b",
            "stack-overflow": "\uf16c",
            "instagram": "\uf16d",
            "flickr": "\uf16e",
            "adn": "\uf170",
            "bitbucket": "\uf171",
            "bitbucket-square": "\uf172",
            "tumblr": "\uf173",
            "tumblr-square": "\uf174",
            "long-arrow-down": "\uf175",
            "long-arrow-up": "\uf176",
            "long-arrow-left": "\uf177",
            "long-arrow-right": "\uf178",
            "apple": "\uf179",
            "windows": "\uf17a",
            "android": "\uf17b",
            "linux": "\uf17c",
            "dribbble": "\uf17d",
            "skype": "\uf17e",
            "foursquare": "\uf180",
            "trello": "\uf181",
            "female": "\uf182",
            "male": "\uf183",
            "gratipay": "\uf184",
            "sun-o": "\uf185",
            "moon-o": "\uf186",
            "archive": "\uf187",
            "bug": "\uf188",
            "vk": "\uf189",
            "weibo": "\uf18a",
            "renren": "\uf18b",
            "pagelines": "\uf18c",
            "stack-exchange": "\uf18d",
            "arrow-circle-o-right": "\uf18e",
            "arrow-circle-o-left": "\uf190",
            "caret-square-o-left": "\uf191",
            "dot-circle-o": "\uf192",
            "wheelchair": "\uf193",
            "vimeo-square": "\uf194",
            "try": "\uf195",
            "plus-square-o": "\uf196",
            "space-shuttle": "\uf197",
            "slack": "\uf198",
            "envelope-square": "\uf199",
            "wordpress": "\uf19a",
            "openid": "\uf19b",
            "university": "\uf19c",
            "graduation-cap": "\uf19d",
            "yahoo": "\uf19e",
            "google": "\uf1a0",
            "reddit": "\uf1a1",
            "reddit-square": "\uf1a2",
            "stumbleupon-circle": "\uf1a3",
            "stumbleupon": "\uf1a4",
            "delicious": "\uf1a5",
            "digg": "\uf1a6",
            "pied-piper-pp": "\uf1a7",
            "pied-piper-alt": "\uf1a8",
            "drupal": "\uf1a9",
            "joomla": "\uf1aa",
            "language": "\uf1ab",
            "fax": "\uf1ac",
            "building": "\uf1ad",
            "child": "\uf1ae",
            "paw": "\uf1b0",
            "spoon": "\uf1b1",
            "cube": "\uf1b2",
            "cubes": "\uf1b3",
            "behance": "\uf1b4",
            "behance-square": "\uf1b5",
            "steam": "\uf1b6",
            "steam-square": "\uf1b7",
            "recycle": "\uf1b8",
            "car": "\uf1b9",
            "taxi": "\uf1ba",
            "tree": "\uf1bb",
            "spotify": "\uf1bc",
            "deviantart": "\uf1bd",
            "soundcloud": "\uf1be",
            "database": "\uf1c0",
            "file-pdf-o": "\uf1c1",
            "file-word-o": "\uf1c2",
            "file-excel-o": "\uf1c3",
            "file-powerpoint-o": "\uf1c4",
            "file-image-o": "\uf1c5",
            "file-archive-o": "\uf1c6",
            "file-audio-o": "\uf1c7",
            "file-video-o": "\uf1c8",
            "file-code-o": "\uf1c9",
            "vine": "\uf1ca",
            "codepen": "\uf1cb",
            "jsfiddle": "\uf1cc",
            "life-ring": "\uf1cd",
            "circle-o-notch": "\uf1ce",
            "rebel": "\uf1d0",
            "empire": "\uf1d1",
            "git-square": "\uf1d2",
            "git": "\uf1d3",
            "hacker-news": "\uf1d4",
            "tencent-weibo": "\uf1d5",
            "qq": "\uf1d6",
            "weixin": "\uf1d7",
            "paper-plane": "\uf1d8",
            "paper-plane-o": "\uf1d9",
            "history": "\uf1da",
            "circle-thin": "\uf1db",
            "header": "\uf1dc",
            "paragraph": "\uf1dd",
            "sliders": "\uf1de",
            "share-alt": "\uf1e0",
            "share-alt-square": "\uf1e1",
            "bomb": "\uf1e2",
            "futbol-o": "\uf1e3",
            "tty": "\uf1e4",
            "binoculars": "\uf1e5",
            "plug": "\uf1e6",
            "slideshare": "\uf1e7",
            "twitch": "\uf1e8",
            "yelp": "\uf1e9",
            "newspaper-o": "\uf1ea",
            "wifi": "\uf1eb",
            "calculator": "\uf1ec",
            "paypal": "\uf1ed",
            "google-wallet": "\uf1ee",
            "cc-visa": "\uf1f0",
            "cc-mastercard": "\uf1f1",
            "cc-discover": "\uf1f2",
            "cc-amex": "\uf1f3",
            "cc-paypal": "\uf1f4",
            "cc-stripe": "\uf1f5",
            "bell-slash": "\uf1f6",
            "bell-slash-o": "\uf1f7",
            "trash": "\uf1f8",
            "copyright": "\uf1f9",
            "at": "\uf1fa",
            "eyedropper": "\uf1fb",
            "paint-brush": "\uf1fc",
            "birthday-cake": "\uf1fd",
            "area-chart": "\uf1fe",
            "pie-chart": "\uf200",
            "line-chart": "\uf201",
            "lastfm": "\uf202",
            "lastfm-square": "\uf203",
            "toggle-off": "\uf204",
            "toggle-on": "\uf205",
            "bicycle": "\uf206",
            "bus": "\uf207",
            "ioxhost": "\uf208",
            "angellist": "\uf209",
            "cc": "\uf20a",
            "ils": "\uf20b",
            "meanpath": "\uf20c",
            "buysellads": "\uf20d",
            "connectdevelop": "\uf20e",
            "dashcube": "\uf210",
            "forumbee": "\uf211",
            "leanpub": "\uf212",
            "sellsy": "\uf213",
            "shirtsinbulk": "\uf214",
            "simplybuilt": "\uf215",
            "skyatlas": "\uf216",
            "cart-plus": "\uf217",
            "cart-arrow-down": "\uf218",
            "diamond": "\uf219",
            "ship": "\uf21a",
            "user-secret": "\uf21b",
            "motorcycle": "\uf21c",
            "street-view": "\uf21d",
            "heartbeat": "\uf21e",
            "venus": "\uf221",
            "mars": "\uf222",
            "mercury": "\uf223",
            "transgender": "\uf224",
            "transgender-alt": "\uf225",
            "venus-double": "\uf226",
            "mars-double": "\uf227",
            "venus-mars": "\uf228",
            "mars-stroke": "\uf229",
            "mars-stroke-v": "\uf22a",
            "mars-stroke-h": "\uf22b",
            "neuter": "\uf22c",
            "genderless": "\uf22d",
            "facebook-official": "\uf230",
            "pinterest-p": "\uf231",
            "whatsapp": "\uf232",
            "server": "\uf233",
            "user-plus": "\uf234",
            "user-times": "\uf235",
            "bed": "\uf236",
            "viacoin": "\uf237",
            "train": "\uf238",
            "subway": "\uf239",
            "medium": "\uf23a",
            "y-combinator": "\uf23b",
            "optin-monster": "\uf23c",
            "opencart": "\uf23d",
            "expeditedssl": "\uf23e",
            "battery-full": "\uf240",
            "battery-three-quarters": "\uf241",
            "battery-half": "\uf242",
            "battery-quarter": "\uf243",
            "battery-empty": "\uf244",
            "mouse-pointer": "\uf245",
            "i-cursor": "\uf246",
            "object-group": "\uf247",
            "object-ungroup": "\uf248",
            "sticky-note": "\uf249",
            "sticky-note-o": "\uf24a",
            "cc-jcb": "\uf24b",
            "cc-diners-club": "\uf24c",
            "clone": "\uf24d",
            "balance-scale": "\uf24e",
            "hourglass-o": "\uf250",
            "hourglass-start": "\uf251",
            "hourglass-half": "\uf252",
            "hourglass-end": "\uf253",
            "hourglass": "\uf254",
            "hand-rock-o": "\uf255",
            "hand-paper-o": "\uf256",
            "hand-scissors-o": "\uf257",
            "hand-lizard-o": "\uf258",
            "hand-spock-o": "\uf259",
            "hand-pointer-o": "\uf25a",
            "hand-peace-o": "\uf25b",
            "trademark": "\uf25c",
            "registered": "\uf25d",
            "creative-commons": "\uf25e",
            "gg": "\uf260",
            "gg-circle": "\uf261",
            "tripadvisor": "\uf262",
            "odnoklassniki": "\uf263",
            "odnoklassniki-square": "\uf264",
            "get-pocket": "\uf265",
            "wikipedia-w": "\uf266",
            "safari": "\uf267",
            "chrome": "\uf268",
            "firefox": "\uf269",
            "opera": "\uf26a",
            "internet-explorer": "\uf26b",
            "television": "\uf26c",
            "contao": "\uf26d",
            "500px": "\uf26e",
            "amazon": "\uf270",
            "calendar-plus-o": "\uf271",
            "calendar-minus-o": "\uf272",
            "calendar-times-o": "\uf273",
            "calendar-check-o": "\uf274",
            "industry": "\uf275",
            "map-pin": "\uf276",
            "map-signs": "\uf277",
            "map-o": "\uf278",
            "map": "\uf279",
            "commenting": "\uf27a",
            "commenting-o": "\uf27b",
            "houzz": "\uf27c",
            "vimeo": "\uf27d",
            "black-tie": "\uf27e",
            "fonticons": "\uf280",
            "reddit-alien": "\uf281",
            "edge": "\uf282",
            "credit-card-alt": "\uf283",
            "codiepie": "\uf284",
            "modx": "\uf285",
            "fort-awesome": "\uf286",
            "usb": "\uf287",
            "product-hunt": "\uf288",
            "mixcloud": "\uf289",
            "scribd": "\uf28a",
            "pause-circle": "\uf28b",
            "pause-circle-o": "\uf28c",
            "stop-circle": "\uf28d",
            "stop-circle-o": "\uf28e",
            "shopping-bag": "\uf290",
            "shopping-basket": "\uf291",
            "hashtag": "\uf292",
            "bluetooth": "\uf293",
            "bluetooth-b": "\uf294",
            "percent": "\uf295",
            "gitlab": "\uf296",
            "wpbeginner": "\uf297",
            "wpforms": "\uf298",
            "envira": "\uf299",
            "universal-access": "\uf29a",
            "wheelchair-alt": "\uf29b",
            "question-circle-o": "\uf29c",
            "blind": "\uf29d",
            "audio-description": "\uf29e",
            "volume-control-phone": "\uf2a0",
            "braille": "\uf2a1",
            "assistive-listening-systems": "\uf2a2",
            "american-sign-language-interpreting": "\uf2a3",
            "deaf": "\uf2a4",
            "glide": "\uf2a5",
            "glide-g": "\uf2a6",
            "sign-language": "\uf2a7",
            "low-vision": "\uf2a8",
            "viadeo": "\uf2a9",
            "viadeo-square": "\uf2aa",
            "snapchat": "\uf2ab",
            "snapchat-ghost": "\uf2ac",
            "snapchat-square": "\uf2ad",
            "pied-piper": "\uf2ae",
            "first-order": "\uf2b0",
            "yoast": "\uf2b1",
            "themeisle": "\uf2b2",
            "google-plus-official": "\uf2b3",
            "font-awesome": "\uf2b4",
            "handshake-o": "\uf2b5",
            "envelope-open": "\uf2b6",
            "envelope-open-o": "\uf2b7",
            "linode": "\uf2b8",
            "address-book": "\uf2b9",
            "address-book-o": "\uf2ba",
            "address-card": "\uf2bb",
            "address-card-o": "\uf2bc",
            "user-circle": "\uf2bd",
            "user-circle-o": "\uf2be",
            "user-o": "\uf2c0",
            "id-badge": "\uf2c1",
            "id-card": "\uf2c2",
            "id-card-o": "\uf2c3",
            "quora": "\uf2c4",
            "free-code-camp": "\uf2c5",
            "telegram": "\uf2c6",
            "thermometer-full": "\uf2c7",
            "thermometer-three-quarters": "\uf2c8",
            "thermometer-half": "\uf2c9",
            "thermometer-quarter": "\uf2ca",
            "thermometer-empty": "\uf2cb",
            "shower": "\uf2cc",
            "bath": "\uf2cd",
            "podcast": "\uf2ce",
            "window-maximize": "\uf2d0",
            "window-minimize": "\uf2d1",
            "window-restore": "\uf2d2",
            "window-close": "\uf2d3",
            "window-close-o": "\uf2d4",
            "bandcamp": "\uf2d5",
            "grav": "\uf2d6",
            "etsy": "\uf2d7",
            "imdb": "\uf2d8",
            "ravelry": "\uf2d9",
            "eercast": "\uf2da",
            "microchip": "\uf2db",
            "snowflake-o": "\uf2dc",
            "superpowers": "\uf2dd",
            "wpexplorer": "\uf2de",
            "meetup": "\uf2e0"
        },
        "paths": {
            "\uf000": [
                1792.0,
                "M1699%201350q0%20-35%20-43%20-78l-632%20-632v-768h320q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19h-896q-26%200%20-45%2019t-19%2045t19%2045t45%2019h320v768l-632%20632q-43%2043%20-43%2078q0%2023%2018%2036.5t38%2017.5t43%204h1408q23%200%2043%20-4t38%20-17.5t18%20-36.5z"
            ],
            "\uf001": [
                1536.0,
                "M1536%201312v-1120q0%20-50%20-34%20-89t-86%20-60.5t-103.5%20-32t-96.5%20-10.5t-96.5%2010.5t-103.5%2032t-86%2060.5t-34%2089t34%2089t86%2060.5t103.5%2032t96.5%2010.5q105%200%20192%20-39v537l-768%20-237v-709q0%20-50%20-34%20-89t-86%20-60.5t-103.5%20-32t-96.5%20-10.5t-96.5%2010.5t-103.5%2032t-86%2060.5t-34%2089%20t34%2089t86%2060.5t103.5%2032t96.5%2010.5q105%200%20192%20-39v967q0%2031%2019%2056.5t49%2035.5l832%20256q12%204%2028%204q40%200%2068%20-28t28%20-68z"
            ],
            "\uf002": [
                1664.0,
                "M1152%20704q0%20185%20-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5t316.5%20131.5t131.5%20316.5zM1664%20-128q0%20-52%20-38%20-90t-90%20-38q-54%200%20-90%2038l-343%20342q-179%20-124%20-399%20-124q-143%200%20-273.5%2055.5t-225%20150t-150%20225t-55.5%20273.5%20t55.5%20273.5t150%20225t225%20150t273.5%2055.5t273.5%20-55.5t225%20-150t150%20-225t55.5%20-273.5q0%20-220%20-124%20-399l343%20-343q37%20-37%2037%20-90z"
            ],
            "\uf003": [
                1792.0,
                "M1664%2032v768q-32%20-36%20-69%20-66q-268%20-206%20-426%20-338q-51%20-43%20-83%20-67t-86.5%20-48.5t-102.5%20-24.5h-1h-1q-48%200%20-102.5%2024.5t-86.5%2048.5t-83%2067q-158%20132%20-426%20338q-37%2030%20-69%2066v-768q0%20-13%209.5%20-22.5t22.5%20-9.5h1472q13%200%2022.5%209.5t9.5%2022.5zM1664%201083v11v13.5t-0.5%2013%20t-3%2012.5t-5.5%209t-9%207.5t-14%202.5h-1472q-13%200%20-22.5%20-9.5t-9.5%20-22.5q0%20-168%20147%20-284q193%20-152%20401%20-317q6%20-5%2035%20-29.5t46%20-37.5t44.5%20-31.5t50.5%20-27.5t43%20-9h1h1q20%200%2043%209t50.5%2027.5t44.5%2031.5t46%2037.5t35%2029.5q208%20165%20401%20317q54%2043%20100.5%20115.5t46.5%20131.5z%20M1792%201120v-1088q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h1472q66%200%20113%20-47t47%20-113z"
            ],
            "\uf004": [
                1792.0,
                "M896%20-128q-26%200%20-44%2018l-624%20602q-10%208%20-27.5%2026t-55.5%2065.5t-68%2097.5t-53.5%20121t-23.5%20138q0%20220%20127%20344t351%20124q62%200%20126.5%20-21.5t120%20-58t95.5%20-68.5t76%20-68q36%2036%2076%2068t95.5%2068.5t120%2058t126.5%2021.5q224%200%20351%20-124t127%20-344q0%20-221%20-229%20-450l-623%20-600%20q-18%20-18%20-44%20-18z"
            ],
            "\uf005": [
                1664.0,
                "M1664%20889q0%20-22%20-26%20-48l-363%20-354l86%20-500q1%20-7%201%20-20q0%20-21%20-10.5%20-35.5t-30.5%20-14.5q-19%200%20-40%2012l-449%20236l-449%20-236q-22%20-12%20-40%20-12q-21%200%20-31.5%2014.5t-10.5%2035.5q0%206%202%2020l86%20500l-364%20354q-25%2027%20-25%2048q0%2037%2056%2046l502%2073l225%20455q19%2041%2049%2041t49%20-41l225%20-455%20l502%20-73q56%20-9%2056%20-46z"
            ],
            "\uf006": [
                1664.0,
                "M1137%20532l306%20297l-422%2062l-189%20382l-189%20-382l-422%20-62l306%20-297l-73%20-421l378%20199l377%20-199zM1664%20889q0%20-22%20-26%20-48l-363%20-354l86%20-500q1%20-7%201%20-20q0%20-50%20-41%20-50q-19%200%20-40%2012l-449%20236l-449%20-236q-22%20-12%20-40%20-12q-21%200%20-31.5%2014.5t-10.5%2035.5q0%206%202%2020l86%20500%20l-364%20354q-25%2027%20-25%2048q0%2037%2056%2046l502%2073l225%20455q19%2041%2049%2041t49%20-41l225%20-455l502%20-73q56%20-9%2056%20-46z"
            ],
            "\uf007": [
                1280.0,
                "M1280%20137q0%20-109%20-62.5%20-187t-150.5%20-78h-854q-88%200%20-150.5%2078t-62.5%20187q0%2085%208.5%20160.5t31.5%20152t58.5%20131t94%2089t134.5%2034.5q131%20-128%20313%20-128t313%20128q76%200%20134.5%20-34.5t94%20-89t58.5%20-131t31.5%20-152t8.5%20-160.5zM1024%201024q0%20-159%20-112.5%20-271.5t-271.5%20-112.5%20t-271.5%20112.5t-112.5%20271.5t112.5%20271.5t271.5%20112.5t271.5%20-112.5t112.5%20-271.5z"
            ],
            "\uf008": [
                1920.0,
                "M384%20-64v128q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM384%20320v128q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM384%20704v128q0%2026%20-19%2045t-45%2019h-128%20q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM1408%20-64v512q0%2026%20-19%2045t-45%2019h-768q-26%200%20-45%20-19t-19%20-45v-512q0%20-26%2019%20-45t45%20-19h768q26%200%2045%2019t19%2045zM384%201088v128q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45%20t45%20-19h128q26%200%2045%2019t19%2045zM1792%20-64v128q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM1408%20704v512q0%2026%20-19%2045t-45%2019h-768q-26%200%20-45%20-19t-19%20-45v-512q0%20-26%2019%20-45t45%20-19h768q26%200%2045%2019t19%2045zM1792%20320v128%20q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM1792%20704v128q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM1792%201088v128q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19%20t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM1920%201248v-1344q0%20-66%20-47%20-113t-113%20-47h-1600q-66%200%20-113%2047t-47%20113v1344q0%2066%2047%20113t113%2047h1600q66%200%20113%20-47t47%20-113z"
            ],
            "\uf009": [
                1664.0,
                "M768%20512v-384q0%20-52%20-38%20-90t-90%20-38h-512q-52%200%20-90%2038t-38%2090v384q0%2052%2038%2090t90%2038h512q52%200%2090%20-38t38%20-90zM768%201280v-384q0%20-52%20-38%20-90t-90%20-38h-512q-52%200%20-90%2038t-38%2090v384q0%2052%2038%2090t90%2038h512q52%200%2090%20-38t38%20-90zM1664%20512v-384q0%20-52%20-38%20-90t-90%20-38%20h-512q-52%200%20-90%2038t-38%2090v384q0%2052%2038%2090t90%2038h512q52%200%2090%20-38t38%20-90zM1664%201280v-384q0%20-52%20-38%20-90t-90%20-38h-512q-52%200%20-90%2038t-38%2090v384q0%2052%2038%2090t90%2038h512q52%200%2090%20-38t38%20-90z"
            ],
            "\uf00a": [
                1792.0,
                "M512%20288v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM512%20800v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM1152%20288v-192q0%20-40%20-28%20-68t-68%20-28h-320%20q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM512%201312v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM1152%20800v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028%20h320q40%200%2068%20-28t28%20-68zM1792%20288v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM1152%201312v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM1792%20800v-192%20q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM1792%201312v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68z"
            ],
            "\uf00b": [
                1792.0,
                "M512%20288v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM512%20800v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM1792%20288v-192q0%20-40%20-28%20-68t-68%20-28h-960%20q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h960q40%200%2068%20-28t28%20-68zM512%201312v-192q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68zM1792%20800v-192q0%20-40%20-28%20-68t-68%20-28h-960q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028%20h960q40%200%2068%20-28t28%20-68zM1792%201312v-192q0%20-40%20-28%20-68t-68%20-28h-960q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h960q40%200%2068%20-28t28%20-68z"
            ],
            "\uf00c": [
                1792.0,
                "M1671%20970q0%20-40%20-28%20-68l-724%20-724l-136%20-136q-28%20-28%20-68%20-28t-68%2028l-136%20136l-362%20362q-28%2028%20-28%2068t28%2068l136%20136q28%2028%2068%2028t68%20-28l294%20-295l656%20657q28%2028%2068%2028t68%20-28l136%20-136q28%20-28%2028%20-68z"
            ],
            "\uf00d": [
                1408.0,
                "M1298%20214q0%20-40%20-28%20-68l-136%20-136q-28%20-28%20-68%20-28t-68%2028l-294%20294l-294%20-294q-28%20-28%20-68%20-28t-68%2028l-136%20136q-28%2028%20-28%2068t28%2068l294%20294l-294%20294q-28%2028%20-28%2068t28%2068l136%20136q28%2028%2068%2028t68%20-28l294%20-294l294%20294q28%2028%2068%2028t68%20-28l136%20-136q28%20-28%2028%20-68%20t-28%20-68l-294%20-294l294%20-294q28%20-28%2028%20-68z"
            ],
            "\uf00e": [
                1664.0,
                "M1024%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-224v-224q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v224h-224q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h224v224q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5v-224h224%20q13%200%2022.5%20-9.5t9.5%20-22.5zM1152%20704q0%20185%20-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5t316.5%20131.5t131.5%20316.5zM1664%20-128q0%20-53%20-37.5%20-90.5t-90.5%20-37.5q-54%200%20-90%2038l-343%20342q-179%20-124%20-399%20-124q-143%200%20-273.5%2055.5%20t-225%20150t-150%20225t-55.5%20273.5t55.5%20273.5t150%20225t225%20150t273.5%2055.5t273.5%20-55.5t225%20-150t150%20-225t55.5%20-273.5q0%20-220%20-124%20-399l343%20-343q37%20-37%2037%20-90z"
            ],
            "\uf010": [
                1664.0,
                "M1024%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-576q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h576q13%200%2022.5%20-9.5t9.5%20-22.5zM1152%20704q0%20185%20-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5t316.5%20131.5t131.5%20316.5z%20M1664%20-128q0%20-53%20-37.5%20-90.5t-90.5%20-37.5q-54%200%20-90%2038l-343%20342q-179%20-124%20-399%20-124q-143%200%20-273.5%2055.5t-225%20150t-150%20225t-55.5%20273.5t55.5%20273.5t150%20225t225%20150t273.5%2055.5t273.5%20-55.5t225%20-150t150%20-225t55.5%20-273.5q0%20-220%20-124%20-399l343%20-343q37%20-37%2037%20-90z%20"
            ],
            "\uf011": [
                1536.0,
                "M1536%20640q0%20-156%20-61%20-298t-164%20-245t-245%20-164t-298%20-61t-298%2061t-245%20164t-164%20245t-61%20298q0%20182%2080.5%20343t226.5%20270q43%2032%2095.5%2025t83.5%20-50q32%20-42%2024.5%20-94.5t-49.5%20-84.5q-98%20-74%20-151.5%20-181t-53.5%20-228q0%20-104%2040.5%20-198.5t109.5%20-163.5t163.5%20-109.5%20t198.5%20-40.5t198.5%2040.5t163.5%20109.5t109.5%20163.5t40.5%20198.5q0%20121%20-53.5%20228t-151.5%20181q-42%2032%20-49.5%2084.5t24.5%2094.5q31%2043%2084%2050t95%20-25q146%20-109%20226.5%20-270t80.5%20-343zM896%201408v-640q0%20-52%20-38%20-90t-90%20-38t-90%2038t-38%2090v640q0%2052%2038%2090t90%2038t90%20-38t38%20-90z"
            ],
            "\uf012": [
                1792.0,
                "M256%2096v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM640%20224v-320q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v320q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1024%20480v-576q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023%20v576q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1408%20864v-960q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v960q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1792%201376v-1472q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v1472q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23z"
            ],
            "\uf013": [
                1536.0,
                "M1024%20640q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181t75%20-181t181%20-75t181%2075t75%20181zM1536%20749v-222q0%20-12%20-8%20-23t-20%20-13l-185%20-28q-19%20-54%20-39%20-91q35%20-50%20107%20-138q10%20-12%2010%20-25t-9%20-23q-27%20-37%20-99%20-108t-94%20-71q-12%200%20-26%209l-138%20108q-44%20-23%20-91%20-38%20q-16%20-136%20-29%20-186q-7%20-28%20-36%20-28h-222q-14%200%20-24.5%208.5t-11.5%2021.5l-28%20184q-49%2016%20-90%2037l-141%20-107q-10%20-9%20-25%20-9q-14%200%20-25%2011q-126%20114%20-165%20168q-7%2010%20-7%2023q0%2012%208%2023q15%2021%2051%2066.5t54%2070.5q-27%2050%20-41%2099l-183%2027q-13%202%20-21%2012.5t-8%2023.5v222q0%2012%208%2023t19%2013%20l186%2028q14%2046%2039%2092q-40%2057%20-107%20138q-10%2012%20-10%2024q0%2010%209%2023q26%2036%2098.5%20107.5t94.5%2071.5q13%200%2026%20-10l138%20-107q44%2023%2091%2038q16%20136%2029%20186q7%2028%2036%2028h222q14%200%2024.5%20-8.5t11.5%20-21.5l28%20-184q49%20-16%2090%20-37l142%20107q9%209%2024%209q13%200%2025%20-10q129%20-119%20165%20-170q7%20-8%207%20-22%20q0%20-12%20-8%20-23q-15%20-21%20-51%20-66.5t-54%20-70.5q26%20-50%2041%20-98l183%20-28q13%20-2%2021%20-12.5t8%20-23.5z"
            ],
            "\uf014": [
                1408.0,
                "M512%20800v-576q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v576q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23zM768%20800v-576q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v576q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23zM1024%20800v-576q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v576%20q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23zM1152%2076v948h-896v-948q0%20-22%207%20-40.5t14.5%20-27t10.5%20-8.5h832q3%200%2010.5%208.5t14.5%2027t7%2040.5zM480%201152h448l-48%20117q-7%209%20-17%2011h-317q-10%20-2%20-17%20-11zM1408%201120v-64q0%20-14%20-9%20-23t-23%20-9h-96v-948q0%20-83%20-47%20-143.5t-113%20-60.5h-832%20q-66%200%20-113%2058.5t-47%20141.5v952h-96q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h309l70%20167q15%2037%2054%2063t79%2026h320q40%200%2079%20-26t54%20-63l70%20-167h309q14%200%2023%20-9t9%20-23z"
            ],
            "\uf015": [
                1664.0,
                "M1408%20544v-480q0%20-26%20-19%20-45t-45%20-19h-384v384h-256v-384h-384q-26%200%20-45%2019t-19%2045v480q0%201%200.5%203t0.5%203l575%20474l575%20-474q1%20-2%201%20-6zM1631%20613l-62%20-74q-8%20-9%20-21%20-11h-3q-13%200%20-21%207l-692%20577l-692%20-577q-12%20-8%20-24%20-7q-13%202%20-21%2011l-62%2074q-8%2010%20-7%2023.5t11%2021.5%20l719%20599q32%2026%2076%2026t76%20-26l244%20-204v195q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-408l219%20-182q10%20-8%2011%20-21.5t-7%20-23.5z"
            ],
            "\uf016": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20"
            ],
            "\uf017": [
                1536.0,
                "M896%20992v-448q0%20-14%20-9%20-23t-23%20-9h-320q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h224v352q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23zM1312%20640q0%20148%20-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf018": [
                1920.0,
                "M1111%20540v4l-24%20320q-1%2013%20-11%2022.5t-23%209.5h-186q-13%200%20-23%20-9.5t-11%20-22.5l-24%20-320v-4q-1%20-12%208%20-20t21%20-8h244q12%200%2021%208t8%2020zM1870%2073q0%20-73%20-46%20-73h-704q13%200%2022%209.5t8%2022.5l-20%20256q-1%2013%20-11%2022.5t-23%209.5h-272q-13%200%20-23%20-9.5t-11%20-22.5l-20%20-256%20q-1%20-13%208%20-22.5t22%20-9.5h-704q-46%200%20-46%2073q0%2054%2026%20116l417%201044q8%2019%2026%2033t38%2014h339q-13%200%20-23%20-9.5t-11%20-22.5l-15%20-192q-1%20-14%208%20-23t22%20-9h166q13%200%2022%209t8%2023l-15%20192q-1%2013%20-11%2022.5t-23%209.5h339q20%200%2038%20-14t26%20-33l417%20-1044q26%20-62%2026%20-116z"
            ],
            "\uf019": [
                1664.0,
                "M1280%20192q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1536%20192q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1664%20416v-320q0%20-40%20-28%20-68t-68%20-28h-1472q-40%200%20-68%2028t-28%2068v320q0%2040%2028%2068t68%2028h465l135%20-136%20q58%20-56%20136%20-56t136%2056l136%20136h464q40%200%2068%20-28t28%20-68zM1339%20985q17%20-41%20-14%20-70l-448%20-448q-18%20-19%20-45%20-19t-45%2019l-448%20448q-31%2029%20-14%2070q17%2039%2059%2039h256v448q0%2026%2019%2045t45%2019h256q26%200%2045%20-19t19%20-45v-448h256q42%200%2059%20-39z"
            ],
            "\uf01a": [
                1536.0,
                "M1120%20608q0%20-12%20-10%20-24l-319%20-319q-11%20-9%20-23%20-9t-23%209l-320%20320q-15%2016%20-7%2035q8%2020%2030%2020h192v352q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-352h192q14%200%2023%20-9t9%20-23zM768%201184q-148%200%20-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273%20t-73%20273t-198%20198t-273%2073zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf01b": [
                1536.0,
                "M1118%20660q-8%20-20%20-30%20-20h-192v-352q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v352h-192q-14%200%20-23%209t-9%2023q0%2012%2010%2024l319%20319q11%209%2023%209t23%20-9l320%20-320q15%20-16%207%20-35zM768%201184q-148%200%20-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198%20t73%20273t-73%20273t-198%20198t-273%2073zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf01c": [
                1536.0,
                "M1023%20576h316q-1%203%20-2.5%208.5t-2.5%207.5l-212%20496h-708l-212%20-496q-1%20-3%20-2.5%20-8.5t-2.5%20-7.5h316l95%20-192h320zM1536%20546v-482q0%20-26%20-19%20-45t-45%20-19h-1408q-26%200%20-45%2019t-19%2045v482q0%2062%2025%20123l238%20552q10%2025%2036.5%2042t52.5%2017h832q26%200%2052.5%20-17t36.5%20-42l238%20-552%20q25%20-61%2025%20-123z"
            ],
            "\uf01d": [
                1536.0,
                "M1184%20640q0%20-37%20-32%20-55l-544%20-320q-15%20-9%20-32%20-9q-16%200%20-32%208q-32%2019%20-32%2056v640q0%2037%2032%2056q33%2018%2064%20-1l544%20-320q32%20-18%2032%20-55zM1312%20640q0%20148%20-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf01e": [
                1536.0,
                "M1536%201280v-448q0%20-26%20-19%20-45t-45%20-19h-448q-42%200%20-59%2040q-17%2039%2014%2069l138%20138q-148%20137%20-349%20137q-104%200%20-198.5%20-40.5t-163.5%20-109.5t-109.5%20-163.5t-40.5%20-198.5t40.5%20-198.5t109.5%20-163.5t163.5%20-109.5t198.5%20-40.5q119%200%20225%2052t179%20147q7%2010%2023%2012q15%200%2025%20-9%20l137%20-138q9%20-8%209.5%20-20.5t-7.5%20-22.5q-109%20-132%20-264%20-204.5t-327%20-72.5q-156%200%20-298%2061t-245%20164t-164%20245t-61%20298t61%20298t164%20245t245%20164t298%2061q147%200%20284.5%20-55.5t244.5%20-156.5l130%20129q29%2031%2070%2014q39%20-17%2039%20-59z"
            ],
            "\uf021": [
                1536.0,
                "M1511%20480q0%20-5%20-1%20-7q-64%20-268%20-268%20-434.5t-478%20-166.5q-146%200%20-282.5%2055t-243.5%20157l-129%20-129q-19%20-19%20-45%20-19t-45%2019t-19%2045v448q0%2026%2019%2045t45%2019h448q26%200%2045%20-19t19%20-45t-19%20-45l-137%20-137q71%20-66%20161%20-102t187%20-36q134%200%20250%2065t186%20179q11%2017%2053%20117%20q8%2023%2030%2023h192q13%200%2022.5%20-9.5t9.5%20-22.5zM1536%201280v-448q0%20-26%20-19%20-45t-45%20-19h-448q-26%200%20-45%2019t-19%2045t19%2045l138%20138q-148%20137%20-349%20137q-134%200%20-250%20-65t-186%20-179q-11%20-17%20-53%20-117q-8%20-23%20-30%20-23h-199q-13%200%20-22.5%209.5t-9.5%2022.5v7q65%20268%20270%20434.5t480%20166.5%20q146%200%20284%20-55.5t245%20-156.5l130%20129q19%2019%2045%2019t45%20-19t19%20-45z"
            ],
            "\uf022": [
                1792.0,
                "M384%20352v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM384%20608v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M384%20864v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM1536%20352v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-960q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h960q13%200%2022.5%20-9.5t9.5%20-22.5z%20M1536%20608v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-960q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h960q13%200%2022.5%20-9.5t9.5%20-22.5zM1536%20864v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-960q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h960q13%200%2022.5%20-9.5%20t9.5%20-22.5zM1664%20160v832q0%2013%20-9.5%2022.5t-22.5%209.5h-1472q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-832q0%20-13%209.5%20-22.5t22.5%20-9.5h1472q13%200%2022.5%209.5t9.5%2022.5zM1792%201248v-1088q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h1472q66%200%20113%20-47%20t47%20-113z"
            ],
            "\uf023": [
                1152.0,
                "M320%20768h512v192q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181v-192zM1152%20672v-576q0%20-40%20-28%20-68t-68%20-28h-960q-40%200%20-68%2028t-28%2068v576q0%2040%2028%2068t68%2028h32v192q0%20184%20132%20316t316%20132t316%20-132t132%20-316v-192h32q40%200%2068%20-28t28%20-68z"
            ],
            "\uf024": [
                1792.0,
                "M320%201280q0%20-72%20-64%20-110v-1266q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v1266q-64%2038%20-64%20110q0%2053%2037.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1792%201216v-763q0%20-25%20-12.5%20-38.5t-39.5%20-27.5q-215%20-116%20-369%20-116q-61%200%20-123.5%2022t-108.5%2048%20t-115.5%2048t-142.5%2022q-192%200%20-464%20-146q-17%20-9%20-33%20-9q-26%200%20-45%2019t-19%2045v742q0%2032%2031%2055q21%2014%2079%2043q236%20120%20421%20120q107%200%20200%20-29t219%20-88q38%20-19%2088%20-19q54%200%20117.5%2021t110%2047t88%2047t54.5%2021q26%200%2045%20-19t19%20-45z"
            ],
            "\uf025": [
                1664.0,
                "M1664%20650q0%20-166%20-60%20-314l-20%20-49l-185%20-33q-22%20-83%20-90.5%20-136.5t-156.5%20-53.5v-32q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v576q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23v-32q71%200%20130%20-35.5t93%20-95.5l68%2012q29%2095%2029%20193q0%20148%20-88%20279t-236.5%20209t-315.5%2078%20t-315.5%20-78t-236.5%20-209t-88%20-279q0%20-98%2029%20-193l68%20-12q34%2060%2093%2095.5t130%2035.5v32q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23v-576q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v32q-88%200%20-156.5%2053.5t-90.5%20136.5l-185%2033l-20%2049q-60%20148%20-60%20314q0%20151%2067%20291t179%20242.5%20t266%20163.5t320%2061t320%20-61t266%20-163.5t179%20-242.5t67%20-291z"
            ],
            "\uf026": [
                768.0,
                "M768%201184v-1088q0%20-26%20-19%20-45t-45%20-19t-45%2019l-333%20333h-262q-26%200%20-45%2019t-19%2045v384q0%2026%2019%2045t45%2019h262l333%20333q19%2019%2045%2019t45%20-19t19%20-45z"
            ],
            "\uf027": [
                1152.0,
                "M768%201184v-1088q0%20-26%20-19%20-45t-45%20-19t-45%2019l-333%20333h-262q-26%200%20-45%2019t-19%2045v384q0%2026%2019%2045t45%2019h262l333%20333q19%2019%2045%2019t45%20-19t19%20-45zM1152%20640q0%20-76%20-42.5%20-141.5t-112.5%20-93.5q-10%20-5%20-25%20-5q-26%200%20-45%2018.5t-19%2045.5q0%2021%2012%2035.5t29%2025t34%2023t29%2036%20t12%2056.5t-12%2056.5t-29%2036t-34%2023t-29%2025t-12%2035.5q0%2027%2019%2045.5t45%2018.5q15%200%2025%20-5q70%20-27%20112.5%20-93t42.5%20-142z"
            ],
            "\uf028": [
                1664.0,
                "M768%201184v-1088q0%20-26%20-19%20-45t-45%20-19t-45%2019l-333%20333h-262q-26%200%20-45%2019t-19%2045v384q0%2026%2019%2045t45%2019h262l333%20333q19%2019%2045%2019t45%20-19t19%20-45zM1152%20640q0%20-76%20-42.5%20-141.5t-112.5%20-93.5q-10%20-5%20-25%20-5q-26%200%20-45%2018.5t-19%2045.5q0%2021%2012%2035.5t29%2025t34%2023t29%2036%20t12%2056.5t-12%2056.5t-29%2036t-34%2023t-29%2025t-12%2035.5q0%2027%2019%2045.5t45%2018.5q15%200%2025%20-5q70%20-27%20112.5%20-93t42.5%20-142zM1408%20640q0%20-153%20-85%20-282.5t-225%20-188.5q-13%20-5%20-25%20-5q-27%200%20-46%2019t-19%2045q0%2039%2039%2059q56%2029%2076%2044q74%2054%20115.5%20135.5t41.5%20173.5t-41.5%20173.5%20t-115.5%20135.5q-20%2015%20-76%2044q-39%2020%20-39%2059q0%2026%2019%2045t45%2019q13%200%2026%20-5q140%20-59%20225%20-188.5t85%20-282.5zM1664%20640q0%20-230%20-127%20-422.5t-338%20-283.5q-13%20-5%20-26%20-5q-26%200%20-45%2019t-19%2045q0%2036%2039%2059q7%204%2022.5%2010.5t22.5%2010.5q46%2025%2082%2051q123%2091%20192%20227t69%20289t-69%20289%20t-192%20227q-36%2026%20-82%2051q-7%204%20-22.5%2010.5t-22.5%2010.5q-39%2023%20-39%2059q0%2026%2019%2045t45%2019q13%200%2026%20-5q211%20-91%20338%20-283.5t127%20-422.5z"
            ],
            "\uf029": [
                1408.0,
                "M384%20384v-128h-128v128h128zM384%201152v-128h-128v128h128zM1152%201152v-128h-128v128h128zM128%20129h384v383h-384v-383zM128%20896h384v384h-384v-384zM896%20896h384v384h-384v-384zM640%20640v-640h-640v640h640zM1152%20128v-128h-128v128h128zM1408%20128v-128h-128v128h128z%20M1408%20640v-384h-384v128h-128v-384h-128v640h384v-128h128v128h128zM640%201408v-640h-640v640h640zM1408%201408v-640h-640v640h640z"
            ],
            "\uf02a": [
                1792.0,
                "M63%200h-63v1408h63v-1408zM126%201h-32v1407h32v-1407zM220%201h-31v1407h31v-1407zM377%201h-31v1407h31v-1407zM534%201h-62v1407h62v-1407zM660%201h-31v1407h31v-1407zM723%201h-31v1407h31v-1407zM786%201h-31v1407h31v-1407zM943%201h-63v1407h63v-1407zM1100%201h-63v1407h63v-1407z%20M1226%201h-63v1407h63v-1407zM1352%201h-63v1407h63v-1407zM1446%201h-63v1407h63v-1407zM1635%201h-94v1407h94v-1407zM1698%201h-32v1407h32v-1407zM1792%200h-63v1408h63v-1408z"
            ],
            "\uf02b": [
                1536.0,
                "M448%201088q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1515%20512q0%20-53%20-37%20-90l-491%20-492q-39%20-37%20-91%20-37q-53%200%20-90%2037l-715%20716q-38%2037%20-64.5%20101t-26.5%20117v416q0%2052%2038%2090t90%2038h416q53%200%20117%20-26.5t102%20-64.5%20l715%20-714q37%20-39%2037%20-91z"
            ],
            "\uf02c": [
                1920.0,
                "M448%201088q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1515%20512q0%20-53%20-37%20-90l-491%20-492q-39%20-37%20-91%20-37q-53%200%20-90%2037l-715%20716q-38%2037%20-64.5%20101t-26.5%20117v416q0%2052%2038%2090t90%2038h416q53%200%20117%20-26.5t102%20-64.5%20l715%20-714q37%20-39%2037%20-91zM1899%20512q0%20-53%20-37%20-90l-491%20-492q-39%20-37%20-91%20-37q-36%200%20-59%2014t-53%2045l470%20470q37%2037%2037%2090q0%2052%20-37%2091l-715%20714q-38%2038%20-102%2064.5t-117%2026.5h224q53%200%20117%20-26.5t102%20-64.5l715%20-714q37%20-39%2037%20-91z"
            ],
            "\uf02d": [
                1664.0,
                "M1639%201058q40%20-57%2018%20-129l-275%20-906q-19%20-64%20-76.5%20-107.5t-122.5%20-43.5h-923q-77%200%20-148.5%2053.5t-99.5%20131.5q-24%2067%20-2%20127q0%204%203%2027t4%2037q1%208%20-3%2021.5t-3%2019.5q2%2011%208%2021t16.5%2023.5t16.5%2023.5q23%2038%2045%2091.5t30%2091.5q3%2010%200.5%2030t-0.5%2028q3%2011%2017%2028t17%2023%20q21%2036%2042%2092t25%2090q1%209%20-2.5%2032t0.5%2028q4%2013%2022%2030.5t22%2022.5q19%2026%2042.5%2084.5t27.5%2096.5q1%208%20-3%2025.5t-2%2026.5q2%208%209%2018t18%2023t17%2021q8%2012%2016.5%2030.5t15%2035t16%2036t19.5%2032t26.5%2023.5t36%2011.5t47.5%20-5.5l-1%20-3q38%209%2051%209h761q74%200%20114%20-56t18%20-130l-274%20-906%20q-36%20-119%20-71.5%20-153.5t-128.5%20-34.5h-869q-27%200%20-38%20-15q-11%20-16%20-1%20-43q24%20-70%20144%20-70h923q29%200%2056%2015.5t35%2041.5l300%20987q7%2022%205%2057q38%20-15%2059%20-43zM575%201056q-4%20-13%202%20-22.5t20%20-9.5h608q13%200%2025.5%209.5t16.5%2022.5l21%2064q4%2013%20-2%2022.5t-20%209.5h-608q-13%200%20-25.5%20-9.5%20t-16.5%20-22.5zM492%20800q-4%20-13%202%20-22.5t20%20-9.5h608q13%200%2025.5%209.5t16.5%2022.5l21%2064q4%2013%20-2%2022.5t-20%209.5h-608q-13%200%20-25.5%20-9.5t-16.5%20-22.5z"
            ],
            "\uf02e": [
                1280.0,
                "M1164%201408q23%200%2044%20-9q33%20-13%2052.5%20-41t19.5%20-62v-1289q0%20-34%20-19.5%20-62t-52.5%20-41q-19%20-8%20-44%20-8q-48%200%20-83%2032l-441%20424l-441%20-424q-36%20-33%20-83%20-33q-23%200%20-44%209q-33%2013%20-52.5%2041t-19.5%2062v1289q0%2034%2019.5%2062t52.5%2041q21%209%2044%209h1048z"
            ],
            "\uf02f": [
                1664.0,
                "M384%200h896v256h-896v-256zM384%20640h896v384h-160q-40%200%20-68%2028t-28%2068v160h-640v-640zM1536%20576q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1664%20576v-416q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-224v-160q0%20-40%20-28%20-68t-68%20-28h-960q-40%200%20-68%2028t-28%2068%20v160h-224q-13%200%20-22.5%209.5t-9.5%2022.5v416q0%2079%2056.5%20135.5t135.5%2056.5h64v544q0%2040%2028%2068t68%2028h672q40%200%2088%20-20t76%20-48l152%20-152q28%20-28%2048%20-76t20%20-88v-256h64q79%200%20135.5%20-56.5t56.5%20-135.5z"
            ],
            "\uf030": [
                1920.0,
                "M960%20864q119%200%20203.5%20-84.5t84.5%20-203.5t-84.5%20-203.5t-203.5%20-84.5t-203.5%2084.5t-84.5%20203.5t84.5%20203.5t203.5%2084.5zM1664%201280q106%200%20181%20-75t75%20-181v-896q0%20-106%20-75%20-181t-181%20-75h-1408q-106%200%20-181%2075t-75%20181v896q0%20106%2075%20181t181%2075h224l51%20136%20q19%2049%2069.5%2084.5t103.5%2035.5h512q53%200%20103.5%20-35.5t69.5%20-84.5l51%20-136h224zM960%20128q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf031": [
                1664.0,
                "M725%20977l-170%20-450q33%200%20136.5%20-2t160.5%20-2q19%200%2057%202q-87%20253%20-184%20452zM0%20-128l2%2079q23%207%2056%2012.5t57%2010.5t49.5%2014.5t44.5%2029t31%2050.5l237%20616l280%20724h75h53q8%20-14%2011%20-21l205%20-480q33%20-78%20106%20-257.5t114%20-274.5q15%20-34%2058%20-144.5t72%20-168.5q20%20-45%2035%20-57%20q19%20-15%2088%20-29.5t84%20-20.5q6%20-38%206%20-57q0%20-5%20-0.5%20-13.5t-0.5%20-12.5q-63%200%20-190%208t-191%208q-76%200%20-215%20-7t-178%20-8q0%2043%204%2078l131%2028q1%200%2012.5%202.5t15.5%203.5t14.5%204.5t15%206.5t11%208t9%2011t2.5%2014q0%2016%20-31%2096.5t-72%20177.5t-42%20100l-450%202q-26%20-58%20-76.5%20-195.5t-50.5%20-162.5%20q0%20-22%2014%20-37.5t43.5%20-24.5t48.5%20-13.5t57%20-8.5t41%20-4q1%20-19%201%20-58q0%20-9%20-2%20-27q-58%200%20-174.5%2010t-174.5%2010q-8%200%20-26.5%20-4t-21.5%20-4q-80%20-14%20-188%20-14z"
            ],
            "\uf032": [
                1408.0,
                "M555%2015q74%20-32%20140%20-32q376%200%20376%20335q0%20114%20-41%20180q-27%2044%20-61.5%2074t-67.5%2046.5t-80.5%2025t-84%2010.5t-94.5%202q-73%200%20-101%20-10q0%20-53%20-0.5%20-159t-0.5%20-158q0%20-8%20-1%20-67.5t-0.5%20-96.5t4.5%20-83.5t12%20-66.5zM541%20761q42%20-7%20109%20-7q82%200%20143%2013t110%2044.5t74.5%2089.5t25.5%20142%20q0%2070%20-29%20122.5t-79%2082t-108%2043.5t-124%2014q-50%200%20-130%20-13q0%20-50%204%20-151t4%20-152q0%20-27%20-0.5%20-80t-0.5%20-79q0%20-46%201%20-69zM0%20-128l2%2094q15%204%2085%2016t106%2027q7%2012%2012.5%2027t8.5%2033.5t5.5%2032.5t3%2037.5t0.5%2034v35.5v30q0%20982%20-22%201025q-4%208%20-22%2014.5t-44.5%2011t-49.5%207t-48.5%204.5%20t-30.5%203l-4%2083q98%202%20340%2011.5t373%209.5q23%200%2068%20-0.5t68%20-0.5q70%200%20136.5%20-13t128.5%20-42t108%20-71t74%20-104.5t28%20-137.5q0%20-52%20-16.5%20-95.5t-39%20-72t-64.5%20-57.5t-73%20-45t-84%20-40q154%20-35%20256.5%20-134t102.5%20-248q0%20-100%20-35%20-179.5t-93.5%20-130.5t-138%20-85.5t-163.5%20-48.5%20t-176%20-14q-44%200%20-132%203t-132%203q-106%200%20-307%20-11t-231%20-12z"
            ],
            "\uf033": [
                1024.0,
                "M0%20-126l17%2085q22%207%2061.5%2016.5t72%2019t59.5%2023.5q28%2035%2041%20101q1%207%2062%20289t114%20543.5t52%20296.5v25q-24%2013%20-54.5%2018.5t-69.5%208t-58%205.5l19%20103q33%20-2%20120%20-6.5t149.5%20-7t120.5%20-2.5q48%200%2098.5%202.5t121%207t98.5%206.5q-5%20-39%20-19%20-89q-30%20-10%20-101.5%20-28.5t-108.5%20-33.5%20q-8%20-19%20-14%20-42.5t-9%20-40t-7.5%20-45.5t-6.5%20-42q-27%20-148%20-87.5%20-419.5t-77.5%20-355.5q-2%20-9%20-13%20-58t-20%20-90t-16%20-83.5t-6%20-57.5l1%20-18q17%20-4%20185%20-31q-3%20-44%20-16%20-99q-11%200%20-32.5%20-1.5t-32.5%20-1.5q-29%200%20-87%2010t-86%2010q-138%202%20-206%202q-51%200%20-143%20-9t-121%20-11z"
            ],
            "\uf034": [
                1792.0,
                "M1744%20128q33%200%2042%20-18.5t-11%20-44.5l-126%20-162q-20%20-26%20-49%20-26t-49%2026l-126%20162q-20%2026%20-11%2044.5t42%2018.5h80v1024h-80q-33%200%20-42%2018.5t11%2044.5l126%20162q20%2026%2049%2026t49%20-26l126%20-162q20%20-26%2011%20-44.5t-42%20-18.5h-80v-1024h80zM81%201407l54%20-27q12%20-5%20211%20-5q44%200%20132%202%20t132%202q36%200%20107.5%20-0.5t107.5%20-0.5h293q6%200%2021%20-0.5t20.5%200t16%203t17.5%209t15%2017.5l42%201q4%200%2014%20-0.5t14%20-0.5q2%20-112%202%20-336q0%20-80%20-5%20-109q-39%20-14%20-68%20-18q-25%2044%20-54%20128q-3%209%20-11%2048t-14.5%2073.5t-7.5%2035.5q-6%208%20-12%2012.5t-15.5%206t-13%202.5t-18%200.5t-16.5%20-0.5%20q-17%200%20-66.5%200.5t-74.5%200.5t-64%20-2t-71%20-6q-9%20-81%20-8%20-136q0%20-94%202%20-388t2%20-455q0%20-16%20-2.5%20-71.5t0%20-91.5t12.5%20-69q40%20-21%20124%20-42.5t120%20-37.5q5%20-40%205%20-50q0%20-14%20-3%20-29l-34%20-1q-76%20-2%20-218%208t-207%2010q-50%200%20-151%20-9t-152%20-9q-3%2051%20-3%2052v9q17%2027%2061.5%2043t98.5%2029t78%2027%20q19%2042%2019%20383q0%20101%20-3%20303t-3%20303v117q0%202%200.5%2015.5t0.5%2025t-1%2025.5t-3%2024t-5%2014q-11%2012%20-162%2012q-33%200%20-93%20-12t-80%20-26q-19%20-13%20-34%20-72.5t-31.5%20-111t-42.5%20-53.5q-42%2026%20-56%2044v383z"
            ],
            "\uf035": [
                1536.0,
                "M81%201407l54%20-27q12%20-5%20211%20-5q44%200%20132%202t132%202q70%200%20246.5%201t304.5%200.5t247%20-4.5q33%20-1%2056%2031l42%201q4%200%2014%20-0.5t14%20-0.5q2%20-112%202%20-336q0%20-80%20-5%20-109q-39%20-14%20-68%20-18q-25%2044%20-54%20128q-3%209%20-11%2047.5t-15%2073.5t-7%2036q-10%2013%20-27%2019q-5%202%20-66%202q-30%200%20-93%201t-103%201%20t-94%20-2t-96%20-7q-9%20-81%20-8%20-136l1%20-152v52q0%20-55%201%20-154t1.5%20-180t0.5%20-153q0%20-16%20-2.5%20-71.5t0%20-91.5t12.5%20-69q40%20-21%20124%20-42.5t120%20-37.5q5%20-40%205%20-50q0%20-14%20-3%20-29l-34%20-1q-76%20-2%20-218%208t-207%2010q-50%200%20-151%20-9t-152%20-9q-3%2051%20-3%2052v9q17%2027%2061.5%2043t98.5%2029t78%2027%20q7%2016%2011.5%2074t6%20145.5t1.5%20155t-0.5%20153.5t-0.5%2089q0%207%20-2.5%2021.5t-2.5%2022.5q0%207%200.5%2044t1%2073t0%2076.5t-3%2067.5t-6.5%2032q-11%2012%20-162%2012q-41%200%20-163%20-13.5t-138%20-24.5q-19%20-12%20-34%20-71.5t-31.5%20-111.5t-42.5%20-54q-42%2026%20-56%2044v383zM1310%20125q12%200%2042%20-19.5t57.5%20-41.5%20t59.5%20-49t36%20-30q26%20-21%2026%20-49t-26%20-49q-4%20-3%20-36%20-30t-59.5%20-49t-57.5%20-41.5t-42%20-19.5q-13%200%20-20.5%2010.5t-10%2028.5t-2.5%2033.5t1.5%2033t1.5%2019.5h-1024q0%20-2%201.5%20-19.5t1.5%20-33t-2.5%20-33.5t-10%20-28.5t-20.5%20-10.5q-12%200%20-42%2019.5t-57.5%2041.5t-59.5%2049t-36%2030q-26%2021%20-26%2049%20t26%2049q4%203%2036%2030t59.5%2049t57.5%2041.5t42%2019.5q13%200%2020.5%20-10.5t10%20-28.5t2.5%20-33.5t-1.5%20-33t-1.5%20-19.5h1024q0%202%20-1.5%2019.5t-1.5%2033t2.5%2033.5t10%2028.5t20.5%2010.5z"
            ],
            "\uf036": [
                1792.0,
                "M1792%20192v-128q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1408%20576v-128q0%20-26%20-19%20-45t-45%20-19h-1280q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1280q26%200%2045%20-19t19%20-45zM1664%20960v-128q0%20-26%20-19%20-45%20t-45%20-19h-1536q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1536q26%200%2045%20-19t19%20-45zM1280%201344v-128q0%20-26%20-19%20-45t-45%20-19h-1152q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1152q26%200%2045%20-19t19%20-45z"
            ],
            "\uf037": [
                1792.0,
                "M1792%20192v-128q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1408%20576v-128q0%20-26%20-19%20-45t-45%20-19h-896q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h896q26%200%2045%20-19t19%20-45zM1664%20960v-128q0%20-26%20-19%20-45t-45%20-19%20h-1408q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45zM1280%201344v-128q0%20-26%20-19%20-45t-45%20-19h-640q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h640q26%200%2045%20-19t19%20-45z"
            ],
            "\uf038": [
                1792.0,
                "M1792%20192v-128q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1792%20576v-128q0%20-26%20-19%20-45t-45%20-19h-1280q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1280q26%200%2045%20-19t19%20-45zM1792%20960v-128q0%20-26%20-19%20-45%20t-45%20-19h-1536q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1536q26%200%2045%20-19t19%20-45zM1792%201344v-128q0%20-26%20-19%20-45t-45%20-19h-1152q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1152q26%200%2045%20-19t19%20-45z"
            ],
            "\uf039": [
                1792.0,
                "M1792%20192v-128q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1792%20576v-128q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1792%20960v-128q0%20-26%20-19%20-45%20t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1792%201344v-128q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45z"
            ],
            "\uf03a": [
                1792.0,
                "M256%20224v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-192q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h192q13%200%2022.5%20-9.5t9.5%20-22.5zM256%20608v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-192q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h192q13%200%2022.5%20-9.5%20t9.5%20-22.5zM256%20992v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-192q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h192q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%20224v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1344q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1344%20q13%200%2022.5%20-9.5t9.5%20-22.5zM256%201376v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-192q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h192q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%20608v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1344q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5%20t22.5%209.5h1344q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%20992v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1344q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1344q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%201376v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1344q-13%200%20-22.5%209.5t-9.5%2022.5v192%20q0%2013%209.5%2022.5t22.5%209.5h1344q13%200%2022.5%20-9.5t9.5%20-22.5z"
            ],
            "\uf03b": [
                1792.0,
                "M384%20992v-576q0%20-13%20-9.5%20-22.5t-22.5%20-9.5q-14%200%20-23%209l-288%20288q-9%209%20-9%2023t9%2023l288%20288q9%209%2023%209q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%20224v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1728q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1728q13%200%2022.5%20-9.5%20t9.5%20-22.5zM1792%20608v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1088q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1088q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%20992v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1088q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1088%20q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%201376v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1728q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1728q13%200%2022.5%20-9.5t9.5%20-22.5z"
            ],
            "\uf03c": [
                1792.0,
                "M352%20704q0%20-14%20-9%20-23l-288%20-288q-9%20-9%20-23%20-9q-13%200%20-22.5%209.5t-9.5%2022.5v576q0%2013%209.5%2022.5t22.5%209.5q14%200%2023%20-9l288%20-288q9%20-9%209%20-23zM1792%20224v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1728q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1728q13%200%2022.5%20-9.5%20t9.5%20-22.5zM1792%20608v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1088q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1088q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%20992v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1088q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1088%20q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%201376v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1728q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1728q13%200%2022.5%20-9.5t9.5%20-22.5z"
            ],
            "\uf03d": [
                1792.0,
                "M1792%201184v-1088q0%20-42%20-39%20-59q-13%20-5%20-25%20-5q-27%200%20-45%2019l-403%20403v-166q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-704q-119%200%20-203.5%2084.5t-84.5%20203.5v704q0%20119%2084.5%20203.5t203.5%2084.5h704q119%200%20203.5%20-84.5t84.5%20-203.5v-165l403%20402q18%2019%2045%2019q12%200%2025%20-5%20q39%20-17%2039%20-59z"
            ],
            "\uf03e": [
                1920.0,
                "M640%20960q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM1664%20576v-448h-1408v192l320%20320l160%20-160l512%20512zM1760%201280h-1600q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-1216q0%20-13%209.5%20-22.5t22.5%20-9.5h1600q13%200%2022.5%209.5t9.5%2022.5v1216%20q0%2013%20-9.5%2022.5t-22.5%209.5zM1920%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1600q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1600q66%200%20113%20-47t47%20-113z"
            ],
            "\uf040": [
                1536.0,
                "M363%200l91%2091l-235%20235l-91%20-91v-107h128v-128h107zM886%20928q0%2022%20-22%2022q-10%200%20-17%20-7l-542%20-542q-7%20-7%20-7%20-17q0%20-22%2022%20-22q10%200%2017%207l542%20542q7%207%207%2017zM832%201120l416%20-416l-832%20-832h-416v416zM1515%201024q0%20-53%20-37%20-90l-166%20-166l-416%20416l166%20165q36%2038%2090%2038%20q53%200%2091%20-38l235%20-234q37%20-39%2037%20-91z"
            ],
            "\uf041": [
                1024.0,
                "M768%20896q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181t75%20-181t181%20-75t181%2075t75%20181zM1024%20896q0%20-109%20-33%20-179l-364%20-774q-16%20-33%20-47.5%20-52t-67.5%20-19t-67.5%2019t-46.5%2052l-365%20774q-33%2070%20-33%20179q0%20212%20150%20362t362%20150t362%20-150t150%20-362z"
            ],
            "\uf042": [
                1536.0,
                "M768%2096v1088q-148%200%20-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf043": [
                1024.0,
                "M512%20384q0%2036%20-20%2069q-1%201%20-15.5%2022.5t-25.5%2038t-25%2044t-21%2050.5q-4%2016%20-21%2016t-21%20-16q-7%20-23%20-21%20-50.5t-25%20-44t-25.5%20-38t-15.5%20-22.5q-20%20-33%20-20%20-69q0%20-53%2037.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1024%20512q0%20-212%20-150%20-362t-362%20-150t-362%20150t-150%20362%20q0%20145%2081%20275q6%209%2062.5%2090.5t101%20151t99.5%20178t83%20201.5q9%2030%2034%2047t51%2017t51.5%20-17t33.5%20-47q28%20-93%2083%20-201.5t99.5%20-178t101%20-151t62.5%20-90.5q81%20-127%2081%20-275z"
            ],
            "\uf044": [
                1792.0,
                "M888%20352l116%20116l-152%20152l-116%20-116v-56h96v-96h56zM1328%201072q-16%2016%20-33%20-1l-350%20-350q-17%20-17%20-1%20-33t33%201l350%20350q17%2017%201%2033zM1408%20478v-190q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-832q-119%200%20-203.5%2084.5t-84.5%20203.5v832q0%20119%2084.5%20203.5t203.5%2084.5h832%20q63%200%20117%20-25q15%20-7%2018%20-23q3%20-17%20-9%20-29l-49%20-49q-14%20-14%20-32%20-8q-23%206%20-45%206h-832q-66%200%20-113%20-47t-47%20-113v-832q0%20-66%2047%20-113t113%20-47h832q66%200%20113%2047t47%20113v126q0%2013%209%2022l64%2064q15%2015%2035%207t20%20-29zM1312%201216l288%20-288l-672%20-672h-288v288zM1756%201084l-92%20-92%20l-288%20288l92%2092q28%2028%2068%2028t68%20-28l152%20-152q28%20-28%2028%20-68t-28%20-68z"
            ],
            "\uf045": [
                1664.0,
                "M1408%20547v-259q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-832q-119%200%20-203.5%2084.5t-84.5%20203.5v832q0%20119%2084.5%20203.5t203.5%2084.5h255v0q13%200%2022.5%20-9.5t9.5%20-22.5q0%20-27%20-26%20-32q-77%20-26%20-133%20-60q-10%20-4%20-16%20-4h-112q-66%200%20-113%20-47t-47%20-113v-832q0%20-66%2047%20-113t113%20-47h832%20q66%200%20113%2047t47%20113v214q0%2019%2018%2029q28%2013%2054%2037q16%2016%2035%208q21%20-9%2021%20-29zM1645%201043l-384%20-384q-18%20-19%20-45%20-19q-12%200%20-25%205q-39%2017%20-39%2059v192h-160q-323%200%20-438%20-131q-119%20-137%20-74%20-473q3%20-23%20-20%20-34q-8%20-2%20-12%20-2q-16%200%20-26%2013q-10%2014%20-21%2031t-39.5%2068.5t-49.5%2099.5%20t-38.5%20114t-17.5%20122q0%2049%203.5%2091t14%2090t28%2088t47%2081.5t68.5%2074t94.5%2061.5t124.5%2048.5t159.5%2030.5t196.5%2011h160v192q0%2042%2039%2059q13%205%2025%205q26%200%2045%20-19l384%20-384q19%20-19%2019%20-45t-19%20-45z"
            ],
            "\uf046": [
                1664.0,
                "M1408%20606v-318q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-832q-119%200%20-203.5%2084.5t-84.5%20203.5v832q0%20119%2084.5%20203.5t203.5%2084.5h832q63%200%20117%20-25q15%20-7%2018%20-23q3%20-17%20-9%20-29l-49%20-49q-10%20-10%20-23%20-10q-3%200%20-9%202q-23%206%20-45%206h-832q-66%200%20-113%20-47t-47%20-113v-832%20q0%20-66%2047%20-113t113%20-47h832q66%200%20113%2047t47%20113v254q0%2013%209%2022l64%2064q10%2010%2023%2010q6%200%2012%20-3q20%20-8%2020%20-29zM1639%201095l-814%20-814q-24%20-24%20-57%20-24t-57%2024l-430%20430q-24%2024%20-24%2057t24%2057l110%20110q24%2024%2057%2024t57%20-24l263%20-263l647%20647q24%2024%2057%2024t57%20-24l110%20-110%20q24%20-24%2024%20-57t-24%20-57z"
            ],
            "\uf047": [
                1792.0,
                "M1792%20640q0%20-26%20-19%20-45l-256%20-256q-19%20-19%20-45%20-19t-45%2019t-19%2045v128h-384v-384h128q26%200%2045%20-19t19%20-45t-19%20-45l-256%20-256q-19%20-19%20-45%20-19t-45%2019l-256%20256q-19%2019%20-19%2045t19%2045t45%2019h128v384h-384v-128q0%20-26%20-19%20-45t-45%20-19t-45%2019l-256%20256q-19%2019%20-19%2045%20t19%2045l256%20256q19%2019%2045%2019t45%20-19t19%20-45v-128h384v384h-128q-26%200%20-45%2019t-19%2045t19%2045l256%20256q19%2019%2045%2019t45%20-19l256%20-256q19%20-19%2019%20-45t-19%20-45t-45%20-19h-128v-384h384v128q0%2026%2019%2045t45%2019t45%20-19l256%20-256q19%20-19%2019%20-45z"
            ],
            "\uf048": [
                1024.0,
                "M979%201395q19%2019%2032%2013t13%20-32v-1472q0%20-26%20-13%20-32t-32%2013l-710%20710q-9%209%20-13%2019v-678q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v1408q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-678q4%2010%2013%2019z"
            ],
            "\uf049": [
                1792.0,
                "M1747%201395q19%2019%2032%2013t13%20-32v-1472q0%20-26%20-13%20-32t-32%2013l-710%20710q-9%209%20-13%2019v-710q0%20-26%20-13%20-32t-32%2013l-710%20710q-9%209%20-13%2019v-678q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v1408q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-678q4%2010%2013%2019l710%20710%20q19%2019%2032%2013t13%20-32v-710q4%2010%2013%2019z"
            ],
            "\uf04a": [
                1664.0,
                "M1619%201395q19%2019%2032%2013t13%20-32v-1472q0%20-26%20-13%20-32t-32%2013l-710%20710q-9%209%20-13%2019v-710q0%20-26%20-13%20-32t-32%2013l-710%20710q-19%2019%20-19%2045t19%2045l710%20710q19%2019%2032%2013t13%20-32v-710q4%2010%2013%2019z"
            ],
            "\uf04b": [
                1408.0,
                "M1384%20609l-1328%20-738q-23%20-13%20-39.5%20-3t-16.5%2036v1472q0%2026%2016.5%2036t39.5%20-3l1328%20-738q23%20-13%2023%20-31t-23%20-31z"
            ],
            "\uf04c": [
                1536.0,
                "M1536%201344v-1408q0%20-26%20-19%20-45t-45%20-19h-512q-26%200%20-45%2019t-19%2045v1408q0%2026%2019%2045t45%2019h512q26%200%2045%20-19t19%20-45zM640%201344v-1408q0%20-26%20-19%20-45t-45%20-19h-512q-26%200%20-45%2019t-19%2045v1408q0%2026%2019%2045t45%2019h512q26%200%2045%20-19t19%20-45z"
            ],
            "\uf04d": [
                1536.0,
                "M1536%201344v-1408q0%20-26%20-19%20-45t-45%20-19h-1408q-26%200%20-45%2019t-19%2045v1408q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45z"
            ],
            "\uf04e": [
                1664.0,
                "M45%20-115q-19%20-19%20-32%20-13t-13%2032v1472q0%2026%2013%2032t32%20-13l710%20-710q9%20-9%2013%20-19v710q0%2026%2013%2032t32%20-13l710%20-710q19%20-19%2019%20-45t-19%20-45l-710%20-710q-19%20-19%20-32%20-13t-13%2032v710q-4%20-10%20-13%20-19z"
            ],
            "\uf050": [
                1792.0,
                "M45%20-115q-19%20-19%20-32%20-13t-13%2032v1472q0%2026%2013%2032t32%20-13l710%20-710q9%20-9%2013%20-19v710q0%2026%2013%2032t32%20-13l710%20-710q9%20-9%2013%20-19v678q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-1408q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v678q-4%20-10%20-13%20-19l-710%20-710%20q-19%20-19%20-32%20-13t-13%2032v710q-4%20-10%20-13%20-19z"
            ],
            "\uf051": [
                1024.0,
                "M45%20-115q-19%20-19%20-32%20-13t-13%2032v1472q0%2026%2013%2032t32%20-13l710%20-710q9%20-9%2013%20-19v678q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-1408q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v678q-4%20-10%20-13%20-19z"
            ],
            "\uf052": [
                1538.0,
                "M14%20557l710%20710q19%2019%2045%2019t45%20-19l710%20-710q19%20-19%2013%20-32t-32%20-13h-1472q-26%200%20-32%2013t13%2032zM1473%200h-1408q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45v-256q0%20-26%20-19%20-45t-45%20-19z"
            ],
            "\uf053": [
                1280.0,
                "M1171%201235l-531%20-531l531%20-531q19%20-19%2019%20-45t-19%20-45l-166%20-166q-19%20-19%20-45%20-19t-45%2019l-742%20742q-19%2019%20-19%2045t19%2045l742%20742q19%2019%2045%2019t45%20-19l166%20-166q19%20-19%2019%20-45t-19%20-45z"
            ],
            "\uf054": [
                1280.0,
                "M1107%20659l-742%20-742q-19%20-19%20-45%20-19t-45%2019l-166%20166q-19%2019%20-19%2045t19%2045l531%20531l-531%20531q-19%2019%20-19%2045t19%2045l166%20166q19%2019%2045%2019t45%20-19l742%20-742q19%20-19%2019%20-45t-19%20-45z"
            ],
            "\uf055": [
                1536.0,
                "M1216%20576v128q0%2026%20-19%2045t-45%2019h-256v256q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-256h-256q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h256v-256q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045v256h256q26%200%2045%2019t19%2045zM1536%20640q0%20-209%20-103%20-385.5%20t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf056": [
                1536.0,
                "M1216%20576v128q0%2026%20-19%2045t-45%2019h-768q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h768q26%200%2045%2019t19%2045zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5%20t103%20-385.5z"
            ],
            "\uf057": [
                1536.0,
                "M1149%20414q0%2026%20-19%2045l-181%20181l181%20181q19%2019%2019%2045q0%2027%20-19%2046l-90%2090q-19%2019%20-46%2019q-26%200%20-45%20-19l-181%20-181l-181%20181q-19%2019%20-45%2019q-27%200%20-46%20-19l-90%20-90q-19%20-19%20-19%20-46q0%20-26%2019%20-45l181%20-181l-181%20-181q-19%20-19%20-19%20-45q0%20-27%2019%20-46l90%20-90q19%20-19%2046%20-19%20q26%200%2045%2019l181%20181l181%20-181q19%20-19%2045%20-19q27%200%2046%2019l90%2090q19%2019%2019%2046zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf058": [
                1536.0,
                "M1284%20802q0%2028%20-18%2046l-91%2090q-19%2019%20-45%2019t-45%20-19l-408%20-407l-226%20226q-19%2019%20-45%2019t-45%20-19l-91%20-90q-18%20-18%20-18%20-46q0%20-27%2018%20-45l362%20-362q19%20-19%2045%20-19q27%200%2046%2019l543%20543q18%2018%2018%2045zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103%20t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf059": [
                1536.0,
                "M896%20160v192q0%2014%20-9%2023t-23%209h-192q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h192q14%200%2023%209t9%2023zM1152%20832q0%2088%20-55.5%20163t-138.5%20116t-170%2041q-243%200%20-371%20-213q-15%20-24%208%20-42l132%20-100q7%20-6%2019%20-6q16%200%2025%2012q53%2068%2086%2092q34%2024%2086%2024q48%200%2085.5%20-26t37.5%20-59%20q0%20-38%20-20%20-61t-68%20-45q-63%20-28%20-115.5%20-86.5t-52.5%20-125.5v-36q0%20-14%209%20-23t23%20-9h192q14%200%2023%209t9%2023q0%2019%2021.5%2049.5t54.5%2049.5q32%2018%2049%2028.5t46%2035t44.5%2048t28%2060.5t12.5%2081zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5%20t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf05a": [
                1536.0,
                "M1024%20160v160q0%2014%20-9%2023t-23%209h-96v512q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-160q0%20-14%209%20-23t23%20-9h96v-320h-96q-14%200%20-23%20-9t-9%20-23v-160q0%20-14%209%20-23t23%20-9h448q14%200%2023%209t9%2023zM896%201056v160q0%2014%20-9%2023t-23%209h-192q-14%200%20-23%20-9t-9%20-23v-160q0%20-14%209%20-23%20t23%20-9h192q14%200%2023%209t9%2023zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf05b": [
                1536.0,
                "M1197%20512h-109q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h109q-32%20108%20-112.5%20188.5t-188.5%20112.5v-109q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v109q-108%20-32%20-188.5%20-112.5t-112.5%20-188.5h109q26%200%2045%20-19t19%20-45v-128q0%20-26%20-19%20-45t-45%20-19h-109%20q32%20-108%20112.5%20-188.5t188.5%20-112.5v109q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-109q108%2032%20188.5%20112.5t112.5%20188.5zM1536%20704v-128q0%20-26%20-19%20-45t-45%20-19h-143q-37%20-161%20-154.5%20-278.5t-278.5%20-154.5v-143q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v143%20q-161%2037%20-278.5%20154.5t-154.5%20278.5h-143q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h143q37%20161%20154.5%20278.5t278.5%20154.5v143q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-143q161%20-37%20278.5%20-154.5t154.5%20-278.5h143q26%200%2045%20-19t19%20-45z"
            ],
            "\uf05c": [
                1536.0,
                "M1097%20457l-146%20-146q-10%20-10%20-23%20-10t-23%2010l-137%20137l-137%20-137q-10%20-10%20-23%20-10t-23%2010l-146%20146q-10%2010%20-10%2023t10%2023l137%20137l-137%20137q-10%2010%20-10%2023t10%2023l146%20146q10%2010%2023%2010t23%20-10l137%20-137l137%20137q10%2010%2023%2010t23%20-10l146%20-146q10%20-10%2010%20-23t-10%20-23%20l-137%20-137l137%20-137q10%20-10%2010%20-23t-10%20-23zM1312%20640q0%20148%20-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5%20t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf05d": [
                1536.0,
                "M1171%20723l-422%20-422q-19%20-19%20-45%20-19t-45%2019l-294%20294q-19%2019%20-19%2045t19%2045l102%20102q19%2019%2045%2019t45%20-19l147%20-147l275%20275q19%2019%2045%2019t45%20-19l102%20-102q19%20-19%2019%20-45t-19%20-45zM1312%20640q0%20148%20-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198%20t273%20-73t273%2073t198%20198t73%20273zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf05e": [
                1536.0,
                "M1312%20643q0%20161%20-87%20295l-754%20-753q137%20-89%20297%20-89q111%200%20211.5%2043.5t173.5%20116.5t116%20174.5t43%20212.5zM313%20344l755%20754q-135%2091%20-300%2091q-148%200%20-273%20-73t-198%20-199t-73%20-274q0%20-162%2089%20-299zM1536%20643q0%20-157%20-61%20-300t-163.5%20-246t-245%20-164t-298.5%20-61t-298.5%2061%20t-245%20164t-163.5%20246t-61%20300t61%20299.5t163.5%20245.5t245%20164t298.5%2061t298.5%20-61t245%20-164t163.5%20-245.5t61%20-299.5z"
            ],
            "\uf060": [
                1536.0,
                "M1536%20640v-128q0%20-53%20-32.5%20-90.5t-84.5%20-37.5h-704l293%20-294q38%20-36%2038%20-90t-38%20-90l-75%20-76q-37%20-37%20-90%20-37q-52%200%20-91%2037l-651%20652q-37%2037%20-37%2090q0%2052%2037%2091l651%20650q38%2038%2091%2038q52%200%2090%20-38l75%20-74q38%20-38%2038%20-91t-38%20-91l-293%20-293h704q52%200%2084.5%20-37.5%20t32.5%20-90.5z"
            ],
            "\uf061": [
                1536.0,
                "M1472%20576q0%20-54%20-37%20-91l-651%20-651q-39%20-37%20-91%20-37q-51%200%20-90%2037l-75%2075q-38%2038%20-38%2091t38%2091l293%20293h-704q-52%200%20-84.5%2037.5t-32.5%2090.5v128q0%2053%2032.5%2090.5t84.5%2037.5h704l-293%20294q-38%2036%20-38%2090t38%2090l75%2075q38%2038%2090%2038q53%200%2091%20-38l651%20-651q37%20-35%2037%20-90z"
            ],
            "\uf062": [
                1664.0,
                "M1611%20565q0%20-51%20-37%20-90l-75%20-75q-38%20-38%20-91%20-38q-54%200%20-90%2038l-294%20293v-704q0%20-52%20-37.5%20-84.5t-90.5%20-32.5h-128q-53%200%20-90.5%2032.5t-37.5%2084.5v704l-294%20-293q-36%20-38%20-90%20-38t-90%2038l-75%2075q-38%2038%20-38%2090q0%2053%2038%2091l651%20651q35%2037%2090%2037q54%200%2091%20-37l651%20-651%20q37%20-39%2037%20-91z"
            ],
            "\uf063": [
                1664.0,
                "M1611%20704q0%20-53%20-37%20-90l-651%20-652q-39%20-37%20-91%20-37q-53%200%20-90%2037l-651%20652q-38%2036%20-38%2090q0%2053%2038%2091l74%2075q39%2037%2091%2037q53%200%2090%20-37l294%20-294v704q0%2052%2038%2090t90%2038h128q52%200%2090%20-38t38%20-90v-704l294%20294q37%2037%2090%2037q52%200%2091%20-37l75%20-75q37%20-39%2037%20-91z"
            ],
            "\uf064": [
                1792.0,
                "M1792%20896q0%20-26%20-19%20-45l-512%20-512q-19%20-19%20-45%20-19t-45%2019t-19%2045v256h-224q-98%200%20-175.5%20-6t-154%20-21.5t-133%20-42.5t-105.5%20-69.5t-80%20-101t-48.5%20-138.5t-17.5%20-181q0%20-55%205%20-123q0%20-6%202.5%20-23.5t2.5%20-26.5q0%20-15%20-8.5%20-25t-23.5%20-10q-16%200%20-28%2017q-7%209%20-13%2022%20t-13.5%2030t-10.5%2024q-127%20285%20-127%20451q0%20199%2053%20333q162%20403%20875%20403h224v256q0%2026%2019%2045t45%2019t45%20-19l512%20-512q19%20-19%2019%20-45z"
            ],
            "\uf065": [
                1536.0,
                "M755%20480q0%20-13%20-10%20-23l-332%20-332l144%20-144q19%20-19%2019%20-45t-19%20-45t-45%20-19h-448q-26%200%20-45%2019t-19%2045v448q0%2026%2019%2045t45%2019t45%20-19l144%20-144l332%20332q10%2010%2023%2010t23%20-10l114%20-114q10%20-10%2010%20-23zM1536%201344v-448q0%20-26%20-19%20-45t-45%20-19t-45%2019l-144%20144l-332%20-332%20q-10%20-10%20-23%20-10t-23%2010l-114%20114q-10%2010%20-10%2023t10%2023l332%20332l-144%20144q-19%2019%20-19%2045t19%2045t45%2019h448q26%200%2045%20-19t19%20-45z"
            ],
            "\uf066": [
                1536.0,
                "M768%20576v-448q0%20-26%20-19%20-45t-45%20-19t-45%2019l-144%20144l-332%20-332q-10%20-10%20-23%20-10t-23%2010l-114%20114q-10%2010%20-10%2023t10%2023l332%20332l-144%20144q-19%2019%20-19%2045t19%2045t45%2019h448q26%200%2045%20-19t19%20-45zM1523%201248q0%20-13%20-10%20-23l-332%20-332l144%20-144q19%20-19%2019%20-45t-19%20-45%20t-45%20-19h-448q-26%200%20-45%2019t-19%2045v448q0%2026%2019%2045t45%2019t45%20-19l144%20-144l332%20332q10%2010%2023%2010t23%20-10l114%20-114q10%20-10%2010%20-23z"
            ],
            "\uf067": [
                1408.0,
                "M1408%20800v-192q0%20-40%20-28%20-68t-68%20-28h-416v-416q0%20-40%20-28%20-68t-68%20-28h-192q-40%200%20-68%2028t-28%2068v416h-416q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h416v416q0%2040%2028%2068t68%2028h192q40%200%2068%20-28t28%20-68v-416h416q40%200%2068%20-28t28%20-68z"
            ],
            "\uf068": [
                1408.0,
                "M1408%20800v-192q0%20-40%20-28%20-68t-68%20-28h-1216q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h1216q40%200%2068%20-28t28%20-68z"
            ],
            "\uf069": [
                1664.0,
                "M1482%20486q46%20-26%2059.5%20-77.5t-12.5%20-97.5l-64%20-110q-26%20-46%20-77.5%20-59.5t-97.5%2012.5l-266%20153v-307q0%20-52%20-38%20-90t-90%20-38h-128q-52%200%20-90%2038t-38%2090v307l-266%20-153q-46%20-26%20-97.5%20-12.5t-77.5%2059.5l-64%20110q-26%2046%20-12.5%2097.5t59.5%2077.5l266%20154l-266%20154%20q-46%2026%20-59.5%2077.5t12.5%2097.5l64%20110q26%2046%2077.5%2059.5t97.5%20-12.5l266%20-153v307q0%2052%2038%2090t90%2038h128q52%200%2090%20-38t38%20-90v-307l266%20153q46%2026%2097.5%2012.5t77.5%20-59.5l64%20-110q26%20-46%2012.5%20-97.5t-59.5%20-77.5l-266%20-154z"
            ],
            "\uf06a": [
                1536.0,
                "M768%201408q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5t-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103zM896%20161v190q0%2014%20-9%2023.5t-22%209.5h-192q-13%200%20-23%20-10t-10%20-23v-190q0%20-13%2010%20-23t23%20-10h192%20q13%200%2022%209.5t9%2023.5zM894%20505l18%20621q0%2012%20-10%2018q-10%208%20-24%208h-220q-14%200%20-24%20-8q-10%20-6%20-10%20-18l17%20-621q0%20-10%2010%20-17.5t24%20-7.5h185q14%200%2023.5%207.5t10.5%2017.5z"
            ],
            "\uf06b": [
                1536.0,
                "M928%20180v56v468v192h-320v-192v-468v-56q0%20-25%2018%20-38.5t46%20-13.5h192q28%200%2046%2013.5t18%2038.5zM472%201024h195l-126%20161q-26%2031%20-69%2031q-40%200%20-68%20-28t-28%20-68t28%20-68t68%20-28zM1160%201120q0%2040%20-28%2068t-68%2028q-43%200%20-69%20-31l-125%20-161h194q40%200%2068%2028t28%2068zM1536%20864v-320%20q0%20-14%20-9%20-23t-23%20-9h-96v-416q0%20-40%20-28%20-68t-68%20-28h-1088q-40%200%20-68%2028t-28%2068v416h-96q-14%200%20-23%209t-9%2023v320q0%2014%209%2023t23%209h440q-93%200%20-158.5%2065.5t-65.5%20158.5t65.5%20158.5t158.5%2065.5q107%200%20168%20-77l128%20-165l128%20165q61%2077%20168%2077q93%200%20158.5%20-65.5t65.5%20-158.5%20t-65.5%20-158.5t-158.5%20-65.5h440q14%200%2023%20-9t9%20-23z"
            ],
            "\uf06c": [
                1792.0,
                "M1280%20832q0%2026%20-19%2045t-45%2019q-172%200%20-318%20-49.5t-259.5%20-134t-235.5%20-219.5q-19%20-21%20-19%20-45q0%20-26%2019%20-45t45%20-19q24%200%2045%2019q27%2024%2074%2071t67%2066q137%20124%20268.5%20176t313.5%2052q26%200%2045%2019t19%2045zM1792%201030q0%20-95%20-20%20-193q-46%20-224%20-184.5%20-383t-357.5%20-268%20q-214%20-108%20-438%20-108q-148%200%20-286%2047q-15%205%20-88%2042t-96%2037q-16%200%20-39.5%20-32t-45%20-70t-52.5%20-70t-60%20-32q-43%200%20-63.5%2017.5t-45.5%2059.5q-2%204%20-6%2011t-5.5%2010t-3%209.5t-1.5%2013.5q0%2035%2031%2073.5t68%2065.5t68%2056t31%2048q0%204%20-14%2038t-16%2044q-9%2051%20-9%20104q0%20115%2043.5%20220t119%20184.5%20t170.5%20139t204%2095.5q55%2018%20145%2025.5t179.5%209t178.5%206t163.5%2024t113.5%2056.5l29.5%2029.5t29.5%2028t27%2020t36.5%2016t43.5%204.5q39%200%2070.5%20-46t47.5%20-112t24%20-124t8%20-96z"
            ],
            "\uf06d": [
                1408.0,
                "M1408%20-160v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1344q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h1344q13%200%2022.5%20-9.5t9.5%20-22.5zM1152%20896q0%20-78%20-24.5%20-144t-64%20-112.5t-87.5%20-88t-96%20-77.5t-87.5%20-72t-64%20-81.5t-24.5%20-96.5q0%20-96%2067%20-224l-4%201l1%20-1%20q-90%2041%20-160%2083t-138.5%20100t-113.5%20122.5t-72.5%20150.5t-27.5%20184q0%2078%2024.5%20144t64%20112.5t87.5%2088t96%2077.5t87.5%2072t64%2081.5t24.5%2096.5q0%2094%20-66%20224l3%20-1l-1%201q90%20-41%20160%20-83t138.5%20-100t113.5%20-122.5t72.5%20-150.5t27.5%20-184z"
            ],
            "\uf06e": [
                1792.0,
                "M1664%20576q-152%20236%20-381%20353q61%20-104%2061%20-225q0%20-185%20-131.5%20-316.5t-316.5%20-131.5t-316.5%20131.5t-131.5%20316.5q0%20121%2061%20225q-229%20-117%20-381%20-353q133%20-205%20333.5%20-326.5t434.5%20-121.5t434.5%20121.5t333.5%20326.5zM944%20960q0%2020%20-14%2034t-34%2014q-125%200%20-214.5%20-89.5%20t-89.5%20-214.5q0%20-20%2014%20-34t34%20-14t34%2014t14%2034q0%2086%2061%20147t147%2061q20%200%2034%2014t14%2034zM1792%20576q0%20-34%20-20%20-69q-140%20-230%20-376.5%20-368.5t-499.5%20-138.5t-499.5%20139t-376.5%20368q-20%2035%20-20%2069t20%2069q140%20229%20376.5%20368t499.5%20139t499.5%20-139t376.5%20-368q20%20-35%2020%20-69z"
            ],
            "\uf070": [
                1792.0,
                "M555%20201l78%20141q-87%2063%20-136%20159t-49%20203q0%20121%2061%20225q-229%20-117%20-381%20-353q167%20-258%20427%20-375zM944%20960q0%2020%20-14%2034t-34%2014q-125%200%20-214.5%20-89.5t-89.5%20-214.5q0%20-20%2014%20-34t34%20-14t34%2014t14%2034q0%2086%2061%20147t147%2061q20%200%2034%2014t14%2034zM1307%201151q0%20-7%20-1%20-9%20q-106%20-189%20-316%20-567t-315%20-566l-49%20-89q-10%20-16%20-28%20-16q-12%200%20-134%2070q-16%2010%20-16%2028q0%2012%2044%2087q-143%2065%20-263.5%20173t-208.5%20245q-20%2031%20-20%2069t20%2069q153%20235%20380%20371t496%20136q89%200%20180%20-17l54%2097q10%2016%2028%2016q5%200%2018%20-6t31%20-15.5t33%20-18.5t31.5%20-18.5t19.5%20-11.5%20q16%20-10%2016%20-27zM1344%20704q0%20-139%20-79%20-253.5t-209%20-164.5l280%20502q8%20-45%208%20-84zM1792%20576q0%20-35%20-20%20-69q-39%20-64%20-109%20-145q-150%20-172%20-347.5%20-267t-419.5%20-95l74%20132q212%2018%20392.5%20137t301.5%20307q-115%20179%20-282%20294l63%20112q95%20-64%20182.5%20-153t144.5%20-184q20%20-34%2020%20-69z%20"
            ],
            "\uf071": [
                1792.0,
                "M1024%20161v190q0%2014%20-9.5%2023.5t-22.5%209.5h-192q-13%200%20-22.5%20-9.5t-9.5%20-23.5v-190q0%20-14%209.5%20-23.5t22.5%20-9.5h192q13%200%2022.5%209.5t9.5%2023.5zM1022%20535l18%20459q0%2012%20-10%2019q-13%2011%20-24%2011h-220q-11%200%20-24%20-11q-10%20-7%20-10%20-21l17%20-457q0%20-10%2010%20-16.5t24%20-6.5h185%20q14%200%2023.5%206.5t10.5%2016.5zM1008%201469l768%20-1408q35%20-63%20-2%20-126q-17%20-29%20-46.5%20-46t-63.5%20-17h-1536q-34%200%20-63.5%2017t-46.5%2046q-37%2063%20-2%20126l768%201408q17%2031%2047%2049t65%2018t65%20-18t47%20-49z"
            ],
            "\uf072": [
                1408.0,
                "M1376%201376q44%20-52%2012%20-148t-108%20-172l-161%20-161l160%20-696q5%20-19%20-12%20-33l-128%20-96q-7%20-6%20-19%20-6q-4%200%20-7%201q-15%203%20-21%2016l-279%20508l-259%20-259l53%20-194q5%20-17%20-8%20-31l-96%20-96q-9%20-9%20-23%20-9h-2q-15%202%20-24%2013l-189%20252l-252%20189q-11%207%20-13%2023q-1%2013%209%2025l96%2097q9%209%2023%209%20q6%200%208%20-1l194%20-53l259%20259l-508%20279q-14%208%20-17%2024q-2%2016%209%2027l128%20128q14%2013%2030%208l665%20-159l160%20160q76%2076%20172%20108t148%20-12z"
            ],
            "\uf073": [
                1664.0,
                "M128%20-128h288v288h-288v-288zM480%20-128h320v288h-320v-288zM128%20224h288v320h-288v-320zM480%20224h320v320h-320v-320zM128%20608h288v288h-288v-288zM864%20-128h320v288h-320v-288zM480%20608h320v288h-320v-288zM1248%20-128h288v288h-288v-288zM864%20224h320v320h-320v-320z%20M512%201088v288q0%2013%20-9.5%2022.5t-22.5%209.5h-64q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-288q0%20-13%209.5%20-22.5t22.5%20-9.5h64q13%200%2022.5%209.5t9.5%2022.5zM1248%20224h288v320h-288v-320zM864%20608h320v288h-320v-288zM1248%20608h288v288h-288v-288zM1280%201088v288q0%2013%20-9.5%2022.5t-22.5%209.5h-64%20q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-288q0%20-13%209.5%20-22.5t22.5%20-9.5h64q13%200%2022.5%209.5t9.5%2022.5zM1664%201152v-1280q0%20-52%20-38%20-90t-90%20-38h-1408q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h128v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h384v96q0%2066%2047%20113t113%2047%20h64q66%200%20113%20-47t47%20-113v-96h128q52%200%2090%20-38t38%20-90z"
            ],
            "\uf074": [
                1792.0,
                "M666%201055q-60%20-92%20-137%20-273q-22%2045%20-37%2072.5t-40.5%2063.5t-51%2056.5t-63%2035t-81.5%2014.5h-224q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h224q250%200%20410%20-225zM1792%20256q0%20-14%20-9%20-23l-320%20-320q-9%20-9%20-23%20-9q-13%200%20-22.5%209.5t-9.5%2022.5v192q-32%200%20-85%20-0.5t-81%20-1t-73%201%20t-71%205t-64%2010.5t-63%2018.5t-58%2028.5t-59%2040t-55%2053.5t-56%2069.5q59%2093%20136%20273q22%20-45%2037%20-72.5t40.5%20-63.5t51%20-56.5t63%20-35t81.5%20-14.5h256v192q0%2014%209%2023t23%209q12%200%2024%20-10l319%20-319q9%20-9%209%20-23zM1792%201152q0%20-14%20-9%20-23l-320%20-320q-9%20-9%20-23%20-9q-13%200%20-22.5%209.5t-9.5%2022.5%20v192h-256q-48%200%20-87%20-15t-69%20-45t-51%20-61.5t-45%20-77.5q-32%20-62%20-78%20-171q-29%20-66%20-49.5%20-111t-54%20-105t-64%20-100t-74%20-83t-90%20-68.5t-106.5%20-42t-128%20-16.5h-224q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h224q48%200%2087%2015t69%2045t51%2061.5t45%2077.5q32%2062%2078%20171q29%2066%2049.5%20111%20t54%20105t64%20100t74%2083t90%2068.5t106.5%2042t128%2016.5h256v192q0%2014%209%2023t23%209q12%200%2024%20-10l319%20-319q9%20-9%209%20-23z"
            ],
            "\uf075": [
                1792.0,
                "M1792%20640q0%20-174%20-120%20-321.5t-326%20-233t-450%20-85.5q-70%200%20-145%208q-198%20-175%20-460%20-242q-49%20-14%20-114%20-22q-17%20-2%20-30.5%209t-17.5%2029v1q-3%204%20-0.5%2012t2%2010t4.5%209.5l6%209t7%208.5t8%209q7%208%2031%2034.5t34.5%2038t31%2039.5t32.5%2051t27%2059t26%2076q-157%2089%20-247.5%20220t-90.5%20281%20q0%20130%2071%20248.5t191%20204.5t286%20136.5t348%2050.5q244%200%20450%20-85.5t326%20-233t120%20-321.5z"
            ],
            "\uf076": [
                1536.0,
                "M1536%20704v-128q0%20-201%20-98.5%20-362t-274%20-251.5t-395.5%20-90.5t-395.5%2090.5t-274%20251.5t-98.5%20362v128q0%2026%2019%2045t45%2019h384q26%200%2045%20-19t19%20-45v-128q0%20-52%2023.5%20-90t53.5%20-57t71%20-30t64%20-13t44%20-2t44%202t64%2013t71%2030t53.5%2057t23.5%2090v128q0%2026%2019%2045t45%2019h384%20q26%200%2045%20-19t19%20-45zM512%201344v-384q0%20-26%20-19%20-45t-45%20-19h-384q-26%200%20-45%2019t-19%2045v384q0%2026%2019%2045t45%2019h384q26%200%2045%20-19t19%20-45zM1536%201344v-384q0%20-26%20-19%20-45t-45%20-19h-384q-26%200%20-45%2019t-19%2045v384q0%2026%2019%2045t45%2019h384q26%200%2045%20-19t19%20-45z"
            ],
            "\uf077": [
                1792.0,
                "M1683%20205l-166%20-165q-19%20-19%20-45%20-19t-45%2019l-531%20531l-531%20-531q-19%20-19%20-45%20-19t-45%2019l-166%20165q-19%2019%20-19%2045.5t19%2045.5l742%20741q19%2019%2045%2019t45%20-19l742%20-741q19%20-19%2019%20-45.5t-19%20-45.5z"
            ],
            "\uf078": [
                1792.0,
                "M1683%20728l-742%20-741q-19%20-19%20-45%20-19t-45%2019l-742%20741q-19%2019%20-19%2045.5t19%2045.5l166%20165q19%2019%2045%2019t45%20-19l531%20-531l531%20531q19%2019%2045%2019t45%20-19l166%20-165q19%20-19%2019%20-45.5t-19%20-45.5z"
            ],
            "\uf079": [
                1920.0,
                "M1280%2032q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-960q-8%200%20-13.5%202t-9%207t-5.5%208t-3%2011.5t-1%2011.5v13v11v160v416h-192q-26%200%20-45%2019t-19%2045q0%2024%2015%2041l320%20384q19%2022%2049%2022t49%20-22l320%20-384q15%20-17%2015%20-41q0%20-26%20-19%20-45t-45%20-19h-192v-384h576q16%200%2025%20-11l160%20-192q7%20-10%207%20-21%20zM1920%20448q0%20-24%20-15%20-41l-320%20-384q-20%20-23%20-49%20-23t-49%2023l-320%20384q-15%2017%20-15%2041q0%2026%2019%2045t45%2019h192v384h-576q-16%200%20-25%2012l-160%20192q-7%209%20-7%2020q0%2013%209.5%2022.5t22.5%209.5h960q8%200%2013.5%20-2t9%20-7t5.5%20-8t3%20-11.5t1%20-11.5v-13v-11v-160v-416h192q26%200%2045%20-19t19%20-45z%20"
            ],
            "\uf07a": [
                1664.0,
                "M640%200q0%20-52%20-38%20-90t-90%20-38t-90%2038t-38%2090t38%2090t90%2038t90%20-38t38%20-90zM1536%200q0%20-52%20-38%20-90t-90%20-38t-90%2038t-38%2090t38%2090t90%2038t90%20-38t38%20-90zM1664%201088v-512q0%20-24%20-16.5%20-42.5t-40.5%20-21.5l-1044%20-122q13%20-60%2013%20-70q0%20-16%20-24%20-64h920q26%200%2045%20-19t19%20-45%20t-19%20-45t-45%20-19h-1024q-26%200%20-45%2019t-19%2045q0%2011%208%2031.5t16%2036t21.5%2040t15.5%2029.5l-177%20823h-204q-26%200%20-45%2019t-19%2045t19%2045t45%2019h256q16%200%2028.5%20-6.5t19.5%20-15.5t13%20-24.5t8%20-26t5.5%20-29.5t4.5%20-26h1201q26%200%2045%20-19t19%20-45z"
            ],
            "\uf07b": [
                1664.0,
                "M1664%20928v-704q0%20-92%20-66%20-158t-158%20-66h-1216q-92%200%20-158%2066t-66%20158v960q0%2092%2066%20158t158%2066h320q92%200%20158%20-66t66%20-158v-32h672q92%200%20158%20-66t66%20-158z"
            ],
            "\uf07c": [
                1920.0,
                "M1879%20584q0%20-31%20-31%20-66l-336%20-396q-43%20-51%20-120.5%20-86.5t-143.5%20-35.5h-1088q-34%200%20-60.5%2013t-26.5%2043q0%2031%2031%2066l336%20396q43%2051%20120.5%2086.5t143.5%2035.5h1088q34%200%2060.5%20-13t26.5%20-43zM1536%20928v-160h-832q-94%200%20-197%20-47.5t-164%20-119.5l-337%20-396l-5%20-6q0%204%20-0.5%2012.5%20t-0.5%2012.5v960q0%2092%2066%20158t158%2066h320q92%200%20158%20-66t66%20-158v-32h544q92%200%20158%20-66t66%20-158z"
            ],
            "\uf07d": [
                768.0,
                "M704%201216q0%20-26%20-19%20-45t-45%20-19h-128v-1024h128q26%200%2045%20-19t19%20-45t-19%20-45l-256%20-256q-19%20-19%20-45%20-19t-45%2019l-256%20256q-19%2019%20-19%2045t19%2045t45%2019h128v1024h-128q-26%200%20-45%2019t-19%2045t19%2045l256%20256q19%2019%2045%2019t45%20-19l256%20-256q19%20-19%2019%20-45z"
            ],
            "\uf07e": [
                1792.0,
                "M1792%20640q0%20-26%20-19%20-45l-256%20-256q-19%20-19%20-45%20-19t-45%2019t-19%2045v128h-1024v-128q0%20-26%20-19%20-45t-45%20-19t-45%2019l-256%20256q-19%2019%20-19%2045t19%2045l256%20256q19%2019%2045%2019t45%20-19t19%20-45v-128h1024v128q0%2026%2019%2045t45%2019t45%20-19l256%20-256q19%20-19%2019%20-45z"
            ],
            "\uf080": [
                2048.0,
                "M640%20640v-512h-256v512h256zM1024%201152v-1024h-256v1024h256zM2048%200v-128h-2048v1536h128v-1408h1920zM1408%20896v-768h-256v768h256zM1792%201280v-1152h-256v1152h256z"
            ],
            "\uf081": [
                1536.0,
                "M1280%20926q-56%20-25%20-121%20-34q68%2040%2093%20117q-65%20-38%20-134%20-51q-61%2066%20-153%2066q-87%200%20-148.5%20-61.5t-61.5%20-148.5q0%20-29%205%20-48q-129%207%20-242%2065t-192%20155q-29%20-50%20-29%20-106q0%20-114%2091%20-175q-47%201%20-100%2026v-2q0%20-75%2050%20-133.5t123%20-72.5q-29%20-8%20-51%20-8q-13%200%20-39%204%20q21%20-63%2074.5%20-104t121.5%20-42q-116%20-90%20-261%20-90q-26%200%20-50%203q148%20-94%20322%20-94q112%200%20210%2035.5t168%2095t120.5%20137t75%20162t24.5%20168.5q0%2018%20-1%2027q63%2045%20105%20109zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5%20t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf082": [
                1536.0,
                "M1248%201408q119%200%20203.5%20-84.5t84.5%20-203.5v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-188v595h199l30%20232h-229v148q0%2056%2023.5%2084t91.5%2028l122%201v207q-63%209%20-178%209q-136%200%20-217.5%20-80t-81.5%20-226v-171h-200v-232h200v-595h-532q-119%200%20-203.5%2084.5t-84.5%20203.5v960%20q0%20119%2084.5%20203.5t203.5%2084.5h960z"
            ],
            "\uf083": [
                1792.0,
                "M928%20704q0%2014%20-9%2023t-23%209q-66%200%20-113%20-47t-47%20-113q0%20-14%209%20-23t23%20-9t23%209t9%2023q0%2040%2028%2068t68%2028q14%200%2023%209t9%2023zM1152%20574q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181t75%20181t181%2075t181%20-75t75%20-181zM128%200h1536v128h-1536v-128zM1280%20574q0%20159%20-112.5%20271.5%20t-271.5%20112.5t-271.5%20-112.5t-112.5%20-271.5t112.5%20-271.5t271.5%20-112.5t271.5%20112.5t112.5%20271.5zM256%201216h384v128h-384v-128zM128%201024h1536v118v138h-828l-64%20-128h-644v-128zM1792%201280v-1280q0%20-53%20-37.5%20-90.5t-90.5%20-37.5h-1536q-53%200%20-90.5%2037.5t-37.5%2090.5v1280%20q0%2053%2037.5%2090.5t90.5%2037.5h1536q53%200%2090.5%20-37.5t37.5%20-90.5z"
            ],
            "\uf084": [
                1792.0,
                "M832%201024q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136q0%20-42%2019%20-83q-41%2019%20-83%2019q-80%200%20-136%20-56t-56%20-136t56%20-136t136%20-56t136%2056t56%20136q0%2042%20-19%2083q41%20-19%2083%20-19q80%200%20136%2056t56%20136zM1683%20320q0%20-17%20-49%20-66t-66%20-49q-9%200%20-28.5%2016t-36.5%2033t-38.5%2040t-24.5%2026%20l-96%20-96l220%20-220q28%20-28%2028%20-68q0%20-42%20-39%20-81t-81%20-39q-40%200%20-68%2028l-671%20671q-176%20-131%20-365%20-131q-163%200%20-265.5%20102.5t-102.5%20265.5q0%20160%2095%20313t248%20248t313%2095q163%200%20265.5%20-102.5t102.5%20-265.5q0%20-189%20-131%20-365l355%20-355l96%2096q-3%203%20-26%2024.5t-40%2038.5t-33%2036.5%20t-16%2028.5q0%2017%2049%2066t66%2049q13%200%2023%20-10q6%20-6%2046%20-44.5t82%20-79.5t86.5%20-86t73%20-78t28.5%20-41z"
            ],
            "\uf085": [
                1920.0,
                "M896%20640q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181t75%20-181t181%20-75t181%2075t75%20181zM1664%20128q0%2052%20-38%2090t-90%2038t-90%20-38t-38%20-90q0%20-53%2037.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1664%201152q0%2052%20-38%2090t-90%2038t-90%20-38t-38%20-90q0%20-53%2037.5%20-90.5t90.5%20-37.5%20t90.5%2037.5t37.5%2090.5zM1280%20731v-185q0%20-10%20-7%20-19.5t-16%20-10.5l-155%20-24q-11%20-35%20-32%20-76q34%20-48%2090%20-115q7%20-11%207%20-20q0%20-12%20-7%20-19q-23%20-30%20-82.5%20-89.5t-78.5%20-59.5q-11%200%20-21%207l-115%2090q-37%20-19%20-77%20-31q-11%20-108%20-23%20-155q-7%20-24%20-30%20-24h-186q-11%200%20-20%207.5t-10%2017.5%20l-23%20153q-34%2010%20-75%2031l-118%20-89q-7%20-7%20-20%20-7q-11%200%20-21%208q-144%20133%20-144%20160q0%209%207%2019q10%2014%2041%2053t47%2061q-23%2044%20-35%2082l-152%2024q-10%201%20-17%209.5t-7%2019.5v185q0%2010%207%2019.5t16%2010.5l155%2024q11%2035%2032%2076q-34%2048%20-90%20115q-7%2011%20-7%2020q0%2012%207%2020q22%2030%2082%2089t79%2059q11%200%2021%20-7%20l115%20-90q34%2018%2077%2032q11%20108%2023%20154q7%2024%2030%2024h186q11%200%2020%20-7.5t10%20-17.5l23%20-153q34%20-10%2075%20-31l118%2089q8%207%2020%207q11%200%2021%20-8q144%20-133%20144%20-160q0%20-8%20-7%20-19q-12%20-16%20-42%20-54t-45%20-60q23%20-48%2034%20-82l152%20-23q10%20-2%2017%20-10.5t7%20-19.5zM1920%20198v-140q0%20-16%20-149%20-31%20q-12%20-27%20-30%20-52q51%20-113%2051%20-138q0%20-4%20-4%20-7q-122%20-71%20-124%20-71q-8%200%20-46%2047t-52%2068q-20%20-2%20-30%20-2t-30%202q-14%20-21%20-52%20-68t-46%20-47q-2%200%20-124%2071q-4%203%20-4%207q0%2025%2051%20138q-18%2025%20-30%2052q-149%2015%20-149%2031v140q0%2016%20149%2031q13%2029%2030%2052q-51%20113%20-51%20138q0%204%204%207q4%202%2035%2020%20t59%2034t30%2016q8%200%2046%20-46.5t52%20-67.5q20%202%2030%202t30%20-2q51%2071%2092%20112l6%202q4%200%20124%20-70q4%20-3%204%20-7q0%20-25%20-51%20-138q17%20-23%2030%20-52q149%20-15%20149%20-31zM1920%201222v-140q0%20-16%20-149%20-31q-12%20-27%20-30%20-52q51%20-113%2051%20-138q0%20-4%20-4%20-7q-122%20-71%20-124%20-71q-8%200%20-46%2047t-52%2068%20q-20%20-2%20-30%20-2t-30%202q-14%20-21%20-52%20-68t-46%20-47q-2%200%20-124%2071q-4%203%20-4%207q0%2025%2051%20138q-18%2025%20-30%2052q-149%2015%20-149%2031v140q0%2016%20149%2031q13%2029%2030%2052q-51%20113%20-51%20138q0%204%204%207q4%202%2035%2020t59%2034t30%2016q8%200%2046%20-46.5t52%20-67.5q20%202%2030%202t30%20-2q51%2071%2092%20112l6%202q4%200%20124%20-70%20q4%20-3%204%20-7q0%20-25%20-51%20-138q17%20-23%2030%20-52q149%20-15%20149%20-31z"
            ],
            "\uf086": [
                1792.0,
                "M1408%20768q0%20-139%20-94%20-257t-256.5%20-186.5t-353.5%20-68.5q-86%200%20-176%2016q-124%20-88%20-278%20-128q-36%20-9%20-86%20-16h-3q-11%200%20-20.5%208t-11.5%2021q-1%203%20-1%206.5t0.5%206.5t2%206l2.5%205t3.5%205.5t4%205t4.5%205t4%204.5q5%206%2023%2025t26%2029.5t22.5%2029t25%2038.5t20.5%2044q-124%2072%20-195%20177t-71%20224%20q0%20139%2094%20257t256.5%20186.5t353.5%2068.5t353.5%20-68.5t256.5%20-186.5t94%20-257zM1792%20512q0%20-120%20-71%20-224.5t-195%20-176.5q10%20-24%2020.5%20-44t25%20-38.5t22.5%20-29t26%20-29.5t23%20-25q1%20-1%204%20-4.5t4.5%20-5t4%20-5t3.5%20-5.5l2.5%20-5t2%20-6t0.5%20-6.5t-1%20-6.5q-3%20-14%20-13%20-22t-22%20-7%20q-50%207%20-86%2016q-154%2040%20-278%20128q-90%20-16%20-176%20-16q-271%200%20-472%20132q58%20-4%2088%20-4q161%200%20309%2045t264%20129q125%2092%20192%20212t67%20254q0%2077%20-23%20152q129%20-71%20204%20-178t75%20-230z"
            ],
            "\uf087": [
                1536.0,
                "M256%20192q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1408%20768q0%2051%20-39%2089.5t-89%2038.5h-352q0%2058%2048%20159.5t48%20160.5q0%2098%20-32%20145t-128%2047q-26%20-26%20-38%20-85t-30.5%20-125.5t-59.5%20-109.5q-22%20-23%20-77%20-91q-4%20-5%20-23%20-30t-31.5%20-41t-34.5%20-42.5%20t-40%20-44t-38.5%20-35.5t-40%20-27t-35.5%20-9h-32v-640h32q13%200%2031.5%20-3t33%20-6.5t38%20-11t35%20-11.5t35.5%20-12.5t29%20-10.5q211%20-73%20342%20-73h121q192%200%20192%20167q0%2026%20-5%2056q30%2016%2047.5%2052.5t17.5%2073.5t-18%2069q53%2050%2053%20119q0%2025%20-10%2055.5t-25%2047.5q32%201%2053.5%2047t21.5%2081zM1536%20769%20q0%20-89%20-49%20-163q9%20-33%209%20-69q0%20-77%20-38%20-144q3%20-21%203%20-43q0%20-101%20-60%20-178q1%20-139%20-85%20-219.5t-227%20-80.5h-36h-93q-96%200%20-189.5%2022.5t-216.5%2065.5q-116%2040%20-138%2040h-288q-53%200%20-90.5%2037.5t-37.5%2090.5v640q0%2053%2037.5%2090.5t90.5%2037.5h274q36%2024%20137%20155q58%2075%20107%20128%20q24%2025%2035.5%2085.5t30.5%20126.5t62%20108q39%2037%2090%2037q84%200%20151%20-32.5t102%20-101.5t35%20-186q0%20-93%20-48%20-192h176q104%200%20180%20-76t76%20-179z"
            ],
            "\uf088": [
                1536.0,
                "M256%201088q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1408%20512q0%2035%20-21.5%2081t-53.5%2047q15%2017%2025%2047.5t10%2055.5q0%2069%20-53%20119q18%2031%2018%2069q0%2037%20-17.5%2073.5t-47.5%2052.5q5%2030%205%2056q0%2085%20-49%20126t-136%2041h-128q-131%200%20-342%20-73q-5%20-2%20-29%20-10.5%20t-35.5%20-12.5t-35%20-11.5t-38%20-11t-33%20-6.5t-31.5%20-3h-32v-640h32q16%200%2035.5%20-9t40%20-27t38.5%20-35.5t40%20-44t34.5%20-42.5t31.5%20-41t23%20-30q55%20-68%2077%20-91q41%20-43%2059.5%20-109.5t30.5%20-125.5t38%20-85q96%200%20128%2047t32%20145q0%2059%20-48%20160.5t-48%20159.5h352q50%200%2089%2038.5t39%2089.5z%20M1536%20511q0%20-103%20-76%20-179t-180%20-76h-176q48%20-99%2048%20-192q0%20-118%20-35%20-186q-35%20-69%20-102%20-101.5t-151%20-32.5q-51%200%20-90%2037q-34%2033%20-54%2082t-25.5%2090.5t-17.5%2084.5t-31%2064q-48%2050%20-107%20127q-101%20131%20-137%20155h-274q-53%200%20-90.5%2037.5t-37.5%2090.5v640q0%2053%2037.5%2090.5t90.5%2037.5%20h288q22%200%20138%2040q128%2044%20223%2066t200%2022h112q140%200%20226.5%20-79t85.5%20-216v-5q60%20-77%2060%20-178q0%20-22%20-3%20-43q38%20-67%2038%20-144q0%20-36%20-9%20-69q49%20-73%2049%20-163z"
            ],
            "\uf089": [
                896.0,
                "M832%201504v-1339l-449%20-236q-22%20-12%20-40%20-12q-21%200%20-31.5%2014.5t-10.5%2035.5q0%206%202%2020l86%20500l-364%20354q-25%2027%20-25%2048q0%2037%2056%2046l502%2073l225%20455q19%2041%2049%2041z"
            ],
            "\uf08a": [
                1792.0,
                "M1664%20940q0%2081%20-21.5%20143t-55%2098.5t-81.5%2059.5t-94%2031t-98%208t-112%20-25.5t-110.5%20-64t-86.5%20-72t-60%20-61.5q-18%20-22%20-49%20-22t-49%2022q-24%2028%20-60%2061.5t-86.5%2072t-110.5%2064t-112%2025.5t-98%20-8t-94%20-31t-81.5%20-59.5t-55%20-98.5t-21.5%20-143q0%20-168%20187%20-355l581%20-560l580%20559%20q188%20188%20188%20356zM1792%20940q0%20-221%20-229%20-450l-623%20-600q-18%20-18%20-44%20-18t-44%2018l-624%20602q-10%208%20-27.5%2026t-55.5%2065.5t-68%2097.5t-53.5%20121t-23.5%20138q0%20220%20127%20344t351%20124q62%200%20126.5%20-21.5t120%20-58t95.5%20-68.5t76%20-68q36%2036%2076%2068t95.5%2068.5t120%2058t126.5%2021.5%20q224%200%20351%20-124t127%20-344z"
            ],
            "\uf08b": [
                1664.0,
                "M640%2096q0%20-4%201%20-20t0.5%20-26.5t-3%20-23.5t-10%20-19.5t-20.5%20-6.5h-320q-119%200%20-203.5%2084.5t-84.5%20203.5v704q0%20119%2084.5%20203.5t203.5%2084.5h320q13%200%2022.5%20-9.5t9.5%20-22.5q0%20-4%201%20-20t0.5%20-26.5t-3%20-23.5t-10%20-19.5t-20.5%20-6.5h-320q-66%200%20-113%20-47t-47%20-113v-704%20q0%20-66%2047%20-113t113%20-47h288h11h13t11.5%20-1t11.5%20-3t8%20-5.5t7%20-9t2%20-13.5zM1568%20640q0%20-26%20-19%20-45l-544%20-544q-19%20-19%20-45%20-19t-45%2019t-19%2045v288h-448q-26%200%20-45%2019t-19%2045v384q0%2026%2019%2045t45%2019h448v288q0%2026%2019%2045t45%2019t45%20-19l544%20-544q19%20-19%2019%20-45z"
            ],
            "\uf08c": [
                1536.0,
                "M237%20122h231v694h-231v-694zM483%201030q-1%2052%20-36%2086t-93%2034t-94.5%20-34t-36.5%20-86q0%20-51%2035.5%20-85.5t92.5%20-34.5h1q59%200%2095%2034.5t36%2085.5zM1068%20122h231v398q0%20154%20-73%20233t-193%2079q-136%200%20-209%20-117h2v101h-231q3%20-66%200%20-694h231v388q0%2038%207%2056q15%2035%2045%2059.5t74%2024.5%20q116%200%20116%20-157v-371zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf08d": [
                1152.0,
                "M480%20672v448q0%2014%20-9%2023t-23%209t-23%20-9t-9%20-23v-448q0%20-14%209%20-23t23%20-9t23%209t9%2023zM1152%20320q0%20-26%20-19%20-45t-45%20-19h-429l-51%20-483q-2%20-12%20-10.5%20-20.5t-20.5%20-8.5h-1q-27%200%20-32%2027l-76%20485h-404q-26%200%20-45%2019t-19%2045q0%20123%2078.5%20221.5t177.5%2098.5v512q-52%200%20-90%2038%20t-38%2090t38%2090t90%2038h640q52%200%2090%20-38t38%20-90t-38%20-90t-90%20-38v-512q99%200%20177.5%20-98.5t78.5%20-221.5z"
            ],
            "\uf08e": [
                1792.0,
                "M1408%20608v-320q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-832q-119%200%20-203.5%2084.5t-84.5%20203.5v832q0%20119%2084.5%20203.5t203.5%2084.5h704q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-704q-66%200%20-113%20-47t-47%20-113v-832q0%20-66%2047%20-113t113%20-47h832q66%200%20113%2047t47%20113v320%20q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23zM1792%201472v-512q0%20-26%20-19%20-45t-45%20-19t-45%2019l-176%20176l-652%20-652q-10%20-10%20-23%20-10t-23%2010l-114%20114q-10%2010%20-10%2023t10%2023l652%20652l-176%20176q-19%2019%20-19%2045t19%2045t45%2019h512q26%200%2045%20-19t19%20-45z"
            ],
            "\uf090": [
                1536.0,
                "M1184%20640q0%20-26%20-19%20-45l-544%20-544q-19%20-19%20-45%20-19t-45%2019t-19%2045v288h-448q-26%200%20-45%2019t-19%2045v384q0%2026%2019%2045t45%2019h448v288q0%2026%2019%2045t45%2019t45%20-19l544%20-544q19%20-19%2019%20-45zM1536%20992v-704q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-320q-13%200%20-22.5%209.5t-9.5%2022.5%20q0%204%20-1%2020t-0.5%2026.5t3%2023.5t10%2019.5t20.5%206.5h320q66%200%20113%2047t47%20113v704q0%2066%20-47%20113t-113%2047h-288h-11h-13t-11.5%201t-11.5%203t-8%205.5t-7%209t-2%2013.5q0%204%20-1%2020t-0.5%2026.5t3%2023.5t10%2019.5t20.5%206.5h320q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf091": [
                1664.0,
                "M458%20653q-74%20162%20-74%20371h-256v-96q0%20-78%2094.5%20-162t235.5%20-113zM1536%20928v96h-256q0%20-209%20-74%20-371q141%2029%20235.5%20113t94.5%20162zM1664%201056v-128q0%20-71%20-41.5%20-143t-112%20-130t-173%20-97.5t-215.5%20-44.5q-42%20-54%20-95%20-95q-38%20-34%20-52.5%20-72.5t-14.5%20-89.5q0%20-54%2030.5%20-91%20t97.5%20-37q75%200%20133.5%20-45.5t58.5%20-114.5v-64q0%20-14%20-9%20-23t-23%20-9h-832q-14%200%20-23%209t-9%2023v64q0%2069%2058.5%20114.5t133.5%2045.5q67%200%2097.5%2037t30.5%2091q0%2051%20-14.5%2089.5t-52.5%2072.5q-53%2041%20-95%2095q-113%205%20-215.5%2044.5t-173%2097.5t-112%20130t-41.5%20143v128q0%2040%2028%2068t68%2028h288v96%20q0%2066%2047%20113t113%2047h576q66%200%20113%20-47t47%20-113v-96h288q40%200%2068%20-28t28%20-68z"
            ],
            "\uf092": [
                1536.0,
                "M519%20336q4%206%20-3%2013q-9%207%20-14%202q-4%20-6%203%20-13q9%20-7%2014%20-2zM491%20377q-5%207%20-12%204q-6%20-4%200%20-12q7%20-8%2012%20-5q6%204%200%2013zM450%20417q2%204%20-5%208q-7%202%20-8%20-2q-3%20-5%204%20-8q8%20-2%209%202zM471%20394q2%201%201.5%204.5t-3.5%205.5q-6%207%20-10%203t1%20-11q6%20-6%2011%20-2zM557%20319q2%207%20-9%2011q-9%203%20-13%20-4%20q-2%20-7%209%20-11q9%20-3%2013%204zM599%20316q0%208%20-12%208q-10%200%20-10%20-8t11%20-8t11%208zM638%20323q-2%207%20-13%205t-9%20-9q2%20-8%2012%20-6t10%2010zM1280%20640q0%20212%20-150%20362t-362%20150t-362%20-150t-150%20-362q0%20-167%2098%20-300.5t252%20-185.5q18%20-3%2026.5%205t8.5%2020q0%2052%20-1%2095q-6%20-1%20-15.5%20-2.5t-35.5%20-2t-48%204%20t-43.5%2020t-29.5%2041.5q-23%2059%20-57%2074q-2%201%20-4.5%203.5l-8%208t-7%209.5t4%207.5t19.5%203.5q6%200%2015%20-2t30%20-15.5t33%20-35.5q16%20-28%2037.5%20-42t43.5%20-14t38%203.5t30%209.5q7%2047%2033%2069q-49%206%20-86%2018.5t-73%2039t-55.5%2076t-19.5%20119.5q0%2079%2053%20137q-24%2062%205%20136q19%206%2054.5%20-7.5t60.5%20-29.5l26%20-16%20q58%2017%20128%2017t128%20-17q11%207%2028.5%2018t55.5%2026t57%209q29%20-74%205%20-136q53%20-58%2053%20-137q0%20-57%20-14%20-100.5t-35.5%20-70t-53.5%20-44.5t-62.5%20-26t-68.5%20-12q35%20-31%2035%20-95q0%20-40%20-0.5%20-89t-0.5%20-51q0%20-12%208.5%20-20t26.5%20-5q154%2052%20252%20185.5t98%20300.5zM1536%201120v-960%20q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf093": [
                1664.0,
                "M1280%2064q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1536%2064q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1664%20288v-320q0%20-40%20-28%20-68t-68%20-28h-1472q-40%200%20-68%2028t-28%2068v320q0%2040%2028%2068t68%2028h427q21%20-56%2070.5%20-92%20t110.5%20-36h256q61%200%20110.5%2036t70.5%2092h427q40%200%2068%20-28t28%20-68zM1339%20936q-17%20-40%20-59%20-40h-256v-448q0%20-26%20-19%20-45t-45%20-19h-256q-26%200%20-45%2019t-19%2045v448h-256q-42%200%20-59%2040q-17%2039%2014%2069l448%20448q18%2019%2045%2019t45%20-19l448%20-448q31%20-30%2014%20-69z"
            ],
            "\uf094": [
                1536.0,
                "M1407%20710q0%2044%20-7%20113.5t-18%2096.5q-12%2030%20-17%2044t-9%2036.5t-4%2048.5q0%2023%205%2068.5t5%2067.5q0%2037%20-10%2055q-4%201%20-13%201q-19%200%20-58%20-4.5t-59%20-4.5q-60%200%20-176%2024t-175%2024q-43%200%20-94.5%20-11.5t-85%20-23.5t-89.5%20-34q-137%20-54%20-202%20-103q-96%20-73%20-159.5%20-189.5t-88%20-236t-24.5%20-248.5%20q0%20-40%2012.5%20-120t12.5%20-121q0%20-23%20-11%20-66.5t-11%20-65.5t12%20-36.5t34%20-14.5q24%200%2072.5%2011t73.5%2011q57%200%20169.5%20-15.5t169.5%20-15.5q181%200%20284%2036q129%2045%20235.5%20152.5t166%20245.5t59.5%20275zM1535%20712q0%20-165%20-70%20-327.5t-196%20-288t-281%20-180.5q-124%20-44%20-326%20-44%20q-57%200%20-170%2014.5t-169%2014.5q-24%200%20-72.5%20-14.5t-73.5%20-14.5q-73%200%20-123.5%2055.5t-50.5%20128.5q0%2024%2011%2068t11%2067q0%2040%20-12.5%20120.5t-12.5%20121.5q0%20111%2018%20217.5t54.5%20209.5t100.5%20194t150%20156q78%2059%20232%20120q194%2078%20316%2078q60%200%20175.5%20-24t173.5%20-24q19%200%2057%205t58%205%20q81%200%20118%20-50.5t37%20-134.5q0%20-23%20-5%20-68t-5%20-68q0%20-13%202%20-25t3.5%20-16.5t7.5%20-20.5t8%20-20q16%20-40%2025%20-118.5t9%20-136.5z"
            ],
            "\uf095": [
                1408.0,
                "M1408%20296q0%20-27%20-10%20-70.5t-21%20-68.5q-21%20-50%20-122%20-106q-94%20-51%20-186%20-51q-27%200%20-53%203.5t-57.5%2012.5t-47%2014.5t-55.5%2020.5t-49%2018q-98%2035%20-175%2083q-127%2079%20-264%20216t-216%20264q-48%2077%20-83%20175q-3%209%20-18%2049t-20.5%2055.5t-14.5%2047t-12.5%2057.5t-3.5%2053q0%2092%2051%20186%20q56%20101%20106%20122q25%2011%2068.5%2021t70.5%2010q14%200%2021%20-3q18%20-6%2053%20-76q11%20-19%2030%20-54t35%20-63.5t31%20-53.5q3%20-4%2017.5%20-25t21.5%20-35.5t7%20-28.5q0%20-20%20-28.5%20-50t-62%20-55t-62%20-53t-28.5%20-46q0%20-9%205%20-22.5t8.5%20-20.5t14%20-24t11.5%20-19q76%20-137%20174%20-235t235%20-174q2%20-1%2019%20-11.5t24%20-14%20t20.5%20-8.5t22.5%20-5q18%200%2046%2028.5t53%2062t55%2062t50%2028.5q14%200%2028.5%20-7t35.5%20-21.5t25%20-17.5q25%20-15%2053.5%20-31t63.5%20-35t54%20-30q70%20-35%2076%20-53q3%20-7%203%20-21z"
            ],
            "\uf096": [
                1408.0,
                "M1120%201280h-832q-66%200%20-113%20-47t-47%20-113v-832q0%20-66%2047%20-113t113%20-47h832q66%200%20113%2047t47%20113v832q0%2066%20-47%20113t-113%2047zM1408%201120v-832q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-832q-119%200%20-203.5%2084.5t-84.5%20203.5v832q0%20119%2084.5%20203.5t203.5%2084.5h832%20q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf097": [
                1280.0,
                "M1152%201280h-1024v-1242l423%20406l89%2085l89%20-85l423%20-406v1242zM1164%201408q23%200%2044%20-9q33%20-13%2052.5%20-41t19.5%20-62v-1289q0%20-34%20-19.5%20-62t-52.5%20-41q-19%20-8%20-44%20-8q-48%200%20-83%2032l-441%20424l-441%20-424q-36%20-33%20-83%20-33q-23%200%20-44%209q-33%2013%20-52.5%2041t-19.5%2062v1289%20q0%2034%2019.5%2062t52.5%2041q21%209%2044%209h1048z"
            ],
            "\uf098": [
                1536.0,
                "M1280%20343q0%2011%20-2%2016t-18%2016.5t-40.5%2025t-47.5%2026.5t-45.5%2025t-28.5%2015q-5%203%20-19%2013t-25%2015t-21%205q-15%200%20-36.5%20-20.5t-39.5%20-45t-38.5%20-45t-33.5%20-20.5q-7%200%20-16.5%203.5t-15.5%206.5t-17%209.5t-14%208.5q-99%2055%20-170%20126.5t-127%20170.5q-2%203%20-8.5%2014t-9.5%2017t-6.5%2015.5%20t-3.5%2016.5q0%2013%2020.5%2033.5t45%2038.5t45%2039.5t20.5%2036.5q0%2010%20-5%2021t-15%2025t-13%2019q-3%206%20-15%2028.5t-25%2045.5t-26.5%2047.5t-25%2040.5t-16.5%2018t-16%202q-48%200%20-101%20-22q-46%20-21%20-80%20-94.5t-34%20-130.5q0%20-16%202.5%20-34t5%20-30.5t9%20-33t10%20-29.5t12.5%20-33t11%20-30q60%20-164%20216.5%20-320.5%20t320.5%20-216.5q6%20-2%2030%20-11t33%20-12.5t29.5%20-10t33%20-9t30.5%20-5t34%20-2.5q57%200%20130.5%2034t94.5%2080q22%2053%2022%20101zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z%20"
            ],
            "\uf099": [
                1664.0,
                "M1620%201128q-67%20-98%20-162%20-167q1%20-14%201%20-42q0%20-130%20-38%20-259.5t-115.5%20-248.5t-184.5%20-210.5t-258%20-146t-323%20-54.5q-271%200%20-496%20145q35%20-4%2078%20-4q225%200%20401%20138q-105%202%20-188%2064.5t-114%20159.5q33%20-5%2061%20-5q43%200%2085%2011q-112%2023%20-185.5%20111.5t-73.5%20205.5v4q68%20-38%20146%20-41%20q-66%2044%20-105%20115t-39%20154q0%2088%2044%20163q121%20-149%20294.5%20-238.5t371.5%20-99.5q-8%2038%20-8%2074q0%20134%2094.5%20228.5t228.5%2094.5q140%200%20236%20-102q109%2021%20205%2078q-37%20-115%20-142%20-178q93%2010%20186%2050z"
            ],
            "\uf09a": [
                1024.0,
                "M959%201524v-264h-157q-86%200%20-116%20-36t-30%20-108v-189h293l-39%20-296h-254v-759h-306v759h-255v296h255v218q0%20186%20104%20288.5t277%20102.5q147%200%20228%20-12z"
            ],
            "\uf09b": [
                1536.0,
                "M768%201408q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5q0%20-251%20-146.5%20-451.5t-378.5%20-277.5q-27%20-5%20-40%207t-13%2030q0%203%200.5%2076.5t0.5%20134.5q0%2097%20-52%20142q57%206%20102.5%2018t94%2039t81%2066.5t53%20105t20.5%20150.5q0%20119%20-79%20206q37%2091%20-8%20204q-28%209%20-81%20-11t-92%20-44l-38%20-24%20q-93%2026%20-192%2026t-192%20-26q-16%2011%20-42.5%2027t-83.5%2038.5t-85%2013.5q-45%20-113%20-8%20-204q-79%20-87%20-79%20-206q0%20-85%2020.5%20-150t52.5%20-105t80.5%20-67t94%20-39t102.5%20-18q-39%20-36%20-49%20-103q-21%20-10%20-45%20-15t-57%20-5t-65.5%2021.5t-55.5%2062.5q-19%2032%20-48.5%2052t-49.5%2024l-20%203q-21%200%20-29%20-4.5%20t-5%20-11.5t9%20-14t13%20-12l7%20-5q22%20-10%2043.5%20-38t31.5%20-51l10%20-23q13%20-38%2044%20-61.5t67%20-30t69.5%20-7t55.5%203.5l23%204q0%20-38%200.5%20-88.5t0.5%20-54.5q0%20-18%20-13%20-30t-40%20-7q-232%2077%20-378.5%20277.5t-146.5%20451.5q0%20209%20103%20385.5t279.5%20279.5t385.5%20103zM291%20305q3%207%20-7%2012%20q-10%203%20-13%20-2q-3%20-7%207%20-12q9%20-6%2013%202zM322%20271q7%205%20-2%2016q-10%209%20-16%203q-7%20-5%202%20-16q10%20-10%2016%20-3zM352%20226q9%207%200%2019q-8%2013%20-17%206q-9%20-5%200%20-18t17%20-7zM394%20184q8%208%20-4%2019q-12%2012%20-20%203q-9%20-8%204%20-19q12%20-12%2020%20-3zM451%20159q3%2011%20-13%2016q-15%204%20-19%20-7t13%20-15q15%20-6%2019%206z%20M514%20154q0%2013%20-17%2011q-16%200%20-16%20-11q0%20-13%2017%20-11q16%200%2016%2011zM572%20164q-2%2011%20-18%209q-16%20-3%20-14%20-15t18%20-8t14%2014z"
            ],
            "\uf09c": [
                1664.0,
                "M1664%20960v-256q0%20-26%20-19%20-45t-45%20-19h-64q-26%200%20-45%2019t-19%2045v256q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181v-192h96q40%200%2068%20-28t28%20-68v-576q0%20-40%20-28%20-68t-68%20-28h-960q-40%200%20-68%2028t-28%2068v576q0%2040%2028%2068t68%2028h672v192q0%20185%20131.5%20316.5t316.5%20131.5%20t316.5%20-131.5t131.5%20-316.5z"
            ],
            "\uf09d": [
                1920.0,
                "M1760%201408q66%200%20113%20-47t47%20-113v-1216q0%20-66%20-47%20-113t-113%20-47h-1600q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1600zM160%201280q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-224h1664v224q0%2013%20-9.5%2022.5t-22.5%209.5h-1600zM1760%200q13%200%2022.5%209.5t9.5%2022.5v608h-1664v-608%20q0%20-13%209.5%20-22.5t22.5%20-9.5h1600zM256%20128v128h256v-128h-256zM640%20128v128h384v-128h-384z"
            ],
            "\uf09e": [
                1408.0,
                "M384%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM896%2069q2%20-28%20-17%20-48q-18%20-21%20-47%20-21h-135q-25%200%20-43%2016.5t-20%2041.5q-22%20229%20-184.5%20391.5t-391.5%20184.5q-25%202%20-41.5%2020t-16.5%2043v135q0%2029%2021%2047q17%2017%2043%2017h5q160%20-13%20306%20-80.5%20t259%20-181.5q114%20-113%20181.5%20-259t80.5%20-306zM1408%2067q2%20-27%20-18%20-47q-18%20-20%20-46%20-20h-143q-26%200%20-44.5%2017.5t-19.5%2042.5q-12%20215%20-101%20408.5t-231.5%20336t-336%20231.5t-408.5%20102q-25%201%20-42.5%2019.5t-17.5%2043.5v143q0%2028%2020%2046q18%2018%2044%2018h3q262%20-13%20501.5%20-120t425.5%20-294%20q187%20-186%20294%20-425.5t120%20-501.5z"
            ],
            "\uf0a0": [
                1536.0,
                "M1040%20320q0%20-33%20-23.5%20-56.5t-56.5%20-23.5t-56.5%2023.5t-23.5%2056.5t23.5%2056.5t56.5%2023.5t56.5%20-23.5t23.5%20-56.5zM1296%20320q0%20-33%20-23.5%20-56.5t-56.5%20-23.5t-56.5%2023.5t-23.5%2056.5t23.5%2056.5t56.5%2023.5t56.5%20-23.5t23.5%20-56.5zM1408%20160v320q0%2013%20-9.5%2022.5t-22.5%209.5%20h-1216q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-320q0%20-13%209.5%20-22.5t22.5%20-9.5h1216q13%200%2022.5%209.5t9.5%2022.5zM178%20640h1180l-157%20482q-4%2013%20-16%2021.5t-26%208.5h-782q-14%200%20-26%20-8.5t-16%20-21.5zM1536%20480v-320q0%20-66%20-47%20-113t-113%20-47h-1216q-66%200%20-113%2047t-47%20113v320q0%2025%2016%2075%20l197%20606q17%2053%2063%2086t101%2033h782q55%200%20101%20-33t63%20-86l197%20-606q16%20-50%2016%20-75z"
            ],
            "\uf0a1": [
                1792.0,
                "M1664%20896q53%200%2090.5%20-37.5t37.5%20-90.5t-37.5%20-90.5t-90.5%20-37.5v-384q0%20-52%20-38%20-90t-90%20-38q-417%20347%20-812%20380q-58%20-19%20-91%20-66t-31%20-100.5t40%20-92.5q-20%20-33%20-23%20-65.5t6%20-58t33.5%20-55t48%20-50t61.5%20-50.5q-29%20-58%20-111.5%20-83t-168.5%20-11.5t-132%2055.5q-7%2023%20-29.5%2087.5%20t-32%2094.5t-23%2089t-15%20101t3.5%2098.5t22%20110.5h-122q-66%200%20-113%2047t-47%20113v192q0%2066%2047%20113t113%2047h480q435%200%20896%20384q52%200%2090%20-38t38%20-90v-384zM1536%20292v954q-394%20-302%20-768%20-343v-270q377%20-42%20768%20-341z"
            ],
            "\uf0f3": [
                1792.0,
                "M912%20-160q0%2016%20-16%2016q-59%200%20-101.5%2042.5t-42.5%20101.5q0%2016%20-16%2016t-16%20-16q0%20-73%2051.5%20-124.5t124.5%20-51.5q16%200%2016%2016zM1728%20128q0%20-52%20-38%20-90t-90%20-38h-448q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181h-448q-52%200%20-90%2038t-38%2090q50%2042%2091%2088t85%20119.5t74.5%20158.5%20t50%20206t19.5%20260q0%20152%20117%20282.5t307%20158.5q-8%2019%20-8%2039q0%2040%2028%2068t68%2028t68%20-28t28%20-68q0%20-20%20-8%20-39q190%20-28%20307%20-158.5t117%20-282.5q0%20-139%2019.5%20-260t50%20-206t74.5%20-158.5t85%20-119.5t91%20-88z"
            ],
            "\uf0a3": [
                1536.0,
                "M1376%20640l138%20-135q30%20-28%2020%20-70q-12%20-41%20-52%20-51l-188%20-48l53%20-186q12%20-41%20-19%20-70q-29%20-31%20-70%20-19l-186%2053l-48%20-188q-10%20-40%20-51%20-52q-12%20-2%20-19%20-2q-31%200%20-51%2022l-135%20138l-135%20-138q-28%20-30%20-70%20-20q-41%2011%20-51%2052l-48%20188l-186%20-53q-41%20-12%20-70%2019q-31%2029%20-19%2070%20l53%20186l-188%2048q-40%2010%20-52%2051q-10%2042%2020%2070l138%20135l-138%20135q-30%2028%20-20%2070q12%2041%2052%2051l188%2048l-53%20186q-12%2041%2019%2070q29%2031%2070%2019l186%20-53l48%20188q10%2041%2051%2051q41%2012%2070%20-19l135%20-139l135%20139q29%2030%2070%2019q41%20-10%2051%20-51l48%20-188l186%2053q41%2012%2070%20-19q31%20-29%2019%20-70%20l-53%20-186l188%20-48q40%20-10%2052%20-51q10%20-42%20-20%20-70z"
            ],
            "\uf0a4": [
                1792.0,
                "M256%20192q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1664%20768q0%2051%20-39%2089.5t-89%2038.5h-576q0%2020%2015%2048.5t33%2055t33%2068t15%2084.5q0%2067%20-44.5%2097.5t-115.5%2030.5q-24%200%20-90%20-139q-24%20-44%20-37%20-65q-40%20-64%20-112%20-145q-71%20-81%20-101%20-106%20q-69%20-57%20-140%20-57h-32v-640h32q72%200%20167%20-32t193.5%20-64t179.5%20-32q189%200%20189%20167q0%2026%20-5%2056q30%2016%2047.5%2052.5t17.5%2073.5t-18%2069q53%2050%2053%20119q0%2025%20-10%2055.5t-25%2047.5h331q52%200%2090%2038t38%2090zM1792%20769q0%20-105%20-75.5%20-181t-180.5%20-76h-169q-4%20-62%20-37%20-119q3%20-21%203%20-43%20q0%20-101%20-60%20-178q1%20-139%20-85%20-219.5t-227%20-80.5q-133%200%20-322%2069q-164%2059%20-223%2059h-288q-53%200%20-90.5%2037.5t-37.5%2090.5v640q0%2053%2037.5%2090.5t90.5%2037.5h288q10%200%2021.5%204.5t23.5%2014t22.5%2018t24%2022.5t20.5%2021.5t19%2021.5t14%2017q65%2074%20100%20129q13%2021%2033%2062t37%2072t40.5%2063t55%2049.5%20t69.5%2017.5q125%200%20206.5%20-67t81.5%20-189q0%20-68%20-22%20-128h374q104%200%20180%20-76t76%20-179z"
            ],
            "\uf0a5": [
                1792.0,
                "M1376%20128h32v640h-32q-35%200%20-67.5%2012t-62.5%2037t-50%2046t-49%2054q-8%209%20-12%2014q-72%2081%20-112%20145q-14%2022%20-38%2068q-1%203%20-10.5%2022.5t-18.5%2036t-20%2035.5t-21.5%2030.5t-18.5%2011.5q-71%200%20-115.5%20-30.5t-44.5%20-97.5q0%20-43%2015%20-84.5t33%20-68t33%20-55t15%20-48.5h-576q-50%200%20-89%20-38.5%20t-39%20-89.5q0%20-52%2038%20-90t90%20-38h331q-15%20-17%20-25%20-47.5t-10%20-55.5q0%20-69%2053%20-119q-18%20-32%20-18%20-69t17.5%20-73.5t47.5%20-52.5q-4%20-24%20-4%20-56q0%20-85%2048.5%20-126t135.5%20-41q84%200%20183%2032t194%2064t167%2032zM1664%20192q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045z%20M1792%20768v-640q0%20-53%20-37.5%20-90.5t-90.5%20-37.5h-288q-59%200%20-223%20-59q-190%20-69%20-317%20-69q-142%200%20-230%2077.5t-87%20217.5l1%205q-61%2076%20-61%20178q0%2022%203%2043q-33%2057%20-37%20119h-169q-105%200%20-180.5%2076t-75.5%20181q0%20103%2076%20179t180%2076h374q-22%2060%20-22%20128q0%20122%2081.5%20189t206.5%2067%20q38%200%2069.5%20-17.5t55%20-49.5t40.5%20-63t37%20-72t33%20-62q35%20-55%20100%20-129q2%20-3%2014%20-17t19%20-21.5t20.5%20-21.5t24%20-22.5t22.5%20-18t23.5%20-14t21.5%20-4.5h288q53%200%2090.5%20-37.5t37.5%20-90.5z"
            ],
            "\uf0a6": [
                1536.0,
                "M1280%20-64q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1408%20700q0%20189%20-167%20189q-26%200%20-56%20-5q-16%2030%20-52.5%2047.5t-73.5%2017.5t-69%20-18q-50%2053%20-119%2053q-25%200%20-55.5%20-10t-47.5%20-25v331q0%2052%20-38%2090t-90%2038q-51%200%20-89.5%20-39t-38.5%20-89v-576%20q-20%200%20-48.5%2015t-55%2033t-68%2033t-84.5%2015q-67%200%20-97.5%20-44.5t-30.5%20-115.5q0%20-24%20139%20-90q44%20-24%2065%20-37q64%20-40%20145%20-112q81%20-71%20106%20-101q57%20-69%2057%20-140v-32h640v32q0%2072%2032%20167t64%20193.5t32%20179.5zM1536%20705q0%20-133%20-69%20-322q-59%20-164%20-59%20-223v-288q0%20-53%20-37.5%20-90.5%20t-90.5%20-37.5h-640q-53%200%20-90.5%2037.5t-37.5%2090.5v288q0%2010%20-4.5%2021.5t-14%2023.5t-18%2022.5t-22.5%2024t-21.5%2020.5t-21.5%2019t-17%2014q-74%2065%20-129%20100q-21%2013%20-62%2033t-72%2037t-63%2040.5t-49.5%2055t-17.5%2069.5q0%20125%2067%20206.5t189%2081.5q68%200%20128%20-22v374q0%20104%2076%20180t179%2076%20q105%200%20181%20-75.5t76%20-180.5v-169q62%20-4%20119%20-37q21%203%2043%203q101%200%20178%20-60q139%201%20219.5%20-85t80.5%20-227z"
            ],
            "\uf0a7": [
                1536.0,
                "M1408%20576q0%2084%20-32%20183t-64%20194t-32%20167v32h-640v-32q0%20-35%20-12%20-67.5t-37%20-62.5t-46%20-50t-54%20-49q-9%20-8%20-14%20-12q-81%20-72%20-145%20-112q-22%20-14%20-68%20-38q-3%20-1%20-22.5%20-10.5t-36%20-18.5t-35.5%20-20t-30.5%20-21.5t-11.5%20-18.5q0%20-71%2030.5%20-115.5t97.5%20-44.5q43%200%2084.5%2015t68%2033%20t55%2033t48.5%2015v-576q0%20-50%2038.5%20-89t89.5%20-39q52%200%2090%2038t38%2090v331q46%20-35%20103%20-35q69%200%20119%2053q32%20-18%2069%20-18t73.5%2017.5t52.5%2047.5q24%20-4%2056%20-4q85%200%20126%2048.5t41%20135.5zM1280%201344q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1536%20580%20q0%20-142%20-77.5%20-230t-217.5%20-87l-5%201q-76%20-61%20-178%20-61q-22%200%20-43%203q-54%20-30%20-119%20-37v-169q0%20-105%20-76%20-180.5t-181%20-75.5q-103%200%20-179%2076t-76%20180v374q-54%20-22%20-128%20-22q-121%200%20-188.5%2081.5t-67.5%20206.5q0%2038%2017.5%2069.5t49.5%2055t63%2040.5t72%2037t62%2033q55%2035%20129%20100%20q3%202%2017%2014t21.5%2019t21.5%2020.5t22.5%2024t18%2022.5t14%2023.5t4.5%2021.5v288q0%2053%2037.5%2090.5t90.5%2037.5h640q53%200%2090.5%20-37.5t37.5%20-90.5v-288q0%20-59%2059%20-223q69%20-190%2069%20-317z"
            ],
            "\uf0a8": [
                1536.0,
                "M1280%20576v128q0%2026%20-19%2045t-45%2019h-502l189%20189q19%2019%2019%2045t-19%2045l-91%2091q-18%2018%20-45%2018t-45%20-18l-362%20-362l-91%20-91q-18%20-18%20-18%20-45t18%20-45l91%20-91l362%20-362q18%20-18%2045%20-18t45%2018l91%2091q18%2018%2018%2045t-18%2045l-189%20189h502q26%200%2045%2019t19%2045zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf0a9": [
                1536.0,
                "M1285%20640q0%2027%20-18%2045l-91%2091l-362%20362q-18%2018%20-45%2018t-45%20-18l-91%20-91q-18%20-18%20-18%20-45t18%20-45l189%20-189h-502q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h502l-189%20-189q-19%20-19%20-19%20-45t19%20-45l91%20-91q18%20-18%2045%20-18t45%2018l362%20362l91%2091q18%2018%2018%2045zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf0aa": [
                1536.0,
                "M1284%20641q0%2027%20-18%2045l-362%20362l-91%2091q-18%2018%20-45%2018t-45%20-18l-91%20-91l-362%20-362q-18%20-18%20-18%20-45t18%20-45l91%20-91q18%20-18%2045%20-18t45%2018l189%20189v-502q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045v502l189%20-189q19%20-19%2045%20-19t45%2019l91%2091q18%2018%2018%2045zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf0ab": [
                1536.0,
                "M1284%20639q0%2027%20-18%2045l-91%2091q-18%2018%20-45%2018t-45%20-18l-189%20-189v502q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-502l-189%20189q-19%2019%20-45%2019t-45%20-19l-91%20-91q-18%20-18%20-18%20-45t18%20-45l362%20-362l91%20-91q18%20-18%2045%20-18t45%2018l91%2091l362%20362q18%2018%2018%2045zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf0ac": [
                1536.0,
                "M768%201408q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5t-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103zM1042%20887q-2%20-1%20-9.5%20-9.5t-13.5%20-9.5q2%200%204.5%205t5%2011t3.5%207q6%207%2022%2015q14%206%2052%2012q34%208%2051%20-11%20q-2%202%209.5%2013t14.5%2012q3%202%2015%204.5t15%207.5l2%2022q-12%20-1%20-17.5%207t-6.5%2021q0%20-2%20-6%20-8q0%207%20-4.5%208t-11.5%20-1t-9%20-1q-10%203%20-15%207.5t-8%2016.5t-4%2015q-2%205%20-9.5%2011t-9.5%2010q-1%202%20-2.5%205.5t-3%206.5t-4%205.5t-5.5%202.5t-7%20-5t-7.5%20-10t-4.5%20-5q-3%202%20-6%201.5t-4.5%20-1t-4.5%20-3t-5%20-3.5%20q-3%20-2%20-8.5%20-3t-8.5%20-2q15%205%20-1%2011q-10%204%20-16%203q9%204%207.5%2012t-8.5%2014h5q-1%204%20-8.5%208.5t-17.5%208.5t-13%206q-8%205%20-34%209.5t-33%200.5q-5%20-6%20-4.5%20-10.5t4%20-14t3.5%20-12.5q1%20-6%20-5.5%20-13t-6.5%20-12q0%20-7%2014%20-15.5t10%20-21.5q-3%20-8%20-16%20-16t-16%20-12q-5%20-8%20-1.5%20-18.5t10.5%20-16.5%20q2%20-2%201.5%20-4t-3.5%20-4.5t-5.5%20-4t-6.5%20-3.5l-3%20-2q-11%20-5%20-20.5%206t-13.5%2026q-7%2025%20-16%2030q-23%208%20-29%20-1q-5%2013%20-41%2026q-25%209%20-58%204q6%201%200%2015q-7%2015%20-19%2012q3%206%204%2017.5t1%2013.5q3%2013%2012%2023q1%201%207%208.5t9.5%2013.5t0.5%206q35%20-4%2050%2011q5%205%2011.5%2017t10.5%2017q9%206%2014%205.5t14.5%20-5.5%20t14.5%20-5q14%20-1%2015.5%2011t-7.5%2020q12%20-1%203%2017q-4%207%20-8%209q-12%204%20-27%20-5q-8%20-4%202%20-8q-1%201%20-9.5%20-10.5t-16.5%20-17.5t-16%205q-1%201%20-5.5%2013.5t-9.5%2013.5q-8%200%20-16%20-15q3%208%20-11%2015t-24%208q19%2012%20-8%2027q-7%204%20-20.5%205t-19.5%20-4q-5%20-7%20-5.5%20-11.5t5%20-8t10.5%20-5.5t11.5%20-4t8.5%20-3%20q14%20-10%208%20-14q-2%20-1%20-8.5%20-3.5t-11.5%20-4.5t-6%20-4q-3%20-4%200%20-14t-2%20-14q-5%205%20-9%2017.5t-7%2016.5q7%20-9%20-25%20-6l-10%201q-4%200%20-16%20-2t-20.5%20-1t-13.5%208q-4%208%200%2020q1%204%204%202q-4%203%20-11%209.5t-10%208.5q-46%20-15%20-94%20-41q6%20-1%2012%201q5%202%2013%206.5t10%205.5q34%2014%2042%207l5%205q14%20-16%2020%20-25%20q-7%204%20-30%201q-20%20-6%20-22%20-12q7%20-12%205%20-18q-4%203%20-11.5%2010t-14.5%2011t-15%205q-16%200%20-22%20-1q-146%20-80%20-235%20-222q7%20-7%2012%20-8q4%20-1%205%20-9t2.5%20-11t11.5%203q9%20-8%203%20-19q1%201%2044%20-27q19%20-17%2021%20-21q3%20-11%20-10%20-18q-1%202%20-9%209t-9%204q-3%20-5%200.5%20-18.5t10.5%20-12.5q-7%200%20-9.5%20-16t-2.5%20-35.5%20t-1%20-23.5l2%20-1q-3%20-12%205.5%20-34.5t21.5%20-19.5q-13%20-3%2020%20-43q6%20-8%208%20-9q3%20-2%2012%20-7.5t15%20-10t10%20-10.5q4%20-5%2010%20-22.5t14%20-23.5q-2%20-6%209.5%20-20t10.5%20-23q-1%200%20-2.5%20-1t-2.5%20-1q3%20-7%2015.5%20-14t15.5%20-13q1%20-3%202%20-10t3%20-11t8%20-2q2%2020%20-24%2062q-15%2025%20-17%2029q-3%205%20-5.5%2015.5%20t-4.5%2014.5q2%200%206%20-1.5t8.5%20-3.5t7.5%20-4t2%20-3q-3%20-7%202%20-17.5t12%20-18.5t17%20-19t12%20-13q6%20-6%2014%20-19.5t0%20-13.5q9%200%2020%20-10.5t17%20-19.5q5%20-8%208%20-26t5%20-24q2%20-7%208.5%20-13.5t12.5%20-9.5l16%20-8t13%20-7q5%20-2%2018.5%20-10.5t21.5%20-11.5q10%20-4%2016%20-4t14.5%202.5t13.5%203.5q15%202%2029%20-15t21%20-21%20q36%20-19%2055%20-11q-2%20-1%200.5%20-7.5t8%20-15.5t9%20-14.5t5.5%20-8.5q5%20-6%2018%20-15t18%20-15q6%204%207%209q-3%20-8%207%20-20t18%20-10q14%203%2014%2032q-31%20-15%20-49%2018q0%201%20-2.5%205.5t-4%208.5t-2.5%208.5t0%207.5t5%203q9%200%2010%203.5t-2%2012.5t-4%2013q-1%208%20-11%2020t-12%2015q-5%20-9%20-16%20-8t-16%209q0%20-1%20-1.5%20-5.5t-1.5%20-6.5%20q-13%200%20-15%201q1%203%202.5%2017.5t3.5%2022.5q1%204%205.5%2012t7.5%2014.5t4%2012.5t-4.5%209.5t-17.5%202.5q-19%20-1%20-26%20-20q-1%20-3%20-3%20-10.5t-5%20-11.5t-9%20-7q-7%20-3%20-24%20-2t-24%205q-13%208%20-22.5%2029t-9.5%2037q0%2010%202.5%2026.5t3%2025t-5.5%2024.5q3%202%209%209.5t10%2010.5q2%201%204.5%201.5t4.5%200t4%201.5t3%206q-1%201%20-4%203%20q-3%203%20-4%203q7%20-3%2028.5%201.5t27.5%20-1.5q15%20-11%2022%202q0%201%20-2.5%209.5t-0.5%2013.5q5%20-27%2029%20-9q3%20-3%2015.5%20-5t17.5%20-5q3%20-2%207%20-5.5t5.5%20-4.5t5%200.5t8.5%206.5q10%20-14%2012%20-24q11%20-40%2019%20-44q7%20-3%2011%20-2t4.5%209.5t0%2014t-1.5%2012.5l-1%208v18l-1%208q-15%203%20-18.5%2012t1.5%2018.5t15%2018.5q1%201%208%203.5%20t15.5%206.5t12.5%208q21%2019%2015%2035q7%200%2011%209q-1%200%20-5%203t-7.5%205t-4.5%202q9%205%202%2016q5%203%207.5%2011t7.5%2010q9%20-12%2021%20-2q8%208%201%2016q5%207%2020.5%2010.5t18.5%209.5q7%20-2%208%202t1%2012t3%2012q4%205%2015%209t13%205l17%2011q3%204%200%204q18%20-2%2031%2011q10%2011%20-6%2020q3%206%20-3%209.5t-15%205.5q3%201%2011.5%200.5t10.5%201.5%20q15%2010%20-7%2016q-17%205%20-43%20-12zM879%2010q206%2036%20351%20189q-3%203%20-12.5%204.5t-12.5%203.5q-18%207%20-24%208q1%207%20-2.5%2013t-8%209t-12.5%208t-11%207q-2%202%20-7%206t-7%205.5t-7.5%204.5t-8.5%202t-10%20-1l-3%20-1q-3%20-1%20-5.5%20-2.5t-5.5%20-3t-4%20-3t0%20-2.5q-21%2017%20-36%2022q-5%201%20-11%205.5t-10.5%207t-10%201.5t-11.5%20-7%20q-5%20-5%20-6%20-15t-2%20-13q-7%205%200%2017.5t2%2018.5q-3%206%20-10.5%204.5t-12%20-4.5t-11.5%20-8.5t-9%20-6.5t-8.5%20-5.5t-8.5%20-7.5q-3%20-4%20-6%20-12t-5%20-11q-2%204%20-11.5%206.5t-9.5%205.5q2%20-10%204%20-35t5%20-38q7%20-31%20-12%20-48q-27%20-25%20-29%20-40q-4%20-22%2012%20-26q0%20-7%20-8%20-20.5t-7%20-21.5q0%20-6%202%20-16z"
            ],
            "\uf0ad": [
                1664.0,
                "M384%2064q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1028%20484l-682%20-682q-37%20-37%20-90%20-37q-52%200%20-91%2037l-106%20108q-38%2036%20-38%2090q0%2053%2038%2091l681%20681q39%20-98%20114.5%20-173.5t173.5%20-114.5zM1662%20919q0%20-39%20-23%20-106q-47%20-134%20-164.5%20-217.5%20t-258.5%20-83.5q-185%200%20-316.5%20131.5t-131.5%20316.5t131.5%20316.5t316.5%20131.5q58%200%20121.5%20-16.5t107.5%20-46.5q16%20-11%2016%20-28t-16%20-28l-293%20-169v-224l193%20-107q5%203%2079%2048.5t135.5%2081t70.5%2035.5q15%200%2023.5%20-10t8.5%20-25z"
            ],
            "\uf0ae": [
                1792.0,
                "M1024%20128h640v128h-640v-128zM640%20640h1024v128h-1024v-128zM1280%201152h384v128h-384v-128zM1792%20320v-256q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1792%20832v-256q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019%20t-19%2045v256q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45zM1792%201344v-256q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h1664q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0b0": [
                1408.0,
                "M1403%201241q17%20-41%20-14%20-70l-493%20-493v-742q0%20-42%20-39%20-59q-13%20-5%20-25%20-5q-27%200%20-45%2019l-256%20256q-19%2019%20-19%2045v486l-493%20493q-31%2029%20-14%2070q17%2039%2059%2039h1280q42%200%2059%20-39z"
            ],
            "\uf0b1": [
                1792.0,
                "M640%201280h512v128h-512v-128zM1792%20640v-480q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v480h672v-160q0%20-26%2019%20-45t45%20-19h320q26%200%2045%2019t19%2045v160h672zM1024%20640v-128h-256v128h256zM1792%201120v-384h-1792v384q0%2066%2047%20113t113%2047h352v160q0%2040%2028%2068%20t68%2028h576q40%200%2068%20-28t28%20-68v-160h352q66%200%20113%20-47t47%20-113z"
            ],
            "\uf0b2": [
                1536.0,
                "M1283%20995l-355%20-355l355%20-355l144%20144q29%2031%2070%2014q39%20-17%2039%20-59v-448q0%20-26%20-19%20-45t-45%20-19h-448q-42%200%20-59%2040q-17%2039%2014%2069l144%20144l-355%20355l-355%20-355l144%20-144q31%20-30%2014%20-69q-17%20-40%20-59%20-40h-448q-26%200%20-45%2019t-19%2045v448q0%2042%2040%2059q39%2017%2069%20-14l144%20-144%20l355%20355l-355%20355l-144%20-144q-19%20-19%20-45%20-19q-12%200%20-24%205q-40%2017%20-40%2059v448q0%2026%2019%2045t45%2019h448q42%200%2059%20-40q17%20-39%20-14%20-69l-144%20-144l355%20-355l355%20355l-144%20144q-31%2030%20-14%2069q17%2040%2059%2040h448q26%200%2045%20-19t19%20-45v-448q0%20-42%20-39%20-59q-13%20-5%20-25%20-5q-26%200%20-45%2019z%20"
            ],
            "\uf0c0": [
                1920.0,
                "M593%20640q-162%20-5%20-265%20-128h-134q-82%200%20-138%2040.5t-56%20118.5q0%20353%20124%20353q6%200%2043.5%20-21t97.5%20-42.5t119%20-21.5q67%200%20133%2023q-5%20-37%20-5%20-66q0%20-139%2081%20-256zM1664%203q0%20-120%20-73%20-189.5t-194%20-69.5h-874q-121%200%20-194%2069.5t-73%20189.5q0%2053%203.5%20103.5t14%20109t26.5%20108.5%20t43%2097.5t62%2081t85.5%2053.5t111.5%2020q10%200%2043%20-21.5t73%20-48t107%20-48t135%20-21.5t135%2021.5t107%2048t73%2048t43%2021.5q61%200%20111.5%20-20t85.5%20-53.5t62%20-81t43%20-97.5t26.5%20-108.5t14%20-109t3.5%20-103.5zM640%201280q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181t75%20181t181%2075t181%20-75%20t75%20-181zM1344%20896q0%20-159%20-112.5%20-271.5t-271.5%20-112.5t-271.5%20112.5t-112.5%20271.5t112.5%20271.5t271.5%20112.5t271.5%20-112.5t112.5%20-271.5zM1920%20671q0%20-78%20-56%20-118.5t-138%20-40.5h-134q-103%20123%20-265%20128q81%20117%2081%20256q0%2029%20-5%2066q66%20-23%20133%20-23q59%200%20119%2021.5t97.5%2042.5%20t43.5%2021q124%200%20124%20-353zM1792%201280q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181t75%20181t181%2075t181%20-75t75%20-181z"
            ],
            "\uf0c1": [
                1664.0,
                "M1456%20320q0%2040%20-28%2068l-208%20208q-28%2028%20-68%2028q-42%200%20-72%20-32q3%20-3%2019%20-18.5t21.5%20-21.5t15%20-19t13%20-25.5t3.5%20-27.5q0%20-40%20-28%20-68t-68%20-28q-15%200%20-27.5%203.5t-25.5%2013t-19%2015t-21.5%2021.5t-18.5%2019q-33%20-31%20-33%20-73q0%20-40%2028%20-68l206%20-207q27%20-27%2068%20-27q40%200%2068%2026%20l147%20146q28%2028%2028%2067zM753%201025q0%2040%20-28%2068l-206%20207q-28%2028%20-68%2028q-39%200%20-68%20-27l-147%20-146q-28%20-28%20-28%20-67q0%20-40%2028%20-68l208%20-208q27%20-27%2068%20-27q42%200%2072%2031q-3%203%20-19%2018.5t-21.5%2021.5t-15%2019t-13%2025.5t-3.5%2027.5q0%2040%2028%2068t68%2028q15%200%2027.5%20-3.5t25.5%20-13t19%20-15%20t21.5%20-21.5t18.5%20-19q33%2031%2033%2073zM1648%20320q0%20-120%20-85%20-203l-147%20-146q-83%20-83%20-203%20-83q-121%200%20-204%2085l-206%20207q-83%2083%20-83%20203q0%20123%2088%20209l-88%2088q-86%20-88%20-208%20-88q-120%200%20-204%2084l-208%20208q-84%2084%20-84%20204t85%20203l147%20146q83%2083%20203%2083q121%200%20204%20-85l206%20-207%20q83%20-83%2083%20-203q0%20-123%20-88%20-209l88%20-88q86%2088%20208%2088q120%200%20204%20-84l208%20-208q84%20-84%2084%20-204z"
            ],
            "\uf0c2": [
                1920.0,
                "M1920%20384q0%20-159%20-112.5%20-271.5t-271.5%20-112.5h-1088q-185%200%20-316.5%20131.5t-131.5%20316.5q0%20132%2071%20241.5t187%20163.5q-2%2028%20-2%2043q0%20212%20150%20362t362%20150q158%200%20286.5%20-88t187.5%20-230q70%2062%20166%2062q106%200%20181%20-75t75%20-181q0%20-75%20-41%20-138q129%20-30%20213%20-134.5t84%20-239.5z%20"
            ],
            "\uf0c3": [
                1664.0,
                "M1527%2088q56%20-89%2021.5%20-152.5t-140.5%20-63.5h-1152q-106%200%20-140.5%2063.5t21.5%20152.5l503%20793v399h-64q-26%200%20-45%2019t-19%2045t19%2045t45%2019h512q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19h-64v-399zM748%20813l-272%20-429h712l-272%20429l-20%2031v37v399h-128v-399v-37z"
            ],
            "\uf0c4": [
                1792.0,
                "M960%20640q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1260%20576l507%20-398q28%20-20%2025%20-56q-5%20-35%20-35%20-51l-128%20-64q-13%20-7%20-29%20-7q-17%200%20-31%208l-690%20387l-110%20-66q-8%20-4%20-12%20-5q14%20-49%2010%20-97q-7%20-77%20-56%20-147.5t-132%20-123.5q-132%20-84%20-277%20-84%20q-136%200%20-222%2078q-90%2084%20-79%20207q7%2076%2056%20147t131%20124q132%2084%20278%2084q83%200%20151%20-31q9%2013%2022%2022l122%2073l-122%2073q-13%209%20-22%2022q-68%20-31%20-151%20-31q-146%200%20-278%2084q-82%2053%20-131%20124t-56%20147q-5%2059%2015.5%20113t63.5%2093q85%2079%20222%2079q145%200%20277%20-84q83%20-52%20132%20-123t56%20-148%20q4%20-48%20-10%20-97q4%20-1%2012%20-5l110%20-66l690%20387q14%208%2031%208q16%200%2029%20-7l128%20-64q30%20-16%2035%20-51q3%20-36%20-25%20-56zM579%20836q46%2042%2021%20108t-106%20117q-92%2059%20-192%2059q-74%200%20-113%20-36q-46%20-42%20-21%20-108t106%20-117q92%20-59%20192%20-59q74%200%20113%2036zM494%2091q81%2051%20106%20117t-21%20108%20q-39%2036%20-113%2036q-100%200%20-192%20-59q-81%20-51%20-106%20-117t21%20-108q39%20-36%20113%20-36q100%200%20192%2059zM672%20704l96%20-58v11q0%2036%2033%2056l14%208l-79%2047l-26%20-26q-3%20-3%20-10%20-11t-12%20-12q-2%20-2%20-4%20-3.5t-3%20-2.5zM896%20480l96%20-32l736%20576l-128%2064l-768%20-431v-113l-160%20-96l9%20-8q2%20-2%207%20-6%20q4%20-4%2011%20-12t11%20-12l26%20-26zM1600%2064l128%2064l-520%20408l-177%20-138q-2%20-3%20-13%20-7z"
            ],
            "\uf0c5": [
                1792.0,
                "M1696%201152q40%200%2068%20-28t28%20-68v-1216q0%20-40%20-28%20-68t-68%20-28h-960q-40%200%20-68%2028t-28%2068v288h-544q-40%200%20-68%2028t-28%2068v672q0%2040%2020%2088t48%2076l408%20408q28%2028%2076%2048t88%2020h416q40%200%2068%20-28t28%20-68v-328q68%2040%20128%2040h416zM1152%20939l-299%20-299h299v299zM512%201323l-299%20-299%20h299v299zM708%20676l316%20316v416h-384v-416q0%20-40%20-28%20-68t-68%20-28h-416v-640h512v256q0%2040%2020%2088t48%2076zM1664%20-128v1152h-384v-416q0%20-40%20-28%20-68t-68%20-28h-416v-640h896z"
            ],
            "\uf0c6": [
                1408.0,
                "M1404%20151q0%20-117%20-79%20-196t-196%20-79q-135%200%20-235%20100l-777%20776q-113%20115%20-113%20271q0%20159%20110%20270t269%20111q158%200%20273%20-113l605%20-606q10%20-10%2010%20-22q0%20-16%20-30.5%20-46.5t-46.5%20-30.5q-13%200%20-23%2010l-606%20607q-79%2077%20-181%2077q-106%200%20-179%20-75t-73%20-181q0%20-105%2076%20-181%20l776%20-777q63%20-63%20145%20-63q64%200%20106%2042t42%20106q0%2082%20-63%20145l-581%20581q-26%2024%20-60%2024q-29%200%20-48%20-19t-19%20-48q0%20-32%2025%20-59l410%20-410q10%20-10%2010%20-22q0%20-16%20-31%20-47t-47%20-31q-12%200%20-22%2010l-410%20410q-63%2061%20-63%20149q0%2082%2057%20139t139%2057q88%200%20149%20-63l581%20-581q100%20-98%20100%20-235%20z"
            ],
            "\uf0c7": [
                1536.0,
                "M384%200h768v384h-768v-384zM1280%200h128v896q0%2014%20-10%2038.5t-20%2034.5l-281%20281q-10%2010%20-34%2020t-39%2010v-416q0%20-40%20-28%20-68t-68%20-28h-576q-40%200%20-68%2028t-28%2068v416h-128v-1280h128v416q0%2040%2028%2068t68%2028h832q40%200%2068%20-28t28%20-68v-416zM896%20928v320q0%2013%20-9.5%2022.5t-22.5%209.5%20h-192q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-320q0%20-13%209.5%20-22.5t22.5%20-9.5h192q13%200%2022.5%209.5t9.5%2022.5zM1536%20896v-928q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1344q0%2040%2028%2068t68%2028h928q40%200%2088%20-20t76%20-48l280%20-280q28%20-28%2048%20-76t20%20-88z"
            ],
            "\uf0c8": [
                1536.0,
                "M1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf0c9": [
                1536.0,
                "M1536%20192v-128q0%20-26%20-19%20-45t-45%20-19h-1408q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45zM1536%20704v-128q0%20-26%20-19%20-45t-45%20-19h-1408q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45zM1536%201216v-128q0%20-26%20-19%20-45%20t-45%20-19h-1408q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0ca": [
                1792.0,
                "M384%20128q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM384%20640q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM1792%20224v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1216q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5%20t22.5%209.5h1216q13%200%2022.5%20-9.5t9.5%20-22.5zM384%201152q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM1792%20736v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1216q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1216q13%200%2022.5%20-9.5t9.5%20-22.5z%20M1792%201248v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1216q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1216q13%200%2022.5%20-9.5t9.5%20-22.5z"
            ],
            "\uf0cb": [
                1792.0,
                "M381%20-84q0%20-80%20-54.5%20-126t-135.5%20-46q-106%200%20-172%2066l57%2088q49%20-45%20106%20-45q29%200%2050.5%2014.5t21.5%2042.5q0%2064%20-105%2056l-26%2056q8%2010%2032.5%2043.5t42.5%2054t37%2038.5v1q-16%200%20-48.5%20-1t-48.5%20-1v-53h-106v152h333v-88l-95%20-115q51%20-12%2081%20-49t30%20-88zM383%20543v-159h-362%20q-6%2036%20-6%2054q0%2051%2023.5%2093t56.5%2068t66%2047.5t56.5%2043.5t23.5%2045q0%2025%20-14.5%2038.5t-39.5%2013.5q-46%200%20-81%20-58l-85%2059q24%2051%2071.5%2079.5t105.5%2028.5q73%200%20123%20-41.5t50%20-112.5q0%20-50%20-34%20-91.5t-75%20-64.5t-75.5%20-50.5t-35.5%20-52.5h127v60h105zM1792%20224v-192q0%20-13%20-9.5%20-22.5%20t-22.5%20-9.5h-1216q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2014%209%2023t23%209h1216q13%200%2022.5%20-9.5t9.5%20-22.5zM384%201123v-99h-335v99h107q0%2041%200.5%20121.5t0.5%20121.5v12h-2q-8%20-17%20-50%20-54l-71%2076l136%20127h106v-404h108zM1792%20736v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1216%20q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2014%209%2023t23%209h1216q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%201248v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1216q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1216q13%200%2022.5%20-9.5t9.5%20-22.5z"
            ],
            "\uf0cc": [
                1792.0,
                "M1760%20640q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-1728q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h1728zM483%20704q-28%2035%20-51%2080q-48%2098%20-48%20188q0%20181%20134%20309q133%20127%20393%20127q50%200%20167%20-19q66%20-12%20177%20-48q10%20-38%2021%20-118q14%20-123%2014%20-183q0%20-18%20-5%20-45l-12%20-3l-84%206%20l-14%202q-50%20149%20-103%20205q-88%2091%20-210%2091q-114%200%20-182%20-59q-67%20-58%20-67%20-146q0%20-73%2066%20-140t279%20-129q69%20-20%20173%20-66q58%20-28%2095%20-52h-743zM990%20448h411q7%20-39%207%20-92q0%20-111%20-41%20-212q-23%20-56%20-71%20-104q-37%20-35%20-109%20-81q-80%20-48%20-153%20-66q-80%20-21%20-203%20-21q-114%200%20-195%2023%20l-140%2040q-57%2016%20-72%2028q-8%208%20-8%2022v13q0%20108%20-2%20156q-1%2030%200%2068l2%2037v44l102%202q15%20-34%2030%20-71t22.5%20-56t12.5%20-27q35%20-57%2080%20-94q43%20-36%20105%20-57q59%20-22%20132%20-22q64%200%20139%2027q77%2026%20122%2086q47%2061%2047%20129q0%2084%20-81%20157q-34%2029%20-137%2071z"
            ],
            "\uf0cd": [
                1536.0,
                "M48%201313q-37%202%20-45%204l-3%2088q13%201%2040%201q60%200%20112%20-4q132%20-7%20166%20-7q86%200%20168%203q116%204%20146%205q56%200%2086%202l-1%20-14l2%20-64v-9q-60%20-9%20-124%20-9q-60%200%20-79%20-25q-13%20-14%20-13%20-132q0%20-13%200.5%20-32.5t0.5%20-25.5l1%20-229l14%20-280q6%20-124%2051%20-202q35%20-59%2096%20-92q88%20-47%20177%20-47%20q104%200%20191%2028q56%2018%2099%2051q48%2036%2065%2064q36%2056%2053%20114q21%2073%2021%20229q0%2079%20-3.5%20128t-11%20122.5t-13.5%20159.5l-4%2059q-5%2067%20-24%2088q-34%2035%20-77%2034l-100%20-2l-14%203l2%2086h84l205%20-10q76%20-3%20196%2010l18%20-2q6%20-38%206%20-51q0%20-7%20-4%20-31q-45%20-12%20-84%20-13q-73%20-11%20-79%20-17q-15%20-15%20-15%20-41%20q0%20-7%201.5%20-27t1.5%20-31q8%20-19%2022%20-396q6%20-195%20-15%20-304q-15%20-76%20-41%20-122q-38%20-65%20-112%20-123q-75%20-57%20-182%20-89q-109%20-33%20-255%20-33q-167%200%20-284%2046q-119%2047%20-179%20122q-61%2076%20-83%20195q-16%2080%20-16%20237v333q0%20188%20-17%20213q-25%2036%20-147%2039zM1536%20-96v64q0%2014%20-9%2023t-23%209h-1472%20q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h1472q14%200%2023%209t9%2023z"
            ],
            "\uf0ce": [
                1664.0,
                "M512%20160v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM512%20544v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1024%20160v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23%20v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM512%20928v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1024%20544v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1536%20160v192%20q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1024%20928v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1536%20544v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192%20q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1536%20928v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1664%201248v-1088q0%20-66%20-47%20-113t-113%20-47h-1344q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h1344q66%200%20113%20-47t47%20-113%20z"
            ],
            "\uf0d0": [
                1664.0,
                "M1190%20955l293%20293l-107%20107l-293%20-293zM1637%201248q0%20-27%20-18%20-45l-1286%20-1286q-18%20-18%20-45%20-18t-45%2018l-198%20198q-18%2018%20-18%2045t18%2045l1286%201286q18%2018%2045%2018t45%20-18l198%20-198q18%20-18%2018%20-45zM286%201438l98%20-30l-98%20-30l-30%20-98l-30%2098l-98%2030l98%2030l30%2098zM636%201276%20l196%20-60l-196%20-60l-60%20-196l-60%20196l-196%2060l196%2060l60%20196zM1566%20798l98%20-30l-98%20-30l-30%20-98l-30%2098l-98%2030l98%2030l30%2098zM926%201438l98%20-30l-98%20-30l-30%20-98l-30%2098l-98%2030l98%2030l30%2098z"
            ],
            "\uf0d1": [
                1792.0,
                "M640%20128q0%2052%20-38%2090t-90%2038t-90%20-38t-38%20-90t38%20-90t90%20-38t90%2038t38%2090zM256%20640h384v256h-158q-13%200%20-22%20-9l-195%20-195q-9%20-9%20-9%20-22v-30zM1536%20128q0%2052%20-38%2090t-90%2038t-90%20-38t-38%20-90t38%20-90t90%20-38t90%2038t38%2090zM1792%201216v-1024q0%20-15%20-4%20-26.5t-13.5%20-18.5%20t-16.5%20-11.5t-23.5%20-6t-22.5%20-2t-25.5%200t-22.5%200.5q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181h-384q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181h-64q-3%200%20-22.5%20-0.5t-25.5%200t-22.5%202t-23.5%206t-16.5%2011.5t-13.5%2018.5t-4%2026.5q0%2026%2019%2045t45%2019v320q0%208%20-0.5%2035t0%2038%20t2.5%2034.5t6.5%2037t14%2030.5t22.5%2030l198%20198q19%2019%2050.5%2032t58.5%2013h160v192q0%2026%2019%2045t45%2019h1024q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0d2": [
                1536.0,
                "M1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103q-111%200%20-218%2032q59%2093%2078%20164q9%2034%2054%20211q20%20-39%2073%20-67.5t114%20-28.5q121%200%20216%2068.5t147%20188.5t52%20270q0%20114%20-59.5%20214t-172.5%20163t-255%2063q-105%200%20-196%20-29t-154.5%20-77t-109%20-110.5t-67%20-129.5t-21.5%20-134%20q0%20-104%2040%20-183t117%20-111q30%20-12%2038%2020q2%207%208%2031t8%2030q6%2023%20-11%2043q-51%2061%20-51%20151q0%20151%20104.5%20259.5t273.5%20108.5q151%200%20235.5%20-82t84.5%20-213q0%20-170%20-68.5%20-289t-175.5%20-119q-61%200%20-98%2043.5t-23%20104.5q8%2035%2026.5%2093.5t30%20103t11.5%2075.5q0%2050%20-27%2083t-77%2033%20q-62%200%20-105%20-57t-43%20-142q0%20-73%2025%20-122l-99%20-418q-17%20-70%20-13%20-177q-206%2091%20-333%20281t-127%20423q0%20209%20103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf0d3": [
                1536.0,
                "M1248%201408q119%200%20203.5%20-84.5t84.5%20-203.5v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-725q85%20122%20108%20210q9%2034%2053%20209q21%20-39%2073.5%20-67t112.5%20-28q181%200%20295.5%20147.5t114.5%20373.5q0%2084%20-35%20162.5t-96.5%20139t-152.5%2097t-197%2036.5q-104%200%20-194.5%20-28.5t-153%20-76.5%20t-107.5%20-109.5t-66.5%20-128t-21.5%20-132.5q0%20-102%2039.5%20-180t116.5%20-110q13%20-5%2023.5%200t14.5%2019q10%2044%2015%2061q6%2023%20-11%2042q-50%2062%20-50%20150q0%20150%20103.5%20256.5t270.5%20106.5q149%200%20232.5%20-81t83.5%20-210q0%20-168%20-67.5%20-286t-173.5%20-118q-60%200%20-97%2043.5t-23%20103.5q8%2034%2026.5%2092.5%20t29.5%20102t11%2074.5q0%2049%20-26.5%2081.5t-75.5%2032.5q-61%200%20-103.5%20-56.5t-42.5%20-139.5q0%20-72%2024%20-121l-98%20-414q-24%20-100%20-7%20-254h-183q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960z"
            ],
            "\uf0d4": [
                1536.0,
                "M917%20631q0%2026%20-6%2064h-362v-132h217q-3%20-24%20-16.5%20-50t-37.5%20-53t-66.5%20-44.5t-96.5%20-17.5q-99%200%20-169%2071t-70%20171t70%20171t169%2071q92%200%20153%20-59l104%20101q-108%20100%20-257%20100q-160%200%20-272%20-112.5t-112%20-271.5t112%20-271.5t272%20-112.5q165%200%20266.5%20105t101.5%20270zM1262%20585%20h109v110h-109v110h-110v-110h-110v-110h110v-110h110v110zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf0d5": [
                2304.0,
                "M1437%20623q0%20-208%20-87%20-370.5t-248%20-254t-369%20-91.5q-149%200%20-285%2058t-234%20156t-156%20234t-58%20285t58%20285t156%20234t234%20156t285%2058q286%200%20491%20-192l-199%20-191q-117%20113%20-292%20113q-123%200%20-227.5%20-62t-165.5%20-168.5t-61%20-232.5t61%20-232.5t165.5%20-168.5t227.5%20-62%20q83%200%20152.5%2023t114.5%2057.5t78.5%2078.5t49%2083t21.5%2074h-416v252h692q12%20-63%2012%20-122zM2304%20745v-210h-209v-209h-210v209h-209v210h209v209h210v-209h209z"
            ],
            "\uf0d6": [
                1920.0,
                "M768%20384h384v96h-128v448h-114l-148%20-137l77%20-80q42%2037%2055%2057h2v-288h-128v-96zM1280%20640q0%20-70%20-21%20-142t-59.5%20-134t-101.5%20-101t-138%20-39t-138%2039t-101.5%20101t-59.5%20134t-21%20142t21%20142t59.5%20134t101.5%20101t138%2039t138%20-39t101.5%20-101t59.5%20-134t21%20-142zM1792%20384%20v512q-106%200%20-181%2075t-75%20181h-1152q0%20-106%20-75%20-181t-181%20-75v-512q106%200%20181%20-75t75%20-181h1152q0%20106%2075%20181t181%2075zM1920%201216v-1152q0%20-26%20-19%20-45t-45%20-19h-1792q-26%200%20-45%2019t-19%2045v1152q0%2026%2019%2045t45%2019h1792q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0d7": [
                1024.0,
                "M1024%20832q0%20-26%20-19%20-45l-448%20-448q-19%20-19%20-45%20-19t-45%2019l-448%20448q-19%2019%20-19%2045t19%2045t45%2019h896q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0d8": [
                1024.0,
                "M1024%20320q0%20-26%20-19%20-45t-45%20-19h-896q-26%200%20-45%2019t-19%2045t19%2045l448%20448q19%2019%2045%2019t45%20-19l448%20-448q19%20-19%2019%20-45z"
            ],
            "\uf0d9": [
                640.0,
                "M640%201088v-896q0%20-26%20-19%20-45t-45%20-19t-45%2019l-448%20448q-19%2019%20-19%2045t19%2045l448%20448q19%2019%2045%2019t45%20-19t19%20-45z"
            ],
            "\uf0da": [
                640.0,
                "M576%20640q0%20-26%20-19%20-45l-448%20-448q-19%20-19%20-45%20-19t-45%2019t-19%2045v896q0%2026%2019%2045t45%2019t45%20-19l448%20-448q19%20-19%2019%20-45z"
            ],
            "\uf0db": [
                1664.0,
                "M160%200h608v1152h-640v-1120q0%20-13%209.5%20-22.5t22.5%20-9.5zM1536%2032v1120h-640v-1152h608q13%200%2022.5%209.5t9.5%2022.5zM1664%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1344q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1344q66%200%20113%20-47t47%20-113z"
            ],
            "\uf0dc": [
                1024.0,
                "M1024%20448q0%20-26%20-19%20-45l-448%20-448q-19%20-19%20-45%20-19t-45%2019l-448%20448q-19%2019%20-19%2045t19%2045t45%2019h896q26%200%2045%20-19t19%20-45zM1024%20832q0%20-26%20-19%20-45t-45%20-19h-896q-26%200%20-45%2019t-19%2045t19%2045l448%20448q19%2019%2045%2019t45%20-19l448%20-448q19%20-19%2019%20-45z"
            ],
            "\uf0dd": [
                1024.0,
                "M1024%20448q0%20-26%20-19%20-45l-448%20-448q-19%20-19%20-45%20-19t-45%2019l-448%20448q-19%2019%20-19%2045t19%2045t45%2019h896q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0de": [
                1024.0,
                "M1024%20832q0%20-26%20-19%20-45t-45%20-19h-896q-26%200%20-45%2019t-19%2045t19%2045l448%20448q19%2019%2045%2019t45%20-19l448%20-448q19%20-19%2019%20-45z"
            ],
            "\uf0e0": [
                1792.0,
                "M1792%20826v-794q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v794q44%20-49%20101%20-87q362%20-246%20497%20-345q57%20-42%2092.5%20-65.5t94.5%20-48t110%20-24.5h1h1q51%200%20110%2024.5t94.5%2048t92.5%2065.5q170%20123%20498%20345q57%2039%20100%2087zM1792%201120q0%20-79%20-49%20-151t-122%20-123%20q-376%20-261%20-468%20-325q-10%20-7%20-42.5%20-30.5t-54%20-38t-52%20-32.5t-57.5%20-27t-50%20-9h-1h-1q-23%200%20-50%209t-57.5%2027t-52%2032.5t-54%2038t-42.5%2030.5q-91%2064%20-262%20182.5t-205%20142.5q-62%2042%20-117%20115.5t-55%20136.5q0%2078%2041.5%20130t118.5%2052h1472q65%200%20112.5%20-47t47.5%20-113z"
            ],
            "\uf0e1": [
                1536.0,
                "M349%20911v-991h-330v991h330zM370%201217q1%20-73%20-50.5%20-122t-135.5%20-49h-2q-82%200%20-132%2049t-50%20122q0%2074%2051.5%20122.5t134.5%2048.5t133%20-48.5t51%20-122.5zM1536%20488v-568h-329v530q0%20105%20-40.5%20164.5t-126.5%2059.5q-63%200%20-105.5%20-34.5t-63.5%20-85.5q-11%20-30%20-11%20-81v-553h-329%20q2%20399%202%20647t-1%20296l-1%2048h329v-144h-2q20%2032%2041%2056t56.5%2052t87%2043.5t114.5%2015.5q171%200%20275%20-113.5t104%20-332.5z"
            ],
            "\uf0e2": [
                1536.0,
                "M1536%20640q0%20-156%20-61%20-298t-164%20-245t-245%20-164t-298%20-61q-172%200%20-327%2072.5t-264%20204.5q-7%2010%20-6.5%2022.5t8.5%2020.5l137%20138q10%209%2025%209q16%20-2%2023%20-12q73%20-95%20179%20-147t225%20-52q104%200%20198.5%2040.5t163.5%20109.5t109.5%20163.5t40.5%20198.5t-40.5%20198.5t-109.5%20163.5%20t-163.5%20109.5t-198.5%2040.5q-98%200%20-188%20-35.5t-160%20-101.5l137%20-138q31%20-30%2014%20-69q-17%20-40%20-59%20-40h-448q-26%200%20-45%2019t-19%2045v448q0%2042%2040%2059q39%2017%2069%20-14l130%20-129q107%20101%20244.5%20156.5t284.5%2055.5q156%200%20298%20-61t245%20-164t164%20-245t61%20-298z"
            ],
            "\uf0e3": [
                1792.0,
                "M1771%200q0%20-53%20-37%20-90l-107%20-108q-39%20-37%20-91%20-37q-53%200%20-90%2037l-363%20364q-38%2036%20-38%2090q0%2053%2043%2096l-256%20256l-126%20-126q-14%20-14%20-34%20-14t-34%2014q2%20-2%2012.5%20-12t12.5%20-13t10%20-11.5t10%20-13.5t6%20-13.5t5.5%20-16.5t1.5%20-18q0%20-38%20-28%20-68q-3%20-3%20-16.5%20-18t-19%20-20.5%20t-18.5%20-16.5t-22%20-15.5t-22%20-9t-26%20-4.5q-40%200%20-68%2028l-408%20408q-28%2028%20-28%2068q0%2013%204.5%2026t9%2022t15.5%2022t16.5%2018.5t20.5%2019t18%2016.5q30%2028%2068%2028q10%200%2018%20-1.5t16.5%20-5.5t13.5%20-6t13.5%20-10t11.5%20-10t13%20-12.5t12%20-12.5q-14%2014%20-14%2034t14%2034l348%20348q14%2014%2034%2014t34%20-14%20q-2%202%20-12.5%2012t-12.5%2013t-10%2011.5t-10%2013.5t-6%2013.5t-5.5%2016.5t-1.5%2018q0%2038%2028%2068q3%203%2016.5%2018t19%2020.5t18.5%2016.5t22%2015.5t22%209t26%204.5q40%200%2068%20-28l408%20-408q28%20-28%2028%20-68q0%20-13%20-4.5%20-26t-9%20-22t-15.5%20-22t-16.5%20-18.5t-20.5%20-19t-18%20-16.5q-30%20-28%20-68%20-28%20q-10%200%20-18%201.5t-16.5%205.5t-13.5%206t-13.5%2010t-11.5%2010t-13%2012.5t-12%2012.5q14%20-14%2014%20-34t-14%20-34l-126%20-126l256%20-256q43%2043%2096%2043q52%200%2091%20-37l363%20-363q37%20-39%2037%20-91z"
            ],
            "\uf0e4": [
                1792.0,
                "M384%20384q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM576%20832q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1004%20351l101%20382q6%2026%20-7.5%2048.5t-38.5%2029.5%20t-48%20-6.5t-30%20-39.5l-101%20-382q-60%20-5%20-107%20-43.5t-63%20-98.5q-20%20-77%2020%20-146t117%20-89t146%2020t89%20117q16%2060%20-6%20117t-72%2091zM1664%20384q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1024%201024q0%2053%20-37.5%2090.5%20t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1472%20832q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1792%20384q0%20-261%20-141%20-483q-19%20-29%20-54%20-29h-1402q-35%200%20-54%2029%20q-141%20221%20-141%20483q0%20182%2071%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf0e5": [
                1792.0,
                "M896%201152q-204%200%20-381.5%20-69.5t-282%20-187.5t-104.5%20-255q0%20-112%2071.5%20-213.5t201.5%20-175.5l87%20-50l-27%20-96q-24%20-91%20-70%20-172q152%2063%20275%20171l43%2038l57%20-6q69%20-8%20130%20-8q204%200%20381.5%2069.5t282%20187.5t104.5%20255t-104.5%20255t-282%20187.5t-381.5%2069.5zM1792%20640%20q0%20-174%20-120%20-321.5t-326%20-233t-450%20-85.5q-70%200%20-145%208q-198%20-175%20-460%20-242q-49%20-14%20-114%20-22h-5q-15%200%20-27%2010.5t-16%2027.5v1q-3%204%20-0.5%2012t2%2010t4.5%209.5l6%209t7%208.5t8%209q7%208%2031%2034.5t34.5%2038t31%2039.5t32.5%2051t27%2059t26%2076q-157%2089%20-247.5%20220t-90.5%20281q0%20174%20120%20321.5%20t326%20233t450%2085.5t450%20-85.5t326%20-233t120%20-321.5z"
            ],
            "\uf0e6": [
                1792.0,
                "M704%201152q-153%200%20-286%20-52t-211.5%20-141t-78.5%20-191q0%20-82%2053%20-158t149%20-132l97%20-56l-35%20-84q34%2020%2062%2039l44%2031l53%20-10q78%20-14%20153%20-14q153%200%20286%2052t211.5%20141t78.5%20191t-78.5%20191t-211.5%20141t-286%2052zM704%201280q191%200%20353.5%20-68.5t256.5%20-186.5t94%20-257t-94%20-257%20t-256.5%20-186.5t-353.5%20-68.5q-86%200%20-176%2016q-124%20-88%20-278%20-128q-36%20-9%20-86%20-16h-3q-11%200%20-20.5%208t-11.5%2021q-1%203%20-1%206.5t0.5%206.5t2%206l2.5%205t3.5%205.5t4%205t4.5%205t4%204.5q5%206%2023%2025t26%2029.5t22.5%2029t25%2038.5t20.5%2044q-124%2072%20-195%20177t-71%20224q0%20139%2094%20257t256.5%20186.5%20t353.5%2068.5zM1526%20111q10%20-24%2020.5%20-44t25%20-38.5t22.5%20-29t26%20-29.5t23%20-25q1%20-1%204%20-4.5t4.5%20-5t4%20-5t3.5%20-5.5l2.5%20-5t2%20-6t0.5%20-6.5t-1%20-6.5q-3%20-14%20-13%20-22t-22%20-7q-50%207%20-86%2016q-154%2040%20-278%20128q-90%20-16%20-176%20-16q-271%200%20-472%20132q58%20-4%2088%20-4q161%200%20309%2045t264%20129%20q125%2092%20192%20212t67%20254q0%2077%20-23%20152q129%20-71%20204%20-178t75%20-230q0%20-120%20-71%20-224.5t-195%20-176.5z"
            ],
            "\uf0e7": [
                896.0,
                "M885%20970q18%20-20%207%20-44l-540%20-1157q-13%20-25%20-42%20-25q-4%200%20-14%202q-17%205%20-25.5%2019t-4.5%2030l197%20808l-406%20-101q-4%20-1%20-12%20-1q-18%200%20-31%2011q-18%2015%20-13%2039l201%20825q4%2014%2016%2023t28%209h328q19%200%2032%20-12.5t13%20-29.5q0%20-8%20-5%20-18l-171%20-463l396%2098q8%202%2012%202q19%200%2034%20-15z"
            ],
            "\uf0e8": [
                1792.0,
                "M1792%20288v-320q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v320q0%2040%2028%2068t68%2028h96v192h-512v-192h96q40%200%2068%20-28t28%20-68v-320q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v320q0%2040%2028%2068t68%2028h96v192h-512v-192h96q40%200%2068%20-28t28%20-68v-320%20q0%20-40%20-28%20-68t-68%20-28h-320q-40%200%20-68%2028t-28%2068v320q0%2040%2028%2068t68%2028h96v192q0%2052%2038%2090t90%2038h512v192h-96q-40%200%20-68%2028t-28%2068v320q0%2040%2028%2068t68%2028h320q40%200%2068%20-28t28%20-68v-320q0%20-40%20-28%20-68t-68%20-28h-96v-192h512q52%200%2090%20-38t38%20-90v-192h96q40%200%2068%20-28t28%20-68%20z"
            ],
            "\uf0e9": [
                1664.0,
                "M896%20708v-580q0%20-104%20-76%20-180t-180%20-76t-180%2076t-76%20180q0%2026%2019%2045t45%2019t45%20-19t19%20-45q0%20-50%2039%20-89t89%20-39t89%2039t39%2089v580q33%2011%2064%2011t64%20-11zM1664%20681q0%20-13%20-9.5%20-22.5t-22.5%20-9.5q-11%200%20-23%2010q-49%2046%20-93%2069t-102%2023q-68%200%20-128%20-37t-103%20-97%20q-7%20-10%20-17.5%20-28t-14.5%20-24q-11%20-17%20-28%20-17q-18%200%20-29%2017q-4%206%20-14.5%2024t-17.5%2028q-43%2060%20-102.5%2097t-127.5%2037t-127.5%20-37t-102.5%20-97q-7%20-10%20-17.5%20-28t-14.5%20-24q-11%20-17%20-29%20-17q-17%200%20-28%2017q-4%206%20-14.5%2024t-17.5%2028q-43%2060%20-103%2097t-128%2037q-58%200%20-102%20-23t-93%20-69%20q-12%20-10%20-23%20-10q-13%200%20-22.5%209.5t-9.5%2022.5q0%205%201%207q45%20183%20172.5%20319.5t298%20204.5t360.5%2068q140%200%20274.5%20-40t246.5%20-113.5t194.5%20-187t115.5%20-251.5q1%20-2%201%20-7zM896%201408v-98q-42%202%20-64%202t-64%20-2v98q0%2026%2019%2045t45%2019t45%20-19t19%20-45z"
            ],
            "\uf0ea": [
                1792.0,
                "M768%20-128h896v640h-416q-40%200%20-68%2028t-28%2068v416h-384v-1152zM1024%201312v64q0%2013%20-9.5%2022.5t-22.5%209.5h-704q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-64q0%20-13%209.5%20-22.5t22.5%20-9.5h704q13%200%2022.5%209.5t9.5%2022.5zM1280%20640h299l-299%20299v-299zM1792%20512v-672q0%20-40%20-28%20-68t-68%20-28%20h-960q-40%200%20-68%2028t-28%2068v160h-544q-40%200%20-68%2028t-28%2068v1344q0%2040%2028%2068t68%2028h1088q40%200%2068%20-28t28%20-68v-328q21%20-13%2036%20-28l408%20-408q28%20-28%2048%20-76t20%20-88z"
            ],
            "\uf0eb": [
                1024.0,
                "M736%20960q0%20-13%20-9.5%20-22.5t-22.5%20-9.5t-22.5%209.5t-9.5%2022.5q0%2046%20-54%2071t-106%2025q-13%200%20-22.5%209.5t-9.5%2022.5t9.5%2022.5t22.5%209.5q50%200%2099.5%20-16t87%20-54t37.5%20-90zM896%20960q0%2072%20-34.5%20134t-90%20101.5t-123%2062t-136.5%2022.5t-136.5%20-22.5t-123%20-62t-90%20-101.5t-34.5%20-134%20q0%20-101%2068%20-180q10%20-11%2030.5%20-33t30.5%20-33q128%20-153%20141%20-298h228q13%20145%20141%20298q10%2011%2030.5%2033t30.5%2033q68%2079%2068%20180zM1024%20960q0%20-155%20-103%20-268q-45%20-49%20-74.5%20-87t-59.5%20-95.5t-34%20-107.5q47%20-28%2047%20-82q0%20-37%20-25%20-64q25%20-27%2025%20-64q0%20-52%20-45%20-81q13%20-23%2013%20-47%20q0%20-46%20-31.5%20-71t-77.5%20-25q-20%20-44%20-60%20-70t-87%20-26t-87%2026t-60%2070q-46%200%20-77.5%2025t-31.5%2071q0%2024%2013%2047q-45%2029%20-45%2081q0%2037%2025%2064q-25%2027%20-25%2064q0%2054%2047%2082q-4%2050%20-34%20107.5t-59.5%2095.5t-74.5%2087q-103%20113%20-103%20268q0%2099%2044.5%20184.5t117%20142t164%2089t186.5%2032.5%20t186.5%20-32.5t164%20-89t117%20-142t44.5%20-184.5z"
            ],
            "\uf0ec": [
                1792.0,
                "M1792%20352v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-1376v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5q-12%200%20-24%2010l-319%20320q-9%209%20-9%2022q0%2014%209%2023l320%20320q9%209%2023%209q13%200%2022.5%20-9.5t9.5%20-22.5v-192h1376q13%200%2022.5%20-9.5t9.5%20-22.5zM1792%20896q0%20-14%20-9%20-23l-320%20-320q-9%20-9%20-23%20-9%20q-13%200%20-22.5%209.5t-9.5%2022.5v192h-1376q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h1376v192q0%2014%209%2023t23%209q12%200%2024%20-10l319%20-319q9%20-9%209%20-23z"
            ],
            "\uf0ed": [
                1920.0,
                "M1280%20608q0%2014%20-9%2023t-23%209h-224v352q0%2013%20-9.5%2022.5t-22.5%209.5h-192q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-352h-224q-13%200%20-22.5%20-9.5t-9.5%20-22.5q0%20-14%209%20-23l352%20-352q9%20-9%2023%20-9t23%209l351%20351q10%2012%2010%2024zM1920%20384q0%20-159%20-112.5%20-271.5t-271.5%20-112.5h-1088%20q-185%200%20-316.5%20131.5t-131.5%20316.5q0%20130%2070%20240t188%20165q-2%2030%20-2%2043q0%20212%20150%20362t362%20150q156%200%20285.5%20-87t188.5%20-231q71%2062%20166%2062q106%200%20181%20-75t75%20-181q0%20-76%20-41%20-138q130%20-31%20213.5%20-135.5t83.5%20-238.5z"
            ],
            "\uf0ee": [
                1920.0,
                "M1280%20672q0%2014%20-9%2023l-352%20352q-9%209%20-23%209t-23%20-9l-351%20-351q-10%20-12%20-10%20-24q0%20-14%209%20-23t23%20-9h224v-352q0%20-13%209.5%20-22.5t22.5%20-9.5h192q13%200%2022.5%209.5t9.5%2022.5v352h224q13%200%2022.5%209.5t9.5%2022.5zM1920%20384q0%20-159%20-112.5%20-271.5t-271.5%20-112.5h-1088%20q-185%200%20-316.5%20131.5t-131.5%20316.5q0%20130%2070%20240t188%20165q-2%2030%20-2%2043q0%20212%20150%20362t362%20150q156%200%20285.5%20-87t188.5%20-231q71%2062%20166%2062q106%200%20181%20-75t75%20-181q0%20-76%20-41%20-138q130%20-31%20213.5%20-135.5t83.5%20-238.5z"
            ],
            "\uf0f0": [
                1408.0,
                "M384%20192q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019t45%20-19t19%20-45zM1408%20131q0%20-121%20-73%20-190t-194%20-69h-874q-121%200%20-194%2069t-73%20190q0%2068%205.5%20131t24%20138t47.5%20132.5t81%20103t120%2060.5q-22%20-52%20-22%20-120v-203q-58%20-20%20-93%20-70t-35%20-111q0%20-80%2056%20-136t136%20-56%20t136%2056t56%20136q0%2061%20-35.5%20111t-92.5%2070v203q0%2062%2025%2093q132%20-104%20295%20-104t295%20104q25%20-31%2025%20-93v-64q-106%200%20-181%20-75t-75%20-181v-89q-32%20-29%20-32%20-71q0%20-40%2028%20-68t68%20-28t68%2028t28%2068q0%2042%20-32%2071v89q0%2052%2038%2090t90%2038t90%20-38t38%20-90v-89q-32%20-29%20-32%20-71q0%20-40%2028%20-68%20t68%20-28t68%2028t28%2068q0%2042%20-32%2071v89q0%2068%20-34.5%20127.5t-93.5%2093.5q0%2010%200.5%2042.5t0%2048t-2.5%2041.5t-7%2047t-13%2040q68%20-15%20120%20-60.5t81%20-103t47.5%20-132.5t24%20-138t5.5%20-131zM1088%201024q0%20-159%20-112.5%20-271.5t-271.5%20-112.5t-271.5%20112.5t-112.5%20271.5t112.5%20271.5t271.5%20112.5%20t271.5%20-112.5t112.5%20-271.5z"
            ],
            "\uf0f1": [
                1408.0,
                "M1280%20832q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1408%20832q0%20-62%20-35.5%20-111t-92.5%20-70v-395q0%20-159%20-131.5%20-271.5t-316.5%20-112.5t-316.5%20112.5t-131.5%20271.5v132q-164%2020%20-274%20128t-110%20252v512q0%2026%2019%2045t45%2019q6%200%2016%20-2q17%2030%2047%2048%20t65%2018q53%200%2090.5%20-37.5t37.5%20-90.5t-37.5%20-90.5t-90.5%20-37.5q-33%200%20-64%2018v-402q0%20-106%2094%20-181t226%20-75t226%2075t94%20181v402q-31%20-18%20-64%20-18q-53%200%20-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5q35%200%2065%20-18t47%20-48q10%202%2016%202q26%200%2045%20-19t19%20-45v-512q0%20-144%20-110%20-252%20t-274%20-128v-132q0%20-106%2094%20-181t226%20-75t226%2075t94%20181v395q-57%2021%20-92.5%2070t-35.5%20111q0%2080%2056%20136t136%2056t136%20-56t56%20-136z"
            ],
            "\uf0f2": [
                1792.0,
                "M640%201152h512v128h-512v-128zM288%201152v-1280h-64q-92%200%20-158%2066t-66%20158v832q0%2092%2066%20158t158%2066h64zM1408%201152v-1280h-1024v1280h128v160q0%2040%2028%2068t68%2028h576q40%200%2068%20-28t28%20-68v-160h128zM1792%20928v-832q0%20-92%20-66%20-158t-158%20-66h-64v1280h64q92%200%20158%20-66%20t66%20-158z"
            ],
            "\uf0a2": [
                1792.0,
                "M912%20-160q0%2016%20-16%2016q-59%200%20-101.5%2042.5t-42.5%20101.5q0%2016%20-16%2016t-16%20-16q0%20-73%2051.5%20-124.5t124.5%20-51.5q16%200%2016%2016zM246%20128h1300q-266%20300%20-266%20832q0%2051%20-24%20105t-69%20103t-121.5%2080.5t-169.5%2031.5t-169.5%20-31.5t-121.5%20-80.5t-69%20-103t-24%20-105q0%20-532%20-266%20-832z%20M1728%20128q0%20-52%20-38%20-90t-90%20-38h-448q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181h-448q-52%200%20-90%2038t-38%2090q50%2042%2091%2088t85%20119.5t74.5%20158.5t50%20206t19.5%20260q0%20152%20117%20282.5t307%20158.5q-8%2019%20-8%2039q0%2040%2028%2068t68%2028t68%20-28t28%20-68q0%20-20%20-8%20-39q190%20-28%20307%20-158.5%20t117%20-282.5q0%20-139%2019.5%20-260t50%20-206t74.5%20-158.5t85%20-119.5t91%20-88z"
            ],
            "\uf0f4": [
                1920.0,
                "M1664%20896q0%2080%20-56%20136t-136%2056h-64v-384h64q80%200%20136%2056t56%20136zM0%20128h1792q0%20-106%20-75%20-181t-181%20-75h-1280q-106%200%20-181%2075t-75%20181zM1856%20896q0%20-159%20-112.5%20-271.5t-271.5%20-112.5h-64v-32q0%20-92%20-66%20-158t-158%20-66h-704q-92%200%20-158%2066t-66%20158v736q0%2026%2019%2045%20t45%2019h1152q159%200%20271.5%20-112.5t112.5%20-271.5z"
            ],
            "\uf0f5": [
                1408.0,
                "M640%201472v-640q0%20-61%20-35.5%20-111t-92.5%20-70v-779q0%20-52%20-38%20-90t-90%20-38h-128q-52%200%20-90%2038t-38%2090v779q-57%2020%20-92.5%2070t-35.5%20111v640q0%2026%2019%2045t45%2019t45%20-19t19%20-45v-416q0%20-26%2019%20-45t45%20-19t45%2019t19%2045v416q0%2026%2019%2045t45%2019t45%20-19t19%20-45v-416q0%20-26%2019%20-45%20t45%20-19t45%2019t19%2045v416q0%2026%2019%2045t45%2019t45%20-19t19%20-45zM1408%201472v-1600q0%20-52%20-38%20-90t-90%20-38h-128q-52%200%20-90%2038t-38%2090v512h-224q-13%200%20-22.5%209.5t-9.5%2022.5v800q0%20132%2094%20226t226%2094h256q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0f6": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M384%20736q0%2014%209%2023t23%209h704q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-704q-14%200%20-23%209t-9%2023v64zM1120%20512q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-704q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h704zM1120%20256q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-704%20q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h704z"
            ],
            "\uf0f7": [
                1408.0,
                "M384%20224v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM384%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M640%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM384%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M1152%20224v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM896%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M640%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM384%20992v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M1152%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM896%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M640%20992v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM384%201248v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M1152%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM896%20992v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M640%201248v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM1152%20992v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M896%201248v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM1152%201248v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M896%20-128h384v1536h-1152v-1536h384v224q0%2013%209.5%2022.5t22.5%209.5h320q13%200%2022.5%20-9.5t9.5%20-22.5v-224zM1408%201472v-1664q0%20-26%20-19%20-45t-45%20-19h-1280q-26%200%20-45%2019t-19%2045v1664q0%2026%2019%2045t45%2019h1280q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0f8": [
                1408.0,
                "M384%20224v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM384%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M640%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM384%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M1152%20224v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM896%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M640%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM1152%20480v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M896%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5zM1152%20736v-64q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-64q-13%200%20-22.5%209.5t-9.5%2022.5v64q0%2013%209.5%2022.5t22.5%209.5h64q13%200%2022.5%20-9.5t9.5%20-22.5z%20M896%20-128h384v1152h-256v-32q0%20-40%20-28%20-68t-68%20-28h-448q-40%200%20-68%2028t-28%2068v32h-256v-1152h384v224q0%2013%209.5%2022.5t22.5%209.5h320q13%200%2022.5%20-9.5t9.5%20-22.5v-224zM896%201056v320q0%2013%20-9.5%2022.5t-22.5%209.5h-64q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-96h-128v96q0%2013%20-9.5%2022.5%20t-22.5%209.5h-64q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-320q0%20-13%209.5%20-22.5t22.5%20-9.5h64q13%200%2022.5%209.5t9.5%2022.5v96h128v-96q0%20-13%209.5%20-22.5t22.5%20-9.5h64q13%200%2022.5%209.5t9.5%2022.5zM1408%201088v-1280q0%20-26%20-19%20-45t-45%20-19h-1280q-26%200%20-45%2019t-19%2045v1280q0%2026%2019%2045t45%2019h320%20v288q0%2040%2028%2068t68%2028h448q40%200%2068%20-28t28%20-68v-288h320q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0f9": [
                1920.0,
                "M640%20128q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM256%20640h384v256h-158q-14%20-2%20-22%20-9l-195%20-195q-7%20-12%20-9%20-22v-30zM1536%20128q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5%20t90.5%2037.5t37.5%2090.5zM1664%20800v192q0%2014%20-9%2023t-23%209h-224v224q0%2014%20-9%2023t-23%209h-192q-14%200%20-23%20-9t-9%20-23v-224h-224q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h224v-224q0%20-14%209%20-23t23%20-9h192q14%200%2023%209t9%2023v224h224q14%200%2023%209t9%2023zM1920%201344v-1152%20q0%20-26%20-19%20-45t-45%20-19h-192q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181h-384q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181h-128q-26%200%20-45%2019t-19%2045t19%2045t45%2019v416q0%2026%2013%2058t32%2051l198%20198q19%2019%2051%2032t58%2013h160v320q0%2026%2019%2045t45%2019h1152q26%200%2045%20-19t19%20-45z"
            ],
            "\uf0fa": [
                1792.0,
                "M1280%20416v192q0%2014%20-9%2023t-23%209h-224v224q0%2014%20-9%2023t-23%209h-192q-14%200%20-23%20-9t-9%20-23v-224h-224q-14%200%20-23%20-9t-9%20-23v-192q0%20-14%209%20-23t23%20-9h224v-224q0%20-14%209%20-23t23%20-9h192q14%200%2023%209t9%2023v224h224q14%200%2023%209t9%2023zM640%201152h512v128h-512v-128zM256%201152v-1280h-32%20q-92%200%20-158%2066t-66%20158v832q0%2092%2066%20158t158%2066h32zM1440%201152v-1280h-1088v1280h160v160q0%2040%2028%2068t68%2028h576q40%200%2068%20-28t28%20-68v-160h160zM1792%20928v-832q0%20-92%20-66%20-158t-158%20-66h-32v1280h32q92%200%20158%20-66t66%20-158z"
            ],
            "\uf0fb": [
                1920.0,
                "M1920%20576q-1%20-32%20-288%20-96l-352%20-32l-224%20-64h-64l-293%20-352h69q26%200%2045%20-4.5t19%20-11.5t-19%20-11.5t-45%20-4.5h-96h-160h-64v32h64v416h-160l-192%20-224h-96l-32%2032v192h32v32h128v8l-192%2024v128l192%2024v8h-128v32h-32v192l32%2032h96l192%20-224h160v416h-64v32h64h160h96%20q26%200%2045%20-4.5t19%20-11.5t-19%20-11.5t-45%20-4.5h-69l293%20-352h64l224%20-64l352%20-32q128%20-28%20200%20-52t80%20-34z"
            ],
            "\uf0fc": [
                1664.0,
                "M640%20640v384h-256v-256q0%20-53%2037.5%20-90.5t90.5%20-37.5h128zM1664%20192v-192h-1152v192l128%20192h-128q-159%200%20-271.5%20112.5t-112.5%20271.5v320l-64%2064l32%20128h480l32%20128h960l32%20-192l-64%20-32v-800z"
            ],
            "\uf0fd": [
                1536.0,
                "M1280%20192v896q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-320h-512v320q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-896q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045v320h512v-320q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045zM1536%201120v-960%20q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf0fe": [
                1536.0,
                "M1280%20576v128q0%2026%20-19%2045t-45%2019h-320v320q0%2026%20-19%2045t-45%2019h-128q-26%200%20-45%20-19t-19%20-45v-320h-320q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h320v-320q0%20-26%2019%20-45t45%20-19h128q26%200%2045%2019t19%2045v320h320q26%200%2045%2019t19%2045zM1536%201120v-960%20q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf100": [
                1024.0,
                "M627%20160q0%20-13%20-10%20-23l-50%20-50q-10%20-10%20-23%20-10t-23%2010l-466%20466q-10%2010%20-10%2023t10%2023l466%20466q10%2010%2023%2010t23%20-10l50%20-50q10%20-10%2010%20-23t-10%20-23l-393%20-393l393%20-393q10%20-10%2010%20-23zM1011%20160q0%20-13%20-10%20-23l-50%20-50q-10%20-10%20-23%20-10t-23%2010l-466%20466q-10%2010%20-10%2023%20t10%2023l466%20466q10%2010%2023%2010t23%20-10l50%20-50q10%20-10%2010%20-23t-10%20-23l-393%20-393l393%20-393q10%20-10%2010%20-23z"
            ],
            "\uf101": [
                1024.0,
                "M595%20576q0%20-13%20-10%20-23l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023l393%20393l-393%20393q-10%2010%20-10%2023t10%2023l50%2050q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23zM979%20576q0%20-13%20-10%20-23l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023%20l393%20393l-393%20393q-10%2010%20-10%2023t10%2023l50%2050q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23z"
            ],
            "\uf102": [
                1152.0,
                "M1075%20224q0%20-13%20-10%20-23l-50%20-50q-10%20-10%20-23%20-10t-23%2010l-393%20393l-393%20-393q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023l466%20466q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23zM1075%20608q0%20-13%20-10%20-23l-50%20-50q-10%20-10%20-23%20-10t-23%2010l-393%20393l-393%20-393%20q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023l466%20466q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23z"
            ],
            "\uf103": [
                1152.0,
                "M1075%20672q0%20-13%20-10%20-23l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-466%20466q-10%2010%20-10%2023t10%2023l50%2050q10%2010%2023%2010t23%20-10l393%20-393l393%20393q10%2010%2023%2010t23%20-10l50%20-50q10%20-10%2010%20-23zM1075%201056q0%20-13%20-10%20-23l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-466%20466q-10%2010%20-10%2023%20t10%2023l50%2050q10%2010%2023%2010t23%20-10l393%20-393l393%20393q10%2010%2023%2010t23%20-10l50%20-50q10%20-10%2010%20-23z"
            ],
            "\uf104": [
                640.0,
                "M627%20992q0%20-13%20-10%20-23l-393%20-393l393%20-393q10%20-10%2010%20-23t-10%20-23l-50%20-50q-10%20-10%20-23%20-10t-23%2010l-466%20466q-10%2010%20-10%2023t10%2023l466%20466q10%2010%2023%2010t23%20-10l50%20-50q10%20-10%2010%20-23z"
            ],
            "\uf105": [
                640.0,
                "M595%20576q0%20-13%20-10%20-23l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023l393%20393l-393%20393q-10%2010%20-10%2023t10%2023l50%2050q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23z"
            ],
            "\uf106": [
                1152.0,
                "M1075%20352q0%20-13%20-10%20-23l-50%20-50q-10%20-10%20-23%20-10t-23%2010l-393%20393l-393%20-393q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023l466%20466q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23z"
            ],
            "\uf107": [
                1152.0,
                "M1075%20800q0%20-13%20-10%20-23l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-466%20466q-10%2010%20-10%2023t10%2023l50%2050q10%2010%2023%2010t23%20-10l393%20-393l393%20393q10%2010%2023%2010t23%20-10l50%20-50q10%20-10%2010%20-23z"
            ],
            "\uf108": [
                1920.0,
                "M1792%20544v832q0%2013%20-9.5%2022.5t-22.5%209.5h-1600q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-832q0%20-13%209.5%20-22.5t22.5%20-9.5h1600q13%200%2022.5%209.5t9.5%2022.5zM1920%201376v-1088q0%20-66%20-47%20-113t-113%20-47h-544q0%20-37%2016%20-77.5t32%20-71t16%20-43.5q0%20-26%20-19%20-45t-45%20-19h-512q-26%200%20-45%2019%20t-19%2045q0%2014%2016%2044t32%2070t16%2078h-544q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h1600q66%200%20113%20-47t47%20-113z"
            ],
            "\uf109": [
                1920.0,
                "M416%20256q-66%200%20-113%2047t-47%20113v704q0%2066%2047%20113t113%2047h1088q66%200%20113%20-47t47%20-113v-704q0%20-66%20-47%20-113t-113%20-47h-1088zM384%201120v-704q0%20-13%209.5%20-22.5t22.5%20-9.5h1088q13%200%2022.5%209.5t9.5%2022.5v704q0%2013%20-9.5%2022.5t-22.5%209.5h-1088q-13%200%20-22.5%20-9.5t-9.5%20-22.5z%20M1760%20192h160v-96q0%20-40%20-47%20-68t-113%20-28h-1600q-66%200%20-113%2028t-47%2068v96h160h1600zM1040%2096q16%200%2016%2016t-16%2016h-160q-16%200%20-16%20-16t16%20-16h160z"
            ],
            "\uf10a": [
                1152.0,
                "M640%20128q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1024%20288v960q0%2013%20-9.5%2022.5t-22.5%209.5h-832q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-960q0%20-13%209.5%20-22.5t22.5%20-9.5h832q13%200%2022.5%209.5t9.5%2022.5zM1152%201248v-1088q0%20-66%20-47%20-113t-113%20-47h-832%20q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h832q66%200%20113%20-47t47%20-113z"
            ],
            "\uf10b": [
                768.0,
                "M464%20128q0%2033%20-23.5%2056.5t-56.5%2023.5t-56.5%20-23.5t-23.5%20-56.5t23.5%20-56.5t56.5%20-23.5t56.5%2023.5t23.5%2056.5zM672%20288v704q0%2013%20-9.5%2022.5t-22.5%209.5h-512q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-704q0%20-13%209.5%20-22.5t22.5%20-9.5h512q13%200%2022.5%209.5t9.5%2022.5zM480%201136%20q0%2016%20-16%2016h-160q-16%200%20-16%20-16t16%20-16h160q16%200%2016%2016zM768%201152v-1024q0%20-52%20-38%20-90t-90%20-38h-512q-52%200%20-90%2038t-38%2090v1024q0%2052%2038%2090t90%2038h512q52%200%2090%20-38t38%20-90z"
            ],
            "\uf10c": [
                1536.0,
                "M768%201184q-148%200%20-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273t-73%20273t-198%20198t-273%2073zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103%20t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf10d": [
                1664.0,
                "M768%20576v-384q0%20-80%20-56%20-136t-136%20-56h-384q-80%200%20-136%2056t-56%20136v704q0%20104%2040.5%20198.5t109.5%20163.5t163.5%20109.5t198.5%2040.5h64q26%200%2045%20-19t19%20-45v-128q0%20-26%20-19%20-45t-45%20-19h-64q-106%200%20-181%20-75t-75%20-181v-32q0%20-40%2028%20-68t68%20-28h224q80%200%20136%20-56t56%20-136z%20M1664%20576v-384q0%20-80%20-56%20-136t-136%20-56h-384q-80%200%20-136%2056t-56%20136v704q0%20104%2040.5%20198.5t109.5%20163.5t163.5%20109.5t198.5%2040.5h64q26%200%2045%20-19t19%20-45v-128q0%20-26%20-19%20-45t-45%20-19h-64q-106%200%20-181%20-75t-75%20-181v-32q0%20-40%2028%20-68t68%20-28h224q80%200%20136%20-56t56%20-136z"
            ],
            "\uf10e": [
                1664.0,
                "M768%201216v-704q0%20-104%20-40.5%20-198.5t-109.5%20-163.5t-163.5%20-109.5t-198.5%20-40.5h-64q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h64q106%200%20181%2075t75%20181v32q0%2040%20-28%2068t-68%2028h-224q-80%200%20-136%2056t-56%20136v384q0%2080%2056%20136t136%2056h384q80%200%20136%20-56t56%20-136zM1664%201216%20v-704q0%20-104%20-40.5%20-198.5t-109.5%20-163.5t-163.5%20-109.5t-198.5%20-40.5h-64q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h64q106%200%20181%2075t75%20181v32q0%2040%20-28%2068t-68%2028h-224q-80%200%20-136%2056t-56%20136v384q0%2080%2056%20136t136%2056h384q80%200%20136%20-56t56%20-136z"
            ],
            "\uf110": [
                1792.0,
                "M526%20142q0%20-53%20-37.5%20-90.5t-90.5%20-37.5q-52%200%20-90%2038t-38%2090q0%2053%2037.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1024%20-64q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM320%20640q0%20-53%20-37.5%20-90.5t-90.5%20-37.5%20t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1522%20142q0%20-52%20-38%20-90t-90%20-38q-53%200%20-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM558%201138q0%20-66%20-47%20-113t-113%20-47t-113%2047t-47%20113t47%20113t113%2047t113%20-47t47%20-113z%20M1728%20640q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1088%201344q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM1618%201138q0%20-93%20-66%20-158.5t-158%20-65.5q-93%200%20-158.5%2065.5t-65.5%20158.5%20q0%2092%2065.5%20158t158.5%2066q92%200%20158%20-66t66%20-158z"
            ],
            "\uf111": [
                1536.0,
                "M1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf112": [
                1792.0,
                "M1792%20416q0%20-166%20-127%20-451q-3%20-7%20-10.5%20-24t-13.5%20-30t-13%20-22q-12%20-17%20-28%20-17q-15%200%20-23.5%2010t-8.5%2025q0%209%202.5%2026.5t2.5%2023.5q5%2068%205%20123q0%20101%20-17.5%20181t-48.5%20138.5t-80%20101t-105.5%2069.5t-133%2042.5t-154%2021.5t-175.5%206h-224v-256q0%20-26%20-19%20-45t-45%20-19t-45%2019%20l-512%20512q-19%2019%20-19%2045t19%2045l512%20512q19%2019%2045%2019t45%20-19t19%20-45v-256h224q713%200%20875%20-403q53%20-134%2053%20-333z"
            ],
            "\uf113": [
                1664.0,
                "M640%20320q0%20-40%20-12.5%20-82t-43%20-76t-72.5%20-34t-72.5%2034t-43%2076t-12.5%2082t12.5%2082t43%2076t72.5%2034t72.5%20-34t43%20-76t12.5%20-82zM1280%20320q0%20-40%20-12.5%20-82t-43%20-76t-72.5%20-34t-72.5%2034t-43%2076t-12.5%2082t12.5%2082t43%2076t72.5%2034t72.5%20-34t43%20-76t12.5%20-82zM1440%20320%20q0%20120%20-69%20204t-187%2084q-41%200%20-195%20-21q-71%20-11%20-157%20-11t-157%2011q-152%2021%20-195%2021q-118%200%20-187%20-84t-69%20-204q0%20-88%2032%20-153.5t81%20-103t122%20-60t140%20-29.5t149%20-7h168q82%200%20149%207t140%2029.5t122%2060t81%20103t32%20153.5zM1664%20496q0%20-207%20-61%20-331q-38%20-77%20-105.5%20-133t-141%20-86%20t-170%20-47.5t-171.5%20-22t-167%20-4.5q-78%200%20-142%203t-147.5%2012.5t-152.5%2030t-137%2051.5t-121%2081t-86%20115q-62%20123%20-62%20331q0%20237%20136%20396q-27%2082%20-27%20170q0%20116%2051%20218q108%200%20190%20-39.5t189%20-123.5q147%2035%20309%2035q148%200%20280%20-32q105%2082%20187%20121t189%2039q51%20-102%2051%20-218%20q0%20-87%20-27%20-168q136%20-160%20136%20-398z"
            ],
            "\uf114": [
                1664.0,
                "M1536%20224v704q0%2040%20-28%2068t-68%2028h-704q-40%200%20-68%2028t-28%2068v64q0%2040%20-28%2068t-68%2028h-320q-40%200%20-68%20-28t-28%20-68v-960q0%20-40%2028%20-68t68%20-28h1216q40%200%2068%2028t28%2068zM1664%20928v-704q0%20-92%20-66%20-158t-158%20-66h-1216q-92%200%20-158%2066t-66%20158v960q0%2092%2066%20158t158%2066h320%20q92%200%20158%20-66t66%20-158v-32h672q92%200%20158%20-66t66%20-158z"
            ],
            "\uf115": [
                1920.0,
                "M1781%20605q0%2035%20-53%2035h-1088q-40%200%20-85.5%20-21.5t-71.5%20-52.5l-294%20-363q-18%20-24%20-18%20-40q0%20-35%2053%20-35h1088q40%200%2086%2022t71%2053l294%20363q18%2022%2018%2039zM640%20768h768v160q0%2040%20-28%2068t-68%2028h-576q-40%200%20-68%2028t-28%2068v64q0%2040%20-28%2068t-68%2028h-320q-40%200%20-68%20-28t-28%20-68%20v-853l256%20315q44%2053%20116%2087.5t140%2034.5zM1909%20605q0%20-62%20-46%20-120l-295%20-363q-43%20-53%20-116%20-87.5t-140%20-34.5h-1088q-92%200%20-158%2066t-66%20158v960q0%2092%2066%20158t158%2066h320q92%200%20158%20-66t66%20-158v-32h544q92%200%20158%20-66t66%20-158v-160h192q54%200%2099%20-24.5t67%20-70.5q15%20-32%2015%20-68z%20"
            ],
            "\uf118": [
                1536.0,
                "M1134%20461q-37%20-121%20-138%20-195t-228%20-74t-228%2074t-138%20195q-8%2025%204%2048.5t38%2031.5q25%208%2048.5%20-4t31.5%20-38q25%20-80%2092.5%20-129.5t151.5%20-49.5t151.5%2049.5t92.5%20129.5q8%2026%2032%2038t49%204t37%20-31.5t4%20-48.5zM640%20896q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5%20t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1152%20896q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1408%20640q0%20130%20-51%20248.5t-136.5%20204t-204%20136.5t-248.5%2051t-248.5%20-51t-204%20-136.5t-136.5%20-204t-51%20-248.5%20t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5t136.5%20204t51%20248.5zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf119": [
                1536.0,
                "M1134%20307q8%20-25%20-4%20-48.5t-37%20-31.5t-49%204t-32%2038q-25%2080%20-92.5%20129.5t-151.5%2049.5t-151.5%20-49.5t-92.5%20-129.5q-8%20-26%20-31.5%20-38t-48.5%20-4q-26%208%20-38%2031.5t-4%2048.5q37%20121%20138%20195t228%2074t228%20-74t138%20-195zM640%20896q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5%20t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1152%20896q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1408%20640q0%20130%20-51%20248.5t-136.5%20204t-204%20136.5t-248.5%2051t-248.5%20-51t-204%20-136.5t-136.5%20-204%20t-51%20-248.5t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5t136.5%20204t51%20248.5zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf11a": [
                1536.0,
                "M1152%20448q0%20-26%20-19%20-45t-45%20-19h-640q-26%200%20-45%2019t-19%2045t19%2045t45%2019h640q26%200%2045%20-19t19%20-45zM640%20896q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1152%20896q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5%20t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1408%20640q0%20130%20-51%20248.5t-136.5%20204t-204%20136.5t-248.5%2051t-248.5%20-51t-204%20-136.5t-136.5%20-204t-51%20-248.5t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5t136.5%20204t51%20248.5zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf11b": [
                1920.0,
                "M832%20448v128q0%2014%20-9%2023t-23%209h-192v192q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-192h-192q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h192v-192q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023v192h192q14%200%2023%209t9%2023zM1408%20384q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5%20t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1664%20640q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1920%20512q0%20-212%20-150%20-362t-362%20-150q-192%200%20-338%20128h-220q-146%20-128%20-338%20-128q-212%200%20-362%20150%20t-150%20362t150%20362t362%20150h896q212%200%20362%20-150t150%20-362z"
            ],
            "\uf11c": [
                1920.0,
                "M384%20368v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM512%20624v-96q0%20-16%20-16%20-16h-224q-16%200%20-16%2016v96q0%2016%2016%2016h224q16%200%2016%20-16zM384%20880v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM1408%20368v-96q0%20-16%20-16%20-16%20h-864q-16%200%20-16%2016v96q0%2016%2016%2016h864q16%200%2016%20-16zM768%20624v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM640%20880v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM1024%20624v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016%20h96q16%200%2016%20-16zM896%20880v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM1280%20624v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM1664%20368v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM1152%20880v-96%20q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM1408%20880v-96q0%20-16%20-16%20-16h-96q-16%200%20-16%2016v96q0%2016%2016%2016h96q16%200%2016%20-16zM1664%20880v-352q0%20-16%20-16%20-16h-224q-16%200%20-16%2016v96q0%2016%2016%2016h112v240q0%2016%2016%2016h96q16%200%2016%20-16zM1792%20128v896h-1664v-896%20h1664zM1920%201024v-896q0%20-53%20-37.5%20-90.5t-90.5%20-37.5h-1664q-53%200%20-90.5%2037.5t-37.5%2090.5v896q0%2053%2037.5%2090.5t90.5%2037.5h1664q53%200%2090.5%20-37.5t37.5%20-90.5z"
            ],
            "\uf11d": [
                1792.0,
                "M1664%20491v616q-169%20-91%20-306%20-91q-82%200%20-145%2032q-100%2049%20-184%2076.5t-178%2027.5q-173%200%20-403%20-127v-599q245%20113%20433%20113q55%200%20103.5%20-7.5t98%20-26t77%20-31t82.5%20-39.5l28%20-14q44%20-22%20101%20-22q120%200%20293%2092zM320%201280q0%20-35%20-17.5%20-64t-46.5%20-46v-1266q0%20-14%20-9%20-23t-23%20-9%20h-64q-14%200%20-23%209t-9%2023v1266q-29%2017%20-46.5%2046t-17.5%2064q0%2053%2037.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1792%201216v-763q0%20-39%20-35%20-57q-10%20-5%20-17%20-9q-218%20-116%20-369%20-116q-88%200%20-158%2035l-28%2014q-64%2033%20-99%2048t-91%2029t-114%2014q-102%200%20-235.5%20-44t-228.5%20-102%20q-15%20-9%20-33%20-9q-16%200%20-32%208q-32%2019%20-32%2056v742q0%2035%2031%2055q35%2021%2078.5%2042.5t114%2052t152.5%2049.5t155%2019q112%200%20209%20-31t209%20-86q38%20-19%2089%20-19q122%200%20310%20112q22%2012%2031%2017q31%2016%2062%20-2q31%20-20%2031%20-55z"
            ],
            "\uf11e": [
                1792.0,
                "M832%20536v192q-181%20-16%20-384%20-117v-185q205%2096%20384%20110zM832%20954v197q-172%20-8%20-384%20-126v-189q215%20111%20384%20118zM1664%20491v184q-235%20-116%20-384%20-71v224q-20%206%20-39%2015q-5%203%20-33%2017t-34.5%2017t-31.5%2015t-34.5%2015.5t-32.5%2013t-36%2012.5t-35%208.5t-39.5%207.5t-39.5%204t-44%202%20q-23%200%20-49%20-3v-222h19q102%200%20192.5%20-29t197.5%20-82q19%20-9%2039%20-15v-188q42%20-17%2091%20-17q120%200%20293%2092zM1664%20918v189q-169%20-91%20-306%20-91q-45%200%20-78%208v-196q148%20-42%20384%2090zM320%201280q0%20-35%20-17.5%20-64t-46.5%20-46v-1266q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v1266%20q-29%2017%20-46.5%2046t-17.5%2064q0%2053%2037.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1792%201216v-763q0%20-39%20-35%20-57q-10%20-5%20-17%20-9q-218%20-116%20-369%20-116q-88%200%20-158%2035l-28%2014q-64%2033%20-99%2048t-91%2029t-114%2014q-102%200%20-235.5%20-44t-228.5%20-102q-15%20-9%20-33%20-9q-16%200%20-32%208%20q-32%2019%20-32%2056v742q0%2035%2031%2055q35%2021%2078.5%2042.5t114%2052t152.5%2049.5t155%2019q112%200%20209%20-31t209%20-86q38%20-19%2089%20-19q122%200%20310%20112q22%2012%2031%2017q31%2016%2062%20-2q31%20-20%2031%20-55z"
            ],
            "\uf120": [
                1664.0,
                "M585%20553l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023l393%20393l-393%20393q-10%2010%20-10%2023t10%2023l50%2050q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23t-10%20-23zM1664%2096v-64q0%20-14%20-9%20-23t-23%20-9h-960q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h960q14%200%2023%20-9%20t9%20-23z"
            ],
            "\uf121": [
                1920.0,
                "M617%20137l-50%20-50q-10%20-10%20-23%20-10t-23%2010l-466%20466q-10%2010%20-10%2023t10%2023l466%20466q10%2010%2023%2010t23%20-10l50%20-50q10%20-10%2010%20-23t-10%20-23l-393%20-393l393%20-393q10%20-10%2010%20-23t-10%20-23zM1208%201204l-373%20-1291q-4%20-13%20-15.5%20-19.5t-23.5%20-2.5l-62%2017q-13%204%20-19.5%2015.5t-2.5%2024.5%20l373%201291q4%2013%2015.5%2019.5t23.5%202.5l62%20-17q13%20-4%2019.5%20-15.5t2.5%20-24.5zM1865%20553l-466%20-466q-10%20-10%20-23%20-10t-23%2010l-50%2050q-10%2010%20-10%2023t10%2023l393%20393l-393%20393q-10%2010%20-10%2023t10%2023l50%2050q10%2010%2023%2010t23%20-10l466%20-466q10%20-10%2010%20-23t-10%20-23z"
            ],
            "\uf122": [
                1792.0,
                "M640%20454v-70q0%20-42%20-39%20-59q-13%20-5%20-25%20-5q-27%200%20-45%2019l-512%20512q-19%2019%20-19%2045t19%2045l512%20512q29%2031%2070%2014q39%20-17%2039%20-59v-69l-397%20-398q-19%20-19%20-19%20-45t19%20-45zM1792%20416q0%20-58%20-17%20-133.5t-38.5%20-138t-48%20-125t-40.5%20-90.5l-20%20-40q-8%20-17%20-28%20-17q-6%200%20-9%201%20q-25%208%20-23%2034q43%20400%20-106%20565q-64%2071%20-170.5%20110.5t-267.5%2052.5v-251q0%20-42%20-39%20-59q-13%20-5%20-25%20-5q-27%200%20-45%2019l-512%20512q-19%2019%20-19%2045t19%2045l512%20512q29%2031%2070%2014q39%20-17%2039%20-59v-262q411%20-28%20599%20-221q169%20-173%20169%20-509z"
            ],
            "\uf123": [
                1664.0,
                "M1186%20579l257%20250l-356%2052l-66%2010l-30%2060l-159%20322v-963l59%20-31l318%20-168l-60%20355l-12%2066zM1638%20841l-363%20-354l86%20-500q5%20-33%20-6%20-51.5t-34%20-18.5q-17%200%20-40%2012l-449%20236l-449%20-236q-23%20-12%20-40%20-12q-23%200%20-34%2018.5t-6%2051.5l86%20500l-364%20354q-32%2032%20-23%2059.5t54%2034.5%20l502%2073l225%20455q20%2041%2049%2041q28%200%2049%20-41l225%20-455l502%20-73q45%20-7%2054%20-34.5t-24%20-59.5z"
            ],
            "\uf124": [
                1408.0,
                "M1401%201187l-640%20-1280q-17%20-35%20-57%20-35q-5%200%20-15%202q-22%205%20-35.5%2022.5t-13.5%2039.5v576h-576q-22%200%20-39.5%2013.5t-22.5%2035.5t4%2042t29%2030l1280%20640q13%207%2029%207q27%200%2045%20-19q15%20-14%2018.5%20-34.5t-6.5%20-39.5z"
            ],
            "\uf125": [
                1664.0,
                "M557%20256h595v595zM512%20301l595%20595h-595v-595zM1664%20224v-192q0%20-14%20-9%20-23t-23%20-9h-224v-224q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v224h-864q-14%200%20-23%209t-9%2023v864h-224q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h224v224q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23%20v-224h851l246%20247q10%209%2023%209t23%20-9q9%20-10%209%20-23t-9%20-23l-247%20-246v-851h224q14%200%2023%20-9t9%20-23z"
            ],
            "\uf126": [
                1024.0,
                "M288%2064q0%2040%20-28%2068t-68%2028t-68%20-28t-28%20-68t28%20-68t68%20-28t68%2028t28%2068zM288%201216q0%2040%20-28%2068t-68%2028t-68%20-28t-28%20-68t28%20-68t68%20-28t68%2028t28%2068zM928%201088q0%2040%20-28%2068t-68%2028t-68%20-28t-28%20-68t28%20-68t68%20-28t68%2028t28%2068zM1024%201088q0%20-52%20-26%20-96.5t-70%20-69.5%20q-2%20-287%20-226%20-414q-67%20-38%20-203%20-81q-128%20-40%20-169.5%20-71t-41.5%20-100v-26q44%20-25%2070%20-69.5t26%20-96.5q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136q0%2052%2026%2096.5t70%2069.5v820q-44%2025%20-70%2069.5t-26%2096.5q0%2080%2056%20136t136%2056t136%20-56t56%20-136q0%20-52%20-26%20-96.5t-70%20-69.5v-497%20q54%2026%20154%2057q55%2017%2087.5%2029.5t70.5%2031t59%2039.5t40.5%2051t28%2069.5t8.5%2091.5q-44%2025%20-70%2069.5t-26%2096.5q0%2080%2056%20136t136%2056t136%20-56t56%20-136z"
            ],
            "\uf127": [
                1664.0,
                "M439%20265l-256%20-256q-11%20-9%20-23%20-9t-23%209q-9%2010%20-9%2023t9%2023l256%20256q10%209%2023%209t23%20-9q9%20-10%209%20-23t-9%20-23zM608%20224v-320q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023v320q0%2014%209%2023t23%209t23%20-9t9%20-23zM384%20448q0%20-14%20-9%20-23t-23%20-9h-320q-14%200%20-23%209t-9%2023t9%2023t23%209h320%20q14%200%2023%20-9t9%20-23zM1648%20320q0%20-120%20-85%20-203l-147%20-146q-83%20-83%20-203%20-83q-121%200%20-204%2085l-334%20335q-21%2021%20-42%2056l239%2018l273%20-274q27%20-27%2068%20-27.5t68%2026.5l147%20146q28%2028%2028%2067q0%2040%20-28%2068l-274%20275l18%20239q35%20-21%2056%20-42l336%20-336q84%20-86%2084%20-204zM1031%201044l-239%20-18%20l-273%20274q-28%2028%20-68%2028q-39%200%20-68%20-27l-147%20-146q-28%20-28%20-28%20-67q0%20-40%2028%20-68l274%20-274l-18%20-240q-35%2021%20-56%2042l-336%20336q-84%2086%20-84%20204q0%20120%2085%20203l147%20146q83%2083%20203%2083q121%200%20204%20-85l334%20-335q21%20-21%2042%20-56zM1664%20960q0%20-14%20-9%20-23t-23%20-9h-320q-14%200%20-23%209%20t-9%2023t9%2023t23%209h320q14%200%2023%20-9t9%20-23zM1120%201504v-320q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023v320q0%2014%209%2023t23%209t23%20-9t9%20-23zM1527%201353l-256%20-256q-11%20-9%20-23%20-9t-23%209q-9%2010%20-9%2023t9%2023l256%20256q10%209%2023%209t23%20-9q9%20-10%209%20-23t-9%20-23z"
            ],
            "\uf128": [
                1024.0,
                "M704%20280v-240q0%20-16%20-12%20-28t-28%20-12h-240q-16%200%20-28%2012t-12%2028v240q0%2016%2012%2028t28%2012h240q16%200%2028%20-12t12%20-28zM1020%20880q0%20-54%20-15.5%20-101t-35%20-76.5t-55%20-59.5t-57.5%20-43.5t-61%20-35.5q-41%20-23%20-68.5%20-65t-27.5%20-67q0%20-17%20-12%20-32.5t-28%20-15.5h-240q-15%200%20-25.5%2018.5%20t-10.5%2037.5v45q0%2083%2065%20156.5t143%20108.5q59%2027%2084%2056t25%2076q0%2042%20-46.5%2074t-107.5%2032q-65%200%20-108%20-29q-35%20-25%20-107%20-115q-13%20-16%20-31%20-16q-12%200%20-25%208l-164%20125q-13%2010%20-15.5%2025t5.5%2028q160%20266%20464%20266q80%200%20161%20-31t146%20-83t106%20-127.5t41%20-158.5z"
            ],
            "\uf129": [
                640.0,
                "M640%20192v-128q0%20-26%20-19%20-45t-45%20-19h-512q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h64v384h-64q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h384q26%200%2045%20-19t19%20-45v-576h64q26%200%2045%20-19t19%20-45zM512%201344v-192q0%20-26%20-19%20-45t-45%20-19h-256q-26%200%20-45%2019t-19%2045v192%20q0%2026%2019%2045t45%2019h256q26%200%2045%20-19t19%20-45z"
            ],
            "\uf12a": [
                640.0,
                "M512%20288v-224q0%20-26%20-19%20-45t-45%20-19h-256q-26%200%20-45%2019t-19%2045v224q0%2026%2019%2045t45%2019h256q26%200%2045%20-19t19%20-45zM542%201344l-28%20-768q-1%20-26%20-20.5%20-45t-45.5%20-19h-256q-26%200%20-45.5%2019t-20.5%2045l-28%20768q-1%2026%2017.5%2045t44.5%2019h320q26%200%2044.5%20-19t17.5%20-45z"
            ],
            "\uf12b": [
                1536.0,
                "M897%20167v-167h-248l-159%20252l-24%2042q-8%209%20-11%2021h-3q-1%20-3%20-2.5%20-6.5t-3.5%20-8t-3%20-6.5q-10%20-20%20-25%20-44l-155%20-250h-258v167h128l197%20291l-185%20272h-137v168h276l139%20-228q2%20-4%2023%20-42q8%20-9%2011%20-21h3q3%209%2011%2021l25%2042l140%20228h257v-168h-125l-184%20-267l204%20-296h109z%20M1534%20846v-206h-514l-3%2027q-4%2028%20-4%2046q0%2064%2026%20117t65%2086.5t84%2065t84%2054.5t65%2054t26%2064q0%2038%20-29.5%2062.5t-70.5%2024.5q-51%200%20-97%20-39q-14%20-11%20-36%20-38l-105%2092q26%2037%2063%2066q83%2065%20188%2065q110%200%20178%20-59.5t68%20-158.5q0%20-56%20-24.5%20-103t-62%20-76.5t-81.5%20-58.5t-82%20-50.5%20t-65.5%20-51.5t-30.5%20-63h232v80h126z"
            ],
            "\uf12c": [
                1536.0,
                "M897%20167v-167h-248l-159%20252l-24%2042q-8%209%20-11%2021h-3q-1%20-3%20-2.5%20-6.5t-3.5%20-8t-3%20-6.5q-10%20-20%20-25%20-44l-155%20-250h-258v167h128l197%20291l-185%20272h-137v168h276l139%20-228q2%20-4%2023%20-42q8%20-9%2011%20-21h3q3%209%2011%2021l25%2042l140%20228h257v-168h-125l-184%20-267l204%20-296h109z%20M1536%20-50v-206h-514l-4%2027q-3%2045%20-3%2046q0%2064%2026%20117t65%2086.5t84%2065t84%2054.5t65%2054t26%2064q0%2038%20-29.5%2062.5t-70.5%2024.5q-51%200%20-97%20-39q-14%20-11%20-36%20-38l-105%2092q26%2037%2063%2066q80%2065%20188%2065q110%200%20178%20-59.5t68%20-158.5q0%20-66%20-34.5%20-118.5t-84%20-86t-99.5%20-62.5t-87%20-63t-41%20-73%20h232v80h126z"
            ],
            "\uf12d": [
                1920.0,
                "M896%20128l336%20384h-768l-336%20-384h768zM1909%201205q15%20-34%209.5%20-71.5t-30.5%20-65.5l-896%20-1024q-38%20-44%20-96%20-44h-768q-38%200%20-69.5%2020.5t-47.5%2054.5q-15%2034%20-9.5%2071.5t30.5%2065.5l896%201024q38%2044%2096%2044h768q38%200%2069.5%20-20.5t47.5%20-54.5z"
            ],
            "\uf12e": [
                1664.0,
                "M1664%20438q0%20-81%20-44.5%20-135t-123.5%20-54q-41%200%20-77.5%2017.5t-59%2038t-56.5%2038t-71%2017.5q-110%200%20-110%20-124q0%20-39%2016%20-115t15%20-115v-5q-22%200%20-33%20-1q-34%20-3%20-97.5%20-11.5t-115.5%20-13.5t-98%20-5q-61%200%20-103%2026.5t-42%2083.5q0%2037%2017.5%2071t38%2056.5t38%2059t17.5%2077.5q0%2079%20-54%20123.5%20t-135%2044.5q-84%200%20-143%20-45.5t-59%20-127.5q0%20-43%2015%20-83t33.5%20-64.5t33.5%20-53t15%20-50.5q0%20-45%20-46%20-89q-37%20-35%20-117%20-35q-95%200%20-245%2024q-9%202%20-27.5%204t-27.5%204l-13%202q-1%200%20-3%201q-2%200%20-2%201v1024q2%20-1%2017.5%20-3.5t34%20-5t21.5%20-3.5q150%20-24%20245%20-24q80%200%20117%2035q46%2044%2046%2089%20q0%2022%20-15%2050.5t-33.5%2053t-33.5%2064.5t-15%2083q0%2082%2059%20127.5t144%2045.5q80%200%20134%20-44.5t54%20-123.5q0%20-41%20-17.5%20-77.5t-38%20-59t-38%20-56.5t-17.5%20-71q0%20-57%2042%20-83.5t103%20-26.5q64%200%20180%2015t163%2017v-2q-1%20-2%20-3.5%20-17.5t-5%20-34t-3.5%20-21.5q-24%20-150%20-24%20-245q0%20-80%2035%20-117%20q44%20-46%2089%20-46q22%200%2050.5%2015t53%2033.5t64.5%2033.5t83%2015q82%200%20127.5%20-59t45.5%20-143z"
            ],
            "\uf130": [
                1152.0,
                "M1152%20832v-128q0%20-221%20-147.5%20-384.5t-364.5%20-187.5v-132h256q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19h-640q-26%200%20-45%2019t-19%2045t19%2045t45%2019h256v132q-217%2024%20-364.5%20187.5t-147.5%20384.5v128q0%2026%2019%2045t45%2019t45%20-19t19%20-45v-128q0%20-185%20131.5%20-316.5t316.5%20-131.5%20t316.5%20131.5t131.5%20316.5v128q0%2026%2019%2045t45%2019t45%20-19t19%20-45zM896%201216v-512q0%20-132%20-94%20-226t-226%20-94t-226%2094t-94%20226v512q0%20132%2094%20226t226%2094t226%20-94t94%20-226z"
            ],
            "\uf131": [
                1408.0,
                "M271%20591l-101%20-101q-42%20103%20-42%20214v128q0%2026%2019%2045t45%2019t45%20-19t19%20-45v-128q0%20-53%2015%20-113zM1385%201193l-361%20-361v-128q0%20-132%20-94%20-226t-226%20-94q-55%200%20-109%2019l-96%20-96q97%20-51%20205%20-51q185%200%20316.5%20131.5t131.5%20316.5v128q0%2026%2019%2045t45%2019t45%20-19t19%20-45v-128%20q0%20-221%20-147.5%20-384.5t-364.5%20-187.5v-132h256q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19h-640q-26%200%20-45%2019t-19%2045t19%2045t45%2019h256v132q-125%2013%20-235%2081l-254%20-254q-10%20-10%20-23%20-10t-23%2010l-82%2082q-10%2010%20-10%2023t10%2023l1234%201234q10%2010%2023%2010t23%20-10l82%20-82q10%20-10%2010%20-23%20t-10%20-23zM1005%201325l-621%20-621v512q0%20132%2094%20226t226%2094q102%200%20184.5%20-59t116.5%20-152z"
            ],
            "\uf132": [
                1280.0,
                "M1088%20576v640h-448v-1137q119%2063%20213%20137q235%20184%20235%20360zM1280%201344v-768q0%20-86%20-33.5%20-170.5t-83%20-150t-118%20-127.5t-126.5%20-103t-121%20-77.5t-89.5%20-49.5t-42.5%20-20q-12%20-6%20-26%20-6t-26%206q-16%207%20-42.5%2020t-89.5%2049.5t-121%2077.5t-126.5%20103t-118%20127.5t-83%20150%20t-33.5%20170.5v768q0%2026%2019%2045t45%2019h1152q26%200%2045%20-19t19%20-45z"
            ],
            "\uf133": [
                1664.0,
                "M128%20-128h1408v1024h-1408v-1024zM512%201088v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1280%201088v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1664%201152v-1280%20q0%20-52%20-38%20-90t-90%20-38h-1408q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h128v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h384v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h128q52%200%2090%20-38t38%20-90z"
            ],
            "\uf134": [
                1408.0,
                "M512%201344q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1408%201376v-320q0%20-16%20-12%20-25q-8%20-7%20-20%20-7q-4%200%20-7%201l-448%2096q-11%202%20-18%2011t-7%2020h-256v-102q111%20-23%20183.5%20-111t72.5%20-203v-800q0%20-26%20-19%20-45t-45%20-19h-512q-26%200%20-45%2019t-19%2045v800%20q0%20106%2062.5%20190.5t161.5%20114.5v111h-32q-59%200%20-115%20-23.5t-91.5%20-53t-66%20-66.5t-40.5%20-53.5t-14%20-24.5q-17%20-35%20-57%20-35q-16%200%20-29%207q-23%2012%20-31.5%2037t3.5%2049q5%2010%2014.5%2026t37.5%2053.5t60.5%2070t85%2067t108.5%2052.5q-25%2042%20-25%2086q0%2066%2047%20113t113%2047t113%20-47t47%20-113%20q0%20-33%20-14%20-64h302q0%2011%207%2020t18%2011l448%2096q3%201%207%201q12%200%2020%20-7q12%20-9%2012%20-25z"
            ],
            "\uf135": [
                1664.0,
                "M1440%201088q0%2040%20-28%2068t-68%2028t-68%20-28t-28%20-68t28%20-68t68%20-28t68%2028t28%2068zM1664%201376q0%20-249%20-75.5%20-430.5t-253.5%20-360.5q-81%20-80%20-195%20-176l-20%20-379q-2%20-16%20-16%20-26l-384%20-224q-7%20-4%20-16%20-4q-12%200%20-23%209l-64%2064q-13%2014%20-8%2032l85%20276l-281%20281l-276%20-85q-3%20-1%20-9%20-1%20q-14%200%20-23%209l-64%2064q-17%2019%20-5%2039l224%20384q10%2014%2026%2016l379%2020q96%20114%20176%20195q188%20187%20358%20258t431%2071q14%200%2024%20-9.5t10%20-22.5z"
            ],
            "\uf136": [
                1792.0,
                "M1745%20763l-164%20-763h-334l178%20832q13%2056%20-15%2088q-27%2033%20-83%2033h-169l-204%20-953h-334l204%20953h-286l-204%20-953h-334l204%20953l-153%20327h1276q101%200%20189.5%20-40.5t147.5%20-113.5q60%20-73%2081%20-168.5t0%20-194.5z"
            ],
            "\uf137": [
                1536.0,
                "M909%20141l102%20102q19%2019%2019%2045t-19%2045l-307%20307l307%20307q19%2019%2019%2045t-19%2045l-102%20102q-19%2019%20-45%2019t-45%20-19l-454%20-454q-19%20-19%20-19%20-45t19%20-45l454%20-454q19%20-19%2045%20-19t45%2019zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5%20t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf138": [
                1536.0,
                "M717%20141l454%20454q19%2019%2019%2045t-19%2045l-454%20454q-19%2019%20-45%2019t-45%20-19l-102%20-102q-19%20-19%20-19%20-45t19%20-45l307%20-307l-307%20-307q-19%20-19%20-19%20-45t19%20-45l102%20-102q19%20-19%2045%20-19t45%2019zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5%20t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf139": [
                1536.0,
                "M1165%20397l102%20102q19%2019%2019%2045t-19%2045l-454%20454q-19%2019%20-45%2019t-45%20-19l-454%20-454q-19%20-19%20-19%20-45t19%20-45l102%20-102q19%20-19%2045%20-19t45%2019l307%20307l307%20-307q19%20-19%2045%20-19t45%2019zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5%20t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf13a": [
                1536.0,
                "M813%20237l454%20454q19%2019%2019%2045t-19%2045l-102%20102q-19%2019%20-45%2019t-45%20-19l-307%20-307l-307%20307q-19%2019%20-45%2019t-45%20-19l-102%20-102q-19%20-19%20-19%20-45t19%20-45l454%20-454q19%20-19%2045%20-19t45%2019zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5%20t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf13b": [
                1408.0,
                "M1130%20939l16%20175h-884l47%20-534h612l-22%20-228l-197%20-53l-196%2053l-13%20140h-175l22%20-278l362%20-100h4v1l359%2099l50%20544h-644l-15%20181h674zM0%201408h1408l-128%20-1438l-578%20-162l-574%20162z"
            ],
            "\uf13c": [
                1792.0,
                "M275%201408h1505l-266%20-1333l-804%20-267l-698%20267l71%20356h297l-29%20-147l422%20-161l486%20161l68%20339h-1208l58%20297h1209l38%20191h-1208z"
            ],
            "\uf13d": [
                1792.0,
                "M960%201280q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45t19%20-45t45%20-19t45%2019t19%2045zM1792%20352v-352q0%20-22%20-20%20-30q-8%20-2%20-12%20-2q-12%200%20-23%209l-93%2093q-119%20-143%20-318.5%20-226.5t-429.5%20-83.5t-429.5%2083.5t-318.5%20226.5l-93%20-93q-9%20-9%20-23%20-9q-4%200%20-12%202q-20%208%20-20%2030v352%20q0%2014%209%2023t23%209h352q22%200%2030%20-20q8%20-19%20-7%20-35l-100%20-100q67%20-91%20189.5%20-153.5t271.5%20-82.5v647h-192q-26%200%20-45%2019t-19%2045v128q0%2026%2019%2045t45%2019h192v163q-58%2034%20-93%2092.5t-35%20128.5q0%20106%2075%20181t181%2075t181%20-75t75%20-181q0%20-70%20-35%20-128.5t-93%20-92.5v-163h192q26%200%2045%20-19%20t19%20-45v-128q0%20-26%20-19%20-45t-45%20-19h-192v-647q149%2020%20271.5%2082.5t189.5%20153.5l-100%20100q-15%2016%20-7%2035q8%2020%2030%2020h352q14%200%2023%20-9t9%20-23z"
            ],
            "\uf13e": [
                1152.0,
                "M1056%20768q40%200%2068%20-28t28%20-68v-576q0%20-40%20-28%20-68t-68%20-28h-960q-40%200%20-68%2028t-28%2068v576q0%2040%2028%2068t68%2028h32v320q0%20185%20131.5%20316.5t316.5%20131.5t316.5%20-131.5t131.5%20-316.5q0%20-26%20-19%20-45t-45%20-19h-64q-26%200%20-45%2019t-19%2045q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181%20v-320h736z"
            ],
            "\uf140": [
                1536.0,
                "M1024%20640q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181t75%20181t181%2075t181%20-75t75%20-181zM1152%20640q0%20159%20-112.5%20271.5t-271.5%20112.5t-271.5%20-112.5t-112.5%20-271.5t112.5%20-271.5t271.5%20-112.5t271.5%20112.5t112.5%20271.5zM1280%20640q0%20-212%20-150%20-362t-362%20-150t-362%20150%20t-150%20362t150%20362t362%20150t362%20-150t150%20-362zM1408%20640q0%20130%20-51%20248.5t-136.5%20204t-204%20136.5t-248.5%2051t-248.5%20-51t-204%20-136.5t-136.5%20-204t-51%20-248.5t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5t136.5%20204t51%20248.5zM1536%20640%20q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf141": [
                1408.0,
                "M384%20800v-192q0%20-40%20-28%20-68t-68%20-28h-192q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h192q40%200%2068%20-28t28%20-68zM896%20800v-192q0%20-40%20-28%20-68t-68%20-28h-192q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h192q40%200%2068%20-28t28%20-68zM1408%20800v-192q0%20-40%20-28%20-68t-68%20-28h-192%20q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h192q40%200%2068%20-28t28%20-68z"
            ],
            "\uf142": [
                384.0,
                "M384%20288v-192q0%20-40%20-28%20-68t-68%20-28h-192q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h192q40%200%2068%20-28t28%20-68zM384%20800v-192q0%20-40%20-28%20-68t-68%20-28h-192q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h192q40%200%2068%20-28t28%20-68zM384%201312v-192q0%20-40%20-28%20-68t-68%20-28h-192%20q-40%200%20-68%2028t-28%2068v192q0%2040%2028%2068t68%2028h192q40%200%2068%20-28t28%20-68z"
            ],
            "\uf143": [
                1536.0,
                "M512%20256q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM863%20162q-13%20233%20-176.5%20396.5t-396.5%20176.5q-14%201%20-24%20-9t-10%20-23v-128q0%20-13%208.5%20-22t21.5%20-10q154%20-11%20264%20-121t121%20-264q1%20-13%2010%20-21.5t22%20-8.5h128%20q13%200%2023%2010t9%2024zM1247%20161q-5%20154%20-56%20297.5t-139.5%20260t-205%20205t-260%20139.5t-297.5%2056q-14%201%20-23%20-9q-10%20-10%20-10%20-23v-128q0%20-13%209%20-22t22%20-10q204%20-7%20378%20-111.5t278.5%20-278.5t111.5%20-378q1%20-13%2010%20-22t22%20-9h128q13%200%2023%2010q11%209%209%2023zM1536%201120v-960%20q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf144": [
                1536.0,
                "M768%201408q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5t-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103zM1152%20585q32%2018%2032%2055t-32%2055l-544%20320q-31%2019%20-64%201q-32%20-19%20-32%20-56v-640q0%20-37%2032%20-56%20q16%20-8%2032%20-8q17%200%2032%209z"
            ],
            "\uf145": [
                1792.0,
                "M1024%201084l316%20-316l-572%20-572l-316%20316zM813%20105l618%20618q19%2019%2019%2045t-19%2045l-362%20362q-18%2018%20-45%2018t-45%20-18l-618%20-618q-19%20-19%20-19%20-45t19%20-45l362%20-362q18%20-18%2045%20-18t45%2018zM1702%20742l-907%20-908q-37%20-37%20-90.5%20-37t-90.5%2037l-126%20126q56%2056%2056%20136t-56%20136%20t-136%2056t-136%20-56l-125%20126q-37%2037%20-37%2090.5t37%2090.5l907%20906q37%2037%2090.5%2037t90.5%20-37l125%20-125q-56%20-56%20-56%20-136t56%20-136t136%20-56t136%2056l126%20-125q37%20-37%2037%20-90.5t-37%20-90.5z"
            ],
            "\uf146": [
                1536.0,
                "M1280%20576v128q0%2026%20-19%2045t-45%2019h-896q-26%200%20-45%20-19t-19%20-45v-128q0%20-26%2019%20-45t45%20-19h896q26%200%2045%2019t19%2045zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5%20t84.5%20-203.5z"
            ],
            "\uf147": [
                1408.0,
                "M1152%20736v-64q0%20-14%20-9%20-23t-23%20-9h-832q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h832q14%200%2023%20-9t9%20-23zM1280%20288v832q0%2066%20-47%20113t-113%2047h-832q-66%200%20-113%20-47t-47%20-113v-832q0%20-66%2047%20-113t113%20-47h832q66%200%20113%2047t47%20113zM1408%201120v-832q0%20-119%20-84.5%20-203.5%20t-203.5%20-84.5h-832q-119%200%20-203.5%2084.5t-84.5%20203.5v832q0%20119%2084.5%20203.5t203.5%2084.5h832q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf148": [
                1024.0,
                "M1018%20933q-18%20-37%20-58%20-37h-192v-864q0%20-14%20-9%20-23t-23%20-9h-704q-21%200%20-29%2018q-8%2020%204%2035l160%20192q9%2011%2025%2011h320v640h-192q-40%200%20-58%2037q-17%2037%209%2068l320%20384q18%2022%2049%2022t49%20-22l320%20-384q27%20-32%209%20-68z"
            ],
            "\uf149": [
                1024.0,
                "M32%201280h704q13%200%2022.5%20-9.5t9.5%20-23.5v-863h192q40%200%2058%20-37t-9%20-69l-320%20-384q-18%20-22%20-49%20-22t-49%2022l-320%20384q-26%2031%20-9%2069q18%2037%2058%2037h192v640h-320q-14%200%20-25%2011l-160%20192q-13%2014%20-4%2034q9%2019%2029%2019z"
            ],
            "\uf14a": [
                1536.0,
                "M685%20237l614%20614q19%2019%2019%2045t-19%2045l-102%20102q-19%2019%20-45%2019t-45%20-19l-467%20-467l-211%20211q-19%2019%20-45%2019t-45%20-19l-102%20-102q-19%20-19%20-19%20-45t19%20-45l358%20-358q19%20-19%2045%20-19t45%2019zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5%20t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf14b": [
                1536.0,
                "M404%20428l152%20-152l-52%20-52h-56v96h-96v56zM818%20818q14%20-13%20-3%20-30l-291%20-291q-17%20-17%20-30%20-3q-14%2013%203%2030l291%20291q17%2017%2030%203zM544%20128l544%20544l-288%20288l-544%20-544v-288h288zM1152%20736l92%2092q28%2028%2028%2068t-28%2068l-152%20152q-28%2028%20-68%2028t-68%20-28l-92%20-92zM1536%201120%20v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf14c": [
                1536.0,
                "M1280%20608v480q0%2026%20-19%2045t-45%2019h-480q-42%200%20-59%20-39q-17%20-41%2014%20-70l144%20-144l-534%20-534q-19%20-19%20-19%20-45t19%20-45l102%20-102q19%20-19%2045%20-19t45%2019l534%20534l144%20-144q18%20-19%2045%20-19q12%200%2025%205q39%2017%2039%2059zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960%20q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf14d": [
                1536.0,
                "M1005%20435l352%20352q19%2019%2019%2045t-19%2045l-352%20352q-30%2031%20-69%2014q-40%20-17%20-40%20-59v-160q-119%200%20-216%20-19.5t-162.5%20-51t-114%20-79t-76.5%20-95.5t-44.5%20-109t-21.5%20-111.5t-5%20-110.5q0%20-181%20167%20-404q11%20-12%2025%20-12q7%200%2013%203q22%209%2019%2033q-44%20354%2062%20473q46%2052%20130%2075.5%20t224%2023.5v-160q0%20-42%2040%20-59q12%20-5%2024%20-5q26%200%2045%2019zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf14e": [
                1536.0,
                "M640%20448l256%20128l-256%20128v-256zM1024%201039v-542l-512%20-256v542zM1312%20640q0%20148%20-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103%20t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf150": [
                1536.0,
                "M1145%20861q18%20-35%20-5%20-66l-320%20-448q-19%20-27%20-52%20-27t-52%2027l-320%20448q-23%2031%20-5%2066q17%2035%2057%2035h640q40%200%2057%20-35zM1280%20160v960q0%2013%20-9.5%2022.5t-22.5%209.5h-960q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-960q0%20-13%209.5%20-22.5t22.5%20-9.5h960q13%200%2022.5%209.5t9.5%2022.5zM1536%201120%20v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf151": [
                1536.0,
                "M1145%20419q-17%20-35%20-57%20-35h-640q-40%200%20-57%2035q-18%2035%205%2066l320%20448q19%2027%2052%2027t52%20-27l320%20-448q23%20-31%205%20-66zM1280%20160v960q0%2013%20-9.5%2022.5t-22.5%209.5h-960q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-960q0%20-13%209.5%20-22.5t22.5%20-9.5h960q13%200%2022.5%209.5t9.5%2022.5zM1536%201120v-960%20q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf152": [
                1536.0,
                "M1088%20640q0%20-33%20-27%20-52l-448%20-320q-31%20-23%20-66%20-5q-35%2017%20-35%2057v640q0%2040%2035%2057q35%2018%2066%20-5l448%20-320q27%20-19%2027%20-52zM1280%20160v960q0%2014%20-9%2023t-23%209h-960q-14%200%20-23%20-9t-9%20-23v-960q0%20-14%209%20-23t23%20-9h960q14%200%2023%209t9%2023zM1536%201120v-960q0%20-119%20-84.5%20-203.5%20t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf153": [
                1024.0,
                "M976%20229l35%20-159q3%20-12%20-3%20-22.5t-17%20-14.5l-5%20-1q-4%20-2%20-10.5%20-3.5t-16%20-4.5t-21.5%20-5.5t-25.5%20-5t-30%20-5t-33.5%20-4.5t-36.5%20-3t-38.5%20-1q-234%200%20-409%20130.5t-238%20351.5h-95q-13%200%20-22.5%209.5t-9.5%2022.5v113q0%2013%209.5%2022.5t22.5%209.5h66q-2%2057%201%20105h-67q-14%200%20-23%209%20t-9%2023v114q0%2014%209%2023t23%209h98q67%20210%20243.5%20338t400.5%20128q102%200%20194%20-23q11%20-3%2020%20-15q6%20-11%203%20-24l-43%20-159q-3%20-13%20-14%20-19.5t-24%20-2.5l-4%201q-4%201%20-11.5%202.5l-17.5%203.5t-22.5%203.5t-26%203t-29%202.5t-29.5%201q-126%200%20-226%20-64t-150%20-176h468q16%200%2025%20-12q10%20-12%207%20-26%20l-24%20-114q-5%20-26%20-32%20-26h-488q-3%20-37%200%20-105h459q15%200%2025%20-12q9%20-12%206%20-27l-24%20-112q-2%20-11%20-11%20-18.5t-20%20-7.5h-387q48%20-117%20149.5%20-185.5t228.5%20-68.5q18%200%2036%201.5t33.5%203.5t29.5%204.5t24.5%205t18.5%204.5l12%203l5%202q13%205%2026%20-2q12%20-7%2015%20-21z"
            ],
            "\uf154": [
                1024.0,
                "M1020%20399v-367q0%20-14%20-9%20-23t-23%20-9h-956q-14%200%20-23%209t-9%2023v150q0%2013%209.5%2022.5t22.5%209.5h97v383h-95q-14%200%20-23%209.5t-9%2022.5v131q0%2014%209%2023t23%209h95v223q0%20171%20123.5%20282t314.5%20111q185%200%20335%20-125q9%20-8%2010%20-20.5t-7%20-22.5l-103%20-127q-9%20-11%20-22%20-12q-13%20-2%20-23%207%20q-5%205%20-26%2019t-69%2032t-93%2018q-85%200%20-137%20-47t-52%20-123v-215h305q13%200%2022.5%20-9t9.5%20-23v-131q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-305v-379h414v181q0%2013%209%2022.5t23%209.5h162q14%200%2023%20-9.5t9%20-22.5z"
            ],
            "\uf155": [
                1024.0,
                "M978%20351q0%20-153%20-99.5%20-263.5t-258.5%20-136.5v-175q0%20-14%20-9%20-23t-23%20-9h-135q-13%200%20-22.5%209.5t-9.5%2022.5v175q-66%209%20-127.5%2031t-101.5%2044.5t-74%2048t-46.5%2037.5t-17.5%2018q-17%2021%20-2%2041l103%20135q7%2010%2023%2012q15%202%2024%20-9l2%20-2q113%20-99%20243%20-125q37%20-8%2074%20-8q81%200%20142.5%2043%20t61.5%20122q0%2028%20-15%2053t-33.5%2042t-58.5%2037.5t-66%2032t-80%2032.5q-39%2016%20-61.5%2025t-61.5%2026.5t-62.5%2031t-56.5%2035.5t-53.5%2042.5t-43.5%2049t-35.5%2058t-21%2066.5t-8.5%2078q0%20138%2098%20242t255%20134v180q0%2013%209.5%2022.5t22.5%209.5h135q14%200%2023%20-9t9%20-23v-176q57%20-6%20110.5%20-23t87%20-33.5%20t63.5%20-37.5t39%20-29t15%20-14q17%20-18%205%20-38l-81%20-146q-8%20-15%20-23%20-16q-14%20-3%20-27%207q-3%203%20-14.5%2012t-39%2026.5t-58.5%2032t-74.5%2026t-85.5%2011.5q-95%200%20-155%20-43t-60%20-111q0%20-26%208.5%20-48t29.5%20-41.5t39.5%20-33t56%20-31t60.5%20-27t70%20-27.5q53%20-20%2081%20-31.5t76%20-35t75.5%20-42.5t62%20-50%20t53%20-63.5t31.5%20-76.5t13%20-94z"
            ],
            "\uf156": [
                898.0,
                "M898%201066v-102q0%20-14%20-9%20-23t-23%20-9h-168q-23%20-144%20-129%20-234t-276%20-110q167%20-178%20459%20-536q14%20-16%204%20-34q-8%20-18%20-29%20-18h-195q-16%200%20-25%2012q-306%20367%20-498%20571q-9%209%20-9%2022v127q0%2013%209.5%2022.5t22.5%209.5h112q132%200%20212.5%2043t102.5%20125h-427q-14%200%20-23%209t-9%2023v102%20q0%2014%209%2023t23%209h413q-57%20113%20-268%20113h-145q-13%200%20-22.5%209.5t-9.5%2022.5v133q0%2014%209%2023t23%209h832q14%200%2023%20-9t9%20-23v-102q0%20-14%20-9%20-23t-23%20-9h-233q47%20-61%2064%20-144h171q14%200%2023%20-9t9%20-23z"
            ],
            "\uf157": [
                1027.0,
                "M603%200h-172q-13%200%20-22.5%209t-9.5%2023v330h-288q-13%200%20-22.5%209t-9.5%2023v103q0%2013%209.5%2022.5t22.5%209.5h288v85h-288q-13%200%20-22.5%209t-9.5%2023v104q0%2013%209.5%2022.5t22.5%209.5h214l-321%20578q-8%2016%200%2032q10%2016%2028%2016h194q19%200%2029%20-18l215%20-425q19%20-38%2056%20-125q10%2024%2030.5%2068t27.5%2061%20l191%20420q8%2019%2029%2019h191q17%200%2027%20-16q9%20-14%201%20-31l-313%20-579h215q13%200%2022.5%20-9.5t9.5%20-22.5v-104q0%20-14%20-9.5%20-23t-22.5%20-9h-290v-85h290q13%200%2022.5%20-9.5t9.5%20-22.5v-103q0%20-14%20-9.5%20-23t-22.5%20-9h-290v-330q0%20-13%20-9.5%20-22.5t-22.5%20-9.5z"
            ],
            "\uf158": [
                1280.0,
                "M1043%20971q0%20100%20-65%20162t-171%2062h-320v-448h320q106%200%20171%2062t65%20162zM1280%20971q0%20-193%20-126.5%20-315t-326.5%20-122h-340v-118h505q14%200%2023%20-9t9%20-23v-128q0%20-14%20-9%20-23t-23%20-9h-505v-192q0%20-14%20-9.5%20-23t-22.5%20-9h-167q-14%200%20-23%209t-9%2023v192h-224q-14%200%20-23%209t-9%2023v128%20q0%2014%209%2023t23%209h224v118h-224q-14%200%20-23%209t-9%2023v149q0%2013%209%2022.5t23%209.5h224v629q0%2014%209%2023t23%209h539q200%200%20326.5%20-122t126.5%20-315z"
            ],
            "\uf159": [
                1792.0,
                "M514%20341l81%20299h-159l75%20-300q1%20-1%201%20-3t1%20-3q0%201%200.5%203.5t0.5%203.5zM630%20768l35%20128h-292l32%20-128h225zM822%20768h139l-35%20128h-70zM1271%20340l78%20300h-162l81%20-299q0%20-1%200.5%20-3.5t1.5%20-3.5q0%201%200.5%203t0.5%203zM1382%20768l33%20128h-297l34%20-128h230zM1792%20736v-64q0%20-14%20-9%20-23%20t-23%20-9h-213l-164%20-616q-7%20-24%20-31%20-24h-159q-24%200%20-31%2024l-166%20616h-209l-167%20-616q-7%20-24%20-31%20-24h-159q-11%200%20-19.5%207t-10.5%2017l-160%20616h-208q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h175l-33%20128h-142q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h109l-89%20344q-5%2015%205%2028%20q10%2012%2026%2012h137q26%200%2031%20-24l90%20-360h359l97%20360q7%2024%2031%2024h126q24%200%2031%20-24l98%20-360h365l93%20360q5%2024%2031%2024h137q16%200%2026%20-12q10%20-13%205%20-28l-91%20-344h111q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-145l-34%20-128h179q14%200%2023%20-9t9%20-23z"
            ],
            "\uf15a": [
                1280.0,
                "M1167%20896q18%20-182%20-131%20-258q117%20-28%20175%20-103t45%20-214q-7%20-71%20-32.5%20-125t-64.5%20-89t-97%20-58.5t-121.5%20-34.5t-145.5%20-15v-255h-154v251q-80%200%20-122%201v-252h-154v255q-18%200%20-54%200.5t-55%200.5h-200l31%20183h111q50%200%2058%2051v402h16q-6%201%20-16%201v287q-13%2068%20-89%2068h-111v164%20l212%20-1q64%200%2097%201v252h154v-247q82%202%20122%202v245h154v-252q79%20-7%20140%20-22.5t113%20-45t82.5%20-78t36.5%20-114.5zM952%20351q0%2036%20-15%2064t-37%2046t-57.5%2030.5t-65.5%2018.5t-74%209t-69%203t-64.5%20-1t-47.5%20-1v-338q8%200%2037%20-0.5t48%20-0.5t53%201.5t58.5%204t57%208.5t55.5%2014t47.5%2021t39.5%2030%20t24.5%2040t9.5%2051zM881%20827q0%2033%20-12.5%2058.5t-30.5%2042t-48%2028t-55%2016.5t-61.5%208t-58%202.5t-54%20-1t-39.5%20-0.5v-307q5%200%2034.5%20-0.5t46.5%200t50%202t55%205.5t51.5%2011t48.5%2018.5t37%2027t27%2038.5t9%2051z"
            ],
            "\uf15b": [
                1536.0,
                "M1024%201024v472q22%20-14%2036%20-28l408%20-408q14%20-14%2028%20-36h-472zM896%20992q0%20-40%2028%20-68t68%20-28h544v-1056q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h800v-544z"
            ],
            "\uf15c": [
                1536.0,
                "M1468%201060q14%20-14%2028%20-36h-472v472q22%20-14%2036%20-28zM992%20896h544v-1056q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h800v-544q0%20-40%2028%20-68t68%20-28zM1152%20160v64q0%2014%20-9%2023t-23%209h-704q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h704%20q14%200%2023%209t9%2023zM1152%20416v64q0%2014%20-9%2023t-23%209h-704q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h704q14%200%2023%209t9%2023zM1152%20672v64q0%2014%20-9%2023t-23%209h-704q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h704q14%200%2023%209t9%2023z"
            ],
            "\uf15d": [
                1664.0,
                "M1191%201128h177l-72%20218l-12%2047q-2%2016%20-2%2020h-4l-3%20-20q0%20-1%20-3.5%20-18t-7.5%20-29zM736%2096q0%20-12%20-10%20-24l-319%20-319q-10%20-9%20-23%20-9q-12%200%20-23%209l-320%20320q-15%2016%20-7%2035q8%2020%2030%2020h192v1376q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-1376h192q14%200%2023%20-9t9%20-23zM1572%20-23%20v-233h-584v90l369%20529q12%2018%2021%2027l11%209v3q-2%200%20-6.5%20-0.5t-7.5%20-0.5q-12%20-3%20-30%20-3h-232v-115h-120v229h567v-89l-369%20-530q-6%20-8%20-21%20-26l-11%20-11v-2l14%202q9%202%2030%202h248v119h121zM1661%20874v-106h-288v106h75l-47%20144h-243l-47%20-144h75v-106h-287v106h70l230%20662h162%20l230%20-662h70z"
            ],
            "\uf15e": [
                1664.0,
                "M1191%20104h177l-72%20218l-12%2047q-2%2016%20-2%2020h-4l-3%20-20q0%20-1%20-3.5%20-18t-7.5%20-29zM736%2096q0%20-12%20-10%20-24l-319%20-319q-10%20-9%20-23%20-9q-12%200%20-23%209l-320%20320q-15%2016%20-7%2035q8%2020%2030%2020h192v1376q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-1376h192q14%200%2023%20-9t9%20-23zM1661%20-150%20v-106h-288v106h75l-47%20144h-243l-47%20-144h75v-106h-287v106h70l230%20662h162l230%20-662h70zM1572%201001v-233h-584v90l369%20529q12%2018%2021%2027l11%209v3q-2%200%20-6.5%20-0.5t-7.5%20-0.5q-12%20-3%20-30%20-3h-232v-115h-120v229h567v-89l-369%20-530q-6%20-8%20-21%20-26l-11%20-10v-3l14%203q9%201%2030%201h248%20v119h121z"
            ],
            "\uf160": [
                1792.0,
                "M736%2096q0%20-12%20-10%20-24l-319%20-319q-10%20-9%20-23%20-9q-12%200%20-23%209l-320%20320q-15%2016%20-7%2035q8%2020%2030%2020h192v1376q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-1376h192q14%200%2023%20-9t9%20-23zM1792%20-32v-192q0%20-14%20-9%20-23t-23%20-9h-832q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h832%20q14%200%2023%20-9t9%20-23zM1600%20480v-192q0%20-14%20-9%20-23t-23%20-9h-640q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h640q14%200%2023%20-9t9%20-23zM1408%20992v-192q0%20-14%20-9%20-23t-23%20-9h-448q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h448q14%200%2023%20-9t9%20-23zM1216%201504v-192q0%20-14%20-9%20-23t-23%20-9h-256%20q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h256q14%200%2023%20-9t9%20-23z"
            ],
            "\uf161": [
                1792.0,
                "M1216%20-32v-192q0%20-14%20-9%20-23t-23%20-9h-256q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h256q14%200%2023%20-9t9%20-23zM736%2096q0%20-12%20-10%20-24l-319%20-319q-10%20-9%20-23%20-9q-12%200%20-23%209l-320%20320q-15%2016%20-7%2035q8%2020%2030%2020h192v1376q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-1376h192%20q14%200%2023%20-9t9%20-23zM1408%20480v-192q0%20-14%20-9%20-23t-23%20-9h-448q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h448q14%200%2023%20-9t9%20-23zM1600%20992v-192q0%20-14%20-9%20-23t-23%20-9h-640q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h640q14%200%2023%20-9t9%20-23zM1792%201504v-192q0%20-14%20-9%20-23t-23%20-9h-832%20q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h832q14%200%2023%20-9t9%20-23z"
            ],
            "\uf162": [
                1536.0,
                "M1346%20223q0%2063%20-44%20116t-103%2053q-52%200%20-83%20-37t-31%20-94t36.5%20-95t104.5%20-38q50%200%2085%2027t35%2068zM736%2096q0%20-12%20-10%20-24l-319%20-319q-10%20-9%20-23%20-9q-12%200%20-23%209l-320%20320q-15%2016%20-7%2035q8%2020%2030%2020h192v1376q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-1376h192q14%200%2023%20-9t9%20-23%20zM1486%20165q0%20-62%20-13%20-121.5t-41%20-114t-68%20-95.5t-98.5%20-65.5t-127.5%20-24.5q-62%200%20-108%2016q-24%208%20-42%2015l39%20113q15%20-7%2031%20-11q37%20-13%2075%20-13q84%200%20134.5%2058.5t66.5%20145.5h-2q-21%20-23%20-61.5%20-37t-84.5%20-14q-106%200%20-173%2071.5t-67%20172.5q0%20105%2072%20178t181%2073q123%200%20205%20-94.5%20t82%20-252.5zM1456%20882v-114h-469v114h167v432q0%207%200.5%2019t0.5%2017v16h-2l-7%20-12q-8%20-13%20-26%20-31l-62%20-58l-82%2086l192%20185h123v-654h165z"
            ],
            "\uf163": [
                1536.0,
                "M1346%201247q0%2063%20-44%20116t-103%2053q-52%200%20-83%20-37t-31%20-94t36.5%20-95t104.5%20-38q50%200%2085%2027t35%2068zM736%2096q0%20-12%20-10%20-24l-319%20-319q-10%20-9%20-23%20-9q-12%200%20-23%209l-320%20320q-15%2016%20-7%2035q8%2020%2030%2020h192v1376q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-1376h192q14%200%2023%20-9%20t9%20-23zM1456%20-142v-114h-469v114h167v432q0%207%200.5%2019t0.5%2017v16h-2l-7%20-12q-8%20-13%20-26%20-31l-62%20-58l-82%2086l192%20185h123v-654h165zM1486%201189q0%20-62%20-13%20-121.5t-41%20-114t-68%20-95.5t-98.5%20-65.5t-127.5%20-24.5q-62%200%20-108%2016q-24%208%20-42%2015l39%20113q15%20-7%2031%20-11q37%20-13%2075%20-13%20q84%200%20134.5%2058.5t66.5%20145.5h-2q-21%20-23%20-61.5%20-37t-84.5%20-14q-106%200%20-173%2071.5t-67%20172.5q0%20105%2072%20178t181%2073q123%200%20205%20-94.5t82%20-252.5z"
            ],
            "\uf164": [
                1664.0,
                "M256%20192q0%2026%20-19%2045t-45%2019q-27%200%20-45.5%20-19t-18.5%20-45q0%20-27%2018.5%20-45.5t45.5%20-18.5q26%200%2045%2018.5t19%2045.5zM416%20704v-640q0%20-26%20-19%20-45t-45%20-19h-288q-26%200%20-45%2019t-19%2045v640q0%2026%2019%2045t45%2019h288q26%200%2045%20-19t19%20-45zM1600%20704q0%20-86%20-55%20-149q15%20-44%2015%20-76%20q3%20-76%20-43%20-137q17%20-56%200%20-117q-15%20-57%20-54%20-94q9%20-112%20-49%20-181q-64%20-76%20-197%20-78h-36h-76h-17q-66%200%20-144%2015.5t-121.5%2029t-120.5%2039.5q-123%2043%20-158%2044q-26%201%20-45%2019.5t-19%2044.5v641q0%2025%2018%2043.5t43%2020.5q24%202%2076%2059t101%20121q68%2087%20101%20120q18%2018%2031%2048t17.5%2048.5%20t13.5%2060.5q7%2039%2012.5%2061t19.5%2052t34%2050q19%2019%2045%2019q46%200%2082.5%20-10.5t60%20-26t40%20-40.5t24%20-45t12%20-50t5%20-45t0.5%20-39q0%20-38%20-9.5%20-76t-19%20-60t-27.5%20-56q-3%20-6%20-10%20-18t-11%20-22t-8%20-24h277q78%200%20135%20-57t57%20-135z"
            ],
            "\uf165": [
                1664.0,
                "M256%20960q0%20-26%20-19%20-45t-45%20-19q-27%200%20-45.5%2019t-18.5%2045q0%2027%2018.5%2045.5t45.5%2018.5q26%200%2045%20-18.5t19%20-45.5zM416%20448v640q0%2026%20-19%2045t-45%2019h-288q-26%200%20-45%20-19t-19%20-45v-640q0%20-26%2019%20-45t45%20-19h288q26%200%2045%2019t19%2045zM1545%20597q55%20-61%2055%20-149q-1%20-78%20-57.5%20-135%20t-134.5%20-57h-277q4%20-14%208%20-24t11%20-22t10%20-18q18%20-37%2027%20-57t19%20-58.5t10%20-76.5q0%20-24%20-0.5%20-39t-5%20-45t-12%20-50t-24%20-45t-40%20-40.5t-60%20-26t-82.5%20-10.5q-26%200%20-45%2019q-20%2020%20-34%2050t-19.5%2052t-12.5%2061q-9%2042%20-13.5%2060.5t-17.5%2048.5t-31%2048q-33%2033%20-101%20120q-49%2064%20-101%20121%20t-76%2059q-25%202%20-43%2020.5t-18%2043.5v641q0%2026%2019%2044.5t45%2019.5q35%201%20158%2044q77%2026%20120.5%2039.5t121.5%2029t144%2015.5h17h76h36q133%20-2%20197%20-78q58%20-69%2049%20-181q39%20-37%2054%20-94q17%20-61%200%20-117q46%20-61%2043%20-137q0%20-32%20-15%20-76z"
            ],
            "\uf166": [
                1536.0,
                "M919%20233v157q0%2050%20-29%2050q-17%200%20-33%20-16v-224q16%20-16%2033%20-16q29%200%2029%2049zM1103%20355h66v34q0%2051%20-33%2051t-33%20-51v-34zM532%20621v-70h-80v-423h-74v423h-78v70h232zM733%20495v-367h-67v40q-39%20-45%20-76%20-45q-33%200%20-42%2028q-6%2017%20-6%2054v290h66v-270q0%20-24%201%20-26q1%20-15%2015%20-15%20q20%200%2042%2031v280h67zM985%20384v-146q0%20-52%20-7%20-73q-12%20-42%20-53%20-42q-35%200%20-68%2041v-36h-67v493h67v-161q32%2040%2068%2040q41%200%2053%20-42q7%20-21%207%20-74zM1236%20255v-9q0%20-29%20-2%20-43q-3%20-22%20-15%20-40q-27%20-40%20-80%20-40q-52%200%20-81%2038q-21%2027%20-21%2086v129q0%2059%2020%2086q29%2038%2080%2038t78%20-38%20q21%20-29%2021%20-86v-76h-133v-65q0%20-51%2034%20-51q24%200%2030%2026q0%201%200.5%207t0.5%2016.5v21.5h68zM785%201079v-156q0%20-51%20-32%20-51t-32%2051v156q0%2052%2032%2052t32%20-52zM1318%20366q0%20177%20-19%20260q-10%2044%20-43%2073.5t-76%2034.5q-136%2015%20-412%2015q-275%200%20-411%20-15q-44%20-5%20-76.5%20-34.5t-42.5%20-73.5%20q-20%20-87%20-20%20-260q0%20-176%2020%20-260q10%20-43%2042.5%20-73t75.5%20-35q137%20-15%20412%20-15t412%2015q43%205%2075.5%2035t42.5%2073q20%2084%2020%20260zM563%201017l90%20296h-75l-51%20-195l-53%20195h-78q7%20-23%2023%20-69l24%20-69q35%20-103%2046%20-158v-201h74v201zM852%20936v130q0%2058%20-21%2087q-29%2038%20-78%2038%20q-51%200%20-78%20-38q-21%20-29%20-21%20-87v-130q0%20-58%2021%20-87q27%20-38%2078%20-38q49%200%2078%2038q21%2027%2021%2087zM1033%20816h67v370h-67v-283q-22%20-31%20-42%20-31q-15%200%20-16%2016q-1%202%20-1%2026v272h-67v-293q0%20-37%206%20-55q11%20-27%2043%20-27q36%200%2077%2045v-40zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5%20h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf167": [
                1536.0,
                "M971%20292v-211q0%20-67%20-39%20-67q-23%200%20-45%2022v301q22%2022%2045%2022q39%200%2039%20-67zM1309%20291v-46h-90v46q0%2068%2045%2068t45%20-68zM343%20509h107v94h-312v-94h105v-569h100v569zM631%20-60h89v494h-89v-378q-30%20-42%20-57%20-42q-18%200%20-21%2021q-1%203%20-1%2035v364h-89v-391q0%20-49%208%20-73%20q12%20-37%2058%20-37q48%200%20102%2061v-54zM1060%2088v197q0%2073%20-9%2099q-17%2056%20-71%2056q-50%200%20-93%20-54v217h-89v-663h89v48q45%20-55%2093%20-55q54%200%2071%2055q9%2027%209%20100zM1398%2098v13h-91q0%20-51%20-2%20-61q-7%20-36%20-40%20-36q-46%200%20-46%2069v87h179v103q0%2079%20-27%20116q-39%2051%20-106%2051q-68%200%20-107%20-51%20q-28%20-37%20-28%20-116v-173q0%20-79%2029%20-116q39%20-51%20108%20-51q72%200%20108%2053q18%2027%2021%2054q2%209%202%2058zM790%201011v210q0%2069%20-43%2069t-43%20-69v-210q0%20-70%2043%20-70t43%2070zM1509%20260q0%20-234%20-26%20-350q-14%20-59%20-58%20-99t-102%20-46q-184%20-21%20-555%20-21t-555%2021q-58%206%20-102.5%2046t-57.5%2099%20q-26%20112%20-26%20350q0%20234%2026%20350q14%2059%2058%2099t103%2047q183%2020%20554%2020t555%20-20q58%20-7%20102.5%20-47t57.5%20-99q26%20-112%2026%20-350zM511%201536h102l-121%20-399v-271h-100v271q-14%2074%20-61%20212q-37%20103%20-65%20187h106l71%20-263zM881%201203v-175q0%20-81%20-28%20-118q-38%20-51%20-106%20-51q-67%200%20-105%2051%20q-28%2038%20-28%20118v175q0%2080%2028%20117q38%2051%20105%2051q68%200%20106%20-51q28%20-37%2028%20-117zM1216%201365v-499h-91v55q-53%20-62%20-103%20-62q-46%200%20-59%2037q-8%2024%20-8%2075v394h91v-367q0%20-33%201%20-35q3%20-22%2021%20-22q27%200%2057%2043v381h91z"
            ],
            "\uf168": [
                1408.0,
                "M597%20869q-10%20-18%20-257%20-456q-27%20-46%20-65%20-46h-239q-21%200%20-31%2017t0%2036l253%20448q1%200%200%201l-161%20279q-12%2022%20-1%2037q9%2015%2032%2015h239q40%200%2066%20-45zM1403%201511q11%20-16%200%20-37l-528%20-934v-1l336%20-615q11%20-20%201%20-37q-10%20-15%20-32%20-15h-239q-42%200%20-66%2045l-339%20622q18%2032%20531%20942%20q25%2045%2064%2045h241q22%200%2031%20-15z"
            ],
            "\uf169": [
                1536.0,
                "M685%20771q0%201%20-126%20222q-21%2034%20-52%2034h-184q-18%200%20-26%20-11q-7%20-12%201%20-29l125%20-216v-1l-196%20-346q-9%20-14%200%20-28q8%20-13%2024%20-13h185q31%200%2050%2036zM1309%201268q-7%2012%20-24%2012h-187q-30%200%20-49%20-35l-411%20-729q1%20-2%20262%20-481q20%20-35%2052%20-35h184q18%200%2025%2012q8%2013%20-1%2028l-260%20476v1%20l409%20723q8%2016%200%2028zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf16a": [
                1792.0,
                "M711%20408l484%20250l-484%20253v-503zM896%201270q168%200%20324.5%20-4.5t229.5%20-9.5l73%20-4q1%200%2017%20-1.5t23%20-3t23.5%20-4.5t28.5%20-8t28%20-13t31%20-19.5t29%20-26.5q6%20-6%2015.5%20-18.5t29%20-58.5t26.5%20-101q8%20-64%2012.5%20-136.5t5.5%20-113.5v-40v-136q1%20-145%20-18%20-290q-7%20-55%20-25%20-99.5t-32%20-61.5%20l-14%20-17q-14%20-15%20-29%20-26.5t-31%20-19t-28%20-12.5t-28.5%20-8t-24%20-4.5t-23%20-3t-16.5%20-1.5q-251%20-19%20-627%20-19q-207%202%20-359.5%206.5t-200.5%207.5l-49%204l-36%204q-36%205%20-54.5%2010t-51%2021t-56.5%2041q-6%206%20-15.5%2018.5t-29%2058.5t-26.5%20101q-8%2064%20-12.5%20136.5t-5.5%20113.5v40v136%20q-1%20145%2018%20290q7%2055%2025%2099.5t32%2061.5l14%2017q14%2015%2029%2026.5t31%2019.5t28%2013t28.5%208t23.5%204.5t23%203t17%201.5q251%2018%20627%2018z"
            ],
            "\uf16b": [
                1792.0,
                "M402%20829l494%20-305l-342%20-285l-490%20319zM1388%20274v-108l-490%20-293v-1l-1%201l-1%20-1v1l-489%20293v108l147%20-96l342%20284v2l1%20-1l1%201v-2l343%20-284zM554%201418l342%20-285l-494%20-304l-338%20270zM1390%20829l338%20-271l-489%20-319l-343%20285zM1239%201418l489%20-319l-338%20-270l-494%20304z"
            ],
            "\uf16c": [
                1536.0,
                "M1289%20-96h-1118v480h-160v-640h1438v640h-160v-480zM347%20428l33%20157l783%20-165l-33%20-156zM450%20802l67%20146l725%20-339l-67%20-145zM651%201158l102%20123l614%20-513l-102%20-123zM1048%201536l477%20-641l-128%20-96l-477%20641zM330%2065v159h800v-159h-800z"
            ],
            "\uf16d": [
                1536.0,
                "M1024%20640q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181t75%20-181t181%20-75t181%2075t75%20181zM1162%20640q0%20-164%20-115%20-279t-279%20-115t-279%20115t-115%20279t115%20279t279%20115t279%20-115t115%20-279zM1270%201050q0%20-38%20-27%20-65t-65%20-27t-65%2027t-27%2065t27%2065t65%2027t65%20-27t27%20-65zM768%201270%20q-7%200%20-76.5%200.5t-105.5%200t-96.5%20-3t-103%20-10t-71.5%20-18.5q-50%20-20%20-88%20-58t-58%20-88q-11%20-29%20-18.5%20-71.5t-10%20-103t-3%20-96.5t0%20-105.5t0.5%20-76.5t-0.5%20-76.5t0%20-105.5t3%20-96.5t10%20-103t18.5%20-71.5q20%20-50%2058%20-88t88%20-58q29%20-11%2071.5%20-18.5t103%20-10t96.5%20-3t105.5%200t76.5%200.5%20t76.5%20-0.5t105.5%200t96.5%203t103%2010t71.5%2018.5q50%2020%2088%2058t58%2088q11%2029%2018.5%2071.5t10%20103t3%2096.5t0%20105.5t-0.5%2076.5t0.5%2076.5t0%20105.5t-3%2096.5t-10%20103t-18.5%2071.5q-20%2050%20-58%2088t-88%2058q-29%2011%20-71.5%2018.5t-103%2010t-96.5%203t-105.5%200t-76.5%20-0.5zM1536%20640q0%20-229%20-5%20-317%20q-10%20-208%20-124%20-322t-322%20-124q-88%20-5%20-317%20-5t-317%205q-208%2010%20-322%20124t-124%20322q-5%2088%20-5%20317t5%20317q10%20208%20124%20322t322%20124q88%205%20317%205t317%20-5q208%20-10%20322%20-124t124%20-322q5%20-88%205%20-317z"
            ],
            "\uf16e": [
                1536.0,
                "M1248%201408q119%200%20203.5%20-84.5t84.5%20-203.5v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960zM698%20640q0%2088%20-62%20150t-150%2062t-150%20-62t-62%20-150t62%20-150t150%20-62t150%2062t62%20150zM1262%20640q0%2088%20-62%20150%20t-150%2062t-150%20-62t-62%20-150t62%20-150t150%20-62t150%2062t62%20150z"
            ],
            "\uf170": [
                1536.0,
                "M768%20914l201%20-306h-402zM1133%20384h94l-459%20691l-459%20-691h94l104%20160h522zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf171": [
                1408.0,
                "M815%20677q8%20-63%20-50.5%20-101t-111.5%20-6q-39%2017%20-53.5%2058t-0.5%2082t52%2058q36%2018%2072.5%2012t64%20-35.5t27.5%20-67.5zM926%20698q-14%20107%20-113%20164t-197%2013q-63%20-28%20-100.5%20-88.5t-34.5%20-129.5q4%20-91%2077.5%20-155t165.5%20-56q91%208%20152%2084t50%20168zM1165%201240q-20%2027%20-56%2044.5t-58%2022%20t-71%2012.5q-291%2047%20-566%20-2q-43%20-7%20-66%20-12t-55%20-22t-50%20-43q30%20-28%2076%20-45.5t73.5%20-22t87.5%20-11.5q228%20-29%20448%20-1q63%208%2089.5%2012t72.5%2021.5t75%2046.5zM1222%20205q-8%20-26%20-15.5%20-76.5t-14%20-84t-28.5%20-70t-58%20-56.5q-86%20-48%20-189.5%20-71.5t-202%20-22t-201.5%2018.5q-46%208%20-81.5%2018%20t-76.5%2027t-73%2043.5t-52%2061.5q-25%2096%20-57%20292l6%2016l18%209q223%20-148%20506.5%20-148t507.5%20148q21%20-6%2024%20-23t-5%20-45t-8%20-37zM1403%201166q-26%20-167%20-111%20-655q-5%20-30%20-27%20-56t-43.5%20-40t-54.5%20-31q-252%20-126%20-610%20-88q-248%2027%20-394%20139q-15%2012%20-25.5%2026.5t-17%2035t-9%2034t-6%2039.5%20t-5.5%2035q-9%2050%20-26.5%20150t-28%20161.5t-23.5%20147.5t-22%20158q3%2026%2017.5%2048.5t31.5%2037.5t45%2030t46%2022.5t48%2018.5q125%2046%20313%2064q379%2037%20676%20-50q155%20-46%20215%20-122q16%20-20%2016.5%20-51t-5.5%20-54z"
            ],
            "\uf172": [
                1536.0,
                "M848%20666q0%2043%20-41%2066t-77%201q-43%20-20%20-42.5%20-72.5t43.5%20-70.5q39%20-23%2081%204t36%2072zM928%20682q8%20-66%20-36%20-121t-110%20-61t-119%2040t-56%20113q-2%2049%2025.5%2093t72.5%2064q70%2031%20141.5%20-10t81.5%20-118zM1100%201073q-20%20-21%20-53.5%20-34t-53%20-16t-63.5%20-8q-155%20-20%20-324%200q-44%206%20-63%209.5%20t-52.5%2016t-54.5%2032.5q13%2019%2036%2031t40%2015.5t47%208.5q198%2035%20408%201q33%20-5%2051%20-8.5t43%20-16t39%20-31.5zM1142%20327q0%207%205.5%2026.5t3%2032t-17.5%2016.5q-161%20-106%20-365%20-106t-366%20106l-12%20-6l-5%20-12q26%20-154%2041%20-210q47%20-81%20204%20-108q249%20-46%20428%2053q34%2019%2049%2051.5t22.5%2085.5t12.5%2071z%20M1272%201020q9%2053%20-8%2075q-43%2055%20-155%2088q-216%2063%20-487%2036q-132%20-12%20-226%20-46q-38%20-15%20-59.5%20-25t-47%20-34t-29.5%20-54q8%20-68%2019%20-138t29%20-171t24%20-137q1%20-5%205%20-31t7%20-36t12%20-27t22%20-28q105%20-80%20284%20-100q259%20-28%20440%2063q24%2013%2039.5%2023t31%2029t19.5%2040q48%20267%2080%20473zM1536%201120%20v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf173": [
                1024.0,
                "M944%20207l80%20-237q-23%20-35%20-111%20-66t-177%20-32q-104%20-2%20-190.5%2026t-142.5%2074t-95%20106t-55.5%20120t-16.5%20118v544h-168v215q72%2026%20129%2069.5t91%2090t58%20102t34%2099t15%2088.5q1%205%204.5%208.5t7.5%203.5h244v-424h333v-252h-334v-518q0%20-30%206.5%20-56t22.5%20-52.5t49.5%20-41.5t81.5%20-14%20q78%202%20134%2029z"
            ],
            "\uf174": [
                1536.0,
                "M1136%2075l-62%20183q-44%20-22%20-103%20-22q-36%20-1%20-62%2010.5t-38.5%2031.5t-17.5%2040.5t-5%2043.5v398h257v194h-256v326h-188q-8%200%20-9%20-10q-5%20-44%20-17.5%20-87t-39%20-95t-77%20-95t-118.5%20-68v-165h130v-418q0%20-57%2021.5%20-115t65%20-111t121%20-85.5t176.5%20-30.5q69%201%20136.5%2025t85.5%2050z%20M1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf175": [
                768.0,
                "M765%20237q8%20-19%20-5%20-35l-350%20-384q-10%20-10%20-23%20-10q-14%200%20-24%2010l-355%20384q-13%2016%20-5%2035q9%2019%2029%2019h224v1248q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-1248h224q21%200%2029%20-19z"
            ],
            "\uf176": [
                768.0,
                "M765%201043q-9%20-19%20-29%20-19h-224v-1248q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v1248h-224q-21%200%20-29%2019t5%2035l350%20384q10%2010%2023%2010q14%200%2024%20-10l355%20-384q13%20-16%205%20-35z"
            ],
            "\uf177": [
                1792.0,
                "M1792%20736v-192q0%20-14%20-9%20-23t-23%20-9h-1248v-224q0%20-21%20-19%20-29t-35%205l-384%20350q-10%2010%20-10%2023q0%2014%2010%2024l384%20354q16%2014%2035%206q19%20-9%2019%20-29v-224h1248q14%200%2023%20-9t9%20-23z"
            ],
            "\uf178": [
                1792.0,
                "M1728%20643q0%20-14%20-10%20-24l-384%20-354q-16%20-14%20-35%20-6q-19%209%20-19%2029v224h-1248q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h1248v224q0%2021%2019%2029t35%20-5l384%20-350q10%20-10%2010%20-23z"
            ],
            "\uf179": [
                1408.0,
                "M1393%20321q-39%20-125%20-123%20-250q-129%20-196%20-257%20-196q-49%200%20-140%2032q-86%2032%20-151%2032q-61%200%20-142%20-33q-81%20-34%20-132%20-34q-152%200%20-301%20259q-147%20261%20-147%20503q0%20228%20113%20374q113%20144%20284%20144q72%200%20177%20-30q104%20-30%20138%20-30q45%200%20143%2034q102%2034%20173%2034q119%200%20213%20-65%20q52%20-36%20104%20-100q-79%20-67%20-114%20-118q-65%20-94%20-65%20-207q0%20-124%2069%20-223t158%20-126zM1017%201494q0%20-61%20-29%20-136q-30%20-75%20-93%20-138q-54%20-54%20-108%20-72q-37%20-11%20-104%20-17q3%20149%2078%20257q74%20107%20250%20148q1%20-3%202.5%20-11t2.5%20-11q0%20-4%200.5%20-10t0.5%20-10z"
            ],
            "\uf17a": [
                1664.0,
                "M682%20530v-651l-682%2094v557h682zM682%201273v-659h-682v565zM1664%20530v-786l-907%20125v661h907zM1664%201408v-794h-907v669z"
            ],
            "\uf17b": [
                1408.0,
                "M493%201053q16%200%2027.5%2011.5t11.5%2027.5t-11.5%2027.5t-27.5%2011.5t-27%20-11.5t-11%20-27.5t11%20-27.5t27%20-11.5zM915%201053q16%200%2027%2011.5t11%2027.5t-11%2027.5t-27%2011.5t-27.5%20-11.5t-11.5%20-27.5t11.5%20-27.5t27.5%20-11.5zM103%20869q42%200%2072%20-30t30%20-72v-430q0%20-43%20-29.5%20-73t-72.5%20-30%20t-73%2030t-30%2073v430q0%2042%2030%2072t73%2030zM1163%20850v-666q0%20-46%20-32%20-78t-77%20-32h-75v-227q0%20-43%20-30%20-73t-73%20-30t-73%2030t-30%2073v227h-138v-227q0%20-43%20-30%20-73t-73%20-30q-42%200%20-72%2030t-30%2073l-1%20227h-74q-46%200%20-78%2032t-32%2078v666h918zM931%201255q107%20-55%20171%20-153.5t64%20-215.5%20h-925q0%20117%2064%20215.5t172%20153.5l-71%20131q-7%2013%205%2020q13%206%2020%20-6l72%20-132q95%2042%20201%2042t201%20-42l72%20132q7%2012%2020%206q12%20-7%205%20-20zM1408%20767v-430q0%20-43%20-30%20-73t-73%20-30q-42%200%20-72%2030t-30%2073v430q0%2043%2030%2072.5t72%2029.5q43%200%2073%20-29.5t30%20-72.5z"
            ],
            "\uf17c": [
                1536.0,
                "M663%201125q-11%20-1%20-15.5%20-10.5t-8.5%20-9.5q-5%20-1%20-5%205q0%2012%2019%2015h10zM750%201111q-4%20-1%20-11.5%206.5t-17.5%204.5q24%2011%2032%20-2q3%20-6%20-3%20-9zM399%20684q-4%201%20-6%20-3t-4.5%20-12.5t-5.5%20-13.5t-10%20-13q-10%20-11%20-1%20-12q4%20-1%2012.5%207t12.5%2018q1%203%202%207t2%206t1.5%204.5t0.5%204v3t-1%202.5t-3%202z%20M1254%20325q0%2018%20-55%2042q4%2015%207.5%2027.5t5%2026t3%2021.5t0.5%2022.5t-1%2019.5t-3.5%2022t-4%2020.5t-5%2025t-5.5%2026.5q-10%2048%20-47%20103t-72%2075q24%20-20%2057%20-83q87%20-162%2054%20-278q-11%20-40%20-50%20-42q-31%20-4%20-38.5%2018.5t-8%2083.5t-11.5%20107q-9%2039%20-19.5%2069t-19.5%2045.5t-15.5%2024.5t-13%2015t-7.5%207%20q-14%2062%20-31%20103t-29.5%2056t-23.5%2033t-15%2040q-4%2021%206%2053.5t4.5%2049.5t-44.5%2025q-15%203%20-44.5%2018t-35.5%2016q-8%201%20-11%2026t8%2051t36%2027q37%203%2051%20-30t4%20-58q-11%20-19%20-2%20-26.5t30%20-0.5q13%204%2013%2036v37q-5%2030%20-13.5%2050t-21%2030.5t-23.5%2015t-27%207.5q-107%20-8%20-89%20-134q0%20-15%20-1%20-15%20q-9%209%20-29.5%2010.5t-33%20-0.5t-15.5%205q1%2057%20-16%2090t-45%2034q-27%201%20-41.5%20-27.5t-16.5%20-59.5q-1%20-15%203.5%20-37t13%20-37.5t15.5%20-13.5q10%203%2016%2014q4%209%20-7%208q-7%200%20-15.5%2014.5t-9.5%2033.5q-1%2022%209%2037t34%2014q17%200%2027%20-21t9.5%20-39t-1.5%20-22q-22%20-15%20-31%20-29q-8%20-12%20-27.5%20-23.5%20t-20.5%20-12.5q-13%20-14%20-15.5%20-27t7.5%20-18q14%20-8%2025%20-19.5t16%20-19t18.5%20-13t35.5%20-6.5q47%20-2%20102%2015q2%201%2023%207t34.5%2010.5t29.5%2013t21%2017.5q9%2014%2020%208q5%20-3%206.5%20-8.5t-3%20-12t-16.5%20-9.5q-20%20-6%20-56.5%20-21.5t-45.5%20-19.5q-44%20-19%20-70%20-23q-25%20-5%20-79%202q-10%202%20-9%20-2t17%20-19%20q25%20-23%2067%20-22q17%201%2036%207t36%2014t33.5%2017.5t30%2017t24.5%2012t17.5%202.5t8.5%20-11q0%20-2%20-1%20-4.5t-4%20-5t-6%20-4.5t-8.5%20-5t-9%20-4.5t-10%20-5t-9.5%20-4.5q-28%20-14%20-67.5%20-44t-66.5%20-43t-49%20-1q-21%2011%20-63%2073q-22%2031%20-25%2022q-1%20-3%20-1%20-10q0%20-25%20-15%20-56.5t-29.5%20-55.5t-21%20-58t11.5%20-63%20q-23%20-6%20-62.5%20-90t-47.5%20-141q-2%20-18%20-1.5%20-69t-5.5%20-59q-8%20-24%20-29%20-3q-32%2031%20-36%2094q-2%2028%204%2056q4%2019%20-1%2018q-2%20-1%20-4%20-5q-36%20-65%2010%20-166q5%20-12%2025%20-28t24%20-20q20%20-23%20104%20-90.5t93%20-76.5q16%20-15%2017.5%20-38t-14%20-43t-45.5%20-23q8%20-15%2029%20-44.5t28%20-54t7%20-70.5q46%2024%207%2092%20q-4%208%20-10.5%2016t-9.5%2012t-2%206q3%205%2013%209.5t20%20-2.5q46%20-52%20166%20-36q133%2015%20177%2087q23%2038%2034%2030q12%20-6%2010%20-52q-1%20-25%20-23%20-92q-9%20-23%20-6%20-37.5t24%20-15.5q3%2019%2014.5%2077t13.5%2090q2%2021%20-6.5%2073.5t-7.5%2097t23%2070.5q15%2018%2051%2018q1%2037%2034.5%2053t72.5%2010.5t60%20-22.5zM626%201152%20q3%2017%20-2.5%2030t-11.5%2015q-9%202%20-9%20-7q2%20-5%205%20-6q10%200%207%20-15q-3%20-20%208%20-20q3%200%203%203zM1045%20955q-2%208%20-6.5%2011.5t-13%205t-14.5%205.5q-5%203%20-9.5%208t-7%208t-5.5%206.5t-4%204t-4%20-1.5q-14%20-16%207%20-43.5t39%20-31.5q9%20-1%2014.5%208t3.5%2020zM867%201168q0%2011%20-5%2019.5t-11%2012.5t-9%203q-6%200%20-8%20-2t0%20-4%20t5%20-3q14%20-4%2018%20-31q0%20-3%208%202q2%202%202%203zM921%201401q0%202%20-2.5%205t-9%207t-9.5%206q-15%2015%20-24%2015q-9%20-1%20-11.5%20-7.5t-1%20-13t-0.5%20-12.5q-1%20-4%20-6%20-10.5t-6%20-9t3%20-8.5q4%20-3%208%200t11%209t15%209q1%201%209%201t15%202t9%207zM1486%2060q20%20-12%2031%20-24.5t12%20-24t-2.5%20-22.5t-15.5%20-22t-23.5%20-19.5%20t-30%20-18.5t-31.5%20-16.5t-32%20-15.5t-27%20-13q-38%20-19%20-85.5%20-56t-75.5%20-64q-17%20-16%20-68%20-19.5t-89%2014.5q-18%209%20-29.5%2023.5t-16.5%2025.5t-22%2019.5t-47%209.5q-44%201%20-130%201q-19%200%20-57%20-1.5t-58%20-2.5q-44%20-1%20-79.5%20-15t-53.5%20-30t-43.5%20-28.5t-53.5%20-11.5q-29%201%20-111%2031t-146%2043%20q-19%204%20-51%209.5t-50%209t-39.5%209.5t-33.5%2014.5t-17%2019.5q-10%2023%207%2066.5t18%2054.5q1%2016%20-4%2040t-10%2042.5t-4.5%2036.5t10.5%2027q14%2012%2057%2014t60%2012q30%2018%2042%2035t12%2051q21%20-73%20-32%20-106q-32%20-20%20-83%20-15q-34%203%20-43%20-10q-13%20-15%205%20-57q2%20-6%208%20-18t8.5%20-18t4.5%20-17t1%20-22q0%20-15%20-17%20-49%20t-14%20-48q3%20-17%2037%20-26q20%20-6%2084.5%20-18.5t99.5%20-20.5q24%20-6%2074%20-22t82.5%20-23t55.5%20-4q43%206%2064.5%2028t23%2048t-7.5%2058.5t-19%2052t-20%2036.5q-121%20190%20-169%20242q-68%2074%20-113%2040q-11%20-9%20-15%2015q-3%2016%20-2%2038q1%2029%2010%2052t24%2047t22%2042q8%2021%2026.5%2072t29.5%2078t30%2061t39%2054%20q110%20143%20124%20195q-12%20112%20-16%20310q-2%2090%2024%20151.5t106%20104.5q39%2021%20104%2021q53%201%20106%20-13.5t89%20-41.5q57%20-42%2091.5%20-121.5t29.5%20-147.5q-5%20-95%2030%20-214q34%20-113%20133%20-218q55%20-59%2099.5%20-163t59.5%20-191q8%20-49%205%20-84.5t-12%20-55.5t-20%20-22q-10%20-2%20-23.5%20-19t-27%20-35.5%20t-40.5%20-33.5t-61%20-14q-18%201%20-31.5%205t-22.5%2013.5t-13.5%2015.5t-11.5%2020.5t-9%2019.5q-22%2037%20-41%2030t-28%20-49t7%20-97q20%20-70%201%20-195q-10%20-65%2018%20-100.5t73%20-33t85%2035.5q59%2049%2089.5%2066.5t103.5%2042.5q53%2018%2077%2036.5t18.5%2034.5t-25%2028.5t-51.5%2023.5q-33%2011%20-49.5%2048t-15%2072.5%20t15.5%2047.5q1%20-31%208%20-56.5t14.5%20-40.5t20.5%20-28.5t21%20-19t21.5%20-13t16.5%20-9.5z"
            ],
            "\uf17d": [
                1536.0,
                "M1024%2036q-42%20241%20-140%20498h-2l-2%20-1q-16%20-6%20-43%20-16.5t-101%20-49t-137%20-82t-131%20-114.5t-103%20-148l-15%2011q184%20-150%20418%20-150q132%200%20256%2052zM839%20643q-21%2049%20-53%20111q-311%20-93%20-673%20-93q-1%20-7%20-1%20-21q0%20-124%2044%20-236.5t124%20-201.5q50%2089%20123.5%20166.5t142.5%20124.5t130.5%2081%20t99.5%2048l37%2013q4%201%2013%203.5t13%204.5zM732%20855q-120%20213%20-244%20378q-138%20-65%20-234%20-186t-128%20-272q302%200%20606%2080zM1416%20536q-210%2060%20-409%2029q87%20-239%20128%20-469q111%2075%20185%20189.5t96%20250.5zM611%201277q-1%200%20-2%20-1q1%201%202%201zM1201%201132q-185%20164%20-433%20164q-76%200%20-155%20-19%20q131%20-170%20246%20-382q69%2026%20130%2060.5t96.5%2061.5t65.5%2057t37.5%2040.5zM1424%20647q-3%20232%20-149%20410l-1%20-1q-9%20-12%20-19%20-24.5t-43.5%20-44.5t-71%20-60.5t-100%20-65t-131.5%20-64.5q25%20-53%2044%20-95q2%20-5%206.5%20-17t7.5%20-17q36%205%2074.5%207t73.5%202t69%20-1.5t64%20-4t56.5%20-5.5t48%20-6.5t36.5%20-6%20t25%20-4.5zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf17e": [
                1536.0,
                "M1173%20473q0%2050%20-19.5%2091.5t-48.5%2068.5t-73%2049t-82.5%2034t-87.5%2023l-104%2024q-30%207%20-44%2010.5t-35%2011.5t-30%2016t-16.5%2021t-7.5%2030q0%2077%20144%2077q43%200%2077%20-12t54%20-28.5t38%20-33.5t40%20-29t48%20-12q47%200%2075.5%2032t28.5%2077q0%2055%20-56%2099.5t-142%2067.5t-182%2023q-68%200%20-132%20-15.5%20t-119.5%20-47t-89%20-87t-33.5%20-128.5q0%20-61%2019%20-106.5t56%20-75.5t80%20-48.5t103%20-32.5l146%20-36q90%20-22%20112%20-36q32%20-20%2032%20-60q0%20-39%20-40%20-64.5t-105%20-25.5q-51%200%20-91.5%2016t-65%2038.5t-45.5%2045t-46%2038.5t-54%2016q-50%200%20-75.5%20-30t-25.5%20-75q0%20-92%20122%20-157.5t291%20-65.5%20q73%200%20140%2018.5t122.5%2053.5t88.5%2093.5t33%20131.5zM1536%20256q0%20-159%20-112.5%20-271.5t-271.5%20-112.5q-130%200%20-234%2080q-77%20-16%20-150%20-16q-143%200%20-273.5%2055.5t-225%20150t-150%20225t-55.5%20273.5q0%2073%2016%20150q-80%20104%20-80%20234q0%20159%20112.5%20271.5t271.5%20112.5q130%200%20234%20-80%20q77%2016%20150%2016q143%200%20273.5%20-55.5t225%20-150t150%20-225t55.5%20-273.5q0%20-73%20-16%20-150q80%20-104%2080%20-234z"
            ],
            "\uf180": [
                1280.0,
                "M1000%201102l37%20194q5%2023%20-9%2040t-35%2017h-712q-23%200%20-38.5%20-17t-15.5%20-37v-1101q0%20-7%206%20-1l291%20352q23%2026%2038%2033.5t48%207.5h239q22%200%2037%2014.5t18%2029.5q24%20130%2037%20191q4%2021%20-11.5%2040t-36.5%2019h-294q-29%200%20-48%2019t-19%2048v42q0%2029%2019%2047.5t48%2018.5h346q18%200%2035%2013.5t20%2029.5z%20M1227%201324q-15%20-73%20-53.5%20-266.5t-69.5%20-350t-35%20-173.5q-6%20-22%20-9%20-32.5t-14%20-32.5t-24.5%20-33t-38.5%20-21t-58%20-10h-271q-13%200%20-22%20-10q-8%20-9%20-426%20-494q-22%20-25%20-58.5%20-28.5t-48.5%205.5q-55%2022%20-55%2098v1410q0%2055%2038%20102.5t120%2047.5h888q95%200%20127%20-53t10%20-159zM1227%201324%20l-158%20-790q4%2017%2035%20173.5t69.5%20350t53.5%20266.5z"
            ],
            "\uf181": [
                1536.0,
                "M704%20192v1024q0%2014%20-9%2023t-23%209h-480q-14%200%20-23%20-9t-9%20-23v-1024q0%20-14%209%20-23t23%20-9h480q14%200%2023%209t9%2023zM1376%20576v640q0%2014%20-9%2023t-23%209h-480q-14%200%20-23%20-9t-9%20-23v-640q0%20-14%209%20-23t23%20-9h480q14%200%2023%209t9%2023zM1536%201344v-1408q0%20-26%20-19%20-45t-45%20-19h-1408%20q-26%200%20-45%2019t-19%2045v1408q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45z"
            ],
            "\uf182": [
                1280.0,
                "M1280%20480q0%20-40%20-28%20-68t-68%20-28q-51%200%20-80%2043l-227%20341h-45v-132l247%20-411q9%20-15%209%20-33q0%20-26%20-19%20-45t-45%20-19h-192v-272q0%20-46%20-33%20-79t-79%20-33h-160q-46%200%20-79%2033t-33%2079v272h-192q-26%200%20-45%2019t-19%2045q0%2018%209%2033l247%20411v132h-45l-227%20-341q-29%20-43%20-80%20-43%20q-40%200%20-68%2028t-28%2068q0%2029%2016%2053l256%20384q73%20107%20176%20107h384q103%200%20176%20-107l256%20-384q16%20-24%2016%20-53zM864%201280q0%20-93%20-65.5%20-158.5t-158.5%20-65.5t-158.5%2065.5t-65.5%20158.5t65.5%20158.5t158.5%2065.5t158.5%20-65.5t65.5%20-158.5z"
            ],
            "\uf183": [
                1024.0,
                "M1024%20832v-416q0%20-40%20-28%20-68t-68%20-28t-68%2028t-28%2068v352h-64v-912q0%20-46%20-33%20-79t-79%20-33t-79%2033t-33%2079v464h-64v-464q0%20-46%20-33%20-79t-79%20-33t-79%2033t-33%2079v912h-64v-352q0%20-40%20-28%20-68t-68%20-28t-68%2028t-28%2068v416q0%2080%2056%20136t136%2056h640q80%200%20136%20-56t56%20-136z%20M736%201280q0%20-93%20-65.5%20-158.5t-158.5%20-65.5t-158.5%2065.5t-65.5%20158.5t65.5%20158.5t158.5%2065.5t158.5%20-65.5t65.5%20-158.5z"
            ],
            "\uf184": [
                1536.0,
                "M773%20234l350%20473q16%2022%2024.5%2059t-6%2085t-61.5%2079q-40%2026%20-83%2025.5t-73.5%20-17.5t-54.5%20-45q-36%20-40%20-96%20-40q-59%200%20-95%2040q-24%2028%20-54.5%2045t-73.5%2017.5t-84%20-25.5q-46%20-31%20-60.5%20-79t-6%20-85t24.5%20-59zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103%20t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf185": [
                1792.0,
                "M1472%20640q0%20117%20-45.5%20223.5t-123%20184t-184%20123t-223.5%2045.5t-223.5%20-45.5t-184%20-123t-123%20-184t-45.5%20-223.5t45.5%20-223.5t123%20-184t184%20-123t223.5%20-45.5t223.5%2045.5t184%20123t123%20184t45.5%20223.5zM1748%20363q-4%20-15%20-20%20-20l-292%20-96v-306q0%20-16%20-13%20-26q-15%20-10%20-29%20-4%20l-292%2094l-180%20-248q-10%20-13%20-26%20-13t-26%2013l-180%20248l-292%20-94q-14%20-6%20-29%204q-13%2010%20-13%2026v306l-292%2096q-16%205%20-20%2020q-5%2017%204%2029l180%20248l-180%20248q-9%2013%20-4%2029q4%2015%2020%2020l292%2096v306q0%2016%2013%2026q15%2010%2029%204l292%20-94l180%20248q9%2012%2026%2012t26%20-12l180%20-248l292%2094%20q14%206%2029%20-4q13%20-10%2013%20-26v-306l292%20-96q16%20-5%2020%20-20q5%20-16%20-4%20-29l-180%20-248l180%20-248q9%20-12%204%20-29z"
            ],
            "\uf186": [
                1536.0,
                "M1262%20233q-54%20-9%20-110%20-9q-182%200%20-337%2090t-245%20245t-90%20337q0%20192%20104%20357q-201%20-60%20-328.5%20-229t-127.5%20-384q0%20-130%2051%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51q144%200%20273.5%2061.5t220.5%20171.5zM1465%20318q-94%20-203%20-283.5%20-324.5t-413.5%20-121.5q-156%200%20-298%2061%20t-245%20164t-164%20245t-61%20298q0%20153%2057.5%20292.5t156%20241.5t235.5%20164.5t290%2068.5q44%202%2061%20-39q18%20-41%20-15%20-72q-86%20-78%20-131.5%20-181.5t-45.5%20-218.5q0%20-148%2073%20-273t198%20-198t273%20-73q118%200%20228%2051q41%2018%2072%20-13q14%20-14%2017.5%20-34t-4.5%20-38z"
            ],
            "\uf187": [
                1792.0,
                "M1088%20704q0%2026%20-19%2045t-45%2019h-256q-26%200%20-45%20-19t-19%20-45t19%20-45t45%20-19h256q26%200%2045%2019t19%2045zM1664%20896v-960q0%20-26%20-19%20-45t-45%20-19h-1408q-26%200%20-45%2019t-19%2045v960q0%2026%2019%2045t45%2019h1408q26%200%2045%20-19t19%20-45zM1728%201344v-256q0%20-26%20-19%20-45t-45%20-19h-1536%20q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h1536q26%200%2045%20-19t19%20-45z"
            ],
            "\uf188": [
                1664.0,
                "M1632%20576q0%20-26%20-19%20-45t-45%20-19h-224q0%20-171%20-67%20-290l208%20-209q19%20-19%2019%20-45t-19%20-45q-18%20-19%20-45%20-19t-45%2019l-198%20197q-5%20-5%20-15%20-13t-42%20-28.5t-65%20-36.5t-82%20-29t-97%20-13v896h-128v-896q-51%200%20-101.5%2013.5t-87%2033t-66%2039t-43.5%2032.5l-15%2014l-183%20-207%20q-20%20-21%20-48%20-21q-24%200%20-43%2016q-19%2018%20-20.5%2044.5t15.5%2046.5l202%20227q-58%20114%20-58%20274h-224q-26%200%20-45%2019t-19%2045t19%2045t45%2019h224v294l-173%20173q-19%2019%20-19%2045t19%2045t45%2019t45%20-19l173%20-173h844l173%20173q19%2019%2045%2019t45%20-19t19%20-45t-19%20-45l-173%20-173v-294h224q26%200%2045%20-19%20t19%20-45zM1152%201152h-640q0%20133%2093.5%20226.5t226.5%2093.5t226.5%20-93.5t93.5%20-226.5z"
            ],
            "\uf189": [
                1920.0,
                "M1917%201016q23%20-64%20-150%20-294q-24%20-32%20-65%20-85q-40%20-51%20-55%20-72t-30.5%20-49.5t-12%20-42t13%20-34.5t32.5%20-43t57%20-53q4%20-2%205%20-4q141%20-131%20191%20-221q3%20-5%206.5%20-12.5t7%20-26.5t-0.5%20-34t-25%20-27.5t-59%20-12.5l-256%20-4q-24%20-5%20-56%205t-52%2022l-20%2012q-30%2021%20-70%2064t-68.5%2077.5t-61%2058%20t-56.5%2015.5q-3%20-1%20-8%20-3.5t-17%20-14.5t-21.5%20-29.5t-17%20-52t-6.5%20-77.5q0%20-15%20-3.5%20-27.5t-7.5%20-18.5l-4%20-5q-18%20-19%20-53%20-22h-115q-71%20-4%20-146%2016.5t-131.5%2053t-103%2066t-70.5%2057.5l-25%2024q-10%2010%20-27.5%2030t-71.5%2091t-106%20151t-122.5%20211t-130.5%20272q-6%2016%20-6%2027t3%2016l4%206%20q15%2019%2057%2019l274%202q12%20-2%2023%20-6.5t16%20-8.5l5%20-3q16%20-11%2024%20-32q20%20-50%2046%20-103.5t41%20-81.5l16%20-29q29%20-60%2056%20-104t48.5%20-68.5t41.5%20-38.5t34%20-14t27%205q2%201%205%205t12%2022t13.5%2047t9.5%2081t0%20125q-2%2040%20-9%2073t-14%2046l-6%2012q-25%2034%20-85%2043q-13%202%205%2024q16%2019%2038%2030q53%2026%20239%2024%20q82%20-1%20135%20-13q20%20-5%2033.5%20-13.5t20.5%20-24t10.5%20-32t3.5%20-45.5t-1%20-55t-2.5%20-70.5t-1.5%20-82.5q0%20-11%20-1%20-42t-0.5%20-48t3.5%20-40.5t11.5%20-39t22.5%20-24.5q8%20-2%2017%20-4t26%2011t38%2034.5t52%2067t68%20107.5q60%20104%20107%20225q4%2010%2010%2017.5t11%2010.5l4%203l5%202.5t13%203t20%200.5l288%202%20q39%205%2064%20-2.5t31%20-16.5z"
            ],
            "\uf18a": [
                1792.0,
                "M675%20252q21%2034%2011%2069t-45%2050q-34%2014%20-73%201t-60%20-46q-22%20-34%20-13%20-68.5t43%20-50.5t74.5%20-2.5t62.5%2047.5zM769%20373q8%2013%203.5%2026.5t-17.5%2018.5q-14%205%20-28.5%20-0.5t-21.5%20-18.5q-17%20-31%2013%20-45q14%20-5%2029%200.5t22%2018.5zM943%20266q-45%20-102%20-158%20-150t-224%20-12%20q-107%2034%20-147.5%20126.5t6.5%20187.5q47%2093%20151.5%20139t210.5%2019q111%20-29%20158.5%20-119.5t2.5%20-190.5zM1255%20426q-9%2096%20-89%20170t-208.5%20109t-274.5%2021q-223%20-23%20-369.5%20-141.5t-132.5%20-264.5q9%20-96%2089%20-170t208.5%20-109t274.5%20-21q223%2023%20369.5%20141.5t132.5%20264.5zM1563%20422%20q0%20-68%20-37%20-139.5t-109%20-137t-168.5%20-117.5t-226%20-83t-270.5%20-31t-275%2033.5t-240.5%2093t-171.5%20151t-65%20199.5q0%20115%2069.5%20245t197.5%20258q169%20169%20341.5%20236t246.5%20-7q65%20-64%2020%20-209q-4%20-14%20-1%20-20t10%20-7t14.5%200.5t13.5%203.5l6%202q139%2059%20246%2059t153%20-61q45%20-63%200%20-178%20q-2%20-13%20-4.5%20-20t4.5%20-12.5t12%20-7.5t17%20-6q57%20-18%20103%20-47t80%20-81.5t34%20-116.5zM1489%201046q42%20-47%2054.5%20-108.5t-6.5%20-117.5q-8%20-23%20-29.5%20-34t-44.5%20-4q-23%208%20-34%2029.5t-4%2044.5q20%2063%20-24%20111t-107%2035q-24%20-5%20-45%208t-25%2037q-5%2024%208%2044.5t37%2025.5q60%2013%20119%20-5.5t101%20-65.5z%20M1670%201209q87%20-96%20112.5%20-222.5t-13.5%20-241.5q-9%20-27%20-34%20-40t-52%20-4t-40%2034t-5%2052q28%2082%2010%20172t-80%20158q-62%2069%20-148%2095.5t-173%208.5q-28%20-6%20-52%209.5t-30%2043.5t9.5%2051.5t43.5%2029.5q123%2026%20244%20-11.5t208%20-134.5z"
            ],
            "\uf18b": [
                1536.0,
                "M1133%20-34q-171%20-94%20-368%20-94q-196%200%20-367%2094q138%2087%20235.5%20211t131.5%20268q35%20-144%20132.5%20-268t235.5%20-211zM638%201394v-485q0%20-252%20-126.5%20-459.5t-330.5%20-306.5q-181%20215%20-181%20495q0%20187%2083.5%20349.5t229.5%20269.5t325%20137zM1536%20638q0%20-280%20-181%20-495%20q-204%2099%20-330.5%20306.5t-126.5%20459.5v485q179%20-30%20325%20-137t229.5%20-269.5t83.5%20-349.5z"
            ],
            "\uf18c": [
                1408.0,
                "M1402%20433q-32%20-80%20-76%20-138t-91%20-88.5t-99%20-46.5t-101.5%20-14.5t-96.5%208.5t-86.5%2022t-69.5%2027.5t-46%2022.5l-17%2010q-113%20-228%20-289.5%20-359.5t-384.5%20-132.5q-19%200%20-32%2013t-13%2032t13%2031.5t32%2012.5q173%201%20322.5%20107.5t251.5%20294.5q-36%20-14%20-72%20-23t-83%20-13t-91%202.5t-93%2028.5%20t-92%2059t-84.5%20100t-74.5%20146q114%2047%20214%2057t167.5%20-7.5t124.5%20-56.5t88.5%20-77t56.5%20-82q53%20131%2079%20291q-7%20-1%20-18%20-2.5t-46.5%20-2.5t-69.5%200.5t-81.5%2010t-88.5%2023t-84%2042.5t-75%2065t-54.5%2094.5t-28.5%20127.5q70%2028%20133.5%2036.5t112.5%20-1t92%20-30t73.5%20-50t56%20-61t42%20-63t27.5%20-56%20t16%20-39.5l4%20-16q12%20122%2012%20195q-8%206%20-21.5%2016t-49%2044.5t-63.5%2071.5t-54%2093t-33%20112.5t12%20127t70%20138.5q73%20-25%20127.5%20-61.5t84.5%20-76.5t48%20-85t20.5%20-89t-0.5%20-85.5t-13%20-76.5t-19%20-62t-17%20-42l-7%20-15q1%20-4%201%20-50t-1%20-72q3%207%2010%2018.5t30.5%2043t50.5%2058t71%2055.5t91.5%2044.5%20t112%2014.5t132.5%20-24q-2%20-78%20-21.5%20-141.5t-50%20-104.5t-69.5%20-71.5t-81.5%20-45.5t-84.5%20-24t-80%20-9.5t-67.5%201t-46.5%204.5l-17%203q-23%20-147%20-73%20-283q6%207%2018%2018.5t49.5%2041t77.5%2052.5t99.5%2042t117.5%2020t129%20-23.5t137%20-77.5z"
            ],
            "\uf18d": [
                1280.0,
                "M1259%20283v-66q0%20-85%20-57.5%20-144.5t-138.5%20-59.5h-57l-260%20-269v269h-529q-81%200%20-138.5%2059.5t-57.5%20144.5v66h1238zM1259%20609v-255h-1238v255h1238zM1259%20937v-255h-1238v255h1238zM1259%201077v-67h-1238v67q0%2084%2057.5%20143.5t138.5%2059.5h846q81%200%20138.5%20-59.5t57.5%20-143.5z%20"
            ],
            "\uf18e": [
                1536.0,
                "M1152%20640q0%20-14%20-9%20-23l-320%20-320q-9%20-9%20-23%20-9q-13%200%20-22.5%209.5t-9.5%2022.5v192h-352q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h352v192q0%2014%209%2023t23%209q12%200%2024%20-10l319%20-319q9%20-9%209%20-23zM1312%20640q0%20148%20-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198%20t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf190": [
                1536.0,
                "M1152%20736v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-352v-192q0%20-14%20-9%20-23t-23%20-9q-12%200%20-24%2010l-319%20319q-9%209%20-9%2023t9%2023l320%20320q9%209%2023%209q13%200%2022.5%20-9.5t9.5%20-22.5v-192h352q13%200%2022.5%20-9.5t9.5%20-22.5zM1312%20640q0%20148%20-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198%20t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf191": [
                1536.0,
                "M1024%20960v-640q0%20-26%20-19%20-45t-45%20-19q-20%200%20-37%2012l-448%20320q-27%2019%20-27%2052t27%2052l448%20320q17%2012%2037%2012q26%200%2045%20-19t19%20-45zM1280%20160v960q0%2013%20-9.5%2022.5t-22.5%209.5h-960q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-960q0%20-13%209.5%20-22.5t22.5%20-9.5h960q13%200%2022.5%209.5t9.5%2022.5z%20M1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf192": [
                1536.0,
                "M1024%20640q0%20-106%20-75%20-181t-181%20-75t-181%2075t-75%20181t75%20181t181%2075t181%20-75t75%20-181zM768%201184q-148%200%20-273%20-73t-198%20-198t-73%20-273t73%20-273t198%20-198t273%20-73t273%2073t198%20198t73%20273t-73%20273t-198%20198t-273%2073zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5%20t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf193": [
                1664.0,
                "M1023%20349l102%20-204q-58%20-179%20-210%20-290t-339%20-111q-156%200%20-288.5%2077.5t-210%20210t-77.5%20288.5q0%20181%20104.5%20330t274.5%20211l17%20-131q-122%20-54%20-195%20-165.5t-73%20-244.5q0%20-185%20131.5%20-316.5t316.5%20-131.5q126%200%20232.5%2065t165%20175.5t49.5%20236.5zM1571%20249l58%20-114l-256%20-128%20q-13%20-7%20-29%20-7q-40%200%20-57%2035l-239%20477h-472q-24%200%20-42.5%2016.5t-21.5%2040.5l-96%20779q-2%2017%206%2042q14%2051%2057%2082.5t97%2031.5q66%200%20113%20-47t47%20-113q0%20-69%20-52%20-117.5t-120%20-41.5l37%20-289h423v-128h-407l16%20-128h455q40%200%2057%20-35l228%20-455z"
            ],
            "\uf194": [
                1536.0,
                "M1292%20898q10%20216%20-161%20222q-231%208%20-312%20-261q44%2019%2082%2019q85%200%2074%20-96q-4%20-57%20-74%20-167t-105%20-110q-43%200%20-82%20169q-13%2054%20-45%20255q-30%20189%20-160%20177q-59%20-7%20-164%20-100l-81%20-72l-81%20-72l52%20-67q76%2052%2087%2052q57%200%20107%20-179q15%20-55%2045%20-164.5t45%20-164.5q68%20-179%20164%20-179%20q157%200%20383%20294q220%20283%20226%20444zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf195": [
                1152.0,
                "M1152%20704q0%20-191%20-94.5%20-353t-256.5%20-256.5t-353%20-94.5h-160q-14%200%20-23%209t-9%2023v611l-215%20-66q-3%20-1%20-9%20-1q-10%200%20-19%206q-13%2010%20-13%2026v128q0%2023%2023%2031l233%2071v93l-215%20-66q-3%20-1%20-9%20-1q-10%200%20-19%206q-13%2010%20-13%2026v128q0%2023%2023%2031l233%2071v250q0%2014%209%2023t23%209h160%20q14%200%2023%20-9t9%20-23v-181l375%20116q15%205%2028%20-5t13%20-26v-128q0%20-23%20-23%20-31l-393%20-121v-93l375%20116q15%205%2028%20-5t13%20-26v-128q0%20-23%20-23%20-31l-393%20-121v-487q188%2013%20318%20151t130%20328q0%2014%209%2023t23%209h160q14%200%2023%20-9t9%20-23z"
            ],
            "\uf196": [
                1408.0,
                "M1152%20736v-64q0%20-14%20-9%20-23t-23%20-9h-352v-352q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v352h-352q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h352v352q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23v-352h352q14%200%2023%20-9t9%20-23zM1280%20288v832q0%2066%20-47%20113t-113%2047h-832%20q-66%200%20-113%20-47t-47%20-113v-832q0%20-66%2047%20-113t113%20-47h832q66%200%20113%2047t47%20113zM1408%201120v-832q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-832q-119%200%20-203.5%2084.5t-84.5%20203.5v832q0%20119%2084.5%20203.5t203.5%2084.5h832q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf197": [
                2176.0,
                "M620%20416q-110%20-64%20-268%20-64h-128v64h-64q-13%200%20-22.5%2023.5t-9.5%2056.5q0%2024%207%2049q-58%202%20-96.5%2010.5t-38.5%2020.5t38.5%2020.5t96.5%2010.5q-7%2025%20-7%2049q0%2033%209.5%2056.5t22.5%2023.5h64v64h128q158%200%20268%20-64h1113q42%20-7%20106.5%20-18t80.5%20-14q89%20-15%20150%20-40.5t83.5%20-47.5t22.5%20-40%20t-22.5%20-40t-83.5%20-47.5t-150%20-40.5q-16%20-3%20-80.5%20-14t-106.5%20-18h-1113zM1739%20668q53%20-36%2053%20-92t-53%20-92l81%20-30q68%2048%2068%20122t-68%20122zM625%20400h1015q-217%20-38%20-456%20-80q-57%200%20-113%20-24t-83%20-48l-28%20-24l-288%20-288q-26%20-26%20-70.5%20-45t-89.5%20-19h-96l-93%20464h29%20q157%200%20273%2064zM352%20816h-29l93%20464h96q46%200%2090%20-19t70%20-45l288%20-288q4%20-4%2011%20-10.5t30.5%20-23t48.5%20-29t61.5%20-23t72.5%20-10.5l456%20-80h-1015q-116%2064%20-273%2064z"
            ],
            "\uf198": [
                1664.0,
                "M1519%20760q62%200%20103.5%20-40.5t41.5%20-101.5q0%20-97%20-93%20-130l-172%20-59l56%20-167q7%20-21%207%20-47q0%20-59%20-42%20-102t-101%20-43q-47%200%20-85.5%2027t-53.5%2072l-55%20165l-310%20-106l55%20-164q8%20-24%208%20-47q0%20-59%20-42%20-102t-102%20-43q-47%200%20-85%2027t-53%2072l-55%20163l-153%20-53q-29%20-9%20-50%20-9%20q-61%200%20-101.5%2040t-40.5%20101q0%2047%2027.5%2085t71.5%2053l156%2053l-105%20313l-156%20-54q-26%20-8%20-48%20-8q-60%200%20-101%2040.5t-41%20100.5q0%2047%2027.5%2085t71.5%2053l157%2053l-53%20159q-8%2024%20-8%2047q0%2060%2042%20102.5t102%2042.5q47%200%2085%20-27t53%20-72l54%20-160l310%20105l-54%20160q-8%2024%20-8%2047q0%2059%2042.5%20102%20t101.5%2043q47%200%2085.5%20-27.5t53.5%20-71.5l53%20-161l162%2055q21%206%2043%206q60%200%20102.5%20-39.5t42.5%20-98.5q0%20-45%20-30%20-81.5t-74%20-51.5l-157%20-54l105%20-316l164%2056q24%208%2046%208zM725%20498l310%20105l-105%20315l-310%20-107z"
            ],
            "\uf199": [
                1536.0,
                "M1248%201408q119%200%20203.5%20-84.5t84.5%20-203.5v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960zM1280%20352v436q-31%20-35%20-64%20-55q-34%20-22%20-132.5%20-85t-151.5%20-99q-98%20-69%20-164%20-69v0v0q-66%200%20-164%2069%20q-47%2032%20-142%2092.5t-142%2092.5q-12%208%20-33%2027t-31%2027v-436q0%20-40%2028%20-68t68%20-28h832q40%200%2068%2028t28%2068zM1280%20925q0%2041%20-27.5%2070t-68.5%2029h-832q-40%200%20-68%20-28t-28%20-68q0%20-37%2030.5%20-76.5t67.5%20-64.5q47%20-32%20137.5%20-89t129.5%20-83q3%20-2%2017%20-11.5t21%20-14t21%20-13t23.5%20-13%20t21.5%20-9.5t22.5%20-7.5t20.5%20-2.5t20.5%202.5t22.5%207.5t21.5%209.5t23.5%2013t21%2013t21%2014t17%2011.5l267%20174q35%2023%2066.5%2062.5t31.5%2073.5z"
            ],
            "\uf19a": [
                1792.0,
                "M127%20640q0%20163%2067%20313l367%20-1005q-196%2095%20-315%20281t-119%20411zM1415%20679q0%20-19%20-2.5%20-38.5t-10%20-49.5t-11.5%20-44t-17.5%20-59t-17.5%20-58l-76%20-256l-278%20826q46%203%2088%208q19%202%2026%2018.5t-2.5%2031t-28.5%2013.5l-205%20-10q-75%201%20-202%2010q-12%201%20-20.5%20-5t-11.5%20-15t-1.5%20-18.5t9%20-16.5%20t19.5%20-8l80%20-8l120%20-328l-168%20-504l-280%20832q46%203%2088%208q19%202%2026%2018.5t-2.5%2031t-28.5%2013.5l-205%20-10q-7%200%20-23%200.5t-26%200.5q105%20160%20274.5%20253.5t367.5%2093.5q147%200%20280.5%20-53t238.5%20-149h-10q-55%200%20-92%20-40.5t-37%20-95.5q0%20-12%202%20-24t4%20-21.5t8%20-23t9%20-21t12%20-22.5t12.5%20-21%20t14.5%20-24t14%20-23q63%20-107%2063%20-212zM909%20573l237%20-647q1%20-6%205%20-11q-126%20-44%20-255%20-44q-112%200%20-217%2032zM1570%201009q95%20-174%2095%20-369q0%20-209%20-104%20-385.5t-279%20-278.5l235%20678q59%20169%2059%20276q0%2042%20-6%2079zM896%201536q182%200%20348%20-71t286%20-191t191%20-286t71%20-348t-71%20-348t-191%20-286%20t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071zM896%20-215q173%200%20331.5%2068t273%20182.5t182.5%20273t68%20331.5t-68%20331.5t-182.5%20273t-273%20182.5t-331.5%2068t-331.5%20-68t-273%20-182.5t-182.5%20-273t-68%20-331.5t68%20-331.5t182.5%20-273%20t273%20-182.5t331.5%20-68z"
            ],
            "\uf19b": [
                1792.0,
                "M1086%201536v-1536l-272%20-128q-228%2020%20-414%20102t-293%20208.5t-107%20272.5q0%20140%20100.5%20263.5t275%20205.5t391.5%20108v-172q-217%20-38%20-356.5%20-150t-139.5%20-255q0%20-152%20154.5%20-267t388.5%20-145v1360zM1755%20954l37%20-390l-525%20114l147%2083q-119%2070%20-280%2099v172q277%20-33%20481%20-157z"
            ],
            "\uf19c": [
                2048.0,
                "M960%201536l960%20-384v-128h-128q0%20-26%20-20.5%20-45t-48.5%20-19h-1526q-28%200%20-48.5%2019t-20.5%2045h-128v128zM256%20896h256v-768h128v768h256v-768h128v768h256v-768h128v768h256v-768h59q28%200%2048.5%20-19t20.5%20-45v-64h-1664v64q0%2026%2020.5%2045t48.5%2019h59v768zM1851%20-64%20q28%200%2048.5%20-19t20.5%20-45v-128h-1920v128q0%2026%2020.5%2045t48.5%2019h1782z"
            ],
            "\uf19d": [
                2304.0,
                "M1774%20700l18%20-316q4%20-69%20-82%20-128t-235%20-93.5t-323%20-34.5t-323%2034.5t-235%2093.5t-82%20128l18%20316l574%20-181q22%20-7%2048%20-7t48%207zM2304%201024q0%20-23%20-22%20-31l-1120%20-352q-4%20-1%20-10%20-1t-10%201l-652%20206q-43%20-34%20-71%20-111.5t-34%20-178.5q63%20-36%2063%20-109q0%20-69%20-58%20-107l58%20-433%20q2%20-14%20-8%20-25q-9%20-11%20-24%20-11h-192q-15%200%20-24%2011q-10%2011%20-8%2025l58%20433q-58%2038%20-58%20107q0%2073%2065%20111q11%20207%2098%20330l-333%20104q-22%208%20-22%2031t22%2031l1120%20352q4%201%2010%201t10%20-1l1120%20-352q22%20-8%2022%20-31z"
            ],
            "\uf19e": [
                1536.0,
                "M859%20579l13%20-707q-62%2011%20-105%2011q-41%200%20-105%20-11l13%20707q-40%2069%20-168.5%20295.5t-216.5%20374.5t-181%20287q58%20-15%20108%20-15q44%200%20111%2015q63%20-111%20133.5%20-229.5t167%20-276.5t138.5%20-227q37%2061%20109.5%20177.5t117.5%20190t105%20176t107%20189.5q54%20-14%20107%20-14q56%200%20114%2014v0%20q-28%20-39%20-60%20-88.5t-49.5%20-78.5t-56.5%20-96t-49%20-84q-146%20-248%20-353%20-610z"
            ],
            "\uf1a0": [
                1536.0,
                "M768%20750h725q12%20-67%2012%20-128q0%20-217%20-91%20-387.5t-259.5%20-266.5t-386.5%20-96q-157%200%20-299%2060.5t-245%20163.5t-163.5%20245t-60.5%20299t60.5%20299t163.5%20245t245%20163.5t299%2060.5q300%200%20515%20-201l-209%20-201q-123%20119%20-306%20119q-129%200%20-238.5%20-65t-173.5%20-176.5t-64%20-243.5%20t64%20-243.5t173.5%20-176.5t238.5%20-65q87%200%20160%2024t120%2060t82%2082t51.5%2087t22.5%2078h-436v264z"
            ],
            "\uf1a1": [
                1792.0,
                "M1095%20369q16%20-16%200%20-31q-62%20-62%20-199%20-62t-199%2062q-16%2015%200%2031q6%206%2015%206t15%20-6q48%20-49%20169%20-49q120%200%20169%2049q6%206%2015%206t15%20-6zM788%20550q0%20-37%20-26%20-63t-63%20-26t-63.5%2026t-26.5%2063q0%2038%2026.5%2064t63.5%2026t63%20-26.5t26%20-63.5zM1183%20550q0%20-37%20-26.5%20-63t-63.5%20-26t-63%2026%20t-26%2063t26%2063.5t63%2026.5t63.5%20-26t26.5%20-64zM1434%20670q0%2049%20-35%2084t-85%2035t-86%20-36q-130%2090%20-311%2096l63%20283l200%20-45q0%20-37%2026%20-63t63%20-26t63.5%2026.5t26.5%2063.5t-26.5%2063.5t-63.5%2026.5q-54%200%20-80%20-50l-221%2049q-19%205%20-25%20-16l-69%20-312q-180%20-7%20-309%20-97q-35%2037%20-87%2037%20q-50%200%20-85%20-35t-35%20-84q0%20-35%2018.5%20-64t49.5%20-44q-6%20-27%20-6%20-56q0%20-142%20140%20-243t337%20-101q198%200%20338%20101t140%20243q0%2032%20-7%2057q30%2015%2048%2043.5t18%2063.5zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191%20t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf1a2": [
                1536.0,
                "M939%20407q13%20-13%200%20-26q-53%20-53%20-171%20-53t-171%2053q-13%2013%200%2026q5%206%2013%206t13%20-6q42%20-42%20145%20-42t145%2042q5%206%2013%206t13%20-6zM676%20563q0%20-31%20-23%20-54t-54%20-23t-54%2023t-23%2054q0%2032%2022.5%2054.5t54.5%2022.5t54.5%20-22.5t22.5%20-54.5zM1014%20563q0%20-31%20-23%20-54t-54%20-23t-54%2023t-23%2054%20q0%2032%2022.5%2054.5t54.5%2022.5t54.5%20-22.5t22.5%20-54.5zM1229%20666q0%2042%20-30%2072t-73%2030q-42%200%20-73%20-31q-113%2078%20-267%2082l54%20243l171%20-39q1%20-32%2023.5%20-54t53.5%20-22q32%200%2054.5%2022.5t22.5%2054.5t-22.5%2054.5t-54.5%2022.5q-48%200%20-69%20-43l-189%2042q-17%205%20-21%20-13l-60%20-268q-154%20-6%20-265%20-83%20q-30%2032%20-74%2032q-43%200%20-73%20-30t-30%20-72q0%20-30%2016%20-55t42%20-38q-5%20-25%20-5%20-48q0%20-122%20120%20-208.5t289%20-86.5q170%200%20290%2086.5t120%20208.5q0%2025%20-6%2049q25%2013%2040.5%2037.5t15.5%2054.5zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960%20q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf1a3": [
                1536.0,
                "M866%20697l90%2027v62q0%2079%20-58%20135t-138%2056t-138%20-55.5t-58%20-134.5v-283q0%20-20%20-14%20-33.5t-33%20-13.5t-32.5%2013.5t-13.5%2033.5v120h-151v-122q0%20-82%2057.5%20-139t139.5%20-57q81%200%20138.5%2056.5t57.5%20136.5v280q0%2019%2013.5%2033t33.5%2014q19%200%2032.5%20-14t13.5%20-33v-54zM1199%20502v122h-150%20v-126q0%20-20%20-13.5%20-33.5t-33.5%20-13.5q-19%200%20-32.5%2014t-13.5%2033v123l-90%20-26l-60%2028v-123q0%20-80%2058%20-137t139%20-57t138.5%2057t57.5%20139zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103%20t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf1a4": [
                1920.0,
                "M1062%20824v118q0%2042%20-30%2072t-72%2030t-72%20-30t-30%20-72v-612q0%20-175%20-126%20-299t-303%20-124q-178%200%20-303.5%20125.5t-125.5%20303.5v266h328v-262q0%20-43%2030%20-72.5t72%20-29.5t72%2029.5t30%2072.5v620q0%20171%20126.5%20292t301.5%20121q176%200%20302%20-122t126%20-294v-136l-195%20-58zM1592%20602h328%20v-266q0%20-178%20-125.5%20-303.5t-303.5%20-125.5q-177%200%20-303%20124.5t-126%20300.5v268l131%20-61l195%2058v-270q0%20-42%2030%20-71.5t72%20-29.5t72%2029.5t30%2071.5v275z"
            ],
            "\uf1a5": [
                1536.0,
                "M1472%20160v480h-704v704h-480q-93%200%20-158.5%20-65.5t-65.5%20-158.5v-480h704v-704h480q93%200%20158.5%2065.5t65.5%20158.5zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5%20t84.5%20-203.5z"
            ],
            "\uf1a6": [
                2048.0,
                "M328%201254h204v-983h-532v697h328v286zM328%20435v369h-123v-369h123zM614%20968v-697h205v697h-205zM614%201254v-204h205v204h-205zM901%20968h533v-942h-533v163h328v82h-328v697zM1229%20435v369h-123v-369h123zM1516%20968h532v-942h-532v163h327v82h-327v697zM1843%20435v369h-123%20v-369h123z"
            ],
            "\uf1a7": [
                1536.0,
                "M1046%20516q0%20-64%20-38%20-109t-91%20-45q-43%200%20-70%2015v277q28%2017%2070%2017q53%200%2091%20-45.5t38%20-109.5zM703%20944q0%20-64%20-38%20-109.5t-91%20-45.5q-43%200%20-70%2015v277q28%2017%2070%2017q53%200%2091%20-45t38%20-109zM1265%20513q0%20134%20-88%20229t-213%2095q-20%200%20-39%20-3q-23%20-78%20-78%20-136q-87%20-95%20-211%20-101%20v-636l211%2041v206q51%20-19%20117%20-19q125%200%20213%2095t88%20229zM922%20940q0%20134%20-88.5%20229t-213.5%2095q-74%200%20-141%20-36h-186v-840l211%2041v206q55%20-19%20116%20-19q125%200%20213.5%2095t88.5%20229zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960%20q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf1a8": [
                2038.0,
                "M1222%20607q75%203%20143.5%20-20.5t118%20-58.5t101%20-94.5t84%20-108t75.5%20-120.5q33%20-56%2078.5%20-109t75.5%20-80.5t99%20-88.5q-48%20-30%20-108.5%20-57.5t-138.5%20-59t-114%20-47.5q-44%2037%20-74%20115t-43.5%20164.5t-33%20180.5t-42.5%20168.5t-72.5%20123t-122.5%2048.5l-10%20-2l-6%20-4q4%20-5%2013%20-14%20q6%20-5%2028%20-23.5t25.5%20-22t19%20-18t18%20-20.5t11.5%20-21t10.5%20-27.5t4.5%20-31t4%20-40.5l1%20-33q1%20-26%20-2.5%20-57.5t-7.5%20-52t-12.5%20-58.5t-11.5%20-53q-35%201%20-101%20-9.5t-98%20-10.5q-39%200%20-72%2010q-2%2016%20-2%2047q0%2074%203%2096q2%2013%2031.5%2041.5t57%2059t26.5%2051.5q-24%202%20-43%20-24%20q-36%20-53%20-111.5%20-99.5t-136.5%20-46.5q-25%200%20-75.5%2063t-106.5%20139.5t-84%2096.5q-6%204%20-27%2030q-482%20-112%20-513%20-112q-16%200%20-28%2011t-12%2027q0%2015%208.5%2026.5t22.5%2014.5l486%20106q-8%2014%20-8%2025t5.5%2017.5t16%2011.5t20%207t23%204.5t18.5%204.5q4%201%2015.5%207.5t17.5%206.5q15%200%2028%20-16t20%20-33%20q163%2037%20172%2037q17%200%2029.5%20-11t12.5%20-28q0%20-15%20-8.5%20-26t-23.5%20-14l-182%20-40l-1%20-16q-1%20-26%2081.5%20-117.5t104.5%20-91.5q47%200%20119%2080t72%20129q0%2036%20-23.5%2053t-51%2018.5t-51%2011.5t-23.5%2034q0%2016%2010%2034l-68%2019q43%2044%2043%20117q0%2026%20-5%2058q82%2016%20144%2016q44%200%2071.5%20-1.5t48.5%20-8.5%20t31%20-13.5t20.5%20-24.5t15.5%20-33.5t17%20-47.5t24%20-60l50%2025q-3%20-40%20-23%20-60t-42.5%20-21t-40%20-6.5t-16.5%20-20.5zM1282%20842q-5%205%20-13.5%2015.5t-12%2014.5t-10.5%2011.5t-10%2010.5l-8%208t-8.5%207.5t-8%205t-8.5%204.5q-7%203%20-14.5%205t-20.5%202.5t-22%200.5h-32.5h-37.5q-126%200%20-217%20-43%20q16%2030%2036%2046.5t54%2029.5t65.5%2036t46%2036.5t50%2055t43.5%2050.5q12%20-9%2028%20-31.5t32%20-36.5t38%20-13l12%201v-76l22%20-1q247%2095%20371%20190q28%2021%2050%2039t42.5%2037.5t33%2031t29.5%2034t24%2031t24.5%2037t23%2038t27%2047.5t29.5%2053l7%209q-2%20-53%20-43%20-139q-79%20-165%20-205%20-264t-306%20-142q-14%20-3%20-42%20-7.5%20t-50%20-9.5t-39%20-14q3%20-19%2024.5%20-46t21.5%20-34q0%20-11%20-26%20-30zM1061%20-79q39%2026%20131.5%2047.5t146.5%2021.5q9%200%2022.5%20-15.5t28%20-42.5t26%20-50t24%20-51t14.5%20-33q-121%20-45%20-244%20-45q-61%200%20-125%2011zM822%20568l48%2012l109%20-177l-73%20-48zM1323%2051q3%20-15%203%20-16q0%20-7%20-17.5%20-14.5t-46%20-13%20t-54%20-9.5t-53.5%20-7.5t-32%20-4.5l-7%2043q21%202%2060.5%208.5t72%2010t60.5%203.5h14zM866%20679l-96%20-20l-6%2017q10%201%2032.5%207t34.5%206q19%200%2035%20-10zM1061%2045h31l10%20-83l-41%20-12v95zM1950%201535v1v-1zM1950%201535l-1%20-5l-2%20-2l1%203zM1950%201535l1%201z"
            ],
            "\uf1a9": [
                1536.0,
                "M1167%20-50q-5%2019%20-24%205q-30%20-22%20-87%20-39t-131%20-17q-129%200%20-193%2049q-5%204%20-13%204q-11%200%20-26%20-12q-7%20-6%20-7.5%20-16t7.5%20-20q34%20-32%2087.5%20-46t102.5%20-12.5t99%204.5q41%204%2084.5%2020.5t65%2030t28.5%2020.5q12%2012%207%2029zM1128%2065q-19%2047%20-39%2061q-23%2015%20-76%2015q-47%200%20-71%20-10%20q-29%20-12%20-78%20-56q-26%20-24%20-12%20-44q9%20-8%2017.5%20-4.5t31.5%2023.5q3%202%2010.5%208.5t10.5%208.5t10%207t11.5%207t12.5%205t15%204.5t16.5%202.5t20.5%201q27%200%2044.5%20-7.5t23%20-14.5t13.5%20-22q10%20-17%2012.5%20-20t12.5%201q23%2012%2014%2034zM1483%20346q0%2022%20-5%2044.5t-16.5%2045t-34%2036.5t-52.5%2014%20q-33%200%20-97%20-41.5t-129%20-83.5t-101%20-42q-27%20-1%20-63.5%2019t-76%2049t-83.5%2058t-100%2049t-111%2019q-115%20-1%20-197%20-78.5t-84%20-178.5q-2%20-112%2074%20-164q29%20-20%2062.5%20-28.5t103.5%20-8.5q57%200%20132%2032.5t134%2071t120%2070.5t93%2031q26%20-1%2065%20-31.5t71.5%20-67t68%20-67.5t55.5%20-32q35%20-3%2058.5%2014%20t55.5%2063q28%2041%2042.5%20101t14.5%20106zM1536%20506q0%20-164%20-62%20-304.5t-166%20-236t-242.5%20-149.5t-290.5%20-54t-293%2057.5t-247.5%20157t-170.5%20241.5t-64%20302q0%2089%2019.5%20172.5t49%20145.5t70.5%20118.5t78.5%2094t78.5%2069.5t64.5%2046.5t42.5%2024.5q14%208%2051%2026.5t54.5%2028.5t48%2030t60.5%2044%20q36%2028%2058%2072.5t30%20125.5q129%20-155%20186%20-193q44%20-29%20130%20-68t129%20-66q21%20-13%2039%20-25t60.5%20-46.5t76%20-70.5t75%20-95t69%20-122t47%20-148.5t19.5%20-177.5z"
            ],
            "\uf1aa": [
                1536.0,
                "M1070%20463l-160%20-160l-151%20-152l-30%20-30q-65%20-64%20-151.5%20-87t-171.5%20-2q-16%20-70%20-72%20-115t-129%20-45q-85%200%20-145%2060.5t-60%20145.5q0%2072%2044.5%20128t113.5%2072q-22%2086%201%20173t88%20152l12%2012l151%20-152l-11%20-11q-37%20-37%20-37%20-89t37%20-90q37%20-37%2089%20-37t89%2037l30%2030l151%20152l161%20160z%20M729%201145l12%20-12l-152%20-152l-12%2012q-37%2037%20-89%2037t-89%20-37t-37%20-89.5t37%20-89.5l29%20-29l152%20-152l160%20-160l-151%20-152l-161%20160l-151%20152l-30%2030q-68%2067%20-90%20159.5t5%20179.5q-70%2015%20-115%2071t-45%20129q0%2085%2060%20145.5t145%2060.5q76%200%20133.5%20-49t69.5%20-123q84%2020%20169.5%20-3.5%20t149.5%20-87.5zM1536%2078q0%20-85%20-60%20-145.5t-145%20-60.5q-74%200%20-131%2047t-71%20118q-86%20-28%20-179.5%20-6t-161.5%2090l-11%2012l151%20152l12%20-12q37%20-37%2089%20-37t89%2037t37%2089t-37%2089l-30%2030l-152%20152l-160%20160l152%20152l160%20-160l152%20-152l29%20-30q64%20-64%2087.5%20-150.5t2.5%20-171.5%20q76%20-11%20126.5%20-68.5t50.5%20-134.5zM1534%201202q0%20-77%20-51%20-135t-127%20-69q26%20-85%203%20-176.5t-90%20-158.5l-12%20-12l-151%20152l12%2012q37%2037%2037%2089t-37%2089t-89%2037t-89%20-37l-30%20-30l-152%20-152l-160%20-160l-152%20152l161%20160l152%20152l29%2030q67%2067%20159%2089.5t178%20-3.5q11%2075%2068.5%20126%20t135.5%2051q85%200%20145%20-60.5t60%20-145.5z"
            ],
            "\uf1ab": [
                1536.0,
                "M654%20458q-1%20-3%20-12.5%200.5t-31.5%2011.5l-20%209q-44%2020%20-87%2049q-7%205%20-41%2031.5t-38%2028.5q-67%20-103%20-134%20-181q-81%20-95%20-105%20-110q-4%20-2%20-19.5%20-4t-18.5%200q6%204%2082%2092q21%2024%2085.5%20115t78.5%20118q17%2030%2051%2098.5t36%2077.5q-8%201%20-110%20-33q-8%20-2%20-27.5%20-7.5t-34.5%20-9.5t-17%20-5%20q-2%20-2%20-2%20-10.5t-1%20-9.5q-5%20-10%20-31%20-15q-23%20-7%20-47%200q-18%204%20-28%2021q-4%206%20-5%2023q6%202%2024.5%205t29.5%206q58%2016%20105%2032q100%2035%20102%2035q10%202%2043%2019.5t44%2021.5q9%203%2021.5%208t14.5%205.5t6%20-0.5q2%20-12%20-1%20-33q0%20-2%20-12.5%20-27t-26.5%20-53.5t-17%20-33.5q-25%20-50%20-77%20-131l64%20-28%20q12%20-6%2074.5%20-32t67.5%20-28q4%20-1%2010.5%20-25.5t4.5%20-30.5zM449%20944q3%20-15%20-4%20-28q-12%20-23%20-50%20-38q-30%20-12%20-60%20-12q-26%203%20-49%2026q-14%2015%20-18%2041l1%203q3%20-3%2019.5%20-5t26.5%200t58%2016q36%2012%2055%2014q17%200%2021%20-17zM1147%20815l63%20-227l-139%2042zM39%2015l694%20232v1032l-694%20-233v-1031z%20M1280%20332l102%20-31l-181%20657l-100%2031l-216%20-536l102%20-31l45%20110l211%20-65zM777%201294l573%20-184v380zM1088%20-29l158%20-13l-54%20-160l-40%2066q-130%20-83%20-276%20-108q-58%20-12%20-91%20-12h-84q-79%200%20-199.5%2039t-183.5%2085q-8%207%20-8%2016q0%208%205%2013.5t13%205.5q4%200%2018%20-7.5t30.5%20-16.5t20.5%20-11%20q73%20-37%20159.5%20-61.5t157.5%20-24.5q95%200%20167%2014.5t157%2050.5q15%207%2030.5%2015.5t34%2019t28.5%2016.5zM1536%201050v-1079l-774%20246q-14%20-6%20-375%20-127.5t-368%20-121.5q-13%200%20-18%2013q0%201%20-1%203v1078q3%209%204%2010q5%206%2020%2011q107%2036%20149%2050v384l558%20-198q2%200%20160.5%2055t316%20108.5t161.5%2053.5%20q20%200%2020%20-21v-418z"
            ],
            "\uf1ac": [
                1792.0,
                "M288%201152q66%200%20113%20-47t47%20-113v-1088q0%20-66%20-47%20-113t-113%20-47h-128q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h128zM1664%20989q58%20-34%2093%20-93t35%20-128v-768q0%20-106%20-75%20-181t-181%20-75h-864q-66%200%20-113%2047t-47%20113v1536q0%2040%2028%2068t68%2028h672q40%200%2088%20-20t76%20-48%20l152%20-152q28%20-28%2048%20-76t20%20-88v-163zM928%200v128q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM928%20256v128q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM928%20512v128q0%2014%20-9%2023%20t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM1184%200v128q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM1184%20256v128q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128%20q14%200%2023%209t9%2023zM1184%20512v128q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM1440%200v128q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM1440%20256v128q0%2014%20-9%2023t-23%209h-128%20q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM1440%20512v128q0%2014%20-9%2023t-23%209h-128q-14%200%20-23%20-9t-9%20-23v-128q0%20-14%209%20-23t23%20-9h128q14%200%2023%209t9%2023zM1536%20896v256h-160q-40%200%20-68%2028t-28%2068v160h-640v-512h896z"
            ],
            "\uf1ad": [
                1536.0,
                "M1344%201536q26%200%2045%20-19t19%20-45v-1664q0%20-26%20-19%20-45t-45%20-19h-1280q-26%200%20-45%2019t-19%2045v1664q0%2026%2019%2045t45%2019h1280zM512%201248v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23zM512%20992v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209%20t9%2023v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23zM512%20736v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23zM512%20480v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23zM384%20160v64%20q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM384%20416v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM384%20672v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64%20q14%200%2023%209t9%2023zM384%20928v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM384%201184v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM896%20-96v192q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9%20t-9%20-23v-192q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM896%20416v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM896%20672v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM896%20928v64%20q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM896%201184v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1152%20160v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64%20q14%200%2023%209t9%2023zM1152%20416v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1152%20672v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1152%20928v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9%20t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1152%201184v64q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023z"
            ],
            "\uf1ae": [
                1280.0,
                "M1188%20988l-292%20-292v-824q0%20-46%20-33%20-79t-79%20-33t-79%2033t-33%2079v384h-64v-384q0%20-46%20-33%20-79t-79%20-33t-79%2033t-33%2079v824l-292%20292q-28%2028%20-28%2068t28%2068q29%2028%2068.5%2028t67.5%20-28l228%20-228h368l228%20228q28%2028%2068%2028t68%20-28q28%20-29%2028%20-68.5t-28%20-67.5zM864%201152%20q0%20-93%20-65.5%20-158.5t-158.5%20-65.5t-158.5%2065.5t-65.5%20158.5t65.5%20158.5t158.5%2065.5t158.5%20-65.5t65.5%20-158.5z"
            ],
            "\uf1b0": [
                1664.0,
                "M780%201064q0%20-60%20-19%20-113.5t-63%20-92.5t-105%20-39q-76%200%20-138%2057.5t-92%20135.5t-30%20151q0%2060%2019%20113.5t63%2092.5t105%2039q77%200%20138.5%20-57.5t91.5%20-135t30%20-151.5zM438%20581q0%20-80%20-42%20-139t-119%20-59q-76%200%20-141.5%2055.5t-100.5%20133.5t-35%20152q0%2080%2042%20139.5t119%2059.5%20q76%200%20141.5%20-55.5t100.5%20-134t35%20-152.5zM832%20608q118%200%20255%20-97.5t229%20-237t92%20-254.5q0%20-46%20-17%20-76.5t-48.5%20-45t-64.5%20-20t-76%20-5.5q-68%200%20-187.5%2045t-182.5%2045q-66%200%20-192.5%20-44.5t-200.5%20-44.5q-183%200%20-183%20146q0%2086%2056%20191.5t139.5%20192.5t187.5%20146t193%2059zM1071%20819%20q-61%200%20-105%2039t-63%2092.5t-19%20113.5q0%2074%2030%20151.5t91.5%20135t138.5%2057.5q61%200%20105%20-39t63%20-92.5t19%20-113.5q0%20-73%20-30%20-151t-92%20-135.5t-138%20-57.5zM1503%20923q77%200%20119%20-59.5t42%20-139.5q0%20-74%20-35%20-152t-100.5%20-133.5t-141.5%20-55.5q-77%200%20-119%2059t-42%20139q0%2074%2035%20152.5%20t100.5%20134t141.5%2055.5z"
            ],
            "\uf1b1": [
                768.0,
                "M704%201008q0%20-145%20-57%20-243.5t-152%20-135.5l45%20-821q2%20-26%20-16%20-45t-44%20-19h-192q-26%200%20-44%2019t-16%2045l45%20821q-95%2037%20-152%20135.5t-57%20243.5q0%20128%2042.5%20249.5t117.5%20200t160%2078.5t160%20-78.5t117.5%20-200t42.5%20-249.5z"
            ],
            "\uf1b2": [
                1792.0,
                "M896%20-93l640%20349v636l-640%20-233v-752zM832%20772l698%20254l-698%20254l-698%20-254zM1664%201024v-768q0%20-35%20-18%20-65t-49%20-47l-704%20-384q-28%20-16%20-61%20-16t-61%2016l-704%20384q-31%2017%20-49%2047t-18%2065v768q0%2040%2023%2073t61%2047l704%20256q22%208%2044%208t44%20-8l704%20-256q38%20-14%2061%20-47t23%20-73z%20"
            ],
            "\uf1b3": [
                2304.0,
                "M640%20-96l384%20192v314l-384%20-164v-342zM576%20358l404%20173l-404%20173l-404%20-173zM1664%20-96l384%20192v314l-384%20-164v-342zM1600%20358l404%20173l-404%20173l-404%20-173zM1152%20651l384%20165v266l-384%20-164v-267zM1088%201030l441%20189l-441%20189l-441%20-189zM2176%20512v-416q0%20-36%20-19%20-67%20t-52%20-47l-448%20-224q-25%20-14%20-57%20-14t-57%2014l-448%20224q-4%202%20-7%204q-2%20-2%20-7%20-4l-448%20-224q-25%20-14%20-57%20-14t-57%2014l-448%20224q-33%2016%20-52%2047t-19%2067v416q0%2038%2021.5%2070t56.5%2048l434%20186v400q0%2038%2021.5%2070t56.5%2048l448%20192q23%2010%2050%2010t50%20-10l448%20-192q35%20-16%2056.5%20-48t21.5%20-70%20v-400l434%20-186q36%20-16%2057%20-48t21%20-70z"
            ],
            "\uf1b4": [
                2048.0,
                "M1848%201197h-511v-124h511v124zM1596%20771q-90%200%20-146%20-52.5t-62%20-142.5h408q-18%20195%20-200%20195zM1612%20186q63%200%20122%2032t76%2087h221q-100%20-307%20-427%20-307q-214%200%20-340.5%20132t-126.5%20347q0%20208%20130.5%20345.5t336.5%20137.5q138%200%20240.5%20-68t153%20-179t50.5%20-248q0%20-17%20-2%20-47h-658%20q0%20-111%2057.5%20-171.5t166.5%20-60.5zM277%20236h296q205%200%20205%20167q0%20180%20-199%20180h-302v-347zM277%20773h281q78%200%20123.5%2036.5t45.5%20113.5q0%20144%20-190%20144h-260v-294zM0%201282h594q87%200%20155%20-14t126.5%20-47.5t90%20-96.5t31.5%20-154q0%20-181%20-172%20-263q114%20-32%20172%20-115t58%20-204%20q0%20-75%20-24.5%20-136.5t-66%20-103.5t-98.5%20-71t-121%20-42t-134%20-13h-611v1260z"
            ],
            "\uf1b5": [
                1536.0,
                "M1248%201408q119%200%20203.5%20-84.5t84.5%20-203.5v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960zM499%201041h-371v-787h382q117%200%20197%2057.5t80%20170.5q0%20158%20-143%20200q107%2052%20107%20164q0%2057%20-19.5%2096.5%20t-56.5%2060.5t-79%2029.5t-97%208.5zM477%20723h-176v184h163q119%200%20119%20-90q0%20-94%20-106%20-94zM486%20388h-185v217h189q124%200%20124%20-113q0%20-104%20-128%20-104zM1136%20356q-68%200%20-104%2038t-36%20107h411q1%2010%201%2030q0%20132%20-74.5%20220.5t-203.5%2088.5q-128%200%20-210%20-86t-82%20-216q0%20-135%2079%20-217%20t213%20-82q205%200%20267%20191h-138q-11%20-34%20-47.5%20-54t-75.5%20-20zM1126%20722q113%200%20124%20-122h-254q4%2056%2039%2089t91%2033zM964%20988h319v-77h-319v77z"
            ],
            "\uf1b6": [
                1792.0,
                "M1582%20954q0%20-101%20-71.5%20-172.5t-172.5%20-71.5t-172.5%2071.5t-71.5%20172.5t71.5%20172.5t172.5%2071.5t172.5%20-71.5t71.5%20-172.5zM812%20212q0%20104%20-73%20177t-177%2073q-27%200%20-54%20-6l104%20-42q77%20-31%20109.5%20-106.5t1.5%20-151.5q-31%20-77%20-107%20-109t-152%20-1q-21%208%20-62%2024.5t-61%2024.5%20q32%20-60%2091%20-96.5t130%20-36.5q104%200%20177%2073t73%20177zM1642%20953q0%20126%20-89.5%20215.5t-215.5%2089.5q-127%200%20-216.5%20-89.5t-89.5%20-215.5q0%20-127%2089.5%20-216t216.5%20-89q126%200%20215.5%2089t89.5%20216zM1792%20953q0%20-189%20-133.5%20-322t-321.5%20-133l-437%20-319q-12%20-129%20-109%20-218t-229%20-89%20q-121%200%20-214%2076t-118%20192l-230%2092v429l389%20-157q79%2048%20173%2048q13%200%2035%20-2l284%20407q2%20187%20135.5%20319t320.5%20132q188%200%20321.5%20-133.5t133.5%20-321.5z"
            ],
            "\uf1b7": [
                1536.0,
                "M1242%20889q0%2080%20-57%20136.5t-137%2056.5t-136.5%20-57t-56.5%20-136q0%20-80%2056.5%20-136.5t136.5%20-56.5t137%2056.5t57%20136.5zM632%20301q0%20-83%20-58%20-140.5t-140%20-57.5q-56%200%20-103%2029t-72%2077q52%20-20%2098%20-40q60%20-24%20120%201.5t85%2086.5q24%2060%20-1.5%20120t-86.5%2084l-82%2033q22%205%2042%205%20q82%200%20140%20-57.5t58%20-140.5zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v153l172%20-69q20%20-92%2093.5%20-152t168.5%20-60q104%200%20181%2070t87%20173l345%20252q150%200%20255.5%20105.5t105.5%20254.5q0%20150%20-105.5%20255.5t-255.5%20105.5%20q-148%200%20-253%20-104.5t-107%20-252.5l-225%20-322q-9%201%20-28%201q-75%200%20-137%20-37l-297%20119v468q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5zM1289%20887q0%20-100%20-71%20-170.5t-171%20-70.5t-170.5%2070.5t-70.5%20170.5t70.5%20171t170.5%2071q101%200%20171.5%20-70.5t70.5%20-171.5z%20"
            ],
            "\uf1b8": [
                1792.0,
                "M836%20367l-15%20-368l-2%20-22l-420%2029q-36%203%20-67%2031.5t-47%2065.5q-11%2027%20-14.5%2055t4%2065t12%2055t21.5%2064t19%2053q78%20-12%20509%20-28zM449%20953l180%20-379l-147%2092q-63%20-72%20-111.5%20-144.5t-72.5%20-125t-39.5%20-94.5t-18.5%20-63l-4%20-21l-190%20357q-17%2026%20-18%2056t6%2047l8%2018q35%2063%20114%20188%20l-140%2086zM1680%20436l-188%20-359q-12%20-29%20-36.5%20-46.5t-43.5%20-20.5l-18%20-4q-71%20-7%20-219%20-12l8%20-164l-230%20367l211%20362l7%20-173q170%20-16%20283%20-5t170%2033zM895%201360q-47%20-63%20-265%20-435l-317%20187l-19%2012l225%20356q20%2031%2060%2045t80%2010q24%20-2%2048.5%20-12t42%20-21t41.5%20-33t36%20-34.5%20t36%20-39.5t32%20-35zM1550%201053l212%20-363q18%20-37%2012.5%20-76t-27.5%20-74q-13%20-20%20-33%20-37t-38%20-28t-48.5%20-22t-47%20-16t-51.5%20-14t-46%20-12q-34%2072%20-265%20436l313%20195zM1407%201279l142%2083l-220%20-373l-419%2020l151%2086q-34%2089%20-75%20166t-75.5%20123.5t-64.5%2080t-47%2046.5l-17%2013l405%20-1%20q31%203%2058%20-10.5t39%20-28.5l11%20-15q39%20-61%20112%20-190z"
            ],
            "\uf1b9": [
                2048.0,
                "M480%20448q0%2066%20-47%20113t-113%2047t-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113zM516%20768h1016l-89%20357q-2%208%20-14%2017.5t-21%209.5h-768q-9%200%20-21%20-9.5t-14%20-17.5zM1888%20448q0%2066%20-47%20113t-113%2047t-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113zM2048%20544v-384%20q0%20-14%20-9%20-23t-23%20-9h-96v-128q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136v128h-1024v-128q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136v128h-96q-14%200%20-23%209t-9%2023v384q0%2093%2065.5%20158.5t158.5%2065.5h28l105%20419q23%2094%20104%20157.5t179%2063.5h768q98%200%20179%20-63.5t104%20-157.5%20l105%20-419h28q93%200%20158.5%20-65.5t65.5%20-158.5z"
            ],
            "\uf1ba": [
                2048.0,
                "M1824%20640q93%200%20158.5%20-65.5t65.5%20-158.5v-384q0%20-14%20-9%20-23t-23%20-9h-96v-64q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136v64h-1024v-64q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136v64h-96q-14%200%20-23%209t-9%2023v384q0%2093%2065.5%20158.5t158.5%2065.5h28l105%20419q23%2094%20104%20157.5%20t179%2063.5h128v224q0%2014%209%2023t23%209h448q14%200%2023%20-9t9%20-23v-224h128q98%200%20179%20-63.5t104%20-157.5l105%20-419h28zM320%20160q66%200%20113%2047t47%20113t-47%20113t-113%2047t-113%20-47t-47%20-113t47%20-113t113%20-47zM516%20640h1016l-89%20357q-2%208%20-14%2017.5t-21%209.5h-768q-9%200%20-21%20-9.5t-14%20-17.5z%20M1728%20160q66%200%20113%2047t47%20113t-47%20113t-113%2047t-113%20-47t-47%20-113t47%20-113t113%20-47z"
            ],
            "\uf1bb": [
                1536.0,
                "M1504%2064q0%20-26%20-19%20-45t-45%20-19h-462q1%20-17%206%20-87.5t5%20-108.5q0%20-25%20-18%20-42.5t-43%20-17.5h-320q-25%200%20-43%2017.5t-18%2042.5q0%2038%205%20108.5t6%2087.5h-462q-26%200%20-45%2019t-19%2045t19%2045l402%20403h-229q-26%200%20-45%2019t-19%2045t19%2045l402%20403h-197q-26%200%20-45%2019t-19%2045t19%2045l384%20384%20q19%2019%2045%2019t45%20-19l384%20-384q19%20-19%2019%20-45t-19%20-45t-45%20-19h-197l402%20-403q19%20-19%2019%20-45t-19%20-45t-45%20-19h-229l402%20-403q19%20-19%2019%20-45z"
            ],
            "\uf1bc": [
                1536.0,
                "M1127%20326q0%2032%20-30%2051q-193%20115%20-447%20115q-133%200%20-287%20-34q-42%20-9%20-42%20-52q0%20-20%2013.5%20-34.5t35.5%20-14.5q5%200%2037%208q132%2027%20243%2027q226%200%20397%20-103q19%20-11%2033%20-11q19%200%2033%2013.5t14%2034.5zM1223%20541q0%2040%20-35%2061q-237%20141%20-548%20141q-153%200%20-303%20-42q-48%20-13%20-48%20-64%20q0%20-25%2017.5%20-42.5t42.5%20-17.5q7%200%2037%208q122%2033%20251%2033q279%200%20488%20-124q24%20-13%2038%20-13q25%200%2042.5%2017.5t17.5%2042.5zM1331%20789q0%2047%20-40%2070q-126%2073%20-293%20110.5t-343%2037.5q-204%200%20-364%20-47q-23%20-7%20-38.5%20-25.5t-15.5%20-48.5q0%20-31%2020.5%20-52t51.5%20-21q11%200%2040%208q133%2037%20307%2037%20q159%200%20309.5%20-34t253.5%20-95q21%20-12%2040%20-12q29%200%2050.5%2020.5t21.5%2051.5zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf1bd": [
                1024.0,
                "M1024%201233l-303%20-582l24%20-31h279v-415h-507l-44%20-30l-142%20-273l-30%20-30h-301v303l303%20583l-24%2030h-279v415h507l44%2030l142%20273l30%2030h301v-303z"
            ],
            "\uf1be": [
                2304.0,
                "M784%20164l16%20241l-16%20523q-1%2010%20-7.5%2017t-16.5%207q-9%200%20-16%20-7t-7%20-17l-14%20-523l14%20-241q1%20-10%207.5%20-16.5t15.5%20-6.5q22%200%2024%2023zM1080%20193l11%20211l-12%20586q0%2016%20-13%2024q-8%205%20-16%205t-16%20-5q-13%20-8%20-13%20-24l-1%20-6l-10%20-579q0%20-1%2011%20-236v-1q0%20-10%206%20-17q9%20-11%2023%20-11%20q11%200%2020%209q9%207%209%2020zM35%20533l20%20-128l-20%20-126q-2%20-9%20-9%20-9t-9%209l-17%20126l17%20128q2%209%209%209t9%20-9zM121%20612l26%20-207l-26%20-203q-2%20-9%20-10%20-9q-9%200%20-9%2010l-23%20202l23%20207q0%209%209%209q8%200%2010%20-9zM401%20159zM213%20650l25%20-245l-25%20-237q0%20-11%20-11%20-11q-10%200%20-12%2011l-21%20237l21%20245%20q2%2012%2012%2012q11%200%2011%20-12zM307%20657l23%20-252l-23%20-244q-2%20-13%20-14%20-13q-13%200%20-13%2013l-21%20244l21%20252q0%2013%2013%2013q12%200%2014%20-13zM401%20639l21%20-234l-21%20-246q-2%20-16%20-16%20-16q-6%200%20-10.5%204.5t-4.5%2011.5l-20%20246l20%20234q0%206%204.5%2010.5t10.5%204.5q14%200%2016%20-15zM784%20164zM495%20785%20l21%20-380l-21%20-246q0%20-7%20-5%20-12.5t-12%20-5.5q-16%200%20-18%2018l-18%20246l18%20380q2%2018%2018%2018q7%200%2012%20-5.5t5%20-12.5zM589%20871l19%20-468l-19%20-244q0%20-8%20-5.5%20-13.5t-13.5%20-5.5q-18%200%20-20%2019l-16%20244l16%20468q2%2019%2020%2019q8%200%2013.5%20-5.5t5.5%20-13.5zM687%20911l18%20-506l-18%20-242%20q-2%20-21%20-22%20-21q-19%200%20-21%2021l-16%20242l16%20506q0%209%206.5%2015.5t14.5%206.5q9%200%2015%20-6.5t7%20-15.5zM1079%20169v0v0v0zM881%20915l15%20-510l-15%20-239q0%20-10%20-7.5%20-17.5t-17.5%20-7.5t-17%207t-8%2018l-14%20239l14%20510q0%2011%207.5%2018t17.5%207t17.5%20-7t7.5%20-18zM980%20896l14%20-492l-14%20-236%20q0%20-11%20-8%20-19t-19%20-8t-19%208t-9%2019l-12%20236l12%20492q1%2012%209%2020t19%208t18.5%20-8t8.5%20-20zM1192%20404l-14%20-231v0q0%20-13%20-9%20-22t-22%20-9t-22%209t-10%2022l-6%20114l-6%20117l12%20636v3q2%2015%2012%2024q9%207%2020%207q8%200%2015%20-5q14%20-8%2016%20-26zM2304%20423q0%20-117%20-83%20-199.5t-200%20-82.5h-786%20q-13%202%20-22%2011t-9%2022v899q0%2023%2028%2033q85%2034%20181%2034q195%200%20338%20-131.5t160%20-323.5q53%2022%20110%2022q117%200%20200%20-83t83%20-201z"
            ],
            "\uf1c0": [
                1536.0,
                "M768%20768q237%200%20443%2043t325%20127v-170q0%20-69%20-103%20-128t-280%20-93.5t-385%20-34.5t-385%2034.5t-280%2093.5t-103%20128v170q119%20-84%20325%20-127t443%20-43zM768%200q237%200%20443%2043t325%20127v-170q0%20-69%20-103%20-128t-280%20-93.5t-385%20-34.5t-385%2034.5t-280%2093.5t-103%20128v170q119%20-84%20325%20-127%20t443%20-43zM768%20384q237%200%20443%2043t325%20127v-170q0%20-69%20-103%20-128t-280%20-93.5t-385%20-34.5t-385%2034.5t-280%2093.5t-103%20128v170q119%20-84%20325%20-127t443%20-43zM768%201536q208%200%20385%20-34.5t280%20-93.5t103%20-128v-128q0%20-69%20-103%20-128t-280%20-93.5t-385%20-34.5t-385%2034.5t-280%2093.5%20t-103%20128v128q0%2069%20103%20128t280%2093.5t385%2034.5z"
            ],
            "\uf1c1": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M894%20465q33%20-26%2084%20-56q59%207%20117%207q147%200%20177%20-49q16%20-22%202%20-52q0%20-1%20-1%20-2l-2%20-2v-1q-6%20-38%20-71%20-38q-48%200%20-115%2020t-130%2053q-221%20-24%20-392%20-83q-153%20-262%20-242%20-262q-15%200%20-28%207l-24%2012q-1%201%20-6%205q-10%2010%20-6%2036q9%2040%2056%2091.5t132%2096.5q14%209%2023%20-6q2%20-2%202%20-4q52%2085%20107%20197%20q68%20136%20104%20262q-24%2082%20-30.5%20159.5t6.5%20127.5q11%2040%2042%2040h21h1q23%200%2035%20-15q18%20-21%209%20-68q-2%20-6%20-4%20-8q1%20-3%201%20-8v-30q-2%20-123%20-14%20-192q55%20-164%20146%20-238zM318%2054q52%2024%20137%20158q-51%20-40%20-87.5%20-84t-49.5%20-74zM716%20974q-15%20-42%20-2%20-132q1%207%207%2044q0%203%207%2043q1%204%204%208%20q-1%201%20-1%202q-1%202%20-1%203q-1%2022%20-13%2036q0%20-1%20-1%20-2v-2zM592%20313q135%2054%20284%2081q-2%201%20-13%209.5t-16%2013.5q-76%2067%20-127%20176q-27%20-86%20-83%20-197q-30%20-56%20-45%20-83zM1238%20329q-24%2024%20-140%2024q76%20-28%20124%20-28q14%200%2018%201q0%201%20-2%203z"
            ],
            "\uf1c2": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M233%20768v-107h70l164%20-661h159l128%20485q7%2020%2010%2046q2%2016%202%2024h4l3%20-24q1%20-3%203.5%20-20t5.5%20-26l128%20-485h159l164%20661h70v107h-300v-107h90l-99%20-438q-5%20-20%20-7%20-46l-2%20-21h-4q0%203%20-0.5%206.5t-1.5%208t-1%206.5q-1%205%20-4%2021t-5%2025l-144%20545h-114l-144%20-545q-2%20-9%20-4.5%20-24.5%20t-3.5%20-21.5l-4%20-21h-4l-2%2021q-2%2026%20-7%2046l-99%20438h90v107h-300z"
            ],
            "\uf1c3": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M429%20106v-106h281v106h-75l103%20161q5%207%2010%2016.5t7.5%2013.5t3.5%204h2q1%20-4%205%20-10q2%20-4%204.5%20-7.5t6%20-8t6.5%20-8.5l107%20-161h-76v-106h291v106h-68l-192%20273l195%20282h67v107h-279v-107h74l-103%20-159q-4%20-7%20-10%20-16.5t-9%20-13.5l-2%20-3h-2q-1%204%20-5%2010q-6%2011%20-17%2023l-106%20159h76v107%20h-290v-107h68l189%20-272l-194%20-283h-68z"
            ],
            "\uf1c4": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M416%20106v-106h327v106h-93v167h137q76%200%20118%2015q67%2023%20106.5%2087t39.5%20146q0%2081%20-37%20141t-100%2087q-48%2019%20-130%2019h-368v-107h92v-555h-92zM769%20386h-119v268h120q52%200%2083%20-18q56%20-33%2056%20-115q0%20-89%20-62%20-120q-31%20-15%20-78%20-15z"
            ],
            "\uf1c5": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M1280%20320v-320h-1024v192l192%20192l128%20-128l384%20384zM448%20512q-80%200%20-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136t-56%20-136t-136%20-56z"
            ],
            "\uf1c6": [
                1536.0,
                "M640%201152v128h-128v-128h128zM768%201024v128h-128v-128h128zM640%20896v128h-128v-128h128zM768%20768v128h-128v-128h128zM1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400%20v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-128v-128h-128v128h-512v-1536h1280zM781%20593l107%20-349q8%20-27%208%20-52q0%20-83%20-72.5%20-137.5t-183.5%20-54.5t-183.5%2054.5t-72.5%20137.5q0%2025%208%2052q21%2063%20120%20396v128h128v-128h79%20q22%200%2039%20-13t23%20-34zM640%20128q53%200%2090.5%2019t37.5%2045t-37.5%2045t-90.5%2019t-90.5%20-19t-37.5%20-45t37.5%20-45t90.5%20-19z"
            ],
            "\uf1c7": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M620%20686q20%20-8%2020%20-30v-544q0%20-22%20-20%20-30q-8%20-2%20-12%20-2q-12%200%20-23%209l-166%20167h-131q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h131l166%20167q16%2015%2035%207zM1037%20-3q31%200%2050%2024q129%20159%20129%20363t-129%20363q-16%2021%20-43%2024t-47%20-14q-21%20-17%20-23.5%20-43.5t14.5%20-47.5%20q100%20-123%20100%20-282t-100%20-282q-17%20-21%20-14.5%20-47.5t23.5%20-42.5q18%20-15%2040%20-15zM826%20145q27%200%2047%2020q87%2093%2087%20219t-87%20219q-18%2019%20-45%2020t-46%20-17t-20%20-44.5t18%20-46.5q52%20-57%2052%20-131t-52%20-131q-19%20-20%20-18%20-46.5t20%20-44.5q20%20-17%2044%20-17z"
            ],
            "\uf1c8": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M768%20768q52%200%2090%20-38t38%20-90v-384q0%20-52%20-38%20-90t-90%20-38h-384q-52%200%20-90%2038t-38%2090v384q0%2052%2038%2090t90%2038h384zM1260%20766q20%20-8%2020%20-30v-576q0%20-22%20-20%20-30q-8%20-2%20-12%20-2q-14%200%20-23%209l-265%20266v90l265%20266q9%209%2023%209q4%200%2012%20-2z"
            ],
            "\uf1c9": [
                1536.0,
                "M1468%201156q28%20-28%2048%20-76t20%20-88v-1152q0%20-40%20-28%20-68t-68%20-28h-1344q-40%200%20-68%2028t-28%2068v1600q0%2040%2028%2068t68%2028h896q40%200%2088%20-20t76%20-48zM1024%201400v-376h376q-10%2029%20-22%2041l-313%20313q-12%2012%20-41%2022zM1408%20-128v1024h-416q-40%200%20-68%2028t-28%2068v416h-768v-1536h1280z%20M480%20768q8%2011%2021%2012.5t24%20-6.5l51%20-38q11%20-8%2012.5%20-21t-6.5%20-24l-182%20-243l182%20-243q8%20-11%206.5%20-24t-12.5%20-21l-51%20-38q-11%20-8%20-24%20-6.5t-21%2012.5l-226%20301q-14%2019%200%2038zM1282%20467q14%20-19%200%20-38l-226%20-301q-8%20-11%20-21%20-12.5t-24%206.5l-51%2038q-11%208%20-12.5%2021t6.5%2024l182%20243%20l-182%20243q-8%2011%20-6.5%2024t12.5%2021l51%2038q11%208%2024%206.5t21%20-12.5zM662%206q-13%202%20-20.5%2013t-5.5%2024l138%20831q2%2013%2013%2020.5t24%205.5l63%20-10q13%20-2%2020.5%20-13t5.5%20-24l-138%20-831q-2%20-13%20-13%20-20.5t-24%20-5.5z"
            ],
            "\uf1ca": [
                1536.0,
                "M1497%20709v-198q-101%20-23%20-198%20-23q-65%20-136%20-165.5%20-271t-181.5%20-215.5t-128%20-106.5q-80%20-45%20-162%203q-28%2017%20-60.5%2043.5t-85%2083.5t-102.5%20128.5t-107.5%20184t-105.5%20244t-91.5%20314.5t-70.5%20390h283q26%20-218%2070%20-398.5t104.5%20-317t121.5%20-235.5t140%20-195q169%20169%20287%20406%20q-142%2072%20-223%20220t-81%20333q0%20192%20104%20314.5t284%20122.5q178%200%20273%20-105.5t95%20-297.5q0%20-159%20-58%20-286q-7%20-1%20-19.5%20-3t-46%20-2t-63%206t-62%2025.5t-50.5%2051.5q31%20103%2031%20184q0%2087%20-29%20132t-79%2045q-53%200%20-85%20-49.5t-32%20-140.5q0%20-186%20105%20-293.5t267%20-107.5q62%200%20121%2014z"
            ],
            "\uf1cb": [
                1792.0,
                "M216%20367l603%20-402v359l-334%20223zM154%20511l193%20129l-193%20129v-258zM973%20-35l603%20402l-269%20180l-334%20-223v-359zM896%20458l272%20182l-272%20182l-272%20-182zM485%20733l334%20223v359l-603%20-402zM1445%20640l193%20-129v258zM1307%20733l269%20180l-603%20402v-359zM1792%20913v-546%20q0%20-41%20-34%20-64l-819%20-546q-21%20-13%20-43%20-13t-43%2013l-819%20546q-34%2023%20-34%2064v546q0%2041%2034%2064l819%20546q21%2013%2043%2013t43%20-13l819%20-546q34%20-23%2034%20-64z"
            ],
            "\uf1cc": [
                2048.0,
                "M1800%20764q111%20-46%20179.5%20-145.5t68.5%20-221.5q0%20-164%20-118%20-280.5t-285%20-116.5q-4%200%20-11.5%200.5t-10.5%200.5h-1209h-1h-2h-5q-170%2010%20-288%20125.5t-118%20280.5q0%20110%2055%20203t147%20147q-12%2039%20-12%2082q0%20115%2082%20196t199%2081q95%200%20172%20-58q75%20154%20222.5%20248t326.5%2094%20q166%200%20306%20-80.5t221.5%20-218.5t81.5%20-301q0%20-6%20-0.5%20-18t-0.5%20-18zM468%20498q0%20-122%2084%20-193t208%20-71q137%200%20240%2099q-16%2020%20-47.5%2056.5t-43.5%2050.5q-67%20-65%20-144%20-65q-55%200%20-93.5%2033.5t-38.5%2087.5q0%2053%2038.5%2087t91.5%2034q44%200%2084.5%20-21t73%20-55t65%20-75t69%20-82t77%20-75t97%20-55%20t121.5%20-21q121%200%20204.5%2071.5t83.5%20190.5q0%20121%20-84%20192t-207%2071q-143%200%20-241%20-97l93%20-108q66%2064%20142%2064q52%200%2092%20-33t40%20-84q0%20-57%20-37%20-91.5t-94%20-34.5q-43%200%20-82.5%2021t-72%2055t-65.5%2075t-69.5%2082t-77.5%2075t-96.5%2055t-118.5%2021q-122%200%20-207%20-70.5t-85%20-189.5z"
            ],
            "\uf1cd": [
                1792.0,
                "M896%201536q182%200%20348%20-71t286%20-191t191%20-286t71%20-348t-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071zM896%201408q-190%200%20-361%20-90l194%20-194q82%2028%20167%2028t167%20-28l194%20194q-171%2090%20-361%2090zM218%20279l194%20194%20q-28%2082%20-28%20167t28%20167l-194%20194q-90%20-171%20-90%20-361t90%20-361zM896%20-128q190%200%20361%2090l-194%20194q-82%20-28%20-167%20-28t-167%2028l-194%20-194q171%20-90%20361%20-90zM896%20256q159%200%20271.5%20112.5t112.5%20271.5t-112.5%20271.5t-271.5%20112.5t-271.5%20-112.5t-112.5%20-271.5t112.5%20-271.5%20t271.5%20-112.5zM1380%20473l194%20-194q90%20171%2090%20361t-90%20361l-194%20-194q28%20-82%2028%20-167t-28%20-167z"
            ],
            "\uf1ce": [
                1792.0,
                "M1760%20640q0%20-176%20-68.5%20-336t-184%20-275.5t-275.5%20-184t-336%20-68.5t-336%2068.5t-275.5%20184t-184%20275.5t-68.5%20336q0%20213%2097%20398.5t265%20305.5t374%20151v-228q-221%20-45%20-366.5%20-221t-145.5%20-406q0%20-130%2051%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5%20t136.5%20204t51%20248.5q0%20230%20-145.5%20406t-366.5%20221v228q206%20-31%20374%20-151t265%20-305.5t97%20-398.5z"
            ],
            "\uf1d0": [
                1792.0,
                "M19%20662q8%20217%20116%20406t305%20318h5q0%20-1%20-1%20-3q-8%20-8%20-28%20-33.5t-52%20-76.5t-60%20-110.5t-44.5%20-135.5t-14%20-150.5t39%20-157.5t108.5%20-154q50%20-50%20102%20-69.5t90.5%20-11.5t69.5%2023.5t47%2032.5l16%2016q39%2051%2053%20116.5t6.5%20122.5t-21%20107t-26.5%2080l-14%2029q-10%2025%20-30.5%2049.5t-43%2041%20t-43.5%2029.5t-35%2019l-13%206l104%20115q39%20-17%2078%20-52t59%20-61l19%20-27q1%2048%20-18.5%20103.5t-40.5%2087.5l-20%2031l161%20183l160%20-181q-33%20-46%20-52.5%20-102.5t-22.5%20-90.5l-4%20-33q22%2037%2061.5%2072.5t67.5%2052.5l28%2017l103%20-115q-44%20-14%20-85%20-50t-60%20-65l-19%20-29q-31%20-56%20-48%20-133.5t-7%20-170%20t57%20-156.5q33%20-45%2077.5%20-60.5t85%20-5.5t76%2026.5t57.5%2033.5l21%2016q60%2053%2096.5%20115t48.5%20121.5t10%20121.5t-18%20118t-37%20107.5t-45.5%2093t-45%2072t-34.5%2047.5l-13%2017q-14%2013%20-7%2013l10%20-3q40%20-29%2062.5%20-46t62%20-50t64%20-58t58.5%20-65t55.5%20-77t45.5%20-88t38%20-103t23.5%20-117t10.5%20-136%20q3%20-259%20-108%20-465t-312%20-321t-456%20-115q-185%200%20-351%2074t-283.5%20198t-184%20293t-60.5%20353z"
            ],
            "\uf1d1": [
                1792.0,
                "M874%20-102v-66q-208%206%20-385%20109.5t-283%20275.5l58%2034q29%20-49%2073%20-99l65%2057q148%20-168%20368%20-212l-17%20-86q65%20-12%20121%20-13zM276%20428l-83%20-28q22%20-60%2049%20-112l-57%20-33q-98%20180%20-98%20385t98%20385l57%20-33q-30%20-56%20-49%20-112l82%20-28q-35%20-100%20-35%20-212q0%20-109%2036%20-212zM1528%20251%20l58%20-34q-106%20-172%20-283%20-275.5t-385%20-109.5v66q56%201%20121%2013l-17%2086q220%2044%20368%20212l65%20-57q44%2050%2073%2099zM1377%20805l-233%20-80q14%20-42%2014%20-85t-14%20-85l232%20-80q-31%20-92%20-98%20-169l-185%20162q-57%20-67%20-147%20-85l48%20-241q-52%20-10%20-98%20-10t-98%2010l48%20241q-90%2018%20-147%2085l-185%20-162%20q-67%2077%20-98%20169l232%2080q-14%2042%20-14%2085t14%2085l-233%2080q33%2093%2099%20169l185%20-162q59%2068%20147%2086l-48%20240q44%2010%2098%2010t98%20-10l-48%20-240q88%20-18%20147%20-86l185%20162q66%20-76%2099%20-169zM874%201448v-66q-65%20-2%20-121%20-13l17%20-86q-220%20-42%20-368%20-211l-65%2056q-38%20-42%20-73%20-98l-57%2033%20q106%20172%20282%20275.5t385%20109.5zM1705%20640q0%20-205%20-98%20-385l-57%2033q27%2052%2049%20112l-83%2028q36%20103%2036%20212q0%20112%20-35%20212l82%2028q-19%2056%20-49%20112l57%2033q98%20-180%2098%20-385zM1585%201063l-57%20-33q-35%2056%20-73%2098l-65%20-56q-148%20169%20-368%20211l17%2086q-56%2011%20-121%2013v66q209%20-6%20385%20-109.5%20t282%20-275.5zM1748%20640q0%20173%20-67.5%20331t-181.5%20272t-272%20181.5t-331%2067.5t-331%20-67.5t-272%20-181.5t-181.5%20-272t-67.5%20-331t67.5%20-331t181.5%20-272t272%20-181.5t331%20-67.5t331%2067.5t272%20181.5t181.5%20272t67.5%20331zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71%20t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf1d2": [
                1536.0,
                "M582%20228q0%20-66%20-93%20-66q-107%200%20-107%2063q0%2064%2098%2064q102%200%20102%20-61zM546%20694q0%20-85%20-74%20-85q-77%200%20-77%2084q0%2090%2077%2090q36%200%2055%20-25.5t19%20-63.5zM712%20769v125q-78%20-29%20-135%20-29q-50%2029%20-110%2029q-86%200%20-145%20-57t-59%20-143q0%20-50%2029.5%20-102t73.5%20-67v-3q-38%20-17%20-38%20-85%20q0%20-53%2041%20-77v-3q-113%20-37%20-113%20-139q0%20-45%2020%20-78.5t54%20-51t72%20-25.5t81%20-8q224%200%20224%20188q0%2067%20-48%2099t-126%2046q-27%205%20-51.5%2020.5t-24.5%2039.5q0%2044%2049%2052q77%2015%20122%2070t45%20134q0%2024%20-10%2052q37%209%2049%2013zM771%20350h137q-2%2027%20-2%2082v387q0%2046%202%2069h-137q3%20-23%203%20-71v-392%20q0%20-50%20-3%20-75zM1280%20366v121q-30%20-21%20-68%20-21q-53%200%20-53%2082v225h52q9%200%2026.5%20-1t26.5%20-1v117h-105q0%2082%203%20102h-140q4%20-24%204%20-55v-47h-60v-117q36%203%2037%203q3%200%2011%20-0.5t12%20-0.5v-2h-2v-217q0%20-37%202.5%20-64t11.5%20-56.5t24.5%20-48.5t43.5%20-31t66%20-12q64%200%20108%2024zM924%201072%20q0%2036%20-24%2063.5t-60%2027.5t-60.5%20-27t-24.5%20-64q0%20-36%2025%20-62.5t60%20-26.5t59.5%2027t24.5%2062zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf1d3": [
                1792.0,
                "M595%2022q0%20100%20-165%20100q-158%200%20-158%20-104q0%20-101%20172%20-101q151%200%20151%20105zM536%20777q0%2061%20-30%20102t-89%2041q-124%200%20-124%20-145q0%20-135%20124%20-135q119%200%20119%20137zM805%201101v-202q-36%20-12%20-79%20-22q16%20-43%2016%20-84q0%20-127%20-73%20-216.5t-197%20-112.5q-40%20-8%20-59.5%20-27t-19.5%20-58%20q0%20-31%2022.5%20-51.5t58%20-32t78.5%20-22t86%20-25.5t78.5%20-37.5t58%20-64t22.5%20-98.5q0%20-304%20-363%20-304q-69%200%20-130%2012.5t-116%2041t-87.5%2082t-32.5%20127.5q0%20165%20182%20225v4q-67%2041%20-67%20126q0%20109%2063%20137v4q-72%2024%20-119.5%20108.5t-47.5%20165.5q0%20139%2095%20231.5t235%2092.5q96%200%20178%20-47%20q98%200%20218%2047zM1123%20220h-222q4%2045%204%20134v609q0%2094%20-4%20128h222q-4%20-33%20-4%20-124v-613q0%20-89%204%20-134zM1724%20442v-196q-71%20-39%20-174%20-39q-62%200%20-107%2020t-70%2050t-39.5%2078t-18.5%2092t-4%20103v351h2v4q-7%200%20-19%201t-18%201q-21%200%20-59%20-6v190h96v76q0%2054%20-6%2089h227q-6%20-41%20-6%20-165h171%20v-190q-15%200%20-43.5%202t-42.5%202h-85v-365q0%20-131%2087%20-131q61%200%20109%2033zM1148%201389q0%20-58%20-39%20-101.5t-96%20-43.5q-58%200%20-98%2043.5t-40%20101.5q0%2059%2039.5%20103t98.5%2044q58%200%2096.5%20-44.5t38.5%20-102.5z"
            ],
            "\uf1d4": [
                1536.0,
                "M809%20532l266%20499h-112l-157%20-312q-24%20-48%20-44%20-92l-42%2092l-155%20312h-120l263%20-493v-324h101v318zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf1d5": [
                1280.0,
                "M842%20964q0%20-80%20-57%20-136.5t-136%20-56.5q-60%200%20-111%2035q-62%20-67%20-115%20-146q-247%20-371%20-202%20-859q1%20-22%20-12.5%20-38.5t-34.5%20-18.5h-5q-20%200%20-35%2013.5t-17%2033.5q-14%20126%20-3.5%20247.5t29.5%20217t54%20186t69%20155.5t74%20125q61%2090%20132%20165q-16%2035%20-16%2077q0%2080%2056.5%20136.5t136.5%2056.5%20t136.5%20-56.5t56.5%20-136.5zM1223%20953q0%20-158%20-78%20-292t-212.5%20-212t-292.5%20-78q-64%200%20-131%2014q-21%205%20-32.5%2023.5t-6.5%2039.5q5%2020%2023%2031.5t39%207.5q51%20-13%20108%20-13q97%200%20186%2038t153%20102t102%20153t38%20186t-38%20186t-102%20153t-153%20102t-186%2038t-186%20-38t-153%20-102t-102%20-153%20t-38%20-186q0%20-114%2052%20-218q10%20-20%203.5%20-40t-25.5%20-30t-39.5%20-3t-30.5%2026q-64%20123%20-64%20265q0%20119%2046.5%20227t124.5%20186t186%20124t226%2046q158%200%20292.5%20-78t212.5%20-212.5t78%20-292.5z"
            ],
            "\uf1d6": [
                1792.0,
                "M270%20730q-8%2019%20-8%2052q0%2020%2011%2049t24%2045q-1%2022%207.5%2053t22.5%2043q0%20139%2092.5%20288.5t217.5%20209.5q139%2066%20324%2066q133%200%20266%20-55q49%20-21%2090%20-48t71%20-56t55%20-68t42%20-74t32.5%20-84.5t25.5%20-89.5t22%20-98l1%20-5q55%20-83%2055%20-150q0%20-14%20-9%20-40t-9%20-38q0%20-1%201.5%20-3.5t3.5%20-5t2%20-3.5%20q77%20-114%20120.5%20-214.5t43.5%20-208.5q0%20-43%20-19.5%20-100t-55.5%20-57q-9%200%20-19.5%207.5t-19%2017.5t-19%2026t-16%2026.5t-13.5%2026t-9%2017.5q-1%201%20-3%201l-5%20-4q-59%20-154%20-132%20-223q20%20-20%2061.5%20-38.5t69%20-41.5t35.5%20-65q-2%20-4%20-4%20-16t-7%20-18q-64%20-97%20-302%20-97q-53%200%20-110.5%209t-98%2020%20t-104.5%2030q-15%205%20-23%207q-14%204%20-46%204.5t-40%201.5q-41%20-45%20-127.5%20-65t-168.5%20-20q-35%200%20-69%201.5t-93%209t-101%2020.5t-74.5%2040t-32.5%2064q0%2040%2010%2059.5t41%2048.5q11%202%2040.5%2013t49.5%2012q4%200%2014%202q2%202%202%204l-2%203q-48%2011%20-108%20105.5t-73%20156.5l-5%203q-4%200%20-12%20-20q-18%20-41%20-54.5%20-74.5%20t-77.5%20-37.5h-1q-4%200%20-6%204.5t-5%205.5q-23%2054%20-23%20100q0%20275%20252%20466z"
            ],
            "\uf1d7": [
                2048.0,
                "M580%201075q0%2041%20-25%2066t-66%2025q-43%200%20-76%20-25.5t-33%20-65.5q0%20-39%2033%20-64.5t76%20-25.5q41%200%2066%2024.5t25%2065.5zM1323%20568q0%2028%20-25.5%2050t-65.5%2022q-27%200%20-49.5%20-22.5t-22.5%20-49.5q0%20-28%2022.5%20-50.5t49.5%20-22.5q40%200%2065.5%2022t25.5%2051zM1087%201075q0%2041%20-24.5%2066t-65.5%2025%20q-43%200%20-76%20-25.5t-33%20-65.5q0%20-39%2033%20-64.5t76%20-25.5q41%200%2065.5%2024.5t24.5%2065.5zM1722%20568q0%2028%20-26%2050t-65%2022q-27%200%20-49.5%20-22.5t-22.5%20-49.5q0%20-28%2022.5%20-50.5t49.5%20-22.5q39%200%2065%2022t26%2051zM1456%20965q-31%204%20-70%204q-169%200%20-311%20-77t-223.5%20-208.5t-81.5%20-287.5%20q0%20-78%2023%20-152q-35%20-3%20-68%20-3q-26%200%20-50%201.5t-55%206.5t-44.5%207t-54.5%2010.5t-50%2010.5l-253%20-127l72%20218q-290%20203%20-290%20490q0%20169%2097.5%20311t264%20223.5t363.5%2081.5q176%200%20332.5%20-66t262%20-182.5t136.5%20-260.5zM2048%20404q0%20-117%20-68.5%20-223.5t-185.5%20-193.5l55%20-181l-199%20109%20q-150%20-37%20-218%20-37q-169%200%20-311%2070.5t-223.5%20191.5t-81.5%20264t81.5%20264t223.5%20191.5t311%2070.5q161%200%20303%20-70.5t227.5%20-192t85.5%20-263.5z"
            ],
            "\uf1d8": [
                1792.0,
                "M1764%201525q33%20-24%2027%20-64l-256%20-1536q-5%20-29%20-32%20-45q-14%20-8%20-31%20-8q-11%200%20-24%205l-453%20185l-242%20-295q-18%20-23%20-49%20-23q-13%200%20-22%204q-19%207%20-30.5%2023.5t-11.5%2036.5v349l864%201059l-1069%20-925l-395%20162q-37%2014%20-40%2055q-2%2040%2032%2059l1664%20960q15%209%2032%209q20%200%2036%20-11z"
            ],
            "\uf1d9": [
                1792.0,
                "M1764%201525q33%20-24%2027%20-64l-256%20-1536q-5%20-29%20-32%20-45q-14%20-8%20-31%20-8q-11%200%20-24%205l-527%20215l-298%20-327q-18%20-21%20-47%20-21q-14%200%20-23%204q-19%207%20-30%2023.5t-11%2036.5v452l-472%20193q-37%2014%20-40%2055q-3%2039%2032%2059l1664%20960q35%2021%2068%20-2zM1422%2026l221%201323l-1434%20-827l336%20-137%20l863%20639l-478%20-797z"
            ],
            "\uf1da": [
                1536.0,
                "M1536%20640q0%20-156%20-61%20-298t-164%20-245t-245%20-164t-298%20-61q-172%200%20-327%2072.5t-264%20204.5q-7%2010%20-6.5%2022.5t8.5%2020.5l137%20138q10%209%2025%209q16%20-2%2023%20-12q73%20-95%20179%20-147t225%20-52q104%200%20198.5%2040.5t163.5%20109.5t109.5%20163.5t40.5%20198.5t-40.5%20198.5t-109.5%20163.5%20t-163.5%20109.5t-198.5%2040.5q-98%200%20-188%20-35.5t-160%20-101.5l137%20-138q31%20-30%2014%20-69q-17%20-40%20-59%20-40h-448q-26%200%20-45%2019t-19%2045v448q0%2042%2040%2059q39%2017%2069%20-14l130%20-129q107%20101%20244.5%20156.5t284.5%2055.5q156%200%20298%20-61t245%20-164t164%20-245t61%20-298zM896%20928v-448q0%20-14%20-9%20-23%20t-23%20-9h-320q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h224v352q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23z"
            ],
            "\uf1db": [
                1536.0,
                "M768%201280q-130%200%20-248.5%20-51t-204%20-136.5t-136.5%20-204t-51%20-248.5t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5t136.5%20204t51%20248.5t-51%20248.5t-136.5%20204t-204%20136.5t-248.5%2051zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103%20t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf1dc": [
                1792.0,
                "M1682%20-128q-44%200%20-132.5%203.5t-133.5%203.5q-44%200%20-132%20-3.5t-132%20-3.5q-24%200%20-37%2020.5t-13%2045.5q0%2031%2017%2046t39%2017t51%207t45%2015q33%2021%2033%20140l-1%20391q0%2021%20-1%2031q-13%204%20-50%204h-675q-38%200%20-51%20-4q-1%20-10%20-1%20-31l-1%20-371q0%20-142%2037%20-164q16%20-10%2048%20-13t57%20-3.5t45%20-15%20t20%20-45.5q0%20-26%20-12.5%20-48t-36.5%20-22q-47%200%20-139.5%203.5t-138.5%203.5q-43%200%20-128%20-3.5t-127%20-3.5q-23%200%20-35.5%2021t-12.5%2045q0%2030%2015.5%2045t36%2017.5t47.5%207.5t42%2015q33%2023%2033%20143l-1%2057v813q0%203%200.5%2026t0%2036.5t-1.5%2038.5t-3.5%2042t-6.5%2036.5t-11%2031.5t-16%2018q-15%2010%20-45%2012t-53%202%20t-41%2014t-18%2045q0%2026%2012%2048t36%2022q46%200%20138.5%20-3.5t138.5%20-3.5q42%200%20126.5%203.5t126.5%203.5q25%200%2037.5%20-22t12.5%20-48q0%20-30%20-17%20-43.5t-38.5%20-14.5t-49.5%20-4t-43%20-13q-35%20-21%20-35%20-160l1%20-320q0%20-21%201%20-32q13%20-3%2039%20-3h699q25%200%2038%203q1%2011%201%2032l1%20320q0%20139%20-35%20160%20q-18%2011%20-58.5%2012.5t-66%2013t-25.5%2049.5q0%2026%2012.5%2048t37.5%2022q44%200%20132%20-3.5t132%20-3.5q43%200%20129%203.5t129%203.5q25%200%2037.5%20-22t12.5%20-48q0%20-30%20-17.5%20-44t-40%20-14.5t-51.5%20-3t-44%20-12.5q-35%20-23%20-35%20-161l1%20-943q0%20-119%2034%20-140q16%20-10%2046%20-13.5t53.5%20-4.5t41.5%20-15.5t18%20-44.5%20q0%20-26%20-12%20-48t-36%20-22z"
            ],
            "\uf1dd": [
                1280.0,
                "M1278%201347v-73q0%20-29%20-18.5%20-61t-42.5%20-32q-50%200%20-54%20-1q-26%20-6%20-32%20-31q-3%20-11%20-3%20-64v-1152q0%20-25%20-18%20-43t-43%20-18h-108q-25%200%20-43%2018t-18%2043v1218h-143v-1218q0%20-25%20-17.5%20-43t-43.5%20-18h-108q-26%200%20-43.5%2018t-17.5%2043v496q-147%2012%20-245%2059q-126%2058%20-192%20179%20q-64%20117%20-64%20259q0%20166%2088%20286q88%20118%20209%20159q111%2037%20417%2037h479q25%200%2043%20-18t18%20-43z"
            ],
            "\uf1de": [
                1536.0,
                "M352%20128v-128h-352v128h352zM704%20256q26%200%2045%20-19t19%20-45v-256q0%20-26%20-19%20-45t-45%20-19h-256q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h256zM864%20640v-128h-864v128h864zM224%201152v-128h-224v128h224zM1536%20128v-128h-736v128h736zM576%201280q26%200%2045%20-19t19%20-45v-256%20q0%20-26%20-19%20-45t-45%20-19h-256q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h256zM1216%20768q26%200%2045%20-19t19%20-45v-256q0%20-26%20-19%20-45t-45%20-19h-256q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h256zM1536%20640v-128h-224v128h224zM1536%201152v-128h-864v128h864z"
            ],
            "\uf1e0": [
                1536.0,
                "M1216%20512q133%200%20226.5%20-93.5t93.5%20-226.5t-93.5%20-226.5t-226.5%20-93.5t-226.5%2093.5t-93.5%20226.5q0%2012%202%2034l-360%20180q-92%20-86%20-218%20-86q-133%200%20-226.5%2093.5t-93.5%20226.5t93.5%20226.5t226.5%2093.5q126%200%20218%20-86l360%20180q-2%2022%20-2%2034q0%20133%2093.5%20226.5t226.5%2093.5%20t226.5%20-93.5t93.5%20-226.5t-93.5%20-226.5t-226.5%20-93.5q-126%200%20-218%2086l-360%20-180q2%20-22%202%20-34t-2%20-34l360%20-180q92%2086%20218%2086z"
            ],
            "\uf1e1": [
                1536.0,
                "M1280%20341q0%2088%20-62.5%20151t-150.5%2063q-84%200%20-145%20-58l-241%20120q2%2016%202%2023t-2%2023l241%20120q61%20-58%20145%20-58q88%200%20150.5%2063t62.5%20151t-62.5%20150.5t-150.5%2062.5t-151%20-62.5t-63%20-150.5q0%20-7%202%20-23l-241%20-120q-62%2057%20-145%2057q-88%200%20-150.5%20-62.5t-62.5%20-150.5t62.5%20-150.5%20t150.5%20-62.5q83%200%20145%2057l241%20-120q-2%20-16%20-2%20-23q0%20-88%2063%20-150.5t151%20-62.5t150.5%2062.5t62.5%20150.5zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf1e2": [
                1792.0,
                "M571%20947q-10%2025%20-34%2035t-49%200q-108%20-44%20-191%20-127t-127%20-191q-10%20-25%200%20-49t35%20-34q13%20-5%2024%20-5q42%200%2060%2040q34%2084%2098.5%20148.5t148.5%2098.5q25%2011%2035%2035t0%2049zM1513%201303l46%20-46l-244%20-243l68%20-68q19%20-19%2019%20-45.5t-19%20-45.5l-64%20-64q89%20-161%2089%20-343q0%20-143%20-55.5%20-273.5%20t-150%20-225t-225%20-150t-273.5%20-55.5t-273.5%2055.5t-225%20150t-150%20225t-55.5%20273.5t55.5%20273.5t150%20225t225%20150t273.5%2055.5q182%200%20343%20-89l64%2064q19%2019%2045.5%2019t45.5%20-19l68%20-68zM1521%201359q-10%20-10%20-22%20-10q-13%200%20-23%2010l-91%2090q-9%2010%20-9%2023t9%2023q10%209%2023%209t23%20-9l90%20-91%20q10%20-9%2010%20-22.5t-10%20-22.5zM1751%201129q-11%20-9%20-23%20-9t-23%209l-90%2091q-10%209%20-10%2022.5t10%2022.5q9%2010%2022.5%2010t22.5%20-10l91%20-90q9%20-10%209%20-23t-9%20-23zM1792%201312q0%20-14%20-9%20-23t-23%20-9h-96q-14%200%20-23%209t-9%2023t9%2023t23%209h96q14%200%2023%20-9t9%20-23zM1600%201504v-96q0%20-14%20-9%20-23t-23%20-9%20t-23%209t-9%2023v96q0%2014%209%2023t23%209t23%20-9t9%20-23zM1751%201449l-91%20-90q-10%20-10%20-22%20-10q-13%200%20-23%2010q-10%209%20-10%2022.5t10%2022.5l90%2091q10%209%2023%209t23%20-9q9%20-10%209%20-23t-9%20-23z"
            ],
            "\uf1e3": [
                1792.0,
                "M609%20720l287%20208l287%20-208l-109%20-336h-355zM896%201536q182%200%20348%20-71t286%20-191t191%20-286t71%20-348t-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071zM1515%20186q149%20203%20149%20454v3l-102%20-89l-240%20224l63%20323%20l134%20-12q-150%20206%20-389%20282l53%20-124l-287%20-159l-287%20159l53%20124q-239%20-76%20-389%20-282l135%2012l62%20-323l-240%20-224l-102%2089v-3q0%20-251%20149%20-454l30%20132l326%20-40l139%20-298l-116%20-69q117%20-39%20240%20-39t240%2039l-116%2069l139%20298l326%2040z"
            ],
            "\uf1e4": [
                1792.0,
                "M448%20224v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM256%20608v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM832%20224v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023%20v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM640%20608v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM66%20768q-28%200%20-47%2019t-19%2046v129h514v-129q0%20-27%20-19%20-46t-46%20-19h-383zM1216%20224v-192q0%20-14%20-9%20-23t-23%20-9h-192%20q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1024%20608v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1600%20224v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23%20zM1408%20608v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1792%201016v-13h-514v10q0%20104%20-382%20102q-382%20-1%20-382%20-102v-10h-514v13q0%2017%208.5%2043t34%2064t65.5%2075.5t110.5%2076t160%2067.5t224%2047.5t293.5%2018.5t293%20-18.5t224%20-47.5%20t160.5%20-67.5t110.5%20-76t65.5%20-75.5t34%20-64t8.5%20-43zM1792%20608v-192q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v192q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1792%20962v-129q0%20-27%20-19%20-46t-46%20-19h-384q-27%200%20-46%2019t-19%2046v129h514z"
            ],
            "\uf1e5": [
                1792.0,
                "M704%201216v-768q0%20-26%20-19%20-45t-45%20-19v-576q0%20-26%20-19%20-45t-45%20-19h-512q-26%200%20-45%2019t-19%2045v512l249%20873q7%2023%2031%2023h424zM1024%201216v-704h-256v704h256zM1792%20320v-512q0%20-26%20-19%20-45t-45%20-19h-512q-26%200%20-45%2019t-19%2045v576q-26%200%20-45%2019t-19%2045v768h424q24%200%2031%20-23z%20M736%201504v-224h-352v224q0%2014%209%2023t23%209h288q14%200%2023%20-9t9%20-23zM1408%201504v-224h-352v224q0%2014%209%2023t23%209h288q14%200%2023%20-9t9%20-23z"
            ],
            "\uf1e6": [
                1792.0,
                "M1755%201083q37%20-38%2037%20-90.5t-37%20-90.5l-401%20-400l150%20-150l-160%20-160q-163%20-163%20-389.5%20-186.5t-411.5%20100.5l-362%20-362h-181v181l362%20362q-124%20185%20-100.5%20411.5t186.5%20389.5l160%20160l150%20-150l400%20401q38%2037%2091%2037t90%20-37t37%20-90.5t-37%20-90.5l-400%20-401l234%20-234%20l401%20400q38%2037%2091%2037t90%20-37z"
            ],
            "\uf1e7": [
                1792.0,
                "M873%20796q0%20-83%20-63.5%20-142.5t-152.5%20-59.5t-152.5%2059.5t-63.5%20142.5q0%2084%2063.5%20143t152.5%2059t152.5%20-59t63.5%20-143zM1375%20796q0%20-83%20-63%20-142.5t-153%20-59.5q-89%200%20-152.5%2059.5t-63.5%20142.5q0%2084%2063.5%20143t152.5%2059q90%200%20153%20-59t63%20-143zM1600%20616v667q0%2087%20-32%20123.5%20t-111%2036.5h-1112q-83%200%20-112.5%20-34t-29.5%20-126v-673q43%20-23%2088.5%20-40t81%20-28t81%20-18.5t71%20-11t70%20-4t58.5%20-0.5t56.5%202t44.5%202q68%201%2095%20-27q6%20-6%2010%20-9q26%20-25%2061%20-51q7%2091%20118%2087q5%200%2036.5%20-1.5t43%20-2t45.5%20-1t53%201t54.5%204.5t61%208.5t62%2013.5t67%2019.5t67.5%2027t72%2034.5z%20M1763%20621q-121%20-149%20-372%20-252q84%20-285%20-23%20-465q-66%20-113%20-183%20-148q-104%20-32%20-182%2015q-86%2051%20-82%20164l-1%20326v1q-8%202%20-24.5%206t-23.5%205l-1%20-338q4%20-114%20-83%20-164q-79%20-47%20-183%20-15q-117%2036%20-182%20150q-105%20180%20-22%20463q-251%20103%20-372%20252q-25%2037%20-4%2063t60%20-1q4%20-2%2011.5%20-7%20t10.5%20-8v694q0%2072%2047%20123t114%2051h1257q67%200%20114%20-51t47%20-123v-694l21%2015q39%2027%2060%201t-4%20-63z"
            ],
            "\uf1e8": [
                1792.0,
                "M896%201102v-434h-145v434h145zM1294%201102v-434h-145v434h145zM1294%20342l253%20254v795h-1194v-1049h326v-217l217%20217h398zM1692%201536v-1013l-434%20-434h-326l-217%20-217h-217v217h-398v1158l109%20289h1483z"
            ],
            "\uf1e9": [
                1536.0,
                "M773%20217v-127q-1%20-292%20-6%20-305q-12%20-32%20-51%20-40q-54%20-9%20-181.5%2038t-162.5%2089q-13%2015%20-17%2036q-1%2012%204%2026q4%2010%2034%2047t181%20216q1%200%2060%2070q15%2019%2039.5%2024.5t49.5%20-3.5q24%20-10%2037.5%20-29t12.5%20-42zM624%20468q-3%20-55%20-52%20-70l-120%20-39q-275%20-88%20-292%20-88q-35%202%20-54%2036%20q-12%2025%20-17%2075q-8%2076%201%20166.5t30%20124.5t56%2032q13%200%20202%20-77q71%20-29%20115%20-47l84%20-34q23%20-9%2035.5%20-30.5t11.5%20-48.5zM1450%20171q-7%20-54%20-91.5%20-161t-135.5%20-127q-37%20-14%20-63%207q-14%2010%20-184%20287l-47%2077q-14%2021%20-11.5%2046t19.5%2046q35%2043%2083%2026q1%20-1%20119%20-40q203%20-66%20242%20-79.5%20t47%20-20.5q28%20-22%2022%20-61zM778%20803q5%20-102%20-54%20-122q-58%20-17%20-114%2071l-378%20598q-8%2035%2019%2062q41%2043%20207.5%2089.5t224.5%2031.5q40%20-10%2049%20-45q3%20-18%2022%20-305.5t24%20-379.5zM1440%20695q3%20-39%20-26%20-59q-15%20-10%20-329%20-86q-67%20-15%20-91%20-23l1%202q-23%20-6%20-46%204t-37%2032q-30%2047%200%2087%20q1%201%2075%20102q125%20171%20150%20204t34%2039q28%2019%2065%202q48%20-23%20123%20-133.5t81%20-167.5v-3z"
            ],
            "\uf1ea": [
                2048.0,
                "M1024%201024h-384v-384h384v384zM1152%20384v-128h-640v128h640zM1152%201152v-640h-640v640h640zM1792%20384v-128h-512v128h512zM1792%20640v-128h-512v128h512zM1792%20896v-128h-512v128h512zM1792%201152v-128h-512v128h512zM256%20192v960h-128v-960q0%20-26%2019%20-45t45%20-19t45%2019%20t19%2045zM1920%20192v1088h-1536v-1088q0%20-33%20-11%20-64h1483q26%200%2045%2019t19%2045zM2048%201408v-1216q0%20-80%20-56%20-136t-136%20-56h-1664q-80%200%20-136%2056t-56%20136v1088h256v128h1792z"
            ],
            "\uf1eb": [
                2048.0,
                "M1024%2013q-20%200%20-93%2073.5t-73%2093.5q0%2032%2062.5%2054t103.5%2022t103.5%20-22t62.5%20-54q0%20-20%20-73%20-93.5t-93%20-73.5zM1294%20284q-2%200%20-40%2025t-101.5%2050t-128.5%2025t-128.5%20-25t-101%20-50t-40.5%20-25q-18%200%20-93.5%2075t-75.5%2093q0%2013%2010%2023q78%2077%20196%20121t233%2044t233%20-44t196%20-121%20q10%20-10%2010%20-23q0%20-18%20-75.5%20-93t-93.5%20-75zM1567%20556q-11%200%20-23%208q-136%20105%20-252%20154.5t-268%2049.5q-85%200%20-170.5%20-22t-149%20-53t-113.5%20-62t-79%20-53t-31%20-22q-17%200%20-92%2075t-75%2093q0%2012%2010%2022q132%20132%20320%20205t380%2073t380%20-73t320%20-205q10%20-10%2010%20-22q0%20-18%20-75%20-93t-92%20-75z%20M1838%20827q-11%200%20-22%209q-179%20157%20-371.5%20236.5t-420.5%2079.5t-420.5%20-79.5t-371.5%20-236.5q-11%20-9%20-22%20-9q-17%200%20-92.5%2075t-75.5%2093q0%2013%2010%2023q187%20186%20445%20288t527%20102t527%20-102t445%20-288q10%20-10%2010%20-23q0%20-18%20-75.5%20-93t-92.5%20-75z"
            ],
            "\uf1ec": [
                1792.0,
                "M384%200q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM768%200q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM384%20384q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5%20t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1152%200q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM768%20384q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5%20t37.5%2090.5zM384%20768q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1152%20384q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM768%20768q0%2053%20-37.5%2090.5t-90.5%2037.5%20t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1536%200v384q0%2052%20-38%2090t-90%2038t-90%20-38t-38%20-90v-384q0%20-52%2038%20-90t90%20-38t90%2038t38%2090zM1152%20768q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5z%20M1536%201088v256q0%2026%20-19%2045t-45%2019h-1280q-26%200%20-45%20-19t-19%20-45v-256q0%20-26%2019%20-45t45%20-19h1280q26%200%2045%2019t19%2045zM1536%20768q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1664%201408v-1536q0%20-52%20-38%20-90t-90%20-38%20h-1408q-52%200%20-90%2038t-38%2090v1536q0%2052%2038%2090t90%2038h1408q52%200%2090%20-38t38%20-90z"
            ],
            "\uf1ed": [
                1536.0,
                "M1519%20890q18%20-84%20-4%20-204q-87%20-444%20-565%20-444h-44q-25%200%20-44%20-16.5t-24%20-42.5l-4%20-19l-55%20-346l-2%20-15q-5%20-26%20-24.5%20-42.5t-44.5%20-16.5h-251q-21%200%20-33%2015t-9%2036q9%2056%2026.5%20168t26.5%20168t27%20167.5t27%20167.5q5%2037%2043%2037h131q133%20-2%20236%2021q175%2039%20287%20144q102%2095%20155%20246%20q24%2070%2035%20133q1%206%202.5%207.5t3.5%201t6%20-3.5q79%20-59%2098%20-162zM1347%201172q0%20-107%20-46%20-236q-80%20-233%20-302%20-315q-113%20-40%20-252%20-42q0%20-1%20-90%20-1l-90%201q-100%200%20-118%20-96q-2%20-8%20-85%20-530q-1%20-10%20-12%20-10h-295q-22%200%20-36.5%2016.5t-11.5%2038.5l232%201471q5%2029%2027.5%2048t51.5%2019h598%20q34%200%2097.5%20-13t111.5%20-32q107%20-41%20163.5%20-123t56.5%20-196z"
            ],
            "\uf1ee": [
                1792.0,
                "M441%20864q33%200%2052%20-26q266%20-364%20362%20-774h-446q-127%20441%20-367%20749q-12%2016%20-3%2033.5t29%2017.5h373zM1000%20507q-49%20-199%20-125%20-393q-79%20310%20-256%20594q40%20221%2044%20449q211%20-340%20337%20-650zM1099%201216q235%20-324%20384.5%20-698.5t184.5%20-773.5h-451q-41%20665%20-553%201472h435zM1792%20640%20q0%20-424%20-101%20-812q-67%20560%20-359%201083q-25%20301%20-106%20584q-4%2016%205.5%2028.5t25.5%2012.5h359q21%200%2038.5%20-13t22.5%20-33q115%20-409%20115%20-850z"
            ],
            "\uf1f0": [
                2304.0,
                "M1975%20546h-138q14%2037%2066%20179l3%209q4%2010%2010%2026t9%2026l12%20-55zM531%20611l-58%20295q-11%2054%20-75%2054h-268l-2%20-13q311%20-79%20403%20-336zM710%20960l-162%20-438l-17%2089q-26%2070%20-85%20129.5t-131%2088.5l135%20-510h175l261%20641h-176zM849%20318h166l104%20642h-166zM1617%20944q-69%2027%20-149%2027%20q-123%200%20-201%20-59t-79%20-153q-1%20-102%20145%20-174q48%20-23%2067%20-41t19%20-39q0%20-30%20-30%20-46t-69%20-16q-86%200%20-156%2033l-22%2011l-23%20-144q74%20-34%20185%20-34q130%20-1%20208.5%2059t80.5%20160q0%20106%20-140%20174q-49%2025%20-71%2042t-22%2038q0%2022%2024.5%2038.5t70.5%2016.5q70%201%20124%20-24l15%20-8zM2042%20960h-128%20q-65%200%20-87%20-54l-246%20-588h174l35%2096h212q5%20-22%2020%20-96h154zM2304%201280v-1280q0%20-52%20-38%20-90t-90%20-38h-2048q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h2048q52%200%2090%20-38t38%20-90z"
            ],
            "\uf1f1": [
                2304.0,
                "M1119%201195q-128%2085%20-281%2085q-103%200%20-197.5%20-40.5t-162.5%20-108.5t-108.5%20-162t-40.5%20-197q0%20-104%2040.5%20-198t108.5%20-162t162%20-108.5t198%20-40.5q153%200%20281%2085q-131%20107%20-178%20265.5t0.5%20316.5t177.5%20265zM1152%201171q-126%20-99%20-172%20-249.5t-0.5%20-300.5t172.5%20-249%20q127%2099%20172.5%20249t-0.5%20300.5t-172%20249.5zM1185%201195q130%20-107%20177.5%20-265.5t0.5%20-317t-178%20-264.5q128%20-85%20281%20-85q104%200%20198%2040.5t162%20108.5t108.5%20162t40.5%20198q0%20103%20-40.5%20197t-108.5%20162t-162.5%20108.5t-197.5%2040.5q-153%200%20-281%20-85zM1926%20473h7v3h-17v-3h7v-17h3v17z%20M1955%20456h4v20h-5l-6%20-13l-6%2013h-5v-20h3v15l6%20-13h4l5%2013v-15zM1947%2016v-2h-2h-3v3h3h2v-1zM1947%207h3l-4%205h2l1%201q1%201%201%203t-1%203l-1%201h-3h-6v-13h3v5h1zM685%2075q0%2019%2011%2031t30%2012q18%200%2029%20-12.5t11%20-30.5q0%20-19%20-11%20-31t-29%20-12q-19%200%20-30%2012t-11%2031zM1158%20119q30%200%2035%20-32%20h-70q5%2032%2035%2032zM1514%2075q0%2019%2011%2031t29%2012t29.5%20-12.5t11.5%20-30.5q0%20-19%20-11%20-31t-30%20-12q-18%200%20-29%2012t-11%2031zM1786%2075q0%2018%2011.5%2030.5t29.5%2012.5t29.5%20-12.5t11.5%20-30.5q0%20-19%20-11.5%20-31t-29.5%20-12t-29.5%2012.5t-11.5%2030.5zM1944%203q-2%200%20-4%201q-1%200%20-3%202t-2%203q-1%202%20-1%204%20q0%203%201%204q0%202%202%204l1%201q2%200%202%201q2%201%204%201q3%200%204%20-1l4%20-2l2%20-4v-1q1%20-2%201%20-3l-1%20-1v-3t-1%20-1l-1%20-2q-2%20-2%20-4%20-2q-1%20-1%20-4%20-1zM599%207h30v85q0%2024%20-14.5%2038.5t-39.5%2015.5q-32%200%20-47%20-24q-14%2024%20-45%2024q-24%200%20-39%20-20v16h-30v-135h30v75q0%2036%2033%2036q30%200%2030%20-36v-75h29v75%20q0%2036%2033%2036q30%200%2030%20-36v-75zM765%207h29v68v67h-29v-16q-17%2020%20-43%2020q-29%200%20-48%20-20t-19%20-51t19%20-51t48%20-20q28%200%2043%2020v-17zM943%2048q0%2034%20-47%2040l-14%202q-23%204%20-23%2014q0%2015%2025%2015q23%200%2043%20-11l12%2024q-22%2014%20-55%2014q-26%200%20-41%20-12t-15%20-32q0%20-33%2047%20-39l13%20-2q24%20-4%2024%20-14%20q0%20-17%20-31%20-17q-25%200%20-45%2014l-13%20-23q25%20-17%2058%20-17q29%200%2045.5%2012t16.5%2032zM1073%2014l-8%2025q-13%20-7%20-26%20-7q-19%200%20-19%2022v61h48v27h-48v41h-30v-41h-28v-27h28v-61q0%20-50%2047%20-50q21%200%2036%2010zM1159%20146q-29%200%20-48%20-20t-19%20-51q0%20-32%2019.5%20-51.5t49.5%20-19.5q33%200%2055%2019l-14%2022%20q-18%20-15%20-39%20-15q-34%200%20-41%2033h101v12q0%2032%20-18%2051.5t-46%2019.5zM1318%20146q-23%200%20-35%20-20v16h-30v-135h30v76q0%2035%2029%2035q10%200%2018%20-4l9%2028q-9%204%20-21%204zM1348%2075q0%20-31%2019.5%20-51t52.5%20-20q29%200%2048%2016l-14%2024q-18%20-13%20-35%20-12q-18%200%20-29.5%2012t-11.5%2031t11.5%2031t29.5%2012%20q19%200%2035%20-12l14%2024q-20%2016%20-48%2016q-33%200%20-52.5%20-20t-19.5%20-51zM1593%207h30v68v67h-30v-16q-15%2020%20-42%2020q-29%200%20-48.5%20-20t-19.5%20-51t19.5%20-51t48.5%20-20q28%200%2042%2020v-17zM1726%20146q-23%200%20-35%20-20v16h-29v-135h29v76q0%2035%2029%2035q10%200%2018%20-4l9%2028q-8%204%20-21%204zM1866%207h29v68v122%20h-29v-71q-15%2020%20-43%2020t-47.5%20-20.5t-19.5%20-50.5t19.5%20-50.5t47.5%20-20.5q29%200%2043%2020v-17zM1944%2027l-2%20-1h-3q-2%20-1%20-4%20-3q-3%20-1%20-3%20-4q-1%20-2%20-1%20-6q0%20-3%201%20-5q0%20-2%203%20-4q2%20-2%204%20-3t5%20-1q4%200%206%201q0%201%202%202l2%201q1%201%203%204q1%202%201%205q0%204%20-1%206q-1%201%20-3%204q0%201%20-2%202l-2%201q-1%200%20-3%200.5%20t-3%200.5zM2304%201280v-1280q0%20-52%20-38%20-90t-90%20-38h-2048q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h2048q52%200%2090%20-38t38%20-90z"
            ],
            "\uf1f2": [
                2304.0,
                "M313%20759q0%20-51%20-36%20-84q-29%20-26%20-89%20-26h-17v220h17q61%200%2089%20-27q36%20-31%2036%20-83zM2089%20824q0%20-52%20-64%20-52h-19v101h20q63%200%2063%20-49zM380%20759q0%2074%20-50%20120.5t-129%2046.5h-95v-333h95q74%200%20119%2038q60%2051%2060%20128zM410%20593h65v333h-65v-333zM730%20694q0%2040%20-20.5%2062t-75.5%2042%20q-29%2010%20-39.5%2019t-10.5%2023q0%2016%2013.5%2026.5t34.5%2010.5q29%200%2053%20-27l34%2044q-41%2037%20-98%2037q-44%200%20-74%20-27.5t-30%20-67.5q0%20-35%2018%20-55.5t64%20-36.5q37%20-13%2045%20-19q19%20-12%2019%20-34q0%20-20%20-14%20-33.5t-36%20-13.5q-48%200%20-71%2044l-42%20-40q44%20-64%20115%20-64q51%200%2083%2030.5t32%2079.5zM1008%20604%20v77q-37%20-37%20-78%20-37q-49%200%20-80.5%2032.5t-31.5%2082.5q0%2048%2031.5%2081.5t77.5%2033.5q43%200%2081%20-38v77q-40%2020%20-80%2020q-74%200%20-125.5%20-50.5t-51.5%20-123.5t51%20-123.5t125%20-50.5q42%200%2081%2019zM2240%200v527q-65%20-40%20-144.5%20-84t-237.5%20-117t-329.5%20-137.5t-417.5%20-134.5t-504%20-118h1569%20q26%200%2045%2019t19%2045zM1389%20757q0%2075%20-53%20128t-128%2053t-128%20-53t-53%20-128t53%20-128t128%20-53t128%2053t53%20128zM1541%20584l144%20342h-71l-90%20-224l-89%20224h-71l142%20-342h35zM1714%20593h184v56h-119v90h115v56h-115v74h119v57h-184v-333zM2105%20593h80l-105%20140q76%2016%2076%2094q0%2047%20-31%2073%20t-87%2026h-97v-333h65v133h9zM2304%201274v-1268q0%20-56%20-38.5%20-95t-93.5%20-39h-2040q-55%200%20-93.5%2039t-38.5%2095v1268q0%2056%2038.5%2095t93.5%2039h2040q55%200%2093.5%20-39t38.5%20-95z"
            ],
            "\uf1f3": [
                2304.0,
                "M119%20854h89l-45%20108zM740%20328l74%2079l-70%2079h-163v-49h142v-55h-142v-54h159zM898%20406l99%20-110v217zM1186%20453q0%2033%20-40%2033h-84v-69h83q41%200%2041%2036zM1475%20457q0%2029%20-42%2029h-82v-61h81q43%200%2043%2032zM1197%20923q0%2029%20-42%2029h-82v-60h81q43%200%2043%2031zM1656%20854h89l-44%20108z%20M699%201009v-271h-66v212l-94%20-212h-57l-94%20212v-212h-132l-25%2060h-135l-25%20-60h-70l116%20271h96l110%20-257v257h106l85%20-184l77%20184h108zM1255%20453q0%20-20%20-5.5%20-35t-14%20-25t-22.5%20-16.5t-26%20-10t-31.5%20-4.5t-31.5%20-1t-32.5%200.5t-29.5%200.5v-91h-126l-80%2090l-83%20-90h-256v271h260%20l80%20-89l82%2089h207q109%200%20109%20-89zM964%20794v-56h-217v271h217v-57h-152v-49h148v-55h-148v-54h152zM2304%20235v-229q0%20-55%20-38.5%20-94.5t-93.5%20-39.5h-2040q-55%200%20-93.5%2039.5t-38.5%2094.5v678h111l25%2061h55l25%20-61h218v46l19%20-46h113l20%2047v-47h541v99l10%201q10%200%2010%20-14v-86h279%20v23q23%20-12%2055%20-18t52.5%20-6.5t63%200.5t51.5%201l25%2061h56l25%20-61h227v58l34%20-58h182v378h-180v-44l-25%2044h-185v-44l-23%2044h-249q-69%200%20-109%20-22v22h-172v-22q-24%2022%20-73%2022h-628l-43%20-97l-43%2097h-198v-44l-22%2044h-169l-78%20-179v391q0%2055%2038.5%2094.5t93.5%2039.5h2040%20q55%200%2093.5%20-39.5t38.5%20-94.5v-678h-120q-51%200%20-81%20-22v22h-177q-55%200%20-78%20-22v22h-316v-22q-31%2022%20-87%2022h-209v-22q-23%2022%20-91%2022h-234l-54%20-58l-50%2058h-349v-378h343l55%2059l52%20-59h211v89h21q59%200%2090%2013v-102h174v99h8q8%200%2010%20-2t2%20-10v-87h529q57%200%2088%2024v-24h168%20q60%200%2095%2017zM1546%20469q0%20-23%20-12%20-43t-34%20-29q25%20-9%2034%20-26t9%20-46v-54h-65v45q0%2033%20-12%2043.5t-46%2010.5h-69v-99h-65v271h154q48%200%2077%20-15t29%20-58zM1269%20936q0%20-24%20-12.5%20-44t-33.5%20-29q26%20-9%2034.5%20-25.5t8.5%20-46.5v-53h-65q0%209%200.5%2026.5t0%2025t-3%2018.5t-8.5%2016t-17.5%208.5%20t-29.5%203.5h-70v-98h-64v271l153%20-1q49%200%2078%20-14.5t29%20-57.5zM1798%20327v-56h-216v271h216v-56h-151v-49h148v-55h-148v-54zM1372%201009v-271h-66v271h66zM2065%20357q0%20-86%20-102%20-86h-126v58h126q34%200%2034%2025q0%2016%20-17%2021t-41.5%205t-49.5%203.5t-42%2022.5t-17%2055q0%2039%2026%2060t66%2021%20h130v-57h-119q-36%200%20-36%20-25q0%20-16%2017.5%20-20.5t42%20-4t49%20-2.5t42%20-21.5t17.5%20-54.5zM2304%20407v-101q-24%20-35%20-88%20-35h-125v58h125q33%200%2033%2025q0%2013%20-12.5%2019t-31%205.5t-40%202t-40%208t-31%2024t-12.5%2048.5q0%2039%2026.5%2060t66.5%2021h129v-57h-118q-36%200%20-36%20-25q0%20-20%2029%20-22t68.5%20-5%20t56.5%20-26zM2139%201008v-270h-92l-122%20203v-203h-132l-26%2060h-134l-25%20-60h-75q-129%200%20-129%20133q0%20138%20133%20138h63v-59q-7%200%20-28%201t-28.5%200.5t-23%20-2t-21.5%20-6.5t-14.5%20-13.5t-11.5%20-23t-3%20-33.5q0%20-38%2013.5%20-58t49.5%20-20h29l92%20213h97l109%20-256v256h99l114%20-188v188h66z"
            ],
            "\uf1f4": [
                2304.0,
                "M745%20630q0%20-37%20-25.5%20-61.5t-62.5%20-24.5q-29%200%20-46.5%2016t-17.5%2044q0%2037%2025%2062.5t62%2025.5q28%200%2046.5%20-16.5t18.5%20-45.5zM1530%20779q0%20-42%20-22%20-57t-66%20-15l-32%20-1l17%20107q2%2011%2013%2011h18q22%200%2035%20-2t25%20-12.5t12%20-30.5zM1881%20630q0%20-36%20-25.5%20-61t-61.5%20-25q-29%200%20-47%2016%20t-18%2044q0%2037%2025%2062.5t62%2025.5q28%200%2046.5%20-16.5t18.5%20-45.5zM513%20801q0%2059%20-38.5%2085.5t-100.5%2026.5h-160q-19%200%20-21%20-19l-65%20-408q-1%20-6%203%20-11t10%20-5h76q20%200%2022%2019l18%20110q1%208%207%2013t15%206.5t17%201.5t19%20-1t14%20-1q86%200%20135%2048.5t49%20134.5zM822%20489l41%20261q1%206%20-3%2011t-10%205h-76%20q-14%200%20-17%20-33q-27%2040%20-95%2040q-72%200%20-122.5%20-54t-50.5%20-127q0%20-59%2034.5%20-94t92.5%20-35q28%200%2058%2012t48%2032q-4%20-12%20-4%20-21q0%20-16%2013%20-16h69q19%200%2022%2019zM1269%20752q0%205%20-4%209.5t-9%204.5h-77q-11%200%20-18%20-10l-106%20-156l-44%20150q-5%2016%20-22%2016h-75q-5%200%20-9%20-4.5t-4%20-9.5q0%20-2%2019.5%20-59%20t42%20-123t23.5%20-70q-82%20-112%20-82%20-120q0%20-13%2013%20-13h77q11%200%2018%2010l255%20368q2%202%202%207zM1649%20801q0%2059%20-38.5%2085.5t-100.5%2026.5h-159q-20%200%20-22%20-19l-65%20-408q-1%20-6%203%20-11t10%20-5h82q12%200%2016%2013l18%20116q1%208%207%2013t15%206.5t17%201.5t19%20-1t14%20-1q86%200%20135%2048.5t49%20134.5zM1958%20489%20l41%20261q1%206%20-3%2011t-10%205h-76q-14%200%20-17%20-33q-26%2040%20-95%2040q-72%200%20-122.5%20-54t-50.5%20-127q0%20-59%2034.5%20-94t92.5%20-35q29%200%2059%2012t47%2032q0%20-1%20-2%20-9t-2%20-12q0%20-16%2013%20-16h69q19%200%2022%2019zM2176%20898v1q0%2014%20-13%2014h-74q-11%200%20-13%20-11l-65%20-416l-1%20-2q0%20-5%204%20-9.5t10%20-4.5h66%20q19%200%2021%2019zM392%20764q-5%20-35%20-26%20-46t-60%20-11l-33%20-1l17%20107q2%2011%2013%2011h19q40%200%2058%20-11.5t12%20-48.5zM2304%201280v-1280q0%20-52%20-38%20-90t-90%20-38h-2048q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h2048q52%200%2090%20-38t38%20-90z"
            ],
            "\uf1f5": [
                2304.0,
                "M1597%20633q0%20-69%20-21%20-106q-19%20-35%20-52%20-35q-23%200%20-41%209v224q29%2030%2057%2030q57%200%2057%20-122zM2035%20669h-110q6%2098%2056%2098q51%200%2054%20-98zM476%20534q0%2059%20-33%2091.5t-101%2057.5q-36%2013%20-52%2024t-16%2025q0%2026%2038%2026q58%200%20124%20-33l18%20112q-67%2032%20-149%2032q-77%200%20-123%20-38q-48%20-39%20-48%20-109%20q0%20-58%2032.5%20-90.5t99.5%20-56.5q39%20-14%2054.5%20-25.5t15.5%20-27.5q0%20-31%20-48%20-31q-29%200%20-70%2012.5t-72%2030.5l-18%20-113q72%20-41%20168%20-41q81%200%20129%2037q51%2041%2051%20117zM771%20749l19%20111h-96v135l-129%20-21l-18%20-114l-46%20-8l-17%20-103h62v-219q0%20-84%2044%20-120q38%20-30%20111%20-30q32%200%2079%2011v118%20q-32%20-7%20-44%20-7q-42%200%20-42%2050v197h77zM1087%20724v139q-15%203%20-28%203q-32%200%20-55.5%20-16t-33.5%20-46l-10%2056h-131v-471h150v306q26%2031%2082%2031q16%200%2026%20-2zM1124%20389h150v471h-150v-471zM1746%20638q0%20122%20-45%20179q-40%2052%20-111%2052q-64%200%20-117%20-56l-8%2047h-132v-645l150%2025v151%20q36%20-11%2068%20-11q83%200%20134%2056q61%2065%2061%20202zM1278%20986q0%2033%20-23%2056t-56%2023t-56%20-23t-23%20-56t23%20-56.5t56%20-23.5t56%2023.5t23%2056.5zM2176%20629q0%20113%20-48%20176q-50%2064%20-144%2064q-96%200%20-151.5%20-66t-55.5%20-180q0%20-128%2063%20-188q55%20-55%20161%20-55q101%200%20160%2040l-16%20103q-57%20-31%20-128%20-31%20q-43%200%20-63%2019q-23%2019%20-28%2066h248q2%2014%202%2052zM2304%201280v-1280q0%20-52%20-38%20-90t-90%20-38h-2048q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h2048q52%200%2090%20-38t38%20-90z"
            ],
            "\uf1f6": [
                2048.0,
                "M1558%20684q61%20-356%20298%20-556q0%20-52%20-38%20-90t-90%20-38h-448q0%20-106%20-75%20-181t-181%20-75t-180.5%2074.5t-75.5%20180.5zM1024%20-176q16%200%2016%2016t-16%2016q-59%200%20-101.5%2042.5t-42.5%20101.5q0%2016%20-16%2016t-16%20-16q0%20-73%2051.5%20-124.5t124.5%20-51.5zM2026%201424q8%20-10%207.5%20-23.5t-10.5%20-22.5%20l-1872%20-1622q-10%20-8%20-23.5%20-7t-21.5%2011l-84%2096q-8%2010%20-7.5%2023.5t10.5%2021.5l186%20161q-19%2032%20-19%2066q50%2042%2091%2088t85%20119.5t74.5%20158.5t50%20206t19.5%20260q0%20152%20117%20282.5t307%20158.5q-8%2019%20-8%2039q0%2040%2028%2068t68%2028t68%20-28t28%20-68q0%20-20%20-8%20-39q124%20-18%20219%20-82.5t148%20-157.5%20l418%20363q10%208%2023.5%207t21.5%20-11z"
            ],
            "\uf1f7": [
                2048.0,
                "M1040%20-160q0%2016%20-16%2016q-59%200%20-101.5%2042.5t-42.5%20101.5q0%2016%20-16%2016t-16%20-16q0%20-73%2051.5%20-124.5t124.5%20-51.5q16%200%2016%2016zM503%20315l877%20760q-42%2088%20-132.5%20146.5t-223.5%2058.5q-93%200%20-169.5%20-31.5t-121.5%20-80.5t-69%20-103t-24%20-105q0%20-384%20-137%20-645zM1856%20128%20q0%20-52%20-38%20-90t-90%20-38h-448q0%20-106%20-75%20-181t-181%20-75t-180.5%2074.5t-75.5%20180.5l149%20129h757q-166%20187%20-227%20459l111%2097q61%20-356%20298%20-556zM1942%201520l84%20-96q8%20-10%207.5%20-23.5t-10.5%20-22.5l-1872%20-1622q-10%20-8%20-23.5%20-7t-21.5%2011l-84%2096q-8%2010%20-7.5%2023.5t10.5%2021.5l186%20161%20q-19%2032%20-19%2066q50%2042%2091%2088t85%20119.5t74.5%20158.5t50%20206t19.5%20260q0%20152%20117%20282.5t307%20158.5q-8%2019%20-8%2039q0%2040%2028%2068t68%2028t68%20-28t28%20-68q0%20-20%20-8%20-39q124%20-18%20219%20-82.5t148%20-157.5l418%20363q10%208%2023.5%207t21.5%20-11z"
            ],
            "\uf1f8": [
                1408.0,
                "M512%20160v704q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-704q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM768%20160v704q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-704q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1024%20160v704q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-704%20q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM480%201152h448l-48%20117q-7%209%20-17%2011h-317q-10%20-2%20-17%20-11zM1408%201120v-64q0%20-14%20-9%20-23t-23%20-9h-96v-948q0%20-83%20-47%20-143.5t-113%20-60.5h-832q-66%200%20-113%2058.5t-47%20141.5v952h-96q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h309l70%20167%20q15%2037%2054%2063t79%2026h320q40%200%2079%20-26t54%20-63l70%20-167h309q14%200%2023%20-9t9%20-23z"
            ],
            "\uf1f9": [
                1536.0,
                "M1150%20462v-109q0%20-50%20-36.5%20-89t-94%20-60.5t-118%20-32.5t-117.5%20-11q-205%200%20-342.5%20139t-137.5%20346q0%20203%20136%20339t339%20136q34%200%2075.5%20-4.5t93%20-18t92.5%20-34t69%20-56.5t28%20-81v-109q0%20-16%20-16%20-16h-118q-16%200%20-16%2016v70q0%2043%20-65.5%2067.5t-137.5%2024.5q-140%200%20-228.5%20-91.5%20t-88.5%20-237.5q0%20-151%2091.5%20-249.5t233.5%20-98.5q68%200%20138%2024t70%2066v70q0%207%204.5%2011.5t10.5%204.5h119q6%200%2011%20-4.5t5%20-11.5zM768%201280q-130%200%20-248.5%20-51t-204%20-136.5t-136.5%20-204t-51%20-248.5t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5t136.5%20204t51%20248.5%20t-51%20248.5t-136.5%20204t-204%20136.5t-248.5%2051zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf1fa": [
                1536.0,
                "M972%20761q0%20108%20-53.5%20169t-147.5%2061q-63%200%20-124%20-30.5t-110%20-84.5t-79.5%20-137t-30.5%20-180q0%20-112%2053.5%20-173t150.5%20-61q96%200%20176%2066.5t122.5%20166t42.5%20203.5zM1536%20640q0%20-111%20-37%20-197t-98.5%20-135t-131.5%20-74.5t-145%20-27.5q-6%200%20-15.5%20-0.5t-16.5%20-0.5q-95%200%20-142%2053%20q-28%2033%20-33%2083q-52%20-66%20-131.5%20-110t-173.5%20-44q-161%200%20-249.5%2095.5t-88.5%20269.5q0%20157%2066%20290t179%20210.5t246%2077.5q87%200%20155%20-35.5t106%20-99.5l2%2019l11%2056q1%206%205.5%2012t9.5%206h118q5%200%2013%20-11q5%20-5%203%20-16l-120%20-614q-5%20-24%20-5%20-48q0%20-39%2012.5%20-52t44.5%20-13q28%201%2057%205.5t73%2024%20t77%2050t57%2089.5t24%20137q0%20292%20-174%20466t-466%20174q-130%200%20-248.5%20-51t-204%20-136.5t-136.5%20-204t-51%20-248.5t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51q228%200%20405%20144q11%209%2024%208t21%20-12l41%20-49q8%20-12%207%20-24q-2%20-13%20-12%20-22q-102%20-83%20-227.5%20-128t-258.5%20-45q-156%200%20-298%2061%20t-245%20164t-164%20245t-61%20298t61%20298t164%20245t245%20164t298%2061q344%200%20556%20-212t212%20-556z"
            ],
            "\uf1fb": [
                1792.0,
                "M1698%201442q94%20-94%2094%20-226.5t-94%20-225.5l-225%20-223l104%20-104q10%20-10%2010%20-23t-10%20-23l-210%20-210q-10%20-10%20-23%20-10t-23%2010l-105%20105l-603%20-603q-37%20-37%20-90%20-37h-203l-256%20-128l-64%2064l128%20256v203q0%2053%2037%2090l603%20603l-105%20105q-10%2010%20-10%2023t10%2023l210%20210q10%2010%2023%2010%20t23%20-10l104%20-104l223%20225q93%2094%20225.5%2094t226.5%20-94zM512%2064l576%20576l-192%20192l-576%20-576v-192h192z"
            ],
            "\uf1fc": [
                1792.0,
                "M1615%201536q70%200%20122.5%20-46.5t52.5%20-116.5q0%20-63%20-45%20-151q-332%20-629%20-465%20-752q-97%20-91%20-218%20-91q-126%200%20-216.5%2092.5t-90.5%20219.5q0%20128%2092%20212l638%20579q59%2054%20130%2054zM706%20502q39%20-76%20106.5%20-130t150.5%20-76l1%20-71q4%20-213%20-129.5%20-347t-348.5%20-134q-123%200%20-218%2046.5%20t-152.5%20127.5t-86.5%20183t-29%20220q7%20-5%2041%20-30t62%20-44.5t59%20-36.5t46%20-17q41%200%2055%2037q25%2066%2057.5%20112.5t69.5%2076t88%2047.5t103%2025.5t125%2010.5z"
            ],
            "\uf1fd": [
                1792.0,
                "M1792%20128v-384h-1792v384q45%200%2085%2014t59%2027.5t47%2037.5q30%2027%2051.5%2038t56.5%2011q24%200%2044%20-7t31%20-15t33%20-27q29%20-25%2047%20-38t58%20-27t86%20-14q45%200%2085%2014.5t58%2027t48%2037.5q21%2019%2032.5%2027t31%2015t43.5%207q35%200%2056.5%20-11t51.5%20-38q28%20-24%2047%20-37.5t59%20-27.5t85%20-14t85%2014t59%2027.5%20t47%2037.5q30%2027%2051.5%2038t56.5%2011q34%200%2055.5%20-11t51.5%20-38q28%20-24%2047%20-37.5t59%20-27.5t85%20-14zM1792%20448v-192q-24%200%20-44%207t-31%2015t-33%2027q-29%2025%20-47%2038t-58%2027t-85%2014q-46%200%20-86%20-14t-58%20-27t-47%20-38q-22%20-19%20-33%20-27t-31%20-15t-44%20-7q-35%200%20-56.5%2011t-51.5%2038q-29%2025%20-47%2038%20t-58%2027t-86%2014q-45%200%20-85%20-14.5t-58%20-27t-48%20-37.5q-21%20-19%20-32.5%20-27t-31%20-15t-43.5%20-7q-35%200%20-56.5%2011t-51.5%2038q-28%2024%20-47%2037.5t-59%2027.5t-85%2014q-46%200%20-86%20-14t-58%20-27t-47%20-38q-30%20-27%20-51.5%20-38t-56.5%20-11v192q0%2080%2056%20136t136%2056h64v448h256v-448h256v448h256v-448%20h256v448h256v-448h64q80%200%20136%20-56t56%20-136zM512%201312q0%20-77%20-36%20-118.5t-92%20-41.5q-53%200%20-90.5%2037.5t-37.5%2090.5q0%2029%209.5%2051t23.5%2034t31%2028t31%2031.5t23.5%2044.5t9.5%2067q38%200%2083%20-74t45%20-150zM1024%201312q0%20-77%20-36%20-118.5t-92%20-41.5q-53%200%20-90.5%2037.5t-37.5%2090.5%20q0%2029%209.5%2051t23.5%2034t31%2028t31%2031.5t23.5%2044.5t9.5%2067q38%200%2083%20-74t45%20-150zM1536%201312q0%20-77%20-36%20-118.5t-92%20-41.5q-53%200%20-90.5%2037.5t-37.5%2090.5q0%2029%209.5%2051t23.5%2034t31%2028t31%2031.5t23.5%2044.5t9.5%2067q38%200%2083%20-74t45%20-150z"
            ],
            "\uf1fe": [
                2048.0,
                "M2048%200v-128h-2048v1536h128v-1408h1920zM1664%201024l256%20-896h-1664v576l448%20576l576%20-576z"
            ],
            "\uf200": [
                1792.0,
                "M768%20646l546%20-546q-106%20-108%20-247.5%20-168t-298.5%20-60q-209%200%20-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103v-762zM955%20640h773q0%20-157%20-60%20-298.5t-168%20-247.5zM1664%20768h-768v768q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf201": [
                2048.0,
                "M2048%200v-128h-2048v1536h128v-1408h1920zM1920%201248v-435q0%20-21%20-19.5%20-29.5t-35.5%207.5l-121%20121l-633%20-633q-10%20-10%20-23%20-10t-23%2010l-233%20233l-416%20-416l-192%20192l585%20585q10%2010%2023%2010t23%20-10l233%20-233l464%20464l-121%20121q-16%2016%20-7.5%2035.5t29.5%2019.5h435q14%200%2023%20-9%20t9%20-23z"
            ],
            "\uf202": [
                1792.0,
                "M1292%20832q0%20-6%2010%20-41q10%20-29%2025%20-49.5t41%20-34t44%20-20t55%20-16.5q325%20-91%20325%20-332q0%20-146%20-105.5%20-242.5t-254.5%20-96.5q-59%200%20-111.5%2018.5t-91.5%2045.5t-77%2074.5t-63%2087.5t-53.5%20103.5t-43.5%20103t-39.5%20106.5t-35.5%2095q-32%2081%20-61.5%20133.5t-73.5%2096.5t-104%2064t-142%2020%20q-96%200%20-183%20-55.5t-138%20-144.5t-51%20-185q0%20-160%20106.5%20-279.5t263.5%20-119.5q177%200%20258%2095q56%2063%2083%20116l84%20-152q-15%20-34%20-44%20-70l1%20-1q-131%20-152%20-388%20-152q-147%200%20-269.5%2079t-190.5%20207.5t-68%20274.5q0%20105%2043.5%20206t116%20176.5t172%20121.5t204.5%2046q87%200%20159%20-19t123.5%20-50%20t95%20-80t72.5%20-99t58.5%20-117t50.5%20-124.5t50%20-130.5t55%20-127q96%20-200%20233%20-200q81%200%20138.5%2048.5t57.5%20128.5q0%2042%20-19%2072t-50.5%2046t-72.5%2031.5t-84.5%2027t-87.5%2034t-81%2052t-65%2082t-39%20122.5q-3%2016%20-3%2033q0%20110%2087.5%20192t198.5%2078q78%20-3%20120.5%20-14.5t90.5%20-53.5h-1%20q12%20-11%2023%20-24.5t26%20-36t19%20-27.5l-129%20-99q-26%2049%20-54%2070v1q-23%2021%20-97%2021q-49%200%20-84%20-33t-35%20-83z"
            ],
            "\uf203": [
                1536.0,
                "M1432%20484q0%20173%20-234%20239q-35%2010%20-53%2016.5t-38%2025t-29%2046.5q0%202%20-2%208.5t-3%2012t-1%207.5q0%2036%2024.5%2059.5t60.5%2023.5q54%200%2071%20-15h-1q20%20-15%2039%20-51l93%2071q-39%2054%20-49%2064q-33%2029%20-67.5%2039t-85.5%2010q-80%200%20-142%20-57.5t-62%20-137.5q0%20-7%202%20-23q16%20-96%2064.5%20-140t148.5%20-73%20q29%20-8%2049%20-15.5t45%20-21.5t38.5%20-34.5t13.5%20-46.5v-5q1%20-58%20-40.5%20-93t-100.5%20-35q-97%200%20-167%20144q-23%2047%20-51.5%20121.5t-48%20125.5t-54%20110.5t-74%2095.5t-103.5%2060.5t-147%2024.5q-101%200%20-192%20-56t-144%20-148t-50%20-192v-1q4%20-108%2050.5%20-199t133.5%20-147.5t196%20-56.5q186%200%20279%20110%20q20%2027%2031%2051l-60%20109q-42%20-80%20-99%20-116t-146%20-36q-115%200%20-191%2087t-76%20204q0%20105%2082%20189t186%2084q112%200%20170%20-53.5t104%20-172.5q8%20-21%2025.5%20-68.5t28.5%20-76.5t31.5%20-74.5t38.5%20-74t45.5%20-62.5t55.5%20-53.5t66%20-33t80%20-13.5q107%200%20183%2069.5t76%20174.5zM1536%201120v-960%20q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf204": [
                2048.0,
                "M1152%20640q0%20104%20-40.5%20198.5t-109.5%20163.5t-163.5%20109.5t-198.5%2040.5t-198.5%20-40.5t-163.5%20-109.5t-109.5%20-163.5t-40.5%20-198.5t40.5%20-198.5t109.5%20-163.5t163.5%20-109.5t198.5%20-40.5t198.5%2040.5t163.5%20109.5t109.5%20163.5t40.5%20198.5zM1920%20640q0%20104%20-40.5%20198.5%20t-109.5%20163.5t-163.5%20109.5t-198.5%2040.5h-386q119%20-90%20188.5%20-224t69.5%20-288t-69.5%20-288t-188.5%20-224h386q104%200%20198.5%2040.5t163.5%20109.5t109.5%20163.5t40.5%20198.5zM2048%20640q0%20-130%20-51%20-248.5t-136.5%20-204t-204%20-136.5t-248.5%20-51h-768q-130%200%20-248.5%2051t-204%20136.5%20t-136.5%20204t-51%20248.5t51%20248.5t136.5%20204t204%20136.5t248.5%2051h768q130%200%20248.5%20-51t204%20-136.5t136.5%20-204t51%20-248.5z"
            ],
            "\uf205": [
                2048.0,
                "M0%20640q0%20130%2051%20248.5t136.5%20204t204%20136.5t248.5%2051h768q130%200%20248.5%20-51t204%20-136.5t136.5%20-204t51%20-248.5t-51%20-248.5t-136.5%20-204t-204%20-136.5t-248.5%20-51h-768q-130%200%20-248.5%2051t-204%20136.5t-136.5%20204t-51%20248.5zM1408%20128q104%200%20198.5%2040.5t163.5%20109.5%20t109.5%20163.5t40.5%20198.5t-40.5%20198.5t-109.5%20163.5t-163.5%20109.5t-198.5%2040.5t-198.5%20-40.5t-163.5%20-109.5t-109.5%20-163.5t-40.5%20-198.5t40.5%20-198.5t109.5%20-163.5t163.5%20-109.5t198.5%20-40.5z"
            ],
            "\uf206": [
                2304.0,
                "M762%20384h-314q-40%200%20-57.5%2035t6.5%2067l188%20251q-65%2031%20-137%2031q-132%200%20-226%20-94t-94%20-226t94%20-226t226%20-94q115%200%20203%2072.5t111%20183.5zM576%20512h186q-18%2085%20-75%20148zM1056%20512l288%20384h-480l-99%20-132q105%20-103%20126%20-252h165zM2176%20448q0%20132%20-94%20226t-226%2094%20q-60%200%20-121%20-24l174%20-260q15%20-23%2010%20-49t-27%20-40q-15%20-11%20-36%20-11q-35%200%20-53%2029l-174%20260q-93%20-95%20-93%20-225q0%20-132%2094%20-226t226%20-94t226%2094t94%20226zM2304%20448q0%20-185%20-131.5%20-316.5t-316.5%20-131.5t-316.5%20131.5t-131.5%20316.5q0%2097%2039.5%20183.5t109.5%20149.5l-65%2098l-353%20-469%20q-18%20-26%20-51%20-26h-197q-23%20-164%20-149%20-274t-294%20-110q-185%200%20-316.5%20131.5t-131.5%20316.5t131.5%20316.5t316.5%20131.5q114%200%20215%20-55l137%20183h-224q-26%200%20-45%2019t-19%2045t19%2045t45%2019h384v-128h435l-85%20128h-222q-26%200%20-45%2019t-19%2045t19%2045t45%2019h256q33%200%2053%20-28l267%20-400%20q91%2044%20192%2044q185%200%20316.5%20-131.5t131.5%20-316.5z"
            ],
            "\uf207": [
                1536.0,
                "M384%20320q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1408%20320q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1362%20716l-72%20384q-5%2023%20-22.5%2037.5t-40.5%2014.5%20h-918q-23%200%20-40.5%20-14.5t-22.5%20-37.5l-72%20-384q-5%20-30%2014%20-53t49%20-23h1062q30%200%2049%2023t14%2053zM1136%201328q0%2020%20-14%2034t-34%2014h-640q-20%200%20-34%20-14t-14%20-34t14%20-34t34%20-14h640q20%200%2034%2014t14%2034zM1536%20603v-603h-128v-128q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5%20t-37.5%2090.5v128h-768v-128q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5v128h-128v603q0%20112%2025%20223l103%20454q9%2078%2097.5%20137t230%2089t312.5%2030t312.5%20-30t230%20-89t97.5%20-137l105%20-454q23%20-102%2023%20-223z"
            ],
            "\uf208": [
                2048.0,
                "M1463%20704q0%20-35%20-25%20-60.5t-61%20-25.5h-702q-36%200%20-61%2025.5t-25%2060.5t25%2060.5t61%2025.5h702q36%200%2061%20-25.5t25%20-60.5zM1677%20704q0%2086%20-23%20170h-982q-36%200%20-61%2025t-25%2060q0%2036%2025%2061t61%2025h908q-88%20143%20-235%20227t-320%2084q-177%200%20-327.5%20-87.5t-238%20-237.5t-87.5%20-327%20q0%20-86%2023%20-170h982q36%200%2061%20-25t25%20-60q0%20-36%20-25%20-61t-61%20-25h-908q88%20-143%20235.5%20-227t320.5%20-84q132%200%20253%2051.5t208%20139t139%20208t52%20253.5zM2048%20959q0%20-35%20-25%20-60t-61%20-25h-131q17%20-85%2017%20-170q0%20-167%20-65.5%20-319.5t-175.5%20-263t-262.5%20-176t-319.5%20-65.5%20q-246%200%20-448.5%20133t-301.5%20350h-189q-36%200%20-61%2025t-25%2061q0%2035%2025%2060t61%2025h132q-17%2085%20-17%20170q0%20167%2065.5%20319.5t175.5%20263t262.5%20176t320.5%2065.5q245%200%20447.5%20-133t301.5%20-350h188q36%200%2061%20-25t25%20-61z"
            ],
            "\uf209": [
                1280.0,
                "M953%201158l-114%20-328l117%20-21q165%20451%20165%20518q0%2056%20-38%2056q-57%200%20-130%20-225zM654%20471l33%20-88q37%2042%2071%2067l-33%205.5t-38.5%207t-32.5%208.5zM362%201367q0%20-98%20159%20-521q17%2010%2049%2010q15%200%2075%20-5l-121%20351q-75%20220%20-123%20220q-19%200%20-29%20-17.5t-10%20-37.5zM283%20608q0%20-36%2051.5%20-119%20t117.5%20-153t100%20-70q14%200%2025.5%2013t11.5%2027q0%2024%20-32%20102q-13%2032%20-32%2072t-47.5%2089t-61.5%2081t-62%2032q-20%200%20-45.5%20-27t-25.5%20-47zM125%20273q0%20-41%2025%20-104q59%20-145%20183.5%20-227t281.5%20-82q227%200%20382%20170q152%20169%20152%20427q0%2043%20-1%2067t-11.5%2062t-30.5%2056q-56%2049%20-211.5%2075.5%20t-270.5%2026.5q-37%200%20-49%20-11q-12%20-5%20-12%20-35q0%20-34%2021.5%20-60t55.5%20-40t77.5%20-23.5t87.5%20-11.5t85%20-4t70%200h23q24%200%2040%20-19q15%20-19%2019%20-55q-28%20-28%20-96%20-54q-61%20-22%20-93%20-46q-64%20-46%20-108.5%20-114t-44.5%20-137q0%20-31%2018.5%20-88.5t18.5%20-87.5l-3%20-12q-4%20-12%20-4%20-14%20q-137%2010%20-146%20216q-8%20-2%20-41%20-2q2%20-7%202%20-21q0%20-53%20-40.5%20-89.5t-94.5%20-36.5q-82%200%20-166.5%2078t-84.5%20159q0%2034%2033%2067q52%20-64%2060%20-76q77%20-104%20133%20-104q12%200%2026.5%208.5t14.5%2020.5q0%2034%20-87.5%20145t-116.5%20111q-43%200%20-70%20-44.5t-27%20-90.5zM11%20264q0%20101%2042.5%20163t136.5%2088%20q-28%2074%20-28%20104q0%2062%2061%20123t122%2061q29%200%2070%20-15q-163%20462%20-163%20567q0%2080%2041%20130.5t119%2050.5q131%200%20325%20-581q6%20-17%208%20-23q6%2016%2029%2079.5t43.5%20118.5t54%20127.5t64.5%20123t70.5%2086.5t76.5%2036q71%200%20112%20-49t41%20-122q0%20-108%20-159%20-550q61%20-15%20100.5%20-46t58.5%20-78t26%20-93.5%20t7%20-110.5q0%20-150%20-47%20-280t-132%20-225t-211%20-150t-278%20-55q-111%200%20-223%2042q-149%2057%20-258%20191.5t-109%20286.5z"
            ],
            "\uf20a": [
                2048.0,
                "M785%20528h207q-14%20-158%20-98.5%20-248.5t-214.5%20-90.5q-162%200%20-254.5%20116t-92.5%20316q0%20194%2093%20311.5t233%20117.5q148%200%20232%20-87t97%20-247h-203q-5%2064%20-35.5%2099t-81.5%2035q-57%200%20-88.5%20-60.5t-31.5%20-177.5q0%20-48%205%20-84t18%20-69.5t40%20-51.5t66%20-18q95%200%20109%20139zM1497%20528h206%20q-14%20-158%20-98%20-248.5t-214%20-90.5q-162%200%20-254.5%20116t-92.5%20316q0%20194%2093%20311.5t233%20117.5q148%200%20232%20-87t97%20-247h-204q-4%2064%20-35%2099t-81%2035q-57%200%20-88.5%20-60.5t-31.5%20-177.5q0%20-48%205%20-84t18%20-69.5t39.5%20-51.5t65.5%20-18q49%200%2076.5%2038t33.5%20101zM1856%20647q0%20207%20-15.5%20307%20t-60.5%20161q-6%208%20-13.5%2014t-21.5%2015t-16%2011q-86%2063%20-697%2063q-625%200%20-710%20-63q-5%20-4%20-17.5%20-11.5t-21%20-14t-14.5%20-14.5q-45%20-60%20-60%20-159.5t-15%20-308.5q0%20-208%2015%20-307.5t60%20-160.5q6%20-8%2015%20-15t20.5%20-14t17.5%20-12q44%20-33%20239.5%20-49t470.5%20-16q610%200%20697%2065q5%204%2017%2011t20.5%2014%20t13.5%2016q46%2060%2061%20159t15%20309zM2048%201408v-1536h-2048v1536h2048z"
            ],
            "\uf20b": [
                1536.0,
                "M992%20912v-496q0%20-14%20-9%20-23t-23%20-9h-160q-14%200%20-23%209t-9%2023v496q0%20112%20-80%20192t-192%2080h-272v-1152q0%20-14%20-9%20-23t-23%20-9h-160q-14%200%20-23%209t-9%2023v1344q0%2014%209%2023t23%209h464q135%200%20249%20-66.5t180.5%20-180.5t66.5%20-249zM1376%201376v-880q0%20-135%20-66.5%20-249t-180.5%20-180.5%20t-249%20-66.5h-464q-14%200%20-23%209t-9%2023v960q0%2014%209%2023t23%209h160q14%200%2023%20-9t9%20-23v-768h272q112%200%20192%2080t80%20192v880q0%2014%209%2023t23%209h160q14%200%2023%20-9t9%20-23z"
            ],
            "\uf20c": [
                1536.0,
                "M1311%20694v-114q0%20-24%20-13.5%20-38t-37.5%20-14h-202q-24%200%20-38%2014t-14%2038v114q0%2024%2014%2038t38%2014h202q24%200%2037.5%20-14t13.5%20-38zM821%20464v250q0%2053%20-32.5%2085.5t-85.5%2032.5h-133q-68%200%20-96%20-52q-28%2052%20-96%2052h-130q-53%200%20-85.5%20-32.5t-32.5%20-85.5v-250q0%20-22%2021%20-22h55%20q22%200%2022%2022v230q0%2024%2013.5%2038t38.5%2014h94q24%200%2038%20-14t14%20-38v-230q0%20-22%2021%20-22h54q22%200%2022%2022v230q0%2024%2014%2038t38%2014h97q24%200%2037.5%20-14t13.5%20-38v-230q0%20-22%2022%20-22h55q21%200%2021%2022zM1410%20560v154q0%2053%20-33%2085.5t-86%2032.5h-264q-53%200%20-86%20-32.5t-33%20-85.5v-410%20q0%20-21%2022%20-21h55q21%200%2021%2021v180q31%20-42%2094%20-42h191q53%200%2086%2032.5t33%2085.5zM1536%201176v-1072q0%20-96%20-68%20-164t-164%20-68h-1072q-96%200%20-164%2068t-68%20164v1072q0%2096%2068%20164t164%2068h1072q96%200%20164%20-68t68%20-164z"
            ],
            "\uf20d": [
                1536.0,
                "M915%20450h-294l147%20551zM1001%20128h311l-324%201024h-440l-324%20-1024h311l383%20314zM1536%201120v-960q0%20-118%20-85%20-203t-203%20-85h-960q-118%200%20-203%2085t-85%20203v960q0%20118%2085%20203t203%2085h960q118%200%20203%20-85t85%20-203z"
            ],
            "\uf20e": [
                2048.0,
                "M2048%20641q0%20-21%20-13%20-36.5t-33%20-19.5l-205%20-356q3%20-9%203%20-18q0%20-20%20-12.5%20-35.5t-32.5%20-19.5l-193%20-337q3%20-8%203%20-16q0%20-23%20-16.5%20-40t-40.5%20-17q-25%200%20-41%2018h-400q-17%20-20%20-43%20-20t-43%2020h-399q-17%20-20%20-43%20-20q-23%200%20-40%2016.5t-17%2040.5q0%208%204%2020l-193%20335%20q-20%204%20-32.5%2019.5t-12.5%2035.5q0%209%203%2018l-206%20356q-20%205%20-32.5%2020.5t-12.5%2035.5q0%2021%2013.5%2036.5t33.5%2019.5l199%20344q0%201%20-0.5%203t-0.5%203q0%2036%2034%2051l209%20363q-4%2010%20-4%2018q0%2024%2017%2040.5t40%2016.5q26%200%2044%20-21h396q16%2021%2043%2021t43%20-21h398q18%2021%2044%2021q23%200%2040%20-16.5t17%20-40.5%20q0%20-6%20-4%20-18l207%20-358q23%20-1%2039%20-17.5t16%20-38.5q0%20-13%20-7%20-27l187%20-324q19%20-4%2031.5%20-19.5t12.5%20-35.5zM1063%20-158h389l-342%20354h-143l-342%20-354h360q18%2016%2039%2016t39%20-16zM112%20654q1%20-4%201%20-13q0%20-10%20-2%20-15l208%20-360l15%20-6l188%20199v347l-187%20194q-13%20-8%20-29%20-10zM986%201438%20h-388l190%20-200l554%20200h-280q-16%20-16%20-38%20-16t-38%2016zM1689%20226q1%206%205%2011l-64%2068l-17%20-79h76zM1583%20226l22%20105l-252%20266l-296%20-307l63%20-64h463zM1495%20-142l16%2028l65%20310h-427l333%20-343q8%204%2013%205zM578%20-158h5l342%20354h-373v-335l4%20-6q14%20-5%2022%20-13zM552%20226h402l64%2066%20l-309%20321l-157%20-166v-221zM359%20226h163v189l-168%20-177q4%20-8%205%20-12zM358%201051q0%20-1%200.5%20-2t0.5%20-2q0%20-16%20-8%20-29l171%20-177v269zM552%201121v-311l153%20-157l297%20314l-223%20236zM556%201425l-4%20-8v-264l205%2074l-191%20201q-6%20-2%20-10%20-3zM1447%201438h-16l-621%20-224l213%20-225zM1023%20946%20l-297%20-315l311%20-319l296%20307zM688%20634l-136%20141v-284zM1038%20270l-42%20-44h85zM1374%20618l238%20-251l132%20624l-3%205l-1%201zM1718%201018q-8%2013%20-8%2029v2l-216%20376q-5%201%20-13%205l-437%20-463l310%20-327zM522%201142v223l-163%20-282zM522%20196h-163l163%20-283v283zM1607%20196l-48%20-227l130%20227h-82%20zM1729%20266l207%20361q-2%2010%20-2%2014q0%201%203%2016l-171%20296l-129%20-612l77%20-82q5%203%2015%207z"
            ],
            "\uf210": [
                1536.0,
                "M0%20856q0%20131%2091.5%20226.5t222.5%2095.5h742l352%20358v-1470q0%20-132%20-91.5%20-227t-222.5%20-95h-780q-131%200%20-222.5%2095t-91.5%20227v790zM1232%20102l-176%20180v425q0%2046%20-32%2079t-78%2033h-484q-46%200%20-78%20-33t-32%20-79v-492q0%20-46%2032.5%20-79.5t77.5%20-33.5h770z"
            ],
            "\uf211": [
                1536.0,
                "M934%201386q-317%20-121%20-556%20-362.5t-358%20-560.5q-20%2089%20-20%20176q0%20208%20102.5%20384.5t278.5%20279t384%20102.5q82%200%20169%20-19zM1203%201267q93%20-65%20164%20-155q-389%20-113%20-674.5%20-400.5t-396.5%20-676.5q-93%2072%20-155%20162q112%20386%20395%20671t667%20399zM470%20-67q115%20356%20379.5%20622t619.5%20384%20q40%20-92%2054%20-195q-292%20-120%20-516%20-345t-343%20-518q-103%2014%20-194%2052zM1536%20-125q-193%2050%20-367%20115q-135%20-84%20-290%20-107q109%20205%20274%20370.5t369%20275.5q-21%20-152%20-101%20-284q65%20-175%20115%20-370z"
            ],
            "\uf212": [
                2048.0,
                "M1893%201144l155%20-1272q-131%200%20-257%2057q-200%2091%20-393%2091q-226%200%20-374%20-148q-148%20148%20-374%20148q-193%200%20-393%20-91q-128%20-57%20-252%20-57h-5l155%201272q224%20127%20482%20127q233%200%20387%20-106q154%20106%20387%20106q258%200%20482%20-127zM1398%20157q129%200%20232%20-28.5t260%20-93.5l-124%201021%20q-171%2078%20-368%2078q-224%200%20-374%20-141q-150%20141%20-374%20141q-197%200%20-368%20-78l-124%20-1021q105%2043%20165.5%2065t148.5%2039.5t178%2017.5q202%200%20374%20-108q172%20108%20374%20108zM1438%20191l-55%20907q-211%20-4%20-359%20-155q-152%20155%20-374%20155q-176%200%20-336%20-66l-114%20-941q124%2051%20228.5%2076t221.5%2025%20q209%200%20374%20-102q172%20107%20374%20102z"
            ],
            "\uf213": [
                2048.0,
                "M1500%20165v733q0%2021%20-15%2036t-35%2015h-93q-20%200%20-35%20-15t-15%20-36v-733q0%20-20%2015%20-35t35%20-15h93q20%200%2035%2015t15%2035zM1216%20165v531q0%2020%20-15%2035t-35%2015h-101q-20%200%20-35%20-15t-15%20-35v-531q0%20-20%2015%20-35t35%20-15h101q20%200%2035%2015t15%2035zM924%20165v429q0%2020%20-15%2035t-35%2015h-101%20q-20%200%20-35%20-15t-15%20-35v-429q0%20-20%2015%20-35t35%20-15h101q20%200%2035%2015t15%2035zM632%20165v362q0%2020%20-15%2035t-35%2015h-101q-20%200%20-35%20-15t-15%20-35v-362q0%20-20%2015%20-35t35%20-15h101q20%200%2035%2015t15%2035zM2048%20311q0%20-166%20-118%20-284t-284%20-118h-1244q-166%200%20-284%20118t-118%20284%20q0%20116%2063%20214.5t168%20148.5q-10%2034%20-10%2073q0%20113%2080.5%20193.5t193.5%2080.5q102%200%20180%20-67q45%20183%20194%20300t338%20117q149%200%20275%20-73.5t199.5%20-199.5t73.5%20-275q0%20-66%20-14%20-122q135%20-33%20221%20-142.5t86%20-247.5z"
            ],
            "\uf214": [
                1536.0,
                "M0%201536h1536v-1392l-776%20-338l-760%20338v1392zM1436%20209v926h-1336v-926l661%20-294zM1436%201235v201h-1336v-201h1336zM181%20937v-115h-37v115h37zM181%20789v-115h-37v115h37zM181%20641v-115h-37v115h37zM181%20493v-115h-37v115h37zM181%20345v-115h-37v115h37zM207%20202l15%2034%20l105%20-47l-15%20-33zM343%20142l15%2034l105%20-46l-15%20-34zM478%2082l15%2034l105%20-46l-15%20-34zM614%2023l15%2033l104%20-46l-15%20-34zM797%2010l105%2046l15%20-33l-105%20-47zM932%2070l105%2046l15%20-34l-105%20-46zM1068%20130l105%2046l15%20-34l-105%20-46zM1203%20189l105%2047l15%20-34l-105%20-46zM259%201389v-36h-114%20v36h114zM421%201389v-36h-115v36h115zM583%201389v-36h-115v36h115zM744%201389v-36h-114v36h114zM906%201389v-36h-114v36h114zM1068%201389v-36h-115v36h115zM1230%201389v-36h-115v36h115zM1391%201389v-36h-114v36h114zM181%201049v-79h-37v115h115v-36h-78zM421%201085v-36h-115v36h115z%20M583%201085v-36h-115v36h115zM744%201085v-36h-114v36h114zM906%201085v-36h-114v36h114zM1068%201085v-36h-115v36h115zM1230%201085v-36h-115v36h115zM1355%20970v79h-78v36h115v-115h-37zM1355%20822v115h37v-115h-37zM1355%20674v115h37v-115h-37zM1355%20526v115h37v-115h-37zM1355%20378%20v115h37v-115h-37zM1355%20230v115h37v-115h-37zM760%20265q-129%200%20-221%2091.5t-92%20221.5q0%20129%2092%20221t221%2092q130%200%20221.5%20-92t91.5%20-221q0%20-130%20-91.5%20-221.5t-221.5%20-91.5zM595%20646q0%20-36%2019.5%20-56.5t49.5%20-25t64%20-7t64%20-2t49.5%20-9t19.5%20-30.5q0%20-49%20-112%20-49q-97%200%20-123%2051%20h-3l-31%20-63q67%20-42%20162%20-42q29%200%2056.5%205t55.5%2016t45.5%2033t17.5%2053q0%2046%20-27.5%2069.5t-67.5%2027t-79.5%203t-67%205t-27.5%2025.5q0%2021%2020.5%2033t40.5%2015t41%203q34%200%2070.5%20-11t51.5%20-34h3l30%2058q-3%201%20-21%208.5t-22.5%209t-19.5%207t-22%207t-20%204.5t-24%204t-23%201q-29%200%20-56.5%20-5t-54%20-16.5%20t-43%20-34t-16.5%20-53.5z"
            ],
            "\uf215": [
                2048.0,
                "M863%20504q0%20112%20-79.5%20191.5t-191.5%2079.5t-191%20-79.5t-79%20-191.5t79%20-191t191%20-79t191.5%2079t79.5%20191zM1726%20505q0%20112%20-79%20191t-191%2079t-191.5%20-79t-79.5%20-191q0%20-113%2079.5%20-192t191.5%20-79t191%2079.5t79%20191.5zM2048%201314v-1348q0%20-44%20-31.5%20-75.5t-76.5%20-31.5h-1832%20q-45%200%20-76.5%2031.5t-31.5%2075.5v1348q0%2044%2031.5%2075.5t76.5%2031.5h431q44%200%2076%20-31.5t32%20-75.5v-161h754v161q0%2044%2032%2075.5t76%2031.5h431q45%200%2076.5%20-31.5t31.5%20-75.5z"
            ],
            "\uf216": [
                2048.0,
                "M1430%20953zM1690%20749q148%200%20253%20-98.5t105%20-244.5q0%20-157%20-109%20-261.5t-267%20-104.5q-85%200%20-162%2027.5t-138%2073.5t-118%20106t-109%20126t-103.5%20132.5t-108.5%20126.5t-117%20106t-136%2073.5t-159%2027.5q-154%200%20-251.5%20-91.5t-97.5%20-244.5q0%20-157%20104%20-250t263%20-93q100%200%20208%2037.5%20t193%2098.5q5%204%2021%2018.5t30%2024t22%209.5q14%200%2024.5%20-10.5t10.5%20-24.5q0%20-24%20-60%20-77q-101%20-88%20-234.5%20-142t-260.5%20-54q-133%200%20-245.5%2058t-180%20165t-67.5%20241q0%20205%20141.5%20341t347.5%20136q120%200%20226.5%20-43.5t185.5%20-113t151.5%20-153t139%20-167.5t133.5%20-153.5t149.5%20-113%20t172.5%20-43.5q102%200%20168.5%2061.5t66.5%20162.5q0%2095%20-64.5%20159t-159.5%2064q-30%200%20-81.5%20-18.5t-68.5%20-18.5q-20%200%20-35.5%2015t-15.5%2035q0%2018%208.5%2057t8.5%2059q0%20159%20-107.5%20263t-266.5%20104q-58%200%20-111.5%20-18.5t-84%20-40.5t-55.5%20-40.5t-33%20-18.5q-15%200%20-25.5%2010.5t-10.5%2025.5%20q0%2019%2025%2046q59%2067%20147%20103.5t182%2036.5q191%200%20318%20-125.5t127%20-315.5q0%20-37%20-4%20-66q57%2015%20115%2015z"
            ],
            "\uf217": [
                1664.0,
                "M1216%20832q0%2026%20-19%2045t-45%2019h-128v128q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45v-128h-128q-26%200%20-45%20-19t-19%20-45t19%20-45t45%20-19h128v-128q0%20-26%2019%20-45t45%20-19t45%2019t19%2045v128h128q26%200%2045%2019t19%2045zM640%200q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5%20t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1536%200q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1664%201088v-512q0%20-24%20-16%20-42.5t-41%20-21.5l-1044%20-122q1%20-7%204.5%20-21.5t6%20-26.5t2.5%20-22q0%20-16%20-24%20-64h920%20q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19h-1024q-26%200%20-45%2019t-19%2045q0%2014%2011%2039.5t29.5%2059.5t20.5%2038l-177%20823h-204q-26%200%20-45%2019t-19%2045t19%2045t45%2019h256q16%200%2028.5%20-6.5t20%20-15.5t13%20-24.5t7.5%20-26.5t5.5%20-29.5t4.5%20-25.5h1201q26%200%2045%20-19t19%20-45z"
            ],
            "\uf218": [
                1664.0,
                "M1280%20832q0%2026%20-19%2045t-45%2019t-45%20-19l-147%20-146v293q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45v-293l-147%20146q-19%2019%20-45%2019t-45%20-19t-19%20-45t19%20-45l256%20-256q19%20-19%2045%20-19t45%2019l256%20256q19%2019%2019%2045zM640%200q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5%20t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1536%200q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1664%201088v-512q0%20-24%20-16%20-42.5t-41%20-21.5l-1044%20-122q1%20-7%204.5%20-21.5t6%20-26.5t2.5%20-22q0%20-16%20-24%20-64h920%20q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19h-1024q-26%200%20-45%2019t-19%2045q0%2014%2011%2039.5t29.5%2059.5t20.5%2038l-177%20823h-204q-26%200%20-45%2019t-19%2045t19%2045t45%2019h256q16%200%2028.5%20-6.5t20%20-15.5t13%20-24.5t7.5%20-26.5t5.5%20-29.5t4.5%20-25.5h1201q26%200%2045%20-19t19%20-45z"
            ],
            "\uf219": [
                2048.0,
                "M212%20768l623%20-665l-300%20665h-323zM1024%20-4l349%20772h-698zM538%20896l204%20384h-262l-288%20-384h346zM1213%20103l623%20665h-323zM683%20896h682l-204%20384h-274zM1510%20896h346l-288%20384h-262zM1651%201382l384%20-512q14%20-18%2013%20-41.5t-17%20-40.5l-960%20-1024q-18%20-20%20-47%20-20t-47%2020%20l-960%201024q-16%2017%20-17%2040.5t13%2041.5l384%20512q18%2026%2051%2026h1152q33%200%2051%20-26z"
            ],
            "\uf21a": [
                2048.0,
                "M1811%20-19q19%2019%2045%2019t45%20-19l128%20-128l-90%20-90l-83%2083l-83%20-83q-18%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83%20q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-128%20128l90%2090l83%20-83l83%2083q19%2019%2045%2019t45%20-19l83%20-83l83%2083q19%2019%2045%2019t45%20-19l83%20-83l83%2083q19%2019%2045%2019t45%20-19l83%20-83l83%2083q19%2019%2045%2019t45%20-19l83%20-83l83%2083q19%2019%2045%2019t45%20-19l83%20-83l83%2083%20q19%2019%2045%2019t45%20-19l83%20-83zM237%2019q-19%20-19%20-45%20-19t-45%2019l-128%20128l90%2090l83%20-82l83%2082q19%2019%2045%2019t45%20-19l83%20-82l64%2064v293l-210%20314q-17%2026%20-7%2056.5t40%2040.5l177%2058v299h128v128h256v128h256v-128h256v-128h128v-299l177%20-58q30%20-10%2040%20-40.5t-7%20-56.5l-210%20-314%20v-293l19%2018q19%2019%2045%2019t45%20-19l83%20-82l83%2082q19%2019%2045%2019t45%20-19l128%20-128l-90%20-90l-83%2083l-83%20-83q-18%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83%20q-19%20-19%20-45%20-19t-45%2019l-83%2083l-83%20-83q-19%20-19%20-45%20-19t-45%2019l-83%2083zM640%201152v-128l384%20128l384%20-128v128h-128v128h-512v-128h-128z"
            ],
            "\uf21b": [
                1536.0,
                "M576%200l96%20448l-96%20128l-128%2064zM832%200l128%20640l-128%20-64l-96%20-128zM992%201010q-2%204%20-4%206q-10%208%20-96%208q-70%200%20-167%20-19q-7%20-2%20-21%20-2t-21%202q-97%2019%20-167%2019q-86%200%20-96%20-8q-2%20-2%20-4%20-6q2%20-18%204%20-27q2%20-3%207.5%20-6.5t7.5%20-10.5q2%20-4%207.5%20-20.5t7%20-20.5t7.5%20-17t8.5%20-17t9%20-14%20t12%20-13.5t14%20-9.5t17.5%20-8t20.5%20-4t24.5%20-2q36%200%2059%2012.5t32.5%2030t14.5%2034.5t11.5%2029.5t17.5%2012.5h12q11%200%2017.5%20-12.5t11.5%20-29.5t14.5%20-34.5t32.5%20-30t59%20-12.5q13%200%2024.5%202t20.5%204t17.5%208t14%209.5t12%2013.5t9%2014t8.5%2017t7.5%2017t7%2020.5t7.5%2020.5q2%207%207.5%2010.5t7.5%206.5%20q2%209%204%2027zM1408%20131q0%20-121%20-73%20-190t-194%20-69h-874q-121%200%20-194%2069t-73%20190q0%2061%204.5%20118t19%20125.5t37.5%20123.5t63.5%20103.5t93.5%2074.5l-90%20220h214q-22%2064%20-22%20128q0%2012%202%2032q-194%2040%20-194%2096q0%2057%20210%2099q17%2062%2051.5%20134t70.5%20114q32%2037%2076%2037q30%200%2084%20-31t84%20-31t84%2031%20t84%2031q44%200%2076%20-37q36%20-42%2070.5%20-114t51.5%20-134q210%20-42%20210%20-99q0%20-56%20-194%20-96q7%20-81%20-20%20-160h214l-82%20-225q63%20-33%20107.5%20-96.5t65.5%20-143.5t29%20-151.5t8%20-148.5z"
            ],
            "\uf21c": [
                2304.0,
                "M2301%20500q12%20-103%20-22%20-198.5t-99%20-163.5t-158.5%20-106t-196.5%20-31q-161%2011%20-279.5%20125t-134.5%20274q-12%20111%2027.5%20210.5t118.5%20170.5l-71%20107q-96%20-80%20-151%20-194t-55%20-244q0%20-27%20-18.5%20-46.5t-45.5%20-19.5h-256h-69q-23%20-164%20-149%20-274t-294%20-110q-185%200%20-316.5%20131.5%20t-131.5%20316.5t131.5%20316.5t316.5%20131.5q76%200%20152%20-27l24%2045q-123%20110%20-304%20110h-64q-26%200%20-45%2019t-19%2045t19%2045t45%2019h128q78%200%20145%20-13.5t116.5%20-38.5t71.5%20-39.5t51%20-36.5h512h115l-85%20128h-222q-30%200%20-49%2022.5t-14%2052.5q4%2023%2023%2038t43%2015h253q33%200%2053%20-28l70%20-105%20l114%20114q19%2019%2046%2019h101q26%200%2045%20-19t19%20-45v-128q0%20-26%20-19%20-45t-45%20-19h-179l115%20-172q131%2063%20275%2036q143%20-26%20244%20-134.5t118%20-253.5zM448%20128q115%200%20203%2072.5t111%20183.5h-314q-35%200%20-55%2031q-18%2032%20-1%2063l147%20277q-47%2013%20-91%2013q-132%200%20-226%20-94t-94%20-226t94%20-226%20t226%20-94zM1856%20128q132%200%20226%2094t94%20226t-94%20226t-226%2094q-60%200%20-121%20-24l174%20-260q15%20-23%2010%20-49t-27%20-40q-15%20-11%20-36%20-11q-35%200%20-53%2029l-174%20260q-93%20-95%20-93%20-225q0%20-132%2094%20-226t226%20-94z"
            ],
            "\uf21d": [
                1536.0,
                "M1408%200q0%20-63%20-61.5%20-113.5t-164%20-81t-225%20-46t-253.5%20-15.5t-253.5%2015.5t-225%2046t-164%2081t-61.5%20113.5q0%2049%2033%2088.5t91%2066.5t118%2044.5t131%2029.5q26%205%2048%20-10.5t26%20-41.5q5%20-26%20-10.5%20-48t-41.5%20-26q-58%20-10%20-106%20-23.5t-76.5%20-25.5t-48.5%20-23.5t-27.5%20-19.5t-8.5%20-12%20q3%20-11%2027%20-26.5t73%20-33t114%20-32.5t160.5%20-25t201.5%20-10t201.5%2010t160.5%2025t114%2033t73%2033.5t27%2027.5q-1%204%20-8.5%2011t-27.5%2019t-48.5%2023.5t-76.5%2025t-106%2023.5q-26%204%20-41.5%2026t-10.5%2048q4%2026%2026%2041.5t48%2010.5q71%20-12%20131%20-29.5t118%20-44.5t91%20-66.5t33%20-88.5zM1024%20896v-384%20q0%20-26%20-19%20-45t-45%20-19h-64v-384q0%20-26%20-19%20-45t-45%20-19h-256q-26%200%20-45%2019t-19%2045v384h-64q-26%200%20-45%2019t-19%2045v384q0%2053%2037.5%2090.5t90.5%2037.5h384q53%200%2090.5%20-37.5t37.5%20-90.5zM928%201280q0%20-93%20-65.5%20-158.5t-158.5%20-65.5t-158.5%2065.5t-65.5%20158.5t65.5%20158.5t158.5%2065.5%20t158.5%20-65.5t65.5%20-158.5z"
            ],
            "\uf21e": [
                1792.0,
                "M1280%20512h305q-5%20-6%20-10%20-10.5t-9%20-7.5l-3%20-4l-623%20-600q-18%20-18%20-44%20-18t-44%2018l-624%20602q-5%202%20-21%2020h369q22%200%2039.5%2013.5t22.5%2034.5l70%20281l190%20-667q6%20-20%2023%20-33t39%20-13q21%200%2038%2013t23%2033l146%20485l56%20-112q18%20-35%2057%20-35zM1792%20940q0%20-145%20-103%20-300h-369l-111%20221%20q-8%2017%20-25.5%2027t-36.5%208q-45%20-5%20-56%20-46l-129%20-430l-196%20686q-6%2020%20-23.5%2033t-39.5%2013t-39%20-13.5t-22%20-34.5l-116%20-464h-423q-103%20155%20-103%20300q0%20220%20127%20344t351%20124q62%200%20126.5%20-21.5t120%20-58t95.5%20-68.5t76%20-68q36%2036%2076%2068t95.5%2068.5t120%2058t126.5%2021.5q224%200%20351%20-124%20t127%20-344z"
            ],
            "\uf221": [
                1280.0,
                "M1152%20960q0%20-221%20-147.5%20-384.5t-364.5%20-187.5v-260h224q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-224v-224q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v224h-224q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h224v260q-150%2016%20-271.5%20103t-186%20224t-52.5%20292%20q11%20134%2080.5%20249t182%20188t245.5%2088q170%2019%20319%20-54t236%20-212t87%20-306zM128%20960q0%20-185%20131.5%20-316.5t316.5%20-131.5t316.5%20131.5t131.5%20316.5t-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5z"
            ],
            "\uf222": [
                1536.0,
                "M1472%201408q26%200%2045%20-19t19%20-45v-416q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v262l-382%20-383q126%20-156%20126%20-359q0%20-117%20-45.5%20-223.5t-123%20-184t-184%20-123t-223.5%20-45.5t-223.5%2045.5t-184%20123t-123%20184t-45.5%20223.5t45.5%20223.5t123%20184t184%20123t223.5%2045.5%20q203%200%20359%20-126l382%20382h-261q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h416zM576%200q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf223": [
                1280.0,
                "M830%201220q145%20-72%20233.5%20-210.5t88.5%20-305.5q0%20-221%20-147.5%20-384.5t-364.5%20-187.5v-132h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-96v-96q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v96h-96q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96v132q-217%2024%20-364.5%20187.5%20t-147.5%20384.5q0%20167%2088.5%20305.5t233.5%20210.5q-165%2096%20-228%20273q-6%2016%203.5%2029.5t26.5%2013.5h69q21%200%2029%20-20q44%20-106%20140%20-171t214%20-65t214%2065t140%20171q8%2020%2037%2020h61q17%200%2026.5%20-13.5t3.5%20-29.5q-63%20-177%20-228%20-273zM576%20256q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5%20t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf224": [
                1536.0,
                "M1024%201504q0%2014%209%2023t23%209h288q26%200%2045%20-19t19%20-45v-288q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v134l-254%20-255q126%20-158%20126%20-359q0%20-221%20-147.5%20-384.5t-364.5%20-187.5v-132h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-96v-96q0%20-14%20-9%20-23t-23%20-9h-64%20q-14%200%20-23%209t-9%2023v96h-96q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96v132q-149%2016%20-270.5%20103t-186.5%20223.5t-53%20291.5q16%20204%20160%20353.5t347%20172.5q118%2014%20228%20-19t198%20-103l255%20254h-134q-14%200%20-23%209t-9%2023v64zM576%20256q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5%20t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf225": [
                1792.0,
                "M1280%201504q0%2014%209%2023t23%209h288q26%200%2045%20-19t19%20-45v-288q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v134l-254%20-255q126%20-158%20126%20-359q0%20-221%20-147.5%20-384.5t-364.5%20-187.5v-132h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-96v-96q0%20-14%20-9%20-23t-23%20-9h-64%20q-14%200%20-23%209t-9%2023v96h-96q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96v132q-217%2024%20-364.5%20187.5t-147.5%20384.5q0%20201%20126%20359l-52%2053l-101%20-111q-9%20-10%20-22%20-10.5t-23%207.5l-48%2044q-10%208%20-10.5%2021.5t8.5%2023.5l105%20115l-111%20112v-134q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209%20t-9%2023v288q0%2026%2019%2045t45%2019h288q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-133l106%20-107l86%2094q9%2010%2022%2010.5t23%20-7.5l48%20-44q10%20-8%2010.5%20-21.5t-8.5%20-23.5l-90%20-99l57%20-56q158%20126%20359%20126t359%20-126l255%20254h-134q-14%200%20-23%209t-9%2023v64zM832%20256q185%200%20316.5%20131.5%20t131.5%20316.5t-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf226": [
                1792.0,
                "M1790%201007q12%20-155%20-52.5%20-292t-186%20-224t-271.5%20-103v-260h224q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-224v-224q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v224h-512v-224q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v224h-224q-14%200%20-23%209t-9%2023v64q0%2014%209%2023%20t23%209h224v260q-150%2016%20-271.5%20103t-186%20224t-52.5%20292q17%20206%20164.5%20356.5t352.5%20169.5q206%2021%20377%20-94q171%20115%20377%2094q205%20-19%20352.5%20-169.5t164.5%20-356.5zM896%20647q128%20131%20128%20313t-128%20313q-128%20-131%20-128%20-313t128%20-313zM576%20512q115%200%20218%2057q-154%20165%20-154%20391%20q0%20224%20154%20391q-103%2057%20-218%2057q-185%200%20-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5zM1152%20128v260q-137%2015%20-256%2094q-119%20-79%20-256%20-94v-260h512zM1216%20512q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5t-316.5%20131.5q-115%200%20-218%20-57q154%20-167%20154%20-391%20q0%20-226%20-154%20-391q103%20-57%20218%20-57z"
            ],
            "\uf227": [
                1920.0,
                "M1536%201120q0%2014%209%2023t23%209h288q26%200%2045%20-19t19%20-45v-288q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v134l-254%20-255q76%20-95%20107.5%20-214t9.5%20-247q-31%20-182%20-166%20-312t-318%20-156q-210%20-29%20-384.5%2080t-241.5%20300q-117%206%20-221%2057.5t-177.5%20133t-113.5%20192.5t-32%20230%20q9%20135%2078%20252t182%20191.5t248%2089.5q118%2014%20227.5%20-19t198.5%20-103l255%20254h-134q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h288q26%200%2045%20-19t19%20-45v-288q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v134l-254%20-255q59%20-74%2093%20-169q182%20-9%20328%20-124l255%20254h-134q-14%200%20-23%209%20t-9%2023v64zM1024%20704q0%2020%20-4%2058q-162%20-25%20-271%20-150t-109%20-292q0%20-20%204%20-58q162%2025%20271%20150t109%20292zM128%20704q0%20-168%20111%20-294t276%20-149q-3%2029%20-3%2059q0%20210%20135%20369.5t338%20196.5q-53%20120%20-163.5%20193t-245.5%2073q-185%200%20-316.5%20-131.5t-131.5%20-316.5zM1088%20-128%20q185%200%20316.5%20131.5t131.5%20316.5q0%20168%20-111%20294t-276%20149q3%20-28%203%20-59q0%20-210%20-135%20-369.5t-338%20-196.5q53%20-120%20163.5%20-193t245.5%20-73z"
            ],
            "\uf228": [
                2048.0,
                "M1664%201504q0%2014%209%2023t23%209h288q26%200%2045%20-19t19%20-45v-288q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v134l-254%20-255q76%20-95%20107.5%20-214t9.5%20-247q-32%20-180%20-164.5%20-310t-313.5%20-157q-223%20-34%20-409%2090q-117%20-78%20-256%20-93v-132h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23%20t-23%20-9h-96v-96q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v96h-96q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96v132q-155%2017%20-279.5%20109.5t-187%20237.5t-39.5%20307q25%20187%20159.5%20322.5t320.5%20164.5q224%2034%20410%20-90q146%2097%20320%2097q201%200%20359%20-126l255%20254h-134q-14%200%20-23%209%20t-9%2023v64zM896%20391q128%20131%20128%20313t-128%20313q-128%20-131%20-128%20-313t128%20-313zM128%20704q0%20-185%20131.5%20-316.5t316.5%20-131.5q117%200%20218%2057q-154%20167%20-154%20391t154%20391q-101%2057%20-218%2057q-185%200%20-316.5%20-131.5t-131.5%20-316.5zM1216%20256q185%200%20316.5%20131.5t131.5%20316.5%20t-131.5%20316.5t-316.5%20131.5q-117%200%20-218%20-57q154%20-167%20154%20-391t-154%20-391q101%20-57%20218%20-57z"
            ],
            "\uf229": [
                1536.0,
                "M1472%201408q26%200%2045%20-19t19%20-45v-416q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v262l-213%20-214l140%20-140q9%20-10%209%20-23t-9%20-22l-46%20-46q-9%20-9%20-22%20-9t-23%209l-140%20141l-78%20-79q126%20-156%20126%20-359q0%20-117%20-45.5%20-223.5t-123%20-184t-184%20-123t-223.5%20-45.5t-223.5%2045.5%20t-184%20123t-123%20184t-45.5%20223.5t45.5%20223.5t123%20184t184%20123t223.5%2045.5q203%200%20359%20-126l78%2078l-172%20172q-9%2010%20-9%2023t9%2022l46%2046q9%209%2022%209t23%20-9l172%20-172l213%20213h-261q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h416zM576%200q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5%20t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf22a": [
                1280.0,
                "M640%20892q217%20-24%20364.5%20-187.5t147.5%20-384.5q0%20-167%20-87%20-306t-236%20-212t-319%20-54q-133%2015%20-245.5%2088t-182%20188t-80.5%20249q-12%20155%2052.5%20292t186%20224t271.5%20103v132h-160q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h160v165l-92%20-92q-10%20-9%20-23%20-9t-22%209l-46%2046q-9%209%20-9%2022%20t9%2023l202%20201q19%2019%2045%2019t45%20-19l202%20-201q9%20-10%209%20-23t-9%20-22l-46%20-46q-9%20-9%20-22%20-9t-23%209l-92%2092v-165h160q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-160v-132zM576%20-128q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5%20t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf22b": [
                2048.0,
                "M1901%20621q19%20-19%2019%20-45t-19%20-45l-294%20-294q-9%20-10%20-22.5%20-10t-22.5%2010l-45%2045q-10%209%20-10%2022.5t10%2022.5l185%20185h-294v-224q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v224h-132q-24%20-217%20-187.5%20-364.5t-384.5%20-147.5q-167%200%20-306%2087t-212%20236t-54%20319q15%20133%2088%20245.5%20t188%20182t249%2080.5q155%2012%20292%20-52.5t224%20-186t103%20-271.5h132v224q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23v-224h294l-185%20185q-10%209%20-10%2022.5t10%2022.5l45%2045q9%2010%2022.5%2010t22.5%20-10zM576%20128q185%200%20316.5%20131.5t131.5%20316.5t-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5%20t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf22c": [
                1280.0,
                "M1152%20960q0%20-221%20-147.5%20-384.5t-364.5%20-187.5v-612q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v612q-217%2024%20-364.5%20187.5t-147.5%20384.5q0%20117%2045.5%20223.5t123%20184t184%20123t223.5%2045.5t223.5%20-45.5t184%20-123t123%20-184t45.5%20-223.5zM576%20512q185%200%20316.5%20131.5%20t131.5%20316.5t-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5z"
            ],
            "\uf22d": [
                1280.0,
                "M1024%20576q0%20185%20-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5t131.5%20-316.5t316.5%20-131.5t316.5%20131.5t131.5%20316.5zM1152%20576q0%20-117%20-45.5%20-223.5t-123%20-184t-184%20-123t-223.5%20-45.5t-223.5%2045.5t-184%20123t-123%20184t-45.5%20223.5t45.5%20223.5t123%20184t184%20123%20t223.5%2045.5t223.5%20-45.5t184%20-123t123%20-184t45.5%20-223.5z"
            ],
            "\uf230": [
                1536.0,
                "M1451%201408q35%200%2060%20-25t25%20-60v-1366q0%20-35%20-25%20-60t-60%20-25h-391v595h199l30%20232h-229v148q0%2056%2023.5%2084t91.5%2028l122%201v207q-63%209%20-178%209q-136%200%20-217.5%20-80t-81.5%20-226v-171h-200v-232h200v-595h-735q-35%200%20-60%2025t-25%2060v1366q0%2035%2025%2060t60%2025h1366z"
            ],
            "\uf231": [
                1280.0,
                "M0%20939q0%20108%2037.5%20203.5t103.5%20166.5t152%20123t185%2078t202%2026q158%200%20294%20-66.5t221%20-193.5t85%20-287q0%20-96%20-19%20-188t-60%20-177t-100%20-149.5t-145%20-103t-189%20-38.5q-68%200%20-135%2032t-96%2088q-10%20-39%20-28%20-112.5t-23.5%20-95t-20.5%20-71t-26%20-71t-32%20-62.5t-46%20-77.5t-62%20-86.5%20l-14%20-5l-9%2010q-15%20157%20-15%20188q0%2092%2021.5%20206.5t66.5%20287.5t52%20203q-32%2065%20-32%20169q0%2083%2052%20156t132%2073q61%200%2095%20-40.5t34%20-102.5q0%20-66%20-44%20-191t-44%20-187q0%20-63%2045%20-104.5t109%20-41.5q55%200%20102%2025t78.5%2068t56%2095t38%20110.5t20%20111t6.5%2099.5q0%20173%20-109.5%20269.5t-285.5%2096.5%20q-200%200%20-334%20-129.5t-134%20-328.5q0%20-44%2012.5%20-85t27%20-65t27%20-45.5t12.5%20-30.5q0%20-28%20-15%20-73t-37%20-45q-2%200%20-17%203q-51%2015%20-90.5%2056t-61%2094.5t-32.5%20108t-11%20106.5z"
            ],
            "\uf232": [
                1536.0,
                "M985%20562q13%200%2097.5%20-44t89.5%20-53q2%20-5%202%20-15q0%20-33%20-17%20-76q-16%20-39%20-71%20-65.5t-102%20-26.5q-57%200%20-190%2062q-98%2045%20-170%20118t-148%20185q-72%20107%20-71%20194v8q3%2091%2074%20158q24%2022%2052%2022q6%200%2018%20-1.5t19%20-1.5q19%200%2026.5%20-6.5t15.5%20-27.5q8%20-20%2033%20-88t25%20-75q0%20-21%20-34.5%20-57.5%20t-34.5%20-46.5q0%20-7%205%20-15q34%20-73%20102%20-137q56%20-53%20151%20-101q12%20-7%2022%20-7q15%200%2054%2048.5t52%2048.5zM782%2032q127%200%20243.5%2050t200.5%20134t134%20200.5t50%20243.5t-50%20243.5t-134%20200.5t-200.5%20134t-243.5%2050t-243.5%20-50t-200.5%20-134t-134%20-200.5t-50%20-243.5q0%20-203%20120%20-368l-79%20-233%20l242%2077q158%20-104%20345%20-104zM782%201414q153%200%20292.5%20-60t240.5%20-161t161%20-240.5t60%20-292.5t-60%20-292.5t-161%20-240.5t-240.5%20-161t-292.5%20-60q-195%200%20-365%2094l-417%20-134l136%20405q-108%20178%20-108%20389q0%20153%2060%20292.5t161%20240.5t240.5%20161t292.5%2060z"
            ],
            "\uf233": [
                1792.0,
                "M128%20128h1024v128h-1024v-128zM128%20640h1024v128h-1024v-128zM1696%20192q0%2040%20-28%2068t-68%2028t-68%20-28t-28%20-68t28%20-68t68%20-28t68%2028t28%2068zM128%201152h1024v128h-1024v-128zM1696%20704q0%2040%20-28%2068t-68%2028t-68%20-28t-28%20-68t28%20-68t68%20-28t68%2028t28%2068zM1696%201216%20q0%2040%20-28%2068t-68%2028t-68%20-28t-28%20-68t28%20-68t68%20-28t68%2028t28%2068zM1792%20384v-384h-1792v384h1792zM1792%20896v-384h-1792v384h1792zM1792%201408v-384h-1792v384h1792z"
            ],
            "\uf234": [
                2048.0,
                "M704%20640q-159%200%20-271.5%20112.5t-112.5%20271.5t112.5%20271.5t271.5%20112.5t271.5%20-112.5t112.5%20-271.5t-112.5%20-271.5t-271.5%20-112.5zM1664%20512h352q13%200%2022.5%20-9.5t9.5%20-22.5v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-352v-352q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-192q-13%200%20-22.5%209.5%20t-9.5%2022.5v352h-352q-13%200%20-22.5%209.5t-9.5%2022.5v192q0%2013%209.5%2022.5t22.5%209.5h352v352q0%2013%209.5%2022.5t22.5%209.5h192q13%200%2022.5%20-9.5t9.5%20-22.5v-352zM928%20288q0%20-52%2038%20-90t90%20-38h256v-238q-68%20-50%20-171%20-50h-874q-121%200%20-194%2069t-73%20190q0%2053%203.5%20103.5t14%20109t26.5%20108.5%20t43%2097.5t62%2081t85.5%2053.5t111.5%2020q19%200%2039%20-17q79%20-61%20154.5%20-91.5t164.5%20-30.5t164.5%2030.5t154.5%2091.5q20%2017%2039%2017q132%200%20217%20-96h-223q-52%200%20-90%20-38t-38%20-90v-192z"
            ],
            "\uf235": [
                2048.0,
                "M704%20640q-159%200%20-271.5%20112.5t-112.5%20271.5t112.5%20271.5t271.5%20112.5t271.5%20-112.5t112.5%20-271.5t-112.5%20-271.5t-271.5%20-112.5zM1781%20320l249%20-249q9%20-9%209%20-23q0%20-13%20-9%20-22l-136%20-136q-9%20-9%20-22%20-9q-14%200%20-23%209l-249%20249l-249%20-249q-9%20-9%20-23%20-9q-13%200%20-22%209l-136%20136%20q-9%209%20-9%2022q0%2014%209%2023l249%20249l-249%20249q-9%209%20-9%2023q0%2013%209%2022l136%20136q9%209%2022%209q14%200%2023%20-9l249%20-249l249%20249q9%209%2023%209q13%200%2022%20-9l136%20-136q9%20-9%209%20-22q0%20-14%20-9%20-23zM1283%20320l-181%20-181q-37%20-37%20-37%20-91q0%20-53%2037%20-90l83%20-83q-21%20-3%20-44%20-3h-874q-121%200%20-194%2069%20t-73%20190q0%2053%203.5%20103.5t14%20109t26.5%20108.5t43%2097.5t62%2081t85.5%2053.5t111.5%2020q19%200%2039%20-17q154%20-122%20319%20-122t319%20122q20%2017%2039%2017q28%200%2057%20-6q-28%20-27%20-41%20-50t-13%20-56q0%20-54%2037%20-91z"
            ],
            "\uf236": [
                2048.0,
                "M256%20512h1728q26%200%2045%20-19t19%20-45v-448h-256v256h-1536v-256h-256v1216q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-704zM832%20832q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181t75%20-181t181%20-75t181%2075t75%20181zM2048%20576v64q0%20159%20-112.5%20271.5t-271.5%20112.5h-704%20q-26%200%20-45%20-19t-19%20-45v-384h1152z"
            ],
            "\uf237": [
                1536.0,
                "M1536%201536l-192%20-448h192v-192h-274l-55%20-128h329v-192h-411l-357%20-832l-357%20832h-411v192h329l-55%20128h-274v192h192l-192%20448h256l323%20-768h378l323%20768h256zM768%20320l108%20256h-216z"
            ],
            "\uf238": [
                1536.0,
                "M1088%201536q185%200%20316.5%20-93.5t131.5%20-226.5v-896q0%20-130%20-125.5%20-222t-305.5%20-97l213%20-202q16%20-15%208%20-35t-30%20-20h-1056q-22%200%20-30%2020t8%2035l213%20202q-180%205%20-305.5%2097t-125.5%20222v896q0%20133%20131.5%20226.5t316.5%2093.5h640zM768%20192q80%200%20136%2056t56%20136t-56%20136t-136%2056%20t-136%20-56t-56%20-136t56%20-136t136%20-56zM1344%20768v512h-1152v-512h1152z"
            ],
            "\uf239": [
                1536.0,
                "M1088%201536q185%200%20316.5%20-93.5t131.5%20-226.5v-896q0%20-130%20-125.5%20-222t-305.5%20-97l213%20-202q16%20-15%208%20-35t-30%20-20h-1056q-22%200%20-30%2020t8%2035l213%20202q-180%205%20-305.5%2097t-125.5%20222v896q0%20133%20131.5%20226.5t316.5%2093.5h640zM288%20224q66%200%20113%2047t47%20113t-47%20113t-113%2047%20t-113%20-47t-47%20-113t47%20-113t113%20-47zM704%20768v512h-544v-512h544zM1248%20224q66%200%20113%2047t47%20113t-47%20113t-113%2047t-113%20-47t-47%20-113t47%20-113t113%20-47zM1408%20768v512h-576v-512h576z"
            ],
            "\uf23a": [
                1792.0,
                "M597%201115v-1173q0%20-25%20-12.5%20-42.5t-36.5%20-17.5q-17%200%20-33%208l-465%20233q-21%2010%20-35.5%2033.5t-14.5%2046.5v1140q0%2020%2010%2034t29%2014q14%200%2044%20-15l511%20-256q3%20-3%203%20-5zM661%201014l534%20-866l-534%20266v600zM1792%20996v-1054q0%20-25%20-14%20-40.5t-38%20-15.5t-47%2013l-441%20220zM1789%201116%20q0%20-3%20-256.5%20-419.5t-300.5%20-487.5l-390%20634l324%20527q17%2028%2052%2028q14%200%2026%20-6l541%20-270q4%20-2%204%20-6z"
            ],
            "\uf23b": [
                1536.0,
                "M809%20532l266%20499h-112l-157%20-312q-24%20-48%20-44%20-92l-42%2092l-155%20312h-120l263%20-493v-324h101v318zM1536%201408v-1536h-1536v1536h1536z"
            ],
            "\uf23c": [
                2296.0,
                "M478%20-139q-8%20-16%20-27%20-34.5t-37%20-25.5q-25%20-9%20-51.5%203.5t-28.5%2031.5q-1%2022%2040%2055t68%2038q23%204%2034%20-21.5t2%20-46.5zM1819%20-139q7%20-16%2026%20-34.5t38%20-25.5q25%20-9%2051.5%203.5t27.5%2031.5q2%2022%20-39.5%2055t-68.5%2038q-22%204%20-33%20-21.5t-2%20-46.5zM1867%20-30q13%20-27%2056.5%20-59.5t77.5%20-41.5%20q45%20-13%2082%204.5t37%2050.5q0%2046%20-67.5%20100.5t-115.5%2059.5q-40%205%20-63.5%20-37.5t-6.5%20-76.5zM428%20-30q-13%20-27%20-56%20-59.5t-77%20-41.5q-45%20-13%20-82%204.5t-37%2050.5q0%2046%2067.5%20100.5t115.5%2059.5q40%205%2063%20-37.5t6%20-76.5zM1158%201094h1q-41%200%20-76%20-15q27%20-8%2044%20-30.5t17%20-49.5%20q0%20-35%20-27%20-60t-65%20-25q-52%200%20-80%2043q-5%20-23%20-5%20-42q0%20-74%2056%20-126.5t135%20-52.5q80%200%20136%2052.5t56%20126.5t-56%20126.5t-136%2052.5zM1462%201312q-99%20109%20-220.5%20131.5t-245.5%20-44.5q27%2060%2082.5%2096.5t118%2039.5t121.5%20-17t99.5%20-74.5t44.5%20-131.5zM2212%2073q8%20-11%20-11%20-42%20q7%20-23%207%20-40q1%20-56%20-44.5%20-112.5t-109.5%20-91.5t-118%20-37q-48%20-2%20-92%2021.5t-66%2065.5q-687%20-25%20-1259%200q-23%20-41%20-66.5%20-65t-92.5%20-22q-86%203%20-179.5%2080.5t-92.5%20160.5q2%2022%207%2040q-19%2031%20-11%2042q6%2010%2031%201q14%2022%2041%2051q-7%2029%202%2038q11%2010%2039%20-4q29%2020%2059%2034q0%2029%2013%2037%20q23%2012%2051%20-16q35%205%2061%20-2q18%20-4%2038%20-19v73q-11%200%20-18%202q-53%2010%20-97%2044.5t-55%2087.5q-9%2038%200%2081q15%2062%2093%2095q2%2017%2019%2035.5t36%2023.5t33%20-7.5t19%20-30.5h13q46%20-5%2060%20-23q3%20-3%205%20-7q10%201%2030.5%203.5t30.5%203.5q-15%2011%20-30%2017q-23%2040%20-91%2043q0%206%201%2010q-62%202%20-118.5%2018.5t-84.5%2047.5%20q-32%2036%20-42.5%2092t-2.5%20112q16%20126%2090%20179q23%2016%2052%204.5t32%20-40.5q0%20-1%201.5%20-14t2.5%20-21t3%20-20t5.5%20-19t8.5%20-10q27%20-14%2076%20-12q48%2046%2098%2074q-40%204%20-162%20-14l47%2046q61%2058%20163%20111q145%2073%20282%2086q-20%208%20-41%2015.5t-47%2014t-42.5%2010.5t-47.5%2011t-43%2010q595%20126%20904%20-139%20q98%20-84%20158%20-222q85%20-10%20121%209h1q5%203%208.5%2010t5.5%2019t3%2019.5t3%2021.5l1%2014q3%2028%2032%2040t52%20-5q73%20-52%2091%20-178q7%20-57%20-3.5%20-113t-42.5%20-91q-28%20-32%20-83.5%20-48.5t-115.5%20-18.5v-10q-71%20-2%20-95%20-43q-14%20-5%20-31%20-17q11%20-1%2032%20-3.5t30%20-3.5q1%205%205%208q16%2018%2060%2023h13q5%2018%2019%2030t33%208%20t36%20-23t19%20-36q79%20-32%2093%20-95q9%20-40%201%20-81q-12%20-53%20-56%20-88t-97%20-44q-10%20-2%20-17%20-2q0%20-49%20-1%20-73q20%2015%2038%2019q26%207%2061%202q28%2028%2051%2016q14%20-9%2014%20-37q33%20-16%2059%20-34q27%2013%2038%204q10%20-10%202%20-38q28%20-30%2041%20-51q23%208%2031%20-1zM1937%201025q0%20-29%20-9%20-54q82%20-32%20112%20-132%20q4%2037%20-9.5%2098.5t-41.5%2090.5q-20%2019%20-36%2017t-16%20-20zM1859%20925q35%20-42%2047.5%20-108.5t-0.5%20-124.5q67%2013%2097%2045q13%2014%2018%2028q-3%2064%20-31%20114.5t-79%2066.5q-15%20-15%20-52%20-21zM1822%20921q-30%200%20-44%201q42%20-115%2053%20-239q21%200%2043%203q16%2068%201%20135t-53%20100zM258%20839q30%20100%20112%20132%20q-9%2025%20-9%2054q0%2018%20-16.5%2020t-35.5%20-17q-28%20-29%20-41.5%20-90.5t-9.5%20-98.5zM294%20737q29%20-31%2097%20-45q-13%2058%20-0.5%20124.5t47.5%20108.5v0q-37%206%20-52%2021q-51%20-16%20-78.5%20-66t-31.5%20-115q9%20-17%2018%20-28zM471%20683q14%20124%2073%20235q-19%20-4%20-55%20-18l-45%20-19v1q-46%20-89%20-20%20-196q25%20-3%2047%20-3z%20M1434%20644q8%20-38%2016.5%20-108.5t11.5%20-89.5q3%20-18%209.5%20-21.5t23.5%204.5q40%2020%2062%2085.5t23%20125.5q-24%202%20-146%204zM1152%201285q-116%200%20-199%20-82.5t-83%20-198.5q0%20-117%2083%20-199.5t199%20-82.5t199%2082.5t83%20199.5q0%20116%20-83%20198.5t-199%2082.5zM1380%20646q-105%202%20-211%200v1q-1%20-27%202.5%20-86%20t13.5%20-66q29%20-14%2093.5%20-14.5t95.5%2010.5q9%203%2011%2039t-0.5%2069.5t-4.5%2046.5zM1112%20447q8%204%209.5%2048t-0.5%2088t-4%2063v1q-212%20-3%20-214%20-3q-4%20-20%20-7%20-62t0%20-83t14%20-46q34%20-15%20101%20-16t101%2010zM718%20636q-16%20-59%204.5%20-118.5t77.5%20-84.5q15%20-8%2024%20-5t12%2021q3%2016%208%2090t10%20103%20q-69%20-2%20-136%20-6zM591%20510q3%20-23%20-34%20-36q132%20-141%20271.5%20-240t305.5%20-154q172%2049%20310.5%20146t293.5%20250q-33%2013%20-30%2034q0%202%200.5%203.5t1.5%203t1%202.5v1v-1q-17%202%20-50%205.5t-48%204.5q-26%20-90%20-82%20-132q-51%20-38%20-82%201q-5%206%20-9%2014q-7%2013%20-17%2062q-2%20-5%20-5%20-9t-7.5%20-7t-8%20-5.5t-9.5%20-4%20l-10%20-2.5t-12%20-2l-12%20-1.5t-13.5%20-1t-13.5%20-0.5q-106%20-9%20-163%2011q-4%20-17%20-10%20-26.5t-21%20-15t-23%20-7t-36%20-3.5q-6%20-1%20-9%20-1q-179%20-17%20-203%2040q-2%20-63%20-56%20-54q-47%208%20-91%2054q-12%2013%20-20%2026q-17%2029%20-26%2065q-58%20-6%20-87%20-10q1%20-2%204%20-10zM507%20-118q3%2014%203%2030q-17%2071%20-51%20130%20t-73%2070q-41%2012%20-101.5%20-14.5t-104.5%20-80t-39%20-107.5q35%20-53%20100%20-93t119%20-42q51%20-2%2094%2028t53%2079zM510%2053q23%20-63%2027%20-119q195%20113%20392%20174q-98%2052%20-180.5%20120t-179.5%20165q-6%20-4%20-29%20-13q0%20-1%20-1%20-4t-1%20-5q31%20-18%2022%20-37q-12%20-23%20-56%20-34q-10%20-13%20-29%20-24h-1q-2%20-83%201%20-150%20q19%20-34%2035%20-73zM579%20-113q532%20-21%201145%200q-254%20147%20-428%20196q-76%20-35%20-156%20-57q-8%20-3%20-16%200q-65%2021%20-129%2049q-208%20-60%20-416%20-188h-1v-1q1%200%201%201zM1763%20-67q4%2054%2028%20120q14%2038%2033%2071l-1%20-1q3%2077%203%20153q-15%208%20-30%2025q-42%209%20-56%2033q-9%2020%2022%2038q-2%204%20-2%209q-16%204%20-28%2012%20q-204%20-190%20-383%20-284q198%20-59%20414%20-176zM2155%20-90q5%2054%20-39%20107.5t-104%2080t-102%2014.5q-38%20-11%20-72.5%20-70.5t-51.5%20-129.5q0%20-16%203%20-30q10%20-49%2053%20-79t94%20-28q54%202%20119%2042t100%2093z"
            ],
            "\uf23d": [
                2304.0,
                "M1524%20-25q0%20-68%20-48%20-116t-116%20-48t-116.5%2048t-48.5%20116t48.5%20116.5t116.5%2048.5t116%20-48.5t48%20-116.5zM775%20-25q0%20-68%20-48.5%20-116t-116.5%20-48t-116%2048t-48%20116t48%20116.5t116%2048.5t116.5%20-48.5t48.5%20-116.5zM0%201469q57%20-60%20110.5%20-104.5t121%20-82t136%20-63t166%20-45.5%20t200%20-31.5t250%20-18.5t304%20-9.5t372.5%20-2.5q139%200%20244.5%20-5t181%20-16.5t124%20-27.5t71%20-39.5t24%20-51.5t-19.5%20-64t-56.5%20-76.5t-89.5%20-91t-116%20-104.5t-139%20-119q-185%20-157%20-286%20-247q29%2051%2076.5%20109t94%20105.5t94.5%2098.5t83%2091.5t54%2080.5t13%2070t-45.5%2055.5t-116.5%2041t-204%2023.5%20t-304%205q-168%20-2%20-314%206t-256%2023t-204.5%2041t-159.5%2051.5t-122.5%2062.5t-91.5%2066.5t-68%2071.5t-50.5%2069.5t-40%2068t-36.5%2059.5z"
            ],
            "\uf23e": [
                1792.0,
                "M896%201472q-169%200%20-323%20-66t-265.5%20-177.5t-177.5%20-265.5t-66%20-323t66%20-323t177.5%20-265.5t265.5%20-177.5t323%20-66t323%2066t265.5%20177.5t177.5%20265.5t66%20323t-66%20323t-177.5%20265.5t-265.5%20177.5t-323%2066zM896%201536q182%200%20348%20-71t286%20-191t191%20-286t71%20-348t-71%20-348%20t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071zM496%20704q16%200%2016%20-16v-480q0%20-16%20-16%20-16h-32q-16%200%20-16%2016v480q0%2016%2016%2016h32zM896%20640q53%200%2090.5%20-37.5t37.5%20-90.5q0%20-35%20-17.5%20-64t-46.5%20-46v-114q0%20-14%20-9%20-23%20t-23%20-9h-64q-14%200%20-23%209t-9%2023v114q-29%2017%20-46.5%2046t-17.5%2064q0%2053%2037.5%2090.5t90.5%2037.5zM896%201408q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5t-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103zM544%20928v-96%20q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023v96q0%2093%2065.5%20158.5t158.5%2065.5t158.5%20-65.5t65.5%20-158.5v-96q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023v96q0%20146%20-103%20249t-249%20103t-249%20-103t-103%20-249zM1408%20192v512q0%2026%20-19%2045t-45%2019h-896q-26%200%20-45%20-19t-19%20-45v-512%20q0%20-26%2019%20-45t45%20-19h896q26%200%2045%2019t19%2045z"
            ],
            "\uf240": [
                2304.0,
                "M1920%201024v-768h-1664v768h1664zM2048%20448h128v384h-128v288q0%2014%20-9%2023t-23%209h-1856q-14%200%20-23%20-9t-9%20-23v-960q0%20-14%209%20-23t23%20-9h1856q14%200%2023%209t9%2023v288zM2304%20832v-384q0%20-53%20-37.5%20-90.5t-90.5%20-37.5v-160q0%20-66%20-47%20-113t-113%20-47h-1856q-66%200%20-113%2047t-47%20113%20v960q0%2066%2047%20113t113%2047h1856q66%200%20113%20-47t47%20-113v-160q53%200%2090.5%20-37.5t37.5%20-90.5z"
            ],
            "\uf241": [
                2304.0,
                "M256%20256v768h1280v-768h-1280zM2176%20960q53%200%2090.5%20-37.5t37.5%20-90.5v-384q0%20-53%20-37.5%20-90.5t-90.5%20-37.5v-160q0%20-66%20-47%20-113t-113%20-47h-1856q-66%200%20-113%2047t-47%20113v960q0%2066%2047%20113t113%2047h1856q66%200%20113%20-47t47%20-113v-160zM2176%20448v384h-128v288q0%2014%20-9%2023t-23%209%20h-1856q-14%200%20-23%20-9t-9%20-23v-960q0%20-14%209%20-23t23%20-9h1856q14%200%2023%209t9%2023v288h128z"
            ],
            "\uf242": [
                2304.0,
                "M256%20256v768h896v-768h-896zM2176%20960q53%200%2090.5%20-37.5t37.5%20-90.5v-384q0%20-53%20-37.5%20-90.5t-90.5%20-37.5v-160q0%20-66%20-47%20-113t-113%20-47h-1856q-66%200%20-113%2047t-47%20113v960q0%2066%2047%20113t113%2047h1856q66%200%20113%20-47t47%20-113v-160zM2176%20448v384h-128v288q0%2014%20-9%2023t-23%209%20h-1856q-14%200%20-23%20-9t-9%20-23v-960q0%20-14%209%20-23t23%20-9h1856q14%200%2023%209t9%2023v288h128z"
            ],
            "\uf243": [
                2304.0,
                "M256%20256v768h512v-768h-512zM2176%20960q53%200%2090.5%20-37.5t37.5%20-90.5v-384q0%20-53%20-37.5%20-90.5t-90.5%20-37.5v-160q0%20-66%20-47%20-113t-113%20-47h-1856q-66%200%20-113%2047t-47%20113v960q0%2066%2047%20113t113%2047h1856q66%200%20113%20-47t47%20-113v-160zM2176%20448v384h-128v288q0%2014%20-9%2023t-23%209%20h-1856q-14%200%20-23%20-9t-9%20-23v-960q0%20-14%209%20-23t23%20-9h1856q14%200%2023%209t9%2023v288h128z"
            ],
            "\uf244": [
                2304.0,
                "M2176%20960q53%200%2090.5%20-37.5t37.5%20-90.5v-384q0%20-53%20-37.5%20-90.5t-90.5%20-37.5v-160q0%20-66%20-47%20-113t-113%20-47h-1856q-66%200%20-113%2047t-47%20113v960q0%2066%2047%20113t113%2047h1856q66%200%20113%20-47t47%20-113v-160zM2176%20448v384h-128v288q0%2014%20-9%2023t-23%209h-1856q-14%200%20-23%20-9t-9%20-23%20v-960q0%20-14%209%20-23t23%20-9h1856q14%200%2023%209t9%2023v288h128z"
            ],
            "\uf245": [
                1280.0,
                "M1133%20493q31%20-30%2014%20-69q-17%20-40%20-59%20-40h-382l201%20-476q10%20-25%200%20-49t-34%20-35l-177%20-75q-25%20-10%20-49%200t-35%2034l-191%20452l-312%20-312q-19%20-19%20-45%20-19q-12%200%20-24%205q-40%2017%20-40%2059v1504q0%2042%2040%2059q12%205%2024%205q27%200%2045%20-19z"
            ],
            "\uf246": [
                1024.0,
                "M832%201408q-320%200%20-320%20-224v-416h128v-128h-128v-544q0%20-224%20320%20-224h64v-128h-64q-272%200%20-384%20146q-112%20-146%20-384%20-146h-64v128h64q320%200%20320%20224v544h-128v128h128v416q0%20224%20-320%20224h-64v128h64q272%200%20384%20-146q112%20146%20384%20146h64v-128h-64z"
            ],
            "\uf247": [
                2048.0,
                "M2048%201152h-128v-1024h128v-384h-384v128h-1280v-128h-384v384h128v1024h-128v384h384v-128h1280v128h384v-384zM1792%201408v-128h128v128h-128zM128%201408v-128h128v128h-128zM256%20-128v128h-128v-128h128zM1664%200v128h128v1024h-128v128h-1280v-128h-128v-1024h128v-128%20h1280zM1920%20-128v128h-128v-128h128zM1280%20896h384v-768h-896v256h-384v768h896v-256zM512%20512h640v512h-640v-512zM1536%20256v512h-256v-384h-384v-128h640z"
            ],
            "\uf248": [
                2304.0,
                "M2304%20768h-128v-640h128v-384h-384v128h-896v-128h-384v384h128v128h-384v-128h-384v384h128v640h-128v384h384v-128h896v128h384v-384h-128v-128h384v128h384v-384zM2048%201024v-128h128v128h-128zM1408%201408v-128h128v128h-128zM128%201408v-128h128v128h-128zM256%20256%20v128h-128v-128h128zM1536%20384h-128v-128h128v128zM384%20384h896v128h128v640h-128v128h-896v-128h-128v-640h128v-128zM896%20-128v128h-128v-128h128zM2176%20-128v128h-128v-128h128zM2048%20128v640h-128v128h-384v-384h128v-384h-384v128h-384v-128h128v-128h896v128h128z"
            ],
            "\uf249": [
                1536.0,
                "M1024%20288v-416h-928q-40%200%20-68%2028t-28%2068v1344q0%2040%2028%2068t68%2028h1344q40%200%2068%20-28t28%20-68v-928h-416q-40%200%20-68%20-28t-28%20-68zM1152%20256h381q-15%20-82%20-65%20-132l-184%20-184q-50%20-50%20-132%20-65v381z"
            ],
            "\uf24a": [
                1536.0,
                "M1400%20256h-248v-248q29%2010%2041%2022l185%20185q12%2012%2022%2041zM1120%20384h288v896h-1280v-1280h896v288q0%2040%2028%2068t68%2028zM1536%201312v-1024q0%20-40%20-20%20-88t-48%20-76l-184%20-184q-28%20-28%20-76%20-48t-88%20-20h-1024q-40%200%20-68%2028t-28%2068v1344q0%2040%2028%2068t68%2028h1344q40%200%2068%20-28t28%20-68%20z"
            ],
            "\uf24b": [
                2304.0,
                "M1951%20538q0%20-26%20-15.5%20-44.5t-38.5%20-23.5q-8%20-2%20-18%20-2h-153v140h153q10%200%2018%20-2q23%20-5%2038.5%20-23.5t15.5%20-44.5zM1933%20751q0%20-25%20-15%20-42t-38%20-21q-3%20-1%20-15%20-1h-139v129h139q3%200%208.5%20-0.5t6.5%20-0.5q23%20-4%2038%20-21.5t15%20-42.5zM728%20587v308h-228v-308q0%20-58%20-38%20-94.5%20t-105%20-36.5q-108%200%20-229%2059v-112q53%20-15%20121%20-23t109%20-9l42%20-1q328%200%20328%20217zM1442%20403v113q-99%20-52%20-200%20-59q-108%20-8%20-169%2041t-61%20142t61%20142t169%2041q101%20-7%20200%20-58v112q-48%2012%20-100%2019.5t-80%209.5l-28%202q-127%206%20-218.5%20-14t-140.5%20-60t-71%20-88t-22%20-106t22%20-106t71%20-88%20t140.5%20-60t218.5%20-14q101%204%20208%2031zM2176%20518q0%2054%20-43%2088.5t-109%2039.5v3q57%208%2089%2041.5t32%2079.5q0%2055%20-41%2088t-107%2036q-3%200%20-12%200.5t-14%200.5h-455v-510h491q74%200%20121.5%2036.5t47.5%2096.5zM2304%201280v-1280q0%20-52%20-38%20-90t-90%20-38h-2048q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090%20t90%2038h2048q52%200%2090%20-38t38%20-90z"
            ],
            "\uf24c": [
                2304.0,
                "M858%20295v693q-106%20-41%20-172%20-135.5t-66%20-211.5t66%20-211.5t172%20-134.5zM1362%20641q0%20117%20-66%20211.5t-172%20135.5v-694q106%2041%20172%20135.5t66%20211.5zM1577%20641q0%20-159%20-78.5%20-294t-213.5%20-213.5t-294%20-78.5q-119%200%20-227.5%2046.5t-187%20125t-125%20187t-46.5%20227.5q0%20159%2078.5%20294%20t213.5%20213.5t294%2078.5t294%20-78.5t213.5%20-213.5t78.5%20-294zM1960%20634q0%20139%20-55.5%20261.5t-147.5%20205.5t-213.5%20131t-252.5%2048h-301q-176%200%20-323.5%20-81t-235%20-230t-87.5%20-335q0%20-171%2087%20-317.5t236%20-231.5t323%20-85h301q129%200%20251.5%2050.5t214.5%20135t147.5%20202.5t55.5%20246z%20M2304%201280v-1280q0%20-52%20-38%20-90t-90%20-38h-2048q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h2048q52%200%2090%20-38t38%20-90z"
            ],
            "\uf24d": [
                1792.0,
                "M1664%20-96v1088q0%2013%20-9.5%2022.5t-22.5%209.5h-1088q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-1088q0%20-13%209.5%20-22.5t22.5%20-9.5h1088q13%200%2022.5%209.5t9.5%2022.5zM1792%20992v-1088q0%20-66%20-47%20-113t-113%20-47h-1088q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h1088q66%200%20113%20-47t47%20-113%20zM1408%201376v-160h-128v160q0%2013%20-9.5%2022.5t-22.5%209.5h-1088q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-1088q0%20-13%209.5%20-22.5t22.5%20-9.5h160v-128h-160q-66%200%20-113%2047t-47%20113v1088q0%2066%2047%20113t113%2047h1088q66%200%20113%20-47t47%20-113z"
            ],
            "\uf24e": [
                2304.0,
                "M1728%201088l-384%20-704h768zM448%201088l-384%20-704h768zM1269%201280q-14%20-40%20-45.5%20-71.5t-71.5%20-45.5v-1291h608q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-1344q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h608v1291q-40%2014%20-71.5%2045.5t-45.5%2071.5h-491q-14%200%20-23%209t-9%2023v64%20q0%2014%209%2023t23%209h491q21%2057%2070%2092.5t111%2035.5t111%20-35.5t70%20-92.5h491q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-491zM1088%201264q33%200%2056.5%2023.5t23.5%2056.5t-23.5%2056.5t-56.5%2023.5t-56.5%20-23.5t-23.5%20-56.5t23.5%20-56.5t56.5%20-23.5zM2176%20384q0%20-73%20-46.5%20-131t-117.5%20-91%20t-144.5%20-49.5t-139.5%20-16.5t-139.5%2016.5t-144.5%2049.5t-117.5%2091t-46.5%20131q0%2011%2035%2081t92%20174.5t107%20195.5t102%20184t56%20100q18%2033%2056%2033t56%20-33q4%20-7%2056%20-100t102%20-184t107%20-195.5t92%20-174.5t35%20-81zM896%20384q0%20-73%20-46.5%20-131t-117.5%20-91t-144.5%20-49.5t-139.5%20-16.5%20t-139.5%2016.5t-144.5%2049.5t-117.5%2091t-46.5%20131q0%2011%2035%2081t92%20174.5t107%20195.5t102%20184t56%20100q18%2033%2056%2033t56%20-33q4%20-7%2056%20-100t102%20-184t107%20-195.5t92%20-174.5t35%20-81z"
            ],
            "\uf250": [
                1536.0,
                "M1408%201408q0%20-261%20-106.5%20-461.5t-266.5%20-306.5q160%20-106%20266.5%20-306.5t106.5%20-461.5h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-1472q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96q0%20261%20106.5%20461.5t266.5%20306.5q-160%20106%20-266.5%20306.5t-106.5%20461.5h-96q-14%200%20-23%209%20t-9%2023v64q0%2014%209%2023t23%209h1472q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-96zM874%20700q77%2029%20149%2092.5t129.5%20152.5t92.5%20210t35%20253h-1024q0%20-132%2035%20-253t92.5%20-210t129.5%20-152.5t149%20-92.5q19%20-7%2030.5%20-23.5t11.5%20-36.5t-11.5%20-36.5t-30.5%20-23.5q-77%20-29%20-149%20-92.5%20t-129.5%20-152.5t-92.5%20-210t-35%20-253h1024q0%20132%20-35%20253t-92.5%20210t-129.5%20152.5t-149%2092.5q-19%207%20-30.5%2023.5t-11.5%2036.5t11.5%2036.5t30.5%2023.5z"
            ],
            "\uf251": [
                1536.0,
                "M1408%201408q0%20-261%20-106.5%20-461.5t-266.5%20-306.5q160%20-106%20266.5%20-306.5t106.5%20-461.5h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-1472q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96q0%20261%20106.5%20461.5t266.5%20306.5q-160%20106%20-266.5%20306.5t-106.5%20461.5h-96q-14%200%20-23%209%20t-9%2023v64q0%2014%209%2023t23%209h1472q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-96zM1280%201408h-1024q0%20-66%209%20-128h1006q9%2061%209%20128zM1280%20-128q0%20130%20-34%20249.5t-90.5%20208t-126.5%20152t-146%2094.5h-230q-76%20-31%20-146%20-94.5t-126.5%20-152t-90.5%20-208t-34%20-249.5h1024z"
            ],
            "\uf252": [
                1536.0,
                "M1408%201408q0%20-261%20-106.5%20-461.5t-266.5%20-306.5q160%20-106%20266.5%20-306.5t106.5%20-461.5h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-1472q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96q0%20261%20106.5%20461.5t266.5%20306.5q-160%20106%20-266.5%20306.5t-106.5%20461.5h-96q-14%200%20-23%209%20t-9%2023v64q0%2014%209%2023t23%209h1472q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-96zM1280%201408h-1024q0%20-206%2085%20-384h854q85%20178%2085%20384zM1223%20192q-54%20141%20-145.5%20241.5t-194.5%20142.5h-230q-103%20-42%20-194.5%20-142.5t-145.5%20-241.5h910z"
            ],
            "\uf253": [
                1536.0,
                "M1408%201408q0%20-261%20-106.5%20-461.5t-266.5%20-306.5q160%20-106%20266.5%20-306.5t106.5%20-461.5h96q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-1472q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96q0%20261%20106.5%20461.5t266.5%20306.5q-160%20106%20-266.5%20306.5t-106.5%20461.5h-96q-14%200%20-23%209%20t-9%2023v64q0%2014%209%2023t23%209h1472q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-96zM874%20700q77%2029%20149%2092.5t129.5%20152.5t92.5%20210t35%20253h-1024q0%20-132%2035%20-253t92.5%20-210t129.5%20-152.5t149%20-92.5q19%20-7%2030.5%20-23.5t11.5%20-36.5t-11.5%20-36.5t-30.5%20-23.5q-137%20-51%20-244%20-196%20h700q-107%20145%20-244%20196q-19%207%20-30.5%2023.5t-11.5%2036.5t11.5%2036.5t30.5%2023.5z"
            ],
            "\uf254": [
                1536.0,
                "M1504%20-64q14%200%2023%20-9t9%20-23v-128q0%20-14%20-9%20-23t-23%20-9h-1472q-14%200%20-23%209t-9%2023v128q0%2014%209%2023t23%209h1472zM130%200q3%2055%2016%20107t30%2095t46%2087t53.5%2076t64.5%2069.5t66%2060t70.5%2055t66.5%2047.5t65%2043q-43%2028%20-65%2043t-66.5%2047.5t-70.5%2055t-66%2060t-64.5%2069.5t-53.5%2076t-46%2087%20t-30%2095t-16%20107h1276q-3%20-55%20-16%20-107t-30%20-95t-46%20-87t-53.5%20-76t-64.5%20-69.5t-66%20-60t-70.5%20-55t-66.5%20-47.5t-65%20-43q43%20-28%2065%20-43t66.5%20-47.5t70.5%20-55t66%20-60t64.5%20-69.5t53.5%20-76t46%20-87t30%20-95t16%20-107h-1276zM1504%201536q14%200%2023%20-9t9%20-23v-128q0%20-14%20-9%20-23t-23%20-9%20h-1472q-14%200%20-23%209t-9%2023v128q0%2014%209%2023t23%209h1472z"
            ],
            "\uf255": [
                1536.0,
                "M768%201152q-53%200%20-90.5%20-37.5t-37.5%20-90.5v-128h-32v93q0%2048%20-32%2081.5t-80%2033.5q-46%200%20-79%20-33t-33%20-79v-429l-32%2030v172q0%2048%20-32%2081.5t-80%2033.5q-46%200%20-79%20-33t-33%20-79v-224q0%20-47%2035%20-82l310%20-296q39%20-39%2039%20-102q0%20-26%2019%20-45t45%20-19h640q26%200%2045%2019t19%2045v25%20q0%2041%2010%2077l108%20436q10%2036%2010%2077v246q0%2048%20-32%2081.5t-80%2033.5q-46%200%20-79%20-33t-33%20-79v-32h-32v125q0%2040%20-25%2072.5t-64%2040.5q-14%202%20-23%202q-46%200%20-79%20-33t-33%20-79v-128h-32v122q0%2051%20-32.5%2089.5t-82.5%2043.5q-5%201%20-13%201zM768%201280q84%200%20149%20-50q57%2034%20123%2034q59%200%20111%20-27%20t86%20-76q27%207%2059%207q100%200%20170%20-71.5t70%20-171.5v-246q0%20-51%20-13%20-108l-109%20-436q-6%20-24%20-6%20-71q0%20-80%20-56%20-136t-136%20-56h-640q-84%200%20-138%2058.5t-54%20142.5l-308%20296q-76%2073%20-76%20175v224q0%2099%2070.5%20169.5t169.5%2070.5q11%200%2016%20-1q6%2095%2075.5%20160t164.5%2065q52%200%2098%20-21%20q72%2069%20174%2069z"
            ],
            "\uf256": [
                1792.0,
                "M880%201408q-46%200%20-79%20-33t-33%20-79v-656h-32v528q0%2046%20-33%2079t-79%2033t-79%20-33t-33%20-79v-528v-256l-154%20205q-38%2051%20-102%2051q-53%200%20-90.5%20-37.5t-37.5%20-90.5q0%20-43%2026%20-77l384%20-512q38%20-51%20102%20-51h688q34%200%2061%2022t34%2056l76%20405q5%2032%205%2059v498q0%2046%20-33%2079t-79%2033t-79%20-33%20t-33%20-79v-272h-32v528q0%2046%20-33%2079t-79%2033t-79%20-33t-33%20-79v-528h-32v656q0%2046%20-33%2079t-79%2033zM880%201536q68%200%20125.5%20-35.5t88.5%20-96.5q19%204%2042%204q99%200%20169.5%20-70.5t70.5%20-169.5v-17q105%206%20180.5%20-64t75.5%20-175v-498q0%20-40%20-8%20-83l-76%20-404q-14%20-79%20-76.5%20-131t-143.5%20-52%20h-688q-60%200%20-114.5%2027.5t-90.5%2074.5l-384%20512q-51%2068%20-51%20154q0%20106%2075%20181t181%2075q78%200%20128%20-34v434q0%2099%2070.5%20169.5t169.5%2070.5q23%200%2042%20-4q31%2061%2088.5%2096.5t125.5%2035.5z"
            ],
            "\uf257": [
                1792.0,
                "M1073%20-128h-177q-163%200%20-226%20141q-23%2049%20-23%20102v5q-62%2030%20-98.5%2088.5t-36.5%20127.5q0%2038%205%2048h-261q-106%200%20-181%2075t-75%20181t75%20181t181%2075h113l-44%2017q-74%2028%20-119.5%2093.5t-45.5%20145.5q0%20106%2075%20181t181%2075q46%200%2091%20-17l628%20-239h401q106%200%20181%20-75t75%20-181v-668%20q0%20-88%20-54%20-157.5t-140%20-90.5l-339%20-85q-92%20-23%20-186%20-23zM1024%20583l-155%20-71l-163%20-74q-30%20-14%20-48%20-41.5t-18%20-60.5q0%20-46%2033%20-79t79%20-33q26%200%2046%2010l338%20154q-49%2010%20-80.5%2050t-31.5%2090v55zM1344%20272q0%2046%20-33%2079t-79%2033q-26%200%20-46%20-10l-290%20-132q-28%20-13%20-37%20-17%20t-30.5%20-17t-29.5%20-23.5t-16%20-29t-8%20-40.5q0%20-50%2031.5%20-82t81.5%20-32q20%200%2038%209l352%20160q30%2014%2048%2041.5t18%2060.5zM1112%201024l-650%20248q-24%208%20-46%208q-53%200%20-90.5%20-37.5t-37.5%20-90.5q0%20-40%2022.5%20-73t59.5%20-47l526%20-200v-64h-640q-53%200%20-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5%20t90.5%20-37.5h535l233%20106v198q0%2063%2046%20106l111%20102h-69zM1073%200q82%200%20155%2019l339%2085q43%2011%2070%2045.5t27%2078.5v668q0%2053%20-37.5%2090.5t-90.5%2037.5h-308l-136%20-126q-36%20-33%20-36%20-82v-296q0%20-46%2033%20-77t79%20-31t79%2035t33%2081v208h32v-208q0%20-70%20-57%20-114q52%20-8%2086.5%20-48.5t34.5%20-93.5%20q0%20-42%20-23%20-78t-61%20-53l-310%20-141h91z"
            ],
            "\uf258": [
                2048.0,
                "M1151%201536q61%200%20116%20-28t91%20-77l572%20-781q118%20-159%20118%20-359v-355q0%20-80%20-56%20-136t-136%20-56h-384q-80%200%20-136%2056t-56%20136v177l-286%20143h-546q-80%200%20-136%2056t-56%20136v32q0%20119%2084.5%20203.5t203.5%2084.5h420l42%20128h-686q-100%200%20-173.5%2067.5t-81.5%20166.5q-65%2079%20-65%20182v32%20q0%2080%2056%20136t136%2056h959zM1920%20-64v355q0%20157%20-93%20284l-573%20781q-39%2052%20-103%2052h-959q-26%200%20-45%20-19t-19%20-45q0%20-32%201.5%20-49.5t9.5%20-40.5t25%20-43q10%2031%2035.5%2050t56.5%2019h832v-32h-832q-26%200%20-45%20-19t-19%20-45q0%20-44%203%20-58q8%20-44%2044%20-73t81%20-29h640h91q40%200%2068%20-28t28%20-68%20q0%20-15%20-5%20-30l-64%20-192q-10%20-29%20-35%20-47.5t-56%20-18.5h-443q-66%200%20-113%20-47t-47%20-113v-32q0%20-26%2019%20-45t45%20-19h561q16%200%2029%20-7l317%20-158q24%20-13%2038.5%20-36t14.5%20-50v-197q0%20-26%2019%20-45t45%20-19h384q26%200%2045%2019t19%2045z"
            ],
            "\uf259": [
                2048.0,
                "M459%20-256q-77%200%20-137.5%2047.5t-79.5%20122.5l-101%20401q-13%2057%20-13%20108q0%2045%20-5%2067l-116%20477q-7%2027%20-7%2057q0%2093%2062%20161t155%2078q17%2085%2082.5%20139t152.5%2054q83%200%20148%20-51.5t85%20-132.5l83%20-348l103%20428q20%2081%2085%20132.5t148%2051.5q89%200%20155.5%20-57.5t80.5%20-144.5q92%20-10%20152%20-79%20t60%20-162q0%20-24%20-7%20-59l-123%20-512q10%207%2037.5%2028.5t38.5%2029.5t35%2023t41%2020.5t41.5%2011t49.5%205.5q105%200%20180%20-74t75%20-179q0%20-62%20-28.5%20-118t-78.5%20-94l-507%20-380q-68%20-51%20-153%20-51h-694zM1104%201408q-38%200%20-68.5%20-24t-39.5%20-62l-164%20-682h-127l-145%20602q-9%2038%20-39.5%2062t-68.5%2024%20q-48%200%20-80%20-33t-32%20-80q0%20-15%203%20-28l132%20-547h-26l-99%20408q-9%2037%20-40%2062.5t-69%2025.5q-47%200%20-80%20-33t-33%20-79q0%20-14%203%20-26l116%20-478q7%20-28%209%20-86t10%20-88l100%20-401q8%20-32%2034%20-52.5t59%20-20.5h694q42%200%2076%2026l507%20379q56%2043%2056%20110q0%2052%20-37.5%2088.5t-89.5%2036.5q-43%200%20-77%20-26%20l-307%20-230v227q0%204%2032%20138t68%20282t39%20161q4%2018%204%2029q0%2047%20-32%2081t-79%2034q-39%200%20-69.5%20-24t-39.5%20-62l-116%20-482h-26l150%20624q3%2014%203%2028q0%2048%20-31.5%2082t-79.5%2034z"
            ],
            "\uf25a": [
                1792.0,
                "M640%201408q-53%200%20-90.5%20-37.5t-37.5%20-90.5v-512v-384l-151%20202q-41%2054%20-107%2054q-52%200%20-89%20-38t-37%20-90q0%20-43%2026%20-77l384%20-512q38%20-51%20102%20-51h718q22%200%2039.5%2013.5t22.5%2034.5l92%20368q24%2096%2024%20194v217q0%2041%20-28%2071t-68%2030t-68%20-28t-28%20-68h-32v61q0%2048%20-32%2081.5t-80%2033.5%20q-46%200%20-79%20-33t-33%20-79v-64h-32v90q0%2055%20-37%2094.5t-91%2039.5q-53%200%20-90.5%20-37.5t-37.5%20-90.5v-96h-32v570q0%2055%20-37%2094.5t-91%2039.5zM640%201536q107%200%20181.5%20-77.5t74.5%20-184.5v-220q22%202%2032%202q99%200%20173%20-69q47%2021%2099%2021q113%200%20184%20-87q27%207%2056%207q94%200%20159%20-67.5t65%20-161.5%20v-217q0%20-116%20-28%20-225l-92%20-368q-16%20-64%20-68%20-104.5t-118%20-40.5h-718q-60%200%20-114.5%2027.5t-90.5%2074.5l-384%20512q-51%2068%20-51%20154q0%20105%2074.5%20180.5t179.5%2075.5q71%200%20130%20-35v547q0%20106%2075%20181t181%2075zM768%20128v384h-32v-384h32zM1024%20128v384h-32v-384h32zM1280%20128v384h-32%20v-384h32z"
            ],
            "\uf25b": [
                1536.0,
                "M1288%20889q60%200%20107%20-23q141%20-63%20141%20-226v-177q0%20-94%20-23%20-186l-85%20-339q-21%20-86%20-90.5%20-140t-157.5%20-54h-668q-106%200%20-181%2075t-75%20181v401l-239%20628q-17%2045%20-17%2091q0%20106%2075%20181t181%2075q80%200%20145.5%20-45.5t93.5%20-119.5l17%20-44v113q0%20106%2075%20181t181%2075t181%20-75t75%20-181%20v-261q27%205%2048%205q69%200%20127.5%20-36.5t88.5%20-98.5zM1072%20896q-33%200%20-60.5%20-18t-41.5%20-48l-74%20-163l-71%20-155h55q50%200%2090%20-31.5t50%20-80.5l154%20338q10%2020%2010%2046q0%2046%20-33%2079t-79%2033zM1293%20761q-22%200%20-40.5%20-8t-29%20-16t-23.5%20-29.5t-17%20-30.5t-17%20-37l-132%20-290q-10%20-20%20-10%20-46%20q0%20-46%2033%20-79t79%20-33q33%200%2060.5%2018t41.5%2048l160%20352q9%2018%209%2038q0%2050%20-32%2081.5t-82%2031.5zM128%201120q0%20-22%208%20-46l248%20-650v-69l102%20111q43%2046%20106%2046h198l106%20233v535q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5v-640h-64l-200%20526q-14%2037%20-47%2059.5t-73%2022.5%20q-53%200%20-90.5%20-37.5t-37.5%20-90.5zM1180%20-128q44%200%2078.5%2027t45.5%2070l85%20339q19%2073%2019%20155v91l-141%20-310q-17%20-38%20-53%20-61t-78%20-23q-53%200%20-93.5%2034.5t-48.5%2086.5q-44%20-57%20-114%20-57h-208v32h208q46%200%2081%2033t35%2079t-31%2079t-77%2033h-296q-49%200%20-82%20-36l-126%20-136v-308%20q0%20-53%2037.5%20-90.5t90.5%20-37.5h668z"
            ],
            "\uf25c": [
                1973.0,
                "M857%20992v-117q0%20-13%20-9.5%20-22t-22.5%20-9h-298v-812q0%20-13%20-9%20-22.5t-22%20-9.5h-135q-13%200%20-22.5%209t-9.5%2023v812h-297q-13%200%20-22.5%209t-9.5%2022v117q0%2014%209%2023t23%209h793q13%200%2022.5%20-9.5t9.5%20-22.5zM1895%20995l77%20-961q1%20-13%20-8%20-24q-10%20-10%20-23%20-10h-134q-12%200%20-21%208.5%20t-10%2020.5l-46%20588l-189%20-425q-8%20-19%20-29%20-19h-120q-20%200%20-29%2019l-188%20427l-45%20-590q-1%20-12%20-10%20-20.5t-21%20-8.5h-135q-13%200%20-23%2010q-9%2010%20-9%2024l78%20961q1%2012%2010%2020.5t21%208.5h142q20%200%2029%20-19l220%20-520q10%20-24%2020%20-51q3%207%209.5%2024.5t10.5%2026.5l221%20520q9%2019%2029%2019h141%20q13%200%2022%20-8.5t10%20-20.5z"
            ],
            "\uf25d": [
                1792.0,
                "M1042%20833q0%2088%20-60%20121q-33%2018%20-117%2018h-123v-281h162q66%200%20102%2037t36%20105zM1094%20548l205%20-373q8%20-17%20-1%20-31q-8%20-16%20-27%20-16h-152q-20%200%20-28%2017l-194%20365h-155v-350q0%20-14%20-9%20-23t-23%20-9h-134q-14%200%20-23%209t-9%2023v960q0%2014%209%2023t23%209h294q128%200%20190%20-24q85%20-31%20134%20-109%20t49%20-180q0%20-92%20-42.5%20-165.5t-115.5%20-109.5q6%20-10%209%20-16zM896%201376q-150%200%20-286%20-58.5t-234.5%20-157t-157%20-234.5t-58.5%20-286t58.5%20-286t157%20-234.5t234.5%20-157t286%20-58.5t286%2058.5t234.5%20157t157%20234.5t58.5%20286t-58.5%20286t-157%20234.5t-234.5%20157t-286%2058.5zM1792%20640%20q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf25e": [
                1792.0,
                "M605%20303q153%200%20257%20104q14%2018%203%2036l-45%2082q-6%2013%20-24%2017q-16%202%20-27%20-11l-4%20-3q-4%20-4%20-11.5%20-10t-17.5%20-13.5t-23.5%20-14.5t-28.5%20-13t-33.5%20-9.5t-37.5%20-3.5q-76%200%20-125%2050t-49%20127q0%2076%2048%20125.5t122%2049.5q37%200%2071.5%20-14t50.5%20-28l16%20-14q11%20-11%2026%20-10q16%202%2024%2014l53%2078%20q13%2020%20-2%2039q-3%204%20-11%2012t-30%2023.5t-48.5%2028t-67.5%2022.5t-86%2010q-148%200%20-246%20-96.5t-98%20-240.5q0%20-146%2097%20-241.5t247%20-95.5zM1235%20303q153%200%20257%20104q14%2018%204%2036l-45%2082q-8%2014%20-25%2017q-16%202%20-27%20-11l-4%20-3q-4%20-4%20-11.5%20-10t-17.5%20-13.5t-23.5%20-14.5t-28.5%20-13t-33.5%20-9.5%20t-37.5%20-3.5q-76%200%20-125%2050t-49%20127q0%2076%2048%20125.5t122%2049.5q37%200%2071.5%20-14t50.5%20-28l16%20-14q11%20-11%2026%20-10q16%202%2024%2014l53%2078q13%2020%20-2%2039q-3%204%20-11%2012t-30%2023.5t-48.5%2028t-67.5%2022.5t-86%2010q-147%200%20-245.5%20-96.5t-98.5%20-240.5q0%20-146%2097%20-241.5t247%20-95.5zM896%201376%20q-150%200%20-286%20-58.5t-234.5%20-157t-157%20-234.5t-58.5%20-286t58.5%20-286t157%20-234.5t234.5%20-157t286%20-58.5t286%2058.5t234.5%20157t157%20234.5t58.5%20286t-58.5%20286t-157%20234.5t-234.5%20157t-286%2058.5zM896%201536q182%200%20348%20-71t286%20-191t191%20-286t71%20-348t-71%20-348t-191%20-286t-286%20-191%20t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071z"
            ],
            "\uf260": [
                2048.0,
                "M736%20736l384%20-384l-384%20-384l-672%20672l672%20672l168%20-168l-96%20-96l-72%2072l-480%20-480l480%20-480l193%20193l-289%20287zM1312%201312l672%20-672l-672%20-672l-168%20168l96%2096l72%20-72l480%20480l-480%20480l-193%20-193l289%20-287l-96%20-96l-384%20384z"
            ],
            "\uf261": [
                1792.0,
                "M717%20182l271%20271l-279%20279l-88%20-88l192%20-191l-96%20-96l-279%20279l279%20279l40%20-40l87%2087l-127%20128l-454%20-454zM1075%20190l454%20454l-454%20454l-271%20-271l279%20-279l88%2088l-192%20191l96%2096l279%20-279l-279%20-279l-40%2040l-87%20-88zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191%20t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf262": [
                2304.0,
                "M651%20539q0%20-39%20-27.5%20-66.5t-65.5%20-27.5q-39%200%20-66.5%2027.5t-27.5%2066.5q0%2038%2027.5%2065.5t66.5%2027.5q38%200%2065.5%20-27.5t27.5%20-65.5zM1805%20540q0%20-39%20-27.5%20-66.5t-66.5%20-27.5t-66.5%2027.5t-27.5%2066.5t27.5%2066t66.5%2027t66.5%20-27t27.5%20-66zM765%20539q0%2079%20-56.5%20136t-136.5%2057%20t-136.5%20-56.5t-56.5%20-136.5t56.5%20-136.5t136.5%20-56.5t136.5%2056.5t56.5%20136.5zM1918%20540q0%2080%20-56.5%20136.5t-136.5%2056.5q-79%200%20-136%20-56.5t-57%20-136.5t56.5%20-136.5t136.5%20-56.5t136.5%2056.5t56.5%20136.5zM850%20539q0%20-116%20-81.5%20-197.5t-196.5%20-81.5q-116%200%20-197.5%2082t-81.5%20197%20t82%20196.5t197%2081.5t196.5%20-81.5t81.5%20-196.5zM2004%20540q0%20-115%20-81.5%20-196.5t-197.5%20-81.5q-115%200%20-196.5%2081.5t-81.5%20196.5t81.5%20196.5t196.5%2081.5q116%200%20197.5%20-81.5t81.5%20-196.5zM1040%20537q0%20191%20-135.5%20326.5t-326.5%20135.5q-125%200%20-231%20-62t-168%20-168.5t-62%20-231.5%20t62%20-231.5t168%20-168.5t231%20-62q191%200%20326.5%20135.5t135.5%20326.5zM1708%201110q-254%20111%20-556%20111q-319%200%20-573%20-110q117%200%20223%20-45.5t182.5%20-122.5t122%20-183t45.5%20-223q0%20115%2043.5%20219.5t118%20180.5t177.5%20123t217%2050zM2187%20537q0%20191%20-135%20326.5t-326%20135.5t-326.5%20-135.5%20t-135.5%20-326.5t135.5%20-326.5t326.5%20-135.5t326%20135.5t135%20326.5zM1921%201103h383q-44%20-51%20-75%20-114.5t-40%20-114.5q110%20-151%20110%20-337q0%20-156%20-77%20-288t-209%20-208.5t-287%20-76.5q-133%200%20-249%2056t-196%20155q-47%20-56%20-129%20-179q-11%2022%20-53.5%2082.5t-74.5%2097.5%20q-80%20-99%20-196.5%20-155.5t-249.5%20-56.5q-155%200%20-287%2076.5t-209%20208.5t-77%20288q0%20186%20110%20337q-9%2051%20-40%20114.5t-75%20114.5h365q149%20100%20355%20156.5t432%2056.5q224%200%20421%20-56t348%20-157z"
            ],
            "\uf263": [
                1280.0,
                "M640%20629q-188%200%20-321%20133t-133%20320q0%20188%20133%20321t321%20133t321%20-133t133%20-321q0%20-187%20-133%20-320t-321%20-133zM640%201306q-92%200%20-157.5%20-65.5t-65.5%20-158.5q0%20-92%2065.5%20-157.5t157.5%20-65.5t157.5%2065.5t65.5%20157.5q0%2093%20-65.5%20158.5t-157.5%2065.5zM1163%20574q13%20-27%2015%20-49.5%20t-4.5%20-40.5t-26.5%20-38.5t-42.5%20-37t-61.5%20-41.5q-115%20-73%20-315%20-94l73%20-72l267%20-267q30%20-31%2030%20-74t-30%20-73l-12%20-13q-31%20-30%20-74%20-30t-74%2030q-67%2068%20-267%20268l-267%20-268q-31%20-30%20-74%20-30t-73%2030l-12%2013q-31%2030%20-31%2073t31%2074l267%20267l72%2072q-203%2021%20-317%2094%20q-39%2025%20-61.5%2041.5t-42.5%2037t-26.5%2038.5t-4.5%2040.5t15%2049.5q10%2020%2028%2035t42%2022t56%20-2t65%20-35q5%20-4%2015%20-11t43%20-24.5t69%20-30.5t92%20-24t113%20-11q91%200%20174%2025.5t120%2050.5l38%2025q33%2026%2065%2035t56%202t42%20-22t28%20-35z"
            ],
            "\uf264": [
                1536.0,
                "M927%20956q0%20-66%20-46.5%20-112.5t-112.5%20-46.5t-112.5%2046.5t-46.5%20112.5t46.5%20112.5t112.5%2046.5t112.5%20-46.5t46.5%20-112.5zM1141%20593q-10%2020%20-28%2032t-47.5%209.5t-60.5%20-27.5q-10%20-8%20-29%20-20t-81%20-32t-127%20-20t-124%2018t-86%2036l-27%2018q-31%2025%20-60.5%2027.5t-47.5%20-9.5t-28%20-32%20q-22%20-45%20-2%20-74.5t87%20-73.5q83%20-53%20226%20-67l-51%20-52q-142%20-142%20-191%20-190q-22%20-22%20-22%20-52.5t22%20-52.5l9%20-9q22%20-22%2052.5%20-22t52.5%2022l191%20191q114%20-115%20191%20-191q22%20-22%2052.5%20-22t52.5%2022l9%209q22%2022%2022%2052.5t-22%2052.5l-191%20190l-52%2052q141%2014%20225%2067q67%2044%2087%2073.5t-2%2074.5%20zM1092%20956q0%20134%20-95%20229t-229%2095t-229%20-95t-95%20-229t95%20-229t229%20-95t229%2095t95%20229zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf265": [
                1720.0,
                "M1565%201408q65%200%20110%20-45.5t45%20-110.5v-519q0%20-176%20-68%20-336t-182.5%20-275t-274%20-182.5t-334.5%20-67.5q-176%200%20-335.5%2067.5t-274.5%20182.5t-183%20275t-68%20336v519q0%2064%2046%20110t110%2046h1409zM861%20344q47%200%2082%2033l404%20388q37%2035%2037%2085q0%2049%20-34.5%2083.5t-83.5%2034.5q-47%200%20-82%20-33%20l-323%20-310l-323%20310q-35%2033%20-81%2033q-49%200%20-83.5%20-34.5t-34.5%20-83.5q0%20-51%2036%20-85l405%20-388q33%20-33%2081%20-33z"
            ],
            "\uf266": [
                2304.0,
                "M1494%20-103l-295%20695q-25%20-49%20-158.5%20-305.5t-198.5%20-389.5q-1%20-1%20-27.5%20-0.5t-26.5%201.5q-82%20193%20-255.5%20587t-259.5%20596q-21%2050%20-66.5%20107.5t-103.5%20100.5t-102%2043q0%205%20-0.5%2024t-0.5%2027h583v-50q-39%20-2%20-79.5%20-16t-66.5%20-43t-10%20-64q26%20-59%20216.5%20-499t235.5%20-540%20q31%2061%20140%20266.5t131%20247.5q-19%2039%20-126%20281t-136%20295q-38%2069%20-201%2071v50l513%20-1v-47q-60%20-2%20-93.5%20-25t-12.5%20-69q33%20-70%2087%20-189.5t86%20-187.5q110%20214%20173%20363q24%2055%20-10%2079.5t-129%2026.5q1%207%201%2025v24q64%200%20170.5%200.5t180%201t92.5%200.5v-49q-62%20-2%20-119%20-33t-90%20-81%20l-213%20-442q13%20-33%20127.5%20-290t121.5%20-274l441%201017q-14%2038%20-49.5%2062.5t-65%2031.5t-55.5%208v50l460%20-4l1%20-2l-1%20-44q-139%20-4%20-201%20-145q-526%20-1216%20-559%20-1291h-49z"
            ],
            "\uf267": [
                1792.0,
                "M949%20643q0%20-26%20-16.5%20-45t-41.5%20-19q-26%200%20-45%2016.5t-19%2041.5q0%2026%2017%2045t42%2019t44%20-16.5t19%20-41.5zM964%20585l350%20581q-9%20-8%20-67.5%20-62.5t-125.5%20-116.5t-136.5%20-127t-117%20-110.5t-50.5%20-51.5l-349%20-580q7%207%2067%2062t126%20116.5t136%20127t117%20111t50%2050.5zM1611%20640%20q0%20-201%20-104%20-371q-3%202%20-17%2011t-26.5%2016.5t-16.5%207.5q-13%200%20-13%20-13q0%20-10%2059%20-44q-74%20-112%20-184.5%20-190.5t-241.5%20-110.5l-16%2067q-1%2010%20-15%2010q-5%200%20-8%20-5.5t-2%20-9.5l16%20-68q-72%20-15%20-146%20-15q-199%200%20-372%20105q1%202%2013%2020.5t21.5%2033.5t9.5%2019q0%2013%20-13%2013q-6%200%20-17%20-14.5%20t-22.5%20-34.5t-13.5%20-23q-113%2075%20-192%20187.5t-110%20244.5l69%2015q10%203%2010%2015q0%205%20-5.5%208t-10.5%202l-68%20-15q-14%2072%20-14%20139q0%20206%20109%20379q2%20-1%2018.5%20-12t30%20-19t17.5%20-8q13%200%2013%2012q0%206%20-12.5%2015.5t-32.5%2021.5l-20%2012q77%20112%20189%20189t244%20107l15%20-67q2%20-10%2015%20-10q5%200%208%205.5%20t2%2010.5l-15%2066q71%2013%20134%2013q204%200%20379%20-109q-39%20-56%20-39%20-65q0%20-13%2012%20-13q11%200%2048%2064q111%20-75%20187.5%20-186t107.5%20-241l-56%20-12q-10%20-2%20-10%20-16q0%20-5%205.5%20-8t9.5%20-2l57%2013q14%20-72%2014%20-140zM1696%20640q0%20163%20-63.5%20311t-170.5%20255t-255%20170.5t-311%2063.5t-311%20-63.5%20t-255%20-170.5t-170.5%20-255t-63.5%20-311t63.5%20-311t170.5%20-255t255%20-170.5t311%20-63.5t311%2063.5t255%20170.5t170.5%20255t63.5%20311zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191%20t191%20-286t71%20-348z"
            ],
            "\uf268": [
                1792.0,
                "M893%201536q240%202%20451%20-120q232%20-134%20352%20-372l-742%2039q-160%209%20-294%20-74.5t-185%20-229.5l-276%20424q128%20159%20311%20245.5t383%2087.5zM146%201131l337%20-663q72%20-143%20211%20-217t293%20-45l-230%20-451q-212%2033%20-385%20157.5t-272.5%20316t-99.5%20411.5q0%20267%20146%20491zM1732%20962%20q58%20-150%2059.5%20-310.5t-48.5%20-306t-153%20-272t-246%20-209.5q-230%20-133%20-498%20-119l405%20623q88%20131%2082.5%20290.5t-106.5%20277.5zM896%20942q125%200%20213.5%20-88.5t88.5%20-213.5t-88.5%20-213.5t-213.5%20-88.5t-213.5%2088.5t-88.5%20213.5t88.5%20213.5t213.5%2088.5z"
            ],
            "\uf269": [
                1792.0,
                "M903%20-256q-283%200%20-504.5%20150.5t-329.5%20398.5q-58%20131%20-67%20301t26%20332.5t111%20312t179%20242.5l-11%20-281q11%2014%2068%2015.5t70%20-15.5q42%2081%20160.5%20138t234.5%2059q-54%20-45%20-119.5%20-148.5t-58.5%20-163.5q25%20-8%2062.5%20-13.5t63%20-7.5t68%20-4t50.5%20-3q15%20-5%209.5%20-45.5t-30.5%20-75.5%20q-5%20-7%20-16.5%20-18.5t-56.5%20-35.5t-101%20-34l15%20-189l-139%2067q-18%20-43%20-7.5%20-81.5t36%20-66.5t65.5%20-41.5t81%20-6.5q51%209%2098%2034.5t83.5%2045t73.5%2017.5q61%20-4%2089.5%20-33t19.5%20-65q-1%20-2%20-2.5%20-5.5t-8.5%20-12.5t-18%20-15.5t-31.5%20-10.5t-46.5%20-1q-60%20-95%20-144.5%20-135.5t-209.5%20-29.5%20q74%20-61%20162.5%20-82.5t168.5%20-6t154.5%2052t128%2087.5t80.5%20104q43%2091%2039%20192.5t-37.5%20188.5t-78.5%20125q87%20-38%20137%20-79.5t77%20-112.5q15%20170%20-57.5%20343t-209.5%20284q265%20-77%20412%20-279.5t151%20-517.5q2%20-127%20-40.5%20-255t-123.5%20-238t-189%20-196t-247.5%20-135.5t-288.5%20-49.5z"
            ],
            "\uf26a": [
                1792.0,
                "M1493%201308q-165%20110%20-359%20110q-155%200%20-293%20-73t-240%20-200q-75%20-93%20-119.5%20-218t-48.5%20-266v-42q4%20-141%2048.5%20-266t119.5%20-218q102%20-127%20240%20-200t293%20-73q194%200%20359%20110q-121%20-108%20-274.5%20-168t-322.5%20-60q-29%200%20-43%201q-175%208%20-333%2082t-272%20193t-181%20281t-67%20339%20q0%20182%2071%20348t191%20286t286%20191t348%2071h3q168%20-1%20320.5%20-60.5t273.5%20-167.5zM1792%20640q0%20-192%20-77%20-362.5t-213%20-296.5q-104%20-63%20-222%20-63q-137%200%20-255%2084q154%2056%20253.5%20233t99.5%20405q0%20227%20-99%20404t-253%20234q119%2083%20254%2083q119%200%20226%20-65q135%20-125%20210.5%20-295t75.5%20-361z%20"
            ],
            "\uf26b": [
                1792.0,
                "M1792%20599q0%20-56%20-7%20-104h-1151q0%20-146%20109.5%20-244.5t257.5%20-98.5q99%200%20185.5%2046.5t136.5%20130.5h423q-56%20-159%20-170.5%20-281t-267.5%20-188.5t-321%20-66.5q-187%200%20-356%2083q-228%20-116%20-394%20-116q-237%200%20-237%20263q0%20115%2045%20275q17%2060%20109%20229q199%20360%20475%20606%20q-184%20-79%20-427%20-354q63%20274%20283.5%20449.5t501.5%20175.5q30%200%2045%20-1q255%20117%20433%20117q64%200%20116%20-13t94.5%20-40.5t66.5%20-76.5t24%20-115q0%20-116%20-75%20-286q101%20-182%20101%20-390zM1722%201239q0%2083%20-53%20132t-137%2049q-108%200%20-254%20-70q121%20-47%20222.5%20-131.5t170.5%20-195.5q51%20135%2051%20216z%20M128%202q0%20-86%2048.5%20-132.5t134.5%20-46.5q115%200%20266%2083q-122%2072%20-213.5%20183t-137.5%20245q-98%20-205%20-98%20-332zM632%20715h728q-5%20142%20-113%20237t-251%2095q-144%200%20-251.5%20-95t-112.5%20-237z"
            ],
            "\uf26c": [
                2048.0,
                "M1792%20288v960q0%2013%20-9.5%2022.5t-22.5%209.5h-1600q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-960q0%20-13%209.5%20-22.5t22.5%20-9.5h1600q13%200%2022.5%209.5t9.5%2022.5zM1920%201248v-960q0%20-66%20-47%20-113t-113%20-47h-736v-128h352q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-832q-14%200%20-23%209t-9%2023%20v64q0%2014%209%2023t23%209h352v128h-736q-66%200%20-113%2047t-47%20113v960q0%2066%2047%20113t113%2047h1600q66%200%20113%20-47t47%20-113z"
            ],
            "\uf26d": [
                1792.0,
                "M138%201408h197q-70%20-64%20-126%20-149q-36%20-56%20-59%20-115t-30%20-125.5t-8.5%20-120t10.5%20-132t21%20-126t28%20-136.5q4%20-19%206%20-28q51%20-238%2081%20-329q57%20-171%20152%20-275h-272q-48%200%20-82%2034t-34%2082v1304q0%2048%2034%2082t82%2034zM1346%201408h308q48%200%2082%20-34t34%20-82v-1304q0%20-48%20-34%20-82t-82%20-34%20h-178q212%20210%20196%20565l-469%20-101q-2%20-45%20-12%20-82t-31%20-72t-59.5%20-59.5t-93.5%20-36.5q-123%20-26%20-199%2040q-32%2027%20-53%2061t-51.5%20129t-64.5%20258q-35%20163%20-45.5%20263t-5.5%20139t23%2077q20%2041%2062.5%2073t102.5%2045q45%2012%2083.5%206.5t67%20-17t54%20-35t43%20-48t34.5%20-56.5l468%20100%20q-68%20175%20-180%20287z"
            ],
            "\uf26e": [
                1536.0,
                "M1401%20-11l-6%20-6q-113%20-113%20-259%20-175q-154%20-64%20-317%20-64q-165%200%20-317%2064q-148%2063%20-259%20175q-113%20112%20-175%20258q-42%20103%20-54%20189q-4%2028%2048%2036q51%208%2056%20-20q1%20-1%201%20-4q18%20-90%2046%20-159q50%20-124%20152%20-226q98%20-98%20226%20-152q132%20-56%20276%20-56q143%200%20276%2056q128%2055%20225%20152l6%206%20q10%2010%2025%206q12%20-3%2033%20-22q36%20-37%2017%20-58zM929%20604l-66%20-66l63%20-63q21%20-21%20-7%20-49q-17%20-17%20-32%20-17q-10%200%20-19%2010l-62%2061l-66%20-66q-5%20-5%20-15%20-5q-15%200%20-31%2016l-2%202q-18%2015%20-18%2029q0%207%208%2017l66%2065l-66%2066q-16%2016%2014%2045q18%2018%2031%2018q6%200%2013%20-5l65%20-66l65%2065q18%2017%2048%20-13%20q27%20-27%2011%20-44zM1400%20547q0%20-118%20-46%20-228q-45%20-105%20-126%20-186q-80%20-80%20-187%20-126t-228%20-46t-228%2046t-187%20126q-82%2082%20-125%20186q-15%2033%20-15%2040h-1q-9%2027%2043%2044q50%2016%2060%20-12q37%20-99%2097%20-167h1v339v2q3%20136%20102%20232q105%20103%20253%20103q147%200%20251%20-103t104%20-249%20q0%20-147%20-104.5%20-251t-250.5%20-104q-58%200%20-112%2016q-28%2011%20-13%2061q16%2051%2044%2043l14%20-3q14%20-3%2033%20-6t30%20-3q104%200%20176%2071.5t72%20174.5q0%20101%20-72%20171q-71%2071%20-175%2071q-107%200%20-178%20-80q-64%20-72%20-64%20-160v-413q110%20-67%20242%20-67q96%200%20185%2036.5t156%20103.5t103.5%20155t36.5%20183%20q0%20198%20-141%20339q-140%20140%20-339%20140q-200%200%20-340%20-140q-53%20-53%20-77%20-87l-2%20-2q-8%20-11%20-13%20-15.5t-21.5%20-9.5t-38.5%203q-21%205%20-36.5%2016.5t-15.5%2026.5v680q0%2015%2010.5%2026.5t27.5%2011.5h877q30%200%2030%20-55t-30%20-55h-811v-483h1q40%2042%20102%2084t108%2061q109%2046%20231%2046q121%200%20228%20-46%20t187%20-126q81%20-81%20126%20-186q46%20-112%2046%20-229zM1369%201128q9%20-8%209%20-18t-5.5%20-18t-16.5%20-21q-26%20-26%20-39%20-26q-9%200%20-16%207q-106%2091%20-207%20133q-128%2056%20-276%2056q-133%200%20-262%20-49q-27%20-10%20-45%2037q-9%2025%20-8%2038q3%2016%2016%2020q130%2057%20299%2057q164%200%20316%20-64q137%20-58%20235%20-152z"
            ],
            "\uf270": [
                1792.0,
                "M1551%2060q15%206%2026%203t11%20-17.5t-15%20-33.5q-13%20-16%20-44%20-43.5t-95.5%20-68t-141%20-74t-188%20-58t-229.5%20-24.5q-119%200%20-238%2031t-209%2076.5t-172.5%20104t-132.5%20105t-84%2087.5q-8%209%20-10%2016.5t1%2012t8%207t11.5%202t11.5%20-4.5q192%20-117%20300%20-166q389%20-176%20799%20-90q190%2040%20391%20135z%20M1758%20175q11%20-16%202.5%20-69.5t-28.5%20-102.5q-34%20-83%20-85%20-124q-17%20-14%20-26%20-9t0%2024q21%2045%2044.5%20121.5t6.5%2098.5q-5%207%20-15.5%2011.5t-27%206t-29.5%202.5t-35%200t-31.5%20-2t-31%20-3t-22.5%20-2q-6%20-1%20-13%20-1.5t-11%20-1t-8.5%20-1t-7%20-0.5h-5.5h-4.5t-3%200.5t-2%201.5l-1.5%203q-6%2016%2047%2040t103%2030%20q46%207%20108%201t76%20-24zM1364%20618q0%20-31%2013.5%20-64t32%20-58t37.5%20-46t33%20-32l13%20-11l-227%20-224q-40%2037%20-79%2075.5t-58%2058.5l-19%2020q-11%2011%20-25%2033q-38%20-59%20-97.5%20-102.5t-127.5%20-63.5t-140%20-23t-137.5%2021t-117.5%2065.5t-83%20113t-31%20162.5q0%2084%2028%20154t72%20116.5t106.5%2083t122.5%2057%20t130%2034.5t119.5%2018.5t99.5%206.5v127q0%2065%20-21%2097q-34%2053%20-121%2053q-6%200%20-16.5%20-1t-40.5%20-12t-56%20-29.5t-56%20-59.5t-48%20-96l-294%2027q0%2060%2022%20119t67%20113t108%2095t151.5%2065.5t190.5%2024.5q100%200%20181%20-25t129.5%20-61.5t81%20-83t45%20-86t12.5%20-73.5v-589zM692%20597q0%20-86%2070%20-133%20q66%20-44%20139%20-22q84%2025%20114%20123q14%2045%2014%20101v162q-59%20-2%20-111%20-12t-106.5%20-33.5t-87%20-71t-32.5%20-114.5z"
            ],
            "\uf271": [
                1792.0,
                "M1536%201280q52%200%2090%20-38t38%20-90v-1280q0%20-52%20-38%20-90t-90%20-38h-1408q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h128v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h384v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h128zM1152%201376v-288q0%20-14%209%20-23t23%20-9%20h64q14%200%2023%209t9%2023v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23zM384%201376v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23zM1536%20-128v1024h-1408v-1024h1408zM896%20448h224q14%200%2023%20-9t9%20-23v-64q0%20-14%20-9%20-23t-23%20-9h-224%20v-224q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v224h-224q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h224v224q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23v-224z"
            ],
            "\uf272": [
                1792.0,
                "M1152%20416v-64q0%20-14%20-9%20-23t-23%20-9h-576q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h576q14%200%2023%20-9t9%20-23zM128%20-128h1408v1024h-1408v-1024zM512%201088v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1280%201088v288q0%2014%20-9%2023%20t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1664%201152v-1280q0%20-52%20-38%20-90t-90%20-38h-1408q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h128v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h384v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47%20t47%20-113v-96h128q52%200%2090%20-38t38%20-90z"
            ],
            "\uf273": [
                1792.0,
                "M1111%20151l-46%20-46q-9%20-9%20-22%20-9t-23%209l-188%20189l-188%20-189q-10%20-9%20-23%20-9t-22%209l-46%2046q-9%209%20-9%2022t9%2023l189%20188l-189%20188q-9%2010%20-9%2023t9%2022l46%2046q9%209%2022%209t23%20-9l188%20-188l188%20188q10%209%2023%209t22%20-9l46%20-46q9%20-9%209%20-22t-9%20-23l-188%20-188l188%20-188q9%20-10%209%20-23t-9%20-22z%20M128%20-128h1408v1024h-1408v-1024zM512%201088v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1280%201088v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1664%201152v-1280%20q0%20-52%20-38%20-90t-90%20-38h-1408q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h128v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h384v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h128q52%200%2090%20-38t38%20-90z"
            ],
            "\uf274": [
                1792.0,
                "M1303%20572l-512%20-512q-10%20-9%20-23%20-9t-23%209l-288%20288q-9%2010%20-9%2023t9%2022l46%2046q9%209%2022%209t23%20-9l220%20-220l444%20444q10%209%2023%209t22%20-9l46%20-46q9%20-9%209%20-22t-9%20-23zM128%20-128h1408v1024h-1408v-1024zM512%201088v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23%20t23%20-9h64q14%200%2023%209t9%2023zM1280%201088v288q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-288q0%20-14%209%20-23t23%20-9h64q14%200%2023%209t9%2023zM1664%201152v-1280q0%20-52%20-38%20-90t-90%20-38h-1408q-52%200%20-90%2038t-38%2090v1280q0%2052%2038%2090t90%2038h128v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47%20t47%20-113v-96h384v96q0%2066%2047%20113t113%2047h64q66%200%20113%20-47t47%20-113v-96h128q52%200%2090%20-38t38%20-90z"
            ],
            "\uf275": [
                1792.0,
                "M448%201536q26%200%2045%20-19t19%20-45v-891l536%20429q17%2014%2040%2014q26%200%2045%20-19t19%20-45v-379l536%20429q17%2014%2040%2014q26%200%2045%20-19t19%20-45v-1152q0%20-26%20-19%20-45t-45%20-19h-1664q-26%200%20-45%2019t-19%2045v1664q0%2026%2019%2045t45%2019h384z"
            ],
            "\uf276": [
                1024.0,
                "M512%20448q66%200%20128%2015v-655q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v655q62%20-15%20128%20-15zM512%201536q212%200%20362%20-150t150%20-362t-150%20-362t-362%20-150t-362%20150t-150%20362t150%20362t362%20150zM512%201312q14%200%2023%209t9%2023t-9%2023t-23%209q-146%200%20-249%20-103t-103%20-249%20q0%20-14%209%20-23t23%20-9t23%209t9%2023q0%20119%2084.5%20203.5t203.5%2084.5z"
            ],
            "\uf277": [
                1792.0,
                "M1745%201239q10%20-10%2010%20-23t-10%20-23l-141%20-141q-28%20-28%20-68%20-28h-1344q-26%200%20-45%2019t-19%2045v256q0%2026%2019%2045t45%2019h576v64q0%2026%2019%2045t45%2019h128q26%200%2045%20-19t19%20-45v-64h512q40%200%2068%20-28zM768%20320h256v-512q0%20-26%20-19%20-45t-45%20-19h-128q-26%200%20-45%2019t-19%2045v512zM1600%20768%20q26%200%2045%20-19t19%20-45v-256q0%20-26%20-19%20-45t-45%20-19h-1344q-40%200%20-68%2028l-141%20141q-10%2010%20-10%2023t10%2023l141%20141q28%2028%2068%2028h512v192h256v-192h576z"
            ],
            "\uf278": [
                2048.0,
                "M2020%201525q28%20-20%2028%20-53v-1408q0%20-20%20-11%20-36t-29%20-23l-640%20-256q-24%20-11%20-48%200l-616%20246l-616%20-246q-10%20-5%20-24%20-5q-19%200%20-36%2011q-28%2020%20-28%2053v1408q0%2020%2011%2036t29%2023l640%20256q24%2011%2048%200l616%20-246l616%20246q32%2013%2060%20-6zM736%201390v-1270l576%20-230v1270zM128%201173%20v-1270l544%20217v1270zM1920%20107v1270l-544%20-217v-1270z"
            ],
            "\uf279": [
                1792.0,
                "M512%201536q13%200%2022.5%20-9.5t9.5%20-22.5v-1472q0%20-20%20-17%20-28l-480%20-256q-7%20-4%20-15%20-4q-13%200%20-22.5%209.5t-9.5%2022.5v1472q0%2020%2017%2028l480%20256q7%204%2015%204zM1760%201536q13%200%2022.5%20-9.5t9.5%20-22.5v-1472q0%20-20%20-17%20-28l-480%20-256q-7%20-4%20-15%20-4q-13%200%20-22.5%209.5t-9.5%2022.5v1472%20q0%2020%2017%2028l480%20256q7%204%2015%204zM640%201536q8%200%2014%20-3l512%20-256q18%20-10%2018%20-29v-1472q0%20-13%20-9.5%20-22.5t-22.5%20-9.5q-8%200%20-14%203l-512%20256q-18%2010%20-18%2029v1472q0%2013%209.5%2022.5t22.5%209.5z"
            ],
            "\uf27a": [
                1792.0,
                "M640%20640q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1024%20640q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1408%20640q0%2053%20-37.5%2090.5t-90.5%2037.5%20t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5zM1792%20640q0%20-174%20-120%20-321.5t-326%20-233t-450%20-85.5q-110%200%20-211%2018q-173%20-173%20-435%20-229q-52%20-10%20-86%20-13q-12%20-1%20-22%206t-13%2018q-4%2015%2020%2037q5%205%2023.5%2021.5t25.5%2023.5t23.5%2025.5t24%2031.5t20.5%2037%20t20%2048t14.5%2057.5t12.5%2072.5q-146%2090%20-229.5%20216.5t-83.5%20269.5q0%20174%20120%20321.5t326%20233t450%2085.5t450%20-85.5t326%20-233t120%20-321.5z"
            ],
            "\uf27b": [
                1792.0,
                "M640%20640q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1024%20640q0%20-53%20-37.5%20-90.5t-90.5%20-37.5t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM1408%20640q0%20-53%20-37.5%20-90.5t-90.5%20-37.5%20t-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5t90.5%20-37.5t37.5%20-90.5zM896%201152q-204%200%20-381.5%20-69.5t-282%20-187.5t-104.5%20-255q0%20-112%2071.5%20-213.5t201.5%20-175.5l87%20-50l-27%20-96q-24%20-91%20-70%20-172q152%2063%20275%20171l43%2038l57%20-6q69%20-8%20130%20-8q204%200%20381.5%2069.5t282%20187.5%20t104.5%20255t-104.5%20255t-282%20187.5t-381.5%2069.5zM1792%20640q0%20-174%20-120%20-321.5t-326%20-233t-450%20-85.5q-70%200%20-145%208q-198%20-175%20-460%20-242q-49%20-14%20-114%20-22h-5q-15%200%20-27%2010.5t-16%2027.5v1q-3%204%20-0.5%2012t2%2010t4.5%209.5l6%209t7%208.5t8%209q7%208%2031%2034.5t34.5%2038t31%2039.5t32.5%2051%20t27%2059t26%2076q-157%2089%20-247.5%20220t-90.5%20281q0%20130%2071%20248.5t191%20204.5t286%20136.5t348%2050.5t348%20-50.5t286%20-136.5t191%20-204.5t71%20-248.5z"
            ],
            "\uf27c": [
                1024.0,
                "M512%20345l512%20295v-591l-512%20-296v592zM0%20640v-591l512%20296zM512%201527v-591l-512%20-296v591zM512%20936l512%20295v-591z"
            ],
            "\uf27d": [
                1792.0,
                "M1709%201018q-10%20-236%20-332%20-651q-333%20-431%20-562%20-431q-142%200%20-240%20263q-44%20160%20-132%20482q-72%20262%20-157%20262q-18%200%20-127%20-76l-77%2098q24%2021%20108%2096.5t130%20115.5q156%20138%20241%20146q95%209%20153%20-55.5t81%20-203.5q44%20-287%2066%20-373q55%20-249%20120%20-249q51%200%20154%20161q101%20161%20109%20246%20q13%20139%20-109%20139q-57%200%20-121%20-26q120%20393%20459%20382q251%20-8%20236%20-326z"
            ],
            "\uf27e": [
                1536.0,
                "M0%201408h1536v-1536h-1536v1536zM1085%20293l-221%20631l221%20297h-634l221%20-297l-221%20-631l317%20-304z"
            ],
            "\uf280": [
                1536.0,
                "M0%201408h1536v-1536h-1536v1536zM908%201088l-12%20-33l75%20-83l-31%20-114l25%20-25l107%2057l107%20-57l25%2025l-31%20114l75%2083l-12%2033h-95l-53%2096h-32l-53%20-96h-95zM641%20925q32%200%2044.5%20-16t11.5%20-63l174%2021q0%2055%20-17.5%2092.5t-50.5%2056t-69%2025.5t-85%207q-133%200%20-199%20-57.5t-66%20-182.5v-72%20h-96v-128h76q20%200%2020%20-8v-382q0%20-14%20-5%20-20t-18%20-7l-73%20-7v-88h448v86l-149%2014q-6%201%20-8.5%201.5t-3.5%202.5t-0.5%204t1%207t0.5%2010v387h191l38%20128h-231q-6%200%20-2%206t4%209v80q0%2027%201.5%2040.5t7.5%2028t19.5%2020t36.5%205.5zM1248%2096v86l-54%209q-7%201%20-9.5%202.5t-2.5%203t1%207.5t1%2012v520h-275%20l-23%20-101l83%20-22q23%20-7%2023%20-27v-370q0%20-14%20-6%20-18.5t-20%20-6.5l-70%20-9v-86h352z"
            ],
            "\uf281": [
                1792.0,
                "M1792%20690q0%20-58%20-29.5%20-105.5t-79.5%20-72.5q12%20-46%2012%20-96q0%20-155%20-106.5%20-287t-290.5%20-208.5t-400%20-76.5t-399.5%2076.5t-290%20208.5t-106.5%20287q0%2047%2011%2094q-51%2025%20-82%2073.5t-31%20106.5q0%2082%2058%20140.5t141%2058.5q85%200%20145%20-63q218%20152%20515%20162l116%20521q3%2013%2015%2021t26%205%20l369%20-81q18%2037%2054%2059.5t79%2022.5q62%200%20106%20-43.5t44%20-105.5t-44%20-106t-106%20-44t-105.5%2043.5t-43.5%20105.5l-334%2074l-104%20-472q300%20-9%20519%20-160q58%2061%20143%2061q83%200%20141%20-58.5t58%20-140.5zM418%20491q0%20-62%2043.5%20-106t105.5%20-44t106%2044t44%20106t-44%20105.5t-106%2043.5q-61%200%20-105%20-44%20t-44%20-105zM1228%20136q11%2011%2011%2026t-11%2026q-10%2010%20-25%2010t-26%20-10q-41%20-42%20-121%20-62t-160%20-20t-160%2020t-121%2062q-11%2010%20-26%2010t-25%20-10q-11%20-10%20-11%20-25.5t11%20-26.5q43%20-43%20118.5%20-68t122.5%20-29.5t91%20-4.5t91%204.5t122.5%2029.5t118.5%2068zM1225%20341q62%200%20105.5%2044t43.5%20106%20q0%2061%20-44%20105t-105%2044q-62%200%20-106%20-43.5t-44%20-105.5t44%20-106t106%20-44z"
            ],
            "\uf282": [
                1792.0,
                "M69%20741h1q16%20126%2058.5%20241.5t115%20217t167.5%20176t223.5%20117.5t276.5%2043q231%200%20414%20-105.5t294%20-303.5q104%20-187%20104%20-442v-188h-1125q1%20-111%2053.5%20-192.5t136.5%20-122.5t189.5%20-57t213%20-3t208%2046.5t173.5%2084.5v-377q-92%20-55%20-229.5%20-92t-312.5%20-38t-316%2053%20q-189%2073%20-311.5%20249t-124.5%20372q-3%20242%20111%20412t325%20268q-48%20-60%20-78%20-125.5t-46%20-159.5h635q8%2077%20-8%20140t-47%20101.5t-70.5%2066.5t-80.5%2041t-75%2020.5t-56%208.5l-22%201q-135%20-5%20-259.5%20-44.5t-223.5%20-104.5t-176%20-140.5t-138%20-163.5z"
            ],
            "\uf283": [
                2304.0,
                "M0%2032v608h2304v-608q0%20-66%20-47%20-113t-113%20-47h-1984q-66%200%20-113%2047t-47%20113zM640%20256v-128h384v128h-384zM256%20256v-128h256v128h-256zM2144%201408q66%200%20113%20-47t47%20-113v-224h-2304v224q0%2066%2047%20113t113%2047h1984z"
            ],
            "\uf284": [
                1792.0,
                "M1584%20246l-218%20111q-74%20-120%20-196.5%20-189t-263.5%20-69q-147%200%20-271%2072t-196%20196t-72%20270q0%20110%2042.5%20209.5t115%20172t172%20115t209.5%2042.5q131%200%20247.5%20-60.5t192.5%20-168.5l215%20125q-110%20169%20-286.5%20265t-378.5%2096q-161%200%20-308%20-63t-253%20-169t-169%20-253t-63%20-308t63%20-308%20t169%20-253t253%20-169t308%20-63q213%200%20397.5%20107t290.5%20292zM1030%20643l693%20-352q-116%20-253%20-334.5%20-400t-492.5%20-147q-182%200%20-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071q260%200%20470.5%20-133.5t335.5%20-366.5zM1543%20640h-39v-160h-96v352h136q32%200%2054.5%20-20%20t28.5%20-48t1%20-56t-27.5%20-48t-57.5%20-20z"
            ],
            "\uf285": [
                1792.0,
                "M1427%20827l-614%20386l92%20151h855zM405%20562l-184%20116v858l1183%20-743zM1424%20697l147%20-95v-858l-532%20335zM1387%20718l-500%20-802h-855l356%20571z"
            ],
            "\uf286": [
                1792.0,
                "M640%20528v224q0%2016%20-16%2016h-96q-16%200%20-16%20-16v-224q0%20-16%2016%20-16h96q16%200%2016%2016zM1152%20528v224q0%2016%20-16%2016h-96q-16%200%20-16%20-16v-224q0%20-16%2016%20-16h96q16%200%2016%2016zM1664%20496v-752h-640v320q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136v-320h-640v752q0%2016%2016%2016h96%20q16%200%2016%20-16v-112h128v624q0%2016%2016%2016h96q16%200%2016%20-16v-112h128v112q0%2016%2016%2016h96q16%200%2016%20-16v-112h128v112q0%206%202.5%209.5t8.5%205t9.5%202t11.5%200t9%20-0.5v391q-32%2015%20-32%2050q0%2023%2016.5%2039t38.5%2016t38.5%20-16t16.5%20-39q0%20-35%20-32%20-50v-17q45%2010%2083%2010q21%200%2059.5%20-7.5t54.5%20-7.5%20q17%200%2047%207.5t37%207.5q16%200%2016%20-16v-210q0%20-15%20-35%20-21.5t-62%20-6.5q-18%200%20-54.5%207.5t-55.5%207.5q-40%200%20-90%20-12v-133q1%200%209%200.5t11.5%200t9.5%20-2t8.5%20-5t2.5%20-9.5v-112h128v112q0%2016%2016%2016h96q16%200%2016%20-16v-112h128v112q0%2016%2016%2016h96q16%200%2016%20-16v-624h128v112q0%2016%2016%2016h96%20q16%200%2016%20-16z"
            ],
            "\uf287": [
                2304.0,
                "M2288%20731q16%20-8%2016%20-27t-16%20-27l-320%20-192q-8%20-5%20-16%20-5q-9%200%20-16%204q-16%2010%20-16%2028v128h-858q37%20-58%2083%20-165q16%20-37%2024.5%20-55t24%20-49t27%20-47t27%20-34t31.5%20-26t33%20-8h96v96q0%2014%209%2023t23%209h320q14%200%2023%20-9t9%20-23v-320q0%20-14%20-9%20-23t-23%20-9h-320q-14%200%20-23%209t-9%2023v96h-96%20q-32%200%20-61%2010t-51%2023.5t-45%2040.5t-37%2046t-33.5%2057t-28.5%2057.5t-28%2060.5q-23%2053%20-37%2081.5t-36%2065t-44.5%2053.5t-46.5%2017h-360q-22%20-84%20-91%20-138t-157%20-54q-106%200%20-181%2075t-75%20181t75%20181t181%2075q88%200%20157%20-54t91%20-138h104q24%200%2046.5%2017t44.5%2053.5t36%2065t37%2081.5q19%2041%2028%2060.5%20t28.5%2057.5t33.5%2057t37%2046t45%2040.5t51%2023.5t61%2010h107q21%2057%2070%2092.5t111%2035.5q80%200%20136%20-56t56%20-136t-56%20-136t-136%20-56q-62%200%20-111%2035.5t-70%2092.5h-107q-17%200%20-33%20-8t-31.5%20-26t-27%20-34t-27%20-47t-24%20-49t-24.5%20-55q-46%20-107%20-83%20-165h1114v128q0%2018%2016%2028t32%20-1z"
            ],
            "\uf288": [
                1792.0,
                "M1150%20774q0%20-56%20-39.5%20-95t-95.5%20-39h-253v269h253q56%200%2095.5%20-39.5t39.5%20-95.5zM1329%20774q0%20130%20-91.5%20222t-222.5%2092h-433v-896h180v269h253q130%200%20222%2091.5t92%20221.5zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348%20t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf289": [
                2304.0,
                "M1645%20438q0%2059%20-34%20106.5t-87%2068.5q-7%20-45%20-23%20-92q-7%20-24%20-27.5%20-38t-44.5%20-14q-12%200%20-24%203q-31%2010%20-45%2038.5t-4%2058.5q23%2071%2023%20143q0%20123%20-61%20227.5t-166%20165.5t-228%2061q-134%200%20-247%20-73t-167%20-194q108%20-28%20188%20-106q22%20-23%2022%20-55t-22%20-54t-54%20-22t-55%2022%20q-75%2075%20-180%2075q-106%200%20-181%20-74.5t-75%20-180.5t75%20-180.5t181%20-74.5h1046q79%200%20134.5%2055.5t55.5%20133.5zM1798%20438q0%20-142%20-100.5%20-242t-242.5%20-100h-1046q-169%200%20-289%20119.5t-120%20288.5q0%20153%20100%20267t249%20136q62%20184%20221%20298t354%20114q235%200%20408.5%20-158.5t196.5%20-389.5%20q116%20-25%20192.5%20-118.5t76.5%20-214.5zM2048%20438q0%20-175%20-97%20-319q-23%20-33%20-64%20-33q-24%200%20-43%2013q-26%2017%20-32%2048.5t12%2057.5q71%20104%2071%20233t-71%20233q-18%2026%20-12%2057t32%2049t57.5%2011.5t49.5%20-32.5q97%20-142%2097%20-318zM2304%20438q0%20-244%20-134%20-443q-23%20-34%20-64%20-34q-23%200%20-42%2013%20q-26%2018%20-32.5%2049t11.5%2057q108%20164%20108%20358q0%20195%20-108%20357q-18%2026%20-11.5%2057.5t32.5%2048.5q26%2018%2057%2012t49%20-33q134%20-198%20134%20-442z"
            ],
            "\uf28a": [
                1536.0,
                "M1500%20-13q0%20-89%20-63%20-152.5t-153%20-63.5t-153.5%2063.5t-63.5%20152.5q0%2090%2063.5%20153.5t153.5%2063.5t153%20-63.5t63%20-153.5zM1267%20268q-115%20-15%20-192.5%20-102.5t-77.5%20-205.5q0%20-74%2033%20-138q-146%20-78%20-379%20-78q-109%200%20-201%2021t-153.5%2054.5t-110.5%2076.5t-76%2085t-44.5%2083%20t-23.5%2066.5t-6%2039.5q0%2019%204.5%2042.5t18.5%2056t36.5%2058t64%2043.5t94.5%2018t94%20-17.5t63%20-41t35.5%20-53t17.5%20-49t4%20-33.5q0%20-34%20-23%20-81q28%20-27%2082%20-42t93%20-17l40%20-1q115%200%20190%2051t75%20133q0%2026%20-9%2048.5t-31.5%2044.5t-49.5%2041t-74%2044t-93.5%2047.5t-119.5%2056.5q-28%2013%20-43%2020%20q-116%2055%20-187%20100t-122.5%20102t-72%20125.5t-20.5%20162.5q0%2078%2020.5%20150t66%20137.5t112.5%20114t166.5%2077t221.5%2028.5q120%200%20220%20-26t164.5%20-67t109.5%20-94t64%20-105.5t19%20-103.5q0%20-46%20-15%20-82.5t-36.5%20-58t-48.5%20-36t-49%20-19.5t-39%20-5h-8h-32t-39%205t-44%2014t-41%2028t-37%2046t-24%2070.5%20t-10%2097.5q-15%2016%20-59%2025.5t-81%2010.5l-37%201q-68%200%20-117.5%20-31t-70.5%20-70t-21%20-76q0%20-24%205%20-43t24%20-46t53%20-51t97%20-53.5t150%20-58.5q76%20-25%20138.5%20-53.5t109%20-55.5t83%20-59t60.5%20-59.5t41%20-62.5t26.5%20-62t14.5%20-63.5t6%20-62t1%20-62.5z"
            ],
            "\uf28b": [
                1536.0,
                "M704%20352v576q0%2014%20-9%2023t-23%209h-256q-14%200%20-23%20-9t-9%20-23v-576q0%20-14%209%20-23t23%20-9h256q14%200%2023%209t9%2023zM1152%20352v576q0%2014%20-9%2023t-23%209h-256q-14%200%20-23%20-9t-9%20-23v-576q0%20-14%209%20-23t23%20-9h256q14%200%2023%209t9%2023zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103%20t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf28c": [
                1536.0,
                "M768%201408q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5t-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103zM768%2096q148%200%20273%2073t198%20198t73%20273t-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198t-73%20-273%20t73%20-273t198%20-198t273%20-73zM864%20320q-14%200%20-23%209t-9%2023v576q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-576q0%20-14%20-9%20-23t-23%20-9h-192zM480%20320q-14%200%20-23%209t-9%2023v576q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23v-576q0%20-14%20-9%20-23t-23%20-9h-192z"
            ],
            "\uf28d": [
                1536.0,
                "M1088%20352v576q0%2014%20-9%2023t-23%209h-576q-14%200%20-23%20-9t-9%20-23v-576q0%20-14%209%20-23t23%20-9h576q14%200%2023%209t9%2023zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5%20t103%20-385.5z"
            ],
            "\uf28e": [
                1536.0,
                "M768%201408q209%200%20385.5%20-103t279.5%20-279.5t103%20-385.5t-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103zM768%2096q148%200%20273%2073t198%20198t73%20273t-73%20273t-198%20198t-273%2073t-273%20-73t-198%20-198t-73%20-273%20t73%20-273t198%20-198t273%20-73zM480%20320q-14%200%20-23%209t-9%2023v576q0%2014%209%2023t23%209h576q14%200%2023%20-9t9%20-23v-576q0%20-14%20-9%20-23t-23%20-9h-576z"
            ],
            "\uf290": [
                1792.0,
                "M1757%20128l35%20-313q3%20-28%20-16%20-50q-19%20-21%20-48%20-21h-1664q-29%200%20-48%2021q-19%2022%20-16%2050l35%20313h1722zM1664%20967l86%20-775h-1708l86%20775q3%2024%2021%2040.5t43%2016.5h256v-128q0%20-53%2037.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5v128h384v-128q0%20-53%2037.5%20-90.5t90.5%20-37.5%20t90.5%2037.5t37.5%2090.5v128h256q25%200%2043%20-16.5t21%20-40.5zM1280%201152v-256q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045v256q0%20106%20-75%20181t-181%2075t-181%20-75t-75%20-181v-256q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045v256q0%20159%20112.5%20271.5t271.5%20112.5t271.5%20-112.5t112.5%20-271.5z"
            ],
            "\uf291": [
                2048.0,
                "M1920%20768q53%200%2090.5%20-37.5t37.5%20-90.5t-37.5%20-90.5t-90.5%20-37.5h-15l-115%20-662q-8%20-46%20-44%20-76t-82%20-30h-1280q-46%200%20-82%2030t-44%2076l-115%20662h-15q-53%200%20-90.5%2037.5t-37.5%2090.5t37.5%2090.5t90.5%2037.5h1792zM485%20-32q26%202%2043.5%2022.5t15.5%2046.5l-32%20416q-2%2026%20-22.5%2043.5%20t-46.5%2015.5t-43.5%20-22.5t-15.5%20-46.5l32%20-416q2%20-25%2020.5%20-42t43.5%20-17h5zM896%2032v416q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45v-416q0%20-26%2019%20-45t45%20-19t45%2019t19%2045zM1280%2032v416q0%2026%20-19%2045t-45%2019t-45%20-19t-19%20-45v-416q0%20-26%2019%20-45t45%20-19t45%2019t19%2045zM1632%2027l32%20416%20q2%2026%20-15.5%2046.5t-43.5%2022.5t-46.5%20-15.5t-22.5%20-43.5l-32%20-416q-2%20-26%2015.5%20-46.5t43.5%20-22.5h5q25%200%2043.5%2017t20.5%2042zM476%201244l-93%20-412h-132l101%20441q19%2088%2089%20143.5t160%2055.5h167q0%2026%2019%2045t45%2019h384q26%200%2045%20-19t19%20-45h167q90%200%20160%20-55.5t89%20-143.5l101%20-441%20h-132l-93%20412q-11%2044%20-45.5%2072t-79.5%2028h-167q0%20-26%20-19%20-45t-45%20-19h-384q-26%200%20-45%2019t-19%2045h-167q-45%200%20-79.5%20-28t-45.5%20-72z"
            ],
            "\uf292": [
                1792.0,
                "M991%20512l64%20256h-254l-64%20-256h254zM1759%201016l-56%20-224q-7%20-24%20-31%20-24h-327l-64%20-256h311q15%200%2025%20-12q10%20-14%206%20-28l-56%20-224q-5%20-24%20-31%20-24h-327l-81%20-328q-7%20-24%20-31%20-24h-224q-16%200%20-26%2012q-9%2012%20-6%2028l78%20312h-254l-81%20-328q-7%20-24%20-31%20-24h-225q-15%200%20-25%2012%20q-9%2012%20-6%2028l78%20312h-311q-15%200%20-25%2012q-9%2012%20-6%2028l56%20224q7%2024%2031%2024h327l64%20256h-311q-15%200%20-25%2012q-10%2014%20-6%2028l56%20224q5%2024%2031%2024h327l81%20328q7%2024%2032%2024h224q15%200%2025%20-12q9%20-12%206%20-28l-78%20-312h254l81%20328q7%2024%2032%2024h224q15%200%2025%20-12q9%20-12%206%20-28l-78%20-312h311%20q15%200%2025%20-12q9%20-12%206%20-28z"
            ],
            "\uf293": [
                1536.0,
                "M841%20483l148%20-148l-149%20-149zM840%201094l149%20-149l-148%20-148zM710%20-130l464%20464l-306%20306l306%20306l-464%20464v-611l-255%20255l-93%20-93l320%20-321l-320%20-321l93%20-93l255%20255v-611zM1429%20640q0%20-209%20-32%20-365.5t-87.5%20-257t-140.5%20-162.5t-181.5%20-86.5t-219.5%20-24.5%20t-219.5%2024.5t-181.5%2086.5t-140.5%20162.5t-87.5%20257t-32%20365.5t32%20365.5t87.5%20257t140.5%20162.5t181.5%2086.5t219.5%2024.5t219.5%20-24.5t181.5%20-86.5t140.5%20-162.5t87.5%20-257t32%20-365.5z"
            ],
            "\uf294": [
                1024.0,
                "M596%20113l173%20172l-173%20172v-344zM596%20823l173%20172l-173%20172v-344zM628%20640l356%20-356l-539%20-540v711l-297%20-296l-108%20108l372%20373l-372%20373l108%20108l297%20-296v711l539%20-540z"
            ],
            "\uf295": [
                1536.0,
                "M1280%20256q0%2052%20-38%2090t-90%2038t-90%20-38t-38%20-90t38%20-90t90%20-38t90%2038t38%2090zM512%201024q0%2052%20-38%2090t-90%2038t-90%20-38t-38%20-90t38%20-90t90%20-38t90%2038t38%2090zM1536%20256q0%20-159%20-112.5%20-271.5t-271.5%20-112.5t-271.5%20112.5t-112.5%20271.5t112.5%20271.5t271.5%20112.5t271.5%20-112.5%20t112.5%20-271.5zM1440%201344q0%20-20%20-13%20-38l-1056%20-1408q-19%20-26%20-51%20-26h-160q-26%200%20-45%2019t-19%2045q0%2020%2013%2038l1056%201408q19%2026%2051%2026h160q26%200%2045%20-19t19%20-45zM768%201024q0%20-159%20-112.5%20-271.5t-271.5%20-112.5t-271.5%20112.5t-112.5%20271.5t112.5%20271.5t271.5%20112.5%20t271.5%20-112.5t112.5%20-271.5z"
            ],
            "\uf296": [
                1792.0,
                "M104%20830l792%20-1015l-868%20630q-18%2013%20-25%2034.5t0%2042.5l101%20308v0zM566%20830h660l-330%20-1015v0zM368%201442l198%20-612h-462l198%20612q8%2023%2033%2023t33%20-23zM1688%20830l101%20-308q7%20-21%200%20-42.5t-25%20-34.5l-868%20-630l792%201015v0zM1688%20830h-462l198%20612q8%2023%2033%2023t33%20-23z"
            ],
            "\uf297": [
                1792.0,
                "M384%20704h160v224h-160v-224zM1221%20372v92q-104%20-36%20-243%20-38q-135%20-1%20-259.5%2046.5t-220.5%20122.5l1%20-96q88%20-80%20212%20-128.5t272%20-47.5q129%200%20238%2049zM640%20704h640v224h-640v-224zM1792%20736q0%20-187%20-99%20-352q89%20-102%2089%20-229q0%20-157%20-129.5%20-268t-313.5%20-111%20q-122%200%20-225%2052.5t-161%20140.5q-19%20-1%20-57%20-1t-57%201q-58%20-88%20-161%20-140.5t-225%20-52.5q-184%200%20-313.5%20111t-129.5%20268q0%20127%2089%20229q-99%20165%20-99%20352q0%20209%20120%20385.5t326.5%20279.5t449.5%20103t449.5%20-103t326.5%20-279.5t120%20-385.5z"
            ],
            "\uf298": [
                1536.0,
                "M515%20625v-128h-252v128h252zM515%20880v-127h-252v127h252zM1273%20369v-128h-341v128h341zM1273%20625v-128h-672v128h672zM1273%20880v-127h-672v127h672zM1408%2020v1240q0%208%20-6%2014t-14%206h-32l-378%20-256l-210%20171l-210%20-171l-378%20256h-32q-8%200%20-14%20-6t-6%20-14v-1240q0%20-8%206%20-14%20t14%20-6h1240q8%200%2014%206t6%2014zM553%201130l185%20150h-406zM983%201130l221%20150h-406zM1536%201260v-1240q0%20-62%20-43%20-105t-105%20-43h-1240q-62%200%20-105%2043t-43%20105v1240q0%2062%2043%20105t105%2043h1240q62%200%20105%20-43t43%20-105z"
            ],
            "\uf299": [
                1792.0,
                "M896%20720q-104%20196%20-160%20278q-139%20202%20-347%20318q-34%2019%20-70%2036q-89%2040%20-94%2032t34%20-38l39%20-31q62%20-43%20112.5%20-93.5t94.5%20-116.5t70.5%20-113t70.5%20-131q9%20-17%2013%20-25q44%20-84%2084%20-153t98%20-154t115.5%20-150t131%20-123.5t148.5%20-90.5q153%20-66%20154%20-60q1%203%20-49%2037q-53%2036%20-81%2057%20q-77%2058%20-179%20211t-185%20310zM549%20177q-76%2060%20-132.5%20125t-98%20143.5t-71%20154.5t-58.5%20186t-52%20209t-60.5%20252t-76.5%20289q273%200%20497.5%20-36t379%20-92t271%20-144.5t185.5%20-172.5t110%20-198.5t56%20-199.5t12.5%20-198.5t-9.5%20-173t-20%20-143.5t-13%20-107l323%20-327h-104l-281%20285%20q-22%20-2%20-91.5%20-14t-121.5%20-19t-138%20-6t-160.5%2017t-167.5%2059t-179%20111z"
            ],
            "\uf29a": [
                1792.0,
                "M1374%20879q-6%2026%20-28.5%2039.5t-48.5%207.5q-261%20-62%20-401%20-62t-401%2062q-26%206%20-48.5%20-7.5t-28.5%20-39.5t7.5%20-48.5t39.5%20-28.5q194%20-46%20303%20-58q-2%20-158%20-15.5%20-269t-26.5%20-155.5t-41%20-115.5l-9%20-21q-10%20-25%201%20-49t36%20-34q9%20-4%2023%20-4q44%200%2060%2041l8%2020q54%20139%2071%20259h42%20q17%20-120%2071%20-259l8%20-20q16%20-41%2060%20-41q14%200%2023%204q25%2010%2036%2034t1%2049l-9%2021q-28%2071%20-41%20115.5t-26.5%20155.5t-15.5%20269q109%2012%20303%2058q26%206%2039.5%2028.5t7.5%2048.5zM1024%201024q0%2053%20-37.5%2090.5t-90.5%2037.5t-90.5%20-37.5t-37.5%20-90.5t37.5%20-90.5t90.5%20-37.5t90.5%2037.5t37.5%2090.5z%20M1600%20640q0%20-143%20-55.5%20-273.5t-150%20-225t-225%20-150t-273.5%20-55.5t-273.5%2055.5t-225%20150t-150%20225t-55.5%20273.5t55.5%20273.5t150%20225t225%20150t273.5%2055.5t273.5%20-55.5t225%20-150t150%20-225t55.5%20-273.5zM896%201408q-156%200%20-298%20-61t-245%20-164t-164%20-245t-61%20-298t61%20-298%20t164%20-245t245%20-164t298%20-61t298%2061t245%20164t164%20245t61%20298t-61%20298t-164%20245t-245%20164t-298%2061zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf29b": [
                1536.0,
                "M1438%20723q34%20-35%2029%20-82l-44%20-551q-4%20-42%20-34.5%20-70t-71.5%20-28q-6%200%20-9%201q-44%203%20-72.5%2036.5t-25.5%2077.5l35%20429l-143%20-8q55%20-113%2055%20-240q0%20-216%20-148%20-372l-137%20137q91%20101%2091%20235q0%20145%20-102.5%20248t-247.5%20103q-134%200%20-236%20-92l-137%20138q120%20114%20284%20141l264%20300%20l-149%2087l-181%20-161q-33%20-30%20-77%20-27.5t-73%2035.5t-26.5%2077t34.5%2073l239%20213q26%2023%2060%2026.5t64%20-14.5l488%20-283q36%20-21%2048%20-68q17%20-67%20-26%20-117l-205%20-232l371%2020q49%203%2083%20-32zM1240%201180q-74%200%20-126%2052t-52%20126t52%20126t126%2052t126.5%20-52t52.5%20-126t-52.5%20-126t-126.5%20-52z%20M613%20-62q106%200%20196%2061l139%20-139q-146%20-116%20-335%20-116q-148%200%20-273.5%2073t-198.5%20198t-73%20273q0%20188%20116%20336l139%20-139q-60%20-88%20-60%20-197q0%20-145%20102.5%20-247.5t247.5%20-102.5z"
            ],
            "\uf29c": [
                1536.0,
                "M880%20336v-160q0%20-14%20-9%20-23t-23%20-9h-160q-14%200%20-23%209t-9%2023v160q0%2014%209%2023t23%209h160q14%200%2023%20-9t9%20-23zM1136%20832q0%20-50%20-15%20-90t-45.5%20-69t-52%20-44t-59.5%20-36q-32%20-18%20-46.5%20-28t-26%20-24t-11.5%20-29v-32q0%20-14%20-9%20-23t-23%20-9h-160q-14%200%20-23%209t-9%2023v68q0%2035%2010.5%2064.5%20t24%2047.5t39%2035.5t41%2025.5t44.5%2021q53%2025%2075%2043t22%2049q0%2042%20-43.5%2071.5t-95.5%2029.5q-56%200%20-95%20-27q-29%20-20%20-80%20-83q-9%20-12%20-25%20-12q-11%200%20-19%206l-108%2082q-10%207%20-12%2020t5%2023q122%20192%20349%20192q129%200%20238.5%20-89.5t109.5%20-214.5zM768%201280q-130%200%20-248.5%20-51t-204%20-136.5%20t-136.5%20-204t-51%20-248.5t51%20-248.5t136.5%20-204t204%20-136.5t248.5%20-51t248.5%2051t204%20136.5t136.5%20204t51%20248.5t-51%20248.5t-136.5%20204t-204%20136.5t-248.5%2051zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5%20t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf29d": [
                1408.0,
                "M366%201225q-64%200%20-110%2045.5t-46%20110.5q0%2064%2046%20109.5t110%2045.5t109.5%20-45.5t45.5%20-109.5q0%20-65%20-45.5%20-110.5t-109.5%20-45.5zM917%20583q0%20-50%20-30%20-67.5t-63.5%20-6.5t-47.5%2034l-367%20438q-7%2012%20-14%2015.5t-11%201.5l-3%20-3q-7%20-8%204%20-21l122%20-139l1%20-354l-161%20-457%20q-67%20-192%20-92%20-234q-15%20-26%20-28%20-32q-50%20-26%20-103%20-1q-29%2013%20-41.5%2043t-9.5%2057q2%2017%20197%20618l5%20416l-85%20-164l35%20-222q4%20-24%20-1%20-42t-14%20-27.5t-19%20-16t-17%20-7.5l-7%20-2q-19%20-3%20-34.5%203t-24%2016t-14%2022t-7.5%2019.5t-2%209.5l-46%20299l211%20381q23%2034%20113%2034q75%200%20107%20-40l424%20-521%20q7%20-5%2014%20-17l3%20-3l-1%20-1q7%20-13%207%20-29zM514%20433q43%20-113%2088.5%20-225t69.5%20-168l24%20-55q36%20-93%2042%20-125q11%20-70%20-36%20-97q-35%20-22%20-66%20-16t-51%2022t-29%2035h-1q-6%2016%20-8%2025l-124%20351zM1338%20-159q31%20-49%2031%20-57q0%20-5%20-3%20-7q-9%20-5%20-14.5%200.5t-15.5%2026t-16%2030.5q-114%20172%20-423%20661%20q3%20-1%207%201t7%204l3%202q11%209%2011%2017z"
            ],
            "\uf29e": [
                2304.0,
                "M504%20542h171l-1%20265zM1530%20641q0%2087%20-50.5%20140t-146.5%2053h-54v-388h52q91%200%20145%2057t54%20138zM956%201018l1%20-756q0%20-14%20-9.5%20-24t-23.5%20-10h-216q-14%200%20-23.5%2010t-9.5%2024v62h-291l-55%20-81q-10%20-15%20-28%20-15h-267q-21%200%20-30.5%2018t3.5%2035l556%20757q9%2014%2027%2014h332q14%200%2024%20-10%20t10%20-24zM1783%20641q0%20-193%20-125.5%20-303t-324.5%20-110h-270q-14%200%20-24%2010t-10%2024v756q0%2014%2010%2024t24%2010h268q200%200%20326%20-109t126%20-302zM1939%20640q0%20-11%20-0.5%20-29t-8%20-71.5t-21.5%20-102t-44.5%20-108t-73.5%20-102.5h-51q38%2045%2066.5%20104.5t41.5%20112t21%2098t9%2072.5l1%2027q0%208%20-0.5%2022.5%20t-7.5%2060t-20%2091.5t-41%20111.5t-66%20124.5h43q41%20-47%2072%20-107t45.5%20-111.5t23%20-96t10.5%20-70.5zM2123%20640q0%20-11%20-0.5%20-29t-8%20-71.5t-21.5%20-102t-45%20-108t-74%20-102.5h-51q38%2045%2066.5%20104.5t41.5%20112t21%2098t9%2072.5l1%2027q0%208%20-0.5%2022.5t-7.5%2060t-19.5%2091.5t-40.5%20111.5t-66%20124.5%20h43q41%20-47%2072%20-107t45.5%20-111.5t23%20-96t10.5%20-70.5zM2304%20640q0%20-11%20-0.5%20-29t-8%20-71.5t-21.5%20-102t-44.5%20-108t-73.5%20-102.5h-51q38%2045%2066%20104.5t41%20112t21%2098t9%2072.5l1%2027q0%208%20-0.5%2022.5t-7.5%2060t-19.5%2091.5t-40.5%20111.5t-66%20124.5h43q41%20-47%2072%20-107t45.5%20-111.5t23%20-96%20t9.5%20-70.5z"
            ],
            "\uf2a0": [
                1408.0,
                "M617%20-153q0%2011%20-13%2058t-31%20107t-20%2069q-1%204%20-5%2026.5t-8.5%2036t-13.5%2021.5q-15%2014%20-51%2014q-23%200%20-70%20-5.5t-71%20-5.5q-34%200%20-47%2011q-6%205%20-11%2015.5t-7.5%2020t-6.5%2024t-5%2018.5q-37%20128%20-37%20255t37%20255q1%204%205%2018.5t6.5%2024t7.5%2020t11%2015.5q13%2011%2047%2011q24%200%2071%20-5.5t70%20-5.5%20q36%200%2051%2014q9%208%2013.5%2021.5t8.5%2036t5%2026.5q2%209%2020%2069t31%20107t13%2058q0%2022%20-43.5%2052.5t-75.5%2042.5q-20%208%20-45%208q-34%200%20-98%20-18q-57%20-17%20-96.5%20-40.5t-71%20-66t-46%20-70t-45.5%20-94.5q-6%20-12%20-9%20-19q-49%20-107%20-68%20-216t-19%20-244t19%20-244t68%20-216q56%20-122%2083%20-161q63%20-91%20179%20-127%20l6%20-2q64%20-18%2098%20-18q25%200%2045%208q32%2012%2075.5%2042.5t43.5%2052.5zM776%20760q-26%200%20-45%2019t-19%2045.5t19%2045.5q37%2037%2037%2090q0%2052%20-37%2091q-19%2019%20-19%2045t19%2045t45%2019t45%20-19q75%20-75%2075%20-181t-75%20-181q-21%20-19%20-45%20-19zM957%20579q-27%200%20-45%2019q-19%2019%20-19%2045t19%2045q112%20114%20112%20272%20t-112%20272q-19%2019%20-19%2045t19%2045t45%2019t45%20-19q150%20-150%20150%20-362t-150%20-362q-18%20-19%20-45%20-19zM1138%20398q-27%200%20-45%2019q-19%2019%20-19%2045t19%2045q90%2091%20138.5%20208t48.5%20245t-48.5%20245t-138.5%20208q-19%2019%20-19%2045t19%2045t45%2019t45%20-19q109%20-109%20167%20-249t58%20-294t-58%20-294t-167%20-249%20q-18%20-19%20-45%20-19z"
            ],
            "\uf2a1": [
                2176.0,
                "M192%20352q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM704%20352q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM704%20864q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM1472%20352%20q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM1984%20352q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM1472%20864q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM1984%20864%20q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM1984%201376q-66%200%20-113%20-47t-47%20-113t47%20-113t113%20-47t113%2047t47%20113t-47%20113t-113%2047zM384%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM896%20192q0%20-80%20-56%20-136%20t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM384%20704q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM896%20704q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM384%201216q0%20-80%20-56%20-136t-136%20-56%20t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM1664%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM896%201216q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM2176%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056%20t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM1664%20704q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM2176%20704q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136zM1664%201216q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136%20t56%20136t136%2056t136%20-56t56%20-136zM2176%201216q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136z"
            ],
            "\uf2a2": [
                1792.0,
                "M128%20-192q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019t45%20-19t19%20-45zM320%200q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019t45%20-19t19%20-45zM365%20365l256%20-256l-90%20-90l-256%20256zM704%20384q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019t45%20-19t19%20-45z%20M1411%20704q0%20-59%20-11.5%20-108.5t-37.5%20-93.5t-44%20-67.5t-53%20-64.5q-31%20-35%20-45.5%20-54t-33.5%20-50t-26.5%20-64t-7.5%20-74q0%20-159%20-112.5%20-271.5t-271.5%20-112.5q-26%200%20-45%2019t-19%2045t19%2045t45%2019q106%200%20181%2075t75%20181q0%2057%2011.5%20105.5t37%2091t43.5%2066.5t52%2063q40%2046%2059.5%2072%20t37.5%2074.5t18%20103.5q0%20185%20-131.5%20316.5t-316.5%20131.5t-316.5%20-131.5t-131.5%20-316.5q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045q0%20117%2045.5%20223.5t123%20184t184%20123t223.5%2045.5t223.5%20-45.5t184%20-123t123%20-184t45.5%20-223.5zM896%20576q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045%20t45%2019t45%20-19t19%20-45zM1184%20704q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045q0%2093%20-65.5%20158.5t-158.5%2065.5q-92%200%20-158%20-65.5t-66%20-158.5q0%20-26%20-19%20-45t-45%20-19t-45%2019t-19%2045q0%20146%20103%20249t249%20103t249%20-103t103%20-249zM1578%20993q10%20-25%20-1%20-49t-36%20-34q-9%20-4%20-23%20-4%20q-19%200%20-35.5%2011t-23.5%2030q-68%20178%20-224%20295q-21%2016%20-25%2042t12%2047q17%2021%2043%2025t47%20-12q183%20-137%20266%20-351zM1788%201074q9%20-25%20-1.5%20-49t-35.5%20-34q-11%20-4%20-23%20-4q-44%200%20-60%2041q-92%20238%20-297%20393q-22%2016%20-25.5%2042t12.5%2047q16%2022%2042%2025.5t47%20-12.5q235%20-175%20341%20-449z"
            ],
            "\uf2a3": [
                2304.0,
                "M1032%20576q-59%202%20-84%2055q-17%2034%20-48%2053.5t-68%2019.5q-53%200%20-90.5%20-37.5t-37.5%20-90.5q0%20-56%2036%20-89l10%20-8q34%20-31%2082%20-31q37%200%2068%2019.5t48%2053.5q25%2053%2084%2055zM1600%20704q0%2056%20-36%2089l-10%208q-34%2031%20-82%2031q-37%200%20-68%20-19.5t-48%20-53.5q-25%20-53%20-84%20-55q59%20-2%2084%20-55%20q17%20-34%2048%20-53.5t68%20-19.5q53%200%2090.5%2037.5t37.5%2090.5zM1174%20925q-17%20-35%20-55%20-48t-73%204q-62%2031%20-134%2031q-51%200%20-99%20-17q3%200%209.5%200.5t9.5%200.5q92%200%20170.5%20-50t118.5%20-133q17%20-36%203.5%20-73.5t-49.5%20-54.5q-18%20-9%20-39%20-9q21%200%2039%20-9q36%20-17%2049.5%20-54.5t-3.5%20-73.5%20q-40%20-83%20-118.5%20-133t-170.5%20-50h-6q-16%202%20-44%204l-290%2027l-239%20-120q-14%20-7%20-29%20-7q-40%200%20-57%2035l-160%20320q-11%2023%20-4%2047.5t29%2037.5l209%20119l148%20267q17%20155%2091.5%20291.5t195.5%20236.5q31%2025%2070.5%2021.5t64.5%20-34.5t21.5%20-70t-34.5%20-65q-70%20-59%20-117%20-128q123%2084%20267%20101%20q40%205%2071.5%20-19t35.5%20-64q5%20-40%20-19%20-71.5t-64%20-35.5q-84%20-10%20-159%20-55q46%2010%2099%2010q115%200%20218%20-50q36%20-18%2049%20-55.5t-5%20-73.5zM2137%201085l160%20-320q11%20-23%204%20-47.5t-29%20-37.5l-209%20-119l-148%20-267q-17%20-155%20-91.5%20-291.5t-195.5%20-236.5q-26%20-22%20-61%20-22q-45%200%20-74%2035%20q-25%2031%20-21.5%2070t34.5%2065q70%2059%20117%20128q-123%20-84%20-267%20-101q-4%20-1%20-12%20-1q-36%200%20-63.5%2024t-31.5%2060q-5%2040%2019%2071.5t64%2035.5q84%2010%20159%2055q-46%20-10%20-99%20-10q-115%200%20-218%2050q-36%2018%20-49%2055.5t5%2073.5q17%2035%2055%2048t73%20-4q62%20-31%20134%20-31q51%200%2099%2017q-3%200%20-9.5%20-0.5t-9.5%20-0.5%20q-92%200%20-170.5%2050t-118.5%20133q-17%2036%20-3.5%2073.5t49.5%2054.5q18%209%2039%209q-21%200%20-39%209q-36%2017%20-49.5%2054.5t3.5%2073.5q40%2083%20118.5%20133t170.5%2050h6h1q14%20-2%2042%20-4l291%20-27l239%20120q14%207%2029%207q40%200%2057%20-35z"
            ],
            "\uf2a4": [
                1792.0,
                "M1056%20704q0%20-26%2019%20-45t45%20-19t45%2019t19%2045q0%20146%20-103%20249t-249%20103t-249%20-103t-103%20-249q0%20-26%2019%20-45t45%20-19t45%2019t19%2045q0%2093%2066%20158.5t158%2065.5t158%20-65.5t66%20-158.5zM835%201280q-117%200%20-223.5%20-45.5t-184%20-123t-123%20-184t-45.5%20-223.5q0%20-26%2019%20-45t45%20-19t45%2019%20t19%2045q0%20185%20131.5%20316.5t316.5%20131.5t316.5%20-131.5t131.5%20-316.5q0%20-55%20-18%20-103.5t-37.5%20-74.5t-59.5%20-72q-34%20-39%20-52%20-63t-43.5%20-66.5t-37%20-91t-11.5%20-105.5q0%20-106%20-75%20-181t-181%20-75q-26%200%20-45%20-19t-19%20-45t19%20-45t45%20-19q159%200%20271.5%20112.5t112.5%20271.5q0%2041%207.5%2074%20t26.5%2064t33.5%2050t45.5%2054q35%2041%2053%2064.5t44%2067.5t37.5%2093.5t11.5%20108.5q0%20117%20-45.5%20223.5t-123%20184t-184%20123t-223.5%2045.5zM591%20561l226%20-226l-579%20-579q-12%20-12%20-29%20-12t-29%2012l-168%20168q-12%2012%20-12%2029t12%2029zM1612%201524l168%20-168q12%20-12%2012%20-29t-12%20-30l-233%20-233%20l-26%20-25l-71%20-71q-66%20153%20-195%20258l91%2091l207%20207q13%2012%2030%2012t29%20-12z"
            ],
            "\uf2a5": [
                1536.0,
                "M866%201021q0%20-27%20-13%20-94q-11%20-50%20-31.5%20-150t-30.5%20-150q-2%20-11%20-4.5%20-12.5t-13.5%20-2.5q-20%20-2%20-31%20-2q-58%200%20-84%2049.5t-26%20113.5q0%2088%2035%20174t103%20124q28%2014%2051%2014q28%200%2036.5%20-16.5t8.5%20-47.5zM1352%20597q0%2014%20-39%2075.5t-52%2066.5q-21%208%20-34%208q-91%200%20-226%20-77l-2%202%20q3%2022%2027.5%20135t24.5%20178q0%20233%20-242%20233q-24%200%20-68%20-6q-94%20-17%20-168.5%20-89.5t-111.5%20-166.5t-37%20-189q0%20-146%2080.5%20-225t227.5%20-79q25%200%2025%20-3t-1%20-5q-4%20-34%20-26%20-117q-14%20-52%20-51.5%20-101t-82.5%20-49q-42%200%20-42%2047q0%2024%2010.5%2047.5t25%2039.5t29.5%2028.5t26%2020t11%208.5q0%203%20-7%2010%20q-24%2022%20-58.5%2036.5t-65.5%2014.5q-35%200%20-63.5%20-34t-41%20-75t-12.5%20-75q0%20-88%2051.5%20-142t138.5%20-54q82%200%20155%2053t117.5%20126t65.5%20153q6%2022%2015.5%2066.5t14.5%2066.5q3%2012%2014%2018q118%2060%20227%2060q48%200%20127%20-18q1%20-1%204%20-1q5%200%209.5%204.5t4.5%208.5zM1536%201120v-960q0%20-119%20-84.5%20-203.5%20t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf2a6": [
                1535.0,
                "M744%201231q0%2024%20-2%2038.5t-8.5%2030t-21%2023t-37.5%207.5q-39%200%20-78%20-23q-105%20-58%20-159%20-190.5t-54%20-269.5q0%20-44%208.5%20-85.5t26.5%20-80.5t52.5%20-62.5t81.5%20-23.5q4%200%2018%20-0.5t20%200t16%203t15%208.5t7%2016q16%2077%2048%20231.5t48%20231.5q19%2091%2019%20146zM1498%20575q0%20-7%20-7.5%20-13.5t-15.5%20-6.5%20l-6%201q-22%203%20-62%2011t-72%2012.5t-63%204.5q-167%200%20-351%20-93q-15%20-8%20-21%20-27q-10%20-36%20-24.5%20-105.5t-22.5%20-100.5q-23%20-91%20-70%20-179.5t-112.5%20-164.5t-154.5%20-123t-185%20-47q-135%200%20-214.5%2083.5t-79.5%20219.5q0%2053%2019.5%20117t63%20116.5t97.5%2052.5q38%200%20120%20-33.5t83%20-61.5%20q0%20-1%20-16.5%20-12.5t-39.5%20-31t-46%20-44.5t-39%20-61t-16%20-74q0%20-33%2016.5%20-53t48.5%20-20q45%200%2085%2031.5t66.5%2078t48%20105.5t32.5%20107t16%2090v9q0%202%20-3.5%203.5t-8.5%201.5h-10t-10%20-0.5t-6%20-0.5q-227%200%20-352%20122.5t-125%20348.5q0%20108%2034.5%20221t96%20210t156%20167.5t204.5%2089.5q52%209%20106%209%20q374%200%20374%20-360q0%20-98%20-38%20-273t-43%20-211l3%20-3q101%2057%20182.5%2088t167.5%2031q22%200%2053%20-13q19%20-7%2080%20-102.5t61%20-116.5z"
            ],
            "\uf2a7": [
                1664.0,
                "M831%20863q32%200%2059%20-18l222%20-148q61%20-40%20110%20-97l146%20-170q40%20-46%2029%20-106l-72%20-413q-6%20-32%20-29.5%20-53.5t-55.5%20-25.5l-527%20-56l-352%20-32h-9q-39%200%20-67.5%2028t-28.5%2068q0%2037%2027%2064t65%2032l260%2032h-448q-41%200%20-69.5%2030t-26.5%2071q2%2039%2032%2065t69%2026l442%201l-521%2064q-41%205%20-66%2037%20t-19%2073q6%2035%2034.5%2057.5t65.5%2022.5h10l481%20-60l-351%2094q-38%2010%20-62%2041.5t-18%2068.5q6%2036%2033%2058.5t62%2022.5q6%200%2020%20-2l448%20-96l217%20-37q1%200%203%20-0.5t3%20-0.5q23%200%2030.5%2023t-12.5%2036l-186%20125q-35%2023%20-42%2063.5t18%2073.5q27%2038%2076%2038zM761%20661l186%20-125l-218%2037l-5%202l-36%2038%20l-238%20262q-1%201%20-2.5%203.5t-2.5%203.5q-24%2031%20-18.5%2070t37.5%2064q31%2023%2068%2017.5t64%20-33.5l142%20-147q-2%20-1%20-5%20-3.5t-4%20-4.5q-32%20-45%20-23%20-99t55%20-85zM1648%201115l15%20-266q4%20-73%20-11%20-147l-48%20-219q-12%20-59%20-67%20-87l-106%20-54q2%2062%20-39%20109l-146%20170q-53%2061%20-117%20103l-222%20148%20q-34%2023%20-76%2023q-51%200%20-88%20-37l-235%20312q-25%2033%20-18%2073.5t41%2063.5q33%2022%2071.5%2014t62.5%20-40l266%20-352l-262%20455q-21%2035%20-10.5%2075t47.5%2059q35%2018%2072.5%206t57.5%20-46l241%20-420l-136%20337q-15%2035%20-4.5%2074t44.5%2056q37%2019%2076%206t56%20-51l193%20-415l101%20-196q8%20-15%2023%20-17.5t27%207.5t11%2026%20l-12%20224q-2%2041%2026%2071t69%2031q39%200%2067%20-28.5t30%20-67.5z"
            ],
            "\uf2a8": [
                1792.0,
                "M335%20180q-2%200%20-6%202q-86%2057%20-168.5%20145t-139.5%20180q-21%2030%20-21%2069q0%209%202%2019t4%2018t7%2018t8.5%2016t10.5%2017t10%2015t12%2015.5t11%2014.5q184%20251%20452%20365q-110%20198%20-110%20211q0%2019%2017%2029q116%2064%20128%2064q18%200%2028%20-16l124%20-229q92%2019%20192%2019q266%200%20497.5%20-137.5t378.5%20-369.5%20q20%20-31%2020%20-69t-20%20-69q-91%20-142%20-218.5%20-253.5t-278.5%20-175.5q110%20-198%20110%20-211q0%20-20%20-17%20-29q-116%20-64%20-127%20-64q-19%200%20-29%2016l-124%20229l-64%20119l-444%20820l7%207q-58%20-24%20-99%20-47q3%20-5%20127%20-234t243%20-449t119%20-223q0%20-7%20-9%20-9q-13%20-3%20-72%20-3q-57%200%20-60%207l-456%20841%20q-39%20-28%20-82%20-68q24%20-43%20214%20-393.5t190%20-354.5q0%20-10%20-11%20-10q-14%200%20-82.5%2022t-72.5%2028l-106%20197l-224%20413q-44%20-53%20-78%20-106q2%20-3%2018%20-25t23%20-34l176%20-327q0%20-10%20-10%20-10zM1165%20282l49%20-91q273%20111%20450%20385q-180%20277%20-459%20389q67%20-64%20103%20-148.5t36%20-176.5%20q0%20-106%20-47%20-200.5t-132%20-157.5zM848%20896q0%20-20%2014%20-34t34%20-14q86%200%20147%20-61t61%20-147q0%20-20%2014%20-34t34%20-14t34%2014t14%2034q0%20126%20-89%20215t-215%2089q-20%200%20-34%20-14t-14%20-34zM1214%20961l-9%204l7%20-7z"
            ],
            "\uf2a9": [
                1280.0,
                "M1050%20430q0%20-215%20-147%20-374q-148%20-161%20-378%20-161q-232%200%20-378%20161q-147%20159%20-147%20374q0%20147%2068%20270.5t189%20196.5t268%2073q96%200%20182%20-31q-32%20-62%20-39%20-126q-66%2028%20-143%2028q-167%200%20-280.5%20-123t-113.5%20-291q0%20-170%20112.5%20-288.5t281.5%20-118.5t281%20118.5t112%20288.5%20q0%2089%20-32%20166q66%2013%20123%2049q41%20-98%2041%20-212zM846%20619q0%20-192%20-79.5%20-345t-238.5%20-253l-14%20-1q-29%200%20-62%205q83%2032%20146.5%20102.5t99.5%20154.5t58.5%20189t30%20192.5t7.5%20178.5q0%2069%20-3%20103q55%20-160%2055%20-326zM791%20947v-2q-73%20214%20-206%20440q88%20-59%20142.5%20-186.5t63.5%20-251.5z%20M1035%20744q-83%200%20-160%2075q218%20120%20290%20247q19%2037%2021%2056q-42%20-94%20-139.5%20-166.5t-204.5%20-97.5q-35%2054%20-35%20113q0%2037%2017%2079t43%2068q46%2044%20157%2074q59%2016%20106%2058.5t74%20100.5q74%20-105%2074%20-253q0%20-109%20-24%20-170q-32%20-77%20-88.5%20-130.5t-130.5%20-53.5z"
            ],
            "\uf2aa": [
                1536.0,
                "M1050%20495q0%2078%20-28%20147q-41%20-25%20-85%20-34q22%20-50%2022%20-114q0%20-117%20-77%20-198.5t-193%20-81.5t-193.5%2081.5t-77.5%20198.5q0%20115%2078%20199.5t193%2084.5q53%200%2098%20-19q4%2043%2027%2087q-60%2021%20-125%2021q-154%200%20-257.5%20-108.5t-103.5%20-263.5t103.5%20-261t257.5%20-106t257.5%20106.5t103.5%20260.5z%20M872%20850q2%20-24%202%20-71q0%20-63%20-5%20-123t-20.5%20-132.5t-40.5%20-130t-68.5%20-106t-100.5%20-70.5q21%20-3%2042%20-3h10q219%20139%20219%20411q0%20116%20-38%20225zM872%20850q-4%2080%20-44%20171.5t-98%20130.5q92%20-156%20142%20-302zM1207%20955q0%20102%20-51%20174q-41%20-86%20-124%20-109q-69%20-19%20-109%20-53.5t-40%20-99.5%20q0%20-40%2024%20-77q74%2017%20140.5%2067t95.5%20115q-4%20-52%20-74.5%20-111.5t-138.5%20-97.5q52%20-52%20110%20-52q51%200%2090%2037t60%2090q17%2042%2017%20117zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960q119%200%20203.5%20-84.5%20t84.5%20-203.5z"
            ],
            "\uf2ab": [
                1536.0,
                "M1279%20388q0%2022%20-22%2027q-67%2015%20-118%2059t-80%20108q-7%2019%20-7%2025q0%2015%2019.5%2026t43%2017t43%2020.5t19.5%2036.5q0%2019%20-18.5%2031.5t-38.5%2012.5q-12%200%20-32%20-8t-31%20-8q-4%200%20-12%202q5%2095%205%20114q0%2079%20-17%20114q-36%2078%20-103%20121.5t-152%2043.5q-199%200%20-275%20-165q-17%20-35%20-17%20-114q0%20-19%205%20-114%20q-4%20-2%20-14%20-2q-12%200%20-32%207.5t-30%207.5q-21%200%20-38.5%20-12t-17.5%20-32q0%20-21%2019.5%20-35.5t43%20-20.5t43%20-17t19.5%20-26q0%20-6%20-7%20-25q-64%20-138%20-198%20-167q-22%20-5%20-22%20-27q0%20-46%20137%20-68q2%20-5%206%20-26t11.5%20-30.5t23.5%20-9.5q12%200%2037.5%204.5t39.5%204.5q35%200%2067%20-15t54%20-32.5t57.5%20-32.5%20t76.5%20-15q43%200%2079%2015t57.5%2032.5t53.5%2032.5t67%2015q14%200%2039.5%20-4t38.5%20-4q16%200%2023%2010t11%2030t6%2025q137%2022%20137%2068zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5%20t103%20-385.5z"
            ],
            "\uf2ac": [
                1664.0,
                "M848%201408q134%201%20240.5%20-68.5t163.5%20-192.5q27%20-58%2027%20-179q0%20-47%20-9%20-191q14%20-7%2028%20-7q18%200%2051%2013.5t51%2013.5q29%200%2056%20-18t27%20-46q0%20-32%20-31.5%20-54t-69%20-31.5t-69%20-29t-31.5%20-47.5q0%20-15%2012%20-43q37%20-82%20102.5%20-150t144.5%20-101q28%20-12%2080%20-23q28%20-6%2028%20-35%20q0%20-70%20-219%20-103q-7%20-11%20-11%20-39t-14%20-46.5t-33%20-18.5q-20%200%20-62%206.5t-64%206.5q-37%200%20-62%20-5q-32%20-5%20-63%20-22.5t-58%20-38t-58%20-40.5t-76%20-33.5t-99%20-13.5q-52%200%20-96.5%2013.5t-75%2033.5t-57.5%2040.5t-58%2038t-62%2022.5q-26%205%20-63%205q-24%200%20-65.5%20-7.5t-58.5%20-7.5q-25%200%20-35%2018.5%20t-14%2047.5t-11%2040q-219%2033%20-219%20103q0%2029%2028%2035q52%2011%2080%2023q78%2032%20144.5%20101t102.5%20150q12%2028%2012%2043q0%2028%20-31.5%2047.5t-69.5%2029.5t-69.5%2031.5t-31.5%2052.5q0%2027%2026%2045.5t55%2018.5q15%200%2048%20-13t53%20-13q18%200%2032%207q-9%20142%20-9%20190q0%20122%2027%20180q64%20137%20172%20198t264%2063z"
            ],
            "\uf2ad": [
                1536.0,
                "M1280%20388q0%2022%20-22%2027q-67%2014%20-118%2058t-80%20109q-7%2014%20-7%2025q0%2015%2019.5%2026t42.5%2017t42.5%2020.5t19.5%2036.5q0%2019%20-18.5%2031.5t-38.5%2012.5q-11%200%20-31%20-8t-32%20-8q-4%200%20-12%202q5%2063%205%20115q0%2078%20-17%20114q-36%2078%20-102.5%20121.5t-152.5%2043.5q-198%200%20-275%20-165q-18%20-38%20-18%20-115%20q0%20-38%206%20-114q-10%20-2%20-15%20-2q-11%200%20-31.5%208t-30.5%208q-20%200%20-37.5%20-12.5t-17.5%20-32.5q0%20-21%2019.5%20-35.5t42.5%20-20.5t42.5%20-17t19.5%20-26q0%20-11%20-7%20-25q-64%20-138%20-198%20-167q-22%20-5%20-22%20-27q0%20-47%20138%20-69q2%20-5%206%20-26t11%20-30.5t23%20-9.5q13%200%2038.5%205t38.5%205q35%200%2067.5%20-15%20t54.5%20-32.5t57.5%20-32.5t76.5%20-15q43%200%2079%2015t57.5%2032.5t54%2032.5t67.5%2015q13%200%2039%20-4.5t39%20-4.5q15%200%2022.5%209.5t11.5%2031t5%2024.5q138%2022%20138%2069zM1536%201120v-960q0%20-119%20-84.5%20-203.5t-203.5%20-84.5h-960q-119%200%20-203.5%2084.5t-84.5%20203.5v960q0%20119%2084.5%20203.5t203.5%2084.5h960%20q119%200%20203.5%20-84.5t84.5%20-203.5z"
            ],
            "\uf2ae": [
                2304.0,
                "M2304%201536q-69%20-46%20-125%20-92t-89%20-81t-59.5%20-71.5t-37.5%20-57.5t-22%20-44.5t-14%20-29.5q-10%20-18%20-35.5%20-136.5t-48.5%20-164.5q-15%20-29%20-50%20-60.5t-67.5%20-50.5t-72.5%20-41t-48%20-28q-47%20-31%20-151%20-231q-341%2014%20-630%20-158q-92%20-53%20-303%20-179q47%2016%2086%2031t55%2022l15%207%20q71%2027%20163%2064.5t133.5%2053.5t108%2034.5t142.5%2031.5q186%2031%20465%20-7q1%200%2010%20-3q11%20-6%2014%20-17t-3%20-22l-194%20-345q-15%20-29%20-47%20-22q-128%2024%20-354%2024q-146%200%20-402%20-44.5t-392%20-46.5q-82%20-1%20-149%2013t-107%2037t-61%2040t-33%2034l-1%201v2q0%206%206%206q138%200%20371%2055q192%20366%20374.5%20524t383.5%20158%20q5%200%2014.5%20-0.5t38%20-5t55%20-12t61.5%20-24.5t63%20-39.5t54%20-59t40%20-82.5l102%20177q2%204%2021%2042.5t44.5%2086.5t61%20109.5t84%20133.5t100.5%20137q66%2082%20128%20141.5t121.5%2096.5t92.5%2053.5t88%2039.5z"
            ],
            "\uf2b0": [
                1536.0,
                "M1322%20640q0%20-45%20-5%20-76l-236%2014l224%20-78q-19%20-73%20-58%20-141l-214%20103l177%20-158q-44%20-61%20-107%20-108l-157%20178l103%20-215q-61%20-37%20-140%20-59l-79%20228l14%20-240q-38%20-6%20-76%20-6t-76%206l14%20238l-78%20-226q-74%2019%20-140%2059l103%20215l-157%20-178q-59%2043%20-108%20108l178%20158l-214%20-104%20q-39%2069%20-58%20141l224%2079l-237%20-14q-5%2042%20-5%2076q0%2035%205%2077l238%20-14l-225%2079q19%2073%2058%20140l214%20-104l-177%20159q46%2061%20107%20108l158%20-178l-103%20215q67%2039%20140%2058l77%20-224l-13%20236q36%206%2075%206q38%200%2076%20-6l-14%20-237l78%20225q74%20-19%20140%20-59l-103%20-214l158%20178q61%20-47%20107%20-108%20l-177%20-159l213%20104q37%20-62%2058%20-141l-224%20-78l237%2014q5%20-31%205%20-77zM1352%20640q0%20160%20-78.5%20295.5t-213%20214t-292.5%2078.5q-119%200%20-227%20-46.5t-186.5%20-125t-124.5%20-187.5t-46%20-229q0%20-119%2046%20-228t124.5%20-187.5t186.5%20-125t227%20-46.5q158%200%20292.5%2078.5t213%20214t78.5%20294.5z%20M1425%201023v-766l-657%20-383l-657%20383v766l657%20383zM768%20-183l708%20412v823l-708%20411l-708%20-411v-823zM1536%201088v-896l-768%20-448l-768%20448v896l768%20448z"
            ],
            "\uf2b1": [
                1664.0,
                "M339%201318h691l-26%20-72h-665q-110%200%20-188.5%20-79t-78.5%20-189v-771q0%20-95%2060.5%20-169.5t153.5%20-93.5q23%20-5%2098%20-5v-72h-45q-140%200%20-239.5%20100t-99.5%20240v771q0%20140%2099.5%20240t239.5%20100zM1190%201536h247l-482%20-1294q-23%20-61%20-40.5%20-103.5t-45%20-98t-54%20-93.5t-64.5%20-78.5%20t-79.5%20-65t-95.5%20-41t-116%20-18.5v195q163%2026%20220%20182q20%2052%2020%20105q0%2054%20-20%20106l-285%20733h228l187%20-585zM1664%20978v-1111h-795q37%2055%2045%2073h678v1038q0%2085%20-49.5%20155t-129.5%2099l25%2067q101%20-34%20163.5%20-123.5t62.5%20-197.5z"
            ],
            "\uf2b2": [
                1792.0,
                "M852%201227q0%20-29%20-17%20-52.5t-45%20-23.5t-45%2023.5t-17%2052.5t17%2052.5t45%2023.5t45%20-23.5t17%20-52.5zM688%20-149v114q0%2030%20-20.5%2051.5t-50.5%2021.5t-50%20-21.5t-20%20-51.5v-114q0%20-30%2020.5%20-52t49.5%20-22q30%200%2050.5%2022t20.5%2052zM860%20-149v114q0%2030%20-20%2051.5t-50%2021.5t-50.5%20-21.5%20t-20.5%20-51.5v-114q0%20-30%2020.5%20-52t50.5%20-22q29%200%2049.5%2022t20.5%2052zM1034%20-149v114q0%2030%20-20.5%2051.5t-50.5%2021.5t-50.5%20-21.5t-20.5%20-51.5v-114q0%20-30%2020.5%20-52t50.5%20-22t50.5%2022t20.5%2052zM1208%20-149v114q0%2030%20-20.5%2051.5t-50.5%2021.5t-50.5%20-21.5t-20.5%20-51.5v-114%20q0%20-30%2020.5%20-52t50.5%20-22t50.5%2022t20.5%2052zM1476%20535q-84%20-160%20-232%20-259.5t-323%20-99.5q-123%200%20-229.5%2051.5t-178.5%20137t-113%20197.5t-41%20232q0%2088%2021%20174q-104%20-175%20-104%20-390q0%20-162%2065%20-312t185%20-251q30%2057%2091%2057q56%200%2086%20-50q32%2050%2087%2050q56%200%2086%20-50q32%2050%2087%2050t87%20-50%20q30%2050%2086%2050q28%200%2052.5%20-15.5t37.5%20-40.5q112%2094%20177%20231.5t73%20287.5zM1326%20564q0%2075%20-72%2075q-17%200%20-47%20-6q-95%20-19%20-149%20-19q-226%200%20-226%20243q0%2086%2030%20204q-83%20-127%20-83%20-275q0%20-150%2089%20-260.5t235%20-110.5q111%200%20210%2070q13%2048%2013%2079zM884%201223q0%2050%20-32%2089.5t-81%2039.5%20t-81%20-39.5t-32%20-89.5q0%20-51%2031.5%20-90.5t81.5%20-39.5t81.5%2039.5t31.5%2090.5zM1513%20884q0%2096%20-37.5%20179t-113%20137t-173.5%2054q-77%200%20-149%20-35t-127%20-94q-48%20-159%20-48%20-268q0%20-104%2045.5%20-157t147.5%20-53q53%200%20142%2019q36%206%2053%206q51%200%2077.5%20-28t26.5%20-80q0%20-26%20-4%20-46%20q75%2068%20117.5%20165.5t42.5%20200.5zM1792%20667q0%20-111%20-33.5%20-249.5t-93.5%20-204.5q-58%20-64%20-195%20-142.5t-228%20-104.5l-4%20-1v-114q0%20-43%20-29.5%20-75t-72.5%20-32q-56%200%20-86%2050q-32%20-50%20-87%20-50t-87%2050q-30%20-50%20-86%20-50q-55%200%20-87%2050q-30%20-50%20-86%20-50q-47%200%20-75%2033.5t-28%2081.5%20q-90%20-68%20-198%20-68q-118%200%20-211%2080q54%201%20106%2020q-113%2031%20-182%20127q32%20-7%2071%20-7q89%200%20164%2046q-192%20192%20-240%20306q-24%2056%20-24%20160q0%2057%209%20125.5t31.5%20146.5t55%20141t86.5%20105t120%2042q59%200%2081%20-52q19%2029%2042%2054q2%203%2012%2013t13%2016q10%2015%2023%2038t25%2042t28%2039q87%20111%20211.5%20177%20t260.5%2066q35%200%2062%20-4q59%2064%20146%2064q83%200%20140%20-57q5%20-5%205%20-12q0%20-5%20-6%20-13.5t-12.5%20-16t-16%20-17l-10.5%20-10.5q17%20-6%2036%20-18t19%20-24q0%20-6%20-16%20-25q157%20-138%20197%20-378q25%2030%2060%2030q45%200%20100%20-49q90%20-80%2090%20-279z"
            ],
            "\uf2b3": [
                1536.0,
                "M917%20631q0%2033%20-6%2064h-362v-132h217q-12%20-76%20-74.5%20-120.5t-142.5%20-44.5q-99%200%20-169%2071.5t-70%20170.5t70%20170.5t169%2071.5q93%200%20153%20-59l104%20101q-108%20100%20-257%20100q-160%200%20-272%20-112.5t-112%20-271.5t112%20-271.5t272%20-112.5q165%200%20266.5%20105t101.5%20270zM1262%20585h109v110%20h-109v110h-110v-110h-110v-110h110v-110h110v110zM1536%20640q0%20-209%20-103%20-385.5t-279.5%20-279.5t-385.5%20-103t-385.5%20103t-279.5%20279.5t-103%20385.5t103%20385.5t279.5%20279.5t385.5%20103t385.5%20-103t279.5%20-279.5t103%20-385.5z"
            ],
            "\uf2b4": [
                1536.0,
                "M1536%201024v-839q0%20-48%20-49%20-62q-174%20-52%20-338%20-52q-73%200%20-215.5%2029.5t-227.5%2029.5q-164%200%20-370%20-48v-338h-160v1368q-63%2025%20-101%2081t-38%20124q0%2091%2064%20155t155%2064t155%20-64t64%20-155q0%20-68%20-38%20-124t-101%20-81v-68q190%2044%20343%2044q99%200%20198%20-15q14%20-2%20111.5%20-22.5t149.5%20-20.5%20q77%200%20165%2018q11%202%2080%2021t89%2019q26%200%2045%20-19t19%20-45z"
            ],
            "\uf2b5": [
                2304.0,
                "M192%20384q40%200%2056%2032t0%2064t-56%2032t-56%20-32t0%20-64t56%20-32zM1665%20442q-10%2013%20-38.5%2050t-41.5%2054t-38%2049t-42.5%2053t-40.5%2047t-45%2049l-125%20-140q-83%20-94%20-208.5%20-92t-205.5%2098q-57%2069%20-56.5%20158t58.5%20157l177%20206q-22%2011%20-51%2016.5t-47.5%206t-56.5%20-0.5t-49%20-1q-92%200%20-158%20-66%20l-158%20-158h-155v-544q5%200%2021%200.5t22%200t19.5%20-2t20.5%20-4.5t17.5%20-8.5t18.5%20-13.5l297%20-292q115%20-111%20227%20-111q78%200%20125%2047q57%20-20%20112.5%208t72.5%2085q74%20-6%20127%2044q20%2018%2036%2045.5t14%2050.5q10%20-10%2043%20-10q43%200%2077%2021t49.5%2053t12%2071.5t-30.5%2073.5zM1824%20384h96v512h-93l-157%20180%20q-66%2076%20-169%2076h-167q-89%200%20-146%20-67l-209%20-243q-28%20-33%20-28%20-75t27%20-75q43%20-51%20110%20-52t111%2049l193%20218q25%2023%2053.5%2021.5t47%20-27t8.5%20-56.5q16%20-19%2056%20-63t60%20-68q29%20-36%2082.5%20-105.5t64.5%20-84.5q52%20-66%2060%20-140zM2112%20384q40%200%2056%2032t0%2064t-56%2032t-56%20-32t0%20-64t56%20-32z%20M2304%20960v-640q0%20-26%20-19%20-45t-45%20-19h-434q-27%20-65%20-82%20-106.5t-125%20-51.5q-33%20-48%20-80.5%20-81.5t-102.5%20-45.5q-42%20-53%20-104.5%20-81.5t-128.5%20-24.5q-60%20-34%20-126%20-39.5t-127.5%2014t-117%2053.5t-103.5%2081l-287%20282h-358q-26%200%20-45%2019t-19%2045v672q0%2026%2019%2045t45%2019h421%20q14%2014%2047%2048t47.5%2048t44%2040t50.5%2037.5t51%2025.5t62%2019.5t68%205.5h117q99%200%20181%20-56q82%2056%20181%2056h167q35%200%2067%20-6t56.5%20-14.5t51.5%20-26.5t44.5%20-31t43%20-39.5t39%20-42t41%20-48t41.5%20-48.5h355q26%200%2045%20-19t19%20-45z"
            ],
            "\uf2b6": [
                1792.0,
                "M1792%20882v-978q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v978q0%2015%2011%2024q8%207%2039%2034.5t41.5%2036t45.5%2037.5t70%2055.5t96%2073t143.5%20107t192.5%20140.5q5%204%2052.5%2040t71.5%2052.5t64%2035t69%2018.5t69%20-18.5t65%20-35.5t71%20-52t52%20-40q110%20-80%20192.5%20-140.5t143.5%20-107%20t96%20-73t70%20-55.5t45.5%20-37.5t41.5%20-36t39%20-34.5q11%20-9%2011%20-24zM1228%20297q263%20191%20345%20252q11%208%2012.5%2020.5t-6.5%2023.5l-38%2052q-8%2011%20-21%2012.5t-24%20-6.5q-231%20-169%20-343%20-250q-5%20-3%20-52%20-39t-71.5%20-52.5t-64.5%20-35t-69%20-18.5t-69%2018.5t-64.5%2035t-71.5%2052.5t-52%2039%20q-186%20134%20-343%20250q-11%208%20-24%206.5t-21%20-12.5l-38%20-52q-8%20-11%20-6.5%20-23.5t12.5%20-20.5q82%20-61%20345%20-252q10%20-8%2050%20-38t65%20-47t64%20-39.5t77.5%20-33.5t75.5%20-11t75.5%2011t79%2034.5t64.5%2039.5t65%2047.5t48%2036.5z"
            ],
            "\uf2b7": [
                1792.0,
                "M1474%20623l39%20-51q8%20-11%206.5%20-23.5t-11.5%20-20.5q-43%20-34%20-126.5%20-98.5t-146.5%20-113t-67%20-51.5q-39%20-32%20-60%20-48t-60.5%20-41t-76.5%20-36.5t-74%20-11.5h-1h-1q-37%200%20-74%2011.5t-76%2036.5t-61%2041.5t-60%2047.5q-5%204%20-65%2050.5t-143.5%20111t-122.5%2094.5q-11%208%20-12.5%2020.5t6.5%2023.5%20l37%2052q8%2011%2021.5%2013t24.5%20-7q94%20-73%20306%20-236q5%20-4%2043.5%20-35t60.5%20-46.5t56.5%20-32.5t58.5%20-17h1h1q24%200%2058.5%2017t56.5%2032.5t60.5%2046.5t43.5%2035q258%20198%20313%20242q11%208%2024%206.5t21%20-12.5zM1664%20-96v928q-90%2083%20-159%20139q-91%2074%20-389%20304q-3%202%20-43%2035t-61%2048t-56%2032.5t-59%2017.5%20h-1h-1q-24%200%20-59%20-17.5t-56%20-32.5t-61%20-48t-43%20-35q-215%20-166%20-315.5%20-245.5t-129.5%20-104t-82%20-74.5q-14%20-12%20-21%20-19v-928q0%20-13%209.5%20-22.5t22.5%20-9.5h1472q13%200%2022.5%209.5t9.5%2022.5zM1792%20832v-928q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v928q0%2056%2041%2094%20q123%20114%20350%20290.5t233%20181.5q36%2030%2059%2047.5t61.5%2042t76%2036.5t74.5%2012h1h1q37%200%2074.5%20-12t76%20-36.5t61.5%20-42t59%20-47.5q43%20-36%20156%20-122t226%20-177t201%20-173q41%20-38%2041%20-94z"
            ],
            "\uf2b8": [
                1536.0,
                "M330%201l202%20-214l-34%20236l-216%20213zM556%20-225l274%20218l-11%20245l-300%20-215zM245%20413l227%20-213l-48%20327l-245%20204zM495%20189l317%20214l-14%20324l-352%20-200zM843%20178l95%20-80l-2%20239l-103%2079q0%20-1%201%20-8.5t0%20-12t-5%20-7.5l-78%20-52l85%20-70q7%20-6%207%20-88zM138%20930l256%20-200l-68%20465%20l-279%20173zM1173%20267l15%20234l-230%20-164l2%20-240zM417%20722l373%20194l-19%20441l-423%20-163zM1270%20357l20%20233l-226%20142l-2%20-105l144%20-95q6%20-4%204%20-9l-7%20-119zM1461%20496l30%20222l-179%20-128l-20%20-228zM1273%20329l-71%2049l-8%20-117q0%20-5%20-4%20-8l-234%20-187q-7%20-5%20-14%200l-98%2083l7%20-161%20q0%20-5%20-4%20-8l-293%20-234q-4%20-2%20-6%20-2q-8%202%20-8%203l-228%20242q-4%204%20-59%20277q-2%207%205%2011l61%2037q-94%2086%20-95%2092l-72%20351q-2%207%206%2012l94%2045q-133%20100%20-135%20108l-96%20466q-2%2010%207%2013l433%20135q5%200%208%20-1l317%20-153q6%20-4%206%20-9l20%20-463q0%20-7%20-6%20-10l-118%20-61l126%20-85q5%20-2%205%20-8l5%20-123l121%2074%20q5%204%2011%200l84%20-56l3%20110q0%206%205%209l206%20126q6%203%2011%200l245%20-135q4%20-4%205%20-7t-6.5%20-60t-17.5%20-124.5t-10%20-70.5q0%20-5%20-4%20-7l-191%20-153q-6%20-5%20-13%200z"
            ],
            "\uf2b9": [
                1664.0,
                "M1201%20298q0%2057%20-5.5%20107t-21%20100.5t-39.5%2086t-64%2058t-91%2022.5q-6%20-4%20-33.5%20-20.5t-42.5%20-24.5t-40.5%20-20t-49%20-17t-46.5%20-5t-46.5%205t-49%2017t-40.5%2020t-42.5%2024.5t-33.5%2020.5q-51%200%20-91%20-22.5t-64%20-58t-39.5%20-86t-21%20-100.5t-5.5%20-107q0%20-73%2042%20-121.5t103%20-48.5h576%20q61%200%20103%2048.5t42%20121.5zM1028%20892q0%20108%20-76.5%20184t-183.5%2076t-183.5%20-76t-76.5%20-184q0%20-107%2076.5%20-183t183.5%20-76t183.5%2076t76.5%20183zM1664%20352v-192q0%20-14%20-9%20-23t-23%20-9h-96v-224q0%20-66%20-47%20-113t-113%20-47h-1216q-66%200%20-113%2047t-47%20113v1472q0%2066%2047%20113t113%2047h1216%20q66%200%20113%20-47t47%20-113v-224h96q14%200%2023%20-9t9%20-23v-192q0%20-14%20-9%20-23t-23%20-9h-96v-128h96q14%200%2023%20-9t9%20-23v-192q0%20-14%20-9%20-23t-23%20-9h-96v-128h96q14%200%2023%20-9t9%20-23z"
            ],
            "\uf2ba": [
                1664.0,
                "M1028%20892q0%20-107%20-76.5%20-183t-183.5%20-76t-183.5%2076t-76.5%20183q0%20108%2076.5%20184t183.5%2076t183.5%20-76t76.5%20-184zM980%20672q46%200%2082.5%20-17t60%20-47.5t39.5%20-67t24%20-81t11.5%20-82.5t3.5%20-79q0%20-67%20-39.5%20-118.5t-105.5%20-51.5h-576q-66%200%20-105.5%2051.5t-39.5%20118.5q0%2048%204.5%2093.5%20t18.5%2098.5t36.5%2091.5t63%2064.5t93.5%2026h5q7%20-4%2032%20-19.5t35.5%20-21t33%20-17t37%20-16t35%20-9t39.5%20-4.5t39.5%204.5t35%209t37%2016t33%2017t35.5%2021t32%2019.5zM1664%20928q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-96v-128h96q13%200%2022.5%20-9.5t9.5%20-22.5v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-96v-128h96%20q13%200%2022.5%20-9.5t9.5%20-22.5v-192q0%20-13%20-9.5%20-22.5t-22.5%20-9.5h-96v-224q0%20-66%20-47%20-113t-113%20-47h-1216q-66%200%20-113%2047t-47%20113v1472q0%2066%2047%20113t113%2047h1216q66%200%20113%20-47t47%20-113v-224h96q13%200%2022.5%20-9.5t9.5%20-22.5v-192zM1408%20-96v1472q0%2013%20-9.5%2022.5t-22.5%209.5h-1216%20q-13%200%20-22.5%20-9.5t-9.5%20-22.5v-1472q0%20-13%209.5%20-22.5t22.5%20-9.5h1216q13%200%2022.5%209.5t9.5%2022.5z"
            ],
            "\uf2bb": [
                2048.0,
                "M1024%20405q0%2064%20-9%20117.5t-29.5%20103t-60.5%2078t-97%2028.5q-6%20-4%20-30%20-18t-37.5%20-21.5t-35.5%20-17.5t-43%20-14.5t-42%20-4.5t-42%204.5t-43%2014.5t-35.5%2017.5t-37.5%2021.5t-30%2018q-57%200%20-97%20-28.5t-60.5%20-78t-29.5%20-103t-9%20-117.5t37%20-106.5t91%20-42.5h512q54%200%2091%2042.5t37%20106.5z%20M867%20925q0%2094%20-66.5%20160.5t-160.5%2066.5t-160.5%20-66.5t-66.5%20-160.5t66.5%20-160.5t160.5%20-66.5t160.5%2066.5t66.5%20160.5zM1792%20416v64q0%2014%20-9%2023t-23%209h-576q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h576q14%200%2023%209t9%2023zM1792%20676v56q0%2015%20-10.5%2025.5t-25.5%2010.5h-568%20q-15%200%20-25.5%20-10.5t-10.5%20-25.5v-56q0%20-15%2010.5%20-25.5t25.5%20-10.5h568q15%200%2025.5%2010.5t10.5%2025.5zM1792%20928v64q0%2014%20-9%2023t-23%209h-576q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h576q14%200%2023%209t9%2023zM2048%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-352v96q0%2014%20-9%2023t-23%209%20h-64q-14%200%20-23%20-9t-9%20-23v-96h-768v96q0%2014%20-9%2023t-23%209h-64q-14%200%20-23%20-9t-9%20-23v-96h-352q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1728q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2bc": [
                2048.0,
                "M1024%20405q0%20-64%20-37%20-106.5t-91%20-42.5h-512q-54%200%20-91%2042.5t-37%20106.5t9%20117.5t29.5%20103t60.5%2078t97%2028.5q6%20-4%2030%20-18t37.5%20-21.5t35.5%20-17.5t43%20-14.5t42%20-4.5t42%204.5t43%2014.5t35.5%2017.5t37.5%2021.5t30%2018q57%200%2097%20-28.5t60.5%20-78t29.5%20-103t9%20-117.5zM867%20925%20q0%20-94%20-66.5%20-160.5t-160.5%20-66.5t-160.5%2066.5t-66.5%20160.5t66.5%20160.5t160.5%2066.5t160.5%20-66.5t66.5%20-160.5zM1792%20480v-64q0%20-14%20-9%20-23t-23%20-9h-576q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h576q14%200%2023%20-9t9%20-23zM1792%20732v-56q0%20-15%20-10.5%20-25.5t-25.5%20-10.5h-568%20q-15%200%20-25.5%2010.5t-10.5%2025.5v56q0%2015%2010.5%2025.5t25.5%2010.5h568q15%200%2025.5%20-10.5t10.5%20-25.5zM1792%20992v-64q0%20-14%20-9%20-23t-23%20-9h-576q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h576q14%200%2023%20-9t9%20-23zM1920%2032v1216q0%2013%20-9.5%2022.5t-22.5%209.5h-1728q-13%200%20-22.5%20-9.5%20t-9.5%20-22.5v-1216q0%20-13%209.5%20-22.5t22.5%20-9.5h352v96q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23v-96h768v96q0%2014%209%2023t23%209h64q14%200%2023%20-9t9%20-23v-96h352q13%200%2022.5%209.5t9.5%2022.5zM2048%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1728q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113%20t113%2047h1728q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2bd": [
                1792.0,
                "M1523%20197q-22%20155%20-87.5%20257.5t-184.5%20118.5q-67%20-74%20-159.5%20-115.5t-195.5%20-41.5t-195.5%2041.5t-159.5%20115.5q-119%20-16%20-184.5%20-118.5t-87.5%20-257.5q106%20-150%20271%20-237.5t356%20-87.5t356%2087.5t271%20237.5zM1280%20896q0%20159%20-112.5%20271.5t-271.5%20112.5t-271.5%20-112.5%20t-112.5%20-271.5t112.5%20-271.5t271.5%20-112.5t271.5%20112.5t112.5%20271.5zM1792%20640q0%20-182%20-71%20-347.5t-190.5%20-286t-285.5%20-191.5t-349%20-71q-182%200%20-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf2be": [
                1792.0,
                "M896%201536q182%200%20348%20-71t286%20-191t191%20-286t71%20-348q0%20-181%20-70.5%20-347t-190.5%20-286t-286%20-191.5t-349%20-71.5t-349%2071t-285.5%20191.5t-190.5%20286t-71%20347.5t71%20348t191%20286t286%20191t348%2071zM1515%20185q149%20205%20149%20455q0%20156%20-61%20298t-164%20245t-245%20164t-298%2061t-298%20-61%20t-245%20-164t-164%20-245t-61%20-298q0%20-250%20149%20-455q66%20327%20306%20327q131%20-128%20313%20-128t313%20128q240%200%20306%20-327zM1280%20832q0%20159%20-112.5%20271.5t-271.5%20112.5t-271.5%20-112.5t-112.5%20-271.5t112.5%20-271.5t271.5%20-112.5t271.5%20112.5t112.5%20271.5z"
            ],
            "\uf2c0": [
                1536.0,
                "M1201%20752q47%20-14%2089.5%20-38t89%20-73t79.5%20-115.5t55%20-172t22%20-236.5q0%20-154%20-100%20-263.5t-241%20-109.5h-854q-141%200%20-241%20109.5t-100%20263.5q0%20131%2022%20236.5t55%20172t79.5%20115.5t89%2073t89.5%2038q-79%20125%20-79%20272q0%20104%2040.5%20198.5t109.5%20163.5t163.5%20109.5t198.5%2040.5%20t198.5%20-40.5t163.5%20-109.5t109.5%20-163.5t40.5%20-198.5q0%20-147%20-79%20-272zM768%201408q-159%200%20-271.5%20-112.5t-112.5%20-271.5t112.5%20-271.5t271.5%20-112.5t271.5%20112.5t112.5%20271.5t-112.5%20271.5t-271.5%20112.5zM1195%20-128q88%200%20150.5%2071.5t62.5%20173.5q0%20239%20-78.5%20377t-225.5%20145%20q-145%20-127%20-336%20-127t-336%20127q-147%20-7%20-225.5%20-145t-78.5%20-377q0%20-102%2062.5%20-173.5t150.5%20-71.5h854z"
            ],
            "\uf2c1": [
                1280.0,
                "M1024%20278q0%20-64%20-37%20-107t-91%20-43h-512q-54%200%20-91%2043t-37%20107t9%20118t29.5%20104t61%2078.5t96.5%2028.5q80%20-75%20188%20-75t188%2075q56%200%2096.5%20-28.5t61%20-78.5t29.5%20-104t9%20-118zM870%20797q0%20-94%20-67.5%20-160.5t-162.5%20-66.5t-162.5%2066.5t-67.5%20160.5t67.5%20160.5t162.5%2066.5%20t162.5%20-66.5t67.5%20-160.5zM1152%20-96v1376h-1024v-1376q0%20-13%209.5%20-22.5t22.5%20-9.5h960q13%200%2022.5%209.5t9.5%2022.5zM1280%201376v-1472q0%20-66%20-47%20-113t-113%20-47h-960q-66%200%20-113%2047t-47%20113v1472q0%2066%2047%20113t113%2047h352v-96q0%20-14%209%20-23t23%20-9h192q14%200%2023%209t9%2023v96h352%20q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2c2": [
                2048.0,
                "M896%20324q0%2054%20-7.5%20100.5t-24.5%2090t-51%2068.5t-81%2025q-64%20-64%20-156%20-64t-156%2064q-47%200%20-81%20-25t-51%20-68.5t-24.5%20-90t-7.5%20-100.5q0%20-55%2031.5%20-93.5t75.5%20-38.5h426q44%200%2075.5%2038.5t31.5%2093.5zM768%20768q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136t56%20-136t136%20-56t136%2056%20t56%20136zM1792%20288v64q0%2014%20-9%2023t-23%209h-704q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h704q14%200%2023%209t9%2023zM1408%20544v64q0%2014%20-9%2023t-23%209h-320q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h320q14%200%2023%209t9%2023zM1792%20544v64q0%2014%20-9%2023t-23%209h-192q-14%200%20-23%20-9t-9%20-23%20v-64q0%20-14%209%20-23t23%20-9h192q14%200%2023%209t9%2023zM1792%20800v64q0%2014%20-9%2023t-23%209h-704q-14%200%20-23%20-9t-9%20-23v-64q0%20-14%209%20-23t23%20-9h704q14%200%2023%209t9%2023zM128%201152h1792v96q0%2014%20-9%2023t-23%209h-1728q-14%200%20-23%20-9t-9%20-23v-96zM2048%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1728%20q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1728q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2c3": [
                2048.0,
                "M896%20324q0%20-55%20-31.5%20-93.5t-75.5%20-38.5h-426q-44%200%20-75.5%2038.5t-31.5%2093.5q0%2054%207.5%20100.5t24.5%2090t51%2068.5t81%2025q64%20-64%20156%20-64t156%2064q47%200%2081%20-25t51%20-68.5t24.5%20-90t7.5%20-100.5zM768%20768q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136t56%20136t136%2056t136%20-56t56%20-136z%20M1792%20352v-64q0%20-14%20-9%20-23t-23%20-9h-704q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h704q14%200%2023%20-9t9%20-23zM1408%20608v-64q0%20-14%20-9%20-23t-23%20-9h-320q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h320q14%200%2023%20-9t9%20-23zM1792%20608v-64q0%20-14%20-9%20-23t-23%20-9h-192q-14%200%20-23%209t-9%2023v64%20q0%2014%209%2023t23%209h192q14%200%2023%20-9t9%20-23zM1792%20864v-64q0%20-14%20-9%20-23t-23%20-9h-704q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h704q14%200%2023%20-9t9%20-23zM1920%2032v1120h-1792v-1120q0%20-13%209.5%20-22.5t22.5%20-9.5h1728q13%200%2022.5%209.5t9.5%2022.5zM2048%201248v-1216q0%20-66%20-47%20-113t-113%20-47%20h-1728q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1728q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2c4": [
                1792.0,
                "M1255%20749q0%20318%20-105%20474.5t-330%20156.5q-222%200%20-326%20-157t-104%20-474q0%20-316%20104%20-471.5t326%20-155.5q74%200%20131%2017q-22%2043%20-39%2073t-44%2065t-53.5%2056.5t-63%2036t-77.5%2014.5q-46%200%20-79%20-16l-49%2097q105%2091%20276%2091q132%200%20215.5%20-54t150.5%20-155q67%20149%2067%20402zM1645%20117h117%20q3%20-27%20-2%20-67t-26.5%20-95t-58%20-100.5t-107%20-78t-162.5%20-32.5q-71%200%20-130.5%2019t-105.5%2056t-79%2078t-66%2096q-97%20-27%20-205%20-27q-150%200%20-292.5%2058t-253%20158.5t-178%20249t-67.5%20317.5q0%20170%2067.5%20319.5t178.5%20250.5t253.5%20159t291.5%2058q121%200%20238.5%20-36t217%20-106t176%20-164.5%20t119.5%20-219t43%20-261.5q0%20-190%20-80.5%20-347.5t-218.5%20-264.5q47%20-70%2093.5%20-106.5t104.5%20-36.5q61%200%2094%2037.5t38%2085.5z"
            ],
            "\uf2c5": [
                2304.0,
                "M453%20-101q0%20-21%20-16%20-37.5t-37%20-16.5q-1%200%20-13%203q-63%2015%20-162%20140q-225%20284%20-225%20676q0%20341%20213%20614q39%2051%2095%20103.5t94%2052.5q19%200%2035%20-13.5t16%20-32.5q0%20-27%20-63%20-90q-98%20-102%20-147%20-184q-119%20-199%20-119%20-449q0%20-281%20123%20-491q50%20-85%20136%20-173q2%20-3%2014.5%20-16t19.5%20-21%20t17%20-20.5t14.5%20-23.5t4.5%20-21zM1796%2033q0%20-29%20-17.5%20-48.5t-46.5%20-19.5h-1081q-26%200%20-45%2019t-19%2045q0%2029%2017.5%2048.5t46.5%2019.5h1081q26%200%2045%20-19t19%20-45zM1581%20644q0%20-134%20-67%20-233q-25%20-38%20-69.5%20-78.5t-83.5%20-60.5q-16%20-10%20-27%20-10q-7%200%20-15%206t-8%2012q0%209%2019%2030t42%2046%20t42%2067.5t19%2088.5q0%2076%20-35%20130q-29%2042%20-46%2042q-3%200%20-3%20-5q0%20-12%207.5%20-35.5t7.5%20-36.5q0%20-22%20-21.5%20-35t-44.5%20-13q-66%200%20-66%2076q0%2015%201.5%2044t1.5%2044q0%2025%20-10%2046q-13%2025%20-42%2053.5t-51%2028.5q-5%200%20-7%20-0.5t-3.5%20-2.5t-1.5%20-6q0%20-2%2016%20-26t16%20-54q0%20-37%20-19%20-68t-46%20-54%20t-53.5%20-46t-45.5%20-54t-19%20-68q0%20-98%2042%20-160q29%20-43%2079%20-63q16%20-5%2017%20-10q1%20-2%201%20-5q0%20-16%20-18%20-16q-6%200%20-33%2011q-119%2043%20-195%20139.5t-76%20218.5q0%2055%2024.5%20115.5t60%20115t70.5%20108.5t59.5%20113.5t24.5%20111.5q0%2053%20-25%2094q-29%2048%20-56%2064q-19%209%20-19%2021q0%2020%2041%2020q50%200%20110%20-29%20q41%20-19%2071%20-44.5t49.5%20-51t33.5%20-62.5t22%20-69t16%20-80q0%20-1%203%20-17.5t4.5%20-25t5.5%20-25t9%20-27t11%20-21.5t14.5%20-16.5t18.5%20-5.5q23%200%2037%2014t14%2037q0%2025%20-20%2067t-20%2052t10%2010q27%200%2093%20-70q72%20-76%20102.5%20-156t30.5%20-186zM2304%20615q0%20-274%20-138%20-503q-19%20-32%20-48%20-72t-68%20-86.5%20t-81%20-77t-74%20-30.5q-16%200%20-31%2015.5t-15%2031.5q0%2015%2029%2050.5t68.5%2077t48.5%2052.5q183%20230%20183%20531q0%20131%20-20.5%20235t-72.5%20211q-58%20119%20-163%20228q-2%203%20-13%2013.5t-16.5%2016.5t-15%2017.5t-15%2020t-9.5%2018.5t-4%2019q0%2019%2016%2035.5t35%2016.5q70%200%20196%20-169q98%20-131%20146%20-273t60%20-314%20q2%20-42%202%20-64z"
            ],
            "\uf2c6": [
                1792.0,
                "M1189%20229l147%20693q9%2044%20-10.5%2063t-51.5%207l-864%20-333q-29%20-11%20-39.5%20-25t-2.5%20-26.5t32%20-19.5l221%20-69l513%20323q21%2014%2032%206q7%20-5%20-4%20-15l-415%20-375v0v0l-16%20-228q23%200%2045%2022l108%20104l224%20-165q64%20-36%2081%2038zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71%20t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf2c7": [
                1024.0,
                "M640%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136q0%2060%2035%20110t93%2071v907h128v-907q58%20-21%2093%20-71t35%20-110zM768%20192q0%2077%20-34%20144t-94%20112v768q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136v-768q-60%20-45%20-94%20-112t-34%20-144q0%20-133%2093.5%20-226.5t226.5%20-93.5t226.5%2093.5%20t93.5%20226.5zM896%20192q0%20-185%20-131.5%20-316.5t-316.5%20-131.5t-316.5%20131.5t-131.5%20316.5q0%20182%20128%20313v711q0%20133%2093.5%20226.5t226.5%2093.5t226.5%20-93.5t93.5%20-226.5v-711q128%20-131%20128%20-313zM1024%20768v-128h-192v128h192zM1024%201024v-128h-192v128h192zM1024%201280v-128h-192%20v128h192z"
            ],
            "\uf2c8": [
                1024.0,
                "M640%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136q0%2060%2035%20110t93%2071v651h128v-651q58%20-21%2093%20-71t35%20-110zM768%20192q0%2077%20-34%20144t-94%20112v768q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136v-768q-60%20-45%20-94%20-112t-34%20-144q0%20-133%2093.5%20-226.5t226.5%20-93.5t226.5%2093.5%20t93.5%20226.5zM896%20192q0%20-185%20-131.5%20-316.5t-316.5%20-131.5t-316.5%20131.5t-131.5%20316.5q0%20182%20128%20313v711q0%20133%2093.5%20226.5t226.5%2093.5t226.5%20-93.5t93.5%20-226.5v-711q128%20-131%20128%20-313zM1024%20768v-128h-192v128h192zM1024%201024v-128h-192v128h192zM1024%201280v-128h-192%20v128h192z"
            ],
            "\uf2c9": [
                1024.0,
                "M640%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136q0%2060%2035%20110t93%2071v395h128v-395q58%20-21%2093%20-71t35%20-110zM768%20192q0%2077%20-34%20144t-94%20112v768q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136v-768q-60%20-45%20-94%20-112t-34%20-144q0%20-133%2093.5%20-226.5t226.5%20-93.5t226.5%2093.5%20t93.5%20226.5zM896%20192q0%20-185%20-131.5%20-316.5t-316.5%20-131.5t-316.5%20131.5t-131.5%20316.5q0%20182%20128%20313v711q0%20133%2093.5%20226.5t226.5%2093.5t226.5%20-93.5t93.5%20-226.5v-711q128%20-131%20128%20-313zM1024%20768v-128h-192v128h192zM1024%201024v-128h-192v128h192zM1024%201280v-128h-192%20v128h192z"
            ],
            "\uf2ca": [
                1024.0,
                "M640%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136q0%2060%2035%20110t93%2071v139h128v-139q58%20-21%2093%20-71t35%20-110zM768%20192q0%2077%20-34%20144t-94%20112v768q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136v-768q-60%20-45%20-94%20-112t-34%20-144q0%20-133%2093.5%20-226.5t226.5%20-93.5t226.5%2093.5%20t93.5%20226.5zM896%20192q0%20-185%20-131.5%20-316.5t-316.5%20-131.5t-316.5%20131.5t-131.5%20316.5q0%20182%20128%20313v711q0%20133%2093.5%20226.5t226.5%2093.5t226.5%20-93.5t93.5%20-226.5v-711q128%20-131%20128%20-313zM1024%20768v-128h-192v128h192zM1024%201024v-128h-192v128h192zM1024%201280v-128h-192%20v128h192z"
            ],
            "\uf2cb": [
                1024.0,
                "M640%20192q0%20-80%20-56%20-136t-136%20-56t-136%2056t-56%20136q0%2079%2056%20135.5t136%2056.5t136%20-56.5t56%20-135.5zM768%20192q0%2077%20-34%20144t-94%20112v768q0%2080%20-56%20136t-136%2056t-136%20-56t-56%20-136v-768q-60%20-45%20-94%20-112t-34%20-144q0%20-133%2093.5%20-226.5t226.5%20-93.5t226.5%2093.5t93.5%20226.5z%20M896%20192q0%20-185%20-131.5%20-316.5t-316.5%20-131.5t-316.5%20131.5t-131.5%20316.5q0%20182%20128%20313v711q0%20133%2093.5%20226.5t226.5%2093.5t226.5%20-93.5t93.5%20-226.5v-711q128%20-131%20128%20-313zM1024%20768v-128h-192v128h192zM1024%201024v-128h-192v128h192zM1024%201280v-128h-192v128h192z"
            ],
            "\uf2cc": [
                1920.0,
                "M1433%201287q10%20-10%2010%20-23t-10%20-23l-626%20-626q-10%20-10%20-23%20-10t-23%2010l-82%2082q-10%2010%20-10%2023t10%2023l44%2044q-72%2091%20-81.5%20207t46.5%20215q-74%2071%20-176%2071q-106%200%20-181%20-75t-75%20-181v-1280h-256v1280q0%20104%2040.5%20198.5t109.5%20163.5t163.5%20109.5t198.5%2040.5q106%200%20201%20-41%20t166%20-115q94%2039%20197%2024.5t185%20-79.5l44%2044q10%2010%2023%2010t23%20-10zM1344%201024q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1600%20896q-26%200%20-45%2019t-19%2045t19%2045t45%2019t45%20-19t19%20-45t-19%20-45t-45%20-19zM1856%201024q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19%20t-45%2019t-19%2045t19%2045t45%2019zM1216%20896q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1408%20832q0%2026%2019%2045t45%2019t45%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045zM1728%20896q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1088%20768%20q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1344%20640q-26%200%20-45%2019t-19%2045t19%2045t45%2019t45%20-19t19%20-45t-19%20-45t-45%20-19zM1600%20768q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1216%20512q-26%200%20-45%2019t-19%2045t19%2045t45%2019t45%20-19%20t19%20-45t-19%20-45t-45%20-19zM1472%20640q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1088%20512q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1344%20512q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1216%20384%20q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019zM1088%20256q26%200%2045%20-19t19%20-45t-19%20-45t-45%20-19t-45%2019t-19%2045t19%2045t45%2019z"
            ],
            "\uf2cd": [
                1792.0,
                "M1664%20448v-192q0%20-169%20-128%20-286v-194q0%20-14%20-9%20-23t-23%20-9h-64q-14%200%20-23%209t-9%2023v118q-63%20-22%20-128%20-22h-768q-65%200%20-128%2022v-110q0%20-17%20-9.5%20-28.5t-22.5%20-11.5h-64q-13%200%20-22.5%2011.5t-9.5%2028.5v186q-128%20117%20-128%20286v192h1536zM704%20864q0%20-14%20-9%20-23t-23%20-9t-23%209%20t-9%2023t9%2023t23%209t23%20-9t9%20-23zM768%20928q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM704%20992q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM832%20992q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM768%201056q0%20-14%20-9%20-23t-23%20-9t-23%209%20t-9%2023t9%2023t23%209t23%20-9t9%20-23zM704%201120q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM1792%20608v-64q0%20-14%20-9%20-23t-23%20-9h-1728q-14%200%20-23%209t-9%2023v64q0%2014%209%2023t23%209h96v640q0%20106%2075%20181t181%2075q108%200%20184%20-78q46%2019%2098%2012t93%20-39l22%2022q11%2011%2022%200l42%20-42%20q11%20-11%200%20-22l-314%20-314q-11%20-11%20-22%200l-42%2042q-11%2011%200%2022l22%2022q-36%2046%20-40.5%20104t23.5%20108q-37%2035%20-88%2035q-53%200%20-90.5%20-37.5t-37.5%20-90.5v-640h1504q14%200%2023%20-9t9%20-23zM896%201056q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM832%201120q0%20-14%20-9%20-23t-23%20-9%20t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM768%201184q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM960%201120q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM896%201184q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM832%201248q0%20-14%20-9%20-23%20t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM1024%201184q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM960%201248q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23zM1088%201248q0%20-14%20-9%20-23t-23%20-9t-23%209t-9%2023t9%2023t23%209t23%20-9t9%20-23z"
            ],
            "\uf2ce": [
                1536.0,
                "M994%20344q0%20-86%20-17%20-197q-31%20-215%20-55%20-313q-22%20-90%20-152%20-90t-152%2090q-24%2098%20-55%20313q-17%20110%20-17%20197q0%20168%20224%20168t224%20-168zM1536%20768q0%20-240%20-134%20-434t-350%20-280q-8%20-3%20-15%203t-6%2015q7%2048%2010%2066q4%2032%206%2047q1%209%209%2012q159%2081%20255.5%20234t96.5%20337q0%20180%20-91%20330.5%20t-247%20234.5t-337%2074q-124%20-7%20-237%20-61t-193.5%20-140.5t-128%20-202t-46.5%20-240.5q1%20-184%2099%20-336.5t257%20-231.5q7%20-3%209%20-12q3%20-21%206%20-45q1%20-9%205%20-32.5t6%20-35.5q1%20-9%20-6.5%20-15t-15.5%20-2q-148%2058%20-261%20169.5t-173.5%20264t-52.5%20319.5q7%20143%2066%20273.5t154.5%20227t225%20157.5t272.5%2070%20q164%2010%20315.5%20-46.5t261%20-160.5t175%20-250.5t65.5%20-308.5zM994%20800q0%20-93%20-65.5%20-158.5t-158.5%20-65.5t-158.5%2065.5t-65.5%20158.5t65.5%20158.5t158.5%2065.5t158.5%20-65.5t65.5%20-158.5zM1282%20768q0%20-122%20-53.5%20-228.5t-146.5%20-177.5q-8%20-6%20-16%20-2t-10%2014q-6%2052%20-29%2092q-7%2010%203%2020%20q58%2054%2091%20127t33%20155q0%20111%20-58.5%20204t-157.5%20141.5t-212%2036.5q-133%20-15%20-229%20-113t-109%20-231q-10%20-92%2023.5%20-176t98.5%20-144q10%20-10%203%20-20q-24%20-41%20-29%20-93q-2%20-9%20-10%20-13t-16%202q-95%2074%20-148.5%20183t-51.5%20234q3%20131%2069%20244t177%20181.5t241%2074.5q144%207%20268%20-60t196.5%20-187.5%20t72.5%20-263.5z"
            ],
            "\uf2d0": [
                1792.0,
                "M256%20128h1280v768h-1280v-768zM1792%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1472q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2d1": [
                1792.0,
                "M1792%20224v-192q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v192q0%2066%2047%20113t113%2047h1472q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2d2": [
                2048.0,
                "M256%200h768v512h-768v-512zM1280%20512h512v768h-768v-256h96q66%200%20113%20-47t47%20-113v-352zM2048%201376v-960q0%20-66%20-47%20-113t-113%20-47h-608v-352q0%20-66%20-47%20-113t-113%20-47h-960q-66%200%20-113%2047t-47%20113v960q0%2066%2047%20113t113%2047h608v352q0%2066%2047%20113t113%2047h960q66%200%20113%20-47%20t47%20-113z"
            ],
            "\uf2d3": [
                1792.0,
                "M1175%20215l146%20146q10%2010%2010%2023t-10%2023l-233%20233l233%20233q10%2010%2010%2023t-10%2023l-146%20146q-10%2010%20-23%2010t-23%20-10l-233%20-233l-233%20233q-10%2010%20-23%2010t-23%20-10l-146%20-146q-10%20-10%20-10%20-23t10%20-23l233%20-233l-233%20-233q-10%20-10%20-10%20-23t10%20-23l146%20-146q10%20-10%2023%20-10t23%2010%20l233%20233l233%20-233q10%20-10%2023%20-10t23%2010zM1792%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1472q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2d4": [
                1792.0,
                "M1257%20425l-146%20-146q-10%20-10%20-23%20-10t-23%2010l-169%20169l-169%20-169q-10%20-10%20-23%20-10t-23%2010l-146%20146q-10%2010%20-10%2023t10%2023l169%20169l-169%20169q-10%2010%20-10%2023t10%2023l146%20146q10%2010%2023%2010t23%20-10l169%20-169l169%20169q10%2010%2023%2010t23%20-10l146%20-146q10%20-10%2010%20-23t-10%20-23%20l-169%20-169l169%20-169q10%20-10%2010%20-23t-10%20-23zM256%20128h1280v1024h-1280v-1024zM1792%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1472q-66%200%20-113%2047t-47%20113v1216q0%2066%2047%20113t113%2047h1472q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2d5": [
                1792.0,
                "M1070%20358l306%20564h-654l-306%20-564h654zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf2d6": [
                1794.0,
                "M1291%201060q-15%2017%20-35%208.5t-26%20-28.5t5%20-38q14%20-17%2040%20-14.5t34%2020.5t-18%2052zM895%20814q-8%20-8%20-19.5%20-8t-18.5%208q-8%208%20-8%2019t8%2018q7%208%2018.5%208t19.5%20-8q7%20-7%207%20-18t-7%20-19zM1060%20740l-35%20-35q-12%20-13%20-29.5%20-13t-30.5%2013l-38%2038q-12%2013%20-12%2030t12%2030l35%2035q12%2012%2029.5%2012%20t30.5%20-12l38%20-39q12%20-12%2012%20-29.5t-12%20-29.5zM951%20870q-7%20-8%20-18.5%20-8t-19.5%208q-7%208%20-7%2019t7%2019q8%208%2019%208t19%20-8t8%20-19t-8%20-19zM1354%20968q-34%20-64%20-107.5%20-85.5t-127.5%2016.5q-38%2028%20-61%2066.5t-21%2087.5t39%2092t75.5%2053t70.5%20-5t70%20-51q2%20-2%2013%20-12.5t14.5%20-13.5t13%20-13.5%20t12.5%20-15.5t10%20-15.5t8.5%20-18t4%20-18.5t1%20-21t-5%20-22t-9.5%20-24zM1555%20486q3%2020%20-8.5%2034.5t-27.5%2021.5t-33%2017t-23%2020q-40%2071%20-84%2098.5t-113%2011.5q19%2013%2040%2018.5t33%204.5l12%20-1q2%2045%20-34%2090q6%2020%206.5%2040.5t-2.5%2030.5l-3%2010q43%2024%2071%2065t34%2091q10%2084%20-43%20150.5t-137%2076.5%20q-60%207%20-114%20-18.5t-82%20-74.5q-30%20-51%20-33.5%20-101t14.5%20-87t43.5%20-64t56.5%20-42q-45%204%20-88%2036t-57%2088q-28%20108%2032%20222q-16%2021%20-29%2032q-50%200%20-89%20-19q19%2024%2042%2037t36%2014l13%201q0%2050%20-13%2078q-10%2021%20-32.5%2028.5t-47%20-3.5t-37.5%20-40q2%204%204%207q-7%20-28%20-6.5%20-75.5t19%20-117t48.5%20-122.5%20q-25%20-14%20-47%20-36q-35%20-16%20-85.5%20-70.5t-84.5%20-101.5l-33%20-46q-90%20-34%20-181%20-125.5t-75%20-162.5q1%20-16%2011%20-27q-15%20-12%20-30%20-30q-21%20-25%20-21%20-54t21.5%20-40t63.5%206q41%2019%2077%2049.5t55%2060.5q-2%202%20-6.5%205t-20.5%207.5t-33%203.5q23%205%2051%2012.5t40%2010t27.5%206t26%204t23.5%200.5q14%20-7%2022%2034%20q7%2037%207%2090q0%20102%20-40%20150q106%20-103%20101%20-219q-1%20-29%20-15%20-50t-27%20-27l-13%20-6q-4%20-7%20-19%20-32t-26%20-45.5t-26.5%20-52t-25%20-61t-17%20-63t-6.5%20-66.5t10%20-63q-35%2054%20-37%2080q-22%20-24%20-34.5%20-39t-33.5%20-42t-30.5%20-46t-16.5%20-41t-0.5%20-38t25.5%20-27q45%20-25%20144%2064t190.5%20221.5%20t122.5%20228.5q86%2052%20145%20115.5t86%20119.5q47%20-93%20154%20-178q104%20-83%20167%20-80q39%202%2046%2043zM1794%20640q0%20-182%20-71%20-348t-191%20-286t-286.5%20-191t-348.5%20-71t-348.5%2071t-286.5%20191t-191%20286t-71%20348t71%20348t191%20286t286.5%20191t348.5%2071t348.5%20-71t286.5%20-191t191%20-286t71%20-348z"
            ],
            "\uf2d7": [
                1536.0,
                "M518%201353v-655q103%20-1%20191.5%201.5t125.5%205.5l37%203q68%202%2090.5%2024.5t39.5%2094.5l33%20142h103l-14%20-322l7%20-319h-103l-29%20127q-15%2068%20-45%2093t-84%2026q-87%208%20-352%208v-556q0%20-78%2043.5%20-115.5t133.5%20-37.5h357q35%200%2059.5%202t55%207.5t54%2018t48.5%2032t46%2050.5t39%2073l93%20216h89%20q-6%20-37%20-31.5%20-252t-30.5%20-276q-146%205%20-263.5%208t-162.5%204h-44h-628l-376%20-12v102l127%2025q67%2013%2091.5%2037t25.5%2079l8%20643q3%20402%20-8%20645q-2%2061%20-25.5%2084t-91.5%2036l-127%2024v102l376%20-12h702q139%200%20374%2027q-6%20-68%20-14%20-194.5t-12%20-219.5l-5%20-92h-93l-32%20124q-31%20121%20-74%20179.5%20t-113%2058.5h-548q-28%200%20-35.5%20-8.5t-7.5%20-30.5z"
            ],
            "\uf2d8": [
                1536.0,
                "M922%20739v-182q0%20-4%200.5%20-15t0%20-15l-1.5%20-12t-3.5%20-11.5t-6.5%20-7.5t-11%20-5.5t-16%20-1.5v309q9%200%2016%20-1t11%20-5t6.5%20-5.5t3.5%20-9.5t1%20-10.5v-13.5v-14zM1238%20643v-121q0%20-1%200.5%20-12.5t0%20-15.5t-2.5%20-11.5t-7.5%20-10.5t-13.5%20-3q-9%200%20-14%209q-4%2010%20-4%20165v7v8.5v9t1.5%208.5l3.5%207%20t5%205.5t8%201.5q6%200%2010%20-1.5t6.5%20-4.5t4%20-6t2%20-8.5t0.5%20-8v-9.5v-9zM180%20407h122v472h-122v-472zM614%20407h106v472h-159l-28%20-221q-20%20148%20-32%20221h-158v-472h107v312l45%20-312h76l43%20319v-319zM1039%20712q0%2067%20-5%2090q-3%2016%20-11%2028.5t-17%2020.5t-25%2014t-26.5%208.5t-31%204t-29%201.5%20h-29.5h-12h-91v-472h56q169%20-1%20197%2024.5t25%20180.5q-1%2062%20-1%20100zM1356%20515v133q0%2029%20-2%2045t-9.5%2033.5t-24.5%2025t-46%207.5q-46%200%20-77%20-34v154h-117v-472h110l7%2030q30%20-36%2077%20-36q50%200%2066%2030.5t16%2083.5zM1536%201248v-1216q0%20-66%20-47%20-113t-113%20-47h-1216q-66%200%20-113%2047t-47%20113%20v1216q0%2066%2047%20113t113%2047h1216q66%200%20113%20-47t47%20-113z"
            ],
            "\uf2d9": [
                2176.0,
                "M1143%20-197q-6%201%20-11%204q-13%208%20-36%2023t-86%2065t-116.5%20104.5t-112%20140t-89.5%20172.5q-17%203%20-175%2037q66%20-213%20235%20-362t391%20-184zM502%20409l168%20-28q-25%2076%20-41%20167.5t-19%20145.5l-4%2053q-84%20-82%20-121%20-224q5%20-65%2017%20-114zM612%201018q-43%20-64%20-77%20-148q44%2046%2074%2068zM2049%20584%20q0%20161%20-62%20307t-167.5%20252t-250.5%20168.5t-304%2062.5q-147%200%20-281%20-52.5t-240%20-148.5q-30%20-58%20-45%20-160q60%2051%20143%2083.5t158.5%2043t143%2013.5t108.5%20-1l40%20-3q33%20-1%2053%20-15.5t24.5%20-33t6.5%20-37t-1%20-28.5q-126%2011%20-227.5%200.5t-183%20-43.5t-142.5%20-71.5t-131%20-98.5%20q4%20-36%2011.5%20-92.5t35.5%20-178t62%20-179.5q123%20-6%20247.5%2014.5t214.5%2053.5t162.5%2067t109.5%2059l37%2024q22%2016%2039.5%2020.5t30.5%20-5t17%20-34.5q14%20-97%20-39%20-121q-208%20-97%20-467%20-134q-135%20-20%20-317%20-16q41%20-96%20110%20-176.5t137%20-127t130.5%20-79t101.5%20-43.5l39%20-12q143%20-23%20263%2015%20q195%2099%20314%20289t119%20418zM2123%20621q-14%20-135%20-40%20-212q-70%20-208%20-181.5%20-346.5t-318.5%20-253.5q-48%20-33%20-82%20-44q-72%20-26%20-163%20-16q-36%20-3%20-73%20-3q-283%200%20-504.5%20173t-295.5%20442q-1%200%20-4%200.5t-5%200.5q-6%20-50%202.5%20-112.5t26%20-115t36%20-98t31.5%20-71.5l14%20-26q8%20-12%2054%20-82%20q-71%2038%20-124.5%20106.5t-78.5%20140t-39.5%20137t-17.5%20107.5l-2%2042q-5%202%20-33.5%2012.5t-48.5%2018t-53%2020.5t-57.5%2025t-50%2025.5t-42.5%2027t-25%2025.5q19%20-10%2050.5%20-25.5t113%20-45.5t145.5%20-38l2%2032q11%20149%2094%20290q41%20202%20176%20365q28%20115%2081%20214q15%2028%2032%2045t49%2032q158%2074%20303.5%20104%20t302%2011t306.5%20-97q220%20-115%20333%20-336t87%20-474z"
            ],
            "\uf2da": [
                1792.0,
                "M1341%20752q29%2044%20-6.5%20129.5t-121.5%20142.5q-58%2039%20-125.5%2053.5t-118%204.5t-68.5%20-37q-12%20-23%20-4.5%20-28t42.5%20-10q23%20-3%2038.5%20-5t44.5%20-9.5t56%20-17.5q36%20-13%2067.5%20-31.5t53%20-37t40%20-38.5t30.5%20-38t22%20-34.5t16.5%20-28.5t12%20-18.5t10.5%20-6t11%209.5zM1704%20178%20q-52%20-127%20-148.5%20-220t-214.5%20-141.5t-253%20-60.5t-266%2013.5t-251%2091t-210%20161.5t-141.5%20235.5t-46.5%20303.5q1%2041%208.5%2084.5t12.5%2064t24%2080.5t23%2073q-51%20-208%201%20-397t173%20-318t291%20-206t346%20-83t349%2074.5t289%20244.5q20%2027%2018%2014q0%20-4%20-4%20-14zM1465%20627q0%20-104%20-40.5%20-199%20t-108.5%20-164t-162%20-109.5t-198%20-40.5t-198%2040.5t-162%20109.5t-108.5%20164t-40.5%20199t40.5%20199t108.5%20164t162%20109.5t198%2040.5t198%20-40.5t162%20-109.5t108.5%20-164t40.5%20-199zM1752%20915q-65%20147%20-180.5%20251t-253%20153.5t-292%2053.5t-301%20-36.5t-275.5%20-129t-220%20-211.5t-131%20-297%20t-10%20-373q-49%20161%20-51.5%20311.5t35.5%20272.5t109%20227t165.5%20180.5t207%20126t232%2071t242.5%209t236%20-54t216%20-124.5t178%20-197q33%20-50%2062%20-121t31%20-112zM1690%20573q12%20244%20-136.5%20416t-396.5%20240q-8%200%20-10%205t24%208q125%20-4%20230%20-50t173%20-120t116%20-168.5t58.5%20-199t-1%20-208%20t-61.5%20-197.5t-122.5%20-167t-185%20-117.5t-248.5%20-46.5q108%2030%20201.5%2080t174%20123t129.5%20176.5t55%20225.5z"
            ],
            "\uf2db": [
                1536.0,
                "M192%20256v-128h-112q-16%200%20-16%2016v16h-48q-16%200%20-16%2016v32q0%2016%2016%2016h48v16q0%2016%2016%2016h112zM192%20512v-128h-112q-16%200%20-16%2016v16h-48q-16%200%20-16%2016v32q0%2016%2016%2016h48v16q0%2016%2016%2016h112zM192%20768v-128h-112q-16%200%20-16%2016v16h-48q-16%200%20-16%2016v32q0%2016%2016%2016h48v16%20q0%2016%2016%2016h112zM192%201024v-128h-112q-16%200%20-16%2016v16h-48q-16%200%20-16%2016v32q0%2016%2016%2016h48v16q0%2016%2016%2016h112zM192%201280v-128h-112q-16%200%20-16%2016v16h-48q-16%200%20-16%2016v32q0%2016%2016%2016h48v16q0%2016%2016%2016h112zM1280%201440v-1472q0%20-40%20-28%20-68t-68%20-28h-832q-40%200%20-68%2028%20t-28%2068v1472q0%2040%2028%2068t68%2028h832q40%200%2068%20-28t28%20-68zM1536%20208v-32q0%20-16%20-16%20-16h-48v-16q0%20-16%20-16%20-16h-112v128h112q16%200%2016%20-16v-16h48q16%200%2016%20-16zM1536%20464v-32q0%20-16%20-16%20-16h-48v-16q0%20-16%20-16%20-16h-112v128h112q16%200%2016%20-16v-16h48q16%200%2016%20-16zM1536%20720v-32%20q0%20-16%20-16%20-16h-48v-16q0%20-16%20-16%20-16h-112v128h112q16%200%2016%20-16v-16h48q16%200%2016%20-16zM1536%20976v-32q0%20-16%20-16%20-16h-48v-16q0%20-16%20-16%20-16h-112v128h112q16%200%2016%20-16v-16h48q16%200%2016%20-16zM1536%201232v-32q0%20-16%20-16%20-16h-48v-16q0%20-16%20-16%20-16h-112v128h112q16%200%2016%20-16v-16%20h48q16%200%2016%20-16z"
            ],
            "\uf2dc": [
                1664.0,
                "M1566%20419l-167%20-33l186%20-107q23%20-13%2029.5%20-38.5t-6.5%20-48.5q-14%20-23%20-39%20-29.5t-48%206.5l-186%20106l55%20-160q13%20-38%20-12%20-63.5t-60.5%20-20.5t-48.5%2042l-102%20300l-271%20156v-313l208%20-238q16%20-18%2017%20-39t-11%20-36.5t-28.5%20-25t-37%20-5.5t-36.5%2022l-112%20128v-214q0%20-26%20-19%20-45%20t-45%20-19t-45%2019t-19%2045v214l-112%20-128q-16%20-18%20-36.5%20-22t-37%205.5t-28.5%2025t-11%2036.5t17%2039l208%20238v313l-271%20-156l-102%20-300q-13%20-37%20-48.5%20-42t-60.5%2020.5t-12%2063.5l55%20160l-186%20-106q-23%20-13%20-48%20-6.5t-39%2029.5q-13%2023%20-6.5%2048.5t29.5%2038.5l186%20107l-167%2033%20q-29%206%20-42%2029t-8.5%2046.5t25.5%2040t50%2010.5l310%20-62l271%20157l-271%20157l-310%20-62q-4%20-1%20-13%20-1q-27%200%20-44%2018t-19%2040t11%2043t40%2026l167%2033l-186%20107q-23%2013%20-29.5%2038.5t6.5%2048.5t39%2030t48%20-7l186%20-106l-55%20160q-13%2038%2012%2063.5t60.5%2020.5t48.5%20-42l102%20-300l271%20-156v313%20l-208%20238q-16%2018%20-17%2039t11%2036.5t28.5%2025t37%205.5t36.5%20-22l112%20-128v214q0%2026%2019%2045t45%2019t45%20-19t19%20-45v-214l112%20128q16%2018%2036.5%2022t37%20-5.5t28.5%20-25t11%20-36.5t-17%20-39l-208%20-238v-313l271%20156l102%20300q13%2037%2048.5%2042t60.5%20-20.5t12%20-63.5l-55%20-160l186%20106%20q23%2013%2048%206.5t39%20-29.5q13%20-23%206.5%20-48.5t-29.5%20-38.5l-186%20-107l167%20-33q27%20-5%2040%20-26t11%20-43t-19%20-40t-44%20-18q-9%200%20-13%201l-310%2062l-271%20-157l271%20-157l310%2062q29%206%2050%20-10.5t25.5%20-40t-8.5%20-46.5t-42%20-29z"
            ],
            "\uf2dd": [
                1792.0,
                "M1473%20607q7%20118%20-33%20226.5t-113%20189t-177%20131t-221%2057.5q-116%207%20-225.5%20-32t-192%20-110.5t-135%20-175t-59.5%20-220.5q-7%20-118%2033%20-226.5t113%20-189t177.5%20-131t221.5%20-57.5q155%20-9%20293%2059t224%20195.5t94%20283.5zM1792%201536l-349%20-348q120%20-117%20180.5%20-272t50.5%20-321%20q-11%20-183%20-102%20-339t-241%20-255.5t-332%20-124.5l-999%20-132l347%20347q-120%20116%20-180.5%20271.5t-50.5%20321.5q11%20184%20102%20340t241.5%20255.5t332.5%20124.5q167%2022%20500%2066t500%2066z"
            ],
            "\uf2de": [
                1792.0,
                "M948%20508l163%20-329h-51l-175%20350l-171%20-350h-49l179%20374l-78%2033l21%2049l240%20-102l-21%20-50zM563%201100l304%20-130l-130%20-304l-304%20130zM907%20915l240%20-103l-103%20-239l-239%20102zM1188%20765l191%20-81l-82%20-190l-190%2081zM1680%20640q0%20159%20-62%20304t-167.5%20250.5t-250.5%20167.5t-304%2062%20t-304%20-62t-250.5%20-167.5t-167.5%20-250.5t-62%20-304t62%20-304t167.5%20-250.5t250.5%20-167.5t304%20-62t304%2062t250.5%20167.5t167.5%20250.5t62%20304zM1792%20640q0%20-182%20-71%20-348t-191%20-286t-286%20-191t-348%20-71t-348%2071t-286%20191t-191%20286t-71%20348t71%20348t191%20286t286%20191t348%2071t348%20-71%20t286%20-191t191%20-286t71%20-348z"
            ],
            "\uf2e0": [
                1920.0,
                "M1334%20302q-4%2024%20-27.5%2034t-49.5%2010.5t-48.5%2012.5t-25.5%2038q-5%2047%2033%20139.5t75%20181t32%20127.5q-14%20101%20-117%20103q-45%201%20-75%20-16l-3%20-2l-5%20-2.5t-4.5%20-2t-5%20-2t-5%20-0.5t-6%201.5t-6%203.5t-6.5%205q-3%202%20-9%208.5t-9%209t-8.5%207.5t-9.5%207.5t-9.5%205.5t-11%204.5t-11.5%202.5q-30%205%20-48%20-3%20t-45%20-31q-1%20-1%20-9%20-8.5t-12.5%20-11t-15%20-10t-16.5%20-5.5t-17%203q-54%2027%20-84%2040q-41%2018%20-94%20-5t-76%20-65q-16%20-28%20-41%20-98.5t-43.5%20-132.5t-40%20-134t-21.5%20-73q-22%20-69%2018.5%20-119t110.5%20-46q30%202%2050.5%2015t38.5%2046q7%2013%2079%20199.5t77%20194.5q6%2011%2021.5%2018t29.5%200q27%20-15%2021%20-53%20q-2%20-18%20-51%20-139.5t-50%20-132.5q-6%20-38%2019.5%20-56.5t60.5%20-7t55%2049.5q4%208%2045.5%2092t81.5%20163.5t46%2088.5q20%2029%2041%2028q29%200%2025%20-38q-2%20-16%20-65.5%20-147.5t-70.5%20-159.5q-12%20-53%2013%20-103t74%20-74q17%20-9%2051%20-15.5t71.5%20-8t62.5%2014t20%2048.5zM383%2086q3%20-15%20-5%20-27.5t-23%20-15.5%20q-14%20-3%20-26.5%205t-15.5%2023q-3%2014%205%2027t22%2016t27%20-5t16%20-23zM953%20-177q12%20-17%208.5%20-37.5t-20.5%20-32.5t-37.5%20-8t-32.5%2021q-11%2017%20-7.5%2037.5t20.5%2032.5t37.5%208t31.5%20-21zM177%20635q-18%20-27%20-49.5%20-33t-57.5%2013q-26%2018%20-32%2050t12%2058q18%2027%2049.5%2033t57.5%20-12q26%20-19%2032%20-50.5%20t-12%20-58.5zM1467%20-42q19%20-28%2013%20-61.5t-34%20-52.5t-60.5%20-13t-51.5%2034t-13%2061t33%2053q28%2019%2060.5%2013t52.5%20-34zM1579%20562q69%20-113%2042.5%20-244.5t-134.5%20-207.5q-90%20-63%20-199%20-60q-20%20-80%20-84.5%20-127t-143.5%20-44.5t-140%2057.5q-12%20-9%20-13%20-10q-103%20-71%20-225%20-48.5t-193%20126.5%20q-50%2073%20-53%20164q-83%2014%20-142.5%2070.5t-80.5%20128t-2%20152t81%20138.5q-36%2060%20-38%20128t24.5%20125t79.5%2098.5t121%2050.5q32%2085%2099%20148t146.5%2091.5t168%2017t159.5%20-66.5q72%2021%20140%2017.5t128.5%20-36t104.5%20-80t67.5%20-115t17.5%20-140.5q52%20-16%2087%20-57t45.5%20-89t-5.5%20-99.5t-58%20-87.5z%20M455%201222q14%20-20%209.5%20-44.5t-24.5%20-38.5q-19%20-14%20-43.5%20-9.5t-37.5%2024.5q-14%2020%20-9.5%2044.5t24.5%2038.5q19%2014%2043.5%209.5t37.5%20-24.5zM614%201503q4%20-16%20-5%20-30.5t-26%20-18.5t-31%205.5t-18%2026.5q-3%2017%206.5%2031t25.5%2018q17%204%2031%20-5.5t17%20-26.5zM1800%20555q4%20-20%20-6.5%20-37t-30.5%20-21%20q-19%20-4%20-36%206.5t-21%2030.5t6.5%2037t30.5%2022q20%204%2036.5%20-7.5t20.5%20-30.5zM1136%201448q16%20-27%208.5%20-58.5t-35.5%20-47.5q-27%20-16%20-57.5%20-8.5t-46.5%2034.5q-16%2028%20-8.5%2059t34.5%2048t58%209t47%20-36zM1882%20792q4%20-15%20-4%20-27.5t-23%20-16.5q-15%20-3%20-27.5%205.5t-15.5%2022.5q-3%2015%205%2028t23%2016%20q14%203%2026.5%20-5t15.5%20-23zM1691%201033q15%20-22%2010.5%20-49t-26.5%20-43q-22%20-15%20-49%20-10t-42%2027t-10%2049t27%2043t48.5%2011t41.5%20-28z"
            ]
        }
    };
    function processTemplate(str) {
        var template = str.split('`');
        for (var i = 0, len = template.length; i < len; i += 2)
            template[i] = encodeURIComponent(template[i]);
        return template;
    }
    function applyTemplate(template, values) {
        var result = template.slice();
        for (var i = 1, len = template.length; i < len; i += 2)
            result[i] = String(values[result[i]]);
        return result.join('');
    }
    var svgTemplate = processTemplate('<svg viewBox="0 0 23 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M22 11c0 1.42-.226 2.585-.677 3.496l-7.465 15.117c-.218.43-.543.77-.974 1.016-.43.246-.892.37-1.384.37-.492 0-.954-.124-1.384-.37-.43-.248-.75-.587-.954-1.017L1.677 14.496C1.227 13.586 1 12.42 1 11c0-2.76 1.025-5.117 3.076-7.07C6.126 1.977 8.602 1 11.5 1c2.898 0 5.373.977 7.424 2.93C20.974 5.883 22 8.24 22 11z" stroke="`stroke`" stroke-width=".6" fill="`fill`" fill-rule="nonzero"/>`glyph`</g></svg>');
    var pathTemplate = processTemplate('<path transform="`transform`" d="`path`" fill="`fill`"/>');
    var rgbTemplate = processTemplate('rgb(`r`,`g`,`b`)');
    return function (code, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.icon, icon = _c === void 0 ? { r: 255, g: 255, b: 255 } : _c, _d = _b.fill, fill = _d === void 0 ? { r: 70, g: 140, b: 210 } : _d, _e = _b.stroke, stroke = _e === void 0 ? { r: 255, g: 255, b: 255 } : _e, _f = _b.customTransform, customTransform = _f === void 0 ? '' : _f;
        var glyph = fontAwesome.paths[code] || fontAwesome.paths[fontAwesome.codes[code.replace(/^fa-/, '')]];
        if (!glyph)
            throw new Error("Unknown FontAwesome character: " + code);
        var h, path;
        h = glyph[0], path = glyph[1];
        var transform = customTransform + " translate(11.5 14.5) scale(0.0062 -0.0062) translate(" + -h / 2 + ", 0)";
        var svg = applyTemplate(svgTemplate, {
            fill: applyTemplate(rgbTemplate, fill),
            stroke: applyTemplate(rgbTemplate, stroke),
            glyph: icon ? applyTemplate(pathTemplate, {
                transform: encodeURIComponent(transform),
                path: encodeURIComponent(path),
                fill: applyTemplate(rgbTemplate, icon)
            }) : ''
        });
        return 'data:image/svg+xml,' + svg;
    };
})();
//# sourceMappingURL=mma.js.map