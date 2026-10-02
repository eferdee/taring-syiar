(function(){
// ===== ISI CERITA & LOKASI FOTO: ubah di sini =====
// ---------------------------------------------------------------
// FOTO PROGRAM KERJA
// Foto diambil dari: assets/{folder}/{nama file}
//   contoh: assets/syiar-id/cover.jpg  dan  assets/syiar-id/1.jpg
// Format bebas (.jpg .jpeg .png .webp), asal nama file di bawah ini
// sama persis dengan nama file yang kamu taruh di foldernya.
// Tiap foto: ["nama file","Keterangan foto","Tempat · Tanggal"]
// Mau tambah foto? tambah satu baris. Mau kurangi? hapus barisnya.
// ---------------------------------------------------------------
const PROGRAM=[
 {folder:"syiar-id", nama:"Syiar ID", judul:"Syiar <em>ID</em>", warna:"#F4D06F", sub:"Ilmu dan Dakwah",
  pembuka:"Ilmu yang baik tidak berhenti di kepala. Lewat Syiar ID, kajian dan dakwah dibawa dekat dengan keseharian mahasiswa.",
  kutipan:"Ilmu terasa paling hidup saat dibagikan.",
  cover:"cover.jpg",
  foto:[
   ["1.jpg","Keterangan foto 1","Tempat · Tanggal"],
   ["2.jpg","Keterangan foto 2","Tempat · Tanggal"],
   ["3.jpg","Keterangan foto 3","Tempat · Tanggal"],
   ["4.jpg","Keterangan foto 4","Tempat · Tanggal"],
   ["5.jpg","Keterangan foto 5","Tempat · Tanggal"],
  ]},
 {folder:"syiar-melingkar", nama:"Syiar Melingkar", judul:"Syiar <em>Melingkar</em>", warna:"#A9C7D8", sub:"Duduk melingkar, belajar dekat",
  pembuka:"Tidak ada panggung dan tidak ada jarak. Hanya lingkaran kecil tempat setiap orang boleh bertanya dan didengar.",
  kutipan:"Di dalam lingkaran, tidak ada yang berdiri sendirian.",
  cover:"cover.jpg",
  foto:[
   ["1.jpg","Keterangan foto 1","Tempat · Tanggal"],
   ["2.jpg","Keterangan foto 2","Tempat · Tanggal"],
   ["3.jpg","Keterangan foto 3","Tempat · Tanggal"],
   ["4.jpg","Keterangan foto 4","Tempat · Tanggal"],
   ["5.jpg","Keterangan foto 5","Tempat · Tanggal"],
  ]},
 {folder:"kajian-strategis", nama:"Kajian Strategis", judul:"Kajian <em>Strategis</em>", warna:"#B8C9A9", sub:"Membaca isu, menajamkan sikap",
  pembuka:"Zaman bergerak cepat. Kajian Strategis mengajak kita membaca keadaan dengan tenang, dalam, dan berdasar ilmu.",
  kutipan:"Berpikir jernih adalah bentuk kepedulian.",
  cover:"cover.jpg",
  foto:[
   ["1.jpg","Keterangan foto 1","Tempat · Tanggal"],
   ["2.jpg","Keterangan foto 2","Tempat · Tanggal"],
   ["3.jpg","Keterangan foto 3","Tempat · Tanggal"],
   ["4.jpg","Keterangan foto 4","Tempat · Tanggal"],
   ["5.jpg","Keterangan foto 5","Tempat · Tanggal"],
  ]},
 {folder:"sapa-syiar", nama:"Sapa Syiar", judul:"Sapa <em>Syiar</em>", warna:"#E9A27F", sub:"Menyapa dengan hangat",
  pembuka:"Kadang yang dibutuhkan hanya satu sapaan yang tulus. Sapa Syiar hadir untuk itu.",
  kutipan:"Satu sapaan bisa membuka banyak pintu.",
  cover:"cover.jpg",
  foto:[
   ["1.jpg","Keterangan foto 1","Tempat · Tanggal"],
   ["2.jpg","Keterangan foto 2","Tempat · Tanggal"],
   ["3.jpg","Keterangan foto 3","Tempat · Tanggal"],
   ["4.jpg","Keterangan foto 4","Tempat · Tanggal"],
   ["5.jpg","Keterangan foto 5","Tempat · Tanggal"],
  ]},
 {folder:"smf", nama:"SMF", judul:"Sriwijaya <em>Muslim Fest</em>", warna:"#C9BEDC", sub:"Satu perayaan, banyak kebaikan",
  pembuka:"Puncak kebersamaan. Satu perayaan besar yang mempertemukan banyak orang, ilmu, dan kebaikan.",
  kutipan:"Lelah itu sementara, kenangannya yang kita bawa pulang.",
  cover:"cover.jpg",
  foto:[
   ["1.jpg","Keterangan foto 1","Tempat · Tanggal"],
   ["2.jpg","Keterangan foto 2","Tempat · Tanggal"],
   ["3.jpg","Keterangan foto 3","Tempat · Tanggal"],
   ["4.jpg","Keterangan foto 4","Tempat · Tanggal"],
   ["5.jpg","Keterangan foto 5","Tempat · Tanggal"],
  ]},
 {folder:"unsri-sjp", nama:"Unsri SJP", judul:"Unsri <em>SJP</em>", warna:"#9FC7C0", sub:"Student for Justice in Palestine",
  pembuka:"Kepedulian tidak mengenal jarak. Dari kampus kami, suara untuk keadilan dan kemanusiaan terus dijaga.",
  kutipan:"Peduli adalah pekerjaan yang tidak boleh berhenti.",
  cover:"cover.jpg",
  foto:[
   ["1.jpg","Keterangan foto 1","Tempat · Tanggal"],
   ["2.jpg","Keterangan foto 2","Tempat · Tanggal"],
   ["3.jpg","Keterangan foto 3","Tempat · Tanggal"],
   ["4.jpg","Keterangan foto 4","Tempat · Tanggal"],
   ["5.jpg","Keterangan foto 5","Tempat · Tanggal"],
  ]}];

// ---------------------------------------------------------------
// FOTO BPH (PNG)  ->  assets/bph/{nama file}
// ---------------------------------------------------------------
const BPH=[
 {nama:"Muhammad Ghuzammir Valcruysen Mizanno", jabatan:"Kepala Departemen", foto:"bph/kepala-departemen.png"},
 {nama:"Fathimah Fadiyah Salimah", jabatan:"Sekretaris I Departemen", foto:"bph/sekretaris-1.png"},
 {nama:"M. Farid Saputra", jabatan:"Sekretaris II Departemen", foto:"bph/sekretaris-2.png"}];

// (bagian di bawah ini tidak perlu diubah)
const data=PROGRAM.map(p=>[p.nama,p.judul,p.warna,p.sub,p.pembuka,p.kutipan,p.foto.map(f=>[f[1],f[2],f[0]]),p.folder,p.cover]);
const bph=BPH.map(p=>[p.nama,p.jabatan,p.foto]);
const team=["Muhammad Arib Al Habib","Kanza Az Zahrawani","Yogie Diantama","Muhammad Syamil Mujahid","Maghfiroh Azzahra","Aliyah Aisyah Azzahra","Annisa Rahma Abdilah","Azzahra Friska Dewi","Jatsiya Nur Ainun","Nur Nabila Al-Af’idah","Puspa Olga Owena","Rela Jumita"];
// ===== akhir bagian isi =====

const $=s=>document.querySelector(s),pad=n=>String(n+1).padStart(2,"0"),plain=h=>h.replace(/<[^>]+>/g,""),U=p=>"url('"+new URL("assets/"+p,document.baseURI).href+"')";
const mq=[...data.map(m=>m[0]),"Syiar Menggema","Syiar Berdakwah"];
$("#marquee").innerHTML=[...mq,...mq].map(t=>t+" <i>✦</i>").join(" ");
$("#folders").innerHTML=data.map((m,i)=>`<a class="idx-row reveal" href="#m${i}" style="--c:${m[2]}"><span class="idx-n">${pad(i)}</span><span class="idx-t">${m[1]}<span class="idx-s">${m[3]}</span></span><span class="idx-go">Baca cerita</span></a>`).join("");
$("#months").innerHTML=data.map((m,i)=>{const st=m[6],n=pad(i),last=i===data.length-1;return `<section class="chapter" id="m${i}" style="--c:${m[2]}">
<div class="ch-open"><span class="mark" aria-hidden="true">${n}</span><div class="ch-top"><span>${n} / ${pad(data.length-1)}</span><span>Program Kerja</span></div>
<div class="reveal"><h2 class="ch-title">${m[1]}</h2><p class="ch-sub">${m[3]}</p></div>
<p class="ch-intro">${m[4]}</p>
<div class="ch-img"><div class="ph" style="--g:${m[2]};--img:${U(m[7]+"/"+m[8])}"></div></div></div>
<div class="mem-wrap"><div class="mem-head reveal"><h3 class="mem-title">Memories<br><em>to keep</em></h3><div class="mem-ctrl"><span class="mem-count">01 / ${pad(st.length-1)}</span><button class="mem-b" data-d="-1" aria-label="Sebelumnya">&larr;</button><button class="mem-b" data-d="1" aria-label="Berikutnya">&rarr;</button></div></div>
<div class="mem-track">${st.map((s,k)=>`<figure class="mem${k?"":" on"}" style="--r:${k%2?1.6:-1.6}deg"><button class="ph" style="--g:${m[2]};--img:${U(m[7]+"/"+s[2])}" aria-label="Perbesar foto"></button><figcaption><b>${s[0]}</b><span>${s[1]}</span></figcaption></figure>`).join("")}</div>
<div class="mem-bar"><i></i></div><p class="mem-hint">Geser untuk melihat dokumentasi</p></div>
<blockquote class="ch-quote reveal">${m[5]}</blockquote>
<a class="ch-next" href="${last?"#people":"#m"+(i+1)}"><span>${last?"Selanjutnya":"Berikutnya"}</span><b>${last?"Orang di balik <em>layar</em>":data[i+1][1]}</b></a></section>`}).join("");
const cols=["#F4D06F","#A9C7D8","#B8C9A9","#E9A27F","#C9BEDC","#DDA6A8"];
$("#bphGrid").innerHTML=bph.map((p,i)=>`<article class="bph-card reveal" style="--c:${cols[i*2%6]}"><div class="bph-photo"><div class="ph" style="--g:${cols[i*2%6]};--img:${U(p[2])}"></div></div><span class="bph-role">${p[1]}</span><b class="bph-name">${p[0]}</b></article>`).join("");
$("#memberList").innerHTML=team.map((n,i)=>`<li style="--d:${cols[i%6]}">${n}</li>`).join("");


// cek foto: buka index.html?cek lalu lihat Console (F12) untuk daftar foto yang tidak ketemu
if(location.search.includes("cek"))document.querySelectorAll("[style*='--img']").forEach(el=>{const u=el.style.getPropertyValue("--img").replace(/^url\(['"]?|['"]?\)$/g,""),im=new Image();im.onload=()=>console.log("OK         "+u);im.onerror=()=>console.warn("TIDAK ADA  "+u);im.src=u});

// klik folder / foto
document.addEventListener("click",e=>{
 const ph=e.target.closest(".chapter .ph");if(ph){const s=ph.style;$("#lbImg").style.cssText="--g:"+s.getPropertyValue("--g")+";--img:"+s.getPropertyValue("--img");$("#lightbox").classList.add("open")}
 if(e.target.closest(".lb-close")||e.target.id==="lightbox")$("#lightbox").classList.remove("open")});
addEventListener("keydown",e=>{if(e.key==="Escape")$("#lightbox").classList.remove("open")});

// dokumentasi: carousel geser
document.querySelectorAll(".mem-wrap").forEach(w=>{const t=w.querySelector(".mem-track"),cs=[...t.children],cnt=w.querySelector(".mem-count"),bar=w.querySelector(".mem-bar i"),step=()=>cs.length>1?cs[1].offsetLeft-cs[0].offsetLeft:1;let tk=0;
 const upd=()=>{tk=0;const end=t.scrollLeft>=t.scrollWidth-t.clientWidth-4,i=end?cs.length-1:Math.min(cs.length-1,Math.max(0,Math.round(t.scrollLeft/step())));cs.forEach((c,k)=>c.classList.toggle("on",k===i));cnt.textContent=pad(i)+" / "+pad(cs.length-1);bar.style.width=(i+1)/cs.length*100+"%";if(t.scrollLeft>8)w.classList.add("moved")};
 t.addEventListener("scroll",()=>{tk||(tk=requestAnimationFrame(upd))},{passive:true});
 w.querySelectorAll(".mem-b").forEach(b=>b.onclick=()=>t.scrollBy({left:b.dataset.d*step(),behavior:"smooth"}));upd()});

// navbar
const nav=$("#nav"),menu=$("#menu"),burger=$("#burger");
$("#chips").innerHTML=data.map((m,i)=>`<a href="#m${i}" style="background:${m[2]}">${m[0]}</a>`).join("");
const setMenu=o=>{menu.classList.toggle("open",o);burger.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Tutup menu":"Buka menu");document.body.classList.toggle("lock",o);nav.classList.remove("hide")};
burger.onclick=()=>setMenu(!menu.classList.contains("open"));
menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
let ly=0;addEventListener("scroll",()=>{const y=scrollY;nav.classList.toggle("hide",y>ly&&y>200&&!menu.classList.contains("open"));ly=y},{passive:true});
const links=[...document.querySelectorAll("#navLinks a")];
const no=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target.id==="months"?"timeline":e.target.id;links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+t))}),{rootMargin:"-50% 0px -50% 0px"});
["top","timeline","months","people"].forEach(id=>no.observe(document.getElementById(id)));

const bar=$("#progress");addEventListener("scroll",()=>{bar.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+"%"},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
 const el=e.target,to=+el.dataset.count;let t0;const step=t=>{t0=t0||t;const k=Math.min((t-t0)/1200,1);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.6});
document.querySelectorAll("[data-count]").forEach(el=>co.observe(el));

// hero: kata bergantian (ubah daftar kata & warna di sini)
const hw=[["Cerita","#F4D06F"],["Pengalaman","#A9C7D8"],["Pelajaran","#DDA6A8"]],sw=$("#swap"),hero=$("#top");
sw.innerHTML=hw.map((w,i)=>`<span class="swap-w${i?"":" on"}">${w[0]}</span>`).join("");
const hs=[...sw.children];let hi=0;const setW=()=>{sw.style.width=hs[hi].offsetWidth+"px"};setW();document.fonts&&document.fonts.ready.then(setW);addEventListener("resize",setW);hero.style.setProperty("--hl",hw[0][1]);
setInterval(()=>{if(document.hidden)return;const o=hs[hi];o.classList.replace("on","out");setTimeout(()=>o.classList.remove("out"),700);hi=(hi+1)%hw.length;hs[hi].classList.add("on");setW();hero.style.setProperty("--hl",hw[hi][1])},2800);

// ===== efek tambahan =====
const split=el=>{const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),ns=[];while(w.nextNode())ns.push(w.currentNode);
 ns.forEach(n=>{const f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(t=>{if(!t.trim()){f.append(t);return}const s=document.createElement("span");s.className="w";s.textContent=t;f.append(s)});n.replaceWith(f)});return[...el.querySelectorAll(".w")]};
const rail=$("#rail");
rail.innerHTML=data.map((m,i)=>`<a href="#m${i}" data-t="${m[0]}" aria-label="Bab ${i+1}: ${m[0]}"></a>`).join("");
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const i=+e.target.id.slice(1);rail.querySelectorAll("a").forEach((a,k)=>a.classList.toggle("on",k===i));rail.style.setProperty("--c",data[i][2])}),{rootMargin:"-50% 0px -50% 0px"});
document.querySelectorAll(".chapter").forEach(s=>ro.observe(s));
const imgs=[...document.querySelectorAll(".ch-img")],marks=[...document.querySelectorAll(".mark")],lit=[...document.querySelectorAll(".between h2,.ch-intro")].map(el=>[el,split(el)]),monthsEl=$("#months");
const fx=()=>{const vh=innerHeight;
 imgs.forEach(el=>{const r=el.getBoundingClientRect(),p=Math.min(Math.max((vh*.95-r.top)/(vh*.55),0),1);el.style.setProperty("--p",(1-Math.pow(1-p,2)).toFixed(3))});
 marks.forEach(m=>{m.style.transform="translateY("+m.parentNode.getBoundingClientRect().top*-.12+"px)"});
 lit.forEach(([el,ws])=>{const r=el.getBoundingClientRect(),p=Math.min(Math.max((vh*.85-r.top)/(r.height+vh*.25),0),1),n=Math.round(p*ws.length);ws.forEach((w,i)=>w.classList.toggle("lit",i<n))});
 const r=monthsEl.getBoundingClientRect();rail.classList.toggle("show",r.top<vh*.5&&r.bottom>vh*.5)};
