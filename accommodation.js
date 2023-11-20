"use strict";(()=>{function oe(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}else return Array.from(e)}var z=!1;typeof window!="undefined"&&(P={get passive(){z=!0}},window.addEventListener("testPassive",null,P),window.removeEventListener("testPassive",null,P));var P,T=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),S=[],L=!1,G=-1,A=void 0,w=void 0,_=void 0,W=function(t){return S.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(t))})},B=function(t){var o=t||window.event;return W(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},ne=function(t){if(_===void 0){var o=!!t&&t.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(o&&r>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);_=document.body.style.paddingRight,document.body.style.paddingRight=n+r+"px"}}A===void 0&&(A=document.body.style.overflow,document.body.style.overflow="hidden")},re=function(){_!==void 0&&(document.body.style.paddingRight=_,_=void 0),A!==void 0&&(document.body.style.overflow=A,A=void 0)},se=function(){return window.requestAnimationFrame(function(){if(w===void 0){w={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,o=t.scrollY,r=t.scrollX,n=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var i=n-window.innerHeight;i&&o>=n&&(document.body.style.top=-(o+i))})},300)}})},ae=function(){if(w!==void 0){var t=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=w.position,document.body.style.top=w.top,document.body.style.left=w.left,window.scrollTo(o,t),w=void 0}},ie=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},le=function(t,o){var r=t.targetTouches[0].clientY-G;return W(t.target)?!1:o&&o.scrollTop===0&&r>0||ie(o)&&r<0?B(t):(t.stopPropagation(),!0)},V=function(t,o){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!S.some(function(n){return n.targetElement===t})){var r={targetElement:t,options:o||{}};S=[].concat(oe(S),[r]),T?se():ne(o),T&&(t.ontouchstart=function(n){n.targetTouches.length===1&&(G=n.targetTouches[0].clientY)},t.ontouchmove=function(n){n.targetTouches.length===1&&le(n,t)},L||(document.addEventListener("touchmove",B,z?{passive:!1}:void 0),L=!0))}};var Y=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}S=S.filter(function(o){return o.targetElement!==t}),T&&(t.ontouchstart=null,t.ontouchmove=null,L&&S.length===0&&(document.removeEventListener("touchmove",B,z?{passive:!1}:void 0),L=!1)),T?ae():re()};var R=(e,t)=>{if(document.getElementById(e)){let o=document.getElementById(e);V(o,{reserveScrollBarGap:!0});let r=$(o);r.find(".modal_loading").removeClass("is-loaded"),r.removeClass("is-closed").addClass("is-opening");let n=r.find(".modal_background");n.fadeIn(350),t&&t(),setTimeout(function(){r.removeClass("is-opening").addClass("is-open"),o.querySelector(".modal_content").scroll(0,0),n.on("click",function(){H(e)})},350)}},H=e=>{if(document.getElementById(e)){let t=$("#"+e);t.removeClass("is-open").addClass("is-closing"),t.find(".modal_background").fadeOut(200),setTimeout(function(){t.removeClass("is-closing").addClass("is-closed"),t.find(".modal_loading").addClass("is-loaded");let o=document.getElementById(e);Y(o)},200)}},K=()=>{$("[s-modal-open]").on("click",function(){let e=$(this).attr("s-modal-open");R(e)}),$("[s-modal-close]").on("click",function(){let e=$(this).attr("s-modal-close");H(e)}),$(".modal_close").each(function(){$(this).on("click",function(e){e.preventDefault();var t=$(e.target).closest(".modal_component").attr("id");H(t)})})};var I=e=>{for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},Z=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null;var X=e=>!!(e.prop("checked")===!0||e.is(":checked"));var k=()=>localStorage.getItem("enquiry")?localStorage.getItem("enquiry").hasOwnProperty("adults")?(localStorage.setItem("enquiry",JSON.stringify(M)),M):JSON.parse(localStorage.getItem("enquiry")):(localStorage.setItem("enquiry",JSON.stringify(M)),M),Q=()=>JSON.parse(localStorage.getItem("suppliers")).details,E=(e,t)=>{let o=k();o[e]=t,localStorage.setItem("enquiry",JSON.stringify(o))},de=e=>new Date(e.setHours(0,0,0,0)),he=de(new Date);var ce={adults:1,children:[],doubleBeds:0,singleBeds:0,cots:0},M={activity:2,arrivalDate:!1,departureDate:!1,rooms:[ce],airportTransfer:!1,mountainGuiding:!1,heliskiing:!1,skiPasses:!1,equipmentRental:!1,skiSchool:!1,client:{title:"",forename:"",surname:"",email:"",phone:""},comments:"",howHear:"",suppliers:{},whatsapp:!1},j=e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,o){return o==0?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,"");var ee=e=>new Promise((t,o)=>{if(document.querySelector(`link[href="${e}"]`)){t();return}fetch(e).then(n=>n.json()).then(n=>{t(n)}).catch(n=>o(new Error(`Error loading ${e}: ${n.message}`)))}),U=e=>{let t=e.split(".");if(t.length>=2){let o=t.pop();return[t.join("."),o]}return null};var D=()=>{let e=k().suppliers,t=0;for(let o in e)e.hasOwnProperty(o)&&e[o].checked===!0&&($('.filter_added[data-item-id="'+o+'"]').addClass("is-added"),J($('.filter_button[data-item-id="'+o+'"]'),!0),t=t+1);q(t)},q=e=>{let t=0;if(e)t=e;else{let r=k().suppliers;for(let n in r)r.hasOwnProperty(n)&&r[n].checked===!0&&(t=t+1)}let o=$("#enquiryCount");t>0?o.html('<span class="nav_button-text-left">Complete Enquiry</span><span class="nav_button-text-right">('+t+")</span>"):o.html('<span class="nav_button-text-left">Make an Enquiry</span>')};var J=(e,t)=>{let o="<div>Added</div>",r='<div class="icon-1x1-xsmall w-embed"><svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Plus</title><path d="m288 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144h-144c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32v-144h144c17.7 0 32-14.3 32-32s-14.3-32-32-32h-144z"></path></svg></div><div>Add to enquiry</div>';t===!0?e.addClass("is-added").html(o):e.removeClass("is-added").html(r)};var te=()=>{let e="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/65537bff41235e716ab887ed_zuba-ski-icon_add.svg",t="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/654e4d3358daed16960da647_zuba-ski-icon_added.svg",o=n=>{let i;localStorage.getItem("suppliers")&&typeof localStorage.getItem("suppliers")!="undefined"&&Z(JSON.parse(localStorage.getItem("suppliers")))===!0&&Date.now()-new Date(Number(JSON.parse(localStorage.getItem("suppliers")).lastUpdated)).getTime()<9e5?(i=JSON.parse(localStorage.getItem("suppliers")),console.log("suppliers from local",i),n(i)):ee(["https://europe-west3-zuba-webflow.cloudfunctions.net/getSuppliers"]).then(x=>{i=x,console.log("suppliers from firebase",i),i.lastUpdated=Date.now().toString(),localStorage.setItem("suppliers",JSON.stringify(i)),n(i)}).catch(x=>{console.error(x)})};$('[s-modal-open="suggested"]').on("click",function(){r($(this))});let r=n=>{let i=n.attr("s-modal-open");$("#"+i).find(".modal_loading").removeClass("is-loaded"),R(i),o(d=>{d=d.details,console.log("suppliers",d);let b=k().suppliers,v=n.attr("data-item-id");if(I(d[v])===!1){let l={};l.name=d[v].name,l.resort=d[v].resort,l.url=d[v].url;let s=d[v].img,a=U(s);a!==null?(console.log("File Name:",a[0]),console.log("Extension:",a[1]),s=a[0]+"-p-500."+a[1]):console.log("Invalid Image URL"),l.img=s,l.checked=!0,b[v]=l,E("suppliers",b),J(n,!0),$(".added_image").attr("src",l.img),$(".added_hotel").text(l.name+", "+l.resort)}else return;let N=d[v]["related-accommodation-ref"];console.log("related",N);let p={};if($.each(N,function(l,s){console.log("value",s);let a=s,c=I(b[a])===!0,g=I(d[a])===!1;if(c&&g){let m={};m.name=d[a].name,m.resort=d[a].resort,m.url=d[a].url,m.img=d[a].img,m.boarding=d[a].boarding,console.log("supplier",m),p[a]=m}}),console.log("enquirySuppliers",b),console.log("relatedSuppliers",p),I(p)===!1){$(".suggested_block").show(),$(".suggested_list").empty();let l=0;for(let s in p){l+=1;let a=p[s].img,c=U(a);c!==null?a=c[0]+"-p-500."+c[1]:console.log("Invalid Image URL"),$(".suggested_list").append('<div class="suggested_item" id="'+s+'"><div class="suggested_figure"><img src="'+a+'" alt="'+p[s].name+'" loading="lazy" class="fill-image"><div class="shadow-overlay"></div><div class="suggested_category"><div class="suggested_category-link w-inline-block"><img src="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/65535ae0c1feaa56bc1dbf19_zuba-ski-icon_zuba-ski-icon_location_black-medium.svg" loading="lazy" alt="" class="icon-1x1-xsmall"><div>'+p[s].resort+'</div></div></div><div class="filter_added is-suggested"><div class="filter_added-button"><img src="'+e+'" loading="lazy" alt="" class="filter_added-icon"></div></div><label class="w-checkbox checkbox_field"><input type="checkbox" id="your-pick_'+s+'" name="your-pick_'+s+'" data-name="your-pick_'+s+'" class="w-checkbox-input checkbox_button"><span class="checkbox_label w-form-label" for="your-pick_'+s+'"></span></label></div><div class="suggested_body"><div class="suggested_header"><div class="suggested_title"><h4 class="suggested_name">'+p[s].name+'</h4></div></div><div class="suggested_text-wrapper"><div class="suggested_resort-link w-inline-block"><div class="icon-1x1-xsmall w-embed"><svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Location</title><path d="m10 9c.6 0 1.1-.2 1.5-.6s.6-.9.6-1.5-.2-1.1-.6-1.5c-.8-.8-2.2-.8-3 0-.4.4-.6.9-.6 1.5s.2 1.1.6 1.5.9.6 1.5.6z"></path><path d="m15.7 17.7h-11.4c-.3 0-.6.1-.8.3s-.3.5-.3.8.1.6.3.8c.2.3.4.4.8.4h11.5c.3 0 .6-.1.8-.3s.3-.5.3-.8-.1-.6-.3-.8c-.3-.3-.5-.4-.9-.4z"></path><path d="m9.1 16c.1.1.3.2.4.3.2.1.3.1.5.1s.3 0 .5-.1.3-.1.4-.2c1.3-1 2.6-2.3 3.9-3.8s2-3.3 2-5.2c0-1.1-.2-2.2-.6-3-.4-.9-1-1.6-1.6-2.2-.7-.6-1.4-1-2.2-1.3-1.6-.6-3.2-.6-4.8 0-.8.1-1.6.6-2.2 1.2-.7.6-1.3 1.3-1.7 2.2s-.6 1.9-.6 3c0 1.9.7 3.6 2 5.2 1.3 1.5 2.7 2.8 4 3.8zm-3.7-9c0-.9.2-1.6.5-2.2s.7-1 1.1-1.4c.5-.4 1-.7 1.5-.8.5-.2 1-.3 1.5-.3s.9.1 1.5.3c.5.1 1 .4 1.5.8s.8.9 1.2 1.5c.3.6.5 1.3.5 2.2 0 1-.4 2.1-1.2 3.2s-1.9 2.3-3.4 3.5c-1.5-1.2-2.6-2.4-3.4-3.5-.9-1.2-1.3-2.3-1.3-3.3z"></path></svg></div><div>'+p[s].resort+"</div></div></div></div></div>")}$("#suggested .checkbox_button").on("change",function(){let s=$(this),a=s.closest(".checkbox_field");a.addClass("pointer-events-off");let c=s.closest(".suggested_item"),g=c.find(".filter_added"),m=X(s),f=c.attr("id");console.log("supplierId",f);let u=k().suppliers;console.log("suppliersInTheEnquiry",u);let h=u[f];console.log("thisSupplierInEnquiry",h);let y=I(h)===!1;if(console.log("thisSupplierHasAlreadyBeenAdded",y),m){if(y)u[f].checked=!0,E("suppliers",u);else{let O=Q()[f];console.log(O),O.checked=!0,u[f]=O,E("suppliers",u)}q(),s.attr("checked","checked"),s.prop("checked",!0),g.addClass("is-added animating"),setTimeout(function(){c.find(".filter_added-icon").attr("src",t)},125),setTimeout(function(){g.removeClass("animating"),a.removeClass("pointer-events-off")},250)}else y&&(delete u[f],E("suppliers",u)),q(),s.removeAttr("checked"),s.prop("checked",!1),g.addClass("animating"),setTimeout(function(){g.removeClass("is-added"),c.find(".filter_added-icon").attr("src",e)},125),setTimeout(function(){g.removeClass("animating"),a.removeClass("pointer-events-off")},250)})}else $(".suggested_block").hide();$("#"+i).find(".modal_loading").addClass("is-loaded"),D()})}};function ue(){let e=document.getElementById("map"),t=document.getElementById("placeName").innerHTML,o=e.getAttribute("data-zoom")&&e.getAttribute("data-zoom")!==""?Number(e.getAttribute("data-zoom")):14,r=Number(e.getAttribute("data-map-lat")),n=Number(e.getAttribute("data-map-lng")),i=e.getAttribute("data-marker-lat")&&e.getAttribute("data-marker-lat")!==""?Number(e.getAttribute("data-marker-lat")):r,x=e.getAttribute("data-marker-lng")&&e.getAttribute("data-marker-lng")!==""?Number(e.getAttribute("data-marker-lng")):n,d=e.getAttribute("data-ski-lift-lat")&&e.getAttribute("data-ski-lift-lat")!==""?Number(e.getAttribute("data-ski-lift-lat")):null,b=e.getAttribute("data-ski-lift-lng")&&e.getAttribute("data-ski-lift-lng")!==""?Number(e.getAttribute("data-ski-lift-lng")):null,v=new google.maps.LatLng(r,n),F=new google.maps.Map(e,{zoom:o,center:v,mapId:"b0249619239fa08f",mapTypeControl:!1,mapTypeId:"roadmap",scrollwheel:!1,zoomControl:!0,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,draggable:!0});pe(F,[[t,i,x,1]]),function(){let p=d!==null&&b!==null?d+","+b:!1;if(p){let l=document.getElementById("skiLiftRequiresTransfer").innerHTML.toLowerCase(),s=l==="true"?"transfer":"walk";var C=new google.maps.DistanceMatrixService;C.getDistanceMatrix({origins:[{lat:r,lng:n}],destinations:[p],travelMode:l==="true"?"DRIVING":"WALKING",unitSystem:google.maps.UnitSystem.METRIC,avoidHighways:!1,avoidTolls:!1},function(a,c){if(c!=="OK")console.log("Google Maps error: "+c);else{var g=a.originAddresses;console.log(g);var m=a.destinationAddresses;console.log(m);var f=document.getElementById("distanceToSkiLift");f.innerHTML="";for(var u=0;u<g.length;u++){var h=a.rows[u].elements;console.log(h);for(var y=0;y<h.length;y++)f.innerHTML+=h[y].distance.text+" ("+h[y].duration.text+" "+s+")"}}})}else{let l=document.getElementById("skiLift");l&&l.remove()}}(),function(){let p={geneva:"Geneva Airport, Switzerland",turinCaselle:"Turin Caselle Airport, Italy",milanLinate:"Milan Linate Airport, Italy",milanBergamo:"Milan Bergamo Airport, Italy",milanMalpensa:"Milan Malpensa Airport, Italy"},C=j(document.getElementById("nearestAirport").innerHTML),l=p[C];var s=new google.maps.DistanceMatrixService;s.getDistanceMatrix({origins:[{lat:r,lng:n}],destinations:[l],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,avoidHighways:!1,avoidTolls:!1},function(a,c){if(c!=="OK")console.log("Google Maps error: "+c);else{var g=a.originAddresses,m=document.getElementById("transferTime");m.innerHTML="";for(var f=0;f<g.length;f++)for(var u=a.rows[f].elements,h=0;h<u.length;h++)m.innerHTML+=u[h].duration.text}})}()}function pe(e,t){let o={url:"https://uploads-ssl.webflow.com/62cdb1d040dc8c2af67a35e2/65424682dbcb40a84b02df58_zuba-map-pin-blue.svg",size:new google.maps.Size(28,38),scaledSize:new google.maps.Size(28,38),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(14,38)},r={coords:[0,0,0,27,27,27,27,0],type:"poly"};for(let n=0;n<t.length;n++){let i=t[n];new google.maps.Marker({position:{lat:i[1],lng:i[2]},map:e,icon:o,shape:r,title:i[0],zIndex:i[3],animation:google.maps.Animation.DROP})}}window.initMap=ue;window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{$(".hero-gallery_sub-grid .hero-gallery_item").on("click",function(){let e=$(this).index();console.log(e),$("#hidden-hero-gallery").find(".w-dyn-item").eq(e).find(".w-lightbox").trigger("click")}),K(),te(),D()});})();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
