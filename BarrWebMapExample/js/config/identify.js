define({
	map: true,
	mapClickMode: true,
	mapRightClickMenu: true,
	identifyLayerInfos: true,
	identifyTolerance: 5,

	// config object definition:
	//	{<layer id>:{
	//		<sub layer number>:{
	//			<pop-up definition, see link below>
	//			}
	//		},
	//	<layer id>:{
	//		<sub layer number>:{
	//			<pop-up definition, see link below>
	//			}
	//		}
	//	}

	// for details on pop-up definition see: https://developers.arcgis.com/javascript/jshelp/intro_popuptemplate.html

	identifies: {
		MNDOT: {
			0: {
				title: 'MNDOT Traffic Camera',
				fieldInfos: [{
					fieldName: 'OBJECTID_1',
					visible: false
					}, {
					fieldName: 'Shape',
					visible: true
					}, {
					fieldName: 'OBJECTID',
					visible: false
					}, {
					fieldName: 'CAM',
					label: 'Camera ID',
					visible: true
					}, {
					fieldName: 'LOCATION',
					label: 'Location',
					visible: true
					}, {
					fieldName: 'HyperLink',
					Label: 'HyperLink',
					visible: true
									
				}]
				//add "mediaInfo's" code below to display media content in ID pop up window - MST2
				//*********************need to add 1 more } at end of this page - mst2 *****************
				,
					mediaInfos: [{
					title: 'Attachment Preview',
					type: 'image',
					caption: 'Click on photo below to see larger',
					value: {
						sourceURL: '{HyperLink}',
						linkURL: '{HyperLink}'
					}
				}]
				
		},
		
		
		
			8: {
				title: 'National Wetlands Inventory (2011 Updates)',
				fieldInfos: [{
					fieldName: 'OBJECTID',
					visible: false
					}, {
					fieldName: 'WETLAND TYPE',
					visible: true
					}, {
					fieldName: 'AREA (ACRES)',
					visible: true
					}, {
					fieldName: 'COWARDIN CLASS',
					visible: true
					}, {
					fieldName: 'CIRCULAR 39 CLASS',
					visible: true
										
				}]
			}
		},
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		louisvillePubSafety: {
			2: {
				title: 'Police Station',
				fieldInfos: [{
					fieldName: 'COMPANY',
					visible: false
				}, {
					fieldName: 'SUB_TYPE',
					visible: true
				}, {
					fieldName: 'SOURCE',
					visible: true
				}, {
					fieldName: 'COMMENTS',
					visible: true
				
				}]
			},
			8: {
				title: 'Traffic Camera',
				description: '{Description} lasted updated: {Last Update Date}',
				mediaInfos: [{
					title: '',
					caption: '',
					type: 'image',
					value: {
						sourceURL: '{Location URL}',
						linkURL: '{Location URL}'
					}
				}]
			}
		}
	}
});