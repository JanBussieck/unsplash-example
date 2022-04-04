var LUX=LUX||{};LUX.customerid="140493345";LUX.samplerate=3;!function(){"use strict";function e(){return Date.now?Date.now():+new Date}var t=e();function n(e,t,n){return void 0!==e[t]?e[t]:n}var r=1,o=2,i=3,a=4,c=5,u=6,s=7,d=8,f=21,l=22,m=23,v=24,g=25,p=26,h=51,y=52,E=53,w=54,T=55,b=56,k=57,S=71,M=72,U=function(){function e(){this.events=[]}return e.prototype.logEvent=function(e,t){void 0===t&&(t=[]),this.events.push([Number(new Date),e,t])},e.prototype.getEvents=function(){return this.events},e}(),L=1,x=2,B=4,N=8,I=16,C=64,P=128,D=256;function j(e,t){return e|t}var O=window.LUX||{};O=function(){var R,X,_="300",F=new U,W={auto:X=n(R=O,"auto",!0),beaconUrl:n(R,"beaconUrl","https://lux.speedcurve.com/lux/"),customerid:n(R,"customerid",void 0),debug:n(R,"debug",!1),errorBeaconUrl:n(R,"errorBeaconUrl","https://lux.speedcurve.com/error/"),jspagelabel:n(R,"jspagelabel",void 0),label:n(R,"label",void 0),maxErrors:n(R,"maxErrors",5),maxMeasureTime:n(R,"maxMeasureTime",6e4),measureUntil:n(R,"measureUntil","onload"),samplerate:n(R,"samplerate",100),sendBeaconOnPageHidden:n(R,"sendBeaconOnPageHidden",X),trackErrors:n(R,"trackErrors",!0)};F.logEvent(r,[_]);var G=0;function q(e){W.trackErrors&&(G++,e&&void 0!==e.filename&&void 0!==e.message&&(-1!==e.filename.indexOf("/lux.js?")||-1!==e.message.indexOf("LUX")||G<=W.maxErrors&&Se())&&((new Image).src=W.errorBeaconUrl+"?v="+"300&id="+Ne()+"&fn="+encodeURIComponent(e.filename)+"&ln="+e.lineno+"&cn="+e.colno+"&msg="+encodeURIComponent(e.message)+"&l="+encodeURIComponent(Ze())+(De()?"&ct="+De():"")+"&HN="+encodeURIComponent(document.location.hostname)+"&PN="+encodeURIComponent(document.location.pathname)))}window.addEventListener("error",q);var z=("object"==typeof window.LUX_al?window.LUX_al:[]).slice();if("function"==typeof PerformanceObserver){var A=new PerformanceObserver((function(e){e.getEntries().forEach((function(e){"longtask"===e.entryType&&-1!==z.indexOf(e)||z.push(e)}))}));try{"function"==typeof PerformanceLongTaskTiming&&A.observe({type:"longtask",buffered:!0}),"function"==typeof LargestContentfulPaint&&A.observe({type:"largest-contentful-paint",buffered:!0}),"function"==typeof PerformanceElementTiming&&A.observe({type:"element",buffered:!0}),"function"==typeof PerformancePaintTiming&&A.observe({type:"paint",buffered:!0}),"function"==typeof LayoutShift&&A.observe({type:"layout-shift",buffered:!0})}catch(e){F.logEvent(h,[e])}}var J,Y=0,K=void 0!==O.gaMarks?O.gaMarks:[],Q=void 0!==O.gaMeasures?O.gaMeasures:[],V={},Z={},$=0,ee=0,te=0,ne=1,re="LUX_start",oe="LUX_end",ie=Ke(),ae=Qe(ie),ce=window.performance,ue=8190;Se()?F.logEvent(f,[W.samplerate]):F.logEvent(l,[W.samplerate]);var se,de=O.ns?O.ns:e(),fe=0;ce&&ce.timing&&ce.timing.navigationStart?(de=ce.timing.navigationStart,fe=O.ns?O.ns-de:0):(F.logEvent(S),Y=j(Y,x));var le,me=["click","mousedown","keydown","touchstart","pointerdown"],ve={passive:!0,capture:!0};function ge(e){se||(se=Math.round(e),me.forEach((function(e){removeEventListener(e,pe,ve)})))}function pe(e){var t=!1;try{t=e.cancelable}catch(e){return void F.logEvent(y)}if(t){var n=he(!0),r=e.timeStamp;if(r>152e7&&(n=Number(new Date)),r>n)return;var o=n-r;"pointerdown"==e.type?function(e){function t(){ge(e),r()}function n(){r()}function r(){window.removeEventListener("pointerup",t,ve),window.removeEventListener("pointercancel",n,ve)}window.addEventListener("pointerup",t,ve),window.addEventListener("pointercancel",n,ve)}(o):ge(o)}}function he(e){var t=(Date.now?Date.now():+new Date)-de,n=Ee(re);return n&&!e?t-n.startTime:ce&&ce.now?ce.now():t}function ye(e){if(F.logEvent(a,[e]),ce){if(ce.mark)return ce.mark(e);if(ce.webkitMark)return ce.webkitMark(e)}Y=j(Y,B);var t={name:e,detail:null,entryType:"mark",startTime:he(),duration:0};return K.push(t),t}function Ee(e){return function(e,t){if(t)for(var n=t.length-1;n>=0;n--){var r=t[n];if(e===r.name)return r}return}(e,we())}function we(){if(ce){if(ce.getEntriesByType)return ce.getEntriesByType("mark");if(ce.webkitGetEntriesByType)return ce.webkitGetEntriesByType("mark")}return K}function Te(){var e={},t=Ee(re),n=Ee(oe),r=we();r&&r.forEach((function(r){if(r!==t&&r!==n){var o=r.name,i=o!==re&&t?t.startTime:0,a=Math.round(r.startTime-i);a<0||(void 0===e[o]?e[o]=a:e[o]=Math.max(a,e[o]))}}));var o=function(){if(ce){if(ce.getEntriesByType)return ce.getEntriesByType("measure");if(ce.webkitGetEntriesByType)return ce.webkitGetEntriesByType("measure")}return Q}();o&&o.forEach((function(n){if(!(t&&n.startTime<t.startTime)){var r=n.name,o=Math.round(n.duration);void 0===e[r]?e[r]=o:e[r]=Math.max(o,e[r])}}));var i=[];return Object.keys(e).forEach((function(t){i.push(t+"|"+e[t])})),i.join(",")}function be(){if("function"!=typeof PerformanceLongTaskTiming)return"";var e="",t={},n={};if(z.length){var r=Ee(re),o=r?r.startTime:0,i=ce.timing.loadEventEnd-ce.timing.navigationStart;if(r){var a=Ee(oe);a&&(i=a.startTime)}for(var c=0;c<z.length;c++){var u=z[c];if("longtask"===u.entryType){var s=Math.round(u.duration);if(u.startTime<o)s-=o-u.startTime;else if(u.startTime>=i)continue;var d=u.attribution[0].name;t[d]||(t[d]=0,n[d]=""),t[d]+=s,n[d]+=","+Math.round(u.startTime)+"|"+s}}}var f=void 0!==t.script?"script":"unknown";void 0===t[f]&&(t[f]=0,n[f]="");var l=function(e){for(var t=0,n=Be(),r=0===n,o=[],i=e.split(","),a=0;a<i.length;a++){var c=i[a].split("|");if(2===c.length){var u=parseInt(c[0]),s=parseInt(c[1]);o.push(s),t=s>t?s:t,!r&&u>n&&(u-n>5e3?r=!0:n=u+s)}}var d=o.length,f=function(e){if(0===e.length)return 0;var t=Math.floor(e.length/2);return e.sort((function(e,t){return e-t})),e.length%2?e[t]:Math.round((e[t-1]+e[t])/2)}(o);return{count:d,median:f,max:t,fci:n}}(n[f]),m=",n|"+l.count+",d|"+l.median+",x|"+l.max+(0===l.fci?"":",i|"+l.fci);return e+="s|"+t[f]+m+n[f]}function ke(){var e=[];for(var t in V)e.push(t+"|"+V[t]);return e.join(",")}function Se(){if(void 0===ae||void 0===W.samplerate)return!1;var e=(""+ae).substr(-2);return parseInt(e)<W.samplerate}function Me(){var e=[];for(var t in Z){var n=""+Z[t];t=t.replace(/,/g,"").replace(/\|/g,""),n=n.replace(/,/g,"").replace(/\|/g,""),e.push(t+"|"+n)}return encodeURIComponent(e.join(","))}function Ue(){var e=je();if(!e)return function(){for(var e=document.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++){var o=e[n];!o.src||o.async||o.defer||t++}return t}();for(var t=document.getElementsByTagName("script"),n=0,r=0,o=t.length;r<o;r++){var i=t[r];!i.src||i.async||i.defer||0==(4&i.compareDocumentPosition(e))||n++}return n}function Le(e){for(var t=document.getElementsByTagName(e),n=0,r=0,o=t.length;r<o;r++){var i=t[r];try{n+=i.innerHTML.length}catch(i){return F.logEvent(E),-1}}return n}function xe(){var e="",t=de,n=Ee(re),r=Ee(oe);if(n&&r){var o=Math.round(n.startTime);e=(t+=o)+"fs0ls"+(s=Math.round(r.startTime)-o)+"le"+s}else if(ce&&ce.timing){var i=ce.timing,a=function(){if(ce&&ce.timing){var e=ce.timing,t=e.navigationStart,n=void 0;if(t){if(ce&&ce.getEntriesByType&&ce.getEntriesByType("paint").length)for(var r=ce.getEntriesByType("paint"),o=0;o<r.length;o++){var i=r[o];if("first-paint"===i.name){n=Math.round(i.startTime);break}}else if(window.chrome&&"function"==typeof window.chrome.loadTimes){var a=window.chrome.loadTimes();a&&(n=Math.round(1e3*a.firstPaintTime-t))}else e.msFirstPaint&&(n=Math.round(e.msFirstPaint-t));if(n)return n}}return F.logEvent(M),null}(),c=Be(),u=function(){if(z.length)for(var e=z.length-1;e>=0;e--){var t=z[e];if("largest-contentful-paint"===t.entryType)return Math.round(t.startTime)}return 0}();e=t+(i.redirectStart?"rs"+(i.redirectStart-t):"")+(i.redirectEnd?"re"+(i.redirectEnd-t):"")+(i.fetchStart?"fs"+(i.fetchStart-t):"")+(i.domainLookupStart?"ds"+(i.domainLookupStart-t):"")+(i.domainLookupEnd?"de"+(i.domainLookupEnd-t):"")+(i.connectStart?"cs"+(i.connectStart-t):"")+(i.secureConnectionStart?"sc"+(i.secureConnectionStart-t):"")+(i.connectEnd?"ce"+(i.connectEnd-t):"")+(i.requestStart?"qs"+(i.requestStart-t):"")+(i.responseStart?"bs"+(i.responseStart-t):"")+(i.responseEnd?"be"+(i.responseEnd-t):"")+(i.domLoading?"ol"+(i.domLoading-t):"")+(i.domInteractive?"oi"+(i.domInteractive-t):"")+(i.domContentLoadedEventStart?"os"+(i.domContentLoadedEventStart-t):"")+(i.domContentLoadedEventEnd?"oe"+(i.domContentLoadedEventEnd-t):"")+(i.domComplete?"oc"+(i.domComplete-t):"")+(i.loadEventStart?"ls"+(i.loadEventStart-t):"")+(i.loadEventEnd?"le"+(i.loadEventEnd-t):"")+(a?"sr"+a:"")+(c?"fc"+c:"")+(u?"lc"+u:"")}else if(r){var s;e=t+"fs0ls"+(s=Math.round(r.startTime))+"le"+s}return e}function Be(){if(ce&&ce.getEntriesByType&&ce.getEntriesByType("paint").length)for(var e=ce.getEntriesByType("paint"),t=0;t<e.length;t++){var n=e[t];if("first-contentful-paint"===n.name)return Math.round(n.startTime)}return 0}function Ne(){if(void 0!==O.customerid)return O.customerid;var e=Ie("/js/lux.js");return e?(O.customerid=function(e,t){for(var n=e.split("?")[1].split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");if(t===i[0])return i[1]}return}(e.src,"id"),O.customerid):""}function Ie(e){for(var t=document.getElementsByTagName("script"),n=0,r=t.length;n<r;n++){var o=t[n];if(o.src&&-1!==o.src.indexOf(e))return o}return null}function Ce(e){var t=0;if(e.parentNode)for(;e=e.parentNode;)t++;return t}function Pe(){if(ce&&ce.getEntriesByType&&ce.getEntriesByType("navigation").length){var e=performance.getEntriesByType("navigation");if(e&&e.length>0&&e[0].encodedBodySize)return e[0].encodedBodySize}return 0}function De(){var e=navigator.connection,t="";return e&&e.effectiveType&&(t="slow-2g"===(t=e.effectiveType)?"Slow 2G":"2g"===t||"3g"===t||"4g"===t||"5g"===t?t.toUpperCase():t.charAt(0).toUpperCase()+t.slice(1)),t}function je(e){var t;if(e||(e=document.body),e){var n=e.children;if(n)for(var r=0,o=n.length;r<o;r++){var i=n[r];Oe(i)&&(t=i)}}return t?je(t):e}function Oe(e){var t=document.documentElement.clientHeight,n=document.documentElement.clientWidth,r=function(e){var t=0,n=0;for(;e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return[t,n]}(e);return r[0]>=0&&r[1]>=0&&r[0]<n&&r[1]<t&&e.offsetWidth>0&&e.offsetHeight>0}function He(){F.logEvent(s);var e=Ne();if(e&&ie&&Se()&&!$){ye(oe);var n=Te(),r=function(){var e=[];if(z.length)for(var t=0;t<z.length;t++){var n=z[t];"element"===n.entryType&&n.identifier&&n.startTime&&e.push(n.identifier+"|"+Math.round(n.startTime))}return e.join(",")}(),o=Me(),i="";te||(i=ke());var a=be(),c=function(){if("function"!=typeof LayoutShift)return!1;for(var e=0,t=0;t<z.length;t++){var n=z[t];"layout-shift"!==n.entryType||n.hadRecentInput||(e+=n.value)}return e.toFixed(6)}(),u=function(){var e="";if(ce&&ce.getEntriesByName){var n=Ie("/js/lux.js");if(n){var r=ce.getEntriesByName(n.src);if(r&&r.length){var o=r[0],i=Math.round(o.domainLookupEnd-o.domainLookupStart),a=Math.round(o.connectEnd-o.connectStart),c=Math.round(o.responseStart-o.requestStart),u=Math.round(o.responseEnd-o.responseStart),s=i+a+c+u,d=H-t,f=o.encodedBodySize?o.encodedBodySize:0;e="d"+i+"t"+a+"f"+c+"c"+u+"n"+s+"e"+d+"r"+W.samplerate+(f?"x"+f:"")+(fe?"l"+fe:"")+"s"+(t-de)}}}return e}();document.visibilityState&&"visible"!==document.visibilityState&&(Y=j(Y,N));var d,f,l,g=W.beaconUrl+"?v="+"300&id="+e+"&sid="+ie+"&uid="+ae+(o?"&CD="+o:"")+"&l="+encodeURIComponent(Ze()),p=Le("script"),h=Le("style"),y=(ee?"":"&NT="+xe())+(ne?"&LJS="+u:"")+"&PS=ns"+function(){for(var e=document.getElementsByTagName("script"),t=0,n=0,r=e.length;n<r;n++)e[n].src&&t++;return t}()+"bs"+Ue()+(p>-1?"is"+p:"")+"ss"+function(){for(var e=document.getElementsByTagName("link"),t=0,n=0,r=e.length;n<r;n++){var o=e[n];o.href&&"stylesheet"==o.rel&&t++}return t}()+"bc"+function(){for(var e=0,t=document.getElementsByTagName("link"),n=0,r=t.length;n<r;n++){var o=t[n];o.href&&"stylesheet"===o.rel&&0!==o.href.indexOf("data:")&&(o.onloadcssdefined||"print"===o.media||"style"===o.as||"function"==typeof o.onload&&"all"===o.media||e++)}return e}()+(h>-1?"ic"+h:"")+"ia"+function(){var e=document.getElementsByTagName("img"),t=[];if(e)for(var n=0,r=e.length;n<r;n++){var o=e[n];Oe(o)&&t.push(o)}return t}().length+"it"+document.getElementsByTagName("img").length+"dd"+function(){for(var e=document.getElementsByTagName("*"),t=e.length,n=0;t--;)n+=Ce(e[t]);return Math.round(n/e.length)}()+"nd"+document.getElementsByTagName("*").length+"vh"+document.documentElement.clientHeight+"vw"+document.documentElement.clientWidth+"dh"+(d=document,f=d.body,l=d.documentElement,Math.max(f?f.scrollHeight:0,f?f.offsetHeight:0,l?l.clientHeight:0,l?l.scrollHeight:0,l?l.offsetHeight:0)+"dw")+function(e){var t=e.body,n=e.documentElement;return Math.max(t?t.scrollWidth:0,t?t.offsetWidth:0,n?n.clientWidth:0,n?n.scrollWidth:0,n?n.offsetWidth:0)}(document)+(Pe()?"ds"+Pe():"")+(De()?"ct"+De()+"_":"")+"er"+G+"nt"+(ce&&ce.navigation&&void 0!==ce.navigation.type?ce.navigation.type:"")+(navigator.deviceMemory?"dm"+Math.round(navigator.deviceMemory):"")+(i?"&IX="+i:"")+(se?"&FID="+se:"")+(a?"&CPU="+a:"")+(Y?"&fl="+Y:"")+(r?"&ET="+r:"")+"&HN="+encodeURIComponent(document.location.hostname)+(!1!==c?"&CLS="+c:"")+"&PN="+encodeURIComponent(document.location.pathname),E="";if(n){var w=g.length+y.length;if(w+n.length<=ue)y+="&UT="+n;else{var T=ue-w,b=n.lastIndexOf(",",T);y+="&UT="+n.substring(0,b),E=n.substring(b+1)}}var k=g+y;F.logEvent(m,[k]),_e(k),$=1,ee=1,te=i?1:0;for(var S=ue-g.length;E;){var M="";if(E.length<=S)M=E,E="";else-1===(b=E.lastIndexOf(",",S))&&(b=E.indexOf(",")),-1===b?(M=E,E=""):(M=E.substring(0,b),E=E.substring(b+1));var U=g+"&UT="+M;F.logEvent(v,[U]),_e(U)}}}function Re(){var e=Ne();if(e&&ie&&Se()&&!te&&$){var t=ke();if(t){var n=Me(),r="?v=300&id="+e+"&sid="+ie+"&uid="+ae+(n?"&CD="+n:"")+"&l="+encodeURIComponent(Ze())+"&IX="+t+(se?"&FID="+se:"")+"&HN="+encodeURIComponent(document.location.hostname)+"&PN="+encodeURIComponent(document.location.pathname),o=W.beaconUrl+r;F.logEvent(g,[o]),_e(o),te=1}}}function Xe(){var e=Ne();if(e&&ie&&Se()&&$){var t=Me();if(t){var n="?v=300&id="+e+"&sid="+ie+"&uid="+ae+"&CD="+t+"&l="+encodeURIComponent(Ze())+"&HN="+encodeURIComponent(document.location.hostname)+"&PN="+encodeURIComponent(document.location.pathname),r=W.beaconUrl+n;F.logEvent(p,[r]),_e(r)}}}function _e(e){(new Image).src=e}function Fe(e){if(e.id)return e.id;for(var t,n=e;n.parentNode&&n.parentNode.tagName;){if((n=n.parentNode).hasAttribute("data-sctrack"))return n.getAttribute("data-sctrack");n.id&&!t&&(t=n.id)}var r="INPUT"===e.tagName&&"submit"===e.type,o="BUTTON"===e.tagName,i="A"===e.tagName;return r&&e.value?e.value:(o||i)&&e.innerText?e.innerText:t||""}function We(){void 0===V.s&&(V.s=Math.round(he()))}function Ge(e){if(Ye(),void 0===V.k){if(V.k=Math.round(he()),e&&e.target){var t=Fe(e.target);t&&(V.ki=t)}Re()}}function qe(e){if(Ye(),void 0===V.c){V.c=Math.round(he());var t=null;try{e&&e.target&&(t=e.target)}catch(e){F.logEvent(w),t=null}if(t){e.clientX&&(V.cx=e.clientX,V.cy=e.clientY);var n=Fe(e.target);n&&(V.ci=n)}Re()}}function ze(e,t,n){void 0===n&&(n=!1),window.addEventListener?window.addEventListener(e,t,n):window.attachEvent&&window.attachEvent("on"+e,t)}function Ae(e,t,n){void 0===n&&(n=!1),window.removeEventListener?window.removeEventListener(e,t,n):window.detachEvent&&window.detachEvent("on"+e,t)}function Je(){ze("scroll",We),ze("keypress",Ge),ze("mousedown",qe)}function Ye(){Ae("scroll",We),Ae("keypress",Ge),Ae("mousedown",qe)}function Ke(e){return void 0===e&&(e=!1),e?"".concat(Number(new Date),"00000"):"".concat(Number(new Date)).concat((t=String(Math.round(1e5*Math.random())),((n="00000")+t).slice(-n.length)));var t,n}function Qe(e){var t=function(e){try{for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(e===r[0].trim())return unescape(r[1])}}catch(e){F.logEvent(T)}return}("lux_uid");if(!t||t.length<11)t=e;else{var n=parseInt(t.substring(0,10));Number(new Date)/1e3-n>86400&&(t=e)}return Ve(t),t}function Ve(e){return function(e,t,n){try{document.cookie=e+"="+escape(t)+(n?"; max-age="+n:"")+"; path=/; SameSite=Lax"}catch(e){F.logEvent(b)}}("lux_uid",e,1800),e}function Ze(){if(void 0!==O.label)return Y=j(Y,P),O.label;if(void 0!==O.jspagelabel){var e=Function('"use strict"; return '.concat(O.jspagelabel));try{var t=e();if(t)return Y=j(Y,D),t}catch(e){F.logEvent(k,[O.jspagelabel,e]),console.log("Error evaluating page label",O.jspagelabel,e)}}return Y=j(Y,C),document.title}me.forEach((function(e){window.addEventListener(e,pe,ve)})),W.auto&&("complete"==document.readyState?He():ze("load",(function(){setTimeout(He,200)}))),W.sendBeaconOnPageHidden&&(le=function(){Y=j(Y,I),He(),Re()},"onpagehide"in self?ze("pagehide",le,!0):(ze("unload",le,!0),ze("beforeunload",le,!0)),ze("visibilitychange",(function(){"hidden"===document.visibilityState&&le()}),!0)),Je();var $e=W;function et(e){var t=e[0],n=e.slice(1);"function"==typeof $e[t]&&$e[t].apply($e,n)}return $e.mark=ye,$e.measure=function(e,t,n){if(F.logEvent(c,[e,t,n]),void 0===t&&Ee(re)&&(t=re),ce){if(ce.measure)return t?n?ce.measure(e,t,n):ce.measure(e,t):ce.measure(e);if(ce.webkitMeasure)return ce.webkitMeasure(e,t,n)}var r=0,o=he();if(t){var i=Ee(t);if(i)r=i.startTime;else{if(!(ce&&ce.timing&&ce.timing[t]))throw new DOMException("Failed to execute 'measure' on 'Performance': The mark '".concat(t,"' does not exist"));r=ce.timing[t]-ce.timing.navigationStart}}if(n){var a=Ee(n);if(a)o=a.startTime;else{if(!(ce&&ce.timing&&ce.timing[n]))throw new DOMException("Failed to execute 'measure' on 'Performance': The mark '".concat(n,"' does not exist"));o=ce.timing[n]-ce.timing.navigationStart}}var u={name:e,detail:null,entryType:"measure",startTime:r,duration:o-r};return Q.push(u),u},$e.init=function(){Ee(oe)&&(F.logEvent(i),V={},Ye(),Je(),ee=0,$=0,te=0,ne=0,ie=Ke(),ae=Qe(ie),z.splice(0),Y=j(Y=0,L),ye(re))},$e.send=He,$e.addData=function(e,t){F.logEvent(u,[e,t]);var n=typeof t;"string"!==typeof e||"string"!==n&&"number"!==n&&"boolean"!==n||(Z[e]=t),$&&(J&&clearTimeout(J),J=window.setTimeout(Xe,100))},$e.getSessionId=function(){return ae},$e.getDebug=function(){return F.getEvents()},$e.forceSample=function(){F.logEvent(d),Ve(Ke(!0))},$e.doUpdate=function(){},$e.cmd=et,$e.version=_,$e.ae=[],$e.al=[],O.ac&&O.ac.length&&O.ac.forEach(et),void 0!==window.LUX_ae&&window.LUX_ae.forEach(q),F.logEvent(o),$e}(),window.LUX=O;var H=e()}();
