(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="161",xm=0,Qc=1,Em=2,rf=1,Mm=2,Jn=3,ii=0,rn=1,tn=2,yi=0,Rs=1,xi=2,eh=3,th=4,Sm=5,ki=100,bm=101,Tm=102,nh=103,ih=104,Am=200,wm=201,Rm=202,Cm=203,Ml=204,Sl=205,Pm=206,Lm=207,Im=208,Dm=209,Nm=210,Um=211,Fm=212,Om=213,Bm=214,km=0,Vm=1,zm=2,La=3,Hm=4,Gm=5,Wm=6,Xm=7,ac=0,$m=1,qm=2,Ei=0,jm=1,Km=2,Ym=3,af=4,Jm=5,Zm=6,sh="attached",Qm="detached",of=300,Is=301,Ds=302,bl=303,Tl=304,Ja=306,zn=1e3,gn=1001,Ia=1002,mt=1003,Ai=1004,Es=1005,Yt=1006,Ra=1007,Zn=1008,Mi=1009,eg=1010,tg=1011,oc=1012,lf=1013,_i=1014,Bn=1015,Tr=1016,cf=1017,hf=1018,zi=1020,ng=1021,_n=1023,ig=1024,sg=1025,Hi=1026,Ns=1027,rg=1028,uf=1029,ag=1030,df=1031,ff=1033,Eo=33776,Mo=33777,So=33778,bo=33779,rh=35840,ah=35841,oh=35842,lh=35843,pf=36196,ch=37492,hh=37496,uh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,yh=37816,xh=37817,Eh=37818,Mh=37819,Sh=37820,bh=37821,To=36492,Th=36494,Ah=36495,og=36283,wh=36284,Rh=36285,Ch=36286,Ar=2300,Us=2301,Ao=2302,Ph=2400,Lh=2401,Ih=2402,lg=2500,cg=0,mf=1,Al=2,gf=3e3,Gi=3001,hg=3200,ug=3201,lc=0,dg=1,vn="",je="srgb",kt="srgb-linear",cc="display-p3",Za="display-p3-linear",Da="linear",ut="srgb",Na="rec709",Ua="p3",Zi=7680,Dh=519,fg=512,pg=513,mg=514,_f=515,gg=516,_g=517,vg=518,yg=519,wl=35044,Nh="300 es",Rl=1035,Qn=2e3,Fa=2001;class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const mr=Math.PI/180,Fs=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function hc(s,e){return(s%e+e)%e}function xg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Eg(s,e,t){return s!==e?(t-s)/(e-s):0}function gr(s,e,t){return(1-t)*s+t*e}function Mg(s,e,t,n){return gr(s,e,1-Math.exp(-t*n))}function Sg(s,e=1){return e-Math.abs(hc(s,e*2)-e)}function bg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ag(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wg(s,e){return s+Math.random()*(e-s)}function Rg(s){return s*(.5-Math.random())}function Cg(s){s!==void 0&&(Uh=s);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pg(s){return s*mr}function Lg(s){return s*Fs}function Cl(s){return(s&s-1)===0&&s!==0}function Ig(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Oa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ng={DEG2RAD:mr,RAD2DEG:Fs,generateUUID:Cn,clamp:Ut,euclideanModulo:hc,mapLinear:xg,inverseLerp:Eg,lerp:gr,damp:Mg,pingpong:Sg,smoothstep:bg,smootherstep:Tg,randInt:Ag,randFloat:wg,randFloatSpread:Rg,seededRandom:Cg,degToRad:Pg,radToDeg:Lg,isPowerOfTwo:Cl,ceilPowerOfTwo:Ig,floorPowerOfTwo:Oa,setQuaternionFromProperEuler:Dg,normalize:Qe,denormalize:An};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],M=i[1],y=i[4],T=i[7],N=i[2],L=i[5],x=i[8];return r[0]=a*v+o*M+l*N,r[3]=a*m+o*y+l*L,r[6]=a*p+o*T+l*x,r[1]=c*v+h*M+u*N,r[4]=c*m+h*y+u*L,r[7]=c*p+h*T+u*x,r[2]=d*v+f*M+g*N,r[5]=d*m+f*y+g*L,r[8]=d*p+f*T+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new He;function vf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ug(){const s=wr("canvas");return s.style.display="block",s}const Fh={};function Wi(s){s in Fh||(Fh[s]=!0,console.warn(s))}const Oh=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bh=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[kt]:{transfer:Da,primaries:Na,toReference:s=>s,fromReference:s=>s},[je]:{transfer:ut,primaries:Na,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Za]:{transfer:Da,primaries:Ua,toReference:s=>s.applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(Oh)},[cc]:{transfer:ut,primaries:Ua,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Bh),fromReference:s=>s.applyMatrix3(Oh).convertLinearToSRGB()}},Fg=new Set([kt,Za]),Ye={enabled:!0,_workingColorSpace:kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Fg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=jr[e].toReference,i=jr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return jr[s].primaries},getTransfer:function(s){return s===vn?Da:jr[s].transfer}};function Cs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qi;class yf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=wr("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cs(t[n]/255)*255):t[n]=Cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Og=0;class xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Co(i[a].image)):r.push(Co(i[a]))}else r=Co(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bg=0;class Rt extends Gs{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=gn,i=gn,r=Yt,a=Zn,o=_n,l=Mi,c=Rt.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Cn(),this.name="",this.source=new xf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Gi?je:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?Gi:gf}set encoding(e){Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gi?je:vn}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=of;Rt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(f+1)/2,N=(p+1)/2,L=(h+d)/4,x=(u+v)/4,S=(g+m)/4;return y>T&&y>N?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=L/n,r=x/n):T>N?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=L/i,r=S/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=x/r,i=S/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kg extends Gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gi?je:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends kg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ef extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vg extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const N=Math.sqrt(y),L=Math.atan2(N,p*M);m=Math.sin(m*L)/N,o=Math.sin(o*L)/N}const T=o*M;if(l=l*m+d*T,c=c*m+f*T,h=h*m+g*T,u=u*m+v*T,m===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new I,kh=new Nt;class Bt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Yr.subVectors(this.max,er),es.subVectors(e.a,er),ts.subVectors(e.b,er),ns.subVectors(e.c,er),ci.subVectors(ts,es),hi.subVectors(ns,ts),Pi.subVectors(es,ns);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Pi.z,Pi.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Pi.z,0,-Pi.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Pi.y,Pi.x,0];return!Lo(t,es,ts,ns,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,es,ts,ns,Yr))?!1:(Jr.crossVectors(ci,hi),t=[Jr.x,Jr.y,Jr.z],Lo(t,es,ts,ns,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,Kr=new Bt,es=new I,ts=new I,ns=new I,ci=new I,hi=new I,Pi=new I,er=new I,Yr=new I,Jr=new I,Li=new I;function Lo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Li.fromArray(s,r);const o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zg=new Bt,tr=new I,Io=new I;class Hn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Io)),this.expandByPoint(tr.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new I,Do=new I,Zr=new I,ui=new I,No=new I,Qr=new I,Uo=new I;class Qa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Do.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Do);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=ui.dot(this.direction),l=-ui.dot(Zr),c=ui.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Do).addScaledVector(Zr,d),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){No.subVectors(t,e),Qr.subVectors(n,e),Uo.crossVectors(No,Qr);let a=this.direction.dot(Uo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(Qr.crossVectors(ui,Qr));if(l<0)return null;const c=o*this.direction.dot(No.cross(ui));if(c<0||l+c>a)return null;const h=-o*ui.dot(Uo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Gg)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),di.crossVectors(n,on),di.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),di.crossVectors(n,on)),di.normalize(),ea.crossVectors(on,di),i[0]=di.x,i[4]=ea.x,i[8]=on.x,i[1]=di.y,i[5]=ea.y,i[9]=on.y,i[2]=di.z,i[6]=ea.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],y=n[7],T=n[11],N=n[15],L=i[0],x=i[4],S=i[8],b=i[12],_=i[1],E=i[5],C=i[9],w=i[13],U=i[2],z=i[6],G=i[10],q=i[14],$=i[3],X=i[7],J=i[11],Z=i[15];return r[0]=a*L+o*_+l*U+c*$,r[4]=a*x+o*E+l*z+c*X,r[8]=a*S+o*C+l*G+c*J,r[12]=a*b+o*w+l*q+c*Z,r[1]=h*L+u*_+d*U+f*$,r[5]=h*x+u*E+d*z+f*X,r[9]=h*S+u*C+d*G+f*J,r[13]=h*b+u*w+d*q+f*Z,r[2]=g*L+v*_+m*U+p*$,r[6]=g*x+v*E+m*z+p*X,r[10]=g*S+v*C+m*G+p*J,r[14]=g*b+v*w+m*q+p*Z,r[3]=M*L+y*_+T*U+N*$,r[7]=M*x+y*E+T*z+N*X,r[11]=M*S+y*C+T*G+N*J,r[15]=M*b+y*w+T*q+N*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,T=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,N=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,L=t*M+n*y+i*T+r*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/L;return e[0]=M*x,e[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*x,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*x,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*x,e[4]=y*x,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*x,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*x,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*x,e[8]=T*x,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*x,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*x,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*x,e[12]=N*x,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*m+t*u*m)*x,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*x,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*x,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=l*c,y=l*h,T=l*u,N=n.x,L=n.y,x=n.z;return i[0]=(1-(v+p))*N,i[1]=(f+T)*N,i[2]=(g-y)*N,i[3]=0,i[4]=(f-T)*L,i[5]=(1-(d+p))*L,i[6]=(m+M)*L,i[7]=0,i[8]=(g+y)*x,i[9]=(m-M)*x,i[10]=(1-(d+v))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=is.set(i[0],i[1],i[2]).length();const a=is.set(i[4],i[5],i[6]).length(),o=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Qn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Qn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Qn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let g,v;if(o===Qn)g=(a+r)*u,v=-2*u;else if(o===Fa)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new I,Sn=new Be,Hg=new I(0,0,0),Gg=new I(1,1,1),di=new I,ea=new I,on=new I,Vh=new Be,zh=new Nt;class eo{constructor(e=0,t=0,n=0,i=eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zh.setFromEuler(this),this.setFromQuaternion(zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eo.DEFAULT_ORDER="XYZ";class Mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wg=0;const Hh=new I,ss=new Nt,qn=new Be,ta=new I,nr=new I,Xg=new I,$g=new Nt,Gh=new I(1,0,0),Wh=new I(0,1,0),Xh=new I(0,0,1),qg={type:"added"},jg={type:"removed"};class dt extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new I,t=new eo,n=new Nt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new He}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(nr,ta,this.up):qn.lookAt(ta,nr,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),ss.setFromRotationMatrix(qn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,$g,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new I,jn=new I,Fo=new I,Kn=new I,rs=new I,as=new I,$h=new I,Oo=new I,Bo=new I,ko=new I;class wn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),jn.subVectors(n,t),Fo.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(jn),l=bn.dot(Fo),c=jn.dot(jn),h=jn.dot(Fo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),jn.subVectors(e,t),bn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),bn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;rs.subVectors(i,n),as.subVectors(r,n),Oo.subVectors(e,n);const l=rs.dot(Oo),c=as.dot(Oo);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,i);const h=rs.dot(Bo),u=as.dot(Bo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(rs,a);ko.subVectors(e,r);const f=rs.dot(ko),g=as.dot(ko);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(as,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return $h.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector($h,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},na={h:0,s:0,l:0};function Vo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=hc(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vo(a,r,e+1/3),this.g=Vo(a,r,e),this.b=Vo(a,r,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){const n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Ye.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Ut(Kt.r*255,0,255))*65536+Math.round(Ut(Kt.g*255,0,255))*256+Math.round(Ut(Kt.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,r=Kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=je){Ye.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(na);const n=gr(fi.h,na.h,t),i=gr(fi.s,na.s,t),r=gr(fi.l,na.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new xe;xe.NAMES=Sf;let Kg=0;class xn extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Rs,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ft extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new I,ia=new ae;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class bf extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tf extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yg=0;const pn=new Be,zo=new dt,os=new I,ln=new Bt,ir=new Bt,Dt=new I;class Lt extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?Tf:bf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(ln.min,ir.min),ln.expandByPoint(Dt),Dt.addVectors(ln.max,ir.max),ln.expandByPoint(Dt)):(ln.expandByPoint(ir.min),ln.expandByPoint(ir.max))}ln.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Dt.add(os)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let _=0;_<o;_++)c[_]=new I,h[_]=new I;const u=new I,d=new I,f=new I,g=new ae,v=new ae,m=new ae,p=new I,M=new I;function y(_,E,C){u.fromArray(i,_*3),d.fromArray(i,E*3),f.fromArray(i,C*3),g.fromArray(a,_*2),v.fromArray(a,E*2),m.fromArray(a,C*2),d.sub(u),f.sub(u),v.sub(g),m.sub(g);const w=1/(v.x*m.y-m.x*v.y);isFinite(w)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(w),M.copy(f).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(w),c[_].add(p),c[E].add(p),c[C].add(p),h[_].add(M),h[E].add(M),h[C].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let _=0,E=T.length;_<E;++_){const C=T[_],w=C.start,U=C.count;for(let z=w,G=w+U;z<G;z+=3)y(n[z+0],n[z+1],n[z+2])}const N=new I,L=new I,x=new I,S=new I;function b(_){x.fromArray(r,_*3),S.copy(x);const E=c[_];N.copy(E),N.sub(x.multiplyScalar(x.dot(E))).normalize(),L.crossVectors(S,E);const w=L.dot(h[_])<0?-1:1;l[_*4]=N.x,l[_*4+1]=N.y,l[_*4+2]=N.z,l[_*4+3]=w}for(let _=0,E=T.length;_<E;++_){const C=T[_],w=C.start,U=C.count;for(let z=w,G=w+U;z<G;z+=3)b(n[z+0]),b(n[z+1]),b(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new $t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new Be,Ii=new Qa,sa=new Hn,jh=new I,ls=new I,cs=new I,hs=new I,Ho=new I,ra=new I,aa=new ae,oa=new ae,la=new ae,Kh=new I,Yh=new I,Jh=new I,ca=new I,ha=new I;class ye extends dt{constructor(e=new Lt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ho.fromBufferAttribute(u,e),a?ra.addScaledVector(Ho,h):ra.addScaledVector(Ho.sub(t),h))}t.add(ra)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(sa.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(sa,jh)===null||Ii.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(qh.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let T=M,N=y;T<N;T+=3){const L=o.getX(T),x=o.getX(T+1),S=o.getX(T+2);i=ua(this,p,e,n,c,h,u,L,x,S),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);i=ua(this,a,e,n,c,h,u,M,y,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=M,N=y;T<N;T+=3){const L=T,x=T+1,S=T+2;i=ua(this,p,e,n,c,h,u,L,x,S),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,y=m+1,T=m+2;i=ua(this,a,e,n,c,h,u,M,y,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jg(s,e,t,n,i,r,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ii,o),l===null)return null;ha.copy(o),ha.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:s}}function ua(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ls),s.getVertexPosition(l,cs),s.getVertexPosition(c,hs);const h=Jg(s,e,t,n,ls,cs,hs,ca);if(h){i&&(aa.fromBufferAttribute(i,o),oa.fromBufferAttribute(i,l),la.fromBufferAttribute(i,c),h.uv=wn.getInterpolation(ca,ls,cs,hs,aa,oa,la,new ae)),r&&(aa.fromBufferAttribute(r,o),oa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,c),h.uv1=wn.getInterpolation(ca,ls,cs,hs,aa,oa,la,new ae),h.uv2=h.uv1),a&&(Kh.fromBufferAttribute(a,o),Yh.fromBufferAttribute(a,l),Jh.fromBufferAttribute(a,c),h.normal=wn.getInterpolation(ca,ls,cs,hs,Kh,Yh,Jh,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};wn.getNormal(ls,cs,hs,u.normal),h.face=u}return h}class Xt extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(v,m,p,M,y,T,N,L,x,S,b){const _=T/x,E=N/S,C=T/2,w=N/2,U=L/2,z=x+1,G=S+1;let q=0,$=0;const X=new I;for(let J=0;J<G;J++){const Z=J*E-w;for(let ue=0;ue<z;ue++){const Ce=ue*_-C;X[v]=Ce*M,X[m]=Z*y,X[p]=U,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=L>0?1:-1,h.push(X.x,X.y,X.z),u.push(ue/x),u.push(1-J/S),q+=1}}for(let J=0;J<S;J++)for(let Z=0;Z<x;Z++){const ue=d+Z+z*J,Ce=d+Z+z*(J+1),W=d+(Z+1)+z*(J+1),Y=d+(Z+1)+z*J;l.push(ue,Ce,Y),l.push(Ce,W,Y),$+=6}o.addGroup(f,$,b),f+=$,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=Os(s[t]);for(const i in n)e[i]=n[i]}return e}function Zg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Af(s){return s.getRenderTarget()===null?s.outputColorSpace:Ye.workingColorSpace}const Qg={clone:Os,merge:Qt};var e_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e_,this.fragmentShader=t_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wf extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new I,Zh=new ae,Qh=new ae;class en extends wf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Zh,Qh),t.subVectors(Qh,Zh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class n_ extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(us,ds,e,t);i.layers=this.layers,this.add(i);const r=new en(us,ds,e,t);r.layers=this.layers,this.add(r);const a=new en(us,ds,e,t);a.layers=this.layers,this.add(a);const o=new en(us,ds,e,t);o.layers=this.layers,this.add(o);const l=new en(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new en(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rf extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i_ extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gi?je:vn),this.texture=new Rf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xt(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:yi});r.uniforms.tEquirect.value=t;const a=new ye(i,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Yt),new n_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Go=new I,s_=new I,r_=new He;class Fi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Go.subVectors(n,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||r_.getNormalMatrix(e),i=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Hn,da=new I;class uc{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],M=i[13],y=i[14],T=i[15];if(n[0].setComponents(l-r,d-c,m-f,T-p).normalize(),n[1].setComponents(l+r,d+c,m+f,T+p).normalize(),n[2].setComponents(l+a,d+h,m+g,T+M).normalize(),n[3].setComponents(l-a,d-h,m-g,T-M).normalize(),n[4].setComponents(l-o,d-u,m-v,T-y).normalize(),t===Qn)n[5].setComponents(l+o,d+u,m+v,T+y).normalize();else if(t===Fa)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(da.x=i.normal.x>0?e.max.x:e.min.x,da.y=i.normal.y>0?e.max.y:e.min.y,da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function a_(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class ni extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let y=0;y<c;y++){const T=y*u-r;g.push(T,-M,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,T=M+c*(p+1),N=M+1+c*(p+1),L=M+1+c*p;f.push(y,T,L),f.push(T,N,L)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,__=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,M0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:o_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:h_,alphatest_fragment:u_,alphatest_pars_fragment:d_,aomap_fragment:f_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:g_,begin_vertex:__,beginnormal_vertex:v_,bsdfs:y_,iridescence_fragment:x_,bumpmap_pars_fragment:E_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:S_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:T_,color_fragment:A_,color_pars_fragment:w_,color_pars_vertex:R_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:I_,displacementmap_pars_vertex:D_,displacementmap_vertex:N_,emissivemap_fragment:U_,emissivemap_pars_fragment:F_,colorspace_fragment:O_,colorspace_pars_fragment:B_,envmap_fragment:k_,envmap_common_pars_fragment:V_,envmap_pars_fragment:z_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:e0,envmap_vertex:G_,fog_vertex:W_,fog_pars_vertex:X_,fog_fragment:$_,fog_pars_fragment:q_,gradientmap_pars_fragment:j_,lightmap_fragment:K_,lightmap_pars_fragment:Y_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:Z_,lights_pars_begin:Q_,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:a0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:y0,morphcolor_vertex:x0,morphnormal_vertex:E0,morphtarget_pars_vertex:M0,morphtarget_vertex:S0,normal_fragment_begin:b0,normal_fragment_maps:T0,normal_pars_fragment:A0,normal_pars_vertex:w0,normal_vertex:R0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:D0,opaque_fragment:N0,packing:U0,premultiplied_alpha_fragment:F0,project_vertex:O0,dithering_fragment:B0,dithering_pars_fragment:k0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:G0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:$0,skinning_pars_vertex:q0,skinning_vertex:j0,skinnormal_vertex:K0,specularmap_fragment:Y0,specularmap_pars_fragment:J0,tonemapping_fragment:Z0,tonemapping_pars_fragment:Q0,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:av,background_frag:ov,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:yv,meshbasic_vert:xv,meshbasic_frag:Ev,meshlambert_vert:Mv,meshlambert_frag:Sv,meshmatcap_vert:bv,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:wv,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Lv,meshtoon_vert:Iv,meshtoon_frag:Dv,points_vert:Nv,points_frag:Uv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:kv},ie={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Un={basic:{uniforms:Qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Qt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Qt([ie.lights,ie.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Un.physical={uniforms:Qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const fa={r:0,b:0,g:0};function Vv(s,e,t,n,i,r,a){const o=new xe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let M=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ja)?(h===void 0&&(h=new ye(new Xt(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Os(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==ut,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ye(new ni(2,2),new wi({name:"BackgroundMaterial",uniforms:Os(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(fa,Af(s)),n.buffers.color.setClear(fa.r,fa.g,fa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function zv(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(U,z,G,q,$){let X=!1;if(a){const J=v(q,G,z);c!==J&&(c=J,f(c.object)),X=p(U,q,G,$),X&&M(U,q,G,$)}else{const J=z.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=G.id,c.wireframe=J,X=!0)}$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,S(U,z,G,q),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function v(U,z,G){const q=G.wireframe===!0;let $=o[U.id];$===void 0&&($={},o[U.id]=$);let X=$[z.id];X===void 0&&(X={},$[z.id]=X);let J=X[q];return J===void 0&&(J=m(d()),X[q]=J),J}function m(U){const z=[],G=[],q=[];for(let $=0;$<i;$++)z[$]=0,G[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:q,object:U,attributes:{},index:null}}function p(U,z,G,q){const $=c.attributes,X=z.attributes;let J=0;const Z=G.getAttributes();for(const ue in Z)if(Z[ue].location>=0){const W=$[ue];let Y=X[ue];if(Y===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),W===void 0||W.attribute!==Y||Y&&W.data!==Y.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function M(U,z,G,q){const $={},X=z.attributes;let J=0;const Z=G.getAttributes();for(const ue in Z)if(Z[ue].location>=0){let W=X[ue];W===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));const Y={};Y.attribute=W,W&&W.data&&(Y.data=W.data),$[ue]=Y,J++}c.attributes=$,c.attributesNum=J,c.index=q}function y(){const U=c.newAttributes;for(let z=0,G=U.length;z<G;z++)U[z]=0}function T(U){N(U,0)}function N(U,z){const G=c.newAttributes,q=c.enabledAttributes,$=c.attributeDivisors;G[U]=1,q[U]===0&&(s.enableVertexAttribArray(U),q[U]=1),$[U]!==z&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),$[U]=z)}function L(){const U=c.newAttributes,z=c.enabledAttributes;for(let G=0,q=z.length;G<q;G++)z[G]!==U[G]&&(s.disableVertexAttribArray(G),z[G]=0)}function x(U,z,G,q,$,X,J){J===!0?s.vertexAttribIPointer(U,z,G,$,X):s.vertexAttribPointer(U,z,G,q,$,X)}function S(U,z,G,q){if(n.isWebGL2===!1&&(U.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const $=q.attributes,X=G.getAttributes(),J=z.defaultAttributeValues;for(const Z in X){const ue=X[Z];if(ue.location>=0){let Ce=$[Z];if(Ce===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Ce=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Ce=U.instanceColor)),Ce!==void 0){const W=Ce.normalized,Y=Ce.itemSize,le=t.get(Ce);if(le===void 0)continue;const be=le.buffer,Te=le.type,fe=le.bytesPerElement,Ke=n.isWebGL2===!0&&(Te===s.INT||Te===s.UNSIGNED_INT||Ce.gpuType===lf);if(Ce.isInterleavedBufferAttribute){const De=Ce.data,O=De.stride,Vt=Ce.offset;if(De.isInstancedInterleavedBuffer){for(let Me=0;Me<ue.locationSize;Me++)N(ue.location+Me,De.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Me=0;Me<ue.locationSize;Me++)T(ue.location+Me);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Me=0;Me<ue.locationSize;Me++)x(ue.location+Me,Y/ue.locationSize,Te,W,O*fe,(Vt+Y/ue.locationSize*Me)*fe,Ke)}else{if(Ce.isInstancedBufferAttribute){for(let De=0;De<ue.locationSize;De++)N(ue.location+De,Ce.meshPerAttribute);U.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let De=0;De<ue.locationSize;De++)T(ue.location+De);s.bindBuffer(s.ARRAY_BUFFER,be);for(let De=0;De<ue.locationSize;De++)x(ue.location+De,Y/ue.locationSize,Te,W,Y*fe,Y/ue.locationSize*De*fe,Ke)}}else if(J!==void 0){const W=J[Z];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(ue.location,W);break;case 3:s.vertexAttrib3fv(ue.location,W);break;case 4:s.vertexAttrib4fv(ue.location,W);break;default:s.vertexAttrib1fv(ue.location,W)}}}}L()}function b(){C();for(const U in o){const z=o[U];for(const G in z){const q=z[G];for(const $ in q)g(q[$].object),delete q[$];delete z[G]}delete o[U]}}function _(U){if(o[U.id]===void 0)return;const z=o[U.id];for(const G in z){const q=z[G];for(const $ in q)g(q[$].object),delete q[$];delete z[G]}delete o[U.id]}function E(U){for(const z in o){const G=o[z];if(G[U.id]===void 0)continue;const q=G[U.id];for(const $ in q)g(q[$].object),delete q[$];delete G[U.id]}}function C(){w(),h=!0,c!==l&&(c=l,f(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:_,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:T,disableUnusedAttributes:L}}function Hv(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Gv(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=a||e.has("OES_texture_float"),N=y&&T,L=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:N,maxSamples:L}}function Wv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Fi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,y=M*4;let T=p.clippingState||null;l.value=T,T=h(g,d,y,f);for(let N=0;N!==y;++N)T[N]=t[N];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=f;y!==v;++y,T+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Xv(s){let e=new WeakMap;function t(a,o){return o===bl?a.mapping=Is:o===Tl&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bl||o===Tl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new i_(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class dc extends wf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,eu=[.125,.215,.35,.446,.526,.582],Vi=20,Wo=new dc,tu=new xe;let Xo=null,$o=0,qo=0;const Oi=(1+Math.sqrt(5))/2,fs=1/Oi,nu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Oi,fs),new I(0,Oi,-fs),new I(fs,0,Oi),new I(-fs,0,Oi),new I(Oi,fs,0),new I(-Oi,fs,0)];class iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,$o,qo),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Tr,format:_n,colorSpace:kt,depthBuffer:!1},i=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$v(r)),this._blurMaterial=qv(r,e,t)}return i}_compileMaterial(e){const t=new ye(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,n,i){const o=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tu),h.toneMapping=Ei,h.autoClear=!1;const f=new Ft({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new ye(new Xt,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(tu),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;pa(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Is||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nu[(i-1)%nu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ye(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let M=0;for(let x=0;x<Vi;++x){const S=x/v,b=Math.exp(-S*S/2);p.push(b),x===0?M+=b:x<m&&(M+=2*b)}for(let x=0;x<p.length;x++)p[x]=p[x]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const T=this._sizeLods[i],N=3*T*(i>y-bs?i-y+bs:0),L=4*(this._cubeSize-T);pa(t,N,L,3*T,2*T),l.setRenderTarget(t),l.render(u,Wo)}}function $v(s){const e=[],t=[],n=[];let i=s;const r=s-bs+1+eu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-bs?l=eu[a-s+bs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),y=new Float32Array(m*g*f),T=new Float32Array(p*g*f);for(let L=0;L<f;L++){const x=L%3*2/3-1,S=L>2?0:-1,b=[x,S,0,x+2/3,S,0,x+2/3,S+1,0,x,S,0,x+2/3,S+1,0,x,S+1,0];M.set(b,v*g*L),y.set(d,m*g*L);const _=[L,L,L,L,L,L];T.set(_,p*g*L)}const N=new Lt;N.setAttribute("position",new $t(M,v)),N.setAttribute("uv",new $t(y,m)),N.setAttribute("faceIndex",new $t(T,p)),e.push(N),i>bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function su(s,e,t){const n=new qi(s,e,t);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qv(s,e,t){const n=new Float32Array(Vi),i=new I(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ru(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function au(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jv(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bl||l===Tl,h=l===Is||l===Ds;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new iu(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new iu(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Kv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yv(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let y=0,T=M.length;y<T;y+=3){const N=M[y+0],L=M[y+1],x=M[y+2];d.push(N,L,L,x,x,N)}}else if(g!==void 0){const M=g.array;v=g.version;for(let y=0,T=M.length/3-1;y<T;y+=3){const N=y+0,L=y+1,x=y+2;d.push(N,L,L,x,x,N)}}else return;const m=new(vf(d)?Tf:bf)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Jv(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),t.update(g,r,1)}function u(f,g,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,v),t.update(g,r,v)}function d(f,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,v);let p=0;for(let M=0;M<v;M++)p+=g[M];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Zv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qv(s,e){return s[0]-e[0]}function ey(s,e){return Math.abs(e[1])-Math.abs(s[1])}function ty(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new st,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let U=function(){C.dispose(),r.delete(h),h.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let S=0;M===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let b=h.attributes.position.count*S,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*_*4*g),C=new Ef(E,b,_,g);C.type=Bn,C.needsUpdate=!0;const w=S*4;for(let z=0;z<g;z++){const G=N[z],q=L[z],$=x[z],X=b*_*4*z;for(let J=0;J<G.count;J++){const Z=J*w;M===!0&&(a.fromBufferAttribute(G,J),E[X+Z+0]=a.x,E[X+Z+1]=a.y,E[X+Z+2]=a.z,E[X+Z+3]=0),y===!0&&(a.fromBufferAttribute(q,J),E[X+Z+4]=a.x,E[X+Z+5]=a.y,E[X+Z+6]=a.z,E[X+Z+7]=0),T===!0&&(a.fromBufferAttribute($,J),E[X+Z+8]=a.x,E[X+Z+9]=a.y,E[X+Z+10]=a.z,E[X+Z+11]=$.itemSize===4?a.w:1)}}v={count:g,texture:C,size:new ae(b,_)},r.set(h,v),h.addEventListener("dispose",U)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];const p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const f=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<f;y++){const T=g[y];T[0]=y,T[1]=d[y]}g.sort(ey);for(let y=0;y<8;y++)y<f&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Qv);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const T=o[y],N=T[0],L=T[1];N!==Number.MAX_SAFE_INTEGER&&L?(v&&h.getAttribute("morphTarget"+y)!==v[N]&&h.setAttribute("morphTarget"+y,v[N]),m&&h.getAttribute("morphNormal"+y)!==m[N]&&h.setAttribute("morphNormal"+y,m[N]),i[y]=L,p+=L):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const M=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ny(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Pf extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Hi,h!==Hi&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=_i),n===void 0&&h===Ns&&(n=zi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lf=new Rt,If=new Pf(1,1);If.compareFunction=_f;const Df=new Ef,Nf=new Vg,Uf=new Rf,ou=[],lu=[],cu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function Ws(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ou[i];if(r===void 0&&(r=new Float32Array(i),ou[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function to(s,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function iy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function oy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;uu.set(n),s.uniformMatrix2fv(this.addr,!1,uu),Pt(t,n)}}function ly(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;hu.set(n),s.uniformMatrix3fv(this.addr,!1,hu),Pt(t,n)}}function cy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;cu.set(n),s.uniformMatrix4fv(this.addr,!1,cu),Pt(t,n)}}function hy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function dy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function py(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function my(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function gy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function _y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function vy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?If:Lf;t.setTexture2D(e||r,i)}function yy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nf,i)}function xy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uf,i)}function Ey(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Df,i)}function My(s){switch(s){case 5126:return iy;case 35664:return sy;case 35665:return ry;case 35666:return ay;case 35674:return oy;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return hy;case 35667:case 35671:return uy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return Ey}}function Sy(s,e){s.uniform1fv(this.addr,e)}function by(s,e){const t=Ws(e,this.size,2);s.uniform2fv(this.addr,t)}function Ty(s,e){const t=Ws(e,this.size,3);s.uniform3fv(this.addr,t)}function Ay(s,e){const t=Ws(e,this.size,4);s.uniform4fv(this.addr,t)}function wy(s,e){const t=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ry(s,e){const t=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cy(s,e){const t=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Py(s,e){s.uniform1iv(this.addr,e)}function Ly(s,e){s.uniform2iv(this.addr,e)}function Iy(s,e){s.uniform3iv(this.addr,e)}function Dy(s,e){s.uniform4iv(this.addr,e)}function Ny(s,e){s.uniform1uiv(this.addr,e)}function Uy(s,e){s.uniform2uiv(this.addr,e)}function Fy(s,e){s.uniform3uiv(this.addr,e)}function Oy(s,e){s.uniform4uiv(this.addr,e)}function By(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Lf,r[a])}function ky(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Nf,r[a])}function Vy(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Uf,r[a])}function zy(s,e,t){const n=this.cache,i=e.length,r=to(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Df,r[a])}function Hy(s){switch(s){case 5126:return Sy;case 35664:return by;case 35665:return Ty;case 35666:return Ay;case 35674:return wy;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Py;case 35667:case 35671:return Ly;case 35668:case 35672:return Iy;case 35669:case 35673:return Dy;case 5125:return Ny;case 36294:return Uy;case 36295:return Fy;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return zy}}class Gy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=My(t.type)}}class Wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hy(t.type)}}class Xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function du(s,e){s.seq.push(e),s.map[e.id]=e}function $y(s,e,t){const n=s.name,i=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),a=jo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){du(t,c===void 0?new Gy(o,s,e):new Wy(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Xy(o),du(t,u)),t=u}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);$y(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const qy=37297;let jy=0;function Ky(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Yy(s){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(s);let n;switch(e===t?n="":e===Ua&&t===Na?n="LinearDisplayP3ToLinearSRGB":e===Na&&t===Ua&&(n="LinearSRGBToLinearDisplayP3"),s){case kt:case Za:return[n,"LinearTransferOETF"];case je:case cc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function pu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ky(s.getShaderSource(e),a)}else return i}function Jy(s,e){const t=Yy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zy(s,e){let t;switch(e){case jm:t="Linear";break;case Km:t="Reinhard";break;case Ym:t="OptimizedCineon";break;case af:t="ACESFilmic";break;case Zm:t="AgX";break;case Jm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qy(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function ex(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function tx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ts(s){return s!==""}function mu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(s){return s.replace(ix,rx)}const sx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rx(s,e){let t=Oe[e];if(t===void 0){const n=sx.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(s){return s.replace(ax,ox)}function ox(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ds:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function ux(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case qm:e="ENVMAP_BLENDING_ADD";break}return e}function dx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lx(t),c=cx(t),h=hx(t),u=ux(t),d=dx(t),f=t.isWebGL2?"":Qy(t),g=ex(t),v=tx(r),m=i.createProgram();let p,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ts).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ts).join(`
`),M.length>0&&(M+=`
`)):(p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),M=[f,vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Jy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Pl(a),a=mu(a,t),a=gu(a,t),o=Pl(o),o=mu(o,t),o=gu(o,t),a=_u(a),o=_u(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const T=y+p+a,N=y+M+o,L=fu(i,i.VERTEX_SHADER,T),x=fu(i,i.FRAGMENT_SHADER,N);i.attachShader(m,L),i.attachShader(m,x),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function S(C){if(s.debug.checkShaderErrors){const w=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(L).trim(),z=i.getShaderInfoLog(x).trim();let G=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,L,x);else{const $=pu(i,L,"vertex"),X=pu(i,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+w+`
`+$+`
`+X)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(U===""||z==="")&&(q=!1);q&&(C.diagnostics={runnable:G,programLog:w,vertexShader:{log:U,prefix:p},fragmentShader:{log:z,prefix:M}})}i.deleteShader(L),i.deleteShader(x),b=new Ca(i,m),_=nx(i,m)}let b;this.getUniforms=function(){return b===void 0&&S(this),b};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(m,qy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=x,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gx(e),t.set(e,n)),n}}class gx{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function _x(s,e,t,n,i,r,a){const o=new Mf,l=new mx,c=new Set,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,E,C,w,U){const z=w.fog,G=U.geometry,q=_.isMeshStandardMaterial?w.environment:null,$=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),X=$&&$.mapping===Ja?$.image.height:null,J=v[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=Z!==void 0?Z.length:0;let Ce=0;G.morphAttributes.position!==void 0&&(Ce=1),G.morphAttributes.normal!==void 0&&(Ce=2),G.morphAttributes.color!==void 0&&(Ce=3);let W,Y,le,be;if(J){const at=Un[J];W=at.vertexShader,Y=at.fragmentShader}else W=_.vertexShader,Y=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),be=l.getFragmentShaderID(_);const Te=s.getRenderTarget(),fe=U.isInstancedMesh===!0,Ke=U.isBatchedMesh===!0,De=!!_.map,O=!!_.matcap,Vt=!!$,Me=!!_.aoMap,Pe=!!_.lightMap,_e=!!_.bumpMap,ft=!!_.normalMap,Ue=!!_.displacementMap,P=!!_.emissiveMap,A=!!_.metalnessMap,B=!!_.roughnessMap,ee=_.anisotropy>0,j=_.clearcoat>0,Q=_.iridescence>0,pe=_.sheen>0,se=_.transmission>0,ce=ee&&!!_.anisotropyMap,we=j&&!!_.clearcoatMap,ke=j&&!!_.clearcoatNormalMap,K=j&&!!_.clearcoatRoughnessMap,tt=Q&&!!_.iridescenceMap,We=Q&&!!_.iridescenceThicknessMap,Le=pe&&!!_.sheenColorMap,Ee=pe&&!!_.sheenRoughnessMap,he=!!_.specularMap,Fe=!!_.specularColorMap,Je=!!_.specularIntensityMap,ht=se&&!!_.transmissionMap,Xe=se&&!!_.thicknessMap,it=!!_.gradientMap,D=!!_.alphaMap,te=_.alphaTest>0,ne=!!_.alphaHash,de=!!_.extensions;let Se=Ei;_.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Ze={isWebGL2:u,shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:Y,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ke,instancing:fe,instancingColor:fe&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:kt,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:O,envMap:Vt,envMapMode:Vt&&$.mapping,envMapCubeUVHeight:X,aoMap:Me,lightMap:Pe,bumpMap:_e,normalMap:ft,displacementMap:f&&Ue,emissiveMap:P,normalMapObjectSpace:ft&&_.normalMapType===dg,normalMapTangentSpace:ft&&_.normalMapType===lc,metalnessMap:A,roughnessMap:B,anisotropy:ee,anisotropyMap:ce,clearcoat:j,clearcoatMap:we,clearcoatNormalMap:ke,clearcoatRoughnessMap:K,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:We,sheen:pe,sheenColorMap:Le,sheenRoughnessMap:Ee,specularMap:he,specularColorMap:Fe,specularIntensityMap:Je,transmission:se,transmissionMap:ht,thicknessMap:Xe,gradientMap:it,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:D,alphaTest:te,alphaHash:ne,combine:_.combine,mapUv:De&&m(_.map.channel),aoMapUv:Me&&m(_.aoMap.channel),lightMapUv:Pe&&m(_.lightMap.channel),bumpMapUv:_e&&m(_.bumpMap.channel),normalMapUv:ft&&m(_.normalMap.channel),displacementMapUv:Ue&&m(_.displacementMap.channel),emissiveMapUv:P&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:B&&m(_.roughnessMap.channel),anisotropyMapUv:ce&&m(_.anisotropyMap.channel),clearcoatMapUv:we&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ke&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:We&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(_.sheenRoughnessMap.channel),specularMapUv:he&&m(_.specularMap.channel),specularColorMapUv:Fe&&m(_.specularColorMap.channel),specularIntensityMapUv:Je&&m(_.specularIntensityMap.channel),transmissionMapUv:ht&&m(_.transmissionMap.channel),thicknessMapUv:Xe&&m(_.thicknessMap.channel),alphaMapUv:D&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ft||ee),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(De||D),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,useLegacyLights:s._useLegacyLights,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:de&&_.extensions.derivatives===!0,extensionFragDepth:de&&_.extensions.fragDepth===!0,extensionDrawBuffers:de&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function M(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(y(E,_),T(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function y(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function T(_,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),_.push(o.mask)}function N(_){const E=v[_.type];let C;if(E){const w=Un[E];C=Qg.clone(w.uniforms)}else C=_.uniforms;return C}function L(_,E){let C;for(let w=0,U=h.length;w<U;w++){const z=h[w];if(z.cacheKey===E){C=z,++C.usedTimes;break}}return C===void 0&&(C=new fx(s,E,_,r),h.push(C)),C}function x(_){if(--_.usedTimes===0){const E=h.indexOf(_);h[E]=h[h.length-1],h.pop(),_.destroy()}}function S(_){l.remove(_)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:N,acquireProgram:L,releaseProgram:x,releaseShaderCache:S,programs:h,dispose:b}}function vx(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function yx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||yx),n.length>1&&n.sort(d||yu),i.length>1&&i.sort(d||yu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function xx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new xu,s.set(n,[a])):i>=r.length?(a=new xu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ex(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new xe};break;case"SpotLight":t={position:new I,direction:new I,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Mx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Sx=0;function bx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Tx(s,e){const t=new Ex,n=Mx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const r=new I,a=new Be,o=new Be;function l(h,u){let d=0,f=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let v=0,m=0,p=0,M=0,y=0,T=0,N=0,L=0,x=0,S=0,b=0;h.sort(bx);const _=u===!0?Math.PI:1;for(let C=0,w=h.length;C<w;C++){const U=h[C],z=U.color,G=U.intensity,q=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=z.r*G*_,f+=z.g*G*_,g+=z.b*G*_;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],G);b++}else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*_),U.castShadow){const J=U.shadow,Z=n.get(U);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[v]=Z,i.directionalShadowMap[v]=$,i.directionalShadowMatrix[v]=U.shadow.matrix,T++}i.directional[v]=X,v++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(z).multiplyScalar(G*_),X.distance=q,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[p]=X;const J=U.shadow;if(U.map&&(i.spotLightMap[x]=U.map,x++,J.updateMatrices(U),U.castShadow&&S++),i.spotLightMatrix[p]=J.matrix,U.castShadow){const Z=n.get(U);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=$,L++}p++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[M]=X,M++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*_),X.distance=U.distance,X.decay=U.decay,U.castShadow){const J=U.shadow,Z=n.get(U);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=U.shadow.matrix,N++}i.point[m]=X,m++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(G*_),X.groundColor.copy(U.groundColor).multiplyScalar(G*_),i.hemi[y]=X,y++}}M>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==v||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==M||E.hemiLength!==y||E.numDirectionalShadows!==T||E.numPointShadows!==N||E.numSpotShadows!==L||E.numSpotMaps!==x||E.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=L+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=b,E.directionalLength=v,E.pointLength=m,E.spotLength=p,E.rectAreaLength=M,E.hemiLength=y,E.numDirectionalShadows=T,E.numPointShadows=N,E.numSpotShadows=L,E.numSpotMaps=x,E.numLightProbes=b,i.version=Sx++)}function c(h,u){let d=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let M=0,y=h.length;M<y;M++){const T=h[M];if(T.isDirectionalLight){const N=i.directional[d];N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),d++}else if(T.isSpotLight){const N=i.spot[g];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),N.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const N=i.rectArea[v];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const N=i.point[f];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const N=i.hemi[m];N.direction.setFromMatrixPosition(T.matrixWorld),N.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Eu(s,e){const t=new Tx(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ax(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Eu(s,e),t.set(r,[l])):a>=o.length?(l=new Eu(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class wx extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rx extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lx(s,e,t){let n=new uc;const i=new ae,r=new ae,a=new st,o=new wx({depthPacking:ug}),l=new Rx,c={},h=t.maxTextureSize,u={[ii]:rn,[rn]:ii,[tn]:tn},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let p=this.type;this.render=function(L,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const b=s.getRenderTarget(),_=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),C=s.state;C.setBlending(yi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const w=p!==Jn&&this.type===Jn,U=p===Jn&&this.type!==Jn;for(let z=0,G=L.length;z<G;z++){const q=L[z],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const X=$.getFrameExtents();if(i.multiply(X),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,$.mapSize.y=r.y)),$.map===null||w===!0||U===!0){const Z=this.type!==Jn?{minFilter:mt,magFilter:mt}:{};$.map!==null&&$.map.dispose(),$.map=new qi(i.x,i.y,Z),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const J=$.getViewportCount();for(let Z=0;Z<J;Z++){const ue=$.getViewport(Z);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),C.viewport(a),$.updateMatrices(q,Z),n=$.getFrustum(),T(x,S,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===Jn&&M($,S),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,_,E)};function M(L,x){const S=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(x,null,S,d,v,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(x,null,S,f,v,null)}function y(L,x,S,b){let _=null;const E=S.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(E!==void 0)_=E;else if(_=S.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const C=_.uuid,w=x.uuid;let U=c[C];U===void 0&&(U={},c[C]=U);let z=U[w];z===void 0&&(z=_.clone(),U[w]=z,x.addEventListener("dispose",N)),_=z}if(_.visible=x.visible,_.wireframe=x.wireframe,b===Jn?_.side=x.shadowSide!==null?x.shadowSide:x.side:_.side=x.shadowSide!==null?x.shadowSide:u[x.side],_.alphaMap=x.alphaMap,_.alphaTest=x.alphaTest,_.map=x.map,_.clipShadows=x.clipShadows,_.clippingPlanes=x.clippingPlanes,_.clipIntersection=x.clipIntersection,_.displacementMap=x.displacementMap,_.displacementScale=x.displacementScale,_.displacementBias=x.displacementBias,_.wireframeLinewidth=x.wireframeLinewidth,_.linewidth=x.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const C=s.properties.get(_);C.light=S}return _}function T(L,x,S,b,_){if(L.visible===!1)return;if(L.layers.test(x.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===Jn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,L.matrixWorld);const w=e.update(L),U=L.material;if(Array.isArray(U)){const z=w.groups;for(let G=0,q=z.length;G<q;G++){const $=z[G],X=U[$.materialIndex];if(X&&X.visible){const J=y(L,X,b,_);L.onBeforeShadow(s,L,x,S,w,J,$),s.renderBufferDirect(S,null,w,J,L,$),L.onAfterShadow(s,L,x,S,w,J,$)}}}else if(U.visible){const z=y(L,U,b,_);L.onBeforeShadow(s,L,x,S,w,z,null),s.renderBufferDirect(S,null,w,z,L,null),L.onAfterShadow(s,L,x,S,w,z,null)}}const C=L.children;for(let w=0,U=C.length;w<U;w++)T(C[w],x,S,b,_)}function N(L){L.target.removeEventListener("dispose",N);for(const S in c){const b=c[S],_=L.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}function Ix(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const te=new st;let ne=null;const de=new st(0,0,0,0);return{setMask:function(Se){ne!==Se&&!D&&(s.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){D=Se},setClear:function(Se,Ze,at,zt,dn){dn===!0&&(Se*=zt,Ze*=zt,at*=zt),te.set(Se,Ze,at,zt),de.equals(te)===!1&&(s.clearColor(Se,Ze,at,zt),de.copy(te))},reset:function(){D=!1,ne=null,de.set(-1,0,0,0)}}}function r(){let D=!1,te=null,ne=null,de=null;return{setTest:function(Se){Se?fe(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(Se){te!==Se&&!D&&(s.depthMask(Se),te=Se)},setFunc:function(Se){if(ne!==Se){switch(Se){case km:s.depthFunc(s.NEVER);break;case Vm:s.depthFunc(s.ALWAYS);break;case zm:s.depthFunc(s.LESS);break;case La:s.depthFunc(s.LEQUAL);break;case Hm:s.depthFunc(s.EQUAL);break;case Gm:s.depthFunc(s.GEQUAL);break;case Wm:s.depthFunc(s.GREATER);break;case Xm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=Se}},setLocked:function(Se){D=Se},setClear:function(Se){de!==Se&&(s.clearDepth(Se),de=Se)},reset:function(){D=!1,te=null,ne=null,de=null}}}function a(){let D=!1,te=null,ne=null,de=null,Se=null,Ze=null,at=null,zt=null,dn=null;return{setTest:function(ot){D||(ot?fe(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(ot){te!==ot&&!D&&(s.stencilMask(ot),te=ot)},setFunc:function(ot,Jt,In){(ne!==ot||de!==Jt||Se!==In)&&(s.stencilFunc(ot,Jt,In),ne=ot,de=Jt,Se=In)},setOp:function(ot,Jt,In){(Ze!==ot||at!==Jt||zt!==In)&&(s.stencilOp(ot,Jt,In),Ze=ot,at=Jt,zt=In)},setLocked:function(ot){D=ot},setClear:function(ot){dn!==ot&&(s.clearStencil(ot),dn=ot)},reset:function(){D=!1,te=null,ne=null,de=null,Se=null,Ze=null,at=null,zt=null,dn=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,N=null,L=null,x=null,S=null,b=new xe(0,0,0),_=0,E=!1,C=null,w=null,U=null,z=null,G=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=X>=2);let Z=null,ue={};const Ce=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),Y=new st().fromArray(Ce),le=new st().fromArray(W);function be(D,te,ne,de){const Se=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(D,Ze),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<ne;at++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(te,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(te+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return Ze}const Te={};Te[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(s.DEPTH_TEST),l.setFunc(La),Ue(!1),P(Qc),fe(s.CULL_FACE),_e(yi);function fe(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function Ke(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function De(D,te){return f[D]!==te?(s.bindFramebuffer(D,te),f[D]=te,n&&(D===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=te),D===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=te)),!0):!1}function O(D,te){let ne=v,de=!1;if(D)if(ne=g.get(te),ne===void 0&&(ne=[],g.set(te,ne)),D.isWebGLMultipleRenderTargets){const Se=D.texture;if(ne.length!==Se.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,at=Se.length;Ze<at;Ze++)ne[Ze]=s.COLOR_ATTACHMENT0+Ze;ne.length=Se.length,de=!0}}else ne[0]!==s.COLOR_ATTACHMENT0&&(ne[0]=s.COLOR_ATTACHMENT0,de=!0);else ne[0]!==s.BACK&&(ne[0]=s.BACK,de=!0);de&&(t.isWebGL2?s.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Vt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const Me={[ki]:s.FUNC_ADD,[bm]:s.FUNC_SUBTRACT,[Tm]:s.FUNC_REVERSE_SUBTRACT};if(n)Me[nh]=s.MIN,Me[ih]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[nh]=D.MIN_EXT,Me[ih]=D.MAX_EXT)}const Pe={[Am]:s.ZERO,[wm]:s.ONE,[Rm]:s.SRC_COLOR,[Ml]:s.SRC_ALPHA,[Nm]:s.SRC_ALPHA_SATURATE,[Im]:s.DST_COLOR,[Pm]:s.DST_ALPHA,[Cm]:s.ONE_MINUS_SRC_COLOR,[Sl]:s.ONE_MINUS_SRC_ALPHA,[Dm]:s.ONE_MINUS_DST_COLOR,[Lm]:s.ONE_MINUS_DST_ALPHA,[Um]:s.CONSTANT_COLOR,[Fm]:s.ONE_MINUS_CONSTANT_COLOR,[Om]:s.CONSTANT_ALPHA,[Bm]:s.ONE_MINUS_CONSTANT_ALPHA};function _e(D,te,ne,de,Se,Ze,at,zt,dn,ot){if(D===yi){p===!0&&(Ke(s.BLEND),p=!1);return}if(p===!1&&(fe(s.BLEND),p=!0),D!==Sm){if(D!==M||ot!==E){if((y!==ki||L!==ki)&&(s.blendEquation(s.FUNC_ADD),y=ki,L=ki),ot)switch(D){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFunc(s.ONE,s.ONE);break;case eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case th:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,N=null,x=null,S=null,b.set(0,0,0),_=0,M=D,E=ot}return}Se=Se||te,Ze=Ze||ne,at=at||de,(te!==y||Se!==L)&&(s.blendEquationSeparate(Me[te],Me[Se]),y=te,L=Se),(ne!==T||de!==N||Ze!==x||at!==S)&&(s.blendFuncSeparate(Pe[ne],Pe[de],Pe[Ze],Pe[at]),T=ne,N=de,x=Ze,S=at),(zt.equals(b)===!1||dn!==_)&&(s.blendColor(zt.r,zt.g,zt.b,dn),b.copy(zt),_=dn),M=D,E=!1}function ft(D,te){D.side===tn?Ke(s.CULL_FACE):fe(s.CULL_FACE);let ne=D.side===rn;te&&(ne=!ne),Ue(ne),D.blending===Rs&&D.transparent===!1?_e(yi):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const de=D.stencilWrite;c.setTest(de),de&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){C!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),C=D)}function P(D){D!==xm?(fe(s.CULL_FACE),D!==w&&(D===Qc?s.cullFace(s.BACK):D===Em?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),w=D}function A(D){D!==U&&($&&s.lineWidth(D),U=D)}function B(D,te,ne){D?(fe(s.POLYGON_OFFSET_FILL),(z!==te||G!==ne)&&(s.polygonOffset(te,ne),z=te,G=ne)):Ke(s.POLYGON_OFFSET_FILL)}function ee(D){D?fe(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function j(D){D===void 0&&(D=s.TEXTURE0+q-1),Z!==D&&(s.activeTexture(D),Z=D)}function Q(D,te,ne){ne===void 0&&(Z===null?ne=s.TEXTURE0+q-1:ne=Z);let de=ue[ne];de===void 0&&(de={type:void 0,texture:void 0},ue[ne]=de),(de.type!==D||de.texture!==te)&&(Z!==ne&&(s.activeTexture(ne),Z=ne),s.bindTexture(D,te||Te[D]),de.type=D,de.texture=te)}function pe(){const D=ue[Z];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){Y.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function Je(D){le.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function ht(D,te){let ne=u.get(te);ne===void 0&&(ne=new WeakMap,u.set(te,ne));let de=ne.get(D);de===void 0&&(de=s.getUniformBlockIndex(te,D.name),ne.set(D,de))}function Xe(D,te){const de=u.get(te).get(D);h.get(te)!==de&&(s.uniformBlockBinding(te,de,D.__bindingPointIndex),h.set(te,de))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Z=null,ue={},f={},g=new WeakMap,v=[],m=null,p=!1,M=null,y=null,T=null,N=null,L=null,x=null,S=null,b=new xe(0,0,0),_=0,E=!1,C=null,w=null,U=null,z=null,G=null,Y.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:Ke,bindFramebuffer:De,drawBuffers:O,useProgram:Vt,setBlending:_e,setMaterial:ft,setFlipSided:Ue,setCullFace:P,setLineWidth:A,setPolygonOffset:B,setScissorTest:ee,activeTexture:j,bindTexture:Q,unbindTexture:pe,compressedTexImage2D:se,compressedTexImage3D:ce,texImage2D:Ee,texImage3D:he,updateUBOMapping:ht,uniformBlockBinding:Xe,texStorage2D:We,texStorage3D:Le,texSubImage2D:we,texSubImage3D:ke,compressedTexSubImage2D:K,compressedTexSubImage3D:tt,scissor:Fe,viewport:Je,reset:it}}function Dx(s,e,t,n,i,r,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return f?new OffscreenCanvas(P,A):wr("canvas")}function v(P,A,B,ee){let j=1;if((P.width>ee||P.height>ee)&&(j=ee/Math.max(P.width,P.height)),j<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Q=A?Oa:Math.floor,pe=Q(j*P.width),se=Q(j*P.height);u===void 0&&(u=g(pe,se));const ce=B?g(pe,se):u;return ce.width=pe,ce.height=se,ce.getContext("2d").drawImage(P,0,0,pe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+pe+"x"+se+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return Cl(P.width)&&Cl(P.height)}function p(P){return o?!1:P.wrapS!==gn||P.wrapT!==gn||P.minFilter!==mt&&P.minFilter!==Yt}function M(P,A){return P.generateMipmaps&&A&&P.minFilter!==mt&&P.minFilter!==Yt}function y(P){s.generateMipmap(P)}function T(P,A,B,ee,j=!1){if(o===!1)return A;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=A;if(A===s.RED&&(B===s.FLOAT&&(Q=s.R32F),B===s.HALF_FLOAT&&(Q=s.R16F),B===s.UNSIGNED_BYTE&&(Q=s.R8)),A===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.R8UI),B===s.UNSIGNED_SHORT&&(Q=s.R16UI),B===s.UNSIGNED_INT&&(Q=s.R32UI),B===s.BYTE&&(Q=s.R8I),B===s.SHORT&&(Q=s.R16I),B===s.INT&&(Q=s.R32I)),A===s.RG&&(B===s.FLOAT&&(Q=s.RG32F),B===s.HALF_FLOAT&&(Q=s.RG16F),B===s.UNSIGNED_BYTE&&(Q=s.RG8)),A===s.RGBA){const pe=j?Da:Ye.getTransfer(ee);B===s.FLOAT&&(Q=s.RGBA32F),B===s.HALF_FLOAT&&(Q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Q=pe===ut?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function N(P,A,B){return M(P,B)===!0||P.isFramebufferTexture&&P.minFilter!==mt&&P.minFilter!==Yt?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function L(P){return P===mt||P===Ai||P===Es?s.NEAREST:s.LINEAR}function x(P){const A=P.target;A.removeEventListener("dispose",x),b(A),A.isVideoTexture&&h.delete(A)}function S(P){const A=P.target;A.removeEventListener("dispose",S),E(A)}function b(P){const A=n.get(P);if(A.__webglInit===void 0)return;const B=P.source,ee=d.get(B);if(ee){const j=ee[A.__cacheKey];j.usedTimes--,j.usedTimes===0&&_(P),Object.keys(ee).length===0&&d.delete(B)}n.remove(P)}function _(P){const A=n.get(P);s.deleteTexture(A.__webglTexture);const B=P.source,ee=d.get(B);delete ee[A.__cacheKey],a.memory.textures--}function E(P){const A=P.texture,B=n.get(P),ee=n.get(A);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(B.__webglFramebuffer[j]))for(let Q=0;Q<B.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(B.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(B.__webglFramebuffer[j]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[j])}else{if(Array.isArray(B.__webglFramebuffer))for(let j=0;j<B.__webglFramebuffer.length;j++)s.deleteFramebuffer(B.__webglFramebuffer[j]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let j=0;j<B.__webglColorRenderbuffer.length;j++)B.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[j]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let j=0,Q=A.length;j<Q;j++){const pe=n.get(A[j]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(A[j])}n.remove(A),n.remove(P)}let C=0;function w(){C=0}function U(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function z(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function G(P,A){const B=n.get(P);if(P.isVideoTexture&&ft(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,P,A);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+A)}function q(P,A){const B=n.get(P);if(P.version>0&&B.__version!==P.version){Y(B,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+A)}function $(P,A){const B=n.get(P);if(P.version>0&&B.__version!==P.version){Y(B,P,A);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+A)}function X(P,A){const B=n.get(P);if(P.version>0&&B.__version!==P.version){le(B,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+A)}const J={[zn]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Ia]:s.MIRRORED_REPEAT},Z={[mt]:s.NEAREST,[Ai]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},ue={[fg]:s.NEVER,[yg]:s.ALWAYS,[pg]:s.LESS,[_f]:s.LEQUAL,[mg]:s.EQUAL,[vg]:s.GEQUAL,[gg]:s.GREATER,[_g]:s.NOTEQUAL};function Ce(P,A,B){if(A.type===Bn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yt||A.magFilter===Ra||A.magFilter===Es||A.magFilter===Zn||A.minFilter===Yt||A.minFilter===Ra||A.minFilter===Es||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(s.texParameteri(P,s.TEXTURE_WRAP_S,J[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,J[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,J[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Z[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Z[A.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==gn||A.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,L(A.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,L(A.minFilter)),A.minFilter!==mt&&A.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ue[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===mt||A.minFilter!==Es&&A.minFilter!==Zn||A.type===Bn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function W(P,A){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",x));const ee=A.source;let j=d.get(ee);j===void 0&&(j={},d.set(ee,j));const Q=z(A);if(Q!==P.__cacheKey){j[Q]===void 0&&(j[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[Q].usedTimes++;const pe=j[P.__cacheKey];pe!==void 0&&(j[P.__cacheKey].usedTimes--,pe.usedTimes===0&&_(A)),P.__cacheKey=Q,P.__webglTexture=j[Q].texture}return B}function Y(P,A,B){let ee=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ee=s.TEXTURE_3D);const j=W(P,A),Q=A.source;t.bindTexture(ee,P.__webglTexture,s.TEXTURE0+B);const pe=n.get(Q);if(Q.version!==pe.__version||j===!0){t.activeTexture(s.TEXTURE0+B);const se=Ye.getPrimaries(Ye.workingColorSpace),ce=A.colorSpace===vn?null:Ye.getPrimaries(A.colorSpace),we=A.colorSpace===vn||se===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=p(A)&&m(A.image)===!1;let K=v(A.image,ke,!1,i.maxTextureSize);K=Ue(A,K);const tt=m(K)||o,We=r.convert(A.format,A.colorSpace);let Le=r.convert(A.type),Ee=T(A.internalFormat,We,Le,A.colorSpace,A.isVideoTexture);Ce(ee,A,tt);let he;const Fe=A.mipmaps,Je=o&&A.isVideoTexture!==!0&&Ee!==pf,ht=pe.__version===void 0||j===!0,Xe=Q.dataReady,it=N(A,K,tt);if(A.isDepthTexture)Ee=s.DEPTH_COMPONENT,o?A.type===Bn?Ee=s.DEPTH_COMPONENT32F:A.type===_i?Ee=s.DEPTH_COMPONENT24:A.type===zi?Ee=s.DEPTH24_STENCIL8:Ee=s.DEPTH_COMPONENT16:A.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Hi&&Ee===s.DEPTH_COMPONENT&&A.type!==oc&&A.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=_i,Le=r.convert(A.type)),A.format===Ns&&Ee===s.DEPTH_COMPONENT&&(Ee=s.DEPTH_STENCIL,A.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=zi,Le=r.convert(A.type))),ht&&(Je?t.texStorage2D(s.TEXTURE_2D,1,Ee,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,Ee,K.width,K.height,0,We,Le,null));else if(A.isDataTexture)if(Fe.length>0&&tt){Je&&ht&&t.texStorage2D(s.TEXTURE_2D,it,Ee,Fe[0].width,Fe[0].height);for(let D=0,te=Fe.length;D<te;D++)he=Fe[D],Je?Xe&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,he.width,he.height,We,Le,he.data):t.texImage2D(s.TEXTURE_2D,D,Ee,he.width,he.height,0,We,Le,he.data);A.generateMipmaps=!1}else Je?(ht&&t.texStorage2D(s.TEXTURE_2D,it,Ee,K.width,K.height),Xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,We,Le,K.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,K.width,K.height,0,We,Le,K.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Je&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,Ee,Fe[0].width,Fe[0].height,K.depth);for(let D=0,te=Fe.length;D<te;D++)he=Fe[D],A.format!==_n?We!==null?Je?Xe&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,he.width,he.height,K.depth,We,he.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,Ee,he.width,he.height,K.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?Xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,he.width,he.height,K.depth,We,Le,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,D,Ee,he.width,he.height,K.depth,0,We,Le,he.data)}else{Je&&ht&&t.texStorage2D(s.TEXTURE_2D,it,Ee,Fe[0].width,Fe[0].height);for(let D=0,te=Fe.length;D<te;D++)he=Fe[D],A.format!==_n?We!==null?Je?Xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,he.width,he.height,We,he.data):t.compressedTexImage2D(s.TEXTURE_2D,D,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?Xe&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,he.width,he.height,We,Le,he.data):t.texImage2D(s.TEXTURE_2D,D,Ee,he.width,he.height,0,We,Le,he.data)}else if(A.isDataArrayTexture)Je?(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,Ee,K.width,K.height,K.depth),Xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,We,Le,K.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,K.width,K.height,K.depth,0,We,Le,K.data);else if(A.isData3DTexture)Je?(ht&&t.texStorage3D(s.TEXTURE_3D,it,Ee,K.width,K.height,K.depth),Xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,We,Le,K.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,K.width,K.height,K.depth,0,We,Le,K.data);else if(A.isFramebufferTexture){if(ht)if(Je)t.texStorage2D(s.TEXTURE_2D,it,Ee,K.width,K.height);else{let D=K.width,te=K.height;for(let ne=0;ne<it;ne++)t.texImage2D(s.TEXTURE_2D,ne,Ee,D,te,0,We,Le,null),D>>=1,te>>=1}}else if(Fe.length>0&&tt){Je&&ht&&t.texStorage2D(s.TEXTURE_2D,it,Ee,Fe[0].width,Fe[0].height);for(let D=0,te=Fe.length;D<te;D++)he=Fe[D],Je?Xe&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,We,Le,he):t.texImage2D(s.TEXTURE_2D,D,Ee,We,Le,he);A.generateMipmaps=!1}else Je?(ht&&t.texStorage2D(s.TEXTURE_2D,it,Ee,K.width,K.height),Xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,We,Le,K)):t.texImage2D(s.TEXTURE_2D,0,Ee,We,Le,K);M(A,tt)&&y(ee),pe.__version=Q.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function le(P,A,B){if(A.image.length!==6)return;const ee=W(P,A),j=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+B);const Q=n.get(j);if(j.version!==Q.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);const pe=Ye.getPrimaries(Ye.workingColorSpace),se=A.colorSpace===vn?null:Ye.getPrimaries(A.colorSpace),ce=A.colorSpace===vn||pe===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const we=A.isCompressedTexture||A.image[0].isCompressedTexture,ke=A.image[0]&&A.image[0].isDataTexture,K=[];for(let D=0;D<6;D++)!we&&!ke?K[D]=v(A.image[D],!1,!0,i.maxCubemapSize):K[D]=ke?A.image[D].image:A.image[D],K[D]=Ue(A,K[D]);const tt=K[0],We=m(tt)||o,Le=r.convert(A.format,A.colorSpace),Ee=r.convert(A.type),he=T(A.internalFormat,Le,Ee,A.colorSpace),Fe=o&&A.isVideoTexture!==!0,Je=Q.__version===void 0||ee===!0,ht=j.dataReady;let Xe=N(A,tt,We);Ce(s.TEXTURE_CUBE_MAP,A,We);let it;if(we){Fe&&Je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,he,tt.width,tt.height);for(let D=0;D<6;D++){it=K[D].mipmaps;for(let te=0;te<it.length;te++){const ne=it[te];A.format!==_n?Le!==null?Fe?ht&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,0,0,ne.width,ne.height,Le,ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,he,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ht&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,0,0,ne.width,ne.height,Le,Ee,ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,he,ne.width,ne.height,0,Le,Ee,ne.data)}}}else{it=A.mipmaps,Fe&&Je&&(it.length>0&&Xe++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,he,K[0].width,K[0].height));for(let D=0;D<6;D++)if(ke){Fe?ht&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,K[D].width,K[D].height,Le,Ee,K[D].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,he,K[D].width,K[D].height,0,Le,Ee,K[D].data);for(let te=0;te<it.length;te++){const de=it[te].image[D].image;Fe?ht&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,0,0,de.width,de.height,Le,Ee,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,he,de.width,de.height,0,Le,Ee,de.data)}}else{Fe?ht&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Le,Ee,K[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,he,Le,Ee,K[D]);for(let te=0;te<it.length;te++){const ne=it[te];Fe?ht&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,0,0,Le,Ee,ne.image[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,he,Le,Ee,ne.image[D])}}}M(A,We)&&y(s.TEXTURE_CUBE_MAP),Q.__version=j.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function be(P,A,B,ee,j,Q){const pe=r.convert(B.format,B.colorSpace),se=r.convert(B.type),ce=T(B.internalFormat,pe,se,B.colorSpace);if(!n.get(A).__hasExternalTextures){const ke=Math.max(1,A.width>>Q),K=Math.max(1,A.height>>Q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,Q,ce,ke,K,A.depth,0,pe,se,null):t.texImage2D(j,Q,ce,ke,K,0,pe,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),_e(A)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,j,n.get(B).__webglTexture,0,Pe(A)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,j,n.get(B).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(P,A,B){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ee=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||_e(A)){const j=A.depthTexture;j&&j.isDepthTexture&&(j.type===Bn?ee=s.DEPTH_COMPONENT32F:j.type===_i&&(ee=s.DEPTH_COMPONENT24));const Q=Pe(A);_e(A)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,ee,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,ee,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ee=Pe(A);B&&_e(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,A.width,A.height):_e(A)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ee=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let j=0;j<ee.length;j++){const Q=ee[j],pe=r.convert(Q.format,Q.colorSpace),se=r.convert(Q.type),ce=T(Q.internalFormat,pe,se,Q.colorSpace),we=Pe(A);B&&_e(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ce,A.width,A.height):_e(A)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ce,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ce,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const ee=n.get(A.depthTexture).__webglTexture,j=Pe(A);if(A.depthTexture.format===Hi)_e(A)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(A.depthTexture.format===Ns)_e(A)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ke(P){const A=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");fe(A.__webglFramebuffer,P)}else if(B){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]=s.createRenderbuffer(),Te(A.__webglDepthbuffer[ee],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Te(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(P,A,B){const ee=n.get(P);A!==void 0&&be(ee.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ke(P)}function O(P){const A=P.texture,B=n.get(P),ee=n.get(A);P.addEventListener("dispose",S),P.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=A.version,a.memory.textures++);const j=P.isWebGLCubeRenderTarget===!0,Q=P.isWebGLMultipleRenderTargets===!0,pe=m(P)||o;if(j){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let ce=0;ce<A.mipmaps.length;ce++)B.__webglFramebuffer[se][ce]=s.createFramebuffer()}else B.__webglFramebuffer[se]=s.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<A.mipmaps.length;se++)B.__webglFramebuffer[se]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){const se=P.texture;for(let ce=0,we=se.length;ce<we;ce++){const ke=n.get(se[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&_e(P)===!1){const se=Q?A:[A];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){const we=se[ce];B.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const ke=r.convert(we.format,we.colorSpace),K=r.convert(we.type),tt=T(we.internalFormat,ke,K,we.colorSpace,P.isXRRenderTarget===!0),We=Pe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,tt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,A,pe);for(let se=0;se<6;se++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)be(B.__webglFramebuffer[se][ce],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else be(B.__webglFramebuffer[se],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);M(A,pe)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const se=P.texture;for(let ce=0,we=se.length;ce<we;ce++){const ke=se[ce],K=n.get(ke);t.bindTexture(s.TEXTURE_2D,K.__webglTexture),Ce(s.TEXTURE_2D,ke,pe),be(B.__webglFramebuffer,P,ke,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),M(ke,pe)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ee.__webglTexture),Ce(se,A,pe),o&&A.mipmaps&&A.mipmaps.length>0)for(let ce=0;ce<A.mipmaps.length;ce++)be(B.__webglFramebuffer[ce],P,A,s.COLOR_ATTACHMENT0,se,ce);else be(B.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,se,0);M(A,pe)&&y(se),t.unbindTexture()}P.depthBuffer&&Ke(P)}function Vt(P){const A=m(P)||o,B=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ee=0,j=B.length;ee<j;ee++){const Q=B[ee];if(M(Q,A)){const pe=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,se=n.get(Q).__webglTexture;t.bindTexture(pe,se),y(pe),t.unbindTexture()}}}function Me(P){if(o&&P.samples>0&&_e(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],B=P.width,ee=P.height;let j=s.COLOR_BUFFER_BIT;const Q=[],pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=n.get(P),ce=P.isWebGLMultipleRenderTargets===!0;if(ce)for(let we=0;we<A.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let we=0;we<A.length;we++){Q.push(s.COLOR_ATTACHMENT0+we),P.depthBuffer&&Q.push(pe);const ke=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(ke===!1&&(P.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ce&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,se.__webglColorRenderbuffer[we]),ke===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),ce){const K=n.get(A[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,B,ee,0,0,B,ee,j,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let we=0;we<A.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,se.__webglColorRenderbuffer[we]);const ke=n.get(A[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Pe(P){return Math.min(i.maxSamples,P.samples)}function _e(P){const A=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ft(P){const A=a.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Ue(P,A){const B=P.colorSpace,ee=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Rl||B!==kt&&B!==vn&&(Ye.getTransfer(B)===ut?o===!1?e.has("EXT_sRGB")===!0&&ee===_n?(P.format=Rl,P.minFilter=Yt,P.generateMipmaps=!1):A=yf.sRGBToLinear(A):(ee!==_n||j!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}this.allocateTextureUnit=U,this.resetTextureUnits=w,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=De,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=_e}function Nx(s,e,t){const n=t.isWebGL2;function i(r,a=vn){let o;const l=Ye.getTransfer(a);if(r===Mi)return s.UNSIGNED_BYTE;if(r===cf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eg)return s.BYTE;if(r===tg)return s.SHORT;if(r===oc)return s.UNSIGNED_SHORT;if(r===lf)return s.INT;if(r===_i)return s.UNSIGNED_INT;if(r===Bn)return s.FLOAT;if(r===Tr)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ng)return s.ALPHA;if(r===_n)return s.RGBA;if(r===ig)return s.LUMINANCE;if(r===sg)return s.LUMINANCE_ALPHA;if(r===Hi)return s.DEPTH_COMPONENT;if(r===Ns)return s.DEPTH_STENCIL;if(r===Rl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rg)return s.RED;if(r===uf)return s.RED_INTEGER;if(r===ag)return s.RG;if(r===df)return s.RG_INTEGER;if(r===ff)return s.RGBA_INTEGER;if(r===Eo||r===Mo||r===So||r===bo)if(l===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===ah||r===oh||r===lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===pf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ch||r===hh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ch)return l===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===_h||r===vh||r===yh||r===xh||r===Eh||r===Mh||r===Sh||r===bh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_h)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===To||r===Th||r===Ah)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===To)return l===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ah)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===og||r===wh||r===Rh||r===Ch)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===To)return o.COMPRESSED_RED_RGTC1_EXT;if(r===wh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ch)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Ux extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fx={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new wi({extensions:{fragDepth:!0},vertexShader:Ox,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ye(new ni(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Vx extends Gs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new kx,m=t.getContextAttributes();let p=null,M=null;const y=[],T=[],N=new ae;let L=null;const x=new en;x.layers.enable(1),x.viewport=new st;const S=new en;S.layers.enable(2),S.viewport=new st;const b=[x,S],_=new Ux;_.layers.enable(1),_.layers.enable(2);let E=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=y[W];return Y===void 0&&(Y=new Ko,y[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=y[W];return Y===void 0&&(Y=new Ko,y[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=y[W];return Y===void 0&&(Y=new Ko,y[W]=Y),Y.getHandSpace()};function w(W){const Y=T.indexOf(W.inputSource);if(Y===-1)return;const le=y[Y];le!==void 0&&(le.update(W.inputSource,W.frame,c||a),le.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",z);for(let W=0;W<y.length;W++){const Y=T[W];Y!==null&&(T[W]=null,y[W].disconnect(Y))}E=null,C=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",U),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new qi(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,le=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?Ns:Hi,le=m.stencil?zi:_i);const Te={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new qi(d.textureWidth,d.textureHeight,{format:_n,type:Mi,depthTexture:new Pf(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const fe=e.properties.get(M);fe.__ignoreDepthValues=d.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(W){for(let Y=0;Y<W.removed.length;Y++){const le=W.removed[Y],be=T.indexOf(le);be>=0&&(T[be]=null,y[be].disconnect(le))}for(let Y=0;Y<W.added.length;Y++){const le=W.added[Y];let be=T.indexOf(le);if(be===-1){for(let fe=0;fe<y.length;fe++)if(fe>=T.length){T.push(le),be=fe;break}else if(T[fe]===null){T[fe]=le,be=fe;break}if(be===-1)break}const Te=y[be];Te&&Te.connect(le)}}const G=new I,q=new I;function $(W,Y,le){G.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const be=G.distanceTo(q),Te=Y.projectionMatrix.elements,fe=le.projectionMatrix.elements,Ke=Te[14]/(Te[10]-1),De=Te[14]/(Te[10]+1),O=(Te[9]+1)/Te[5],Vt=(Te[9]-1)/Te[5],Me=(Te[8]-1)/Te[0],Pe=(fe[8]+1)/fe[0],_e=Ke*Me,ft=Ke*Pe,Ue=be/(-Me+Pe),P=Ue*-Me;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(P),W.translateZ(Ue),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=Ke+Ue,B=De+Ue,ee=_e-P,j=ft+(be-P),Q=O*De/B*A,pe=Vt*De/B*A;W.projectionMatrix.makePerspective(ee,j,Q,pe,A,B),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),_.near=S.near=x.near=W.near,_.far=S.far=x.far=W.far,(E!==_.near||C!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,C=_.far,x.near=E,x.far=C,S.near=E,S.far=C,x.updateProjectionMatrix(),S.updateProjectionMatrix(),W.updateProjectionMatrix());const Y=W.parent,le=_.cameras;X(_,Y);for(let be=0;be<le.length;be++)X(le[be],Y);le.length===2?$(_,x,S):_.projectionMatrix.copy(x.projectionMatrix),J(W,_,Y)};function J(W,Y,le){le===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Fs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null};let Z=null;function ue(W,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let be=!1;le.length!==_.cameras.length&&(_.cameras.length=0,be=!0);for(let fe=0;fe<le.length;fe++){const Ke=le[fe];let De=null;if(f!==null)De=f.getViewport(Ke);else{const Vt=u.getViewSubImage(d,Ke);De=Vt.viewport,fe===0&&(e.setRenderTargetTextures(M,Vt.colorTexture,d.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(M))}let O=b[fe];O===void 0&&(O=new en,O.layers.enable(fe),O.viewport=new st,b[fe]=O),O.matrix.fromArray(Ke.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Ke.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(De.x,De.y,De.width,De.height),fe===0&&(_.matrix.copy(O.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),be===!0&&_.cameras.push(O)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const fe=u.getDepthInformation(le[0]);fe&&fe.isValid&&fe.texture&&v.init(e,fe,i.renderState)}}for(let le=0;le<y.length;le++){const be=T[le],Te=y[le];be!==null&&Te!==void 0&&Te.update(be,Y,c||a)}v.render(e,_),Z&&Z(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Ce=new Cf;Ce.setAnimationLoop(ue),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}function zx(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Af(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hx(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){const T=y.program;n.uniformBlockBinding(M,T)}function c(M,y){let T=i[M.id];T===void 0&&(g(M),T=h(M),i[M.id]=T,M.addEventListener("dispose",m));const N=y.program;n.updateUBOMapping(M,N);const L=e.render.frame;r[M.id]!==L&&(d(M),r[M.id]=L)}function h(M){const y=u();M.__bindingPointIndex=y;const T=s.createBuffer(),N=M.__size,L=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,N,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],T=M.uniforms,N=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let L=0,x=T.length;L<x;L++){const S=Array.isArray(T[L])?T[L]:[T[L]];for(let b=0,_=S.length;b<_;b++){const E=S[b];if(f(E,L,b,N)===!0){const C=E.__offset,w=Array.isArray(E.value)?E.value:[E.value];let U=0;for(let z=0;z<w.length;z++){const G=w[z],q=v(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,C+U,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,C,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,T,N){const L=M.value,x=y+"_"+T;if(N[x]===void 0)return typeof L=="number"||typeof L=="boolean"?N[x]=L:N[x]=L.clone(),!0;{const S=N[x];if(typeof L=="number"||typeof L=="boolean"){if(S!==L)return N[x]=L,!0}else if(S.equals(L)===!1)return S.copy(L),!0}return!1}function g(M){const y=M.uniforms;let T=0;const N=16;for(let x=0,S=y.length;x<S;x++){const b=Array.isArray(y[x])?y[x]:[y[x]];for(let _=0,E=b.length;_<E;_++){const C=b[_],w=Array.isArray(C.value)?C.value:[C.value];for(let U=0,z=w.length;U<z;U++){const G=w[U],q=v(G),$=T%N;$!==0&&N-$<q.boundary&&(T+=N-$),C.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=q.storage}}}const L=T%N;return L>0&&(T+=N-L),M.__size=T,M.__cache={},this}function v(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Ff{constructor(e={}){const{canvas:t=Ug(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const y=this;let T=!1,N=0,L=0,x=null,S=-1,b=null;const _=new st,E=new st;let C=null;const w=new xe(0);let U=0,z=t.width,G=t.height,q=1,$=null,X=null;const J=new st(0,0,z,G),Z=new st(0,0,z,G);let ue=!1;const Ce=new uc;let W=!1,Y=!1,le=null;const be=new Be,Te=new ae,fe=new I,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return x===null?q:1}let O=n;function Vt(R,F){for(let V=0;V<R.length;V++){const H=R[V],k=t.getContext(H,F);if(k!==null)return k}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",te,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),O=Vt(F,R),O===null)throw Vt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Me,Pe,_e,ft,Ue,P,A,B,ee,j,Q,pe,se,ce,we,ke,K,tt,We,Le,Ee,he,Fe,Je;function ht(){Me=new Kv(O),Pe=new Gv(O,Me,e),Me.init(Pe),he=new Nx(O,Me,Pe),_e=new Ix(O,Me,Pe),ft=new Zv(O),Ue=new vx,P=new Dx(O,Me,_e,Ue,Pe,he,ft),A=new Xv(y),B=new jv(y),ee=new a_(O,Pe),Fe=new zv(O,Me,ee,Pe),j=new Yv(O,ee,ft,Fe),Q=new ny(O,j,ee,ft),We=new ty(O,Pe,P),ke=new Wv(Ue),pe=new _x(y,A,B,Me,Pe,Fe,ke),se=new zx(y,Ue),ce=new xx,we=new Ax(Me,Pe),tt=new Vv(y,A,B,_e,Q,d,l),K=new Lx(y,Q,Pe),Je=new Hx(O,ft,Pe,_e),Le=new Hv(O,Me,ft,Pe),Ee=new Jv(O,Me,ft,Pe),ft.programs=pe.programs,y.capabilities=Pe,y.extensions=Me,y.properties=Ue,y.renderLists=ce,y.shadowMap=K,y.state=_e,y.info=ft}ht();const Xe=new Vx(y,O);this.xr=Xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(z,G,!1))},this.getSize=function(R){return R.set(z,G)},this.setSize=function(R,F,V=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,G=F,t.width=Math.floor(R*q),t.height=Math.floor(F*q),V===!0&&(t.style.width=R+"px",t.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(z*q,G*q).floor()},this.setDrawingBufferSize=function(R,F,V){z=R,G=F,q=V,t.width=Math.floor(R*V),t.height=Math.floor(F*V),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,F,V,H){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,F,V,H),_e.viewport(_.copy(J).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,F,V,H){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,F,V,H),_e.scissor(E.copy(Z).multiplyScalar(q).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){_e.setScissorTest(ue=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,F=!0,V=!0){let H=0;if(R){let k=!1;if(x!==null){const oe=x.texture.format;k=oe===ff||oe===df||oe===uf}if(k){const oe=x.texture.type,me=oe===Mi||oe===_i||oe===oc||oe===zi||oe===cf||oe===hf,Ae=tt.getClearColor(),Re=tt.getClearAlpha(),Ve=Ae.r,Ie=Ae.g,Ne=Ae.b;me?(f[0]=Ve,f[1]=Ie,f[2]=Ne,f[3]=Re,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=Ve,g[1]=Ie,g[2]=Ne,g[3]=Re,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}F&&(H|=O.DEPTH_BUFFER_BIT),V&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ce.dispose(),we.dispose(),Ue.dispose(),A.dispose(),B.dispose(),Q.dispose(),Fe.dispose(),Je.dispose(),pe.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",dn),Xe.removeEventListener("sessionend",ot),le&&(le.dispose(),le=null),Jt.stop()};function it(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=ft.autoReset,F=K.enabled,V=K.autoUpdate,H=K.needsUpdate,k=K.type;ht(),ft.autoReset=R,K.enabled=F,K.autoUpdate=V,K.needsUpdate=H,K.type=k}function te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){const F=R.target;F.removeEventListener("dispose",ne),de(F)}function de(R){Se(R),Ue.remove(R)}function Se(R){const F=Ue.get(R).programs;F!==void 0&&(F.forEach(function(V){pe.releaseProgram(V)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,V,H,k,oe){F===null&&(F=Ke);const me=k.isMesh&&k.matrixWorld.determinant()<0,Ae=gm(R,F,V,H,k);_e.setMaterial(H,me);let Re=V.index,Ve=1;if(H.wireframe===!0){if(Re=j.getWireframeAttribute(V),Re===void 0)return;Ve=2}const Ie=V.drawRange,Ne=V.attributes.position;let xt=Ie.start*Ve,an=(Ie.start+Ie.count)*Ve;oe!==null&&(xt=Math.max(xt,oe.start*Ve),an=Math.min(an,(oe.start+oe.count)*Ve)),Re!==null?(xt=Math.max(xt,0),an=Math.min(an,Re.count)):Ne!=null&&(xt=Math.max(xt,0),an=Math.min(an,Ne.count));const It=an-xt;if(It<0||It===1/0)return;Fe.setup(k,H,Ae,V,Re);let Wn,pt=Le;if(Re!==null&&(Wn=ee.get(Re),pt=Ee,pt.setIndex(Wn)),k.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*De()),pt.setMode(O.LINES)):pt.setMode(O.TRIANGLES);else if(k.isLine){let ze=H.linewidth;ze===void 0&&(ze=1),_e.setLineWidth(ze*De()),k.isLineSegments?pt.setMode(O.LINES):k.isLineLoop?pt.setMode(O.LINE_LOOP):pt.setMode(O.LINE_STRIP)}else k.isPoints?pt.setMode(O.POINTS):k.isSprite&&pt.setMode(O.TRIANGLES);if(k.isBatchedMesh)pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)pt.renderInstances(xt,It,k.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_o=Math.min(V.instanceCount,ze);pt.renderInstances(xt,It,_o)}else pt.render(xt,It)};function Ze(R,F,V){R.transparent===!0&&R.side===tn&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,qr(R,F,V),R.side=ii,R.needsUpdate=!0,qr(R,F,V),R.side=tn):qr(R,F,V)}this.compile=function(R,F,V=null){V===null&&(V=R),m=we.get(V),m.init(),M.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),R!==V&&R.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(y._useLegacyLights);const H=new Set;return R.traverse(function(k){const oe=k.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Ae=oe[me];Ze(Ae,V,k),H.add(Ae)}else Ze(oe,V,k),H.add(oe)}),M.pop(),m=null,H},this.compileAsync=function(R,F,V=null){const H=this.compile(R,F,V);return new Promise(k=>{function oe(){if(H.forEach(function(me){Ue.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){k(R);return}setTimeout(oe,10)}Me.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let at=null;function zt(R){at&&at(R)}function dn(){Jt.stop()}function ot(){Jt.start()}const Jt=new Cf;Jt.setAnimationLoop(zt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(R){at=R,Xe.setAnimationLoop(R),R===null?Jt.stop():Jt.start()},Xe.addEventListener("sessionstart",dn),Xe.addEventListener("sessionend",ot),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(F),F=Xe.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,F,x),m=we.get(R,M.length),m.init(),M.push(m),be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ce.setFromProjectionMatrix(be),Y=this.localClippingEnabled,W=ke.init(this.clippingPlanes,Y),v=ce.get(R,p.length),v.init(),p.push(v),In(R,F,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort($,X),this.info.render.frame++,W===!0&&ke.beginShadows();const V=m.state.shadowsArray;if(K.render(V,R,F),W===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1)&&tt.render(v,R),m.setupLights(y._useLegacyLights),F.isArrayCamera){const H=F.cameras;for(let k=0,oe=H.length;k<oe;k++){const me=H[k];qc(v,R,me,me.viewport)}}else qc(v,R,F);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),R.isScene===!0&&R.onAfterRender(y,R,F),Fe.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function In(R,F,V,H){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ce.intersectsSprite(R)){H&&fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const me=Q.update(R),Ae=R.material;Ae.visible&&v.push(R,me,Ae,V,fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ce.intersectsObject(R))){const me=Q.update(R),Ae=R.material;if(H&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),fe.copy(R.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),fe.copy(me.boundingSphere.center)),fe.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray(Ae)){const Re=me.groups;for(let Ve=0,Ie=Re.length;Ve<Ie;Ve++){const Ne=Re[Ve],xt=Ae[Ne.materialIndex];xt&&xt.visible&&v.push(R,me,xt,V,fe.z,Ne)}}else Ae.visible&&v.push(R,me,Ae,V,fe.z,null)}}const oe=R.children;for(let me=0,Ae=oe.length;me<Ae;me++)In(oe[me],F,V,H)}function qc(R,F,V,H){const k=R.opaque,oe=R.transmissive,me=R.transparent;m.setupLightsView(V),W===!0&&ke.setGlobalState(y.clippingPlanes,V),oe.length>0&&mm(k,oe,F,V),H&&_e.viewport(_.copy(H)),k.length>0&&$r(k,F,V),oe.length>0&&$r(oe,F,V),me.length>0&&$r(me,F,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function mm(R,F,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const oe=Pe.isWebGL2;le===null&&(le=new qi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Tr:Mi,minFilter:Zn,samples:oe?4:0})),y.getDrawingBufferSize(Te),oe?le.setSize(Te.x,Te.y):le.setSize(Oa(Te.x),Oa(Te.y));const me=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(w),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear();const Ae=y.toneMapping;y.toneMapping=Ei,$r(R,V,H),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le);let Re=!1;for(let Ve=0,Ie=F.length;Ve<Ie;Ve++){const Ne=F[Ve],xt=Ne.object,an=Ne.geometry,It=Ne.material,Wn=Ne.group;if(It.side===tn&&xt.layers.test(H.layers)){const pt=It.side;It.side=rn,It.needsUpdate=!0,jc(xt,V,H,an,It,Wn),It.side=pt,It.needsUpdate=!0,Re=!0}}Re===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le)),y.setRenderTarget(me),y.setClearColor(w,U),y.toneMapping=Ae}function $r(R,F,V){const H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,oe=R.length;k<oe;k++){const me=R[k],Ae=me.object,Re=me.geometry,Ve=H===null?me.material:H,Ie=me.group;Ae.layers.test(V.layers)&&jc(Ae,F,V,Re,Ve,Ie)}}function jc(R,F,V,H,k,oe){R.onBeforeRender(y,F,V,H,k,oe),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(y,F,V,H,R,oe),k.transparent===!0&&k.side===tn&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,y.renderBufferDirect(V,F,H,k,R,oe),k.side=ii,k.needsUpdate=!0,y.renderBufferDirect(V,F,H,k,R,oe),k.side=tn):y.renderBufferDirect(V,F,H,k,R,oe),R.onAfterRender(y,F,V,H,k,oe)}function qr(R,F,V){F.isScene!==!0&&(F=Ke);const H=Ue.get(R),k=m.state.lights,oe=m.state.shadowsArray,me=k.state.version,Ae=pe.getParameters(R,k.state,oe,F,V),Re=pe.getProgramCacheKey(Ae);let Ve=H.programs;H.environment=R.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(R.isMeshStandardMaterial?B:A).get(R.envMap||H.environment),Ve===void 0&&(R.addEventListener("dispose",ne),Ve=new Map,H.programs=Ve);let Ie=Ve.get(Re);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===me)return Yc(R,Ae),Ie}else Ae.uniforms=pe.getUniforms(R),R.onBuild(V,Ae,y),R.onBeforeCompile(Ae,y),Ie=pe.acquireProgram(Ae,Re),Ve.set(Re,Ie),H.uniforms=Ae.uniforms;const Ne=H.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=ke.uniform),Yc(R,Ae),H.needsLights=vm(R),H.lightsStateVersion=me,H.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function Kc(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=Ca.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Yc(R,F){const V=Ue.get(R);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function gm(R,F,V,H,k){F.isScene!==!0&&(F=Ke),P.resetTextureUnits();const oe=F.fog,me=H.isMeshStandardMaterial?F.environment:null,Ae=x===null?y.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:kt,Re=(H.isMeshStandardMaterial?B:A).get(H.envMap||me),Ve=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,an=!!V.morphAttributes.color;let It=Ei;H.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(It=y.toneMapping);const Wn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=Wn!==void 0?Wn.length:0,ze=Ue.get(H),_o=m.state.lights;if(W===!0&&(Y===!0||R!==b)){const fn=R===b&&H.id===S;ke.setState(H,R,fn)}let _t=!1;H.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==_o.state.version||ze.outputColorSpace!==Ae||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||ze.envMap!==Re||H.fog===!0&&ze.fog!==oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ke.numPlanes||ze.numIntersection!==ke.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==Ie||ze.morphTargets!==Ne||ze.morphNormals!==xt||ze.morphColors!==an||ze.toneMapping!==It||Pe.isWebGL2===!0&&ze.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,ze.__version=H.version);let Ri=ze.currentProgram;_t===!0&&(Ri=qr(H,F,k));let Jc=!1,Qs=!1,vo=!1;const qt=Ri.getUniforms(),Ci=ze.uniforms;if(_e.useProgram(Ri.program)&&(Jc=!0,Qs=!0,vo=!0),H.id!==S&&(S=H.id,Qs=!0),Jc||b!==R){qt.setValue(O,"projectionMatrix",R.projectionMatrix),qt.setValue(O,"viewMatrix",R.matrixWorldInverse);const fn=qt.map.cameraPosition;fn!==void 0&&fn.setValue(O,fe.setFromMatrixPosition(R.matrixWorld)),Pe.logarithmicDepthBuffer&&qt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&qt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Qs=!0,vo=!0)}if(k.isSkinnedMesh){qt.setOptional(O,k,"bindMatrix"),qt.setOptional(O,k,"bindMatrixInverse");const fn=k.skeleton;fn&&(Pe.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),qt.setValue(O,"boneTexture",fn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(qt.setOptional(O,k,"batchingTexture"),qt.setValue(O,"batchingTexture",k._matricesTexture,P));const yo=V.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&Pe.isWebGL2===!0)&&We.update(k,V,Ri),(Qs||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,qt.setValue(O,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ci.envMap.value=Re,Ci.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Qs&&(qt.setValue(O,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&_m(Ci,vo),oe&&H.fog===!0&&se.refreshFogUniforms(Ci,oe),se.refreshMaterialUniforms(Ci,H,q,G,le),Ca.upload(O,Kc(ze),Ci,P)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ca.upload(O,Kc(ze),Ci,P),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&qt.setValue(O,"center",k.center),qt.setValue(O,"modelViewMatrix",k.modelViewMatrix),qt.setValue(O,"normalMatrix",k.normalMatrix),qt.setValue(O,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const fn=H.uniformsGroups;for(let xo=0,ym=fn.length;xo<ym;xo++)if(Pe.isWebGL2){const Zc=fn[xo];Je.update(Zc,Ri),Je.bind(Zc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function _m(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function vm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(R,F,V){Ue.get(R.texture).__webglTexture=F,Ue.get(R.depthTexture).__webglTexture=V;const H=Ue.get(R);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,F){const V=Ue.get(R);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,V=0){x=R,N=F,L=V;let H=!0,k=null,oe=!1,me=!1;if(R){const Re=Ue.get(R);Re.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Re.__webglFramebuffer===void 0?P.setupRenderTarget(R):Re.__hasExternalTextures&&P.rebindTextures(R,Ue.get(R.texture).__webglTexture,Ue.get(R.depthTexture).__webglTexture);const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const Ie=Ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?k=Ie[F][V]:k=Ie[F],oe=!0):Pe.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?k=Ue.get(R).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[V]:k=Ie,_.copy(R.viewport),E.copy(R.scissor),C=R.scissorTest}else _.copy(J).multiplyScalar(q).floor(),E.copy(Z).multiplyScalar(q).floor(),C=ue;if(_e.bindFramebuffer(O.FRAMEBUFFER,k)&&Pe.drawBuffers&&H&&_e.drawBuffers(R,k),_e.viewport(_),_e.scissor(E),_e.setScissorTest(C),oe){const Re=Ue.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,V)}else if(me){const Re=Ue.get(R.texture),Ve=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Ve)}S=-1},this.readRenderTargetPixels=function(R,F,V,H,k,oe,me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae){_e.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Re=R.texture,Ve=Re.format,Ie=Re.type;if(Ve!==_n&&he.convert(Ve)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===Tr&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==Mi&&he.convert(Ie)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Bn&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-H&&V>=0&&V<=R.height-k&&O.readPixels(F,V,H,k,he.convert(Ve),he.convert(Ie),oe)}finally{const Re=x!==null?Ue.get(x).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(R,F,V=0){const H=Math.pow(2,-V),k=Math.floor(F.image.width*H),oe=Math.floor(F.image.height*H);P.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,R.x,R.y,k,oe),_e.unbindTexture()},this.copyTextureToTexture=function(R,F,V,H=0){const k=F.image.width,oe=F.image.height,me=he.convert(V.format),Ae=he.convert(V.type);P.setTexture2D(V,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,R.x,R.y,k,oe,me,Ae,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,R.x,R.y,F.mipmaps[0].width,F.mipmaps[0].height,me,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,R.x,R.y,me,Ae,F.image),H===0&&V.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(R,F,V,H,k=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=R.max.x-R.min.x+1,me=R.max.y-R.min.y+1,Ae=R.max.z-R.min.z+1,Re=he.convert(H.format),Ve=he.convert(H.type);let Ie;if(H.isData3DTexture)P.setTexture3D(H,0),Ie=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)P.setTexture2DArray(H,0),Ie=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Ne=O.getParameter(O.UNPACK_ROW_LENGTH),xt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),It=O.getParameter(O.UNPACK_SKIP_ROWS),Wn=O.getParameter(O.UNPACK_SKIP_IMAGES),pt=V.isCompressedTexture?V.mipmaps[k]:V.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,R.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,R.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,R.min.z),V.isDataTexture||V.isData3DTexture?O.texSubImage3D(Ie,k,F.x,F.y,F.z,oe,me,Ae,Re,Ve,pt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ie,k,F.x,F.y,F.z,oe,me,Ae,Re,pt.data)):O.texSubImage3D(Ie,k,F.x,F.y,F.z,oe,me,Ae,Re,Ve,pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,It),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Wn),k===0&&H.generateMipmaps&&O.generateMipmap(Ie),_e.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),_e.unbindTexture()},this.resetState=function(){N=0,L=0,x=null,_e.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cc?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Za?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?Gi:gf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gi?je:kt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Gx extends Ff{}Gx.prototype.isWebGL1Renderer=!0;class pc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wx extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Of{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new I;class Rr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bs extends xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ps;const sr=new I,ms=new I,gs=new I,_s=new ae,rr=new ae,Bf=new Be,ma=new I,ar=new I,ga=new I,Mu=new ae,Yo=new ae,Su=new ae;class Cr extends dt{constructor(e=new Bs){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Of(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Rr(n,3,0,!1)),ps.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=ps,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;_a(ma.set(-.5,-.5,0),gs,a,ms,i,r),_a(ar.set(.5,-.5,0),gs,a,ms,i,r),_a(ga.set(.5,.5,0),gs,a,ms,i,r),Mu.set(0,0),Yo.set(1,0),Su.set(1,1);let o=e.ray.intersectTriangle(ma,ar,ga,!1,sr);if(o===null&&(_a(ar.set(-.5,.5,0),gs,a,ms,i,r),Yo.set(0,1),o=e.ray.intersectTriangle(ma,ga,ar,!1,sr),o===null))return;const l=e.ray.origin.distanceTo(sr);l<e.near||l>e.far||t.push({distance:l,point:sr.clone(),uv:wn.getInterpolation(sr,ma,ar,ga,Mu,Yo,Su,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _a(s,e,t,n,i,r){_s.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(rr.x=r*_s.x-i*_s.y,rr.y=i*_s.x+r*_s.y):rr.copy(_s),s.copy(e),s.x+=rr.x,s.y+=rr.y,s.applyMatrix4(Bf)}const bu=new I,Tu=new st,Au=new st,Xx=new I,wu=new Be,va=new I,Jo=new Hn,Ru=new Be,Zo=new Qa;class $x extends ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingBox.expandByPoint(va)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingSphere.expandByPoint(va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(i),e.ray.intersectsSphere(Jo)!==!1&&(Ru.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(Ru),!(this.boundingBox!==null&&Zo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Tu.fromBufferAttribute(i.attributes.skinIndex,e),Au.fromBufferAttribute(i.attributes.skinWeight,e),bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Au.getComponent(r);if(a!==0){const o=Tu.getComponent(r);wu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xx.copy(bu).applyMatrix4(wu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class kf extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qx extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=mt,h=mt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cu=new Be,jx=new Be;class mc{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:jx;Cu.multiplyMatrices(o,t[r]),Cu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new mc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qx(t,e,e,_n,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new kf),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ll extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new Be,Pu=new Be,ya=[],Lu=new Bt,Kx=new Be,or=new ye,lr=new Hn;class Yx extends ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ll(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),Lu.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),lr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vs),Pu.multiplyMatrices(n,vs),or.matrixWorld=Pu,or.raycast(e,ya);for(let a=0,o=ya.length;a<o;a++){const l=ya[a];l.instanceId=r,l.object=this,t.push(l)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ll(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Vf extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Iu=new I,Du=new I,Nu=new Be,Qo=new Qa,xa=new Hn;class gc extends dt{constructor(e=new Lt,t=new Vf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Iu.fromBufferAttribute(t,i-1),Du.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Iu.distanceTo(Du);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;Nu.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(Nu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=f){const N=g.getX(y),L=g.getX(y+1);if(c.fromBufferAttribute(m,N),h.fromBufferAttribute(m,L),Qo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let y=p,T=M-1;y<T;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Qo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Uu=new I,Fu=new I;class Jx extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Uu.fromBufferAttribute(t,i),Fu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(Fu);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zx extends gc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class no extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ou=new Be,Il=new Qa,Ea=new Hn,Ma=new I;class _c extends dt{constructor(e=new Lt,t=new no){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Ou.copy(i).invert(),Il.copy(e.ray).applyMatrix4(Ou);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Ma.fromBufferAttribute(u,m),Bu(Ma,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Ma.fromBufferAttribute(u,g),Bu(Ma,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bu(s,e,t,n,i,r,a){const o=Il.distanceSqToPoint(s);if(o<t){const l=new I;Il.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Xs extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ae:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],a=[],o=new I,l=new Be;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ut(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ut(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zf extends ai{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ae,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qx extends zf{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Sa=new I,el=new vc,tl=new vc,nl=new vc;class Hf extends ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Sa.subVectors(i[0],i[1]).add(i[0]),c=Sa);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Sa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),el.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),tl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),nl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),tl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),nl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(el.calc(l),tl.calc(l),nl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ku(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function eE(s,e){const t=1-s;return t*t*e}function tE(s,e){return 2*(1-s)*s*e}function nE(s,e){return s*s*e}function _r(s,e,t,n){return eE(s,e)+tE(s,t)+nE(s,n)}function iE(s,e){const t=1-s;return t*t*t*e}function sE(s,e){const t=1-s;return 3*t*t*s*e}function rE(s,e){return 3*(1-s)*s*s*e}function aE(s,e){return s*s*s*e}function vr(s,e,t,n,i){return iE(s,e)+sE(s,t)+rE(s,n)+aE(s,i)}class oE extends ai{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,i.x,r.x,a.x,o.x),vr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lE extends ai{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(e,i.x,r.x,a.x,o.x),vr(e,i.y,r.y,a.y,o.y),vr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cE extends ai{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hE extends ai{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uE extends ai{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,i.x,r.x,a.x),_r(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gf extends ai{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,i.x,r.x,a.x),_r(e,i.y,r.y,a.y),_r(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dE extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ku(o,l.x,c.x,h.x,u.x),ku(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var fE=Object.freeze({__proto__:null,ArcCurve:Qx,CatmullRomCurve3:Hf,CubicBezierCurve:oE,CubicBezierCurve3:lE,EllipseCurve:zf,LineCurve:cE,LineCurve3:hE,QuadraticBezierCurve:uE,QuadraticBezierCurve3:Gf,SplineCurve:dE});class yc extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,h=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ei extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function M(){const T=new I,N=new I;let L=0;const x=(t-e)/n;for(let S=0;S<=r;S++){const b=[],_=S/r,E=_*(t-e)+e;for(let C=0;C<=i;C++){const w=C/i,U=w*l+o,z=Math.sin(U),G=Math.cos(U);N.x=E*z,N.y=-_*n+m,N.z=E*G,u.push(N.x,N.y,N.z),T.set(z,x,G).normalize(),d.push(T.x,T.y,T.z),f.push(w,1-_),b.push(g++)}v.push(b)}for(let S=0;S<i;S++)for(let b=0;b<r;b++){const _=v[b][S],E=v[b+1][S],C=v[b+1][S+1],w=v[b][S+1];h.push(_,E,w),h.push(E,C,w),L+=6}c.addGroup(p,L,0),p+=L}function y(T){const N=g,L=new ae,x=new I;let S=0;const b=T===!0?e:t,_=T===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;const E=g;for(let C=0;C<=i;C++){const U=C/i*l+o,z=Math.cos(U),G=Math.sin(U);x.x=b*G,x.y=m*_,x.z=b*z,u.push(x.x,x.y,x.z),d.push(0,_,0),L.x=z*.5+.5,L.y=G*.5*_+.5,f.push(L.x,L.y),g++}for(let C=0;C<i;C++){const w=N+C,U=E+C;T===!0?h.push(U,U+1,w):h.push(U+1,U,w),S+=3}c.addGroup(p,S,T===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends ei{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends Lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new I,T=new I,N=new I;for(let L=0;L<t.length;L+=3)f(t[L+0],y),f(t[L+1],T),f(t[L+2],N),l(y,T,N,M)}function l(M,y,T,N){const L=N+1,x=[];for(let S=0;S<=L;S++){x[S]=[];const b=M.clone().lerp(T,S/L),_=y.clone().lerp(T,S/L),E=L-S;for(let C=0;C<=E;C++)C===0&&S===L?x[S][C]=b:x[S][C]=b.clone().lerp(_,C/E)}for(let S=0;S<L;S++)for(let b=0;b<2*(L-S)-1;b++){const _=Math.floor(b/2);b%2===0?(d(x[S][_+1]),d(x[S+1][_]),d(x[S][_])):(d(x[S][_+1]),d(x[S+1][_+1]),d(x[S+1][_]))}}function c(M){const y=new I;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(M),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){const M=new I;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const T=m(M)/2/Math.PI+.5,N=p(M)/Math.PI+.5;a.push(T,1-N)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const y=a[M+0],T=a[M+2],N=a[M+4],L=Math.max(y,T,N),x=Math.min(y,T,N);L>.9&&x<.1&&(y<.2&&(a[M+0]+=1),T<.2&&(a[M+2]+=1),N<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const T=M*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function g(){const M=new I,y=new I,T=new I,N=new I,L=new ae,x=new ae,S=new ae;for(let b=0,_=0;b<r.length;b+=9,_+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),L.set(a[_+0],a[_+1]),x.set(a[_+2],a[_+3]),S.set(a[_+4],a[_+5]),N.copy(M).add(y).add(T).divideScalar(3);const E=m(N);v(L,_+0,M,E),v(x,_+2,y,E),v(S,_+4,T,E)}}function v(M,y,T,N){N<0&&M.x===1&&(a[y]=M.x-1),T.x===0&&T.z===0&&(a[y]=N/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.vertices,e.indices,e.radius,e.details)}}class so extends io{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new so(e.radius,e.detail)}}class xc extends io{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xc(e.radius,e.detail)}}class oi extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let T=0;p===0&&a===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){const L=N/t;u.x=-e*Math.cos(i+L*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+L*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(L+T,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const y=h[p][M+1],T=h[p][M],N=h[p+1][M],L=h[p+1][M+1];(p!==0||a>0)&&f.push(y,T,L),(p!==n-1||l<Math.PI)&&f.push(T,N,L)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ro extends Lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;a.push(v,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ec extends Lt{constructor(e=new Gf(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new ae;let h=new I;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function v(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),M(),p()}function m(y){h=e.getPointAt(y/t,h);const T=a.normals[y],N=a.binormals[y];for(let L=0;L<=i;L++){const x=L/i*Math.PI*2,S=Math.sin(x),b=-Math.cos(x);l.x=b*T.x+S*N.x,l.y=b*T.y+S*N.y,l.z=b*T.z+S*N.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let T=1;T<=i;T++){const N=(i+1)*(y-1)+(T-1),L=(i+1)*y+(T-1),x=(i+1)*y+T,S=(i+1)*(y-1)+T;g.push(N,L,S),g.push(L,x,S)}}function M(){for(let y=0;y<=t;y++)for(let T=0;T<=i;T++)c.x=y/t,c.y=T/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ec(new fE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Mc extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends Mc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gt extends xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ba(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function pE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function mE(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Wf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class zr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gE extends zr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ph,endingEnd:Ph}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lh:r=e,o=2*t-n;break;case Ih:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lh:a=e,l=2*n-t;break;case Ih:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,T=f*m-f*v;for(let N=0;N!==o;++N)r[N]=p*a[h+N]+M*a[c+N]+y*a[l+N]+T*a[u+N];return r}}class _E extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class vE extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _E(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&pE(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ao,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Us;class $s extends Gn{}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ar;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Xf extends Gn{}Xf.prototype.ValueTypeName="color";class ks extends Gn{}ks.prototype.ValueTypeName="number";class yE extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Nt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ji extends Gn{InterpolantFactoryMethodLinear(e){return new yE(this.times,this.values,this.getValueSize(),e)}}ji.prototype.ValueTypeName="quaternion";ji.prototype.DefaultInterpolation=Us;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends Gn{}qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Ar;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends Gn{}Vs.prototype.ValueTypeName="vector";class xE{constructor(e,t=-1,n,i=lg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ME(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=mE(l);l=Vu(l,1,h),c=Vu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ks(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Wf(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new ks(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Vs,f+".position",d,"pos",i),n(ji,f+".quaternion",d,"rot",i),n(Vs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function EE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ks;case"vector":case"vector2":case"vector3":case"vector4":return Vs;case"color":return Xf;case"quaternion":return ji;case"bool":case"boolean":return $s;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ME(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=EE(s.type);if(s.times===void 0){const t=[],n=[];Wf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const vi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class SE{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const bE=new SE;class js{constructor(e){this.manager=e!==void 0?e:bE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}js.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class TE extends Error{constructor(e,t){super(e),this.response=t}}class $f extends js{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Yn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:T})=>{if(y)p.close();else{v+=T.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let L=0,x=h.length;L<x;L++){const S=h[L];S.onProgress&&S.onProgress(N)}p.enqueue(T),M()}})}}});return new Response(m)}else throw new TE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{vi.add(e,c);const h=Yn[e];delete Yn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Yn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class AE extends js{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=wr("img");function l(){h(),vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class qf extends js{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new AE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Hr extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class wE extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const il=new Be,zu=new I,Hu=new I;class Sc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RE extends Sc{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class CE extends Hr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new RE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gu=new Be,cr=new I,sl=new I;class PE extends Sc{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),sl.copy(n.position),sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sl),n.updateMatrixWorld(),i.makeTranslation(-cr.x,-cr.y,-cr.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}}class jf extends Hr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LE extends Sc{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new LE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class IE extends Hr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class DE extends js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(e,l),r.manager.itemStart(e)}}class NE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wu(){return(typeof performance>"u"?Date:performance).now()}const bc="\\[\\]\\.:\\/",UE=new RegExp("["+bc+"]","g"),Tc="[^"+bc+"]",FE="[^"+bc.replace("\\.","")+"]",OE=/((?:WC+[\/:])*)/.source.replace("WC",Tc),BE=/(WCOD+)?/.source.replace("WCOD",FE),kE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),VE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),zE=new RegExp("^"+OE+BE+kE+VE+"$"),HE=["material","materials","bones","map"];class GE{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(UE,"")}static parseTrackName(e){const t=zE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);HE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=GE;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function Xu(s,e){if(e===cg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Al||e===mf){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Al)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Ks extends js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jE(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new oM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=yr.extractUrlBase(e);a=yr.resolveURL(c,this.path)}else a=yr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $f(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kf){try{a[$e.KHR_BINARY_GLTF]=new lM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new EM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new $E;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new cM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new hM;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new uM;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function WE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XE{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],kt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new jf(h),c.distance=u;break;case"spot":c=new CE(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,gi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class $E{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){const i=[];e.color=new xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,je))}return Promise.all(i)}}class qE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}}class KE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class YE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,je)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class JE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class ZE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}}class QE{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class eM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,je)),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class iM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class sM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aM{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class oM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==mn.TRIANGLES&&c.mode!==mn.TRIANGLE_STRIP&&c.mode!==mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Be,m=new I,p=new Nt,M=new I(1,1,1),y=new Yx(g.geometry,g.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,v.compose(m,p,M));for(const T in l)if(T==="_COLOR_0"){const N=l[T];y.instanceColor=new Ll(N.array,N.itemSize,N.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Kf="glTF",hr=12,$u={JSON:1313821514,BIN:5130562};class lM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-hr,r=new DataView(e,hr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===$u.JSON){const c=new Uint8Array(e,hr+a,o);this.content=n.decode(c)}else if(l===$u.BIN){const c=hr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Nl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Nl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ps[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,kt,d)})})}}class hM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Yf extends zr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,M=1-m,y=p-d+u;for(let T=0;T!==o;T++){const N=a[v+T+o],L=a[v+T+l]*h,x=a[g+T+o],S=a[g+T]*h;r[T]=M*N+y*L+m*x+p*S}return r}}const dM=new Nt;class fM extends Yf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return dM.fromArray(r).normalize().toArray(r),r}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qu={9728:mt,9729:Yt,9984:Ai,9985:Ra,9986:Es,9987:Zn},ju={33071:gn,33648:Ia,10497:zn},rl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pM={CUBICSPLINE:void 0,LINEAR:Us,STEP:Ar},al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Mc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),s.DefaultMaterial}function Ni(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function _M(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vM(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ol(t.attributes):e=s.indices+":"+ol(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ol(s.targets[n]);return e}function ol(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ul(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const xM=new Be;class EM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new qf(this.options.manager):this.textureLoader=new DE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $f(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ni(r,o,i),gi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(yr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=rl[i.type],o=Ps[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new $t(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=rl[i.type],c=Ps[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(M);y||(v=new c(o,p*f,i.count*f/h),y=new Of(v,f/h),t.cache.add(M,y)),m=new Rr(y,l,d%f/h,g)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),m=new $t(v,l,g);if(i.sparse!==void 0){const p=rl.SCALAR,M=Ps[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,N=new M(a[1],y,i.sparse.count*p),L=new c(a[2],T,i.sparse.count*l);o!==null&&(m=new $t(m.array.slice(),m.itemSize,m.normalized));for(let x=0,S=N.length;x<S;x++){const b=N[x];if(m.setX(b,L[x*l]),l>=2&&m.setY(b,L[x*l+1]),l>=3&&m.setZ(b,L[x*l+2]),l>=4&&m.setW(b,L[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=qu[d.magFilter]||Yt,h.minFilter=qu[d.minFilter]||Zn,h.wrapS=ju[d.wrapS]||zn,h.wrapT=ju[d.wrapT]||zn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Rt(v);m.needsUpdate=!0,d(m)}),t.load(yr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||yM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new no,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Vf,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],kt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,je)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=tn);const h=r.alphaMode||al.OPAQUE;if(h===al.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===al.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){const u=r.emissiveFactor;o.emissive=new xe().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&a!==Ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,je)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),gi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ni(i,u,r),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ku(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=vM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ku(new Lt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?mM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const M=c[f];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new $x(v,M):new ye(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?p.geometry=Xu(p.geometry,mf):m.mode===mn.TRIANGLE_FAN&&(p.geometry=Xu(p.geometry,Al));else if(m.mode===mn.LINES)p=new Jx(v,M);else if(m.mode===mn.LINE_STRIP)p=new gc(v,M);else if(m.mode===mn.LINE_LOOP)p=new Zx(v,M);else if(m.mode===mn.POINTS)p=new _c(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_M(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),gi(p,r),m.extensions&&Ni(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ni(i,u[0],r),u[0];const d=new ct;r.extensions&&Ni(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(Ng.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new dc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Be;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new mc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let M=0,y=d.length;M<y;M++){const T=d[M],N=f[M],L=g[M],x=v[M],S=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const b=n._createAnimationTracks(T,N,L,x,S);if(b)for(let _=0;_<b.length;_++)p.push(b[_])}return new xE(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new kf:c.length>1?h=new ct:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),gi(h,r),r.extensions&&Ni(n,h,r),r.matrix!==void 0){const u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ct;n.name&&(r.name=i.createUniqueName(n.name)),gi(r,n),n.extensions&&Ni(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof xn||d instanceof Rt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];mi[r.path]===mi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(mi[r.path]){case mi.weights:c=ks;break;case mi.rotation:c=ji;break;case mi.position:case mi.scale:c=Vs;break;default:switch(n.itemSize){case 1:c=ks;break;case 2:case 3:default:c=Vs;break}break}const h=i.interpolation!==void 0?pM[i.interpolation]:Us,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+mi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ul(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ji?fM:Yf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MM(s,e,t){const n=e.attributes,i=new Bt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Ul(Ps[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Ul(Ps[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Hn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ku(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Nl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),gi(s,e),MM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gM(s,e.targets,t):s})}function SM(s=1,e=1){const t=new so(s,0),n=t.attributes.position,i=new I;for(let r=0;r<n.count;r++){i.fromBufferAttribute(n,r);const o=1+(Math.sin(i.x*5.1+e)+Math.cos(i.y*4.3+e*1.7)+Math.sin(i.z*6.2+e*2.3))/6*.25;i.multiplyScalar(o),n.setXYZ(r,i.x,i.y,i.z)}return t.computeVertexNormals(),t}function bM(){const s=new Hf([new I(-.35,-.05,0),new I(-.18,.12,0),new I(0,.18,0),new I(.18,.12,0),new I(.35,-.05,0)]);return new Ec(s,18,.07,7,!1)}const Pa=18,Jf=68,ll=3,Yu=Jf+Pa,TM=new URL("/bananaallergy/assets/grass4-BiI8lLBM.png",import.meta.url).href,ys={trees:[new URL("/bananaallergy/assets/Tree_1-BEAU7sE0.gltf",import.meta.url).href,new URL("/bananaallergy/assets/Tree_2-BzegVaxE.gltf",import.meta.url).href,new URL("/bananaallergy/assets/Tree_3-ClbPr9M0.gltf",import.meta.url).href],rocks:[new URL("/bananaallergy/assets/Rock1-ovJUdmb0.gltf",import.meta.url).href,new URL("/bananaallergy/assets/Rock2-Dw6RIR-9.gltf",import.meta.url).href],shrubs:[new URL("/bananaallergy/assets/Bush-ClsfKB6b.gltf",import.meta.url).href,new URL("/bananaallergy/assets/Plant_2-BCdiMMEh.gltf",import.meta.url).href,new URL("/bananaallergy/assets/Plant_3-DAdbJck_.gltf",import.meta.url).href],grass:[new URL("/bananaallergy/assets/Grass_Big-Cy0kEWc7.gltf",import.meta.url).href,new URL("/bananaallergy/assets/Grass_Small-BlfTukWH.gltf",import.meta.url).href]},Ju=s=>s[Math.floor(Math.random()*s.length)],vt=(s,e)=>s+Math.random()*(e-s),Zu=s=>Math.max(0,Math.min(1,s));function AM(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d");e.fillStyle="#128536",e.fillRect(0,0,256,256);const t=["rgba(18,120,42,.42)","rgba(35,155,55,.34)","rgba(10,95,36,.26)","rgba(68,180,66,.20)"];for(let i=0;i<180;i++){const r=Math.random()*256,a=Math.random()*256,o=vt(10,34),l=vt(5,18);e.fillStyle=t[i%t.length],e.beginPath(),e.ellipse(r,a,o,l,Math.random()*Math.PI,0,Math.PI*2),e.fill()}const n=new Xs(s);return n.colorSpace=je,n.wrapS=zn,n.wrapT=zn,n.magFilter=mt,n.minFilter=Ai,n.repeat.set(2.4,14),n}class wM{constructor(e){this.scene=e,this.root=new ct,e.add(this.root),this.loader=new Ks,this.assetCache=new Map,this.assetWaiters=new Map,this.decorations=[],this.motionTiles=[],this.sideMotionTiles=[],this.pathTexture=null,this.sideTexture=null,this._setupSkyAndFog(),this._loadEnvAssets(),this._buildGround(),this._buildPath(),this._buildCliffs(),this._buildEnvDecorations(),this._buildShadowPlane()}_loadEnvAssets(){const e=[...new Set(Object.values(ys).flat())];for(const t of e)this.assetWaiters.set(t,[]),this.loader.load(t,n=>{const i=n.scene;i.traverse(r=>{if(!r.isMesh)return;r.castShadow=!1,r.receiveShadow=!1;const a=Array.isArray(r.material)?r.material:[r.material];for(const o of a)o&&(o.side=tn,o.roughness=.85,o.metalness=0,o.map&&(o.map.colorSpace=je,o.map.magFilter=mt,o.map.minFilter=Ai))}),this.assetCache.set(t,i);for(const r of this.assetWaiters.get(t)||[])this._attachAsset(r.group,t);this.assetWaiters.set(t,[])},void 0,n=>console.warn("[World] env asset failed:",t,n))}_attachAsset(e,t){var a;for(;e.children.length;)e.remove(e.children[0]);const n=this.assetCache.get(t);if(!n){(a=this.assetWaiters.get(t))==null||a.push({group:e});return}const i=n.clone(!0),r=[];i.traverse(o=>{if(!o.isMesh||!o.material)return;const l=Array.isArray(o.material)?o.material.map(c=>{var h;return((h=c==null?void 0:c.clone)==null?void 0:h.call(c))||c}):[o.material.clone()];for(const c of l)c.transparent=!0,r.push(c);o.material=Array.isArray(o.material)?l:l[0]}),i.position.set(0,0,0),i.rotation.set(0,0,0),e.add(i),e.userData.fadeMaterials=r,this._updateDecorFade(e)}_placeDecor(e,t){const i=(Math.random()<.5?-1:1)*vt(t.xMin,t.xMax),r=vt(-Pa,Jf);e.position.set(i,t.y??0,r),e.rotation.set(0,vt(0,Math.PI*2),0);const a=vt(t.scaleMin,t.scaleMax);e.scale.setScalar(a),e.userData.cfg=t,e.userData.assetUrl=Ju(t.assets),this._attachAsset(e,e.userData.assetUrl)}_setupSkyAndFog(){const e=document.createElement("canvas");e.width=16,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#1f5f91"),n.addColorStop(.35,"#4f9fcd"),n.addColorStop(.7,"#8fc7df"),n.addColorStop(1,"#d7ecd8"),t.fillStyle=n,t.fillRect(0,0,16,512);const i=new Xs(e);i.colorSpace=je,this.scene.background=i,this.scene.fog=new pc(10274773,32,92)}_buildGround(){const n=new ni(28,90,8,28);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let a=0;a<i.count;a++){const o=i.getX(a),l=Math.abs(o)<ll+.55;i.setY(a,l?(Math.random()-.5)*.01:(Math.random()-.5)*.06)}n.computeVertexNormals(),this.sideTexture=AM();const r=new gt({color:16777215,map:this.sideTexture,flatShading:!0});this.ground=new ye(n,r),this.ground.position.set(0,-.05,25),this.root.add(this.ground)}_buildPath(){const e=new ni(ll*2+.6,90,8,58);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let a=0;a<t.count;a++)t.setY(a,(Math.random()-.5)*.012);e.computeVertexNormals(),this.pathTexture=new qf().load(TM),this.pathTexture.colorSpace=je,this.pathTexture.wrapS=zn,this.pathTexture.wrapT=zn,this.pathTexture.magFilter=mt,this.pathTexture.minFilter=Ai,this.pathTexture.repeat.set(1.25,14);const n=new gt({color:16777215,map:this.pathTexture,flatShading:!0}),i=new ye(e,n);i.position.set(0,.01,25),this.root.add(i);const r=new gt({color:3109928,flatShading:!0});for(const a of[-1,1]){const o=new ni(.4,90,1,1);o.rotateX(-Math.PI/2);const l=new ye(o,r);l.position.set(a*(ll+.1),.025,25),this.root.add(l)}}_buildCliffs(){this.cliffPieces=[];const e=[new gt({color:10849907,flatShading:!0}),new gt({color:8420210,flatShading:!0}),new gt({color:11903107,flatShading:!0}),new gt({color:6252656,flatShading:!0})],t=15;for(const n of[-1,1])for(let i=0;i<t;i++){const r=SM(1.4+Math.random()*1.2,i+(n>0?60:0)),a=e[(i+(n>0?1:0))%e.length].clone();a.transparent=!0;const o=new ye(r,a),l=-Pa+i/t*Yu+vt(-.8,.8);o.position.set(n*vt(8.5,10.5),vt(3.4,7.45),l),o.rotation.set(vt(-.08,.08),vt(0,Math.PI*2),vt(-.08,.08)),o.scale.set(vt(.92,1.55),vt(4.8,7.85),vt(1.45,2.85)),this._updateCliffFade(o),this.cliffPieces.push(o),this.root.add(o)}}_buildEnvDecorations(){const e=[{count:26,assets:ys.trees,xMin:3.8,xMax:5.7,scaleMin:.26,scaleMax:.46},{count:18,assets:ys.trees,xMin:5.3,xMax:8,scaleMin:.22,scaleMax:.38},{count:22,assets:ys.shrubs,xMin:3,xMax:5.5,scaleMin:.18,scaleMax:.38},{count:22,assets:ys.rocks,xMin:3,xMax:6,scaleMin:.35,scaleMax:.85},{count:54,assets:ys.grass,xMin:3,xMax:4.4,scaleMin:.2,scaleMax:.46}];for(const t of e)for(let n=0;n<t.count;n++){const i=new ct;this._placeDecor(i,t),this.decorations.push(i),this.root.add(i)}}_buildShadowPlane(){}_recycle(e){var t,n;if(e.position.z+=Yu,(t=e.userData)!=null&&t.cfg){const i=e.userData.cfg,r=Math.random()<.5?-1:1;e.position.x=r*vt(i.xMin,i.xMax),e.rotation.y=vt(0,Math.PI*2),e.scale.setScalar(vt(i.scaleMin,i.scaleMax)),Math.random()<.45&&(e.userData.assetUrl=Ju(i.assets),this._attachAsset(e,e.userData.assetUrl))}else if((n=e.userData)!=null&&n.sidePatch){const i=e.position.x<0?-1:1;e.position.x=i*vt(3.75,7.2),e.rotation.y=vt(-.18,.18)}else this.motionTiles.includes(e)&&(e.position.x=vt(-2.55,2.55),e.rotation.y=vt(-.08,.08))}_updateCliffFade(e){const i=Zu((66-e.position.z)/18);e.visible=i>.02;const r=Array.isArray(e.material)?e.material:[e.material];for(const a of r)a&&(a.opacity=i,a.depthWrite=i>.96,a.needsUpdate=!0)}_updateDecorFade(e){var r;const i=Zu((66-e.position.z)/18);e.visible=i>.02;for(const a of((r=e.userData)==null?void 0:r.fadeMaterials)||[])a.opacity=i,a.depthWrite=i>.96,a.needsUpdate=!0}update(e,t){const n=-t*e;this.pathTexture&&(this.pathTexture.offset.y=(this.pathTexture.offset.y-t*e*(this.pathTexture.repeat.y/90))%1),this.sideTexture&&(this.sideTexture.offset.y=(this.sideTexture.offset.y-t*e*(this.sideTexture.repeat.y/90))%1);const i=[this.cliffPieces,this.decorations,this.motionTiles,this.sideMotionTiles];for(const r of i)if(r)for(const a of r)a.position.z+=n,a.position.z<-Pa&&this._recycle(a),r===this.cliffPieces?this._updateCliffFade(a):r===this.decorations&&this._updateDecorFade(a)}}const Qu=s=>1-Math.pow(1-s,3),RM=s=>s*s,CM={hips:"CC_Base_Hip",waist:"CC_Base_Waist",spine1:"CC_Base_Spine01",spine2:"CC_Base_Spine02",head:"CC_Base_Head",rightUpperArm:"CC_Base_R_Upperarm",rightForeArm:"CC_Base_R_Forearm",rightHand:"CC_Base_R_Hand",leftUpperArm:"CC_Base_L_Upperarm",leftForeArm:"CC_Base_L_Forearm",leftHand:"CC_Base_L_Hand",rightThigh:"CC_Base_R_Thigh",rightCalf:"CC_Base_R_Calf",rightFoot:"CC_Base_R_Foot",leftThigh:"CC_Base_L_Thigh",leftCalf:"CC_Base_L_Calf",leftFoot:"CC_Base_L_Foot"},Zf={WINDUP:{rightUpperArm:{y:-1.1,z:.5},rightForeArm:{x:-1.05},rightHand:{x:-.2},leftUpperArm:{y:.3,z:-1.42},leftForeArm:{x:-.4},spine2:{x:.04,y:-.28},hips:{y:-.13}},RELEASE:{rightUpperArm:{y:1.2,z:1.08},rightForeArm:{x:-.12},rightHand:{x:.45},leftUpperArm:{y:-.25,z:-1.42},leftForeArm:{x:-.65},spine2:{x:.06,y:.28},hips:{y:.14}},FOLLOW:{rightUpperArm:{y:.45,z:1.38},rightForeArm:{x:-.5},rightHand:{x:.1},leftUpperArm:{y:-.06,z:-1.42},leftForeArm:{x:-.55},spine2:{x:.08,y:.08},hips:{y:.05}}},ur=Object.keys(Zf.WINDUP),ed=.16,PM=.28,LM=.5,IM=.26;class DM{constructor(e,t={}){this.model=e,this.b={},this.base={};for(const[n,i]of Object.entries(CM)){const r=e.getObjectByName(i);r?(this.b[n]=r,this.base[n]=r.quaternion.clone()):console.warn(`[Animator] bone not found: ${i} (${n})`)}console.log("[Animator] mapped:",Object.keys(this.b).join(", ")),e.updateWorldMatrix(!0,!0),this.localAxes={};for(const n of Object.keys(this.b)){const i=new Nt;this.b[n].getWorldQuaternion(i);const r=i.clone().invert();this.localAxes[n]={x:new I(1,0,0).applyQuaternion(r),y:new I(0,1,0).applyQuaternion(r),z:new I(0,0,1).applyQuaternion(r)}}this._poseQ={};for(const[n,i]of Object.entries(Zf)){this._poseQ[n]={};for(const r of ur)this.b[r]&&(this._poseQ[n][r]=this._computeWorldQ(r,i[r]??{}))}if(this.time=0,this.throwT=-1,this._throwStartQ=null,this._throwSpeed=1,this.releaseFired=!1,this.onRelease=null,this.lateralTilt=0,this._debugEl=null,t.debugThrow){const n=document.createElement("div");n.style.cssText="position:fixed;bottom:60px;left:8px;background:#0008;color:#0f0;font:10px monospace;padding:4px 8px;z-index:9999;pointer-events:none;white-space:pre;",document.body.appendChild(n),this._debugEl=n}this._onKey=n=>{n.code==="KeyT"&&this.triggerThrow()},window.addEventListener("keydown",this._onKey)}dispose(){window.removeEventListener("keydown",this._onKey)}setLateralTilt(e){this.lateralTilt=e}triggerThrow(e=.88){if(this.throwT>=0&&this.throwT<ed/this._throwSpeed)return;const t=.88;this._throwSpeed=Math.max(.5,Math.min(4,e/t)),this.throwT=0,this._throwStartQ=null,this.releaseFired=!1}_computeWorldQ(e,t){const n=this.localAxes[e],i=this.base[e];if(!n||!i)return new Nt;const r=new Nt;return t.x&&r.multiply(new Nt().setFromAxisAngle(n.x,t.x)),t.y&&r.multiply(new Nt().setFromAxisAngle(n.y,t.y)),t.z&&r.multiply(new Nt().setFromAxisAngle(n.z,t.z)),i.clone().multiply(r)}_applyWorld(e,t){const n=this.b[e];if(!n||!this.localAxes[e])return;const i=this.localAxes[e],r=new Nt;t.x&&r.multiply(new Nt().setFromAxisAngle(i.x,t.x)),t.y&&r.multiply(new Nt().setFromAxisAngle(i.y,t.y)),t.z&&r.multiply(new Nt().setFromAxisAngle(i.z,t.z)),n.quaternion.copy(this.base[e]).multiply(r)}update(e){this.time+=e;const t=this.time;for(const o of Object.keys(this.b))this.b[o].quaternion.copy(this.base[o]);const n=7.5,i=Math.sin(t*n),r=Math.abs(i),a=Math.sin(t*n+Math.PI);if(this.model.parent&&(this.model.parent.position.y=Math.max(0,-i)*.018),this._applyWorld("rightThigh",{x:i*.46}),this._applyWorld("leftThigh",{x:-i*.46}),this._applyWorld("rightCalf",{x:Math.max(0,-i)*.6}),this._applyWorld("leftCalf",{x:Math.max(0,i)*.6}),this._applyWorld("rightFoot",{x:i*.14}),this._applyWorld("leftFoot",{x:-i*.14}),this._applyWorld("leftUpperArm",{x:a*.48,z:-1.42}),this._applyWorld("rightUpperArm",{x:-a*.48,z:1.42}),this._applyWorld("leftForeArm",{x:-.55-r*.2}),this._applyWorld("rightForeArm",{x:-.55-r*.2}),this._applyWorld("spine2",{x:.08+Math.sin(t*2)*.025}),this._applyWorld("hips",{y:i*.09,z:-this.lateralTilt*.22}),this._applyWorld("head",{x:-.04,z:i*.03}),this.throwT>=0){if(this._throwStartQ===null){this._throwStartQ={};for(const f of ur)this.b[f]&&(this._throwStartQ[f]=this.b[f].quaternion.clone())}this.throwT+=e;const o=this.throwT,l=this._throwSpeed,c=ed/l,h=PM/l,u=LM/l,d=IM/l;if(o<c){const f=Qu(o/c);for(const g of ur){const v=this.b[g];v&&v.quaternion.slerpQuaternions(this._throwStartQ[g]??this.base[g],this._poseQ.WINDUP[g]??this.base[g],f)}}else if(o<h){const f=RM((o-c)/(h-c));for(const g of ur){const v=this.b[g];v&&v.quaternion.slerpQuaternions(this._poseQ.WINDUP[g]??this.base[g],this._poseQ.RELEASE[g]??this.base[g],f)}}else if(o<u){const f=Qu((o-h)/(u-h));for(const g of ur){const v=this.b[g];v&&v.quaternion.slerpQuaternions(this._poseQ.RELEASE[g]??this.base[g],this._poseQ.FOLLOW[g]??this.base[g],f)}}else this.throwT=-1,this._throwStartQ=null;if(!this.releaseFired&&o>=d&&(this.releaseFired=!0,this.onRelease)){const f=new I,g=this.b.rightHand??this.b.rightForeArm;g&&(g.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(g.matrixWorld)),this.onRelease(f)}if(this._debugEl){const f=o<c?"① windup (당김)":o<h?"② SWING→SNAP!":o<u?"③ follow":"done";this._debugEl.textContent=`spd   : ×${l.toFixed(2)}
phase : ${f}
throwT: ${o.toFixed(3)} s
[T]   : re-trigger`}}else this._debugEl&&(this._debugEl.textContent=`throw : idle
[T]   : trigger`)}}const td=2.2,NM=2.7,UM="/bananaallergy/assets/models/ammang.glb";class FM{constructor(e,t){this.scene=e,this.input=t,this.root=new ct,this.root.position.set(0,0,0),e.add(this.root);const n=new ye(new yc(.32,16),new Ft({color:0,transparent:!0,opacity:.28}));n.rotation.x=-Math.PI/2,n.position.y=.005,this.root.add(n),this.model=null,this.animator=null,this.x=0,this.lastX=0,this.throwTimer=0,this._hitFlashTimer=0,this._hpLabelValue=null,this._hpLabel=this._makeHpLabel(),this.root.add(this._hpLabel),this._loadModel()}_makeHpLabel(){const e=new Xs(document.createElement("canvas")),t=new Bs({map:e,transparent:!0,depthTest:!1}),n=new Cr(t);return n.position.set(0,1.38,-.26),n.scale.set(1.48,.49,1),n.renderOrder=20,n}_updateHpLabel(e){const t=Math.ceil(e||0);if(this._hpLabelValue===t)return;this._hpLabelValue=t;const n=this._hpLabel.material.map.image;n.width=256,n.height=96;const i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),i.font='700 48px "Press Start 2P", monospace',i.textAlign="center",i.textBaseline="middle",i.lineWidth=2.5,i.lineJoin="round",i.strokeStyle="#222222",i.fillStyle="#f7fff0",i.shadowColor="rgba(0,0,0,.35)",i.shadowBlur=1,i.shadowOffsetY=1,i.strokeText(String(t),128,52),i.shadowBlur=0,i.fillText(String(t),128,52),this._hpLabel.material.map.needsUpdate=!0}_showToast(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"))}_loadModel(){new Ks().load(UM,t=>{const n=t.scene,i=new ct;i.add(n);const a=new Bt().setFromObject(n).getSize(new I);let o=null,l=null;if(n.traverse(g=>{if(!g.isBone)return;const v=g.name.toLowerCase();!o&&v.includes("head")&&!v.includes("twist")&&(o=g),!l&&(v.includes("hip")||v.includes("pelvis"))&&(l=g)}),n.updateWorldMatrix(!0,!0),o&&l){const g=new I;o.getWorldPosition(g);const v=new I;l.getWorldPosition(v);const m=g.clone().sub(v);console.log("[Player] up vector (hip→head):",m.x.toFixed(3),m.y.toFixed(3),m.z.toFixed(3));const p=Math.abs(m.x),M=Math.abs(m.y),y=Math.abs(m.z);M>p&&M>y?m.y<0&&(n.rotation.z=Math.PI):p>M&&p>y?n.rotation.z=m.x>0?-Math.PI/2:Math.PI/2:n.rotation.x=m.z>0?-Math.PI/2:Math.PI/2}const h=new Bt().setFromObject(i).getSize(new I),u=.65,d=u/Math.max(.01,h.y);i.scale.setScalar(d);const f=new Bt().setFromObject(i);i.position.y-=f.min.y,o?new I(0,0,1).transformDirection(o.matrixWorld).z<0&&(i.rotation.y=Math.PI):i.rotation.y=Math.PI,this.root.add(i),this.modelWrap=i,this.model=n,console.log("[Player] raw size:",a,"targetH:",u,"scale:",d),this.animator=new DM(n,{debugThrow:!1})},void 0,t=>{console.error("GLB load failed",t),this._showToast("GLB load failed");const n=new ye(new Xt(.6,1.6,.4),new Ft({color:16711935,wireframe:!0}));n.position.y=.8,this.root.add(n)})}update(e,t){const n=t?t.moveSpeed:1;t&&this._updateHpLabel(t.hp),this.input.update(e,n),this._hitFlashTimer>0&&(this._hitFlashTimer-=e,this._setModelTint(Math.floor(this._hitFlashTimer*16)%2===0),this._hitFlashTimer<=0&&this._setModelTint(!1));const i=-this.input.dir;this.x=Math.max(-td,Math.min(td,this.x+i*NM*n*e)),this.root.position.x=this.x;const r=(this.x-this.lastX)/Math.max(e,.001);if(this.lastX=this.x,this.animator){const a=Math.max(-1,Math.min(1,r/6));this.animator.setLateralTilt(a),this.animator.update(e)}}triggerThrow(e=.88){this.animator&&this.animator.triggerThrow(e)}flashHit(){this._hitFlashTimer=.52}_setModelTint(e){this.modelWrap&&this.modelWrap.traverse(t=>{if(!t.isMesh||!t.material)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)i&&(!i.userData._baseColor&&i.color&&(i.userData._baseColor=i.color.clone()),i.color&&i.userData._baseColor&&(i.color.copy(i.userData._baseColor),e&&i.color.lerp(new xe(16719647),.62)))})}}let lt=null,Fn=null,Fl="";const Ol={},Bl={},kl={},cl={},OM={title:"/bananaallergy/assets/sound/login_title.mp3",game:"/bananaallergy/assets/sound/run_bgm.mp3"},Qf={gate:new URL("/bananaallergy/assets/%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%90%E1%85%A1%E1%84%85%E1%85%B5-cfWR7Ztt.aac",import.meta.url).href,chest:new URL("/bananaallergy/assets/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A1-CS2fPFjF.aac",import.meta.url).href,augmentSelect:new URL("/bananaallergy/assets/%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%80%E1%85%A1%E1%86%BC-CYCJZXlP.aac",import.meta.url).href,hurt:new URL("/bananaallergy/assets/%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF%E1%84%84%E1%85%A2-D-BHOkJE.aac",import.meta.url).href,monsterKill:new URL("/bananaallergy/assets/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%84%8C%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF%E1%84%84%E1%85%A2-C7Hi_mUi.aac",import.meta.url).href,gameover:new URL("/bananaallergy/assets/%E1%84%8C%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF%E1%84%84%E1%85%A2-C9pXLebf.aac",import.meta.url).href};function BM(){if(lt)return;const s=window.AudioContext||window.webkitAudioContext;s&&(lt=new s)}function Vl(){BM(),lt&&lt.state==="suspended"&&lt.resume(),Ac()}function ep(){for(const[s,e]of Object.entries(OM)){if(Ol[s])continue;const t=new Audio(e);t.loop=!0,t.preload="auto",t.volume=s==="game"?.36:.42,t.load(),Ol[s]=t}}function Ac(){for(const[s,e]of Object.entries(Qf)){if(!Bl[s]){const t=new Audio(e);t.preload="auto",t.volume=s==="gameover"?.72:.62,t.load(),Bl[s]=t}!lt||kl[s]||cl[s]||(cl[s]=fetch(e).then(t=>t.arrayBuffer()).then(t=>lt.decodeAudioData(t)).then(t=>{kl[s]=t}).catch(()=>{}).finally(()=>{cl[s]=null}))}}function kM(s){return s==="gameover"?.72:s==="monsterKill"?.54:.62}function VM(s){const e=kl[s];if(!e||!lt)return!1;const t=lt.createBufferSource(),n=lt.createGain();return t.buffer=e,n.gain.value=kM(s),t.connect(n),n.connect(lt.destination),t.start(),!0}function zM(s){const e=Bl[s];if(!e)return!1;const t=e.cloneNode();return t.volume=e.volume,t.play().catch(()=>{}),!0}function HM(s){if(ep(),Fl===s&&Fn&&!Fn.paused)return;GM();const e=Ol[s];e&&(Fl=s,Fn=e,Fn.currentTime=Fn.currentTime||0,Fn.play().catch(()=>{}))}function GM(){Fn&&(Fn.pause(),Fn.currentTime=0),Fn=null,Fl=""}function ve(s=440,e=.08,t="sine",n=.12,i=null){if(!lt)return;const r=lt.currentTime,a=lt.createOscillator(),o=lt.createGain();a.type=t,a.frequency.setValueAtTime(s,r),i&&a.frequency.exponentialRampToValueAtTime(Math.max(20,i),r+e),o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(n,r+.01),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(lt.destination),a.start(r),a.stop(r+e+.02)}function Ht(s=.08,e=.12,t=900,n="lowpass"){if(!lt)return;const i=lt.currentTime,r=Math.max(1,Math.floor(lt.sampleRate*s)),a=lt.createBuffer(1,r,lt.sampleRate),o=a.getChannelData(0);for(let u=0;u<r;u++)o[u]=(Math.random()*2-1)*(1-u/r);const l=lt.createBufferSource();l.buffer=a;const c=lt.createBiquadFilter();c.type=n,c.frequency.value=t;const h=lt.createGain();h.gain.setValueAtTime(e,i),h.gain.exponentialRampToValueAtTime(1e-4,i+s),l.connect(c),c.connect(h),h.connect(lt.destination),l.start(i),l.stop(i+s+.02)}function Ge(s){if(lt){if(Qf[s]){if(Ac(),VM(s))return;if(s==="monsterKill"){ve(260,.05,"square",.05,180),Ht(.06,.05,900,"bandpass");return}if(zM(s))return}switch(s){case"start":ve(392,.07,"square",.08),setTimeout(()=>ve(587,.08,"square",.08),70),setTimeout(()=>ve(784,.12,"square",.09),135);break;case"uiClick":ve(520,.035,"square",.045),setTimeout(()=>ve(680,.045,"triangle",.04),45);break;case"upgrade":ve(622,.055,"square",.065),setTimeout(()=>ve(830,.06,"square",.06),55),setTimeout(()=>ve(1046,.09,"triangle",.055),115);break;case"gameStart":ve(392,.07,"square",.075),setTimeout(()=>ve(523,.07,"square",.08),70),setTimeout(()=>ve(659,.08,"square",.085),140),setTimeout(()=>ve(1046,.16,"triangle",.08),230),Ht(.11,.03,4800,"highpass");break;case"banana":ve(760,.045,"triangle",.035,980),Ht(.025,.015,2600,"highpass");break;case"bananaHit":ve(820,.045,"square",.055,420),setTimeout(()=>ve(1180,.035,"triangle",.04,760),35),Ht(.045,.045,2400,"bandpass");break;case"batHit":ve(1550,.035,"sine",.045,980),setTimeout(()=>ve(1260,.035,"sine",.04,760),34),Ht(.045,.025,5200,"bandpass");break;case"llamaSpit":ve(360,.035,"triangle",.035,250),Ht(.045,.028,900,"bandpass");break;case"poopCharge":ve(170,.06,"sawtooth",.035,230),Ht(.035,.018,420,"lowpass");break;case"poopFire":ve(130,.08,"sawtooth",.07,90),Ht(.09,.07,520,"lowpass");break;case"poopHit":ve(145,.075,"sawtooth",.085,70),setTimeout(()=>ve(78,.055,"square",.055,48),45),Ht(.14,.105,520,"lowpass");break;case"chest":ve(659,.06,"triangle",.07),setTimeout(()=>ve(988,.12,"triangle",.08),55),Ht(.06,.025,3200,"highpass");break;case"gate":ve(440,.06,"square",.06),setTimeout(()=>ve(660,.08,"square",.05),50);break;case"augmentCommon":ve(420,.08,"triangle",.07),setTimeout(()=>ve(560,.08,"triangle",.06),80);break;case"augmentGold":ve(523,.07,"triangle",.08),setTimeout(()=>ve(784,.07,"triangle",.08),70),setTimeout(()=>ve(1046,.12,"triangle",.08),140),Ht(.12,.035,4200,"highpass");break;case"augmentPrism":ve(523,.07,"sine",.075),setTimeout(()=>ve(784,.07,"sine",.08),65),setTimeout(()=>ve(1175,.09,"sine",.085),130),setTimeout(()=>ve(1760,.22,"sine",.085),210),Ht(.28,.055,6400,"highpass");break;case"synergyCelebrate":ve(523,.08,"square",.075),setTimeout(()=>ve(659,.08,"square",.075),70),setTimeout(()=>ve(784,.1,"square",.08),140),setTimeout(()=>ve(1046,.14,"triangle",.085),220),setTimeout(()=>ve(1568,.18,"sine",.075),330),Ht(.22,.05,5200,"highpass"),setTimeout(()=>Ht(.2,.035,2600,"bandpass"),160);break;case"hurt":ve(180,.14,"sawtooth",.09,80),Ht(.08,.05,700,"lowpass");break;case"kill":ve(260,.05,"square",.05,180),Ht(.06,.05,900,"bandpass");break;case"boss":ve(100,.18,"sawtooth",.11,65),setTimeout(()=>ve(90,.18,"sawtooth",.1,55),160);break;case"bossShot":ve(260,.08,"sawtooth",.07,120),setTimeout(()=>ve(520,.05,"square",.045,310),55),Ht(.09,.035,900,"bandpass");break;case"gameover":ve(300,.18,"sawtooth",.08,120),setTimeout(()=>ve(190,.22,"sawtooth",.08,70),160);break;case"clear":ve(523,.08,"square",.08),setTimeout(()=>ve(659,.08,"square",.08),80),setTimeout(()=>ve(784,.08,"square",.08),160),setTimeout(()=>ve(1046,.18,"square",.09),240);break}}}const hl=26,nd=40,WM=100;function XM(s){if(s<=1)return[0];const e=Math.min(.22,.82/Math.max(1,s-1));return Array.from({length:s},(t,n)=>(n-(s-1)/2)*e)}function $M(s){return Math.min(2,Math.max(1,((s==null?void 0:s.bananaRange)||.384)/.384))}class ti{constructor(e){this.scene=e;const t=bM(),n=new gt({color:16110394,flatShading:!0,emissive:3351040,emissiveIntensity:.4});this.bananaGeom=t,this.bananaMat=n,this.poopShotGeom=new Vr(.16,.34,9),this.poopShotMat=new gt({color:7025941,flatShading:!0}),this.pool=[];for(let c=0;c<nd;c++){const h=new ye(t,n);h.visible=!1,h.userData={life:0,vz:0,mini:!1,rangeLeft:0,bornZ:0,hitCounter:0},e.add(h),this.pool.push(h)}const i=new Lt,r=nd*8;i.setAttribute("position",new $t(new Float32Array(r*3),3)),this.trailLives=new Float32Array(r),this.trailMax=r,this.trailIdx=0,this.trailGeom=i;const a=new no({color:16773210,size:.28,transparent:!0,opacity:.95,depthWrite:!1,blending:xi});this.trail=new _c(i,a),e.add(this.trail),this.sparkPool=[];const o=new oi(.06,6,4),l=new Ft({color:16771162,transparent:!0,opacity:0,depthWrite:!1,blending:xi});for(let c=0;c<WM;c++){const h=new ye(o,l.clone());h.visible=!1,h.userData={life:0,maxLife:.35,vx:0,vy:0,vz:0},e.add(h),this.sparkPool.push(h)}this._fireTimer=0,this._pending=[]}_setVisual(e,t=!1){e.geometry=t?this.poopShotGeom:this.bananaGeom,e.material=t?this.poopShotMat:this.bananaMat,e.userData.poopShot=t}_emitBananaSpark(e,t=!1){const n=this.sparkPool.find(a=>!a.visible);if(!n)return;const i=t?.11:.18;n.position.set(e.x+(Math.random()-.5)*i,e.y+(Math.random()-.5)*i,e.z-.14-Math.random()*.62);const r=t?.22+Math.random()*.16:.34+Math.random()*.22;n.userData.life=r,n.userData.maxLife=r,n.userData.vx=(Math.random()-.5)*.8,n.userData.vy=.25+Math.random()*.9,n.userData.vz=-2.6-Math.random()*2.8,n.material.opacity=t?.34:.52,n.scale.setScalar(t?.46+Math.random()*.28:.62+Math.random()*.48),n.visible=!0}tryAutoFire(e,t,n,i){var c;t.bananaTimer=(t.bananaTimer||0)-e;const r=t.autoSynergyLevel||((c=t.synergyLevels)==null?void 0:c.auto)||0,a=r>=4?1.4:r>=2?1.2:1,o=t.bananaAS*a;if(t.bananaTimer>0)return!1;t.bananaTimer+=1/Math.max(.1,o);const l=Math.max(.5,Math.min(4,o/.88));return this._pending.push({delay:.38/l,gs:t,playerX:n}),!0}_fireBananas(e,t){var c;Ge("banana"),e.bananaFireCounter=(e.bananaFireCounter||0)+1;const n=Math.round(Math.max(1,e.bananaCount+(e.projectileSynergyBonus||0))),i=XM(n),a=(((c=e.synergyLevels)==null?void 0:c.projectile)||0)>=4&&n>=8?1.2:1,o=e.bananaRange*40*a,l=hl*$M(e);for(let h=0;h<n;h++){const u=this.pool.find(f=>!f.visible);if(!u)break;const d=!!(e.bananaToPoop&&Math.random()<e.bananaToPoop);this._setVisual(u,d),u.position.set(t+i[h],.42,.3),u.scale.setScalar(1),u.userData={life:o/l+h*.05,vz:l,vx:0,mini:!1,poopShot:d,rangeLeft:o,rangeTotal:o,bornZ:.3,hitCounter:0,sparkT:0,delay:h*.05},u.visible=!0,u.rotation.set(0,0,0)}if((e.extraMiniEvery3||e.extraMiniEvery4)&&e.bananaFireCounter%3===0){const h=this.pool.find(u=>!u.visible);h&&(this._setVisual(h,!1),h.position.set(t+.3,.54,.18),h.scale.setScalar(.62),h.userData={life:o/(l*.95),vz:l*.95,vx:0,mini:!0,miniMul:.3,rangeLeft:o,rangeTotal:o,bornZ:.18,hitCounter:0,sparkT:0,delay:.08},h.visible=!0,h.rotation.set(0,0,0))}if(e.dualWield)for(let h=0;h<n;h++){const u=this.pool.find(d=>!d.visible);if(!u)break;this._setVisual(u,!1),u.position.set(t+i[h]+.18,.5,.22),u.scale.setScalar(.68),u.userData={life:o/(l*.95),vz:l*.95,vx:0,mini:!0,miniMul:.2,rangeLeft:o,rangeTotal:o,bornZ:.22,hitCounter:0,sparkT:0,delay:.04+h*.035},u.visible=!0,u.rotation.set(0,0,0)}}spawn(e,t){const n=this.pool.find(r=>!r.visible);if(!n)return;this._setVisual(n,!1);const i=t?t.bananaRange*40:13;n.position.copy(e),n.scale.setScalar(1),n.userData={life:i/hl,vz:hl,mini:!1,rangeLeft:i,rangeTotal:i,bornZ:e.z,hitCounter:0,sparkT:0},n.visible=!0,n.rotation.set(0,0,0)}static physicalDamage(e,t,n,i={}){var h,u;let r=t.armor;const a=(t.debuffArmorFlat||0)>0;if(a&&(r=Math.max(0,r-t.debuffArmorFlat)),!a&&(t.debuffArmorPct||0)>0&&r>0){const d=r*(1-(t.debuffArmorPct||0));r=Math.max(0,r-Math.max(1,Math.ceil(r-d)))}r=Math.max(0,r*(1-n.percentPen)-n.flatPen);let o=e*100/(100+r);const l=((h=n.synergyLevels)==null?void 0:h.armorPen)||0;t.armor>=50&&(o*=l>=4?1.4:l>=2?1.2:1),t.armor>=30&&n.armoredPhysicalBonus&&(o*=1+n.armoredPhysicalBonus);const c=Math.random()<n.crit;if(c&&(o*=n.critDmg),c){const d=((u=n.synergyLevels)==null?void 0:u.crit)||0;d>=4?Math.random()<.2&&(o+=o*.3):d>=2&&(n.critHitCounter=(n.critHitCounter||0)+1,n.critHitCounter%3===0&&(o*=1.2))}return i.rangeT!==void 0&&(o*=ti.rangeDamageMul(n,i.rangeT)),{dmg:o*n.allDamage,isCrit:c}}static rangeDamageMul(e,t=0){var a;const n=((a=e.synergyLevels)==null?void 0:a.range)||0;if(n<2)return 1;const i=n>=4?.4:.2;return 1+(.01+Math.max(0,Math.min(1,t))*(i-.01))}static calcHitDamage(e,t,n){var S,b,_;const r=e.userData.mini?e.userData.miniMul||.2:1;if(e.userData.poopShot){const E=e.userData.rangeTotal||n.bananaRange*40||1,C=Math.max(0,Math.min(1,(e.position.z-(e.userData.bornZ||0))/E)),w=n.poopDamage*(n.poopDamageMul||1)*n.allDamage*r*ti.rangeDamageMul(n,C);return{physical:0,fixed:w,total:w,isCrit:!1}}const a=n.bananaDamage*(n.bananaDamageMul||1);let o=a*r;const l=((S=n.synergyLevels)==null?void 0:S.banana)||0;(l>=4||l>=2)&&(n.bananaRepeatTarget===t?n.bananaRepeatStacks=Math.min(10,(n.bananaRepeatStacks||0)+1):(n.bananaRepeatTarget=t,n.bananaRepeatStacks=0),o*=1+(n.bananaRepeatStacks||0)*.02);const c=((b=n.synergyLevels)==null?void 0:b.projectile)||0,h=n.bananaCount+(n.projectileSynergyBonus||0);c>=4&&h>=5&&(o*=1.15);const u=e.userData.rangeTotal||n.bananaRange*40||1,d=Math.max(0,Math.min(1,(e.position.z-(e.userData.bornZ||0))/u));t.hp/Math.max(1,t.maxHp)<=.3&&n.bananaExecuteBonus&&(o*=1+n.bananaExecuteBonus);const{dmg:f,isCrit:g}=ti.physicalDamage(o,t,n,{rangeT:d});n.bananaHitCounter=(n.bananaHitCounter||0)+1;let v=n.bananaFlatOnHit*r;n.bananaEvery5Flat&&n.bananaHitCounter%5===0&&(v+=n.bananaEvery5Flat*r);let m=0;n.bananaHpScale&&(m+=ti.physicalDamage(n.maxHp*n.bananaHpScale*r,t,n,{rangeT:d}).dmg),n.bananaCurrentHpPct&&(v+=t.hp*n.bananaCurrentHpPct*r),n.bananaFlatRatio&&(v+=a*n.bananaFlatRatio*r);const p=((_=n.synergyLevels)==null?void 0:_.bananaOnHit)||0;p>=4&&(v+=a*.3*r);let M=1;n.bananaTripleProc&&n.bananaHitCounter%3===0&&M++,n.critProc&&g&&M++;let y=1;p>=2&&Math.random()<.2&&(y=1.2);const T=v*y*n.allDamage*M,N=m*M,L=f+N,x=T;return{physical:L,fixed:x,total:L+x,isCrit:g}}checkHits(e){const t=[];for(const n of this.pool)if(n.visible)for(const i of e){if(!i.active)continue;const r=i.type==="mob"?1.25:i.type==="mini"?1.55:1.9,a=i.type==="mob"?1.35:i.type==="mini"?1.65:2.05;if(Math.abs(n.position.x-i.mesh.position.x)<r&&Math.abs(n.position.z-i.mesh.position.z)<a){t.push({proj:n,enemy:i}),n.visible=!1;break}}return t}update(e,t=[],n=null){var r;for(let a=this._pending.length-1;a>=0;a--){const o=this._pending[a];o.delay-=e,o.delay<=0&&(this._fireBananas(o.gs,o.playerX),this._pending.splice(a,1))}for(const a of this.pool){if(!a.visible)continue;if((a.userData.delay||0)>0){a.userData.delay-=e;continue}if(a.userData.life-=e,a.userData.life<=0){a.visible=!1;continue}if((((r=n==null?void 0:n.synergyLevels)==null?void 0:r.banana)||0)>=4&&t.length){let h=null,u=1/0;for(const d of t){if(!d.active||d.mesh.position.z<a.position.z-.5)continue;const f=Math.hypot(d.mesh.position.x-a.position.x,d.mesh.position.z-a.position.z);f<u&&(h=d,u=f)}if(h){const d=Math.max(-8,Math.min(8,(h.mesh.position.x-a.position.x)*7));a.userData.vx=(a.userData.vx||0)+(d-(a.userData.vx||0))*Math.min(1,e*7)}}a.position.x+=(a.userData.vx||0)*e,a.position.z+=a.userData.vz*e,a.rotation.x+=e*12,a.rotation.z+=e*8,a.userData.sparkT=(a.userData.sparkT||0)+e;const o=a.userData.mini?1:2;for(let h=0;h<o;h++)this._emitBananaSpark(a.position,a.userData.mini);const l=3+Math.floor(Math.min(2,a.userData.vz/12)),c=this.trailGeom.attributes.position.array;for(let h=0;h<l;h++){const u=this.trailIdx%this.trailMax,d=.12+Math.random()*.55;c[u*3]=a.position.x+(Math.random()-.5)*.18,c[u*3+1]=a.position.y+(Math.random()-.5)*.18,c[u*3+2]=a.position.z-d,this.trailLives[u]=.48+Math.random()*.18,this.trailIdx++}}for(const a of this.sparkPool){if(!a.visible)continue;if(a.userData.life-=e,a.userData.life<=0){a.visible=!1;continue}a.position.x+=a.userData.vx*e,a.position.y+=a.userData.vy*e,a.position.z+=a.userData.vz*e;const o=a.userData.life/a.userData.maxLife;a.material.opacity=.52*o,a.scale.multiplyScalar(1-e*1.25)}const i=this.trailGeom.attributes.position.array;for(let a=0;a<this.trailMax;a++)this.trailLives[a]>0&&(this.trailLives[a]-=e,this.trailLives[a]<=0&&(i[a*3+1]=-1e3));this.trailGeom.attributes.position.needsUpdate=!0}reset(){for(const t of this.pool)t.visible=!1;for(const t of this.sparkPool)t.visible=!1;this._pending=[],this.trailLives.fill(0);const e=this.trailGeom.attributes.position.array;for(let t=0;t<this.trailMax;t++)e[t*3+1]=-1e3;this.trailGeom.attributes.position.needsUpdate=!0}}function wc(s){const e=new Map,t=new Map,n=s.clone();return tp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function tp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)tp(s.children[n],e.children[n],t)}const cn={mobs:[new URL("/bananaallergy/assets/%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%86%E1%85%A9%E1%86%B81--xDM-hqK.gltf",import.meta.url).href,new URL("/bananaallergy/assets/%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%86%E1%85%A9%E1%86%B82-EmH8KrjS.gltf",import.meta.url).href,new URL("/bananaallergy/assets/%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%86%E1%85%A9%E1%86%B83-Cital-W9.gltf",import.meta.url).href],mini:new URL("/bananaallergy/assets/%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-C4hv22PT.gltf",import.meta.url).href,bosses:[new URL("/bananaallergy/assets/1%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-CLIlCEBN.gltf",import.meta.url).href,new URL("/bananaallergy/assets/2%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-D5rONojL.gltf",import.meta.url).href,new URL("/bananaallergy/assets/3%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-DPHmNR9N.gltf",import.meta.url).href],final:new URL("/bananaallergy/assets/%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-D4s6O3lK.gltf",import.meta.url).href},qM=s=>s[Math.floor(Math.random()*s.length)];function jM(s=1,e=5217082){const t=new ct,n=v=>new gt({color:v,flatShading:!0}),i=n(e),r=n(new xe(e).offsetHSL(0,0,-.1).getHex()),a=n(8018478),o=new ye(new Xt(.85,.95,.55),i);o.position.y=.95,t.add(o);const l=new ye(new Xt(.92,.18,.62),a);l.position.y=.5,t.add(l);const c=new ye(new Xt(.32,.55,.34),r);c.position.set(-.22,.27,0);const h=c.clone();h.position.x=.22,t.add(c,h);const u=new ye(new so(.42,0),i);u.position.y=1.7,t.add(u);const d=n(16774084);for(const v of[-.1,.1]){const m=new ye(new Vr(.05,.16,4),d);m.position.set(v,1.55,.32),m.rotation.x=Math.PI,t.add(m)}const f=new ye(new Xt(.28,.85,.28),i);f.position.set(-.6,1,0);const g=f.clone();return g.position.x=.6,t.add(f,g),t.scale.setScalar(s),t}const zl=.9;function KM(){const s=new ct,e=new ye(new ni(zl+.06,.1),new Ft({color:2236962,depthTest:!1})),t=new ye(new ni(zl,.07),new Ft({color:4517444,depthTest:!1}));return t.position.z=.003,s.add(e,t),s.rotation.x=-.3,s._fg=t,s}function YM(){const s=new ct,e=new gt({color:10465720,flatShading:!0}),t=new gt({color:7307142,flatShading:!0}),n=new ye(new ei(.75,.86,.16,18),t);n.position.y=.08;const i=new ye(new ei(.68,.72,.04,18),e);return i.position.y=.18,s.add(n,i),s}class JM{constructor(e,t,n,i,r,a){this.scene=e,this.type=t,this.maxHp=n,this.hp=n,this.armor=i,this.debuffArmorPct=0,this.debuffArmorFlat=0,this.active=!1,this.sec=0,this.mesh=new ct,this._fallback=jM(r,a),this.mesh.add(this._fallback),this.plate=YM(),this.mesh.add(this.plate),this._visual=null,this._visualCache=new Map,this._targetHeight=1.5,this._plateRadius=1,e.add(this.mesh),this.mesh.visible=!1,this.hpBar=KM(),e.add(this.hpBar),this.hpBar.visible=!1}setVisual(e,t,n){if(this._targetHeight=t,this._plateRadius=n,this.plate.scale.set(n,1,n),this._visual&&(this.mesh.remove(this._visual),this._visual=null),this._fallback.visible=!e,!e)return;const i=e.uuid||e.id,r=this._visualCache.get(i)||this._makeVisual(e,t);this._visualCache.set(i,r),r.parent&&r.parent.remove(r),this._visual=r,this.mesh.add(r)}_makeVisual(e,t){const n=wc(e);n.traverse(l=>{!l.isMesh||!l.material||(l.material=Array.isArray(l.material)?l.material.map(c=>{var h;return((h=c==null?void 0:c.clone)==null?void 0:h.call(c))||c}):l.material.clone())}),n.rotation.y=Math.PI,n.updateWorldMatrix(!0,!0);const r=new Bt().setFromObject(n).getSize(new I),a=t/Math.max(.01,r.y);n.scale.setScalar(a),n.updateWorldMatrix(!0,!0);const o=new Bt().setFromObject(n);return n.position.y-=o.min.y,n}prewarmVisual(e,t){if(!e)return;const n=e.uuid||e.id;this._visualCache.has(n)||this._visualCache.set(n,this._makeVisual(e,t))}activate(e,t,n,i,r,a=null,o=1.5,l=1){this.hp=this.maxHp=n,this.armor=i,this.debuffArmorPct=0,this.debuffArmorFlat=0,this.sec=r,this.active=!0,this._bodyCollided=!1,this._batQueued=!1,this._batHit=!1,this._batLanded=!1,this._llamaHits=0,this.setVisual(a,o,l),this.mesh.position.set(e,0,t),this.mesh.visible=!0,this.hpBar.visible=!1,this._updateBar()}deactivate(){this.active=!1,this.mesh.visible=!1,this.hpBar.visible=!1}takeDamage(e){return e>0&&this.flashHit(),this.hp=Math.max(0,this.hp-e),this._updateBar(),this.hp<=0}flashHit(){var n,i,r;const e=this._visual||this._fallback;if(!e)return;const t=[];(n=e.traverse)==null||n.call(e,a=>{if(!a.isMesh||!a.material)return;const o=Array.isArray(a.material)?a.material:[a.material];for(const l of o)l!=null&&l.color&&t.push(l)});for(const a of t)a.userData._hitFlashBase||(a.userData._hitFlashBase={color:a.color.clone(),emissive:((r=(i=a.emissive)==null?void 0:i.clone)==null?void 0:r.call(i))||null,emissiveIntensity:a.emissiveIntensity||0}),a.color.setHex(16777215),a.emissive&&(a.emissive.setHex(16777215),a.emissiveIntensity=.45);clearTimeout(this._flashTimer),this._flashTimer=setTimeout(()=>{for(const a of t){const o=a.userData._hitFlashBase;o&&(a.color.copy(o.color),a.emissive&&o.emissive&&(a.emissive.copy(o.emissive),a.emissiveIntensity=o.emissiveIntensity),delete a.userData._hitFlashBase)}},100)}_updateBar(){const e=this.hp/this.maxHp,t=this.hpBar._fg;t.scale.x=Math.max(.001,e),t.position.x=-(zl*(1-e))/2,t.material.color.setHex(e>.4?4517444:e>.2?15641122:15606306)}update(e,t){if(!this.active)return;this.mesh.position.z+=t;const n=this.type!=="mob"?Math.sin(performance.now()*.0012)*.04:0;this.mesh.position.y=n,this.hpBar.visible=!1}}function ZM(s,e){const t=Math.max(0,e),n=Math.min(1,t/139);let r=40+5960*Math.pow(n,2.42);t===0&&(r=40);const a=[40,150,620,1800][s];r=Math.max(r,a),t>=138&&(r=6e3);const o=t<10?.08:.12;return t===0||t>=138?Math.round(r):Math.round(r*(1+(Math.random()*2-1)*o))}const QM=[[115,160,245],[380,620,980],[1350,2300,3800],[5200,8200,9e3]],eS=[600,2600,6500],tS=15e3;function id(s){return[0,30,60,95][s]}const nS=[[3,5,8],[18,24,30],[42,52,62],[78,90,100]],iS=[12,45,82];function sS(s){const e=Math.max(0,s);if(e===0)return 0;if(e>=138)return 80;const t=Math.min(1,e/139);return Math.round(80*Math.pow(t,1.85))}const rS={left:-1.5,right:1.5,center:0},As=42,aS=[{type:"mob",size:24,scale:.9,color:5217082},{type:"mini",size:4,scale:1.15,color:2783775},{type:"boss",size:3,scale:1.5,color:8004130},{type:"final",size:1,scale:1.85,color:1706506}];class oS{constructor(e){this.scene=e,this.loader=new Ks,this.assets=new Map,this._pools={};for(const t of aS)this._pools[t.type]=Array.from({length:t.size},()=>new JM(e,t.type,100,0,t.scale,t.color));this._loadAssets()}_loadAssets(){const e=[...cn.mobs,cn.mini,...cn.bosses,cn.final];for(const t of e)this.loader.load(t,n=>{const i=n.scene;i.traverse(r=>{if(!r.isMesh)return;const a=Array.isArray(r.material)?r.material:[r.material];for(const o of a)o&&(o.side=tn,o.roughness=.85,o.metalness=0,o.map&&(o.map.colorSpace=je,o.map.magFilter=mt,o.map.minFilter=Ai))}),this.assets.set(t,i),this._schedulePrewarm()},void 0,n=>console.warn("[Enemy] asset failed:",t,n))}_schedulePrewarm(){const e=()=>this.prewarmVisuals();typeof requestIdleCallback=="function"?requestIdleCallback(e,{timeout:1600}):setTimeout(e,120)}prewarmVisuals(){for(const n of this._pools.mob)for(const i of cn.mobs)n.prewarmVisual(this.assets.get(i),1.85);const e=this.assets.get(cn.mini);for(const n of this._pools.mini)n.prewarmVisual(e,2.65);for(const n of this._pools.boss)cn.bosses.forEach(i=>n.prewarmVisual(this.assets.get(i),3.35));const t=this.assets.get(cn.final);for(const n of this._pools.final)n.prewarmVisual(t,4.1)}_visualFor(e,t=0){if(e==="mob"){const n=qM(cn.mobs);return{proto:this.assets.get(n)??null,height:1.85,plate:1.05}}if(e==="mini")return{proto:this.assets.get(cn.mini)??null,height:2.65,plate:1.35};if(e==="boss"){const n=cn.bosses[Math.min(t,cn.bosses.length-1)];return{proto:this.assets.get(n)??null,height:3.35,plate:1.7}}return e==="final"?{proto:this.assets.get(cn.final)??null,height:4.1,plate:2.05}:{proto:null,height:1.8,plate:1}}get active(){return Object.values(this._pools).flat().filter(e=>e.active)}getFree(e){var t;return((t=this._pools[e])==null?void 0:t.find(n=>!n.active))??null}spawnMob(e,t,n,i,r=As){const a=this.getFree("mob");if(!a)return null;const o=this._visualFor("mob",i);return a.activate(rS[e],r,t,n,i,o.proto,o.height,o.plate),a}spawnMini(e,t,n=As){var a,o;Ge("boss");const i=this.getFree("mini");if(!i)return null;const r=this._visualFor("mini",e);return i.activate(0,n,((a=QM[e])==null?void 0:a[t])??500,((o=nS[e])==null?void 0:o[t])??id(e),e,r.proto,r.height,r.plate),i}spawnSectionBoss(e,t=As){Ge("boss");const n=this.getFree("boss");if(!n)return null;const i=this._visualFor("boss",e);return n.activate(0,t,eS[e]??1300,iS[e]??id(e),e,i.proto,i.height,i.plate),n}spawnFinalBoss(e=As){Ge("boss");const t=this.getFree("final");if(!t)return null;const n=this._visualFor("final",3);return t.activate(0,e,tS,150,3,n.proto,n.height,n.plate),t}update(e,t){const n=-t*e;for(const i of this.active)i.update(e,n),i.mesh.position.z<-8&&i.deactivate()}checkMobCollision(e){for(const t of this.active){if(t.type!=="mob"||t._bodyCollided)continue;const n=t.mesh.position.z;if(n<2.7&&n>-2.4&&Math.abs(t.mesh.position.x-e)<1.35)return t}return null}checkBossCollision(){for(const e of this.active){if(e.type==="mob"||e._bodyCollided)continue;const t=e.type==="final"?4.2:e.type==="boss"?3.6:3.1,n=e.type==="final"?-3:-2.6;if(e.mesh.position.z<t&&e.mesh.position.z>n)return e}return null}finalBossAlive(){return this.active.find(e=>e.type==="final")??null}nearest(e,t,n){let i=null,r=1/0;for(const a of this.active){const o=a.mesh.position.z-t;if(o<0||o>n)continue;const l=Math.hypot(a.mesh.position.x-e,o);l<r&&(i=a,r=l)}return i}}const Ki="0.03",np="ammang_3d_v1_",Rc=[["damage","피해량","바나나 피해 +2",5,[10,25,50,90,150],"banana"],["atkspd","공격속도","바나나 공속 +3%",5,[10,25,50,90,150],"banana"],["projectile","바나나 투사체","시작 투사체 +1",1,[80],"banana"],["fixedHit","바나나 추가딜","적중 시 고정데미지 +5",1,[800],"banana"],["poopDmg","똥 피해","똥 피해 +4",5,[10,25,50,90,150],"poop"],["poopCD","똥 쿨타임","똥 쿨타임 -3%",5,[10,25,50,90,150],"poop"],["poopStart","똥 해금","업글당 시작 똥 +1",3,[60,140,300],"poop"],["poopJackpot","잭팟 똥","10% 확률로 똥 2배피해",1,[800],"poop"],["hp","최대 체력","시작 체력 +15",5,[10,25,50,90,150],"general"],["move","이동 속도","가로 이동속도 +5%",5,[10,25,50,90,150],"general"],["flatPen","방어구 관통력","시작 관통력 +1",5,[10,25,50,90,150],"general"],["crit","치명타","치확 +1%",5,[10,25,50,90,150],"general"],["critDmg","치명타 피해","치피 +2%p",5,[10,25,50,90,150],"general"],["augLuck","행운","증강 고등급 확률 +1%",5,[10,25,50,90,150],"general"],["llamaStart","라마 획득","라마와 함께 시작",1,[500],"general"],["batStart","박쥐 획득","박쥐와 함께 시작",1,[500],"general"]];function Hl(s="tester",e="0000"){const t={};return Rc.forEach(n=>t[n[0]]=0),{nickname:s,code:e,diamond:0,bestScore:0,version:Ki,upgrades:t}}let Pr="",kn=null;function Ms(){return kn}function Cc(s,e="tester",t="0000"){const i={...Hl(e,t),...s||{}};return i.nickname=e,i.code=t,i.version!==Ki&&(i.bestScore=0,i.version=Ki),i.diamond=Math.max(0,Math.floor(i.diamond||0)),i.bestScore=Math.max(0,Math.floor(i.bestScore||0)),i.upgrades={...i.upgrades||{}},Rc.forEach(r=>{i.upgrades[r[0]]===void 0&&(i.upgrades[r[0]]=0)}),i}function ul(s,e=(s==null?void 0:s.nickname)||"tester",t=(s==null?void 0:s.code)||"0000"){return Pr=np+e+"_"+t,kn=Cc(s,e,t),Lr(),kn}function Gl(s,e){Pr=np+s+"_"+e;const t=localStorage.getItem(Pr);return kn=Cc(t?JSON.parse(t):null,s,e),Lr(),kn}function Lr(){kn&&Pr&&localStorage.setItem(Pr,JSON.stringify(kn))}function Ba(s,e){const t=e*(s.maxHpGainMul||1);return s.maxHp+=t,s.hp+=t,t}function ip(s){return(s.bananaASGainMul||1)*((s.autoSynergyLevel||0)>=4?2:1)}function ao(s,e){s.bananaAS*=1+e*ip(s)}function Pc(){return 3.5*.1}function sp(s){return(s.poopCD||0)<=Pc()+1e-6}function xr(s,e){s.poopCD=Math.max(Pc(),(s.poopCD||3.5)*(1-e)),s.poopTimer=Math.min(s.poopTimer||s.poopCD,s.poopCD)}function lS(s){if(s.yellowHellAS)return;const e=s.baseBananaAS||s.bananaAS||.95;s.bananaAS=e+(s.bananaAS-e)*2,s.bananaASGainMul=(s.bananaASGainMul||1)*2,s.yellowHellAS=!0}function cS(){const s=(kn==null?void 0:kn.upgrades)||{};return{maxHp:100+(s.hp||0)*15,hp:100+(s.hp||0)*15,maxHpGainMul:1,baseMaxHpGainMul:1,shield:0,moveSpeed:.7*(1+(s.move||0)*.05),score:0,section:0,bananaDamage:10+(s.damage||0)*2,baseBananaAS:.95*(1+(s.atkspd||0)*.03),bananaAS:.95*(1+(s.atkspd||0)*.03),bananaASGainMul:1,bananaASCap:1/0,yellowHellAS:!1,bananaTimer:0,bananaCount:1+((s.projectile||0)>=1?1:0),bananaRange:.384,bananaDamageMul:1,flatPen:(s.flatPen||0)*1,percentPen:0,armoredBonus:0,bananaExecuteBonus:0,crit:(s.crit||0)*.01,critDmg:1.2+(s.critDmg||0)*.02,bananaFlatOnHit:s.fixedHit?5:0,bananaEvery5Flat:0,bananaHitCounter:0,bananaRepeatTarget:null,bananaRepeatStacks:0,bananaFireCounter:0,bananaHpScale:0,bananaCurrentHpPct:0,bananaFlatRatio:0,bananaTripleProc:!1,critProc:!1,dualWield:!1,bananaToPoop:0,poopUnlocked:(s.poopStart||0)>=1,poopDamage:18+(s.poopDmg||0)*4+((s.poopStart||0)>=1?2:0),poopDamageMul:1,poopCD:3.5*(1-(s.poopCD||0)*.03),poopTimer:3.5*(1-(s.poopCD||0)*.03),poopStored:s.poopStart||0,poopMax:s.poopStart||0,poopRange:.45,poopEveryN:null,poopCount:0,poopBossMul:1,poopSealed:!1,poopSplash:0,poopArmorDebuff:0,poopArmorDebuffPerHit:0,poopPhysicalOnHit:0,poopPhysicalOnHitPct:0,poopMirror:0,poopRainbow:!1,poopExplodePct:0,poopKillRefund:!1,poopJackpot:s.poopJackpot?.1:0,poopSynergyRunId:0,regen:0,bat:s.batStart||0,llama:s.llamaStart||0,batCD:0,llamaCD:0,llamaTimer:0,petEffectMul:1,allDamage:1,tags:{},synergyLevels:{},_survivalSynergyHpMul:1,projectileSynergyBonus:0,gamblerSynergyLevel:0,autoSynergyLevel:0,armoredPhysicalBonus:0,critHitCounter:0,kills:0,killAS:!1,hpOn10Kills:!1,killBananaDamage:0,deathSave:!1,shieldRegen:!1,noHitTime:0,rewardScale:1,augmentTierLuck:(s.augLuck||0)*.01,earnedDia:0,fenceSinceGeneral:0,gateSpawnCount:0,firstPoopStorageOffered:!1,coinBlessing:!1,acquiredAugments:[],_tagApplied:{},phase:"running"}}const hS=[["bananaDamage","바나나 피해",16],["bananaAS","바나나 속도",9],["bananaRange","바나나 사거리",9],["hp","체력",24],["move","이동속도",9]],uS=[["poopMax","똥 저장",18]],dS=[["bananaDamage","바나나 피해",16],["bananaAS","바나나 속도",9],["bananaRange","사거리",9],["poopDamage","똥 피해",12],["poopCD","똥 쿨",10],["poopMax","똥 저장",10],["poopRange","똥 사거리",7],["hp","체력",24],["move","이동속도",9]],fS=new Set(["bananaCount","flatPen","percentPen","crit","critDmg"]);function dl(s,e=null){const t=e&&sp(e)?s.filter(r=>r[0]!=="poopCD"):s;let n=t.reduce((r,a)=>r+a[2],0),i=Math.random()*n;for(const r of t)if(i-=r[2],i<=0)return{key:r[0],label:r[1]};return{key:t[0][0],label:t[0][1]}}function oo(s){return fS.has(s==null?void 0:s.key)?{key:"hp",label:"체력"}:s}function sd(s){return s.poopMax<=0?Math.random()<.22?dl(uS,s):dl(hS,s):dl(dS,s)}function Lc(s){const e=Math.max(0,Math.min(1,((s.gateSpawnCount||1)-1)/119)),t=e*e*(3-2*e);return Math.round(8+92*t)}function rd(s,e,t=null){switch(s=oo(s),s.key){case"bananaDamage":return["바나나 피해","+1"];case"bananaAS":return["바나나 공속","+1"];case"bananaRange":return["바나나 사거리","+1"];case"poopDamage":return["똥 피해","+1"];case"poopMax":return["똥 저장","+1"];case"poopCD":return["똥 쿨","+1"];case"poopRange":return["똥 사거리","+1"];case"hp":return["체력",`+${t?Lc(t):8}`];case"move":return["좌우속도","+1"];default:return[s.label||"체력",""]}}function pS(s,e,t){s=oo(s);const n=t.rewardScale;switch(s.key==="hp"||s.key==="move"?t.fenceSinceGeneral=0:t.fenceSinceGeneral=(t.fenceSinceGeneral||0)+1,s.key){case"bananaDamage":t.bananaDamage+=2*n;break;case"bananaAS":ao(t,.025*n);break;case"bananaRange":t.bananaRange*=1+.01*n;break;case"poopDamage":t.poopUnlocked=!0,t.poopDamage+=3*n;break;case"poopMax":t.poopUnlocked=!0,t.poopMax+=1,t.poopTimer=Math.max(t.poopTimer||0,t.poopCD||4);break;case"poopCD":t.poopUnlocked=!0,xr(t,.03*n*((t.autoSynergyLevel||0)>=4?2:1));break;case"poopRange":t.poopUnlocked=!0,t.poopRange*=1+.01*n;break;case"hp":Ba(t,Lc(t)*n);break;case"move":t.moveSpeed*=1+.1*n;break}Ge("gate")}function mS(s,e,t){s=oo(s);const n=t.rewardScale;switch(s.key){case"bananaDamage":return`바나나 피해 +${2*n}`;case"bananaAS":return`바나나 공격 속도 +${(2.5*n*ip(t)).toFixed(1)}%`;case"bananaRange":return`바나나 사거리 +${(1*n).toFixed(0)}%`;case"poopDamage":return`똥 피해 +${3*n}`;case"poopMax":return"똥 저장 +1";case"poopCD":return`똥 쿨 -${(3*n).toFixed(0)}%`;case"poopRange":return`똥 사거리 +${(1*n).toFixed(0)}%`;case"hp":return`체력 +${Math.round(Lc(t)*n)}`;case"move":return`좌우속도 +${(10*n).toFixed(0)}%`;default:return s.label||""}}function gS(s){return s.includes("바나나")?{fill:"#e86f00",stroke:"#120900"}:s.includes("똥")?{fill:"#005bd1",stroke:"#031326"}:{fill:"#159b2f",stroke:"#041805"}}function ad(s,e,t,n){let i=n;do{if(s.font=`900 ${i}px "PretendardGame", sans-serif`,s.measureText(e).width<=t||i<=34)break;i-=3}while(!0)}function od(s,e,t){const r=document.createElement("canvas");r.width=512,r.height=320;const a=r.getContext("2d"),o="#cf7c24",l=a.createLinearGradient(0,0,0,320);l.addColorStop(0,"#fff6a8"),l.addColorStop(.46,"#ffe877"),l.addColorStop(1,"#f3b347"),a.fillStyle=l,a.fillRect(0,0,512,320),a.fillStyle="rgba(255,255,210,.22)",a.fillRect(0,0,512,320),a.fillStyle="rgba(209,111,23,.12)",a.fillRect(0,320*.68,512,320*.32),a.strokeStyle=o,a.lineWidth=18,a.strokeRect(12,12,488,296),a.strokeStyle="#fff8bc",a.lineWidth=6,a.strokeRect(28,28,456,264);const c=new Xs(r);return c.colorSpace=je,c}function ld(s,e){const t=document.createElement("canvas");t.width=512,t.height=256;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.textAlign="center",n.textBaseline="middle",n.lineJoin="round";const i=gS(s);n.lineWidth=4.5,n.strokeStyle=i.stroke,n.fillStyle=i.fill,ad(n,s,456,72),n.strokeText(s,256,88),n.fillText(s,256,88),ad(n,e,320,54),n.strokeText(e,256,166),n.fillText(e,256,166);const r=new Xs(t);r.colorSpace=je;const a=new Cr(new Bs({map:r,transparent:!0,depthTest:!1}));return a.scale.set(2.75,1.36,1),a.renderOrder=12,a}const Dn=2.3;function _S(s,e,t,n){const i=new ct,r=new gt({color:13994549,flatShading:!0}),a=new gt({color:16769162,flatShading:!0}),o=od(),l=od(),c=new gt({map:o,emissive:1118481,emissiveIntensity:.08}),h=new gt({map:l,emissive:1118481,emissiveIntensity:.08}),u=new Xt(Dn,1.35,.12),d=new ye(u,c);d.position.set(-Dn/2,.96,0),i.add(d);const f=new ye(u.clone(),h);f.position.set(Dn/2,.96,0),i.add(f);const g=ld(s,e);g.position.set(-Dn/2,1.02,-.1),i.add(g);const v=ld(t,n);v.position.set(Dn/2,1.02,-.1),i.add(v);for(const m of[0,-Dn+.06,Dn-.06]){const p=new ye(new ei(.095,.12,1.78,10),r);p.position.set(m,.96,0),i.add(p);const M=new ye(new ei(.14,.1,.18,10),r);M.position.set(m,1.92,0),i.add(M);const y=new ye(new ei(.1,.14,.16,10),r);y.position.set(m,.03,0),i.add(y)}for(const m of[.34,1.58])for(const p of[-Dn/2,Dn/2]){const M=new ye(new ei(.035,.035,Dn*.72,8),a);M.rotation.z=Math.PI/2,M.position.set(p,m,.08),i.add(M)}return i._lp=d,i._rp=f,i._lt=g,i._rt=v,i}const cd=42,vS=.6;class yS{constructor(e,t,n){this.scene=e,this.gs=t,this.onText=n,this._active=[]}_rollOpts(e,t){let n=[sd(e),sd(e)];if(e.poopMax<=0&&e.gateSpawnCount<=2&&(n[Math.random()<.5?0:1]={key:"poopMax",label:"똥 저장"}),e.poopMax<=0)for(let i=0;i<n.length;i++)["poopDamage","poopCD","poopRange"].includes(n[i].key)&&(n[i]={key:"hp",label:"체력"});if((e.fenceSinceGeneral||0)>=8){const i=Math.random()<.5?0:1;n[i].key!=="poopMax"&&(n[i]=Math.random()<.68?{key:"hp",label:"체력"}:{key:"move",label:"이동속도"})}return n.map(oo)}spawnFence(e,t=cd){const n=this.gs;n.gateSpawnCount=(n.gateSpawnCount||0)+1;const i=this._rollOpts(n,e),[r,a]=rd(i[0],e,n),[o,l]=rd(i[1],e,n),c=_S(r,a,o,l),h=Math.min(cd,t);c.position.set(0,0,h),this.scene.add(c),this._active.push({mesh:c,meshZ:h,fired:!1,showTimer:0,opts:i,sec:e})}_remove(e){this.scene.remove(e.mesh),this._active=this._active.filter(t=>t!==e)}update(e,t,n){for(const i of[...this._active]){if(i.meshZ+=-t*e,i.mesh.position.z=i.meshZ,!i.fired&&i.meshZ<=vS){i.fired=!0,i.chosenSide=n<=0?0:1;const r=i.opts[i.chosenSide],a=i.sec??this.gs.section;pS(r,a,this.gs),this.onText&&this.onText(`✦ ${mS(r,a,this.gs)}`,"#ffec61");const o=i.chosenSide===0?i.mesh._lp:i.mesh._rp,l=i.chosenSide===0?i.mesh._rp:i.mesh._lp,c=i.chosenSide===0?i.mesh._lt:i.mesh._rt,h=i.chosenSide===0?i.mesh._rt:i.mesh._lt;o&&(o.material.emissive=new xe(16772676)),o&&(o.material.emissiveIntensity=.9),l&&(l.material.opacity=.25),l&&(l.material.transparent=!0),c&&c.scale.multiplyScalar(1.12),h&&(h.material.opacity=.35)}if(i.fired){i.showTimer+=e;const r=Math.max(0,1-i.showTimer/.5);i.mesh.scale.set(1,r,1),i.showTimer>.55&&this._remove(i)}i.meshZ<-10&&this._remove(i)}}reset(){for(const e of[...this._active])this.scene.remove(e.mesh);this._active=[]}}const xS=new URL("/bananaallergy/assets/Chest_Open-oOf12JEX.gltf",import.meta.url).href,Wl=[["bananaDamageMul","바나나 피해 증폭",24],["bananaAS","공속",12],["bananaRange","사거리",9],["poopDamageMul","똥 피해 증폭",24],["poopCD","똥 쿨",11],["poopRange","똥 사거리",8],["hp","체력",16],["move","이동속도",6],["flatPen","방어구 관통력",3],["percentPen","방어구 관통력",2],["crit","치확",3],["critDmg","치피",2],["dia","다이아",.5]];function ES(s){let e=s.reduce((n,i)=>n+i[2],0),t=Math.random()*e;for(const n of s)if(t-=n[2],t<=0)return{key:n[0],label:n[1]};return{key:s[0][0],label:s[0][1]}}function MS(s){var o;const e=Math.random(),t=(s==null?void 0:s.gamblerSynergyLevel)||((o=s==null?void 0:s.synergyLevels)==null?void 0:o.gambler)||0,n=t>=4?.2:t>=2?.5:.7,i=t>=4?.5:t>=2?.35:.25,r=e<n?1:e<n+i?2:3,a=sp(s)?Wl.filter(l=>l[0]!=="poopCD"):Wl;return{...ES(a),star:r}}const rp=[25,50,85,140],St={bananaDamageMul:[1,2,3],bananaAS:[3,4,6],bananaRange:[3,5,8],poopDamageMul:[1,2,3],poopCD:[5,7,10],poopRange:[3,5,8],crit:[1,2,3],critDmg:[2,4,6],flatPen:[1,2,3],percentPen:[.5,1,1.5]};function Xl(s,e){const t=(s.star||1)-1;switch(s.key){case"bananaDamageMul":return`바나나 피해 증폭 +${St.bananaDamageMul[t]}%`;case"bananaAS":return`바나나 공속 +${St.bananaAS[t]}%`;case"bananaRange":return`바나나 사거리 +${St.bananaRange[t]}%`;case"flatPen":return`방어구 관통력 +${St.flatPen[t]}`;case"percentPen":return`방어구 관통력 +${St.percentPen[t]}%`;case"poopDamageMul":return`똥 피해 증폭 +${St.poopDamageMul[t]}%`;case"poopCD":return`똥 쿨 -${St.poopCD[t]}%`;case"poopRange":return`똥 사거리 +${St.poopRange[t]}%`;case"hp":return`체력 +${(rp[e]||25)*(s.star||1)}`;case"move":return`이동속도 +${6*(s.star||1)}%`;case"crit":return`치명타 확률 +${St.crit[t]}%`;case"critDmg":return`치명타 피해량 +${St.critDmg[t]}%p`;case"dia":return`다이아 +${s.star||1}`;default:return`${s.label}`}}function SS(){const s=[];for(let e=0;e<4;e++)for(let t=1;t<=3;t++)for(const n of Wl){const i={key:n[0],label:n[1],star:t};s.push({reward:i,text:Xl(i,e)})}return s.push({reward:{key:"bananaDamageMul",star:1},text:""}),s}function bS(s,e,t,n){Ge("chest");const i=s.star||1,r=t.rewardScale,a=i-1,o=(rp[e]||25)*i*r;switch(s.key){case"bananaDamageMul":t.bananaDamageMul*=1+St.bananaDamageMul[a]/100*r;break;case"bananaAS":ao(t,St.bananaAS[a]/100*r);break;case"bananaRange":t.bananaRange*=1+St.bananaRange[a]/100*r;break;case"flatPen":t.flatPen+=St.flatPen[a]*r;break;case"percentPen":t.percentPen+=St.percentPen[a]/100*r;break;case"poopDamageMul":t.poopUnlocked=!0,t.poopDamageMul*=1+St.poopDamageMul[a]/100*r;break;case"poopCD":t.poopUnlocked=!0,xr(t,St.poopCD[a]/100*r*((t.autoSynergyLevel||0)>=4?2:1));break;case"poopRange":t.poopUnlocked=!0,t.poopRange*=1+St.poopRange[a]/100*r;break;case"hp":Ba(t,o);break;case"move":t.moveSpeed*=1+.06*i;break;case"crit":t.crit+=St.crit[a]/100;break;case"critDmg":t.critDmg+=St.critDmg[a]/100;break;case"dia":n&&n(i);break}}const TS=[3368669,11158783,16755200],AS=8015390,wS=5583886,RS=13936455,fl=new Map,CS="balanced-tier-v1",PS=new ro(.62,.035,6,28),LS=new ro(.86,.025,6,36),IS=new xc(.08,0);function DS(s){return s!=null&&s.startsWith("banana")?{fill:"#e86f00",stroke:"#120900"}:s==="flatPen"||s==="percentPen"?{fill:"#e86f00",stroke:"#120900"}:s!=null&&s.startsWith("poop")?{fill:"#005bd1",stroke:"#031326"}:{fill:"#159b2f",stroke:"#041805"}}function NS(s){const e=String(s).match(/^(.+?)\s*([+-].+)$/);return e?[e[1].trim(),e[2].trim()]:[String(s),""]}function hd(s,e,t,n){let i=n;do{if(s.font=`900 ${i}px "PretendardGame", sans-serif`,s.measureText(e).width<=t||i<=32)break;i-=3}while(!0)}function pr(s,e,t){const n=`${CS}|${e}|${t}|${s}`;if(fl.has(n))return fl.get(n);const i=512,r=210,a=document.createElement("canvas");a.width=i,a.height=r;const o=a.getContext("2d");o.clearRect(0,0,i,r);const l=e===3?{fill0:"#68408f",fill1:"#b982e7",border:"#5b2188",inner:"#ead0ff",glow:"rgba(190,116,255,.42)"}:e===2?{fill0:"#efd073",fill1:"#fff0a8",border:"#8a5607",inner:"#fff8c9",glow:"rgba(226,166,35,.22)"}:{fill0:"#8f9797",fill1:"#c5cdcc",border:"#5c686c",inner:"#dfe5e3",glow:"rgba(50,60,65,.08)"},c=o.createLinearGradient(0,0,0,r);c.addColorStop(0,l.fill1),c.addColorStop(1,l.fill0),o.fillStyle=c,o.beginPath(),o.roundRect(8,8,i-16,r-16,18),o.fill(),o.fillStyle=e===1?"rgba(255,255,255,.08)":"rgba(255,255,255,.07)",o.beginPath(),o.roundRect(18,18,i-36,58,12),o.fill(),o.strokeStyle=l.border,o.lineWidth=8,o.beginPath(),o.roundRect(8,8,i-16,r-16,18),o.stroke(),o.strokeStyle=l.inner,o.lineWidth=3,o.beginPath(),o.roundRect(20,20,i-40,r-40,12),o.stroke(),e>=2&&(o.shadowColor=l.glow,o.shadowBlur=e===3?18:10,o.strokeStyle=l.border,o.lineWidth=3,o.beginPath(),o.roundRect(8,8,i-16,r-16,18),o.stroke(),o.shadowBlur=0);const[h,u]=NS(s);o.textAlign="center",o.lineJoin="round",o.shadowColor="transparent",o.shadowBlur=0;const d=DS(t);o.strokeStyle=d.stroke,o.lineWidth=4,o.fillStyle=d.fill,hd(o,h,i-54,62),o.strokeText(h,i/2,88),o.fillText(h,i/2,88),u&&(o.strokeStyle=d.stroke,o.lineWidth=4,o.fillStyle=d.fill,hd(o,u,i-100,72),o.strokeText(u,i/2,158),o.fillText(u,i/2,158));const f=new Xs(a);return f.colorSpace=je,f.needsUpdate=!0,fl.set(n,f),f}function ud(s,e,t="bananaDamageMul"){const n=new ct,i=TS[(s||1)-1],r=new gt({color:AS,flatShading:!0});new gt({color:wS,flatShading:!0});const a=new gt({color:RS,flatShading:!0}),o=new ye(new Xt(.6,.3,.46),r);o.position.y=.15,n.add(o);const l=new gt({color:i,flatShading:!0,emissive:new xe(i),emissiveIntensity:.22}),c=new ye(new Xt(.62,.18,.48),l);c.position.y=.39,n.add(c);const h=new ye(new Xt(.64,.06,.5),a);h.position.y=.28,n.add(h);const u=new ye(new Xt(.06,.36,.04),a);u.position.set(0,.18,.25),n.add(u);const d=new ye(new Xt(.1,.1,.06),a);d.position.set(0,.28,.27),n.add(d);for(const[f,g]of[[-.27,.09],[.27,.09],[-.27,.27],[.27,.27]]){const v=new ye(new Xt(.06,.06,.04),a);v.position.set(f,g,.26),n.add(v)}if(e){const f=pr(e,s||1,t),g=new Bs({map:f,transparent:!0,depthTest:!1,toneMapped:!1}),v=new Cr(g);v.scale.set(2.85,1.16,1),v.position.y=1.45,n.add(v),n._labelSprite=v}return n}const US=20;class FS{constructor(e,t,n,i){this.scene=e,this.gs=t,this.onText=n,this.onEarnDia=i,this._pool=[],this._chestAsset=null,this._renderer=null,this._camera=null,this._prewarmed=!1,this._loadChestAsset();for(let r=0;r<US;r++){const a=new ct;a.visible=!1,a._visual=null,a._labelSprite=null,a.userData={active:!1,reward:null,bobT:0,sec:0,chestText:""},e.add(a),this._pool.push(a)}this._schedulePrewarm()}get active(){return this._pool.filter(e=>e.userData.active)}_loadChestAsset(){new Ks().load(xS,e=>{this._chestAsset=e.scene,this._chestAsset.traverse(t=>{if(!t.isMesh)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)i&&(i.side=tn,i.roughness=.85,i.metalness=0,i.map&&(i.map.colorSpace=je,i.map.magFilter=mt,i.map.minFilter=Ai))});for(const t of this._pool){if(t._usingFallback){for(;t.children.length;)t.remove(t.children[0]);t._visual=null,t._labelSprite=null,t._tierDecor=null,t._usingFallback=!1}this._ensureChestVisual(t)}this._prewarmed=!1,this._schedulePrewarm()},void 0,e=>console.warn("[BoxSystem] chest asset failed:",e))}setRenderer(e,t=null){this._renderer=e,this._camera=t,this._schedulePrewarm()}_schedulePrewarm(){const e=()=>this.prewarm();typeof requestIdleCallback=="function"?requestIdleCallback(e,{timeout:1200}):setTimeout(e,80)}prewarm(){var e;if(!this._prewarmed){for(const{reward:t,text:n}of SS()){const i=pr(n,t.star||1,t.key);(e=this._renderer)!=null&&e.initTexture&&this._renderer.initTexture(i)}for(const t of this._pool){this._ensureChestVisual(t);for(let n=1;n<=3;n++)this._applyTierVisual(t,{star:n});t.visible=!1,t.userData.active=!1}if(this._renderer&&this._camera){const t=this._pool.map(n=>({visible:n.visible,x:n.position.x,y:n.position.y,z:n.position.z}));this._pool.forEach((n,i)=>{n.position.set(i%5*2-4,-1e3,Math.floor(i/5)*2),n.visible=!0}),this._renderer.compile(this.scene,this._camera),this._pool.forEach((n,i)=>{n.visible=t[i].visible,n.position.set(t[i].x,t[i].y,t[i].z)})}this._prewarmed=!0}}_buildChestVisual(e,t){const n=new ct;if(this._chestAsset){const i=this._chestAsset.clone(!0);if(i.scale.setScalar(.52),i.rotation.y=Math.PI,n.add(i),t){const r=pr(t,e.star||1,e.key),a=new Bs({map:r,transparent:!0,depthTest:!1,toneMapped:!1}),o=new Cr(a);o.scale.set(2.9,1.2,1),o.position.y=1.65,n.add(o),n._labelSprite=o}}else{const i=ud(e.star,t,e.key);[...i.children].forEach(r=>n.add(r)),i._labelSprite&&(n._labelSprite=i._labelSprite)}return n}_ensureChestVisual(e){if(e._visual)return;if(this._chestAsset){const r=this._chestAsset.clone(!0);r.scale.setScalar(.52),r.rotation.y=Math.PI,e.add(r),e._visual=r,e._usingFallback=!1}else[...ud(1,"").children].forEach(a=>e.add(a)),e._visual=e.children[0]??!0,e._usingFallback=!0;const t=pr("",1,"bananaDamage"),n=new Bs({map:t,transparent:!0,depthTest:!1,toneMapped:!1}),i=new Cr(n);i.scale.set(2.9,1.2,1),i.position.y=1.65,e.add(i),e._labelSprite=i,this._ensureTierDecor(e)}_ensureTierDecor(e){if(e._tierDecor)return;const t=new Ft({color:3368669,transparent:!0,opacity:.75,depthWrite:!1,blending:xi}),n=new Ft({color:3368669,transparent:!0,opacity:0,depthWrite:!1,blending:xi}),i=new Ft({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:xi}),r=new ye(PS,t);r.rotation.x=Math.PI/2,r.position.y=.06;const a=new ye(LS,n);a.rotation.x=Math.PI/2,a.position.y=.78;const o=[];for(let c=0;c<5;c++){const h=new ye(IS,i.clone()),u=c/5*Math.PI*2;h.position.set(Math.cos(u)*.78,.9+c%2*.18,Math.sin(u)*.42),o.push(h),e.add(h)}const l=new jf(8965375,0,3.2);l.position.set(0,.75,0),e.add(r,a,l),e._tierDecor={ring:r,halo:a,sparks:o,light:l}}_applyTierVisual(e,t){this._ensureTierDecor(e);const n=t.star||1,i=n===3?16729343:n===2?16759861:4885759,r=n===3?5242111:n===2?16773274:8369407,a=e._tierDecor;a.ring.material.color.setHex(i),a.ring.material.opacity=n===1?.65:.95,a.ring.scale.setScalar(n===1?1:n===2?1.08:1.2),a.halo.visible=n>=2,a.halo.material.color.setHex(n===3?r:i),a.halo.material.opacity=n===2?.22:.48,a.halo.scale.setScalar(n===3?1.15:1),a.light.color.setHex(r),a.light.intensity=n===1?0:n===2?.55:1.1,a.sparks.forEach((o,l)=>{o.visible=n===3,o.material.color.setHex(l%2?i:r),o.material.opacity=n===3?.9:0})}trySpawn(e,t=.4){if(Math.random()>t)return;const n=this._pool.find(o=>!o.userData.active);if(!n)return;const i=MS(this.gs),r=this.gs.section,a=Xl(i,r);this._ensureChestVisual(n),this._applyTierVisual(n,i),n._labelSprite&&(n._labelSprite.material.map=pr(a,i.star||1,i.key),n._labelSprite.material.needsUpdate=!0),n.position.set(e.x+(Math.random()-.5)*.4,0,e.z),n.rotation.y=0,n.visible=!0,n.userData={active:!0,reward:i,bobT:Math.random()*Math.PI*2,sec:r,chestText:a}}checkPickup(e){for(const t of this._pool)if(t.userData.active&&Math.abs(t.position.x-e)<1.1&&Math.abs(t.position.z)<1.2){const{reward:n,sec:i}=t.userData;bS(n,i,this.gs,this.onEarnDia),this.onText&&this.onText(Xl(n,i),"#b8f6ff"),t.visible=!1,t.userData.active=!1}}update(e,t){var i;const n=-t*e;for(const r of this._pool)r.userData.active&&(r.position.z+=n,r.userData.bobT+=e*2.5,r.position.y=Math.sin(r.userData.bobT)*.06,r.rotation.y=0,r._tierDecor&&(r._tierDecor.ring.rotation.z+=e*(((i=r.userData.reward)==null?void 0:i.star)===3?2.2:.9),r._tierDecor.halo.rotation.z-=e*1.4,r._tierDecor.sparks.forEach((a,o)=>{const l=r.userData.bobT*1.8+o*1.25;a.position.x=Math.cos(l)*.78,a.position.z=Math.sin(l)*.42,a.position.y=.92+Math.sin(l*1.7)*.16})),r.position.z<-8&&(r.visible=!1,r.userData.active=!1))}reset(){for(const e of this._pool)e.visible=!1,e.userData.active=!1}}let Xi=null;function dd(s){return Xi==null?void 0:Xi._applyRandom(s)}function fd(s){Xi==null||Xi._earnDia(s)}const hn=s=>`${s}?v=20260512b`,OS=(s,e)=>{var n;if(!e)return!1;const t=((n=s==null?void 0:s.tags)==null?void 0:n[e])||0;return t===1||t===3},pd=new Set(["박쥐","라마"]),Tn={banana:hn(new URL("/bananaallergy/assets/banana2-Dikfaxr3.png",import.meta.url).href),bananaOnHit:hn(new URL("/bananaallergy/assets/banana%20on%20hit-BjN88KIA.png",import.meta.url).href),projectile:hn(new URL("/bananaallergy/assets/projectile-CjABkn6E.png",import.meta.url).href),range:hn(new URL("/bananaallergy/assets/range-XtqSI8sW.png",import.meta.url).href),poop:hn(new URL("/bananaallergy/assets/poop-C4IM26HT.png",import.meta.url).href),poopOnHit:hn(new URL("/bananaallergy/assets/poop%20on%20hit-DwKtQmu-.png",import.meta.url).href),poopStorage:hn(new URL("/bananaallergy/assets/poop%20storage-DtlkZaZz.png",import.meta.url).href),auto:hn(new URL("/bananaallergy/assets/auto-R7izpoq5.png",import.meta.url).href),crit:hn(new URL("/bananaallergy/assets/crit-C7jmGp9W.png",import.meta.url).href),survival:hn(new URL("/bananaallergy/assets/survival-DHqmTGjn.png",import.meta.url).href),armorPen:hn(new URL("/bananaallergy/assets/armorpen-CiwuGrep.png",import.meta.url).href),pet:hn(new URL("/bananaallergy/assets/pet-DKYnlE0y.png",import.meta.url).href),gambler:hn(new URL("/bananaallergy/assets/gambler-CMgVgS1K.png",import.meta.url).href)},ap={banana:{2:"노란 손맛",4:"바나나 알러지 원숭이"},bananaOnHit:{2:"바나나 더하기 바나나",4:"껍질 폭주"},projectile:{2:"노란 소나기",4:"탄막 원숭이"},range:{2:"멀리서 안전하게",4:"시야 밖에서 죽임"},poop:{2:"장 트러블 예열",4:"폭풍 장운동"},poopOnHit:{2:"찰박찰박",4:"대장 파열"},poopStorage:{2:"참는 자에게 복이 있다",4:"만성 장트러블"},auto:{2:"손이 먼저 나감",4:"자동사냥 원숭이"},crit:{2:"묻고 떠블로 가",4:"터지면 장땡"},survival:{2:"끈질긴 생존본능",4:"안 죽으면 이김"},armorPen:{2:"껍질 분쇄기",4:"방어구 알러지"},pet:{2:"동물농장",4:"드루이드"},gambler:{2:"코인조망의 축복",4:"단도 0일차"}},op={banana:{2:"같은 적을 연속 타격할수록 바나나 피해 +2%, 최대 +20%",4:"2세트 효과 + 바나나가 적에게 호밍"},bananaOnHit:{2:"바나나 적중효과도 20% 확률로 치명타 적용",4:"적중효과 치명타 + 바나나 피해 30% 추가 고정피해"},projectile:{2:"바나나 투사체 +1",4:"투사체 5개 이상 피해 +15%, 8개 이상 사거리 +20%"},range:{2:"멀리서 맞출수록 피해 증가, 최대 +20%",4:"멀리서 맞출수록 피해 증가, 최대 +40%"},poop:{2:"똥 발사 후 0.5초 뒤 개별 10% 확률로 1개 재충전",4:"똥 발사 후 0.5초 뒤 개별 20% 확률로 1개 재충전"},poopOnHit:{2:"똥 적중효과 피해 +15%",4:"똥 적중효과가 보스에게도 100% 효율 적용"},poopStorage:{2:"똥 발사 후 1초 뒤 똥 3개 충전",4:"똥 발사 후 1초 뒤 똥 3개 충전, 7개 이상 발사 시 똥 피해 +20%"},auto:{2:"바나나 공속 +20%, 똥 쿨타임 -20%",4:"공속/쿨타임 계열 보상 효과 2배"},crit:{2:"3번째 치명타마다 피해 +20%",4:"치명타 시 20% 확률로 치명타 피해의 30% 추가"},survival:{2:"최종 최대체력 +30%",4:"최종 최대체력 +100%"},armorPen:{2:"방어력 50 이상 적에게 물리 피해 +20%",4:"방어력 50 이상 적에게 물리 피해 +40%"},pet:{2:"펫 효과 +30%",4:"펫 효과 +60%"},gambler:{2:"고급 상자 확률 상승",4:"고급 상자 확률 더욱 상승"}},$i={common:[["다섯 번째는 서비스","바나나 5번째 적중마다 고정 피해 +25",s=>{s.bananaEvery5Flat+=25},"bananaOnHit"],["손목 스냅 장인","바나나 공격속도 +20%",s=>{ao(s,.2)},"banana"],["껍질에 가시남","바나나 적중 시 고정 피해 +3",s=>{s.bananaFlatOnHit+=3},"bananaOnHit"],["어깨 풀렸다","바나나 사거리 +30%",s=>{s.bananaRange*=1.3},"range"],["하나 더 던져봐","바나나 투사체 +1",s=>{s.bananaCount+=1},"projectile"],["껍질 벗겨버려","최대체력 30% 미만 적에게 바나나 피해 +10%",s=>{s.bananaExecuteBonus=(s.bananaExecuteBonus||0)+.1},"banana"],["참다 참다 쌌다","최대 똥 저장 수 +4",s=>{s.poopMax+=4,s.poopUnlocked=!0,s.poopTimer=Math.max(s.poopTimer||0,s.poopCD||4)},"poopStorage"],["냄새가 여기까지","똥 사거리 +30%",s=>{s.poopRange*=1.3,s.poopUnlocked=!0},"range"],["다섯 번째 똥은 다르다","5번째 똥마다 최대체력 3% 고정피해",s=>{s.poopEveryN={n:5,pct:.03}},"poopOnHit"],["장 운동 시작","똥 쿨타임 -18%",s=>{xr(s,.18),s.poopUnlocked=!0},"auto"],["묵직한 녀석","똥 피해 +20%",s=>{s.poopDamageMul*=1.2,s.poopUnlocked=!0},"poop"],["문도는 간다","초당 최대체력 0.5% 회복",s=>{s.regen+=.005},"survival"],["왠지 세게 맞음","치명타 확률 +6%",s=>{s.crit+=.06},"crit"],["크게 맞으면 아픔","치명타 피해 +10%p",s=>{s.critDmg+=.1},"crit"],["살 찌우기","최종 최대체력 +10%",s=>{s.maxHp*=1.1,s.hp*=1.1},"survival"],["전환: 골드","무작위 골드 증강 1개 획득",()=>dd("gold"),"gambler"],["바나나가 복사가 된다고?","3번째 발사마다 30% 미니 바나나 +1",s=>{s.extraMiniEvery3=!0},"projectile"],["껍질 까는 맛","방어력 30 이상 적에게 물리피해 +8%",s=>{s.armoredPhysicalBonus=(s.armoredPhysicalBonus||0)+.08},"armorPen"]],gold:[["꽁꽁 얼은 바나나","바나나 적중 시 내 최대체력 3.5% 추가 물리피해",s=>{s.bananaHpScale+=.035},"survival"],["껍질 파열","바나나 적중 시 고정 피해 +10",s=>{s.bananaFlatOnHit+=10},"bananaOnHit"],["두 배 세 배","3번째 바나나마다 적중효과 2번 발동",s=>{s.bananaTripleProc=!0},"bananaOnHit"],["나중에 개빨라지나요?","처치 시 바나나 공속 +0.1%",s=>{s.killAS=!0},"auto"],["어깨 탈골 투척법","바나나 사거리 +60%, 피해 +10%",s=>{s.bananaRange*=1.6,s.bananaDamage*=1.1},"range"],["한 발에 두 놈","치명타 시 적중효과 추가 적용",s=>{s.critProc=!0},"bananaOnHit"],["노란 비상사태","바나나 투사체 +2, 피해 -10%",s=>{s.bananaCount+=2,s.bananaDamageMul*=.9},"projectile"],["오늘 장난 아니다","최대 똥 저장 수 +5, 똥 쿨타임 -20%",s=>{s.poopMax+=5,xr(s,.2),s.poopTimer=Math.max(s.poopTimer||0,s.poopCD||4)},"poopStorage"],["냄새 사거리 증가","똥 사거리 +50%",s=>{s.poopRange*=1.5},"range"],["세 번째 똥은 진심","3번째 똥마다 최대체력 2% 고정피해",s=>{s.poopEveryN={n:3,pct:.02}},"poopOnHit"],["똥마렵","똥 쿨감 +35%, 바나나 공속 성장 효율 -10%",s=>{xr(s,.35),s.bananaAS*=.9,s.bananaASGainMul*=.9},"auto"],["오염 폭발","똥 적중 시 똥 피해의 25% 추가 물리피해",s=>{s.poopPhysicalOnHitPct+=.25},"poopOnHit"],["이건 방어 못 함","보스에게 똥 피해 +15%",s=>{s.poopBossMul*=1.15},"poop"],["냄새 묻었다","똥에 맞은 적 방어력 똥 하나당 -2%",s=>{s.poopArmorDebuffPerHit+=.02},"poopOnHit"],["체력이 곧 국력","몬스터 처치마다 최대체력 +5",s=>{s.hpOnKill=5},"survival"],["어차피 이판 못 깸","즉시 다이아 +50",()=>fd(50),"gambler"],["전환: 프리즘","무작위 프리즘 증강 1개 획득",()=>dd("prism"),"gambler"],["느낌 왔다","치명타 확률 +12%",s=>{s.crit+=.12},"crit"],["크게 터지면 기분 좋음","치명타 피해 +20%p",s=>{s.critDmg+=.2},"crit"],["방어구 관통 중독","방어구 관통력 +12%",s=>{s.percentPen=Math.min(s.percentPen+.12,.45)},"armorPen"],["정밀 껍질 절단","방어구 관통력 +4",s=>{s.flatPen+=4},"armorPen"],["몰락한 왕의 바나나","바나나 적중 시 적 현재체력 4% 추가 고정피해",s=>{s.bananaCurrentHpPct+=.04},"bananaOnHit"]],prism:[["양손잡이","현재 투사체 수만큼 20% 미니 바나나 추가",s=>{s.dualWield=!0},"projectile"],["변비","똥 봉인. 바나나 공속 +100%, 적중 시 현재체력 0.7% 고정피해",s=>{s.poopSealed=!0,s.bananaAS*=2,s.bananaCurrentHpPct+=.007},"banana"],["유리 바나나","최대체력 -50%. 바나나 피해 15% 추가 고정피해",s=>{s.maxHp*=.5,s.hp=Math.min(s.hp,s.maxHp),s.maxHpGainMul*=.5,s.bananaFlatRatio+=.15},"banana"],["티끌 모아 티끌","처치 1마리당 바나나 피해 +0.5",s=>{s.killBananaDamage=.5},"banana"],["아 잘못 던졌다","바나나 7% 확률로 똥으로 변함",s=>{s.bananaToPoop=.07},"bananaOnHit"],["노란 지옥","지금까지/앞으로 얻는 바나나 공속 효과 2배",s=>{lS(s)},"auto"],["엽떡 먹은 다음날","똥 12% 확률 폭발: 최대체력 3%",s=>{s.poopExplodePct=.03},"poop"],["똥쟁이","왼쪽 똥 저장고 추가. 35% 피해",s=>{s.poopMirror=.35},"poopStorage"],["무한 장운동","똥으로 처치 시 똥 최대 10개 즉시 생성",s=>{s.poopKillRefund=!0},"poopStorage"],["박쥐","박쥐 펫 +1. 최대체력 10% 고정피해, 내 최대체력 2% 회복",s=>{s.bat+=1},"pet"],["라마","라마 펫 +1. 침으로 방어력 감소",s=>{s.llama+=1},"pet"],["이거 방탄유리야","10초 무피해 시 최대체력 50% 보호막",s=>{s.shieldRegen=!0},"survival"],["일단 돈을 챙겨","즉시 다이아 +100",()=>fd(100),"gambler"],["이거 좋은 거예요?","모든 최종 피해 +12%",s=>{s.allDamage*=1.12},"crit"],["모든 겜은 치명타가 고점이긴 함","치명타 확률 +30%",s=>{s.crit+=.3},"crit"],["한 대만 버티자","죽을 피해 1회 무시",s=>{s.deathSave=!0},"survival"],["방어구 해체자","방어구 관통력 +30%, 관통력 +15",s=>{s.percentPen=Math.min(s.percentPen+.3,.75),s.flatPen+=15},"armorPen"]]},lp=new Map;for(const[s,e]of Object.entries($i))for(const t of e)lp.set(t[0],{tier:s,tag:t[3]});function md(s){const e=s.tags,t=[],n=ap;s.synergyLevels||(s.synergyLevels={}),s._tagApplied||(s._tagApplied={});const i=c=>{const h=e[c]||0;return h>=4?4:h>=2?2:0},r=c=>{var d,f;const h=s.synergyLevels[c]||0,u=i(c);u>h&&(s.synergyLevels[c]=u,t.push({tag:c,level:u,name:((d=n[c])==null?void 0:d[u])||c,effect:((f=op[c])==null?void 0:f[u])||""}))};Object.keys(n).forEach(r);const a=s.synergyLevels.survival||0,o=s._survivalSynergyHpMul||1,l=a>=4?2:a>=2?1.3:1;if(l!==o){const c=l/o;s.maxHp*=c,s.hp*=c,s._survivalSynergyHpMul=l}return s.maxHpGainMul=(s.baseMaxHpGainMul||1)*l,s.petEffectMul=(s.synergyLevels.pet||0)>=4?1.6:(s.synergyLevels.pet||0)>=2?1.3:1,s.projectileSynergyBonus=(s.synergyLevels.projectile||0)>=2?1:0,s.autoSynergyLevel=s.synergyLevels.auto||0,s.gamblerSynergyLevel=s.synergyLevels.gambler||0,s.coinBlessing=s.gamblerSynergyLevel>=2,t}function BS(){let s=document.getElementById("augment-overlay");return s||(s=document.createElement("div"),s.id="augment-overlay",s.innerHTML=`
    <div class="aug-modal-inner">
      <div id="augOwned" class="aug-owned"></div>
      <div id="augCards" class="aug-cards"></div>
    </div>`,(document.getElementById("stage")||document.getElementById("app")).appendChild(s),s)}class kS{constructor(e,t,n){Xi=this,this.gs=e,this.onApply=t,this.onEarnDia=n,this._overlay=BS()}trigger(){this._selectionLocked=!1;const e=Math.random(),t=Math.max(0,Math.min(.2,this.gs.augmentTierLuck||0)),n=Math.max(.1,.5-t*2),i=.4+t,r=e<n?"common":e<n+i?"gold":"prism";Ge(r==="common"?"augmentCommon":r==="gold"?"augmentGold":"augmentPrism"),this._renderOwnedAugments();const a=[...$i[r]];for(let c=a.length-1;c>=0;c--)this._hasAug(a[c][0])&&a.splice(c,1);const o=[];for(;o.length<3&&a.length;)o.push(a.splice(Math.floor(Math.random()*a.length),1)[0]);const l=document.getElementById("augCards");l.innerHTML="",l.classList.remove("locked"),o.forEach(c=>{const h=document.createElement("div");h.className=`aug-card ${r}`;const u=c[3],d=OS(this.gs,u),f=d?"시너지 효과 발동 가능!":"";h.innerHTML=`
        <div class="aug-icon-frame">
          <img class="aug-icon" src="${Tn[u]||Tn.banana}" alt="">
        </div>
        <div class="aug-body">
          <div class="aug-head">
            <div class="aug-name">${c[0]}</div>
            ${f?`<div class="aug-status ${d?"synergy":""}">${f}</div>`:""}
          </div>
          <div class="aug-desc">${c[1]}</div>
        </div>`,h.onclick=()=>{if(this._selectionLocked)return;this._selectionLocked=!0,l.classList.add("locked"),l.querySelectorAll(".aug-card").forEach(p=>p.classList.add("disabled")),Ge("augmentSelect");const g=this._applyAug(c),v=()=>{this._overlay.style.display="none",this.gs.phase="running",this.onApply&&this.onApply((g==null?void 0:g.converted)||c)},m=()=>{var M;const p=(M=g==null?void 0:g.synergies)==null?void 0:M[g.synergies.length-1];p?this.showSynergyCelebration(p,v):v()};if(g!=null&&g.converted){const p=g.converted;h.className=`aug-card ${g.tier}`;const M=p[3];h.innerHTML=`
            <div class="aug-icon-frame">
              <img class="aug-icon" src="${Tn[M]||Tn.gambler}" alt="">
            </div>
            <div class="aug-body">
              <div class="aug-convert">전환 성공!</div>
              <div class="aug-head">
                <div class="aug-name">${p[0]}</div>
                
              </div>
              <div class="aug-desc">${p[1]}</div>
            </div>`,this._showSynergy(`전환 성공! ${p[0]} 획득`),setTimeout(m,2100)}else m()},l.appendChild(h)}),this._overlay.style.display="flex",this.gs.phase="augment"}_applyAug(e){if(this._markAug(e[0]),e[0]==="전환: 골드")return this._convertAug("gold");if(e[0]==="전환: 프리즘")return this._convertAug("prism");e[2](this.gs);const t=e[3];return t&&(this.gs.tags[t]=(this.gs.tags[t]||0)+1),{synergies:md(this.gs)}}_applyRandom(e,t=!1){const n=$i[e].filter(a=>!this._hasAug(a[0])&&(!t||!a[0].startsWith("전환:")));if(!n.length)return null;const i=n[Math.floor(Math.random()*n.length)],r=this._applyAug(i);return{aug:i,synergies:(r==null?void 0:r.synergies)||[]}}_convertAug(e){this.gs.tags.gambler=(this.gs.tags.gambler||0)+1;const t=this._applyRandom(e,!0),n=md(this.gs),i=t==null?void 0:t.aug,r=[...(t==null?void 0:t.synergies)||[],...n];return i?{converted:i,tier:e,synergies:r}:{synergies:r}}_hasAug(e){return pd.has(e)?!1:(this.gs.acquiredAugments||[]).includes(e)}_markAug(e){this.gs.acquiredAugments||(this.gs.acquiredAugments=[]),(pd.has(e)||!this.gs.acquiredAugments.includes(e))&&this.gs.acquiredAugments.push(e)}_renderOwnedAugments(){const e=document.getElementById("augOwned");if(!e)return;const t=this.gs.acquiredAugments||[],n=Object.values($i).flat();if(!t.length){e.innerHTML="",e.style.display="none";return}const i=this.gs.tags||{};e.style.display="flex",e.innerHTML=t.slice(-12).map(r=>{const a=n.find(d=>d[0]===r),o=(a==null?void 0:a[3])||"gambler",l=4,c=t.map(d=>lp.get(d)).filter(d=>(d==null?void 0:d.tag)===o).map(d=>d.tier),h=Math.min(l,i[o]||c.length),u=Array.from({length:l},(d,f)=>{const g=c[f]||"";return`<span class="${f<h?`on tier-${g}`:""}"></span>`}).join("");return`
        <div class="aug-owned-item" title="${r}">
          <img src="${Tn[o]||Tn.gambler}" alt="">
          <div class="aug-owned-pips">${u}</div>
        </div>`}).join("")}showSynergyCelebration(e,t=null){if(!e){t==null||t();return}const n=document.getElementById("stage")||document.getElementById("app")||document.body,i=document.createElement("div");i.className="synergy-celebration";const r=Tn[e.tag]||Tn.gambler;i.innerHTML=`
      <div class="celebration-rays"></div>
      <div class="celebration-coins">${Array.from({length:22},(a,o)=>`<span style="--i:${o}"></span>`).join("")}</div>
      <div class="celebration-card">
        <img class="celebration-icon" src="${r}" alt="">
        <div class="celebration-text">
          <div class="celebration-kicker">시너지 발동!</div>
          <div class="celebration-name">${e.name}</div>
          <div class="celebration-effect">${e.effect||""}</div>
        </div>
      </div>`,n.appendChild(i),Ge("synergyCelebrate"),setTimeout(()=>{i.remove(),t==null||t()},4e3)}_showSynergy(e){const t=document.getElementById("stage")||document.getElementById("app")||document.body,n=document.createElement("div");n.className="synergy-toast",n.textContent=e,t.appendChild(n),Ge("augmentGold"),setTimeout(()=>n.remove(),1500)}_earnDia(e){this.onEarnDia&&this.onEarnDia(e)}}const VS=new oi(.22,7,6),zS=new gt({color:5913104,flatShading:!0}),HS=new URL("/bananaallergy/assets/Scary%20Poop-CG7dDLZw.glb",import.meta.url).href,GS=new oi(.26,8,6),WS=new gt({color:8014360,flatShading:!0});function dr(s,e,t){const n=e?1:-1,i=Math.floor((Math.sqrt(8*s+1)-1)/2),r=i*(i+1)/2,a=s-r,o=i+1,l=a-(o-1)/2,c=Math.pow(.95,s);return{x:t+n*(.58+i*.18),y:.34+i*.22+Math.abs(l)*.03,z:-.48,offsetX:l*.19,scale:c}}const XS=32,cp=18,pl=34,$l=24;function $S(s){const t=Math.max(0,((s==null?void 0:s.poopRange)||.45)/.45-1);return 1+Math.min(1,t)}function qS(){if(typeof document>"u")return null;let s=document.getElementById("poop-count-label");return s||(s=document.createElement("div"),s.id="poop-count-label",s.className="poop-count-label",s.style.display="none",(document.getElementById("ui-overlay")||document.getElementById("stage")||document.body).appendChild(s),s)}class jS{constructor(e){this.mesh=new ct,this._fallback=new ye(VS,zS),this.mesh.add(this._fallback),this.mesh.visible=!1,e.add(this.mesh),this._visual=null,this.vx=0,this.vy=0,this.vz=0,this.life=0,this.target=null,this.active=!1,this.mul=1,this.curve=0,this._t=0}setVisualProto(e){if(this._visual&&(this.mesh.remove(this._visual),this._visual=null),this._fallback.visible=!e,!e)return;const t=hp(e,.48);this._visual=t,this.mesh.add(t)}activate(e,t,n,i,r,a,o=cp,l=$l){this.mesh.position.set(e,t,n),this.active=!0,this.life=4,this.target=i,this.mul=r||1,this.curve=a||0,this._t=0,this.maxSpeed=l;const c=i.type==="mob"?.9:1.25,h=i.mesh.position.x-e,u=c-t,d=i.mesh.position.z-n,f=Math.sqrt(h*h+u*u+d*d)||1;this.vx=h/f*o,this.vy=u/f*o+1.1,this.vz=d/f*o,this.mesh.visible=!0,this.rangeTotal=0,this.bornZ=n,this.lastTargetPos=i.mesh.position.clone()}deactivate(){this.active=!1,this.mesh.visible=!1,this.target=null}}function hp(s,e){const t=wc(s);t.rotation.y=Math.PI,t.updateWorldMatrix(!0,!0);const i=new Bt().setFromObject(t).getSize(new I),r=e/Math.max(.01,i.y);t.scale.setScalar(r),t.updateWorldMatrix(!0,!0);const a=new Bt().setFromObject(t);return t.position.y-=a.min.y+e*.5,t}function gd(s){const e=new ct,t=new ye(GS,WS.clone());return e.add(t),e.visible=!1,e._fallback=t,e._visual=null,s.add(e),e}function _d(s,e){if(s._visual&&(s.remove(s._visual),s._visual=null),s._fallback.visible=!e,!e)return;const t=hp(e,.42);s._visual=t,s.add(t)}const fr=12,xs=180,KS=90;class YS{constructor(e,t){this.scene=e,this.gs=t,this._poopProto=null,this._renderer=null,this._camera=null,this._prewarmed=!1,this._proj=Array.from({length:XS},()=>new jS(e)),this._slots=Array.from({length:fr},()=>gd(e)),this._mirrorSlots=Array.from({length:fr},()=>gd(e));const n=new Lt,i=new Float32Array(xs*3);for(let l=0;l<xs;l++)i[l*3+1]=-1e3;n.setAttribute("position",new $t(i,3));const r=new no({color:3086859,size:4.2,sizeAttenuation:!1,transparent:!0,opacity:.88,depthWrite:!1,depthTest:!1});this._dust=new _c(n,r),this._dustLives=new Float32Array(xs),this._dustIdx=0,this.scene.add(this._dust),this._dustSparks=[];const a=new oi(.055,6,4),o=new Ft({color:3086859,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1});for(let l=0;l<KS;l++){const c=new ye(a,o.clone());c.visible=!1,c.userData={life:0,maxLife:.55,vx:0,vy:0,vz:0},this.scene.add(c),this._dustSparks.push(c)}this._loadPoopAsset(),this._countEl=qS(),this._countText=""}setRenderer(e,t){var n;this._renderer=e,this._camera=t,this._stageEl=((n=e==null?void 0:e.domElement)==null?void 0:n.parentElement)||null,this._prewarmProjectiles()}_prewarmProjectiles(){if(this._prewarmed||!this._renderer||!this._camera||!this._poopProto)return;const e=[];for(const t of this._proj)e.push(t.mesh.visible),t.mesh.position.set(0,-1e3,0),t.mesh.visible=!0;this._renderer.compile(this.scene,this._camera),this._proj.forEach((t,n)=>{t.mesh.visible=e[n]}),this._prewarmed=!0}_loadPoopAsset(){new Ks().load(HS,e=>{this._poopProto=e.scene,this._poopProto.traverse(t=>{if(!t.isMesh)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)i&&(i.side=tn,i.roughness=.85,i.metalness=0)});for(const t of this._proj)t.setVisualProto(this._poopProto);for(const t of this._slots)_d(t,this._poopProto);for(const t of this._mirrorSlots)_d(t,this._poopProto);this._prewarmed=!1,this._prewarmProjectiles()},void 0,e=>console.warn("[PoopSystem] Scary Poop asset failed:",e))}accumulate(e){var a;const t=this.gs;if(!t.poopUnlocked||t.poopSealed||t.poopMax<=0)return;const n=t.autoSynergyLevel||((a=t.synergyLevels)==null?void 0:a.auto)||0,i=n>=4?.6:n>=2?.8:1,r=Math.max(Pc(),t.poopCD*i);if(t.poopTimer=(t.poopTimer||r)-e,t.poopTimer<=0){t.poopTimer+=r;const o=t.poopStored;t.poopStored=Math.min(t.poopStored+1,t.poopMax),t.poopStored>o&&Ge("poopCharge")}}tryFire(e,t,n){var m,p;const i=this.gs;if(!i.poopUnlocked||i.poopSealed||i.poopStored<=0)return;const r=i.poopRange*40;let a=null,o=1/0;for(const M of n){const y=M.mesh.position.z-t;if(y<0||y>r)continue;const T=Math.hypot(M.mesh.position.x-e,y);T<o&&(a=M,o=T)}if(!a)return;const l=i.poopStored;i.poopStored=0,l>0&&Ge("poopFire");const c=$S(i),h=cp*c,u=$l*c;i.poopSynergyRunId=(i.poopSynergyRunId||0)+1,i.poopSynergyRunId;const d=((m=i.synergyLevels)==null?void 0:m.poopStorage)||0,f=d>=4&&l>=7?1.2:1;for(let M=0;M<l;M++){const y=this._proj.find(N=>!N.active);if(!y)break;const T=dr(M,!1,e);y.activate(T.x,T.y,T.z,a,f,(Math.random()-.5)*.5,h,u),y.rangeTotal=r,y.bornZ=T.z}if(i.poopMirror&&l>0)for(let M=0;M<l;M++){const y=this._proj.find(N=>!N.active);if(!y)break;const T=dr(M,!0,e);y.activate(T.x,T.y,T.z,a,i.poopMirror*f,(Math.random()-.5)*.5,h,u),y.rangeTotal=r,y.bornZ=T.z}const g=((p=i.synergyLevels)==null?void 0:p.poop)||0,v=g>=4?.2:g>=2?.1:0;v>0&&setTimeout(()=>{if(this.gs!==i||!i||i.phase==="dead")return;let M=0;for(let y=0;y<l;y++)Math.random()<v&&M++;if(M>0){const y=i.poopStored;i.poopStored=Math.min(i.poopMax,i.poopStored+M),i.poopStored>y&&Ge("poopCharge")}},500),d>=2&&setTimeout(()=>{if(this.gs!==i||!i||i.phase==="dead")return;const M=i.poopStored;i.poopStored=Math.min(i.poopMax,i.poopStored+3),i.poopStored>M&&Ge("poopCharge")},1e3)}update(e,t,n){var a,o,l,c;this.gs;const i=[],r=performance.now()*.001;for(const h of this._proj){if(!h.active)continue;if(h.life-=e,h._t+=e,h.life<=0){h.deactivate();continue}(a=h.target)!=null&&a.active&&h.lastTargetPos.copy(h.target.mesh.position);const u=((o=h.target)==null?void 0:o.type)==="mob"?.9:1.25,d=(l=h.target)!=null&&l.active?h.target.mesh.position:h.lastTargetPos,f=d.x-h.mesh.position.x,g=u-h.mesh.position.y,v=d.z-h.mesh.position.z,m=Math.sqrt(f*f+g*g+v*v)||1,p=-v/m,M=Math.sin(r*18+h.curve)*h.curve*.04;h.vx+=(f/m*pl+p*M)*e,h.vy+=g/m*pl*e,h.vz+=v/m*pl*e;const y=Math.hypot(h.vx,h.vy,h.vz),T=h.maxSpeed||$l;if(y>T){const b=T/y;h.vx*=b,h.vy*=b,h.vz*=b}if(h.mesh.position.x+=h.vx*e,h.mesh.position.y+=h.vy*e,h.mesh.position.z+=h.vz*e,h.mesh.rotation.x+=e*5,this._emitDust(h.mesh.position),this._emitDustSpark(h.mesh.position),!((c=h.target)!=null&&c.active)){Math.hypot(f,g,v)<.5&&h.deactivate();continue}const N=Math.abs(h.mesh.position.x-h.target.mesh.position.x),L=Math.abs(h.mesh.position.y-u),x=Math.abs(h.mesh.position.z-h.target.mesh.position.z);if(Math.sqrt(N*N+L*L+x*x)<1.55||x<.45&&N<1.35&&L<1.5){const b=Math.max(0,Math.min(1,(h.mesh.position.z-(h.bornZ||0))/Math.max(1,h.rangeTotal||1)));i.push({proj:h,enemy:h.target,mul:h.mul,rangeT:b}),h.deactivate()}else(h.mesh.position.y<-1||h.mesh.position.z<-3)&&h.deactivate()}return this._updateDust(e),this._updateDustSparks(e),this._updateSlots(n),this._updateCountLabel(n),i}_emitDustSpark(e){for(let t=0;t<2;t++){const n=this._dustSparks.find(r=>!r.visible);if(!n)return;n.position.set(e.x+(Math.random()-.5)*.34,e.y+(Math.random()-.5)*.22,e.z-.18-Math.random()*.32);const i=.42+Math.random()*.24;n.userData.life=i,n.userData.maxLife=i,n.userData.vx=(Math.random()-.5)*.5,n.userData.vy=.08+Math.random()*.28,n.userData.vz=-1.4-Math.random()*1.4,n.material.opacity=.62,n.scale.setScalar(.95+Math.random()*.9),n.visible=!0}}_emitDust(e){const t=this._dust.geometry.attributes.position.array;for(let n=0;n<7;n++){const i=this._dustIdx%xs;t[i*3]=e.x+(Math.random()-.5)*.42,t[i*3+1]=e.y+(Math.random()-.5)*.3,t[i*3+2]=e.z-.15+(Math.random()-.5)*.42,this._dustLives[i]=.72+Math.random()*.32,this._dustIdx++}this._dust.geometry.attributes.position.needsUpdate=!0}_updateDust(e){const t=this._dust.geometry.attributes.position.array;let n=!1;for(let i=0;i<xs;i++)this._dustLives[i]<=0||(this._dustLives[i]-=e,t[i*3+1]-=e*.12,t[i*3]+=Math.sin((this._dustLives[i]+i)*9)*e*.05,this._dustLives[i]<=0&&(t[i*3+1]=-1e3),n=!0);n&&(this._dust.geometry.attributes.position.needsUpdate=!0)}_updateDustSparks(e){for(const t of this._dustSparks){if(!t.visible)continue;if(t.userData.life-=e,t.userData.life<=0){t.visible=!1;continue}t.position.x+=t.userData.vx*e,t.position.y+=t.userData.vy*e,t.position.z+=t.userData.vz*e;const n=t.userData.life/t.userData.maxLife;t.material.opacity=.62*n,t.scale.multiplyScalar(1-e*.85)}}_updateSlots(e){const t=this.gs,n=Math.min(t.poopStored,fr);for(let r=0;r<fr;r++){const a=r<n;if(this._slots[r].visible=a,a){const o=dr(r,!1,e);this._slots[r].position.set(o.x+o.offsetX,o.y,o.z),this._slots[r].scale.setScalar(o.scale)}}const i=t.poopMirror>0;for(let r=0;r<fr;r++){const a=i&&r<n;if(this._mirrorSlots[r].visible=a,a){const o=dr(r,!0,e);this._mirrorSlots[r].position.set(o.x+o.offsetX,o.y,o.z),this._mirrorSlots[r].scale.setScalar(o.scale)}}}_updateCountLabel(e){const t=this.gs;if(!this._countEl||!t||t.poopMax<=0){this._countEl&&(this._countEl.style.display="none");return}const n=`${Math.floor(t.poopStored||0)}/${Math.floor(t.poopMax||0)}`;n!==this._countText&&(this._countEl.textContent=n,this._countText=n);const i=dr(0,!1,e),r=new I(i.x+i.offsetX+.16,.95,i.z-.03);if(this._camera){const a=r.project(this._camera);this._countEl.style.left=`${Math.max(4,Math.min(96,(a.x*.5+.5)*100))}%`,this._countEl.style.top=`${Math.max(4,Math.min(96,(-a.y*.5+.5)*100))}%`}this._countEl.style.display="block"}reset(){for(const t of this._proj)t.deactivate();for(const t of this._dustSparks)t.visible=!1;for(const t of this._slots)t.visible=!1;for(const t of this._mirrorSlots)t.visible=!1;this._countEl&&(this._countEl.style.display="none"),this._dustLives.fill(0);const e=this._dust.geometry.attributes.position.array;for(let t=0;t<xs;t++)e[t*3+1]=-1e3;this._dust.geometry.attributes.position.needsUpdate=!0}}class JS{constructor(e){this.dir=0,this._keyL=!1,this._keyR=!1,this._joyDir=0,this._touchDir=0,this._buttonDir=0,this._stageEl=e,window.addEventListener("keydown",t=>{(t.key==="ArrowLeft"||t.key==="a"||t.key==="A")&&(this._keyL=!0),(t.key==="ArrowRight"||t.key==="d"||t.key==="D")&&(this._keyR=!0),this._syncKeys()}),window.addEventListener("keyup",t=>{(t.key==="ArrowLeft"||t.key==="a"||t.key==="A")&&(this._keyL=!1),(t.key==="ArrowRight"||t.key==="d"||t.key==="D")&&(this._keyR=!1),this._syncKeys()}),this._initJoystick(),this._initTouchArrows()}_isJoyArea(e){const t=document.getElementById("joystick");if(!t||t.classList.contains("hidden"))return!1;const n=t.getBoundingClientRect();return e.clientX>=n.left-16&&e.clientX<=n.right+16&&e.clientY>=n.top-16&&e.clientY<=n.bottom+16}_initJoystick(){const e=document.getElementById("joystick"),t=document.getElementById("joyKnob");if(!e||!t)return;const n=67;let i=!1,r=null;const a=h=>{const u=e.getBoundingClientRect(),d=u.left+u.width/2,f=u.top+u.height/2;let g=h.clientX-d,v=h.clientY-f;const m=Math.hypot(g,v);return m>n&&(g=g/m*n,v=v/m*n),{dx:g,dy:v}},o=(h=0,u=0)=>{t.style.transform=`translate(${h}px,${u}px)`},l=h=>{const u=n*.12;if(Math.abs(h)<u)return 0;const d=Math.max(-1,Math.min(1,h/(n*.55)));return Math.sign(d)*Math.min(1,Math.pow(Math.abs(d),.68))},c=()=>{i=!1,r=null,this._joyDir=0,o(0,0)};e.addEventListener("pointerdown",h=>{var d;h.preventDefault(),h.stopPropagation(),i=!0,r=h.pointerId,(d=e.setPointerCapture)==null||d.call(e,h.pointerId);const u=a(h);o(u.dx,u.dy),this._joyDir=l(u.dx)}),e.addEventListener("pointermove",h=>{if(!i||h.pointerId!==r)return;h.preventDefault(),h.stopPropagation();const u=a(h);o(u.dx,u.dy),this._joyDir=l(u.dx)}),e.addEventListener("pointerup",h=>{h.pointerId===r&&c()}),e.addEventListener("pointercancel",c)}_syncKeys(){const e=(this._keyR?1:0)+(this._keyL?-1:0);e!==0&&(this.dir=e)}_initTouchArrows(){const e=(t,n)=>{const i=document.getElementById(t);if(!i)return;const r=a=>{var o;(o=a==null?void 0:a.preventDefault)==null||o.call(a),this._buttonDir===n&&(this._buttonDir=0)};i.addEventListener("pointerdown",a=>{var o;a.preventDefault(),a.stopPropagation(),this._buttonDir=n,(o=i.setPointerCapture)==null||o.call(i,a.pointerId)}),i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("lostpointercapture",r)};e("touch-left",-1),e("touch-right",1)}update(e,t=1){const i=(this._keyR?1:0)+(this._keyL?-1:0)||this._buttonDir||this._joyDir||this._touchDir||0;this.dir=i}get targetX(){return this.dir}}const ZS=new URL("/bananaallergy/assets/bat-B9L22ud1.glb",import.meta.url).href,QS=new URL("/bananaallergy/assets/Horse-T9Qtn7NJ.gltf",import.meta.url).href,eb=24;function vd(s){s.traverse(e=>{if(!e.isMesh)return;const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&(n.side=tn,n.roughness=.85,n.metalness=0)})}function tb(s,e){const t=wc(s);t.updateWorldMatrix(!0,!0);const i=new Bt().setFromObject(t).getSize(new I);t.scale.setScalar(e/Math.max(.01,i.y)),t.updateWorldMatrix(!0,!0);const r=new Bt().setFromObject(t);return t.position.y-=r.min.y,t}function nb(){const s=new ct,e=new Ft({color:14286731,transparent:!0,opacity:.92}),t=new ye(new oi(.18,10,8),e),n=new ye(new Vr(.12,.63,8),e);return n.rotation.x=Math.PI/2,n.position.z=-.36,s.add(t,n),s}function ib(){const s=new Ft({color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xi});return new ye(new oi(.075,6,4),s)}class sb{constructor(e){this.scene=e,this.loader=new Ks,this.bat=new ct,this.horse=new ct,this.bat2=new ct,this.horse2=new ct,this.bat.visible=!1,this.horse.visible=!1,this.bat2.visible=!1,this.horse2.visible=!1,e.add(this.bat,this.horse,this.bat2,this.horse2),this.bats=[this.bat,this.bat2],this.horses=[this.horse,this.horse2],this.batProto=null,this.horseProto=null,this.batAttack=null,this.batQueue=[],this.spitShots=[],this.spitParticles=[];for(let t=0;t<48;t++){const n=ib();n.visible=!1,n.userData={life:0,maxLife:.28,vx:0,vy:0,vz:0},e.add(n),this.spitParticles.push(n)}this._llamaShotCursor=0,this._load()}_emitSpitParticle(e){const t=this.spitParticles.find(i=>!i.visible);if(!t)return;t.position.set(e.x+(Math.random()-.5)*.15,e.y+(Math.random()-.5)*.12,e.z-Math.random()*.34);const n=.24+Math.random()*.18;t.userData.life=n,t.userData.maxLife=n,t.userData.vx=(Math.random()-.5)*.45,t.userData.vy=.05+Math.random()*.25,t.userData.vz=-1.4-Math.random()*1.2,t.material.opacity=.95,t.scale.setScalar(.9+Math.random()*.7),t.visible=!0}_load(){this.loader.load(ZS,e=>{this.batProto=e.scene,vd(this.batProto),this.bats.forEach(t=>this._setGroupVisual(t,this.batProto,.42,"bat"))},void 0,e=>console.warn("[PetVisuals] bat failed:",e)),this.loader.load(QS,e=>{this.horseProto=e.scene,vd(this.horseProto),this.horses.forEach(t=>this._setGroupVisual(t,this.horseProto,.7))},void 0,e=>console.warn("[PetVisuals] horse failed:",e))}_setGroupVisual(e,t,n,i=""){for(;e.children.length;)e.remove(e.children[0]);const r=tb(t,n);r.rotation.y=i==="bat"?0:Math.PI,i==="bat"&&(r.rotation.z=0),e.add(r)}triggerBat(e,t,n){!e||!e.active||this.batQueue.push({target:e,t:0,dur:.54,hit:!1,onHit:t,onReturn:n})}triggerLlama(e,t){if(!e||!e.active)return;const n=this.horses.filter(a=>a.visible),i=n.length?n[this._llamaShotCursor++%n.length]:this.horse,r=nb();r.position.copy(i.position),r.position.y+=.52,r.userData={target:e,life:1.25,onHit:t,hit:!1},this.scene.add(r),this.spitShots.push(r)}update(e,t,n,i){var c,h,u,d,f,g,v,m;const r=performance.now()*.001,a=Math.min(2,(t==null?void 0:t.bat)||0),o=Math.min(2,(t==null?void 0:t.llama)||0);this.bats.forEach((p,M)=>p.visible=M<a),this.horses.forEach((p,M)=>p.visible=M<o);const l=new I(n-.62,1.45+Math.sin(r*6)*.08,-.7);if(this.bat.visible){if(!this.batAttack&&this.batQueue.length&&(this.batAttack=this.batQueue.shift()),this.batAttack){const p=this.batAttack;p.t+=e;const M=Math.min(1,p.t/p.dur),y=M<.5?M/.5:(1-M)/.5,T=(c=p.target)!=null&&c.active?p.target.mesh.position.clone():l.clone();T.y=((h=p.target)==null?void 0:h.type)==="mob"?1:1.6,this.bat.position.lerpVectors(l,T,y);const N=T.x-l.x;this.bat.rotation.y=(N>0?-Math.PI*.5:Math.PI*.5)+Math.sin(r*10)*.18,!p.hit&&M>=.5&&(p.hit=!0,(u=p.onHit)==null||u.call(p,p.target)),M>=1&&((d=p.onReturn)==null||d.call(p,p.target),this.batAttack=null)}else this.bat.position.copy(l),this.bat.rotation.y=Math.sin(r*10)*.25;this.bat.rotation.z=Math.sin(r*18)*.35,this.bat.scale.set(1,.88+Math.sin(r*22)*.12,1)}this.bat2.visible&&(this.bat2.position.set(n-.25,1.42+Math.sin(r*6.5+1)*.08,-.78),this.bat2.rotation.y=Math.sin(r*10+1)*.25,this.bat2.rotation.z=Math.sin(r*18+1)*.35,this.bat2.scale.set(1,.88+Math.sin(r*22+1)*.12,1)),this.horses.forEach((p,M)=>{if(!p.visible)return;const y=[.62,.25];p.position.set(n+y[M],0,-.82-M*.12),p.rotation.y=Math.PI+Math.sin(r*7+M)*.08,p.position.y=Math.abs(Math.sin(r*9+M))*.045});for(let p=this.spitShots.length-1;p>=0;p--){const M=this.spitShots[p];M.userData.life-=e;const y=M.userData.target;if(M.userData.life<=0){this.scene.remove(M),this.spitShots.splice(p,1);continue}const T=y!=null&&y.active?y.mesh.position.clone():((g=(f=M.userData.lastTargetPos)==null?void 0:f.clone)==null?void 0:g.call(f))||M.position.clone();y!=null&&y.active&&(M.userData.lastTargetPos=T.clone()),T.y=(y==null?void 0:y.type)==="mob"?.9:1.35;const N=T.clone().sub(M.position),L=N.length();L>.001&&M.position.addScaledVector(N.normalize(),Math.min(L,eb*e));for(let b=0;b<3;b++)this._emitSpitParticle(M.position);const x=T.x-M.position.x,S=T.z-M.position.z;M.rotation.y=Math.atan2(x,S),M.position.distanceTo(T)<.25&&(M.userData.hit||(M.userData.hit=!0,(m=(v=M.userData).onHit)==null||m.call(v,y)),this.scene.remove(M),this.spitShots.splice(p,1))}for(const p of this.spitParticles)if(p.visible){if(p.userData.life-=e,p.userData.life<=0){p.visible=!1;continue}p.position.x+=p.userData.vx*e,p.position.y+=p.userData.vy*e,p.position.z+=p.userData.vz*e,p.material.opacity=.95*(p.userData.life/p.userData.maxLife),p.scale.multiplyScalar(1-e*1.2)}}}const rb=[24.6,49.6,74.6],ab=99.5,ob=Object.values($i).flat(),up=new Map;for(const[s,e]of Object.entries($i))for(const t of e)up.set(t[0],{tier:s,tag:t[3]});function lb(s,e=14){const t=((s==null?void 0:s.acquiredAugments)||[]).slice(-e);if(!t.length)return"<em>없음</em>";const n=(s==null?void 0:s.tags)||{},i=new Set,r=[];for(let a=t.length-1;a>=0;a--){const o=ob.find(c=>c[0]===t[a]),l=(o==null?void 0:o[3])||"gambler";i.has(l)||(i.add(l),r.unshift({name:t[a],tag:l}))}return r.slice(-e).map(({name:a,tag:o})=>{const c=Math.min(4,n[o]||0),h=((s==null?void 0:s.acquiredAugments)||[]).map(d=>up.get(d)).filter(d=>(d==null?void 0:d.tag)===o).map(d=>d.tier),u=Array.from({length:4},(d,f)=>{const g=h[f]||"";return`<span class="${f<c?`on tier-${g}`:""}"></span>`}).join("");return`
      <div class="go-aug-icon" title="${a}">
        <img src="${Tn[o]||Tn.gambler}" alt="">
        <div class="go-aug-pips">${u}</div>
      </div>`}).join("")}class cb{constructor(){this.scoreEl=document.getElementById("score-value"),this.runDiaEl=document.getElementById("run-dia-value"),this.hpFillEl=document.getElementById("hp-fill"),this.hpTextEl=document.getElementById("hp-text"),this.sectionEl=document.getElementById("section-label"),this.progressEl=document.getElementById("run-progress"),this._dmgPool=[],this._dmgIdx=0,this._floatPool=[],this._floatIdx=0,this._hpPool=[],this._dmgStackSeq=0,this._dmgStackAt=0,this._camera=null,this._stageEl=null,this._buildMinimap(),this._buildEnemyHpPool()}setCamera(e,t){this._camera=e,this._stageEl=t}_project(e){if(!this._camera||!this._stageEl)return null;const t=e.clone().project(this._camera);return t.z>=1?null:{x:Math.max(5,Math.min(92,(t.x*.5+.5)*100)),y:Math.max(5,Math.min(85,(-t.y*.5+.5)*100))}}_buildMinimap(){const e=document.createElement("div");e.id="minimap";const t=document.createElement("div");t.id="mm-track",rb.forEach((i,r)=>{const a=document.createElement("div");a.className="mm-dot mm-boss",a.style.bottom=i+"%",a.innerHTML="◆",t.appendChild(a)});const n=document.createElement("div");n.className="mm-dot mm-final",n.style.bottom=ab+"%",n.innerHTML="★",t.appendChild(n),this._mmPlayer=document.createElement("div"),this._mmPlayer.id="mm-player",t.appendChild(this._mmPlayer),e.appendChild(t),document.getElementById("ui-overlay").appendChild(e)}_updateMinimap(e,t){const n=Math.min(100,Math.max(0,e/t*100));this._mmPlayer&&(this._mmPlayer.style.bottom=n+"%")}_buildEnemyHpPool(){const e=document.getElementById("ui-overlay");for(let t=0;t<20;t++){const n=document.createElement("div");n.className="enemy-hp-label",n.style.display="none",e.appendChild(n),this._hpPool.push(n)}}updateEnemyHpLabels(e,t,n){for(const o of this._hpPool)o.style.display="none";const i=n.clientWidth,r=n.clientHeight;let a=0;for(const o of e){if(a>=this._hpPool.length)break;const l=this._hpPool[a++],h=new I(o.mesh.position.x,.46,o.mesh.position.z).project(t);if(h.z>=1)continue;const u=(h.x*.5+.5)*i,d=(h.y*-.5+.5)*r;if(u<-30||u>i+30||d<-20||d>r+20)continue;const f=Math.ceil(o.hp),g=f>=1e3?(f/1e3).toFixed(1)+"k":String(f);let v=o.armor||0;const m=(o.debuffArmorFlat||0)>0;if(m&&(v=Math.max(0,v-o.debuffArmorFlat)),!m&&(o.debuffArmorPct||0)>0&&v>0){const L=v*(1-(o.debuffArmorPct||0));v=Math.max(0,v-Math.max(1,Math.ceil(v-L)))}v=Math.max(0,Math.ceil(v));const p=`<div class="enemy-armor-label"><span class="armor-icon">▣</span>${v}</div>`,y=Math.max(0,Math.min(42,o.mesh.position.z))/42,T=o.type==="final"?1.35:o.type==="boss"?1.25:o.type==="mini"?1.15:1,N=(1.35-y*.65)*T;l.innerHTML=`${p}<div class="enemy-hp-num">${g}</div>`,l.style.display="block",l.style.left=Math.round(u)+"px",l.style.top=Math.round(d)+"px",l.className=`enemy-hp-label ehp-${o.type}`,l.style.transform=`translate(-50%, -50%) scale(${N.toFixed(3)})`}}update(e,t=0,n=2400){if(this.scoreEl&&(this.scoreEl.textContent=String(Math.floor(e.score)).padStart(6,"0")),this.runDiaEl&&(this.runDiaEl.textContent=Math.floor((e.scoreDia||0)+(e.earnedDia||0)).toLocaleString()),this.hpFillEl){const i=Math.max(0,e.hp/e.maxHp*100);this.hpFillEl.style.width=i+"%",this.hpFillEl.style.background=i>50?"#44ee44":i>25?"#eeaa22":"#ee3333"}if(this.hpTextEl){const i=e.shield>0?` 🛡${Math.ceil(e.shield)}`:"";this.hpTextEl.textContent=`${Math.ceil(e.hp)}/${e.maxHp}${i}`}this.sectionEl&&(this.sectionEl.textContent=`SEC ${e.section+1}`),this.progressEl&&(this.progressEl.style.width=Math.min(100,t/n*100)+"%"),this._updateMinimap(t,n)}showDamage(e,t,n,i="physical"){const r=this._getDmgEl();r.className=`float-dmg ${t?"crit":""} dmg-${i}`,t&&i!=="bat"&&i!=="llama"?r.innerHTML=`<img class="crit-icon ${i==="fixed"?"crit-icon-fixed":""}" src="/bananaallergy/assets/ui/crit-arrow.webp" alt=""><span>${Math.round(e)}</span>`:r.textContent=(i==="bat"?"🦇 ":i==="llama"?"🦙 ":"")+Math.round(e);const a=i==="fixed";r.style.color=a||i==="bat"||i==="llama"?"#ffffff":t?"#ff4a22":"#ff8b2f",r.style.webkitTextStroke="0px transparent",r.style.textShadow=t?"0 1px 0 rgba(80,0,0,.45)":a?"0 1px 0 rgba(0,0,0,.28)":"0 1px 0 rgba(70,25,0,.24)",r.style.fontSize=t?"18px":"12px",r.style.fontWeight="900";const o=n?this._project(n):null,l=performance.now();this._dmgStackSeq=l-this._dmgStackAt<260?this._dmgStackSeq+1:0,this._dmgStackAt=l;const c=this._dmgStackSeq%7;o?(r.style.left=o.x+(c%2?.55:-.35)+"%",r.style.top=o.y-4-c*1.45+"%"):(r.style.left=30+Math.random()*40+"%",r.style.top=25+Math.random()*25-c*1.45+"%"),r.style.opacity="1",r.style.transform="translateY(0) translateX(-50%)",r.style.display=t&&i!=="bat"&&i!=="llama"?"flex":"block",requestAnimationFrame(()=>{r.style.transition="opacity 1.15s, transform 1.15s",r.style.opacity="0",r.style.transform=`translateY(${-38-c*2}px) translateX(-50%) scale(1.08)`}),setTimeout(()=>{r.style.display="none",r.style.transition=""},1200)}showFloatText(e,t="#ffffff",n=null){const i=this._getFloatEl();i.textContent=e,i.style.color="#ffd95a";const r=n?this._project(n):null;i.style.left=(r?r.x:50)+"%",i.style.top=(r?r.y:48)+"%",i.style.fontSize="15px",i.style.webkitTextStroke="0px transparent",i.style.textShadow="none",i.style.fontWeight="900",i.style.opacity="1",i.style.transform="translate(-50%, 0) scale(1)",i.style.display="block",requestAnimationFrame(()=>{i.style.transition="opacity 2s, transform 2s",i.style.opacity="0",i.style.transform="translate(-50%, -72px) scale(1.14)"}),setTimeout(()=>{i.style.display="none",i.style.transition=""},2100)}_getDmgEl(){if(this._dmgPool.length<10){const e=document.createElement("div");e.className="float-dmg",document.getElementById("ui-overlay").appendChild(e),this._dmgPool.push(e)}return this._dmgPool[this._dmgIdx++%this._dmgPool.length]}_getFloatEl(){if(this._floatPool.length<8){const e=document.createElement("div");e.className="float-text",document.getElementById("ui-overlay").appendChild(e),this._floatPool.push(e)}return this._floatPool[this._floatIdx++%this._floatPool.length]}showToast(e,t=2200){const n=document.getElementById("toast");n&&(n.textContent=e,n.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>n.classList.remove("show"),t))}showSection(e){this.showToast(`✦ SECTION ${e} ✦`,2800)}showGameOver(e,t,n,i,r=null){var l;(l=document.getElementById("gameover-overlay"))==null||l.remove();const a=document.createElement("div");a.id="gameover-overlay";const o=r?[["체력",`${Math.ceil(r.hp||0)}/${Math.ceil(r.maxHp||0)}`],["바나나 피해",`${((r.bananaDamage||0)*(r.bananaDamageMul||1)).toFixed(1)}`],["바나나 공속",`${(r.bananaAS||0).toFixed(2)}/초`],["투사체",`${(r.bananaCount||0)+(r.projectileSynergyBonus||0)}개`],["바나나 사거리",`${(r.bananaRange||0).toFixed(2)}`],["똥 저장",`${r.poopStored||0}/${r.poopMax||0}`],["똥 피해",`${((r.poopDamage||0)*(r.poopDamageMul||1)).toFixed(1)}`],["똥 쿨",`${(r.poopCD||0).toFixed(2)}초`],["똥 사거리",`${(r.poopRange||0).toFixed(2)}`],["치명타 확률",`${Math.round((r.crit||0)*100)}%`],["치명타 피해량",`${Math.round((r.critDmg||0)*100)}%`],["방어구 관통력",`${(r.flatPen||0).toFixed(0)} / ${((r.percentPen||0)*100).toFixed(1)}%`],["좌우속도",`${(r.moveSpeed||0).toFixed(2)}`]]:[];a.innerHTML=`
      <div class="go-box">
        <div class="go-title ${e?"go-clear":"go-dead"}">${e?"🎉 클리어!":"💀 게임 오버"}</div>
        <div class="go-stats">
          <div class="go-row"><span>점수</span><span>${Math.floor(t).toLocaleString()}</span></div>
          <div class="go-row"><span>진행도</span><span>${i}%</span></div>
          <div class="go-row dia-row"><span>💎 획득</span><span>+${n}</span></div>
        </div>
        ${r?`
          <div class="go-summary">
            <div class="go-summary-title">최종 스탯</div>
            <div class="go-summary-grid">
              ${o.map(([c,h])=>`<div><span>${c}</span><strong>${h}</strong></div>`).join("")}
            </div>
            <div class="go-summary-title">획득 증강</div>
            <div class="go-aug-list">
              ${lb(r)}
            </div>
          </div>`:""}
        <div class="go-btns">
          <button class="go-btn go-ranking">랭킹보기</button>
          <button class="go-btn go-restart">다시하기</button>
          <button class="go-btn go-menu">타이틀로</button>
        </div>
      </div>`,document.getElementById("ui-overlay").appendChild(a),a.querySelector(".go-restart").addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:restart"))}),a.querySelector(".go-ranking").addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:ranking"))}),a.querySelector(".go-menu").addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:menu"))})}}const hb=5.25,ws=1325,dp=4,Ui=ws*dp,yd=30,ub=40,fp=.6,pp=1.8,db=24;function fb(){const s=[];let e=0;for(let t=0;t<dp;t++){const n=t*ws,i=[];for(let d=0;d<yd;d++){const f=n+40+d*(ws-80)/(yd-1);i.push(f-fp),s.push({d:f,type:"gate",sec:t})}const r=[];for(let d=0;d<i.length-1;d++)r.push((i[d]+i[d+1])/2);const a=d=>d+pp,o=d=>{let f=0;for(let g=1;g<r.length;g++)Math.abs(r[g]-d)<Math.abs(r[f]-d)&&(f=g);return f},l=[.25,.5,.75].map(d=>o(n+ws*d)),c=r.length-1,h=new Set(t<3?[...l,c]:l),u=[];for(let d=0;d<r.length;d++)h.has(d)||u.push(d);if(t===0)for(const d of u){const f=a(r[d]),v=e-t*35<15?1:2;s.push({d:f,type:"mobs",sec:t,count:v,mobIdx:e}),e+=v}else{const d=Math.max(0,35-u.length);u.forEach((f,g)=>{const v=a(r[f]),m=g>=u.length-d?2:1;s.push({d:v,type:"mobs",sec:t,count:m,mobIdx:e}),e+=m})}l.forEach((d,f)=>{s.push({d:a(r[d]),type:"mini",sec:t,idx:f})}),t<3?s.push({d:a(r[c]),type:"sectionBoss",sec:t}):s.push({d:n+ws-12,type:"finalBoss",sec:t})}return s.sort((t,n)=>t.d-n.d)}class pb{constructor(e){this.canvas=e,this.renderer=new Ff({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=je,this.renderer.toneMapping=af,this.renderer.toneMappingExposure=1.05,this.scene=new Wx,this.camera=new en(60,9/16,.1,200),this.camera.position.set(0,7.5,-9),this.camera.lookAt(0,0,13),this._setupLights(),this.world=new wM(this.scene),this.input=new JS(this.canvas.parentElement),this.ui=new cb,this.player=new FM(this.scene,this.input),this.ui.setCamera(this.camera,this.canvas.parentElement),this.enemies=new oS(this.scene),this.projectiles=new ti(this.scene),this.poops=new YS(this.scene,null),this.poops.setRenderer(this.renderer,this.camera),this.petVisuals=new sb(this.scene),this.fences=new yS(this.scene,null,(t,n)=>this._showPlayerFloat(t,n)),this.boxes=new FS(this.scene,null,(t,n)=>this._showPlayerFloat(t,n),t=>this._earnDia(t)),this.boxes.setRenderer(this.renderer,this.camera),this.augments=new kS(null,t=>this._showPlayerFloat(`✨ ${t[0]}`,"#ff7cff"),t=>this._earnDia(t)),this.gs=null,this.clock=new NE,this.paused=!1,this._schedule=[],this._schedIdx=0,this._mobSpawnIdx=0,this._distance=0,this._over=!1,this._finalBossSpawned=!1,this._finalBossProjectiles=[],this._finalBossFireTimer=1.1,this._rafStarted=!1,this._augmentTimers=[],this._buildFinalBossProjectilePool(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onResize(),setTimeout(()=>this.boxes.prewarm(),120)}_setupLights(){this.scene.add(new wE(12113151,5937712,1.1));const e=new Dl(16776160,1.8);e.position.set(5,12,-3),this.scene.add(e);const t=new Dl(13691135,.5);t.position.set(-4,4,8),this.scene.add(t),this.scene.add(new IE(16777215,.4))}_onResize(){const e=this.canvas.parentElement,t=e.clientWidth,n=e.clientHeight;this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}_buildFinalBossProjectilePool(){const e=new oi(.18,10,8),t=new gt({color:10099711,emissive:3932270,emissiveIntensity:.75,flatShading:!0});for(let n=0;n<8;n++){const i=new ye(e,t.clone());i.visible=!1,i.userData={vx:0,vz:0,life:0},this.scene.add(i),this._finalBossProjectiles.push(i)}}startGame(){Vl(),Ge("start"),this.stopGameSession(!1),this.gs=cS(),this.poops.gs=this.gs,this.fences.gs=this.gs,this.boxes.gs=this.gs,this.augments.gs=this.gs,setTimeout(()=>this.boxes.prewarm(),0),this._schedule=fb(),this._schedIdx=0,this._mobSpawnIdx=0,this._distance=db,this._over=!1,this._finalBossSpawned=!1,this._finalBossFireTimer=1.1;for(const e of this.enemies.active)e.deactivate();this.projectiles.reset(),this.poops.reset(),this.fences.reset(),this.boxes.reset(),this._resetFinalBossProjectiles(),this.clock.start(),this._rafStarted||(this._tick=this._tick.bind(this),requestAnimationFrame(this._tick),this._rafStarted=!0)}stopGameSession(e=!0){this.paused=!1,this._over=!0,this._finalBossSpawned=!1;for(const t of this._augmentTimers)clearTimeout(t);this._augmentTimers.length=0;for(const t of this.enemies.active)t.deactivate();this.projectiles.reset(),this.poops.reset(),this.fences.reset(),this.boxes.reset(),this._resetFinalBossProjectiles(),e&&(this.gs=null,this.ui.updateEnemyHpLabels([],this.camera,this.canvas.parentElement))}_tick(){if(requestAnimationFrame(this._tick),this.paused||!this.gs)return;const e=Math.min(this.clock.getDelta(),.05);this.gs.phase==="running"&&!this._over&&this._runFrame(e),this.renderer.render(this.scene,this.camera)}_runFrame(e){const t=this.gs,n=Math.min(1,Math.max(0,this._distance/Ui)),i=1+1.5*Math.pow(n,.82),r=this.enemies.finalBossAlive(),a=hb*i*(r?.25:1);for(this._distance+=a*e,t.section=Math.min(3,Math.floor(this._distance/ws)),t.score=Math.floor(this._distance/Ui*2e3),t.scoreDia=Math.max(0,Math.floor(this._distance/Ui*90));this._schedIdx<this._schedule.length&&this._schedule[this._schedIdx].d<=this._distance+As;){const f=this._schedule[this._schedIdx++],g=f.d-this._distance+fp,v=f.d-this._distance+pp;f.type==="gate"&&this.fences.spawnFence(f.sec,g),f.type==="mobs"&&this._spawnMobs(f.sec,f.count,f.mobIdx,v),f.type==="mini"&&this.enemies.spawnMini(f.sec,f.idx,v),f.type==="sectionBoss"&&this.enemies.spawnSectionBoss(f.sec,v),f.type==="finalBoss"&&!this._finalBossSpawned&&(this._finalBossSpawned=!0,this.enemies.spawnFinalBoss(v))}this.world.update(e,a),this.enemies.update(e,a),this.fences.update(e,a,this.player.x),this.boxes.update(e,a),this._updateFinalBossProjectiles(e,r),this.player.update(e,t),t.regen&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*t.regen*e)),t.shieldRegen&&(t.noHitTime+=e,t.noHitTime>=10&&(t.shield=Math.max(t.shield,t.maxHp*.5)));const o=this.enemies.active;this.projectiles.tryAutoFire(e,t,this.player.x,o)&&this.player.triggerThrow(t.bananaAS),this.projectiles.update(e,o,t),this.poops.accumulate(e),t.poopUnlocked&&t.poopStored>0&&o.length>0&&this.poops.tryFire(this.player.x,0,o);const c=this.poops.update(e,o,this.player.x);for(const f of c)this._applyPoopHit(f.enemy,f.proj,f.mul,f.rangeT);const h=this.projectiles.checkHits(o);for(const{proj:f,enemy:g}of h){Ge("bananaHit");const{physical:v,fixed:m,total:p,isCrit:M}=ti.calcHitDamage(f,g,t);v>0&&this.ui.showDamage(Math.round(v),M,g.mesh.position,"physical"),m>0&&this.ui.showDamage(Math.round(m),M,g.mesh.position,"fixed"),g.takeDamage(p)&&this._killEnemy(g,"banana")}this.boxes.checkPickup(this.player.x);const u=this.enemies.checkMobCollision(this.player.x);u&&this._collideEnemy(u);const d=this.enemies.checkBossCollision();if(d&&this._collideEnemy(d),this._updatePets(e,o),this.petVisuals.update(e,t,this.player.x,o),this._distance>=Ui+100&&!this.enemies.finalBossAlive()){this._endGame(!0);return}this.ui.update(t,this._distance,Ui),this.ui.updateEnemyHpLabels(o,this.camera,this.canvas.parentElement)}_spawnMobs(e,t,n,i=As){const r=t>1?11:0,a=i-r*(t-1)/2;for(let o=0;o<t;o++){const l=t===1?Math.random()<.5?"left":"right":o%2===0?"left":"right",c=ZM(e,n+o),h=sS(n+o);this.enemies.spawnMob(l,c,h,e,a+o*r)}}_resetFinalBossProjectiles(){for(const e of this._finalBossProjectiles)e.visible=!1}_updateFinalBossProjectiles(e,t){const n=this.gs;t!=null&&t.active&&n.phase==="running"&&!this._over&&(this._finalBossFireTimer-=e,this._finalBossFireTimer<=0&&(this._finalBossFireTimer+=2,this._fireFinalBossShot(t)));for(const i of this._finalBossProjectiles)if(i.visible){if(i.userData.life-=e,i.userData.life<=0){i.visible=!1;continue}i.position.x+=i.userData.vx*e,i.position.z+=i.userData.vz*e,i.rotation.x+=e*5,i.rotation.y+=e*7,Math.abs(i.position.z)<.72&&Math.abs(i.position.x-this.player.x)<.48&&(i.visible=!1,this._takePlayerDamage(500,"최종보스 탄환")),i.position.z<-1.2&&(i.visible=!1)}}_fireFinalBossShot(e){const t=this._finalBossProjectiles.find(u=>!u.visible);if(!t)return;const n=e.mesh.position.x,i=e.mesh.position.z-.55,r=this.player.x,a=0,o=r-n,l=a-i,c=Math.max(.01,Math.hypot(o,l)),h=9.2;t.position.set(n,.88,i),t.scale.setScalar(e.type==="final"?1.25:1),t.userData.vx=o/c*h,t.userData.vz=l/c*h,t.userData.life=Math.min(3.2,c/h+.55),t.visible=!0,Ge("bossShot")}_takePlayerDamage(e,t="피격"){var r,a;const n=this.gs;if(!n||this._over)return;let i=e;if(n.shield>0){const o=Math.min(n.shield,i);n.shield-=o,i-=o}i>0&&(n.hp=Math.max(0,n.hp-i),n.noHitTime=0,Ge("hurt"),(a=(r=this.player).flashHit)==null||a.call(r),this._showPlayerFloat(`${t} -${Math.round(i)}`,"#ffd95a")),n.hp<=0&&(n.deathSave?(n.deathSave=!1,n.hp=1,this.ui.showFloatText("한 대만 버팀!","#ff77ff")):this._endGame(!1))}_applyPoopHit(e,t,n,i=0){var f;if(!e.active)return;Ge("poopHit");const r=this.gs;r.poopCount=(r.poopCount||0)+1;const a=e.type==="final"||e.type==="boss"||e.type==="mini";let o=r.poopDamage*r.poopDamageMul*n*(a?r.poopBossMul:1)*r.allDamage;o*=ti.rangeDamageMul(r,i),r.poopJackpot&&Math.random()<r.poopJackpot&&(o*=2);const l=r.poopEveryN,c=((f=r.synergyLevels)==null?void 0:f.poopOnHit)||0,h=c>=2&&c<4?1.15:1;if(l&&r.poopCount%l.n===0){const g=a&&c<4?l.bossPct??l.pct*.5:l.pct;o+=e.maxHp*g*n*h}if(r.poopExplodePct&&Math.random()<.12&&(o+=e.maxHp*r.poopExplodePct*n*h),r.poopArmorDebuffPerHit){const g=r.poopArmorDebuffPerHit*n*h;e.debuffArmorPct=(e.debuffArmorPct||0)+g,e.debuffArmorFlat=(e.debuffArmorFlat||0)+Math.max(1,Math.ceil((e.armor||0)*g))}this.ui.showDamage(Math.round(o),!1,e.mesh.position,"fixed");let u=e.takeDamage(o);const d=(r.poopPhysicalOnHit||0)*n*h+o*(r.poopPhysicalOnHitPct||0);if(!u&&d>0){const{dmg:g}=ti.physicalDamage(d,e,r,{rangeT:i});this.ui.showDamage(Math.round(g),!1,e.mesh.position,"physical"),u=e.takeDamage(g)}u&&this._killEnemy(e,"poop")}_collideEnemy(e){var r,a;if(!e.active||e._bodyCollided)return;e._bodyCollided=!0;const t=this.gs;let n=Math.max(0,Math.ceil(e.hp));if(t.shield>0){const o=Math.min(t.shield,n);t.shield-=o,n-=o}n>0&&(t.hp=Math.max(0,t.hp-n),t.noHitTime=0,Ge("hurt"),(a=(r=this.player).flashHit)==null||a.call(r));const i=t.hp>0||t.deathSave;if(t.hp<=0)if(t.deathSave)t.deathSave=!1,t.hp=1,this.ui.showFloatText("한 대만 버팀!","#ff77ff");else{e.deactivate(),this._endGame(!1);return}i?(this.ui.showFloatText("몸빵 처치!","#ff9b42"),this._killEnemy(e,"body")):e.deactivate()}_killEnemy(e,t){if(!e.active)return;const n=this.gs;if(e.deactivate(),Ge("monsterKill"),n.kills=(n.kills||0)+1,n.killAS&&ao(n,.001),n.killBananaDamage&&(n.bananaDamage+=n.killBananaDamage),n.hpOnKill&&Ba(n,n.hpOnKill),n.hpOn10Kills&&n.kills%10===0&&Ba(n,50),n.poopKillRefund&&t==="poop"){const i=n.poopStored;n.poopStored=Math.min(n.poopStored+10,n.poopMax),n.poopStored>i&&Ge("poopCharge")}if(n.score+=e.type==="final"?5e3:e.type==="boss"?2e3:e.type==="mini"?500:50,e.type==="final")this._endGame(!0);else if(e.type==="mob")this.boxes.trySpawn(e.mesh.position,1);else{const i=setTimeout(()=>{this._augmentTimers=this._augmentTimers.filter(r=>r!==i),!(!this.gs||this._over||this.gs.phase!=="running")&&this.augments.trigger()},250);this._augmentTimers.push(i)}}_updatePets(e,t){const n=this.gs,i=ub*.384;if(n.bat>0){const r=t.filter(a=>a.active&&!a._batQueued&&!a._batHit&&a.mesh.position.z>-1.5&&a.mesh.position.z<i).sort((a,o)=>a.mesh.position.z-o.mesh.position.z).slice(0,Math.max(1,n.bat||1));for(const a of r){a._batQueued=!0;const o=.1*(n.petEffectMul||1),l=.02*(n.petEffectMul||1);this.petVisuals.triggerBat(a,c=>{if(!(c!=null&&c.active)||c._batHit)return;c._batHit=!0;const h=c.maxHp*o;Ge("batHit"),this.ui.showDamage(Math.round(h),!1,c.mesh.position,"bat");const u=c.takeDamage(h);c._batLanded=!0,u&&this._killEnemy(c,"pet")},c=>{var h,u;c!=null&&c._batLanded&&(n.hp=Math.min(n.maxHp,n.hp+n.maxHp*l),(u=(h=this.player)._updateHpLabel)==null||u.call(h,n.hp),this.ui.showFloatText(`박쥐 흡혈 +${Math.round(n.maxHp*l)}`,"#b062ff"))})}}if(n.llama>0){const r=i*1.2;if(n.llamaTimer=(n.llamaTimer||0)-e,n.llamaTimer<=0){const a=t.filter(o=>o.active&&o.mesh.position.z>-1.5&&o.mesh.position.z<r).sort((o,l)=>o.mesh.position.z-l.mesh.position.z)[0];a?(n.llamaTimer+=.8/Math.max(1,n.llama),Ge("llamaSpit"),this.petVisuals.triggerLlama(a,o=>{if(!(o!=null&&o.active))return;const l=o.maxHp*.03*(n.petEffectMul||1),c=.05*(n.petEffectMul||1);o.debuffArmorPct=(o.debuffArmorPct||0)+c,o.debuffArmorFlat=(o.debuffArmorFlat||0)+Math.max(1,Math.ceil((o.armor||0)*c)),Ge("poopHit"),this.ui.showDamage(Math.round(l),!1,o.mesh.position,"llama"),o.takeDamage(l)&&this._killEnemy(o,"pet")})):n.llamaTimer=.08}}}_earnDia(e){this.gs&&(this.gs.earnedDia=(this.gs.earnedDia||0)+e)}_showPlayerFloat(e,t="#ffffff"){var i,r,a,o;const n=(o=(a=(r=(i=this.player)==null?void 0:i.root)==null?void 0:r.position)==null?void 0:a.clone)==null?void 0:o.call(a);n&&(n.y+=2.05,n.z+=.25),this.ui.showFloatText(e,t,n||null)}_endGame(e){if(this._over)return;this._over=!0,Ge(e?"clear":"gameover");const t=this.gs,n=Ms();if(n){let i=e?100:Math.max(3,Math.floor(this._distance/Ui*90));i+=Math.floor(t.earnedDia||0),n.diamond=(n.diamond||0)+i,n.bestScore=Math.max(n.bestScore||0,t.score),Lr(),window.dispatchEvent(new CustomEvent("game:profile-save",{detail:{reason:"game-end"}})),this.ui.showGameOver(e,t.score,i,Math.round(this._distance/Ui*100),t)}t.phase="dead"}}const mb=()=>{};var xd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gb=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const r=s[t++];e[n++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=s[t++],a=s[t++],o=s[t++],l=((i&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const r=s[t++],a=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const r=s[i],a=i+1<s.length,o=a?s[i+1]:0,l=i+2<s.length,c=l?s[i+2]:0,h=r>>2,u=(r&3)<<4|o>>4;let d=(o&15)<<2|c>>6,f=c&63;l||(f=64,a||(d=64)),n.push(t[h],t[u],t[d],t[f])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(mp(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):gb(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const r=t[s.charAt(i++)],o=i<s.length?t[s.charAt(i)]:0;++i;const c=i<s.length?t[s.charAt(i)]:64;++i;const u=i<s.length?t[s.charAt(i)]:64;if(++i,r==null||o==null||c==null||u==null)throw new _b;const d=r<<2|o>>4;if(n.push(d),c!==64){const f=o<<4&240|c>>2;if(n.push(f),u!==64){const g=c<<6&192|u;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class _b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vb=function(s){const e=mp(s);return gp.encodeByteArray(e,!0)},ka=function(s){return vb(s).replace(/\./g,"")},yb=function(s){try{return gp.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=()=>xb().__FIREBASE_DEFAULTS__,Mb=()=>{if(typeof process>"u"||typeof xd>"u")return;const s=xd.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Sb=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&yb(s[1]);return e&&JSON.parse(e)},_p=()=>{try{return mb()||Eb()||Mb()||Sb()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},bb=s=>{var e,t;return(t=(e=_p())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Tb=s=>{const e=bb(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},vp=()=>{var s;return(s=_p())==null?void 0:s.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=s.iat||0,r=s.sub||s.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...s};return[ka(JSON.stringify(t)),ka(JSON.stringify(a)),""].join(".")}function Rb(){try{return typeof indexedDB=="object"}catch{return!1}}function Cb(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="FirebaseError";class Ys extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Pb,Object.setPrototypeOf(this,Ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yp.prototype.create)}}class yp{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?Lb(r,n):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Ys(i,o,n)}}function Lb(s,e){return s.replace(Ib,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Ib=/\{\$([^}]+)}/g;function Va(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const r=s[i],a=e[i];if(Ed(r)&&Ed(a)){if(!Va(r,a))return!1}else if(r!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Ed(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(s){return s&&s._delegate?s._delegate:s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Db(s){return(await fetch(s,{credentials:"include"})).ok}class Ir{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ab;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fb(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});n.resolve(r)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);n===o&&a.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&e(r,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ub(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ub(s){return s===Bi?void 0:s}function Fb(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(nt||(nt={}));const Bb={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},kb=nt.INFO,Vb={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},zb=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=Vb[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ep{constructor(e){this.name=e,this._logLevel=kb,this._logHandler=zb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...e),this._logHandler(this,nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...e),this._logHandler(this,nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...e),this._logHandler(this,nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...e),this._logHandler(this,nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...e),this._logHandler(this,nt.ERROR,...e)}}const Hb=(s,e)=>e.some(t=>s instanceof t);let Md,Sd;function Gb(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wb(){return Sd||(Sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,ql=new WeakMap,Sp=new WeakMap,ml=new WeakMap,Ic=new WeakMap;function Xb(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",r),s.removeEventListener("error",a)},r=()=>{t(Si(s.result)),i()},a=()=>{n(s.error),i()};s.addEventListener("success",r),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Mp.set(t,s)}).catch(()=>{}),Ic.set(e,s),e}function $b(s){if(ql.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",r),s.removeEventListener("error",a),s.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",r),s.addEventListener("error",a),s.addEventListener("abort",a)});ql.set(s,e)}let jl={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return ql.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Sp.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Si(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function qb(s){jl=s(jl)}function jb(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(gl(this),e,...t);return Sp.set(n,e.sort?e.sort():[e]),Si(n)}:Wb().includes(s)?function(...e){return s.apply(gl(this),e),Si(Mp.get(this))}:function(...e){return Si(s.apply(gl(this),e))}}function Kb(s){return typeof s=="function"?jb(s):(s instanceof IDBTransaction&&$b(s),Hb(s,Gb())?new Proxy(s,jl):s)}function Si(s){if(s instanceof IDBRequest)return Xb(s);if(ml.has(s))return ml.get(s);const e=Kb(s);return e!==s&&(ml.set(s,e),Ic.set(e,s)),e}const gl=s=>Ic.get(s);function Yb(s,e,{blocked:t,upgrade:n,blocking:i,terminated:r}={}){const a=indexedDB.open(s,e),o=Si(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Si(a.result),l.oldVersion,l.newVersion,Si(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const Jb=["get","getKey","getAll","getAllKeys","count"],Zb=["put","add","delete","clear"],_l=new Map;function bd(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(_l.get(e))return _l.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Zb.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Jb.includes(t)))return;const r=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(o.shift())),(await Promise.all([c[t](...o),i&&l.done]))[0]};return _l.set(e,r),r}qb(s=>({...s,get:(e,t,n)=>bd(e,t)||s.get(e,t,n),has:(e,t)=>!!bd(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(eT(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function eT(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",Td="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Ep("@firebase/app"),tT="@firebase/app-compat",nT="@firebase/analytics-compat",iT="@firebase/analytics",sT="@firebase/app-check-compat",rT="@firebase/app-check",aT="@firebase/auth",oT="@firebase/auth-compat",lT="@firebase/database",cT="@firebase/data-connect",hT="@firebase/database-compat",uT="@firebase/functions",dT="@firebase/functions-compat",fT="@firebase/installations",pT="@firebase/installations-compat",mT="@firebase/messaging",gT="@firebase/messaging-compat",_T="@firebase/performance",vT="@firebase/performance-compat",yT="@firebase/remote-config",xT="@firebase/remote-config-compat",ET="@firebase/storage",MT="@firebase/storage-compat",ST="@firebase/firestore",bT="@firebase/ai",TT="@firebase/firestore-compat",AT="firebase",wT="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="[DEFAULT]",RT={[Kl]:"fire-core",[tT]:"fire-core-compat",[iT]:"fire-analytics",[nT]:"fire-analytics-compat",[rT]:"fire-app-check",[sT]:"fire-app-check-compat",[aT]:"fire-auth",[oT]:"fire-auth-compat",[lT]:"fire-rtdb",[cT]:"fire-data-connect",[hT]:"fire-rtdb-compat",[uT]:"fire-fn",[dT]:"fire-fn-compat",[fT]:"fire-iid",[pT]:"fire-iid-compat",[mT]:"fire-fcm",[gT]:"fire-fcm-compat",[_T]:"fire-perf",[vT]:"fire-perf-compat",[yT]:"fire-rc",[xT]:"fire-rc-compat",[ET]:"fire-gcs",[MT]:"fire-gcs-compat",[ST]:"fire-fst",[TT]:"fire-fst-compat",[bT]:"fire-vertex","fire-js":"fire-js",[AT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map,CT=new Map,Jl=new Map;function Ad(s,e){try{s.container.addComponent(e)}catch(t){si.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Ha(s){const e=s.name;if(Jl.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,s);for(const t of za.values())Ad(t,s);for(const t of CT.values())Ad(t,s);return!0}function PT(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function LT(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bi=new yp("app","Firebase",IT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=wT;function bp(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:Yl,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw bi.create("bad-app-name",{appName:String(i)});if(t||(t=vp()),!t)throw bi.create("no-options");const r=za.get(i);if(r){if(Va(t,r.options)&&Va(n,r.config))return r;throw bi.create("duplicate-app",{appName:i})}const a=new Ob(i);for(const l of Jl.values())a.addComponent(l);const o=new DT(t,n,a);return za.set(i,o),o}function UT(s=Yl){const e=za.get(s);if(!e&&s===Yl&&vp())return bp();if(!e)throw bi.create("no-app",{appName:s});return e}function Ls(s,e,t){let n=RT[s]??s;t&&(n+=`-${t}`);const i=n.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const a=[`Unable to register library "${n}" with version "${e}":`];i&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(a.join(" "));return}Ha(new Ir(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="firebase-heartbeat-database",OT=1,Dr="firebase-heartbeat-store";let vl=null;function Tp(){return vl||(vl=Yb(FT,OT,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Dr)}catch(t){console.warn(t)}}}}).catch(s=>{throw bi.create("idb-open",{originalErrorMessage:s.message})})),vl}async function BT(s){try{const t=(await Tp()).transaction(Dr),n=await t.objectStore(Dr).get(Ap(s));return await t.done,n}catch(e){if(e instanceof Ys)si.warn(e.message);else{const t=bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});si.warn(t.message)}}}async function wd(s,e){try{const n=(await Tp()).transaction(Dr,"readwrite");await n.objectStore(Dr).put(e,Ap(s)),await n.done}catch(t){if(t instanceof Ys)si.warn(t.message);else{const n=bi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});si.warn(n.message)}}}function Ap(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1024,VT=30;class zT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GT(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>VT){const a=WT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){si.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rd(),{heartbeatsToSend:n,unsentEntries:i}=HT(this._heartbeatsCache.heartbeats),r=ka(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return si.warn(t),""}}}function Rd(){return new Date().toISOString().substring(0,10)}function HT(s,e=kT){const t=[];let n=s.slice();for(const i of s){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),Cd(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Cd(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rb()?Cb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await BT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Cd(s){return ka(JSON.stringify({version:2,heartbeats:s})).length}function WT(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(s){Ha(new Ir("platform-logger",e=>new Qb(e),"PRIVATE")),Ha(new Ir("heartbeat",e=>new zT(e),"PRIVATE")),Ls(Kl,Td,s),Ls(Kl,Td,"esm2020"),Ls("fire-js","")}XT("");var Pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wp;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function b(){}b.prototype=S.prototype,x.F=S.prototype,x.prototype=new b,x.prototype.constructor=x,x.D=function(_,E,C){for(var w=Array(arguments.length-2),U=2;U<arguments.length;U++)w[U-2]=arguments[U];return S.prototype[E].apply(_,w)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,S,b){b||(b=0);const _=Array(16);if(typeof S=="string")for(var E=0;E<16;++E)_[E]=S.charCodeAt(b++)|S.charCodeAt(b++)<<8|S.charCodeAt(b++)<<16|S.charCodeAt(b++)<<24;else for(E=0;E<16;++E)_[E]=S[b++]|S[b++]<<8|S[b++]<<16|S[b++]<<24;S=x.g[0],b=x.g[1],E=x.g[2];let C=x.g[3],w;w=S+(C^b&(E^C))+_[0]+3614090360&4294967295,S=b+(w<<7&4294967295|w>>>25),w=C+(E^S&(b^E))+_[1]+3905402710&4294967295,C=S+(w<<12&4294967295|w>>>20),w=E+(b^C&(S^b))+_[2]+606105819&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(S^E&(C^S))+_[3]+3250441966&4294967295,b=E+(w<<22&4294967295|w>>>10),w=S+(C^b&(E^C))+_[4]+4118548399&4294967295,S=b+(w<<7&4294967295|w>>>25),w=C+(E^S&(b^E))+_[5]+1200080426&4294967295,C=S+(w<<12&4294967295|w>>>20),w=E+(b^C&(S^b))+_[6]+2821735955&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(S^E&(C^S))+_[7]+4249261313&4294967295,b=E+(w<<22&4294967295|w>>>10),w=S+(C^b&(E^C))+_[8]+1770035416&4294967295,S=b+(w<<7&4294967295|w>>>25),w=C+(E^S&(b^E))+_[9]+2336552879&4294967295,C=S+(w<<12&4294967295|w>>>20),w=E+(b^C&(S^b))+_[10]+4294925233&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(S^E&(C^S))+_[11]+2304563134&4294967295,b=E+(w<<22&4294967295|w>>>10),w=S+(C^b&(E^C))+_[12]+1804603682&4294967295,S=b+(w<<7&4294967295|w>>>25),w=C+(E^S&(b^E))+_[13]+4254626195&4294967295,C=S+(w<<12&4294967295|w>>>20),w=E+(b^C&(S^b))+_[14]+2792965006&4294967295,E=C+(w<<17&4294967295|w>>>15),w=b+(S^E&(C^S))+_[15]+1236535329&4294967295,b=E+(w<<22&4294967295|w>>>10),w=S+(E^C&(b^E))+_[1]+4129170786&4294967295,S=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(S^b))+_[6]+3225465664&4294967295,C=S+(w<<9&4294967295|w>>>23),w=E+(S^b&(C^S))+_[11]+643717713&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^S&(E^C))+_[0]+3921069994&4294967295,b=E+(w<<20&4294967295|w>>>12),w=S+(E^C&(b^E))+_[5]+3593408605&4294967295,S=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(S^b))+_[10]+38016083&4294967295,C=S+(w<<9&4294967295|w>>>23),w=E+(S^b&(C^S))+_[15]+3634488961&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^S&(E^C))+_[4]+3889429448&4294967295,b=E+(w<<20&4294967295|w>>>12),w=S+(E^C&(b^E))+_[9]+568446438&4294967295,S=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(S^b))+_[14]+3275163606&4294967295,C=S+(w<<9&4294967295|w>>>23),w=E+(S^b&(C^S))+_[3]+4107603335&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^S&(E^C))+_[8]+1163531501&4294967295,b=E+(w<<20&4294967295|w>>>12),w=S+(E^C&(b^E))+_[13]+2850285829&4294967295,S=b+(w<<5&4294967295|w>>>27),w=C+(b^E&(S^b))+_[2]+4243563512&4294967295,C=S+(w<<9&4294967295|w>>>23),w=E+(S^b&(C^S))+_[7]+1735328473&4294967295,E=C+(w<<14&4294967295|w>>>18),w=b+(C^S&(E^C))+_[12]+2368359562&4294967295,b=E+(w<<20&4294967295|w>>>12),w=S+(b^E^C)+_[5]+4294588738&4294967295,S=b+(w<<4&4294967295|w>>>28),w=C+(S^b^E)+_[8]+2272392833&4294967295,C=S+(w<<11&4294967295|w>>>21),w=E+(C^S^b)+_[11]+1839030562&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^S)+_[14]+4259657740&4294967295,b=E+(w<<23&4294967295|w>>>9),w=S+(b^E^C)+_[1]+2763975236&4294967295,S=b+(w<<4&4294967295|w>>>28),w=C+(S^b^E)+_[4]+1272893353&4294967295,C=S+(w<<11&4294967295|w>>>21),w=E+(C^S^b)+_[7]+4139469664&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^S)+_[10]+3200236656&4294967295,b=E+(w<<23&4294967295|w>>>9),w=S+(b^E^C)+_[13]+681279174&4294967295,S=b+(w<<4&4294967295|w>>>28),w=C+(S^b^E)+_[0]+3936430074&4294967295,C=S+(w<<11&4294967295|w>>>21),w=E+(C^S^b)+_[3]+3572445317&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^S)+_[6]+76029189&4294967295,b=E+(w<<23&4294967295|w>>>9),w=S+(b^E^C)+_[9]+3654602809&4294967295,S=b+(w<<4&4294967295|w>>>28),w=C+(S^b^E)+_[12]+3873151461&4294967295,C=S+(w<<11&4294967295|w>>>21),w=E+(C^S^b)+_[15]+530742520&4294967295,E=C+(w<<16&4294967295|w>>>16),w=b+(E^C^S)+_[2]+3299628645&4294967295,b=E+(w<<23&4294967295|w>>>9),w=S+(E^(b|~C))+_[0]+4096336452&4294967295,S=b+(w<<6&4294967295|w>>>26),w=C+(b^(S|~E))+_[7]+1126891415&4294967295,C=S+(w<<10&4294967295|w>>>22),w=E+(S^(C|~b))+_[14]+2878612391&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~S))+_[5]+4237533241&4294967295,b=E+(w<<21&4294967295|w>>>11),w=S+(E^(b|~C))+_[12]+1700485571&4294967295,S=b+(w<<6&4294967295|w>>>26),w=C+(b^(S|~E))+_[3]+2399980690&4294967295,C=S+(w<<10&4294967295|w>>>22),w=E+(S^(C|~b))+_[10]+4293915773&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~S))+_[1]+2240044497&4294967295,b=E+(w<<21&4294967295|w>>>11),w=S+(E^(b|~C))+_[8]+1873313359&4294967295,S=b+(w<<6&4294967295|w>>>26),w=C+(b^(S|~E))+_[15]+4264355552&4294967295,C=S+(w<<10&4294967295|w>>>22),w=E+(S^(C|~b))+_[6]+2734768916&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~S))+_[13]+1309151649&4294967295,b=E+(w<<21&4294967295|w>>>11),w=S+(E^(b|~C))+_[4]+4149444226&4294967295,S=b+(w<<6&4294967295|w>>>26),w=C+(b^(S|~E))+_[11]+3174756917&4294967295,C=S+(w<<10&4294967295|w>>>22),w=E+(S^(C|~b))+_[2]+718787259&4294967295,E=C+(w<<15&4294967295|w>>>17),w=b+(C^(E|~S))+_[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,x.g[2]=x.g[2]+E&4294967295,x.g[3]=x.g[3]+C&4294967295}n.prototype.v=function(x,S){S===void 0&&(S=x.length);const b=S-this.blockSize,_=this.C;let E=this.h,C=0;for(;C<S;){if(E==0)for(;C<=b;)i(this,x,C),C+=this.blockSize;if(typeof x=="string"){for(;C<S;)if(_[E++]=x.charCodeAt(C++),E==this.blockSize){i(this,_),E=0;break}}else for(;C<S;)if(_[E++]=x[C++],E==this.blockSize){i(this,_),E=0;break}}this.h=E,this.o+=S},n.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;S=this.o*8;for(var b=x.length-8;b<x.length;++b)x[b]=S&255,S/=256;for(this.v(x),x=Array(16),S=0,b=0;b<4;++b)for(let _=0;_<32;_+=8)x[S++]=this.g[b]>>>_&255;return x};function r(x,S){var b=o;return Object.prototype.hasOwnProperty.call(b,x)?b[x]:b[x]=S(x)}function a(x,S){this.h=S;const b=[];let _=!0;for(let E=x.length-1;E>=0;E--){const C=x[E]|0;_&&C==S||(b[E]=C,_=!1)}this.g=b}var o={};function l(x){return-128<=x&&x<128?r(x,function(S){return new a([S|0],S<0?-1:0)}):new a([x|0],x<0?-1:0)}function c(x){if(isNaN(x)||!isFinite(x))return u;if(x<0)return m(c(-x));const S=[];let b=1;for(let _=0;x>=b;_++)S[_]=x/b|0,b*=4294967296;return new a(S,0)}function h(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return m(h(x.substring(1),S));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=c(Math.pow(S,8));let _=u;for(let C=0;C<x.length;C+=8){var E=Math.min(8,x.length-C);const w=parseInt(x.substring(C,C+E),S);E<8?(E=c(Math.pow(S,E)),_=_.j(E).add(c(w))):(_=_.j(b),_=_.add(c(w)))}return _}var u=l(0),d=l(1),f=l(16777216);s=a.prototype,s.m=function(){if(v(this))return-m(this).m();let x=0,S=1;for(let b=0;b<this.g.length;b++){const _=this.i(b);x+=(_>=0?_:4294967296+_)*S,S*=4294967296}return x},s.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(g(this))return"0";if(v(this))return"-"+m(this).toString(x);const S=c(Math.pow(x,6));var b=this;let _="";for(;;){const E=T(b,S).g;b=p(b,E.j(S));let C=((b.g.length>0?b.g[0]:b.h)>>>0).toString(x);if(b=E,g(b))return C+_;for(;C.length<6;)C="0"+C;_=C+_}},s.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function g(x){if(x.h!=0)return!1;for(let S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function v(x){return x.h==-1}s.l=function(x){return x=p(this,x),v(x)?-1:g(x)?0:1};function m(x){const S=x.g.length,b=[];for(let _=0;_<S;_++)b[_]=~x.g[_];return new a(b,~x.h).add(d)}s.abs=function(){return v(this)?m(this):this},s.add=function(x){const S=Math.max(this.g.length,x.g.length),b=[];let _=0;for(let E=0;E<=S;E++){let C=_+(this.i(E)&65535)+(x.i(E)&65535),w=(C>>>16)+(this.i(E)>>>16)+(x.i(E)>>>16);_=w>>>16,C&=65535,w&=65535,b[E]=w<<16|C}return new a(b,b[b.length-1]&-2147483648?-1:0)};function p(x,S){return x.add(m(S))}s.j=function(x){if(g(this)||g(x))return u;if(v(this))return v(x)?m(this).j(m(x)):m(m(this).j(x));if(v(x))return m(this.j(m(x)));if(this.l(f)<0&&x.l(f)<0)return c(this.m()*x.m());const S=this.g.length+x.g.length,b=[];for(var _=0;_<2*S;_++)b[_]=0;for(_=0;_<this.g.length;_++)for(let E=0;E<x.g.length;E++){const C=this.i(_)>>>16,w=this.i(_)&65535,U=x.i(E)>>>16,z=x.i(E)&65535;b[2*_+2*E]+=w*z,M(b,2*_+2*E),b[2*_+2*E+1]+=C*z,M(b,2*_+2*E+1),b[2*_+2*E+1]+=w*U,M(b,2*_+2*E+1),b[2*_+2*E+2]+=C*U,M(b,2*_+2*E+2)}for(x=0;x<S;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=S;x<2*S;x++)b[x]=0;return new a(b,0)};function M(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function y(x,S){this.g=x,this.h=S}function T(x,S){if(g(S))throw Error("division by zero");if(g(x))return new y(u,u);if(v(x))return S=T(m(x),S),new y(m(S.g),m(S.h));if(v(S))return S=T(x,m(S)),new y(m(S.g),S.h);if(x.g.length>30){if(v(x)||v(S))throw Error("slowDivide_ only works with positive integers.");for(var b=d,_=S;_.l(x)<=0;)b=N(b),_=N(_);var E=L(b,1),C=L(_,1);for(_=L(_,2),b=L(b,2);!g(_);){var w=C.add(_);w.l(x)<=0&&(E=E.add(b),C=w),_=L(_,1),b=L(b,1)}return S=p(x,E.j(S)),new y(E,S)}for(E=u;x.l(S)>=0;){for(b=Math.max(1,Math.floor(x.m()/S.m())),_=Math.ceil(Math.log(b)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),C=c(b),w=C.j(S);v(w)||w.l(x)>0;)b-=_,C=c(b),w=C.j(S);g(C)&&(C=d),E=E.add(C),x=p(x,w)}return new y(E,x)}s.B=function(x){return T(this,x).h},s.and=function(x){const S=Math.max(this.g.length,x.g.length),b=[];for(let _=0;_<S;_++)b[_]=this.i(_)&x.i(_);return new a(b,this.h&x.h)},s.or=function(x){const S=Math.max(this.g.length,x.g.length),b=[];for(let _=0;_<S;_++)b[_]=this.i(_)|x.i(_);return new a(b,this.h|x.h)},s.xor=function(x){const S=Math.max(this.g.length,x.g.length),b=[];for(let _=0;_<S;_++)b[_]=this.i(_)^x.i(_);return new a(b,this.h^x.h)};function N(x){const S=x.g.length+1,b=[];for(let _=0;_<S;_++)b[_]=x.i(_)<<1|x.i(_-1)>>>31;return new a(b,x.h)}function L(x,S){const b=S>>5;S%=32;const _=x.g.length-b,E=[];for(let C=0;C<_;C++)E[C]=S>0?x.i(C+b)>>>S|x.i(C+b+1)<<32-S:x.i(C+b);return new a(E,x.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=c,a.fromString=h,wp=a}).apply(typeof Pd<"u"?Pd:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js="12.13.0";function $T(s){Js=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Ep("@firebase/firestore");function Ga(s,...e){if(Hs.logLevel<=nt.DEBUG){const t=e.map(Nc);Hs.debug(`Firestore (${Js}): ${s}`,...t)}}function Dc(s,...e){if(Hs.logLevel<=nt.ERROR){const t=e.map(Nc);Hs.error(`Firestore (${Js}): ${s}`,...t)}}function Rp(s,...e){if(Hs.logLevel<=nt.WARN){const t=e.map(Nc);Hs.warn(`Firestore (${Js}): ${s}`,...t)}}function Nc(s){if(typeof s=="string")return s;try{return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Cp(s,n,t)}function Cp(s,e,t){let n=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Dc(n),new Error(n)}function un(s,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,s||Cp(e,i,n)}function Gr(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class ge extends Ys{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nn.UNAUTHENTICATED))}shutdown(){}}class jT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class KT{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(un(typeof e.accessToken=="string",42297,{t:e}),new Pp(e.accessToken,new nn(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class YT{constructor(e,t,n){this.i=e,this.o=t,this.u=n,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.l=new Map}h(){return this.u?this.u():null}get headers(){this.l.set("X-Goog-AuthUser",this.i);const e=this.h();return e&&this.l.set("Authorization",e),this.o&&this.l.set("X-Goog-Iam-Authorization-Token",this.o),this.l}}class JT{constructor(e,t,n){this.i=e,this.o=t,this.u=n}getToken(){return Promise.resolve(new YT(this.i,this.o,this.u))}start(e,t){e.enqueueRetryable(()=>t(nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ld{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZT{constructor(e,t){this.m=t,this.appCheck=null,this.P=null,LT(e)&&e.settings.appCheckToken&&(this.P=e.settings.appCheckToken),t.onInit(n=>{this.appCheck=n})}getToken(){return this.P?Promise.resolve(new Ld(this.P)):this.appCheck?this.appCheck.getToken().then(e=>e?(un(typeof e.token=="string",3470,{tokenResult:e}),new Ld(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t,n,i,r,a,o,l,c,h,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=u}}const Zl="(default)";class Nr{constructor(e,t){this.projectId=e,this.database=t||Zl}static empty(){return new Nr("","")}get isDefaultDatabase(){return this.database===Zl}isEqual(e){return e instanceof Nr&&e.projectId===this.projectId&&e.database===this.database}}function eA(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ge(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nr(s.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=tA(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%62))}return n}}function bt(s,e){return s<e?-1:s>e?1:0}function Ql(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const i=s.charAt(n),r=e.charAt(n);if(i!==r)return yl(i)===yl(r)?bt(i,r):yl(i)?1:-1}return bt(s.length,e.length)}const iA=55296,sA=57343;function yl(s){const e=s.charCodeAt(0);return e>=iA&&e<=sA}function Lp(s,e,t){return s.length===e.length&&s.every((n,i)=>t(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="__name__";class Nn{constructor(e,t,n){t===void 0?t=0:t>e.length&&yt(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&yt(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Nn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nn?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const r=Nn.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return bt(e.length,t.length)}static compareSegments(e,t){const n=Nn.isNumericId(e),i=Nn.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Nn.extractNumericId(e).compare(Nn.extractNumericId(t)):Ql(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wp.fromString(e.substring(4,e.length-2))}}class Et extends Nn{construct(e,t,n){return new Et(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ge(re.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Et(t)}static emptyPath(){return new Et([])}}const rA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends Nn{construct(e,t,n){return new sn(e,t,n)}static isValidIdentifier(e){return rA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Id}static keyField(){return new sn([Id])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(n.length===0)throw new ge(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const o=e[i];if(o==="\\"){if(i+1===e.length)throw new ge(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ge(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else o==="`"?(a=!a,i++):o!=="."||a?(n+=o,i++):(r(),i++)}if(r(),a)throw new ge(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.path=e}static fromPath(e){return new Ot(Et.fromString(e))}static fromName(e){return new Ot(Et.fromString(e).popFirst(5))}static empty(){return new Ot(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ot(new Et(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(s,e,t){if(!t)throw new ge(re.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Dd(s){if(!Ot.isDocumentKey(s))throw new ge(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Nd(s){if(Ot.isDocumentKey(s))throw new ge(re.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Dp(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function lo(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":yt(12329,{type:typeof s})}function co(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new ge(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lo(s);throw new ge(re.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta=null;function aA(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(s){return s==null}function Wa(s){return s===0&&1/s==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="RestConnection",lA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cA{get T(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.R=t+"://"+e.host,this.V=`projects/${n}/databases/${i}`,this.A=this.databaseId.database===Zl?`project_id=${n}`:`project_id=${n}&database_id=${i}`}I(e,t,n,i,r){const a=aA(),o=this.p(e,t.toUriEncodedString());Ga(xl,`Sending RPC '${e}' ${a}:`,o,n);const l={"google-cloud-resource-prefix":this.V,"x-goog-request-params":this.A};this.F(l,i,r);const{host:c}=new URL(o),h=xp(c);return this.v(e,o,l,n,h).then(u=>(Ga(xl,`Received RPC '${e}' ${a}: `,u),u),u=>{throw Rp(xl,`RPC '${e}' ${a} failed with error: `,u,"url: ",o,"request:",n),u})}D(e,t,n,i,r,a){return this.I(e,t,n,i,r)}F(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Js}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),n&&n.headers.forEach((i,r)=>e[r]=i)}p(e,t){const n=lA[e];let i=`${this.R}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ud,qe;function Fd(s){if(s===void 0)return Dc("RPC_ERROR","HTTP error has no status"),re.UNKNOWN;switch(s){case 200:return re.OK;case 400:return re.FAILED_PRECONDITION;case 401:return re.UNAUTHENTICATED;case 403:return re.PERMISSION_DENIED;case 404:return re.NOT_FOUND;case 409:return re.ABORTED;case 416:return re.OUT_OF_RANGE;case 429:return re.RESOURCE_EXHAUSTED;case 499:return re.CANCELLED;case 500:return re.UNKNOWN;case 501:return re.UNIMPLEMENTED;case 503:return re.UNAVAILABLE;case 504:return re.DEADLINE_EXCEEDED;default:return s>=200&&s<300?re.OK:s>=400&&s<500?re.FAILED_PRECONDITION:s>=500&&s<600?re.INTERNAL:re.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(qe=Ud||(Ud={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";class hA extends cA{S(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,i,r){var l;const a=JSON.stringify(i);let o;try{const c={method:"POST",headers:n,body:a};r&&(c.credentials="include"),o=await fetch(t,c)}catch(c){const h=c;throw new ge(Fd(h.status),"Request failed with error: "+h.statusText)}if(!o.ok){let c=await o.json();Array.isArray(c)&&(c=c[0]);const h=(l=c==null?void 0:c.error)==null?void 0:l.message;throw new ge(Fd(o.status),`Request failed with error: ${h??o.statusText}`)}return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function ho(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new uA("Invalid base64 string: "+r):r}}(e);return new ri(t)}static fromUint8Array(e){const t=function(i){let r="";for(let a=0;a<i.length;++a)r+=String.fromCharCode(i[a]);return r}(e);return new ri(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return bt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ri.EMPTY_BYTE_STRING=new ri("");const dA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yi(s){if(un(!!s,39018),typeof s=="string"){let e=0;const t=dA.exec(s);if(un(!!t,46558,{timestamp:s}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Tt(s.seconds),nanos:Tt(s.nanos)}}function Tt(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Ur(s){return typeof s=="string"?ri.fromBase64String(s):ri.fromUint8Array(s)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(s,e){const t={typeString:s};return e&&(t.value=e),t}function Wr(s,e){if(!Dp(s))throw new ge(re.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,r="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const a=s[n];if(i&&typeof a!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${n}' field to equal '${r.value}'`;break}}if(t)throw new ge(re.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=-62135596800,kd=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*kd);return new wt(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ge(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ge(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bd)throw new ge(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kd}_compareTo(e){return this.seconds===e.seconds?bt(this.nanoseconds,e.nanoseconds):bt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wr(e,wt._jsonSchema))return new wt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:En("string",wt._jsonSchemaVersion),seconds:En("number"),nanoseconds:En("number")};function Up(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{}).__type__)==null?void 0:n.stringValue)==="server_timestamp"}function Fp(s){const e=s.mapValue.fields.__previous_value__;return Up(e)?Fp(e):e}function Fr(s){const e=Yi(s.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="__type__",fA="__max__",Aa={},Bp="__vector__",Xa="value";function Ji(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Up(s)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===fA}(s)?9007199254740991:function(t){var i,r;return((r=(((i=t==null?void 0:t.mapValue)==null?void 0:i.fields)||{})[Op])==null?void 0:r.stringValue)===Bp}(s)?10:11:yt(28295,{value:s})}function $a(s,e){if(s===e)return!0;const t=Ji(s);if(t!==Ji(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Fr(s).isEqual(Fr(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const a=Yi(i.timestampValue),o=Yi(r.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(i,r){return Ur(i.bytesValue).isEqual(Ur(r.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(i,r){return Tt(i.geoPointValue.latitude)===Tt(r.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(r.geoPointValue.longitude)}(s,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Tt(i.integerValue)===Tt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const a=Tt(i.doubleValue),o=Tt(r.doubleValue);return a===o?Wa(a)===Wa(o):isNaN(a)&&isNaN(o)}return!1}(s,e);case 9:return Lp(s.arrayValue.values||[],e.arrayValue.values||[],$a);case 10:case 11:return function(i,r){const a=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Od(a)!==Od(o))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(o[l]===void 0||!$a(a[l],o[l])))return!1;return!0}(s,e);default:return yt(52216,{left:s})}}function Or(s,e){return(s.values||[]).find(t=>$a(t,e))!==void 0}function qa(s,e){if(s===e)return 0;const t=Ji(s),n=Ji(e);if(t!==n)return bt(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return bt(s.booleanValue,e.booleanValue);case 2:return function(r,a){const o=Tt(r.integerValue||r.doubleValue),l=Tt(a.integerValue||a.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(s,e);case 3:return Vd(s.timestampValue,e.timestampValue);case 4:return Vd(Fr(s),Fr(e));case 5:return Ql(s.stringValue,e.stringValue);case 6:return function(r,a){const o=Ur(r),l=Ur(a);return o.compareTo(l)}(s.bytesValue,e.bytesValue);case 7:return function(r,a){const o=r.split("/"),l=a.split("/");for(let c=0;c<o.length&&c<l.length;c++){const h=bt(o[c],l[c]);if(h!==0)return h}return bt(o.length,l.length)}(s.referenceValue,e.referenceValue);case 8:return function(r,a){const o=bt(Tt(r.latitude),Tt(a.latitude));return o!==0?o:bt(Tt(r.longitude),Tt(a.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return zd(s.arrayValue,e.arrayValue);case 10:return function(r,a){var d,f,g,v;const o=r.fields||{},l=a.fields||{},c=(d=o[Xa])==null?void 0:d.arrayValue,h=(f=l[Xa])==null?void 0:f.arrayValue,u=bt(((g=c==null?void 0:c.values)==null?void 0:g.length)||0,((v=h==null?void 0:h.values)==null?void 0:v.length)||0);return u!==0?u:zd(c,h)}(s.mapValue,e.mapValue);case 11:return function(r,a){if(r===Aa&&a===Aa)return 0;if(r===Aa)return 1;if(a===Aa)return-1;const o=r.fields||{},l=Object.keys(o),c=a.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let u=0;u<l.length&&u<h.length;++u){const d=Ql(l[u],h[u]);if(d!==0)return d;const f=qa(o[l[u]],c[h[u]]);if(f!==0)return f}return bt(l.length,h.length)}(s.mapValue,e.mapValue);default:throw yt(23264,{C:t})}}function Vd(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return bt(s,e);const t=Yi(s),n=Yi(e),i=bt(t.seconds,n.seconds);return i!==0?i:bt(t.nanos,n.nanos)}function zd(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const r=qa(t[i],n[i]);if(r)return r}return bt(t.length,n.length)}function Hd(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function kp(s){return!!s&&"arrayValue"in s}function Gd(s){return!!s&&"nullValue"in s}function Wd(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function El(s){return!!s&&"mapValue"in s}function Er(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return ho(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Er(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Er(s.arrayValue.values[t]);return e}return{...s}}class Xd{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{}class Ln extends Vp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new pA(e,t,n):t==="array-contains"?new _A(e,n):t==="in"?new vA(e,n):t==="not-in"?new yA(e,n):t==="array-contains-any"?new xA(e,n):new Ln(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new mA(e,n):new gA(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(qa(t,this.value)):t!==null&&Ji(this.value)===Ji(t)&&this.matchesComparison(qa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return yt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xr extends Vp{constructor(e,t){super(),this.filters=e,this.op=t,this.N=null}static create(e,t){return new Xr(e,t)}matches(e){return function(n){return n.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.N!==null||(this.N=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.N}getFilters(){return Object.assign([],this.filters)}}class pA extends Ln{constructor(e,t,n){super(e,t,n),this.key=Ot.fromName(n.referenceValue)}matches(e){const t=Ot.comparator(e.key,this.key);return this.matchesComparison(t)}}class mA extends Ln{constructor(e,t){super(e,"in",t),this.keys=zp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gA extends Ln{constructor(e,t){super(e,"not-in",t),this.keys=zp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zp(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>Ot.fromName(n.referenceValue))}class _A extends Ln{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kp(t)&&Or(t.arrayValue,this.value)}}class vA extends Ln{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Or(this.value.arrayValue,t)}}class yA extends Ln{constructor(e,t){super(e,"not-in",t)}matches(e){if(Or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Or(this.value.arrayValue,t)}}class xA extends Ln{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Or(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{static fromTimestamp(e){return new Gt(e)}static min(){return new Gt(new wt(0,0))}static max(){return new Gt(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.comparator=e,this.root=t||Wt.EMPTY}insert(e,t){return new ja(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new ja(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=n??Wt.RED,this.left=i??Wt.EMPTY,this.right=r??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Wt(e??this.key,t??this.value,n??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Wt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw yt(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw yt(27949);return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw yt(57766)}get value(){throw yt(16141)}get color(){throw yt(16727)}get left(){throw yt(29726)}get right(){throw yt(36894)}copy(e,t,n,i,r){return this}insert(e,t,n){return new Wt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.comparator=e,this.data=new ja(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $d(this.data.getIterator())}getIteratorFrom(e){return new $d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=n.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Br(this.comparator);return t.data=e,t}}class $d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new kr([])}unionWith(e){let t=new Br(sn.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new kr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lp(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!El(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Er(t)}setAll(e){let t=sn.emptyPath(),n={},i=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=o.popLast()}a?n[o.lastSegment()]=Er(a):i.push(o.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());El(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $a(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];El(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ho(t,(i,r)=>e[i]=r);for(const i of n)delete e[i]}clone(){return new Rn(Er(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,n,i,r,a,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=a,this.documentState=o}static newInvalidDocument(e){return new On(e,0,Gt.min(),Gt.min(),Gt.min(),Rn.empty(),0)}static newFoundDocument(e,t,n,i){return new On(e,1,t,Gt.min(),n,i,0)}static newNoDocument(e,t){return new On(e,2,t,Gt.min(),Gt.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new On(e,3,t,Gt.min(),Gt.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Gt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Gt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof On&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new On(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,t=null,n=[],i=[],r=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=a,this.endAt=o,this.O=null}}function qd(s,e=null,t=[],n=[],i=null,r=null,a=null){return new EA(s,e,t,n,i,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t=null,n=[],i=[],r=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=a,this.startAt=o,this.endAt=l,this.q=null,this.L=null,this.B=null,this.startAt,this.endAt}}function MA(s){return s.collectionGroup!==null}function SA(s){const e=Gr(s);if(e.q===null){e.q=[];const t=new Set;for(const r of e.explicitOrderBy)e.q.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Br(sn.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.q.push(new ec(r,n))}),t.has(sn.keyField().canonicalString())||e.q.push(new ec(sn.keyField(),n))}return e.q}function bA(s){const e=Gr(s);return e.L||(e.L=TA(e,SA(s))),e.L}function TA(s,e){if(s.limitType==="F")return qd(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new ec(i.field,r)});const t=s.endAt?new Xd(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new Xd(s.startAt.position,s.startAt.inclusive):null;return qd(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function tc(s,e){const t=s.filters.concat([e]);return new Hp(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wa(e)?"-0":e}}function AA(s,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Wa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):Gp(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this._=void 0}}class Wp extends uo{}class wA extends uo{constructor(e){super(),this.elements=e}}class RA extends uo{constructor(e){super(),this.elements=e}}class CA extends uo{constructor(e,t){super(),this.serializer=e,this.$=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t){this.field=e,this.transform=t}}class Mr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mr}static exists(e){return new Mr(void 0,e)}static updateTime(e){return new Mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class fo{}class Xp extends fo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $p extends fo{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}class LA extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IA extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={asc:"ASCENDING",desc:"DESCENDING"},NA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UA={and:"AND",or:"OR"};class FA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nc(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OA(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function BA(s,e){return nc(s,e.toTimestamp())}function Sr(s){return un(!!s,49232),Gt.fromTimestamp(function(t){const n=Yi(t);return new wt(n.seconds,n.nanos)}(s))}function Uc(s,e){return ic(s,e).canonicalString()}function ic(s,e){const t=function(i){return new Et(["projects",i.projectId,"databases",i.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Ka(s,e){return Uc(s.databaseId,e.path)}function sc(s,e){const t=function(i){const r=Et.fromString(i);return un(jp(r),10190,{key:r.toString()}),r}(e);if(t.get(1)!==s.databaseId.projectId)throw new ge(re.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new ge(re.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new Ot(function(i){return un(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}(t))}function jd(s,e,t){return{name:Ka(s,e),fields:t.value.mapValue.fields}}function kA(s,e){return"found"in e?function(n,i){un(!!i.found,43571),i.found.name,i.found.updateTime;const r=sc(n,i.found.name),a=Sr(i.found.updateTime),o=i.found.createTime?Sr(i.found.createTime):Gt.min(),l=new Rn({mapValue:{fields:i.found.fields}});return On.newFoundDocument(r,a,o,l)}(s,e):"missing"in e?function(n,i){un(!!i.missing,3894),un(!!i.readTime,22933);const r=sc(n,i.missing),a=Sr(i.readTime);return On.newNoDocument(r,a)}(s,e):yt(7234,{result:e})}function VA(s,e){let t;if(e instanceof Xp)t={update:jd(s,e.key,e.value)};else if(e instanceof LA)t={delete:Ka(s,e.key)};else if(e instanceof $p)t={update:jd(s,e.key,e.data),updateMask:XA(e.fieldMask)};else{if(!(e instanceof IA))return yt(16599,{U:e.type});t={verify:Ka(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(r,a){const o=a.transform;if(o instanceof Wp)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof wA)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof RA)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof CA)return{fieldPath:a.field.canonicalString(),increment:o.$};throw yt(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:BA(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:yt(27497)}(s,e.precondition)),t}function zA(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=function(c,h){return Uc(c.databaseId,h)}(s,i);const r=function(c){if(c.length!==0)return qp(Xr.create(c,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const a=function(c){if(c.length!==0)return c.map(h=>function(d){return{field:Ss(d.field),direction:HA(d.dir)}}(h))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=function(c,h){return c.useProto3Json||oA(h)?h:{value:h}}(s,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{M:t,parent:i}}function HA(s){return DA[s]}function GA(s){return NA[s]}function WA(s){return UA[s]}function Ss(s){return{fieldPath:s.canonicalString()}}function qp(s){return s instanceof Ln?function(t){if(t.op==="=="){if(Wd(t.value))return{unaryFilter:{field:Ss(t.field),op:"IS_NAN"}};if(Gd(t.value))return{unaryFilter:{field:Ss(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wd(t.value))return{unaryFilter:{field:Ss(t.field),op:"IS_NOT_NAN"}};if(Gd(t.value))return{unaryFilter:{field:Ss(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(t.field),op:GA(t.op),value:t.value}}}(s):s instanceof Xr?function(t){const n=t.getFilters().map(i=>qp(i));return n.length===1?n[0]:{compositeFilter:{op:WA(t.op),filters:n}}}(s):yt(54877,{filter:s})}function XA(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jp(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function Kp(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(s){return new FA(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{}class qA extends $A{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.k=!1}j(){if(this.k)throw new ge(re.FAILED_PRECONDITION,"The client has already been terminated.")}I(e,t,n,i){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.I(e,ic(t,n),i,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ge(re.UNKNOWN,r.toString())})}D(e,t,n,i,r){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.D(e,ic(t,n),i,a,o,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ge(re.UNKNOWN,a.toString())})}terminate(){this.k=!0,this.connection.terminate()}}async function jA(s,e){const t=Gr(s),n={writes:e.map(i=>VA(t.serializer,i))};await t.I("Commit",t.serializer.databaseId,Et.emptyPath(),n)}async function KA(s,e){const t=Gr(s),n={documents:e.map(o=>Ka(t.serializer,o))},i=await t.D("BatchGetDocuments",t.serializer.databaseId,Et.emptyPath(),n,e.length),r=new Map;i.forEach(o=>{const l=kA(t.serializer,o);r.set(l.key.toString(),l)});const a=[];return e.forEach(o=>{const l=r.get(o.toString());un(!!l,55234,{key:o}),a.push(l)}),a}async function YA(s,e){const t=Gr(s),{M:n,parent:i}=zA(t.serializer,bA(e));return(await t.D("RunQuery",t.serializer.databaseId,i,{structuredQuery:n.structuredQuery})).filter(r=>!!r.document).map(r=>function(o,l,c){const h=sc(o,l.name),u=Sr(l.updateTime),d=l.createTime?Sr(l.createTime):Gt.min(),f=new Rn({mapValue:{fields:l.fields}}),g=On.newFoundDocument(h,u,d,f);return c?g.setHasCommittedMutations():g}(t.serializer,r.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="ComponentProvider",br=new Map;function Oc(s){if(s._terminated)throw new ge(re.FAILED_PRECONDITION,"The client has already been terminated.");if(!br.has(s)){Ga(Yp,"Initializing Datastore");const e=function(r){return new hA(r)}(function(r,a,o,l,c){return new QT(r,a,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Np(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,l)}(s._databaseId,s.app.options.appId||"",s._persistenceKey,s.app.options.apiKey,s._freezeSettings())),t=Fc(s._databaseId),n=function(r,a,o,l){return new qA(r,a,o,l)}(s._authCredentials,s._appCheckCredentials,e,t);br.set(s,n)}return br.get(s)}const JA=1048576,Jp="firestore.googleapis.com",Kd=!0;class Yd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ge(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jp,this.ssl=Kd}else this.host=e.host,this.ssl=e.ssl??Kd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JA)throw new ge(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(n,i,r,a){if(i===!0&&a===!0)throw new ge(re.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Np(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new ge(re.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new ge(re.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new ge(re.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class po{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qT;switch(n.type){case"firstParty":return new JT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ge(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=br.get(t);n&&(Ga(Yp,"Removing Datastore"),br.delete(t),n.terminate())}(this),Promise.resolve()}}function ZA(s,e){const t=typeof s=="object"?s:UT(),n=typeof s=="string"?s:"(default)",i=PT(t,"firestore/lite").getImmediate({identifier:n});if(!i._initialized){const r=Tb("firestore");r&&QA(i,...r)}return i}function QA(s,e,t,n={}){var c;s=co(s,po);const i=xp(e),r=s._getSettings(),a={...r,emulatorOptions:s._getEmulatorOptions()},o=`${e}:${t}`;i&&Db(`https://${o}`),r.host!==Jp&&r.host!==o&&Rp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:o,ssl:i,emulatorOptions:n};if(!Va(l,a)&&(s._setSettings(l),n.mockUserToken)){let h,u;if(typeof n.mockUserToken=="string")h=n.mockUserToken,u=nn.MOCK_USER;else{h=wb(n.mockUserToken,(c=s._app)==null?void 0:c.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new ge(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nn(d)}s._authCredentials=new jT(new Pp(h,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Zs(this.firestore,e,this._query)}}class At{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Wr(t,At._jsonSchema))return new At(e,n||null,new Ot(Et.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:En("string",At._jsonSchemaVersion),referencePath:En("string")};class Ti extends Zs{constructor(e,t,n){super(e,t,function(r){return new Hp(r)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new Ot(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function ew(s,e,...t){if(s=zs(s),Ip("collection","path",e),s instanceof po){const n=Et.fromString(e,...t);return Nd(n),new Ti(s,null,n)}{if(!(s instanceof At||s instanceof Ti))throw new ge(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Et.fromString(e,...t));return Nd(n),new Ti(s.firestore,null,n)}}function Zp(s,e,...t){if(s=zs(s),arguments.length===1&&(e=nA.newId()),Ip("doc","path",e),s instanceof po){const n=Et.fromString(e,...t);return Dd(n),new At(s,null,new Ot(n))}{if(!(s instanceof At||s instanceof Ti))throw new ge(re.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Et.fromString(e,...t));return Dd(n),new At(s.firestore,s instanceof Ti?s.converter:null,new Ot(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(ri.fromBase64String(e))}catch(t){throw new ge(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(ri.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wr(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:En("string",yn._jsonSchemaVersion),bytes:En("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ge(re.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ge(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ge(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return bt(this._lat,e._lat)||bt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(Wr(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:En("string",Vn._jsonSchemaVersion),latitude:En("number"),longitude:En("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n,i){if(n.length!==i.length)return!1;for(let r=0;r<n.length;++r)if(n[r]!==i[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wr(e,Pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Pn(e.vectorValues);throw new ge(re.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pn._jsonSchemaVersion="firestore/vectorValue/1.0",Pn._jsonSchema={type:En("string",Pn._jsonSchemaVersion),vectorValues:En("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=/^__.*__$/;class nw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new $p(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xp(e,this.data,t,this.fieldTransforms)}}function em(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yt(40011,{dataSource:s})}}class kc{constructor(e,t,n,i,r,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,r===void 0&&this.G(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}ne(e){return new kc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}J(e){var i;const t=(i=this.path)==null?void 0:i.child(e),n=this.ne({path:t,arrayElement:!1});return n.H(e),n}Y(e){var i;const t=(i=this.path)==null?void 0:i.child(e),n=this.ne({path:t,arrayElement:!1});return n.G(),n}X(e){return this.ne({path:void 0,arrayElement:!0})}Z(e){return Ya(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}G(){if(this.path)for(let e=0;e<this.path.length;e++)this.H(this.path.get(e))}H(e){if(e.length===0)throw this.Z("Document fields must not be empty");if(em(this.dataSource)&&tw.test(e))throw this.Z('Document fields cannot begin and end with "__"')}}class iw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Fc(e)}ce(e,t,n,i=!1){return new kc({dataSource:e,methodName:t,targetDoc:n,path:sn.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tm(s){const e=s._freezeSettings(),t=Fc(s._databaseId);return new iw(s._databaseId,!!e.ignoreUndefinedProperties,t)}function sw(s,e,t,n,i,r={}){const a=s.ce(r.merge||r.mergeFields?2:0,e,t,i);sm("Data must be an object, but it was:",a,n);const o=nm(n,a);let l,c;if(r.merge)l=new kr(a.fieldMask),c=a.fieldTransforms;else if(r.mergeFields){const h=[];for(const u of r.mergeFields){const d=Hc(e,u,t);if(!a.contains(d))throw new ge(re.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lw(h,d)||h.push(d)}l=new kr(h),c=a.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=a.fieldTransforms;return new nw(new Rn(o),l,c)}class Vc extends Bc{_toFieldTransform(e){return new PA(e.path,new Wp)}isEqual(e){return e instanceof Vc}}function rw(s,e,t,n=!1){return zc(t,s.ce(n?4:3,e))}function zc(s,e){if(im(s=zs(s)))return sm("Unsupported field value:",e,s),nm(s,e);if(s instanceof Bc)return function(n,i){if(!em(i.dataSource))throw i.Z(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Z(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Z("Nested arrays are not supported");return function(n,i){const r=[];let a=0;for(const o of n){let l=zc(o,i.X(a));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),a++}return{arrayValue:{values:r}}}(s,e)}return function(n,i){if((n=zs(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return AA(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=wt.fromDate(n);return{timestampValue:nc(i.serializer,r)}}if(n instanceof wt){const r=new wt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nc(i.serializer,r)}}if(n instanceof Vn)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yn)return{bytesValue:OA(i.serializer,n._byteString)};if(n instanceof At){const r=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(r))throw i.Z(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Uc(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Pn)return function(a,o){const l=a instanceof Pn?a.toArray():a;return{mapValue:{fields:{[Op]:{stringValue:Bp},[Xa]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw o.Z("VectorValues must only contain numeric values.");return Gp(o.serializer,h)})}}}}}}(n,i);if(Kp(n))return n._toProto(i.serializer);throw i.Z(`Unsupported field value: ${lo(n)}`)}(s,e)}function nm(s,e){const t={};return function(i){for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r))return!1;return!0}(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ho(s,(n,i)=>{const r=zc(i,e.J(n));r!=null&&(t[n]=r)}),{mapValue:{fields:t}}}function im(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof wt||s instanceof Vn||s instanceof yn||s instanceof At||s instanceof Bc||s instanceof Pn||Kp(s))}function sm(s,e,t){if(!im(t)||!Dp(t)){const n=lo(t);throw n==="an object"?e.Z(s+" a custom object"):e.Z(s+" "+n)}}function Hc(s,e,t){if((e=zs(e))instanceof Qp)return e._internalPath;if(typeof e=="string")return ow(s,e);throw Ya("Field path arguments must be of type string or ",s,!1,void 0,t)}const aw=new RegExp("[~\\*/\\[\\]]");function ow(s,e,t){if(e.search(aw)>=0)throw Ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Qp(...e.split("."))._internalPath}catch{throw Ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Ya(s,e,t,n,i){const r=n&&!n.isEmpty(),a=i!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(r||a)&&(l+=" (found",r&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new ge(re.INVALID_ARGUMENT,o+s+l)}function lw(s,e){return s.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new am(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Hc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class am extends rm{data(){return super.data()}}class cw{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{}class hw extends Gc{}function uw(s,e,...t){let n=[];e instanceof Gc&&n.push(e),n=n.concat(t),function(r){const a=r.filter(l=>l instanceof Wc).length,o=r.filter(l=>l instanceof mo).length;if(a>1||a>0&&o>0)throw new ge(re.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)s=i._apply(s);return s}class mo extends hw{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new mo(e,t,n)}_apply(e){const t=this._parse(e);return om(e._query,t),new Zs(e.firestore,e.converter,tc(e._query,t))}_parse(e){const t=tm(e.firestore);return function(r,a,o,l,c,h,u){let d;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ge(re.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Zd(u,h);const g=[];for(const v of u)g.push(Jd(l,r,v));d={arrayValue:{values:g}}}else d=Jd(l,r,u)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Zd(u,h),d=rw(o,a,u,h==="in"||h==="not-in");return Ln.create(c,h,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function dw(s,e,t){const n=e,i=Hc("where",s);return mo._create(i,n,t)}class Wc extends Gc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Xr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,r){let a=i;const o=r.getFlattenedFilters();for(const l of o)om(a,l),a=tc(a,l)}(e._query,t),new Zs(e.firestore,e.converter,tc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jd(s,e,t){if(typeof(t=zs(t))=="string"){if(t==="")throw new ge(re.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!MA(e)&&t.indexOf("/")!==-1)throw new ge(re.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Et.fromString(t));if(!Ot.isDocumentKey(n))throw new ge(re.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Hd(s,new Ot(n))}if(t instanceof At)return Hd(s,t._key);throw new ge(re.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lo(t)}.`)}function Zd(s,e){if(!Array.isArray(s)||s.length===0)throw new ge(re.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function om(s,e){const t=function(i,r){for(const a of i)for(const o of a.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(s.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ge(re.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ge(re.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class fw{convertValue(e,t="none"){switch(Ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw yt(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ho(e,(i,r)=>{n[i]=this.convertValue(r,t)}),n}convertVectorValue(e){var n,i,r;const t=(r=(i=(n=e.fields)==null?void 0:n[Xa].arrayValue)==null?void 0:i.values)==null?void 0:r.map(a=>Tt(a.doubleValue));return new Pn(t)}convertGeoPoint(e){return new Vn(Tt(e.latitude),Tt(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Fp(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const t=Yi(e);return new wt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Et.fromString(e);un(jp(n),9688,{name:e});const i=new Nr(n.get(1),n.get(3)),r=new Ot(n.popFirst(5));return i.isEqual(t)||Dc(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}class lm extends fw{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function mw(s){const e=Oc((s=co(s,At)).firestore),t=new lm(s.firestore);return KA(e,[s._key]).then(n=>{un(n.length===1,15618);const i=n[0];return new rm(s.firestore,t,s._key,i.isFoundDocument()?i:null,s.converter)})}function gw(s){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ge(re.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((s=co(s,Zs))._query);const e=Oc(s.firestore),t=new lm(s.firestore);return YA(e,s._query).then(n=>{const i=n.map(r=>new am(s.firestore,t,r.key,r,s.converter));return s._query.limitType==="L"&&i.reverse(),new cw(s,i)})}function _w(s,e,t){const n=pw((s=co(s,At)).converter,e,t),i=sw(tm(s.firestore),"setDoc",s._key,n,s.converter!==null,t);return jA(Oc(s.firestore),[i.toMutation(s._key,Mr.none())])}function Qd(){return new Vc("serverTimestamp")}const ef="4.14.1";(function(){$T(`${NT}_lite`),Ha(new Ir("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{const i=e.getProvider("app").getImmediate(),r=new po(new KT(e.getProvider("auth-internal")),new ZT(i,e.getProvider("app-check-internal")),eA(i,t),i);return n&&r._setSettings(n),r},"PUBLIC").setMultipleInstances(!0)),Ls("firestore-lite",ef,""),Ls("firestore-lite",ef,"esm2020")})();var vw="firebase",yw="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ls(vw,yw,"app");const go={apiKey:"AIzaSyBjX6jAQXqm_QAy_-I_AEbpybJaOWmOZuc",authDomain:"bananaallergy-76b61.firebaseapp.com",projectId:"bananaallergy-76b61",storageBucket:"bananaallergy-76b61.firebasestorage.app",messagingSenderId:"199259846809",appId:"1:199259846809:web:db3e1979c978eff63a6008",measurementId:"G-SNKL3G0TH6"};console.log("[Firebase Config projectId]",go.projectId);console.log("[Firebase Config authDomain]",go.authDomain);console.log("[Firebase Config apiKey]",go.apiKey);const cm=bp(go);console.log("[Firebase App name]",cm.name);const Xc=ZA(cm),hm="players",um="rankings",xw=6e3;function dm(s){return String(s||"").trim().toLowerCase()}function $c(s,e){let t=null;const n=new Promise((i,r)=>{t=setTimeout(()=>r(new Error(`${e} timeout`)),xw)});return Promise.race([s,n]).finally(()=>clearTimeout(t))}async function tf(s){const e=dm(s);if(!e)return null;const t=await $c(mw(Zp(Xc,hm,e)),"player load");return t.exists()?t.data():null}async function Ew(s){const e=dm(s==null?void 0:s.nickname);if(!e)throw new Error("missing nickname");const t={playerId:e,nickname:s.nickname,code:s.code,diamond:Math.floor(s.diamond||0),bestScore:Math.floor(s.bestScore||0),version:Ki,upgrades:s.upgrades||{},updatedAt:Qd()},n={playerId:e,nickname:s.nickname,bestScore:Math.floor(s.bestScore||0),version:Ki,updatedAt:Qd()};return await nf(hm,e,t,"players"),await nf(um,e,n,"rankings"),t}async function Mw(s=10){const e=uw(ew(Xc,um),dw("version","==",Ki));return(await $c(gw(e),"ranking load")).docs.map(n=>{const i=n.data();return{nickname:i.nickname||n.id,bestScore:Math.floor(i.bestScore||0)}}).sort((n,i)=>i.bestScore-n.bestScore).slice(0,s).map((n,i)=>({...n,rank:i+1}))}async function nf(s,e,t,n){console.log("[Firestore path]",s,e),n==="players"?(console.log("[players payload keys]",Object.keys(t)),console.log("[players payload]",t)):n==="rankings"&&(console.log("[rankings payload keys]",Object.keys(t)),console.log("[rankings payload]",t));try{await $c(_w(Zp(Xc,s,e),t,{merge:!0}),`${n} save`)}catch(i){throw console.error("[Firestore Error Code]",i==null?void 0:i.code),console.error("[Firestore Error Message]",i==null?void 0:i.message),console.error("[Firestore Error Full]",i),i}}document.fonts&&(document.fonts.load("400 16px PretendardGame"),document.fonts.load("700 16px PretendardGame"),document.fonts.load("900 24px PretendardGame"),document.fonts.load('400 16px "Press Start 2P"'));window.addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("gesturestart",s=>s.preventDefault());const sf=()=>window.matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,fm=new Map;for(const[s,e]of Object.entries($i))for(const t of e)fm.set(t[0],{tier:s,tag:t[3]});class Sw{constructor(){var t,n,i;this.game=null,this.$title=document.getElementById("screen-title"),this.$menu=document.getElementById("screen-menu"),this.$upgrade=document.getElementById("screen-upgrade"),this.$uiOverlay=document.getElementById("ui-overlay"),this._desiredBgm="title",this._loginBusy=!1,ep(),Ac(),document.getElementById("btn-new-game").addEventListener("click",()=>{Ge("uiClick"),this._onNewGameLogin()}),document.getElementById("btn-continue").addEventListener("click",()=>{Ge("uiClick"),this._onContinueLogin()}),document.getElementById("inp-code").addEventListener("keydown",r=>{r.key==="Enter"&&this._onContinueLogin()}),document.getElementById("btn-play").addEventListener("click",()=>{Ge("gameStart"),this._startGame()}),document.getElementById("btn-upgrade").addEventListener("click",()=>{Ge("uiClick"),this._showUpgrade()}),(t=document.getElementById("btn-ranking"))==null||t.addEventListener("click",()=>{Ge("uiClick"),this._showRanking()}),document.getElementById("btn-logout").addEventListener("click",()=>{Ge("uiClick"),this._showTitle()}),document.getElementById("btn-upgrade-back").addEventListener("click",()=>{Ge("uiClick"),this._showMenu()}),(n=document.getElementById("btn-pause"))==null||n.addEventListener("click",()=>this._showPauseMenu()),(i=document.getElementById("btn-stats"))==null||i.addEventListener("click",()=>this._showStatsPanel()),window.addEventListener("game:restart",()=>this._startGame()),window.addEventListener("game:menu",()=>this._showMenu()),window.addEventListener("game:ranking",()=>this._showRanking()),window.addEventListener("game:profile-save",r=>{var a;return this._saveCloud(((a=r.detail)==null?void 0:a.reason)||"game")});const e=localStorage.getItem("ammang_last_user");if(e){const[r,a]=e.split("|");r&&a&&(document.getElementById("inp-nick").value=r,document.getElementById("inp-code").value=a)}this._showTitle(),this._ensurePauseOverlay(),this._ensureStatsOverlay(),this._initGame(),this._bindAudioUnlock()}_playBgm(e){this._desiredBgm=e,Vl(),HM(e)}_bindAudioUnlock(){const e=()=>{Vl(),this._playBgm(this._desiredBgm||"title")};window.addEventListener("pointerdown",e),window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("keydown",e),document.addEventListener("visibilitychange",()=>{document.hidden||this._playBgm(this._desiredBgm||"title")})}_initGame(){const e=document.getElementById("game-canvas");this.game=new pb(e)}_showTitle(){var e,t,n;(t=(e=this.game)==null?void 0:e.stopGameSession)==null||t.call(e),(n=this.game)!=null&&n.canvas&&(this.game.canvas.style.visibility="hidden"),this._hideRunOverlays(),this.$title.classList.remove("hidden"),this.$menu.classList.add("hidden"),this.$upgrade.classList.add("hidden"),this.$uiOverlay.classList.add("hidden"),this._playBgm("title")}_hideRunOverlays(){var t,n,i;(t=document.getElementById("gameover-overlay"))==null||t.remove();const e=document.getElementById("augment-overlay");e&&(e.style.display="none"),(n=document.getElementById("pause-overlay"))==null||n.classList.remove("show"),(i=document.getElementById("stats-overlay"))==null||i.classList.remove("show"),this.game&&(this.game.paused=!1)}_ensurePauseOverlay(){if(document.getElementById("pause-overlay"))return;const e=document.createElement("div");e.id="pause-overlay",e.innerHTML=`
      <div class="pause-box">
        <div class="pause-title">일시정지</div>
        <button id="pause-resume" class="pixel-btn btn-gold">게임 재개</button>
        <button id="pause-restart" class="pixel-btn btn-silver">다시하기</button>
        <button id="pause-title" class="pixel-btn btn-dark">타이틀로</button>
      </div>`,document.getElementById("stage").appendChild(e),document.getElementById("pause-resume").addEventListener("click",()=>{Ge("uiClick"),e.classList.remove("show"),this.game&&(this.game.paused=!1)}),document.getElementById("pause-restart").addEventListener("click",()=>{Ge("uiClick"),e.classList.remove("show"),this._startGame()}),document.getElementById("pause-title").addEventListener("click",()=>{Ge("uiClick"),e.classList.remove("show"),this._showMenu()})}_showPauseMenu(){var e;!this.game||this.$uiOverlay.classList.contains("hidden")||(this.game.paused=!0,(e=document.getElementById("pause-overlay"))==null||e.classList.add("show"))}_ensureStatsOverlay(){if(document.getElementById("stats-overlay"))return;const e=document.createElement("div");e.id="stats-overlay",e.innerHTML=`
      <div class="stats-box">
        <div class="stats-head">
          <div class="stats-title">현재 스탯</div>
          <button id="stats-close" class="stats-close">×</button>
        </div>
        <div id="stats-content"></div>
      </div>`,document.getElementById("stage").appendChild(e),document.getElementById("stats-close").addEventListener("click",()=>{var t;Ge("uiClick"),e.classList.remove("show"),this.game&&!((t=document.getElementById("pause-overlay"))!=null&&t.classList.contains("show"))&&(this.game.paused=!1)})}_showStatsPanel(){var e;!this.game||this.$uiOverlay.classList.contains("hidden")||(this.game.paused=!0,this._renderStatsPanel(),(e=document.getElementById("stats-overlay"))==null||e.classList.add("show"))}_renderStatsPanel(){var o;const e=(o=this.game)==null?void 0:o.gs;if(!e)return;const t=(l,c=0)=>Number.isFinite(l)?Number(l).toFixed(c):"-",n=(l,c=0)=>`${t((l||0)*100,c)}%`,i=[["체력",`${Math.ceil(e.hp||0)} / ${Math.ceil(e.maxHp||0)}`],["바나나 피해",t((e.bananaDamage||0)*(e.bananaDamageMul||1),1)],["바나나 공속",`${t(e.bananaAS||0,2)}/초`],["투사체",`${(e.bananaCount||0)+(e.projectileSynergyBonus||0)}개`],["바나나 사거리",t(e.bananaRange||0,1)],["똥 저장",`${e.poopStored||0} / ${e.poopMax||0}`],["똥 피해",t((e.poopDamage||0)*(e.poopDamageMul||1),1)],["똥 쿨",`${t(e.poopCD||0,2)}초`],["치명타 확률",n(e.crit||0)],["치명타 피해량",n(e.critDmg||0)],["방어구 관통력",`${t(e.flatPen||0)} / ${n(e.percentPen||0,1)}`],["좌우속도",t(e.moveSpeed||0,2)]],a=["banana","bananaOnHit","projectile","range","poop","poopOnHit","poopStorage","auto","crit","survival","armorPen","pet","gambler"].filter(l=>{var c;return(((c=e.tags)==null?void 0:c[l])||0)>0}).map(l=>{var m,p,M,y;const c=((m=e.tags)==null?void 0:m[l])||0,h=4,u=((p=e.synergyLevels)==null?void 0:p[l])||0,d=u?`${u}세트 : ${((M=ap[l])==null?void 0:M[u])||"-"}`:"",f=u?(y=op[l])==null?void 0:y[u]:"",g=(e.acquiredAugments||[]).map(T=>fm.get(T)).filter(T=>(T==null?void 0:T.tag)===l).map(T=>T.tier),v=Array.from({length:h},(T,N)=>{const L=g[N]||"";return`<span class="tag-pip ${N<c?`on tier-${L}`:""}"></span>`}).join("");return`
        <div class="tag-card ${u?"active":""}">
          <img class="tag-icon" src="${Tn[l]}" alt="">
          <div class="tag-meta">
            <div class="tag-pips">${v}</div>
            <div class="tag-synergy">${d}</div>
            <div class="tag-effect">${f||""}</div>
          </div>
        </div>`}).join("");document.getElementById("stats-content").innerHTML=`
      <div class="stats-grid">
        ${i.map(([l,c])=>`<div class="stat-row"><span>${l}</span><strong>${c}</strong></div>`).join("")}
      </div>
      <div class="stats-subtitle">태그 / 시너지</div>
      <div class="tag-grid">${a||'<div class="tag-empty">아직 획득한 태그 없음</div>'}</div>`}_loginFields(){const e=document.getElementById("inp-nick").value.trim()||"player",t=document.getElementById("inp-code").value.trim()||"0000";return{nick:e,code:t}}_setLoginBusy(e,t="확인 중..."){this._loginBusy=e;const n=[document.getElementById("btn-new-game"),document.getElementById("btn-continue")];n.forEach(i=>{i&&(e?(i.dataset.prevText=i.textContent,i.disabled=!0):(i.disabled=!1,i.dataset.prevText&&(i.textContent=i.dataset.prevText)))}),e&&n[0]&&(n[0].textContent=t)}_enterLocalProfile(e,t){const n=Gl(e,t);return localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu(),n}_logFirestoreError(e){console.error("[Firestore Error Code]",e==null?void 0:e.code),console.error("[Firestore Error Message]",e==null?void 0:e.message),console.error("[Firestore Error Full]",e)}_firestoreErrorText(e){return`code: ${(e==null?void 0:e.code)||"unknown"}
message: ${(e==null?void 0:e.message)||String(e)}`}async _onContinueLogin(){if(this._loginBusy)return;const{nick:e,code:t}=this._loginFields();this._setLoginBusy(!0,"불러오는 중...");try{const n=await tf(e);if(!n){window.alert("저장된 기록이 없습니다. 새로하기로 시작해주세요.");return}if(n.code!==t){window.alert("닉네임과 코드가 일치하지 않습니다.");return}ul(n,e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu()}catch(n){console.warn("[login] Firestore continue failed:",n),this._logFirestoreError(n),!!localStorage.getItem(`ammang_3d_v1_${e}_${t}`)?(window.alert(`서버 응답이 늦어서 기기 저장 기록으로 이어합니다.

${this._firestoreErrorText(n)}`),this._enterLocalProfile(e,t)):window.alert(`서버 기록을 불러오지 못했습니다. 새로하기로 시작하면 기기 저장으로 먼저 진행합니다.

${this._firestoreErrorText(n)}`)}finally{this._setLoginBusy(!1)}}async _onNewGameLogin(){if(this._loginBusy)return;const{nick:e,code:t}=this._loginFields();this._setLoginBusy(!0,"시작 중...");try{const n=await tf(e);if(n){if(n.code!==t){window.alert("이미 저장된 닉네임입니다. 코드가 일치하지 않아 새로 시작할 수 없습니다.");return}if(!window.confirm("이미 저장된 기록이 있습니다. 새로하면 기존 다이아/강화/최고기록이 초기화됩니다.")||!window.confirm("정말 새로 시작할까요? 기존 기록은 되돌릴 수 없습니다."))return}const i=Hl(e,t);ul(i,e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu(),this._saveCloud("new-game")}catch(n){console.warn("[login] Firestore new failed:",n),this._logFirestoreError(n),window.alert(`서버 확인 실패. 기기 저장으로 먼저 시작하고 서버 저장을 한 번 시도합니다.

${this._firestoreErrorText(n)}`);const i=Hl(e,t);ul(i,e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu(),this._showCloudStatus(`서버 저장 실패, 기기 저장으로 시작 (${(n==null?void 0:n.code)||"unknown"})`),this._saveCloud("new-game-after-login-fail")}finally{this._setLoginBusy(!1)}}_onLogin(){const{nick:e,code:t}=this._loginFields();Gl(e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu()}_showMenu(){var t,n,i;const e=Ms();if(this._upgradeDirty&&(this._saveCloud("upgrade-exit"),this._upgradeDirty=!1),(n=(t=this.game)==null?void 0:t.stopGameSession)==null||n.call(t),(i=this.game)!=null&&i.canvas&&(this.game.canvas.style.visibility="hidden"),this._hideRunOverlays(),this.$title.classList.add("hidden"),this.$upgrade.classList.add("hidden"),this.$menu.classList.remove("hidden"),this.$uiOverlay.classList.add("hidden"),this._playBgm("title"),e){document.getElementById("menu-nick").textContent=e.nickname||"-",document.getElementById("menu-dia").textContent=e.diamond||0;const r=e.version===Ki&&e.bestScore||0;document.getElementById("menu-best").textContent=r.toLocaleString()}}_startGame(){var n;if(!Ms()){this._showTitle();return}this._hideRunOverlays(),(n=this.game)!=null&&n.canvas&&(this.game.canvas.style.visibility="visible"),this.$title.classList.add("hidden"),this.$menu.classList.add("hidden"),this.$upgrade.classList.add("hidden"),this.$uiOverlay.classList.remove("hidden");const t=document.getElementById("joystick");t&&sf()&&t.classList.remove("hidden"),document.querySelectorAll(".touch-arrow").forEach(i=>{sf()?i.classList.remove("hidden"):i.classList.add("hidden")}),this.game.startGame(),this._playBgm("game"),setTimeout(()=>this.game._onResize&&this.game._onResize(),80)}_showUpgrade(){var t;const e=Ms();e&&((t=this.game)!=null&&t.canvas&&(this.game.canvas.style.visibility="hidden"),this.$menu.classList.add("hidden"),this.$upgrade.classList.remove("hidden"),this._playBgm("title"),document.getElementById("upgrade-dia").textContent=e.diamond||0,this._renderUpgradeGrid())}_renderUpgradeGrid(){const e=Ms(),t=document.getElementById("upgrade-grid");t.innerHTML="";for(const[n,i,r,a,o,l="general"]of Rc){const c=e.upgrades[n]||0,h=c>=a,u=h?null:o[c],d=document.createElement("div");if(d.className="upg-card"+(h?" maxed":""),d.innerHTML=`
        <div class="upg-info">
          <div class="upg-name">${i}</div>
          <div class="upg-desc">${r}</div>
          <div class="upg-level">${c}/${a}</div>
        </div>
        <div class="upg-cost">${h?"MAX":`💎 ${u}`}</div>
      `,!h){let f=!1,g=0,v=0;d.addEventListener("pointerdown",m=>{f=!1,g=m.clientX,v=m.clientY},{passive:!0}),d.addEventListener("pointermove",m=>{(Math.abs(m.clientX-g)>8||Math.abs(m.clientY-v)>8)&&(f=!0)},{passive:!0}),d.addEventListener("click",()=>{if(!f){if((e.diamond||0)<u){this._flashCost(d);return}e.diamond-=u,e.upgrades[n]=c+1,Ge("upgrade"),Lr(),this._upgradeDirty=!0,document.getElementById("upgrade-dia").textContent=e.diamond,this._renderUpgradeGrid()}})}t.appendChild(d)}}_flashCost(e){e.style.borderColor="#ff4444",setTimeout(()=>{e.style.borderColor=""},400)}_showCloudStatus(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),clearTimeout(this._cloudStatusTimer),this._cloudStatusTimer=setTimeout(()=>t.classList.remove("show"),2600))}async _saveCloud(e="manual"){const t=Ms();if(t)try{Cc(t,t.nickname,t.code),Lr(),await Ew(t)}catch(n){console.warn(`[profile] cloud save failed (${e}):`,n),this._logFirestoreError(n),this._showCloudStatus(`서버 저장 실패 (${(n==null?void 0:n.code)||"unknown"})`)}}async _showRanking(){try{const e=await Mw(20);this._renderRanking(e)}catch(e){console.warn("[ranking] load failed:",e),this._logFirestoreError(e),window.alert(`랭킹을 불러오지 못했습니다.

${this._firestoreErrorText(e)}`)}}_renderRanking(e){var n;(n=document.getElementById("ranking-overlay"))==null||n.remove();const t=document.createElement("div");t.id="ranking-overlay",t.innerHTML=`
      <div class="ranking-box">
        <div class="ranking-title">최고기록 TOP 20</div>
        <div class="ranking-list">
          ${(e.length?e:[{rank:"-",nickname:"기록 없음",bestScore:0}]).map(i=>`
            <div class="ranking-row">
              <span>${i.rank}</span>
              <span>${i.nickname}</span>
              <span>${Math.floor(i.bestScore||0).toLocaleString()}</span>
            </div>
          `).join("")}
        </div>
        <button class="pixel-btn btn-gold ranking-close">닫기</button>
      </div>`,document.getElementById("stage").appendChild(t),t.querySelector(".ranking-close").addEventListener("click",()=>t.remove())}}const pm=new Sw;window.forceStartGame=()=>{Gl("debug","0000"),pm._startGame()};window.saveCloudProfileNow=()=>pm._saveCloud("debug");
