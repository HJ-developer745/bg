const chapters=[
["Arjuna's Crisis","Arjuna Viṣāda Yoga","अर्जुन का संकट"],
["The One Who Wears the Body","Sāṅkhya Yoga","शरीर धारण करने वाला"],
["The Work That Is Yours","Karma Yoga","वह कर्म जो तुम्हारा है"],
["Why He Comes Back","Jñāna Karma Sanyāsa Yoga","वह क्यों लौटता है"],
["Working Without Getting Wet","Karma Sanyāsa Yoga","भीगे बिना कर्म करना"],
["The Mind Is Not Your Enemy","Dhyāna Yoga","मन तुम्हारा शत्रु नहीं"],
["Knowing and Really Knowing","Jñāna Vijñāna Yoga","जानना और सच में जानना"],
["What Stays When Everything Goes","Akṣara Brahma Yoga","सब जाने पर जो रह जाए"],
["The Open Secret","Rāja Vidyā Rāja Guhya Yoga","खुला रहस्य"],
["Where to Look for Him","Vibhūti Yoga","उसे कहाँ खोजें"],
["The Form Arjuna Could Not Hold","Viśvarūpa Darśana Yoga","वह रूप जिसे अर्जुन सँभाल न सका"],
["The Ones He Loves","Bhakti Yoga","जिन्हें वह प्रेम करता है"],
["The Field and the One Who Knows It","Kṣetra Kṣetrajña Vibhāga Yoga","क्षेत्र और उसे जानने वाला"],
["The Three Threads","Guṇatraya Vibhāga Yoga","तीन धागे"],
["The Tree With Roots Above","Puruṣottama Yoga","ऊपर जड़ों वाला वृक्ष"],
["Two Kinds of People","Daivāsura Sampad Vibhāga Yoga","दो प्रकार के लोग"],
["What You Believe Becomes You","Śraddhātraya Vibhāga Yoga","जो मानते हो, वही बनते हो"],
["Come to Me","Mokṣa Sanyāsa Yoga","मेरे पास आओ"]];
const i18n={
en:{library:"My Library",home:"Home",bookTitle:"Bhagavad Gita — Finally Understood",tagline:"All 18 chapters in contemporary language with short films",chapterCount:"18 chapters",buy:"Read Online Bhagavad Gita",chapters:"Chapters",footDesc:"Illustrated Hindu mythology books for children, brought to life chapter by chapter — scan the QR in your book to watch.",shop:"Shop",allBooks:"All books & bundles",watch:"Watch",login:"Log in",allChapters:"All chapters ↑",prev:"← Previous",next:"Next →",chapterWord:"Chapter",ofWord:"of",soon:"Your story is on its way!",tagline:""},
hi:{library:"मेरी लाइब्रेरी",home:"होम",bookTitle:"भगवद् गीता — अब समझ आई",tagline:"सभी 18 अध्याय आज की भाषा में, छोटी फिल्मों के साथ",chapterCount:"18 अध्याय",buy:"भगवद गीता ऑनलाइन पढ़ें",chapters:"अध्याय",footDesc:"बच्चों के लिए सचित्र हिंदू पौराणिक पुस्तकें, अध्याय दर अध्याय जीवंत — देखने के लिए अपनी किताब का QR स्कैन करें।",shop:"खरीदें",allBooks:"सभी किताबें और बंडल",watch:"देखें",login:"लॉग इन",allChapters:"सभी अध्याय ↑",prev:"← पिछला",next:"अगला →",chapterWord:"अध्याय",ofWord:"/",soon:"आपकी कहानी जल्द आ रही है!"}};

