/* ===== DATA (edit di sini) ===== */
const ROLES=["Data entry","Administration","Design Graphic","Visual"];
const PROJ=[
 {t:"Employe Data Management & Payroll",d:"Proyek pengolahan data karyawan menggunakan Microsoft Excel, meliputi pengelolaan informasi karyawan, perhitungan gaji dan tunjangan otomatis, rekap kehadiran, serta penyusunan laporan payroll menggunakan rumus Excel.",l:"Proyek pengolahan data karyawan menggunakan Microsoft Excel dengan data dummy untuk mengelola informasi karyawan, menghitung gaji pokok dan tunjangan, merekap kehadiran, serta menyusun laporan payroll secara otomatis & terstruktur. Proyek ini dibuat sebagai latihan mandiri untuk meningkatkan keterampilan pengolahan data dan penggunaan rumus Excel dalam pekerjaan administrasi.",img:"images/slipgaji1.png",tech:["Microsoft Excel","XLOOKUP","VLOOKUP","FILTERING","SUMIFS","COUNTIFS","IF","IFS"]},
 {t:"Sales Data Analys & Reporting",d:"Kumpulan proyek ini merupakan hasil latihan mandiri saya dalam menggunakan Microsoft Excel untuk mengolah dan menganalisis data.",l:"Dengan memanfaatkan data dummy, saya mempraktikkan berbagai fungsi Excel untuk melakukan perhitungan, mengelompokkan informasi, membuat rekapitulasi, serta menyusun laporan yang sistematis. Melalui proyek-proyek ini, saya berupaya meningkatkan kemampuan teknis, ketelitian, dan efisiensi dalam mengelola data sebagai bekal untuk menghadapi kebutuhan dunia kerja.",img:"images/dataanalys.png",tech:["Microsoft Excel","Chart","XLOOKUP","FILTERING","SUMIF","SUM","VLOOKUP"]},
 {t:"Inventory & Stock Management",d:"Mengelola data pergerakan inventaris secara menyeluruh, mencakup pencatatan total 562 kuantitas barang masuk dan 417 kuantitas barang keluar dari 8 jenis barang yang terdaftar di sistem",l:"Proyek ini berfokus pada pengelolaan dan pemantauan inventaris menggunakan Microsoft Excel. Data transaksi barang masuk dan keluar diolah untuk menghasilkan rekapitulasi stok, memantau ketersediaan barang, serta mengidentifikasi barang dengan stok tertinggi dan stok yang mulai menipis. Dashboard dirancang untuk menyajikan informasi persediaan secara terstruktur sehingga memudahkan proses pemantauan dan pengambilan keputusan.",img:"images/stockgudang.png",tech:["Microsoft Excel","COUNTIF","XLOOKUP","SUMIF"]},
  {t:"Graphic Design",d:"Kumpulan karya ini merupakan bagian dari perjalanan saya dalam mengeksplorasi dunia desain grafis. Setiap proyek menjadi kesempatan untuk mencoba hal baru",l:"Kumpulan karya ini merupakan bagian dari perjalanan saya dalam mengeksplorasi dunia desain grafis. Setiap proyek menjadi kesempatan untuk mencoba hal baru, mengembangkan kreativitas, serta memahami bagaimana sebuah ide dapat diwujudkan melalui visual yang menarik. Dari proses mencari inspirasi hingga menentukan konsep akhir, saya terus belajar untuk menghasilkan desain yang lebih baik, memperluas perspektif, dan mengembangkan kemampuan dalam menyampaikan ide melalui karya visual.",img:"images/design-porto1.png",tech:["Canva","Pinterest"]}];
 /* foto di halaman detail: foto utama + foto tambahan */
