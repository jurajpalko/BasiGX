
var __cov_S_ugQ6p6jpdZgglfKbybvA = (Function('return this'))();
if (!__cov_S_ugQ6p6jpdZgglfKbybvA.__coverage__) { __cov_S_ugQ6p6jpdZgglfKbybvA.__coverage__ = {}; }
__cov_S_ugQ6p6jpdZgglfKbybvA = __cov_S_ugQ6p6jpdZgglfKbybvA.__coverage__;
if (!(__cov_S_ugQ6p6jpdZgglfKbybvA['/home/travis/build/terrestris/BasiGX/src/view/panel/MobileWindow.js'])) {
   __cov_S_ugQ6p6jpdZgglfKbybvA['/home/travis/build/terrestris/BasiGX/src/view/panel/MobileWindow.js'] = {"path":"/home/travis/build/terrestris/BasiGX/src/view/panel/MobileWindow.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{"1":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":67,"loc":{"start":{"line":67,"column":17},"end":{"line":67,"column":34}}}},"statementMap":{"1":{"start":{"line":40,"column":0},"end":{"line":97,"column":3}},"2":{"start":{"line":68,"column":8},"end":{"line":68,"column":22}},"3":{"start":{"line":69,"column":8},"end":{"line":69,"column":32}},"4":{"start":{"line":71,"column":8},"end":{"line":86,"column":11}},"5":{"start":{"line":87,"column":8},"end":{"line":87,"column":28}},"6":{"start":{"line":89,"column":8},"end":{"line":95,"column":9}},"7":{"start":{"line":90,"column":12},"end":{"line":94,"column":15}}},"branchMap":{"1":{"line":89,"type":"if","locations":[{"start":{"line":89,"column":8},"end":{"line":89,"column":8}},{"start":{"line":89,"column":8},"end":{"line":89,"column":8}}]}}};
}
__cov_S_ugQ6p6jpdZgglfKbybvA = __cov_S_ugQ6p6jpdZgglfKbybvA['/home/travis/build/terrestris/BasiGX/src/view/panel/MobileWindow.js'];
__cov_S_ugQ6p6jpdZgglfKbybvA.s['1']++;Ext.define('BasiGX.view.panel.MobileWindow',{extend:'Ext.Panel',xtype:'basigx-panel-mobilewindow',requires:['Ext.Container'],config:{panelTitle:'',scrollable:true,centered:true,minWidth:'50%',maxWidth:'80%',minHeight:'50%',maxHeight:'80%',width:200,height:200,padding:'10 10 10 10',layout:'vbox',name:'',additionalItems:[]},constructor:function(config){__cov_S_ugQ6p6jpdZgglfKbybvA.f['1']++;__cov_S_ugQ6p6jpdZgglfKbybvA.s['2']++;var me=this;__cov_S_ugQ6p6jpdZgglfKbybvA.s['3']++;me.callParent([config]);__cov_S_ugQ6p6jpdZgglfKbybvA.s['4']++;var headerPanel=Ext.create('Ext.Container',{styleHtmlContent:true,padding:'10 10 10 10',html:'<b>'+me.getPanelTitle()+'</b>'+'<i class="fa fa-times-circle-o fa-2x" '+'style="position:absolute;right:10px;top:5px;" '+'onclick="Ext.ComponentQuery.query('+'\'basigx-panel-mobilewindow[name='+me.getName()+']\')'+'[0].hide();">'+'</i>',height:40,docked:'top',style:{'background-color':'white'}});__cov_S_ugQ6p6jpdZgglfKbybvA.s['5']++;me.add(headerPanel);__cov_S_ugQ6p6jpdZgglfKbybvA.s['6']++;if(me.getAdditionalItems().length>0){__cov_S_ugQ6p6jpdZgglfKbybvA.b['1'][0]++;__cov_S_ugQ6p6jpdZgglfKbybvA.s['7']++;me.add({xtype:'panel',layout:'vbox',items:me.getAdditionalItems()});}else{__cov_S_ugQ6p6jpdZgglfKbybvA.b['1'][1]++;}}});
