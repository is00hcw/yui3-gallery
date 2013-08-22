if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-rocket-region/gallery-rocket-region.js']) {
   __coverage__['build/gallery-rocket-region/gallery-rocket-region.js'] = {"path":"build/gallery-rocket-region/gallery-rocket-region.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}},"2":{"name":"Region","line":8,"loc":{"start":{"line":8,"column":0},"end":{"line":8,"column":18}}},"3":{"name":"(anonymous_3)","line":13,"loc":{"start":{"line":13,"column":15},"end":{"line":13,"column":32}}},"4":{"name":"(anonymous_4)","line":16,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":25}}},"5":{"name":"(anonymous_5)","line":20,"loc":{"start":{"line":20,"column":8},"end":{"line":20,"column":19}}},"6":{"name":"(anonymous_6)","line":25,"loc":{"start":{"line":25,"column":8},"end":{"line":25,"column":23}}},"7":{"name":"(anonymous_7)","line":40,"loc":{"start":{"line":40,"column":9},"end":{"line":40,"column":20}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":58,"column":70}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":13}},"3":{"start":{"line":5,"column":0},"end":{"line":6,"column":19}},"4":{"start":{"line":8,"column":0},"end":{"line":10,"column":1}},"5":{"start":{"line":9,"column":2},"end":{"line":9,"column":55}},"6":{"start":{"line":12,"column":0},"end":{"line":53,"column":3}},"7":{"start":{"line":17,"column":4},"end":{"line":17,"column":17}},"8":{"start":{"line":22,"column":4},"end":{"line":22,"column":62}},"9":{"start":{"line":27,"column":4},"end":{"line":27,"column":85}},"10":{"start":{"line":27,"column":17},"end":{"line":27,"column":75}},"11":{"start":{"line":27,"column":76},"end":{"line":27,"column":83}},"12":{"start":{"line":29,"column":4},"end":{"line":29,"column":115}},"13":{"start":{"line":29,"column":35},"end":{"line":29,"column":113}},"14":{"start":{"line":31,"column":4},"end":{"line":31,"column":59}},"15":{"start":{"line":31,"column":44},"end":{"line":31,"column":57}},"16":{"start":{"line":32,"column":4},"end":{"line":32,"column":49}},"17":{"start":{"line":33,"column":4},"end":{"line":33,"column":18}},"18":{"start":{"line":34,"column":4},"end":{"line":34,"column":25}},"19":{"start":{"line":35,"column":4},"end":{"line":35,"column":34}},"20":{"start":{"line":36,"column":4},"end":{"line":36,"column":36}},"21":{"start":{"line":41,"column":4},"end":{"line":41,"column":39}},"22":{"start":{"line":42,"column":4},"end":{"line":42,"column":48}},"23":{"start":{"line":42,"column":39},"end":{"line":42,"column":46}},"24":{"start":{"line":43,"column":4},"end":{"line":43,"column":28}},"25":{"start":{"line":44,"column":4},"end":{"line":44,"column":24}},"26":{"start":{"line":45,"column":4},"end":{"line":45,"column":34}},"27":{"start":{"line":46,"column":4},"end":{"line":46,"column":23}},"28":{"start":{"line":55,"column":0},"end":{"line":55,"column":19}}},"branchMap":{"1":{"line":22,"type":"binary-expr","locations":[{"start":{"line":22,"column":4},"end":{"line":22,"column":27}},{"start":{"line":22,"column":31},"end":{"line":22,"column":61}}]},"2":{"line":27,"type":"if","locations":[{"start":{"line":27,"column":4},"end":{"line":27,"column":4}},{"start":{"line":27,"column":4},"end":{"line":27,"column":4}}]},"3":{"line":27,"type":"binary-expr","locations":[{"start":{"line":27,"column":17},"end":{"line":27,"column":40}},{"start":{"line":27,"column":44},"end":{"line":27,"column":74}}]},"4":{"line":29,"type":"if","locations":[{"start":{"line":29,"column":4},"end":{"line":29,"column":4}},{"start":{"line":29,"column":4},"end":{"line":29,"column":4}}]},"5":{"line":31,"type":"if","locations":[{"start":{"line":31,"column":4},"end":{"line":31,"column":4}},{"start":{"line":31,"column":4},"end":{"line":31,"column":4}}]},"6":{"line":42,"type":"if","locations":[{"start":{"line":42,"column":4},"end":{"line":42,"column":4}},{"start":{"line":42,"column":4},"end":{"line":42,"column":4}}]},"7":{"line":42,"type":"binary-expr","locations":[{"start":{"line":42,"column":8},"end":{"line":42,"column":13}},{"start":{"line":42,"column":17},"end":{"line":42,"column":36}}]}},"code":["(function () { YUI.add('gallery-rocket-region', function (Y, NAME) {","","'use strict';","","var DESTROYED = 'destroyed',","    View = Y.RView;","","function Region() {","  Region.superclass.constructor.apply(this, arguments);","}","","Region = Y.extend(Region, Y.Base, {","  initializer: function(config) {","  },","","  destructor: function() {","    this.reset();","  },","","  hide: function() {","    //hide the currentView","    this.get('currentView') && this.get('currentView').hide();","  },","","  show: function(view) {","    // if the view is blank, show the currentView","    if (!view) { this.get('currentView') && this.get('currentView').show(); return; }","    // the view must be instance or subinstance of rocket view","    if (!(view instanceof View)) { throw new Error('view of region must be instance/subinstance of rocket view'); }","    // if the view is different from currentView, reset the region first.","    if (view !== this.get('currentView')) { this.reset(); }","    view._set('container', this.get('selector'));","    view.render();","    view.addTarget(this);","    this.set('currentView', view);","    this.fire('show', {view: view});","  },","","  // Destroy the currentView, and fires a reset event.","  reset: function() {","    var view = this.get('currentView');","    if (!view || view.get(DESTROYED)){ return; }","    view.removeTarget(this);","    view.destroy(false);   // destory the view, but keep the container","    this.set('currentView', null);","    this.fire('reset');","  }","}, {","  ATTRS: {","    selector: { value: null },","    currentView: { value: null }","  }","});","","Y.RRegion = Region;","","","}, 'gallery-2013.08.22-21-03', {\"requires\": [\"gallery-rocket-view\"]});","","}());"]};
}
var __cov_YDKrlU0$Zl4enU54PZMnHA = __coverage__['build/gallery-rocket-region/gallery-rocket-region.js'];
__cov_YDKrlU0$Zl4enU54PZMnHA.s['1']++;YUI.add('gallery-rocket-region',function(Y,NAME){__cov_YDKrlU0$Zl4enU54PZMnHA.f['1']++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['2']++;'use strict';__cov_YDKrlU0$Zl4enU54PZMnHA.s['3']++;var DESTROYED='destroyed',View=Y.RView;__cov_YDKrlU0$Zl4enU54PZMnHA.s['4']++;function Region(){__cov_YDKrlU0$Zl4enU54PZMnHA.f['2']++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['5']++;Region.superclass.constructor.apply(this,arguments);}__cov_YDKrlU0$Zl4enU54PZMnHA.s['6']++;Region=Y.extend(Region,Y.Base,{initializer:function(config){__cov_YDKrlU0$Zl4enU54PZMnHA.f['3']++;},destructor:function(){__cov_YDKrlU0$Zl4enU54PZMnHA.f['4']++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['7']++;this.reset();},hide:function(){__cov_YDKrlU0$Zl4enU54PZMnHA.f['5']++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['8']++;(__cov_YDKrlU0$Zl4enU54PZMnHA.b['1'][0]++,this.get('currentView'))&&(__cov_YDKrlU0$Zl4enU54PZMnHA.b['1'][1]++,this.get('currentView').hide());},show:function(view){__cov_YDKrlU0$Zl4enU54PZMnHA.f['6']++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['9']++;if(!view){__cov_YDKrlU0$Zl4enU54PZMnHA.b['2'][0]++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['10']++;(__cov_YDKrlU0$Zl4enU54PZMnHA.b['3'][0]++,this.get('currentView'))&&(__cov_YDKrlU0$Zl4enU54PZMnHA.b['3'][1]++,this.get('currentView').show());__cov_YDKrlU0$Zl4enU54PZMnHA.s['11']++;return;}else{__cov_YDKrlU0$Zl4enU54PZMnHA.b['2'][1]++;}__cov_YDKrlU0$Zl4enU54PZMnHA.s['12']++;if(!(view instanceof View)){__cov_YDKrlU0$Zl4enU54PZMnHA.b['4'][0]++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['13']++;throw new Error('view of region must be instance/subinstance of rocket view');}else{__cov_YDKrlU0$Zl4enU54PZMnHA.b['4'][1]++;}__cov_YDKrlU0$Zl4enU54PZMnHA.s['14']++;if(view!==this.get('currentView')){__cov_YDKrlU0$Zl4enU54PZMnHA.b['5'][0]++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['15']++;this.reset();}else{__cov_YDKrlU0$Zl4enU54PZMnHA.b['5'][1]++;}__cov_YDKrlU0$Zl4enU54PZMnHA.s['16']++;view._set('container',this.get('selector'));__cov_YDKrlU0$Zl4enU54PZMnHA.s['17']++;view.render();__cov_YDKrlU0$Zl4enU54PZMnHA.s['18']++;view.addTarget(this);__cov_YDKrlU0$Zl4enU54PZMnHA.s['19']++;this.set('currentView',view);__cov_YDKrlU0$Zl4enU54PZMnHA.s['20']++;this.fire('show',{view:view});},reset:function(){__cov_YDKrlU0$Zl4enU54PZMnHA.f['7']++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['21']++;var view=this.get('currentView');__cov_YDKrlU0$Zl4enU54PZMnHA.s['22']++;if((__cov_YDKrlU0$Zl4enU54PZMnHA.b['7'][0]++,!view)||(__cov_YDKrlU0$Zl4enU54PZMnHA.b['7'][1]++,view.get(DESTROYED))){__cov_YDKrlU0$Zl4enU54PZMnHA.b['6'][0]++;__cov_YDKrlU0$Zl4enU54PZMnHA.s['23']++;return;}else{__cov_YDKrlU0$Zl4enU54PZMnHA.b['6'][1]++;}__cov_YDKrlU0$Zl4enU54PZMnHA.s['24']++;view.removeTarget(this);__cov_YDKrlU0$Zl4enU54PZMnHA.s['25']++;view.destroy(false);__cov_YDKrlU0$Zl4enU54PZMnHA.s['26']++;this.set('currentView',null);__cov_YDKrlU0$Zl4enU54PZMnHA.s['27']++;this.fire('reset');}},{ATTRS:{selector:{value:null},currentView:{value:null}}});__cov_YDKrlU0$Zl4enU54PZMnHA.s['28']++;Y.RRegion=Region;},'gallery-2013.08.22-21-03',{'requires':['gallery-rocket-view']});
