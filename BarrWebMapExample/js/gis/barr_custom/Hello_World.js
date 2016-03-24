define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/lang',
    'dojo/dom-construct',
    'dojo/topic',
    'esri/tasks/Geoprocessor',
    'dojo/text!./Hello_World/templates/Hello_World.html',
    'dojo/i18n!./Hello_World/nls/resource',
    'dijit/form/Button',
    'xstyle/css!./Hello_World/css/Hello_World.css'

], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, lang, domConstruct, topic, Geoprocessor, template, i18n) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
      templateString: template, // necessary - connects to Hello_World.html template -- MEM2
      i18n: i18n, // necessary - establishes the nls/resource page for text config -- MEM2
      widgetsInTemplate: true, // probably necessary. for sure a good idea -- MEM2
      mapClickMode: null,
      baseClass: 'gis_HelloDijit',

      sayHi: function () { // this function is called in Hello_World.html. fired on click event -- MEM2
        alert("Hello world! It's working!");
      },

      sayBye: function() {
        alert("See ya later!");
      }
    });
});
