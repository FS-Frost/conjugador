import{s as E,n as k,o as O,r as P,b as D,q as B,u as J,v as K,w as Q}from"../chunks/scheduler.Ce_0Mfso.js";import{S as H,i as T,e as h,t as R,c as v,a as p,b as U,d as _,o as u,g as j,h as d,y,j as W,s as L,u as q,z as N,f as I,v as z,w as F,n as V,l as w,x as G}from"../chunks/index.BPRm2YJY.js";import{a as x}from"../chunks/activePage.DWTkYAb6.js";const X=!0,ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"}));function Y(i){let e,a,o,r,s,c;return{c(){e=h("a"),a=R(i[0]),this.h()},l(t){e=v(t,"A",{class:!0,href:!0});var n=p(e);a=U(n,i[0]),n.forEach(_),this.h()},h(){u(e,"class",o="navbar-item "+(i[2]?"is-active":"")),u(e,"href",r=C(i[1]))},m(t,n){j(t,e,n),d(e,a),s||(c=y(e,"click",i[3]),s=!0)},p(t,[n]){n&1&&W(a,t[0]),n&4&&o!==(o="navbar-item "+(t[2]?"is-active":""))&&u(e,"class",o),n&2&&r!==(r=C(t[1]))&&u(e,"href",r)},i:k,o:k,d(t){t&&_(e),s=!1,c()}}}function C(i){return`?pagina=${i}`}function Z(i,e,a){let{text:o}=e,{page:r}=e,s=!1;O(()=>{x.subscribe(t=>{a(2,s=r===t)})});const c=()=>x.set(r);return i.$$set=t=>{"text"in t&&a(0,o=t.text),"page"in t&&a(1,r=t.page)},[o,r,s,c]}class ee extends H{constructor(e){super(),T(this,e,Z,Y,E,{text:0,page:1})}}function te(i){let e,a,o='<span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span>',r,s,c,t,n,l,g='<a class="navbar-item" title="Ver en GitHub" href="https://github.com/FS-Frost/conjugador" target="_blank">Ver en GitHub</a>',b,M,A;return t=new ee({props:{text:"Inicio",page:"inicio"}}),{c(){e=h("nav"),a=h("a"),a.innerHTML=o,r=L(),s=h("div"),c=h("div"),q(t.$$.fragment),n=L(),l=h("div"),l.innerHTML=g,this.h()},l(f){e=v(f,"NAV",{class:!0});var m=p(e);a=v(m,"A",{role:!0,tabindex:!0,class:!0,"data-target":!0,"aria-label":!0,"aria-expanded":!0,href:!0,"data-svelte-h":!0}),N(a)!=="svelte-dlbsti"&&(a.innerHTML=o),r=I(m),s=v(m,"DIV",{class:!0,id:!0});var $=p(s);c=v($,"DIV",{class:!0});var S=p(c);z(t.$$.fragment,S),S.forEach(_),n=I($),l=v($,"DIV",{class:!0,"data-svelte-h":!0}),N(l)!=="svelte-14mkgiu"&&(l.innerHTML=g),$.forEach(_),m.forEach(_),this.h()},h(){u(a,"role","button"),u(a,"tabindex","0"),u(a,"class","navbar-burger"),u(a,"data-target","navMenu"),u(a,"aria-label","menu"),u(a,"aria-expanded","false"),u(a,"href","javascript:;"),u(c,"class","navbar-start"),u(l,"class","navbar-end"),u(s,"class","navbar-menu"),u(s,"id","navMenu"),u(e,"class","navbar")},m(f,m){j(f,e,m),d(e,a),i[3](a),d(e,r),d(e,s),d(s,c),F(t,c,null),d(s,n),d(s,l),i[5](s),b=!0,M||(A=[y(a,"click",i[4]),y(a,"keydown",ae)],M=!0)},p:k,i(f){b||(V(t.$$.fragment,f),b=!0)},o(f){w(t.$$.fragment,f),b=!1},d(f){f&&_(e),i[3](null),G(t),i[5](null),M=!1,P(A)}}}const ae=()=>{};function ne(i,e,a){let o,r;function s(){r&&r.classList.toggle("is-active"),o&&o.classList.toggle("is-active")}function c(l){D[l?"unshift":"push"](()=>{r=l,a(1,r)})}const t=()=>s();function n(l){D[l?"unshift":"push"](()=>{o=l,a(0,o)})}return[o,r,s,c,t,n]}class se extends H{constructor(e){super(),T(this,e,ne,te,E,{})}}function re(i){let e,a,o,r,s;a=new se({});const c=i[1].default,t=B(c,i,i[0],null);return{c(){e=h("div"),q(a.$$.fragment),o=L(),r=h("main"),t&&t.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var l=p(e);z(a.$$.fragment,l),o=I(l),r=v(l,"MAIN",{class:!0});var g=p(r);t&&t.l(g),g.forEach(_),l.forEach(_),this.h()},h(){u(r,"class","svelte-15hr64"),u(e,"class","app svelte-15hr64")},m(n,l){j(n,e,l),F(a,e,null),d(e,o),d(e,r),t&&t.m(r,null),s=!0},p(n,[l]){t&&t.p&&(!s||l&1)&&J(t,c,n,n[0],s?Q(c,n[0],l,null):K(n[0]),null)},i(n){s||(V(a.$$.fragment,n),V(t,n),s=!0)},o(n){w(a.$$.fragment,n),w(t,n),s=!1},d(n){n&&_(e),G(a),t&&t.d(n)}}}function ie(i,e,a){let{$$slots:o={},$$scope:r}=e;return i.$$set=s=>{"$$scope"in s&&a(0,r=s.$$scope)},[r,o]}class fe extends H{constructor(e){super(),T(this,e,ie,re,E,{})}}export{fe as component,ce as universal};