// ---- VIDEO SETTINGS -------------------------------------------------
// Chapter 1 to 18: change the src (video) and poster (thumbnail) for each
// language. en = English, hi = Hindi. A src can be an mp4 file path or a
// YouTube/Vimeo embed link (https://www.youtube.com/embed/VIDEO_ID).
const DEMO={en:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            hi:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}; // test videos, used only if your file is missing
const videos={
  1:{
    en:{src:"videos/en/ch1.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/1.png"},
    hi:{src:"/hindi/1.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/1.png"}
  },
  2:{
    en:{src:"videos/en/ch2.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/2.png"},
    hi:{src:"/hindi/2.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/2.png"}
  },
  3:{
    en:{src:"videos/en/ch3.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/3.png"},
    hi:{src:"/hindi/3.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/3.png"}
  },
  4:{
    en:{src:"videos/en/ch4.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/4.png"},
    hi:{src:"/hindi/4.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/4.png"}
  },
  5:{
    en:{src:"videos/en/ch5.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/5.png"},
    hi:{src:"/hindi/5.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/5.png"}
  },
  6:{
    en:{src:"videos/en/ch6.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/6.png"},
    hi:{src:"/hindi/6.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/6.png"}
  },
  7:{
    en:{src:"videos/en/ch7.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/7.png"},
    hi:{src:"/hindi/7.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/7.png"}
  },
  8:{
    en:{src:"videos/en/ch8.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/8.png"},
    hi:{src:"/hindi/8.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/8.png"}
  },
  9:{
    en:{src:"videos/en/ch9.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/9.png"},
    hi:{src:"/hindi/9.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/9.png"}
  },
  10:{
    en:{src:"videos/en/ch10.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/10.png"},
    hi:{src:"/hindi/10.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/10.png"}
  },
  11:{
    en:{src:"videos/en/ch11.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/11.png"},
    hi:{src:"/hindi/11.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/11.png"}
  },
  12:{
    en:{src:"videos/en/ch12.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/12.png"},
    hi:{src:"/hindi/12.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/12.png"}
  },
  13:{
    en:{src:"videos/en/ch13.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/13.png"},
    hi:{src:"/hindi/13.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/13.png"}
  },
  14:{
    en:{src:"videos/en/ch14.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/14.png"},
    hi:{src:"/hindi/14.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/14.png"}
  },
  15:{
    en:{src:"videos/en/ch15.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/15.png"},
    hi:{src:"/hindi/15.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/15.png"}
  },
  16:{
    en:{src:"videos/en/ch16.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/16.png"},
    hi:{src:"/hindi/16.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/16.png"}
  },
  17:{
    en:{src:"videos/en/ch17.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/17.png"},
    hi:{src:"/hindi/17.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/17.png"}
  },
  18:{
    en:{src:"videos/en/ch18.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/18.png"},
    hi:{src:"/hindi/18.mp4", poster:"https://watch.sanatanstories.in/images/thumbnails/bgfu/18.png"}
  }
};
const vid=n=>videos[n][lang];

