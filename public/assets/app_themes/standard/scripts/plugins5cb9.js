// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f() { log.history = log.history || []; log.history.push(arguments); if (this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr); } };

// make it safe to use console.log always
(function (a) { function b() { } for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop());) { a[d] = a[d] || b; } })
  (function () { try { console.log(); return window.console; } catch (a) { return (window.console = {}); } }());


//utility, polyfill for no object.create() support
if (typeof Object.create !== "function") {
  Object.create = function (obj) {
    function F() { };
    F.prototype = obj;
    return new F();
  };
}



// place any jQuery/helper plugins in here, instead of separate, slower script files.


/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */

window.matchMedia = window.matchMedia || (function (doc, undefined) {

  "use strict";

  var bool,
    docElem = doc.documentElement,
    refNode = docElem.firstElementChild || docElem.firstChild,
    // fakeBody required for <FF4 when executed in <head>
    fakeBody = doc.createElement("body"),
    div = doc.createElement("div");

  div.id = "mq-test-1";
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.style.background = "none";
  fakeBody.appendChild(div);

  return function (q) {

    div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

    docElem.insertBefore(fakeBody, refNode);
    bool = div.offsetWidth === 42;
    docElem.removeChild(fakeBody);

    return {
      matches: bool,
      media: q
    };

  };

}(document));

//----------------------------------------------------------------------------------------------

// enquire.js v1.5.6 - Awesome Media Queries in JavaScript
// Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/enquire.js
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

window.enquire = function (e) { "use strict"; function t(e, t) { var n = 0, r = e.length, i; for (n; n < r; n++) { i = t(e[n], n); if (i === !1) break } } function n(e) { return Object.prototype.toString.apply(e) === "[object Array]" } function r(e) { return typeof e == "function" } function i(e) { this.initialised = !1, this.options = e, e.deferSetup || this.setup() } function s(e, t) { this.query = e, this.isUnconditional = t, this.handlers = [], this.matched = !1 } function o() { if (!e) throw new Error("matchMedia is required"); var t = new s("only all"); this.queries = {}, this.listening = !1, this.browserIsIncapable = !t.matchMedia() } return i.prototype = { setup: function (e) { this.options.setup && this.options.setup(e), this.initialised = !0 }, on: function (e) { this.initialised || this.setup(e), this.options.match(e) }, off: function (e) { this.options.unmatch && this.options.unmatch(e) }, destroy: function () { this.options.destroy ? this.options.destroy() : this.off() }, equals: function (e) { return this.options === e || this.options.match === e } }, s.prototype = { matchMedia: function () { return e(this.query).matches }, addHandler: function (e, t) { var n = new i(e); this.handlers.push(n), t && this.matched && n.on() }, removeHandler: function (e) { var n = this.handlers; t(n, function (t, r) { if (t.equals(e)) return t.destroy(), !n.splice(r, 1) }) }, assess: function (e) { this.matchMedia() || this.isUnconditional ? this.match(e) : this.unmatch(e) }, match: function (e) { if (this.matched) return; t(this.handlers, function (t) { t.on(e) }), this.matched = !0 }, unmatch: function (e) { if (!this.matched) return; t(this.handlers, function (t) { t.off(e) }), this.matched = !1 } }, o.prototype = { register: function (e, i, o) { var u = this.queries, a = o && this.browserIsIncapable, f = this.listening; return u.hasOwnProperty(e) || (u[e] = new s(e, a), this.listening && u[e].assess()), r(i) && (i = { match: i }), n(i) || (i = [i]), t(i, function (t) { u[e].addHandler(t, f) }), this }, unregister: function (e, n) { var r = this.queries; return r.hasOwnProperty(e) ? (n ? r[e].removeHandler(n) : (t(this.queries[e].handlers, function (e) { e.destroy() }), delete r[e]), this) : this }, fire: function (e) { var t = this.queries, n; for (n in t) t.hasOwnProperty(n) && t[n].assess(e); return this }, listen: function (e) { function n(n) { var r; window.addEventListener(n, function (n) { r && clearTimeout(r), r = setTimeout(function () { t.fire(n) }, e) }, !1) } var t = this; return e = e || 500, this.listening ? this : (window.addEventListener && (n("resize"), n("orientationChange")), t.fire(), this.listening = !0, this) } }, new o }(window.matchMedia);



//----------------------------------------------------------------------------------------------


