import './polyfills.server.mjs';
import{a as g}from"./chunk-IPD3UEGZ.mjs";import{a as w}from"./chunk-5QEIZD2C.mjs";import"./chunk-7MSKDCYT.mjs";import{$a as v,Ca as a,Fa as _,Ga as C,Ia as u,Ja as p,Lb as h,Mb as y,Na as m,Oa as s,Pa as d,R as f,ab as x,bb as F,sa as r,ta as l}from"./chunk-U45N2P26.mjs";import"./chunk-KRLCULJA.mjs";var $=(i,e)=>e.name;function S(i,e){if(i&1&&(m(0,"div",0),d(1,"app-furniture-item",1),s()),i&2){let o=e.$implicit,t=e.$index;r(1),a("furnitureItem",o)("index",t)}}function T(i,e){if(i&1&&(m(0,"div",0),d(1,"app-furniture-item",1),s()),i&2){let o=e.$implicit,t=e.$index;r(1),a("furnitureItem",o)("index",t)}}function I(i,e){i&1&&(u(0,S,2,2,"div",2,$),u(2,T,2,2,"div",2,$)),i&2&&(p(e.products),r(2),p(e.products))}var D=(()=>{let e=class e{constructor(t){this.furnitureService=t,this.furniture$=this.furnitureService.getAllFurniture()}};e.\u0275fac=function(n){return new(n||e)(l(w))},e.\u0275cmp=f({type:e,selectors:[["app-furniture-list"]],standalone:!0,features:[v],decls:2,vars:3,consts:[[1,"furniture-card"],[3,"furnitureItem","index"],["class","furniture-card"]],template:function(n,M){if(n&1&&(_(0,I,4,0),x(1,"async")),n&2){let c;C(0,(c=F(1,1,M.furniture$))?0:-1,c)}},dependencies:[y,h,g],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row}[_nghost-%COMP%]   .furniture-card[_ngcontent-%COMP%]{min-height:250px;min-width:250px;flex-shrink:1;flex-grow:0;margin:1em;flex-basis:30%;display:flex}"]});let i=e;return i})();export{D as FurnitureListComponent};
