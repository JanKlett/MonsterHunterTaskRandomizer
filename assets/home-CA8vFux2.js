import{j as e,I as f,g as a,a as v,r as N,u as C,R as k}from"./index-CHHRmowg.js";import{B as x,f as L,C as y,a as u,r as w,d as D}from"./config-manager-BOhSNp_U.js";function S(o){const{className:s,label:l,icon:n,maxValue:r,minValue:m,value:d,onChange:t}=o;return e.jsxs("div",{className:"number-box-wrapper "+(s??s),children:[e.jsxs("label",{className:"number-box-label",children:[e.jsx(f,{icon:n,className:"number-box-icon"}),e.jsx("p",{className:"number-box-label-text",children:l})]}),e.jsx("div",{className:"number-box",children:e.jsx("input",{className:"number-box-input",type:"number",min:m,max:r,value:d,onChange:t})})]})}function B(o){const{title:s,className:l}=o;return e.jsxs("div",{className:"single-card "+(l&&l),children:[s&&e.jsx("h2",{className:"single-card-title",children:s}),o.children]})}function g(o){const{title:s,text:l,localizationKeys:n,maxLineLength:r,className:m,hasDivider:d}=o,t=v(r),c=n?a(n):l,b=[c];return c&&(()=>{if(!c)console.error("TextBlock: No content provided");else if(c.length>t){b.length=0;let p=0;for(let i=0;i<c.length/t;i++){let h=c.indexOf(" ",(i+1)*t-Math.floor(t/10));h===-1&&(h=c.length),h-p>t&&(h=p+t),b.push(c.substring(p,h)),p=h}}})(),e.jsxs("div",{className:"text-block "+(m||""),style:{width:`calc(${t}*1em/${2.2})`},children:[s&&e.jsx("h2",{className:"text-block-title",children:s}),d&&e.jsx("div",{className:"text-block-divider divider"}),e.jsx("div",{className:"text-block-content",children:b.map((p,i)=>e.jsx("p",{className:"text-block-line",children:p},i))})]})}function z(o){const{children:s,title:l,onClose:n,isVisible:r,showCloseButton:m,className:d}=o;return e.jsxs("div",{className:"pop-up"+(r?"":" pop-up-hidden")+(d?" "+d:""),children:[e.jsx("div",{className:"pop-up-background",onClick:n}),e.jsxs("div",{className:"pop-up-front",children:[e.jsxs("div",{className:"pop-up-header",children:[e.jsx("h2",{className:"pop-up-title",children:l}),m&&e.jsx(x,{onClick:n,icon:L,title:"",className:"popup-close-button"})]}),e.jsx("div",{className:"pop-up-content",children:s})]})]})}function T(){const[o,s]=N.useState(!1),[l,n]=N.useState(1),[r,m]=N.useState(!1),d=C(),t=i=>{console.log("Game selected: "+i),u.setGame(i)?(i==="mhworld"&&(console.log("Disable DLC"),u.disableDLC()),p()):(s(!0),n(1),m(!1))},c=()=>{console.log("Popup closed"),s(!1),u.setSaveConfig(!1),u.reset()},b=i=>{n(i.target.value),u.set("playerCount",i.target.value)},j=()=>{u.setSaveConfig(!r),m(!r)},p=()=>{w(),d({pathname:"/play",search:`?game=${u.get("game")}${u.get("dlc")?D[u.get("game")]:""}`})};return e.jsx(k.Fragment,{children:e.jsxs("div",{className:"content-block page-content home",children:[e.jsx("h1",{className:"page-title",children:a(["ui","title"])}),e.jsxs(B,{className:"home-card",title:a(["ui","main","title"]),children:[e.jsx(g,{title:a(["ui","main","description","title"]),localizationKeys:["ui","main","description","text1"],maxLineLength:110,hasDivider:!0,className:"home-text-block"}),e.jsx(g,{localizationKeys:["ui","main","description","text2"],maxLineLength:110,hasDivider:!1,className:"home-text-block"}),e.jsx(g,{localizationKeys:["ui","main","description","text3"],maxLineLength:110,hasDivider:!1,className:"home-text-block"}),e.jsx(g,{localizationKeys:["ui","main","description","text4"],maxLineLength:110,hasDivider:!1,className:"home-text-block"}),e.jsxs("div",{className:"home-button-container",children:[e.jsx("h3",{className:"home-button-box-title",children:a(["ui","main","games","title"])}),e.jsxs("div",{className:"home-button-box-grid",children:[e.jsx(x,{className:"home-game-button",title:"",tooltip:a(["ui","main","games","mhworld"]),icon:".mhworld",onClick:()=>{t("mhworld")},id:"mhworld-button",tooltipDir:"top"}),e.jsx(x,{className:"home-game-button",title:"",tooltip:a(["ui","main","games","mhrise"]),icon:".mhrise",onClick:()=>{t("mhrise")},disabled:!0,id:"mhrise-button",tooltipDir:"top"}),e.jsx(x,{className:"home-game-button",title:"",tooltip:a(["ui","main","games","mhworldiceborne"]),icon:".mhworldiceborne",onClick:()=>{t("mhworldiceborne")},id:"mhworldiceborne-button",tooltipDir:"bottom"}),e.jsx(x,{className:"home-game-button",title:"",tooltip:a(["ui","main","games","mhrisesunbreak"]),icon:".mhrisesunbreak",onClick:()=>{t("mhrisesunbreak")},disabled:!0,id:"mhrisesunbreak-button",tooltipDir:"bottom"})]})]})]}),e.jsx(z,{isVisible:o,showCloseButton:!0,onClose:c,className:"home-player-popup",title:a(["ui","main","player-popup","title"]),children:e.jsxs("div",{className:"home-player-popup-content",children:[e.jsx(S,{className:"popup-player-count",label:a(["ui","main","player-popup","input-label"]),value:l,minValue:1,maxValue:4,onChange:b}),e.jsx(g,{className:"home-player-popup-text",localizationKeys:["ui","main","player-popup","description"],maxLineLength:60,hasDivider:!1}),e.jsx(y,{className:"popup-player-checkbox",label:a(["ui","main","player-popup","save-config"]),checked:r,onChange:j,dir:"rtl"}),e.jsx(x,{className:"popup-start-button",title:a(["ui","main","player-popup","start-button"]),onClick:p})]})})]})})}export{T as default};