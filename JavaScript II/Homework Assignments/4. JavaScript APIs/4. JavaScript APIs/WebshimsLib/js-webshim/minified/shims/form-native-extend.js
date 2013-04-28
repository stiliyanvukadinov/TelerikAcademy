jQuery.webshims.register("form-native-extend",function(e,t,i,n,a,r){"use strict";var o=i.Modernizr,s=o.inputtypes;if(o.formvalidation&&!t.bugs.bustedValidity){var u=t.inputTypes,l={},p=function(){var t,i=function(){e(this).prop("validity")},n=function(){e("input").each(i)};return function(){clearTimeout(t),t=setTimeout(n,9)}}();t.addInputType=function(i,n){u[i]=n,e.isDOMReady&&o.formvalidation&&!t.bugs.bustedValidity&&p()},t.addValidityRule=function(e,t){l[e]=t},t.addValidityRule("typeMismatch",function(e,t,i,n){if(""===t)return!1;var a=n.typeMismatch;return"type"in i||(i.type=(e[0].getAttribute("type")||"").toLowerCase()),u[i.type]&&u[i.type].mismatch&&(a=u[i.type].mismatch(t,e)),a});var c=r.overrideMessages,d=!s.number||!s.time||!s.range||c,h=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],m=c?["value","checked"]:["value"],f=[],v=function(t,i){if(t){var a=(t.getAttribute&&t.getAttribute("type")||t.type||"").toLowerCase();(c||u[a])&&(c&&!i&&"radio"==a&&t.name?e(n.getElementsByName(t.name)).each(function(){e.prop(this,"validity")}):e.prop(t,"validity"))}},g={};if(["input","textarea","select"].forEach(function(i){var n=t.defineNodeNameProperty(i,"setCustomValidity",{prop:{value:function(a){a+="";var r="input"==i?e(this).getNativeElement()[0]:this;n.prop._supvalue.call(r,a),t.bugs.validationMessage&&t.data(r,"customvalidationMessage",a),d&&(t.data(r,"hasCustomError",!!a),v(r))}}});g[i]=n.prop._supvalue}),(d||c)&&(m.push("min"),m.push("max"),m.push("step"),f.push("input")),c&&(m.push("required"),m.push("pattern"),f.push("select"),f.push("textarea")),d){var y;if(f.forEach(function(i){var n=t.defineNodeNameProperty(i,"validity",{prop:{get:function(){if(!y){var r="input"==i?e(this).getNativeElement()[0]:this,o=n.prop._supget.call(r);if(!o)return o;var s={};if(h.forEach(function(e){s[e]=o[e]}),!e.prop(r,"willValidate"))return s;y=!0;var p,d=e(r),m={type:(r.getAttribute&&r.getAttribute("type")||"").toLowerCase(),nodeName:(r.nodeName||"").toLowerCase()},f=d.val(),v=!!t.data(r,"hasCustomError");if(y=!1,s.customError=v,s.valid&&s.customError)s.valid=!1;else if(!s.valid){var b=!0;e.each(s,function(e,t){return t?(b=!1,!1):a}),b&&(s.valid=!0)}return e.each(l,function(e,n){s[e]=n(d,f,m,s),s[e]&&(s.valid||!p)&&(c||u[m.type]&&u[m.type].mismatch)&&(g[i].call(r,t.createValidationMessage(r,e)),s.valid=!1,p=!0)}),s.valid?(g[i].call(r,""),t.data(r,"hasCustomError",!1)):!c||p||v||e.each(s,function(e,n){return"valid"!==e&&n?(g[i].call(r,t.createValidationMessage(r,e)),!1):a}),s}},writeable:!1}})}),m.forEach(function(e){t.onNodeNamesPropertyModify(f,e,function(){v(this)})}),n.addEventListener){var b,w=function(t){if("form"in t.target){var i=t.target.form;clearTimeout(b),v(t.target),i&&c&&e("input",i).each(function(){"password"==this.type&&v(this)})}};n.addEventListener("change",w,!0),c&&(n.addEventListener("blur",w,!0),n.addEventListener("keydown",function(e){13==e.keyCode&&w(e)},!0)),n.addEventListener("input",function(e){clearTimeout(b),b=setTimeout(function(){v(e.target)},290)},!0)}var x=f.join(",");t.addReady(function(t,i){e(x,t).add(i.filter(x)).each(function(){e.prop(this,"validity")})}),c&&t.ready("DOM form-message",function(){t.activeLang({register:"form-core",callback:function(){e("input, select, textarea").getNativeElement().each(function(){if(!t.data(this,"hasCustomError")){var i,n=this,r=e.prop(n,"validity")||{valid:!0};r.valid||(i=(n.nodeName||"").toLowerCase(),e.each(r,function(e,r){return"valid"!==e&&r?(g[i].call(n,t.createValidationMessage(n,e)),!1):a}))}})}})})}t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,i=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[i]?i:e.type}}})}});