let lang='en';try{lang=localStorage.getItem('lang')||'en'}catch(e){}
const $=id=>document.getElementById(id);
function route(){const m=location.hash.match(/^#\/(\d+)$/);const n=m?parseInt(m[1],10):0;return n>=1&&n<=18?n:0}

function thumbHTML(ch,big){
  const c=chapters[ch-1],title=lang==='hi'?c[2]:c[0];
  return `<div class="thumb"><span class="thumb-om">ॐ</span><span class="thumb-num">${ch}</span><span class="thumb-title">${title}</span>
    <img class="thumb-img" src="${vid(ch).poster}" alt="" loading="lazy" onerror="this.remove()">
    <span class="play-btn${big?' big':''}" aria-hidden="true">▶</span></div>`;
}
function playerHTML(ch){
  return `<button class="thumb-btn" id="playBtn" aria-label="Play">${thumbHTML(ch,true)}</button>`;
}
function langSwitchHTML(){
  return `<div class="in-lang"><button data-pl="hi" class="${lang==='hi'?'active':''}">हिंदी</button><button data-pl="en" class="${lang==='en'?'active':''}">English</button></div>`;
}
function startVideo(ch,resumeAt){
  if(!user()){openAuth();return}
  const box=$('player'),v=vid(ch);
  let el,usedDemo=false;
  const isEmbed=u=>/youtube\.com|youtu\.be|vimeo/.test(u);
  if(isEmbed(v.src)){
    el=document.createElement('iframe');
    el.src=v.src+(v.src.includes('?')?'&':'?')+'autoplay=1';
    el.allow='autoplay; fullscreen; encrypted-media; picture-in-picture';
    el.allowFullscreen=true;
  }else{
    el=document.createElement('video');
    el.src=v.src;getBlob(ch+'_'+lang).then(b=>{if(b){el.dataset.blob=1;el.src=URL.createObjectURL(b)}});trackWatch(el,ch);el.controls=true;el.autoplay=true;el.playsInline=true;
    el.addEventListener('error',()=>{            // file missing -> demo video for that language
      if(el.dataset.blob)return;if(usedDemo){toast('Video could not be loaded. Check the file path and that it is an H.264/AAC MP4.');return}usedDemo=true;toast('Could not load "'+v.src+'" — check the file path. Playing demo.');el.src=DEMO[lang];el.play().catch(()=>{});
    });
    el.addEventListener('loadedmetadata',()=>{if(resumeAt)el.currentTime=resumeAt});
    el.addEventListener('ended',()=>{if(document.fullscreenElement)document.exitFullscreen()});
  }
  box.innerHTML='';box.appendChild(el);
  box.insertAdjacentHTML('beforeend',langSwitchHTML());
  box.querySelectorAll('[data-pl]').forEach(b=>b.addEventListener('click',()=>{
    const t=el.currentTime||0;setLang(b.dataset.pl);          // switch language, keep position
    if(route()===ch)startVideo(ch,t);
  }));
  if(!document.fullscreenElement){
    const fs=box.requestFullscreen||box.webkitRequestFullscreen;
    if(fs)fs.call(box).catch(()=>{});
  }
  if(el.play)el.play().catch(()=>{});
}
function setLang(l){lang=l;try{localStorage.setItem('lang',lang)}catch(e){}renderKeep()}
function renderKeep(){render()}
function render(){
  const dash=location.hash==='#/dashboard',ch=dash?0:route(),t=i18n[lang];$('dashView').hidden=!dash;refreshUI();
  $('homeView').hidden=ch!==0||dash;
  $('chapterView').hidden=ch===0;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t[el.dataset.i18n]);
  document.documentElement.lang=lang;
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  if(dash){renderDash();return}
  if(ch===0){
    document.title='Gifts of India Watch — Illustrated Epics for Children';
    if(document.fullscreenElement)document.exitFullscreen();
    renderChips();$('chapterGrid').innerHTML=chapters.map((c,i)=>[c,i]).filter(([c,i])=>match(c,i)).map(([c,i])=>`<a class="card" href="#/${i+1}">${thumbHTML(i+1)}<div class="card-body"><span class="num">${i+1}</span><div><h3>${lang==='hi'?c[2]:c[0]}</h3><small>${c[1]}</small></div></div></a>`).join('');
    return;
  }
  const c=chapters[ch-1], title=lang==='hi'?c[2]:c[0];
  document.title=title+' — Gifts of India Watch';
  $('crumbTitle').textContent=title;$('chTitle').textContent=title;$('chSkt').textContent=c[1];
  $('chNum').textContent=ch;$('chNum2').textContent=ch;
  $('player').innerHTML=playerHTML(ch);
  $('actions').innerHTML=actionsHTML(ch);$('playBtn').addEventListener('click',()=>startVideo(ch));
  $('sideList').innerHTML=chapters.map((x,i)=>`<a class="side-item${i+1===ch?' active':''}" href="#/${i+1}"><span class="num sm">${i+1}</span><div><b>${lang==='hi'?x[2]:x[0]}</b><small>${x[1]}</small></div></a>`).join('');
  $('prevBtn').href=`#/${ch-1}`;$('nextBtn').href=`#/${ch+1}`;
  $('prevBtn').classList.toggle('disabled',ch===1);$('nextBtn').classList.toggle('disabled',ch===18);
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>{
  const p=document.querySelector('#player video'),t=p?p.currentTime:0,ch=route();
  setLang(b.dataset.lang);
  if(p&&ch)startVideo(ch,t);
}));
window.addEventListener('hashchange',()=>{render();window.scrollTo(0,0)});
/* ===== Gifts of India: auth, favorites, offline, progress, dashboard ===== */
// Welcome email is sent through your own Gmail using a Google Apps Script (see welcome-mail.gs).
const CONFIG={MAIL:{url:"https://script.google.com/macros/s/AKfycbws77ll3sc_WB3RVTmXg7_jcpoGDFK7UK4VffrBxCnmkMskKCLTF4-paEj3LAFuE3yn4A/exec",secret:"herit"},WELCOME_IMG:"https://watch.sanatanstories.in/images/bgfu-hero.png"}; // MAIL.url = your Google Apps Script web app URL, MAIL.secret = same secret as in the script
const LS=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
const user=()=>LS('goi_cur'),today=()=>new Date().toISOString().slice(0,10);
const P=()=>Object.assign({done:{},log:{},favs:[],dl:[],notif:false,last:''},LS('goi_p_'+user())||{});
const saveP=p=>LS('goi_p_'+user(),p);
const catOf=i=>i<6?'Karma':i<12?'Bhakti':'Jnana';
let cat='All',q='',dashDays=7;
function match(c,i){const p=P();
  const okc=cat==='All'||cat===catOf(i)||(cat==='Favorites'&&p.favs.includes(i+1))||(cat==='Downloads'&&p.dl.some(k=>k.startsWith((i+1)+'_')));
  return okc&&c.join(' ').toLowerCase().includes(q)}
