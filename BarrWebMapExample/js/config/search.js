define({
	map: true,
	queries: [
		{
			description: 'Find Pollution Sources by City Name (tip: enter % character to see all values)',
			url: 'https://maps2013.barr.com/maps/rest/services/02_Barr/Barr_Corridor_Study_Demo_MS/MapServer/0',
			//where: "Subwatersh <> ''",
			//where: "Subwatersh <> ''",
			where: "UPPER(CITY) LIKE '%${0}%'",
			outFields: ["*"],
			dgridColumns: {
				CITY: "City",
				NAME: "Name"
				},
			dgridSort: [ {attribute: "CITY", descending: false}],
			//searchFields: ['Subwatersh'],
			minChars: 1
		},
{
			description: 'Find Substations by Company Name (tip: enter % character to see all values)',
			url: 'https://maps2013.barr.com/maps/rest/services/02_Barr/Barr_Corridor_Study_Demo_MS/MapServer/2',
			//where: "Subwatersh <> ''",
			//where: "Subwatersh <> ''",
			where: "UPPER(COMPANY) LIKE '%${0}%'",
			outFields: ["*"],
			dgridColumns: {
				COMPANY: "Company",
				SUB_TYPE: "Sub Type"
				},
			dgridSort: [ {attribute: "COMPANY", descending: false}],
			//searchFields: ['Subwatersh'],
			minChars: 1
		}
		/*,
		
		{
			description: 'Find Major Watershed by Name (tip: enter % character to see all values)',
			url: 'https://maps2013.barr.com/maps/rest/services/Edina/Edina_City_Data_Drainage/MapServer/1',			
			where:  "UPPER(Major_WS) LIKE '%${0}%'", 			
			outFields: ["Major_WS", "Acres"],
			dgridColumns: {
				Major_WS: "Major Watershed",
				Acres: "Acres"
				//Drainage_A: "Drainage Area"
				},
			dgridSort: [ {attribute: "Major_WS", descending: false}],
			//searchFields: ['Subwatersh'],
			minChars: 1
		}*/
		
	]
});