(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],h=0,p=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e00":function(e,t,n){},2338:function(e,t,n){},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("button",{staticClass:"wrapper-button",on:{click:function(t){e.showHelp=!0}}},[n("span",{staticClass:"mdi mdi-help-circle"})]),n("transition",{attrs:{name:"fade"}},[e.showHelp?n("Help",{model:{value:e.showHelp,callback:function(t){e.showHelp=t},expression:"showHelp"}}):e._e()],1),n("PWASupport"),n("transition",{attrs:{name:"settings-transition"}},[n("SettingsModal",{directives:[{name:"show",rawName:"v-show",value:e.showSettings,expression:"showSettings"}],attrs:{showSettings:e.showSettings},on:{"update:showSettings":function(t){e.showSettings=t},"update:show-settings":function(t){e.showSettings=t}}})],1),n("div",{staticClass:"centeralign",staticStyle:{height:"83%"}},[n("NotationRenderer",{directives:[{name:"show",rawName:"v-show",value:e.showNotation,expression:"showNotation"}]})],1),n("div",{staticClass:"centeralign",staticStyle:{height:"17%"},attrs:{id:"bottomalign"}},[n("div",{staticClass:"break"}),n("div",{staticClass:"button-grid"},[n("button",{staticClass:"reroll",on:{click:function(t){return e.refreshlock("C")}}},[e._v("C")]),n("button",{staticClass:"reroll",on:{click:function(t){return e.refreshlock("D")}}},[e._v("D")]),n("button",{staticClass:"reroll",on:{click:function(t){return e.refreshlock("E")}}},[e._v("E")]),n("button",{staticClass:"reroll",on:{click:function(t){return e.refreshlock("F")}}},[e._v("F")]),n("button",{staticClass:"reroll",on:{click:function(t){return e.refreshlock("G")}}},[e._v("G")]),n("button",{staticClass:"reroll",on:{click:function(t){return e.refreshlock("A")}}},[e._v("A")]),n("button",{staticClass:"reroll",on:{click:function(t){return e.refreshlock("B")}}},[e._v("B")])]),n("button",{staticClass:"mobile-options",on:{click:function(t){e.showSettings=!0}}},[n("span",{staticClass:"mdi mdi-cog"})]),n("div",{staticClass:"options"},[n("div",[e._v("Enable Note Renderer:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.showNotation,expression:"showNotation"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showNotation)?e._i(e.showNotation,null)>-1:e.showNotation},on:{change:function(t){var n=e.showNotation,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.showNotation=n.concat([r])):s>-1&&(e.showNotation=n.slice(0,s).concat(n.slice(s+1)))}else e.showNotation=o}}})]),n("div",[e._v("Enable Synthesiser:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.playSynth,expression:"playSynth"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.playSynth)?e._i(e.playSynth,null)>-1:e.playSynth},on:{change:function(t){var n=e.playSynth,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.playSynth=n.concat([r])):s>-1&&(e.playSynth=n.slice(0,s).concat(n.slice(s+1)))}else e.playSynth=o}}})]),n("div",[e._v("Enable Treble Clef:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enableTreble,expression:"enableTreble"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enableTreble)?e._i(e.enableTreble,null)>-1:e.enableTreble},on:{change:function(t){var n=e.enableTreble,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.enableTreble=n.concat([r])):s>-1&&(e.enableTreble=n.slice(0,s).concat(n.slice(s+1)))}else e.enableTreble=o}}})]),n("div",[e._v("Enable Bass Clef:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enableBass,expression:"enableBass"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enableBass)?e._i(e.enableBass,null)>-1:e.enableBass},on:{change:function(t){var n=e.enableBass,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.enableBass=n.concat([r])):s>-1&&(e.enableBass=n.slice(0,s).concat(n.slice(s+1)))}else e.enableBass=o}}})])])])],1)},r=[],s=(n("99af"),n("4160"),n("2909")),i=(n("96cf"),n("1da1")),l=(n("5363"),n("9e67")),c=n.n(l),u=n("8cc4"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},p=[],d={name:"PWASupport",metaInfo:{link:[{rel:"apple-touch-icon",href:"<%= BASE_URL %>apple-touch-icon.png"}],title:"Note Trainer",meta:[{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"apple-mobile-web-app-title",content:"Note Trainer"}]},props:{},data:function(){return{}},mounted:function(){},methods:{}},b=d,f=n("2877"),v=Object(f["a"])(b,h,p,!1,null,null,null),m=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"notation"}})},w=[],g={name:"NotationRenderer",props:{},data:function(){return{}},mounted:function(){},methods:{}},k=g,N=(n("ac3e"),Object(f["a"])(k,y,w,!1,null,null,null)),S=N.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings-screen"}},[n("div",{staticClass:"options"},[e._v("Enable Note Renderer:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.showNotation,expression:"showNotation"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showNotation)?e._i(e.showNotation,null)>-1:e.showNotation},on:{input:function(t){return e.$parent.$emit("showNotation",t.target.checked)},change:function(t){var n=e.showNotation,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.showNotation=n.concat([r])):s>-1&&(e.showNotation=n.slice(0,s).concat(n.slice(s+1)))}else e.showNotation=o}}})]),n("div",{staticClass:"options"},[e._v("Enable Synthesiser:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.playSynth,expression:"playSynth"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.playSynth)?e._i(e.playSynth,null)>-1:e.playSynth},on:{input:function(t){return e.$parent.$emit("playSynth",t.target.checked)},change:function(t){var n=e.playSynth,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.playSynth=n.concat([r])):s>-1&&(e.playSynth=n.slice(0,s).concat(n.slice(s+1)))}else e.playSynth=o}}})]),n("div",{staticClass:"options"},[e._v("Enable Treble Clef:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enableTreble,expression:"enableTreble"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enableTreble)?e._i(e.enableTreble,null)>-1:e.enableTreble},on:{input:function(t){return e.$parent.$emit("enableTreble",t.target.checked)},change:function(t){var n=e.enableTreble,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.enableTreble=n.concat([r])):s>-1&&(e.enableTreble=n.slice(0,s).concat(n.slice(s+1)))}else e.enableTreble=o}}})]),n("div",{staticClass:"options"},[e._v("Enable Bass Clef:"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enableBass,expression:"enableBass"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enableBass)?e._i(e.enableBass,null)>-1:e.enableBass},on:{input:function(t){return e.$parent.$emit("enableBass",t.target.checked)},change:function(t){var n=e.enableBass,a=t.target,o=!!a.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);a.checked?s<0&&(e.enableBass=n.concat([r])):s>-1&&(e.enableBass=n.slice(0,s).concat(n.slice(s+1)))}else e.enableBass=o}}})]),n("button",{staticClass:"options",on:{click:function(t){return e.$emit("update:showSettings",!1)}}},[e._v("Done"),n("div",{staticClass:"break"}),n("span",{staticClass:"mdi mdi-chevron-down"})])])},$=[],A=n("f8c0"),x=(A["a"].Flow,{name:"NotationRenderer",props:{},data:function(){return{enableTreble:this.$parent.enableTreble,enableBass:this.$parent.enableBass,showNotation:this.$parent.showNotation,playSynth:this.$parent.playSynth,showSettings:this.$parent.showSettings}},mounted:function(){},methods:{emit:function(e){this.$parent.$emit("settingsClicked",e)}}}),C=x,B=(n("ebb3"),Object(f["a"])(C,_,$,!1,null,null,null)),T=B.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{attrs:{id:"help"}},[n("div",{staticClass:"modal"},[n("span",{staticClass:"help-text"},[e._v(' Click on the note button ("C", "D", etc.) that corresponds with the note displayed.')]),n("button",{attrs:{type:e.type,value:e.value},on:{click:function(t){return e.$emit("input",!1)}}},[n("span",{staticClass:"mdi mdi-arrow-left-bold"})])])])])},E=[],j={name:"Help",props:{type:{default:function(){return"text"}},value:{}},data:function(){return{}},mounted:function(){},methods:{}},P=j,R=(n("d286"),Object(f["a"])(P,O,E,!1,null,null,null)),L=R.exports,H=A["a"].Flow,M={name:"App",components:{PWASupport:m,NotationRenderer:S,SettingsModal:T,Help:L},props:{},data:function(){return{possibleNotes:[],indexOfArray:0,randomchars:[],enableTreble:!0,enableBass:!0,showNotation:!0,playSynth:!0,showSettings:!1,showHelp:!1}},mounted:function(){var e=this;[1,2,3,4,5,6,7,8,9].forEach((function(t){e.$data.possibleNotes.push({noteLetter:"C",octave:t}),e.$data.possibleNotes.push({noteLetter:"D",octave:t}),e.$data.possibleNotes.push({noteLetter:"E",octave:t}),e.$data.possibleNotes.push({noteLetter:"F",octave:t}),e.$data.possibleNotes.push({noteLetter:"G",octave:t}),e.$data.possibleNotes.push({noteLetter:"A",octave:t}),e.$data.possibleNotes.push({noteLetter:"B",octave:t})})),this.$on("enableTreble",(function(e){this.$data.enableTreble=e})),this.$on("enableBass",(function(e){this.$data.enableBass=e})),this.$on("showNotation",(function(e){this.$data.showNotation=e})),this.$on("playSynth",(function(e){this.$data.playSynth=e})),this.refresh()},methods:{refresh:function(){var e=this,t=(new u["Synth"]).toMaster(),n=document.querySelector("svg");null!=n&&n.parentNode.removeChild(n),this.randomiser().then((function(n){var a=e.$data.possibleNotes[n.randomNoteIndex],o=n.randomclef;e.$data.randomchars.push(a.noteLetter),e.$data.playSynth&&t.triggerAttackRelease(a.noteLetter+a.octave,"4n");var r=[new H.StaveNote({clef:o,keys:[a.noteLetter+"/"+a.octave],duration:"q"})],s=document.getElementById("notation"),i=new H.Renderer(s,H.Renderer.Backends.SVG);i.resize(100*r.length+20,300);var l=i.getContext(),c=new H.Stave(10,20,100*r.length);c.addClef(o),c.setContext(l).draw();var u=new H.Voice({num_beats:r.length,beat_value:4});u.addTickables(r);(new H.Formatter).joinVoices([u]).format([u],100*r.length);u.draw(l,c)}))},refreshlock:function(e){console.log(this.$data.randomchars),this.$data.randomchars[this.$data.indexOfArray]==e&&(console.log("correct"),this.refresh(),this.$data.indexOfArray++)},randomiser:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,o,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=new c.a,a=[].concat(Object(s["a"])(this.$data.enableTreble?["treble"]:[]),Object(s["a"])(this.$data.enableBass?["bass"]:[])),0==a.length&&(a=["treble","bass"]),o=a[n.integer({min:0,max:a.length-1})],e.t0=o,e.next="bass"===e.t0?7:"treble"===e.t0?11:14;break;case 7:return console.log("bass"),r=9,i=21,e.abrupt("break",14);case 11:console.log("treble"),r=19,i=35;case 14:return e.abrupt("return",{randomNoteIndex:n.integer({min:r,max:i}),randomclef:o});case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},F=M,D=(n("7c55"),Object(f["a"])(F,o,r,!1,null,null,null)),G=D.exports,I=n("58ca");a["a"].use(I["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(G)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var a=n("2395"),o=n.n(a);o.a},8944:function(e,t,n){},ac3e:function(e,t,n){"use strict";var a=n("2338"),o=n.n(a);o.a},d286:function(e,t,n){"use strict";var a=n("1e00"),o=n.n(a);o.a},ebb3:function(e,t,n){"use strict";var a=n("8944"),o=n.n(a);o.a}});
//# sourceMappingURL=app.d1ffc173.js.map