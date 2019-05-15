Ext.data.JsonP.BasiGX_util_Geometry({"tagname":"class","name":"BasiGX.util.Geometry","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Geometry.js","href":"Geometry.html#BasiGX-util-Geometry"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"equals","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-equals","meta":{"static":true}},{"name":"getGeometryDuplicates","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-getGeometryDuplicates","meta":{"static":true}},{"name":"isDuplicate","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-isDuplicate","meta":{"static":true}},{"name":"isDuplicateGeometryCollection","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-isDuplicateGeometryCollection","meta":{"static":true}},{"name":"isDuplicateLineString","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-isDuplicateLineString","meta":{"static":true}},{"name":"isDuplicateMultiPolygon","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-isDuplicateMultiPolygon","meta":{"static":true}},{"name":"isDuplicatePoint","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-isDuplicatePoint","meta":{"static":true}},{"name":"isDuplicatePolygon","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-isDuplicatePolygon","meta":{"static":true}},{"name":"isDuplicatePolygonCoordinates","tagname":"method","owner":"BasiGX.util.Geometry","id":"static-method-isDuplicatePolygonCoordinates","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.Geometry","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.Geometry</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Geometry.html#BasiGX-util-Geometry' target='_blank'>Geometry.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-equals' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-equals' class='name expandable'>equals</a>( <span class='pre'>geometry1, geometry2</span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Compares two ol.geom.Geometries. ...</div><div class='long'><p>Compares two ol.geom.Geometries.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>geometry1</span> : ol.geom.Geometry<div class='sub-desc'><p>The first geometry for the\n                                    comparison.</p>\n</div></li><li><span class='pre'>geometry2</span> : ol.geom.Geometry<div class='sub-desc'><p>The second geometry for the\n                                    comparison.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns true if the WKT-representations are\n                  identical.</p>\n</div></li></ul></div></div></div><div id='static-method-getGeometryDuplicates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-getGeometryDuplicates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-getGeometryDuplicates' class='name expandable'>getGeometryDuplicates</a>( <span class='pre'>features, delta</span> ) : ol.Feature[]<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Check the features geometries' for equality and return the features\nwhich have duplicates. ...</div><div class='long'><p>Check the features geometries' for equality and return the features\nwhich have duplicates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>features</span> : ol.Feature[]<div class='sub-desc'><p>the features to check</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for coordinate comparison, default\nis 0.000001</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.Feature[]</span><div class='sub-desc'><p>the list of duplicates. Contains arrays\nof pairwise features with duplicated geometries.</p>\n</div></li></ul></div></div></div><div id='static-method-isDuplicate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-isDuplicate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-isDuplicate' class='name expandable'>isDuplicate</a>( <span class='pre'>geom1, geom2, delta</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether to geometries are equal. ...</div><div class='long'><p>Checks whether to geometries are equal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>geom1</span> : ol.geom.Geometry<div class='sub-desc'><p>the first geometry</p>\n</div></li><li><span class='pre'>geom2</span> : ol.geom.Geometry<div class='sub-desc'><p>the second geometry</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for coordinate comparison, default is\n0.000001</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if equal</p>\n</div></li></ul></div></div></div><div id='static-method-isDuplicateGeometryCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-isDuplicateGeometryCollection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-isDuplicateGeometryCollection' class='name expandable'>isDuplicateGeometryCollection</a>( <span class='pre'>col1, col2, delta</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks two geometry collections for equality. ...</div><div class='long'><p>Checks two geometry collections for equality.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>col1</span> : ol.geom.GeometryCollection<div class='sub-desc'><p>the first collection</p>\n</div></li><li><span class='pre'>col2</span> : ol.geom.GeometryCollection<div class='sub-desc'><p>the second collection</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for comparison</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if equal</p>\n</div></li></ul></div></div></div><div id='static-method-isDuplicateLineString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-isDuplicateLineString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-isDuplicateLineString' class='name expandable'>isDuplicateLineString</a>( <span class='pre'>l1, l2, delta</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks two line geometries for equality. ...</div><div class='long'><p>Checks two line geometries for equality.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>l1</span> : ol.geom.LineString<div class='sub-desc'><p>the first line</p>\n</div></li><li><span class='pre'>l2</span> : ol.geom.LineString<div class='sub-desc'><p>the second line</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for comparison</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if equal</p>\n</div></li></ul></div></div></div><div id='static-method-isDuplicateMultiPolygon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-isDuplicateMultiPolygon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-isDuplicateMultiPolygon' class='name expandable'>isDuplicateMultiPolygon</a>( <span class='pre'>mp1, mp2, delta</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks two multi polygon geometries for equality. ...</div><div class='long'><p>Checks two multi polygon geometries for equality.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mp1</span> : ol.geom.MultiPolygon<div class='sub-desc'><p>the first point</p>\n</div></li><li><span class='pre'>mp2</span> : ol.geom.MultiPolygon<div class='sub-desc'><p>the second point</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for comparison</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if equal</p>\n</div></li></ul></div></div></div><div id='static-method-isDuplicatePoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-isDuplicatePoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-isDuplicatePoint' class='name expandable'>isDuplicatePoint</a>( <span class='pre'>p1, p2, delta</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks two point geometries for equality. ...</div><div class='long'><p>Checks two point geometries for equality.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>p1</span> : ol.geom.Point<div class='sub-desc'><p>the first point</p>\n</div></li><li><span class='pre'>p2</span> : ol.geom.Point<div class='sub-desc'><p>the second point</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for comparison</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if equal</p>\n</div></li></ul></div></div></div><div id='static-method-isDuplicatePolygon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-isDuplicatePolygon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-isDuplicatePolygon' class='name expandable'>isDuplicatePolygon</a>( <span class='pre'>p1, p2, delta</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks two polygon geometries for equality. ...</div><div class='long'><p>Checks two polygon geometries for equality.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>p1</span> : ol.geom.Polygon<div class='sub-desc'><p>the first polygon</p>\n</div></li><li><span class='pre'>p2</span> : ol.geom.Polygon<div class='sub-desc'><p>the second polygon</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for comparison</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if equal</p>\n</div></li></ul></div></div></div><div id='static-method-isDuplicatePolygonCoordinates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Geometry'>BasiGX.util.Geometry</span><br/><a href='source/Geometry.html#BasiGX-util-Geometry-static-method-isDuplicatePolygonCoordinates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Geometry-static-method-isDuplicatePolygonCoordinates' class='name expandable'>isDuplicatePolygonCoordinates</a>( <span class='pre'>c1, c2, delta</span> ) : boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks two polygon coordinate arrays for equality. ...</div><div class='long'><p>Checks two polygon coordinate arrays for equality.\nThe actual type must be number[][] (JSDoc can't handle this)!</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c1</span> : number[]<div class='sub-desc'><p>the first coordinate array</p>\n</div></li><li><span class='pre'>c2</span> : number[]<div class='sub-desc'><p>the second coordinate array</p>\n</div></li><li><span class='pre'>delta</span> : number<div class='sub-desc'><p>the delta for comparison</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if equal</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});