const EXTRA=[
  ["images/dataslipgaji.png"],       // tambahan untuk project 1
  ["images/rekap-gudang.png"],     // tambahan untuk project 2
  ["images/rekap-gudang.png"],
  ["images/design-porto2.png"]      // tambahan untuk project 3
];
PROJ.forEach((p,i)=>p.imgs=[p.img,...EXTRA[i]]);
PROJ[1].imgs=["images/dataanalys.png"]; // project Sales Data: cuma 1 foto (yang bawah)
PROJ[1].imgs=[PROJ[1].img];
const CERT=[
 {t:"Pelatihan Manajemen Organisasi (PMO).",d:"",img:"images/Pmo-2.png"},
 {t:"Pelatihan Manajemen Organisasi (PMO).",img:"images/pmo-4.jpg"},
 {t:"Pelatihan Manajemen Organisasi (PMO).",img:"images/pmo-5.jpg"}
];
const ACH=[{t:"Belum ada penghargaan",d:"",img:"images/penghargaan-1.png"}];
const STK=[
 {t:"Microsoft Excel",d:"",img:"images/excel.png"},
 {t:"Microsoft Word",d:"",img:"images/word-logo.png"},
 {t:"Gmail",d:"",img:"images/gmail-logo.png"},
 {t:"Google Drive",d:"",img:"images/gdrive-logo.png"},
 {t:"Google Doc",d:"",img:"images/logo-gdoc.png"},
 {t:"Canva",d:"",img:"images/canva-logo.png"}
];

/* ===== helpers ===== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function cards(el,arr,detail){el.innerHTML=arr.map((p,i)=>`<div class="pc"><div class="im" style="background-image:url('${p.img}')"></div><h3>${p.t}</h3>${p.d?`<p>${p.d}</p>`:''}${detail?`<button class="btn" data-i="${i}">Details →</button>`:''}</div>`).join('')}
cards($('#g-p'),PROJ,1);cards($('#g-c'),CERT);cards($('#g-a'),ACH);cards($('#g-s'),STK);
$$('#g-p .btn').forEach(b=>b.onclick=()=>{const p=PROJ[b.dataset.i];$('#dc').textContent=p.t;$('#dt').textContent=p.t;$('#dd').textContent=p.l;$('#dtg').innerHTML=p.tech.map(x=>`<span>${x}</span>`).join('');$('#di').innerHTML=p.imgs.map(x=>`<img src="${x}" alt="">`).join('');$('#di').innerHTML=p.imgs.map(x=>`<img src="${x}" alt="">`).join('');$('#di').classList.toggle('one',p.imgs.length==1);$('#det').classList.add('on')});
$('#back').onclick=()=>$('#det').classList.remove('on');
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.toggle('on',x===b));['p','c','a','s'].forEach(k=>$('#g-'+k).classList.toggle('h',k!==b.dataset.t))});

/* efek ngetik */
let ri=0,ci=0,del=0;(function ty(){const w=ROLES[ri];ci+=del?-1:1;$('#role').textContent=w.slice(0,ci);let s=del?40:90;if(!del&&ci==w.length){del=1;s=1500}else if(del&&ci==0){del=0;ri=(ri+1)%ROLES.length;s=300}setTimeout(ty,s)})();

/* reveal + nav aktif */
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.15});$$('.rv').forEach(e=>io.observe(e));
const so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)$$('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+x.target.id))}),{threshold:.5});$$('section').forEach(s=>so.observe(s));

/* musik (opsional: taruh assets/musik.mp3) */
const au=new Audio('assets/musik.mp3');au.loop=true;let on=0;$('#snd').onclick=()=>{on=!on;on?au.play().catch(()=>{}):au.pause();$('#snd').textContent=on?'🔊':'🔇'};

/* komentar (tersimpan di browser sendiri) */
function rc(){const a=JSON.parse(localStorage.getItem('cm')||'[]');$('#cn').textContent=a.length;$('#cl').innerHTML=a.map((c,i)=>`<div class="cm">👤<div style="flex:1"><b>${c.n.replace(/</g,'&lt;')}</b><small>${c.t.replace(/</g,'&lt;')}</small></div><button class="cdel" data-i="${i}">Hapus</button></div>`).join('')}
$('#cs').onclick=()=>{const n=$('#cnm').value.trim(),t=$('#ctx').value.trim();if(!n||!t)return;const a=JSON.parse(localStorage.getItem('cm')||'[]');a.unshift({n,t});localStorage.setItem('cm',JSON.stringify(a));$('#cnm').value=$('#ctx').value='';rc()};rc();

/* bintang + bintang jatuh */
const cv=$('#stars'),cx=cv.getContext('2d');let W,H,st=[],sh=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;st=Array.from({length:170},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+.3,a:Math.random(),v:Math.random()*.02+.005}))}rs();onresize=rs;
(function dr(){cx.clearRect(0,0,W,H);st.forEach(s=>{s.a+=s.v;cx.globalAlpha=.4+.6*Math.abs(Math.sin(s.a));cx.fillStyle='#cfe0ff';cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill()});
 if(Math.random()<.008)sh.push({x:Math.random()*W,y:-20,l:0});sh=sh.filter(s=>s.y<H+100);sh.forEach(s=>{s.x+=5;s.y+=3.5;s.l=Math.min(s.l+2,90);const g=cx.createLinearGradient(s.x,s.y,s.x-s.l,s.y-s.l*.7);g.addColorStop(0,'rgba(180,210,255,.9)');g.addColorStop(1,'transparent');cx.globalAlpha=1;cx.strokeStyle=g;cx.lineWidth=1.5;cx.beginPath();cx.moveTo(s.x,s.y);cx.lineTo(s.x-s.l,s.y-s.l*.7);cx.stroke()});requestAnimationFrame(dr)})();

