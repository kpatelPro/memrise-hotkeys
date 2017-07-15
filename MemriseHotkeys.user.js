// ==UserScript==
// @name           Memrise Hotkeys asdfqwer
// @description    Improves the hotkeys for multiple choice questions on Memrise
// @match          https://www.memrise.com/course/*/garden/*
// @match          https://www.memrise.com/garden/review/*
// @version        0.1.4a
// @updateURL      https://github.com/kpatelPro/memrise-hotkeys/raw/master/MemriseHotkeys.user.js
// @downloadURL    https://github.com/kpatelPro/memrise-hotkeys/raw/master/MemriseHotkeys.user.js
// ==/UserScript==

function addjQuery(callback) {
	var script = document.createElement("script");
	script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
}

function main() {
	(function(e){"use strict";function s(e){if(!e[r]){e[r]=i++;return true}return false}function o(){this.map_={}}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e){return e==f||e==c}function m(e,t,n,r){this.rootNode=e;this.elementFilter=t;this.calcReordered=n;this.calcOldPreviousSibling=r}function b(e){function i(){if(n){if(r){n.qualifiers.push(r);r=undefined}t.push(n)}n={qualifiers:[]}}function s(){if(r)n.qualifiers.push(r);r={}}function L(e){return'"'+e.replace(/"/,'\\"')+'"'}var t=[];var n;var r;var o=/\s/;var u;var a="Invalid or unsupported selector syntax.";var f=1;var l=2;var c=3;var h=4;var p=5;var d=6;var v=7;var m=8;var b=9;var w=10;var E=11;var S=12;var x=13;var T=14;var N=f;var C=0;while(C<e.length){var k=e[C++];switch(N){case f:if(k.match(g)){i();n.tagName=k;N=l;break}if(k=="*"){i();n.tagName="*";N=c;break}if(k=="."){i();s();n.tagName="*";r.class=true;N=h;break}if(k=="#"){i();s();n.tagName="*";r.id=true;N=h;break}if(k=="["){i();s();n.tagName="*";r.attrName="";N=d;break}if(k.match(o))break;throw Error(a);case l:if(k.match(y)){n.tagName+=k;break}if(k=="."){s();r.class=true;N=h;break}if(k=="#"){s();r.id=true;N=h;break}if(k=="["){s();r.attrName="";N=d;break}if(k.match(o)){N=T;break}if(k==","){N=f;break}throw Error(a);case c:if(k=="."){s();r.class=true;N=h;break}if(k=="#"){s();r.id=true;N=h;break}if(k=="["){s();r.attrName="";N=d;break}if(k.match(o)){N=T;break}if(k==","){N=f;break}throw Error(a);case h:if(k.match(g)){r.attrValue=k;N=p;break}throw Error(a);case p:if(k.match(y)){r.attrValue+=k;break}if(k=="."){s();r.class=true;N=h;break}if(k=="#"){s();r.id=true;N=h;break}if(k=="["){s();N=d;break}if(k.match(o)){N=T;break}if(k==","){N=f;break}throw Error(a);case d:if(k.match(g)){r.attrName=k;N=v;break}if(k.match(o))break;throw Error(a);case v:if(k.match(y)){r.attrName+=k;break}if(k.match(o)){N=m;break}if(k=="~"){r.contains=true;N=b;break}if(k=="="){r.attrValue="";N=E;break}if(k=="]"){N=c;break}throw Error(a);case m:if(k=="~"){r.contains=true;N=b;break}if(k=="="){r.attrValue="";N=E;break}if(k=="]"){N=c;break}if(k.match(o))break;throw Error(a);case b:if(k=="="){r.attrValue="";N=E;break}throw Error(a);case w:if(k=="]"){N=c;break}if(k.match(o))break;throw Error(a);case E:if(k.match(o))break;if(k=='"'||k=="'"){u=k;N=x;break}r.attrValue+=k;N=S;break;case S:if(k.match(o)){N=w;break}if(k=="]"){N=c;break}if(k=="'"||k=='"')throw Error(a);r.attrValue+=k;break;case x:if(k==u){N=w;break}r.attrValue+=k;break;case T:if(k.match(o))break;if(k==","){N=f;break}throw Error(a)}}switch(N){case f:case l:case c:case p:case T:i();break;default:throw Error(a)}if(!t.length)throw Error(a);t.forEach(function(e){var t=e.tagName.toUpperCase();if(e.tagName!=t)e.caseInsensitiveTagName=t;var n=e.tagName;e.qualifiers.forEach(function(e){if(e.class)n+="."+e.attrValue;else if(e.id)n+="#"+e.attrValue;else{var t=e.attrName.toLowerCase();if(e.attrName!=t)e.caseInsensitiveAttrName=t;if(e.contains)n+="["+e.attrName+"~="+L(e.attrValue)+"]";else{n+="["+e.attrName;if(e.hasOwnProperty("attrValue"))n+="="+L(e.attrValue);n+="]"}}});e.selectorString=n});return t}function E(e){if(typeof e!="string")throw Error("Invalid request opion. attribute must be a non-zero length string.");e=e.trim();if(!e)throw Error("Invalid request opion. attribute must be a non-zero length string.");if(!e.match(w))throw Error("Invalid request option. invalid attribute name: "+e);return e}function S(e){if(!e.trim().length)throw Error("Invalid request option: elementAttributes must contain at least one attribute.");var t={};var n={};var r=e.split(/\s+/);for(var i=0;i<r.length;i++){var s=r[i];if(!s)continue;var s=E(s);if(t.hasOwnProperty(s.toLowerCase()))throw Error("Invalid request option: observing multiple case varitations of the same attribute is not supported.");n[s]=true;t[s.toLowerCase()]=true}return Object.keys(n)}function x(e){var t={callback:true,queries:true,rootNode:true,oldPreviousSibling:true,observeOwnChanges:true};var n={};for(var r in e){if(!(r in t))throw Error("Invalid option: "+r)}if(typeof e.callback!=="function")throw Error("Invalid options: callback is required and must be a function");n.callback=e.callback;n.rootNode=e.rootNode||document;n.observeOwnChanges=e.observeOwnChanges;n.oldPreviousSibling=e.oldPreviousSibling;if(!e.queries||!e.queries.length)throw Error("Invalid options: queries must contain at least one query request object.");n.queries=[];for(var i=0;i<e.queries.length;i++){var s=e.queries[i];if(s.all){if(Object.keys(s).length>1)throw Error("Invalid request option. all has no options.");n.queries.push({all:true});continue}if(s.hasOwnProperty("attribute")){var o={attribute:E(s.attribute)};o.elementFilter=b("*["+o.attribute+"]");if(Object.keys(s).length>1)throw Error("Invalid request option. attribute has no options.");n.queries.push(o);continue}if(s.hasOwnProperty("element")){var u=Object.keys(s).length;var o={element:s.element,elementFilter:b(s.element)};if(s.hasOwnProperty("elementAttributes")){o.elementAttributes=S(s.elementAttributes);u--}if(u>1)throw Error("Invalid request option. element only allows elementAttributes option.");n.queries.push(o);continue}if(s.characterData){if(Object.keys(s).length>1)throw Error("Invalid request option. characterData has no options.");n.queries.push({characterData:true});continue}throw Error("Invalid request option. Unknown query request.")}return n}function T(e){var t={};e.forEach(function(e){e.qualifiers.forEach(function(e){if(e.class)t["class"]=true;else if(e.id)t["id"]=true;else t[e.attrName]=true})});return Object.keys(t)}function N(e){function r(e){if(t.attributes&&!n)return;t.attributes=true;t.attributeOldValue=true;if(!e){n=undefined;return}n=n||{};e.forEach(function(e){n[e]=true;n[e.toLowerCase()]=true})}var t={childList:true,subtree:true};var n;e.forEach(function(e){if(e.characterData){t.characterData=true;t.characterDataOldValue=true;return}if(e.all){r();t.characterData=true;t.characterDataOldValue=true;return}if(e.attribute){r([e.attribute.trim()]);return}if(e.elementFilter&&e.elementFilter.some(function(e){return e.className}))r(["class"]);var n=T(e.elementFilter).concat(e.elementAttributes||[]);if(n.length)r(n)});if(n)t.attributeFilter=Object.keys(n);return t}function C(e,t,n){e.elementFilter=n.elementFilter;e.filterCharacterData=n.characterData;var r={target:t,type:"summary",added:[],removed:[]};r.getOldParentNode=e.getOldParentNode.bind(e);if(n.all||n.element)r.reparented=[];if(n.all)r.reordered=[];e.getChanged(r);if(n.all||n.attribute||n.elementAttributes){var i=n.attribute?[n.attribute]:n.elementAttributes;var s=e.getAttributesChanged(i);if(n.attribute){r.valueChanged=[];if(s[n.attribute])r.valueChanged=s[n.attribute];r.getOldAttribute=function(t){return e.getOldAttribute(t,n.attribute)}}else{r.attributeChanged=s;if(n.elementAttributes){n.elementAttributes.forEach(function(e){if(!r.attributeChanged.hasOwnProperty(e))r.attributeChanged[e]=[]})}r.getOldAttribute=e.getOldAttribute.bind(e)}}if(n.all||n.characterData){var o=e.getCharacterDataChanged();r.getOldCharacterData=e.getOldCharacterData.bind(e);if(n.characterData)r.valueChanged=o;else r.characterDataChanged=o}if(r.reordered)r.getOldPreviousSibling=e.getOldPreviousSibling.bind(e);return r}function k(e){function l(){f.forEach(function(e){if(e)e.recordPreviousState()})}function c(e){f.forEach(function(t,n){if(t)t.validate(e[n])})}function h(e){if(!e||!e.length)return[];var t=new m(s,u,a,r.oldPreviousSibling);t.processMutations(e);return r.queries.map(function(e){return C(t,s,e)})}function p(e){return e.some(function(e){var t=["added","removed","reordered","reparented","valueChanged","characterDataChanged"];if(t.some(function(t){return e[t]&&e[t].length}))return true;if(e.attributeChanged){var n=Object.keys(e.attributeChanged).some(function(t){return e.attributeChanged[t].length});if(n)return true}return false})}var t=false;var r=x(e);var i=N(r.queries);var s=r.rootNode;var o=r.callback;var u=Array.prototype.concat.apply([],r.queries.map(function(e){return e.elementFilter?e.elementFilter:[]}));if(!u.length)u=undefined;var a=r.queries.some(function(e){return e.all});var f=[];if(k.createQueryValidator){f=r.queries.map(function(e){return k.createQueryValidator(s,e)})}var d=new n(function(e){if(!r.observeOwnChanges)d.disconnect();var n=h(e);c(n);if(r.observeOwnChanges)l();if(p(n))o(n);if(!r.observeOwnChanges&&t){l();d.observe(s,i)}});this.reconnect=function(){if(t)throw Error("Already connected");d.observe(s,i);t=true;l()};var v=this.takeSummaries=function(){if(!t)throw Error("Not connected");var e=d.takeRecords();var n=h(e);if(p(n))return n};this.disconnect=function(){var e=v();d.disconnect();t=false;return e};this.reconnect()}var t="matchesSelector";if("webkitMatchesSelector"in Element.prototype)t="webkitMatchesSelector";else if("mozMatchesSelector"in Element.prototype)t="mozMatchesSelector";var n=e.MutationObserver||e.WebKitMutationObserver||e.MozMutationObserver;if(n===undefined){console.log("MutationSummary cannot load: DOM Mutation Observers are required.");console.log("https://developer.mozilla.org/en-US/docs/DOM/MutationObserver");return}var r="__mutation_summary_node_map_id__";var i=1;o.prototype={set:function(e,t){s(e);this.map_[e[r]]={k:e,v:t}},get:function(e){if(s(e))return;var t=this.map_[e[r]];if(t)return t.v},has:function(e){return!s(e)&&e[r]in this.map_},"delete":function(e){if(s(e))return;delete this.map_[e[r]]},keys:function(){var e=[];for(var t in this.map_){e.push(this.map_[t].k)}return e}};var a=0;var f=1;var l=2;var c=3;var h=4;var p=5;var v=Array.prototype.forEach.call.bind(Array.prototype.forEach);m.prototype={getChange:function(e){var t=this.changeMap.get(e);if(!t){t={target:e};this.changeMap.set(e,t)}if(e.nodeType==Node.ELEMENT_NODE)t.matchCaseInsensitive=e instanceof HTMLElement&&e.ownerDocument instanceof HTMLDocument;return t},getParentChange:function(e){var t=this.getChange(e);if(!t.childList){t.childList=true;t.oldParentNode=null}return t},handleChildList:function(e){this.childListChanges=true;v(e.removedNodes,function(t){var n=this.getParentChange(t);if(n.added||n.oldParentNode)n.added=false;else n.oldParentNode=e.target},this);v(e.addedNodes,function(e){var t=this.getParentChange(e);t.added=true},this)},handleAttributes:function(e){this.attributesChanges=true;var t=this.getChange(e.target);if(!t.attributes){t.attributes=true;t.attributeOldValues={}}var n=t.attributeOldValues;if(!u(n,e.attributeName)){n[e.attributeName]=e.oldValue}},handleCharacterData:function(e){this.characterDataChanges=true;var t=this.getChange(e.target);if(t.characterData)return;t.characterData=true;t.characterDataOldValue=e.oldValue},processMutations:function(e){function m(e){if(!v.calcOldPreviousSibling)return;v.processChildlistChanges();var t=e.parentNode;var n=v.changeMap.get(e);if(n&&n.oldParentNode)t=n.oldParentNode;n=v.childlistChanges.get(t);if(!n){n={oldPrevious:new o};v.childlistChanges.set(t,n)}if(!n.oldPrevious.has(e)){n.oldPrevious.set(e,e.previousSibling)}}function g(e,o){if(d.has(e))return;d.set(e,true);var y=v.changeMap.get(e);var b=o;if(y&&y.childList||b==undefined)b=s(e);if(b==a)return;i(e);if(b==f){t.push(e)}else if(b==c){n.push(e);m(e)}else if(b==l){var w=l;if(y&&y.childList){if(y.oldParentNode!==e.parentNode){w=h;m(e)}else if(v.calcReordered&&u(e)){w=p}}r.set(e,w)}if(b==l)return;for(var E=e.firstChild;E;E=E.nextSibling){g(E,b)}}this.mutations=e;this.changeMap=new o;this.mutations.forEach(function(e){switch(e.type){case"childList":this.handleChildList(e);break;case"attributes":this.handleAttributes(e);break;case"characterData":this.handleCharacterData(e);break}},this);var t=this.entered=[];var n=this.exited=[];var r=this.stayedIn=new o;if(!this.childListChanges&&!this.attributesChanges)return;var i=this.matchabilityChange.bind(this);var s=this.reachabilityChange.bind(this);var u=this.wasReordered.bind(this);var d=new o;var v=this;this.changeMap.keys().forEach(function(e){g(e)})},getChanged:function(e){var t=this.matchabilityChange.bind(this);this.entered.forEach(function(n){var r=t(n);if(r==f||r==l)e.added.push(n)});this.stayedIn.keys().forEach(function(n){var r=t(n);if(r==f){e.added.push(n)}else if(r==c){e.removed.push(n)}else if(r==l&&(e.reparented||e.reordered)){var i=this.stayedIn.get(n);if(e.reparented&&i==h)e.reparented.push(n);else if(e.reordered&&i==p)e.reordered.push(n)}},this);this.exited.forEach(function(n){var r=t(n);if(r==c||r==l)e.removed.push(n)})},getOldParentNode:function(e){var t=this.changeMap.get(e);if(t&&t.childList)return t.oldParentNode?t.oldParentNode:null;var n=this.reachabilityChange(e);if(n==a||n==f)throw Error("getOldParentNode requested on invalid node.");return e.parentNode},getOldPreviousSibling:function(e){var t=e.parentNode;var n=this.changeMap.get(e);if(n&&n.oldParentNode)t=n.oldParentNode;n=this.childlistChanges.get(t);if(!n)throw Error("getOldPreviousSibling requested on invalid node.");return n.oldPrevious.get(e)},getOldAttribute:function(e,t){var n=this.changeMap.get(e);if(!n||!n.attributes)throw Error("getOldAttribute requested on invalid node.");if(n.matchCaseInsensitive)t=t.toLowerCase();if(!u(n.attributeOldValues,t))throw Error("getOldAttribute requested for unchanged attribute name.");return n.attributeOldValues[t]},getAttributesChanged:function(e){if(!this.attributesChanges)return{};var t;var n;if(e){t={};n={};e.forEach(function(e){t[e]=true;var r=e.toLowerCase();if(e!=r){n[r]=e}})}var r={};var i=this.changeMap.keys();for(var s=0;s<i.length;s++){var o=i[s];var u=this.changeMap.get(o);if(!u.attributes)continue;if(l!=this.reachabilityChange(o)||l!=this.matchabilityChange(o))continue;var a=o;var f=u.attributeOldValues;Object.keys(f).forEach(function(e){var i=e;if(u.matchCaseInsensitive&&n&&n[e])i=n[e];if(t&&!t[i])return;if(a.getAttribute(e)==f[e])return;if(!r[i])r[i]=[];r[i].push(a)})}return r},getOldCharacterData:function(e){var t=this.changeMap.get(e);if(!t||!t.characterData)throw Error("getOldCharacterData requested on invalid node.");return t.characterDataOldValue},getCharacterDataChanged:function(){if(!this.characterDataChanges)return[];var e=this.changeMap.keys();var t=[];for(var n=0;n<e.length;n++){var r=e[n];if(l!=this.reachabilityChange(r)||l!=this.matchabilityChange(r))continue;var i=this.changeMap.get(r);if(!i.characterData||r.textContent==i.characterDataOldValue)continue;t.push(r)}return t},reachabilityChange:function(e){function s(e){var t=n.get(e);if(t&&t.childList){if(t.oldParentNode)return t.oldParentNode;if(t.added)return null}return e.parentNode}function u(e){if(e===t)return true;if(!e)return false;var n=r.get(e);if(n===undefined){n=u(e.parentNode);r.set(e,n)}return n}function h(e){if(e===t)return true;if(!e)return false;var n=i.get(e);if(n===undefined){n=h(s(e));i.set(e,n)}return n}this.reachableCache=this.reachableCache||new o;this.wasReachableCache=this.wasReachableCache||new o;var t=this.rootNode;var n=this.changeMap;var r=this.reachableCache;var i=this.wasReachableCache;if(u(e))return h(e)?l:f;else return h(e)?c:a},checkWasMatching:function(e,t,n){var r=this.changeMap.get(e);if(!r||!r.attributeOldValues)return n;var i=t.tagName;if(r.matchCaseInsensitive&&i!="*"&&u(t,"caseInsensitiveTagName")){i=t.caseInsensitiveTagName}if(i!="*"&&i!=e.tagName)return false;var s=r.attributeOldValues;var o=t.qualifiers.some(function(e){if(e.class)return u(s,"class");else if(e.id)return u(s,"id");else{return r.matchCaseInsensitive&&u(e,"caseInsensitiveAttrName")?u(s,e.caseInsensitiveAttrName):u(s,e.attrName)}});if(!o)return n;for(var a=0;a<t.qualifiers.length;a++){var f=t.qualifiers[a];var l;if(f.class)l="class";else if(f.id)l="id";else{if(r.matchCaseInsensitive&&u(f,"caseInsensitiveAttrName")){l=f.caseInsensitiveAttrName}else{l=f.attrName}}var c=f.class?true:f.contains;var h=u(s,l)?s[l]:e.getAttribute(l);if(h==null)return false;if(f.hasOwnProperty("attrValue")){if(!c&&f.attrValue!==h)return false;var p=h.split(" ").some(function(e){return e==f.attrValue});if(!p)return false}}return true},matchabilityChange:function(e){function r(e){if(!this.matchCache)this.matchCache={};if(!this.matchCache[e.selectorString])this.matchCache[e.selectorString]=new o;var r=this.matchCache[e.selectorString];var i=r.get(n);if(i!==undefined)return i;var s=n[t](e.selectorString);var u=this.checkWasMatching(n,e,s);if(s)i=u?l:f;else i=u?c:a;r.set(n,i);return i}if(this.filterCharacterData){switch(e.nodeType){case Node.COMMENT_NODE:case Node.TEXT_NODE:return l;default:return a}}if(!this.elementFilter)return l;if(e.nodeType!==Node.ELEMENT_NODE)return a;var n=e;var i=this.elementFilter.map(r,this);var s=a;var u=0;while(s!=l&&u<i.length){switch(i[u]){case l:s=l;break;case f:if(s==c)s=l;else s=f;break;case c:if(s==f)s=l;else s=c;break}u++}return s},processChildlistChanges:function(){function t(t){var n=e.get(t);if(!n){n={added:new o,removed:new o,maybeMoved:new o,oldPrevious:new o};e.set(t,n)}return n}if(this.childlistChanges)return;var e=this.childlistChanges=new o;var n=this.reachabilityChange.bind(this);var r=this;this.mutations.forEach(function(e){function o(e,t){if(!e||i.oldPrevious.has(e)||i.added.has(e)||i.maybeMoved.has(e))return;if(t&&(i.added.has(t)||i.maybeMoved.has(t)))return;i.oldPrevious.set(e,t)}if(e.type!="childList")return;if(n(e.target)!=l&&!r.calcOldPreviousSibling)return;var i=t(e.target);var s=e.previousSibling;v(e.removedNodes,function(e){o(e,s);if(i.added.has(e)){i.added.delete(e)}else{i.removed.set(e,true);i.maybeMoved.delete(e,true)}s=e});o(e.nextSibling,s);v(e.addedNodes,function(e){if(i.removed.has(e)){i.removed.delete(e);i.maybeMoved.set(e,true)}else{i.added.set(e,true)}})})},wasReordered:function(e){function s(e){if(!e)return false;if(!n.maybeMoved.has(e))return false;var t=r.get(e);if(t!==undefined)return t;if(i.has(e)){t=true}else{i.set(e,true);t=l(e)!==a(e)}if(i.has(e)){i.delete(e);r.set(e,t)}else{t=r.get(e)}return t}function a(e){var t=u.get(e);if(t!==undefined)return t;t=n.oldPrevious.get(e);while(t&&(n.removed.has(t)||s(t))){t=a(t)}if(t===undefined)t=e.previousSibling;u.set(e,t);return t}function l(e){if(f.has(e))return f.get(e);var t=e.previousSibling;while(t&&(n.added.has(t)||s(t)))t=t.previousSibling;f.set(e,t);return t}if(!this.childListChanges)return false;this.processChildlistChanges();var t=e.parentNode;var n=this.changeMap.get(e);if(n&&n.oldParentNode)t=n.oldParentNode;n=this.childlistChanges.get(t);if(!n)return false;if(n.moved)return n.moved.get(e);var r=n.moved=new o;var i=new o;var u=new o;var f=new o;n.maybeMoved.keys().forEach(s);return n.moved.get(e)}};var g=/[a-zA-Z_]+/;var y=/[a-zA-Z0-9_\-]+/;var w=/^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;e.MutationSummary=k;e.MutationSummary.NodeMap=o;e.MutationSummary.parseElementFilter=b})(this);

	var sendKey = function(keyCode) {
        alert("sending: " + keyCode);
		jQuery.event.trigger({ type: 'keydown', which: keyCode, target: $('body') });
		jQuery.event.trigger({ type: 'keypress', which: keyCode, target: $('body') });
	};

	var keyArray   = [ 97, 115, 100, 102, 113, 119, 101 ]; 
	var keyMap   = { 97: 49, 115: 50, 100: 51, 102: 52, 113: 53, 119: 54, 101: 55, 114: 56 };
	var indexMap = { '1': 'a', '2': 's', '3': 'd', '4': 'f', '5': 'q', '6': 'w', '7': 'e', '8': 'r' };

	$(document).on('keypress', function(e) {
		if ($(e.target).is('input')) {
			return;
		}
		var keyIndex = keyArray.indexOf(e.which);
		if (keyIndex >= 0) {
			var button = $('.choice')[keyIndex];
			if (button) {
 				button.click();
			}
		}
	        $(".next-button").click();
		//if (e.which in keyMap) {
		//	sendKey(keyMap[e.which]);
		//}
	});

	var replaceIndexes = function(obj) {
		for (var i = obj[0].added.length - 1; i >= 0; i--){
			var index = $('.index', obj[0].added[i]);
			var first = index.text()[0];
			if (first in indexMap) {
				index.text(indexMap[first] + '.');
				index.css('font-variant', 'small-caps');
			}
		}
	};

	var observer = new MutationSummary({
		callback: replaceIndexes,
		queries: [{
			element: '.choice'
		}]
	});
}

addjQuery(main);