/*
	Magic Zoom Plus v4.0.33 
	Copyright 2013 Magic Toolbox
	Buy a license: www.magictoolbox.com/magiczoomplus/
	License agreement: http://www.magictoolbox.com/license/

*/
eval(function (m, a, g, i, c, k) { c = function (e) { return (e < a ? '' : c(parseInt(e / a))) + ((e = e % a) > 35 ? String.fromCharCode(e + 29) : e.toString(36)) }; if (!''.replace(/^/, String)) { while (g--) { k[c(g)] = i[g] || c(g) } i = [function (e) { return k[e] }]; c = function () { return '\\w+' }; g = 1 }; while (g--) { if (i[g]) { m = m.replace(new RegExp('\\b' + c(g) + '\\b', 'g'), i[g]) } } return m }('(L(){K(1a.63){M}P b={3t:"dw.7.1",aL:0,5c:{},$aj:L(d){M(d.$4g||(d.$4g=++a.aL))},8Y:L(d){M(a.5c[d]||(a.5c[d]={}))},$F:L(){},$U:L(){M U},2C:L(d){M(1C!=d)},eZ:L(d){M!!(d)},3h:L(d){K(!a.2C(d)){M U}K(d.$3V){M d.$3V}K(!!d.4M){K(1==d.4M){M"93"}K(3==d.4M){M"b4"}}K(d.1v&&d.8x){M"f0"}K(d.1v&&d.8N){M"22"}K((d 4b 1a.f1||d 4b 1a.a1)&&d.4c===a.4l){M"7M"}K(d 4b 1a.57){M"5h"}K(d 4b 1a.a1){M"L"}K(d 4b 1a.7N){M"78"}K(a.V.2q){K(a.2C(d.aZ)){M"42"}}17{K(d===1a.42||d.4c==1a.at||d.4c==1a.eY||d.4c==1a.eX||d.4c==1a.eU||d.4c==1a.eV){M"42"}}K(d 4b 1a.aP){M"aS"}K(d 4b 1a.4z){M"eW"}K(d===1a){M"1a"}K(d===1c){M"1c"}M 43(d)},1T:L(j,h){K(!(j 4b 1a.57)){j=[j]}1B(P g=0,e=j.1v;g<e;g++){K(!a.2C(j)){5p}1B(P f 1I(h||{})){2O{j[g][f]=h[f]}36(d){}}}M j[0]},8Q:L(h,g){K(!(h 4b 1a.57)){h=[h]}1B(P f=0,d=h.1v;f<d;f++){K(!a.2C(h[f])){5p}K(!h[f].2F){5p}1B(P e 1I(g||{})){K(!h[f].2F[e]){h[f].2F[e]=g[e]}}}M h[0]},aM:L(f,e){K(!a.2C(f)){M f}1B(P d 1I(e||{})){K(!f[d]){f[d]=e[d]}}M f},$2O:L(){1B(P f=0,d=22.1v;f<d;f++){2O{M 22[f]()}36(g){}}M 12},$A:L(f){K(!a.2C(f)){M $S([])}K(f.aN){M $S(f.aN())}K(f.8x){P e=f.1v||0,d=1k 57(e);3C(e--){d[e]=f[e]}M $S(d)}M $S(57.2F.f2.1V(f))},3I:L(){M 1k aP().f3()},3D:L(h){P f;2c(a.3h(h)){1e"bh":f={};1B(P g 1I h){f[g]=a.3D(h[g])}1g;1e"5h":f=[];1B(P e=0,d=h.1v;e<d;e++){f[e]=a.3D(h[e])}1g;2i:M h}M a.$(f)},$:L(e){K(!a.2C(e)){M 12}K(e.$ag){M e}2c(a.3h(e)){1e"5h":e=a.aM(e,a.1T(a.57,{$ag:a.$F}));e.2S=e.3y;M e;1g;1e"78":P d=1c.f9(e);K(a.2C(d)){M a.$(d)}M 12;1g;1e"1a":1e"1c":a.$aj(e);e=a.1T(e,a.5R);1g;1e"93":a.$aj(e);e=a.1T(e,a.3g);1g;1e"42":e=a.1T(e,a.at);1g;1e"b4":M e;1g;1e"L":1e"5h":1e"aS":2i:1g}M a.1T(e,{$ag:a.$F})},$1k:L(d,f,e){M $S(a.2G.3G(d)).bC(f||{}).19(e||{})},fa:L(e){K(1c.8L&&1c.8L.1v){1c.8L[0].f8(e,0)}17{P d=$S(1c.3G("1x"));d.2N(e);1c.6e("9z")[0].2b(d)}}};P a=b;1a.63=b;1a.$S=b.$;a.57={$3V:"5h",4e:L(g,h){P d=J.1v;1B(P e=J.1v,f=(h<0)?1s.3F(0,e+h):h||0;f<e;f++){K(J[f]===g){M f}}M-1},52:L(d,e){M J.4e(d,e)!=-1},3y:L(d,g){1B(P f=0,e=J.1v;f<e;f++){K(f 1I J){d.1V(g,J[f],f,J)}}},2K:L(d,j){P h=[];1B(P g=0,e=J.1v;g<e;g++){K(g 1I J){P f=J[g];K(d.1V(j,J[g],g,J)){h.4a(f)}}}M h},cE:L(d,h){P g=[];1B(P f=0,e=J.1v;f<e;f++){K(f 1I J){g[f]=d.1V(h,J[f],f,J)}}M g}};a.8Q(7N,{$3V:"78",3Y:L(){M J.2l(/^\\s+|\\s+$/g,"")},eq:L(d,e){M(e||U)?(J.5v()===d.5v()):(J.2L().5v()===d.2L().5v())},3w:L(){M J.2l(/-\\D/g,L(d){M d.aU(1).f7()})},5Y:L(){M J.2l(/[A-Z]/g,L(d){M("-"+d.aU(0).2L())})},1G:L(d){M 3m(J,d||10)},cP:L(){M 3L(J)},5S:L(){M!J.2l(/13/i,"").3Y()},3f:L(e,d){d=d||"";M(d+J+d).4e(d+e+d)>-1}});b.8Q(a1,{$3V:"L",1p:L(){P e=a.$A(22),d=J,f=e.6J();M L(){M d.4o(f||12,e.aW(a.$A(22)))}},2t:L(){P e=a.$A(22),d=J,f=e.6J();M L(g){M d.4o(f||12,$S([g||1a.42]).aW(e))}},2s:L(){P e=a.$A(22),d=J,f=e.6J();M 1a.6g(L(){M d.4o(d,e)},f||0)},dk:L(){P e=a.$A(22),d=J;M L(){M d.2s.4o(d,e)}},bf:L(){P e=a.$A(22),d=J,f=e.6J();M 1a.f4(L(){M d.4o(d,e)},f||0)}});P c=9l.f5.2L();a.V={8o:{bL:!!(1c.f6),eT:!!(1a.eS),9w:!!(1c.eG)},2B:L(){M"eH"1I 1a||(1a.aV&&1c 4b aV)}(),b0:c.3k(/b2.+b0|eI|eF|eE\\/|eB|eC|eD|eJ|eK|eQ|eR|b6(b1|aT)|eP|eO|eL |eM|eN|fb|fc|aY m(fB|1I)i|fC( fA)?|b3|p(fz|fw)\\/|fx|fy|fD|fE|fK|fL\\.(V|5z)|fJ|fI|fF (ce|b3)|fG|fH/)?13:U,4j:(1a.aY)?"5w":!!(1a.fv)?"2q":(1C!=1c.fu||12!=1a.fi)?"a4":(12!=1a.fj||!9l.fk)?"3x":"fh",3t:"",7Q:0,8R:c.3k(/b6(?:ad|aT|b1)/)?"bJ":(c.3k(/(?:fe|b2)/)||9l.8R.3k(/cn|4L|ff/i)||["fl"])[0].2L(),3N:1c.8n&&"aQ"==1c.8n.2L(),3S:L(){M(1c.8n&&"aQ"==1c.8n.2L())?1c.29:1c.84},5q:1a.5q||1a.fm||1a.fs||1a.ft||1a.fr||1C,8E:1a.8E||1a.bT||1a.bT||1a.fq||1a.eA||1a.fo||1C,1L:U,6i:L(){K(a.V.1L){M}a.V.1L=13;a.29=$S(1c.29);a.4L=$S(1a);(L(){a.V.6o={3Z:U,2Z:""};K(43 1c.29.1x.be!=="1C"){a.V.6o.3Z=13}17{P f="bW bV O 7u bQ".3W(" ");1B(P e=0,d=f.1v;e<d;e++){a.V.6o.2Z=f[e];K(43 1c.29.1x[a.V.6o.2Z+"fp"]!=="1C"){a.V.6o.3Z=13;1g}}}})();(L(){a.V.7n={3Z:U,2Z:""};K(43 1c.29.1x.fM!=="1C"){a.V.7n.3Z=13}17{P f="bW bV O 7u bQ".3W(" ");1B(P e=0,d=f.1v;e<d;e++){a.V.7n.2Z=f[e];K(43 1c.29.1x[a.V.7n.2Z+"ep"]!=="1C"){a.V.7n.3Z=13;1g}}}})();$S(1c).bk("4I")}};(L(){L d(){M!!(22.8N.aC)}a.V.3t=("5w"==a.V.4j)?!!(1c.9z)?dJ:!!(1a.dK)?dL:!!(1a.bN)?79:(a.V.8o.9w)?dH:((d())?dE:((1c.7a)?dC:62)):("2q"==a.V.4j)?!!(1a.dO||1a.dY)?c9:!!(1a.bK&&1a.dZ)?6:((1a.bK)?5:4):("3x"==a.V.4j)?((a.V.8o.bL)?((a.V.8o.9w)?dX:bn):dT):("a4"==a.V.4j)?!!(1c.9z)?62:!!1c.6j?dS:!!(1a.bN)?dR:((1c.7a)?dP:dU):"";a.V[a.V.4j]=a.V[a.V.4j+a.V.3t]=13;K(1a.bY){a.V.bY=13}a.V.7Q=(!a.V.2q)?0:(1c.c7)?1c.c7:L(){P e=0;K(a.V.3N){M 5}2c(a.V.3t){1e 4:e=6;1g;1e 5:e=7;1g;1e 6:e=8;1g;1e c9:e=9;1g}M e}()})();(L(){a.V.3a={3Z:U,8C:L(){M U},ab:L(){},c2:L(){},c0:"",c1:"",2Z:""};K(43 1c.c3!="1C"){a.V.3a.3Z=13}17{P f="3x cR o 7u dW".3W(" ");1B(P e=0,d=f.1v;e<d;e++){a.V.3a.2Z=f[e];K(43 1c[a.V.3a.2Z+"bH"]!="1C"){a.V.3a.3Z=13;1g}}}K(a.V.3a.3Z){a.V.3a.c0=a.V.3a.2Z+"dM";a.V.3a.c1=a.V.3a.2Z+"dG";a.V.3a.8C=L(){2c(J.2Z){1e"":M 1c.3a;1e"3x":M 1c.dF;2i:M 1c[J.2Z+"dD"]}};a.V.3a.ab=L(g){M(J.2Z==="")?g.aO():g[J.2Z+"dN"]()};a.V.3a.c2=L(g){M(J.2Z==="")?1c.c3():1c[J.2Z+"bH"]()}}})();a.3g={4U:L(d){M J.2M.3f(d," ")},2p:L(d){K(d&&!J.4U(d)){J.2M+=(J.2M?" ":"")+d}M J},4h:L(d){d=d||".*";J.2M=J.2M.2l(1k 4z("(^|\\\\s)"+d+"(?:\\\\s|$)"),"$1").3Y();M J},ez:L(d){M J.4U(d)?J.4h(d):J.2p(d)},1R:L(f){f=(f=="4R"&&J.7h)?"ax":f.3w();P d=12,e=12;K(J.7h){d=J.7h[f]}17{K(1c.9Q&&1c.9Q.bm){e=1c.9Q.bm(J,12);d=e?e.eo([f.5Y()]):12}}K(!d){d=J.1x[f]}K("1u"==f){M a.2C(d)?3L(d):1}K(/^(2m(8W|8T|8Z|8z)bI)|((2o|1X)(8W|8T|8Z|8z))$/.2j(f)){d=3m(d)?d:"1N"}M("1w"==d?12:d)},1F:L(f,d){2O{K("1u"==f){J.2x(d);M J}17{K("4R"==f){J.1x[("1C"===43(J.1x.ax))?"e2":"ax"]=d;M J}17{K(a.V.6o&&/be/.2j(f)){}}}J.1x[f.3w()]=d+(("5t"==a.3h(d)&&!$S(["2r","1j"]).52(f.3w()))?"1q":"")}36(g){}M J},19:L(e){1B(P d 1I e){J.1F(d,e[d])}M J},4n:L(){P d={};a.$A(22).2S(L(e){d[e]=J.1R(e)},J);M d},2x:L(h,e){e=e||U;h=3L(h);K(e){K(h==0){K("1J"!=J.1x.2w){J.1x.2w="1J"}}17{K("4k"!=J.1x.2w){J.1x.2w="4k"}}}K(a.V.2q){K(!J.7h||!J.7h.en){J.1x.1j=1}2O{P g=J.em.8x("bB.bD.bz");g.8C=(1!=h);g.1u=h*1W}36(d){J.1x.2K+=(1==h)?"":"ej:bB.bD.bz(8C=13,1u="+h*1W+")"}}J.1x.1u=h;M J},bC:L(d){1B(P e 1I d){J.es(e,""+d[e])}M J},1M:L(){M J.19({1U:"2Y",2w:"1J"})},21:L(){M J.19({1U:"28",2w:"4k"})},1Y:L(){M{Q:J.bE,R:J.ac}},77:L(){M{W:J.4q,Y:J.5B}},ex:L(){P d=J,e={W:0,Y:0};do{e.Y+=d.5B||0;e.W+=d.4q||0;d=d.2z}3C(d);M e},3n:L(){K(a.2C(1c.84.bb)){P d=J.bb(),f=$S(1c).77(),h=a.V.3S();M{W:d.W+f.y-h.ey,Y:d.Y+f.x-h.ew}}P g=J,e=t=0;do{e+=g.ev||0;t+=g.et||0;g=g.eu}3C(g&&!(/^(?:29|ei)$/i).2j(g.3O));M{W:t,Y:e}},4A:L(){P e=J.3n();P d=J.1Y();M{W:e.W,1d:e.W+d.R,Y:e.Y,1f:e.Y+d.Q}},6U:L(f){2O{J.7H=f}36(d){J.eh=f}M J},4w:L(){M(J.2z)?J.2z.3z(J):J},59:L(){a.$A(J.e7).2S(L(d){K(3==d.4M||8==d.4M){M}$S(d).59()});J.4w();J.9k();K(J.$4g){a.5c[J.$4g]=12;3p a.5c[J.$4g]}M 12},4D:L(g,e){e=e||"1d";P d=J.2I;("W"==e&&d)?J.aK(g,d):J.2b(g);M J},1P:L(f,e){P d=$S(f).4D(J,e);M J},bG:L(d){J.4D(d.2z.7p(J,d));M J},56:L(d){K(!(d=$S(d))){M U}M(J==d)?U:(J.52&&!(a.V.ca))?(J.52(d)):(J.b9)?!!(J.b9(d)&16):a.$A(J.2k(d.3O)).52(d)}};a.3g.6V=a.3g.1R;a.3g.dh=a.3g.19;K(!1a.3g){1a.3g=a.$F;K(a.V.4j.3x){1a.1c.3G("e8")}1a.3g.2F=(a.V.4j.3x)?1a["[[fN.2F]]"]:{}}a.8Q(1a.3g,{$3V:"93"});a.5R={1Y:L(){K(a.V.e5||a.V.ca){M{Q:1a.7r,R:1a.7q}}M{Q:a.V.3S().e3,R:a.V.3S().e4}},77:L(){M{x:1a.e9||a.V.3S().5B,y:1a.ea||a.V.3S().4q}},aG:L(){P d=J.1Y();M{Q:1s.3F(a.V.3S().ef,d.Q),R:1s.3F(a.V.3S().eg,d.R)}}};a.1T(1c,{$3V:"1c"});a.1T(1a,{$3V:"1a"});a.1T([a.3g,a.5R],{1b:L(g,e){P d=a.8Y(J.$4g),f=d[g];K(1C!=e&&1C==f){f=d[g]=e}M(a.2C(f)?f:12)},1A:L(f,e){P d=a.8Y(J.$4g);d[f]=e;M J},7t:L(e){P d=a.8Y(J.$4g);3p d[e];M J}});K(!(1a.9J&&1a.9J.2F&&1a.9J.2F.7a)){a.1T([a.3g,a.5R],{7a:L(d){M a.$A(J.6e("*")).2K(L(g){2O{M(1==g.4M&&g.2M.3f(d," "))}36(f){}})}})}a.1T([a.3g,a.5R],{ed:L(){M J.7a(22[0])},2k:L(){M J.6e(22[0])}});K(a.V.3a.3Z){a.3g.aO=L(){a.V.3a.ab(J)}}a.at={$3V:"42",1o:L(){K(J.b5){J.b5()}17{J.aZ=13}K(J.9o){J.9o()}17{J.hj=U}M J},9r:L(){P e,d;e=((/7g/i).2j(J.2X))?J.8O[0]:J;M(!a.2C(e))?{x:0,y:0}:{x:e.hk||e.hi+a.V.3S().5B,y:e.hh||e.hf+a.V.3S().4q}},4O:L(){P d=J.hg||J.hl;3C(d&&3==d.4M){d=d.2z}M d},4Q:L(){P e=12;2c(J.2X){1e"1Q":e=J.aX||J.hm;1g;1e"2D":e=J.aX||J.hr;1g;2i:M e}2O{3C(e&&3==e.4M){e=e.2z}}36(d){e=12}M e},5G:L(){K(!J.bZ&&J.8w!==1C){M(J.8w&1?1:(J.8w&2?3:(J.8w&4?2:0)))}M J.bZ}};a.9i="c4";a.9g="ho";a.8K="";K(!1c.c4){a.9i="he";a.9g="hd";a.8K="4Y"}a.1T([a.3g,a.5R],{1t:L(g,f){P i=("4I"==g)?U:13,e=J.1b("6T",{});e[g]=e[g]||{};K(e[g].5H(f.$6L)){M J}K(!f.$6L){f.$6L=1s.7O(1s.7J()*a.3I())}P d=J,h=L(j){M f.1V(d)};K("4I"==g){K(a.V.1L){f.1V(J);M J}}K(i){h=L(j){j=a.1T(j||1a.e,{$3V:"42"});M f.1V(d,$S(j))};J[a.9i](a.8K+g,h,U)}e[g][f.$6L]=h;M J},2E:L(g){P i=("4I"==g)?U:13,e=J.1b("6T");K(!e||!e[g]){M J}P h=e[g],f=22[1]||12;K(g&&!f){1B(P d 1I h){K(!h.5H(d)){5p}J.2E(g,d)}M J}f=("L"==a.3h(f))?f.$6L:f;K(!h.5H(f)){M J}K("4I"==g){i=U}K(i){J[a.9g](a.8K+g,h[f],U)}3p h[f];M J},bk:L(h,f){P m=("4I"==h)?U:13,l=J,j;K(!m){P g=J.1b("6T");K(!g||!g[h]){M J}P i=g[h];1B(P d 1I i){K(!i.5H(d)){5p}i[d].1V(J)}M J}K(l===1c&&1c.8H&&!l.bj){l=1c.84}K(1c.8H){j=1c.8H(h);j.gZ(f,13,13)}17{j=1c.h0();j.h5=h}K(1c.8H){l.bj(j)}17{l.hb("4Y"+f,j)}M j},9k:L(){P d=J.1b("6T");K(!d){M J}1B(P e 1I d){J.2E(e)}J.7t("6T");M J}});(L(){K("6a"===1c.6j){M a.V.6i.2s(1)}K(a.V.3x&&a.V.3t<bn){(L(){($S(["ha","6a"]).52(1c.6j))?a.V.6i():22.8N.2s(50)})()}17{K(a.V.2q&&a.V.7Q<9&&1a==W){(L(){(a.$2O(L(){a.V.3S().h7("Y");M 13}))?a.V.6i():22.8N.2s(50)})()}17{$S(1c).1t("h8",a.V.6i);$S(1a).1t("2y",a.V.6i)}}})();a.4l=L(){P h=12,e=a.$A(22);K("7M"==a.3h(e[0])){h=e.6J()}P d=L(){1B(P l 1I J){J[l]=a.3D(J[l])}K(J.4c.$3o){J.$3o={};P o=J.4c.$3o;1B(P n 1I o){P j=o[n];2c(a.3h(j)){1e"L":J.$3o[n]=a.4l.ba(J,j);1g;1e"bh":J.$3o[n]=a.3D(j);1g;1e"5h":J.$3o[n]=a.3D(j);1g}}}P i=(J.3M)?J.3M.4o(J,22):J;3p J.aC;M i};K(!d.2F.3M){d.2F.3M=a.$F}K(h){P g=L(){};g.2F=h.2F;d.2F=1k g;d.$3o={};1B(P f 1I h.2F){d.$3o[f]=h.2F[f]}}17{d.$3o=12}d.4c=a.4l;d.2F.4c=d;a.1T(d.2F,e[0]);a.1T(d,{$3V:"7M"});M d};b.4l.ba=L(d,e){M L(){P g=J.aC;P f=e.4o(d,22);M f}};a.4L=$S(1a);a.2G=$S(1c)})();(L(b){K(!b){6G"7F 7D 7E";M}K(b.1S){M}P a=b.$;b.1S=1k b.4l({N:{46:60,31:8l,4i:L(c){M-(1s.ak(1s.al*c)-1)/2},6h:b.$F,44:b.$F,70:b.$F,bx:b.$F,6W:U,cc:13},2R:12,3M:L(d,c){J.el=a(d);J.N=b.1T(J.N,c);J.4B=U},1z:L(c){J.2R=c;J.1D=0;J.hA=0;J.9T=b.3I();J.bs=J.9T+J.N.31;J.a8=J.9Y.1p(J);J.N.6h.1V();K(!J.N.6W&&b.V.5q){J.4B=b.V.5q.1V(1a,J.a8)}17{J.4B=J.9Y.1p(J).bf(1s.5i(96/J.N.46))}M J},9R:L(){K(J.4B){K(!J.N.6W&&b.V.5q&&b.V.8E){b.V.8E.1V(1a,J.4B)}17{hB(J.4B)}J.4B=U}},1o:L(c){c=b.2C(c)?c:U;J.9R();K(c){J.6b(1);J.N.44.2s(10)}M J},6R:L(e,d,c){M(d-e)*c+e},9Y:L(){P d=b.3I();K(d>=J.bs){J.9R();J.6b(1);J.N.44.2s(10);M J}P c=J.N.4i((d-J.9T)/J.N.31);K(!J.N.6W&&b.V.5q){J.4B=b.V.5q.1V(1a,J.a8)}J.6b(c)},6b:L(c){P d={};1B(P e 1I J.2R){K("1u"===e){d[e]=1s.5i(J.6R(J.2R[e][0],J.2R[e][1],c)*1W)/1W}17{d[e]=J.6R(J.2R[e][0],J.2R[e][1],c);K(J.N.cc){d[e]=1s.5i(d[e])}}}J.N.70(d);J.6x(d);J.N.bx(d)},6x:L(c){M J.el.19(c)}});b.1S.3e={4v:L(c){M c},by:L(c){M-(1s.ak(1s.al*c)-1)/2},hE:L(c){M 1-b.1S.3e.by(1-c)},bw:L(c){M 1s.6n(2,8*(c-1))},gX:L(c){M 1-b.1S.3e.bw(1-c)},bv:L(c){M 1s.6n(c,2)},gc:L(c){M 1-b.1S.3e.bv(1-c)},bt:L(c){M 1s.6n(c,3)},g9:L(c){M 1-b.1S.3e.bt(1-c)},bu:L(d,c){c=c||1.g7;M 1s.6n(d,2)*((c+1)*d-c)},g8:L(d,c){M 1-b.1S.3e.bu(1-d)},bA:L(d,c){c=c||[];M 1s.6n(2,10*--d)*1s.ak(20*d*1s.al*(c[0]||1)/3)},gl:L(d,c){M 1-b.1S.3e.bA(1-d,c)},bF:L(e){1B(P d=0,c=1;1;d+=c,c/=2){K(e>=(7-4*d)/11){M c*c-1s.6n((11-6*d-11*e)/4,2)}}},gf:L(c){M 1-b.1S.3e.bF(1-c)},2Y:L(c){M 0}}})(63);(L(a){K(!a){6G"7F 7D 7E";M}K(!a.1S){6G"7F.1S 7D 7E";M}K(a.1S.aa){M}P b=a.$;a.1S.aa=1k a.4l(a.1S,{N:{5K:"7k"},3M:L(d,c){J.el=$S(d);J.N=a.1T(J.$3o.N,J.N);J.$3o.3M(d,c);J.4p=J.el.1b("5o:4p");J.4p=J.4p||a.$1k("3c").19(a.1T(J.el.4n("1X-W","1X-Y","1X-1f","1X-1d","1m","W","4R"),{2n:"1J"})).bG(J.el);J.el.1A("5o:4p",J.4p).19({1X:0})},7k:L(){J.1X="1X-W";J.4s="R";J.6k=J.el.ac},a6:L(c){J.1X="1X-"+(c||"Y");J.4s="Q";J.6k=J.el.bE},1f:L(){J.a6()},Y:L(){J.a6("1f")},1z:L(e,h){J[h||J.N.5K]();P g=J.el.1R(J.1X).1G(),f=J.4p.1R(J.4s).1G(),c={},i={},d;c[J.1X]=[g,0],c[J.4s]=[0,J.6k],i[J.1X]=[g,-J.6k],i[J.4s]=[f,0];2c(e){1e"1I":d=c;1g;1e"am":d=i;1g;1e"8G":d=(0==f)?c:i;1g}J.$3o.1z(d);M J},6x:L(c){J.el.1F(J.1X,c[J.1X]);J.4p.1F(J.4s,c[J.4s]);M J},g5:L(c){M J.1z("1I",c)},g4:L(c){M J.1z("am",c)},1M:L(d){J[d||J.N.5K]();P c={};c[J.4s]=0,c[J.1X]=-J.6k;M J.6x(c)},21:L(d){J[d||J.N.5K]();P c={};c[J.4s]=J.6k,c[J.1X]=0;M J.6x(c)},8G:L(c){M J.1z("8G",c)}})})(63);(L(b){K(!b){6G"7F 7D 7E";M}K(b.7x){M}P a=b.$;b.7x=1k b.4l(b.1S,{3M:L(c,d){J.an=c;J.N=b.1T(J.N,d);J.4B=U},1z:L(c){J.$3o.1z([]);J.bq=c;M J},6b:L(c){1B(P d=0;d<J.an.1v;d++){J.el=a(J.an[d]);J.2R=J.bq[d];J.$3o.6b(c)}}})})(63);P 4E=(L(g){P i=g.$;g.$7Z=L(j){$S(j).1o();M U};P c={3t:"cV.0.26",N:{},83:{1u:50,4T:U,a0:40,46:25,3u:4J,3K:4J,68:15,3d:"1f",6O:"W",c6:"9I",69:U,9B:13,66:U,ap:U,x:-1,y:-1,7U:U,9L:U,2h:"2y",85:13,5b:"W",8j:"2e",bM:13,dr:8r,dl:62,2A:"",1n:13,3T:"9p",53:"9x",7z:75,7d:"fQ",5l:13,8t:"dA 1j..",7B:75,9D:-1,9H:-1,3i:"1y",8X:60,3P:"8p",7A:8r,bR:13,bS:U,47:"",bO:13,6B:U,2W:U,3Q:U},dz:$S([/^(1u)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1u-aw)(\\s+)?:(\\s+)?(13|U)$/i,/^(85\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(46)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1j\\-Q)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1j\\-R)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1j\\-fV)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1j\\-1m)(\\s+)?:(\\s+)?(1f|Y|W|1d|9v|5j|#([a-7K-7P\\-:\\.]+))$/i,/^(1j\\-cA)(\\s+)?:(\\s+)?(1f|Y|W|1d|5y)$/i,/^(1j\\-1a\\-8d)(\\s+)?:(\\s+)?(9I|b8|U)$/i,/^(dq\\-5K)(\\s+)?:(\\s+)?(13|U)$/i,/^(dj\\-4Y\\-1y)(\\s+)?:(\\s+)?(13|U)$/i,/^(fW\\-21\\-1j)(\\s+)?:(\\s+)?(13|U)$/i,/^(g2\\-1m)(\\s+)?:(\\s+)?(13|U)$/i,/^(x)(\\s+)?:(\\s+)?([\\d.]+)(1q)?/i,/^(y)(\\s+)?:(\\s+)?([\\d.]+)(1q)?/i,/^(1y\\-8q\\-6d)(\\s+)?:(\\s+)?(13|U)$/i,/^(1y\\-8q\\-g3)(\\s+)?:(\\s+)?(13|U)$/i,/^(9C\\-4Y)(\\s+)?:(\\s+)?(2y|1y|1Q)$/i,/^(1y\\-8q\\-9C)(\\s+)?:(\\s+)?(13|U)$/i,/^(85)(\\s+)?:(\\s+)?(13|U)$/i,/^(21\\-2e)(\\s+)?:(\\s+)?(13|U|W|1d)$/i,/^(2e\\-g1)(\\s+)?:(\\s+)?(2e|#([a-7K-7P\\-:\\.]+))$/i,/^(1j\\-5k)(\\s+)?:(\\s+)?(13|U)$/i,/^(1j\\-5k\\-1I\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1j\\-5k\\-am\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(2A)(\\s+)?:(\\s+)?([a-7K-7P\\-:\\.]+)$/i,/^(1n)(\\s+)?:(\\s+)?(13|U)/i,/^(1n\\-fX)(\\s+)?:(\\s+)?([^;]*)$/i,/^(1n\\-1u)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1n\\-1m)(\\s+)?:(\\s+)?(9x|as|aq|bl|br|bc)/i,/^(21\\-5Q)(\\s+)?:(\\s+)?(13|U)$/i,/^(5Q\\-fY)(\\s+)?:(\\s+)?([^;]*)$/i,/^(5Q\\-1u)(\\s+)?:(\\s+)?(\\d+)$/i,/^(5Q\\-1m\\-x)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(5Q\\-1m\\-y)(\\s+)?:(\\s+)?(\\d+)(1q)?/i,/^(1K\\-bd)(\\s+)?:(\\s+)?(1y|1Q)$/i,/^(3v\\-bd)(\\s+)?:(\\s+)?(1y|1Q)$/i,/^(3v\\-1Q\\-gm)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3v\\-8d)(\\s+)?:(\\s+)?(8p|5k|7w|U)$/i,/^(3v\\-8d\\-7C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3v\\-7M)(\\s+)?:(\\s+)?([a-7K-7P\\-:\\.]+)$/i,/^(4d\\-1j\\-1a)(\\s+)?:(\\s+)?(13|U)$/i,/^(bi\\-3v\\-gM)(\\s+)?:(\\s+)?(13|U)$/i,/^(bi\\-3v\\-9O)(\\s+)?:(\\s+)?(13|U)$/i,/^(dp\\-55)(\\s+)?:(\\s+)?(13|U)$/i,/^(1f\\-1y)(\\s+)?:(\\s+)?(13|U)$/i,/^(dm\\-1j)(\\s+)?:(\\s+)?(13|U)$/i]),3U:$S([]),dv:L(l){P k=/(1y|1Q)/i;1B(P j=0;j<c.3U.1v;j++){K(c.3U[j].3r&&!c.3U[j].6H){c.3U[j].65()}17{K(k.2j(c.3U[j].N.2h)&&c.3U[j].6p){c.3U[j].6p=l}}}},1o:L(j){P e=$S([]);K(j){K((j=$S(j))&&j.1j){e.4a(j)}17{M U}}17{e=$S(g.$A(g.29.2k("A")).2K(L(k){M((" "+k.2M+" ").3k(/\\db\\s/)&&k.1j)}))}e.2S(L(k){k.1j&&k.1j.1o()},J)},1z:L(e){K(0==22.1v){c.73();M 13}e=$S(e);K(!e||!(" "+e.2M+" ").3k(/\\s(6c|4E)\\s/)){M U}K(!e.1j){P j=12;3C(j=e.2I){K(j.3O=="8i"){1g}e.3z(j)}3C(j=e.gN){K(j.3O=="8i"){1g}e.3z(j)}K(!e.2I||e.2I.3O!="8i"){6G"gL gK 9p"}c.3U.4a(1k c.1j(e,(22.1v>1)?22[1]:1C))}17{e.1j.1z()}},2N:L(l,e,k,j){K((l=$S(l))&&l.1j){l.1j.2N(e,k,j);M 13}M U},73:L(){g.$A(1a.1c.6e("A")).2S(L(e){K(e.2M.3f("6c"," ")){K(c.1o(e)){c.1z.2s(1W,e)}17{c.1z(e)}}},J)},21:L(e){K((e=$S(e))&&e.1j){M e.1j.6d()}M U},gH:L(e){K((e=$S(e))&&e.1j){M{x:e.1j.N.x,y:e.1j.N.y}}},cd:L(k){P j,e;j="";1B(e=0;e<k.1v;e++){j+=7N.cJ(14^k.cI(e))}M j}};c.6u=L(){J.3M.4o(J,22)};c.6u.2F={3M:L(e){J.cb=12;J.5f=12;J.9b=J.bp.2t(J);J.8g=12;J.Q=0;J.R=0;J.2m={Y:0,1f:0,W:0,1d:0};J.2o={Y:0,1f:0,W:0,1d:0};J.1L=U;J.5e=12;K("78"==g.3h(e)){J.5e=g.$1k("5a").19({1m:"1O",W:"-a2",Q:"bo",R:"bo",2n:"1J"}).1P(g.29);J.X=g.$1k("2T").1P(J.5e);J.7y();J.X.1Z=e}17{J.X=$S(e);J.7y();J.X.1Z=e.1Z}},4f:L(){K(J.5e){K(J.X.2z==J.5e){J.X.4w().19({1m:"6y",W:"1w"})}J.5e.59();J.5e=12}},bp:L(j){K(j){$S(j).1o()}K(J.cb){J.4f();J.cb.1V(J,U)}J.5V()},7y:L(e){J.5f=12;K(e==13||!(J.X.1Z&&(J.X.6a||J.X.6j=="6a"))){J.5f=L(j){K(j){$S(j).1o()}K(J.1L){M}J.1L=13;J.6M();K(J.cb){J.4f();J.cb.1V()}}.2t(J);J.X.1t("2y",J.5f);$S(["7X","7W"]).2S(L(j){J.X.1t(j,J.9b)},J)}17{J.1L=13}},2N:L(j,k){J.5V();P e=g.$1k("a",{2a:j});K(13!==k&&J.X.1Z.3f(e.2a)&&0!==J.X.Q){J.1L=13}17{J.7y(13);J.X.1Z=j}e=12},6M:L(){J.Q=J.X.Q;J.R=J.X.R;K(J.Q==0&&J.R==0&&g.V.3x){J.Q=J.X.8m;J.R=J.X.ds}$S(["8Z","8z","8W","8T"]).2S(L(j){J.2o[j.2L()]=J.X.6V("2o"+j).1G();J.2m[j.2L()]=J.X.6V("2m"+j+"bI").1G()},J);K(g.V.5w||(g.V.2q&&!g.V.3N)){J.Q-=J.2o.Y+J.2o.1f;J.R-=J.2o.W+J.2o.1d}},9t:L(){P e=12;e=J.X.4A();M{W:e.W+J.2m.W,1d:e.1d-J.2m.1d,Y:e.Y+J.2m.Y,1f:e.1f-J.2m.1f}},gP:L(){K(J.8g){J.8g.1Z=J.X.1Z;J.X=12;J.X=J.8g}},2y:L(e){K(J.1L){K(!J.Q){(L(){J.6M();J.4f();e.1V()}).1p(J).2s(1)}17{J.4f();e.1V()}}17{J.cb=e}},5V:L(){K(J.5f){J.X.2E("2y",J.5f)}$S(["7X","7W"]).2S(L(e){J.X.2E(e,J.9b)},J);J.5f=12;J.cb=12;J.Q=12;J.1L=U;J.gW=U}};c.1j=L(){J.9S.4o(J,22)};c.1j.2F={9S:L(k,j){P e={};J.4y=-1;J.3r=U;J.7V=0;J.7Y=0;J.6H=U;J.4m=12;J.9M=$S(1a).1b("c5:8e")||$S(1a).1b("c5:8e",g.$1k("5a").19({1m:"1O",W:-6Z,Q:10,R:10,2n:"1J"}).1P(g.29));J.N=g.3D(c.83);K(k){J.c=$S(k)}J.5E=("5a"==J.c.3O.2L());e=g.1T(e,J.4W());e=g.1T(e,J.4W(J.c.3A));K(j){e=g.1T(e,J.4W(j))}K(e.69&&1C===e.66){e.66=13}g.1T(J.N,e);J.N.2A+="";K("2y"==J.N.2h&&g.2C(J.N.9A)&&"13"==J.N.9A.5v()){J.N.2h="1y"}K(g.2C(J.N.9P)&&J.N.9P!=J.N.3i){J.N.3i=J.N.9P}K(g.V.2B){J.N.3i="1y";J.N.2h=("1Q"==J.N.2h)?"1y":J.N.2h;J.N.9L=U;K(1a.3R.R<=gQ){J.N.3d="5j"}}K(J.N.3Q){J.3r=U;J.N.7U=13;J.N.1n=U}K(k){J.82=12;J.6Y=J.9E.2t(J);J.9F=J.6E.2t(J);J.aE=J.21.1p(J,U);J.bX=J.6X.1p(J);J.4x=J.6t.2t(J);K(g.V.2B){K(!J.N.3Q){J.c.1t("7l",J.6Y);J.c.1t("4K",J.9F)}17{J.c.19({"-3x-gR-gS":"2Y","-3x-7g-gG":"2Y","-3x-gF-gu-7G":"ct"});J.c.1t("1y",L(l){l.9o()})}}17{K(!J.5E){J.c.1t("1y",L(m){P l=m.5G();K(3==l){M 13}$S(m).1o();K(!g.V.2q){J.bU()}M U})}J.c.1t("9E",J.6Y);J.c.1t("6E",J.9F);K("1Q"==J.N.2h){J.c.1t("1Q",J.6Y)}}J.c.di="4Y";J.c.1x.gs="2Y";J.c.1t("gr",g.$7Z);K(!J.5E){J.c.19({1m:"4S",1U:"7I-28",go:"2Y",8D:"0",45:"gp"});K(g.V.cC||g.V.5w){J.c.19({1U:"28"})}K(J.c.1R("9U")=="5y"){J.c.19({1X:"1w 1w"})}}J.c.1j=J}17{J.N.2h="2y"}K(!J.N.2W){J.c.1t("8F",g.$7Z)}K("2y"==J.N.2h){J.6S()}17{K(""!=J.c.1H){J.98(13)}}},6S:L(){P l,o,n,m,j;K(!J.18){J.18=1k c.6u(J.c.2I);J.1r=1k c.6u(J.c.2a)}17{J.1r.2N(J.c.2a)}K(!J.1i){J.1i={X:$S(1c.3G("3c"))[(J.5E)?"4h":"2p"]("gq").19({2n:"1J",2r:J.N.3d=="5j"?1W:gw,W:"-6Q",1m:"1O",Q:J.N.3u+"1q",R:J.N.3K+"1q"}),1j:J,49:"1N",86:0,87:0};K(!(g.V.gx&&g.V.7Q<9)){2c(J.N.c6){1e"9I":J.1i.X.2p("gB");1g;1e"b8":J.1i.X.2p("gz");1g;2i:1g}}J.1i.1M=L(){K(J.X.1x.W!="-6Q"&&J.1j.1l&&!J.1j.1l.4V){J.49=J.X.1x.W;J.X.1x.W="-6Q"}K(J.X.2z===g.29){J.X.1P(J.1j.9M)}};J.1i.df=J.1i.1M.1p(J.1i);K(g.V.3l){l=$S(1c.3G("ai"));l.1Z="a5:\'\'";l.19({Y:"1N",W:"1N",1m:"1O","z-23":-1}).gA=0;J.1i.9G=J.1i.X.2b(l)}J.1i.51=$S(1c.3G("3c")).2p("e6").19({1m:"4S",2r:10,Y:"1N",W:"1N",2o:"gy"}).1M();o=g.$1k("3c",{},{2n:"1J"});o.2b(J.1r.X);J.1r.X.19({2o:"1N",1X:"1N",2m:"1N",Q:"1w",R:"1w"});K(J.N.5b=="1d"){J.1i.X.2b(o);J.1i.X.2b(J.1i.51)}17{J.1i.X.2b(J.1i.51);J.1i.X.2b(o)}K(J.N.3d=="9v"&&$S(J.c.1H+"-9O")){$S(J.c.1H+"-9O").2b(J.1i.X)}17{K(J.N.3d.3f("#")){P q=J.N.3d.2l(/^#/,"");K($S(q)){$S(q).2b(J.1i.X)}}17{K(J.N.3d=="5j"){J.c.2b(J.1i.X)}17{J.1i.X.1P(J.9M)}}}K("1C"!==43(j)){J.1i.g=$S(1c.3G("5a")).19({7G:j[1],cF:j[2]+"1q",cG:j[3],cw:"cv",1m:"1O","z-23":10+(""+(J.1r.X.1R("z-23")||0)).1G(),Q:j[5],9U:j[4],Y:"1N"}).6U(c.cd(j[0])).1P(J.1i.X,((1s.7O(1s.7J()*cH)+1)%2)?"W":"1d")}}K(J.N.5b!="U"&&J.N.5b!=U){P k=J.1i.51;k.1M();3C(n=k.2I){k.3z(n)}K(J.N.8j=="2e"&&""!=J.c.2e){k.2b(1c.5r(J.c.2e));k.21()}17{K(J.N.8j.3f("#")){P q=J.N.8j.2l(/^#/,"");K($S(q)){k.6U($S(q).7H);k.21()}}}}17{J.1i.51.1M()}J.c.ae=J.c.2e;J.c.2e="";J.18.2y(J.c8.1p(J))},c8:L(e){K(!e&&e!==1C){M}K(!J.N.4T){J.18.X.2x(1)}K(!J.5E){J.c.19({Q:J.18.Q+"1q"})}K(J.N.5l){J.6K=6g(J.bX,8r)}K(J.N.2A!=""&&$S(J.N.2A)){J.bP()}K(J.c.1H!=""){J.98()}J.1r.2y(J.9q.1p(J))},9q:L(k){P j,e;K(!k&&k!==1C){5d(J.6K);K(J.N.5l&&J.2u){J.2u.1M()}M}K(!J.18||!J.1r){M}e=J.18.X.4A();K(e.1d==e.W){J.9q.1p(J).2s(8l);M}K(J.18.Q==0&&g.V.2q){J.18.6M();J.1r.6M();!J.5E&&J.c.19({Q:J.18.Q+"1q"})}j=J.1i.51.1Y();K(J.N.bO||J.N.6B){K((J.1r.Q<J.N.3u)||J.N.6B){J.N.3u=J.1r.Q;J.1i.X.19({Q:J.N.3u});j=J.1i.51.1Y()}K((J.1r.R<J.N.3K)||J.N.6B){J.N.3K=J.1r.R+j.R}}2c(J.N.3d){1e"9v":1g;1e"1f":J.1i.X.1x.Y=e.1f+J.N.68+"1q";1g;1e"Y":J.1i.X.1x.Y=e.Y-J.N.68-J.N.3u+"1q";1g;1e"W":J.1i.49=e.W-(J.N.68+J.N.3K)+"1q";1g;1e"1d":J.1i.49=e.1d+J.N.68+"1q";1g;1e"5j":J.1i.X.19({Y:"1N",R:J.18.R+"1q",Q:J.18.Q+"1q"});J.N.3u=J.18.Q;J.N.3K=J.18.R;J.1i.49="1N";j=J.1i.51.1Y();1g}K(J.N.5b=="1d"){J.1r.X.2z.1x.R=(J.N.3K-j.R)+"1q"}J.1i.X.19({R:J.N.3K+"1q",Q:J.N.3u+"1q"}).2x(1);K(g.V.3l&&J.1i.9G){J.1i.9G.19({Q:J.N.3u+"1q",R:J.N.3K+"1q"})}K(J.N.3d=="1f"||J.N.3d=="Y"){K(J.N.6O=="5y"){J.1i.49=(e.1d-(e.1d-e.W)/2-J.N.3K/2)+"1q"}17{K(J.N.6O=="1d"){J.1i.49=(e.1d-J.N.3K)+"1q"}17{J.1i.49=e.W+"1q"}}}17{K(J.N.3d=="W"||J.N.3d=="1d"){K(J.N.6O=="5y"){J.1i.X.1x.Y=(e.1f-(e.1f-e.Y)/2-J.N.3u/2)+"1q"}17{K(J.N.6O=="1f"){J.1i.X.1x.Y=(e.1f-J.N.3u)+"1q"}17{J.1i.X.1x.Y=e.Y+"1q"}}}}J.1i.86=3m(J.1i.49,10);J.1i.87=3m(J.1i.X.1x.Y,10);J.81=J.N.3K-j.R;K(J.1i.g){J.1i.g.19({W:J.N.5b=="1d"?0:"1w",1d:J.N.5b=="1d"?"1w":0})}J.1r.X.19({1m:"4S",5T:"1N",2o:"1N",Y:"1N",W:"1N"});J.dy();K(J.N.66){K(J.N.x==-1){J.N.x=J.18.Q/2}K(J.N.y==-1){J.N.y=J.18.R/2}J.21()}17{K(J.N.bM){J.3s=1k g.1S(J.1i.X,{6W:"bJ"===g.V.8R})}J.1i.X.19({W:"-6Q"})}K(J.N.5l&&J.2u){J.2u.1M()}K(g.V.2B){J.c.1t("aJ",J.4x);J.c.1t("4K",J.4x)}17{J.c.1t("9c",J.4x);J.c.1t("2D",J.4x)}J.6s();K(!J.N.3Q&&(!J.N.7U||"1y"==J.N.2h)){J.3r=13}K("1y"==J.N.2h&&J.6p){J.6t(J.6p)}K(J.6H){J.6d()}J.4y=g.3I()},6s:L(){P m=/as|br/i,e=/bl|br|bc/i,j=/bc|aq/i,l=12;J.67=1C;K(!J.N.1n){K(J.1n){J.1n.59();J.1n=1C}M}K(!J.1n){J.1n=$S(1c.3G("3c")).2p(J.N.7d).19({1U:"28",2n:"1J",1m:"1O",2w:"1J","z-23":1});K(J.N.3T!=""){J.1n.2b(1c.5r(J.N.3T))}J.c.2b(J.1n)}17{K(J.N.3T!=""){l=J.1n[(J.1n.2I)?"7p":"2b"](1c.5r(J.N.3T),J.1n.2I);l=12}}J.1n.19({Y:"1w",1f:"1w",W:"1w",1d:"1w",1U:"28",1u:(J.N.7z/1W),"3F-Q":(J.18.Q-4)});P k=J.1n.1Y();J.1n.1F((m.2j(J.N.53)?"1f":"Y"),(j.2j(J.N.53)?(J.18.Q-k.Q)/2:2)).1F((e.2j(J.N.53)?"1d":"W"),2);J.67=13;J.1n.21()},6X:L(){K(J.1r.1L){M}J.2u=$S(1c.3G("3c")).2p("gd").2x(J.N.7B/1W).19({1U:"28",2n:"1J",1m:"1O",2w:"1J","z-23":20,"3F-Q":(J.18.Q-4)});J.2u.2b(1c.5r(J.N.8t));J.c.2b(J.2u);P e=J.2u.1Y();J.2u.19({Y:(J.N.9D==-1?((J.18.Q-e.Q)/2):(J.N.9D))+"1q",W:(J.N.9H==-1?((J.18.R-e.R)/2):(J.N.9H))+"1q"});J.2u.21()},bP:L(){$S(J.N.2A).aR=$S(J.N.2A).2z;$S(J.N.2A).b7=$S(J.N.2A).hF;J.c.2b($S(J.N.2A));$S(J.N.2A).19({1m:"1O",Y:"1N",W:"1N",Q:J.18.Q+"1q",R:J.18.R+"1q",2r:15}).21();K(g.V.2q){J.c.88=J.c.2b($S(1c.3G("3c")).19({1m:"1O",Y:"1N",W:"1N",Q:J.18.Q+"1q",R:J.18.R+"1q",2r:14,48:"#hD"}).2x(0.hw))}g.$A($S(J.N.2A).6e("A")).2S(L(j){P k=j.hs.3W(","),e=12;$S(j).19({1m:"1O",Y:k[0]+"1q",W:k[1]+"1q",Q:(k[2]-k[0])+"1q",R:(k[3]-k[1])+"1q",2r:15}).21();K(j.4U("2Q")){K(e=j.1b("1K")){e.2v=J.N.2A}17{j.3A+=";2v: "+J.N.2A+";"}}},J)},98:L(k){P e,l,j=1k 4z("1j\\\\-1H(\\\\s+)?:(\\\\s+)?"+J.c.1H+"($|;)");J.3v=$S([]);g.$A(1c.6e("A")).2S(L(n){K(j.2j(n.3A)){K(!$S(n).6v){n.6v=L(o){K(!g.V.2q){J.bU()}$S(o).1o();M U};n.1t("1y",n.6v)}K(k){M}P m=g.$1k("a",{2a:n.6C});(J.N.47!="")&&$S(n)[J.1r.X.1Z.3f(n.2a)&&J.18.X.1Z.3f(m.2a)?"2p":"4h"](J.N.47);K(J.1r.X.1Z.3f(n.2a)&&J.18.X.1Z.3f(m.2a)){J.82=n}m=12;K(!n.5u){n.5u=L(q,p){p=q.h9||q.4O();2O{3C("a"!=p.3O.2L()){p=p.2z}}36(o){M}K(p.56(q.4Q())){M}K(q.2X=="2D"){K(J.6F){5d(J.6F)}J.6F=U;M}K(p.2e!=""){J.c.2e=p.2e}K(q.2X=="1Q"){J.6F=6g(J.2N.1p(J,p.2a,p.6C,p.3A,p),J.N.8X)}17{J.2N(p.2a,p.6C,p.3A,p)}}.2t(J);n.1t(J.N.3i,n.5u);K(J.N.3i=="1Q"){n.1t("2D",n.5u)}}n.19({8D:"0",1U:"7I-28"});K(J.N.bR){l=1k cf();l.1Z=n.6C}K(J.N.bS){e=1k cf();e.1Z=n.2a}J.3v.4a(n)}},J)},1o:L(j){2O{J.65();K(g.V.2B){J.c.2E("aJ",J.4x);J.c.2E("4K",J.4x)}17{J.c.2E("9c",J.4x);J.c.2E("2D",J.4x)}K(1C===j&&J.1l){J.1l.X.1M()}K(J.3s){J.3s.1o()}J.2g=12;J.3r=U;K(J.3v!==1C){J.3v.2S(L(e){K(J.N.47!=""){e.4h(J.N.47)}K(1C===j){e.2E(J.N.3i,e.5u);K(J.N.3i=="1Q"){e.2E("2D",e.5u)}e.5u=12;e.2E("1y",e.6v);e.6v=12}},J)}K(J.N.2A!=""&&$S(J.N.2A)){$S(J.N.2A).1M();$S(J.N.2A).aR.aK($S(J.N.2A),$S(J.N.2A).b7);K(J.c.88){J.c.3z(J.c.88)}}J.1r.5V();K(J.N.4T){J.c.4h("7R");J.18.X.2x(1)}J.3s=12;K(J.2u){J.c.3z(J.2u)}K(J.1n){J.1n.1M()}K(1C===j){K(J.1n){J.c.3z(J.1n)}J.1n=12;J.18.5V();(J.1l&&J.1l.X)&&J.c.3z(J.1l.X);(J.1i&&J.1i.X)&&J.1i.X.2z.3z(J.1i.X);J.1l=12;J.1i=12;J.1r=12;J.18=12;K(!J.N.2W){J.c.2E("8F",g.$7Z)}}K(J.6K){5d(J.6K);J.6K=12}J.4m=12;J.c.88=12;J.2u=12;K(J.c.2e==""){J.c.2e=J.c.ae}J.4y=-1}36(k){}},1z:L(e){K(J.4y!=-1){M}J.9S(U,e)},2N:L(y,o,j,x){P k,B,e,m,u,l,D=12,w=12;P n,p,A,v,r,s,E,C,q;x=x||12;K(g.3I()-J.4y<4J||J.4y==-1||J.9a){k=4J-g.3I()+J.4y;K(J.4y==-1){k=4J}J.6F=6g(J.2N.1p(J,y,o,j,x),k);M}K(x&&J.82==x){M}17{J.82=x}B=L(F){K(1C!=y){J.c.2a=y}K(1C===j){j=""}K(J.N.ap){j="x: "+J.N.x+"; y: "+J.N.y+"; "+j}K(1C!=o){J.18.2N(o);K(F!==1C){J.18.2y(F)}}};w=J.c.1b("1K");K(w&&w.1L){w.2J(12,13);w.1D="7m";D=L(){w.1D="41";w.2N(J.c.2a,12,j)}.1p(J)}m=J.18.Q;u=J.18.R;J.1o(13);K(J.N.3P!="U"){J.9a=13;P z=$S(J.c.6I(13)).19({1m:"1O",W:"-6Q"});J.c.2z.2b(z);l=1k c.6u(z.2I);l.2N(o);K("7w"==J.N.3P){q=J.c.2a;n=J.3v.2K(L(F){M F.2a.3f(q)});n=(n[0])?$S(n[0].2k("2T")[0]||n[0]):J.18.X;p=J.3v.2K(L(F){M F.2a.3f(y)});p=(p[0])?$S(p[0].2k("2T")[0]||p[0]):12;K(12==p){p=J.18.X;n=J.18.X}v=J.18.X.3n(),r=n.3n(),s=p.3n(),C=n.1Y(),E=p.1Y()}e=L(){P F={},H={},G={},I=12;K("7w"==J.N.3P){F.Q=[m,C.Q];F.R=[u,C.R];F.W=[v.W,r.W];F.Y=[v.Y,r.Y];H.Q=[E.Q,l.Q];H.R=[E.R,l.R];H.W=[s.W,v.W];z.2x(0).19({R:0,Q:l.Q,1m:"4S"});H.Y=[s.Y,z.3n().Y];G.Q=[m,l.Q];G.R=[u,l.R];l.X.1P(g.29).19({1m:"1O","z-23":aA,Y:H.Y[0],W:H.W[0],Q:H.Q[0],R:H.R[0]});I=$S(J.c.2I.6I(U)).1P(g.29).19({1m:"1O","z-23":aD,Y:F.Y[0],W:F.W[0],2w:"4k"});$S(J.c.2I).19({2w:"1J"});J.c.2z.3z(z)}17{l.X.1P(J.c).19({1m:"1O","z-23":aA,1u:0,Y:"1N",W:"1N"});I=$S(J.c.2I.6I(U)).1P(J.c).19({1m:"1O","z-23":aD,Y:"1N",W:"1N",2w:"4k"});$S(J.c.2I).19({2w:"1J"});J.c.2z.3z(z);H={1u:[0,1]};K(m!=l.Q||u!=l.R){G.Q=H.Q=F.Q=[m,l.Q];G.R=H.R=F.R=[u,l.R]}K(J.N.3P=="5k"){F.1u=[1,0]}}1k g.7x([J.c,l.X,(I||J.c.2I)],{31:J.N.7A,44:L(){K(I){I.4w();I=12}B.1V(J,L(){l.5V();$S(J.c.2I).19({2w:"4k"});$S(l.X).4w();l=12;K(F.1u){$S(J.c.2I).19({1u:1})}J.9a=U;J.1z(j);K(D){D.2s(10)}}.1p(J))}.1p(J)}).1z([G,H,F])};l.2y(e.1p(J))}17{B.1V(J,L(){J.c.19({Q:J.18.Q+"1q",R:J.18.R+"1q"});J.1z(j);K(D){D.2s(10)}}.1p(J))}},4W:L(j){P e,n,l,k;e=12;n=[];j=j||"";K(""==j){1B(k 1I c.N){e=c.N[k];2c(g.3h(c.83[k.3w()])){1e"7i":e=e.5v().5S();1g;1e"5t":e=3L(e);1g;2i:1g}n[k.3w()]=e}}17{l=$S(j.3W(";"));l.2S(L(m){c.dz.2S(L(o){e=o.5W(m.3Y());K(e){2c(g.3h(c.83[e[1].3w()])){1e"7i":n[e[1].3w()]=e[4]==="13";1g;1e"5t":n[e[1].3w()]=3L(e[4]);1g;2i:n[e[1].3w()]=e[4]}}},J)},J)}K(U===n.3P){n.3P="U"}M n},dy:L(){P j,e;K(!J.1l){J.1l={X:$S(1c.3G("3c")).2p("7R").19({2r:10,1m:"1O",2n:"1J"}).1M(),Q:20,R:20};J.c.2b(J.1l.X)}K(e=J.c.1b("1K")){J.1l.X.19({45:(e.T.4C)?"dj":""})}K(J.N.6B){J.1l.X.19({"2m-Q":"1N",45:"2i"})}J.1l.4V=U;J.1l.R=J.81/(J.1r.R/J.18.R);J.1l.Q=J.N.3u/(J.1r.Q/J.18.Q);K(J.1l.Q>J.18.Q){J.1l.Q=J.18.Q}K(J.1l.R>J.18.R){J.1l.R=J.18.R}J.1l.Q=1s.5i(J.1l.Q);J.1l.R=1s.5i(J.1l.R);J.1l.5T=J.1l.X.6V("aB").1G();J.1l.X.19({Q:(J.1l.Q-2*(g.V.3N?0:J.1l.5T))+"1q",R:(J.1l.R-2*(g.V.3N?0:J.1l.5T))+"1q"});K(!J.N.4T&&!J.N.2W){J.1l.X.2x(3L(J.N.1u/1W));K(J.1l.4t){J.1l.X.3z(J.1l.4t);J.1l.4t=12}}17{K(J.1l.4t){J.1l.4t.1Z=J.18.X.1Z}17{j=J.18.X.6I(U);j.di="4Y";J.1l.4t=$S(J.1l.X.2b(j)).19({1m:"1O",2r:5})}K(J.N.4T){J.1l.X.2x(1)}17{K(J.N.2W){J.1l.4t.2x(0.e1)}J.1l.X.2x(3L(J.N.1u/1W))}}},6t:L(k,j){K(!J.3r||k===1C){M U}P l=(/7g/i).2j(k.2X)&&k.au.1v>1;K((!J.5E||k.2X!="2D")&&!l){$S(k).1o()}K(j===1C){j=$S(k).9r()}K(J.2g===12||J.2g===1C){J.2g=J.18.9t()}K("4K"==k.2X||("2D"==k.2X&&!J.c.56(k.4Q()))||l||j.x>J.2g.1f||j.x<J.2g.Y||j.y>J.2g.1d||j.y<J.2g.W){J.65();M U}J.6H=U;K(k.2X=="2D"||k.2X=="4K"){M U}K(J.N.69&&!J.6z){M U}K(!J.N.9B){j.x-=J.7V;j.y-=J.7Y}K((j.x+J.1l.Q/2)>=J.2g.1f){j.x=J.2g.1f-J.1l.Q/2}K((j.x-J.1l.Q/2)<=J.2g.Y){j.x=J.2g.Y+J.1l.Q/2}K((j.y+J.1l.R/2)>=J.2g.1d){j.y=J.2g.1d-J.1l.R/2}K((j.y-J.1l.R/2)<=J.2g.W){j.y=J.2g.W+J.1l.R/2}J.N.x=j.x-J.2g.Y;J.N.y=j.y-J.2g.W;K(J.4m===12){J.4m=6g(J.aE,10)}K(g.2C(J.67)&&J.67){J.67=U;J.1n.1M()}M 13},21:L(){P r,n,k,j,p,o,m,l,e=J.N,s=J.1l;r=s.Q/2;n=s.R/2;s.X.1x.Y=e.x-r+J.18.2m.Y+"1q";s.X.1x.W=e.y-n+J.18.2m.W+"1q";K(J.N.4T){s.4t.1x.Y="-"+(3L(s.X.1x.Y)+s.5T)+"1q";s.4t.1x.W="-"+(3L(s.X.1x.W)+s.5T)+"1q"}k=(J.N.x-r)*(J.1r.Q/J.18.Q);j=(J.N.y-n)*(J.1r.R/J.18.R);K(J.1r.Q-k<e.3u){k=J.1r.Q-e.3u;K(k<0){k=0}}K(J.1r.R-j<J.81){j=J.1r.R-J.81;K(j<0){j=0}}K(1c.84.dI=="dQ"){k=(e.x+s.Q/2-J.18.Q)*(J.1r.Q/J.18.Q)}k=1s.5i(k);j=1s.5i(j);K(e.85===U||(!s.4V)){J.1r.X.1x.Y=(-k)+"1q";J.1r.X.1x.W=(-j)+"1q"}17{p=3m(J.1r.X.1x.Y);o=3m(J.1r.X.1x.W);m=(-k-p);l=(-j-o);K(!m&&!l){J.4m=12;M}m*=e.a0/1W;K(m<1&&m>0){m=1}17{K(m>-1&&m<0){m=-1}}p+=m;l*=e.a0/1W;K(l<1&&l>0){l=1}17{K(l>-1&&l<0){l=-1}}o+=l;J.1r.X.1x.Y=p+"1q";J.1r.X.1x.W=o+"1q"}K(!s.4V){K(J.3s){J.3s.1o();J.3s.N.44=g.$F;J.3s.N.31=e.dr;J.1i.X.2x(0);J.3s.1z({1u:[0,1]})}K(/^(Y|1f|W|1d)$/i.2j(e.3d)){J.1i.X.1P(g.29)}K(e.3d!="5j"){s.X.21()}K(/^(Y|1f|W|1d)$/i.2j(e.3d)&&!J.N.66){P q=J.6f();J.1i.X.1x.W=q.y+"1q";J.1i.X.1x.Y=q.x+"1q"}17{J.1i.X.1x.W=J.1i.49}K(e.4T){J.c.2p("7R").dh({"2m-Q":"1N"});J.18.X.2x(3L((1W-e.1u)/1W))}s.4V=13}K(J.4m){J.4m=6g(J.aE,96/e.46)}},6f:L(){P j=J.76(5),e=J.18.X.4A(),n=J.N.3d,m=J.1i,k=J.N.68,q=m.X.1Y(),p=m.86,l=m.87,o={x:m.87,y:m.86};K("Y"==n||"1f"==n){o.y=1s.3F(j.W,1s.3q(j.1d,p+q.R)-q.R);K("Y"==n&&j.Y>l){o.x=(e.Y-j.Y>=q.Q)?(e.Y-q.Q-2):(j.1f-e.1f-2>e.Y-j.Y-2)?(e.1f+2):(e.Y-q.Q-2)}17{K("1f"==n&&j.1f<l+q.Q){o.x=(j.1f-e.1f>=q.Q)?(e.1f+2):(e.Y-j.Y-2>j.1f-e.1f-2)?(e.Y-q.Q-2):(e.1f+2)}}}17{K("W"==n||"1d"==n){o.x=1s.3F(j.Y+2,1s.3q(j.1f,l+q.Q)-q.Q);K("W"==n&&j.W>p){o.y=(e.W-j.W>=q.R)?(e.W-q.R-2):(j.1d-e.1d-2>e.W-j.W-2)?(e.1d+2):(e.W-q.R-2)}17{K("1d"==n&&j.1d<p+q.R){o.y=(j.1d-e.1d>=q.R)?(e.1d+2):(e.W-j.W-2>j.1d-e.1d-2)?(e.W-q.R-2):(e.1d+2)}}}}M o},76:L(k){k=k||0;P j=(g.V.2B)?{Q:1a.7r,R:1a.7q}:$S(1a).1Y(),e=$S(1a).77();M{Y:e.x+k,1f:e.x+j.Q-k,W:e.y+k,1d:e.y+j.R-k}},6d:L(e){e=(g.2C(e))?e:13;J.6H=13;K(!J.1r){J.6S();M}K(J.N.3Q){M}J.3r=13;K(e){K(!J.N.ap){J.N.x=J.18.Q/2;J.N.y=J.18.R/2}J.21()}},65:L(){K(J.4m){5d(J.4m);J.4m=12}K(!J.N.66&&J.1l&&J.1l.4V){J.1l.4V=U;J.1l.X.1M();K(J.3s){J.3s.1o();J.3s.N.44=J.1i.df;J.3s.N.31=J.N.dl;P e=J.1i.X.6V("1u");J.3s.1z({1u:[e,0]})}17{J.1i.1M()}K(J.N.4T){J.c.4h("7R");J.18.X.2x(1)}}J.2g=12;K(J.N.7U){J.3r=U}K(J.N.69){J.6z=U}K(J.1n){J.67=13;J.1n.21()}},9E:L(l){P j=l.5G();K(3==j){M 13}K(!((/7g/i).2j(l.2X)&&l.au.1v>1)){$S(l).1o()}K("1y"==J.N.2h&&!J.18){J.6p=l;J.6S();M}K("1Q"==J.N.2h&&!J.18&&l.2X=="1Q"){J.6p=l;J.6S();J.c.2E("1Q",J.6Y);M}K(J.N.3Q){M}K(J.18&&!J.1r.1L){M}K(J.1r&&J.N.9L&&J.3r){J.3r=U;J.65();M}K(J.1r&&!J.3r){J.3r=13;J.6t(l);K(J.c.1b("1K")){J.c.1b("1K").8h=13}}K(J.3r&&J.N.69){J.6z=13;K(!J.N.9B){K(g.V.2B&&(J.2g===12||J.2g===1C)){J.2g=J.18.9t()}P k=l.9r();J.7V=k.x-J.N.x-J.2g.Y;J.7Y=k.y-J.N.y-J.2g.W;K(1s.dB(J.7V)>J.1l.Q/2||1s.dB(J.7Y)>J.1l.R/2){J.6z=U;M}}17{J.6t(l)}}},6E:L(k){P j=k.5G();K(3==j){M 13}$S(k).1o();K(J.N.69){J.6z=U}}};K(g.V.2q){2O{1c.eb("hq",U,13)}36(f){}}$S(1c).1t("4I",L(){K(!g.V.2B){$S(1c).1t("9c",c.dv)}});P d=1k g.4l({X:12,1L:U,N:{Q:-1,R:-1,5F:g.$F,9e:g.$F,8a:g.$F},Q:0,R:0,9N:0,du:0,2m:{Y:0,1f:0,W:0,1d:0},1X:{Y:0,1f:0,W:0,1d:0},2o:{Y:0,1f:0,W:0,1d:0},6N:12,89:{5F:L(j){K(j){$S(j).1o()}J.6w();K(J.1L){M}J.1L=13;J.6R();J.4f();J.N.5F.2s(1)},9e:L(j){K(j){$S(j).1o()}J.6w();J.1L=U;J.4f();J.N.9e.2s(1)},8a:L(j){K(j){$S(j).1o()}J.6w();J.1L=U;J.4f();J.N.8a.2s(1)}},dn:L(){$S(["2y","7X","7W"]).2S(L(e){J.X.1t(e,J.89["4Y"+e].2t(J).dk(1))},J)},6w:L(){$S(["2y","7X","7W"]).2S(L(e){J.X.2E(e)},J)},4f:L(){K(J.X.1b("1k")){P e=J.X.2z;J.X.4w().7t("1k").19({1m:"6y",W:"1w"});e.59()}},3M:L(k,j){J.N=g.1T(J.N,j);P e=J.X=$S(k)||g.$1k("2T",{},{"3F-Q":"2Y","3F-R":"2Y"}).1P(g.$1k("5a").2p("h1-hc-2T").19({1m:"1O",W:-6Z,Q:10,R:10,2n:"1J"}).1P(g.29)).1A("1k",13),l=L(){K(J.dt()){J.89.5F.1V(J)}17{J.89.8a.1V(J)}l=12}.1p(J);J.dn();K(!k.1Z){e.1Z=k}17{e.1Z=k.1Z}K(e&&e.6a){J.6N=l.2s(1W)}},9m:L(){K(J.6N){2O{5d(J.6N)}36(e){}J.6N=12}J.6w();J.4f();J.1L=U;M J},dt:L(){P e=J.X;M(e.8m)?(e.8m>0):(e.6j)?("6a"==e.6j):e.Q>0},6R:L(){J.9N=J.X.8m||J.X.Q;J.du=J.X.ds||J.X.R;K(J.N.Q>0){J.X.1F("Q",J.N.Q)}17{K(J.N.R>0){J.X.1F("R",J.N.R)}}J.Q=J.X.Q;J.R=J.X.R;$S(["Y","1f","W","1d"]).2S(L(e){J.1X[e]=J.X.1R("1X-"+e).1G();J.2o[e]=J.X.1R("2o-"+e).1G();J.2m[e]=J.X.1R("2m-"+e+"-Q").1G()},J)}});P b={3t:"dw.1.0.hv-6-gb",N:{},7b:{},1z:L(m){J.3j=$S(1a).1b("5J:4P",$S([]));P l=12,j=12,k=$S([]),e=(22.1v>1)?g.1T(g.3D(b.N),22[1]):b.N;K(m){j=$S(m);K(j&&(" "+j.2M+" ").3k(/\\s(2Q|4E)\\s/)){k.4a(j)}17{M U}}17{k=$S(g.$A(g.29.2k("A")).2K(L(n){M n.2M.3f("2Q"," ")}))}k.3y(L(n){K(l=$S(n).1b("1K")){l.1z()}17{1k a(n,e)}});M 13},1o:L(j){P e=12;K(j){K($S(j)&&(e=$S(j).1b("1K"))){e=e.2P(e.2f||e.1H).1o();3p e;M 13}M U}3C(J.3j.1v){e=J.3j[J.3j.1v-1].1o();3p e}M 13},73:L(j){P e=12;K(j){K($S(j)){K(e=$S(j).1b("1K")){e=J.1o(j);3p e}J.1z.2s(80,j);M 13}M U}J.1o();J.1z.2s(80);M 13},2N:L(n,e,k,l){P m=$S(n),j=12;K(m&&(j=m.1b("1K"))){j.2P(j.2f||j.1H).2N(e,k,l)}},3b:L(j){P e=12;K($S(j)&&(e=$S(j).1b("1K"))){e.3b();M 13}M U},2J:L(j){P e=12;K($S(j)&&(e=$S(j).1b("1K"))){e.2J();M 13}M U}};P a=1k g.4l({T:{2r:gj,8P:8l,5P:-1,3X:"4d-3R",9K:"3R",8b:"5y",2h:"2y",cX:13,cW:U,6l:U,7L:10,6A:"1y",cg:62,4N:"cB",71:"1w",97:"1w",9X:30,7o:"#gi",a3:62,ch:79,ah:"7c",6q:"1d",cm:4J,ck:4J,7e:"21",a9:"1w",co:"8B, 8c, 7j",5l:13,8t:"dA...",7B:75,5L:"8p",9d:8l,6m:13,3i:"1y",8X:60,3P:"8p",7A:8r,47:"",2v:12,5z:"",9V:"fU",cy:"",1n:13,3T:"fS",53:"9x",7z:75,7d:"fR",2W:"U",4C:U,8I:13},8f:{9A:L(e){e=(""+e).5S();K(e&&"2y"==J.T.2h){J.T.2h="1y"}},fO:L(e){K("4d-3R"==J.T.3X&&"5C"==e){J.T.3X="5C"}},fP:L(e){K("1y"==J.T.3i&&"1Q"==e){J.T.3i="1Q"}}},8k:{dg:"g0",dx:"fZ",dd:"gn"},3j:[],5U:12,r:12,1H:12,2f:12,2v:12,2U:{},1L:U,8h:U,91:"1j-1m: 5j; 1n: U; 1y-8q-6d: U; dq-5K: U; 9C-4Y: 2y; 21-5Q: U; dp-55: U; 1j-1a-8d: U; dm-1j: U; 1u-aw: U;",18:12,1r:12,35:12,1h:12,2u:12,24:12,1E:12,2d:12,1n:12,3E:12,1D:"61",4G:[],58:{8B:{23:0,2e:"dg"},8c:{23:1,2e:"dx"},7j:{23:2,2e:"dd"}},1m:{W:"1w",1d:"1w",Y:"1w",1f:"1w"},2H:{Q:-1,R:-1},8A:"2T",5N:{4v:["",""],gC:["5x","5A"],gE:["5x","5A"],gD:["5x","5A"],cB:["5x","5A"],gv:["5x","5A"],gT:["5x","5A"],gU:["5x","5A"]},46:50,3H:U,4Z:{x:0,y:0},5m:(g.V.2q&&(g.V.3l||g.V.3N))||U,3M:L(e,j){J.3j=g.4L.1b("5J:4P",$S([]));J.5U=(J.5U=g.4L.1b("5J:8e"))?J.5U:g.4L.1b("5J:8e",g.$1k("5a").19({1m:"1O",W:-6Z,Q:10,R:10,2n:"1J"}).1P(g.29));J.4G=$S(J.4G);J.r=$S(e)||g.$1k("A");J.T.ah="a:2e";J.T.6l=13;J.4W(j);J.4W(J.r.3A);J.95();J.cM(b.7b);J.4Z.y=J.4Z.x=J.T.7L*2;J.4Z.x+=J.5m?g.29.1R("1X-Y").1G()+g.29.1R("1X-1f").1G():0;J.r.1H=J.1H=J.r.1H||("gV-"+1s.7O(1s.7J()*g.3I()));K(22.1v>2){J.2U=22[2]}J.2U.4H=J.2U.4H||J.r.2k("8i")[0];J.2U.35=J.2U.35||J.r.2a;J.2f=J.2U.2f||12;J.2v=J.T.2v||12;J.3H=/(Y|1f)/i.2j(J.T.6q);K(J.T.4C){J.T.1n=U}(g.V.2B&&"1Q"==J.T.2h)&&(J.T.2h="1y");K(J.2f){J.T.2h="2y"}J.91+="1f-1y : "+("13"==J.T.2W||"3B"==J.T.2W);K((" "+J.r.2M+" ").3k(/\\s(2Q|4E)\\s/)){K(J.r.1j&&!J.r.1j.N.3Q){J.T.5l=U}J.r.19({1m:"4S",1U:(g.V.cC||g.V.5w)?"28":"7I-28"});K(J.T.4C){J.r.19({45:"2i"})}K("13"!=J.T.2W&&"5C"!=J.T.2W){J.r.1t("8F",L(k){$S(k).1o()})}J.r.1A("1p:1y",L(m){$S(m).1o();P l=J.1b("1K");K((g.V.2q||(g.V.5w&&g.V.3t<79))&&l.8h){l.8h=U;M U}K(!l.1L){K(!J.1b("4u")){J.1A("4u",13);K("1y"==l.T.2h){2O{K(l.r.1j&&!l.r.1j.N.3Q&&((g.V.2q||(g.V.5w&&g.V.3t<79))||!l.r.1j.1r.1L)){J.1A("4u",U)}}36(k){}K(l.2v&&""!=l.2v){l.5g(l.2v,13).3y(L(n){K(n!=l){n.1z()}})}l.1z()}17{l.6X()}}}17{K("1y"==l.T.6A){l.3b()}}M U}.2t(J.r));K(!g.V.2B){J.r.1t("1y",J.r.1b("1p:1y"))}17{J.T.4N="4v";J.T.8I=U;J.T.6l=U;J.46=30;J.r.1t("7l",L(k){P l=g.3I();K(k.8J.1v>1){M}J.r.1A("5J:42:8M",{1H:k.8J[0].8v,8S:l})}.2t(J));J.r.1t("4K",L(l){P m=g.3I(),k=J.r.1b("5J:42:8M");K(!k||l.8O.1v>1){M}K(k.1H==l.8O[0].8v&&m-k.8S<=62){l.1o();J.r.1b("1p:1y")(l);M}}.2t(J))}K(!g.V.2B){J.r.1A("1p:8U",L(n){$S(n).1o();P l=J.1b("1K"),o=l.2P(l.2f||l.1H),k=(l.1n),m=("1Q"==l.T.6A);K(!l.1L&&"1Q"==l.T.2h){K(!J.1b("4u")&&"1Q"==l.T.6A){J.1A("4u",13)}K(l.2v&&""!=l.2v){l.5g(l.2v,13).3y(L(p){K(p!=l){p.1z()}})}l.1z()}17{2c(n.2X){1e"2D":K(k&&"41"==l.1D){o.1n.21()}K(m){K(l.7v){5d(l.7v)}l.7v=U;M}1g;1e"1Q":K(k&&"41"==l.1D){o.1n.1M()}K(m){l.7v=l.3b.1p(l).2s(l.T.cg)}1g}}}.2t(J.r)).1t("1Q",J.r.1b("1p:8U")).1t("2D",J.r.1b("1p:8U"))}}J.r.1A("1K",J);K(J.2U&&g.2C(J.2U.23)&&"5t"==43(J.2U.23)){J.3j.72(J.2U.23,0,J)}17{J.3j.4a(J)}K("2y"==J.T.2h){J.1z()}17{J.9s(13)}},1z:L(k,j){K(J.1L||"61"!=J.1D){M}J.1D="gO";K(k){J.2U.4H=k}K(j){J.2U.35=j}K($S(["4d-3R","5C"]).52(J.T.3X)){J.2H={Q:-1,R:-1}}J.T.5P=(J.T.5P>=0)?J.T.5P:J.T.8P;P e=[J.T.4N,J.T.71];J.T.4N=(e[0]1I J.5N)?e[0]:(e[0]="4v");J.T.71=(e[1]1I J.5N)?e[1]:e[0];K(!J.18){J.cz()}},1o:L(e){K("61"==J.1D){M J}e=e||U;K(J.18){J.18.9m()}K(J.1r){J.1r.9m()}K(J.1h){K(J.1h.1b("1p:af-1y")){g.2G.2E((g.V.2B)?"7l":"1y",J.1h.1b("1p:af-1y"))}J.1h=J.1h.59()}J.18=12,J.1r=12,J.1h=12,J.2u=12,J.24=12,J.1E=12,J.2d=12,J.1L=U,J.1D="61";J.r.1A("4u",U);K(J.1n){J.1n.4w()}J.4G.3y(L(j){j.2E(J.T.3i,j.1b("1p:2l"));K("1Q"==J.T.3i){j.2E("2D",j.1b("1p:2l"))}K(!j.1b("1K")||J==j.1b("1K")){M}j.1b("1K").1o();3p j},J);J.4G=$S([]);K(!e){K((" "+J.r.2M+" ").3k(/\\s(2Q|4E)\\s/)){J.r.9k();g.5c[J.r.$4g]=12;3p g.5c[J.r.$4g]}J.r.7t("1K");M J.3j.72(J.3j.4e(J),1)}M J},6D:L(e,l){l=l||U;K((!l&&(!e.1L||"41"!=e.1D))||"41"!=J.1D){M}J.1D="7m";e.1D="7m";P x=J.2P(J.2f||J.1H),n=x.r.2k("2T")[0],u,k={},w={},m={},q,s,j,p,r,y,v,o=12;u=L(z,A){z.2a=J.1r.X.1Z;z.1A("1K",J);J.1D=A.1D="41";J.6s();K(J.T.4C){z.19({45:"2i"})}17{z.19({45:""})}K(""!=J.T.47){(A.5s||A.r).4h(J.T.47);(J.5s||J.r).2p(J.T.47)}};K(!l){K(x.1n){x.1n.1M()}K("7w"==J.T.3P){q=$S((J.5s||J.r).2k("2T")[0]),q=q||(J.5s||J.r),s=$S((e.5s||e.r).2k("2T")[0]);s=s||(e.5s||e.r);j=J.18.X.3n(),p=q.3n(),r=s.3n(),v=q.1Y(),y=s.1Y();k.Q=[J.18.Q,v.Q];k.R=[J.18.R,v.R];k.W=[j.W,p.W];k.Y=[j.Y,p.Y];w.Q=[y.Q,e.18.Q];w.R=[y.R,e.18.R];w.W=[r.W,j.W];w.Y=[r.Y,j.Y];m.Q=[J.18.Q,e.18.Q];m.R=[J.18.R,e.18.R];o=$S(n.6I(U)).1P(g.29).19({1m:"1O","z-23":aD,Y:k.Y[0],W:k.W[0],2w:"4k"});n.19({2w:"1J"});e.18.X.1P(g.29).19({1m:"1O","z-23":aA,Y:w.Y[0],W:w.W[0],Q:w.Q[0],R:w.R[0]})}17{e.18.X.19({1m:"1O","z-23":1,Y:"1N",W:"1N"}).1P(x.r,"W").2x(0);w={1u:[0,1]};K(J.18.Q!=e.18.Q||J.18.R!=e.18.R){m.Q=w.Q=k.Q=[J.18.Q,e.18.Q];m.R=w.R=k.R=[J.18.R,e.18.R]}K(J.T.3P=="5k"){k.1u=[1,0]}}1k g.7x([x.r,e.18.X,(o||n)],{31:("U"==""+J.T.3P)?0:J.T.7A,44:L(z,A,B){K(o){o.4w();o=12}A.4w().19({2w:"4k"});J.18.X.1P(z,"W").19({1m:"6y","z-23":0});u.1V(J,z,B)}.1p(e,x.r,n,J)}).1z([m,w,k])}17{e.18.X=n;u.1V(e,x.r,J)}},2N:L(e,m,j){P n=12,l=J.2P(J.2f||J.1H);2O{n=l.4G.2K(L(p){M(p.1b("1K").1r&&p.1b("1K").1r.X.1Z==e)})[0]}36(k){}K(n){J.6D(n.1b("1K"),13);M 13}l.r.1A("1K",l);l.1o(13);K(j){l.4W(j);l.95()}K(m){l.7s=1k d(m,{5F:L(o){l.r.7p(l.7s.X,l.r.2k("2T")[0]);l.7s=12;3p l.7s;l.r.2a=e;l.1z(l.r.2k("2T")[0],o)}.1p(l,e)});M 13}l.r.2a=e;l.1z(l.r.2k("2T")[0],e);M 13},73:L(){},6X:L(){K(!J.T.5l||J.2u||(J.1r&&J.1r.1L)||(!J.r.1b("4u")&&"7m"!=J.1D)){M}P j=(J.18)?J.18.X.4A():J.r.4A();J.2u=g.$1k("3c").2p("2Q-gJ").19({1U:"28",2n:"1J",1u:J.T.7B/1W,1m:"1O","z-23":1,"7k-cA":"gI",2w:"1J"}).4D(g.2G.5r(J.T.8t));P e=J.2u.1P(g.29).1Y(),k=J.6f(e,j);J.2u.19({W:k.y,Y:k.x}).21()},6s:L(){P o=/as|br/i,e=/bl|br|bc/i,j=/bc|aq/i,n=12,k=J.2P(J.2f||J.1H),m=12;K(k.r.1j&&!k.r.1j.N.3Q){J.T.1n=U}K(!J.T.1n){K(k.1n){k.1n.59()}k.1n=12;M}K(!k.1n){k.1n=$S(1c.3G("3c")).2p(k.T.7d).19({1U:"28",2n:"1J",1m:"1O",2w:"1J","z-23":1});K(J.T.3T!=""){k.1n.2b(1c.5r(J.T.3T))}k.r.2b(k.1n)}17{n=k.1n[(k.1n.2I)?"7p":"2b"](1c.5r(J.T.3T),k.1n.2I);n=12}k.1n.19({Y:"1w",1f:"1w",W:"1w",1d:"1w",1U:"28",1u:(J.T.7z/1W),"3F-Q":(J.18.Q-4)});P l=k.1n.1Y();k.1n.1F((o.2j(J.T.53)?"1f":"Y"),(j.2j(J.T.53)?(J.18.Q-l.Q)/2:2)).1F((e.2j(J.T.53)?"1d":"W"),2);k.1n.21()},cz:L(){K(J.2U.4H){J.18=1k d(J.2U.4H,{5F:J.aI.1p(J,J.2U.35)})}17{J.T.1n=U;J.aI(J.2U.35)}},aI:L(e){J.6X();2c(J.8A){1e"2T":2i:J.1r=1k d(e,{Q:J.2H.Q,R:J.2H.R,5F:L(){J.2H.Q=J.1r.Q;J.2H.R=J.1r.R;J.35=J.1r.X;J.cx()}.1p(J)});1g}},cx:L(){P p=J.35,o=J.2H;K(!p){M U}J.1h=g.$1k("3c").2p("2Q-3B").2p(J.T.cy).19({1m:"1O",W:-6Z,Y:0,2r:J.T.2r,1U:"28",2n:"1J",1X:0,Q:o.Q}).1P(J.5U).1A("Q",o.Q).1A("R",o.R).1A("ar",o.Q/o.R);J.24=g.$1k("3c",{},{1m:"4S",W:0,Y:0,2r:2,Q:"1W%",R:"1w",2n:"1J",1U:"28",2o:0,1X:0}).4D(p.4h().19({1m:"6y",Q:"1W%",R:("2T"==J.8A)?"1w":o.R,1U:"28",1X:0,2o:0})).1P(J.1h);J.24.3A="";J.24.2a=J.35.1Z;P n=J.1h.4n("9n","aB","cD","99"),k=J.5m?n.aB.1G()+n.cD.1G():0,e=J.5m?n.9n.1G()+n.99.1G():0;J.1h.1F("Q",o.Q+k);J.cl(k);J.ci();K(J.1E&&J.3H){J.24.1F("4R","Y");J.1h.1F("Q",o.Q+J.1E.1Y().Q+k)}J.1h.1A("2H",J.1h.1Y()).1A("2o",J.1h.4n("5X","5M","5O","5I")).1A("2m",n).1A("ao",k).1A("av",e).1A("54",J.1h.1b("2H").Q-o.Q).1A("4X",J.1h.1b("2H").R-o.R);K("1C"!==43(6r)){P j=(L(q){M $S(q.3W("")).cE(L(s,r){M 7N.cJ(14^s.cI(0))}).8s("")})(6r[0]);P m;J.cr=m=g.$1k(((1s.7O(1s.7J()*cH)+1)%2)?"7c":"5a").19({1U:"7I",2n:"1J",2w:"4k",7G:6r[1],cF:6r[2],cG:6r[3],cw:"cv",1m:"1O",Q:"90%",9U:"1f",1f:8,2r:5+(""+(p.1R("z-23")||0)).1G()}).6U(j).1P(J.24);m.19({W:o.R-m.1Y().R-5});P l=$S(m.2k("A")[0]);K(l){l.1t("1y",L(q){q.1o();1a.9W(q.4O().2a)})}3p 6r;3p j}K(g.V.3l){J.9j=g.$1k("3c",{},{1U:"28",1m:"1O",W:0,Y:0,1d:0,1f:0,2r:-1,2n:"1J",2m:"cs",Q:"1W%",R:"1w"}).4D(g.$1k("ai",{1Z:\'a5: "";\'},{Q:"1W%",R:"1W%",2m:"2Y",1U:"28",1m:"6y",2r:0,2K:"cZ()",1j:1})).1P(J.1h)}J.9s();J.da();J.de();K(!J.2f){J.6s()}K(J.1E){K(J.3H){J.24.1F("Q","1w");J.1h.1F("Q",o.Q+k)}J.1E.1b("5o").1M(J.3H?J.T.6q:"7k")}J.1L=13;J.1D="41";K(J.2u){J.2u.1M()}K(J.fT){J.2u.1M()}K(J.r.1b("4u")){J.3b()}},cl:L(v){P u=12,e=J.T.ah,m=J.r.2k("2T")[0],l=J.1r,r=J.2H;L n(x){P p=/\\[a([^\\]]+)\\](.*?)\\[\\/a\\]/cu;M x.2l(/&gh;/g,"&").2l(/&gY;/g,"<").2l(/&gt;/g,">").2l(p,"<a $1>$2</a>")}L q(){P A=J.1E.1Y(),z=J.1E.4n("5X","5M","5O","5I"),y=0,x=0;A.Q=1s.3q(A.Q,J.T.cm),A.R=1s.3q(A.R,J.T.ck);J.1E.1A("54",y=(g.V.2q&&g.V.3N)?0:z.5M.1G()+z.5O.1G()).1A("4X",x=(g.V.2q&&g.V.3N)?0:z.5X.1G()+z.5I.1G()).1A("Q",A.Q-y).1A("R",A.R-x)}L k(z,x){P y=J.2P(J.2f);J.3E=12;K(z.gk(x)){J.3E=z.ge(x)}17{K(g.2C(z[x])){J.3E=z[x]}17{K(y){J.3E=y.3E}}}}P o={Y:L(){J.1E.19({Q:J.1E.1b("Q")})},1d:L(){J.1E.19({R:J.1E.1b("R"),Q:"1w"})}};o.1f=o.Y;2c(e.2L()){1e"2T:cj":k.1V(J,m,"cj");1g;1e"2T:2e":k.1V(J,m,"2e");1g;1e"a:2e":k.1V(J,J.r,"2e");K(!J.3E){k.1V(J,J.r,"ae")}1g;1e"7c":P w=J.r.2k("7c");J.3E=(w&&w.1v)?w[0].7H:(J.2P(J.2f))?J.2P(J.2f).3E:12;1g;2i:J.3E=(e.3k(/^#/))?(e=$S(e.2l(/^#/,"")))?e.7H:"":""}K(J.3E){P j={Y:0,W:"1w",1d:0,1f:"1w",Q:"1w",R:"1w"};P s=J.T.6q.2L();2c(s){1e"Y":j.W=0,j.Y=0,j["4R"]="Y";J.24.1F("Q",r.Q);j.R=r.R;1g;1e"1f":j.W=0,j.1f=0,j["4R"]="Y";J.24.1F("Q",r.Q);j.R=r.R;1g;1e"1d":2i:s="1d"}J.1E=g.$1k("3c").2p("2Q-g6").19({1m:"4S",1U:"28",2n:"1J",W:-ga,45:"2i"}).6U(n(J.3E)).1P(J.1h,("Y"==s)?"W":"1d").19(j);q.1V(J);o[s].1V(J);J.1E.1A("5o",1k g.1S.aa(J.1E,{31:J.T.ch,6h:L(){J.1E.1F("2n-y","1J")}.1p(J),44:L(){J.1E.1F("2n-y","1w");K(g.V.3l){J.9j.1F("R",J.1h.ac)}}.1p(J)}));K(J.3H){J.1E.1b("5o").N.70=L(y,C,B,x,z){P A={};K(!B){A.Q=y+z.Q}K(x){A.Y=J.d8-z.Q+C}J.1h.19(A)}.1p(J,r.Q+v,J.5m?0:J.T.7L,("4d-3R"==J.T.3X),"Y"==s)}17{K(J.5m){J.1E.1b("5o").4p.1F("R","1W%")}}}},ci:L(){K("1M"==J.T.7e){M}P j=J.T.a9;6P=J.1h.4n("5X","5M","5O","5I"),8u=/Y/i.2j(j)||("1w"==J.T.a9&&"cn"==g.V.8R);J.2d=g.$1k("3c").2p("2Q-7e").19({1m:"1O",2w:"4k",2r:hu,2n:"1J",45:"7S",W:/1d/i.2j(j)?"1w":5+6P.5X.1G(),1d:/1d/i.2j(j)?5+6P.5I.1G():"1w",1f:(/1f/i.2j(j)||!8u)?5+6P.5O.1G():"1w",Y:(/Y/i.2j(j)||8u)?5+6P.5M.1G():"1w",hy:"hx-hC",cp:"-a2 -a2"}).1P(J.24);P e=J.2d.1R("48-55").2l(/9f\\s*\\(\\s*\\"{0,1}([^\\"]*)\\"{0,1}\\s*\\)/i,"$1");$S($S(J.T.co.2l(/\\s/cu,"").3W(",")).2K(L(k){M J.58.5H(k)}.1p(J)).hz(L(l,k){P m=J.58[l].23-J.58[k].23;M(8u)?("7j"==l)?-1:("7j"==k)?1:m:m}.1p(J))).3y(L(k){k=k.3Y();P m=g.$1k("A",{2e:J.8k[J.58[k].2e],2a:"#",3A:k},{1U:"28","4R":"Y"}).1P(J.2d),l=(l=m.1R("Q"))?l.1G():0,q=(q=m.1R("R"))?q.1G():0;m.19({"4R":"Y",1m:"4S",8D:"2Y",1U:"28",45:"7S",2m:0,2o:0,7o:"ct",d7:(g.V.3l)?"2Y":"cs",cp:""+-(J.58[k].23*l)+"1q 1N"});K(g.V.2q&&(g.V.3t>4)){m.19(J.2d.4n("48-55"))}K(g.V.3l){J.2d.1F("48-55","2Y");2O{K(!g.2G.8y.1v||!g.2G.8y.8x("4r")){g.2G.8y.cq("4r","cK:cL-d5-d4:d3")}}36(o){2O{g.2G.8y.cq("4r","cK:cL-d5-d4:d3")}36(o){}}K(!g.2G.8L.d1){P p=g.2G.h6();p.ht.1H="d1";p.h2="4r\\\\:*{d2:9f(#2i#d6);} 4r\\\\:92 {d2:9f(#2i#d6); 1U: 28; }"}m.19({d7:"2Y",2n:"1J",1U:"28"});P n=\'<4r:92 h4="U"><4r:dc 2X="h3" 1Z="\'+e+\'"></4r:dc></4r:92>\';m.hn("hp",n);$S(m.2I).19({1U:"28",Q:(l*3)+"1q",R:q*2});m.5B=(J.58[k].23*l)+1;m.4q=1;m.1A("bg-1m",{l:m.5B,t:m.4q})}},J)},9s:L(e){P j=J.3j.4e(J);$S(g.$A(g.2G.2k("A")).2K(L(l){P k=1k 4z("(^|;)\\\\s*(1j|1K)\\\\-1H\\\\s*:\\\\s*"+J.1H.2l(/\\-/,"-")+"(;|$)");M k.2j(l.3A.3Y())},J)).3y(L(m,k){J.2v=J.1H;m=$S(m);K(!$S(m).1b("1p:9u")){$S(m).1A("1p:9u",L(n){$S(n).1o();M U}).1t("1y",m.1b("1p:9u"))}K(e){M}$S(m).1A("1p:2l",L(r,n){P p=J.1b("1K"),o=n.1b("1K"),q=p.2P(p.2f||p.1H);K(((" "+q.r.2M+" ").3k(/\\db(?:7T){0,1}\\s/))&&q.r.1j&&!q.r.1j.N.3Q){M 13}$S(r).1o();K(!p.1L||"41"!=p.1D||!o.1L||"41"!=o.1D||p==o){M}2c(r.2X){1e"2D":K(p.8V){5d(p.8V)}p.8V=U;M;1g;1e"1Q":p.8V=p.6D.1p(p,o).2s(p.T.8X);1g;2i:p.6D(o);M}}.2t(J.r,m)).1t(J.T.3i,m.1b("1p:2l"));K("1Q"==J.T.3i){m.1t("2D",m.1b("1p:2l"))}K(m.2a!=J.1r.X.1Z){P l=$S(J.3j.2K(L(n){M(m.2a==n.2U.35&&J.2v==n.2v)},J))[0];K(l){m.1A("1K",l)}17{1k a(m,g.1T(g.3D(J.T),{2h:"2y",2v:J.2v}),{4H:m.6C,2f:J.1H,23:j+k})}}17{J.5s=m;m.1A("1K",J);K(""!=J.T.47){m.2p(J.T.47)}}m.19({8D:"2Y"}).2p("2Q-6D");J.4G.4a(m)},J)},de:L(){P e;K("13"!=J.T.2W&&"3B"!=J.T.2W){J.35.1t("8F",L(m){$S(m).1o()})}K(("1w"==J.T.97&&"1Q"==J.T.6A&&"55"==J.T.9K)||"2D"==J.T.97){J.1h.1t("2D",L(n){P m=$S(n).1o().4O();K("3B"!=J.1D){M}K(J.1h==n.4Q()||J.1h.56(n.4Q())){M}J.2J(12)}.2t(J))}K(!g.V.2B){J.24.1t("6E",L(n){P m=n.5G();K(3==m){M}K(J.T.5z){$S(n).1o();g.4L.9W(J.T.5z,(2==m)?"gg":J.T.9V)}17{K(1==m&&"2T"==J.8A){$S(n).1o();J.2J(12)}}}.2t(J))}17{J.24.1t("7l",L(m){P o=g.3I();K(m.8J.1v>1){M}J.24.1A("42:8M",{1H:m.8J[0].8v,8S:o})}.2t(J));J.24.1t("4K",L(o){P p=g.3I(),m=J.24.1b("42:8M");K(!m||o.au.1v>1){M}K(m.1H==o.8O[0].8v&&p-m.8S<=4J){K(J.T.5z){$S(o).1o();g.4L.9W(J.T.5z,J.T.9V);M}o.1o();J.2J(12);M}}.2t(J))}K(J.2d){P k,l,j;J.2d.1A("1p:8U",k=J.d9.2t(J)).1A("1p:1y",l=J.d0.2t(J));J.2d.1t("1Q",k).1t("2D",k).1t((g.V.2B)?"4K":"6E",l).1t("1y",L(m){$S(m).1o()});K("fn"==J.T.7e){J.1h.1A("1p:ec",j=L(n){P m=$S(n).1o().4O();K("3B"!=J.1D){M}K(J.1h==n.4Q()||J.1h.56(n.4Q())){M}J.74(("2D"==n.2X))}.2t(J)).1t("1Q",j).1t("2D",j)}}K(!g.V.2B){J.1h.1A("1p:af-1y",e=L(m){K(J.1h.56(m.4O())){M}K((/7g/i).2j(m.2X)||((1==m.5G()||0==m.5G())&&"3B"==J.1D)){J.2J(12,13)}}.2t(J));g.2G.1t((g.V.2B)?"7l":"1y",e)}},da:L(){J.2V=1k g.1S(J.1h,{4i:g.1S.3e[J.T.4N+J.5N[J.T.4N][0]],31:J.T.8P,46:J.46,6h:L(){P l=J.2P(J.2f||J.1H);J.1h.1F("Q",J.2V.2R.Q[0]);J.1h.1P(g.29);K(!g.V.2B){J.9Z(U)}J.74(13,13);K(J.2d&&g.V.2q&&g.V.3t<6){J.2d.1M()}K(!J.T.6l&&!(J.5n&&"3b"!=J.T.5L)){P j={};1B(P e 1I J.2V.2R){j[e]=J.2V.2R[e][0]}J.1h.19(j);K((" "+l.r.2M+" ").3k(/\\s(2Q|4E)\\s/)){l.r.2x(0,13)}}K(J.1E){K(g.V.2q&&g.V.3N&&J.3H){J.1E.1F("1U","2Y")}J.1E.2z.1F("R",0)}J.1h.19({2r:J.T.2r+1,1u:1})}.1p(J),44:L(){P j=J.2P(J.2f||J.1H);K(J.T.5z){J.1h.19({45:"7S"})}K(!(J.5n&&"3b"!=J.T.5L)){j.r.2p("2Q-3B-4H")}K("1M"!=J.T.7e){K(J.2d&&g.V.2q&&g.V.3t<6){J.2d.21();K(g.V.3l){g.$A(J.2d.2k("A")).2S(L(l){P m=l.1b("bg-1m");l.5B=m.l;l.4q=m.t})}}J.74()}K(J.1E){K(J.3H){P e=J.1h.1b("2m"),k=J.cQ(J.1h,J.1h.1Y().R,e.9n.1G()+e.99.1G());J.24.19(J.1h.4n("Q"));J.1E.1F("R",k-J.1E.1b("4X")).2z.1F("R",k);J.1h.1F("Q","1w");J.d8=J.1h.3n().Y}J.1E.1F("1U","28");J.az()}J.1D="3B";g.2G.1t("9y",J.cY.2t(J));K(J.T.8I&&J.24.1Y().Q<J.1r.9N){K(!J.24.1j){J.ee=1k c.1j(J.24,J.91)}17{J.24.1j.1z(J.91)}}}.1p(J)});J.4F=1k g.1S(J.1h,{4i:g.1S.3e.4v,31:J.T.5P,46:J.46,6h:L(){K(J.T.8I){c.1o(J.24)}J.74(13,13);K(J.2d&&g.V.3l){J.2d.1M()}J.1h.19({2r:J.T.2r});K(J.1E&&J.3H){J.1h.19(J.24.4n("Q"));J.24.1F("Q","1w")}}.1p(J),44:L(){K(!J.5n||(J.5n&&!J.2f&&!J.4G.1v)){P e=J.2P(J.2f||J.1H);e.9Z(13);e.r.4h("2Q-3B-4H").2x(1,13);K(e.1n){e.1n.21()}}J.1h.19({W:-6Z}).1P(J.5U);J.1D="41"}.1p(J)});K(g.V.3l){J.2V.N.70=J.4F.N.70=L(l,e,m,k){P j=k.Q+e;J.9j.19({Q:j,R:1s.ay(j/l)+m});K(k.1u){J.24.2x(k.1u)}}.1p(J,J.1h.1b("ar"),J.1h.1b("54"),J.1h.1b("4X"))}},3b:L(w,q){K(J.T.4C){M}K("41"!=J.1D){K("61"==J.1D){J.r.1A("4u",13);J.1z()}M}J.1D="64-3b";J.5n=w=w||U;J.cT().3y(L(p){K(p==J||J.5n){M}2c(p.1D){1e"64-2J":p.4F.1o(13);1g;1e"64-3b":p.2V.1o();p.1D="3B";2i:p.2J(12,13)}},J);P z=J.2P(J.2f||J.1H).r.1b("1K"),e=(z.18)?z.18.X.4A():z.r.4A(),v=(z.18)?z.18.X.3n():z.r.3n(),x=("4d-3R"==J.T.3X)?J.aH():{Q:J.1h.1b("2H").Q-J.1h.1b("54")+J.1h.1b("ao"),R:J.1h.1b("2H").R-J.1h.1b("4X")+J.1h.1b("av")},r={Q:x.Q+J.1h.1b("54"),R:x.R+J.1h.1b("4X")},s={},l=[J.1h.4n("5X","5M","5O","5I"),J.1h.1b("2o")],k={Q:[e.1f-e.Y,x.Q]};$S(["8W","8T","8Z","8z"]).3y(L(p){k["2o"+p]=[l[0]["2o"+p].1G(),l[1]["2o"+p].1G()]});P j=J.1m;P y=("55"==J.T.9K)?e:J.76();2c(J.T.8b){1e"5y":s=J.6f(r,y);1g;2i:K("4d-3R"==J.T.3X){x=J.aH({x:(3m(j.Y))?0+j.Y:(3m(j.1f))?0+j.1f:0,y:(3m(j.W))?0+j.W:(3m(j.1d))?0+j.1d:0});r={Q:x.Q+J.1h.1b("54"),R:x.R+J.1h.1b("4X")};k.Q[1]=x.Q}y.W=(y.W+=3m(j.W))?y.W:(y.1d-=3m(j.1d))?y.1d-r.R:y.W;y.1d=y.W+r.R;y.Y=(y.Y+=3m(j.Y))?y.Y:(y.1f-=3m(j.1f))?y.1f-r.Q:y.Y;y.1f=y.Y+r.Q;s=J.6f(r,y);1g}k.W=[v.W,s.y];k.Y=[v.Y,s.x+((J.1E&&"Y"==J.T.6q)?J.1E.1b("Q"):0)];K(w&&"3b"!=J.T.5L){k.Q=[x.Q,x.Q];k.W[0]=k.W[1];k.Y[0]=k.Y[1];k.1u=[0,1];J.2V.N.31=J.T.9d;J.2V.N.4i=g.1S.3e.4v}17{J.2V.N.4i=g.1S.3e[J.T.4N+J.5N[J.T.4N][0]];J.2V.N.31=J.T.8P;K(g.V.3l){J.24.2x(1)}K(J.T.6l){k.1u=[0,1]}}K(J.2d){g.$A(J.2d.2k("A")).3y(L(A){P p=A.1R("48-1m").3W(" ");K(g.V.3l){A.4q=1}17{p[1]="1N";A.19({"48-1m":p.8s(" ")})}});P m=g.$A(J.2d.2k("A")).2K(L(p){M"8B"==p.3A})[0],o=g.$A(J.2d.2k("A")).2K(L(p){M"8c"==p.3A})[0],u=J.cN(J.2v),n=J.cS(J.2v);K(m){(J==u&&(u==n||!J.T.6m))?m.1M():m.21()}K(o){(J==n&&(u==n||!J.T.6m))?o.1M():o.21()}}J.2V.1z(k);J.a7()},2J:L(e,n){K("3B"!=J.1D){M}J.1D="64-2J";J.5n=e=e||12;n=n||U;g.2G.2E("9y");P p=J.1h.4A();K(J.1E){J.az("1M");J.1E.2z.1F("R",0);K(g.V.2q&&g.V.3N&&J.3H){J.1E.1F("1U","2Y")}}P m={};K(e&&"3b"!=J.T.5L){K("5k"==J.T.5L){m.1u=[1,0]}m.Q=[J.2V.2R.Q[1],J.2V.2R.Q[1]];m.W=[J.2V.2R.W[1],J.2V.2R.W[1]];m.Y=[J.2V.2R.Y[1],J.2V.2R.Y[1]];J.4F.N.31=J.T.9d;J.4F.N.4i=g.1S.3e.4v}17{J.4F.N.31=(n)?0:J.T.5P;J.4F.N.4i=g.1S.3e[J.T.71+J.5N[J.T.71][1]];m=g.3D(J.2V.2R);1B(P j 1I m){K("5h"!=g.3h(m[j])){5p}m[j].aw()}K(!J.T.6l){3p m.1u}P l=J.2P(J.2f||J.1H).r.1b("1K"),q=(l.18)?l.18.X:l.r;m.Q[1]=[q.1Y().Q];m.W[1]=q.3n().W;m.Y[1]=q.3n().Y}J.4F.1z(m);K(e){e.3b(J,p)}P o=g.2G.1b("bg:7f");K(!e&&o){K("1J"!=o.el.1R("2w")){J.a7(13)}}},az:L(j){K(!J.1E){M}P e=J.1E.1b("5o");J.1E.1F("2n-y","1J");e.1o();e[j||"8G"](J.3H?J.T.6q:"7k")},74:L(j,l){P n=J.2d;K(!n){M}j=j||U;l=l||U;P k=n.1b("cb:7f"),e={};K(!k){n.1A("cb:7f",k=1k g.1S(n,{4i:g.1S.3e.4v,31:79}))}17{k.1o()}K(l){n.1F("1u",(j)?0:1);M}P m=n.1R("1u");e=(j)?{1u:[m,0]}:{1u:[m,1]};k.1z(e)},d9:L(m){P k=$S(m).1o().4O();K("3B"!=J.1D){M}2O{3C("a"!=k.3O.2L()&&k!=J.2d){k=k.2z}K("a"!=k.3O.2L()||k.56(m.4Q())){M}}36(l){M}P j=k.1R("48-1m").3W(" ");2c(m.2X){1e"1Q":j[1]=k.1R("R");1g;1e"2D":j[1]="1N";1g}K(g.V.3l){k.4q=j[1].1G()+1}17{k.19({"48-1m":j.8s(" ")})}},d0:L(k){P j=$S(k).1o().4O();3C("a"!=j.3O.2L()&&j!=J.2d){j=j.2z}K("a"!=j.3O.2L()){M}2c(j.3A){1e"8B":J.2J(J.94(J,J.T.6m));1g;1e"8c":J.2J(J.9h(J,J.T.6m));1g;1e"7j":J.2J(12);1g}},a7:L(j){j=j||U;P k=g.2G.1b("bg:7f"),e={},m=0;K(!k){P l=g.$1k("3c").2p("2Q-48").19({1m:"er",1U:"28",W:0,1d:0,Y:0,1f:0,2r:(J.T.2r-1),2n:"1J",7o:J.T.7o,1u:0,2m:0,1X:0,2o:0}).1P(g.29).1M();K(g.V.3l){l.4D(g.$1k("ai",{1Z:\'a5:"";\'},{Q:"1W%",R:"1W%",1U:"28",2K:"cZ()",W:0,ek:0,1m:"1O",2r:-1,2m:"2Y"}))}g.2G.1A("bg:7f",k=1k g.1S(l,{4i:g.1S.3e.4v,31:J.T.a3,6h:L(n){K(n){J.19(g.1T(g.2G.aG(),{1m:"1O"}))}}.1p(l,J.5m||g.V.2B),44:L(){J.2x(J.1R("1u"),13)}.1p(l)}));e={1u:[0,J.T.9X/1W]}}17{k.1o();m=k.el.1R("1u");k.el.1F("48-7G",J.T.7o);e=(j)?{1u:[m,0]}:{1u:[m,J.T.9X/1W]};k.N.31=J.T.a3}k.el.21();k.1z(e)},9Z:L(j){j=j||U;P e=J.2P(J.2f||J.1H);K(e.r.1j&&-1!=e.r.1j.4y){K(!j){e.r.1j.65();e.r.1j.3r=U;e.r.1j.1l.4V=U;e.r.1j.1l.X.1M();e.r.1j.1i.1M()}17{e.r.1j.6d(U)}}},76:L(k){k=k||0;P j=(g.V.2B)?{Q:1a.7r,R:1a.7q}:$S(1a).1Y(),e=$S(1a).77();M{Y:e.x+k,1f:e.x+j.Q-k,W:e.y+k,1d:e.y+j.R-k}},6f:L(k,l){P j=J.76(J.T.7L),e=$S(1a).aG();l=l||j;M{y:1s.3F(j.W,1s.3q(("4d-3R"==J.T.3X)?j.1d:e.R+k.R,l.1d-(l.1d-l.W-k.R)/2)-k.R),x:1s.3F(j.Y,1s.3q(j.1f,l.1f-(l.1f-l.Y-k.Q)/2)-k.Q)}},aH:L(l){P m=(g.V.2B)?{Q:1a.7r,R:1a.7q}:$S(1a).1Y(),r=J.1h.1b("2H"),n=J.1h.1b("ar"),k=J.1h.1b("54"),e=J.1h.1b("4X"),q=J.1h.1b("ao"),j=J.1h.1b("av"),p=0,o=0;K(l){m.Q-=l.x;m.R-=l.y}K(J.3H){p=1s.3q(J.2H.Q+q,1s.3q(r.Q,m.Q-k-J.4Z.x)),o=1s.3q(J.2H.R+j,1s.3q(r.R,m.R-J.4Z.y))}17{p=1s.3q(J.2H.Q+q,1s.3q(r.Q,m.Q-J.4Z.x)),o=1s.3q(J.2H.R+j,1s.3q(r.R,m.R-e-J.4Z.y))}K(p/o>n){p=o*n}17{K(p/o<n){o=p/n}}J.1h.1F("Q",p);K(J.cr){J.cr.19({W:(J.1r.X.1Y().R-J.cr.1Y().R)})}M{Q:1s.ay(p),R:1s.ay(o)}},cQ:L(l,j,e){P k=U;2c(g.V.4j){1e"a4":k="35-3J"!=(l.1R("3J-5D")||l.1R("-cR-3J-5D"));1g;1e"3x":k="35-3J"!=(l.1R("3J-5D")||l.1R("-3x-3J-5D"));1g;1e"2q":k=g.V.3N||"35-3J"!=(l.1R("3J-5D")||l.1R("-7u-3J-5D")||"35-3J");1g;2i:k="35-3J"!=l.1R("3J-5D");1g}M(k)?j:j-e},4W:L(o){L l(r){P q=[];K("78"==g.3h(r)){M r}1B(P m 1I r){q.4a(m.5Y()+":"+r[m])}M q.8s(";")}P k=l(o).3Y(),p=$S(k.3W(";")),n=12,j=12;p.3y(L(q){1B(P m 1I J.T){j=1k 4z("^"+m.5Y().2l(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]"+(("3T"==m)?"*":"+")+")$","i").5W(q.3Y());K(j){2c(g.3h(J.T[m])){1e"7i":J.T[m]=j[1].5S();1g;1e"5t":J.T[m]=(j[1].3f("."))?(j[1].cP()*((m.2L().3f("1u"))?1W:96)):j[1].1G();1g;2i:J.T[m]=j[1].3Y()}}}},J);1B(P e 1I J.8f){K(!J.8f.5H(e)){5p}j=1k 4z("(^|;)\\\\s*"+e.5Y().2l(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)\\\\s*(;|$)","i").5W(k);K(j){J.8f[e].1V(J,j[2])}}},95:L(){P e=12,l=J.1m,k=J.2H;1B(P j 1I l){e=1k 4z(""+j+"\\\\s*=\\\\s*([^,]+)","i").5W(J.T.8b);K(e){l[j]=(cO(l[j]=e[1].1G()))?l[j]:"1w"}}K((5Z(l.W)&&5Z(l.1d))||(5Z(l.Y)&&5Z(l.1f))){J.T.8b="5y"}K(!$S(["4d-3R","5C"]).52(J.T.3X)){1B(P j 1I k){e=1k 4z(""+j+"\\\\s*=\\\\s*([^,]+)","i").5W(J.T.3X);K(e){k[j]=(cO(k[j]=e[1].1G()))?k[j]:-1}}K(5Z(k.Q)&&5Z(k.R)){J.T.3X="4d-3R"}}},cM:L(e){P j,l;1B(P j 1I e){K(J.8k.5H(l=j.3w())){J.8k[l]=e[j]}}},2P:L(e){M $S(J.3j.2K(L(j){M(e==j.1H)}))[0]},5g:L(e,j){e=e||12;j=j||U;M $S(J.3j.2K(L(k){M(e==k.2v&&(j||k.1L)&&(j||"61"!=k.1D)&&(j||!k.T.4C))}))},9h:L(m,e){e=e||U;P j=J.5g(m.2v),k=j.4e(m)+1;M(k>=j.1v)?(!e||1>=j.1v)?1C:j[0]:j[k]},94:L(m,e){e=e||U;P j=J.5g(m.2v),k=j.4e(m)-1;M(k<0)?(!e||1>=j.1v)?1C:j[j.1v-1]:j[k]},cN:L(j){j=j||12;P e=J.5g(j,13);M(e.1v)?e[0]:1C},cS:L(j){j=j||12;P e=J.5g(j,13);M(e.1v)?e[e.1v-1]:1C},cT:L(){M $S(J.3j.2K(L(e){M("3B"==e.1D||"64-3b"==e.1D||"64-2J"==e.1D)}))},cY:L(k){P j=J.T.6m,m=12;K(!J.T.cX){g.2G.2E("9y");M 13}k=$S(k);K(J.T.cW&&!(k.dV||k.e0)){M U}2c(k.cU){1e 27:k.1o();J.2J(12);1g;1e 32:1e 34:1e 39:1e 40:m=J.9h(J,j||32==k.cU);1g;1e 33:1e 37:1e 38:m=J.94(J,j);1g;2i:}K(m){k.1o();J.2J(m)}}});P h={3t:"cV.0.33",N:{},7b:{},T:{3Q:U,4C:U,7d:"fd",3T:"9p",2W:"U"},1z:L(l){J.4P=$S(1a).1b("fg:4P",$S([]));P e=12,j=$S([]),k={};J.T=g.1T(J.T,J.aF());c.N=g.3D(J.T);b.N=g.3D(J.T);c.N.2W=("5C"==J.T.2W||"13"==J.T.2W);b.7b=J.7b;K(l){e=$S(l);K(e&&(" "+e.2M+" ").3k(/\\s(6c(?:7T){0,1}|2Q)\\s/)){j.4a(e)}17{M U}}17{j=$S(g.$A(g.29.2k("A")).2K(L(m){M(" "+m.2M+" ").3k(/\\s(6c(?:7T){0,1}|2Q)\\s/)}))}j.3y(L(p){p=$S(p);P m=p.2k("7c"),n=12;k=g.1T(g.3D(J.T),J.aF(p.3A||" "));K(p.4U("6c")||(p.4U("4E"))){K(m&&m.1v){n=p.3z(m[0])}c.1z(p,"1f-1y: "+("5C"==k.2W||"13"==k.2W));K(n){p.4D(n)}}K(p.4U("2Q")||(p.4U("4E"))){b.1z(p)}17{p.1x.45="7S"}J.4P.4a(p)},J);M 13},1o:L(m){P e=12,l=12,j=$S([]);K(m){e=$S(m);K(e&&(" "+e.2M+" ").3k(/\\s(6c(?:7T){0,1}|2Q)\\s/)){j=$S(J.4P.72(J.4P.4e(e),1))}17{M U}}17{j=$S(J.4P)}3C(j&&j.1v){l=$S(j[j.1v-1]);K(l.1j){l.1j.1o();c.3U.72(c.3U.4e(l.1j),1);l.1j=1C}b.1o(l);P k=j.72(j.4e(l),1);3p k}M 13},73:L(j){P e=12;K(j){J.1o(j);J.1z.1p(J).2s(80,j)}17{J.1o();J.1z.1p(J).2s(80)}M 13},2N:L(n,e,k,l){P m=$S(n),j=12;K(m){K((j=m.1b("1K"))){j.2P(j.2f||j.1H).1D="7m"}K(!c.2N(m,e,k,l)){b.2N(m,e,k,l)}}},3b:L(e){M b.3b(e)},2J:L(e){M b.2J(e)},aF:L(j){P e,p,l,k,n;e=12;p={};n=[];K(j){l=$S(j.3W(";"));l.2S(L(o){1B(P m 1I J.T){e=1k 4z("^"+m.5Y().2l(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)$","i").5W(o.3Y());K(e){2c(g.3h(J.T[m])){1e"7i":p[m]=e[1].5S();1g;1e"5t":p[m]=3L(e[1]);1g;2i:p[m]=e[1].3Y()}}}},J)}17{1B(k 1I J.N){e=J.N[k];2c(g.3h(J.T[k.3w()])){1e"7i":e=e.5v().5S();1g;1e"5t":e=3L(e);1g;2i:1g}p[k.3w()]=e}}M p}};$S(1c).1t("4I",L(){h.1z()});M h})(63);', 62, 1096, '|||||||||||||||||||||||||||||||||||||||||||||this|if|function|return|options||var|width|height|mjs|_o|false|j21|top|self|left||||null|true||||else|z7|j6|window|j29|document|bottom|case|right|break|t22|z47|zoom|new|z4|position|hint|stop|j24|px|z1|Math|je1|opacity|length|auto|style|click|start|j30|for|undefined|state|t25|j6Prop|j17|id|in|hidden|thumb|ready|hide|0px|absolute|j32|mouseover|j5|FX|extend|display|call|100|margin|j7|src||show|arguments|index|t23||||block|body|href|appendChild|switch|t26|title|t27|z6|initializeOn|default|test|byTag|replace|border|overflow|padding|j2|trident|zIndex|j27|j16|z3|group|visibility|j23|load|parentNode|hotspots|touchScreen|defined|mouseout|je2|prototype|doc|size|firstChild|restore|filter|toLowerCase|className|update|try|t16|MagicThumb|styles|j14|img|params|t30|rightClick|type|none|prefix||duration||||content|catch||||fullScreen|expand|DIV|zoomPosition|Transition|has|Element|j1|selectorsChange|thumbs|match|trident4|parseInt|j8|parent|delete|min|z30|z2|version|zoomWidth|selectors|j22|webkit|forEach|removeChild|rel|expanded|while|detach|captionText|max|createElement|hCaption|now|box|zoomHeight|parseFloat|init|backCompat|tagName|selectorsEffect|disableZoom|screen|getDoc|hintText|zooms|J_TYPE|split|expandSize|j26|capable||inz30|event|typeof|onComplete|cursor|fps|selectorsClass|background|z21|push|instanceof|constructor|fit|indexOf|_cleanup|J_UUID|j3|transition|engine|visible|Class|z44|j19s|apply|wrapper|scrollTop|mt_vml_|layout|z42|clicked|linear|j33|z43Bind|z28|RegExp|j9|timer|disableExpand|append|MagicZoomPlus|t31|t28|thumbnail|domready|300|touchend|win|nodeType|expandEffect|getTarget|items|getRelated|float|relative|opacityReverse|j13|z38|z37|padY|on|scrPad||z41|contains|hintPosition|padX|image|hasChild|Array|cbs|kill|div|showTitle|storage|clearTimeout|_tmpp|z9|t15|array|round|inner|fade|showLoading|ieBack|prevItem|slide|continue|requestAnimationFrame|createTextNode|selector|number|z34|toString|presto|Out|center|link|In|scrollLeft|original|sizing|divTag|onload|getButton|hasOwnProperty|paddingBottom|magicthumb|mode|slideshowEffect|paddingLeft|easing|paddingRight|restoreSpeed|loading|Doc|j18|borderWidth|t29|unload|exec|paddingTop|dashize|isNaN||uninitialized|200|magicJS|busy|pause|alwaysShowZoom|hintVisible|zoomDistance|dragMode|complete|render|MagicZoom|activate|getElementsByTagName|t14|setTimeout|onStart|onready|readyState|offset|keepThumbnail|slideshowLoop|pow|css3Transformations|initMouseEvent|captionPosition|gd56f7fsgd|setupHint|z43|z48|z36|_unbind|set|static|z45|expandTrigger|entireImage|rev|swap|mouseup|z35|throw|activatedEx|cloneNode|shift|z24|J_EUID|z13|_timer|zoomAlign|pad|100000px|calc|z18|events|changeContent|j19|forceAnimation|z29|z14|10000|onBeforeRender|restoreEffect|splice|refresh|t10||t13|j10|string|250|getElementsByClassName|lang|span|hintClass|buttons|t32|touch|currentStyle|boolean|close|vertical|touchstart|updating|css3Animation|backgroundColor|replaceChild|innerHeight|innerWidth|newImg|j31|ms|hoverTimer|pounce|PFX|z11|hintOpacity|selectorsEffectSpeed|loadingOpacity|speed|not|found|MagicJS|color|innerHTML|inline|random|z0|screenPadding|class|String|floor|9_|ieMode|MagicZoomPup|pointer|Plus|clickToActivate|ddx|error|abort|ddy|Ff|150|zoomViewHeight|lastSelector|defaults|documentElement|smoothing|initTopPos|initLeftPos|z33|_handlers|onerror|expandPosition|next|effect|holder|_deprecated|z10|dblclick|IMG|titleSource|_lang|500|naturalWidth|compatMode|features|dissolve|to|400|join|loadingMsg|theme_mac|identifier|button|item|namespaces|Right|media|previous|enabled|outline|cancelAnimationFrame|contextmenu|toggle|createEvent|panZoom|targetTouches|_event_prefix_|styleSheets|lastTap|callee|changedTouches|expandSpeed|implement|platform|ts|Bottom|hover|swapTimer|Top|selectorsMouseoverDelay|getStorage|Left||mzParams|rect|element|t18|parseExOptions|1000|restoreTrigger|z26|borderBottomWidth|ufx|onErrorHandler|mousemove|slideshowSpeed|onabort|url|_event_del_|t17|_event_add_|overlapBox|je3|navigator|destroy|borderTopWidth|preventDefault|Zoom|z20|j15|t6|getBox|prevent|custom|query|tl|keydown|head|clickToInitialize|moveOnClick|initialize|loadingPositionX|mousedown|z15|z23|loadingPositionY|shadow|HTMLElement|expandAlign|clickToDeactivate|z1Holder|nWidth|big|thumbChange|defaultView|stopAnimation|construct|startTime|textAlign|linkTarget|open|backgroundOpacity|loop|toggleMZ|smoothingSpeed|Function|10000px|backgroundSpeed|gecko|javascript|horizontal|t11|loopBind|buttonsPosition|Slide|request|offsetHeight||z46|external|J_EXTENDED|captionSource|IFRAME|uuid|cos|PI|out|el_arr|hspace|preservePosition|tc|ratio|tr|Event|touches|vspace|reverse|styleFloat|ceil|t12|5001|borderLeftWidth|caller|5000|z16|_z37|j12|resize|setupContent|touchmove|insertBefore|UUID|nativize|toArray|requestFullScreen|Date|backcompat|z31|date|od|charAt|DocumentTouch|concat|relatedTarget|opera|cancelBubble|mobile|hone|android|phone|textnode|stopPropagation|ip|z32|glow|compareDocumentPosition|wrap|getBoundingClientRect||change|transform|interval||object|preload|dispatchEvent|raiseEvent||getComputedStyle|420|1px|onError|styles_arr||finishTime|cubicIn|backIn|quadIn|expoIn|onAfterRender|sineIn|Alpha|elasticIn|DXImageTransform|setProps|Microsoft|offsetWidth|bounceIn|enclose|CancelFullScreen|Width|ios|XMLHttpRequest|xpath|zoomFade|localStorage|fitZoomWindow|z25|Khtml|preloadSelectorsSmall|preloadSelectorsBig|mozCancelAnimationFrame|blur|Moz|Webkit|z17|chrome|which|changeEventName|errorEventName|cancel|cancelFullScreen|addEventListener|magiczoom|zoomWindowEffect|documentMode|z19|900|webkit419||roundCss|x7||Image|expandTriggerDelay|captionSpeed|t5|alt|captionHeight|t4|captionWidth|mac|buttonsDisplay|backgroundPosition|add||inherit|transparent|ig|Tahoma|fontFamily|t1|cssClass|t2|align|back|gecko181|borderRightWidth|map|fontSize|fontWeight|101|charCodeAt|fromCharCode|urn|schemas|setLang|t19|isFinite|toFloat|adjBorder|moz|t20|t21|keyCode|v4|keyboardCtrl|keyboard|onKey|mask|cbClick|magicthumb_ie_ex|behavior|vml|com|microsoft|VML|backgroundImage|curLeft|cbHover|t8|sMagicZoom|fill|buttonClose|t7|z22|buttonPrevious|j20|unselectable|move|j28|zoomFadeOutSpeed|disable|_bind||entire|drag|zoomFadeInSpeed|naturalHeight|isReady|nHeight|z8|v2|buttonNext|z27|z39|Loading|abs|210|FullScreen|211|webkitIsFullScreen|fullscreenerror|220|dir|270|applicationCache|260|fullscreenchange|RequestFullScreen|msPerformance|190|rtl|191|192|419|181|ctrlKey|khtml|525|performance|postMessage|metaKey|009|cssFloat|clientWidth|clientHeight|presto925|MagicZoomHeader|childNodes|iframe|pageXOffset|pageYOffset|execCommand|cbhover|byClass|zoomItem|scrollWidth|scrollHeight|innerText|html|progid|lef||filters|hasLayout|getPropertyValue|AnimationName||fixed|setAttribute|offsetTop|offsetParent|offsetLeft|clientLeft|j11|clientTop|j4|msCancelAnimationFrame|blackberry|blazer|compal|bada|avantgo|querySelector|ontouchstart|tablet|elaine|fennec|lge|maemo|midp|kindle|iris|hiptop|iemobile|runtime|air|KeyboardEvent|KeyEvent|regexp|UIEvent|MouseEvent|exists|collection|Object|slice|getTime|setInterval|userAgent|evaluate|toUpperCase|insertRule|getElementById|addCSS|mmp|netfront|MagicZoomPlusHint|webos|linux|magiczoomplus|unknown|mozInnerScreenY|WebKitPoint|taintEnabled|other|mozRequestAnimationFrame|autohide|webkitCancelRequestAnimationFrame|Transform|oCancelAnimationFrame|msRequestAnimationFrame|webkitRequestAnimationFrame|oRequestAnimationFrame|getBoxObjectFor|ActiveXObject|re|plucker|pocket|ixi|os|ob|palm|psp|symbian|windows|xda|xiino|wap|vodafone|treo|up|animationName|DOMElement|imageSize|swapImage|MagicZoomHint|MagicThumbHint|Expand|clickTo|_self|distance|always|text|msg|Next|Previous|source|preserve|deactivate|slideOut|slideIn|caption|618|backOut|cubicOut|9999|ga2c976a|quadOut|MagicZoomLoading|getAttribute|bounceOut|_blank|amp|000000|10001|getAttributeNode|elasticOut|delay|Close|textDecoration|hand|MagicZoomBigImageCont|selectstart|MozUserSelect||highlight|elastic|10002|trident900|3px|MagicBoxGlow|frameBorder|MagicBoxShadow|sine|cubic|quad|tap|callout|getXY|middle|loader|Magic|Invalid|small|lastChild|initializing|z12|480|user|select|bounce|expo|mt|_new|expoOut|lt|initEvent|createEventObject|magic|cssText|tile|stroked|eventType|createStyleSheet|doScroll|DOMContentLoaded|currentTarget|loaded|fireEvent|temporary|detachEvent|attachEvent|clientY|target|pageY|clientX|returnValue|pageX|srcElement|fromElement|insertAdjacentHTML|removeEventListener|beforeEnd|BackgroundImageCache|toElement|coords|owningElement|111|rc24|00001|no|backgroundRepeat|sort|curFrame|clearInterval|repeat|ccc|sineOut|nextSibling'.split('|'), 0, {}))



  //----------------------------------------------------------------------------------------------



  /*
   * jQuery FlexSlider v2.0
   * Copyright 2012 WooThemes
   * Contributing Author: Tyler Smith
   */
  ; (function (d) {
  d.flexslider = function (h, k) {
    var a = d(h), c = d.extend({}, d.flexslider.defaults, k), e = c.namespace, o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch, s = o ? "touchend" : "click", l = "vertical" === c.direction, m = c.reverse, i = 0 < c.itemWidth, p = "fade" === c.animation, r = "" !== c.asNavFor, f = {}; d.data(h, "flexslider", a); f = {
      init: function () {
      a.animating = !1; a.currentSlide = c.startAt; a.animatingTo = a.currentSlide; a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last; a.containerSelector = c.selector.substr(0,
        c.selector.search(" ")); a.slides = d(c.selector, a); a.container = d(a.containerSelector, a); a.count = a.slides.length; a.syncExists = 0 < d(c.sync).length; "slide" === c.animation && (c.animation = "swing"); a.prop = l ? "top" : "marginLeft"; a.args = {}; a.manualPause = !1; a.transitions = !c.video && !p && c.useCSS && function () {
          var b = document.createElement("div"), c = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], d; for (d in c) if (b.style[c[d]] !== void 0) {
          a.pfx = c[d].replace("Perspective", "").toLowerCase();
            a.prop = "-" + a.pfx + "-transform"; return true
          } return false
        }(); "" !== c.controlsContainer && (a.controlsContainer = 0 < d(c.controlsContainer).length && d(c.controlsContainer)); "" !== c.manualControls && (a.manualControls = 0 < d(c.manualControls).length && d(c.manualControls)); c.randomize && (a.slides.sort(function () { return Math.round(Math.random()) - 0.5 }), a.container.empty().append(a.slides)); a.doMath(); r && f.asNav.setup(); a.setup("init"); c.controlNav && f.controlNav.setup(); c.directionNav && f.directionNav.setup(); c.keyboard &&
          (1 === d(a.containerSelector).length || c.multipleKeyboard) && d(document).bind("keyup", function (b) { b = b.keyCode; if (!a.animating && (b === 39 || b === 37)) { b = b === 39 ? a.getTarget("next") : b === 37 ? a.getTarget("prev") : false; a.flexAnimate(b, c.pauseOnAction) } }); c.mousewheel && a.bind("mousewheel", function (b, g) { b.preventDefault(); var d = g < 0 ? a.getTarget("next") : a.getTarget("prev"); a.flexAnimate(d, c.pauseOnAction) }); c.pausePlay && f.pausePlay.setup(); c.slideshow && (c.pauseOnHover && a.hover(function () { a.pause() }, function () {
          a.manualPause ||
            a.play()
          }), 0 < c.initDelay ? setTimeout(a.play, c.initDelay) : a.play()); o && c.touch && f.touch(); (!p || p && c.smoothHeight) && d(window).bind("resize focus", f.resize); setTimeout(function () { c.start(a) }, 200)
      }, asNav: {
        setup: function () {
        a.asNav = !0; a.animatingTo = Math.floor(a.currentSlide / a.move); a.currentItem = a.currentSlide; a.slides.removeClass(e + "active-slide").eq(a.currentItem).addClass(e + "active-slide"); a.slides.click(function (b) {
          b.preventDefault(); var b = d(this), g = b.index(); !d(c.asNavFor).data("flexslider").animating &&
            !b.hasClass("active") && (a.direction = a.currentItem < g ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction, !1, !0, !0))
        })
        }
      }, controlNav: {
        setup: function () { a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging() }, setupPaging: function () {
          var b = 1, g; a.controlNavScaffold = d('<ol class="' + e + "control-nav " + e + ("thumbnails" === c.controlNav ? "control-thumbs" : "control-paging") + '"></ol>'); if (1 < a.pagingCount) for (var q = 0; q < a.pagingCount; q++)g = "thumbnails" === c.controlNav ? '<img src="' + a.slides.eq(q).attr("data-thumb") +
            '"/>' : "<a>" + b + "</a>", a.controlNavScaffold.append("<li>" + g + "</li>"), b++; a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold); f.controlNav.set(); f.controlNav.active(); a.controlNavScaffold.delegate("a, img", s, function (b) { b.preventDefault(); var b = d(this), g = a.controlNav.index(b); b.hasClass(e + "active") || (a.direction = g > a.currentSlide ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction)) }); o && a.controlNavScaffold.delegate("a", "click touchstart", function (a) { a.preventDefault() })
        },
        setupManual: function () { a.controlNav = a.manualControls; f.controlNav.active(); a.controlNav.live(s, function (b) { b.preventDefault(); var b = d(this), g = a.controlNav.index(b); b.hasClass(e + "active") || (g > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(g, c.pauseOnAction)) }); o && a.controlNav.live("click touchstart", function (a) { a.preventDefault() }) }, set: function () { a.controlNav = d("." + e + "control-nav li " + ("thumbnails" === c.controlNav ? "img" : "a"), a.controlsContainer ? a.controlsContainer : a) }, active: function () {
          a.controlNav.removeClass(e +
            "active").eq(a.animatingTo).addClass(e + "active")
        }, update: function (b, c) { 1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(c).closest("li").remove(); f.controlNav.set(); 1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(c, b) : f.controlNav.active() }
      }, directionNav: {
        setup: function () {
          var b = d('<ul class="' + e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + c.prevText + '</a></li><li><a class="' +
            e + 'next" href="#">' + c.nextText + "</a></li></ul>"); a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + e + "direction-nav li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + e + "direction-nav li a", a)); f.directionNav.update(); a.directionNav.bind(s, function (b) { b.preventDefault(); b = d(this).hasClass(e + "next") ? a.getTarget("next") : a.getTarget("prev"); a.flexAnimate(b, c.pauseOnAction) }); o && a.directionNav.bind("click touchstart", function (a) { a.preventDefault() })
        }, update: function () {
          var b =
            e + "disabled"; c.animationLoop || (1 === a.pagingCount ? a.directionNav.addClass(b) : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + e + "prev").addClass(b) : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + e + "next").addClass(b) : a.directionNav.removeClass(b))
        }
      }, pausePlay: {
        setup: function () {
          var b = d('<div class="' + e + 'pauseplay"><a></a></div>'); a.controlsContainer ? (a.controlsContainer.append(b), a.pausePlay = d("." + e + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + e + "pauseplay a",
            a)); f.pausePlay.update(c.slideshow ? e + "pause" : e + "play"); a.pausePlay.bind(s, function (b) { b.preventDefault(); if (d(this).hasClass(e + "pause")) { a.pause(); a.manualPause = true } else { a.play(); a.manualPause = false } }); o && a.pausePlay.bind("click touchstart", function (a) { a.preventDefault() })
        }, update: function (b) { "play" === b ? a.pausePlay.removeClass(e + "pause").addClass(e + "play").text(c.playText) : a.pausePlay.removeClass(e + "play").addClass(e + "pause").text(c.pauseText) }
      }, touch: function () {
        function b(b) {
          j = l ? d - b.touches[0].pageY :
            d - b.touches[0].pageX; o = l ? Math.abs(j) < Math.abs(b.touches[0].pageX - e) : Math.abs(j) < Math.abs(b.touches[0].pageY - e); if (!o || 500 < Number(new Date) - k) b.preventDefault(), !p && a.transitions && (c.animationLoop || (j /= 0 === a.currentSlide && 0 > j || a.currentSlide === a.last && 0 < j ? Math.abs(j) / n + 2 : 1), a.setProps(f + j, "setTouch"))
        } function g() {
          if (a.animatingTo === a.currentSlide && !o && null !== j) {
            var i = m ? -j : j, l = 0 < i ? a.getTarget("next") : a.getTarget("prev"); a.canAdvance(l) && (550 > Number(new Date) - k && 20 < Math.abs(i) || Math.abs(i) > n / 2) ? a.flexAnimate(l,
              c.pauseOnAction) : a.flexAnimate(a.currentSlide, c.pauseOnAction, !0)
          } h.removeEventListener("touchmove", b, !1); h.removeEventListener("touchend", g, !1); f = j = e = d = null
        } var d, e, f, n, j, k, o = !1; h.addEventListener("touchstart", function (j) {
          a.animating ? j.preventDefault() : 1 === j.touches.length && (a.pause(), n = l ? a.h : a.w, k = Number(new Date), f = i && m && a.animatingTo === a.last ? 0 : i && m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : i && a.currentSlide === a.last ? a.limit : i ? (a.itemW + c.itemMargin) * a.move * a.currentSlide : m ? (a.last - a.currentSlide +
            a.cloneOffset) * n : (a.currentSlide + a.cloneOffset) * n, d = l ? j.touches[0].pageY : j.touches[0].pageX, e = l ? j.touches[0].pageX : j.touches[0].pageY, h.addEventListener("touchmove", b, !1), h.addEventListener("touchend", g, !1))
        }, !1)
      }, resize: function () {
      !a.animating && a.is(":visible") && (i || a.doMath(), p ? f.smoothHeight() : i ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : l ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (c.smoothHeight && f.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW,
        "setTotal")))
      }, smoothHeight: function (b) { if (!l || p) { var c = p ? a : a.viewport; b ? c.animate({ height: a.slides.eq(a.animatingTo).height() }, b) : c.height(a.slides.eq(a.animatingTo).height()) } }, sync: function (b) { var g = d(c.sync).data("flexslider"), e = a.animatingTo; switch (b) { case "animate": g.flexAnimate(e, c.pauseOnAction, !1, !0); break; case "play": !g.playing && !g.asNav && g.play(); break; case "pause": g.pause() } }
    }; a.flexAnimate = function (b, g, q, h, k) {
      if (!a.animating && (a.canAdvance(b) || q) && a.is(":visible")) {
        if (r && h) if (q = d(c.asNavFor).data("flexslider"),
          a.atEnd = 0 === b || b === a.count - 1, q.flexAnimate(b, !0, !1, !0, k), a.direction = a.currentItem < b ? "next" : "prev", q.direction = a.direction, Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide && 0 !== b) a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), b = Math.floor(b / a.visible); else return a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1; a.animating = !0; a.animatingTo = b; c.before(a); g && a.pause(); a.syncExists && !k && f.sync("animate"); c.controlNav && f.controlNav.active();
        i || a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"); a.atEnd = 0 === b || b === a.last; c.directionNav && f.directionNav.update(); b === a.last && (c.end(a), c.animationLoop || a.pause()); if (p) a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed, c.easing), a.slides.eq(b).fadeIn(c.animationSpeed, c.easing, a.wrapup); else {
          var n = l ? a.slides.filter(":first").height() : a.computedW; i ? (b = c.itemWidth > a.w ? 2 * c.itemMargin : c.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo, b = b > a.limit && 1 !== a.visible ? a.limit : b) : b =
            0 === a.currentSlide && b === a.count - 1 && c.animationLoop && "next" !== a.direction ? m ? (a.count + a.cloneOffset) * n : 0 : a.currentSlide === a.last && 0 === b && c.animationLoop && "prev" !== a.direction ? m ? 0 : (a.count + 1) * n : m ? (a.count - 1 - b + a.cloneOffset) * n : (b + a.cloneOffset) * n; a.setProps(b, "", c.animationSpeed); if (a.transitions) { if (!c.animationLoop || !a.atEnd) a.animating = !1, a.currentSlide = a.animatingTo; a.container.unbind("webkitTransitionEnd transitionend"); a.container.bind("webkitTransitionEnd transitionend", function () { a.wrapup(n) }) } else a.container.animate(a.args,
              c.animationSpeed, c.easing, function () { a.wrapup(n) })
        } c.smoothHeight && f.smoothHeight(c.animationSpeed)
      }
    }; a.wrapup = function (b) { !p && !i && (0 === a.currentSlide && a.animatingTo === a.last && c.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && (0 === a.animatingTo && c.animationLoop) && a.setProps(b, "jumpStart")); a.animating = !1; a.currentSlide = a.animatingTo; c.after(a) }; a.animateSlides = function () { a.animating || a.flexAnimate(a.getTarget("next")) }; a.pause = function () {
      clearInterval(a.animatedSlides); a.playing = !1;
      c.pausePlay && f.pausePlay.update("play"); a.syncExists && f.sync("pause")
    }; a.play = function () { a.animatedSlides = setInterval(a.animateSlides, c.slideshowSpeed); a.playing = !0; c.pausePlay && f.pausePlay.update("pause"); a.syncExists && f.sync("play") }; a.canAdvance = function (b) {
      var d = r ? a.pagingCount - 1 : a.last; return r && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b === a.currentSlide && !r ? !1 : c.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === d && 0 ===
        b && "next" === a.direction ? !1 : !0
    }; a.getTarget = function (b) { a.direction = b; return "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1 }; a.setProps = function (b, d, e) {
      var f = function () {
        var e = b ? b : (a.itemW + c.itemMargin) * a.move * a.animatingTo; return -1 * function () {
          if (i) return "setTouch" === d ? b : m && a.animatingTo === a.last ? 0 : m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : e; switch (d) {
            case "setTotal": return m ? (a.count - 1 - a.currentSlide + a.cloneOffset) *
              b : (a.currentSlide + a.cloneOffset) * b; case "setTouch": return b; case "jumpEnd": return m ? b : a.count * b; case "jumpStart": return m ? a.count * b : b; default: return b
          }
        }() + "px"
      }(); a.transitions && (f = l ? "translate3d(0," + f + ",0)" : "translate3d(" + f + ",0,0)", e = void 0 !== e ? e / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", e)); a.args[a.prop] = f; (a.transitions || void 0 === e) && a.container.css(a.args)
    }; a.setup = function (b) {
      if (p) a.slides.css({ width: "100%", "float": "left", marginRight: "-100%", position: "relative" }), "init" ===
        b && a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed, c.easing), c.smoothHeight && f.smoothHeight(); else {
          var g, h; "init" === b && (a.viewport = d('<div class="flex-viewport"></div>').css({ overflow: "hidden", position: "relative" }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, m && (h = d.makeArray(a.slides).reverse(), a.slides = d(h), a.container.empty().append(a.slides))); c.animationLoop && !i && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));
        a.newSlides = d(c.selector, a); g = m ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset; l && !i ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () { a.newSlides.css({ display: "block" }); a.doMath(); a.viewport.height(a.h); a.setProps(g * a.h, "init") }, "init" === b ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(g * a.computedW, "init"), setTimeout(function () {
          a.doMath(); a.newSlides.css({
            width: a.computedW, "float": "left",
            display: "block"
          }); c.smoothHeight && f.smoothHeight()
        }, "init" === b ? 100 : 0))
      } i || a.slides.removeClass(e + "active-slide").eq(a.currentSlide).addClass(e + "active-slide")
    }; a.doMath = function () {
      var b = a.slides.first(), d = c.itemMargin, e = c.minItems, f = c.maxItems; a.w = a.width(); a.h = b.height(); a.boxPadding = b.outerWidth() - b.width(); i ? (a.itemT = c.itemWidth + d, a.minW = e ? e * a.itemT : a.w, a.maxW = f ? f * a.itemT : a.w, a.itemW = a.minW > a.w ? (a.w - d * e) / e : a.maxW < a.w ? (a.w - d * f) / f : c.itemWidth > a.w ? a.w : c.itemWidth, a.visible = Math.floor(a.w / (a.itemW +
        d)), a.move = 0 < c.move && c.move < a.visible ? c.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : c.itemWidth > a.w ? (a.itemW + 2 * d) * a.count - a.w - d : (a.itemW + d) * a.count - a.w) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1); a.computedW = a.itemW - a.boxPadding
    }; a.update = function (b, d) {
      a.doMath(); i || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1), a.animatingTo = a.currentSlide); if (c.controlNav && !a.manualControls) if ("add" ===
        d && !i || a.pagingCount > a.controlNav.length) f.controlNav.update("add"); else if ("remove" === d && !i || a.pagingCount < a.controlNav.length) i && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), f.controlNav.update("remove", a.last); c.directionNav && f.directionNav.update()
    }; a.addSlide = function (b, e) {
      var f = d(b); a.count += 1; a.last = a.count - 1; l && m ? void 0 !== e ? a.slides.eq(a.count - e).after(f) : a.container.prepend(f) : void 0 !== e ? a.slides.eq(e).before(f) : a.container.append(f); a.update(e, "add"); a.slides = d(c.selector +
        ":not(.clone)", a); a.setup(); c.added(a)
    }; a.removeSlide = function (b) { var e = isNaN(b) ? a.slides.index(d(b)) : b; a.count -= 1; a.last = a.count - 1; isNaN(b) ? d(b, a.slides).remove() : l && m ? a.slides.eq(a.last).remove() : a.slides.eq(b).remove(); a.doMath(); a.update(e, "remove"); a.slides = d(c.selector + ":not(.clone)", a); a.setup(); c.removed(a) }; f.init()
  }; d.flexslider.defaults = {
    namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: !1, animationLoop: !0, smoothHeight: !1, startAt: 0,
    slideshow: !0, slideshowSpeed: 7E3, animationSpeed: 600, initDelay: 0, randomize: !1, pauseOnAction: !0, pauseOnHover: !1, useCSS: !0, touch: !0, video: !1, controlNav: !0, directionNav: !0, prevText: "Previous", nextText: "Next", keyboard: !0, multipleKeyboard: !1, mousewheel: !1, pausePlay: !1, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 0, maxItems: 0, move: 0, start: function () { }, before: function () { }, after: function () { }, end: function () { }, added: function () { },
    removed: function () { }
  }; d.fn.flexslider = function (h) {
    h = h || {}; if ("object" === typeof h) return this.each(function () { var a = d(this), c = a.find(h.selector ? h.selector : ".slides > li"); 1 === c.length ? (c.fadeIn(400), h.start && h.start(a)) : void 0 === a.data("flexslider") && new d.flexslider(this, h) }); var k = d(this).data("flexslider"); switch (h) {
      case "play": k.play(); break; case "pause": k.pause(); break; case "next": k.flexAnimate(k.getTarget("next"), !0); break; case "prev": case "previous": k.flexAnimate(k.getTarget("prev"), !0); break;
      default: "number" === typeof h && k.flexAnimate(h, !0)
    }
  }
  })(jQuery);


