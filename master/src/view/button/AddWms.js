
var __cov_$v9CMxLezUMlQnzRrDbWqg = (Function('return this'))();
if (!__cov_$v9CMxLezUMlQnzRrDbWqg.__coverage__) { __cov_$v9CMxLezUMlQnzRrDbWqg.__coverage__ = {}; }
__cov_$v9CMxLezUMlQnzRrDbWqg = __cov_$v9CMxLezUMlQnzRrDbWqg.__coverage__;
if (!(__cov_$v9CMxLezUMlQnzRrDbWqg['/home/travis/build/terrestris/BasiGX/src/view/button/AddWms.js'])) {
   __cov_$v9CMxLezUMlQnzRrDbWqg['/home/travis/build/terrestris/BasiGX/src/view/button/AddWms.js'] = {"path":"/home/travis/build/terrestris/BasiGX/src/view/button/AddWms.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":58,"loc":{"start":{"line":58,"column":17},"end":{"line":58,"column":27}}},"2":{"name":"(anonymous_2)","line":80,"loc":{"start":{"line":80,"column":17},"end":{"line":80,"column":34}}}},"statementMap":{"1":{"start":{"line":24,"column":0},"end":{"line":89,"column":3}},"2":{"start":{"line":59,"column":12},"end":{"line":59,"column":75}},"3":{"start":{"line":60,"column":12},"end":{"line":73,"column":13}},"4":{"start":{"line":61,"column":16},"end":{"line":70,"column":26}},"5":{"start":{"line":72,"column":16},"end":{"line":72,"column":47}},"6":{"start":{"line":81,"column":8},"end":{"line":81,"column":34}},"7":{"start":{"line":83,"column":8},"end":{"line":87,"column":9}},"8":{"start":{"line":84,"column":12},"end":{"line":84,"column":40}},"9":{"start":{"line":85,"column":12},"end":{"line":85,"column":62}},"10":{"start":{"line":86,"column":12},"end":{"line":86,"column":31}}},"branchMap":{"1":{"line":60,"type":"if","locations":[{"start":{"line":60,"column":12},"end":{"line":60,"column":12}},{"start":{"line":60,"column":12},"end":{"line":60,"column":12}}]},"2":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":8},"end":{"line":83,"column":8}},{"start":{"line":83,"column":8},"end":{"line":83,"column":8}}]}}};
}
__cov_$v9CMxLezUMlQnzRrDbWqg = __cov_$v9CMxLezUMlQnzRrDbWqg['/home/travis/build/terrestris/BasiGX/src/view/button/AddWms.js'];
__cov_$v9CMxLezUMlQnzRrDbWqg.s['1']++;Ext.define('BasiGX.view.button.AddWms',{extend:'Ext.Button',xtype:'basigx-button-addwms',requires:['Ext.window.Window','Ext.app.ViewModel','BasiGX.view.form.AddWms','BasiGX.util.Animate'],viewModel:{data:{tooltip:'WMS hinzufügen',text:'WMS <span style="font-size: 1.7em; '+'font-weight: normal;">\u2295</span>',windowTitle:'WMS hinzufügen'}},bind:{text:'{text}'},config:{handler:function(){__cov_$v9CMxLezUMlQnzRrDbWqg.f['1']++;__cov_$v9CMxLezUMlQnzRrDbWqg.s['2']++;var win=Ext.ComponentQuery.query('[name=add-wms-window]')[0];__cov_$v9CMxLezUMlQnzRrDbWqg.s['3']++;if(!win){__cov_$v9CMxLezUMlQnzRrDbWqg.b['1'][0]++;__cov_$v9CMxLezUMlQnzRrDbWqg.s['4']++;Ext.create('Ext.window.Window',{name:'add-wms-window',title:this.getViewModel().get('windowTitle'),width:500,height:400,layout:'fit',items:[{xtype:'basigx-form-addwms'}]}).show();}else{__cov_$v9CMxLezUMlQnzRrDbWqg.b['1'][1]++;__cov_$v9CMxLezUMlQnzRrDbWqg.s['5']++;BasiGX.util.Animate.shake(win);}}},constructor:function(config){__cov_$v9CMxLezUMlQnzRrDbWqg.f['2']++;__cov_$v9CMxLezUMlQnzRrDbWqg.s['6']++;this.callParent([config]);__cov_$v9CMxLezUMlQnzRrDbWqg.s['7']++;if(this.setTooltip){__cov_$v9CMxLezUMlQnzRrDbWqg.b['2'][0]++;__cov_$v9CMxLezUMlQnzRrDbWqg.s['8']++;var bind=this.config.bind;__cov_$v9CMxLezUMlQnzRrDbWqg.s['9']++;bind.tooltip=this.getViewModel().get('tooltip');__cov_$v9CMxLezUMlQnzRrDbWqg.s['10']++;this.setBind(bind);}else{__cov_$v9CMxLezUMlQnzRrDbWqg.b['2'][1]++;}}});
