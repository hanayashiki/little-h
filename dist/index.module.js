function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r=void 0,n=0,o=function(t,e){void 0===e&&(e={});var r=[].slice.call(arguments,2);return"string"==typeof t?l.apply(void 0,[t,e].concat(i(r))):u.apply(void 0,[t,e].concat(i(r)))},i=function(t){return t.map(function(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t?a(String(t)):t})},a=function(t){return{type:"Text",text:t,render:function(){return document.createTextNode(t)}}},l=function(t,r){void 0===r&&(r={});var n=[].slice.call(arguments,2);return{tag:t,type:"HtmlElement",props:r,children:n,render:function(){for(var o,i=document.createElement(t),a=e(n);!(o=a()).done;){var l=o.value;l&&i.appendChild(l.render())}return Object.keys(r).forEach(function(t){"ref"===t?r[t].current=i:t.startsWith("on")?i.addEventListener(t.slice(2).toLowerCase(),r[t]):i.setAttribute(t,r[t])}),i}}},u=function(t,e){return void 0===e&&(e={}),{type:"ComponentElement",props:e,slots:[],effects:[],children:i([].slice.call(arguments,2)),render:function(){var o=r;n=0,r=this;var i,a=t(e);try{i=a.render()}finally{this.effects.forEach(function(t){return window.requestIdleCallback(t)}),r=o}return i},useSlot:function(){var t=this,e=n++;return e>=this.slots.length&&(this.slots[e]=void 0),{slot:this.slots[e],setSlot:function(r){t.slots[e]=r}}}}},c=function(t){var e=r.useSlot(),n=e.slot;if(void 0===n){var o={current:t};return(0,e.setSlot)(o),o}return n},s=function(t,e){r.effects.push(t)};export{o as h,s as useEffect,c as useRef};
//# sourceMappingURL=index.module.js.map
