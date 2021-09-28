var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,o=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))i.call(t,n)&&s(e,n,t[n]);return e};import{u as c,R as l,A as m,d as u,a as d,s as p,r as g,b,T as v,D as f,c as _,W as A,C as E,e as y,Z as w,f as k,i as h,S as x,E as N,g as S,h as R,j as C,B as I,k as T}from"./vendor.96186e48.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function B(e){return new URL({"../src/assets/bnb_logo.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAABOCAMAAADLl3DcAAAAM1BMVEUAAAD/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHb/xHbjqoz8AAAAEHRSTlMAQPDAEDDQgKBgILBQ4JBwyCQHNAAABD5JREFUeNrl2lly6yAQBVAESEwa2P9qX0i9SgeMLuNXuH8RbUXH6rJoJ6wu+yHZgtm5XxH+xfYLwgN7QXhgLwgP7AXhgb0gnNjD8C2fvaXc/izL/HG55WN72eNw/xqhja0rd/S2RMcVHX7LJdTZwR6He5jjkTXlsuiG0VsrexzuC+FPRbkpu3HE3sYeh/tinCyWu1G356aJPQ735Yhyuex1U84ieyrcV0QVy824m9siG8Pnu7kslbtxt9eYPRnua2KK5XLczTG7DJ/vdsVyM+72WzX7AvCZbl4sdxPcqpatmR6G+6qUy+W4W1ez2Tg812r2dD7OXnSberf4f/BJ2lVUswF8wB1yfx7HbtfoDpEcuAEbwEfdttXtZbub3cAN2AA+6matfe5Nh1sV3BawAXyem5XdetBNJkDTcJXbYfcZv5Ev5ben8GZ3euEPK8E1XOX7cJ/LI/a9tX80WDS7Tx/FMggnNkV4ymFZt/vZQh7Nkyt6a//LU3St+9i+owR6jBEcsJk8xp5jODd7c6uk0bEb561LBbEBHLDnz9/x4+4ccptQCGgarBJ7oluxdzc7PEUPuK94KDllREvZNlpN2XaC+1KWIffjKbzb7ZKbbfwRw+OfNd/jVSGjvY6e4ZbQLaNG73afMTscippZy98/eB/DVbrF0xP6nMM+Z85TdH+fiz1m566d+jrA4bCup3yuSeA2nsInfK7RGTVgBzhgV8B9RQ755k4bvdtNcEPtA9gBDthluK+JeHOnG6oRtz8/TgfYdDdSNobnIYf4Cp27NIemm01e5eYihPs0F9iPExvAiV2GZ302/SrEgTGNe8rdsj8/dWI/8fxFbIKnbATH7vyvkHl32pm8bR4z6YUan8rgOO6gm9t2N9uShXd3NJS1uZlLx12TspHs2NHyYVmHW8YL5t3Nrn63gs9FYpOsvEyrPW6WEID7nulmBl65BYMnwSEbu/d6t+1335nzGXDlaPAkOGZjt6p3s6PXLa/c+QxdORhLaTmBYzZ2W5UQDHI/ne4tfcMYweOBzKKxdL8ZhV7c4tbqKzqzc9mQ27a5LxWS2bkc8RxKEcngGbO512CIRe5yJHIzUevGcfnvHdjH4PlEbGpHevEk98Wg28xx/+Ik7ASesFM4m+a+sVvOcdt3doADNsHnui12MzfDLQAbPK/74LW3G7vPGe4dsPNwybv+WjL+vcNP+LhbQXYKp0d5H7yajd162H2zTO78lRAbwEfdt2Rl9zbo5meoQ31McGIn4RPdbgPljHKNuLmSrf95TWyKmeTm7rFUid13t/vS6b3G8Dc2b2EzkY9SatuL5Yyyi88YsBjilDLbt6MNnmfv7E8lD9d/nZ2Fr8DOwZdgZ+BrsAN8SXaAL8kO8CXZAb4kO8CXZAf4kuwAX5Id4EuyA3xJdoAvyQ7wJdkBviQ7wJdkB/iS7ABfkv0Fv/4Y+x9u3qWGH3CDuwAAAABJRU5ErkJggg==","../src/assets/claim_btn.png":"./assets/claim_btn.017db66c.png","../src/assets/claim_btn_active.png":"./assets/claim_btn_active.acf83fd2.png","../src/assets/competition_bg.png":"./assets/competition_bg.dcf8e7ad.png","../src/assets/copy_my_link.png":"./assets/copy_my_link.0e4d92e9.png","../src/assets/copy_my_link_active.png":"./assets/copy_my_link_active.cf54de7a.png","../src/assets/count_time_bg.png":"data:image/png;base64,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","../src/assets/join_now_btn.png":"./assets/join_now_btn.613cace7.png","../src/assets/join_now_btn_active.png":"./assets/join_now_btn_active.a81fb249.png","../src/assets/last_round.png":"./assets/last_round.026cde01.png","../src/assets/modal_error.png":"./assets/modal_error.861b92e9.png","../src/assets/modal_success.png":"./assets/modal_success.5139ee98.png","../src/assets/my_data.png":"./assets/my_data.43ad0011.png","../src/assets/my_game_bouns.png":"./assets/my_game_bouns.9ef23e0f.png","../src/assets/my_income_bg.png":"./assets/my_income_bg.09fce3e1.png","../src/assets/my_invitation_link.png":"./assets/my_invitation_link.03820cdb.png","../src/assets/my_invitation_num.png":"./assets/my_invitation_num.82ca6cf1.png","../src/assets/my_inviter.png":"./assets/my_inviter.6389f00e.png","../src/assets/results_round_bg.png":"./assets/results_round_bg.e2688e04.png","../src/assets/slide_next.png":"./assets/slide_next.8903f82e.png","../src/assets/slide_next_active.png":"./assets/slide_next_active.00bf223a.png","../src/assets/slide_prev.png":"./assets/slide_prev.ff8e97be.png","../src/assets/slide_prev_active.png":"./assets/slide_prev_active.2a61e16b.png","../src/assets/this_round.png":"./assets/this_round.9692d60c.png","../src/assets/time_colon.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAyCAYAAABoBTo6AAAACXBIWXMAABcRAAAXEQHKJvM/AAAASElEQVRIie3RMQoAIAwDwCg+zJ/p0/qziKB7HQoWEsjWG0JBctKfWfEYgaSgkMy+QUBAQCAYNAD91BO7YPyzQSAE7E+b+xqwBUhbNbZCwu5fAAAAAElFTkSuQmCC","../src/assets/time_hours.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAVCAYAAAAjODzXAAAACXBIWXMAABcRAAAXEQHKJvM/AAABxUlEQVRIib1WwXHCQAxcMvzhqxd0AB1gKrA7wKkgUEFIB0kHpoOkApwOSAWBD/qSCpKRR5cR4pyQycHO3PhGJ1trnbR3nf1+XwKQ0YCIsjBn5ugaM9eI4wCgJqJHv8rMcwAyBmr6APAMYElE2y6AIYBJy4fb1tr8Bbn+QEZEByVRAZg5v57aCmYe3/zwwf9gFDIpQSIkPKFlCiIrAFMAT85euGfAQv1frW83AZEtEUnN1MwsW5mrfeiegl2oH2ZeAlirvZd6azZmHopy2OJ7hBQZ+Q21Ke6BZE26RLPYCe9eqlhhamDj7FXMOTURW5hN6xKRaMXO2Cfazkc42Rpm/vxj8EwLr9C2DbCiVprCFMyYuS/2oDUpMiL7f+9ILLQGGuj81r2Xa6f1UxGJoQwBDJkqQmYUMhcjMjVjdUZQKcoHAG8uwNw7tpCRbSpOiEgawxCxOoOI+MrBNXZFmcWcW8iUqXVEOuRO54126AEYRC38ZKX2oC95aiKHiK10p3Vtnt/2SwpaDLaAj0hfg4hVVummTA/H0jpdg4i9zfVU2N6d7qwuSkS0RCXe3j085MqY5GJk4dtdWlog8i8XJwlq8dJcKYm2X2kVl9DUnllaAAAAAElFTkSuQmCC","../src/assets/time_mins.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAVCAYAAAA98QxkAAAACXBIWXMAABcRAAAXEQHKJvM/AAACCElEQVRIib1Xy3ECMQwVGe5w1YntADoAKgipIFvCpoKQCkIqCOmAdAAdbDpYLugY6CCjGXkijOT9QPJmPHhlWX77VpZN73A4rABgAr84IuJCPQMRbeEcJSIWxtgaEddElAMAt4AKEXPx57VWYQARZ2odXncJAGMV85NtiFjyQ1/ITiGN1LgeC+SzyD4lIl60AoChFU9e8t2If8+NiOaIuL2zGBDRzOpfibo4qybjJmFRKGD414RFlIEyfQDAXH4DxkSUNSE8cXzaIqVwPFbw5+ffmJdHWAfIHJ+2GLFCbeYg4jG29R3fzOl3wUl9bq4CpREjtrHfWkj39ICn8Ej16ypIHXTZ89IiJrwkInPvxIRPocP10pvUEqWKaxKWcrdTJhZsa60fE9ZvmkUbbgfdEVQeJDZxrgWTw+OCdEy4Uv1JlMsVdMdGzVxYUUTlWR3p/yKs89jdE3L8JknHhHXgTOXc1xVkg3r7hr4e6cIiDCrwWJ1yF/WwA+ILVBPSGi5h/enDranxYglsvCE+mvlyJC1XpF+U24D9LMIWub9WmNV8lpan5tQpHGCdTq0gx2yTvZCs/U0JX1MhNDyVz9KQiAqpCnnkd7wgLLek2HYrwl4ex2u+AsA3ADwq257z2rtL6JJyzQl3BksMsbMgbzXT3SrB0Dl7iw2nYQog/xGfjHrNef+AiBsAgB9itrvSMuPdGwAAAABJRU5ErkJggg==","../src/assets/time_sec.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAVCAYAAAA98QxkAAAACXBIWXMAABcRAAAXEQHKJvM/AAACRklEQVRIicWXwXHbQAxFYQ3vdo44manA6sByBVEqsFxB6ArMdMBUEKaCqIM4FUTugD7hylSgDDx/ZQhc7lIaafJnOBouP8HHXRALXWy3W1KJyJyIaiL6RO960TFmXocREWmIaE5pVcy8gX+h57m4UxnegGF8JqLLEYyvzFwjqPpuM8B3zPwsIksi+pnwPTBza2D/5LwznDQJWNWTiFxlIGNqctdN3EneAGxnTJfgjoge3Q3LSJAf8Ppjg1S4jnhtXJ2kOaAtw+8R76JAYCvNF112XdIVEd3gWhkB7uAdSET8kMbtELcyL+OfT47BeueziNmqz1xPaQ8EsLsXPSDOnreI3KxLv8ZDYm9/DvmJWaIIDBhmePNXM3aPL/acqkzOtyiBf83zvowxFPjV0vJkxjV3FqGWJlT6b2Asp50nFreZwjBDgBrVIegSN+Rm+p6IfrnjWDVTGOxHtzgS+iRi5h65a1NjwLADxg3/G7pLMJTkZjgFPbYL6ZZ9YY8TQG9GGNoBsIO2leP2lLOs/YiIbHHUCQabHspQFpjqlTHrLtNjh7GNi+ZXrmoc+wIphu+WocCWa8tJjZvWke31XBpjaEXEAl8NUuLIriymvdUIHw0U60smKbY1V2jSKzce6ysGGwe0ifhrLPHKdXEDL/K6tWkCdaGB71yQmD5q2Tmwge8zfbZ+VCXydQrDh5ASfja9vrlua6pycRtUhCkMWkL7sDVrd6aNiK19Ki1taswFiwp/fz67Ehni6l+eXUkDg3pjDI9vXiL6B76ZM3WDh4coAAAAAElFTkSuQmCC","../src/assets/top_income_img.png":"./assets/top_income_img.72ca07cc.png","../src/assets/top_logo.png":"./assets/top_logo.1aab67e6.png","../src/assets/top_ranking_img.png":"./assets/top_ranking_img.8ffb75bb.png","../src/assets/total_bg.jpg":"./assets/total_bg.e140429a.jpg","../src/assets/view_last_round.png":"./assets/view_last_round.b7646995.png","../src/assets/view_last_round_active.png":"./assets/view_last_round_active.a7273ee1.png","../src/assets/view_ranking_btn.png":"./assets/view_ranking_btn.259a3796.png","../src/assets/view_ranking_btn_active.png":"./assets/view_ranking_btn_active.1ed122ca.png","../src/assets/view_this_round.png":"./assets/view_this_round.f3d0e736.png","../src/assets/view_this_round_active.png":"./assets/view_this_round_active.991cff1f.png","../src/assets/fonts/Alibaba-PuHuiTi-Bold.ttf":"./assets/Alibaba-PuHuiTi-Bold.8af30eb7.ttf","../src/assets/fonts/Alibaba-PuHuiTi-Heavy.ttf":"./assets/Alibaba-PuHuiTi-Heavy.57ef9ec6.ttf","../src/assets/fonts/Alibaba-PuHuiTi-Regular.ttf":"./assets/Alibaba-PuHuiTi-Regular.bb1a50f0.ttf"}[`../src/assets/${e}`],window.location)}if("undefined"!=typeof window){let e=function(){let e=document.body,t=document.getElementById("__svg__icons__dom__1632819802942__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__1632819802942__"),t.innerHTML="",e.insertBefore(t,e.firstChild)};"interactive"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}let j=null,H=[];function Q(){return j=c(),l.createElement(l.Fragment,null,H.map(((e,t)=>l.createElement(m,o({zIndex:9998,key:t},e)))))}function D(e){if(e){let t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}}function L(e){const{deadLineTime:t}=e,n=u.unix(t),[a,r]=g.exports.useState(0),[i,s]=g.exports.useState(!0),[c,m]=g.exports.useState({hours:0,minutes:0,seconds:0}),[d,p]=g.exports.useState(!0),[v,f]=g.exports.useState(!0),[_,A]=g.exports.useState(void 0),[E,y]=g.exports.useState(void 0),w=g.exports.useRef("0"),k=g.exports.useRef("0"),h=g.exports.useRef("0"),x=g.exports.useRef("0"),[N,S]=g.exports.useState(!0),[R,C]=g.exports.useState(!0),[I,T]=g.exports.useState(void 0),[j,H]=g.exports.useState(void 0),Q=g.exports.useRef("0"),D=g.exports.useRef("0"),L=g.exports.useRef("0"),J=g.exports.useRef("0"),[M,G]=g.exports.useState(!0),[V,W]=g.exports.useState(!0),K=g.exports.useRef("0"),O=g.exports.useRef("0"),Z=g.exports.useRef("0"),Y=g.exports.useRef("0"),[U,F]=g.exports.useState(void 0),[q,$]=g.exports.useState(void 0),ee=(e,t)=>{let n=e.toString().charAt(0),a=e.toString().charAt(1),r=null,i=null;switch(t){case"hours":r=h.current,i=x.current;break;case"minutes":r=L.current,i=J.current;break;case"seconds":r=Z.current,i=Y.current}if(e>=10){if(r!=n)switch(t){case"hours":h.current=n,w.current=n,p(!1);break;case"minutes":L.current=n,Q.current=n,S(!1);break;case"seconds":Z.current=n,K.current=n,G(!1)}if(i!=a)switch(t){case"hours":x.current=a,k.current=a,f(!1);break;case"minutes":J.current=a,D.current=a,C(!1);break;case"seconds":Y.current=a,O.current=a,W(!1)}}else{if("0"!==r)switch(t){case"hours":h.current="0",w.current="0";break;case"minutes":L.current="0",Q.current="0";break;case"seconds":Z.current="0",K.current="0"}if(i!==n)switch(t){case"hours":x.current=n,k.current=a,f(!1);break;case"minutes":J.current=n,D.current=n,C(!1);break;case"seconds":Y.current=n,O.current=n,W(!1)}}};return g.exports.useEffect((()=>{null!=U&&F(void 0),null!=q&&$(void 0)}),[U,q]),g.exports.useEffect((()=>{null!=_&&A(void 0),null!=E&&y(void 0)}),[_,E]),g.exports.useEffect((()=>{null!=I&&T(void 0),null!=j&&H(void 0)}),[I,j]),b((()=>{(()=>{if(a>0){let e=o({},c);e.seconds=e.seconds-1,e.minutes>=0&&e.seconds<0&&(e.seconds=59,e.minutes=e.minutes-1),e.hours>=0&&e.minutes<0&&(e.minutes=59,e.hours=e.hours-1),m(e),ee(e.hours,"hours"),ee(e.minutes,"minutes"),ee(e.seconds,"seconds"),r(a-1)}else s(!1)})()}),i?1e3:null),g.exports.useEffect((()=>{(()=>{let e=n.diff(u(),"seconds");r(e);let t=u.duration(e,"seconds"),a={hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()},i=a.hours.toString().charAt(0),s=a.hours.toString().charAt(1);w.current=i,k.current=s,h.current=i,x.current=s;let o=a.minutes.toString().charAt(0),c=a.minutes.toString().charAt(1);Q.current=o,D.current=c,L.current=o,J.current=c;let l=a.seconds.toString().charAt(0),d=a.seconds.toString().charAt(1);K.current=l,O.current=d,Z.current=l,Y.current=d,m(a)})()}),[]),l.createElement(z,null,l.createElement("div",{className:"bloc_time"},l.createElement("div",{className:"time_card"},l.createElement("div",{className:"figure"},l.createElement(X,{moment:_,paused:d,onComplete:()=>{p(!0),A(0)}},w.current),l.createElement(P,{onComplete:()=>{p(!0),A(0)},moment:_,paused:d},l.createElement("span",null," ",h.current)),l.createElement("div",{className:"figure_item bottom"},w.current),l.createElement("div",{className:"figure_item bottom_back"},l.createElement("span",null,h.current))),l.createElement("div",{className:"figure"},l.createElement(X,{moment:E,paused:v,onComplete:()=>{f(!0),y(0)}},k.current),l.createElement(P,{onComplete:()=>{f(!0),y(0)},moment:_,paused:d},l.createElement("span",null," ",x.current)),l.createElement("div",{className:"figure_item bottom"},k.current),l.createElement("div",{className:"figure_item bottom_back"},l.createElement("span",null,x.current)))),l.createElement("div",{className:"count_title"},l.createElement("img",{src:B("time_hours.png")}))),l.createElement("div",{className:"time_colon"},l.createElement("img",{src:B("time_colon.png")})),l.createElement("div",{className:"bloc_time"},l.createElement("div",{className:"time_card"},l.createElement("div",{className:"figure"},l.createElement(X,{moment:I,paused:N,onComplete:()=>{S(!0),T(0)}},Q.current),l.createElement(P,{onComplete:()=>{S(!0),T(0)},moment:I,paused:N},l.createElement("span",null," ",L.current)),l.createElement("div",{className:"figure_item bottom"},Q.current),l.createElement("div",{className:"figure_item bottom_back"},l.createElement("span",null,L.current))),l.createElement("div",{className:"figure"},l.createElement(X,{moment:j,paused:R,onComplete:()=>{C(!0),H(0)}},D.current),l.createElement(P,{onComplete:()=>{C(!0),H(0)},moment:j,paused:R},l.createElement("span",null," ",J.current)),l.createElement("div",{className:"figure_item bottom"},D.current),l.createElement("div",{className:"figure_item bottom_back"},l.createElement("span",null," ",J.current)))),l.createElement("div",{className:"count_title"},l.createElement("img",{src:B("time_mins.png")}))),l.createElement("div",{className:"time_colon"},l.createElement("img",{src:B("time_colon.png")})),l.createElement("div",{className:"bloc_time"},l.createElement("div",{className:"time_card"},l.createElement("div",{className:"figure"},l.createElement(X,{moment:U,paused:M,onComplete:()=>{G(!0),$(0)}},K.current),l.createElement(P,{moment:U,paused:M,onComplete:()=>{G(!0),$(0)}},l.createElement("span",null,Z.current)),l.createElement("div",{className:"figure_item bottom"},K.current),l.createElement("div",{className:"figure_item bottom_back"},l.createElement("span",null,Z.current))),l.createElement("div",{className:"figure"},l.createElement(X,{moment:q,paused:V,onComplete:()=>{W(!0),$(0)}},O.current),l.createElement(P,{moment:q,paused:V,onComplete:()=>{W(!0),$(0)}},l.createElement("span",null," ",Y.current)),l.createElement("div",{className:"figure_item bottom"},O.current),l.createElement("div",{className:"figure_item bottom_back"},l.createElement("span",null,Y.current)))),l.createElement("div",{className:"count_title"},l.createElement("img",{src:B("time_sec.png")}))))}Q.show=function(e,a){return new Promise((r=>{const i=Date.now(),s=e.type;var c,m;H.push(o({modalId:i,visible:!0,footer:null,children:l.createElement(s,(c=o({},e.props),m={onSubmit:e=>{Q._hidden(i),r(e)},onCancel:()=>{Q._hidden(i),r(null)}},t(c,n(m)))),onCancel:()=>{Q._hidden(i),r(null)}},a)),j()}))},Q.success=function(e){Q.show(l.createElement("div",{className:"modal_success"},l.createElement("div",null,l.createElement("img",{src:B("modal_success.png")})),l.createElement("div",{className:"tips_word"},e)),{width:"5.46rem",closable:!1})},Q.error=function(e){Q.show(l.createElement("div",{className:"modal_error"},l.createElement("div",null,l.createElement("img",{src:B("modal_error.png")})),l.createElement("div",{className:"tips_word"},e)),{width:"5.46rem",closable:!1})},Q._hidden=function(e){let t=H.find((t=>t.modalId==e));t&&(t.visible=!1,j(),setTimeout((()=>{let t=H.findIndex((t=>t.modalId==e));t>=0&&H.splice(t,1)&&j()}),0))},Q.clear=function(){H=[],j()},u.extend(d);const X=e=>{const{children:t,onComplete:n,moment:a,paused:r}=e;return l.createElement(v,{className:"figure_item top",animation:{rotateX:-180,duration:600,ease:"easeOutCubic",resetStyle:!0,onComplete:()=>{n&&n()}},style:{transformOrigin:"0 100%"},moment:a,paused:r},t)},P=e=>{const{children:t,onComplete:n,moment:a,paused:r}=e;return l.createElement(v,{className:"figure_item top_back",animation:{rotateX:0,duration:600,resetStyle:!0,ease:"easeOutCubic",onComplete:()=>{n&&n()}},moment:a,paused:r},t)},z=p.div`
  display: flex;
  color: #fff;
  .time_card {
    display: flex;
  }
  .figure {
    position: relative;
    width: 0.78rem;
    height: 1.26rem;
    .figure_item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
      font-family: 'Alibaba-PuHuiTi-Bold';
      text-align: center;
      background: url(${B("count_time_bg.png")}) no-repeat center top;
      background-size: cover;
      &.top {
        z-index: 3;
        height: 50%;
        overflow: hidden;
        backface-visibility: hidden;
      }
      &.top_back {
        z-index: 4;
        top: auto;
        bottom: 0;
        height: 50%;
        transform: rotateX(180deg);
        background: url(${B("count_time_bg.png")}) no-repeat center bottom;
        background-size: cover;
        backface-visibility: hidden;
        overflow: hidden;
        span {
          position: absolute;
          top: -100%;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
      &.bottom {
        z-index: 1;
      }
      &.bottom_back {
        z-index: 2;
        top: 0;
        height: 50%;
        overflow: hidden;
        span {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
    }
  }

  .time_colon {
    padding: 0.34rem 0.2rem 0;
    img {
      width: 0.1rem;
      object-fit: contain;
    }
  }
  .count_title {
    text-align: center;
    img {
      width: auto;
      height: 0.21rem;
      object-fit: contain;
    }
  }
`;var J=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"bonusPool",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dev1",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"dev2",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"dev3",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lastRank",outputs:[{internalType:"uint256",name:"round",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rank",outputs:[{internalType:"uint256",name:"round",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rankPool",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"address",name:"inviter",type:"address"},{internalType:"uint256",name:"invited",type:"uint256"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"lastDay",type:"uint256"},{internalType:"uint256",name:"income",type:"uint256"},{internalType:"uint256",name:"bonus",type:"uint256"},{internalType:"uint256",name:"reward",type:"uint256"},{internalType:"uint256",name:"invitedInRound",type:"uint256"},{internalType:"uint256",name:"rankReward",type:"uint256"},{internalType:"uint256",name:"totalRankReward",type:"uint256"},{internalType:"uint256",name:"totalBonus",type:"uint256"},{internalType:"uint256",name:"totalReward",type:"uint256"},{internalType:"uint256",name:"totalPay",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_inviter",type:"address"}],name:"join",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"active",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"harvest",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"harvestRankReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"status",outputs:[{components:[{components:[{internalType:"address",name:"inviter",type:"address"},{internalType:"uint256",name:"invited",type:"uint256"},{internalType:"bool",name:"active",type:"bool"},{internalType:"uint256",name:"lastDay",type:"uint256"},{internalType:"uint256",name:"income",type:"uint256"},{internalType:"uint256",name:"bonus",type:"uint256"},{internalType:"uint256",name:"reward",type:"uint256"},{internalType:"uint256",name:"invitedInRound",type:"uint256"},{internalType:"uint256",name:"rankReward",type:"uint256"},{internalType:"uint256",name:"totalRankReward",type:"uint256"},{internalType:"uint256",name:"totalBonus",type:"uint256"},{internalType:"uint256",name:"totalReward",type:"uint256"},{internalType:"uint256",name:"totalPay",type:"uint256"}],internalType:"struct Club.UserInfo",name:"user",type:"tuple"},{components:[{internalType:"address[10]",name:"users",type:"address[10]"},{internalType:"uint256[10]",name:"counts",type:"uint256[10]"},{internalType:"uint256",name:"round",type:"uint256"}],internalType:"struct Club.Rank",name:"rank",type:"tuple"},{components:[{internalType:"address[10]",name:"users",type:"address[10]"},{internalType:"uint256[10]",name:"counts",type:"uint256[10]"},{internalType:"uint256",name:"round",type:"uint256"}],internalType:"struct Club.Rank",name:"lastRank",type:"tuple"},{internalType:"uint256",name:"rankPool",type:"uint256"}],internalType:"struct Club.Status",name:"info",type:"tuple"}],stateMutability:"view",type:"function"}];const M=e=>new f(e.toString()).div(1e18),G="VM Exception while processing transaction: revert ",V=e=>{var t,n,a,r,i;if("string"==typeof(null==(t=null==e?void 0:e.data)?void 0:t.message)){const t=e.data.message;return t.startsWith(G)?t.slice(G.length):t}const s=null!=(i=null!=(r=null!=(a=null==e?void 0:e.message)?a:null==(n=null==e?void 0:e.data)?void 0:n.message)?r:null==e?void 0:e.toString())?i:"unknown error";return s.length>100?"error":s};let W;const K=g.exports.createContext({connected:!1,joinClub:e=>Promise.reject("not init")}),O=({children:e})=>{const[t,n]=g.exports.useState(void 0),[a,r]=g.exports.useState(!1),[i,s]=g.exports.useState(void 0);g.exports.useEffect((()=>{(async()=>{console.log("init");const e=await _();if(!(null==e?void 0:e.request))return!1;if(await e.request({method:"eth_requestAccounts"}),W=new A(e),56!==(await W.getNetwork()).chainId)return!1;const t=await W.listAccounts();!!t[0]&&(n(t[0]),r(!0),s(new E("0x2DC7E759bC234f5040f8B82f375fBA5ECc473Bf4",J,W.getSigner())),console.log("wallet connected"))})()}),[]);return l.createElement(K.Provider,{value:{address:t,connected:a,club:i,joinClub:async e=>i?(e||(e=y),i.join(e,{value:"1000000000000000"})):Promise.reject("no wallet")}},e)},Z=()=>g.exports.useContext(K),Y=new f(0),U={inviter:"-",rank:"-",invited:0,active:!1,income:Y,bonus:Y,reward:Y,invitedInRound:0,rankReward:Y,totalBonus:Y,totalPay:Y,totalRankReward:Y,totalReward:Y,rankList:[],lastRank:[],rankPool:Y},F=()=>{const{club:e,address:t}=Z(),{data:n}=w(e&&t?"status":null,(async()=>{var n,a,r,i,s,o,c;if(!e||!t)return U;const l=await e.status();let m=[];for(let e=0;e<10;e++){const t=l.rank.users[e],r=null==(a=null==(n=l.rank.counts[e])?void 0:n.toNumber)?void 0:a.call(n);if(!r)break;m.push({address:t,number:r})}let u=[];for(let e=0;e<10;e++){const t=l.lastRank.users[e],n=null==(i=null==(r=l.lastRank.counts[e])?void 0:r.toNumber)?void 0:i.call(r);if(!n)break;u.push({address:t,number:n})}const d=null!=(c=null==(o=null==(s=null==l?void 0:l.user)?void 0:s.invitedInRound)?void 0:o.toNumber())?c:0;let p="-";if(d>0){const e=m.findIndex((e=>e.address==t));p=e<0?"10+":(e+1).toString()}return{active:l.user.active,rankPool:M(l.rankPool),invitedInRound:d,rank:p,invited:l.user.invited.toNumber(),inviter:l.user.inviter,income:M(l.user.income),bonus:M(l.user.bonus),reward:M(l.user.reward),rankReward:M(l.user.rankReward),totalRankReward:M(l.user.totalRankReward),totalPay:M(l.user.totalPay),totalBonus:M(l.user.totalBonus),totalReward:M(l.user.totalReward),rankList:m,lastRank:u}}),{refreshInterval:1e4});return null!=n?n:U};function q(){const{connected:e,joinClub:t,club:n}=Z(),{rankPool:a,income:r,active:i}=F(),[s,o]=g.exports.useState(!1),c=k(),m=u().endOf("d").add(8,"h").unix();return l.createElement($,null,l.createElement("div",{className:"top_view"},l.createElement("div",{className:"income",onClick:()=>{D("my_income")}},l.createElement("img",{src:B("top_income_img.png")})),l.createElement("div",{className:"logo"},l.createElement("img",{src:B("top_logo.png")})),l.createElement("div",{className:"ranking",onClick:()=>{D("ranking")}},l.createElement("img",{src:B("top_ranking_img.png")}))),l.createElement("div",{className:"global_panel"},l.createElement("img",{src:B("competition_bg.png")}),l.createElement("div",{className:"bnb_coin_num"},l.createElement("span",null,a.toSD(4).toString()),l.createElement("img",{src:B("bnb_logo.png")})),l.createElement("div",{className:"count_time"},l.createElement(L,{deadLineTime:m}))),l.createElement("div",{className:"join_now_btn"},l.createElement("button",{disabled:!e||s,onClick:async()=>{var e;let a;if(n&&!i&&r.gt(0))o(!0),a=await n.active({value:"1000000000000000"}).catch((e=>{Q.error(V(e)),o(!1)}));else{const e=new URLSearchParams(c.search).get("r");if(!h(null!=e?e:y))return void Q.error(`inviter(${e}) invalid`);o(!0),a=await t(e).catch((e=>{Q.error(V(e)),o(!1)}))}if(a){null!=(e=(await a.wait()).status)&&e?Q.success("Successfully joined the club"):Q.error("Failed to join the club"),o(!1)}}},"join now")))}const $=p.div`
  .top_view {
    padding-top: 0.36rem;
    display: flex;
    justify-content: space-between;
    .income {
      padding-left: 0.4rem;
      width: 3.8rem;
    }
    .logo {
      width: 2.75rem;
    }
    .ranking {
      width: 3.67rem;
    }
  }
  .bnb_coin_num {
    position: absolute;
    top: 8.8rem;
    width: 100%;
    text-align: center;
    color: #ffc476;
    font-size: 0.76rem;
    font-weight: bold;
    span {
      font-family: 'Alibaba-PuHuiTi-Heavy';
      padding-right: 0.3rem;
    }
    img {
      width: 2.74rem;
    }
  }
  .count_time {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.6rem;
  }
  .join_now_btn {
    margin-top: 0.36rem;
    text-align: center;
    button {
      padding: 0;
      width: 7.42rem;
      height: 2.63rem;
      font-size: 0;
      background: url(${B("join_now_btn.png")}) no-repeat center;
      background-size: 100%;
      &:active {
        background: url(${B("join_now_btn_active.png")}) no-repeat center;
        background-size: 100%;
      }
    }
  }
`;function ee(){const{address:e}=Z(),{invitedInRound:t,rank:n,invited:a,inviter:r}=F();return l.createElement(te,null,l.createElement("div",{className:"global_panel panel_mg"},l.createElement("img",{src:B("results_round_bg.png")}),l.createElement("div",{className:"result_view"},l.createElement("div",{className:"result_num"},l.createElement("div",null,t),l.createElement("div",null,n)),l.createElement("div",{className:"view_ranking_btn"},l.createElement("button",{className:"offset_correction",onClick:()=>{D("ranking")}},"view ranking"))),l.createElement("div",{className:"invitation"},l.createElement("div",{className:"invit_item offset_correction"},l.createElement("img",{src:B("my_invitation_link.png")}),l.createElement("div",{className:"invit_txt"},`${window.location.protocol}//${window.location.host}${e&&`/?r=${e}`}`)),l.createElement("div",{className:"invit_item offset_correction"},l.createElement("img",{src:B("my_invitation_num.png")}),l.createElement("div",{className:"invit_txt num"},a)),l.createElement("div",{className:"invit_item offset_correction"},l.createElement("img",{src:B("my_inviter.png")}),l.createElement("div",{className:"invit_txt"},r)),l.createElement("div",{className:"copy_btn"},l.createElement("button",{className:"offset_correction"},"copy my link")))))}const te=p.div`
  overflow: hidden;

  .result_view {
    position: absolute;
    top: 6rem;
    left: 0;
    width: 100%;
    .result_num {
      position: relative;
      left: -0.18rem;
      display: flex;
      width: 4.8rem;
      margin: 0 auto;
      font-weight: bold;
      font-size: 0.72rem;
      font-family: 'Alibaba-PuHuiTi-Regular';
      color: #33cccc;
      & > div {
        width: 2.4rem;
        justify-content: center;
        text-align: center;
        &:last-child {
          margin-left: 0.7rem;
        }
      }
    }
    .view_ranking_btn {
      margin-top: 0.1rem;
      text-align: center;
      button {
        width: 5.02rem;
        height: 1.57rem;
        font-size: 0;
        background: url(${B("view_ranking_btn.png")}) no-repeat center;
        background-size: 100%;
        &:active {
          background: url(${B("view_ranking_btn_active.png")}) no-repeat center;
          background-size: 100%;
        }
      }
    }
  }
  .invitation {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    .invit_item {
      width: 6.16rem;
      margin: 0 auto 0.16rem;
      .invit_txt {
        position: absolute;
        bottom: 0.45rem;
        left: 50%;
        transform: translateX(-50%);
        width: 5.34rem;
        height: 0.58rem;
        line-height: 0.58rem;
        font-size: 0.24rem;
        font-family: 'Alibaba-PuHuiTi-Regular';
        color: #33cccc;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.num {
          font-size: 0.48rem;
        }
      }
    }
    .copy_btn {
      text-align: center;
      button {
        width: 5.4rem;
        height: 1.56rem;
        font-size: 0;
        background: url(${B("copy_my_link.png")}) no-repeat center;
        background-size: 100%;
        &:active {
          background: url(${B("copy_my_link_active.png")}) no-repeat center;
          background-size: 100%;
        }
      }
    }
  }
`;function ne(e){let{text:t,number:n}=e;return l.createElement(ae,null,l.createElement("div",{className:"item_text"},t),l.createElement("div",{className:"item_num"},l.createElement("div",{className:"num_view"},n),l.createElement("div",{className:"num_unit"},"BNB")))}const ae=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.12rem 0.1rem 0.12rem 0.2rem;
  width: 6.44rem;
  margin: 0 auto 0.25rem;
  color: #33cccc;
  background-color: #0d3750;
  border: 0.02rem solid #33cccc;
  border-radius: 0.16rem;
  font-size: 0.36rem;
  font-family: "Alibaba-PuHuiTi-Regular";
  box-shadow: 0 1px 0.12rem #1c1d30, inset 0 1px 0.04rem #1c1d30;
  .item_text {
    white-space: nowrap;
  }
  .item_num {
    display: flex;
    align-items: center;
    .num_view {
      margin-right: 0.1rem;
      width: 1.25rem;
      height: 0.46rem;     
      background-color: #33cccc;
      text-align: center;
      border-radius: 0.12rem;
      color: #1c1d30;
    }
    .num_unit {
      font-size: 0.24rem;
    }
  }
`;function re(){const{club:e}=Z(),{bonus:t,reward:n,income:a}=F(),[r,i]=g.exports.useState(!1);let s=u().endOf("d").add(8,"h");const[o,c]=g.exports.useState(!0),[m,d]=g.exports.useState(Date.now());b((()=>{d(m+1e3)}),o?1e3:null);let p=s.diff(u()),v=u.duration(p);g.exports.useEffect((()=>{p<=0&&c(!1)}),[]);const f=g.exports.useMemo((()=>t.add(n)),[n,t]);return l.createElement(ie,null,l.createElement("div",{className:"global_panel panel_mg",id:"my_income"},l.createElement("img",{src:B("my_income_bg.png")}),l.createElement("div",{className:"income_info"},l.createElement("div",{className:"offset_correction"},l.createElement("div",{className:"info_item"},l.createElement("div",null,"Countdown"),l.createElement("div",{className:"count_time_view"},l.createElement("div",{className:"item"},v.hours(),"H"),l.createElement("div",{className:"colon"},":"),l.createElement("div",{className:"item"},v.minutes(),"M"),l.createElement("div",{className:"colon"},":"),l.createElement("div",{className:"item"},v.seconds(),"S"))),l.createElement(ne,{text:"Round of max profit",number:4}),l.createElement(ne,{text:"Generated revenue",number:a.toSD(6).toString()}),l.createElement(ne,{text:"Withdrawable dividends",number:t.toSD(6).toString()}),l.createElement(ne,{text:"Withdrawable bonus",number:n.toSD(6).toString()}),l.createElement(ne,{text:"Total withdrawal",number:f.toSD(6).toString()})),l.createElement("div",{className:"claim_btn"},l.createElement("button",{className:"offset_correction",disabled:f.lte(0)||r,onClick:async()=>{var t;if(!e)return void Q.error("please connect to wallet first");i(!0);const n=await e.harvest().catch((e=>{Q.error(V(e)),i(!1)}));if(n){null!=(t=(await n.wait()).status)&&t?Q.success("Successfully to claim"):Q.error("Failed to claim"),i(!1)}}},"claim")))))}const ie=p.div`
  .claim_btn {
    margin-top: 0.6rem;
    text-align: center;
    button {
      width: 4.62rem;
      height: 1.56rem;
      font-size: 0;
      background: url(${B("claim_btn.png")}) no-repeat center;
      background-size: 100%;
      &:active {
        background: url(${B("claim_btn_active.png")}) no-repeat center;
        background-size: 100%;
      }
    }
  }
  .count_time_view {
    display: flex;
    align-items: center;
    color: #33cccc;
    .item {
      width: 0.9rem;
      text-align: center;
      background-color: #232037;
      border-radius: 0.12rem;
    }
    .colon {
      padding: 0 0.05rem;
    }
  }
  .income_info {
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    .info_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.12rem 0.1rem 0.12rem 0.2rem;
      width: 6.44rem;
      margin: 0 auto 0.2rem;
      color: #33cccc;
      background-color: #0d3750;
      border: 0.02rem solid #33cccc;
      border-radius: 0.16rem;
      font-size: 0.36rem;
      box-shadow: 0 1px 0.12rem #1c1d30, inset 0 1px 0.04rem #1c1d30;
      .income_num {
      }
    }
  }
`;function se(){const{club:e}=Z(),{totalRankReward:t,rankReward:n}=F(),[a,r]=g.exports.useState(!1);return l.createElement(oe,null,l.createElement("div",{className:"global_panel panel_mg"},l.createElement("img",{src:B("my_game_bouns.png")}),l.createElement("div",{className:"bouns_info"},l.createElement("div",{className:"offset_correction"},l.createElement(ne,{text:"Champion income",number:t.toSD(6).toString()}),l.createElement(ne,{text:"Withdrawable",number:n.toSD(6).toString()})),l.createElement("div",{className:"claim_btn"},l.createElement("button",{className:"offset_correction",disabled:n.lte(0)||a,onClick:async()=>{var t;if(!e)return void Q.error("please connect to wallet first");r(!0);const n=await e.harvestRankReward().catch((e=>{Q.error(V(e)),r(!1)}));if(n){null!=(t=(await n.wait()).status)&&t?Q.success("Successfully to claim"):Q.error("Failed to claim"),r(!1)}}},"claim")))))}const oe=p.div`
  .claim_btn {
    margin-top: 0.6rem;
    text-align: center;
    button {
      width: 4.62rem;
      height: 1.56rem;
      font-size: 0;
      background: url(${B("claim_btn.png")}) no-repeat center;
      background-size: 100%;
      &:active {
        background: url(${B("claim_btn_active.png")}) no-repeat center;
        background-size: 100%;
      }
    }
  }
  .bouns_info {
    position: absolute;
    top: 3.4rem;
    left: 0;
    width: 100%;
  }
`;function ce(){const{totalBonus:e,totalReward:t,totalPay:n}=F();return l.createElement(le,null,l.createElement("div",{className:"global_panel panel_mg"},l.createElement("img",{src:B("my_data.png")}),l.createElement("div",{className:"bouns_info"},l.createElement("div",{className:"offset_correction"},l.createElement(ne,{text:"Total dividends",number:e.toSD(6).toString()}),l.createElement(ne,{text:"Total bonus",number:t.toSD(6).toString()}),l.createElement(ne,{text:"Total joinBNB",number:n.toSD(6).toString()})))))}const le=p.div`
  .bouns_info {
    position: absolute;
    top: 3.8rem;
    left: 0;
    width: 100%;
  }
`;function me(){const[e,t]=g.exports.useState(null),{rankList:n,lastRank:a}=F();return l.createElement(ue,{id:"ranking"},l.createElement("div",{className:"swiper_prev",onClick:()=>{e.slidePrev()}}),l.createElement("div",{className:"swiper_next",onClick:()=>{e.slideNext()}}),l.createElement(x,{className:"round_swiper",modules:[N,S],effect:"cube",slidesPerView:1,onSwiper:t},l.createElement(R,null,l.createElement("div",{className:"round_item this_round"},l.createElement("div",{className:"item_view"},l.createElement("div",{className:"round_list this_round"},l.createElement("div",{className:"list_title"},l.createElement("div",{className:"ranking"},"Ranking"),l.createElement("div",{className:"number"},"Number"),l.createElement("div",{className:"address"},"Address")),n.map(((e,t)=>{const n=`${e.address.substring(0,4)}...${e.address.substring(e.address.length-4)}`;return l.createElement("div",{className:"list_item",key:t},l.createElement("div",{className:"ranking"},t+1),l.createElement("div",{className:"number"},e.number),l.createElement("div",{className:"address"},n))}))),l.createElement("div",{className:"view_last_round"},l.createElement("button",{onClick:()=>{e.slideNext()}},"view last round"))))),l.createElement(R,null,l.createElement("div",{className:"round_item last_round"},l.createElement("div",{className:"item_view"},l.createElement("div",{className:"round_list last_round"},l.createElement("div",{className:"list_title"},l.createElement("div",{className:"ranking"},"Ranking"),l.createElement("div",{className:"number"},"Number"),l.createElement("div",{className:"address"},"Address")),a.map(((e,t)=>{const n=`${e.address.substring(0,4)}...${e.address.substring(e.address.length-4)}`;return l.createElement("div",{className:"list_item",key:t},l.createElement("div",{className:"ranking"},t+1),l.createElement("div",{className:"number"},e.number),l.createElement("div",{className:"address"},n))}))),l.createElement("div",{className:"view_this_round"},l.createElement("button",{onClick:()=>{e.slidePrev()}},"view this round")))))))}const ue=p.div`
  position: relative;
  padding-bottom: 2rem;
  .swiper_prev,
  .swiper_next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
  }
  .swiper_prev {
    left: 0.4rem;
    background: url(${B("slide_prev.png")}) no-repeat center;
    background-size: contain;
    &:active {
      background: url(${B("slide_prev_active.png")}) no-repeat center;
      background-size: contain;
    }
  }
  .swiper_next {
    right: 0.4rem;
    background: url(${B("slide_next.png")}) no-repeat center;
    background-size: contain;
    &:active {
      background: url(${B("slide_next_active.png")}) no-repeat center;
      background-size: contain;
    }
  }
  .round_swiper {
    width: 8.65rem;
    margin: 0 auto;
  }
  .round_item {
    position: relative;
    width: 100%;
    height: 14.12rem;
    background-position: center bottom;
    background-size: contain;
    background-repeat: no-repeat;
    &.this_round {
      background-image: url(${B("this_round.png")});
    }
    &.last_round {
      background-image: url(${B("last_round.png")});
    }
  }
  .item_view {
    position: absolute;
    bottom: 0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6.1rem;
  }
  .round_list {
    font-family: 'Alibaba-PuHuiTi-Regular';
    font-size: 0.36rem;
    &.this_round {
      .list_title {
        background-color: #f99f55;
        color: #542c12;
      }
      .list_item {
        border: 2px solid #f99f55;
        border-top: none;
        background-color: #59575a;
      }
    }
    &.last_round {
      .list_title {
        background-color: #1cbbc7;
        color: #1c1d30;
      }
      .list_item {
        border: 2px solid #1cbbc7;
        border-top: none;
        background-color: #15425f;
      }
    }
    .list_title,
    .list_item {
      display: flex;
      align-items: center;
      text-align: center;
      .ranking {
        width: 1.6rem;
      }
      .number {
        width: 1.6rem;
        overflow: hidden;
      }
      .address {
        flex: 1;
        overflow: hidden;
      }
    }
    .list_title {
      padding: 0 0.2rem;
      height: 0.8rem;
      border-radius: 0.16rem 0.16rem 0 0;
    }
    .list_item {
      height: 0.66rem;
      &:last-child {
        border-radius: 0 0 0.16rem 0.16rem;
      }
      .ranking {
        color: #ffc476;
      }
      .number {
        color: #33cccc;
      }
      .address {
        color: #33cccc;
      }
    }
  }
  .view_last_round,
  .view_this_round {
    margin-top: 0.4rem;
    text-align: center;
    button {
      width: 4.6rem;
      height: 1.56rem;
      font-size: 0;
    }
  }
  .view_last_round {
    button {
      background: url(${B("view_last_round.png")}) no-repeat center;
      background-size: 100%;
      &:active {
        background: url(${B("view_last_round_active.png")}) no-repeat center;
        background-size: 100%;
      }
    }
  }
  .view_this_round {
    button {
      background: url(${B("view_this_round.png")}) no-repeat center;
      background-size: 100%;
      &:active {
        background: url(${B("view_this_round_active.png")}) no-repeat center;
        background-size: 100%;
      }
    }
  }
`;const de=p.div`
  background: url(${B("total_bg.jpg")}) no-repeat center top;
  background-size: cover;
`;const pe=[{path:"/",exact:!0,component:function(){return l.createElement(de,null,l.createElement(q,null),l.createElement(ee,null),l.createElement(re,null),l.createElement(se,null),l.createElement(ce,null),l.createElement(me,null))}}].map(((e,t)=>{const n=e,{component:s}=n,c=((e,t)=>{var n={};for(var s in e)r.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&a)for(var s of a(e))t.indexOf(s)<0&&i.call(e,s)&&(n[s]=e[s]);return n})(n,["component"]);let m=s;return l.createElement(O,null,l.createElement(C,o({key:t},c),l.createElement(m,null),l.createElement(Q,null)))}));function ge(){return l.createElement(I,null,pe)}T.render(l.createElement(ge,null),document.getElementById("root"));