//MC accord
(function ($, window, document, undefined) {
  //setup for prototypal inheritance
  var wsAccordion = {
    init: function (options, elem) {
      var self = this;

      self.elem = elem; //who was passed through, as in $("div.thisguy").wsAccordion();
      self.$elem = $(elem); //gives a jQ version if needed

      //allow us to extend so we can override the defaults
      self.options = $.extend({}, $.fn.wsAccordion.options, options);
      o = self.options;

      //sterf
      self.$items = self.$elem.find(o.accordionElement);
      self.$items.each(function (index) {
        $(this).attr('data-index', index);
      });
      //for maintaining states in ajax, new array of open items
      if (o.ajax) {
        self.openItems = new Array();
      }

      //only hide if under BP
      if ($(window).width() < o.breakpoint) {
        self.$elem.find(o.accordionContent).hide();
        //also change the class to down?
        //self.$elem.find(".icon-angle-up").attr("class", "icon-angle-down");
        self.$elem.find(".fa-chevron-up").attr("class", "fa fa-chevron-down");


        //dont do below, we aren't ajax!
				/*self.$items.each( function(index) {
					self.openItems[index] = 'false';
				});*/
      } else {
        //need to add "active" to all you mofos
        self.$items.each(function (index, data) {
          //if (!$(data).hasClass('collapsed')) {
          self.openItems[index] = 'true';

          //} else {
          //    $(data).children(".accordion__content").hide();
          //  $(data).addClass("accordion__item--active");			            
          // }
        }).addClass("accordion__item--active");
      }


      //AJAX  removes onclik, this is how to do ye olde "live"
      $("html").on("click", self.$elem.find(o.accordionButton).selector, function (event) {
        event.preventDefault();
        self.toggleAccordion($(this));
      });


      if (!o.multipleOpen) {
        var $buttonToTrigger = self.$elem.find(o.accordionElement).eq(o.openIndex).find(o.accordionButton);

        //trigger the desired tab to open
        $buttonToTrigger.trigger("click");

        //add single class to parent
        self.$elem.addClass("accordion--single");
      }
    },



    //stuff my accordion does
    toggleAccordion: function (button) {


      var self = this,
        currentAccordion = button.closest(o.accordionElement),
        currentIndex = parseInt(currentAccordion.attr('data-index'), 10);
      iconElement = button.find(".fa"),
        activeClass = "accordion__item--active";

      //todo: remove self/index from array


      //can i have multiple open
      if (o.multipleOpen) {
        //if active
        if (_accordion.openItems[currentIndex] == 'true') {
          //if (currentAccordion.hasClass(activeClass)) {
          //make the icon change
          //iconElement.attr("class", "icon-angle-up");
          iconElement.attr("class", "fa fa-chevron-up");

          //remove myself from the array
          _accordion.openItems[currentIndex] = 'false';

          currentAccordion.removeClass(activeClass); //add our class hook

        } else {
          //iconElement.attr("class", "icon-angle-down");
          iconElement.attr("class", "fa fa-chevron-down");

          _accordion.openItems[currentIndex] = 'true';

          currentAccordion.addClass(activeClass); //add our class hook
        }
        //console.log(currentIndex);
        //console.log(_accordion.openItems);
        //clicking only toggles my current content
        // currentAccordion.toggleClass(activeClass); //add our class hook

        currentAccordion.find(o.accordionContent).slideToggle(); //toggle what is hidden

      } else {
        //make ALL accordions off
        //note to me: look at current tab logic for how i made only one visible


        //add only the current as active
        if (currentAccordion.hasClass(activeClass)) {
          return;
        }

        //kill all
        $(o.accordionElement).removeClass(activeClass).find(o.accordionContent).slideUp();
        //$(o.accordionElement).find("[class^='icon-']").attr("class", "icon-angle-down");
        $(o.accordionElement).find("[class^='icon-']").attr("class", "fa fa-chevron-down");


        //set me to active
        currentAccordion.toggleClass(activeClass).find(o.accordionContent).slideDown();
        //iconElement.attr("class", "icon-angle-up");
        iconElement.attr("class", "fa fa-chevron-up");

      }

    }
  };

  $.fn.wsAccordion = function (options) {
    //do each instance of the selector, returning so we can chain
    return this.each(function () {
      //sets up a new instance ja? MC: using "_" so i dont get confused with uppercase declaration
      _accordion = Object.create(wsAccordion);
      _accordion.init(options, this);
    });

  };

  //defaults for the accordion, can be overriden by extend in init
  $.fn.wsAccordion.options = {
    breakpoint: 800,
    multipleOpen: true,
    accordionElement: ".accordion__item", //each expando item
    accordionContent: ".accordion__content", //content to toggle
    accordionButton: ".accordion__toggle", //click trigger element
    openIndex: 0, //what element is open by default. Only works when multipleOpen is false
    ajax: false //do we need to maintain states accross ajax?
  };

  $.fn.wsAccordion.resetAjax = function (parentclass) {

    var arr = new Array();

    for (i = 0; i < _accordion.openItems.length; i++) {
      arr[i] = _accordion.openItems[i];
    }

    var o = _accordion.options;
    var self = this;
    var par = $('.' + parentclass);
    var items = par.find(o.accordionElement);

    items.each(function (index) {
      var state = arr[index];
      //console.log(state);
      var currentAccordion = items.eq(index);
      if (state == 'true') {
        $(this).addClass(activeClass);
      }
      else {
        // Hide accordion
        $(currentAccordion).find('.accordion__content').hide();
        //$(currentAccordion).find('.icon-angle-down').removeClass().addClass('icon-angle-up');
        $(currentAccordion).find('.fa-chevron-down').removeClass().addClass('fa fa-chevron-up');
      }
    });

    for (i = 0; i < _accordion.openItems.length; i++) {
      _accordion.openItems[i] = arr[i];
    }
  };

})(jQuery, window, document);