function renderChips(){$('chips').innerHTML=['All','Karma','Bhakti','Jnana','Favorites','Downloads'].map(x=>`<button class="chip${x===cat?' on':''}" data-cat="${x}">${x}</button>`).join('')}
// --- theme
function setTheme(t){document.documentElement.dataset.theme=t;$('themeBtn').textContent=t==='dark'?'☀️':'🌙';LS('goi_theme',t)}
setTheme(LS('goi_theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
// --- modal / toast
function modal(html){$('mbody').innerHTML=html;$('modal').hidden=false}
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),3500)}
// --- auth (client-side demo: use a real backend for production)
async function hash(pw,salt){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+pw));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
function openAuth(tab='signup',msg=''){const su=tab==='signup';
  modal(`<h2>${su?'Create account':'Log in'}</h2><p class="muted">${msg||(su?'Sign up with your Gmail, then log in.':'Welcome back.')}</p>
  ${su?'<input id="an" placeholder="Your name" autocomplete="name">':''}<input id="ae" type="email" placeholder="you@gmail.com" autocomplete="email"><input id="ap" type="password" placeholder="Password (min 8 characters)" autocomplete="${su?'new':'current'}-password">
  <p id="aerr" class="err"></p><button class="btn full" id="asub">${su?'Sign up':'Log in'}</button>
  <p class="muted sw">${su?'Already registered?':'New here?'} <a href="#" id="aswap">${su?'Log in':'Sign up'}</a></p>`);
  $('aswap').onclick=e=>{e.preventDefault();openAuth(su?'login':'signup')};
  $('asub').onclick=async()=>{const e=$('ae').value.trim().toLowerCase(),p=$('ap').value,err=m=>$('aerr').textContent=m,U=LS('goi_users')||{};
    if(!/^[^\s@]+@gmail\.com$/.test(e))return err('Please use a valid Gmail address.');
    if(p.length<8)return err('Password must be at least 8 characters.');
    if(su){if(U[e])return err('Account exists. Please log in.');const salt=crypto.randomUUID();U[e]={name:$('an').value.trim()||'Friend',salt,h:await hash(p,salt)};LS('goi_users',U);openAuth('login','Account created! Now log in.')}
    else{const u=U[e];if(!u||u.h!==await hash(p,u.salt))return err('Wrong email or password.');LS('goi_cur',e);$('modal').hidden=true;render();welcome(e,u.name)}}}
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function welcome(email,name){
  const msg=`Namaste ${name}! Welcome to Gifts of India — a home for illustrated spiritual stories, the Bhagavad Gita and more. Watch, save favorites, and grow a little every day.`,M=CONFIG.MAIL;
  let note='Email is not set up yet (see CONFIG in script.js).';
  if(M.url)try{await fetch(M.url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({secret:M.secret,to:email,name,message:msg,img:CONFIG.WELCOME_IMG})});note='Welcome email sent to '+esc(email)+' — check Spam if you do not see it.'}catch(e){note='Email failed: '+esc(e.message)}
  modal(`<div class="welcome"><div class="wimg">ॐ</div><h2>Welcome, ${esc(name)}!</h2><p>${esc(msg)}</p><p class="muted">${note}</p><button class="btn" onclick="$('modal').hidden=true">Start watching</button></div>`)}
// --- profile menu
function profile(){const u=user();if(!u)return openAuth('login');const p=P(),n=(LS('goi_users')||{})[u]?.name||u;
  modal(`<h2>${esc(n)}</h2><p class="muted">${esc(u)}</p><div class="menu"><a href="#/dashboard" data-close>📊 Progress dashboard</a><a href="#/" data-cat="Favorites" data-close>♥ My Favorites</a><a href="#/" data-cat="Downloads" data-close>⬇ Downloads (offline)</a>
  <label class="row"><input type="checkbox" id="nt" ${p.notif?'checked':''}> Daily reminder notification</label><button class="btn-outline" id="lo">Log out</button></div>`);
  $('nt').onchange=async e=>{const p=P();if(e.target.checked){const r=await Notification.requestPermission();if(r!=='granted'){e.target.checked=false;return toast('Notifications are blocked in your browser.')}p.notif=true;toast('Daily reminder on');}else p.notif=false;saveP(p)};
  $('lo').onclick=()=>{LS('goi_cur',null);localStorage.removeItem('goi_cur');$('modal').hidden=true;location.hash='#/';render()}}