/* ===== LANYARD: 3D SYNCHRONIZED TWIST (KARTU + KLIP + TALI BERPUTAR BARENG) ===== */
(function() {
  const container = document.getElementById('lan');
  const cardWrap = document.getElementById('lanyard-card');
  const cardFlip = document.getElementById('card-flip');
  const strapCore = document.getElementById('strap-core');
  const strapStitchL = document.getElementById('strap-stitch-l');
  const strapStitchR = document.getElementById('strap-stitch-r');
  const strapTextPath = document.getElementById('strap-text-path');
  const strapTextGroup = document.getElementById('strap-text-group');
  const clipSvgGroup = document.getElementById('clip-svg-group');
  const anchorPin = document.getElementById('anchor-pin');
  

  if (!container || !cardWrap || !cardFlip || !strapCore || !clipSvgGroup) return;

  // Koordinat Tetap Cantolan di Atas Langit-langit
  const ax = 170;
  const ay = -65;

  // Posisi Normal Kartu
  const restX = 170;
  const restY = 165;

  // Posisi & Kecepatan Kartu
  let cardX = restX;
  let cardY = -window.innerHeight * 1.1;
  let velX = -2.5;
  let velY = 0;

  // Animasi Jatuh di Awal
  let isDropped = false;
  let bounces = 0;

  // 3D Flip State (Kartu, Klip, dan Tali Berputar Bersama)
  let flipAngle = 0;         // Sudut putaran saat ini (0° - 180°)
  let targetFlipAngle = 0;   // Target putaran
  let isFlipped = false;

  // State Drag
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let hasMoved = false;

  // Pointer Down
  cardWrap.addEventListener('pointerdown', (e) => {
    isDragging = true;
    hasMoved = false;
    startX = e.clientX;
    startY = e.clientY;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;
    velX = 0;
    velY = 0;
    cardWrap.setPointerCapture(e.pointerId);
  });

  // Pointer Move (Tarik ke kanan/kiri/bawah)
  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    const dx = e.clientX - lastPointerX;
    const dy = e.clientY - lastPointerY;
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;

    if (Math.hypot(e.clientX - startX, e.clientY - startY) > 6) {
      hasMoved = true;
    }

    cardX += dx;
    cardY += dy;

    cardY = Math.max(restY - 100, cardY);

    velX = dx * 0.75;
    velY = dy * 0.75;
  });

  // Pointer Up
  window.addEventListener('pointerup', () => {
    if (!isDragging) return;
    isDragging = false;

    // JIKA DIKLIK: BALIK KARTU, KLIP, DAN TALI SEKALIGUS!
    if (!hasMoved) {
      isFlipped = !isFlipped;
      targetFlipAngle = isFlipped ? 180 : 0;
    }
  });

  // Render Loop (60 FPS)
  function render() {
    // 1. ANIMASI JATUH DI AWAL
    if (!isDropped) {
      velY += 2.2;
      cardY += velY;

      if (cardY >= restY) {
        cardY = restY;
        velY = -velY * 0.38;
        bounces++;
        velX += (bounces % 2 === 1 ? 5 : -4);

        if (Math.abs(velY) < 1.0 && bounces >= 3) {
          isDropped = true;
          cardY = restY;
        }
      }
    }

    // 2. FISIKA PEGAS KETIKA DILEPAS
    if (isDropped && !isDragging) {
      const forceX = -0.045 * (cardX - restX);
      velX = (velX + forceX) * 0.92;
      cardX += velX;

      const forceY = -0.055 * (cardY - restY);
      velY = (velY + forceY) * 0.90;
      cardY += velY;
    }

    // 3. INTERPOLASI PUTARAN 3D BERSAMAAN (KARTU + KLIP + TALI)
    flipAngle += (targetFlipAngle - flipAngle) * 0.12;
    if (Math.abs(targetFlipAngle - flipAngle) < 0.1) {
      flipAngle = targetFlipAngle;
    }
    // Proyeksi 3D horizontal (dari 1 ke -1)
    const cosFlip = Math.cos((flipAngle * Math.PI) / 180);

    // 4. SIMULASI PUNTIRAN PITA LANYARD

const dx = cardX - ax;
const dy = cardY - ay;

const angleRad = Math.atan2(dx, dy);
const angleDeg = (angleRad * 180) / Math.PI;

// Besar putaran kartu dalam radian
const twist = flipAngle * Math.PI / 180;

// Jumlah bagian pita
const segments = 36;

// Buat wadah bagian pita sekali saja
let ribbonGroup = document.getElementById('ribbon-segments');

if (!ribbonGroup) {
    ribbonGroup = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'g'
    );

    ribbonGroup.setAttribute('id', 'ribbon-segments');

    strapCore.parentNode.insertBefore(
        ribbonGroup,
        strapCore
    );

    // Pita utama digantikan oleh segmen-segmen pita
    strapCore.style.display = 'none';
    strapStitchL.style.display = 'none';
    strapStitchR.style.display = 'none';

    for (let i = 0; i < segments; i++) {
        const piece = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );

        piece.setAttribute('class', 'ribbon-piece');

        ribbonGroup.appendChild(piece);
    }
}

