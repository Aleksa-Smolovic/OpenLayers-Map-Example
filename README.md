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

Placing pins on click and inserting value into inputs:

```html
<input type="hidden" name="myLat" id="myLat"/>
<input type="hidden" name="myLong" id="myLong"/>

<script>
var clickable = true;
</script>
```

Showing pins on map:

```html
<script>
var markerLat = [42.443665, 42.443977968224345, 42.4427575239672];
var markerLong = [19.249843, 19.2449818564274, 19.24385906438307];
var markerTitle = ['primjer1', 'primjer2', 'primjer3'];
</script>
```