
var __cov_IEyHI2hnI3pHGa80XvL2Pw = (Function('return this'))();
if (!__cov_IEyHI2hnI3pHGa80XvL2Pw.__coverage__) { __cov_IEyHI2hnI3pHGa80XvL2Pw.__coverage__ = {}; }
__cov_IEyHI2hnI3pHGa80XvL2Pw = __cov_IEyHI2hnI3pHGa80XvL2Pw.__coverage__;
if (!(__cov_IEyHI2hnI3pHGa80XvL2Pw['/home/travis/build/terrestris/BasiGX/src/view/button/ToggleLegend.js'])) {
   __cov_IEyHI2hnI3pHGa80XvL2Pw['/home/travis/build/terrestris/BasiGX/src/view/button/ToggleLegend.js'] = {"path":"/home/travis/build/terrestris/BasiGX/src/view/button/ToggleLegend.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":62,"loc":{"start":{"line":62,"column":17},"end":{"line":62,"column":33}}},"2":{"name":"(anonymous_2)","line":81,"loc":{"start":{"line":81,"column":17},"end":{"line":81,"column":34}}}},"statementMap":{"1":{"start":{"line":23,"column":0},"end":{"line":90,"column":3}},"2":{"start":{"line":63,"column":12},"end":{"line":63,"column":26}},"3":{"start":{"line":64,"column":12},"end":{"line":65,"column":80}},"4":{"start":{"line":67,"column":12},"end":{"line":74,"column":13}},"5":{"start":{"line":68,"column":16},"end":{"line":72,"column":17}},"6":{"start":{"line":69,"column":20},"end":{"line":69,"column":41}},"7":{"start":{"line":71,"column":20},"end":{"line":71,"column":43}},"8":{"start":{"line":73,"column":16},"end":{"line":73,"column":30}},"9":{"start":{"line":82,"column":8},"end":{"line":82,"column":34}},"10":{"start":{"line":84,"column":8},"end":{"line":88,"column":9}},"11":{"start":{"line":85,"column":12},"end":{"line":85,"column":40}},"12":{"start":{"line":86,"column":12},"end":{"line":86,"column":62}},"13":{"start":{"line":87,"column":12},"end":{"line":87,"column":31}}},"branchMap":{"1":{"line":67,"type":"if","locations":[{"start":{"line":67,"column":12},"end":{"line":67,"column":12}},{"start":{"line":67,"column":12},"end":{"line":67,"column":12}}]},"2":{"line":68,"type":"if","locations":[{"start":{"line":68,"column":16},"end":{"line":68,"column":16}},{"start":{"line":68,"column":16},"end":{"line":68,"column":16}}]},"3":{"line":84,"type":"if","locations":[{"start":{"line":84,"column":8},"end":{"line":84,"column":8}},{"start":{"line":84,"column":8},"end":{"line":84,"column":8}}]}}};
}
__cov_IEyHI2hnI3pHGa80XvL2Pw = __cov_IEyHI2hnI3pHGa80XvL2Pw['/home/travis/build/terrestris/BasiGX/src/view/button/ToggleLegend.js'];
__cov_IEyHI2hnI3pHGa80XvL2Pw.s['1']++;Ext.define('BasiGX.view.button.ToggleLegend',{extend:'Ext.Button',xtype:'basigx-button-togglelegend',requires:['Ext.app.ViewModel','BasiGX.util.Map'],viewModel:{data:{tooltip:'Layerauswahl',text:null}},bind:{text:'{text}'},glyph:'xf022@FontAwesome',html:'<i class="fa fa-list-alt fa-2x"></i>',config:{legendTreeXType:null,handler:function(button){__cov_IEyHI2hnI3pHGa80XvL2Pw.f['1']++;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['2']++;var me=this;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['3']++;var legendPanel=BasiGX.util.Map.getLegendTreePanel(me.getLegendTreeXType());__cov_IEyHI2hnI3pHGa80XvL2Pw.s['4']++;if(legendPanel){__cov_IEyHI2hnI3pHGa80XvL2Pw.b['1'][0]++;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['5']++;if(legendPanel.getCollapsed()){__cov_IEyHI2hnI3pHGa80XvL2Pw.b['2'][0]++;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['6']++;legendPanel.expand();}else{__cov_IEyHI2hnI3pHGa80XvL2Pw.b['2'][1]++;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['7']++;legendPanel.collapse();}__cov_IEyHI2hnI3pHGa80XvL2Pw.s['8']++;button.blur();}else{__cov_IEyHI2hnI3pHGa80XvL2Pw.b['1'][1]++;}}},constructor:function(config){__cov_IEyHI2hnI3pHGa80XvL2Pw.f['2']++;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['9']++;this.callParent([config]);__cov_IEyHI2hnI3pHGa80XvL2Pw.s['10']++;if(this.setTooltip){__cov_IEyHI2hnI3pHGa80XvL2Pw.b['3'][0]++;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['11']++;var bind=this.config.bind;__cov_IEyHI2hnI3pHGa80XvL2Pw.s['12']++;bind.tooltip=this.getViewModel().get('tooltip');__cov_IEyHI2hnI3pHGa80XvL2Pw.s['13']++;this.setBind(bind);}else{__cov_IEyHI2hnI3pHGa80XvL2Pw.b['3'][1]++;}}});
