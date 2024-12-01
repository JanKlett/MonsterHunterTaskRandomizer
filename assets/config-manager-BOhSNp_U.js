import{r as x,j as l,I as m,C as v,g as D}from"./index-CHHRmowg.js";function b(a){const{children:s,tooltipContent:i,disabled:t,direction:n,id:r,className:d}=a;return x.useEffect(()=>{const c=document.getElementById("tooltip-"+r);if(c&&!t)setTimeout(()=>{const u=c.getBoundingClientRect().top,g=c.children[1];n===void 0||n==="auto"?u>150?g.classList.add("tooltip-dir-top"):g.classList.add("tooltip-dir-bottom"):g.classList.add("tooltip-dir-"+n)},100);else{if(t)return;console.warn("Tooltip wrapper not found:","tooltip-"+r,t)}},[]),l.jsxs("div",{className:"tooltip-wrapper "+(d||""),id:"tooltip-"+r,children:[l.jsx("div",{className:"tooltipped-item",children:s}),t!==!0&&l.jsx("div",{className:"tooltip",children:l.jsx("div",{className:"tooltip-content",children:i})})]})}function W(a){const{icon:s,title:i,onClick:t,disabled:n,className:r,tooltip:d,tooltipDir:c,id:u}=a,g=(u||"").replace(" ","-"),h=C=>{C.preventDefault(),n||t(C)};return d?l.jsx(b,{className:"button-box-tooltip",disabled:n,id:g,tooltipContent:d,direction:c||"auto",children:l.jsx("div",{className:"button-box"+(n?" disabled ":" ")+(r??r),onClick:h,children:l.jsx("button",{className:"button-box-button",disabled:n,children:l.jsxs("div",{className:"button-box-title",children:[l.jsx(m,{icon:s,className:"button-box-title-icon"}),l.jsx("span",{children:i})]})})})}):l.jsx("div",{className:"button-box"+(n?" disabled ":" ")+(r??r),id:g,onClick:h,children:l.jsx("button",{className:"button-box-button",disabled:n,children:l.jsxs("div",{className:"button-box-title",children:[l.jsx(m,{icon:s,className:"button-box-title-icon"}),l.jsx("span",{children:i})]})})})}const z={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},A={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},E={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},S={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},$={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},I={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},P={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"]};function B(a){const{label:s,checked:i,onChange:t,className:n,dir:r}=a,d=()=>{t(!i)};return l.jsxs("div",{className:"check-box-wrapper "+(n&&n),children:[r==="rtl"?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"check-box ",onClick:d,children:i&&l.jsx("div",{className:"check-box-checkmark",children:l.jsx(m,{icon:E,className:"checkbox-check"})})}),l.jsx("label",{className:"check-box-label",children:s})]}):l.jsxs(l.Fragment,{children:[l.jsx("label",{className:"check-box-label",children:s}),l.jsx("div",{className:"check-box ",onClick:d,children:i&&l.jsx("div",{className:"check-box-checkmark",children:l.jsx(m,{icon:"fa-solid fa-check",className:"checkbox-check"})})})]}),l.jsx("input",{type:"checkbox",checked:i,onChange:d,className:"check-box-input"})]})}const L=[{id:0,key:"acidic-glavenus",isDLC:!0,isEvent:!1,dangerLevel:5,maps:[0,0,0,1,0,0]},{id:1,key:"alatreon",isDLC:!0,isEvent:!0,dangerLevel:7,maps:[0,0,0,0,0,0]},{id:2,key:"anjanath",isDLC:!1,isEvent:!1,dangerLevel:3,maps:[1,1,0,0,0,0]},{id:3,key:"azure-rathalos",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[1,0,0,0,1,0]},{id:4,key:"banbaro",isDLC:!0,isEvent:!1,dangerLevel:3,maps:[1,1,1,1,1,1]},{id:5,key:"barioth",isDLC:!0,isEvent:!1,dangerLevel:4,maps:[0,0,0,0,0,1]},{id:6,key:"barroth",isDLC:!1,isEvent:!1,dangerLevel:2,maps:[0,1,0,0,0,0]},{id:7,key:"bazelgeuse",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[1,1,1,1,1,0]},{id:8,key:"behemoth",isDLC:!1,isEvent:!0,dangerLevel:8,maps:[0,0,0,0,0,0]},{id:9,key:"beotodus",isDLC:!0,isEvent:!1,dangerLevel:2,maps:[0,0,0,0,0,1]},{id:10,key:"black-diablos",isDLC:!1,isEvent:!1,dangerLevel:5,maps:[0,1,0,0,0,0]},{id:11,key:"blackveil-vaal-hazak",isDLC:!0,isEvent:!1,dangerLevel:6,maps:[1,0,0,1,0,0]},{id:12,key:"brachydios",isDLC:!0,isEvent:!1,dangerLevel:5,maps:[0,0,0,0,1,0]},{id:13,key:"brute-tigrex",isDLC:!0,isEvent:!0,dangerLevel:5,maps:[0,0,0,0,0,0]},{id:14,key:"coral-pukei-pukei",isDLC:!0,isEvent:!1,dangerLevel:3,maps:[0,0,1,0,0,0]},{id:15,key:"deviljho",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[1,1,1,1,1,1]},{id:16,key:"diablos",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[0,1,0,0,0,0]},{id:17,key:"dodogama",isDLC:!1,isEvent:!1,dangerLevel:1,maps:[0,0,0,0,1,0]},{id:18,key:"ebony-odogaron",isDLC:!0,isEvent:!1,dangerLevel:5,maps:[1,1,1,1,1,1]},{id:19,key:"fatalis",isDLC:!0,isEvent:!0,dangerLevel:8,maps:[0,0,0,0,0,0]},{id:20,key:"frostfang-barioth",isDLC:!0,isEvent:!0,dangerLevel:5,maps:[0,0,0,0,0,1]},{id:21,key:"fulgur-anjanath",isDLC:!0,isEvent:!1,dangerLevel:4,maps:[1,1,1,1,1,1]},{id:22,key:"furious-rajang",isDLC:!0,isEvent:!0,dangerLevel:6,maps:[0,0,0,0,0,0]},{id:23,key:"glavenus",isDLC:!0,isEvent:!1,dangerLevel:4,maps:[1,1,0,0,1,0]},{id:24,key:"gold-rathian",isDLC:!0,isEvent:!0,dangerLevel:6,maps:[0,0,0,0,0,0]},{id:25,key:"great-girros",isDLC:!1,isEvent:!1,dangerLevel:1,maps:[0,0,0,1,0,0]},{id:26,key:"great-jagras",isDLC:!1,isEvent:!1,dangerLevel:1,maps:[1,0,0,0,0,0]},{id:27,key:"jyuratodus",isDLC:!1,isEvent:!1,dangerLevel:2,maps:[0,1,0,0,0,0]},{id:28,key:"kirin",isDLC:!1,isEvent:!1,dangerLevel:6,maps:[0,0,1,0,0,0]},{id:29,key:"kulu-ya-ku",isDLC:!1,isEvent:!1,dangerLevel:1,maps:[1,1,0,0,0,0]},{id:30,key:"kulve-taroth",isDLC:!1,isEvent:!0,dangerLevel:8,maps:[0,0,0,0,0,0]},{id:31,key:"kushala-daora",isDLC:!1,isEvent:!1,dangerLevel:6,maps:[1,0,0,0,1,0]},{id:32,key:"lavasioth",isDLC:!1,isEvent:!1,dangerLevel:3,maps:[0,0,0,0,1,0]},{id:33,key:"legiana",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[0,0,1,0,0,1]},{id:34,key:"leshen",isDLC:!1,isEvent:!0,dangerLevel:6,maps:[0,0,0,0,0,0]},{id:35,key:"lunastra",isDLC:!1,isEvent:!1,dangerLevel:6,maps:[0,1,0,0,1,0]},{id:36,key:"namielle",isDLC:!0,isEvent:!1,dangerLevel:6,maps:[0,0,1,0,0,0]},{id:37,key:"nargacuga",isDLC:!0,isEvent:!1,dangerLevel:4,maps:[1,0,1,0,0,0]},{id:38,key:"nergigante",isDLC:!1,isEvent:!1,dangerLevel:6,maps:[0,0,0,0,1,0]},{id:39,key:"nightshade-paolumu",isDLC:!0,isEvent:!1,dangerLevel:4,maps:[1,1,0,0,0,0]},{id:40,key:"odogaron",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[0,0,1,1,0,0]},{id:41,key:"paolumu",isDLC:!1,isEvent:!1,dangerLevel:2,maps:[0,0,1,0,0,0]},{id:42,key:"pink-rathian",isDLC:!1,isEvent:!1,dangerLevel:5,maps:[0,1,1,0,0,0]},{id:43,key:"pukei-pukei",isDLC:!1,isEvent:!1,dangerLevel:2,maps:[1,1,0,0,0,0]},{id:44,key:"radobaan",isDLC:!1,isEvent:!1,dangerLevel:3,maps:[0,0,0,1,0,0]},{id:45,key:"raging-brachydios",isDLC:!0,isEvent:!0,dangerLevel:6,maps:[0,0,0,0,0,0]},{id:46,key:"rajang",isDLC:!0,isEvent:!1,dangerLevel:5,maps:[0,0,0,0,0,0]},{id:47,key:"rathalos",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[1,0,0,0,1,0]},{id:48,key:"rathian",isDLC:!1,isEvent:!1,dangerLevel:4,maps:[1,1,0,0,0,0]},{id:49,key:"ruiner-nergigante",isDLC:!0,isEvent:!0,dangerLevel:7,maps:[0,0,0,0,0,0]},{id:50,key:"safi'jiiva",isDLC:!0,isEvent:!0,dangerLevel:8,maps:[0,0,0,0,0,0]},{id:51,key:"savage-deviljho",isDLC:!0,isEvent:!0,dangerLevel:5,maps:[1,1,1,1,1,1]},{id:52,key:"scarred-yian-garuga",isDLC:!0,isEvent:!0,dangerLevel:6,maps:[0,0,0,0,0,0]},{id:53,key:"seething-bazelgeuse",isDLC:!0,isEvent:!1,dangerLevel:5,maps:[0,0,0,0,1,0]},{id:54,key:"shara-ishvalda",isDLC:!0,isEvent:!0,dangerLevel:7,maps:[0,0,0,0,0,0]},{id:55,key:"shrieking-legiana",isDLC:!0,isEvent:!1,dangerLevel:5,maps:[0,0,0,0,0,1]},{id:56,key:"silver-rathalos",isDLC:!0,isEvent:!0,dangerLevel:6,maps:[0,0,0,0,0,0]},{id:57,key:"stygian-zinogre",isDLC:!0,isEvent:!0,dangerLevel:5,maps:[0,0,0,0,0,0]},{id:58,key:"teostra",isDLC:!1,isEvent:!1,dangerLevel:6,maps:[0,1,0,0,1,0]},{id:59,key:"tigrex",isDLC:!0,isEvent:!1,dangerLevel:4,maps:[1,1,1,1,1,1]},{id:60,key:"tobi-kadachi",isDLC:!1,isEvent:!1,dangerLevel:2,maps:[1,0,0,0,0,0]},{id:61,key:"tzitzi-ya-ku",isDLC:!1,isEvent:!1,dangerLevel:1,maps:[0,0,1,0,0,0]},{id:62,key:"uragaan",isDLC:!1,isEvent:!1,dangerLevel:3,maps:[0,0,0,0,1,0]},{id:63,key:"vaal-hazak",isDLC:!1,isEvent:!1,dangerLevel:6,maps:[0,0,0,1,0,0]},{id:64,key:"velkhana",isDLC:!0,isEvent:!1,dangerLevel:6,maps:[1,1,1,1,1,1]},{id:65,key:"viper-tobi-kadachi",isDLC:!0,isEvent:!1,dangerLevel:3,maps:[0,0,0,0,0,1]},{id:66,key:"xeno'jiiva",isDLC:!1,isEvent:!0,dangerLevel:6,maps:[0,0,0,0,0,0]},{id:67,key:"yian-garuga",isDLC:!0,isEvent:!0,dangerLevel:5,maps:[0,0,0,0,0,0]},{id:68,key:"zinogre",isDLC:!0,isEvent:!1,dangerLevel:4,maps:[1,0,1,0,0,0]},{id:69,key:"zorah-magdaros",isDLC:!1,isEvent:!0,dangerLevel:7,maps:[0,0,0,0,0,0]}],w=[{id:0,key:"palico-only",isDLC:!1,maxThreatLevel:10,excludedChallenges:[1,2,6,8],excludedWeapons:[],isActive:!0},{id:1,key:"no-palico",isDLC:!1,maxThreatLevel:99,excludedChallenges:[0],excludedWeapons:[],isActive:!0},{id:2,key:"dull-weapon",isDLC:!1,maxThreatLevel:7,excludedChallenges:[0,8],excludedWeapons:["bow","light-bowgun","heavy-bowgun"],isActive:!0},{id:3,key:"hr-equipment",isDLC:!0,maxThreatLevel:5,excludedChallenges:[0],excludedWeapons:[],isActive:!0},{id:4,key:"yolo",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:5,key:"no-dodging",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:6,key:"no-coating-special-ammo",isDLC:!1,maxThreatLevel:99,excludedChallenges:[0,2,7,8],excludedWeapons:["great-sword","long-sword","sword-and-shield","dual-blades","hammer","hunting-horn","lance","gunlance","switch-axe","charge-blade","insect-glaive"],isActive:!0},{id:7,key:"lance-charge-only",isDLC:!1,maxThreatLevel:99,excludedChallenges:[0,6,8],excludedWeapons:[],isActive:!0},{id:8,key:"bombs-only",isDLC:!1,maxThreatLevel:6,excludedChallenges:[0,2,6,7],excludedWeapons:[],isActive:!0},{id:9,key:"no-items",isDLC:!1,maxThreatLevel:99,excludedChallenges:[8],excludedWeapons:[],isActive:!0},{id:10,key:"survivor",isDLC:!1,maxThreatLevel:99,excludedChallenges:[8],excludedWeapons:[],isActive:!0},{id:11,key:"no-armor",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:12,key:"you-are-what-you-hunt",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:13,key:"no-specialized-tools",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:14,key:"back-to-the-pre-dlc-days",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:15,key:"like-in-the-old-days",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:16,key:"no-hud",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0},{id:17,key:"no-challenge",isDLC:!1,maxThreatLevel:99,excludedChallenges:[],excludedWeapons:[],isActive:!0}];var f=[];const y=()=>(f.length===0&&p(),f),p=()=>{f=structuredClone(j()),N()},j=()=>e.get("game")==="mhworld"?L:[],N=()=>{if(f.length<=10)return;let a=0;for(let s=0;s<e.get("allowedMonsters").length;s++)e.get("allowedMonsters")[s]||(f.splice(s-a,1),a++)},J=()=>{let a=y();return a[Math.floor(Math.random()*a.length)]},O=a=>{if(e.get("allowDoubleMonsters")&&Math.random()<e.get("doubleMonsterChance"))return null;if(a==null)return console.warn("First monster is invalid"),null;if(a.isEvent)return null;let s=!1;for(let n in a.maps)if(a.maps[n]){s=!0;break}if(!s)return null;let i=y(),t=i[Math.floor(Math.random()*i.length)];for(;!M(a,t);)t=i[Math.floor(Math.random()*i.length)];return t},M=(a,s)=>{if(a.id===s.id||a.isEvent||s.isEvent)return!1;let i=!1;for(let r in a.maps)if(a.maps[r]&&s.maps[r]){i=!0;break}return!(!i||Math.abs(a.dangerLevel-s.dangerLevel)>2||a.dangerLevel+s.dangerLevel>10)},k=["greatsword","longsword","sword-and-shield","dual-blades","hammer","hunting-horn","lance","gunlance","switch-axe","charge-blade","insect-glaive","bow","light-bowgun","heavy-bowgun"],o=a=>JSON.parse(JSON.stringify({name:D(["ui","game-config","default-player-names","player"+(a+1)]),allowedWeapons:[1,1,1,1,1,1,1,1,1,1,1,1,1],weapon:-1,challenges:[-1]})),q={mhworld:"iceborne",mhrise:"sunbreak"},e={saveConfig:v.getCookie("saveConfig")==="true",config:{game:null,dlc:!1,playerCount:1,players:[o(0),o(1),o(2),o(3)],allowDoubleMonsters:!0,doubleMonsterChance:.5,doubleChallengeChance:.25,rerollSameWeaponChance:.5,rerollSameChallengeChance:.5,challenges:[],allowedMonsters:[]},get:a=>e.config[a],set:(a,s)=>{e.config[a]=s,e.save()},setGame:a=>{switch(e.setSaveConfig(v.getCookie("saveConfig")==="true"),a){case"mhworldiceborne":e.config.dlc=!0,e.config.game="mhworld";break;case"mhrisesunbreak":e.config.dlc=!0,e.config.game="mhrise";break;default:e.config.dlc=!1,e.config.game=a}return e.load()?(e.save(),p(),!0):(e.config.game==="mhworld"&&(e.config.allowedMonsters=L.map(s=>!(s.isDLC&&!e.config.dlc)),e.config.challenges=w.filter(s=>!s.isDLC||e.config.dlc)),e.save(),!1)},disableDLC:()=>{e.config.game==="mhworld"&&(e.config.dlc=!1,e.config.allowedMonsters=L.map(a=>!a.isDLC)),e.save()},addPlayer:()=>{e.config.playerCount++,e.config.playerCount>4&&(e.config.playerCount=4),e.config.saveConfig||(e.config.players[e.config.playerCount-1]=o(e.config.playerCount-1)),e.save()},removePlayer:()=>{e.config.playerCount--,e.config.playerCount<1&&(e.config.playerCount=1),e.config.saveConfig||(e.config.players[e.config.playerCount]=o(e.config.playerCount)),e.save()},removePlayerByIdx:a=>{let s=e.config.players[a];e.config.players[a]=e.config.players[e.config.playerCount-1],e.config.players[e.config.playerCount-1]=s,e.removePlayer()},setPlayerData:(a,s,i)=>{a[s]=i,e.save()},load:()=>{if(e.game===null)return console.warn("Tried to load config without setting the game"),!1;const a=localStorage.getItem(`${e.config.game}${e.config.dlc?"+dlc":""}-config`);return console.log(`Loading Config: ${e.config.game}${e.config.dlc?"+dlc":""}-config`),a?(e.config=JSON.parse(a),!0):!1},save:()=>{e.saveConfig&&localStorage.setItem(`${e.config.game}${e.config.dlc?"+dlc":""}-config`,JSON.stringify(e.config))},setSaveConfig:a=>{e.saveConfig=a,v.setCookie("saveConfig",a,24*100),a?e.config.game&&localStorage.setItem(`${e.config.game}${e.config.dlc?"+dlc":""}-config`,JSON.stringify(e.config)):localStorage.removeItem(`${e.config.game}${e.config.dlc?"+dlc":""}-config`)},reset:()=>{e.config={game:null,dlc:!1,playerCount:1,players:[o(0),o(1),o(2),o(3)],challenges:[],allowedMonsters:[]},v.deleteCookie("saveConfig")},removeSavedConfig:()=>{localStorage.removeItem(`${e.config.game}${e.config.dlc?"+dlc":""}-config`)},getWeaponClass:a=>k[a],getWeaponClasses:()=>k,isMonsterAllowed:a=>e.config.allowedMonsters[a],toggleMonster:(a,s)=>{console.log(`Toggling monster ${a} to ${s}`),e.config.allowedMonsters[a]=s,e.save(),p()}};export{W as B,B as C,b as T,e as a,P as b,$ as c,q as d,A as e,I as f,j as g,z as h,y as i,O as j,S as k,w as m,p as r,J as s};
