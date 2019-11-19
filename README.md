# OpenLayers Web Map Example

Map setup, placing pins, multiple pins display 

## Installation

Insert the following scripts:

```html
<link rel="stylesheet" href="ol.css" type="text/css">
<script src="ol.js"></script>
<script src="mapSetup.js"></script>
```

## Usage

Map display:

```html
<div class="map" id="map"></div>
```

Showing pin on map:

```javascript
placeMarker(lat, long, markerTitle);
```

Placing pins on click and inserting value into inputs:

```html
<input type="hidden" name="myLat" id="myLat"/>
<input type="hidden" name="myLong" id="myLong"/>

<script>
var clickable = true;
</script>
```

Optional functions:

```javascript
clearMap();

var clickable = true; //default false
var multiple = true;  //default false
var zoomLevel = 10;   //default 15
var centerLat = 42.443665; //lat of map center
var centerLong = 19.249843; //long of map center

//pan to LatLng animation
flyTo(ol.proj.transform([19.12, 42.13], 'EPSG:4326', 'EPSG:3857'), function() {});

//maps in modal on toggle, also used for resizing elements
setTimeout( function() { map.updateSize();}, 200);
```

Optional style:

```css
var markerImage = "image.png";
var markerTextOutlineWeight = 10;
var outerTextColor = "#4cdcfb";
var innerTextColor = "#1f181f";
var markerTextSize = "20px";
var markerTextStyle = "italic"
var markerSize = 0.1;
```