function refreshUI(){const u=user();$('userBtn').textContent=u?'👤 Profile':'Log in'}
// --- offline store (IndexedDB blobs, kept per user)
const db=new Promise(r=>{const q=indexedDB.open('goi',1);q.onupgradeneeded=()=>q.result.createObjectStore('v');q.onsuccess=()=>r(q.result)});
const idb=async(m,k,v)=>{const d=await db;return new Promise(r=>{const s=d.transaction('v',m==='get'?'readonly':'readwrite').objectStore('v');const x=m==='get'?s.get(k):m==='put'?s.put(v,k):s.delete(k);x.onsuccess=()=>r(x.result)})};
const getBlob=k=>idb('get',user()+':'+k);
async function toggleDownload(ch){const k=ch+'_'+lang,p=P();
  if(p.dl.includes(k)){await idb('del',user()+':'+k);p.dl=p.dl.filter(x=>x!==k);saveP(p);toast('Removed from downloads')}
  else{toast('Downloading…');try{let r=await fetch(vid(ch).src);if(!r.ok)r=await fetch(DEMO[lang]);await idb('put',user()+':'+k,await r.blob());p.dl.push(k);saveP(p);toast('Saved for offline viewing')}catch(e){toast('Download failed — try again online.')}}
  $('actions').innerHTML=actionsHTML(ch)}
// --- chapter actions
function actionsHTML(ch){const p=P(),u=user();return `<button data-a="fav">${u&&p.favs.includes(ch)?'♥ Saved':'♡ Favorite'}</button><button data-a="dl">${u&&p.dl.includes(ch+'_'+lang)?'✓ Downloaded':'⬇ Download'}</button><button data-a="share">↗ Share</button><button data-a="done">${u&&p.done[ch]?'✓ Completed':'Mark complete'}</button>`}
function share(ch){const url=location.href.split('#')[0]+'#/'+ch,txt=`Watch "${chapters[ch-1][0]}" on Gifts of India`,e=encodeURIComponent;
  if(navigator.share)return navigator.share({title:'Gifts of India',text:txt,url}).catch(()=>{});
  modal(`<h2>Share</h2><div class="menu"><a target="_blank" href="https://wa.me/?text=${e(txt+' '+url)}">WhatsApp</a><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${e(url)}">Facebook</a><a target="_blank" href="https://twitter.com/intent/tweet?text=${e(txt)}&url=${e(url)}">X / Twitter</a><button class="btn-outline" onclick="navigator.clipboard.writeText('${url}');toast('Link copied')">Copy link</button></div>`)}
function markDone(ch){const p=P();if(!p.done[ch]){p.done[ch]=today();saveP(p);toast('Chapter '+ch+' completed 🙏')}}
function logMin(m){if(!user()||m<=0)return;const p=P();p.log[today()]=+((p.log[today()]||0)+m).toFixed(2);saveP(p)}
function trackWatch(el,ch){let last=0,acc=0;const flush=()=>{logMin(acc/60);acc=0};
  el.addEventListener('timeupdate',()=>{const d=el.currentTime-last;if(d>0&&d<2)acc+=d;last=el.currentTime});
  el.addEventListener('pause',flush);el.addEventListener('ended',()=>{flush();markDone(ch)})}
