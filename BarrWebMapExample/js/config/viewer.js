//CMV version 1.3.3 - MST2

define([
	'esri/units',
	'esri/geometry/Extent',
	'esri/config',
	'esri/tasks/GeometryService',
	'esri/layers/ImageParameters'
], function(units, Extent, esriConfig, GeometryService, ImageParameters) {

	// url to www.barr.com/maps websites (proxy must be on same machine hosting you app. See proxy folder for readme.) - MST2
	esriConfig.defaults.io.proxyUrl = 'https://www.barr.com/maps/DotNet/proxy.ashx';
	esriConfig.defaults.io.alwaysUseProxy = true;
	esriConfig.defaults.io.timeout = 15000000; // added by MST2 to troubleshoot proxy loading issues
	// url to PM hosted websites (proxy must be on same machine hosting you app. See proxy folder for readme. - MST2
	//esriConfig.defaults.io.proxyUrl = 'https://pm.barr.com/DotNet/proxy.ashx';
	//esriConfig.defaults.io.alwaysUseProxy = true;


	// url to your geometry server.
	esriConfig.defaults.geometryService = new GeometryService('https://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

	//image parameters for dynamic services, set to png32 for higher quality exports.
	var imageParameters = new ImageParameters();
	imageParameters.format = 'png32';

	return {

		// used for debugging your app
		isDebug: false,
		//default mapClick mode, mapClickMode lets widgets know what mode the map is in to avoid multipult map click actions from taking place (ie identify while drawing).
		defaultMapClickMode: 'identify',
		// map options, passed to map constructor. see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
		mapOptions: {
			basemap: 'topo', //Also set starting basemap in the config/basemaps.js file, to use custom basemaps see the config/CustomBasemaps folder for basemap.js and viewer.js sample code -  MST2
			center: [-93.375227 , 45.221247],
			zoom: 12,
			sliderStyle: 'small'

			/* create a customized LOD schema - used with ESRI basemaps to zoom in past ESRI basemaps extents - MST2*/
			/*,
			lods: [{
                'level': 0,
                'resolution': 156543.03392800014,
                'scale': 5.91657527591555E8
            }, {
                'level': 1,
                'resolution': 78271.51696399994,
                'scale': 2.95828763795777E8
            }, {
                'level': 2,
                'resolution': 39135.75848200009,
                'scale': 1.47914381897889E8
            }, {
                'level': 3,
                'resolution': 19567.87924099992,
                'scale': 7.3957190948944E7
            }, {
                'level': 4,
                'resolution': 9783.93962049996,
                'scale': 3.6978595474472E7
            }, {
                'level': 5,
                'resolution': 4891.96981024998,
                'scale': 1.8489297737236E7
            }, {
                'level': 6,
                'resolution': 2445.98490512499,
                'scale': 9244648.868618
            }, {
                'level': 7,
                'resolution': 1222.992452562495,
                'scale': 4622324.434309
            }, {
                'level': 8,
                'resolution': 611.4962262813797,
                'scale': 2311162.217155
            }, {
                'level': 9,
                'resolution': 305.74811314055756,
                'scale': 1155581.108577
            }, {
                'level': 10,
                'resolution': 152.87405657041106,
                'scale': 577790.554289
            }, {
                'level': 11,
                'resolution': 76.4370282850732,
                'scale': 288895.277144
            }, {
                'level': 12,
                'resolution': 38.2185141425366,
                'scale': 144447.638572
            }, {
                'level': 13,
                'resolution': 19.1092570712683,
                'scale': 72223.819286
            }, {
                'level': 14,
                'resolution': 9.55462853563415,
                'scale': 36111.909643
            }, {
                'level': 15,
                'resolution': 4.77731426794937,
                'scale': 18055.954822
            }, {
                'level': 16,
                'resolution': 2.38865713397468,
                'scale': 9027.977411
            }, {
                'level': 17,
                'resolution': 1.1943285668550503,
                'scale': 4513.988705
            }, {
                'level': 18,
                'resolution': 0.5971642835598172,
                'scale': 2256.994353
            }, {
                'level': 19,
                'resolution': 0.29858214164761665,
                'scale': 1128.497176
            }, {// end of esri LODs, start of TRC LODs
                'level': 20,
                'resolution': 0.21166709000084669,// add resolution
                'scale': 800
            }, {
                'level': 21,
                'resolution': 0.10583354500042334, // add resolution
                'scale': 400
            }, {
                // one additional LOD
                'level': 22,
                'resolution': 0.07620015240030481, // add resolution
                'scale': 288
            }]
			*/
        },

		 panes: {
		 	left: {
				splitter: true
		 	},
			//},
		//,
		/*right: {
		 	id: 'sidebarRight',
		 		placeAt: 'outer',
		 	region: 'right',
		 		splitter: true,
				collapsible: true
		 	},
			,*/

			/*
			bottom: {
		 		id: 'sidebarBottom',
		 		placeAt: 'outer',
		 		splitter: true,
		 		collapsible: true,
		 		region: 'bottom',
				tyle: 'height:400px;',
				content: '<div id="attributesContainer"></div>'
			}
			*/
		 	},/*
		top: {
				//id: 'sidebarTop',
		 		//placeAt: 'outer',
				//collapsible: true,
		 		//splitter: true,
		 		//region: 'top'
			}
		 },
		 collapseButtonsPane: 'center',

		 */

		// operationalLayers: Array of Layers to load on top of the basemap: valid 'type' options: 'dynamic', 'tiled', 'feature'.
		// The 'options' object is passed as the layers options for constructor. Title will be used in the legend only. id's must be unique and have no spaces.
		// 3 'mode' options: MODE_SNAPSHOT = 0, MODE_ONDEMAND = 1, MODE_SELECTION = 2

		operationalLayers: [{
			type: 'feature',
			url: 'https://maps2013.barr.com/maps/rest/services/02_Barr/Barr_Corridor_Study_Demo_FS/FeatureServer/0',
			title: 'Comments',
			options: {
				id: 'comments', //id can't contain any spaces and must be unique - MST2
				opacity: 1.0,
				visible: true, // initial visibility when map loads- this overrides service properties - MST2
				outFields: ['UserName','Comments','Date','Type'], // use this as an alternative to configuring popups with indentify.js if you have a single feature layer, will honor aliases set in the map service (enter field name here, not alias). this is not an option for a dynamic service with multiple layers - MST2*/
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

			{
			type: 'dynamic',
			url: 'https://maps2013.barr.com/maps/rest/services/02_Barr/Barr_Corridor_Study_MNDOT_Cameras/MapServer',
			title: 'MNDOT Traffic Camera',
			noLegend: false,
			collapsed: false,
			options: {
				id: 'MNDOT', //id can't contain any spaces and must be unique, reference this ID to configure pop up fields for layers in tehi group - MST2
				opacity: 1.0,
				visible: true,
				imageParameters: imageParameters
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: false,
				expanded: false,
				metadataUrl: true,
				//downloadUrl: 'https://www.barr.com/maps/BarrWebMapExample/DataDownload/route_alignment.zip', // add URL link here to file for download or any other link (must call it downloadUrl in viewer.js). To rename the title in layer control menu edit the js\gis\dijit\LayerControl\nls\resourced.js file - MST2
			},
			identifyLayerInfos: {
				layerIds: [''] // leave blank like [' '] to make all layers identifiable - MST2
			}
			},



		{
			type: 'dynamic',
			url: 'https://maps2013.barr.com/maps/rest/services/02_Barr/Barr_Corridor_Study_Demo_MS/MapServer',
			title: 'Corridor Study Reference Layers',
			noLegend: false,
			collapsed: false,
			options: {
				id: 'CorridorData', //id can't contain any spaces and must be unique, reference this ID to configure pop up fields for layers in tehi group - MST2
				opacity: 1.0,
				visible: true,
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
				layerIds: [0,9,8] // leave blank like [' '] to make all layers identifiable - MST2
			}
			},

			{
			type: 'wms',
			url: 'http://deli.dnr.state.mn.us/cgi-bin/wms?map=DELI_WMS_MAPFILE&',
			title: 'FSA Color Ortho 2003-04 (streaming from MN DNR)',
			visibleLayers: ["L390003782306"],	//UNIQUE TO A WMS SERVICE - MST2
			options: {
				id: 'mngeo_wms',
				opacity: 1.0,
				visible: false,	//default visibility when map opens - overrides service properties - MST2
				format: "png",
               visibleLayers: ["L390003782306"]
			},
			layerControlLayerInfos: {
				swipe: true,
				allSublayerToggles: true,
				//metadataUrl: true,
			}
				},

			//add a GeoRSS layer - MST2
			{
			type: 'georss',
			url: 'http://water.weather.gov/ahps2/rss/obs/ankm5.rss',
			title: 'Observed River Conditions (Natl Weather Service GeoRSS)',
			noLegend: false,
			options: {
				id: 'geo',
				opacity: 1.0,
				visible: true,	//default visibility when map opens - overrides service properties - MST2
			},
			layerControlLayerInfos: {
				noMenu: true  // this will remnove the layer control menu for specified layer - MST2
			}


			//}
		//,



		}],
		// set include:true to load. For titlePane type set position the the desired order in the sidebar
		//for help with configuring widgets, see https://github.com/cmv/cmv-contrib-widgets - MST2
		widgets: {
			//growler is widget that scrolls users position across map - MST2
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
							highlightLocation: true, //added by MST2 to add graphic on map at result location
							arcgisGeocoder: {
								placeholder: "Enter Address or Place"
								}
						}
				}
			},

			//the identify widget provides an interface for the user to select which map layer to ID on (instead of ID'ing on all when layers are stacked), this widget is on but hidden from the left pane using CSS property "#identify_parent_titleBarNode{". Turning the widget off breaks the ID tool - MST2
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
				//options: 'config/CustomBasemaps/basemaps_CustomBasemaps.js' //  use this line and comment out previous line to utilize custom basemaps. Web app's projection/coordinate system is set by first basemap layer to load. Change configurations in this file to implement custom basemaps and also make changes to this viewer.js file to implement custom basemaps (see viewer.js example at js\config\CustomBasemaps\viewer_CustomBasemaps.js) - MST2
			},

			//coordinates and zoom level displayed in bottom left corner of map frame - this tool is buggy, but has been fixed at CMV ver 1.3.4 - MST2
			mapInfo: {
				include: true,
				id: 'mapInfo',
				type: 'domNode',
				path: 'gis/dijit/MapInfo',
				srcNodeRef: 'mapInfoDijit',
				options: {
					map: true,
					mode: 'dec',
					firstCoord: 'x',
					unitScale: 3,
					showScale: true,
					showZoom: true,
					xLabel: '',
					yLabel: '',
					minWidth: 200
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

			//displays the map center and zoom level in the URL and allows user to use browser back and forward button to toggle between previous extents - MST2
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

			//X and Y min is SW corner of map frame and X and Y max is NE corner of map frame - MST2
			homeButton: {
				include: true,
				id: 'homeButton',
				type: 'domNode',
				path: 'esri/dijit/HomeButton',
				srcNodeRef: 'homeButton',
				options: {
					map: true,
					extent: new Extent({
						xmin:  -93.612947 ,
						ymin: 45.130347 ,
						xmax:  -93.140535 ,
						ymax: 45.312683,
						spatialReference: {
							wkid: 4326
						}
					})
				}
			},

			help: {
				include: true,
				id: 'help',
				type: 'floating',
				path: 'gis/barr_custom/Help',
				title: 'Welcome to Barr Web Map Example',
				options: {
					openOnStartup: true //set to false to turn off splash screen feature - MST2
					}
			},

			//this disclaimer can be used to post notice of website maintenance or outage, or it can be used a splash screen instead of the Help dialog. Currently it is configured to be used as a splash screen for phone sized devices - these settings are in the main.css element named "#disclaimer_parent {"  - MST2
			disclaimer: {
				include: true,
				id: 'disclaimer',
				type: 'floating',
				path: 'gis/barr_custom/Disclaimer',
				title: 'Disclaimer',
				options: {

				// you can customize the button text
				 i18n: {
				 accept: 'Agree',
				 decline: 'Decline'
				 },

				// pre-define the height so the dialog is centered properly
				style: 'height:195px;width:275px;',

				// you can put your content right in the config
				content: '<div align="center" style=" background: url("../images/grid.png"); color:black;font-size:18px;padding:25px;">Public data was used to generate this example for illustrative purposes only. It does not represent an actual project. <br/></div>',
				//<img src="http://fc06.deviantart.net/fs5/i/2004/313/2/5/Captain_Jolly_Roger_by_ramiusraven.jpg" style="width:160px;margin-top:25px;" /></div>',

				// or you can provide the url for another page that includes the content
				//href: './disclaimer.html',

				// the url to go to if the user declines.
				declineHref: 'https://www.barr.com/',

				}

			},

			//related records requires the bottom pane to be active - see \\barrweb1prod\wwwroot\barr\maps\MST2_Development_Sites\related for example site that has this functionality working - MST2
			relatedRecords: {
				include: false,
				id: 'test',
				position: 0,
				canFloat: true,
				open: true,
				type: 'contentPane',
				placeAt: 'bottom',
				path: 'gis/dijit/RelatedRecordTable',
				title: 'Inspection Reports',
				options: 'config/relatedRecords'
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
				path: 'gis/barr_custom/LayerControl',
				title: 'Layers',
				open: true,
				position: 1,
				//placeAt: 'right',
				//See readme file at https://github.com/cmv/cmv-app/blob/098b6ebfe331085636fac523b55b4ef61a990272/viewer/js/gis/dijit/LayerControl/README.md for more info on configuring the layer control options - configurations below are gloabl for all layers.  Some of these options can also be set on individual layers above - MST2
				options: {
					map: true,
					layerControlLayerInfos: true,
					separated: true,
                    vectorReorder: true, //Enable reordering of vector layers in map and Layer Control. Default is false.
					vectorLabel: false, //Label for vector layers. Default is false. Pass the label or html for quick easy custom styling of label text.
                    overlayReorder: true, //Enable reordering of overlay layers in map and Layer Control.
					overlayLabel: false, //Label for overlay layers. Default is false. Pass the label or html for quick easy custom styling of label text.
					noZoom: false, // option to zoom to layer extent  - false means user has option to zoom to layer - MST2
					swiperButtonStyle:"position:absolute;top:20px;right:153px;z-index:50; font-weight: bold;"

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

			//original find tool, replaced by the search tool immediately below - MST2
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

			//search is a custom tool added by MST2 that is not part of the CMV base package - must set search query in the "js\config\search.js" file - MST2
			search: {
				include: true,
				id: 'search',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/barr_custom/Search',
				title: 'Search Data',
				open: false,
				position: 4,
				options: 'config/search'
			},

			//more advanced search tool that has not been fully tested yet - MST2
			search2: {
				include: false,
				id: 'search2',
				type: 'titlePane',
				path: 'gis/widgets/Search',
				canFloat: true,
				title: 'Search Table',
				open: false,
				position: 5,
				options: 'config/searchWidget'
			},

			nearby: {
				include: true,
				id: 'nearby',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Nearby',
				title: 'Search Nearby',
				open: false,
				position: 6,
				options: {
					map: true,
					mapClickMode: true
				}
			},


			attributesTable: {
				include: false,
				id: 'attributesContainer',
				type: 'domNode',
				srcNodeRef: 'attributesContainer',
				path: 'gis/widgets/AttributesTable',
				options: {
					map: true,
					mapClickMode: true,

					// use a tab container for multiple tables or
					// show only a single table
					useTabs: true,

					// used to open the sidebar after a query has completed
					sidebarID: 'sidebarBottom',

					// optional tables to load when the widget is first instantiated
					/*tables: [
				{
						title: 'TEST',
						topicID: 'testQuery',
						queryOptions: {
						queryParameters: {
                        url: 'https://maps2013.barr.com/maps/rest/services/02_Barr/Barr_Corridor_Study_Demo_MS/MapServer/0',
                        maxAllowableOffset: 100,
                        where: 'OBJECTID <>0'
                    },
                    idProperty: 'ObjectID'
						}
					}
				]*/
			}
		},

			exportDialog: {
				include: false,
				id: 'export',
				type: 'floating',
				path: 'gis/widgets/Export',
				title: 'Export',
				options: {}
			},


			measure: {
				include: true,
				id: 'measurement',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Measurement',
				title: 'Measurement',
				open: false,
				position: 7,
				//placeAt: 'right',
				options: {
					map: true,
					mapClickMode: true,
					defaultAreaUnit: units.SQUARE_MILES,
					defaultLengthUnit: units.MILES
				}
			},

			draw: {
				include: true,
				id: 'draw',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Draw',
				title: 'Draw',
				open: false,
				position: 8,
				//placeAt: 'right',
				options: {
					map: true,
					mapClickMode: true
				}
			},

			editor: {
				include: true,
				id: 'editor',
				type: 'titlePane',
				path: 'gis/dijit/Editor',
				title: 'Editor',
				open: false,
				position: 9,
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

			hello: {
				include: true, //included in the left pane or not -- MEM2
				id: 'hello', //necessary for DOM tree assignments and/or css -- MEM2
				type: 'titlePane', //necessary for DOM tree assignments -- MEM2
				canFloat: false, //option to float the widget outside of pane -- MEM2
				path: 'gis/barr_custom/Hello_World', //path to folder with custom files for widget EXCEPT the js file -- MEM2
				title: 'Hello', //title displayed in the left pane -- MEM2
				open: false, //sets whether widget is opened or closed at initiation -- MEM2
				position: 10, //place in the left pane widget list -- MEM2
				options: {  //when adding a new widget, must have options of some kind -- MEM2
					map: true,
					helloTaskURL: 'https://maps2013.barr.com/maps/rest/services/01_Testing/EnvironmentalImpact_ShapefileTools/GPServer/ShapefileTools'
				}
			},

			streetview: {
				include: true,
				id: 'streetview',
				type: 'titlePane',
				canFloat: true,
				position: 11,
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

			directions: {
				include: false,
				id: 'directions',
				type: 'titlePane',
				path: 'gis/dijit/Directions',
				title: 'Directions',
				open: false,
				position: 12,
				//placeAt: 'right',
				options: {
					map: true,
					mapRightClickMenu: true,
					options: {
						routeTaskUrl: 'https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route',
						routeParams: {
							directionsLanguage: 'en-US',
							directionsLengthUnits: units.MILES
						}
					}
				}
			},

			print: {
				include: true,
				id: 'print',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/barr_custom/Print',
				title: 'Print',
				open: false,
				position: 13,
				//placeAt: 'right',
				options: {
					map: true,
					printTaskURL: 'https://maps2013.barr.com/maps/rest/services/02_Barr/ExportWebMapBarr/GPServer/Export%20Web%20Map',
					copyrightText: 'Copyright 2014',
					/*authorText:'',*/
					defaultTitle: 'Barr Demo Webmap',
					defaultFormat: 'PDF',
					defaultLayout: 'Barr Print Letter Landscape'
				}
			},

			dnd: {
				include: true,
				id: 'dnd',
				type: 'titlePane',
				canFloat: true,
				position: 14,
				open: true,
				path: 'gis/barr_custom/DnD',
				title: 'Drag and Drop' ,
				options: {
					map: true
				}
			},

			layerSwapper: {
                include: false,
                id: 'layerSwapper',
                type: 'titlePane',
                title: 'Imagery Viewer',
                path: 'gis/dijit/LayerSwapper',
                open: true,
				position: 15,
                options: 'config/layerSwapper'
				}
			},

			//a clip and ship tool - BArr needs to publish own extract data task service to use here - MST2
			extract: {
				include: false,
				id: 'extract',
				type: 'titlePane',
				canFloat: true,
				path: 'gis/dijit/Extract',
				title: 'Export',
				open: true,
				position: 16,
					options: {
						map: true,
						extractTaskURL: 'http://sampleserver4.arcgisonline.com/ArcGIS/rest/services/HomelandSecurity/Incident_Data_Extraction/GPServer/Extract%20Data%20Task',
						defaultFormat: 'Shapefile - SHP - .shp',
						//defaultLayer: ' Incident Points'
				}
			},

			settings: {
				include: false,
				id: 'settings',
				position: 17,
				type: 'titlePane',
				path: 'gis/dijit/AppSettings',
				title: 'Save/Share Current Map',
				options: {
					//required:
						map: true,
						layerControlLayerInfos: true

				//optional:
					// appSettings: {},
					//  parametername: 'cmvSettings',
					// mapRightClickMenu: true,
					//address: 'email@email.com',
					// subject: 'Check out the Barr Engineering Web Map',
					//body: 'Copy and past this URL to your browser to see the web map <br/> '
					//emailSettings: ['saveMapExtent', 'savelayerVisibility'],
					//shareNode: ''
					//shareTemplate: ''
				}

			}
	};
});