const pieces = ribbonGroup.children;

// Lebar maksimal pita
const halfWidth = 13;

// Membuat bentuk pita dari banyak segmen
for (let i = 0; i < segments; i++) {

    const t1 = i / segments;
    const t2 = (i + 1) / segments;

    // Sudut puntiran berubah sepanjang tali
    const a1 = twist * t1;
    const a2 = twist * t2;

    // Posisi sepanjang tali
    function ribbonPoint(t, a) {

        const wave = Math.sin(a) * 7;

        const centerX =
            ax + dx * t -
            Math.cos(angleRad) * wave;

        const centerY =
            ay + dy * t +
            Math.sin(angleRad) * wave;

        // Lebar tampak mengecil ketika pita berputar
        const width =
            halfWidth * Math.abs(Math.cos(a));

        const nx = -Math.cos(angleRad);
        const ny = Math.sin(angleRad);

        return {
            left: {
                x: centerX + nx * width,
                y: centerY + ny * width
            },
            right: {
                x: centerX - nx * width,
                y: centerY - ny * width
            }
        };
    }

    const p1 = ribbonPoint(t1, a1);
    const p2 = ribbonPoint(t2, a2);

    const d = `
        M ${p1.left.x} ${p1.left.y}
        L ${p2.left.x} ${p2.left.y}
        L ${p2.right.x} ${p2.right.y}
        L ${p1.right.x} ${p1.right.y}
        Z
    `;

    const piece = pieces[i];

    piece.setAttribute('d', d);

    // Perubahan warna membantu memberikan kesan kain terpuntir
    const face = Math.cos((a1 + a2) / 2);

    if (face >= 0) {
        piece.setAttribute(
            'fill',
            `rgb(${Math.round(38 + face * 10)},
                 ${Math.round(43 + face * 10)},
                 ${Math.round(57 + face * 12)})`
        );
    } else {
        piece.setAttribute(
            'fill',
            `rgb(${Math.round(8 + Math.abs(face) * 10)},
                 ${Math.round(10 + Math.abs(face) * 10)},
                 ${Math.round(16 + Math.abs(face) * 12)})`
        );
    }

    piece.setAttribute(
        'stroke',
        'rgba(180,190,210,0.18)'
    );

    piece.setAttribute('stroke-width', '0.5');
}

