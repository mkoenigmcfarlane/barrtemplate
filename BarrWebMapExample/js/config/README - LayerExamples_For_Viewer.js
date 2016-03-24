//EXAMPLES FOR ADDING DIFFERENT LAYER TYPES VIEWER.JS FILE- MST2 
//***********************************************
//***********************************************
//***********************************************


/*
Valid layer types as of 3/18/15 include:
type: csv // 'CSV'
type: dynamic // 'ArcGISDynamicMapService'
type: feature // 'Feature'
type: georss // 'GeoRSS'
type: image // 'ArcGISImageService'
type: kml // 'KML'
type: label // 'Label', untested
type: mapimage // 'MapImage', untested
type: osm // 'OpenStreetMap'
type: tiled // 'ArcGISTiledMapService'
type: wms // 'WMS'
type: wmts // 'WMTS', untested
*/
			
			
			//add a WMS service - MST2			
			operationalLayers: [
			{
			type: 'wms',
			url: 'http://ndgishub.nd.gov/arcgis/services/All_Imagery/MapServer/WMSServer',
			title: '1995_1998 Aerial Imagery',			
			visibleLayers: ["Statewide_1995_1998"],	//UNIQUE TO A WMS SERVICE - MST2				
			options: {
				id: '1995Imagery',
				opacity: 1.0,
				visible: false,	//default visibility when map opens - overrides service properties - MST2
				format: "png",
               visibleLayers: ["Statewide_1995_1998"]					
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false
			}
				},
				
				
			//add a KML layer - MST2				
			{
			type: 'kml',
			url: 'http://earth.google.com/gallery/kmz/women_for_women.kmz',
			title: 'KML',						
			options: {
				id: 'kml',
				opacity: 1.0,
				visible: false,	//default visibility when map opens - overrides service properties - MST2				
               visibleLayers: ["Statewide_1995_1998"]					
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false
			}
				},
				
				
			//add a GeoRSS layer - MST2				
			{
			type: 'georss',
			url: 'http://water.weather.gov/ahps2/rss/alert/ankm5.rss', 
			title: 'geo rss',								
			options: {
				id: 'geo',
				opacity: 1.0,
				visible: true,	//default visibility when map opens - overrides service properties - MST2               				
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: true
			}
				},	

			//add a Open Street layer map layer this is UNTESTED - MST2				
			{
			type: 'osm',
			url: 'http://www.openstreetmap.org/?minlon=22.3418234&minlat=57.5129102&maxlon=22.5739625&maxlat=57.6287332', 
			title: 'osmtest',								
			options: {
				id: 'geo',
				opacity: 1.0,
				visible: true,	//default visibility when map opens - overrides service properties - MST2               				
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: true
			}
				},	


		
				
				
			//Add a dynamic map service - MST2				
			{
			type: 'dynamic',
			url: 'ENTER REST ENDPOINT URL FOR MAP SERVICE HERE',
			title: 'ENTER TITLE TO APPEAR IN TABLE OF CONTENTS',			
			noLegend: false,
			collapsed: false,
			options: {
				id: 'CorridorData', //This is a unique layer id and it CAN't contain any spaces and must be unique to each layer, reference this ID in the identify.js file used to configure pop up fields for layers in this group - MST2
				opacity: 1.0,
				visible: true, //default visibility when map opens - overrides service properties - MST2
				imageParameters: imageParameters
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false,
				expanded: false,
				metadataUrl: true,
				downloadUrl: 'https://www.barr.com/maps/BarrWebMapExample/DataDownload/route_alignment.zip', // add URL link here to file for download or any other link (must call it downloadUrl in viewer.js). To rename the title in layer control menu edit the js\gis\dijit\LayerControl\nls\resourced.js file - MST2
			},
			identifyLayerInfos: {
				layerIds: [0,9,8] // leave blank like [] to make all layers identifiable - MST2
			}
				
			
			
			
			//Add a feature layer for editing - MST2			
			{
			type: 'feature',
			url: 'ENTER REST ENDPOINT URL FOR MAP SERVICE HERE AND INCLUDE LAYER ID',
			title: 'ENTER TITLE TO APPEAR IN TABLE OF CONTENTS',			
			options: {
				id: 'comments', //This is a unique layer id and it CAN'T contain any spaces and must be unique to each layer, reference this ID in the identify.js file used to configure pop up fields for layers in this group - MST2
				opacity: 1.0,
				visible: true, //default visibility when map opens - overrides service properties - MST2
				outFields: ['UserName','Comments','Date','Type'], // SPECIFY THE FIELDS TO INCLUDE
				mode: 0
			},
			editorLayerInfos: {
				disableGeometryUpdate: false
				},
			layerControlLayerInfos: {        
				swipe: true,	
				metadataUrl: true,
				//downloadUrl: 'https://www.barr.com/maps/BarrWebMapExample/DataDownload/route_alignment.zip', // add URL link here to file for download or any other link (must call it downloadUrl in viewer.js). To rename the title in layer control menu edit the js\gis\dijit\LayerControl\nls\resourced.js file - MST2
				}				
			},
			
			
			//Add a tiled/cached layer - MST2
			{
			type: 'tiled',
			url: 'ENTER REST ENDPOINT URL FOR MAP SERVICE HERE',
			title: 'ENTER TITLE TO APPEAR IN TABLE OF CONTENTS',
			slider: true,
			noLegend: false,
			collapsed: false,
			sublayerToggle: false, //true to automatically turn on sublayers
			options: {
				id: '2013imagery', //This is a unique layer id and it CAN'T contain any spaces and must be unique to each layer, reference this ID in the identify.js file used to configure pop up fields for layers in this group - MST2
				opacity: 1.0, 
				visible: false, //default visibility when map opens - overrides service properties - MST2				
			},
			identifyLayerInfos: {
				layerIds: [] // user can't ID on tiled layers because they are raster images and do not contain any interactive data - MST2
			},
			layerControlLayerInfos: {        
				swipe: true,
				allSublayerToggles: false,	
				noZoom: false,
				noLegend: true
				}
				},
				
			
			
			