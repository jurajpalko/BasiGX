
var __cov_dLtP5RpE$nTcyLkdIriPNA = (Function('return this'))();
if (!__cov_dLtP5RpE$nTcyLkdIriPNA.__coverage__) { __cov_dLtP5RpE$nTcyLkdIriPNA.__coverage__ = {}; }
__cov_dLtP5RpE$nTcyLkdIriPNA = __cov_dLtP5RpE$nTcyLkdIriPNA.__coverage__;
if (!(__cov_dLtP5RpE$nTcyLkdIriPNA['/home/travis/build/terrestris/BasiGX/src/view/view/GraphicPool.js'])) {
   __cov_dLtP5RpE$nTcyLkdIriPNA['/home/travis/build/terrestris/BasiGX/src/view/view/GraphicPool.js'] = {"path":"/home/travis/build/terrestris/BasiGX/src/view/view/GraphicPool.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":88,"loc":{"start":{"line":88,"column":20},"end":{"line":88,"column":31}}}},"statementMap":{"1":{"start":{"line":24,"column":0},"end":{"line":129,"column":3}},"2":{"start":{"line":89,"column":8},"end":{"line":89,"column":22}},"3":{"start":{"line":90,"column":8},"end":{"line":90,"column":42}},"4":{"start":{"line":91,"column":8},"end":{"line":91,"column":55}},"5":{"start":{"line":92,"column":8},"end":{"line":92,"column":33}},"6":{"start":{"line":94,"column":8},"end":{"line":106,"column":11}},"7":{"start":{"line":107,"column":8},"end":{"line":107,"column":21}},"8":{"start":{"line":109,"column":8},"end":{"line":110,"column":47}},"9":{"start":{"line":112,"column":8},"end":{"line":112,"column":47}},"10":{"start":{"line":113,"column":8},"end":{"line":113,"column":25}},"11":{"start":{"line":115,"column":8},"end":{"line":124,"column":10}},"12":{"start":{"line":127,"column":8},"end":{"line":127,"column":33}}},"branchMap":{}};
}
__cov_dLtP5RpE$nTcyLkdIriPNA = __cov_dLtP5RpE$nTcyLkdIriPNA['/home/travis/build/terrestris/BasiGX/src/view/view/GraphicPool.js'];
__cov_dLtP5RpE$nTcyLkdIriPNA.s['1']++;Ext.define('BasiGX.view.view.GraphicPool',{extend:'Ext.view.View',xtype:'basigx-view-graphicpool',requires:['Ext.data.Store','BasiGX.util.Url'],viewModel:{data:{emptyStoreMsg:'No data found'}},border:false,autoScroll:true,store:null,config:{backendUrls:null,itemSelector:'div.thumb-wrap',multiSelect:false,trackOver:true},initComponent:function(){__cov_dLtP5RpE$nTcyLkdIriPNA.f['1']++;__cov_dLtP5RpE$nTcyLkdIriPNA.s['2']++;var me=this;__cov_dLtP5RpE$nTcyLkdIriPNA.s['3']++;var viewModel=me.getViewModel();__cov_dLtP5RpE$nTcyLkdIriPNA.s['4']++;var emptyText=viewModel.get('emptyStoreMsg');__cov_dLtP5RpE$nTcyLkdIriPNA.s['5']++;me.emptyText=emptyText;__cov_dLtP5RpE$nTcyLkdIriPNA.s['6']++;var store=Ext.create('Ext.data.Store',{sorters:'fileName',proxy:{type:'ajax',url:BasiGX.util.Url.getWebProjectBaseUrl()+me.getBackendUrls().pictureList.url,reader:{type:'json',rootProperty:'data'}}});__cov_dLtP5RpE$nTcyLkdIriPNA.s['7']++;store.load();__cov_dLtP5RpE$nTcyLkdIriPNA.s['8']++;var srcUrl=BasiGX.util.Url.getWebProjectBaseUrl()+me.getBackendUrls().pictureSrc.url;__cov_dLtP5RpE$nTcyLkdIriPNA.s['9']++;me.itemSelector=me.getItemSelector();__cov_dLtP5RpE$nTcyLkdIriPNA.s['10']++;me.store=store;__cov_dLtP5RpE$nTcyLkdIriPNA.s['11']++;me.tpl=['<tpl for=".">','<div class="thumb-wrap">','<div class="thumb">','<img src="'+srcUrl+'{id}"/>','</div>','<span>{fileName}</span>','</div>','</tpl>'];__cov_dLtP5RpE$nTcyLkdIriPNA.s['12']++;me.callParent(arguments);}});