//----------------------------------------------------------------------------


//product specs, rename to something moar applicable for other projects?
/*
	create navs on init
	button & content container gets active

	who do i need to show? who do i need to assign actives to
*/
; (function ($, window, undefined) {
  var productSpecs = {
    init: function (options, elem) {
      var _self = this;

      //for call methods of productSpects, but still has closure
      _self.elem = elem;
      _self.$elem = $(elem);

      //allow us to extend so we can override the defaults
      _self.options = $.extend({}, $.fn.productSpecs.options, options);


      // base is done, get setup!
      _self.$content = _self.$elem.find(".productSpecs__content"); //TODO: make class option for extend
      _self.getContentHeading(); //so we on only find headings once

      //need both these regardless, they are in loops and call the attach handler 
      _self.createTabNav();
      _self.createAccordionButton();

      //MUST be after we have created both interative btns
      _self.setupEnquire();

      //first run?
      _self.$content.hide();
      _self.$buttonTab.eq(_self.options.initialOpen).trigger("click");
    },

    getContentHeading: function () {
      var _self = this;
      _self.contentHeading = new Array;//global array

      _self.$content.each(function () {
        _self.contentHeading.push($(this).find(".productSpecs__heading").text());
      });
    },

    //too much logic
    setupEnquire: function () {
      var _self = this,
        screenSize = $(window).width(),
        intBreakpoint = parseInt(_self.options.breakpoint, 10) //what if its in ems?

      // console.log(intBreakpoint);

      //ie8 || no enquire support
      if (!window.enquire || $.browser.msie && $.browser.version < 9) {
        console.warn("enquire.js is needed. Only detects on .ready() now");

        if (screenSize < intBreakpoint) {
          _self.setInteractMode("accordion");
        }
        else {
          _self.setInteractMode("tabs");
        }

        //lazy way of stopping enquire if its not there
        return;
      }

      enquire.register("screen and (min-width: " + _self.options.breakpoint + ")", { //800px
        setup: function () {
          _self.setInteractMode("accordion");
        },

        match: function () {
          _self.setInteractMode("tabs");
        },
        unmatch: function () {
          _self.setInteractMode("accordion");
        }

      }).listen();
    },

    //sets the current render mode of control, via enq or screen size for fallbacks
    setInteractMode: function (mode) {
      var _self = this;

      _self.interactMode = mode; //internal hepler
      _self.$elem.attr("data-mode", mode); //font end helper
    },

    createTabNav: function () {
      var _self = this,
        $nav = $("<ul>", {
          "class": "productSpecs__nav tab__nav" //ye olde css hook
        });

      _self.$content.each(function (index) {
        var $current = $(this),

          $buttonTab = $("<button>", {
            "text": _self.contentHeading[index],
            "class": _self.options.buttonClass + " " + _self.options.buttonClass + "--tab tab__nav__button" //need old css hook
          }),

          $li = $("<li>", {
            "class": "list__item"
          });

        _self.attachClickHandler($buttonTab, index, "fadeToggle");

        //wrap in the <li>
        // $buttonTab.wrap($li).prependTo($nav);
        $li.append($buttonTab);
        $nav.append($li);
      });

      //out of loop, only place nav once
      // $nav.insertBefore(_self.$elem);
      _self.$elem.prepend($nav);

      //cache my accordion btns
      _self.$buttonTab = _self.$elem.find("." + _self.options.buttonClass + "--tab"); //needs to be a class

    },

    createAccordionButton: function () {
      var _self = this,
        $icon = $("<i>", {
          //"class" : "icon-angle-down"
          "class": "fa fa-chevron-down"
        });

      //loop through content and create toggle buttons
      _self.$content.each(function (index) {
        var $current = $(this),
          $buttonAccordion = $("<button>", {
            // "text" : $current.find(".productSpecs__heading").text(),
            "text": _self.contentHeading[index],
            "class": _self.options.buttonClass + " " + _self.options.buttonClass + "--accordion accordion__toggle" // 1st is class to segment the tab from accord, second need old css hook
          });

        $icon.clone().prependTo($buttonAccordion)

        $buttonAccordion.insertBefore($current);

        //setup global click
        _self.attachClickHandler($buttonAccordion, index, "slideToggle");
      });

      //cache my accordion btns
      _self.$buttonAccordion = _self.$elem.find("." + _self.options.buttonClass + "--accordion"); //needs to be a class
      //_self.$iconAccordion = _self.$elem.find(".icon-angle-down");
      _self.$iconAccordion = _self.$elem.find(".fa-chevron-down");
    },

    //doesn't matter if we clicked tab nav or accorion button, we know index and sender
    attachClickHandler: function ($button, index, transition) {
      var _self = this;

      $button.on("click", function (event) {
        //nice catch for clicked or triggered
        (event) ? event.preventDefault() : console.log("was triggered");

        _self.toggleActiveContent(index, transition);
      });
    },

    //todo: can this be cleaned up better-er?
    toggleActiveContent: function (index, transition) {
      var _self = this,
        $activeContent = _self.$content.eq(index);

      if (_self.options.multipleOpen) {
        //i am in toggle mode
        if (!$activeContent.attr("data-active")) {
          $activeContent[transition]().attr("data-active", true);

          _self.$buttonAccordion.eq(index).addClass("active");
          _self.$buttonTab.eq(index).addClass("active");
        } else {
          $activeContent[transition]().removeAttr("data-active");

          _self.$buttonAccordion.eq(index).removeClass("active");
          _self.$buttonTab.eq(index).removeClass("active");
        }

      } else {
        //cannot click a guy who's open
        if ($activeContent.attr("data-active")) {
          return;

        } else {
          //hide all
          _self.$content.hide().removeAttr("data-active");
          _self.$buttonAccordion.removeClass("active");
          _self.$buttonTab.removeClass("active");
          //_self.$iconAccordion.attr("class", "icon-angle-down");
          _self.$iconAccordion.attr("class", "fa fa-chevron-down");

          $activeContent[transition]().attr("data-active", true);

          _self.$buttonAccordion.eq(index).addClass("active");
          _self.$buttonTab.eq(index).addClass("active");
          //_self.$iconAccordion.eq(index).attr("class", "icon-angle-up");
          _self.$iconAccordion.eq(index).attr("class", "fa").addClass("fa-chevron-up");
        }
      }
    }
  }

  $.fn.productSpecs = function (options) {
    //do each instance of the selector, returning so we can chain
    return this.each(function () {
      //sets up a new instance ja? MC: using "_" so i dont get confused with uppercase declaration
      _productSpecs = Object.create(productSpecs);
      _productSpecs.init(options, this);
    });

  };

  $.fn.productSpecs.options = {
    breakpoint: "960px",
    buttonClass: "productSpecs__toggle", //adds class clean to both, another with "--(tab | accordion)"
    multipleOpen: true,
    initialOpen: 0
  }
})(jQuery, window);