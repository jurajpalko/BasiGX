Ext.data.JsonP.BasiGX_util_Projection({"tagname":"class","name":"BasiGX.util.Projection","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Projection.js","href":"Projection.html#BasiGX-util-Projection"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"fetchProj4jCrsDefinitions","tagname":"method","owner":"BasiGX.util.Projection","id":"static-method-fetchProj4jCrsDefinitions","meta":{"static":true}},{"name":"initProj4Definitions","tagname":"method","owner":"BasiGX.util.Projection","id":"static-method-initProj4Definitions","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.Projection","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.Projection</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Projection.html#BasiGX-util-Projection' target='_blank'>Projection.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-fetchProj4jCrsDefinitions' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Projection'>BasiGX.util.Projection</span><br/><a href='source/Projection.html#BasiGX-util-Projection-static-method-fetchProj4jCrsDefinitions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Projection-static-method-fetchProj4jCrsDefinitions' class='name expandable'>fetchProj4jCrsDefinitions</a>( <span class='pre'>epsgCodeArray</span> ) : Ext.Promise<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Fetch EPSG code definitions from http://epsg.io for given array\nof EPSG codes ...</div><div class='long'><p>Fetch EPSG code definitions from http://epsg.io for given array\nof EPSG codes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>epsgCodeArray</span> : String[]<div class='sub-desc'><p>An array of EPSG code string,\ne.g. ['EPSG:4326']</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Promise</span><div class='sub-desc'><p>An ExtJS promise resolving if all EPSG\ninformation has successfully been fetched from http://epsg.io</p>\n</div></li></ul></div></div></div><div id='static-method-initProj4Definitions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.Projection'>BasiGX.util.Projection</span><br/><a href='source/Projection.html#BasiGX-util-Projection-static-method-initProj4Definitions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.Projection-static-method-initProj4Definitions' class='name expandable'>initProj4Definitions</a>( <span class='pre'>proj4jObjects</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Register crs definitions ...</div><div class='long'><p>Register crs definitions</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proj4jObjects</span> : Object[]<div class='sub-desc'><p>An array of objects returned by\nhttp://epsg.io which includes information on projection, in\nparticular the name, the unit and the proj4 definition</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});