// --- dashboard
function renderDash(){const m=$('dashView');if(!user()){m.innerHTML='<p class="muted" style="padding:40px 0">Please log in to see your dashboard.</p>';return openAuth('login')}
  const p=P(),done=Object.keys(p.done).length,tot=Object.values(p.log).reduce((a,b)=>a+b,0);
  let streak=0;for(let d=new Date();p.log[d.toISOString().slice(0,10)]>0;d.setDate(d.getDate()-1))streak++;
  const days=[...Array(dashDays)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-(dashDays-1-i));const k=d.toISOString().slice(0,10);return{k,v:p.log[k]||0}}),mx=Math.max(1,...days.map(x=>x.v)),w=dashDays>7?9:34;
  const bars=days.map((x,i)=>{const hh=Math.round(x.v/mx*130);return `<g><rect class="bar" x="${i*(w+6)+10}" y="${150-hh}" width="${w}" height="${hh}" rx="4"><title>${x.k}: ${x.v.toFixed(1)} min</title></rect></g>`}).join('');
  const R=52,C=2*Math.PI*R,cats=['Karma','Bhakti','Jnana'].map((n,ci)=>{const k=[...Array(6)].filter((_,j)=>p.done[ci*6+j+1]).length;return`<div class="cbar"><span>${n}</span><i><b style="width:${k/6*100}%"></b></i><small>${k}/6</small></div>`}).join('');
  const ms=[[1,'First step'],[5,'Seeker'],[10,'Devotee'],[18,'Gita Master']].map(([n,l])=>`<span class="badge${done>=n?' on':''}">${done>=n?'🏅':'🔒'} ${l} (${n})</span>`).join('');
  const rec=Object.entries(p.done).sort((a,b)=>b[1].localeCompare(a[1])).map(([c,d])=>`<li><a href="#/${c}">Ch ${c}: ${chapters[c-1][0]}</a><small>${d}</small></li>`).join('')||'<li class="muted">No completed activities yet.</li>';
  m.innerHTML=`<h2 class="section-title">Your progress</h2><div class="stats"><div><b>${done}/18</b>Chapters done</div><div><b>${tot.toFixed(0)}</b>Minutes watched</div><div><b>${streak}</b>Day streak</div><div><b>${p.favs.length}</b>Favorites</div></div>
  <div class="dgrid"><div class="panel"><div class="ph"><h3>Watch time</h3><span><button class="chip${dashDays===7?' on':''}" data-d="7">7d</button><button class="chip${dashDays===30?' on':''}" data-d="30">30d</button></span></div><svg viewBox="0 0 ${Math.max(260,dashDays*(w+6)+20)} 170" class="chart">${bars}</svg></div>
  <div class="panel"><h3>Completion</h3><svg viewBox="0 0 130 130" class="ring"><circle cx="65" cy="65" r="${R}" class="rbg"/><circle cx="65" cy="65" r="${R}" class="rfg" stroke-dasharray="${C*done/18} ${C}" transform="rotate(-90 65 65)"/><text x="65" y="71" text-anchor="middle">${Math.round(done/18*100)}%</text></svg>${cats}</div></div>
  <div class="panel"><h3>Milestones</h3><div class="badges">${ms}</div></div><div class="panel"><h3>Completed activities</h3><ul class="rec">${rec}</ul></div>`}
// --- daily reminder (fires when the site is opened/active; true background push needs a server)
function remind(){const p=P();if(!user()||!p.notif||Notification.permission!=='granted'||p.last===today()||new Date().getHours()<8)return;
  p.last=today();saveP(p);const o={body:'Take a few quiet minutes for today\'s chapter 🙏',icon:'',tag:'goi-daily'};
  navigator.serviceWorker?.ready.then(r=>r.showNotification('Gifts of India',o)).catch(()=>new Notification('Gifts of India',o))}
setInterval(remind,60000);setTimeout(remind,3000);
// --- events
document.addEventListener('click',e=>{const t=e.target.closest('[data-cat],[data-a],[data-d],[data-close],.mx,#userBtn,#themeBtn');if(!t){if(e.target.id==='modal')$('modal').hidden=true;return}
  if(t.id==='themeBtn')return setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
  if(t.id==='userBtn')return profile();
  if(t.classList.contains('mx'))return $('modal').hidden=true;
  if(t.dataset.cat){cat=t.dataset.cat;if(!user()&&/Fav|Down/.test(cat)){cat='All';return openAuth('login')}render()}
  if(t.dataset.d){dashDays=+t.dataset.d;renderDash()}
  if(t.dataset.close)$('modal').hidden=true;
  if(t.dataset.a){const ch=route();if(!user())return openAuth('login');const p=P();
    if(t.dataset.a==='fav'){p.favs=p.favs.includes(ch)?p.favs.filter(x=>x!==ch):[...p.favs,ch];saveP(p);$('actions').innerHTML=actionsHTML(ch)}
    if(t.dataset.a==='done'){p.done[ch]?delete p.done[ch]:p.done[ch]=today();saveP(p);$('actions').innerHTML=actionsHTML(ch)}
    if(t.dataset.a==='dl')toggleDownload(ch);if(t.dataset.a==='share')share(ch)}});
$('q').addEventListener('input',e=>{q=e.target.value.toLowerCase();render()});
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js');

render();

