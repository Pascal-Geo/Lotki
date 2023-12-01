!function(){"use strict";var t={509:function(t,n,e){var r=e(9985),o=e(3691),i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not a function")}},5027:function(t,n,e){var r=e(8999),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not an object")}},7612:function(t,n,e){var r=e(2960).forEach,o=e(6834)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4328:function(t,n,e){var r=e(5290),o=e(7578),i=e(6310),c=function(t){return function(n,e,c){var u,a=r(n),s=i(a),f=o(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2960:function(t,n,e){var r=e(4071),o=e(8844),i=e(4413),c=e(690),u=e(6310),a=e(7120),s=o([].push),f=function(t){var n=1===t,e=2===t,o=3===t,f=4===t,l=6===t,p=7===t,v=5===t||l;return function(d,y,m,b){for(var g,h,x=c(d),S=i(x),w=r(y,m),L=u(S),O=0,j=b||a,E=n?j(d,L):e||p?j(d,0):void 0;L>O;O++)if((v||O in S)&&(h=w(g=S[O],O,x),t))if(n)E[O]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:s(E,g)}else switch(t){case 4:return!1;case 7:s(E,g)}return l?-1:o||f?f:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9042:function(t,n,e){var r=e(3689),o=e(4201),i=e(3615),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},6834:function(t,n,e){var r=e(3689);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){return 1},1)}))}},6004:function(t,n,e){var r=e(8844);t.exports=r([].slice)},5271:function(t,n,e){var r=e(2297),o=e(9429),i=e(8999),c=e(4201)("species"),u=Array;t.exports=function(t){var n;return r(t)&&(n=t.constructor,(o(n)&&(n===u||r(n.prototype))||i(n)&&null===(n=n[c]))&&(n=void 0)),void 0===n?u:n}},7120:function(t,n,e){var r=e(5271);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},6648:function(t,n,e){var r=e(8844),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},926:function(t,n,e){var r=e(3043),o=e(9985),i=e(6648),c=e(4201)("toStringTag"),u=Object,a="Arguments"===i(function(){return arguments}());t.exports=r?i:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=u(t),c))?e:a?i(n):"Object"===(r=i(n))&&o(n.callee)?"Arguments":r}},8758:function(t,n,e){var r=e(6812),o=e(9152),i=e(2474),c=e(2560);t.exports=function(t,n,e){for(var u=o(n),a=c.f,s=i.f,f=0;f<u.length;f++){var l=u[f];r(t,l)||e&&r(e,l)||a(t,l,s(n,l))}}},5773:function(t,n,e){var r=e(7697),o=e(2560),i=e(5684);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},5684:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6522:function(t,n,e){var r=e(8360),o=e(2560),i=e(5684);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},1880:function(t,n,e){var r=e(9985),o=e(2560),i=e(8702),c=e(5014);t.exports=function(t,n,e,u){u||(u={});var a=u.enumerable,s=void 0!==u.name?u.name:n;if(r(e)&&i(e,s,u),u.global)a?t[n]=e:c(n,e);else{try{u.unsafe?t[n]&&(a=!0):delete t[n]}catch(t){}a?t[n]=e:o.f(t,n,{value:e,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},5014:function(t,n,e){var r=e(9037),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},7697:function(t,n,e){var r=e(3689);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(t){var n="object"==typeof document&&document.all,e=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:e}},6420:function(t,n,e){var r=e(9037),o=e(8999),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},6338:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},3265:function(t,n,e){var r=e(6420)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},71:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(t,n,e){var r,o,i=e(9037),c=e(71),u=i.process,a=i.Deno,s=u&&u.versions||a&&a.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,n,e){var r=e(9037),o=e(2474).f,i=e(5773),c=e(1880),u=e(5014),a=e(8758),s=e(5266);t.exports=function(t,n){var e,f,l,p,v,d=t.target,y=t.global,m=t.stat;if(e=y?r:m?r[d]||u(d,{}):(r[d]||{}).prototype)for(f in n){if(p=n[f],l=t.dontCallGetSet?(v=o(e,f))&&v.value:e[f],!s(y?f:d+(m?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},3689:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4071:function(t,n,e){var r=e(6576),o=e(509),i=e(7215),c=r(r.bind);t.exports=function(t,n){return o(t),void 0===n?t:i?c(t,n):function(){return t.apply(n,arguments)}}},7215:function(t,n,e){var r=e(3689);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:function(t,n,e){var r=e(7215),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1236:function(t,n,e){var r=e(7697),o=e(6812),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,s=u&&(!r||r&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:s}},6576:function(t,n,e){var r=e(6648),o=e(8844);t.exports=function(t){if("Function"===r(t))return o(t)}},8844:function(t,n,e){var r=e(7215),o=Function.prototype,i=o.call,c=r&&o.bind.bind(i,i);t.exports=r?c:function(t){return function(){return i.apply(t,arguments)}}},6058:function(t,n,e){var r=e(9037),o=e(9985);t.exports=function(t,n){return arguments.length<2?(e=r[t],o(e)?e:void 0):r[t]&&r[t][n];var e}},4849:function(t,n,e){var r=e(509),o=e(981);t.exports=function(t,n){var e=t[n];return o(e)?void 0:r(e)}},9037:function(t,n,e){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(t,n,e){var r=e(8844),o=e(690),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},7248:function(t){t.exports={}},8506:function(t,n,e){var r=e(7697),o=e(3689),i=e(6420);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(t,n,e){var r=e(8844),o=e(3689),i=e(6648),c=Object,u=r("".split);t.exports=o((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?u(t,""):c(t)}:c},6738:function(t,n,e){var r=e(8844),o=e(9985),i=e(4091),c=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},618:function(t,n,e){var r,o,i,c=e(9834),u=e(9037),a=e(8999),s=e(5773),f=e(6812),l=e(4091),p=e(2713),v=e(7248),d="Object already initialized",y=u.TypeError,m=u.WeakMap;if(c||l.state){var b=l.state||(l.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,n){if(b.has(t))throw new y(d);return n.facade=t,b.set(t,n),n},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var g=p("state");v[g]=!0,r=function(t,n){if(f(t,g))throw new y(d);return n.facade=t,s(t,g,n),n},o=function(t){return f(t,g)?t[g]:{}},i=function(t){return f(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw new y("Incompatible receiver, "+t+" required");return e}}}},2297:function(t,n,e){var r=e(6648);t.exports=Array.isArray||function(t){return"Array"===r(t)}},9985:function(t,n,e){var r=e(2659),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},9429:function(t,n,e){var r=e(8844),o=e(3689),i=e(9985),c=e(926),u=e(6058),a=e(6738),s=function(){},f=[],l=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=r(p.exec),d=!p.test(s),y=function(t){if(!i(t))return!1;try{return l(s,f,t),!0}catch(t){return!1}},m=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,a(t))}catch(t){return!0}};m.sham=!0,t.exports=!l||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?m:y},5266:function(t,n,e){var r=e(3689),o=e(9985),i=/#|\.prototype\./,c=function(t,n){var e=a[u(t)];return e===f||e!==s&&(o(n)?r(n):!!n)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},s=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},981:function(t){t.exports=function(t){return null==t}},8999:function(t,n,e){var r=e(9985),o=e(2659),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},3931:function(t){t.exports=!1},734:function(t,n,e){var r=e(6058),o=e(9985),i=e(3622),c=e(9525),u=Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return o(n)&&i(n.prototype,u(t))}},6310:function(t,n,e){var r=e(3126);t.exports=function(t){return r(t.length)}},8702:function(t,n,e){var r=e(8844),o=e(3689),i=e(9985),c=e(6812),u=e(7697),a=e(1236).CONFIGURABLE,s=e(6738),f=e(618),l=f.enforce,p=f.get,v=String,d=Object.defineProperty,y=r("".slice),m=r("".replace),b=r([].join),g=u&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),h=String(String).split("String"),x=t.exports=function(t,n,e){"Symbol("===y(v(n),0,7)&&(n="["+m(v(n),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(n="get "+n),e&&e.setter&&(n="set "+n),(!c(t,"name")||a&&t.name!==n)&&(u?d(t,"name",{value:n,configurable:!0}):t.name=n),g&&e&&c(e,"arity")&&t.length!==e.arity&&d(t,"length",{value:e.arity});try{e&&c(e,"constructor")&&e.constructor?u&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=l(t);return c(r,"source")||(r.source=b(h,"string"==typeof n?n:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||s(this)}),"toString")},8828:function(t){var n=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?e:n)(r)}},2560:function(t,n,e){var r=e(7697),o=e(8506),i=e(5648),c=e(5027),u=e(8360),a=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";n.f=r?i?function(t,n,e){if(c(t),n=u(n),c(e),"function"==typeof t&&"prototype"===n&&"value"in e&&v in e&&!e[v]){var r=f(t,n);r&&r[v]&&(t[n]=e.value,e={configurable:p in e?e[p]:r[p],enumerable:l in e?e[l]:r[l],writable:!1})}return s(t,n,e)}:s:function(t,n,e){if(c(t),n=u(n),c(e),o)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw new a("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},2474:function(t,n,e){var r=e(7697),o=e(2615),i=e(9556),c=e(5684),u=e(5290),a=e(8360),s=e(6812),f=e(8506),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=u(t),n=a(n),f)try{return l(t,n)}catch(t){}if(s(t,n))return c(!o(i.f,t,n),t[n])}},2741:function(t,n,e){var r=e(4948),o=e(2739).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},7518:function(t,n){n.f=Object.getOwnPropertySymbols},3622:function(t,n,e){var r=e(8844);t.exports=r({}.isPrototypeOf)},4948:function(t,n,e){var r=e(8844),o=e(6812),i=e(5290),c=e(4328).indexOf,u=e(7248),a=r([].push);t.exports=function(t,n){var e,r=i(t),s=0,f=[];for(e in r)!o(u,e)&&o(r,e)&&a(f,e);for(;n.length>s;)o(r,e=n[s++])&&(~c(f,e)||a(f,e));return f}},9556:function(t,n){var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},5073:function(t,n,e){var r=e(3043),o=e(926);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},5899:function(t,n,e){var r=e(2615),o=e(9985),i=e(8999),c=TypeError;t.exports=function(t,n){var e,u;if("string"===n&&o(e=t.toString)&&!i(u=r(e,t)))return u;if(o(e=t.valueOf)&&!i(u=r(e,t)))return u;if("string"!==n&&o(e=t.toString)&&!i(u=r(e,t)))return u;throw new c("Can't convert object to primitive value")}},9152:function(t,n,e){var r=e(6058),o=e(8844),i=e(2741),c=e(7518),u=e(5027),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(u(t)),e=c.f;return e?a(n,e(t)):n}},4684:function(t,n,e){var r=e(981),o=TypeError;t.exports=function(t){if(r(t))throw new o("Can't call method on "+t);return t}},2713:function(t,n,e){var r=e(3430),o=e(4630),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4091:function(t,n,e){var r=e(9037),o=e(5014),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},3430:function(t,n,e){var r=e(3931),o=e(4091);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.33.3",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(t,n,e){var r=e(3615),o=e(3689),i=e(9037).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(t,n,e){var r=e(8700),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5290:function(t,n,e){var r=e(4413),o=e(4684);t.exports=function(t){return r(o(t))}},8700:function(t,n,e){var r=e(8828);t.exports=function(t){var n=+t;return n!=n||0===n?0:r(n)}},3126:function(t,n,e){var r=e(8700),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},690:function(t,n,e){var r=e(4684),o=Object;t.exports=function(t){return o(r(t))}},8732:function(t,n,e){var r=e(2615),o=e(8999),i=e(734),c=e(4849),u=e(5899),a=e(4201),s=TypeError,f=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var e,a=c(t,f);if(a){if(void 0===n&&(n="default"),e=r(a,t,n),!o(e)||i(e))return e;throw new s("Can't convert object to primitive value")}return void 0===n&&(n="number"),u(t,n)}},8360:function(t,n,e){var r=e(8732),o=e(734);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},3043:function(t,n,e){var r={};r[e(4201)("toStringTag")]="z",t.exports="[object z]"===String(r)},3691:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},4630:function(t,n,e){var r=e(8844),o=0,i=Math.random(),c=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},9525:function(t,n,e){var r=e(146);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(t,n,e){var r=e(7697),o=e(3689);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(t,n,e){var r=e(9037),o=e(9985),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},4201:function(t,n,e){var r=e(9037),o=e(3430),i=e(6812),c=e(4630),u=e(146),a=e(9525),s=r.Symbol,f=o("wks"),l=a?s.for||s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(f[t]=u&&i(s,t)?s[t]:l("Symbol."+t)),f[t]}},9730:function(t,n,e){var r=e(9989),o=e(2297),i=e(9429),c=e(8999),u=e(7578),a=e(6310),s=e(5290),f=e(6522),l=e(4201),p=e(9042),v=e(6004),d=p("slice"),y=l("species"),m=Array,b=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,n){var e,r,l,p=s(this),d=a(p),g=u(t,d),h=u(void 0===n?d:n,d);if(o(p)&&(e=p.constructor,(i(e)&&(e===m||o(e.prototype))||c(e)&&null===(e=e[y]))&&(e=void 0),e===m||void 0===e))return v(p,g,h);for(r=new(void 0===e?m:e)(b(h-g,0)),l=0;g<h;g++,l++)g in p&&f(r,l,p[g]);return r.length=l,r}})},228:function(t,n,e){var r=e(3043),o=e(1880),i=e(5073);r||o(Object.prototype,"toString",i,{unsafe:!0})},7522:function(t,n,e){var r=e(9037),o=e(6338),i=e(3265),c=e(7612),u=e(5773),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(n){t.forEach=c}};for(var s in o)o[s]&&a(r[s]&&r[s].prototype);a(i)}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r].call(i.exports,i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){e(228),e(7522),e(9730);window.addEventListener("DOMContentLoaded",(function(){var t,n,e,r,o,i,c,u,a,s,f,l,p;t={mask:"+{7}(000)000-00-00"},(n=document.querySelectorAll("[data-phone]"))&&n.forEach((function(n){IMask(n,t)})),c=".menu__submenu",u=".menu__submenu__toggle-menu",a=".menu__submenu__arrow",s=".menu__submenu__toggle-menu__item",f=document.querySelector(c),l=document.querySelector(u),p=document.querySelector(a),window.addEventListener("click",(function(t){t.target&&t.target.parentNode==f&&(t.preventDefault(),l.classList.toggle("hide"),l.classList.toggle("active"),p.classList.toggle("active-arrow")),t.target.classList.contains(s.slice(1))&&(l.classList.add("hide"),l.classList.remove("active"),p.classList.remove("active-arrow")),l.classList.contains("active")&&t.target.parentNode!=f&&!t.target.classList.contains(s.slice(1))&&(l.classList.add("hide"),l.classList.remove("active"),p.classList.remove("active-arrow"))})),function(t,n,e){var r=document.querySelector(t),o=document.querySelector(n),i=document.querySelector(e);r.addEventListener("click",(function(){o.classList.remove("hide-mobile")})),i.addEventListener("click",(function(){o.classList.add("hide-mobile")}))}(".mobile-btn",".mobile-menu",".mobile-menu__close"),e=".header-bottom",r=".header-top",o=document.querySelector(e),i=document.querySelector(r),window.addEventListener("scroll",(function(){window.scrollY>50||window.screenY>50?(o.style.padding="20px 0",o.style.boxShadow="0 2px 2px #9b9b9b",i.style.padding="0 0"):(o.style.padding="50px 0",o.style.boxShadow="none",i.style.padding="15px 0")})),function(t,n,e){var r=document.querySelector(t),o=document.querySelector(n),i=document.querySelector(e);r.addEventListener("click",(function(){o.classList.add("modal-active"),document.body.style.overflow="hidden"})),o.addEventListener("click",(function(t){t.target&&t.target==o&&(o.classList.remove("modal-active"),document.body.style.overflow="")})),i.addEventListener("click",(function(){o.classList.remove("modal-active"),document.body.style.overflow=""}))}(".header-btn",".modal",".modal__window__close")}))}()}();