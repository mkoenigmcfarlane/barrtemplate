define([
	'esri/units',
	'esri/geometry/Extent',
	'esri/config',
	'esri/tasks/GeometryService',
	'esri/layers/ImageParameters',
	 'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer'
], function(units, Extent, esriConfig, GeometryService, ImageParameters, Basemap, BasemapLayer) {

	// url to your proxy page, must be on same machine hosting you app. See proxy folder for readme.
	esriConfig.defaults.io.proxyUrl = 'https://www.barr.com/maps/DotNet/proxy.ashx';
	esriConfig.defaults.io.alwaysUseProxy = true;
	// url to your geometry server.
	esriConfig.defaults.geometryService = new GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

	//image parameters for dynamic services, set to png32 for higher quality exports.
	var imageParameters = new ImageParameters();
	imageParameters.format = 'png32';

	return {
		//default mapClick mode, mapClickMode lets widgets know what mode the map is in to avoid multipult map click actions from taking place (ie identify while drawing).
		defaultMapClickMode: 'identify',
		// map options, passed to map constructor. see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
		mapOptions: {
			 basemap: new Basemap({
                        layers: [new BasemapLayer({
                            url: 'http://gis2.metc.state.mn.us/arcgis/rest/services/BaseLayer/UTMBaseMap/MapServer'
                        })]
                    }),
			center: [-93.360049, 44.891840],
			zoom: 13,
			sliderStyle: 'small'
		},
		 panes: {
		 	left: {
				splitter: true
		 	}
			},
		// 	right: {
		// 		id: 'sidebarRight',
		// 		placeAt: 'outer',
		// 		region: 'right',
		// 		splitter: true,
		// 		collapsible: true
		// 	}
		// 	,
		// 	bottom: {
		// 		id: 'sidebarBottom',
		// 		placeAt: 'outer',
		// 		splitter: true,
		// 		collapsible: true,
		// 		region: 'bottom'
		// 	},
		//	top: {
		//		id: 'sidebarTop',
		// 		placeAt: 'outer',
		// 		collapsible: true,
		// 		splitter: true,
		// 		region: 'top'
		// 	}
		// },
		// collapseButtonsPane: 'center',

		// operationalLayers: Array of Layers to load on top of the basemap: valid 'type' options: 'dynamic', 'tiled', 'feature'.
		// The 'options' object is passed as the layers options for constructor. Title will be used in the legend only. id's must be unique and have no spaces.
		// 3 'mode' options: MODE_SNAPSHOT = 0, MODE_ONDEMAND = 1, MODE_SELECTION = 2
		operationalLayers: [{
			type: 'dynamic',
			url: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_City_Data_Drainage/MapServer',
			title: 'EDINA DRAINAGE DATA',
			slider: false,			
			options: {
				id: 'operational',
				opacity: 1.0,
				visible: true,
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false
			}
			},
	
			
			{		
			
			type: 'dynamic',
			url: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_City_Data_StormSewer/MapServer',
			title: 'EDINA STORM SEWER',
			slider: false,			
			options: {
				id: 'stormsewer',
				opacity: 1.0,
				visible: false,
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false
			}
			},
			
			{
			type: 'dynamic',
			url: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_City_Data_FEMA_FloodZones/MapServer/',
			title: 'FEMA FLOOD ZONES',
			slider: true,
			noLegend: false,
			collapsed: false,
			sublayerToggle: true, //true to automatically turn on sublayers
			options: {
				id: 'FEMA ',
				opacity: 0.6,
				visible: true,
				
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false
				}
				},
					
			
			
			{
			type: 'dynamic',
			url: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_City_Data_Base/MapServer',
			title: 'BASE DATA',
			slider: false,
			noLegend: false,
			collapsed: false,
			sublayerToggle: false, //true to automatically turn on sublayers
			options: {
				id: 'base',
				opacity: 1.0,
				visible: true,
				
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false
				}
				},
				
			
			
			{
			type: 'tiled',
			url: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_2013_Aerial_Basemap/MapServer',
			title: '2013 Edina Aerial',
			slider: true,
			noLegend: false,
			collapsed: false,
			sublayerToggle: false, //true to automatically turn on sublayers
			options: {
				id: '2013imagery',
				opacity: 1.0,
				visible: false,
				
			},
			identifyLayerInfos: {
				layerIds: [1]
			},
			layerControlLayerInfos: {        
				swipe: true,
				allSublayerToggles: false,	
				noZoom: false,
				noLegend: true
				}
				},
			
			{
			type: 'tiled',
			url: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_2009_Aerial_Basemap_WGS/MapServer',
			title: '2009 Edina Aerial',
			slider: true,
			noLegend: false,
			collapsed: false,
			sublayerToggle: false, //true to automatically turn on sublayers
			options: {
				id: '2009imagery',
				opacity: 1.0,
				visible: false,
				
			},
			identifyLayerInfos: {
				layerIds: [1]
			},
			layerControlLayerInfos: {        
				swipe: true,
				allSublayerToggles: false,	
				noZoom: false,
				noLegend: true
			}

				
			
			
			
		}],
		// set include:true to load. For titlePane type set position the the desired order in the sidebar
		widgets: {		
			growler: {
				include: false,
				id: 'growler',
				type: 'domNode',
				path: 'gis/dijit/Growler',
				srcNodeRef: 'growlerDijit',
				options: {}
			},
			geocoder: {
				include: true,
				id: 'geocoder',
				type: 'domNode',
				path: 'gis/dijit/Geocoder',
				srcNodeRef: 'geocodeDijit',
				options: {
					map: true,
					mapRightClickMenu: true,
					zoomScale: 500,
					geocoderOptions: {
							autoComplete: true,
							arcgisGeocoder: {
								placeholder: "Enter Address or Place"
								}
						}
					
				
				}
			},
			identify: {
				include: true,
				id: 'identify',
				type: 'titlePane',
				path: 'gis/dijit/Identify',
				title: 'Identify',
				open: false,
				position: 3,
				options: 'config/identify'
			},
			basemaps: {
				include: true,
				id: 'basemaps',
				type: 'domNode',
				path: 'gis/dijit/Basemaps',
				srcNodeRef: 'basemapsDijit',
				options: 'config/basemaps'
			},
			mapInfo: {
				include: true,
				id: 'mapInfo',
				type: 'domNode',
				path: 'gis/dijit/MapInfo',
				srcNodeRef: 'mapInfoDijit',
				options: {
					map: true,
					mode: 'dms',
					firstCoord: 'y',
					unitScale: 3,
					showScale: true,
					xLabel: '',
					yLabel: '',
					minWidth: 286
				}
			},
			scalebar: {
				include: true,
				id: 'scalebar',
				type: 'map',
				path: 'esri/dijit/Scalebar',
				options: {
					map: true,
					attachTo: 'bottom-left',
					scalebarStyle: 'ruler',
					/*scalebarUnit: 'dual'*/
				}
			},
			locateButton: {
				include: true,
				id: 'locateButton',
				type: 'domNode',
				path: 'gis/dijit/LocateButton',
				srcNodeRef: 'locateButton',
				options: {
					map: true,
					publishGPSPosition: true,
					highlightLocation: true,
					useTracking: true,
					geolocationOptions: {
						maximumAge: 0,
						timeout: 15000,
						enableHighAccuracy: true
					}
				}
			},
			overviewMap: {
				include: true,
				id: 'overviewMap',
				type: 'map',
				path: 'esri/dijit/OverviewMap',
				options: {
					map: true,
					attachTo: 'bottom-right',
					maximizeButton: false,
					expandFactor: 12,
					color: '#FF0000',					
					height: 150,
					width: 150,
					opacity: 0.7,
					visible: true
				}
			},
			homeButton: {
				include: true,
				id: 'homeButton',
				type: 'domNode',
				path: 'esri/dijit/HomeButton',
				srcNodeRef: 'homeButton',
				options: {
					map: true,
					extent: new Extent({
						xmin: -93.495404,
						ymin: 44.842688,
						xmax:-93.231217,
						ymax: 44.937912,
						spatialReference: {
							wkid: 4326
						}
					})
				}
			},
			legend: {
				include: false,
				id: 'legend',
				type: 'titlePane',
				path: 'esri/dijit/Legend',
				title: 'Legend',
				open: false,
				position: 0,
				options: {
					map: true,
					legendLayerInfos: true
				}
			},
			layerControl: {
				include: true,
				id: 'layerControl',
				type: 'titlePane',
				path: 'gis/dijit/LayerControl',
				title: 'Layers',
				open: true,
				position: 0,
				//placeAt: 'right',
				options: {
					map: true,
					layerControlLayerInfos: true,
					separated: true,
                    vectorReorder: false,
                    overlayReorder: false,
					noZoom: true,
					swiperButtonStyle:"position:absolute;top:20px;right:150px;z-index:50; font-weight: bold;"
					
				}
			},	
			//save/share current map widget
			settings: {
				include: false,
				id: 'settings',
				position: 10,
				type: 'titlePane',
				path: 'gis/dijit/AppSettings',
				title: 'Save/Share Current Map',
				options: {
					map: true,
					tocLayerInfos: true
				}
			},
			bookmarks: {
				include: true,
				id: 'bookmarks',
				type: 'titlePane',
				path: 'gis/dijit/Bookmarks',
				title: 'Bookmarks',
				//placeAt: 'right',
				open: false,
				position: 2,
				options: 'config/bookmarks'
			},
			find: {
				include: false,
				id: 'find',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Find',
				title: 'Find',
				open: false,
				position: 3,
				options: 'config/find'
			},
			draw: {
				include: true,
				id: 'draw',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Draw',
				title: 'Draw',
				open: false,
				position: 4,
				//placeAt: 'right',
				options: {
					map: true,
					mapClickMode: true
				}
			},
			measure: {
				include: true,
				id: 'measurement',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Measurement',
				title: 'Measurement',
				open: false,
				position: 5,
				//placeAt: 'right',
				options: {
					map: true,
					mapClickMode: true,
					defaultAreaUnit: units.SQUARE_MILES,
					defaultLengthUnit: units.MILES
				}
			},
			print: {
				include: true,
				id: 'print',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Print',
				title: 'Print',
				open: false,
				position: 6,
				//placeAt: 'right',
				options: {
					map: true,
					printTaskURL: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_Print/GPServer/Export%20Web%20Map',
					copyrightText: 'Copyright 2014',
					/*authorText:'',*/
					defaultTitle: 'Edina Water Resources Map',
					defaultFormat: 'PDF',
					defaultLayout: 'Edina Letter Landscape'
				}
			},
			directions: {
				include: false,
				id: 'directions',
				type: 'titlePane',
				path: 'gis/dijit/Directions',
				title: 'Directions',
				open: false,
				position: 7,
				//placeAt: 'right',
				options: {
					map: true,
					mapRightClickMenu: true,
					options: {
						routeTaskUrl: 'http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route',
						routeParams: {
							directionsLanguage: 'en-US',
							directionsLengthUnits: units.MILES
						}
					}
				}
			},
			editor: {
				include: false,
				id: 'editor',
				type: 'titlePane',
				path: 'gis/dijit/Editor',
				title: 'Editor',
				open: false,
				position: 8,
				//placeAt: 'right',
				options: {
					map: true,
					mapClickMode: true,
					editorLayerInfos: true,
					settings: {
						toolbarVisible: true,
						showAttributesOnClick: true,
						enableUndoRedo: true,
						createOptions: {
							polygonDrawTools: ['freehandpolygon', 'autocomplete']
						},
						toolbarOptions: {
							reshapeVisible: true,
							cutVisible: true,
							mergeVisible: true
						}
					}
				}
			},
			streetview: {
				include: true,
				id: 'streetview',
				type: 'titlePane',
				canFloat: true,
				position: 9,
				path: 'gis/dijit/StreetView',
				title: 'Google Street View',
				//placeAt: 'right',
				options: {
					map: true,
					mapClickMode: true,
					openOnStartup: true,
					mapRightClickMenu: true
				}
			},			
			help: {
				include: true,
				id: 'help',
				type: 'floating',
				path: 'gis/dijit/Help',
				title: "Edina's Water Resource Map",
				options: {
					openOnStartup: true
					}
			},
			
			dnd: {
				include: false,
				id: 'dnd',
				type: 'titlePane',
				canFloat: true,
				position: 11,
				open: true,
				path: 'gis/dijit/DnD',
				title: 'Drag and Drop' ,
				options: {
					map: true
				}
			},
			
			navhash: {
				include: true,
				id: 'navhash',
				type: 'invisible',
				path: 'gis/dijit/MapNavigationHash/MapNavigationHash',
				title: 'Map Navigation Hash',
				options: {
					map: true
				}
			},
			
			nearby: {
				include: false,
				id: 'nearby',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Nearby',
				title: 'Nearby',
				open: false,
				position: 12,
				options: {
					map: true,
					mapClickMode: true
				}
			},
			
			 layerSwapper: {
                include: false,
                id: 'layerSwapper',
                type: 'titlePane',
                title: 'Imagery Viewer',
                path: 'gis/dijit/LayerSwapper',
                open: true,
				position: 12,
                options: 'config/layerSwapper'
            }
		}
	};
});