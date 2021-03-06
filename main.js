<script src="/javascript/prototype/prototype.js" type="text/javascript"></script>
<script src="/javascript/leaflet/leaflet.js" type="text/javascript"></script>

var mapA;
var mapB;
window.onload = function init(){
  // predefined map layers
  var fosm = new L.TileLayer("/tiles/fosm/mapnik/{z}/{x}/{y}.png",
    {
      attribution: 'Map Data &amp; Map Image &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> &amp; <a href="http://www.fosm.org/">FOSM</a> Contributors. <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>',
      maxZoom: 19
    });

  var fosmnoadmin = new L.TileLayer("/tiles/fosm/mapnik-noadmin/{z}/{x}/{y}.png",
    {
      attribution: 'Map Data &amp; Map Image &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> & <a href="http://www.fosm.org/">FOSM</a> Contributors. <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>',
      maxZoom: 19
    });

  var osm = new L.TileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: 'Map Data &amp; Map Image &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> Contributors. <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>',
      maxZoom: 18
    });

  var nearmap = new L.TileLayer("http://www.nearmap.com/maps/?z={z}&x={x}&y={y}&nml=Vert",
    {
      attribution: 'PhotoMaps &copy; <a href="http://www.nearmap.com/">NearMap</a>',
      maxZoom: 24
    });

  // give these layers names so users can reference them in the URI
    var mapLayers = new Array();
    mapLayers['fosm'] = fosm;
    mapLayers['osm'] = osm;
    mapLayers['fosm-noadmin'] = fosmnoadmin;
    mapLayers['nearmap'] = nearmap;

  // define the layer control
    var layerControlA = new L.Control.Layers({
      'OpenStreetMap.org (remote)': osm,
      'NearMap PhotoMap (remote)': nearmap,
      'FOSM Mapnik (no admin)': fosmnoadmin,
      'FOSM Mapnik': fosm
    },
    {
    },
    {
      collapsed: true
    });

    var layerControlB = new L.Control.Layers({
      'OpenStreetMap.org (remote)': osm,
      'NearMap PhotoMap (remote)': nearmap,
      'FOSM Mapnik (no admin)': fosmnoadmin,
      'FOSM Mapnik': fosm
    },
    {
    },
    {
       collapsed: true
    });

   // take the URI hash i.e. #foo from the end of the URL and parse aruments
   //                var uriHash = location.hash.replace(/^#/, "").split(";");
   //                var uriHashHash = {};
   //                for (var i = 0; i < uriHash.length; ++i) {
   //                var kvPair = uriHash[i].split("=");
   //                if (kvPair.length == 2 ) {
   //             var key = kvPair[0];
   //             var val = kvPair[1];

   //           uriHashHash[key] = val;
   //   }
   //  }
   //
   //                set the map layers we use as defaults based on the URI hash if given
   //                var mapADefaultLayer = fosm;
   //                var mapBDefaultLayer = osm;
   //                if (uriHashHash['mapa'])
   //                if (mapLayers[uriHashHash['mapa']])
   //                mapADefaultLayer = mapLayers[uriHashHash['mapa']];

   //                  if (uriHashHash['mapb'])
   //                  if (mapLayers[uriHashHash['mapb']])
   //                  mapBDefaultLayer = mapLayers[uriHashHash['mapb']];

                   // make the map objects

   //                var startLocation = new L.LatLng(-33.85, 151.20);

   //         if the startLocation is given in the URI as an argument, use that instead
   //         if ((uriHashHash['lat']) && (uriHashHash['lon']) &&
   //         (! isNaN(uriHashHash['lat']-0)) && (! isNaN(uriHashHash['lon']-0)))
   //         startLocation = new L.LatLng(uriHashHash['lat'], uriHashHash['lon']);

   //                var startZoom = 10;

   //          if the zoom is given in the URI as an argument, use that instead
   //          if ((uriHashHash['zoom']) && (uriHashHash['zoom'] >= 0) && (uriHashHash['zoom'] < 25))
   //          startZoom = uriHashHash['zoom'];

   //          mapA = new L.Map('mapA',
   //          {
   //          center: startLocation,
   //          zoom: startZoom,
   //          layers: [mapADefaultLayer]
   //          });
   //          mapB = new L.Map('mapB',
   //          {
   //          center: startLocation,
   //          zoom: startZoom,
   //          layers: [mapBDefaultLayer]
   //          });

   //          mapA.addControl(layerControlA);
   //          mapB.addControl(layerControlB);

   //          set move events to update the other map when we move this one
   //          mapA.on('moveend', function(e) {
   //          mapB.setView(mapA.getCenter(), mapA.getZoom());
   //          });

   //          mapB.on('moveend', function(e) {
   //          mapA.setView(mapB.getCenter(), mapB.getZoom());
   //          });

   //             update the location of the cursor
   //             function updateCursorA(e) {
   //             updateCursor(e, (window.innerWidth / 2));
   //             }
   //
   //             function updateCursorB(e) {
   //             updateCursor(e, -(window.innerWidth / 2));
   //             }

   //            function updateCursor(e, offset){
   //            the 15 is here to position to the center of the cursor icon in, not the top left of the cursor image
   //            $('cursor').top = e.clientY - 15;
   //            $('cursor').left = offset + e.clientX - 15;

   //            $('cursor').setStyle({
   //            left: $('cursor').left,
   //            top: $('cursor').top
   //            });
   //            }
   //            document.getElementById('mapA').onmousemove = updateCursorA;
   //            document.getElementById('mapB').onmousemove = updateCursorB;
   //            }
