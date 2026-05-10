(() => {
'use strict';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let W=0,H=0,DPR=1;
function resize(){
  DPR=Math.min((window.devicePixelRatio||1),2);

  // Mobile hard-fit:
  // 여러 브라우저가 서로 다른 값을 주므로, 가장 작은 보이는 값을 우선 사용한다.
  const vv = window.visualViewport;
  const candW = [
    vv?.width,
    document.documentElement.clientWidth,
    window.innerWidth,
    screen?.width
  ].filter(Boolean);
  const candH = [
    vv?.height,
    document.documentElement.clientHeight,
    window.innerHeight,
    screen?.height
  ].filter(Boolean);

  let vw = Math.floor(Math.min(...candW));
  let vh = Math.floor(Math.min(...candH));

  // iPhone/카톡 인앱 안전 여백. 잘림보다 작은 화면을 우선한다.
  const safeX = 2;
  const safeY = 18;
  vw = Math.max(1, vw - safeX);
  vh = Math.max(1, vh - safeY);

  let cssW = Math.min(vw, vh * 9 / 16);
  let cssH = cssW * 16 / 9;
  if(cssH > vh){
    cssH = vh;
    cssW = cssH * 9 / 16;
  }

  cssW = Math.floor(cssW);
  cssH = Math.floor(cssH);

  W=Math.floor(cssW*DPR);
  H=Math.floor(cssH*DPR);
  canvas.width=W;
  canvas.height=H;
  canvas.style.width=cssW+'px';
  canvas.style.height=cssH+'px';

  document.documentElement.style.setProperty('--game-w', cssW+'px');
  document.documentElement.style.setProperty('--game-h', cssH+'px');
  document.body.style.width='100%';
  document.body.style.height='100%';
}
addEventListener('resize',resize);
if(window.visualViewport) window.visualViewport.addEventListener('resize',resize);
addEventListener('orientationchange',()=>setTimeout(resize,120));
addEventListener('pageshow',()=>setTimeout(resize,60));
if(window.visualViewport){
  visualViewport.addEventListener('scroll',resize);
}
resize();

const $ = id => document.getElementById(id);
const screens = {title:$('title'),menu:$('menu'),upgrade:$('upgrade')};
const hud=$('hud'), augOverlay=$('augmentOverlay'), over=$('gameover');

const SAVE_KEY_PREFIX='ammang_balance_v2_';
let profile=null, saveKey='';

const UPGRADES = [
  ['damage','피해량','바나나 피해 +1',5, [10,25,50,90,150]],
  ['atkspd','공격속도','바나나 공속 +3%',5,[10,25,50,90,150]],
  ['hp','최대 체력','시작 체력 +15',5,[10,25,50,90,150]],
  ['move','이동 속도','가로 이동속도 +3%',5,[10,25,50,90,150]],
  ['flatPen','고정 방관','시작 방관 +2',5,[10,25,50,90,150]],
  ['crit','치명타','치확 +1%',5,[10,25,50,90,150]],
  ['critDmg','치명타 피해','치피 +2%p',5,[10,25,50,90,150]],
  ['poopDmg','똥 피해','똥 피해 +2',5,[10,25,50,90,150]],
  ['growth','성장','보상량 +2%',5,[10,25,50,90,150]],
  ['luck','행운','상자 고등급 확률 +2%',5,[10,25,50,90,150]],
  ['projectile','투사체 수','3단: 시작 투사체 +1',3,[80,180,400]],
  ['poopStart','똥 해금','3단: 시작 똥 +1',3,[60,140,300]],
];

function blankProfile(){
  const upgrades={}; UPGRADES.forEach(u=>upgrades[u[0]]=0);
  return {nickname:'tester', code:'0000', diamond:0, bestScore:0, upgrades};
}
function save(){ if(profile&&saveKey) localStorage.setItem(saveKey, JSON.stringify(profile)); updateMenu(); }
function load(nick,code){
  saveKey=SAVE_KEY_PREFIX+nick+'_'+code;
  const raw=localStorage.getItem(saveKey);
  profile=raw?JSON.parse(raw):blankProfile();
  profile.nickname=nick; profile.code=code;
  save();
}
function show(name){
  Object.values(screens).forEach(s=>s.classList.add('hidden'));
  hud.classList.add('hidden'); augOverlay.classList.add('hidden'); over.classList.add('hidden');
  if(name==='game') hud.classList.remove('hidden');
  else screens[name].classList.remove('hidden');
}
function updateMenu(){
  if(!profile)return;
  $('menuDia').textContent=profile.diamond|0;
  $('upDia').textContent=profile.diamond|0;
}
$('loginBtn').onclick=()=>{ load($('nick').value||'tester',$('code').value||'0000'); show('menu'); };
$('newBtn').onclick=()=>{ profile=blankProfile(); profile.nickname=$('nick').value||'tester'; profile.code=$('code').value||'0000'; saveKey=SAVE_KEY_PREFIX+profile.nickname+'_'+profile.code; save(); show('menu'); };
$('saveBtn').onclick=()=>save();
$('resetBtn').onclick=()=>{ if(confirm('초기화?')){localStorage.removeItem(saveKey); load(profile.nickname, profile.code); updateMenu();}};
$('playBtn').onclick=()=>startGame();
$('upgradeBtn').onclick=()=>{ renderUpgrades(); show('upgrade'); };
$('backMenu1').onclick=()=>show('menu');
$('toMenuBtn').onclick=()=>{ save(); show('menu'); };
$('retryBtn').onclick=()=>startGame();

function renderUpgrades(){
  const grid=$('upgradeGrid'); grid.innerHTML='';
  UPGRADES.forEach(u=>{
    const [key,name,desc,max,costs]=u, lv=profile.upgrades[key]||0;
    const div=document.createElement('div'); div.className='upItem';
    const cost= lv<max ? costs[lv] : '-';
    div.innerHTML=`<h3>${name} ${lv}/${max}</h3><p>${desc}</p><button ${lv>=max?'disabled':''}>${lv>=max?'완료':cost+'💎 구매'}</button>`;
    div.querySelector('button').onclick=()=>{
      if(profile.diamond>=costs[lv]){
        profile.diamond-=costs[lv]; profile.upgrades[key]=lv+1; save(); renderUpgrades();
      }
    };
    grid.appendChild(div);
  });
}

/* ================= Game Data ================= */

const GATES_PER_SECTION=30;
const CHESTS_PER_SECTION=35; // 실제 배치상 잡몹/상자 이벤트 수
const SECTION_COUNT=4;
const SECTION_LEN=19500; // 픽셀 거리. 울타리 간격 약 620px. 한 화면에 1~2개 정도
const TOTAL_LEN=SECTION_LEN*SECTION_COUNT;
const BASE_SCROLL=90; // px/sec. 이동감 유지
const FINAL_BOSS_SLOW=28; // 최종보스 접근 중 느린 이동. 최종보스 딜타임 약 8~10초

const AUGS = {
 common: [
  ['다섯 번째는 서비스','바나나 5번째 적중마다 고정 피해 +25', s=>{s.bananaEvery5Flat+=25}, ['banana']],
  ['손목 스냅 장인','바나나 공격속도 +12%', s=>{s.bananaAS*=1.12}, ['banana']],
  ['껍질에 가시남','바나나 적중 시 고정 피해 +4', s=>{s.bananaFlatOnHit+=4}, ['banana']],
  ['어깨 풀렸다','바나나 사거리 +30%', s=>{s.bananaRange*=1.3}, ['banana','range']],
  ['하나 더 던져봐','바나나 투사체 +1', s=>{s.bananaCount+=1}, ['banana','projectile']],
  ['껍질 벗겨버려','고정 방관 +4, 방어력 50+ 적에게 바나나 피해 +8%', s=>{s.flatPen+=4;s.armoredBonus=(s.armoredBonus||0)+.08}, ['banana','armorPen']],
  ['참다 참다 쌌다','최대 똥 저장 수 +4', s=>{s.poopMax+=4;s.poopUnlocked=true;s.poopTimer=Math.max(s.poopTimer||0,s.poopCD||4)}, ['poop']],
  ['냄새가 여기까지','똥 사거리 +30%', s=>{s.poopRange*=1.30;s.poopUnlocked=true}, ['poop','range']],
  ['다섯 번째 똥은 다르다','5번째 똥마다 최대체력 1.2% 고정피해', s=>{s.poopEveryN={n:5,pct:0.012}}, ['poop']],
  ['장 운동 시작','똥 쿨타임 -18%', s=>{s.poopCD*=.82;s.poopUnlocked=true}, ['poop','auto']],
  ['묵직한 녀석','똥 피해 +30%', s=>{s.poopDamage*=1.30;s.poopUnlocked=true}, ['poop']],
  ['문도는 간다','초당 최대체력 0.5% 회복', s=>{s.regen+=.005}, ['survival']],
  ['왠지 세게 맞음','치명타 확률 +6%', s=>{s.crit+=.06}, ['crit']],
  ['크게 맞으면 아픔','치명타 피해 +10%p', s=>{s.critDmg+=.10}, ['crit']],
  ['살 찌우기','최종 최대체력 +10%', s=>{s.maxHp*=1.1;s.hp*=1.1}, ['survival']],
  ['전환: 골드','무작위 골드 증강 1개 획득', s=>applyRandomAug('gold'), ['greed']],
 ],
 gold: [
  ['꽁꽁 얼은 바나나','바나나 적중 시 최대체력 2% 추가 물리피해', s=>{s.bananaHpScale+=.02}, ['banana','survival']],
  ['껍질 파열','바나나 적중 시 고정 피해 +14', s=>{s.bananaFlatOnHit+=14}, ['banana']],
  ['두 배 세 배','3번째 바나나마다 적중효과 2번 발동', s=>{s.bananaTripleProc=true}, ['banana']],
  ['나중에 개빨라지나요?','처치 시 바나나 공속 +0.08%, 최대 +80%', s=>{s.killAS=true}, ['banana','auto']],
  ['어깨 탈골 투척법','바나나 사거리 +60%, 피해 +10%', s=>{s.bananaRange*=1.6;s.bananaDamage*=1.1}, ['banana','range']],
  ['한 발에 두 놈','치명타 시 적중효과 추가 적용', s=>{s.critProc=true}, ['banana','crit']],
  ['노란 비상사태','바나나 투사체 +2, 피해 -12%', s=>{s.bananaCount+=2;s.bananaDamage*=.88}, ['banana','projectile']],
  ['오늘 장난 아니다','최대 똥 저장 수 +7', s=>{s.poopMax+=7;s.poopTimer=Math.max(s.poopTimer||0,s.poopCD||4)}, ['poop']],
  ['냄새 사거리 증가','똥 사거리 +50%', s=>{s.poopRange*=1.5}, ['poop','range']],
  ['세 번째 똥은 진심','3번째 똥마다 최대체력 2% 고정피해', s=>{s.poopEveryN={n:3,pct:.02}}, ['poop']],
  ['똥마렵','똥 쿨감 +35%, 바나나 공속 -10%', s=>{s.poopCD*=.65;s.bananaAS*=.9}, ['poop','auto']],
  ['오염 폭발','똥 적중 시 주변에 40% 고정피해', s=>{s.poopSplash=.4}, ['poop']],
  ['이건 방어 못 함','보스에게 똥 피해 +40%', s=>{s.poopBossMul*=1.4}, ['poop']],
  ['냄새 묻었다','똥에 맞은 적 방어력 -15%', s=>{s.poopArmorDebuff=.15}, ['poop','armorPen']],
  ['체력이 곧 국력','적 10마리 처치마다 최대체력 +8', s=>{s.hpOn10Kills=true}, ['survival']],
  ['어차피 이판 못 깸','즉시 다이아 +50', s=>{runEarnDiamond(50)}, ['greed']],
  ['전환: 프리즘','무작위 프리즘 증강 1개 획득', s=>applyRandomAug('prism'), ['greed']],
  ['느낌 왔다','치명타 확률 +12%', s=>{s.crit+=.12}, ['crit']],
  ['크게 터지면 기분 좋음','치명타 피해 +20%p', s=>{s.critDmg+=.20}, ['crit']],
  ['방관 중독','퍼센트 방관 +12%', s=>{s.percentPen=Math.min(s.percentPen+.12,.45)}, ['armorPen']]
 ],
 prism: [
  ['양손잡이','현재 투사체 수만큼 20% 미니 바나나 추가', s=>{s.dualWield=true}, ['banana','projectile']],
  ['변비','똥 봉인. 바나나 공속 +100%, 적중 시 현재체력 0.7% 고정피해', s=>{s.poopSealed=true;s.bananaAS*=2;s.bananaCurrentHpPct+=.007}, ['banana']],
  ['유리 바나나','최대체력 -50%. 바나나 피해 15% 추가 고정피해', s=>{s.maxHp*=.5;s.hp=Math.min(s.hp,s.maxHp);s.bananaFlatRatio+=.15}, ['banana']],
  ['티끌 모아 티끌','처치 1마리당 바나나 피해 +0.5', s=>{s.killBananaDamage=.5}, ['banana']],
  ['아 잘못 던졌다','바나나 7% 확률로 똥으로 변함', s=>{s.bananaToPoop=.07}, ['banana','poop']],
  ['노란 지옥','바나나 공속 상한 9회', s=>{s.bananaASCap=9}, ['banana','auto']],
  ['엽떡 먹은 다음날','똥 12% 확률 폭발: 최대체력 3%, 보스 1.5%', s=>{s.poopExplodePct=.03}, ['poop']],
  ['똥쟁이','왼쪽 똥 저장고 추가. 35% 피해', s=>{s.poopMirror=.35}, ['poop']],
  ['똥칼라파워','똥 색마다 랜덤 효과', s=>{s.poopRainbow=true}, ['poop']],
  ['똥인데요','똥 3개마다 최대체력 8%, 보스 4%', s=>{s.poopEveryN={n:3,pct:.08,bossPct:.04}}, ['poop']],
  ['무한 장운동','똥으로 처치 시 똥 1개 즉시 생성', s=>{s.poopKillRefund=true}, ['poop','auto']],
  ['박쥐','박쥐 펫 +1. 흡혈 공격', s=>{s.bat+=1}, ['pet','survival']],
  ['라마','라마 펫 +1. 침으로 방어력 감소', s=>{s.llama+=1}, ['pet','armorPen']],
  ['이거 방탄유리야','10초 무피해 시 최대체력 50% 보호막', s=>{s.shieldRegen=true}, ['survival']],
  ['일단 돈을 챙겨','즉시 다이아 +100', s=>{runEarnDiamond(100)}, ['greed']],
  ['이거 좋은 거예요?','모든 최종 피해 +12%', s=>{s.allDamage*=1.12}, ['banana','poop','pet']],
  ['모든 겜은 치명타가 고점이긴 함','치명타 확률 +30%', s=>{s.crit+=.30}, ['crit']],
  ['한 대만 버티자','죽을 피해 1회 무시', s=>{s.deathSave=true}, ['survival']],
  ['방어구 해체자','퍼센트 방관 +30%, 고정 방관 +15', s=>{s.percentPen=Math.min(s.percentPen+.30,.75);s.flatPen+=15}, ['armorPen']],
 ],
};

/* ================= Runtime ================= */

let game=null;
let rafId=0;
let runToken=0;


/* ================= SFX ================= */
let audioCtx=null;
let sfxEnabled=true;
function initAudio(){
  if(audioCtx) return;
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!AC) return;
  audioCtx=new AC();
}
function resumeAudio(){
  initAudio();
  if(audioCtx && audioCtx.state==='suspended') audioCtx.resume();
}
function sfxGain(vol=0.15){
  if(!audioCtx || !sfxEnabled) return null;
  const g=audioCtx.createGain();
  g.gain.value=vol;
  g.connect(audioCtx.destination);
  return g;
}
function tone(freq=440,dur=.08,type='sine',vol=.12,slideTo=null){
  if(!audioCtx || !sfxEnabled) return;
  const now=audioCtx.currentTime;
  const o=audioCtx.createOscillator();
  const g=audioCtx.createGain();
  o.type=type;
  o.frequency.setValueAtTime(freq,now);
  if(slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20,slideTo),now+dur);
  g.gain.setValueAtTime(0.0001,now);
  g.gain.exponentialRampToValueAtTime(vol,now+.01);
  g.gain.exponentialRampToValueAtTime(0.0001,now+dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(now); o.stop(now+dur+.02);
}
function noise(dur=.08,vol=.12,filterFreq=900,type='lowpass'){
  if(!audioCtx || !sfxEnabled) return;
  const now=audioCtx.currentTime;
  const len=Math.max(1,Math.floor(audioCtx.sampleRate*dur));
  const buffer=audioCtx.createBuffer(1,len,audioCtx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<len;i++) data[i]=(Math.random()*2-1)*(1-i/len);
  const src=audioCtx.createBufferSource();
  src.buffer=buffer;
  const filter=audioCtx.createBiquadFilter();
  filter.type=type; filter.frequency.value=filterFreq;
  const g=audioCtx.createGain();
  g.gain.setValueAtTime(vol,now);
  g.gain.exponentialRampToValueAtTime(0.0001,now+dur);
  src.connect(filter); filter.connect(g); g.connect(audioCtx.destination);
  src.start(now); src.stop(now+dur+.02);
}
function sfx(name, power=1){
  if(!audioCtx || !sfxEnabled) return;
  power=Math.max(.4,Math.min(2,power));
  switch(name){
    case 'start':
      tone(392,.07,'square',.08); setTimeout(()=>tone(587,.08,'square',.08),70); setTimeout(()=>tone(784,.12,'square',.09),135); break;
    case 'banana':
      tone(760,.045,'triangle',.035,980); noise(.025,.015,2600,'highpass'); break;
    case 'bananaHit':
      tone(520,.04,'square',.04,260); noise(.035,.035,1200,'bandpass'); break;
    case 'poopCharge':
      tone(170,.06,'sawtooth',.035,230); noise(.035,.018,420,'lowpass'); break;
    case 'poopFire':
      tone(130,.08,'sawtooth',.07,90); noise(.09,.07,520,'lowpass'); break;
    case 'poopHit':
      tone(95,.08,'square',.06,55); noise(.12,.08,360,'lowpass'); break;
    case 'chest':
      tone(659,.06,'triangle',.07); setTimeout(()=>tone(988,.12,'triangle',.08),55); noise(.06,.025,3200,'highpass'); break;
    case 'gate':
      tone(440,.06,'square',.06); setTimeout(()=>tone(660,.08,'square',.05),50); break;
    case 'augmentCommon':
      tone(420,.08,'triangle',.07); setTimeout(()=>tone(560,.08,'triangle',.06),80); break;
    case 'augmentGold':
      tone(523,.07,'triangle',.08); setTimeout(()=>tone(784,.07,'triangle',.08),70); setTimeout(()=>tone(1046,.12,'triangle',.08),140); noise(.12,.035,4200,'highpass'); break;
    case 'augmentPrism':
      tone(392,.06,'sine',.07); setTimeout(()=>tone(587,.06,'sine',.07),55); setTimeout(()=>tone(880,.08,'sine',.08),110); setTimeout(()=>tone(1318,.18,'sine',.08),170); noise(.18,.04,5000,'highpass'); break;
    case 'hurt':
      tone(180,.14,'sawtooth',.09,80); noise(.08,.05,700,'lowpass'); break;
    case 'kill':
      tone(260,.05,'square',.05,180); noise(.06,.05,900,'bandpass'); break;
    case 'boss':
      tone(100,.18,'sawtooth',.11,65); setTimeout(()=>tone(90,.18,'sawtooth',.10,55),160); break;
    case 'gameover':
      tone(300,.18,'sawtooth',.08,120); setTimeout(()=>tone(190,.22,'sawtooth',.08,70),160); break;
    case 'clear':
      tone(523,.08,'square',.08); setTimeout(()=>tone(659,.08,'square',.08),80); setTimeout(()=>tone(784,.08,'square',.08),160); setTimeout(()=>tone(1046,.18,'square',.09),240); break;
  }
}

function newStats(){
  const u=profile.upgrades;
  const s = {
    maxHp:100 + (u.hp||0)*15,
    hp:100 + (u.hp||0)*15,
    shield:0,
    moveSpeed:1 + (u.move||0)*.03,
    score:0,
    distance:0,
    section:0,
    bananaDamage:10 + (u.damage||0) + ((u.projectile||0)>=1?1:0),
    bananaAS:0.88 * (1+(u.atkspd||0)*.03),
    bananaASCap:6.5,
    bananaTimer:0,
    bananaCount:1 + ((u.projectile||0)>=3?1:0),
    bananaRange:0.5 + ((u.projectile||0)>=2?.1:0),
    flatPen:(u.flatPen||0)*2,
    percentPen:0, armoredBonus:0,
    crit:(u.crit||0)*.01,
    critDmg:1.2+(u.critDmg||0)*.02,
    bananaFlatOnHit:0, bananaEvery5Flat:0, bananaHitCounter:0, bananaHpScale:0, bananaCurrentHpPct:0, bananaFlatRatio:0,
    bananaTripleProc:false, critProc:false, dualWield:false, bananaToPoop:0,
    poopUnlocked:(u.poopStart||0)>=3,
    poopDamage:18+(u.poopDmg||0)*2 + ((u.poopStart||0)>=1?2:0),
    poopCD:4,
    poopTimer:4,
    poopStored:0,
    poopMax:((u.poopStart||0)>=2?1:0) + ((u.poopStart||0)>=3?1:0),
    poopRange:.45,
    poopEveryN:null,
    poopCount:0,
    poopBossMul:1,
    poopSealed:false,
    poopSplash:0, poopArmorDebuff:0, poopMirror:0, poopRainbow:false, poopExplodePct:0, poopKillRefund:false,
    regen:0, bat:0, llama:0, batCD:0, llamaCD:0,
    allDamage:1,
    tags:{},
    kills:0, killAS:false, hpOn10Kills:false, killBananaDamage:0,
    deathSave:false, shieldRegen:false, noHitTime:0,
    rewardScale:1+(u.growth||0)*.02,
    earnedDia:0,
    fenceSinceGeneral:0,
    gatePickCount:0,
    gateSpawnCount:0,
    firstPoopStorageOffered:false,
  };
  return s;
}
function startGame(){
  resumeAudio();
  sfx('start');
  if(!profile) load('tester','0000');
  if(rafId) cancelAnimationFrame(rafId);
  runToken++;
  game = {
    state:'play',
    runToken,
    t:0,last:performance.now(),
    player:{x:0,vx:0,y:H*0.82},
    stats:newStats(),
    projectiles:[],
    enemies:[],
    chests:[],
    gates:[],
    texts:[],
    poopFX:[],
    nextEventIndex:0,
    augmentQueue:[],
    finalBossSpawned:false,
    over:false,
    chestIndex:0,
    mobSpawnCount:0,
    input:{down:false,dir:0},
  };
  buildSchedule();
  spawnGate(0, H*0.56);
  spawnInitialMobBetweenFirstGates(0);
  show('game');
  rafId=requestAnimationFrame(loop);
}

let schedule=[];
function buildSchedule(){
  schedule=[];
  // 섹션별: 울타리 30회. 울타리 간 실제 시간 약 9~10초, 화면에는 보통 1~2개만 보이게 간격을 크게 둠.
  // 시작부터 미니보스 나오지 않게: 첫 미니보스는 섹션 25% 이후.
  for(let sec=0; sec<SECTION_COUNT; sec++){
    const base=sec*SECTION_LEN;
    for(let i=0;i<GATES_PER_SECTION;i++){
      const d=base + 760 + i*(SECTION_LEN-1520)/(GATES_PER_SECTION-1);
      schedule.push({d,type:'gate',section:sec});
      // 울타리 사이 잡몹. 초반은 1마리, 섹션 중간부터 2마리, 후반 3마리 가능
      const mobD=d+315; // 울타리와 다음 울타리 사이 중간쯤 잡몹 배치
      const count = (sec===0 && i<15)?1:(i<22?2:Math.min(3,1+sec));
      schedule.push({d:mobD,type:'mobs',section:sec,count});
    }
    const miniPos=[.25,.50,.75];
    miniPos.forEach((p,idx)=>schedule.push({d:base+SECTION_LEN*p,type:'mini',section:sec,idx}));
    if(sec<3) schedule.push({d:base+SECTION_LEN-120,type:'sectionBoss',section:sec});
    else schedule.push({d:base+SECTION_LEN-150,type:'finalBoss',section:sec});
  }
  schedule.sort((a,b)=>a.d-b.d);
}

function worldY(eventD){
  const g=game, ahead=eventD-g.stats.distance;
  return H*0.25 - ahead*DPR; // 거리가 가까워질수록 내려옴
}
function laneX(lane){
  const center=W/2, span=Math.min(W*0.26,120*DPR);
  return center + lane*span;
}
function spawnGate(sec, initialY=null){
  // 사진 같은 좌우 울타리 보상: 왼쪽/오른쪽 2택만 존재
  const s = game && game.stats ? game.stats : null;
  let opts=[sanitizeFenceOption(rollFenceReward(sec)), sanitizeFenceOption(rollFenceReward(sec))];

  if(s){
    s.gateSpawnCount = (s.gateSpawnCount||0) + 1;

    // 첫 번째/두 번째 울타리 중 최소 한 번은 반드시 똥 저장 +1이 등장.
    // 아직 똥 저장을 먹기 전이고, 2번째 울타리까지 강제 보장.
    if(!s.firstPoopStorageOffered && s.poopMax<=0 && s.gateSpawnCount<=2){
      const side = s.gateSpawnCount===1 ? (Math.random()<0.5?0:1) : (Math.random()<0.5?0:1);
      opts[side] = {key:'poopMax', label:'똥 저장'};
      s.firstPoopStorageOffered = true;
    }

    // 만약 1번째에서 랜덤으로 안 넣었거나 로직상 놓쳤다면 2번째에는 무조건 넣는다.
    if(!s.firstPoopStorageOffered && s.poopMax<=0 && s.gateSpawnCount===2){
      opts[Math.random()<0.5?0:1] = {key:'poopMax', label:'똥 저장'};
      s.firstPoopStorageOffered = true;
    }

    // 똥 저장을 먹기 전에는 다른 똥 관련 보상이 절대 나오면 안 된다.
    if(s.poopMax<=0){
      for(let i=0;i<opts.length;i++){
        if(['poopDamage','poopCD','poopRange'].includes(opts[i].key)){
          opts[i] = {key:'hp', label:'체력'};
        }
      }
    }

    // 일반계열 보상 가뭄 방지: 8번 연속 체력/이속이 안 나오면 한쪽은 반드시 일반계열.
    // 단, 초반 똥 저장 보장보다 우선하지 않는다.
    if(s.fenceSinceGeneral >= 8){
      const idx = Math.random()<0.5?0:1;
      if(opts[idx].key !== 'poopMax'){
        opts[idx] = Math.random()<0.68
          ? {key:'hp', label:'체력'}
          : {key:'move', label:'이동속도'};
      }
    }
  }

  game.gates.push({kind:'gate', y:initialY ?? -80*DPR, opts, picked:false, section:sec});
}
function spawnInitialMob(sec){
  // 시작 3초 안에 보이는 첫 잡몹. 왼쪽/오른쪽 중 한쪽에만 배치.
  const lane = Math.random()<0.5 ? -1 : 1;
  game.enemies.push(makeEnemy('mob', laneX(lane), H*0.18, 50, 0, sec));
}
function spawnInitialMobBetweenFirstGates(sec){
  // 첫 울타리와 두 번째 울타리 사이에 반드시 잡몹 1마리 배치.
  // 첫 울타리보다 위쪽에 두어서 첫 보상 선택 후 만난다.
  const lane = Math.random()<0.5 ? -1 : 1;
  game.enemies.push(makeEnemy('mob', laneX(lane), H*0.08, 50, 0, sec));
}
function spawnMobs(sec,count){
  // 뭉쳐 나오지 않게 같은 거리에서도 y 오프셋을 둠
  for(let i=0;i<count;i++){
    const lane = count===1 ? (Math.random()<.5?-1:1) : (i%2===0?-1:1);
    const y=-80*DPR - i*120*DPR;
    const hp=randomMobHP(sec, game.mobSpawnCount++);
    game.enemies.push(makeEnemy('mob', laneX(lane), y, hp, armorFor(sec), sec));
  }
}
function spawnMini(sec,idx){
  sfx('boss');
  const hp=[[167,260,400],[900,1300,1900],[2800,4200,6000],[7000,9500,12000]][sec][idx];
  game.enemies.push(makeEnemy('mini', W/2, -120*DPR, hp, armorFor(sec)+10, sec, idx));
}
function spawnSectionBoss(sec){
  sfx('boss');
  const hp=[1300,4000,8000][sec];
  game.enemies.push(makeEnemy('boss', W/2, -140*DPR, hp, armorFor(sec)+15, sec));
}
function spawnFinalBoss(sec){
  sfx('boss');
  game.finalBossSpawned=true;
  game.enemies.push(makeEnemy('final', W/2, -180*DPR, 20000, 100, sec));
}
function makeEnemy(type,x,y,hp,armor,sec,idx=0){
  return {type,x,y,hp,maxHp:hp,armor,sec,idx,r: type==='mob'?54*DPR:type==='mini'?86*DPR:type==='final'?100*DPR:88*DPR, dead:false, debuffArmorPct:0};
}
function randomMobHP(sec, globalIndex=0){
  // 선형 체력 금지. 초반은 50~70으로 낮게 시작하고, 진행될수록 기하급수적으로 상승.
  // 전체 잡몹 약 180~230마리 기준으로 최종 구간 잡몹이 수천 체력까지 커지게 설계.
  // 첫 10마리: 대략 50~70
  const i = Math.max(0, globalIndex);
  let base;
  if(i < 10){
    base = 50 + i * 2.2; // 50~70
  } else {
    // 10번째 이후부터 지수 성장. 200번째 근처에서 약 5000대.
    base = 70 * Math.pow(1.023, i - 10);
  }

  // 섹션별 최소 보정. 너무 낮게 남지 않게만 받쳐주고, 핵심은 globalIndex 지수곡선.
  const sectionFloor = [50, 180, 650, 1800][sec];
  base = Math.max(base, sectionFloor);

  // 약간의 랜덤 편차. 초반 10마리는 작게, 이후는 ±12%.
  const variance = i < 10 ? 0.08 : 0.12;
  const mul = 1 + (Math.random()*2 - 1) * variance;
  return Math.round(base * mul);
}
function armorFor(sec){ return [0,30,55,80][sec]; }

function sanitizeFenceOption(opt){
  if(!opt) return opt;
  const forbidden = new Set(['bananaCount','flatPen','percentPen','crit','critDmg']);
  if(forbidden.has(opt.key)){
    return {key:'hp', label:'체력'};
  }
  return opt;
}
function rollFenceReward(sec){
  const s = game && game.stats ? game.stats : null;
  const hasPoopStorage = !!(s && s.poopMax > 0);

  const nonPoopTable=[
    ['bananaDamage','바나나 피해',16],
    ['bananaAS','바나나 속도',9],
    ['bananaRange','사거리',9],
    ['hp','체력',24],
    ['move','이동속도',9]
  ];

  const poopStorageOnly=[
    ['poopMax','똥 저장',18]
  ];

  const fullTable=[
    // 똥 저장 +1을 먹은 뒤에만 다른 똥 관련 울타리가 등장한다.
    ['bananaDamage','바나나 피해',16],
    ['bananaAS','바나나 속도',9],
    ['bananaRange','사거리',9],
    ['poopDamage','똥 피해',12],
    ['poopCD','똥 쿨',10],
    ['poopMax','똥 저장',10],
    ['poopRange','똥 사거리',7],
    ['hp','체력',24],
    ['move','이동속도',9]
  ];

  if(!hasPoopStorage){
    // 똥 저장을 먹기 전에는 똥 관련 보상은 오직 똥 저장 +1만 허용.
    // 나머지는 바나나/체력/이속만.
    return Math.random() < 0.22 ? weighted(poopStorageOnly) : weighted(nonPoopTable);
  }

  return weighted(fullTable);
}
function forceGeneralReward(sec){
  return Math.random()<0.65 ? {key:'hp', label:'체력'} : {key:'move', label:'이동속도'};
}
function weighted(table){
  let sum=table.reduce((a,b)=>a+b[2],0), r=Math.random()*sum;
  for(const row of table){ r-=row[2]; if(r<=0) return {key:row[0],label:row[1]}; }
  const row=table[0]; return {key:row[0],label:row[1]};
}
function fenceRewardDisplay(opt, sec){
  opt = sanitizeFenceOption(opt);
  const hpVals=[8,20,40,75];
  switch(opt.key){
    case 'bananaDamage': return ['바나나 피해','+1'];
    case 'bananaAS': return ['바나나 공속','+1.2%'];
    case 'bananaRange': return ['사거리','+3%'];
    case 'poopDamage': return ['똥 피해','+2'];
    case 'poopMax': return ['똥 저장','+1'];
    case 'poopCD': return ['똥 쿨','-2%'];
    case 'poopRange': return ['똥 사거리','+3%'];
    case 'hp': return ['체력',`+${hpVals[sec]||8}`];
    case 'move': return ['좌우속도','+3%'];
    default: return [opt.label||'체력',''];
  }
}
function applyFenceReward(opt, sec){
  opt = sanitizeFenceOption(opt);
  const s=game.stats, scale=s.rewardScale;
  const hpVals=[8,20,40,75];
  const textMap={
    bananaDamage:`바나나 피해 +${Math.round(1*scale)}`,
    bananaAS:`바나나 공속 +${(1.2*scale).toFixed(1)}%`,
    bananaRange:`사거리 +${(3*scale).toFixed(0)}%`,
    poopDamage:`똥 피해 +${Math.round(2*scale)}`,
    poopMax:`똥 저장 +1`,
    poopCD:`똥 쿨 -${(2*scale).toFixed(1)}%`,
    poopRange:`똥 사거리 +${(3*scale).toFixed(0)}%`,
    hp:`체력 +${Math.round(hpVals[sec]*scale)}`,
    move:`좌우속도 +${(3*scale).toFixed(0)}%`,
  };

  if(opt.key==='hp' || opt.key==='move') s.fenceSinceGeneral=0;
  else s.fenceSinceGeneral=(s.fenceSinceGeneral||0)+1;

  switch(opt.key){
    case 'bananaDamage': s.bananaDamage+=1*scale; break;
    case 'bananaAS': s.bananaAS*=1+.012*scale; break;
    case 'bananaRange': s.bananaRange*=1+.03*scale; break;
    case 'poopDamage': s.poopUnlocked=true; s.poopDamage+=2*scale; break;
    case 'poopMax': s.poopUnlocked=true; s.poopMax+=1; s.poopTimer=Math.max(s.poopTimer||0, s.poopCD||4); break;
    case 'poopCD': s.poopUnlocked=true; s.poopCD*=1-.02*scale; break;
    case 'poopRange': s.poopUnlocked=true; s.poopRange*=1+.03*scale; break;
    case 'hp': {
      const v=hpVals[sec]*scale;
      s.maxHp+=v;
      s.hp+=v;
      break;
    }
    case 'move': s.moveSpeed*=1+.03*scale; break;
  }

  sfx('gate');
  addText(textMap[opt.key]||opt.label, W/2, H*.55, '#ffec61');
  if(opt.key==='bananaDamage') addText('현재 바나나 '+Math.round(s.bananaDamage), W/2, H*.59, '#fff177');
}
function rollChestReward(sec){
  const luck=(profile.upgrades.luck||0)*.02;
  let star=1, r=Math.random();
  if(r>0.95-luck) star=3; else if(r>0.70-luck) star=2;
  const table=[
    // 상자는 피해/공속/사거리/체력 중심.
    // 바나나 투사체/똥 저장 같은 구조 스탯은 증강 이상에서만 등장.
    ['bananaDamage','바나나 피해',15],['bananaAS','공속',12],['bananaRange','사거리',9],
    ['poopDamage','똥 피해',14],['poopCD','똥 쿨',11],['poopRange','똥 사거리',8],
    ['hp','체력',16],['move','이동속도',6],
    ['flatPen','방관',3],['percentPen','%방관',2],['crit','치확',3],['critDmg','치피',2],['dia','다이아',2]
  ]; return {...weighted(table), star};
}
function chestRewardText(reward, sec){
  const m = reward.star || 1;
  const hpVals = [25,50,85,140];
  switch(reward.key){
    case 'bananaDamage': return `바나나 피해 +${3*m}`;
    case 'bananaAS': return `바나나 공속 +${4*m}%`;
    case 'bananaRange': return `사거리 +${7*m}%`;
    case 'flatPen': return `방관 +${2*m}`;
    case 'percentPen': return `%방관 +${(1*m).toFixed(1)}%`;
    case 'poopDamage': return `똥 피해 +${5*m}`;
    case 'poopCD': return `똥 쿨 -${6*m}%`;
    case 'poopRange': return `똥 사거리 +${7*m}%`;
    case 'poopPct': return `똥 체력피해 +${(0.2*m).toFixed(1)}%`;
    case 'hp': return `체력 +${hpVals[sec]*m}`;
    case 'move': return `좌우속도 +${3*m}%`;
    case 'crit': return `치확 +${2*m}%`;
    case 'critDmg': return `치피 +${4*m}%p`;
    case 'dia': return `다이아 +${m}`;
    default: return `${reward.label} +${m}`;
  }
}
function applyChestReward(reward, sec){
  sfx('chest');
  const s=game.stats, m=reward.star, scale=s.rewardScale;
  const hp=[25,50,85,140][sec]*m*scale;
  switch(reward.key){
    case 'bananaDamage': s.bananaDamage+=3*m*scale; break;
    case 'bananaAS': s.bananaAS*=1+.04*m*scale; break;
    case 'bananaRange': s.bananaRange*=1+.07*m*scale; break;    case 'flatPen': s.flatPen+=3*m*scale; break;
    case 'percentPen': s.percentPen=Math.min(s.percentPen+.015*m*scale,.45); break;
    case 'poopDamage': s.poopUnlocked=true; s.poopDamage+=5*m*scale; break;
    case 'poopCD': s.poopUnlocked=true; s.poopCD*=1-.06*m*scale; break;    case 'poopRange': s.poopUnlocked=true; s.poopRange*=1+.07*m*scale; break;
    case 'poopPct': s.poopEveryN={n:5,pct:(s.poopEveryN?.pct||0)+.002*m}; break;
    case 'hp': s.maxHp+=hp; s.hp+=hp; break;
    case 'crit': s.crit=Math.min(s.crit+.02*m,.7); break;
    case 'critDmg': s.critDmg=Math.min(s.critDmg+.04*m,1.8); break;
    case 'dia': runEarnDiamond(1*m); break;
  }
  addText(chestRewardText(reward, sec), W/2, H*.42, '#b8f6ff');
}

function chooseAugment(){
  game.state='augment';
  const roll=Math.random();
  const tier=roll<.50?'common':roll<.90?'gold':'prism';
  sfx(tier==='common'?'augmentCommon':tier==='gold'?'augmentGold':'augmentPrism');
  const pool=[...AUGS[tier]];
  const picks=[];
  while(picks.length<3 && pool.length){
    picks.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
  }
  $('augTitle').textContent = (tier==='common'?'일반 증강 선택':tier==='gold'?'골드 증강 선택':'프리즘 증강 선택') + ` (${tier==='common'?'50%':tier==='gold'?'40%':'10%'})`;
  const cards=$('augCards'); cards.innerHTML='';
  picks.forEach(aug=>{
    const div=document.createElement('div'); div.className='card '+tier;
    div.innerHTML=`<h3>${aug[0]}</h3><p>${aug[1]}</p><button>선택</button>`;
    div.querySelector('button').onclick=()=>{ sfx('gate'); applyAug(aug); augOverlay.classList.add('hidden'); game.state='play'; game.last=performance.now(); rafId=requestAnimationFrame(loop); };
    cards.appendChild(div);
  });
  augOverlay.classList.remove('hidden');
}
function applyRandomAug(tier){
  const pool=AUGS[tier]; applyAug(pool[Math.floor(Math.random()*pool.length)]);
}
function applyAug(aug){
  aug[2](game.stats);
  for(const tag of aug[3]||[]) game.stats.tags[tag]=(game.stats.tags[tag]||0)+1;
  applyTagBonuses();
  addText(aug[0], W/2, H*.35, '#ff7cff');
}
function applyTagBonuses(){
  const s=game.stats,t=s.tags;
  // 간단히 최초 달성 시만 보너스 누적되도록 플래그
  s._tagApplied=s._tagApplied||{};
  function once(key,cond,fn){ if(cond&&!s._tagApplied[key]){s._tagApplied[key]=true;fn();}}
  once('banana2',(t.banana||0)>=2,()=>s.bananaDamage*=1.1);
  once('banana4',(t.banana||0)>=4,()=>s.bananaFlatOnHit*=1.2);
  once('poop2',(t.poop||0)>=2,()=>s.poopCD*=.9);
  once('pet2',(t.pet||0)>=2,()=>{s.batCD*=.9;s.llamaCD*=.9});
  once('armor2',(t.armorPen||0)>=2,()=>s.flatPen+=10);
  once('crit2',(t.crit||0)>=2,()=>s.crit+=.05);
  once('surv2',(t.survival||0)>=2,()=>{s.maxHp+=100;s.hp+=100});
  once('range2',(t.range||0)>=2,()=>{s.bananaRange*=1.15;s.poopRange*=1.15});
  once('proj2',(t.projectile||0)>=2,()=>s.bananaCount+=1);
}
function runEarnDiamond(v){
  // 런 중 즉시 획득 다이아. endGame에서 한 번만 프로필에 반영한다.
  game.stats.earnedDia+=v;
}

/* ================= Loop ================= */

function loop(now){
  if(!game || game.state!=='play') return;
  const dt=Math.min((now-game.last)/1000,.05); game.last=now; game.t+=dt;
  update(dt); draw();
  rafId=requestAnimationFrame(loop);
}
function scrollSpeed(){
  const s=game.stats;
  const finalAlive=game.enemies.find(e=>e.type==='final'&&!e.dead);
  if(finalAlive && finalAlive.y>H*.05) return FINAL_BOSS_SLOW*DPR;
  return BASE_SCROLL*DPR;
}
function update(dt){
  const g=game,s=g.stats;
  const sp=scrollSpeed();
  s.distance += sp*dt/DPR;
  s.score = Math.floor(s.distance/TOTAL_LEN*2000);
  s.section=Math.min(3,Math.floor(s.distance/SECTION_LEN));
  $('score').textContent=String(s.score).padStart(6,'0');
  $('dia').textContent=Math.floor((profile?.diamond||0) + s.earnedDia);
  $('progressFill').style.height=(s.distance/TOTAL_LEN*100)+'%';
  $('progressPlayer').style.bottom=`calc(${s.distance/TOTAL_LEN*100}% - 16px)`;

  // 스케줄 이벤트
  while(g.nextEventIndex<schedule.length && schedule[g.nextEventIndex].d <= s.distance + 420){
    const ev=schedule[g.nextEventIndex++];
    if(ev.type==='gate') spawnGate(ev.section);
    if(ev.type==='mobs') spawnMobs(ev.section, ev.count);
    if(ev.type==='mini') spawnMini(ev.section, ev.idx);
    if(ev.type==='sectionBoss') spawnSectionBoss(ev.section);
    if(ev.type==='finalBoss') spawnFinalBoss(ev.section);
  }

  // 플레이어 이동: 좌/우 2칸 스냅이 아니라 리니어 이동.
  // 방향키/터치를 누르고 있는 동안 천천히 이동하고, 이동속도 스탯이 실제로 반영된다.
  const laneSpan=Math.min(W*0.23,135*DPR);
  const minX=W/2-laneSpan, maxX=W/2+laneSpan;
  if(!g.player.x) g.player.x=W/2;
  const inputDir = g.input.dir || 0;
  const pxPerSec = 210*DPR*s.moveSpeed;
  g.player.x += inputDir * pxPerSec * dt;
  g.player.x = Math.max(minX, Math.min(maxX, g.player.x));
  g.player.y=H*.82;

  // 오브젝트 아래로 이동
  for(const arr of [g.enemies,g.gates,g.chests,g.projectiles]){
    for(const o of arr) o.y += sp*dt;
  }

  // regen/shield
  if(s.regen) s.hp=Math.min(s.maxHp, s.hp+s.maxHp*s.regen*dt);
  if(s.shieldRegen){ s.noHitTime+=dt; if(s.noHitTime>=10) s.shield=Math.max(s.shield,s.maxHp*.5); }

  // 바나나 발사
  s.bananaTimer-=dt;
  const shotsPerSec=Math.min(s.bananaAS, s.bananaASCap||7);
  if(s.bananaTimer<=0){
    s.bananaTimer+=1/shotsPerSec;
    fireBananas(false);
  }

  // 똥 생성/발사
  if(s.poopUnlocked && !s.poopSealed){
    s.poopTimer-=dt;
    if(s.poopTimer<=0){ s.poopTimer+=Math.max(1.2,s.poopCD); const beforePoop=s.poopStored; s.poopStored=Math.min(s.poopStored+1,s.poopMax); if(s.poopStored>beforePoop) sfx('poopCharge'); }
    const target=findNearestEnemy(s.poopRange*H);
    if(target && s.poopStored>0){
      const n=Math.min(s.poopStored, Math.max(0,s.poopMax)); if(n>0) sfx('poopFire', Math.min(2,n/3)); s.poopStored=0;
      for(let i=0;i<n;i++) firePoop(target,1, 0,false,i);
      if(s.poopMirror) for(let i=0;i<n;i++) firePoop(target,s.poopMirror, 0, true,i);
    }
  }

  // pets
  s.batCD-=dt; if(s.bat>0 && s.batCD<=0){ s.batCD=8/Math.max(1,s.bat); petBat(); }
  s.llamaCD-=dt; if(s.llama>0 && s.llamaCD<=0){ s.llamaCD=3/Math.max(1,s.llama); petLlama(); }

  // 똥 발사 이펙트
  if(g.poopFX){
    for(const fx of g.poopFX){ fx.t-=dt; }
    g.poopFX = g.poopFX.filter(fx=>fx.t>0);
  }

  // 투사체 이동/충돌
  for(const p of g.projectiles){
    if(p.delay){ p.delay-=dt; continue; }
    if(p.kind==='banana') p.y -= p.speed*dt;
    if(p.kind==='poop'){
      if(!p.target || p.target.dead){
        // 기존 타겟이 죽어도 바닥에 떨어지지 않게 즉시 다른 적을 찾는다.
        p.target = findNearestEnemy(H*1.2);
      }
      if(p.target && !p.target.dead){
        const dx=p.target.x-p.x, dy=p.target.y-p.y, len=Math.hypot(dx,dy)||1;
        const nx = -dy/len, ny = dx/len;
        const wobble = Math.sin(game.t*18 + (p.slotIndex||0)) * (p.curve||0) * .012;
        p.x += (dx/len*p.speed + nx*wobble)*dt;
        p.y += (dy/len*p.speed + ny*wobble)*dt;
      } else {
        // 적이 아예 없을 때만 직진. 불발처럼 바닥에 떨어지는 연출 금지.
        p.y -= p.speed*dt;
      }
    }
    if(p.kind==='banana' && p.bornY !== undefined && (p.bornY - p.y) > p.range){
      p.dead = true;
      continue;
    }
    for(const e of g.enemies){
      if(e.dead) continue;
      if(Math.hypot(p.x-e.x,p.y-e.y)<e.r+(p.r||8*DPR)){
        hitEnemy(e,p); p.dead=true; break;
      }
    }
    if(p.y<-80*DPR || p.y>H+80*DPR) p.dead=true;
  }
  g.projectiles=g.projectiles.filter(p=>!p.dead);

  // 충돌/상자/게이트
  for(const e of g.enemies){
    if(e.dead) continue;

    if(e.type==='mob'){
      // 잡몹은 좌/우로 피할 수 있다.
      if(e.y>g.player.y-30*DPR && Math.abs(e.x-g.player.x)<e.r+18*DPR){
        collideEnemy(e);
      }
    } else {
      // 미니보스/중간보스/최종보스는 피할 수 없다.
      // 시각적으로 옆 샛길이 있어도 지나치는 순간 무조건 충돌/몸빵 판정.
      if(e.y>g.player.y-55*DPR){
        collideEnemy(e);
      }
    }

    if(e.y>H+100*DPR) e.dead=true;
  }
  g.enemies=g.enemies.filter(e=>!e.dead);

  for(const c of g.chests){
    if(Math.hypot(c.x-g.player.x,c.y-g.player.y)<62*DPR){
      applyChestReward(c.reward,c.section); c.dead=true;
    }
    if(c.y>H+80*DPR) c.dead=true;
  }
  g.chests=g.chests.filter(c=>!c.dead);

  for(const gate of g.gates){
    if(!gate.picked && gate.y>g.player.y-40*DPR){
      const side=g.player.x<W/2?0:1;
      applyFenceReward(gate.opts[side], gate.section||s.section);
      gate.picked=true; gate.dead=true;
    }
    if(gate.y>H+80*DPR) gate.dead=true;
  }
  g.gates=g.gates.filter(x=>!x.dead);

  // floating texts
  for(const t of g.texts){ t.y-=30*DPR*dt; t.life-=dt; }
  g.texts=g.texts.filter(t=>t.life>0);

  $('runStats').innerHTML=`HP ${Math.ceil(s.hp)}/${Math.ceil(s.maxHp)} | 바나나 ${Math.round(s.bananaDamage)} x${Math.round(s.bananaCount)} / ${s.bananaAS.toFixed(1)}s | 방관 ${Math.round(s.flatPen)} +${Math.round(s.percentPen*100)}%<br>똥 ${Math.round(s.poopDamage)} 저장 ${Math.floor(s.poopStored)}/${Math.floor(s.poopMax)} 쿨 ${Math.max(1.2,s.poopCD).toFixed(1)} | 치확 ${Math.round(s.crit*100)}% 치피 ${Math.round(s.critDmg*100)}% | 좌우속도 ${Math.round(s.moveSpeed*100)}% | 일반가뭄 ${s.fenceSinceGeneral||0} | 몹# ${game.mobSpawnCount}`;

  if(s.distance>=TOTAL_LEN+600 && !g.enemies.find(e=>e.type==='final')){
    endGame(true);
  }
}
function fireBananas(){
  const s=game.stats;
  const count=Math.round(s.bananaCount);
  const spread=Math.min(10*DPR, 42*DPR/Math.max(1,count-1)); // 투사체가 늘어도 산탄처럼 퍼지지 않게 응집
  const total=count + (s.dualWield?count:0);
  for(let i=0;i<count;i++){
    const x=game.player.x + (i-(count-1)/2)*spread;
    game.projectiles.push({kind:'banana',x,y:game.player.y-45*DPR,speed:420*DPR,r:11*DPR,mini:false,range:s.bananaRange*H, bornY:game.player.y});
  }
  if(s.dualWield){
    for(let i=0;i<count;i++){
      const x=game.player.x + (i-(count-1)/2)*spread + 6*DPR;
      game.projectiles.push({kind:'banana',x,y:game.player.y-52*DPR,speed:430*DPR,r:8*DPR,mini:true,range:s.bananaRange*H, bornY:game.player.y});
    }
  }
}
function getPoopSlotPosition(slotIndex=0, mirror=false){
  const p=game.player;
  const side = mirror ? -1 : 1;
  // 포로발사기처럼 캐릭터 옆/뒤에 둥글게 쌓이는 위치
  const col = slotIndex % 3;
  const row = Math.floor(slotIndex / 3);
  return {
    x: p.x + side*(30 + col*12)*DPR,
    y: p.y - (24 + row*13 + col*4)*DPR
  };
}
function firePoop(target,mul=1,delay=0,mirror=false,slotIndex=0){
  const pos=getPoopSlotPosition(slotIndex, mirror);
  if(game.poopFX){
    game.poopFX.push({x:pos.x,y:pos.y,t:.22,life:.22,r:13*DPR,mirror});
  }
  game.projectiles.push({
    kind:'poop',
    x:pos.x,
    y:pos.y,
    speed:410*DPR,
    r:11*DPR,
    target,
    mul,
    delay:0,
    slotIndex,
    curve:(Math.random()-.5)*28*DPR
  });
}
function findNearestEnemy(rangePx){
  let best=null, bd=Infinity;
  for(const e of game.enemies){
    if(e.dead)continue;
    const d=Math.hypot(e.x-game.player.x,e.y-game.player.y);
    if(d<rangePx&&d<bd){best=e;bd=d;}
  }
  return best;
}
function physicalDamage(base,e){
  const s=game.stats;
  let armor=e.armor*(1-(e.debuffArmorPct||0));
  armor=Math.max(0, armor*(1-s.percentPen)-s.flatPen);
  let dmg=base*100/(100+armor);
  if(Math.random()<s.crit) dmg*=s.critDmg;
  return dmg*s.allDamage;
}
function hitEnemy(e,p){
  const s=game.stats;
  let dmg=0;
  if(p.kind==='banana'){
    let base=s.bananaDamage*(p.mini?.2:1); if((e.armor||0)>=50 && s.armoredBonus) base*=1+s.armoredBonus;
    dmg+=physicalDamage(base,e);
    let onhit=s.bananaFlatOnHit*(p.mini?.2:1);
    s.bananaHitCounter++;
    if(s.bananaEvery5Flat && s.bananaHitCounter%5===0) onhit+=s.bananaEvery5Flat*(p.mini?.2:1);
    if(s.bananaHpScale) dmg+=physicalDamage(s.maxHp*s.bananaHpScale*(p.mini?.2:1),e);
    if(s.bananaCurrentHpPct) onhit+=e.hp*s.bananaCurrentHpPct*(p.mini?.2:1);
    if(s.bananaFlatRatio) onhit+=base*s.bananaFlatRatio*(p.mini?.2:1);
    dmg+=onhit*s.allDamage;
    if(s.bananaToPoop && Math.random()<s.bananaToPoop) dmg+=s.poopDamage*s.allDamage;
  } else if(p.kind==='poop'){
    s.poopCount++;
    let mul=p.mul||1;
    dmg=s.poopDamage*mul*s.poopBossMul*s.allDamage;
    const pe=s.poopEveryN;
    if(pe && s.poopCount%pe.n===0){
      const pct=(e.type==='final'||e.type==='boss'||e.type==='mini')?(pe.bossPct??pe.pct*.5):pe.pct;
      dmg+=e.maxHp*pct*mul;
    }
    if(s.poopExplodePct && Math.random()<.12) dmg+=e.maxHp*((e.type==='final')?s.poopExplodePct*.5:s.poopExplodePct);
    if(s.poopArmorDebuff) e.debuffArmorPct=Math.max(e.debuffArmorPct||0,s.poopArmorDebuff);
  }
  e.hp-=dmg;
  sfx(p.kind==='poop'?'poopHit':'bananaHit');
  // 같은 순간 여러 투사체가 맞으면 데미지 숫자가 겹쳐서 1발만 맞은 것처럼 보이는 문제 방지
  const dmgLabel = Math.round(dmg);
  const nowT = game.t;
  if(p.kind==='banana'){
    if(!e._bananaPopup || nowT - e._bananaPopup.t > 0.08){
      e._bananaPopup = {t:nowT, dmg:dmgLabel, hits:1};
      addText(String(dmgLabel), e.x, e.y-e.r, '#fff177', .45, e._bananaPopup);
    } else {
      e._bananaPopup.dmg += dmgLabel;
      e._bananaPopup.hits += 1;
      e._bananaPopup.ref.txt = `${e._bananaPopup.dmg} x${e._bananaPopup.hits}`;
    }
  } else {
    addText(String(dmgLabel), e.x, e.y-e.r, '#8a4a20', .45);
  }
  if(e.hp<=0) killEnemy(e,p.kind);
}
function killEnemy(e,source){
  if(e.dead) return;
  const s=game.stats;
  e.dead=true; s.kills++;
  sfx('kill');
  if(s.killAS) s.bananaAS=Math.min((s.bananaASCap||7),s.bananaAS*1.0008);
  if(s.killBananaDamage) s.bananaDamage+=s.killBananaDamage;
  if(s.hpOn10Kills && s.kills%10===0){s.maxHp+=8;s.hp+=8;}
  if(s.poopKillRefund && source==='poop'){ const beforePoop=s.poopStored; s.poopStored=Math.min(s.poopStored+1,s.poopMax); if(s.poopStored>beforePoop) sfx('poopCharge'); }
  if(e.type==='final'){
    endGame(true);
  } else if(e.type==='mob'){
    const reward=rollChestReward(e.sec);
    game.chests.push({x:e.x,y:e.y,section:e.sec,reward,r:44*DPR,label:chestRewardText(reward,e.sec)});
  } else {
    chooseAugment();
  }
}
function collideEnemy(e){
  const s=game.stats;
  let dmg=e.hp;
  if(s.shield>0){ const block=Math.min(s.shield,dmg); s.shield-=block; dmg-=block; }
  if(dmg>0){ s.hp-=dmg; s.noHitTime=0; sfx('hurt'); }

  const survived = s.hp > 0 || s.deathSave;

  if(s.hp<=0){
    if(s.deathSave){
      s.deathSave=false;
      s.hp=1;
      addText('한 대만 버팀!', W/2,H*.5,'#ff77ff');
    } else {
      e.dead=true;
      endGame(false);
      return;
    }
  }

  // 몸빵으로 지나쳤더라도 살아남았으면 처치로 인정한다.
  // 미니보스/중간보스는 이 경우에도 증강 보상이 떠야 한다.
  if(survived){
    addText('몸빵 처치!', e.x, e.y-e.r-35*DPR, '#ff9b42');
    killEnemy(e, 'body');
  } else {
    e.dead=true;
  }
}
function petBat(){
  const e=findNearestEnemy(H*.9); if(!e)return;
  const pct=(e.type==='final'||e.type==='boss'||e.type==='mini')?.05:.08;
  const heal=(e.type==='final'||e.type==='boss'||e.type==='mini')?.05:.08;
  const dmg=e.maxHp*pct; e.hp-=dmg; game.stats.hp=Math.min(game.stats.maxHp,game.stats.hp+game.stats.maxHp*heal);
  addText('박쥐 '+Math.round(dmg), e.x,e.y-40*DPR,'#b062ff');
  if(e.hp<=0) killEnemy(e,'pet');
}
function petLlama(){
  const e=findNearestEnemy(H*.9); if(!e)return;
  const dmg=e.maxHp*.03; e.hp-=dmg; e.debuffArmorPct=Math.min(.30,(e.debuffArmorPct||0)+.05);
  addText('퉤 '+Math.round(dmg), e.x,e.y-55*DPR,'#abff62');
  if(e.hp<=0) killEnemy(e,'pet');
}
function addText(txt,x,y,color='#fff',life=.9,popup=null){
  const obj={txt,x,y,color,life};
  game.texts.push(obj);
  if(popup) popup.ref=obj;
  return obj;
}
function endGame(clear){
  if(game.over)return; game.over=true; game.state='over';
  sfx(clear?'clear':'gameover');
  const s=game.stats;
  let dia=0;
  if(clear) dia=100;
  else {
    const p=s.distance/TOTAL_LEN;
    dia = Math.max(3, Math.floor(p*90));
  }
  dia += Math.floor(s.earnedDia);
  profile.diamond += dia;
  profile.bestScore=Math.max(profile.bestScore,s.score);
  save();
  $('overTitle').textContent=clear?'1바퀴 클리어':'게임오버';
  $('overText').innerHTML=`점수 ${s.score}<br>획득 다이아 ${dia}<br>진행률 ${Math.round(s.distance/TOTAL_LEN*100)}%`;
  over.classList.remove('hidden');
}

/* ================= Input ================= */
canvas.addEventListener('pointerdown',e=>{
  if(!game)return;
  game.input.down=true;
  game.input.dir = e.clientX < innerWidth/2 ? -1 : 1;
});
canvas.addEventListener('pointermove',e=>{
  if(!game||!game.input.down)return;
  game.input.dir = e.clientX < innerWidth/2 ? -1 : 1;
});
canvas.addEventListener('pointerup',()=>{ if(game){ game.input.down=false; game.input.dir=0; } });
canvas.addEventListener('pointercancel',()=>{ if(game){ game.input.down=false; game.input.dir=0; } });

const keys={left:false,right:false};
function syncKeyDir(){
  if(!game)return;
  game.input.dir = (keys.right?1:0) + (keys.left?-1:0);
}
addEventListener('keydown',e=>{
  if(!game)return;
  if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){ keys.left=true; syncKeyDir(); }
  if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){ keys.right=true; syncKeyDir(); }
});
addEventListener('keyup',e=>{
  if(e.key==='ArrowLeft'||e.key==='a'||e.key==='A'){ keys.left=false; syncKeyDir(); }
  if(e.key==='ArrowRight'||e.key==='d'||e.key==='D'){ keys.right=false; syncKeyDir(); }
});