// ========================================
// TULISAN NAMA MENGIKUTI PUNTIRAN LANYARD
// ========================================

const textGroup = document.getElementById('strap-text-group');
const textName = 'LUTFI MAHENDRA';

if (textGroup) {

    // 1. Buat setiap huruf satu kali
    if (textGroup.children.length !== textName.length) {

        textGroup.innerHTML = '';

        for (const char of textName) {

            const letter = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'text'
            );

            letter.textContent = char === ' ' ? '\u00A0' : char;

            letter.setAttribute('fill', '#ffffff');
            letter.setAttribute('font-size', '7.5');
            letter.setAttribute('font-weight', '700');
            letter.setAttribute('text-anchor', 'middle');
            letter.setAttribute('dominant-baseline', 'middle');

            letter.style.textShadow =
                '0 1px 3px rgba(0,0,0,0.9)';

            textGroup.appendChild(letter);
        }
    }

    // 2. Panjang tali
    const strapLength = Math.hypot(dx, dy);

    // 3. Posisi tulisan pada tali
    const textCenter = 0.57;
    const textSpan = Math.min(0.32, 110 / strapLength);

    const letters = [...textGroup.children];

    // 4. Atur posisi dan puntiran setiap huruf
    letters.forEach((letter, i) => {

        // Posisi huruf sepanjang tali
        const progress = letters.length > 1
            ? i / (letters.length - 1)
            : 0.5;

        const t = textCenter +
            (progress - 0.5) * textSpan;

        // Sudut puntiran pada posisi huruf
        const localTwist = twist * t;

        // Besar lengkungan mengikuti bentuk pita
        const wave = Math.sin(localTwist) * 7;

        // Posisi tengah pita
        const x =
            ax + dx * t -
            Math.cos(angleRad) * wave;

        const y =
            ay + dy * t +
            Math.sin(angleRad) * wave;

        // Cari arah tali di sekitar huruf
        const delta = 0.005;

        const tBefore = Math.max(0, t - delta);
        const tAfter = Math.min(1, t + delta);

        const waveBefore =
            Math.sin(twist * tBefore) * 7;

        const waveAfter =
            Math.sin(twist * tAfter) * 7;

        const xBefore =
            ax + dx * tBefore -
            Math.cos(angleRad) * waveBefore;

        const yBefore =
            ay + dy * tBefore +
            Math.sin(angleRad) * waveBefore;

        const xAfter =
            ax + dx * tAfter -
            Math.cos(angleRad) * waveAfter;

        const yAfter =
            ay + dy * tAfter +
            Math.sin(angleRad) * waveAfter;

        // Sudut huruf mengikuti arah lengkungan tali
        const tangentAngle = Math.atan2(
            yAfter - yBefore,
            xAfter - xBefore
        ) * 180 / Math.PI;

        // 5. Perspektif puntiran pita
        const face = Math.cos(localTwist);

        // Permukaan pita tampak menyempit ketika melintir
        const scaleX = Math.sign(face || 1) *
            Math.max(0.08, Math.abs(face));

        // 6. Terapkan posisi, rotasi, dan perspektif
        letter.setAttribute(
            'transform',
            `translate(${x}, ${y})
             rotate(${tangentAngle})
             scale(${scaleX}, 1)`
        );

        // Tulisan sedikit meredup ketika permukaan membelakangi kamera
        letter.setAttribute(
            'opacity',
            0.45 + 0.55 * Math.abs(face)
        );
    });
}

