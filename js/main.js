(function(){
// ===== ISI CERITA: ubah teks di sini =====
// [bulan, judul, warna, pembuka, kutipan, [[waktu, judul, cerita], ...]]  (foto: assets/{no bulan}-{no momen}.jpg)
const data=[
["Mei","Awal yang <em>baru</em>","#F4D06F","Semua dimulai dari ruangan yang masih asing dan wajah-wajah yang belum akrab.",
 "Kami belum tahu mau ke mana, tapi kami tahu akan berangkat bersama.",
 [["Minggu 1","Pelantikan","Hari pertama sebagai satu tim. Janji diucapkan, kursi diisi, dan periode resmi dimulai."],
  ["Minggu 2","Rapat pertama","Ide berdatangan, jadwal tabrakan, tapi akhirnya program kerja pertama berhasil disusun."],
  ["Minggu 4","Kenalan lebih dekat","Makan bersama membuat obrolan jadi lebih santai dan tim mulai terasa seperti keluarga."]]],
["Juni","Mulai <em>bergerak</em>","#A9C7D8","Rencana di atas kertas akhirnya harus dijalankan.",
 "Langkah pertama selalu yang paling berat, dan kami melewatinya.",
 [["Minggu 1","Persiapan","Pembagian tugas selesai, semua tahu perannya dan tahu harus lari ke arah mana."],
  ["Minggu 3","Kegiatan perdana","Acara pertama berjalan, ada yang kurang tapi lebih banyak yang berhasil."],
  ["Minggu 4","Evaluasi","Duduk melingkar, saling jujur, lalu mencatat apa yang bisa diperbaiki."]]],
["Juli","Belajar <em>bersama</em>","#B8C9A9","Bulan untuk menambah bekal, karena perjalanan masih panjang.",
 "Tidak ada yang langsung mahir, kami tumbuh bersama.",
 [["Minggu 1","Pelatihan","Materi demi materi dipelajari, dari cara memimpin sampai cara menyampaikan pesan."],
  ["Minggu 2","Diskusi terbuka","Semua suara didengar, termasuk yang biasanya paling pendiam."],
  ["Minggu 4","Praktik langsung","Ilmu yang didapat langsung dicoba di lapangan."]]],
["Agustus","Rayakan <em>bersama</em>","#E9A27F","Bulan paling ramai, penuh suara, warna, dan tawa.",
 "Capek itu sementara, ceritanya yang kita bawa pulang.",
 [["Minggu 2","Persiapan acara","Dekorasi, konsumsi, dan gladi bersih sampai larut malam."],
  ["Minggu 3","Hari H","Acara berjalan, semua pos terisi, semua senyum terlihat."],
  ["Minggu 4","Setelah pesta","Beres-beres bersama sambil mengenang momen yang paling lucu."]]],
["September","Tetap <em>melangkah</em>","#C9BEDC","Tidak semua bulan mulus, dan bulan ini mengajarkan itu.",
 "Yang membuat kami bertahan adalah satu sama lain.",
 [["Minggu 1","Tantangan datang","Jadwal bentrok dan tenaga menipis, rencana harus diubah."],
  ["Minggu 3","Saling menguatkan","Yang kuat membantu yang lelah, pekerjaan dibagi ulang."],
  ["Minggu 4","Bangkit lagi","Kegiatan tetap terlaksana, dengan cara yang lebih matang."]]],
["Oktober","Semakin <em>padu</em>","#EBC47D","Kini tim sudah hafal cara kerja satu sama lain.",
 "Tanpa banyak aba-aba, kami sudah tahu siapa mengerjakan apa.",
 [["Minggu 1","Ritme yang pas","Rapat makin singkat, hasil makin rapi."],
  ["Minggu 3","Kegiatan besar","Skala lebih besar, tapi kali ini terasa ringan."],
  ["Minggu 4","Apresiasi","Saling berterima kasih untuk hal-hal kecil yang sering terlewat."]]],
["November","Berbagi <em>manfaat</em>","#9FC7C0","Saatnya keluar dan memberi manfaat bagi orang lain.",
 "Kebaikan terasa paling nyata saat dibagikan.",
 [["Minggu 1","Kolaborasi","Bertemu pihak-pihak baru dengan tujuan yang sama."],
  ["Minggu 3","Aksi sosial","Turun langsung ke lapangan dan bertemu orang-orang yang kami bantu."],
  ["Minggu 4","Cerita pulang","Pulang dengan hati penuh dan banyak pelajaran."]]],
["Desember","Menengok <em>ke belakang</em>","#DDA6A8","Akhir tahun, waktunya melihat sejauh apa kami berjalan.",
 "Ternyata kami sudah sejauh ini.",
 [["Minggu 2","Kilas balik","Foto-foto lama dibuka, semua tertawa dan sebagian terharu."],
  ["Minggu 3","Evaluasi tahunan","Mencatat yang berhasil, yang belum, dan yang akan dicoba lagi."],
  ["Minggu 4","Malam kebersamaan","Tanpa agenda, hanya duduk bersama dan bercerita."]]],
["Januari","Tenaga <em>baru</em>","#B8C8DD","Awal tahun, semangat diisi ulang untuk sisa perjalanan.",
 "Sisa waktu sedikit, justru itu yang bikin semangat.",
 [["Minggu 1","Target baru","Daftar kegiatan terakhir disusun dan dibagi."],
  ["Minggu 3","Gas lagi","Kegiatan kembali padat dengan semangat yang segar."],
  ["Minggu 4","Mulai terasa dekat","Garis akhir mulai terlihat, dan rasanya campur aduk."]]],
["Februari","Sampai <em>garis akhir</em>","#C5CFA0","Bab terakhir. Semua cerita sebelumnya bermuara di sini.",
 "Periode berakhir, ceritanya tidak.",
 [["Minggu 1","Laporan akhir","Semua pekerjaan dirapikan dan dipertanggungjawabkan."],
  ["Minggu 3","Serah terima","Estafet diberikan kepada tim berikutnya dengan doa dan pesan."],
  ["Minggu 4","Perpisahan","Foto bersama terakhir, dan janji untuk tetap saling jaga."]]]];
const bph=[["Nama Kepala Departemen","Kepala Departemen"],["Nama Sekretaris I","Sekretaris I Departemen"],["Nama Sekretaris II","Sekretaris II Departemen"]];
const team=["Nama Anggota 1","Nama Anggota 2","Nama Anggota 3","Nama Anggota 4","Nama Anggota 5","Nama Anggota 6"];
// ===== akhir bagian isi =====

const $=s=>document.querySelector(s),pad=n=>String(n+1).padStart(2,"0"),plain=h=>h.replace(/<[^>]+>/g,"");
$("#marquee").innerHTML=[...data,...data].map(m=>m[0]+" <i>✦</i>").join(" ");
$("#folders").innerHTML=data.map((m,i)=>`<button class="folder reveal" style="--c:${m[2]}" data-i="${i}"><span class="folder-n">${pad(i)}</span><span class="folder-dot"></span><span class="folder-t"><small>${m[0]}</small>${m[1]}</span></button>`).join("");
$("#months").innerHTML=data.map((m,i)=>{const st=m[5];return `<section class="month" id="m${i}" style="--c:${m[2]}">
<span class="mark" aria-hidden="true">${m[0]}</span><div class="chapter-head"><div class="month-n">${pad(i)}</div><div><p class="cap">Bab ${i+1} · ${m[0]}</p><h2 class="month-h">${m[1]}</h2></div></div>
<p class="month-intro">${m[3]}</p>
<div class="story"><div class="story-photo"><div class="frame">${st.map((s,k)=>`<button class="ph${k?"":" on"}" style="--g:${m[2]};--img:url(assets/${i+1}-${k+1}.jpg)" aria-label="Perbesar foto"></button>`).join("")}<span class="stamp">${m[0]} · ${st[0][0]}</span></div></div>
<div class="steps">${st.map((s,k)=>`<article class="step${k?"":" on"}" data-p="${k}"><p class="step-date">${s[0]}</p><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join("")}<div class="step quote" data-p="${st.length-1}"><blockquote>${m[4]}</blockquote></div></div></div></section>`}).join("");
const cols=["#F4D06F","#A9C7D8","#B8C9A9","#E9A27F","#C9BEDC","#DDA6A8"];
$("#bphGrid").innerHTML=bph.map((p,i)=>`<article class="bph-card reveal" style="--c:${cols[i*2%6]}"><div class="bph-photo"><div class="ph" style="--g:${cols[i*2%6]};--img:url(assets/bph-${i+1}.jpg)"></div></div><span class="bph-role">${p[1]}</span><b class="bph-name">${p[0]}</b></article>`).join("");
$("#memberList").innerHTML=team.map((n,i)=>`<li style="--d:${cols[i%6]}">${n}</li>`).join("");


// klik folder / foto
document.addEventListener("click",e=>{
 const f=e.target.closest(".folder");if(f)$("#m"+f.dataset.i).scrollIntoView({behavior:"smooth"});
 const ph=e.target.closest(".month .ph");if(ph){const s=ph.style;$("#lbImg").style.cssText="--g:"+s.getPropertyValue("--g")+";--img:"+s.getPropertyValue("--img");$("#lightbox").classList.add("open")}
 if(e.target.closest(".lb-close")||e.target.id==="lightbox")$("#lightbox").classList.remove("open")});
addEventListener("keydown",e=>{if(e.key==="Escape")$("#lightbox").classList.remove("open")});

// storytelling: foto berganti mengikuti cerita yang sedang dibaca
const so=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
 const sec=e.target.closest(".month"),k=+e.target.dataset.p;
 sec.querySelectorAll(".step").forEach(s=>s.classList.toggle("on",s===e.target));
 sec.querySelectorAll(".frame .ph").forEach((p,j)=>p.classList.toggle("on",j===k));
 const m=data[[...document.querySelectorAll(".month")].indexOf(sec)];
 sec.querySelector(".stamp").textContent=m[0]+" · "+m[5][k][0]}),{rootMargin:"-45% 0px -45% 0px"});
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
document.querySelectorAll(".month").forEach(s=>ro.observe(s));
const marks=[...document.querySelectorAll(".mark")],lit=[...document.querySelectorAll(".between h2,.month-intro")].map(el=>[el,split(el)]),monthsEl=$("#months");
const fx=()=>{const vh=innerHeight;
 marks.forEach(m=>{m.style.transform="translateY("+m.parentNode.getBoundingClientRect().top*-.12+"px)"});
 lit.forEach(([el,ws])=>{const r=el.getBoundingClientRect(),p=Math.min(Math.max((vh*.85-r.top)/(r.height+vh*.25),0),1),n=Math.round(p*ws.length);ws.forEach((w,i)=>w.classList.toggle("lit",i<n))});
 const r=monthsEl.getBoundingClientRect();rail.classList.toggle("show",r.top<vh*.5&&r.bottom>vh*.5)};
addEventListener("scroll",fx,{passive:true});addEventListener("resize",fx);fx();

// tombol magnetik
document.querySelectorAll(".gate-btn,.nav-cta,.party,.hero-cta").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();b.style.transform="translate("+(e.clientX-r.left-r.width/2)*.25+"px,"+(e.clientY-r.top-r.height/2)*.25+"px)"});b.addEventListener("mouseleave",()=>{b.style.transform=""})});

// konfeti
const confetti=()=>{if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const c=document.createElement("canvas");c.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:450";c.width=innerWidth;c.height=innerHeight;document.body.append(c);
 const g=c.getContext("2d"),cl=["#F4D06F","#A9C7D8","#B8C9A9","#E9A27F","#C9BEDC","#DDA6A8"],ps=Array.from({length:150},()=>({x:innerWidth/2,y:innerHeight*.7,vx:(Math.random()-.5)*18,vy:-Math.random()*18-5,s:Math.random()*8+5,r:Math.random()*6,c:cl[Math.random()*6|0]}));let f=0;
 (function t(){g.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.r+=.2;g.save();g.translate(p.x,p.y);g.rotate(p.r);g.fillStyle=p.c;g.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);g.restore()});++f<140?requestAnimationFrame(t):c.remove()})()};
$("#party").onclick=confetti;

// gerbang pembuka. AUTO_BUKA = detik sampai terbuka sendiri (0 = harus diklik)
const AUTO_BUKA=0,gate=$("#gate");
const openGate=fast=>{if(!gate.isConnected||gate.classList.contains("open"))return;gate.classList.add("open");if(!fast)confetti();document.body.classList.remove("gated");try{sessionStorage.setItem("ts-open","1")}catch(e){}setTimeout(()=>gate.remove(),fast?0:1200)};
if(document.documentElement.classList.contains("seen")){gate.remove();document.body.classList.remove("gated")}
else{$("#gateBtn").onclick=()=>openGate();$("#gateSkip").onclick=()=>openGate(true);addEventListener("keydown",e=>{if(e.key==="Escape")openGate(true)});if(AUTO_BUKA>0)setTimeout(openGate,AUTO_BUKA*1000);$("#gateBtn").focus()}
})();
