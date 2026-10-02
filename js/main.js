(function(){
// ===== ISI CERITA: ubah teks di sini =====
// [nama singkat, judul, warna, subjudul, pembuka, kutipan, [[label, judul, cerita], ...]]
// foto: assets/{no program}-cover.jpg (pembuka) dan assets/{no program}-{no momen}.jpg
const data=[
["Syiar ID","Syiar <em>ID</em>","#F4D06F","Ilmu dan Dakwah","Ilmu yang baik tidak berhenti di kepala. Lewat Syiar ID, kajian dan dakwah dibawa dekat dengan keseharian mahasiswa.","Ilmu terasa paling hidup saat dibagikan.",
 [["Gagasan","Dari niat sederhana","Berawal dari keinginan menghadirkan ilmu dan dakwah yang ramah, dekat, dan mudah diikuti."],
  ["Pelaksanaan","Hadir dan belajar bersama","Materi disusun, pemateri diundang, dan ruang diskusi dibuka untuk siapa pun yang ingin bertanya."],
  ["Dampak","Tumbuh setelahnya","Obrolan berlanjut di luar acara dan rasa ingin belajar semakin ramai."]]],
["Syiar Melingkar","Syiar <em>Melingkar</em>","#A9C7D8","Duduk melingkar, belajar dekat","Tidak ada panggung dan tidak ada jarak. Hanya lingkaran kecil tempat setiap orang boleh bertanya dan didengar.","Di dalam lingkaran, tidak ada yang berdiri sendirian.",
 [["Gagasan","Lingkaran kecil","Dibentuk agar belajar terasa akrab dan setiap peserta punya ruang untuk bicara."],
  ["Pelaksanaan","Duduk berdekatan","Pertemuan berjalan hangat: ada yang bercerita, ada yang mendengar, semuanya saling menguatkan."],
  ["Dampak","Ikatan yang tersisa","Dari lingkaran kecil lahir pertemanan dan kebiasaan baik yang bertahan."]]],
["Kajian Strategis","Kajian <em>Strategis</em>","#B8C9A9","Membaca isu, menajamkan sikap","Zaman bergerak cepat. Kajian Strategis mengajak kita membaca keadaan dengan tenang, dalam, dan berdasar ilmu.","Berpikir jernih adalah bentuk kepedulian.",
 [["Gagasan","Memilih isu","Isu yang dekat dengan umat dan kampus dipilih untuk dikaji bersama."],
  ["Pelaksanaan","Menelaah bersama","Data, sudut pandang, dan diskusi dipertemukan agar kesimpulan tidak terburu-buru."],
  ["Dampak","Sikap yang matang","Peserta pulang dengan pemahaman yang lebih utuh dan lebih tenang dalam menyikapi."]]],
["Sapa Syiar","Sapa <em>Syiar</em>","#E9A27F","Menyapa dengan hangat","Kadang yang dibutuhkan hanya satu sapaan yang tulus. Sapa Syiar hadir untuk itu.","Satu sapaan bisa membuka banyak pintu.",
 [["Gagasan","Mulai dari sapaan","Ide sederhana untuk mendekat, mengenal, dan membuat siapa pun merasa diterima."],
  ["Pelaksanaan","Bertemu langsung","Tim turun langsung, berbincang, dan mendengarkan dengan sabar."],
  ["Dampak","Keluarga yang melebar","Wajah-wajah baru ikut bergabung dan lingkaran kebersamaan semakin luas."]]],
["SMF","Sriwijaya <em>Muslim Fest</em>","#C9BEDC","Satu perayaan, banyak kebaikan","Puncak kebersamaan. Satu perayaan besar yang mempertemukan banyak orang, ilmu, dan kebaikan.","Lelah itu sementara, kenangannya yang kita bawa pulang.",
 [["Gagasan","Mimpi yang besar","Dirancang sebagai perayaan yang menyatukan banyak pihak dalam satu ruang."],
  ["Pelaksanaan","Hari perayaan","Semua bagian bergerak bersama, dari persiapan panjang sampai detik acara dibuka."],
  ["Dampak","Cerita yang panjang","Harinya selesai, tetapi cerita dan pelajarannya terus kami bawa."]]],
["Unsri SJP","Unsri <em>SJP</em>","#9FC7C0","Student for Justice in Palestine","Kepedulian tidak mengenal jarak. Dari kampus kami, suara untuk keadilan dan kemanusiaan terus dijaga.","Peduli adalah pekerjaan yang tidak boleh berhenti.",
 [["Gagasan","Peduli dari kampus","Lahir dari keinginan menyalurkan empati menjadi gerakan yang nyata dan terarah."],
  ["Pelaksanaan","Bergerak bersama","Edukasi, doa, dan aksi kemanusiaan dijalankan bersama mahasiswa yang peduli."],
  ["Dampak","Kesadaran yang tumbuh","Semakin banyak yang mengenal isu ini dan ikut menjaga kepeduliannya."]]]];
const bph=[["Nama Kepala Departemen","Kepala Departemen"],["Nama Sekretaris I","Sekretaris I Departemen"],["Nama Sekretaris II","Sekretaris II Departemen"]];
const team=["Nama Anggota 1","Nama Anggota 2","Nama Anggota 3","Nama Anggota 4","Nama Anggota 5","Nama Anggota 6"];
// ===== akhir bagian isi =====

const $=s=>document.querySelector(s),pad=n=>String(n+1).padStart(2,"0"),plain=h=>h.replace(/<[^>]+>/g,"");
$("#marquee").innerHTML=[...data,...data].map(m=>m[0]+" <i>✦</i>").join(" ");
$("#folders").innerHTML=data.map((m,i)=>`<a class="idx-row reveal" href="#m${i}" style="--c:${m[2]}"><span class="idx-n">${pad(i)}</span><span class="idx-t">${m[1]}<span class="idx-s">${m[3]}</span></span><span class="idx-go">Baca cerita</span></a>`).join("");
$("#months").innerHTML=data.map((m,i)=>{const st=m[6],n=pad(i),last=i===data.length-1;return `<section class="chapter" id="m${i}" style="--c:${m[2]}">
<div class="ch-open"><span class="mark" aria-hidden="true">${n}</span><div class="ch-top"><span>${n} / ${pad(data.length-1)}</span><span>Program Kerja</span></div>
<div class="reveal"><h2 class="ch-title">${m[1]}</h2><p class="ch-sub">${m[3]}</p></div>
<p class="ch-intro">${m[4]}</p>
<div class="ch-img"><div class="ph" style="--g:${m[2]};--img:url(assets/${i+1}-cover.jpg)"></div></div></div>
<div class="ch-story"><div class="story-photo"><div class="frame">${st.map((s,k)=>`<button class="ph${k?"":" on"}" style="--g:${m[2]};--img:url(assets/${i+1}-${k+1}.jpg)" aria-label="Perbesar foto"></button>`).join("")}<div class="pg">${st.map((s,k)=>`<i${k?"":' class="on"'}></i>`).join("")}</div><span class="stamp">${m[0]} · ${st[0][0]}</span></div></div>
<div class="steps">${st.map((s,k)=>`<article class="step${k?"":" on"}" data-p="${k}"><p class="step-date">${s[0]}</p><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join("")}</div></div>
<blockquote class="ch-quote reveal">${m[5]}</blockquote>
<a class="ch-next" href="${last?"#people":"#m"+(i+1)}"><span>${last?"Selanjutnya":"Berikutnya"}</span><b>${last?"Orang di balik <em>layar</em>":data[i+1][1]}</b></a></section>`}).join("");
const cols=["#F4D06F","#A9C7D8","#B8C9A9","#E9A27F","#C9BEDC","#DDA6A8"];
$("#bphGrid").innerHTML=bph.map((p,i)=>`<article class="bph-card reveal" style="--c:${cols[i*2%6]}"><div class="bph-photo"><div class="ph" style="--g:${cols[i*2%6]};--img:url(assets/bph-${i+1}.jpg)"></div></div><span class="bph-role">${p[1]}</span><b class="bph-name">${p[0]}</b></article>`).join("");
$("#memberList").innerHTML=team.map((n,i)=>`<li style="--d:${cols[i%6]}">${n}</li>`).join("");


// klik folder / foto
document.addEventListener("click",e=>{
 const ph=e.target.closest(".chapter .ph");if(ph){const s=ph.style;$("#lbImg").style.cssText="--g:"+s.getPropertyValue("--g")+";--img:"+s.getPropertyValue("--img");$("#lightbox").classList.add("open")}
 if(e.target.closest(".lb-close")||e.target.id==="lightbox")$("#lightbox").classList.remove("open")});
addEventListener("keydown",e=>{if(e.key==="Escape")$("#lightbox").classList.remove("open")});

// storytelling: foto berganti mengikuti cerita yang sedang dibaca
const so=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
 const sec=e.target.closest(".chapter"),k=+e.target.dataset.p;
 sec.querySelectorAll(".step").forEach(s=>s.classList.toggle("on",s===e.target));
 sec.querySelectorAll(".frame .ph").forEach((p,j)=>p.classList.toggle("on",j===k));
 const m=data[[...document.querySelectorAll(".chapter")].indexOf(sec)];
 sec.querySelectorAll(".pg i").forEach((d,q)=>d.classList.toggle("on",q<=k));sec.querySelector(".stamp").textContent=m[0]+" · "+m[6][k][0]}),{rootMargin:"-45% 0px -45% 0px"});
document.querySelectorAll(".step").forEach(s=>so.observe(s));

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
else{$("#gateBtn").onclick=()=>openGate();$("#gateSkip").onclick=()=>openGate(true);addEventListener("keydown",e=>{if(e.key==="Escape")openGate(true)});if(AUTO_BUKA>0)setTimeout(openGate,AUTO_BUKA*1000);$("#gateBtn").focus()}
})();
