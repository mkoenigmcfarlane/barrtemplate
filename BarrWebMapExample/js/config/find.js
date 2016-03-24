define({
	map: true,
	queries: [
		{
			description: 'Find Electric Transmission Line - 345kV by Company, Circuit ID or Voltage',
			url: 'https://maps2013.barr.com/maps/rest/services/Mobile_GIS_Broadcasting/Barr_Transmission_Line_Demo_MS/MapServer/',
			layerIds: [3],
			searchFields: ['COMPANY, CIRCUIT_ID, VOLTAGE '],
			minChars: 1
		},
		{
			description: 'Find Substation by Company, Comp ID or Sub Type',
			url: 'https://maps2013.barr.com/maps/rest/services/Mobile_GIS_Broadcasting/Barr_Transmission_Line_Demo_MS/MapServer/',
			layerIds: [2],
			searchFields: ['COMPANY','COMP_ID', 'SUB_TYPE',],
			minChars: 1
		}/*,
		
		{
			description: 'Find Tank',
			url: 'https://maps2013.barr.com/maps/rest/services/FlintHills/FlintHills_PineBend_SWMU_ReleaseAreas_Annotations/MapServer',
			layerIds: [0],
			searchFields: ['TextString','Tank ID',],
			minChars: 1
		},
		
		{
			description: 'Find Road',
			url: 'https://maps2013.barr.com/maps/rest/services/FlintHills/FlintHills_PineBend_SWMU_ReleaseAreas_Annotations/MapServer',
			layerIds: [4],
			searchFields: ['TextString','Road Name',],
			minChars: 1
		}*/
	]
});