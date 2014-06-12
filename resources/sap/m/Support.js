/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.Support");sap.m.Support=(function($,d){var a,s,b,t=2000,c=5000,o={start:"landscape",end:"portrait"};function l(i,r,k,n,p){i.push("<tr><td class='sapUiSupportTechInfoBorder'><label class='sapUiSupportLabel'>",jQuery.sap.escapeHTML(n),"</label><br>");var q=p;if($.isFunction(p)){q=p(i)||""}i.push($.sap.escapeHTML(q));i.push("</td></tr>")}function m(k,r,n,p,q){l(k,r,n,p,function(k){k.push("<table border='0' cellspacing='5' cellpadding='5' width='100%'>");$.each(q,function(i,v){var u="";if(v){if(typeof(v)=="string"||typeof(v)=="boolean"||($.isArray(v)&&v.length==1)){u=v}else if(($.isArray(v)||$.isPlainObject(v))&&window.JSON){u=window.JSON.stringify(v)}}l(k,false,false,i,""+u)});k.push("</table>")})}function g(){var k,C=sap.ui.getCore().getConfiguration(),D={version:sap.ui.version,build:sap.ui.buildinfo.buildtime,change:sap.ui.buildinfo.lastchange,useragent:navigator.userAgent,docmode:d.documentMode||"",debug:$.sap.debug(),bootconfig:window["sap-ui-config"]||{},modules:$.sap.getAllDeclaredModules(),uriparams:$.sap.getUriParameters().mParams,appurl:window.location.href,config:{theme:C.getTheme(),language:C.getLanguage(),formatLocale:C.getFormatLocale(),accessibility:""+C.getAccessibility(),animation:""+C.getAnimation(),rtl:""+C.getRTL(),debug:""+C.getDebug(),inspect:""+C.getInspect(),originInfo:""+C.getOriginInfo(),noDuplicateIds:""+C.getNoDuplicateIds()}};k=["<table border='0' cellspacing='5' cellpadding='5' width='100%'>"];l(k,true,true,"SAPUI5 Version",function(i){i.push(D.version," (built at ",D.build,", last change ",D.change,")")});l(k,true,true,"User Agent",function(i){i.push(D.useragent,(D.docmode?", Document Mode '"+D.docmode+"'":""))});l(k,true,true,"Debug Sources",function(i){i.push((D.debug?"ON":"OFF"))});l(k,true,true,"Application",D.appurl);m(k,true,true,"Configuration (bootstrap)",D.bootconfig);m(k,true,true,"Configuration (computed)",D.config);m(k,true,true,"URI Parameters",D.uriparams);l(k,true,true,"Loaded Modules ("+D.modules.length+")",function(n){n.push("<ul>");$.each(D.modules.sort(),function(i,v){if(v.indexOf("sap.ui.core.support")<0){n.push("<li>",v,"</li>")}});n.push("</ul>")});k.push("</table>");return new sap.ui.core.HTML({content:k.join("").replace(/\{/g,"&#123;").replace(/\}/g,"&#125;")})}function e(){if(a){return a}$.sap.require("sap.m.Dialog");$.sap.require("sap.m.Button");$.sap.require("sap.ui.core.HTML");a=new sap.m.Dialog({title:"Technical Information",horizontalScrolling:true,verticalScrolling:true,stretch:jQuery.device.is.phone,leftButton:new sap.m.Button({text:"Close",type:"Reject",press:function(){a.close()}}),afterOpen:function(){sap.m.Support.off()},afterClose:function(){sap.m.Support.on()}}).addStyleClass("sapMSupport");return a}function f(){var i=$.event.special.orientationchange.orientation();if(i==o.start){s=Date.now();d.addEventListener('touchend',h)}}function h(){var i=Date.now()-s,k=$.event.special.orientationchange.orientation();d.removeEventListener('touchend',h);if(k==o.end&&i>t&&i<c){j()}}function j(){var i=e();i.removeAllAggregation("content");i.addAggregation("content",g());a.open()}return({on:function(){if(!b&&"ontouchstart"in d){b=true;d.addEventListener("touchstart",f)}return this},off:function(){if(b){b=false;d.removeEventListener("touchstart",f)}return this},open:function(){j()}}).on()}(jQuery,document));
