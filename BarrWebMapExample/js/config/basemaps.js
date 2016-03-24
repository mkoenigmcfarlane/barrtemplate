define([
    'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer',
    'esri/layers/osm'
], function (Basemap, BasemapLayer, osm) {
    return {
        map: true,
        //must be either 'agol' or 'custom'
        mode: 'custom',
        title: 'Basemaps',
        // must match one of the basemap keys below
        mapStartBasemap: 'topo',
        //basemaps to show in menu. define in basemaps object below and reference by name here
        // TODO Is this array necessary when the same keys are explicitly included/excluded below?
        basemapsToShow: ['streets', 'satellite','hybrid', 'topo2D', 'topo', 'shaded', 'lightGray', 'gray','natgeo', 'national-geographic', 'osm', 'oceans', 'test'],

        // define all valid custom basemaps here. Object of Basemap objects. For custom basemaps, the key name and basemap id must match.
        basemaps: {

            // agol basemaps
           // streets: {
              //  title: 'Streets'
           // },
            //satellite: {
               // title: 'Satellite'
           // },
           // hybrid: {
                //title: 'Hybrid'
           // },
           // topo: {
               // title: 'Topo'
           // }/*,
           // gray: {
              //  title: 'Gray'
          //  },
          // oceans: {
              //  title: 'Oceans'
          //  },
          //  'national-geographic': {
               // title: 'Nat Geo'
           //},
          //  /osm: {
            //    title: 'Open Street Map'
           // }*/

            // examples of custom basemaps
            
            streets: {
                title: 'Streets',
                basemap: new Basemap({
                    id: 'streets',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
                    })]
                })
            },
            satellite: {
                title: 'Satellite',
                basemap: new Basemap({
                    id: 'satellite',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    })]
                })
            },
			topo2D: {
                title: 'USA Topo2D (USGS)',
                basemap: new Basemap({
                    id: 'topo2D',
                    layers: [new BasemapLayer({
                        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer'
                    })]
                })
            },
			topo: {
                title: 'Topo',
                basemap: new Basemap({
                    id: 'topo',
                    layers: [new BasemapLayer({
                        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer'
                    })]
                })
            },
			natgeo: {
                title: 'Nat Geog',
                basemap: new Basemap({
                    id: 'natgeo',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer'
                    })]
                })
            },
			shaded: {
                title: 'Shaded Relief',
                basemap: new Basemap({
                    id: 'shaded',
                    layers: [new BasemapLayer({
                        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer'
                   }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer',
                        isReference: true,
                        displayLevels: [0, 1, 2, 3, 4, 5, 6, 7]
                    }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer',
                        isReference: true,
                        displayLevels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
                    })]
                })
            },
            hybrid: {
                title: 'Hybrid',
                basemap: new Basemap({
                    id: 'hybrid',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer',
                        isReference: true,
                        displayLevels: [0, 1, 2, 3, 4, 5, 6, 7]
                    }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer',
                        isReference: true,
                        displayLevels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
                    })]
                })
            },
            lightGray: {
                title: 'Light Gray Canvas',
                basemap: new Basemap({
                    id: 'lightGray',
                    layers: [new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer'
                    }), new BasemapLayer({
                        url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer',
                        isReference: true
                    })]
                })
            }
            
        }
    };
});