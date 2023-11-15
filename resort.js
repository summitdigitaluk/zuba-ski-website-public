"use strict";(()=>{var k=e=>new Date(e.setHours(0,0,0,0)),D=k(new Date);var w=e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(n,r){return r==0?n.toLowerCase():n.toUpperCase()}).replace(/\s+/g,"");var S=e=>{Array.from(document.querySelectorAll(e)).forEach(r=>{let a=r.getAttribute("alt"),t=r.nextElementSibling;t&&t.classList.contains("caption")?t.textContent=a:r.insertAdjacentHTML("afterEnd",`<p class="caption">${a}</p>`)})};function E(){let e=document.getElementById("map"),n=document.getElementById("placeName").innerHTML,r=e.getAttribute("data-zoom")&&e.getAttribute("data-zoom")!==""?Number(e.getAttribute("data-zoom")):14,a=Number(e.getAttribute("data-map-lat")),t=Number(e.getAttribute("data-map-lng")),i=e.getAttribute("data-marker-lat")&&e.getAttribute("data-marker-lat")!==""?Number(e.getAttribute("data-marker-lat")):a,b=e.getAttribute("data-marker-lng")&&e.getAttribute("data-marker-lng")!==""?Number(e.getAttribute("data-marker-lng")):t,x=e.getAttribute("data-ski-lift-lat")&&e.getAttribute("data-ski-lift-lat")!==""?Number(e.getAttribute("data-ski-lift-lat")):null,v=e.getAttribute("data-ski-lift-lng")&&e.getAttribute("data-ski-lift-lng")!==""?Number(e.getAttribute("data-ski-lift-lng")):null,A=new google.maps.LatLng(a,t),I=new google.maps.Map(e,{zoom:r,center:A,mapId:"b0249619239fa08f",mapTypeControl:!1,mapTypeId:"roadmap",scrollwheel:!1,zoomControl:!0,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,draggable:!0});L(I,[[n,i,b,1]]),function(){let u=x!==null&&v!==null?x+","+v:!1;if(u){let s=document.getElementById("skiLiftRequiresTransfer").innerHTML.toLowerCase(),y=s==="true"?"transfer":"walk";var h=new google.maps.DistanceMatrixService;h.getDistanceMatrix({origins:[{lat:a,lng:t}],destinations:[u],travelMode:s==="true"?"DRIVING":"WALKING",unitSystem:google.maps.UnitSystem.METRIC,avoidHighways:!1,avoidTolls:!1},function(l,d){if(d!=="OK")console.log("Google Maps error: "+d);else{var m=l.originAddresses;console.log(m);var g=l.destinationAddresses;console.log(g);var c=document.getElementById("distanceToSkiLift");c.innerHTML="";for(var p=0;p<m.length;p++){var o=l.rows[p].elements;console.log(o);for(var f=0;f<o.length;f++)c.innerHTML+=o[f].distance.text+" ("+o[f].duration.text+" "+y+")"}}})}else{let s=document.getElementById("skiLift");s&&s.remove()}}(),function(){let u={geneva:"Geneva Airport, Switzerland",turinCaselle:"Turin Caselle Airport, Italy",milanLinate:"Milan Linate Airport, Italy",milanBergamo:"Milan Bergamo Airport, Italy",milanMalpensa:"Milan Malpensa Airport, Italy"},h=w(document.getElementById("nearestAirport").innerHTML),s=u[h];var y=new google.maps.DistanceMatrixService;y.getDistanceMatrix({origins:[{lat:a,lng:t}],destinations:[s],travelMode:"DRIVING",unitSystem:google.maps.UnitSystem.METRIC,avoidHighways:!1,avoidTolls:!1},function(l,d){if(d!=="OK")console.log("Google Maps error: "+d);else{var m=l.originAddresses,g=document.getElementById("transferTime");g.innerHTML="";for(var c=0;c<m.length;c++)for(var p=l.rows[c].elements,o=0;o<p.length;o++)g.innerHTML+=p[o].duration.text}})}()}function L(e,n){let r={url:"https://uploads-ssl.webflow.com/62cdb1d040dc8c2af67a35e2/65424682dbcb40a84b02df58_zuba-map-pin-blue.svg",size:new google.maps.Size(28,38),scaledSize:new google.maps.Size(28,38),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(14,38)},a={coords:[0,0,0,27,27,27,27,0],type:"poly"};for(let t=0;t<n.length;t++){let i=n[t];new google.maps.Marker({position:{lat:i[1],lng:i[2]},map:e,icon:r,shape:a,title:i[0],zIndex:i[3],animation:google.maps.Animation.DROP})}}window.initMap=E;window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{S(".lodging_slider .fill-image")});})();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
