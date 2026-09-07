"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var d=u(function(B,q){
var j=require('@stdlib/stats-strided-dmeanstdevpn/dist').ndarray;function l(e,r,a,n,t,i,s,v){return j(e,r,a,n,t,i,s,v)}q.exports=l
});var c=u(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=d();function E(e,r,a,n,t,i){var s=R(e,n),v=i>=0?0:-i;return _(e,r,a,n,s,t,i,v),t}m.exports=E
});var f=u(function(D,y){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),g=d();b(p,"ndarray",g);y.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=f(),o,x=k(h(__dirname,"./native.js"));w(x)?o=z:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
