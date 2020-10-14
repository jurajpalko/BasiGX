Ext.data.JsonP.BasiGX_util_Layer({"tagname":"class","name":"BasiGX.util.Layer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Layer.js","href":"Layer.html#BasiGX-util-Layer"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["BasiGX.util.Map","BasiGX.util.Object"],"uses":[],"members":[{"name":"KEY_DISPLAY_IN_LAYERSWITCHER","tagname":"property","owner":"BasiGX.util.Layer","id":"static-property-KEY_DISPLAY_IN_LAYERSWITCHER","meta":{"static":true}},{"name":"NAME_MEASURE_LAYER","tagname":"property","owner":"BasiGX.util.Layer","id":"static-property-NAME_MEASURE_LAYER","meta":{"static":true}},{"name":"cascadeLayers","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-cascadeLayers","meta":{"static":true}},{"name":"getAllLayers","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-getAllLayers","meta":{"static":true}},{"name":"getLayerBy","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-getLayerBy","meta":{"static":true}},{"name":"getLayerByFeatureType","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-getLayerByFeatureType","meta":{"static":true}},{"name":"getLayerByLayersParam","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-getLayerByLayersParam","meta":{"static":true}},{"name":"getLayerByName","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-getLayerByName","meta":{"static":true}},{"name":"getLayersBy","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-getLayersBy","meta":{"static":true}},{"name":"getVisibleLayers","tagname":"method","owner":"BasiGX.util.Layer","id":"static-method-getVisibleLayers","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.Layer","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.Layer</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Map' rel='BasiGX.util.Map' class='docClass'>BasiGX.util.Map</a></div><div class='dependency'><a href='#!/api/BasiGX.util.Object' rel='BasiGX.util.Object' class='docClass'>BasiGX.util.Object</a></div><h4>Files</h4><div class='dependency'><a href='source/Layer.html#BasiGX-util-Layer' target='_blank'>Layer.js</a></div></pre><div class='doc-contents'><p>A utility class offering static methods to work with OpenLayers layers.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-KEY_DISPLAY_IN_LAYERSWITCHER' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-property-KEY_DISPLAY_IN_LAYERSWITCHER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-property-KEY_DISPLAY_IN_LAYERSWITCHER' class='name expandable'>KEY_DISPLAY_IN_LAYERSWITCHER</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>A name of a boolean property that utility layers should set to an\nappropriate value (often false). ...</div><div class='long'><p>A name of a boolean property that utility layers should set to an\nappropriate value (often <code>false</code>). The layer displaying components\nusually read out the property and determine whether to show an entry\nfor the particular layer in question.</p>\n\n<p>TODO It should be safe to change the property to e.g.\n    <code>'basigx-displayInLayerSwitcher'</code>, but we'll keep it as is for\n    backwards compatibility for now.</p>\n<p>Defaults to: <code>&#39;bp_displayInLayerSwitcher&#39;</code></p></div></div></div><div id='static-property-NAME_MEASURE_LAYER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-property-NAME_MEASURE_LAYER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-property-NAME_MEASURE_LAYER' class='name expandable'>NAME_MEASURE_LAYER</a> : String<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The name of a layer used for drawing measurements on. ...</div><div class='long'><p>The name of a layer used for drawing measurements on. Can be used to\ndynamically determine that particular layer.</p>\n<p>Defaults to: <code>&#39;basigx-measure-layer&#39;</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-cascadeLayers' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-cascadeLayers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-cascadeLayers' class='name expandable'>cascadeLayers</a>( <span class='pre'>lyrGroup, fn</span> ) : void<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Cascades down a given LayerGroup, calling the given function for\neach LayerGroup / Layer. ...</div><div class='long'><p>Cascades down a given LayerGroup, calling the given function for\neach LayerGroup / Layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lyrGroup</span> : ol.layer.Group<div class='sub-desc'><p>The layer group to cascade down</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>A function to call on every LayerGroup / Layer</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-getAllLayers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-getAllLayers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-getAllLayers' class='name expandable'>getAllLayers</a>( <span class='pre'>map</span> ) : Array<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns all layers of an map. ...</div><div class='long'><p>Returns all layers of an map. Even the hidden ones.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : ol.Map<div class='sub-desc'><p>The OpenLayers map to get the layers from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of all Layers.</p>\n</div></li></ul></div></div></div><div id='static-method-getLayerBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-getLayerBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-getLayerBy' class='name expandable'>getLayerBy</a>( <span class='pre'>key, val, collection</span> ) : ol.Layer<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Get an ol-layer by the given key-value constellation. ...</div><div class='long'><p>Get an ol-layer by the given key-value constellation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><ul>\n<li>the layer's property name</li>\n</ul>\n\n</div></li><li><span class='pre'>val</span> : String<div class='sub-desc'><ul>\n<li>the layer's property value for the given key</li>\n</ul>\n\n</div></li><li><span class='pre'>collection</span> : ol.Collection<div class='sub-desc'><ul>\n<li>optional collection to search in</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.Layer</span><div class='sub-desc'><p>matchingLayer - the ol-layer</p>\n</div></li></ul></div></div></div><div id='static-method-getLayerByFeatureType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-getLayerByFeatureType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-getLayerByFeatureType' class='name expandable'>getLayerByFeatureType</a>( <span class='pre'>featureType, collection</span> ) : ol.Layer<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Gets an ol-layer by the given featureType. ...</div><div class='long'><p>Gets an ol-layer by the given featureType.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>featureType</span> : String<div class='sub-desc'><ul>\n<li>the layers featureType</li>\n</ul>\n\n</div></li><li><span class='pre'>collection</span> : ol.Collection<div class='sub-desc'><ul>\n<li>optional collection to search in</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.Layer</span><div class='sub-desc'><p>matchingLayer - the ol-layer</p>\n</div></li></ul></div></div></div><div id='static-method-getLayerByLayersParam' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-getLayerByLayersParam' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-getLayerByLayersParam' class='name expandable'>getLayerByLayersParam</a>( <span class='pre'>layersParam, map</span> ) : ol.layer.Layer<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns the layer matching the given qualified layer name. ...</div><div class='long'><p>Returns the layer matching the given qualified layer name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layersParam</span> : String<div class='sub-desc'><p>The (qualified) layers param,\n e.g. 'foo:bar'</p>\n</div></li><li><span class='pre'>map</span> : ol.Map<div class='sub-desc'><p>The OpenLayers map to get the layers from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Layer</span><div class='sub-desc'><p>The OpenLayers layer from the map (if it\n could be found).</p>\n</div></li></ul></div></div></div><div id='static-method-getLayerByName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-getLayerByName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-getLayerByName' class='name expandable'>getLayerByName</a>( <span class='pre'>layername, collection</span> ) : ol.Layer<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Get an ol-layer by the given name. ...</div><div class='long'><p>Get an ol-layer by the given name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layername</span> : String<div class='sub-desc'><ul>\n<li>the layers name</li>\n</ul>\n\n</div></li><li><span class='pre'>collection</span> : ol.Collection<div class='sub-desc'><ul>\n<li>optional collection to search in</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.Layer</span><div class='sub-desc'><p>matchingLayer - the ol-layer</p>\n</div></li></ul></div></div></div><div id='static-method-getLayersBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-getLayersBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-getLayersBy' class='name expandable'>getLayersBy</a>( <span class='pre'>key, value, collection</span> ) : ol.layer.Base[]<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns the list of layers matching the given pair of properties. ...</div><div class='long'><p>Returns the list of layers matching the given pair of properties.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><ul>\n<li>the layers property name</li>\n</ul>\n\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><ul>\n<li>the layers property value for the given key</li>\n</ul>\n\n</div></li><li><span class='pre'>collection</span> : ol.Collection<div class='sub-desc'><ul>\n<li>optional collection to search in</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Base[]</span><div class='sub-desc'><p>The array of matching layers.</p>\n</div></li></ul></div></div></div><div id='static-method-getVisibleLayers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Layer'>BasiGX.util.Layer</span><br/><a href='source/Layer.html#BasiGX-util-Layer-static-method-getVisibleLayers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Layer-static-method-getVisibleLayers' class='name expandable'>getVisibleLayers</a>( <span class='pre'>collection</span> ) : Array<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns all visible layers of an map. ...</div><div class='long'><p>Returns all visible layers of an map.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>collection</span> : ol.layerCollection|ol.Map<div class='sub-desc'><p>Either a collection\n    of layers or an <code>OpenLayers.Map</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of the visible layers.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});