/* ================= Draw ================= */
function draw(){
  ctx.clearRect(0,0,W,H);
  drawWorld();
  drawGates();
  drawChests();
  drawEnemies();
  drawStoredPoop();
  drawProjectiles();
  drawPlayer();
  drawTexts();
}

function isoY(y){ return (y/H); }
function pix(v){ return Math.round(v)+.5; }
function roundedRect(x,y,w,h,r,fill,stroke=null,lw=1){
  ctx.beginPath();
  ctx.roundRect(x,y,w,h,r);
  if(fill){ ctx.fillStyle=fill; ctx.fill(); }
  if(stroke){ ctx.strokeStyle=stroke; ctx.lineWidth=lw; ctx.stroke(); }
}
function lowPolyBlob(cx,cy,r,points,fill,stroke=null,seed=0,scaleY=1){
  ctx.beginPath();
  for(let i=0;i<points;i++){
    const a=(i/points)*Math.PI*2;
    const wob=1+Math.sin(i*12.989+seed)*.13+Math.cos(i*7.123+seed)*.08;
    const x=cx+Math.cos(a)*r*wob;
    const y=cy+Math.sin(a)*r*wob*scaleY;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.closePath();
  ctx.fillStyle=fill; ctx.fill();
  if(stroke){ ctx.strokeStyle=stroke; ctx.lineWidth=2*DPR; ctx.stroke(); }
}
function drawPixelPanel(x,y,w,h,title,value,color='#f2d05a'){
  ctx.save();
  ctx.shadowColor='rgba(0,0,0,.35)';
  ctx.shadowBlur=0;
  ctx.shadowOffsetY=4*DPR;
  roundedRect(x,y,w,h,4*DPR,'#24150b','#e5b73b',2*DPR);
  roundedRect(x+4*DPR,y+4*DPR,w-8*DPR,h-8*DPR,2*DPR,'#3a2010','#5d3317',1*DPR);
  ctx.textAlign='center';
  ctx.font=`bold ${11*DPR}px system-ui`;
  ctx.fillStyle=color;
  ctx.fillText(title,x+w/2,y+18*DPR);
  ctx.font=`bold ${18*DPR}px monospace`;
  ctx.fillStyle='#fff5b0';
  ctx.fillText(value,x+w/2,y+39*DPR);
  ctx.restore();
}
function drawSpark(x,y,t=0,scale=1,color='#ffe56e'){
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(t);
  ctx.strokeStyle=color;
  ctx.lineWidth=1.4*DPR*scale;
  ctx.globalAlpha=.75;
  ctx.beginPath();
  ctx.moveTo(-5*DPR*scale,0); ctx.lineTo(5*DPR*scale,0);
  ctx.moveTo(0,-5*DPR*scale); ctx.lineTo(0,5*DPR*scale);
  ctx.stroke();
  ctx.globalAlpha=1;
  ctx.restore();
}
function drawBananaShape(x,y,r=1,rot=-.55,mini=false){
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(rot);
  const s=DPR*r*(mini?.65:1);
  ctx.shadowColor='rgba(255,210,40,.35)';
  ctx.shadowBlur=mini?3*DPR:6*DPR;
  ctx.strokeStyle='#5f3b12';
  ctx.lineWidth=2.2*s;
  ctx.lineCap='round';
  ctx.beginPath();
  ctx.arc(0,0,13*s,-2.45,-.35);
  ctx.stroke();
  ctx.strokeStyle=mini?'#ffe06a':'#ffca31';
  ctx.lineWidth=7*s;
  ctx.beginPath();
  ctx.arc(0,0,13*s,-2.42,-.38);
  ctx.stroke();
  ctx.strokeStyle='rgba(255,255,185,.75)';
  ctx.lineWidth=2*s;
  ctx.beginPath();
  ctx.arc(-1*s,-2*s,13*s,-2.35,-.65);
  ctx.stroke();
  ctx.fillStyle='#3b220e';
  ctx.beginPath(); ctx.arc(-10*s,8*s,2.2*s,0,Math.PI*2); ctx.fill();
  ctx.restore();
}

function drawWorld(){
  // 로우폴리 협곡 느낌 배경
  const sky=ctx.createLinearGradient(0,0,0,H);
  sky.addColorStop(0,'#6fa5bd');
  sky.addColorStop(.34,'#83b882');
  sky.addColorStop(1,'#3d7a35');
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);

  // 원근감 있는 절벽
  const t=(game?.stats?.distance||0)*0.001;
  ctx.fillStyle='#4b554d';
  ctx.beginPath();
  ctx.moveTo(0,0); ctx.lineTo(W*.20,0); ctx.lineTo(W*.08,H); ctx.lineTo(0,H); ctx.closePath(); ctx.fill();
  ctx.fillStyle='#5b655d';
  ctx.beginPath();
  ctx.moveTo(W*.80,0); ctx.lineTo(W,0); ctx.lineTo(W,H); ctx.lineTo(W*.92,H); ctx.closePath(); ctx.fill();

  // 절벽 면 폴리곤
  for(let i=0;i<8;i++){
    const y=(i*145*DPR + (t*24*DPR)%145*DPR)-80*DPR;
    ctx.fillStyle=i%2?'rgba(255,255,255,.04)':'rgba(0,0,0,.05)';
    ctx.beginPath();
    ctx.moveTo(W*.02,y); ctx.lineTo(W*.19,y+35*DPR); ctx.lineTo(W*.12,y+120*DPR); ctx.lineTo(W*.00,y+95*DPR); ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(W*.98,y+20*DPR); ctx.lineTo(W*.82,y+45*DPR); ctx.lineTo(W*.88,y+130*DPR); ctx.lineTo(W,y+110*DPR); ctx.closePath(); ctx.fill();
  }

  // 중앙 러너 길
  const path=ctx.createLinearGradient(0,0,0,H);
  path.addColorStop(0,'#7fbd55');
  path.addColorStop(.55,'#5ca43e');
  path.addColorStop(1,'#3e7e2c');
  ctx.fillStyle=path;
  ctx.beginPath();
  ctx.moveTo(W*.34,0); ctx.lineTo(W*.66,0); ctx.lineTo(W*.82,H); ctx.lineTo(W*.18,H); ctx.closePath(); ctx.fill();

  // 길 체크 패턴/저폴리
  for(let i=0;i<18;i++){
    const y=(i*72*DPR + (game?.stats?.distance||0)*0.55)%(H+80*DPR)-80*DPR;
    const k=y/H;
    const half=(W*(.16+.18*k));
    const cx=W/2;
    ctx.fillStyle=i%2?'rgba(255,255,255,.035)':'rgba(0,0,0,.035)';
    ctx.beginPath();
    ctx.moveTo(cx-half,y); ctx.lineTo(cx+half,y+8*DPR); ctx.lineTo(cx+half*1.03,y+42*DPR); ctx.lineTo(cx-half*1.03,y+34*DPR); ctx.closePath(); ctx.fill();
  }

  // 나무/바위 장식
  for(let i=0;i<10;i++){
    const side=i%2?-1:1;
    const y=((i*160*DPR + (game?.stats?.distance||0)*0.42)%(H+180*DPR))-90*DPR;
    const x=side<0? W*(.08+(i%3)*.055) : W*(.92-(i%3)*.055);
    const sc=(.75+(i%4)*.12)*DPR;
    // trunk
    ctx.fillStyle='#6b4422'; ctx.fillRect(x-7*sc,y+32*sc,14*sc,38*sc);
    lowPolyBlob(x,y+15*sc,28*sc,7,i%2?'#3f8f32':'#4fa83b',null,i,1.05);
    lowPolyBlob(x+14*sc*side,y-3*sc,20*sc,6,'#66b742',null,i+4,.9);
  }
  for(let i=0;i<12;i++){
    const y=((i*105*DPR + (game?.stats?.distance||0)*0.38)%(H+100*DPR))-50*DPR;
    const x=(i%2?W*.18:W*.82)+(Math.sin(i*9.1)*25*DPR);
    lowPolyBlob(x,y,10*DPR+(i%3)*3*DPR,6,'#9a9d8e',null,i,.65);
  }
}
function polyBlob(x,y,r,n){
  ctx.beginPath();
  for(let i=0;i<n;i++){
    const a=i/n*Math.PI*2, rr=r*(.7+((i*37)%10)/30);
    const px=x+Math.cos(a)*rr, py=y+Math.sin(a)*rr*.45;
    if(i===0)ctx.moveTo(px,py); else ctx.lineTo(px,py);
  }
  ctx.closePath(); ctx.fill();
}
function drawTree(x,y,s){
  ctx.fillStyle='#6b4428'; ctx.fillRect(x-5*DPR*s,y+28*DPR*s,10*DPR*s,28*DPR*s);
  ctx.fillStyle='#184f28';
  ctx.beginPath(); ctx.moveTo(x,y-40*DPR*s); ctx.lineTo(x-35*DPR*s,y+35*DPR*s); ctx.lineTo(x+35*DPR*s,y+35*DPR*s); ctx.closePath(); ctx.fill();
  ctx.fillStyle='rgba(83,153,55,.65)';
  ctx.beginPath(); ctx.moveTo(x,y-20*DPR*s); ctx.lineTo(x-28*DPR*s,y+28*DPR*s); ctx.lineTo(x+28*DPR*s,y+28*DPR*s); ctx.closePath(); ctx.fill();
}
function drawRock(x,y,s){
  ctx.fillStyle='#6d7373'; polyBlob(x,y,26*DPR*s,7);
  ctx.fillStyle='rgba(255,255,255,.18)'; polyBlob(x-6*DPR*s,y-5*DPR*s,10*DPR*s,5);
}
function drawStoredPoop(){
  if(!game || !game.stats) return;
  const s=game.stats;
  if(!s.poopUnlocked || s.poopSealed) return;

  const stored = Math.max(0, Math.floor(s.poopStored||0));
  const maxShow = Math.min(Math.max(stored, 0), 18);
  const p=game.player;

  // 저장량이 0이어도 슬롯 실루엣을 아주 흐리게 보여줘서 '저장형 무기'라는 걸 읽게 함.
  const ghostSlots = Math.min(s.poopMax||3, 6);
  for(let i=0;i<ghostSlots;i++){
    const pos=getPoopSlotPosition(i,false);
    ctx.globalAlpha=.16;
    ctx.fillStyle='#3b2415';
    ctx.beginPath(); ctx.arc(pos.x,pos.y,7*DPR,0,Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha=1;

  for(let i=0;i<maxShow;i++){
    const pos=getPoopSlotPosition(i,false);
    const pulse = 1 + Math.sin(game.t*6 + i*.7)*.06;
    const r = (8 + Math.min(i,5)*.15)*DPR*pulse;

    // 외곽 그림자
    ctx.fillStyle='rgba(0,0,0,.25)';
    ctx.beginPath(); ctx.arc(pos.x+2*DPR,pos.y+3*DPR,r*1.05,0,Math.PI*2); ctx.fill();

    // 똥 본체
    const grad=ctx.createLinearGradient(pos.x-r,pos.y-r,pos.x+r,pos.y+r);
    grad.addColorStop(0,'#8a5526');
    grad.addColorStop(1,'#3f220f');
    ctx.fillStyle=grad;
    ctx.beginPath(); ctx.arc(pos.x,pos.y,r,0,Math.PI*2); ctx.fill();

    // 하이라이트
    ctx.fillStyle='rgba(255,226,150,.45)';
    ctx.beginPath(); ctx.arc(pos.x-r*.25,pos.y-r*.35,r*.25,0,Math.PI*2); ctx.fill();

    // 개수가 많아지면 뒤쪽으로 살짝 탑처럼 쌓이는 느낌
    if(i===maxShow-1 && stored>18){
      ctx.fillStyle='#fff3a8';
      ctx.font=`${10*DPR}px system-ui`;
      ctx.textAlign='center';
      ctx.fillText('+'+(stored-18), pos.x, pos.y-12*DPR);
    }
  }

  // 발사 순간 팡 이펙트
  if(game.poopFX){
    for(const fx of game.poopFX){
      const k=fx.t/fx.life;
      ctx.globalAlpha=Math.max(0,k);
      ctx.strokeStyle='#9b6a2d';
      ctx.lineWidth=3*DPR;
      ctx.beginPath(); ctx.arc(fx.x,fx.y,fx.r*(1.2-k),0,Math.PI*2); ctx.stroke();
      ctx.globalAlpha=1;
    }
  }

  // 저장 카운트
  ctx.fillStyle='#f4d38a';
  ctx.font=`${10*DPR}px system-ui`;
  ctx.textAlign='center';
  ctx.fillText(`${stored}/${s.poopMax}`, p.x+58*DPR, p.y-18*DPR);
}
function drawPlayer(){
  const p=game.player;
  const run=Math.sin(game.t*8);
  const bob=Math.sin(game.t*10)*2*DPR;
  const lean=Math.max(-1,Math.min(1,p.vx/(260*DPR||1)));
  ctx.save();
  ctx.translate(p.x,p.y+bob);

  // shadow
  ctx.fillStyle='rgba(0,0,0,.28)';
  ctx.beginPath(); ctx.ellipse(0,30*DPR,34*DPR,13*DPR,0,0,Math.PI*2); ctx.fill();

  // legs
  ctx.strokeStyle='#6a3d18'; ctx.lineWidth=9*DPR; ctx.lineCap='round';
  ctx.beginPath();
  ctx.moveTo(-10*DPR,-5*DPR); ctx.lineTo((-18+run*4)*DPR,28*DPR);
  ctx.moveTo(10*DPR,-5*DPR); ctx.lineTo((18-run*4)*DPR,28*DPR);
  ctx.stroke();

  // body lowpoly
  ctx.rotate(lean*.08);
  ctx.fillStyle='#9c642d';
  ctx.beginPath();
  ctx.moveTo(-20*DPR,-50*DPR); ctx.lineTo(18*DPR,-52*DPR); ctx.lineTo(22*DPR,0); ctx.lineTo(-18*DPR,4*DPR); ctx.closePath(); ctx.fill();
  ctx.fillStyle='rgba(255,220,150,.12)';
  ctx.beginPath(); ctx.moveTo(-15*DPR,-48*DPR); ctx.lineTo(4*DPR,-50*DPR); ctx.lineTo(-3*DPR,0); ctx.lineTo(-17*DPR,2*DPR); ctx.closePath(); ctx.fill();

  // tail
  ctx.strokeStyle='#7a4a20'; ctx.lineWidth=7*DPR;
  ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(8*DPR,16*DPR,0,24*DPR); ctx.stroke();

  // left arm
  ctx.strokeStyle='#7d4b20'; ctx.lineWidth=8*DPR; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-16*DPR,-40*DPR); ctx.lineTo((-33-run*4)*DPR,(-12+run*2)*DPR); ctx.stroke();

  // throwing right arm + banana in hand
  ctx.strokeStyle='#7d4b20'; ctx.lineWidth=8*DPR;
  ctx.beginPath();
  ctx.moveTo(15*DPR,-42*DPR);
  ctx.lineTo((30+run*2)*DPR,(-70-run*3)*DPR);
  ctx.lineTo((26+run*2)*DPR,(-92-run*2)*DPR);
  ctx.stroke();
  drawBananaShape((28+run*2)*DPR,(-98-run*2)*DPR,.75,-1.2,false);

  // head
  ctx.fillStyle='#9c642d';
  ctx.beginPath(); ctx.arc(0,-68*DPR,23*DPR,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#dcd6c5';
  ctx.beginPath(); ctx.arc(0,-80*DPR,22*DPR,Math.PI,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#8b806e'; ctx.lineWidth=2*DPR;
  ctx.beginPath(); ctx.arc(0,-80*DPR,22*DPR,Math.PI,Math.PI*2); ctx.stroke();

  // face
  ctx.fillStyle='#2a1609';
  ctx.beginPath(); ctx.arc(-7*DPR,-70*DPR,2.2*DPR,0,Math.PI*2); ctx.arc(8*DPR,-71*DPR,2.2*DPR,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#3b1e0b'; ctx.lineWidth=1.5*DPR;
  ctx.beginPath(); ctx.arc(1*DPR,-63*DPR,6*DPR,.1,Math.PI-.1); ctx.stroke();

  ctx.restore();
}
function drawProjectiles(){
  for(const p of game.projectiles){
    if(p.delay && p.delay>0) continue;
    if(p.kind==='banana'){
      // golden trail
      ctx.strokeStyle=p.mini?'rgba(255,225,90,.25)':'rgba(255,220,60,.42)';
      ctx.lineWidth=(p.mini?2:3)*DPR;
      ctx.beginPath();
      ctx.moveTo(p.x,p.y+18*DPR);
      ctx.lineTo(p.x,p.y+48*DPR);
      ctx.stroke();
      drawBananaShape(p.x,p.y,p.mini?.7:1,-.55,p.mini);
      if(!p.mini && Math.random()<.12) drawSpark(p.x+(Math.random()-.5)*18*DPR,p.y+20*DPR,game.t*4,.6);
    } else {
      const rr=(p.r||11*DPR)*(p.mul||1);
      ctx.fillStyle='rgba(0,0,0,.22)';
      ctx.beginPath(); ctx.arc(p.x+2*DPR,p.y+2*DPR,rr,0,Math.PI*2); ctx.fill();
      const grad=ctx.createLinearGradient(p.x-rr,p.y-rr,p.x+rr,p.y+rr);
      grad.addColorStop(0,'#8b5527');
      grad.addColorStop(1,'#3a1c0c');
      ctx.fillStyle=grad;
      ctx.beginPath(); ctx.arc(p.x,p.y,rr,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(255,218,140,.45)';
      ctx.beginPath(); ctx.arc(p.x-rr*.25,p.y-rr*.25,rr*.25,0,Math.PI*2); ctx.fill();
    }
  }
}
function drawEnemies(){
  for(const e of game.enemies){
    if(e.dead) continue;
    const k=e.hp/e.maxHp;
    const wob=Math.sin(game.t*5 + e.x*.01)*2*DPR;
    ctx.save();
    ctx.translate(e.x,e.y+wob);

    // shadow
    ctx.fillStyle='rgba(0,0,0,.28)';
    ctx.beginPath(); ctx.ellipse(0,e.r*.62,e.r*.78,e.r*.25,0,0,Math.PI*2); ctx.fill();

    if(e.type==='mob'){
      lowPolyBlob(0,0,e.r*.82,8,'#5b9e38','#2d5e22',e.maxHp,.9);
      ctx.fillStyle='#2b541f';
      ctx.beginPath(); ctx.arc(-e.r*.25,-e.r*.1,e.r*.10,0,Math.PI*2); ctx.arc(e.r*.22,-e.r*.12,e.r*.10,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle='#29491f'; ctx.lineWidth=2*DPR;
      ctx.beginPath(); ctx.moveTo(-e.r*.25,e.r*.18); ctx.lineTo(e.r*.25,e.r*.18); ctx.stroke();
    } else if(e.type==='mini'){
      // 작은 오크/미니보스
      lowPolyBlob(0,0,e.r*.9,9,'#4a9639','#214b1c',e.maxHp,.95);
      ctx.fillStyle='#2f6d29'; ctx.fillRect(-e.r*.46,-e.r*.05,e.r*.92,e.r*.42);
      ctx.fillStyle='#f2e6c8';
      ctx.beginPath(); ctx.moveTo(-e.r*.40,-e.r*.28); ctx.lineTo(-e.r*.66,-e.r*.55); ctx.lineTo(-e.r*.25,-e.r*.38); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(e.r*.40,-e.r*.28); ctx.lineTo(e.r*.66,-e.r*.55); ctx.lineTo(e.r*.25,-e.r*.38); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#162810';
      ctx.beginPath(); ctx.arc(-e.r*.2,-e.r*.12,e.r*.08,0,Math.PI*2); ctx.arc(e.r*.2,-e.r*.12,e.r*.08,0,Math.PI*2); ctx.fill();
    } else {
      // boss/final
      lowPolyBlob(0,0,e.r*.92,10,e.type==='final'?'#375d32':'#3f8434','#142b13',e.maxHp,.92);
      ctx.fillStyle='rgba(0,0,0,.18)';
      ctx.fillRect(-e.r*.5,-e.r*.04,e.r,e.r*.52);
      ctx.fillStyle='#1a250f';
      ctx.beginPath(); ctx.arc(-e.r*.18,-e.r*.15,e.r*.07,0,Math.PI*2); ctx.arc(e.r*.18,-e.r*.15,e.r*.07,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle='#1e2b12'; ctx.lineWidth=3*DPR;
      ctx.beginPath(); ctx.moveTo(-e.r*.25,e.r*.12); ctx.lineTo(e.r*.25,e.r*.08); ctx.stroke();
    }

    ctx.restore();

    // hp panel like reference
    const panelW=Math.max(54*DPR,e.r*1.8);
    drawPixelPanel(e.x-panelW/2,e.y-e.r-58*DPR,panelW,43*DPR,e.type==='mob'?'몹':e.type==='mini'?'미니':'보스',Math.ceil(e.hp),e.type==='final'?'#ff746a':'#7cff8b');
    ctx.fillStyle='rgba(0,0,0,.45)';
    ctx.fillRect(e.x-panelW/2,e.y-e.r-11*DPR,panelW,5*DPR);
    ctx.fillStyle=e.type==='final'?'#ff5146':'#42e064';
    ctx.fillRect(e.x-panelW/2,e.y-e.r-11*DPR,panelW*Math.max(0,k),5*DPR);
  }
}
function drawGates(){
  for(const gate of game.gates){
    if(gate.picked) continue;
    const y=gate.y;
    drawGatePair(y, gate.opts[0], gate.opts[1], gate.section||0);
  }
}
function drawGatePair(y,leftOpt,rightOpt,sec=0){
  const boardW=W*.42, boardH=62*DPR;
  const leftX=W*.08, rightX=W*.50;
  const gapX=W*.50;

  // central divider
  ctx.fillStyle='#5a3516';
  ctx.fillRect(gapX-3*DPR,y-60*DPR,6*DPR,75*DPR);
  ctx.fillStyle='#e7b643';
  ctx.fillRect(gapX-1*DPR,y-58*DPR,2*DPR,71*DPR);

  const drawBoard=(x,opt,mainColor)=>{
    ctx.save();
    ctx.shadowColor='rgba(0,0,0,.35)';
    ctx.shadowOffsetY=5*DPR;
    roundedRect(x,y-boardH,boardW,boardH,5*DPR,'#21140b','#e2b13d',2*DPR);
    roundedRect(x+5*DPR,y-boardH+5*DPR,boardW-10*DPR,boardH-10*DPR,3*DPR,'#33200f','#5c3518',1*DPR);
    const [label,val]=fenceRewardDisplay(opt,sec);
    ctx.textAlign='center';
    ctx.font=`bold ${13*DPR}px system-ui`;
    ctx.fillStyle=mainColor;
    ctx.fillText(label,x+boardW/2,y-38*DPR);
    ctx.font=`bold ${21*DPR}px monospace`;
    ctx.fillStyle='#fff6a5';
    ctx.fillText(val,x+boardW/2,y-15*DPR);
    ctx.restore();
  };
  drawBoard(leftX,leftOpt,'#ff9d4d');
  drawBoard(rightX,rightOpt,'#77d6ff');
}
function drawChests(){
  for(const c of game.chests){
    if(c.dead) continue;
    const bob=Math.sin(game.t*5+c.x*.02)*2*DPR;
    const label=c.label || (c.reward?chestRewardText(c.reward,c.section||0):'보상');
    ctx.save(); ctx.translate(c.x,c.y+bob);

    // label board above chest, like reference
    const panelW=Math.max(88*DPR, Math.min(150*DPR, ctx.measureText(label).width + 24*DPR));
    const panelH=48*DPR;
    ctx.shadowColor='rgba(0,0,0,.35)';
    ctx.shadowOffsetY=4*DPR;
    roundedRect(-panelW/2,-82*DPR,panelW,panelH,5*DPR,'#ead7bd','#d4a944',2*DPR);
    roundedRect(-panelW/2+5*DPR,-77*DPR,panelW-10*DPR,panelH-10*DPR,2*DPR,'#d9c09a','#f1e5c8',1*DPR);

    ctx.textAlign='center';
    ctx.font=`bold ${13*DPR}px system-ui`;
    ctx.fillStyle='#18b43b';
    ctx.strokeStyle='rgba(0,0,0,.35)';
    ctx.lineWidth=3*DPR;
    const split=label.split(' ');
    const title=split.slice(0,-1).join(' ') || label;
    const val=split.length>1 ? split[split.length-1] : '';
    ctx.strokeText(title,0,-60*DPR); ctx.fillText(title,0,-60*DPR);
    ctx.font=`bold ${21*DPR}px monospace`;
    ctx.strokeText(val,0,-38*DPR); ctx.fillText(val,0,-38*DPR);

    // bigger shadow
    ctx.shadowColor='transparent';
    ctx.fillStyle='rgba(0,0,0,.30)';
    ctx.beginPath(); ctx.ellipse(0,28*DPR,38*DPR,12*DPR,0,0,Math.PI*2); ctx.fill();

    // bigger chest
    roundedRect(-36*DPR,-26*DPR,72*DPR,50*DPR,5*DPR,'#5b3517','#e2b13d',3*DPR);
    ctx.fillStyle='#8b5522'; ctx.fillRect(-31*DPR,-21*DPR,62*DPR,18*DPR);
    ctx.fillStyle='#4a2a11'; ctx.fillRect(-31*DPR,-1*DPR,62*DPR,21*DPR);
    ctx.fillStyle='#d9a539'; ctx.fillRect(-6*DPR,-26*DPR,12*DPR,50*DPR);
    ctx.fillStyle='#f6d05a'; ctx.fillRect(-12*DPR,-7*DPR,24*DPR,14*DPR);
    ctx.fillStyle='#3b2410'; ctx.fillRect(-3*DPR,-2*DPR,6*DPR,7*DPR);
    drawSpark(34*DPR,-28*DPR,game.t*3,.75);
    drawSpark(-32*DPR,-18*DPR,-game.t*2,.55);
    ctx.restore();
  }
}
function drawTexts(){
  for(const t of game.texts){
    ctx.globalAlpha=Math.max(0,Math.min(1,t.life/.8));
    ctx.fillStyle=t.color; ctx.font=`bold ${18*DPR}px sans-serif`; ctx.textAlign='center';
    ctx.strokeStyle='rgba(0,0,0,.8)'; ctx.lineWidth=4*DPR;
    ctx.strokeText(String(t.txt),t.x,t.y); ctx.fillText(String(t.txt),t.x,t.y);
    ctx.globalAlpha=1;
  }
}

// init
show('title');
// V27 expose main game functions for hard start patch
window.startGame = startGame;
window.showGameScreen = show;
window.loadGameProfile = load;
window.resizeGameCanvas = resize;

})();

// V22 start-button safety patch
(function(){
  function byId(id){ return document.getElementById(id); }
  function safeStart(){
    try {
      if (typeof startGame === 'function') startGame();
      else if (typeof newRun === 'function') newRun();
      else console.error('No start function found');
    } catch (e) {
      console.error('Start failed:', e);
      alert('게임 시작 중 오류: ' + (e && e.message ? e.message : e));
    }
  }
  function bindStartButtons(){
    const ids = ['playBtn','startBtn','gameStartBtn','btnStart','newGameBtn'];
    ids.forEach(id=>{
      const el = byId(id);
      if(el && !el.__v22Bound){
        el.__v22Bound = true;
        el.addEventListener('click', function(ev){
          ev.preventDefault();
          ev.stopPropagation();
          safeStart();
        });
        el.style.pointerEvents = 'auto';
      }
    });
    // Text fallback: buttons containing 게임하기/시작
    Array.from(document.querySelectorAll('button,.btn')).forEach(el=>{
      const txt=(el.textContent||'').trim();
      if((txt.includes('게임하기') || txt.includes('시작')) && !el.__v22Bound){
        el.__v22Bound = true;
        el.addEventListener('click', function(ev){
          ev.preventDefault();
          ev.stopPropagation();
          safeStart();
        });
        el.style.pointerEvents = 'auto';
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', bindStartButtons);
  else bindStartButtons();
  setTimeout(bindStartButtons, 300);
})();



// V23 hard start patch
window.forceStartGame = function(ev){
  resumeAudio();
  if(ev){ ev.preventDefault(); ev.stopPropagation(); }
  if(window.__forceStartLock) return false;
  window.__forceStartLock = true;
  setTimeout(()=>{ window.__forceStartLock=false; }, 300);
  try{
    // Ensure canvas metrics exist before startGame uses H/W.
    if (typeof window.resizeGameCanvas === 'function') window.resizeGameCanvas();

    // If profile is missing, make a default profile without relying on button/login flow.
    if (typeof profile === 'undefined' || !profile) {
      if (typeof window.loadGameProfile === 'function') window.loadGameProfile('tester','0000');
    }

    if (typeof window.showGameScreen === 'function') window.showGameScreen('game');
    if (typeof window.startGame === 'function') {
      window.startGame();
      return false;
    }
    throw new Error('startGame 함수가 없습니다');
  }catch(e){
    console.error('[V23] 게임 시작 실패:', e);
    var box = document.getElementById('startErrorBox');
    if(!box){
      box=document.createElement('pre');
      box.id='startErrorBox';
      box.style.cssText='position:fixed;left:10px;right:10px;bottom:10px;z-index:99999;max-height:40vh;overflow:auto;background:#200;color:#fff;border:2px solid #f66;padding:10px;font:12px monospace;white-space:pre-wrap;';
      document.body.appendChild(box);
    }
    box.textContent='게임 시작 오류\\n'+(e && e.stack ? e.stack : e);
    return false;
  }
};

(function(){
  function bind(){
    var b=document.getElementById('playBtn');
    if(b){
      b.onclick=window.forceStartGame;
      b.disabled=false;
      b.style.pointerEvents='auto';
      b.style.cursor='pointer';
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
  setTimeout(bind, 100);
  setTimeout(bind, 500);
})();



function debugViewportText(){
  if(!location.search.includes('debug=1')) return;
  let el=document.getElementById('vpDebug');
  if(!el){ el=document.createElement('div'); el.id='vpDebug'; document.body.appendChild(el); }
  el.style.cssText='position:fixed;left:4px;bottom:4px;z-index:99999;background:#000;color:#0f0;font:10px monospace;padding:3px;white-space:pre;';
  el.textContent=`vw:${innerWidth} vh:${innerHeight}\nclient:${document.documentElement.clientWidth}x${document.documentElement.clientHeight}\nvv:${visualViewport?.width}x${visualViewport?.height}\ngame:${getComputedStyle(document.documentElement).getPropertyValue('--game-w')}x${getComputedStyle(document.documentElement).getPropertyValue('--game-h')}`;
}
setInterval(debugViewportText,500);

addEventListener('pointerdown',resumeAudio,{once:false});
addEventListener('touchstart',resumeAudio,{once:false});
