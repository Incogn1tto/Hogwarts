var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelectorAll(".js-close-menu"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o);for(let e of n)console.log("test"),e.addEventListener("click",o);window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),canvas.width=window.innerWidth,canvas.height=window.innerHeight,cx=ctx.canvas.width/2,cy=ctx.canvas.height/2;let t=[];const n=[{front:"red",back:"darkred"},{front:"green",back:"darkgreen"},{front:"blue",back:"darkblue"},{front:"yellow",back:"darkyellow"},{front:"orange",back:"darkorange"},{front:"pink",back:"darkpink"},{front:"purple",back:"darkpurple"},{front:"turquoise",back:"darkturquoise"}];resizeCanvas=()=>{canvas.width=window.innerWidth,canvas.height=window.innerHeight,cx=ctx.canvas.width/2,cy=ctx.canvas.height/2},randomRange=(e,t)=>Math.random()*(t-e)+e,initConfetti=()=>{for(let e=0;e<300;e++)t.push({color:n[Math.floor(randomRange(0,n.length))],dimensions:{x:randomRange(10,20),y:randomRange(10,30)},position:{x:randomRange(0,canvas.width),y:canvas.height-1},rotation:randomRange(0,2*Math.PI),scale:{x:1,y:1},velocity:{x:randomRange(-25,25),y:randomRange(0,-50)}})},render=()=>{ctx.clearRect(0,0,canvas.width,canvas.height),t.forEach(((e,n)=>{let o=e.dimensions.x*e.scale.x,a=e.dimensions.y*e.scale.y;ctx.translate(e.position.x,e.position.y),ctx.rotate(e.rotation),e.velocity.x-=.075*e.velocity.x,e.velocity.y=Math.min(e.velocity.y+.5,5),e.velocity.x+=Math.random()>.5?Math.random():-Math.random(),e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.position.y>=canvas.height&&t.splice(n,1),e.position.x>canvas.width&&(e.position.x=0),e.position.x<0&&(e.position.x=canvas.width),e.scale.y=Math.cos(.1*e.position.y),ctx.fillStyle=e.scale.y>0?e.color.front:e.color.back,ctx.fillRect(-o/2,-a/2,o,a),ctx.setTransform(1,0,0,1,0,0)})),t.length<=10&&initConfetti(),window.requestAnimationFrame(render)},initConfetti(),render(),window.addEventListener("resize",(function(){resizeCanvas()})),window.addEventListener("click",(function(){initConfetti()}));
//# sourceMappingURL=index.ce54c17d.js.map
