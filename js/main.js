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
const bph=[["Nama Ketua","Ketua"],["Nama Sekretaris","Sekretaris"],["Nama Bendahara","Bendahara"]];
const team=["Nama Anggota 1","Nama Anggota 2","Nama Anggota 3","Nama Anggota 4","Nama Anggota 5","Nama Anggota 6"];
// ===== akhir bagian isi =====

const $=s=>document.querySelector(s),pad=n=>String(n+1).padStart(2,"0"),plain=h=>h.replace(/<[^>]+>/g,"");
$("#marquee").innerHTML=[...data,...data].map(m=>m[0]+" <i>✦</i>").join(" ");
$("#folders").innerHTML=data.map((m,i)=>`<button class="folder reveal" style="--c:${m[2]}" data-i="${i}"><span class="folder-n">${pad(i)}</span><span class="folder-dot"></span><span class="folder-t"><small>${m[0]}</small>${m[1]}</span></button>`).join("");
$("#months").innerHTML=data.map((m,i)=>{const st=m[5];return `<section class="month" id="m${i}" style="--c:${m[2]}">
<div class="chapter-head"><div class="month-n">${pad(i)}</div><div><p class="cap">Bab ${i+1} · ${m[0]}</p><h2 class="month-h">${m[1]}</h2></div></div>
<p class="month-intro">${m[3]}</p>
<div class="story"><div class="story-photo"><div class="frame">${st.map((s,k)=>`<button class="ph${k?"":" on"}" style="--g:${m[2]};--img:url(assets/${i+1}-${k+1}.jpg)" aria-label="Perbesar foto"></button>`).join("")}<span class="stamp">${m[0]} · ${st[0][0]}</span></div></div>
<div class="steps">${st.map((s,k)=>`<article class="step${k?"":" on"}" data-p="${k}"><p class="step-date">${s[0]}</p><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join("")}<div class="step quote" data-p="${st.length-1}"><blockquote>${m[4]}</blockquote></div></div></div></section>`}).join("");
const cols=["#F4D06F","#A9C7D8","#B8C9A9","#E9A27F","#C9BEDC","#DDA6A8"];
$("#peopleGrid").innerHTML=team.map((n,i)=>`<div class="person reveal"><div class="ph" style="--g:${cols[i%6]};--img:url(assets/tim-${i+1}.jpg)"></div><div class="person-info"><span class="person-name">${n}</span></div></div>`).join("");

// hero: ganti otomatis, bisa juga diklik (foto atau titik)
const hc=["#F4D06F","#A9C7D8","#DDA6A8"];
$("#stack").innerHTML=bph.map((p,i)=>`<button class="polaroid" style="--img:url(assets/bph-${i+1}.jpg);--g:${hc[i%3]}"><span><b>${p[0]}</b><small>${p[1]}</small></span></button>`).join("");
const pols=[...document.querySelectorAll(".polaroid")];let order=pols.slice(),timer;
const dots=pols.map((_,i)=>{const b=document.createElement("button");b.setAttribute("aria-label","Foto "+(i+1));b.onclick=()=>{go(i);auto()};$("#dots").append(b);return b});
const place=()=>{order.forEach((p,i)=>p.style.setProperty("--p",i));dots.forEach((d,i)=>d.classList.toggle("on",pols[i]===order[0]))};
const next=()=>{order.push(order.shift());place()};
const go=n=>{while(order[0]!==pols[n])order.push(order.shift());place()};
const auto=()=>{clearInterval(timer);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)timer=setInterval(()=>{if(!document.hidden)next()},4500)};
$("#stack").addEventListener("click",()=>{next();auto()});place();auto();

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

// gerbang pembuka. AUTO_BUKA = detik sampai terbuka sendiri (0 = harus diklik)
const AUTO_BUKA=0,gate=$("#gate");
const openGate=fast=>{if(!gate.isConnected||gate.classList.contains("open"))return;gate.classList.add("open");document.body.classList.remove("gated");try{sessionStorage.setItem("ts-open","1")}catch(e){}setTimeout(()=>gate.remove(),fast?0:1200)};
if(document.documentElement.classList.contains("seen")){gate.remove();document.body.classList.remove("gated")}
else{$("#gateBtn").onclick=()=>openGate();$("#gateSkip").onclick=()=>openGate(true);addEventListener("keydown",e=>{if(e.key==="Escape")openGate(true)});if(AUTO_BUKA>0)setTimeout(openGate,AUTO_BUKA*1000);$("#gateBtn").focus()}
})();
