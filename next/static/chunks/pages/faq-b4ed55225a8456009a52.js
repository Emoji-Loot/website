(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{8869:function(e,t,o){"use strict";o.d(t,{Z:function(){return l}});var r=o(5893),n=o(1664),a=o(1163),i=o(9008),s=o(4409),c=o.n(s);function l(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{}),(0,r.jsx)(d,{}),(0,r.jsx)("div",{className:c().content,children:t}),(0,r.jsx)(h,{})]})}function u(){return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Emoji Loot"}),(0,r.jsx)("meta",{name:"title",content:"Emoji Loot"}),(0,r.jsx)("meta",{name:"description",content:"Emoji Loot is randomized adventurer gear generated and stored on chain."}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.lootproject.com/"}),(0,r.jsx)("meta",{property:"og:title",content:"Emoji Loot"}),(0,r.jsx)("meta",{property:"og:description",content:"Emoji Loot is randomized adventurer gear generated and stored on chain."}),(0,r.jsx)("meta",{property:"og:image",content:"https://lootproject.com/meta.png"}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:"https://www.lootproject.com/"}),(0,r.jsx)("meta",{property:"twitter:title",content:"Emoji Loot"}),(0,r.jsx)("meta",{property:"twitter:description",content:"Emoji Loot is randomized adventurer gear generated and stored on chain."}),(0,r.jsx)("meta",{property:"twitter:image",content:"https://lootproject.com/meta.png"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"})]})}function d(){var e=(0,a.useRouter)().pathname;return(0,r.jsxs)("div",{className:c().header,children:[(0,r.jsx)("div",{className:c().header__logo,children:(0,r.jsx)(n.default,{href:"/",children:(0,r.jsx)("a",{children:"Emoji Loot"})})}),(0,r.jsx)("div",{className:c().header__links,children:(0,r.jsx)("ul",{children:[{name:"FAQ",path:"/faq"},{name:"Resources",path:"/resources"}].map((function(t,o){var a=t.name,i=t.path;return(0,r.jsx)("li",{children:(0,r.jsx)(n.default,{href:i,children:(0,r.jsx)("a",{className:e===i?c().header__links_active:void 0,children:a})})},o)}))})})]})}function h(){return(0,r.jsx)("div",{className:c().footer,children:(0,r.jsxs)("p",{children:["This website is"," ",(0,r.jsx)("a",{href:"https://github.com/lootproject/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,o){"use strict";var r=o(3848);t.default=void 0;var n,a=(n=o(7294))&&n.__esModule?n:{default:n},i=o(1063),s=o(4651),c=o(7426);var l={};function u(e,t,o,r){if(e&&i.isLocalURL(t)){e.prefetch(t,o,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+o+(n?"%"+n:"")]=!0}}var d=function(e){var t,o=!1!==e.prefetch,n=s.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(n,e.href,!0),o=r(t,2),a=o[0],s=o[1];return{href:a,as:e.as?i.resolveHref(n,e.as):s||a}}),[n,e.href,e.as]),h=d.href,f=d.as,p=e.children,m=e.replace,j=e.shallow,_=e.scroll,v=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,x=c.useIntersection({rootMargin:"200px"}),g=r(x,2),b=g[0],w=g[1],L=a.default.useCallback((function(e){b(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,b]);a.default.useEffect((function(){var e=w&&o&&i.isLocalURL(h),t="undefined"!==typeof v?v:n&&n.locale,r=l[h+"%"+f+(t?"%"+t:"")];e&&!r&&u(n,h,f,{locale:t})}),[f,h,w,v,o,n]);var E={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,r,n,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(o))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[n?"replace":"push"](o,r,{shallow:a,locale:c,scroll:s}))}(e,n,h,f,m,j,_,v)},onMouseEnter:function(e){i.isLocalURL(h)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(n,h,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof v?v:n&&n.locale,N=n&&n.isLocaleDomain&&i.getDomainLocale(f,k,n&&n.locales,n&&n.domainLocales);E.href=N||i.addBasePath(i.addLocale(f,k,n&&n.defaultLocale))}return a.default.cloneElement(t,E)};t.default=d},7426:function(e,t,o){"use strict";var r=o(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,o=e.disabled||!i,c=n.useRef(),l=n.useState(!1),u=r(l,2),d=u[0],h=u[1],f=n.useCallback((function(e){c.current&&(c.current(),c.current=void 0),o||d||e&&e.tagName&&(c.current=function(e,t,o){var r=function(e){var t=e.rootMargin||"",o=s.get(t);if(o)return o;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return s.set(t,o={id:t,observer:n,elements:r}),o}(o),n=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(n))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[o,t,d]);return n.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[f,d]};var n=o(7294),a=o(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},8579:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var r=o(5893),n=o(1664),a=o(8869),i=o(2790),s=o.n(i);function c(){return(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:s().faq,children:[(0,r.jsx)("h2",{children:"Frequently Asked Questions"}),(0,r.jsxs)("div",{className:s().faq__item,children:[(0,r.jsx)("h3",{children:"What is Emoji Loot?"}),(0,r.jsxs)("p",{children:["Emoji Loot is a collection of 8,000 unique bags of adventurer gear, originally released by"," ",(0,r.jsx)("a",{href:"https://twitter.com/dhof/status/1431316631934967815",target:"_blank",rel:"noopener noreferrer",children:"Dom Hofmann"}),". At release, anyone could claim loot bags for just gas, and all bags were claimed in under 4 hours. Each loot bag contains 8 items: a piece for an adventurer's chest, foot, hand, head, neck, ring, waist, and weapon."]}),(0,r.jsx)("p",{children:"Emoji Loot is an unaudited project. Bags #1 to #7777 were claimable by anyone and #7778 to #8000 are currently reserved for the contract deployer."})]}),(0,r.jsxs)("div",{className:s().faq__item,children:[(0,r.jsx)("h3",{children:"Why is loot special?"}),(0,r.jsxs)("p",{children:["Emoji Loot is unique\u2014the first project of its kind. With no company, art, team, or attributes, Emoji Loot makes it impossible to gate-keep any creative decisions (h/t"," ",(0,r.jsx)("a",{href:"https://twitter.com/john_c_palmer/status/1432606797186179072?s=20",target:"_blank",rel:"noopener noreferrer",children:"@john_c_palmer"}),")."]}),(0,r.jsx)("p",{children:"Emoji Loot is the unfiltered, uncensorable building block for stories, experiences, games, and more, in the hands of the community, at no cost. Emoji Loot pursues complete decentralization from day one."})]}),(0,r.jsxs)("div",{className:s().faq__item,children:[(0,r.jsx)("h3",{children:"Can I build with Emoji Loot?"}),(0,r.jsxs)("p",{children:["Yes, you are free to use Emoji Loot in any way you want. For inspiration, see existing"," ",(0,r.jsx)(n.default,{href:"/resources",children:(0,r.jsx)("a",{children:"resources"})})," ","put together by the community."]})]}),(0,r.jsxs)("div",{className:s().faq__item,children:[(0,r.jsx)("h3",{children:"Am I priced out of loot?"}),(0,r.jsxs)("p",{children:["Not at all. Through"," ",(0,r.jsx)("a",{href:"https://twitter.com/dhof/status/1433110412187287560?s=20",target:"_blank",rel:"noopener noreferrer",children:"Synthetic Emoji Loot"}),", all addresses have access to virtual Emoji Loot that developers can integrate into the Emoji Loot projects they build."]}),(0,r.jsx)("p",{children:"Thus, anyone with an Ethereum wallet is allowed to participate in the ecosystem, while still maintaining distinction between original Emoji Loot and synthetics."})]}),(0,r.jsxs)("div",{className:s().faq__item,children:[(0,r.jsx)("h3",{children:"How do I value Emoji Loot bags?"}),(0,r.jsx)("p",{children:"They say that value is always in the eye of the beholder. Emoji Loot is no different, with no explicit rarities specified at launch. How you value a loot bag is up to you."}),(0,r.jsxs)("p",{children:["Still, the community has begun to devise many mechanisms by which to assess the rarity of bags and their items. Some of these include"," ",(0,r.jsx)("a",{href:"https://github.com/Anish-Agnihotri/dhof-loot/blob/master/output/rare.json",target:"_blank",rel:"noopener noreferrer",children:"rarity by occurence"})," ","or"," ",(0,r.jsx)("a",{href:"https://0xinventory.app/help",target:"_blank",rel:"noopener noreferrer",children:"item score"}),"."]}),(0,r.jsx)("p",{children:"Remember, use your own discretion when valuing a loot bag."})]})]})})}},4160:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return o(8579)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},2790:function(e){e.exports={faq:"FAQ_faq__Rl9-M",faq__item:"FAQ_faq__item__1YopL"}},9008:function(e,t,o){e.exports=o(639)},1664:function(e,t,o){e.exports=o(2167)},1163:function(e,t,o){e.exports=o(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=4160,e(e.s=t);var t}));var t=e.O();_N_E=t}]);