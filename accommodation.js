"use strict";(()=>{var k=e=>{for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},G=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null;var W=e=>!!(e.prop("checked")===!0||e.is(":checked"));var I=()=>localStorage.getItem("enquiry")?localStorage.getItem("enquiry").hasOwnProperty("adults")?(localStorage.setItem("enquiry",JSON.stringify(T)),T):JSON.parse(localStorage.getItem("enquiry")):(localStorage.setItem("enquiry",JSON.stringify(T)),T),K=()=>JSON.parse(localStorage.getItem("suppliers")).details,A=(e,t)=>{let o=I();o[e]=t,localStorage.setItem("enquiry",JSON.stringify(o))},ne=e=>new Date(e.setHours(0,0,0,0)),ge=ne(new Date);var re={adults:1,children:[],doubleBeds:0,singleBeds:0,cots:0},T={activity:2,arrivalDate:!1,departureDate:!1,rooms:[re],airportTransfer:!1,mountainGuiding:!1,heliskiing:!1,skiPasses:!1,equipmentRental:!1,skiSchool:!1,client:{title:"",forename:"",surname:"",email:"",phone:""},comments:"",howHear:"",suppliers:{},whatsapp:!1},V=e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,o){return o==0?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,"");var Y=e=>new Promise((t,o)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}let n=document.createElement("script");n.onload=()=>{t()},n.onerror=()=>{o(new Error(`Error loading ${e}`))},n.src=e,document.body.appendChild(n)}),Z=e=>new Promise((t,o)=>{if(document.querySelector(`link[href="${e}"]`)){t();return}fetch(e).then(n=>n.json()).then(n=>{t(n)}).catch(n=>o(new Error(`Error loading ${e}: ${n.message}`)))}),P=e=>{let t=e.split(".");if(t.length>=2){let o=t.pop();return[t.join("."),o]}return null};var L=()=>{let e=I().suppliers,t=0;for(let o in e)e.hasOwnProperty(o)&&e[o].checked===!0&&($('.filter_added[data-item-id="'+o+'"]').addClass("is-added"),z($('.filter_button[data-item-id="'+o+'"]'),!0),t=t+1);B(t)},B=e=>{let t=0;if(e)t=e;else{let r=I().suppliers;for(let n in r)r.hasOwnProperty(n)&&r[n].checked===!0&&(t=t+1)}let o=$("#enquiryCount");t>0?o.html('<span class="nav_button-text-left">Complete Enquiry</span><span class="nav_button-text-right">('+t+")</span>"):o.html('<span class="nav_button-text-left">Make an Enquiry</span>')};var z=(e,t)=>{let o="<div>Added</div>",r='<div class="icon-1x1-xsmall w-embed"><svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Plus</title><path d="m288 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144h-144c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32v-144h144c17.7 0 32-14.3 32-32s-14.3-32-32-32h-144z"></path></svg></div><div>Add to enquiry</div>';t===!0?e.addClass("is-added").html(o):e.removeClass("is-added").html(r)};function se(){let e=document.getElementById("map"),t=document.getElementById("placeName").innerHTML,o=e.getAttribute("data-zoom")&&e.getAttribute("data-zoom")!==""?Number(e.getAttribute("data-zoom")):14,r=Number(e.getAttribute("data-map-lat")),n=Number(e.getAttribute("data-map-lng")),i=e.getAttribute("data-marker-lat")&&e.getAttribute("data-marker-lat")!==""?Number(e.getAttribute("data-marker-lat")):r,y=e.getAttribute("data-marker-lng")&&e.getAttribute("data-marker-lng")!==""?Number(e.getAttribute("data-marker-lng")):n,c=e.getAttribute("data-ski-lift-lat")&&e.getAttribute("data-ski-lift-lat")!==""?Number(e.getAttribute("data-ski-lift-lat")):null,w=e.getAttribute("data-ski-lift-lng")&&e.getAttribute("data-ski-lift-lng")!==""?Number(e.getAttribute("data-ski-lift-lng")):null,h=new google.maps.LatLng(r,n),F=new google.maps.Map(e,{zoom:o,center:h,mapId:"b0249619239fa08f",mapTypeControl:!1,mapTypeId:"roadmap",scrollwheel:!1,zoomControl:!0,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,draggable:!0});ae(F,[[t,i,y,1]]),function(){let u=c!==null&&w!==null?c+","+w:!1;if(u){console.log("nearestSkiLift",u);let l=document.getElementById("skiLiftRequiresTransfer").innerHTML.toLowerCase(),s=l==="true"?"transfer":"walk";console.log("travelMode",s);var C=new google.maps.DistanceMatrixService;C.getDistanceMatrix({origins:[{lat:i,lng:y}],destinations:[u],travelMode:l==="true"?"DRIVING":"WALKING",unitSystem:google.maps.UnitSystem.METRIC,avoidHighways:!1,avoidTolls:!1},function(a,d){if(d!=="OK")console.log("Google Maps error: "+d);else{var f=a.originAddresses;console.log(f);var m=a.destinationAddresses;console.log(m);var g=document.getElementById("distanceToSkiLift");g.innerHTML="";for(var p=0;p<f.length;p++){var v=a.rows[p].elements;console.log(v);for(var b=0;b<v.length;b++)g.innerHTML+=v[b].distance.text+" ("+v[b].duration.text+" "+s+")"}}})}else{let l=document.getElementById("skiLift");l&&l.remove()}}(),function(){let u={geneva:"Geneva Airport, Switzerland",turinCaselle:"Turin Caselle Airport, Italy",milanLinate:"Milan Linate Airport, Italy",milanBergamo:"Milan Bergamo Airport, Italy",milanMalpensa:"Milan Malpensa Airport, Italy"},C=V(document.getElementById("nearestAirport").innerHTML),l=u[C];var s=new google.maps.DistanceMatrixService;s.getDistanceMatrix({origins:[{lat:i,lng:y}],destinations:[l],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,avoidHighways:!1,avoidTolls:!1},function(a,d){if(d!=="OK")console.log("Google Maps error: "+d);else{var f=a.originAddresses,m=document.getElementById("transferTime");m.innerHTML="";for(var g=0;g<f.length;g++)for(var p=a.rows[g].elements,v=0;v<p.length;v++)m.innerHTML+=p[v].duration.text}})}()}function ae(e,t){let o={url:"https://uploads-ssl.webflow.com/62cdb1d040dc8c2af67a35e2/65424682dbcb40a84b02df58_zuba-map-pin-blue.svg",size:new google.maps.Size(28,38),scaledSize:new google.maps.Size(28,38),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(14,38)},r={coords:[0,0,0,27,27,27,27,0],type:"poly"};for(let n=0;n<t.length;n++){let i=t[n];new google.maps.Marker({position:{lat:i[1],lng:i[2]},map:e,icon:o,shape:r,title:i[0],zIndex:i[3],animation:google.maps.Animation.DROP})}}window.initMap=se;function ie(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}else return Array.from(e)}var R=!1;typeof window!="undefined"&&(H={get passive(){R=!0}},window.addEventListener("testPassive",null,H),window.removeEventListener("testPassive",null,H));var H,M=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),x=[],D=!1,X=-1,E=void 0,S=void 0,_=void 0,j=function(t){return x.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(t))})},q=function(t){var o=t||window.event;return j(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},le=function(t){if(_===void 0){var o=!!t&&t.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(o&&r>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);_=document.body.style.paddingRight,document.body.style.paddingRight=n+r+"px"}}E===void 0&&(E=document.body.style.overflow,document.body.style.overflow="hidden")},ce=function(){_!==void 0&&(document.body.style.paddingRight=_,_=void 0),E!==void 0&&(document.body.style.overflow=E,E=void 0)},de=function(){return window.requestAnimationFrame(function(){if(S===void 0){S={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,o=t.scrollY,r=t.scrollX,n=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var i=n-window.innerHeight;i&&o>=n&&(document.body.style.top=-(o+i))})},300)}})},ue=function(){if(S!==void 0){var t=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=S.position,document.body.style.top=S.top,document.body.style.left=S.left,window.scrollTo(o,t),S=void 0}},pe=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},me=function(t,o){var r=t.targetTouches[0].clientY-X;return j(t.target)?!1:o&&o.scrollTop===0&&r>0||pe(o)&&r<0?q(t):(t.stopPropagation(),!0)},Q=function(t,o){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!x.some(function(n){return n.targetElement===t})){var r={targetElement:t,options:o||{}};x=[].concat(ie(x),[r]),M?de():le(o),M&&(t.ontouchstart=function(n){n.targetTouches.length===1&&(X=n.targetTouches[0].clientY)},t.ontouchmove=function(n){n.targetTouches.length===1&&me(n,t)},D||(document.addEventListener("touchmove",q,R?{passive:!1}:void 0),D=!0))}};var ee=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}x=x.filter(function(o){return o.targetElement!==t}),M&&(t.ontouchstart=null,t.ontouchmove=null,D&&x.length===0&&(document.removeEventListener("touchmove",q,R?{passive:!1}:void 0),D=!1)),M?ue():ce()};var J=(e,t)=>{if(document.getElementById(e)){let o=document.getElementById(e);Q(o,{reserveScrollBarGap:!0});let r=$(o);r.find(".modal_loading").removeClass("is-loaded"),r.removeClass("is-closed").addClass("is-opening");let n=r.find(".modal_background");n.fadeIn(350),t&&t(),setTimeout(function(){r.removeClass("is-opening").addClass("is-open"),o.querySelector(".modal_content").scroll(0,0),n.on("click",function(){U(e)})},350)}},U=e=>{if(document.getElementById(e)){let t=$("#"+e);t.removeClass("is-open").addClass("is-closing"),t.find(".modal_background").fadeOut(200),setTimeout(function(){t.removeClass("is-closing").addClass("is-closed"),t.find(".modal_loading").addClass("is-loaded");let o=document.getElementById(e);ee(o)},200)}},te=()=>{$("[s-modal-open]").on("click",function(){let e=$(this).attr("s-modal-open");J(e)}),$("[s-modal-close]").on("click",function(){let e=$(this).attr("s-modal-close");U(e)}),$(".modal_close").each(function(){$(this).on("click",function(e){e.preventDefault();var t=$(e.target).closest(".modal_component").attr("id");U(t)})})};var oe=()=>{let e="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/65537bff41235e716ab887ed_zuba-ski-icon_add.svg",t="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/654e4d3358daed16960da647_zuba-ski-icon_added.svg",o=n=>{let i;localStorage.getItem("suppliers")&&typeof localStorage.getItem("suppliers")!="undefined"&&G(JSON.parse(localStorage.getItem("suppliers")))===!0&&Date.now()-new Date(Number(JSON.parse(localStorage.getItem("suppliers")).lastUpdated)).getTime()<9e5?(i=JSON.parse(localStorage.getItem("suppliers")),console.log("suppliers from local",i),n(i)):Z(["https://europe-west3-zuba-webflow.cloudfunctions.net/getSuppliers"]).then(y=>{i=y,console.log("suppliers from firebase",i),i.lastUpdated=Date.now().toString(),localStorage.setItem("suppliers",JSON.stringify(i)),n(i)}).catch(y=>{console.error(y)})};$('[s-modal-open="suggested"]').on("click",function(){r($(this))});let r=n=>{let i=n.attr("s-modal-open");$("#"+i).find(".modal_loading").removeClass("is-loaded"),J(i),o(c=>{c=c.details,console.log("suppliers",c);let w=I().suppliers,h=n.attr("data-item-id");if(k(c[h])===!1){let l={};l.name=c[h].name,l.resort=c[h].resort,l.url=c[h].url;let s=c[h].img,a=P(s);a!==null?(console.log("File Name:",a[0]),console.log("Extension:",a[1]),s=a[0]+"-p-500."+a[1]):console.log("Invalid Image URL"),l.img=s,l.checked=!0,w[h]=l,A("suppliers",w),z(n,!0),$(".added_image").attr("src",l.img),$(".added_hotel").text(l.name+", "+l.resort)}else return;let N=c[h]["related-accommodation-ref"];console.log("related",N);let u={};if($.each(N,function(l,s){console.log("value",s);let a=s,d=k(w[a])===!0,f=k(c[a])===!1;if(d&&f){let m={};m.name=c[a].name,m.resort=c[a].resort,m.url=c[a].url,m.img=c[a].img,m.boarding=c[a].boarding,console.log("supplier",m),u[a]=m}}),console.log("enquirySuppliers",w),console.log("relatedSuppliers",u),k(u)===!1){$(".suggested_block").show(),$(".suggested_list").empty();let l=0;for(let s in u){l+=1;let a=u[s].img,d=P(a);d!==null?a=d[0]+"-p-500."+d[1]:console.log("Invalid Image URL"),$(".suggested_list").append('<div class="suggested_item" id="'+s+'"><div class="suggested_figure"><img src="'+a+'" alt="'+u[s].name+'" loading="lazy" class="fill-image"><div class="shadow-overlay"></div><div class="suggested_category"><div class="suggested_category-link w-inline-block"><img src="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/65535ae0c1feaa56bc1dbf19_zuba-ski-icon_zuba-ski-icon_location_black-medium.svg" loading="lazy" alt="" class="icon-1x1-xsmall"><div>'+u[s].resort+'</div></div></div><div class="filter_added is-suggested"><div class="filter_added-button"><img src="'+e+'" loading="lazy" alt="" class="filter_added-icon"></div></div><label class="w-checkbox checkbox_field"><input type="checkbox" id="your-pick_'+s+'" name="your-pick_'+s+'" data-name="your-pick_'+s+'" class="w-checkbox-input checkbox_button"><span class="checkbox_label w-form-label" for="your-pick_'+s+'"></span></label></div><div class="suggested_body"><div class="suggested_header"><div class="suggested_title"><h4 class="suggested_name">'+u[s].name+'</h4></div></div><div class="suggested_text-wrapper"><div class="suggested_resort-link w-inline-block"><div class="icon-1x1-xsmall w-embed"><svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Location</title><path d="m10 9c.6 0 1.1-.2 1.5-.6s.6-.9.6-1.5-.2-1.1-.6-1.5c-.8-.8-2.2-.8-3 0-.4.4-.6.9-.6 1.5s.2 1.1.6 1.5.9.6 1.5.6z"></path><path d="m15.7 17.7h-11.4c-.3 0-.6.1-.8.3s-.3.5-.3.8.1.6.3.8c.2.3.4.4.8.4h11.5c.3 0 .6-.1.8-.3s.3-.5.3-.8-.1-.6-.3-.8c-.3-.3-.5-.4-.9-.4z"></path><path d="m9.1 16c.1.1.3.2.4.3.2.1.3.1.5.1s.3 0 .5-.1.3-.1.4-.2c1.3-1 2.6-2.3 3.9-3.8s2-3.3 2-5.2c0-1.1-.2-2.2-.6-3-.4-.9-1-1.6-1.6-2.2-.7-.6-1.4-1-2.2-1.3-1.6-.6-3.2-.6-4.8 0-.8.1-1.6.6-2.2 1.2-.7.6-1.3 1.3-1.7 2.2s-.6 1.9-.6 3c0 1.9.7 3.6 2 5.2 1.3 1.5 2.7 2.8 4 3.8zm-3.7-9c0-.9.2-1.6.5-2.2s.7-1 1.1-1.4c.5-.4 1-.7 1.5-.8.5-.2 1-.3 1.5-.3s.9.1 1.5.3c.5.1 1 .4 1.5.8s.8.9 1.2 1.5c.3.6.5 1.3.5 2.2 0 1-.4 2.1-1.2 3.2s-1.9 2.3-3.4 3.5c-1.5-1.2-2.6-2.4-3.4-3.5-.9-1.2-1.3-2.3-1.3-3.3z"></path></svg></div><div>'+u[s].resort+"</div></div></div></div></div>")}$("#suggested .checkbox_button").on("change",function(){let s=$(this),a=s.closest(".checkbox_field");a.addClass("pointer-events-off");let d=s.closest(".suggested_item"),f=d.find(".filter_added"),m=W(s),g=d.attr("id");console.log("supplierId",g);let p=I().suppliers;console.log("suppliersInTheEnquiry",p);let v=p[g];console.log("thisSupplierInEnquiry",v);let b=k(v)===!1;if(console.log("thisSupplierHasAlreadyBeenAdded",b),m){if(b)p[g].checked=!0,A("suppliers",p);else{let O=K()[g];console.log(O),O.checked=!0,p[g]=O,A("suppliers",p)}B(),s.attr("checked","checked"),s.prop("checked",!0),f.addClass("is-added animating"),setTimeout(function(){d.find(".filter_added-icon").attr("src",t)},125),setTimeout(function(){f.removeClass("animating"),a.removeClass("pointer-events-off")},250)}else b&&(delete p[g],A("suppliers",p)),B(),s.removeAttr("checked"),s.prop("checked",!1),f.addClass("animating"),setTimeout(function(){f.removeClass("is-added"),d.find(".filter_added-icon").attr("src",e)},125),setTimeout(function(){f.removeClass("animating"),a.removeClass("pointer-events-off")},250)})}else $(".suggested_block").hide();$("#"+i).find(".modal_loading").addClass("is-loaded"),L()})}};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{$(".hero-gallery_sub-grid .hero-gallery_item").on("click",function(){let e=$(this).index();console.log(e),$("#hidden-hero-gallery").find(".w-dyn-item").eq(e).find(".w-lightbox").trigger("click")}),te(),oe(),L(),Y("https://maps.googleapis.com/maps/api/js?key=AIzaSyAsmJ7vkgSH7CEy0iMv7aKGD95oGRNgsUI&callback=initMap&v=weekly")});})();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
