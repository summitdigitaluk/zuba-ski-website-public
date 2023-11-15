"use strict";(()=>{var p=t=>{for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},T=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null;var D=t=>!!(t.prop("checked")===!0||t.is(":checked"));var Y=t=>{var e=t?t.substring(1):location.search.substring(1);try{return JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}catch{return{}}};var _=()=>localStorage.getItem("enquiry")?JSON.parse(localStorage.getItem("enquiry")):(localStorage.setItem("enquiry",JSON.stringify(G)),G),Z=()=>JSON.parse(localStorage.getItem("suppliers")).details,k=(t,e)=>{let o=_();o[t]=e,localStorage.setItem("enquiry",JSON.stringify(o))},ne=t=>new Date(t.setHours(0,0,0,0)),he=ne(new Date);var le={adults:1,children:[],doubleBeds:0,singleBeds:0,cots:0},G={activity:2,arrivalDate:!1,departureDate:!1,rooms:[le],airportTransfer:!1,mountainGuiding:!1,heliskiing:!1,skiPasses:!1,equipmentRental:!1,skiSchool:!1,client:{title:"",forename:"",surname:"",email:"",phone:""},comments:"",howHear:"",suppliers:{},whatsApp:!1};var Q=t=>new Promise((e,o)=>{if(document.querySelector(`script[src="${t}"]`)){e();return}let s=document.createElement("script");s.onload=()=>{e()},s.onerror=()=>{o(new Error(`Error loading ${t}`))},s.src=t,document.body.appendChild(s)}),B=t=>new Promise((e,o)=>{if(document.querySelector(`link[href="${t}"]`)){e();return}fetch(t).then(s=>s.json()).then(s=>{e(s)}).catch(s=>o(new Error(`Error loading ${t}: ${s.message}`)))}),M=t=>{let e=t.split(".");if(e.length>=2){let o=e.pop();return[e.join("."),o]}return null};var V=t=>{$(t).each(function(){let e=$(this).text();$(this).empty().html(e)})},O=()=>{let t=_().suppliers,e=0;for(let o in t)t.hasOwnProperty(o)&&t[o].checked===!0&&($('.filter_added[data-item-id="'+o+'"]').addClass("is-added"),F($('.filter_button[data-item-id="'+o+'"]'),!0),e=e+1);ae(e)},ae=t=>{let e=0;if(t)e=t;else{let i=_().suppliers;for(let s in i)i.hasOwnProperty(s)&&i[s].checked===!0&&(e=e+1)}let o=$("#enquiryCount");e>0?o.text("Complete Enquiry ("+e+")"):o.text("Make an Enquiry")};var F=(t,e)=>{let o="<div>Added</div>",i='<div class="icon-1x1-xsmall w-embed"><svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>Plus</title><path d="m288 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144h-144c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32v-144h144c17.7 0 32-14.3 32-32s-14.3-32-32-32h-144z"></path></svg></div><div>Add to enquiry</div>';e===!0?t.addClass("is-added").html(o):t.removeClass("is-added").html(i)};function ce(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var R=!1;typeof window!="undefined"&&(z={get passive(){R=!0}},window.addEventListener("testPassive",null,z),window.removeEventListener("testPassive",null,z));var z,q=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),S=[],P=!1,X=-1,C=void 0,w=void 0,E=void 0,K=function(e){return S.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},L=function(e){var o=e||window.event;return K(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},de=function(e){if(E===void 0){var o=!!e&&e.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;if(o&&i>0){var s=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);E=document.body.style.paddingRight,document.body.style.paddingRight=s+i+"px"}}C===void 0&&(C=document.body.style.overflow,document.body.style.overflow="hidden")},ue=function(){E!==void 0&&(document.body.style.paddingRight=E,E=void 0),C!==void 0&&(document.body.style.overflow=C,C=void 0)},fe=function(){return window.requestAnimationFrame(function(){if(w===void 0){w={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,i=e.scrollX,s=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-i,setTimeout(function(){return window.requestAnimationFrame(function(){var r=s-window.innerHeight;r&&o>=s&&(document.body.style.top=-(o+r))})},300)}})},pe=function(){if(w!==void 0){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=w.position,document.body.style.top=w.top,document.body.style.left=w.left,window.scrollTo(o,e),w=void 0}},me=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},ge=function(e,o){var i=e.targetTouches[0].clientY-X;return K(e.target)?!1:o&&o.scrollTop===0&&i>0||me(o)&&i<0?L(e):(e.stopPropagation(),!0)},ee=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!S.some(function(s){return s.targetElement===e})){var i={targetElement:e,options:o||{}};S=[].concat(ce(S),[i]),q?fe():de(o),q&&(e.ontouchstart=function(s){s.targetTouches.length===1&&(X=s.targetTouches[0].clientY)},e.ontouchmove=function(s){s.targetTouches.length===1&&ge(s,e)},P||(document.addEventListener("touchmove",L,R?{passive:!1}:void 0),P=!0))}};var te=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}S=S.filter(function(o){return o.targetElement!==e}),q&&(e.ontouchstart=null,e.ontouchmove=null,P&&S.length===0&&(document.removeEventListener("touchmove",L,R?{passive:!1}:void 0),P=!1)),q?pe():ue()};var W=(t,e)=>{if(document.getElementById(t)){let o=document.getElementById(t);ee(o,{reserveScrollBarGap:!0});let i=$(o);i.find(".modal_loading").removeClass("is-loaded"),i.removeClass("is-closed").addClass("is-opening");let s=i.find(".modal_background");s.fadeIn(350),e&&e(),setTimeout(function(){i.removeClass("is-opening").addClass("is-open"),o.querySelector(".modal_content").scroll(0,0),s.on("click",function(){H(t)})},350)}},H=t=>{if(document.getElementById(t)){let e=$("#"+t);e.removeClass("is-open").addClass("is-closing"),e.find(".modal_background").fadeOut(200),setTimeout(function(){e.removeClass("is-closing").addClass("is-closed"),e.find(".modal_loading").addClass("is-loaded");let o=document.getElementById(t);te(o)},200)}},oe=()=>{$("[s-modal-open]").on("click",function(){let t=$(this).attr("s-modal-open");W(t)}),$("[s-modal-close]").on("click",function(){let t=$(this).attr("s-modal-close");H(t)}),$(".modal_close").each(function(){$(this).on("click",function(t){t.preventDefault();var e=$(t.target).closest(".modal_component").attr("id");H(e)})})};var A,se=t=>{var e=document.querySelector(".filter_list");let o;A=new MutationObserver(i=>{o&&clearTimeout(o),o=setTimeout(()=>{i.forEach(s=>{t?(console.log(t),t()):console.log(t)})},750)}),A.observe(e,{attributes:!0,childList:!0,characterData:!0})};var ie=()=>{let t="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/65537bff41235e716ab887ed_zuba-ski-icon_add.svg",e="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/654e4d3358daed16960da647_zuba-ski-icon_added.svg",o=s=>{let r;localStorage.getItem("suppliers")&&typeof localStorage.getItem("suppliers")!="undefined"&&T(JSON.parse(localStorage.getItem("suppliers")))===!0&&Date.now()-new Date(Number(JSON.parse(localStorage.getItem("suppliers")).lastUpdated)).getTime()<9e5?(r=JSON.parse(localStorage.getItem("suppliers")),console.log("suppliers from local",r),s(r)):B(["https://europe-west3-zuba-webflow.cloudfunctions.net/getSuppliers"]).then(g=>{r=g,console.log("suppliers from firebase",r),r.lastUpdated=Date.now().toString(),localStorage.setItem("suppliers",JSON.stringify(r)),s(r)}).catch(g=>{console.error(g)})};$('[s-modal-open="suggested"]').on("click",function(){i($(this))});let i=s=>{let r=s.attr("s-modal-open");$("#"+r).find(".modal_loading").removeClass("is-loaded"),W(r),o(n=>{n=n.details,console.log("suppliers",n);let c=_().suppliers,d=s.attr("data-item-id");if(p(n[d])===!1){let f={};f.name=n[d].name,f.resort=n[d].resort,f.url=n[d].url;let l=n[d].img,a=M(l);a!==null?(console.log("File Name:",a[0]),console.log("Extension:",a[1]),l=a[0]+"-p-500."+a[1]):console.log("Invalid Image URL"),f.img=l,f.checked=!0,c[d]=f,k("suppliers",c),F(s,!0),$(".added_image").attr("src",f.img),$(".added_hotel").text(f.name+", "+f.resort)}else return;let v=n[d]["related-accommodation-ref"];console.log("related",v);let u={};if($.each(v,function(f,l){console.log("value",l);let a=l,m=p(c[a])===!0,b=p(n[a])===!1;if(m&&b){let h={};h.name=n[a].name,h.resort=n[a].resort,h.url=n[a].url,h.img=n[a].img,h.boarding=n[a].boarding,console.log("supplier",h),u[a]=h}}),console.log("enquirySuppliers",c),console.log("relatedSuppliers",u),p(u)===!1){$(".suggested_block").show(),$(".suggested_list").empty();let f=0;for(let l in u){f+=1;let a=u[l].img,m=M(a);m!==null?a=m[0]+"-p-500."+m[1]:console.log("Invalid Image URL"),$(".suggested_list").append('<div class="suggested_item" id="'+l+'"><div class="suggested_figure"><img src="'+a+'" alt="'+u[l].name+'" loading="lazy" class="fill-image"><div class="shadow-overlay"></div><div class="suggested_category"><div class="suggested_category-link w-inline-block"><img src="https://assets-global.website-files.com/62cdb1d040dc8c2af67a35e2/65535ae0c1feaa56bc1dbf19_zuba-ski-icon_zuba-ski-icon_location_black-medium.svg" loading="lazy" alt="" class="icon-1x1-xsmall"><div>'+u[l].resort+'</div></div></div><div class="filter_added is-suggested"><div class="filter_added-button"><img src="'+t+'" loading="lazy" alt="" class="filter_added-icon"></div></div><label class="w-checkbox checkbox_field"><input type="checkbox" id="your-pick_'+l+'" name="your-pick_'+l+'" data-name="your-pick_'+l+'" class="w-checkbox-input checkbox_button"><span class="checkbox_label w-form-label" for="your-pick_'+l+'"></span></label></div><div class="suggested_body"><div class="suggested_header"><div class="suggested_title"><h4 class="suggested_name">'+u[l].name+'</h4></div></div><div class="suggested_text-wrapper"><div class="suggested_resort-link w-inline-block"><div class="icon-1x1-xsmall w-embed"><svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Location</title><path d="m10 9c.6 0 1.1-.2 1.5-.6s.6-.9.6-1.5-.2-1.1-.6-1.5c-.8-.8-2.2-.8-3 0-.4.4-.6.9-.6 1.5s.2 1.1.6 1.5.9.6 1.5.6z"></path><path d="m15.7 17.7h-11.4c-.3 0-.6.1-.8.3s-.3.5-.3.8.1.6.3.8c.2.3.4.4.8.4h11.5c.3 0 .6-.1.8-.3s.3-.5.3-.8-.1-.6-.3-.8c-.3-.3-.5-.4-.9-.4z"></path><path d="m9.1 16c.1.1.3.2.4.3.2.1.3.1.5.1s.3 0 .5-.1.3-.1.4-.2c1.3-1 2.6-2.3 3.9-3.8s2-3.3 2-5.2c0-1.1-.2-2.2-.6-3-.4-.9-1-1.6-1.6-2.2-.7-.6-1.4-1-2.2-1.3-1.6-.6-3.2-.6-4.8 0-.8.1-1.6.6-2.2 1.2-.7.6-1.3 1.3-1.7 2.2s-.6 1.9-.6 3c0 1.9.7 3.6 2 5.2 1.3 1.5 2.7 2.8 4 3.8zm-3.7-9c0-.9.2-1.6.5-2.2s.7-1 1.1-1.4c.5-.4 1-.7 1.5-.8.5-.2 1-.3 1.5-.3s.9.1 1.5.3c.5.1 1 .4 1.5.8s.8.9 1.2 1.5c.3.6.5 1.3.5 2.2 0 1-.4 2.1-1.2 3.2s-1.9 2.3-3.4 3.5c-1.5-1.2-2.6-2.4-3.4-3.5-.9-1.2-1.3-2.3-1.3-3.3z"></path></svg></div><div>'+u[l].resort+"</div></div></div></div></div>")}$("#suggested .checkbox_button").on("change",function(){let l=$(this),a=l.closest(".checkbox_field");a.addClass("pointer-events-off");let m=l.closest(".suggested_item"),b=m.find(".filter_added"),h=D(l),I=m.attr("id");console.log("supplierId",I);let y=_().suppliers;console.log("suppliersInTheEnquiry",y);let j=y[I];console.log("thisSupplierInEnquiry",j);let U=p(j)===!1;if(console.log("thisSupplierHasAlreadyBeenAdded",U),h){if(U)y[I].checked=!0,k("suppliers",y);else{let J=Z()[I];console.log(J),J.checked=!0,y[I]=J,k("suppliers",y)}l.attr("checked","checked"),l.prop("checked",!0),b.addClass("is-added animating"),setTimeout(function(){m.find(".filter_added-icon").attr("src",e)},125),setTimeout(function(){b.removeClass("animating"),a.removeClass("pointer-events-off")},250)}else U&&(delete y[I],k("suppliers",y)),l.removeAttr("checked"),l.prop("checked",!1),b.addClass("animating"),setTimeout(function(){b.removeClass("is-added"),m.find(".filter_added-icon").attr("src",t)},125),setTimeout(function(){b.removeClass("animating"),a.removeClass("pointer-events-off")},250)})}else $(".suggested_block").hide();$("#"+r).find(".modal_loading").addClass("is-loaded"),O()})}};var re=()=>{oe();let t=s=>{$(".filter_item").each(function(){let r=$(this),g=r.attr("data-item-id"),n=s.details[g];if(p(n)===!1){let c=n["holiday-types"];if(p(c)===!1){let v=r.find('[fs-cmsnest-collection="holiday-type"]');$.each(c,function(u,x){v.append('<div fs-cmsfilter-field="holiday-type">'+x.name+"</div>")})}let d=n["accommodation-facilities"];if(p(d)===!1){let v=r.find('[fs-cmsnest-collection="facilities"]');$.each(d,function(u,x){v.append('<div fs-cmsfilter-field="accommodation-facilities" fs-cmsfilter-match="all">'+x.name+"</div>")})}let N=n["travelling-with"];if(p(N)===!1){let v=r.find('[fs-cmsnest-collection="travelling-with"]');$.each(N,function(u,x){v.append('<div fs-cmsfilter-field="travelling-with">'+x.name+"</div>")})}}})},e=()=>{$("#results").find(".modal_loading").addClass("is-loaded")};se(e);let o=0,i=(s,r)=>{let g=c=>{$('.dev_filter-list [fs-cmsfilter-field="holiday-type"]').length===0&&$('.dev_filter-list [fs-cmsfilter-field="accommodation-facilities"]').length===0&&$('.dev_filter-list [fs-cmsfilter-field="travelling-with"]').length===0&&t(c),s.name!=="nestCms"&&s(c),Q("https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js").then(()=>{o<1?setTimeout(()=>{A&&A.disconnect(),o=o+1,e(),r&&$("#"+r).find(".modal_loading").addClass("is-loaded")},750):r&&(e(),$("#"+r).find(".modal_loading").addClass("is-loaded"))}).catch(d=>{console.error(d)})};o<1&&(Webflow.require("lottie").lottie.stop(),Webflow.require("lottie").lottie.play(),$("#results").find(".modal_loading").removeClass("is-loaded")),r&&$("#"+r).find(".modal_loading").removeClass("is-loaded");let n;localStorage.getItem("suppliers")&&typeof localStorage.getItem("suppliers")!="undefined"&&T(JSON.parse(localStorage.getItem("suppliers")))===!0&&Date.now()-new Date(Number(JSON.parse(localStorage.getItem("suppliers")).lastUpdated)).getTime()<15*60*1e3?(n=JSON.parse(localStorage.getItem("suppliers")),g(n)):B(["https://europe-west3-zuba-webflow.cloudfunctions.net/getSuppliers"]).then(c=>{n=c,n.lastUpdated=Date.now().toString(),localStorage.setItem("suppliers",JSON.stringify(n)),g(n)}).catch(c=>{console.error(c)})};$('[s-modal-open="filter"]').on("click",function(){i(t,"filter")}),$(".filter-tabs_item[data-filter]").on("click",function(){i(t);let s=$(this);s.addClass("is-active").siblings().removeClass("is-active"),s.hasClass("is-active")&&s.removeClass("is-active"),$('input[data-filter="'+s.attr("data-filter")+'"]').trigger("click")}),p(Y())===!1&&i(t),ie(),O()};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{V(".filter_svg-code"),$('[name="checkbox-holiday-type"][data-filter]').on("change",function(){let t=$(this),e=$('.filter-tabs_item[data-filter="'+t.attr("data-filter")+'"]');D(t)?($('.filter-tabs_item[data-filter="'+t.attr("data-filter")+'"]').addClass("is-active").siblings().removeClass("is-active"),e.hasClass("is-active")||e.addClass("is-active")):e.removeClass("is-active")}),$(".filter-tabs_count").text($(".filter_item").length),function(){var t=document.querySelector('[fs-cmsfilter-element="results-count"]'),e=new MutationObserver(function(o){$(".filter-tabs_count").text(t.innerText)});e.observe(t,{attributes:!0,childList:!0,characterData:!0})}(),re()});})();
