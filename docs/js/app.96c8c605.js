(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],h=0,d=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"centeralign",staticStyle:{height:"80%"}},[n("NotationRenderer",{directives:[{name:"show",rawName:"v-show",value:t.showNotation,expression:"showNotation"}]})],1),n("div",{staticClass:"centeralign",staticStyle:{height:"20%"},attrs:{id:"bottomalign"}},[n("div",{staticClass:"break"}),n("div",{staticClass:"button-grid"},[n("button",{staticClass:"reroll",on:{click:function(e){return t.refreshlock("C")}}},[t._v("C")]),n("button",{staticClass:"reroll",on:{click:function(e){return t.refreshlock("D")}}},[t._v("D")]),n("button",{staticClass:"reroll",on:{click:function(e){return t.refreshlock("E")}}},[t._v("E")]),n("button",{staticClass:"reroll",on:{click:function(e){return t.refreshlock("F")}}},[t._v("F")]),n("button",{staticClass:"reroll",on:{click:function(e){return t.refreshlock("G")}}},[t._v("G")]),n("button",{staticClass:"reroll",on:{click:function(e){return t.refreshlock("A")}}},[t._v("A")]),n("button",{staticClass:"reroll",on:{click:function(e){return t.refreshlock("B")}}},[t._v("B")])]),n("span",{staticClass:"options"},[t._v(" Enable Note Renderer:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.showNotation,expression:"showNotation"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showNotation)?t._i(t.showNotation,null)>-1:t.showNotation},on:{change:function(e){var n=t.showNotation,o=e.target,r=!!o.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);o.checked?s<0&&(t.showNotation=n.concat([a])):s>-1&&(t.showNotation=n.slice(0,s).concat(n.slice(s+1)))}else t.showNotation=r}}}),t._v(" Enable Synthesiser:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.playSynth,expression:"playSynth"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.playSynth)?t._i(t.playSynth,null)>-1:t.playSynth},on:{change:function(e){var n=t.playSynth,o=e.target,r=!!o.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);o.checked?s<0&&(t.playSynth=n.concat([a])):s>-1&&(t.playSynth=n.slice(0,s).concat(n.slice(s+1)))}else t.playSynth=r}}})])])])},a=[],s=(n("4160"),n("9e67")),i=n.n(s),c=n("8cc4"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"notation"}})},u=[],h=n("f8c0"),d=(h["a"].Flow,{name:"NotationRenderer",props:{},data:function(){return{}},mounted:function(){},methods:{}}),p=d,f=(n("cf64"),n("2877")),v=Object(f["a"])(p,l,u,!1,null,null,null),y=v.exports,b=h["a"].Flow,m={name:"App",components:{NotationRenderer:y},props:{},data:function(){return{possibleNotes:[],indexOfArray:0,randomchars:[],showNotation:!0,playSynth:!0}},mounted:function(){var t=this;[3,4,5,6].forEach((function(e){t.$data.possibleNotes.push({noteLetter:"C",octave:e}),t.$data.possibleNotes.push({noteLetter:"D",octave:e}),t.$data.possibleNotes.push({noteLetter:"E",octave:e}),t.$data.possibleNotes.push({noteLetter:"F",octave:e}),t.$data.possibleNotes.push({noteLetter:"G",octave:e}),t.$data.possibleNotes.push({noteLetter:"A",octave:e}),t.$data.possibleNotes.push({noteLetter:"B",octave:e})})),console.log(this.$data.possibleNotes),this.refresh()},methods:{refresh:function(){var t=(new c["Synth"]).toMaster(),e=document.querySelector("svg");null!=e&&e.parentNode.removeChild(e);var n=this.$data.possibleNotes[this.randomiser()];this.$data.randomchars.push(n.noteLetter),this.$data.playSynth&&t.triggerAttackRelease(n.noteLetter+n.octave,"4n"),console.log(this.$data.randomchars);var o=[new b.StaveNote({clef:"treble",keys:[n.noteLetter+"/"+n.octave],duration:"q"})],r=document.getElementById("notation"),a=new b.Renderer(r,b.Renderer.Backends.SVG);a.resize(100*o.length+20,200);var s=a.getContext(),i=new b.Stave(10,20,100*o.length);i.addClef("treble"),i.setContext(s).draw();var l=new b.Voice({num_beats:o.length,beat_value:4});l.addTickables(o);(new b.Formatter).joinVoices([l]).format([l],100*o.length);l.draw(s,i)},refreshlock:function(t){console.log(this.$data.randomchars),this.$data.randomchars[this.$data.indexOfArray]==t&&(console.log("correct"),this.refresh(),this.$data.indexOfArray++)},randomiser:function(t){var e=new i.a;return e.integer({min:3,max:this.$data.possibleNotes.length})}}},w=m,g=(n("7c55"),Object(f["a"])(w,r,a,!1,null,null,null)),N=g.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(N)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";var o=n("2395"),r=n.n(o);r.a},a66c:function(t,e,n){},cf64:function(t,e,n){"use strict";var o=n("a66c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.96c8c605.js.map