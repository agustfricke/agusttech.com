import"./hoisted.0ebfbcba.js";const i=()=>{Array.from(document.querySelectorAll("code")).filter(e=>e.parentNode?.nodeName!=="PRE").forEach(e=>{const t=document.createElement("div");t.classList.add("code-wrapper"),e.parentNode?.insertBefore(t,e),t.appendChild(e)})};i();const a='<svg width="1.3em" height="1.3em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 36H88a4 4 0 0 0-4 4v44H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4v-44h44a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4Zm-52 176H44V92h120Zm48-48h-40V88a4 4 0 0 0-4-4H92V44h120Z"/></svg>';let c=document.querySelectorAll(".remark-code-title");c.forEach(r=>{r.dir="ltr"});let d=document.querySelectorAll("pre");d.forEach(r=>{r.className="relative flex w-full h-full",r.dir="ltr";let e=document.createElement("button");e.className="inline-flex absolute right-[.45em] top-[.5em] bg-zinc-100/20 rounded px-1 py-1 text-sm text-zinc-50 hover:bg-zinc-100/25 focus:outline-none focus:shadow-outline text-brand-primary",e.innerHTML=a,e.addEventListener("click",()=>{let t="";const n=e.parentElement;let l=n?.querySelector("code");if(l)t=l.innerText;else{const o=n?.querySelector("span");o&&(t=o.innerText)}if(t){try{navigator.clipboard.writeText(t)}catch(o){console.error("Failed to copy: ",o)}e.innerHTML='<svg width="1.3em" height="1.3em" viewBox="0 0 256 256"><path fill="#22c55e" d="M104 192a8.5 8.5 0 0 1-5.7-2.3l-56-56a8.1 8.1 0 0 1 11.4-11.4l50.3 50.4L210.3 66.3a8.1 8.1 0 0 1 11.4 11.4l-112 112a8.5 8.5 0 0 1-5.7 2.3Z"/></svg>',setTimeout(()=>{e.innerHTML=a},1e3)}}),r.appendChild(e),r.setAttribute("tabindex","0")});