// Klip tetap mengikuti posisi kartu
clipSvgGroup.setAttribute(
    'transform',
    `translate(${cardX}, ${cardY})
     rotate(${angleDeg})
     scale(${Math.cos(twist)}, 1)`
);

    // B. Cincin Cantolan Atas (DIEM DI TEMPAT)
    anchorPin.setAttribute('cx', ax);
    anchorPin.setAttribute('cy', ay);

    // C. KLIP BESI: Ikut Berputar 3D Bersama Kartu (Terkunci di cardX, cardY)
    clipSvgGroup.setAttribute('transform', `translate(${cardX}, ${cardY}) rotate(${angleDeg}) scale(${cosFlip}, 1)`);

    // D. TULISAN DI TALI: Ikut Melintir & Terbalik (Mirrored) Mengikuti Putaran
    if (strapTextGroup) {
      const midX = (ax + cardX) / 2;
      const midY = (ay + cardY) / 2;
      strapTextGroup.setAttribute('transform', `translate(${midX}, ${midY}) rotate(${angleDeg}) scale(${cosFlip}, 1) rotate(${-angleDeg}) translate(${-midX}, ${-midY})`);
    }

    // E. KARTU ID: Berputar 3D Sinkron dengan Klip & Tali
    cardWrap.style.transform = `translate(${cardX - 125}px, ${cardY + 30}px) rotate(${angleDeg}deg)`;
    cardFlip.style.transform = `rotateY(${flipAngle}deg)`;

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();
/* efek reveal foto About (ngikutin kursor + buntut) */
(function(){
  const box=$('.me'),alt=$('.me .alt');
  let tx=0,ty=0,p=[{x:0,y:0},{x:0,y:0},{x:0,y:0}],r=0,tr=0;
  box.addEventListener('pointermove',e=>{const b=alt.getBoundingClientRect();tx=e.clientX-b.left;ty=e.clientY-b.top;tr=110});
  box.addEventListener('pointerleave',()=>tr=0);
  (function loop(){
    r+=(tr-r)*.12;
    p[0].x+=(tx-p[0].x)*.22;p[0].y+=(ty-p[0].y)*.22;
    p[1].x+=(p[0].x-p[1].x)*.16;p[1].y+=(p[0].y-p[1].y)*.16;
    p[2].x+=(p[1].x-p[2].x)*.12;p[2].y+=(p[1].y-p[2].y)*.12;
    alt.style.setProperty('--r',r.toFixed(1)+'px');
    p.forEach((q,i)=>{alt.style.setProperty('--x'+(i+1),q.x.toFixed(1)+'px');alt.style.setProperty('--y'+(i+1),q.y.toFixed(1)+'px')});
    requestAnimationFrame(loop);
  })();
})();
/* lightbox: klik foto detail untuk zoom */
const lb=$('#lb');
$('#di').addEventListener('click',e=>{
  if(e.target.tagName!=='IMG')return;
  lb.querySelector('img').src=e.target.src;
  lb.classList.add('on');
});
lb.onclick=()=>lb.classList.remove('on');
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
/* kirim pesan ke WhatsApp */
$('#ms').onclick=()=>{
  const n=$('#mn').value.trim(),e=$('#me').value.trim(),p=$('#mp').value.trim();
  if(!n||!p){alert('Isi nama dan pesan dulu ya.');return}
  window.open('https://wa.me/6281410616158?text='+encodeURIComponent('Halo, saya '+n+(e?' ('+e+')':'')+'\n\n'+p),'_blank');
};

/* komentar online (Firebase) */
const firebaseConfig = {
  apiKey: "AIzaSyBVDgl2RMgEGAN3r6n0Ee07GiIwj3S8c0w",
  authDomain: "portofolio-lm.firebaseapp.com",
  projectId: "portofolio-lm",
  storageBucket: "portofolio-lm.firebasestorage.app",
  messagingSenderId: "398941469159",
  appId: "1:398941469159:web:33fbf3108795c62a11a542",
  measurementId: "G-EM61BS96C4"
};
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

db.collection('comments').orderBy('ts','desc').limit(100).onSnapshot(snap=>{
  $('#cn').textContent=snap.size;
  $('#cl').innerHTML=snap.docs.map(d=>{
    const c=d.data();
    return `<div class="cm">👤<div><b>${esc(c.n)}</b><small>${esc(c.t)}</small></div></div>`;
  }).join('');
});

$('#cs').onclick=async()=>{
  const n=$('#cnm').value.trim().slice(0,40),t=$('#ctx').value.trim().slice(0,500);
  if(!n||!t)return;
  $('#cs').disabled=true;
  try{
    await db.collection('comments').add({n,t,ts:firebase.firestore.FieldValue.serverTimestamp()});
    $('#cnm').value=$('#ctx').value='';
  }catch(e){alert('Gagal mengirim komentar, coba lagi.')}
  $('#cs').disabled=false;
};