let tk=0;addEventListener("scroll",()=>{tk||(tk=requestAnimationFrame(()=>{tk=0;fx()}))},{passive:true});addEventListener("resize",fx);fx();

// tombol magnetik
document.querySelectorAll(".gate-btn,.nav-cta,.party,.hero-cta").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();b.style.transform="translate("+(e.clientX-r.left-r.width/2)*.25+"px,"+(e.clientY-r.top-r.height/2)*.25+"px)"});b.addEventListener("mouseleave",()=>{b.style.transform=""})});

// konfeti
const confetti=()=>{if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const c=document.createElement("canvas");c.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:450";c.width=innerWidth;c.height=innerHeight;document.body.append(c);
 const g=c.getContext("2d"),cl=["#F4D06F","#A9C7D8","#B8C9A9","#E9A27F","#C9BEDC","#DDA6A8"],ps=Array.from({length:innerWidth<700?60:120},()=>({x:innerWidth/2,y:innerHeight*.7,vx:(Math.random()-.5)*18,vy:-Math.random()*18-5,s:Math.random()*8+5,r:Math.random()*6,c:cl[Math.random()*6|0]}));let f=0;
 (function t(){g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.r+=.2;const co=Math.cos(p.r),si=Math.sin(p.r);g.setTransform(co,si,-si,co,p.x,p.y);g.fillStyle=p.c;g.fillRect(-p.s/2,-p.s/4,p.s,p.s/2)});++f<110?requestAnimationFrame(t):c.remove()})()};
