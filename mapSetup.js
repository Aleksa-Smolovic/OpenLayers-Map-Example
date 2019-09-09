//prvi klik
var firstClick = true;
//za zumiranje mape
var zoomPoint = (typeof zoomLevel != 'undefined' ? zoomLevel : 15);
//za centar mape
var mapCenterLat = (typeof centerLat != 'undefined' && typeof centerLong != 'undefined' ? centerLat : 42.443665);
var mapCenterLong = (typeof centerLat != 'undefined' && typeof centerLong != 'undefined' ? centerLong : 19.249843);

//setup mape
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([mapCenterLong, mapCenterLat]),
    zoom: zoomPoint
  })
});

function placeMarker(myLat, myLong, title) {

  if (myLat.length == 0 || myLong.length == 0) {
    console.log("Each point must contain lat and long!");
    return;
  }

  if(isNaN(myLat) || isNaN(myLong) || myLat < -90 || myLat > 90 || myLong < -180 || myLat > 180){
    console.log("You must eneter valid latitude and longitude!");
    return;
  }

  if (typeof multiple == 'undefined' || !multiple) {
    var allLayers = map.getLayers().getArray();
    if (allLayers.length > 1)
      map.removeLayer(allLayers[allLayers.length - 1]);
  }

  //stil za marker
  var styleMap = new ol.style.Style({
    //u text ide stil za text nad markerom
    text: new ol.style.Text({
      font: 'bold 11px "Open Sans", "Arial Unicode MS", "sans-serif"',
      placement: 'point',
      fill: new ol.style.Fill({ color: '#fff' }),
      stroke: new ol.style.Stroke({ color: '#000', width: 2 }),
    }),
    //u image ide stil za marker
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      //slika markera
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Simpleicons_Places_map-marker-1.svg/768px-Simpleicons_Places_map-marker-1.svg.png',
      scale: 0.03,
    })
  });

  var markers = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: styleMap,
  });

  if (typeof title != 'undefined') {
    //dodavanje texta na marker
    styleMap.getText().setText(new String(title));
  }

  map.addLayer(markers);

  var marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([myLong, myLat])));
  markers.getSource().addFeature(marker);
}

function clearMap(){
   var allLayers = map.getLayers().getArray();
   for(var i = allLayers.length; i > 0; i--){
      map.removeLayer(allLayers[i]);
   }
}

map.on('click', function (event) {

  if (typeof clickable == 'undefined' || !clickable)
    return false;

  //dobijam sve layere koji su na mapi
  var allLayers = map.getLayers().getArray();

  //ovdje je -1 zato sto mislim da je prvi layer sama mapa
  //micem zadnji layer koji je dodat rucno
  firstClick ? firstClick = false : map.removeLayer(allLayers[allLayers.length - 1]);

  var iconFeatureA = map.getFeaturesAtPixel(event.pixel);
  var lonlat = ol.proj.transform(event.coordinate, 'EPSG:3857', 'EPSG:4326');
  var lon = lonlat[0];
  var lat = lonlat[1];

  placeMarker(lat, lon);
  if (document.getElementById("myLat") != null)
    document.getElementById("myLat").value = lat;
  if (document.getElementById("myLong") != null)
    document.getElementById("myLong").value = lon;
  //alert('Lat: ' + lat + ', Long: ' + lon);

});
