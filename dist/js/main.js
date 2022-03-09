(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function r(c){let l=(c-n)/o;l>1&&(l=1);let a=e(l);t(a),l<1&&requestAnimationFrame(r)}))},t=({formId:t,someElement:o=[]})=>{const n=document.getElementById(t),r=document.createElement("div");try{if(!n)throw new Error("Ошибка");n.addEventListener("submit",(t=>{t.preventDefault(),(()=>{const t=n.querySelectorAll("input"),c=new FormData(n),l={};r.innerHTML='<img src="https://img.icons8.com/color/48/000000/spinner-frame-2.png"/>',n.append(r);const a=r.querySelector("img");var s;e({duration:2e3,timing:e=>e,draw(e){a.style.transform=`rotate(${360*e}deg)`}}),c.forEach(((e,t)=>{l[t]=e})),o.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&(l[e.id]=t.textContent),"input"===e.type&&(l[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{e.classList.add("success"),""===e.value.trim()&&e.classList.remove("success"),e.classList.contains("success")||(t=!1)})),t})(t)&&(s=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((o=>{t.forEach((e=>{e.value="",e.classList.remove("success")})),r.innerHTML='<img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"/>';const n=r.querySelector("img");e({duration:300,timing:e=>e,draw(e){n.style.transform=`scale(${e})`}})})).catch((e=>{r.style.color="red",r.textContent="Ошибка..."}))})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");let r;const c=e=>1===e.toString().length?"0"+e:e,l=()=>{const e=(()=>{const e=(new Date("26 February 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=c(e.hours),o.textContent=c(e.minutes),n.textContent=c(e.seconds),e.timeRemaining<=0&&(clearInterval(r),t.textContent="00",o.textContent="00",n.textContent="00")};l(),r=setInterval(l,1e3)})(),(()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",(t=>{t.target.closest("menu>ul>li>a")||t.target.classList.contains("close-btn")||t.target.closest(".menu")?e.classList.toggle("active-menu"):t.target.closest("menu")||e.classList.remove("active-menu")}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),n=t.querySelector(".popup-close"),r=t.querySelector(".popup-content"),c=()=>{window.innerWidth<768?(r.style.opacity="1",r.style.transition="none",clearInterval(void 0)):(r.style.transition="all 0.5s linear",r.style.opacity="0"),t.style.display="block",e({duration:300,timing:e=>e,draw(e){r.style.opacity=e}})};o.forEach((e=>{e.addEventListener("click",c)})),n.addEventListener("click",(()=>{t.style.display="none",r.style.opacity="0"}))})(),(()=>{document.querySelector("main");const e=document.querySelectorAll("menu>ul>li>a"),t=document.querySelector("main>a"),o=e=>{document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})};e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),o(e)}))})),t.addEventListener("click",(e=>{e.preventDefault(),o(t)}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t,o,n="-active")=>{const r=document.querySelector(e),c=document.querySelectorAll(t),l=document.querySelector(o);let a,s,i=0;if(!r||0===c.length)return;const u=(e,t,o=e[0].classList[0]+n)=>{e[t].classList.remove(o)},d=(e,t,o=e[0].classList[0]+n)=>{e[t].classList.add(o)},m=()=>{u(c,i),u(a,i),i++,i>=c.length&&(i=0),d(c,i),d(a,i)},v=()=>{s=setInterval(m,2e3)};r.addEventListener("click",(e=>{e.preventDefault(),a=r.querySelectorAll(".dot"),e.target.matches(".dot, .portfolio-btn")&&(u(c,i),u(a,i),e.target.matches("#arrow-right")&&i++,e.target.matches("#arrow-left")&&i--,e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(i=o)})),i>=c.length&&(i=0),i<0&&(i=c.length-1),d(c,i),d(a,i))})),r.addEventListener("mouseenter",(e=>{a=r.querySelectorAll(".dot"),e.target.matches(".dot, .portfolio-btn")&&clearInterval(s)}),!0),r.addEventListener("mouseleave",(e=>{a=r.querySelectorAll(".dot"),e.target.matches(".dot, .portfolio-btn")&&v()}),!0),(()=>{for(let e=0;e<c.length;e++){const e=document.createElement("li");e.classList.add("dot"),l.append(e)}a=r.querySelectorAll(".dot"),a[0].classList.add(a[0].classList[0]+n)})(),v()})(".portfolio-content",".portfolio-item",".portfolio-dots"),document.querySelectorAll('form[name="user_form"]').forEach((e=>{e.querySelectorAll("input").forEach((e=>{"user_name"===e.getAttribute("name")&&e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-Я\s-]/g,"")})),"user_message"===e.getAttribute("name")&&e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-Я\s-\.,;:\?\!]/g,"")})),"user_email"===e.getAttribute("name")&&e.addEventListener("input",(()=>e.value=e.value.replace(/[^\w@-_\.!~\*']/g,""))),"user_phone"===e.getAttribute("name")&&e.addEventListener("input",(()=>e.value=e.value.replace(/[^+\d()-]/g,"")))}))})),document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("input",(()=>e.value=e.value.replace(/[^\d]/g,"")))})),((t=100)=>{const o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),a=document.getElementById("total");o.addEventListener("change",(o=>{o.target!==n&&o.target!==r&&o.target!==c&&o.target!==l||(()=>{const o=+n.options[n.selectedIndex].value,s=+r.value;let i=0,u=1,d=1;c.value&&c.value>1&&(u+=c.value/10),d=l.value&&l.value<5?2:l.value&&l.value<10?1.5:d,o&&s&&(i=t*o*s*u*d),e({duration:500,timing:e=>e,draw(e){a.textContent=Math.floor(e*i)}})})()}))})(100),t({formId:"form1",someElement:[{type:"block",id:"total"}]}),t({formId:"form2",someElement:[{type:"block",id:"total"}]}),t({formId:"form3",someElement:[{type:"block",id:"total"}]})})();