$("#party").onclick=confetti;

// gerbang pembuka. AUTO_BUKA = detik sampai terbuka sendiri (0 = harus diklik)
const AUTO_BUKA=0,gate=$("#gate");
const openGate=fast=>{if(!gate.isConnected||gate.classList.contains("open"))return;gate.classList.add("open");if(fast){document.body.classList.remove("gated")}else{setTimeout(()=>requestAnimationFrame(confetti),350);setTimeout(()=>document.body.classList.remove("gated"),650)};try{sessionStorage.setItem("ts-open","1")}catch(e){}setTimeout(()=>gate.remove(),fast?0:1200)};
if(document.documentElement.classList.contains("seen")){gate.remove();document.body.classList.remove("gated")}
else{
 $("#gateCards").innerHTML=data.slice(0,4).map((m,i)=>`<i style="--c:${m[2]};--r:${[-8,5,-3,9][i]}deg;--img:${U(m[7]+"/"+m[8])}"></i>`).join("");
 $("#gateStrip").innerHTML=[...mq,...mq].map(t=>t+"<b>✦</b>").join("");
 const btn=$("#gateBtn"),num=$("#gateNum"),bar=$("#gateBar");let ready=false,pct=0;
 Promise.all([document.fonts?document.fonts.ready:0,new Promise(r=>document.readyState==="complete"?r():addEventListener("load",r,{once:true}))]).then(()=>{ready=true});
 const t0=performance.now();
 (function tick(t){const target=Math.min(ready?100:88,(t-t0)/18);pct+=(target-pct)*.12;if(ready&&pct>99.4)pct=100;
  num.textContent=String(Math.round(pct)).padStart(3,"0")+"%";bar.style.transform="scaleX("+pct/100+")";
  if(!gate.isConnected)return;
  if(pct<100)requestAnimationFrame(tick);
  else{gate.classList.add("ready");btn.disabled=false;btn.textContent="Buka cerita";btn.focus();if(AUTO_BUKA>0)setTimeout(openGate,AUTO_BUKA*1000)}})(t0);
 btn.onclick=()=>openGate();$("#gateSkip").onclick=()=>openGate(true);addEventListener("keydown",e=>{if(e.key==="Escape")openGate(true)})}
})();
