Ext.data.JsonP.BasiGX_view_component_Map({"tagname":"class","name":"BasiGX.view.component.Map","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Map.js","href":"Map2.html#BasiGX-view-component-Map"}],"aliases":{"widget":["basigx-component-map"]},"alternateClassNames":[],"extends":"GeoExt.component.Map","mixins":[],"requires":["BasiGX.util.ConfigParser","BasiGX.util.Layer","BasiGX.util.Map"],"uses":[],"members":[{"name":"activeRouting","tagname":"property","owner":"BasiGX.view.component.Map","id":"property-activeRouting","meta":{}},{"name":"appContext","tagname":"property","owner":"BasiGX.view.component.Map","id":"property-appContext","meta":{}},{"name":"appContextPath","tagname":"property","owner":"BasiGX.view.component.Map","id":"property-appContextPath","meta":{}},{"name":"autocreateLegends","tagname":"property","owner":"BasiGX.view.component.Map","id":"property-autocreateLegends","meta":{}},{"name":"defaultListenerScope","tagname":"property","owner":"BasiGX.view.component.Map","id":"property-defaultListenerScope","meta":{}},{"name":"fallbackAppContext","tagname":"property","owner":"BasiGX.view.component.Map","id":"property-fallbackAppContext","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.component.Map","id":"method-constructor","meta":{}},{"name":"addControls","tagname":"method","owner":"BasiGX.view.component.Map","id":"method-addControls","meta":{"private":true}},{"name":"guess","tagname":"method","owner":"BasiGX.view.component.Map","id":"static-method-guess","meta":{"private":true,"static":true}}],"code_type":"ext_define","id":"class-BasiGX.view.component.Map","short_doc":"Map Component\n\nSetting up a ol3-map by calling the config parser with the given appContext. ...","component":false,"superclasses":["GeoExt.component.Map"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>GeoExt.component.Map<div class='subclass '><strong>BasiGX.view.component.Map</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.ConfigParser' rel='BasiGX.util.ConfigParser' class='docClass'>BasiGX.util.ConfigParser</a></div><div class='dependency'><a href='#!/api/BasiGX.util.Layer' rel='BasiGX.util.Layer' class='docClass'>BasiGX.util.Layer</a></div><div class='dependency'><a href='#!/api/BasiGX.util.Map' rel='BasiGX.util.Map' class='docClass'>BasiGX.util.Map</a></div><h4>Files</h4><div class='dependency'><a href='source/Map2.html#BasiGX-view-component-Map' target='_blank'>Map.js</a></div></pre><div class='doc-contents'><p>Map Component</p>\n\n<p>Setting up a ol3-map by calling the config parser with the given appContext.\nIf no appContext is found, a default one will be loaded.\nClass usually instanciated in map container.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeRouting' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-property-activeRouting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-property-activeRouting' class='name expandable'>activeRouting</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>flag determines if the the window.location.hash should be manipulated\nduring runtime ...</div><div class='long'><p>flag determines if the the window.location.hash should be manipulated\nduring runtime</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-appContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-property-appContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-property-appContext' class='name expandable'>appContext</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The app context</p>\n</div><div class='long'><p>The app context</p>\n</div></div></div><div id='property-appContextPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-property-appContextPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-property-appContextPath' class='name expandable'>appContextPath</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The URL to the app Context resource. ...</div><div class='long'><p>The URL to the app Context resource.\nGets requested via AJAX, can be a local file or an webinterface</p>\n<p>Defaults to: <code>'resources/appContext.json'</code></p></div></div></div><div id='property-autocreateLegends' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-property-autocreateLegends' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-property-autocreateLegends' class='name expandable'>autocreateLegends</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>flag determines if the layers created by configparser should contain\nautomatically generated legendurls ...</div><div class='long'><p>flag determines if the layers created by configparser should contain\nautomatically generated legendurls</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-defaultListenerScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-property-defaultListenerScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-property-defaultListenerScope' class='name expandable'>defaultListenerScope</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If this class is extended by an application that uses controllers,\nthis property should be set to false and the corre...</div><div class='long'><p>If this class is extended by an application that uses controllers,\nthis property should be set to false and the corresponding methods\nhave to be implemented in the controller.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-fallbackAppContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-property-fallbackAppContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-property-fallbackAppContext' class='name expandable'>fallbackAppContext</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The appContext to use when no real context could be retrieved ...</div><div class='long'><p>The appContext to use when no real context could be retrieved</p>\n<p>Defaults to: <code>{'data': {'merge': {'startCenter': [1163261, 6648489], 'startZoom': 5, 'mapLayers': [{'name': 'OSM WMS', 'type': 'TileWMS', 'url': 'http://ows.terrestris.de/osm/service?', 'layers': 'OSM-WMS', 'topic': false}], 'mapConfig': {'projection': 'EPSG:3857', 'resolutions': [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, 0.5971642833948135], 'zoom': 0}}}}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.component.Map-method-constructor' class='name expandable'>BasiGX.view.component.Map</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/BasiGX.view.component.Map\" rel=\"BasiGX.view.component.Map\" class=\"docClass\">BasiGX.view.component.Map</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.component.Map\" rel=\"BasiGX.view.component.Map\" class=\"docClass\">BasiGX.view.component.Map</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addControls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-method-addControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-method-addControls' class='name expandable'>addControls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-guess' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.component.Map'>BasiGX.view.component.Map</span><br/><a href='source/Map2.html#BasiGX-view-component-Map-static-method-guess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.component.Map-static-method-guess' class='name expandable'>guess</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});