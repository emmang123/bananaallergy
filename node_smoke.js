
global.window=global;
global.devicePixelRatio=1;
global.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};
global.performance={now:()=>0};
global.requestAnimationFrame=(fn)=>{console.log('raf called');};
global.cancelAnimationFrame=()=>{};
global.alert=(x)=>console.log('ALERT',x);
global.confirm=()=>true;
const elems={};
function ctx(){return {
scale:()=>{},clearRect:()=>{},fillRect:()=>{},beginPath:()=>{},arc:()=>{},fill:()=>{},stroke:()=>{},moveTo:()=>{},lineTo:()=>{},quadraticCurveTo:()=>{},fillText:()=>{},strokeText:()=>{},save:()=>{},restore:()=>{},translate:()=>{},rotate:()=>{},roundRect:()=>{},measureText:()=>({width:0}),createLinearGradient:()=>({addColorStop:()=>{}}),
set fillStyle(v){}, get fillStyle(){return ''}, set strokeStyle(v){}, set lineWidth(v){}, set font(v){}, set textAlign(v){}, set globalAlpha(v){}
}}
function elem(id){return elems[id]||(elems[id]={id,style:{},classList:{add:()=>{},remove:()=>{},toggle:()=>{}},addEventListener:function(ev,fn){this['on'+ev]=fn;},removeEventListener:()=>{},getContext:ctx,innerHTML:'',textContent:'',value:'',disabled:false,onclick:null,appendChild:()=>{}})}
global.document={getElementById:elem,querySelectorAll:()=>[],addEventListener:(ev,fn)=>{if(ev==='DOMContentLoaded')fn();},body:{appendChild:()=>{}},createElement:()=>elem('created')};
global.addEventListener=()=>{};
global.innerWidth=390; global.innerHeight=844;
require('/mnt/data/ammang_balance_2d_v27_start_exposed_fix/app.js');
console.log('loaded ok, force?', !!global.forceStartGame, 'start?', !!global.startGame);
global.forceStartGame();
console.log('after force');
