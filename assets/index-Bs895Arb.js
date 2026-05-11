(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="161",am=0,Kc=1,om=2,Kd=1,lm=2,Kn=3,Qn=0,sn=1,en=2,_i=0,Ts=1,Bi=2,Yc=3,Jc=4,cm=5,Oi=100,um=101,hm=102,Zc=103,Qc=104,dm=200,fm=201,pm=202,mm=203,ml=204,gl=205,gm=206,_m=207,vm=208,ym=209,xm=210,Em=211,Mm=212,Sm=213,bm=214,Tm=0,Am=1,wm=2,Ta=3,Rm=4,Cm=5,Pm=6,Lm=7,Zl=0,Im=1,Dm=2,vi=0,Nm=1,Um=2,Om=3,Yd=4,Fm=5,Bm=6,eu="attached",km="detached",Jd=300,Cs=301,Ps=302,_l=303,vl=304,qa=306,Si=1e3,mn=1001,Aa=1002,mt=1003,Wi=1004,vs=1005,Kt=1006,Sa=1007,Yn=1008,yi=1009,Vm=1010,zm=1011,Ql=1012,Zd=1013,pi=1014,On=1015,xr=1016,Qd=1017,ef=1018,ki=1020,Hm=1021,gn=1023,Gm=1024,Wm=1025,Vi=1026,Ls=1027,Xm=1028,tf=1029,qm=1030,nf=1031,sf=1033,po=33776,mo=33777,go=33778,_o=33779,tu=35840,nu=35841,iu=35842,su=35843,rf=36196,ru=37492,au=37496,ou=37808,lu=37809,cu=37810,uu=37811,hu=37812,du=37813,fu=37814,pu=37815,mu=37816,gu=37817,_u=37818,vu=37819,yu=37820,xu=37821,vo=36492,Eu=36494,Mu=36495,$m=36283,Su=36284,bu=36285,Tu=36286,Er=2300,Is=2301,yo=2302,Au=2400,wu=2401,Ru=2402,jm=2500,Km=0,af=1,yl=2,of=3e3,zi=3001,Ym=3200,Jm=3201,ec=0,Zm=1,_n="",Qe="srgb",Ft="srgb-linear",tc="display-p3",$a="display-p3-linear",wa="linear",ct="srgb",Ra="rec709",Ca="p3",Ki=7680,Cu=519,Qm=512,eg=513,tg=514,lf=515,ng=516,ig=517,sg=518,rg=519,xl=35044,Pu="300 es",El=1035,Jn=2e3,Pa=2001;class ks{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const hr=Math.PI/180,Ds=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function nc(i,e){return(i%e+e)%e}function ag(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function og(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function lg(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function cg(i,e=1){return e-Math.abs(nc(i,e*2)-e)}function ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fg(i,e){return i+Math.random()*(e-i)}function pg(i){return i*(.5-Math.random())}function mg(i){i!==void 0&&(Lu=i);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gg(i){return i*hr}function _g(i){return i*Ds}function Ml(i){return(i&i-1)===0&&i!==0}function vg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function La(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yg(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xg={DEG2RAD:hr,RAD2DEG:Ds,generateUUID:wn,clamp:Nt,euclideanModulo:nc,mapLinear:ag,inverseLerp:og,lerp:dr,damp:lg,pingpong:cg,smoothstep:ug,smootherstep:hg,randInt:dg,randFloat:fg,randFloatSpread:pg,seededRandom:mg,degToRad:gg,radToDeg:_g,isPowerOfTwo:Ml,ceilPowerOfTwo:vg,floorPowerOfTwo:La,setQuaternionFromProperEuler:yg,normalize:Je,denormalize:bn};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],E=s[4],w=s[7],N=s[2],L=s[5],x=s[8];return r[0]=a*v+o*S+l*N,r[3]=a*p+o*E+l*L,r[6]=a*m+o*w+l*x,r[1]=c*v+u*S+h*N,r[4]=c*p+u*E+h*L,r[7]=c*m+u*w+h*x,r[2]=d*v+f*S+g*N,r[5]=d*p+f*E+g*L,r[8]=d*m+f*w+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new ze;function cf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eg(){const i=Mr("canvas");return i.style.display="block",i}const Iu={};function Hi(i){i in Iu||(Iu[i]=!0,console.warn(i))}const Du=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Ft]:{transfer:wa,primaries:Ra,toReference:i=>i,fromReference:i=>i},[Qe]:{transfer:ct,primaries:Ra,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$a]:{transfer:wa,primaries:Ca,toReference:i=>i.applyMatrix3(Nu),fromReference:i=>i.applyMatrix3(Du)},[tc]:{transfer:ct,primaries:Ca,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nu),fromReference:i=>i.applyMatrix3(Du).convertLinearToSRGB()}},Mg=new Set([Ft,$a]),je={enabled:!0,_workingColorSpace:Ft,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hr[e].toReference,s=Hr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hr[i].primaries},getTransfer:function(i){return i===_n?wa:Hr[i].transfer}};function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class uf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=Mr("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=As(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sg=0;class hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bg=0;class Rt extends ks{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=mn,s=mn,r=Kt,a=Yn,o=gn,l=yi,c=Rt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=wn(),this.name="",this.source=new hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===zi?Qe:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?zi:of}set encoding(e){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zi?Qe:_n}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Jd;Rt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,w=(f+1)/2,N=(m+1)/2,L=(u+d)/4,x=(h+v)/4,M=(g+p)/4;return E>w&&E>N?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=L/n,r=x/n):w>N?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=L/s,r=M/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=x/r,s=M/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tg extends ks{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zi?Qe:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Tg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class df extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ag extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let p=1-o;const m=l*d+c*f+u*g+h*v,S=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const N=Math.sqrt(E),L=Math.atan2(N,m*S);p=Math.sin(p*L)/N,o=Math.sin(o*L)/N}const w=o*S;if(l=l*p+d*w,c=c*p+f*w,u=u*p+g*w,h=h*p+v*w,p===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new I,Uu=new Dt;class Ot{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Wr.subVectors(this.max,Ks),Ji.subVectors(e.a,Ks),Zi.subVectors(e.b,Ks),Qi.subVectors(e.c,Ks),si.subVectors(Zi,Ji),ri.subVectors(Qi,Zi),Ri.subVectors(Ji,Qi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ri.z,Ri.y,si.z,0,-si.x,ri.z,0,-ri.x,Ri.z,0,-Ri.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ri.y,Ri.x,0];return!bo(t,Ji,Zi,Qi,Wr)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,Ji,Zi,Qi,Wr))?!1:(Xr.crossVectors(si,ri),t=[Xr.x,Xr.y,Xr.z],bo(t,Ji,Zi,Qi,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new I,new I,new I,new I,new I,new I,new I,new I],En=new I,Gr=new Ot,Ji=new I,Zi=new I,Qi=new I,si=new I,ri=new I,Ri=new I,Ks=new I,Wr=new I,Xr=new I,Ci=new I;function bo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wg=new Ot,Ys=new I,To=new I;class Vn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(To)),this.expandByPoint(Ys.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new I,Ao=new I,qr=new I,ai=new I,wo=new I,$r=new I,Ro=new I;class ja{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ao.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ao);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=ai.dot(this.direction),l=-ai.dot(qr),c=ai.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ao).addScaledVector(qr,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){wo.subVectors(t,e),$r.subVectors(n,e),Ro.crossVectors(wo,$r);let a=this.direction.dot(Ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot($r.crossVectors(ai,$r));if(l<0)return null;const c=o*this.direction.dot(wo.cross(ai));if(c<0||l+c>a)return null;const u=-o*ai.dot(Ro);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,v,p){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,v,p)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Cg)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),oi.crossVectors(n,an),oi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),oi.crossVectors(n,an)),oi.normalize(),jr.crossVectors(an,oi),s[0]=oi.x,s[4]=jr.x,s[8]=an.x,s[1]=oi.y,s[5]=jr.y,s[9]=an.y,s[2]=oi.z,s[6]=jr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],E=n[7],w=n[11],N=n[15],L=s[0],x=s[4],M=s[8],b=s[12],_=s[1],y=s[5],C=s[9],A=s[13],U=s[2],z=s[6],G=s[10],$=s[14],q=s[3],X=s[7],J=s[11],Z=s[15];return r[0]=a*L+o*_+l*U+c*q,r[4]=a*x+o*y+l*z+c*X,r[8]=a*M+o*C+l*G+c*J,r[12]=a*b+o*A+l*$+c*Z,r[1]=u*L+h*_+d*U+f*q,r[5]=u*x+h*y+d*z+f*X,r[9]=u*M+h*C+d*G+f*J,r[13]=u*b+h*A+d*$+f*Z,r[2]=g*L+v*_+p*U+m*q,r[6]=g*x+v*y+p*z+m*X,r[10]=g*M+v*C+p*G+m*J,r[14]=g*b+v*A+p*$+m*Z,r[3]=S*L+E*_+w*U+N*q,r[7]=S*x+E*y+w*z+N*X,r[11]=S*M+E*C+w*G+N*J,r[15]=S*b+E*A+w*$+N*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+p*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+m*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],S=h*p*c-v*d*c+v*l*f-o*p*f-h*l*m+o*d*m,E=g*d*c-u*p*c-g*l*f+a*p*f+u*l*m-a*d*m,w=u*v*c-g*h*c+g*o*f-a*v*f-u*o*m+a*h*m,N=g*h*l-u*v*l-g*o*d+a*v*d+u*o*p-a*h*p,L=t*S+n*E+s*w+r*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/L;return e[0]=S*x,e[1]=(v*d*r-h*p*r-v*s*f+n*p*f+h*s*m-n*d*m)*x,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*x,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*x,e[4]=E*x,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*x,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*m-t*l*m)*x,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*x,e[8]=w*x,e[9]=(g*h*r-u*v*r-g*n*f+t*v*f+u*n*m-t*h*m)*x,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*m+t*o*m)*x,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*x,e[12]=N*x,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*p+t*h*p)*x,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*p-t*o*p)*x,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*x,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,v=a*u,p=a*h,m=o*h,S=l*c,E=l*u,w=l*h,N=n.x,L=n.y,x=n.z;return s[0]=(1-(v+m))*N,s[1]=(f+w)*N,s[2]=(g-E)*N,s[3]=0,s[4]=(f-w)*L,s[5]=(1-(d+m))*L,s[6]=(p+S)*L,s[7]=0,s[8]=(g+E)*x,s[9]=(p-S)*x,s[10]=(1-(d+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);const c=1/r,u=1/a,h=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Jn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(o===Jn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Pa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,f=(n+s)*u;let g,v;if(o===Jn)g=(a+r)*h,v=-2*h;else if(o===Pa)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new I,Mn=new Fe,Rg=new I(0,0,0),Cg=new I(1,1,1),oi=new I,jr=new I,an=new I,Ou=new Fe,Fu=new Dt;class Ka{constructor(e=0,t=0,n=0,s=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pg=0;const Bu=new I,ts=new Dt,Xn=new Fe,Kr=new I,Js=new I,Lg=new I,Ig=new Dt,ku=new I(1,0,0),Vu=new I(0,1,0),zu=new I(0,0,1),Dg={type:"added"},Ng={type:"removed"};class ut extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new I,t=new Ka,n=new Dt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Js,Kr,this.up):Xn.lookAt(Kr,Js,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Xn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ng)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ut.DEFAULT_UP=new I(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,qn=new I,Co=new I,$n=new I,ns=new I,is=new I,Hu=new I,Po=new I,Lo=new I,Io=new I;class Tn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),qn.subVectors(n,t),Co.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(qn),l=Sn.dot(Co),c=qn.dot(qn),u=qn.dot(Co),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),qn.subVectors(e,t),Sn.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ns.subVectors(s,n),is.subVectors(r,n),Po.subVectors(e,n);const l=ns.dot(Po),c=is.dot(Po);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,s);const u=ns.dot(Lo),h=is.dot(Lo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ns,a);Io.subVectors(e,r);const f=ns.dot(Io),g=is.dot(Io);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(is,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Hu.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Hu,o);const m=1/(p+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=nc(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return je.fromWorkingColorSpace(jt.copy(this),e),Math.round(Nt(jt.r*255,0,255))*65536+Math.round(Nt(jt.g*255,0,255))*256+Math.round(Nt(jt.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,r=jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Qe){je.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Yr);const n=dr(li.h,Yr.h,t),s=dr(li.s,Yr.s,t),r=dr(li.l,Yr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new _e;_e.NAMES=pf;let Ug=0;class yn extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ts,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wt extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,Jr=new ae;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}}class mf extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gf extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Og=0;const fn=new Fe,No=new ut,ss=new I,on=new Ot,Zs=new Ot,It=new I;class Bt extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?gf:mf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(on.min,Zs.min),on.expandByPoint(It),It.addVectors(on.max,Zs.max),on.expandByPoint(It)):(on.expandByPoint(Zs.min),on.expandByPoint(Zs.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),It.add(ss)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<o;_++)c[_]=new I,u[_]=new I;const h=new I,d=new I,f=new I,g=new ae,v=new ae,p=new ae,m=new I,S=new I;function E(_,y,C){h.fromArray(s,_*3),d.fromArray(s,y*3),f.fromArray(s,C*3),g.fromArray(a,_*2),v.fromArray(a,y*2),p.fromArray(a,C*2),d.sub(h),f.sub(h),v.sub(g),p.sub(g);const A=1/(v.x*p.y-p.x*v.y);isFinite(A)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-v.y).multiplyScalar(A),S.copy(f).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(A),c[_].add(m),c[y].add(m),c[C].add(m),u[_].add(S),u[y].add(S),u[C].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let _=0,y=w.length;_<y;++_){const C=w[_],A=C.start,U=C.count;for(let z=A,G=A+U;z<G;z+=3)E(n[z+0],n[z+1],n[z+2])}const N=new I,L=new I,x=new I,M=new I;function b(_){x.fromArray(r,_*3),M.copy(x);const y=c[_];N.copy(y),N.sub(x.multiplyScalar(x.dot(y))).normalize(),L.crossVectors(M,y);const A=L.dot(u[_])<0?-1:1;l[_*4]=N.x,l[_*4+1]=N.y,l[_*4+2]=N.z,l[_*4+3]=A}for(let _=0,y=w.length;_<y;++_){const C=w[_],A=C.start,U=C.count;for(let z=A,G=A+U;z<G;z+=3)b(n[z+0]),b(n[z+1]),b(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Xt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new Fe,Pi=new ja,Zr=new Vn,Wu=new I,rs=new I,as=new I,os=new I,Uo=new I,Qr=new I,ea=new ae,ta=new ae,na=new ae,Xu=new I,qu=new I,$u=new I,ia=new I,sa=new I;class Me extends ut{constructor(e=new Bt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Uo.fromBufferAttribute(h,e),a?Qr.addScaledVector(Uo,u):Qr.addScaledVector(Uo.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Zr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Zr,Wu)===null||Pi.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Gu.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=S,N=E;w<N;w+=3){const L=o.getX(w),x=o.getX(w+1),M=o.getX(w+2);s=ra(this,m,e,n,c,u,h,L,x,M),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const S=o.getX(p),E=o.getX(p+1),w=o.getX(p+2);s=ra(this,a,e,n,c,u,h,S,E,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=S,N=E;w<N;w+=3){const L=w,x=w+1,M=w+2;s=ra(this,m,e,n,c,u,h,L,x,M),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const S=p,E=p+1,w=p+2;s=ra(this,a,e,n,c,u,h,S,E,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Fg(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Qn,o),l===null)return null;sa.copy(o),sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:i}}function ra(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,rs),i.getVertexPosition(l,as),i.getVertexPosition(c,os);const u=Fg(i,e,t,n,rs,as,os,ia);if(u){s&&(ea.fromBufferAttribute(s,o),ta.fromBufferAttribute(s,l),na.fromBufferAttribute(s,c),u.uv=Tn.getInterpolation(ia,rs,as,os,ea,ta,na,new ae)),r&&(ea.fromBufferAttribute(r,o),ta.fromBufferAttribute(r,l),na.fromBufferAttribute(r,c),u.uv1=Tn.getInterpolation(ia,rs,as,os,ea,ta,na,new ae),u.uv2=u.uv1),a&&(Xu.fromBufferAttribute(a,o),qu.fromBufferAttribute(a,l),$u.fromBufferAttribute(a,c),u.normal=Tn.getInterpolation(ia,rs,as,os,Xu,qu,$u,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Tn.getNormal(rs,as,os,h.normal),u.face=h}return u}class Gt extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(v,p,m,S,E,w,N,L,x,M,b){const _=w/x,y=N/M,C=w/2,A=N/2,U=L/2,z=x+1,G=M+1;let $=0,q=0;const X=new I;for(let J=0;J<G;J++){const Z=J*y-A;for(let he=0;he<z;he++){const Re=he*_-C;X[v]=Re*S,X[p]=Z*E,X[m]=U,c.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[m]=L>0?1:-1,u.push(X.x,X.y,X.z),h.push(he/x),h.push(1-J/M),$+=1}}for(let J=0;J<M;J++)for(let Z=0;Z<x;Z++){const he=d+Z+z*J,Re=d+Z+z*(J+1),W=d+(Z+1)+z*(J+1),Y=d+(Z+1)+z*J;l.push(he,Re,Y),l.push(Re,W,Y),q+=6}o.addGroup(f,q,b),f+=q,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=Ns(i[t]);for(const s in n)e[s]=n[s]}return e}function Bg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _f(i){return i.getRenderTarget()===null?i.outputColorSpace:je.workingColorSpace}const kg={clone:Ns,merge:Zt};var Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vf extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new I,ju=new ae,Ku=new ae;class Qt extends vf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,ju,Ku),t.subVectors(Ku,ju)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class Hg extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(ls,cs,e,t);s.layers=this.layers,this.add(s);const r=new Qt(ls,cs,e,t);r.layers=this.layers,this.add(r);const a=new Qt(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new Qt(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new Qt(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new Qt(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yf extends Rt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gg extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zi?Qe:_n),this.texture=new yf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:_i});r.uniforms.tEquirect.value=t;const a=new Me(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Kt),new Hg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Oo=new I,Wg=new I,Xg=new ze;class Di{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Oo.subVectors(n,t).cross(Wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xg.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Vn,aa=new I;class ic{constructor(e=new Di,t=new Di,n=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],S=s[13],E=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,p-f,w-m).normalize(),n[1].setComponents(l+r,d+c,p+f,w+m).normalize(),n[2].setComponents(l+a,d+u,p+g,w+S).normalize(),n[3].setComponents(l-a,d-u,p-g,w-S).normalize(),n[4].setComponents(l-o,d-h,p-v,w-E).normalize(),t===Jn)n[5].setComponents(l+o,d+h,p+v,w+E).normalize();else if(t===Pa)n[5].setComponents(o,h,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qg(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),f.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){const m=g[v];t?i.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Fn extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const S=m*d-a;for(let E=0;E<c;E++){const w=E*h-r;g.push(w,-S,0),v.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const E=S+c*m,w=S+c*(m+1),N=S+1+c*(m+1),L=S+1+c*m;f.push(E,w,L),f.push(w,N,L)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_=`#ifdef USE_BATCHING
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
#endif`,n_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,i_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a_=`#ifdef USE_IRIDESCENCE
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
#endif`,o_=`#ifdef USE_BUMPMAP
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,g_=`#define PI 3.141592653589793
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
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`
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
}`,T_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N_=`#ifdef USE_GRADIENTMAP
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
}`,U_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
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
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
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
#endif`,q_=`struct PhysicalMaterial {
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
}`,$_=`
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,uv=`#define MATCAP
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
}`,hv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,yv=`#define TOON
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
}`,xv=`uniform float size;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:$g,alphahash_pars_fragment:jg,alphamap_fragment:Kg,alphamap_pars_fragment:Yg,alphatest_fragment:Jg,alphatest_pars_fragment:Zg,aomap_fragment:Qg,aomap_pars_fragment:e_,batching_pars_vertex:t_,batching_vertex:n_,begin_vertex:i_,beginnormal_vertex:s_,bsdfs:r_,iridescence_fragment:a_,bumpmap_pars_fragment:o_,clipping_planes_fragment:l_,clipping_planes_pars_fragment:c_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:h_,color_fragment:d_,color_pars_fragment:f_,color_pars_vertex:p_,color_vertex:m_,common:g_,cube_uv_reflection_fragment:__,defaultnormal_vertex:v_,displacementmap_pars_vertex:y_,displacementmap_vertex:x_,emissivemap_fragment:E_,emissivemap_pars_fragment:M_,colorspace_fragment:S_,colorspace_pars_fragment:b_,envmap_fragment:T_,envmap_common_pars_fragment:A_,envmap_pars_fragment:w_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:V_,envmap_vertex:C_,fog_vertex:P_,fog_pars_vertex:L_,fog_fragment:I_,fog_pars_fragment:D_,gradientmap_pars_fragment:N_,lightmap_fragment:U_,lightmap_pars_fragment:O_,lights_lambert_fragment:F_,lights_lambert_pars_fragment:B_,lights_pars_begin:k_,lights_toon_fragment:z_,lights_toon_pars_fragment:H_,lights_phong_fragment:G_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:q_,lights_fragment_begin:$_,lights_fragment_maps:j_,lights_fragment_end:K_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:Z_,logdepthbuf_vertex:Q_,map_fragment:e0,map_pars_fragment:t0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:r0,morphcolor_vertex:a0,morphnormal_vertex:o0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:h0,normal_pars_fragment:d0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:y0,opaque_fragment:x0,packing:E0,premultiplied_alpha_fragment:M0,project_vertex:S0,dithering_fragment:b0,dithering_pars_fragment:T0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:C0,shadowmap_vertex:P0,shadowmask_pars_fragment:L0,skinbase_vertex:I0,skinning_pars_vertex:D0,skinning_vertex:N0,skinnormal_vertex:U0,specularmap_fragment:O0,specularmap_pars_fragment:F0,tonemapping_fragment:B0,tonemapping_pars_fragment:k0,transmission_fragment:V0,transmission_pars_fragment:z0,uv_pars_fragment:H0,uv_pars_vertex:G0,uv_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:$0,backgroundCube_vert:j0,backgroundCube_frag:K0,cube_vert:Y0,cube_frag:J0,depth_vert:Z0,depth_frag:Q0,distanceRGBA_vert:ev,distanceRGBA_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:ov,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:uv,meshmatcap_frag:hv,meshnormal_vert:dv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:vv,meshtoon_frag:yv,points_vert:xv,points_frag:Ev,shadow_vert:Mv,shadow_frag:Sv,sprite_vert:bv,sprite_frag:Tv},ie={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Zt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Zt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Zt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Zt([ie.points,ie.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Zt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Zt([ie.common,ie.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Zt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Zt([ie.sprite,ie.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Zt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Zt([ie.lights,ie.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Dn.physical={uniforms:Zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const oa={r:0,b:0,g:0};function Av(i,e,t,n,s,r,a){const o=new _e(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(p,m){let S=!1,E=m.isScene===!0?m.background:null;E&&E.isTexture&&(E=(m.backgroundBlurriness>0?t:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===qa)?(u===void 0&&(u=new Me(new Gt(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Ns(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=je.getTransfer(E.colorSpace)!==ct,(h!==E||d!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Me(new Fn(2,2),new bi({name:"BackgroundMaterial",uniforms:Ns(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=je.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,m){p.getRGB(oa,_f(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function wv(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function h(U,z,G,$,q){let X=!1;if(a){const J=v($,G,z);c!==J&&(c=J,f(c.object)),X=m(U,$,G,q),X&&S(U,$,G,q)}else{const J=z.wireframe===!0;(c.geometry!==$.id||c.program!==G.id||c.wireframe!==J)&&(c.geometry=$.id,c.program=G.id,c.wireframe=J,X=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,M(U,z,G,$),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function v(U,z,G){const $=G.wireframe===!0;let q=o[U.id];q===void 0&&(q={},o[U.id]=q);let X=q[z.id];X===void 0&&(X={},q[z.id]=X);let J=X[$];return J===void 0&&(J=p(d()),X[$]=J),J}function p(U){const z=[],G=[],$=[];for(let q=0;q<s;q++)z[q]=0,G[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:$,object:U,attributes:{},index:null}}function m(U,z,G,$){const q=c.attributes,X=z.attributes;let J=0;const Z=G.getAttributes();for(const he in Z)if(Z[he].location>=0){const W=q[he];let Y=X[he];if(Y===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),W===void 0||W.attribute!==Y||Y&&W.data!==Y.data)return!0;J++}return c.attributesNum!==J||c.index!==$}function S(U,z,G,$){const q={},X=z.attributes;let J=0;const Z=G.getAttributes();for(const he in Z)if(Z[he].location>=0){let W=X[he];W===void 0&&(he==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),he==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));const Y={};Y.attribute=W,W&&W.data&&(Y.data=W.data),q[he]=Y,J++}c.attributes=q,c.attributesNum=J,c.index=$}function E(){const U=c.newAttributes;for(let z=0,G=U.length;z<G;z++)U[z]=0}function w(U){N(U,0)}function N(U,z){const G=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;G[U]=1,$[U]===0&&(i.enableVertexAttribArray(U),$[U]=1),q[U]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),q[U]=z)}function L(){const U=c.newAttributes,z=c.enabledAttributes;for(let G=0,$=z.length;G<$;G++)z[G]!==U[G]&&(i.disableVertexAttribArray(G),z[G]=0)}function x(U,z,G,$,q,X,J){J===!0?i.vertexAttribIPointer(U,z,G,q,X):i.vertexAttribPointer(U,z,G,$,q,X)}function M(U,z,G,$){if(n.isWebGL2===!1&&(U.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const q=$.attributes,X=G.getAttributes(),J=z.defaultAttributeValues;for(const Z in X){const he=X[Z];if(he.location>=0){let Re=q[Z];if(Re===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Re=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Re=U.instanceColor)),Re!==void 0){const W=Re.normalized,Y=Re.itemSize,le=t.get(Re);if(le===void 0)continue;const Se=le.buffer,be=le.type,fe=le.bytesPerElement,qe=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||Re.gpuType===Zd);if(Re.isInterleavedBufferAttribute){const Ie=Re.data,F=Ie.stride,kt=Re.offset;if(Ie.isInstancedInterleavedBuffer){for(let xe=0;xe<he.locationSize;xe++)N(he.location+xe,Ie.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let xe=0;xe<he.locationSize;xe++)w(he.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let xe=0;xe<he.locationSize;xe++)x(he.location+xe,Y/he.locationSize,be,W,F*fe,(kt+Y/he.locationSize*xe)*fe,qe)}else{if(Re.isInstancedBufferAttribute){for(let Ie=0;Ie<he.locationSize;Ie++)N(he.location+Ie,Re.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ie=0;Ie<he.locationSize;Ie++)w(he.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Ie=0;Ie<he.locationSize;Ie++)x(he.location+Ie,Y/he.locationSize,be,W,Y*fe,Y/he.locationSize*Ie*fe,qe)}}else if(J!==void 0){const W=J[Z];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(he.location,W);break;case 3:i.vertexAttrib3fv(he.location,W);break;case 4:i.vertexAttrib4fv(he.location,W);break;default:i.vertexAttrib1fv(he.location,W)}}}}L()}function b(){C();for(const U in o){const z=o[U];for(const G in z){const $=z[G];for(const q in $)g($[q].object),delete $[q];delete z[G]}delete o[U]}}function _(U){if(o[U.id]===void 0)return;const z=o[U.id];for(const G in z){const $=z[G];for(const q in $)g($[q].object),delete $[q];delete z[G]}delete o[U.id]}function y(U){for(const z in o){const G=o[z];if(G[U.id]===void 0)continue;const $=G[U.id];for(const q in $)g($[q].object),delete $[q];delete G[U.id]}}function C(){A(),u=!0,c!==l&&(c=l,f(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:C,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:_,releaseStatesOfProgram:y,initAttributes:E,enableAttribute:w,disableUnusedAttributes:L}}function Rv(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Cv(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,w=a||e.has("OES_texture_float"),N=E&&w,L=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:E,floatFragmentTextures:w,floatVertexTextures:N,maxSamples:L}}function Pv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Di,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,E=S*4;let w=m.clippingState||null;l.value=w,w=u(g,d,E,f);for(let N=0;N!==E;++N)w[N]=t[N];m.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,w=f;E!==v;++E,w+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Lv(i){let e=new WeakMap;function t(a,o){return o===_l?a.mapping=Cs:o===vl&&(a.mapping=Ps),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_l||o===vl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gg(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class sc extends vf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,Yu=[.125,.215,.35,.446,.526,.582],Fi=20,Fo=new sc,Ju=new _e;let Bo=null,ko=0,Vo=0;const Ni=(1+Math.sqrt(5))/2,us=1/Ni,Zu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ni,us),new I(0,Ni,-us),new I(us,0,Ni),new I(-us,0,Ni),new I(Ni,us,0),new I(-Ni,us,0)];class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,ko,Vo),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:xr,format:gn,colorSpace:Ft,depthBuffer:!1},s=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iv(r)),this._blurMaterial=Dv(r,e,t)}return s}_compileMaterial(e){const t=new Me(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,s){const o=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Ju),u.toneMapping=vi,u.autoClear=!1;const f=new Wt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Me(new Gt,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(Ju),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const E=this._cubeSize;la(s,S*E,m>2?E:0,E,E),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Cs||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zu[(s-1)%Zu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Me(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Fi;p>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const m=[];let S=0;for(let x=0;x<Fi;++x){const M=x/v,b=Math.exp(-M*M/2);m.push(b),x===0?S+=b:x<p&&(S+=2*b)}for(let x=0;x<m.length;x++)m[x]=m[x]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const w=this._sizeLods[s],N=3*w*(s>E-Es?s-E+Es:0),L=4*(this._cubeSize-w);la(t,N,L,3*w,2*w),l.setRenderTarget(t),l.render(h,Fo)}}function Iv(i){const e=[],t=[],n=[];let s=i;const r=i-Es+1+Yu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Es?l=Yu[a-i+Es-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*f),E=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let L=0;L<f;L++){const x=L%3*2/3-1,M=L>2?0:-1,b=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];S.set(b,v*g*L),E.set(d,p*g*L);const _=[L,L,L,L,L,L];w.set(_,m*g*L)}const N=new Bt;N.setAttribute("position",new Xt(S,v)),N.setAttribute("uv",new Xt(E,p)),N.setAttribute("faceIndex",new Xt(w,m)),e.push(N),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eh(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dv(i,e,t){const n=new Float32Array(Fi),s=new I(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function th(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function nh(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Nv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_l||l===vl,u=l===Cs||l===Ps;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Qu(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Qu(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Uv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ov(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let E=0,w=S.length;E<w;E+=3){const N=S[E+0],L=S[E+1],x=S[E+2];d.push(N,L,L,x,x,N)}}else if(g!==void 0){const S=g.array;v=g.version;for(let E=0,w=S.length/3-1;E<w;E+=3){const N=E+0,L=E+1,x=E+2;d.push(N,L,L,x,x,N)}}else return;const p=new(cf(d)?gf:mf)(d,1);p.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fv(i,e,t,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,g){i.drawElements(r,g,o,f*l),t.update(g,r,1)}function h(f,g,v){if(v===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,f*l,v),t.update(g,r,v)}function d(f,g,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<v;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,f,0,v);let m=0;for(let S=0;S<v;S++)m+=g[S];t.update(m,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Bv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kv(i,e){return i[0]-e[0]}function Vv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function zv(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new it,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let U=function(){C.dispose(),r.delete(u),u.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),E===!0&&(M=2),w===!0&&(M=3);let b=u.attributes.position.count*M,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const y=new Float32Array(b*_*4*g),C=new df(y,b,_,g);C.type=On,C.needsUpdate=!0;const A=M*4;for(let z=0;z<g;z++){const G=N[z],$=L[z],q=x[z],X=b*_*4*z;for(let J=0;J<G.count;J++){const Z=J*A;S===!0&&(a.fromBufferAttribute(G,J),y[X+Z+0]=a.x,y[X+Z+1]=a.y,y[X+Z+2]=a.z,y[X+Z+3]=0),E===!0&&(a.fromBufferAttribute($,J),y[X+Z+4]=a.x,y[X+Z+5]=a.y,y[X+Z+6]=a.z,y[X+Z+7]=0),w===!0&&(a.fromBufferAttribute(q,J),y[X+Z+8]=a.x,y[X+Z+9]=a.y,y[X+Z+10]=a.z,y[X+Z+11]=q.itemSize===4?a.w:1)}}v={count:g,texture:C,size:new ae(b,_)},r.set(u,v),u.addEventListener("dispose",U)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",m),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let E=0;E<f;E++)g[E]=[E,0];n[u.id]=g}for(let E=0;E<f;E++){const w=g[E];w[0]=E,w[1]=d[E]}g.sort(Vv);for(let E=0;E<8;E++)E<f&&g[E][1]?(o[E][0]=g[E][0],o[E][1]=g[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(kv);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let E=0;E<8;E++){const w=o[E],N=w[0],L=w[1];N!==Number.MAX_SAFE_INTEGER&&L?(v&&u.getAttribute("morphTarget"+E)!==v[N]&&u.setAttribute("morphTarget"+E,v[N]),p&&u.getAttribute("morphNormal"+E)!==p[N]&&u.setAttribute("morphNormal"+E,p[N]),s[E]=L,m+=L):(v&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),p&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Hv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Ef extends Rt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vi&&(n=pi),n===void 0&&u===Ls&&(n=ki),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mf=new Rt,Sf=new Ef(1,1);Sf.compareFunction=lf;const bf=new df,Tf=new Ag,Af=new yf,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function Vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ya(i,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function $v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Pt(t,n)}}function jv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),Pt(t,n)}}function Kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Pt(t,n)}}function Yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function ey(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function sy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Sf:Mf;t.setTexture2D(e||r,s)}function ry(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tf,s)}function ay(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function oy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function ly(i){switch(i){case 5126:return Gv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return $v;case 35675:return jv;case 35676:return Kv;case 5124:case 35670:return Yv;case 35667:case 35671:return Jv;case 35668:case 35672:return Zv;case 35669:case 35673:return Qv;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function cy(i,e){i.uniform1fv(this.addr,e)}function uy(i,e){const t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function hy(i,e){const t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function dy(i,e){const t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function fy(i,e){const t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function py(i,e){const t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function my(i,e){const t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gy(i,e){i.uniform1iv(this.addr,e)}function _y(i,e){i.uniform2iv(this.addr,e)}function vy(i,e){i.uniform3iv(this.addr,e)}function yy(i,e){i.uniform4iv(this.addr,e)}function xy(i,e){i.uniform1uiv(this.addr,e)}function Ey(i,e){i.uniform2uiv(this.addr,e)}function My(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function by(i,e,t){const n=this.cache,s=e.length,r=Ya(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mf,r[a])}function Ty(i,e,t){const n=this.cache,s=e.length,r=Ya(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Tf,r[a])}function Ay(i,e,t){const n=this.cache,s=e.length,r=Ya(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Af,r[a])}function wy(i,e,t){const n=this.cache,s=e.length,r=Ya(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bf,r[a])}function Ry(i){switch(i){case 5126:return cy;case 35664:return uy;case 35665:return hy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return vy;case 35669:case 35673:return yy;case 5125:return xy;case 36294:return Ey;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return wy}}class Cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ly(t.type)}}class Py{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ry(t.type)}}class Ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function lh(i,e){i.seq.push(e),i.map[e.id]=e}function Iy(i,e,t){const n=i.name,s=n.length;for(zo.lastIndex=0;;){const r=zo.exec(n),a=zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lh(t,c===void 0?new Cy(o,i,e):new Py(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Ly(o),lh(t,h)),t=h}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Iy(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ch(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Dy=37297;let Ny=0;function Uy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Oy(i){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(i);let n;switch(e===t?n="":e===Ca&&t===Ra?n="LinearDisplayP3ToLinearSRGB":e===Ra&&t===Ca&&(n="LinearSRGBToLinearDisplayP3"),i){case Ft:case $a:return[n,"LinearTransferOETF"];case Qe:case tc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Uy(i.getShaderSource(e),a)}else return s}function Fy(i,e){const t=Oy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function By(i,e){let t;switch(e){case Nm:t="Linear";break;case Um:t="Reinhard";break;case Om:t="OptimizedCineon";break;case Yd:t="ACESFilmic";break;case Bm:t="AgX";break;case Fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ky(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function Vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function zy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ms(i){return i!==""}function hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(Gy,Xy)}const Wy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xy(i,e){let t=Oe[e];if(t===void 0){const n=Wy.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(qy,$y)}function $y(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ky(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Jy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zl:e="ENVMAP_BLENDING_MULTIPLY";break;case Im:e="ENVMAP_BLENDING_MIX";break;case Dm:e="ENVMAP_BLENDING_ADD";break}return e}function Zy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qy(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jy(t),c=Ky(t),u=Yy(t),h=Jy(t),d=Zy(t),f=t.isWebGL2?"":ky(t),g=Vy(t),v=zy(r),p=s.createProgram();let m,S,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ms).join(`
`),m.length>0&&(m+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ms).join(`
`),S.length>0&&(S+=`
`)):(m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),S=[f,ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==vi?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Fy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Sl(a),a=hh(a,t),a=dh(a,t),o=Sl(o),o=hh(o,t),o=dh(o,t),a=fh(a),o=fh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=E+m+a,N=E+S+o,L=ch(s,s.VERTEX_SHADER,w),x=ch(s,s.FRAGMENT_SHADER,N);s.attachShader(p,L),s.attachShader(p,x),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function M(C){if(i.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),U=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(x).trim();let G=!0,$=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,L,x);else{const q=uh(s,L,"vertex"),X=uh(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+q+`
`+X)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(U===""||z==="")&&($=!1);$&&(C.diagnostics={runnable:G,programLog:A,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:S}})}s.deleteShader(L),s.deleteShader(x),b=new ba(s,p),_=Hy(s,p)}let b;this.getUniforms=function(){return b===void 0&&M(this),b};let _;this.getAttributes=function(){return _===void 0&&M(this),_};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(p,Dy)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ny++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=x,this}let ex=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nx(e),t.set(e,n)),n}}class nx{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}}function ix(i,e,t,n,s,r,a){const o=new ff,l=new tx,c=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,C,A,U){const z=A.fog,G=U.geometry,$=_.isMeshStandardMaterial?A.environment:null,q=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),X=q&&q.mapping===qa?q.image.height:null,J=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=Z!==void 0?Z.length:0;let Re=0;G.morphAttributes.position!==void 0&&(Re=1),G.morphAttributes.normal!==void 0&&(Re=2),G.morphAttributes.color!==void 0&&(Re=3);let W,Y,le,Se;if(J){const rt=Dn[J];W=rt.vertexShader,Y=rt.fragmentShader}else W=_.vertexShader,Y=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),Se=l.getFragmentShaderID(_);const be=i.getRenderTarget(),fe=U.isInstancedMesh===!0,qe=U.isBatchedMesh===!0,Ie=!!_.map,F=!!_.matcap,kt=!!q,xe=!!_.aoMap,Ce=!!_.lightMap,ve=!!_.bumpMap,ht=!!_.normalMap,Ne=!!_.displacementMap,P=!!_.emissiveMap,T=!!_.metalnessMap,B=!!_.roughnessMap,ee=_.anisotropy>0,j=_.clearcoat>0,Q=_.iridescence>0,pe=_.sheen>0,re=_.transmission>0,ce=ee&&!!_.anisotropyMap,Ae=j&&!!_.clearcoatMap,Be=j&&!!_.clearcoatNormalMap,K=j&&!!_.clearcoatRoughnessMap,et=Q&&!!_.iridescenceMap,He=Q&&!!_.iridescenceThicknessMap,Pe=pe&&!!_.sheenColorMap,ye=pe&&!!_.sheenRoughnessMap,ue=!!_.specularMap,Ue=!!_.specularColorMap,Ke=!!_.specularIntensityMap,ot=re&&!!_.transmissionMap,Ge=re&&!!_.thicknessMap,nt=!!_.gradientMap,D=!!_.alphaMap,te=_.alphaTest>0,ne=!!_.alphaHash,de=!!_.extensions;let Ee=vi;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Ye={isWebGL2:h,shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:Y,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:qe,instancing:fe,instancingColor:fe&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ft,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:F,envMap:kt,envMapMode:kt&&q.mapping,envMapCubeUVHeight:X,aoMap:xe,lightMap:Ce,bumpMap:ve,normalMap:ht,displacementMap:f&&Ne,emissiveMap:P,normalMapObjectSpace:ht&&_.normalMapType===Zm,normalMapTangentSpace:ht&&_.normalMapType===ec,metalnessMap:T,roughnessMap:B,anisotropy:ee,anisotropyMap:ce,clearcoat:j,clearcoatMap:Ae,clearcoatNormalMap:Be,clearcoatRoughnessMap:K,iridescence:Q,iridescenceMap:et,iridescenceThicknessMap:He,sheen:pe,sheenColorMap:Pe,sheenRoughnessMap:ye,specularMap:ue,specularColorMap:Ue,specularIntensityMap:Ke,transmission:re,transmissionMap:ot,thicknessMap:Ge,gradientMap:nt,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:D,alphaTest:te,alphaHash:ne,combine:_.combine,mapUv:Ie&&p(_.map.channel),aoMapUv:xe&&p(_.aoMap.channel),lightMapUv:Ce&&p(_.lightMap.channel),bumpMapUv:ve&&p(_.bumpMap.channel),normalMapUv:ht&&p(_.normalMap.channel),displacementMapUv:Ne&&p(_.displacementMap.channel),emissiveMapUv:P&&p(_.emissiveMap.channel),metalnessMapUv:T&&p(_.metalnessMap.channel),roughnessMapUv:B&&p(_.roughnessMap.channel),anisotropyMapUv:ce&&p(_.anisotropyMap.channel),clearcoatMapUv:Ae&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Be&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(_.sheenRoughnessMap.channel),specularMapUv:ue&&p(_.specularMap.channel),specularColorMapUv:Ue&&p(_.specularColorMap.channel),specularIntensityMapUv:Ke&&p(_.specularIntensityMap.channel),transmissionMapUv:ot&&p(_.transmissionMap.channel),thicknessMapUv:Ge&&p(_.thicknessMap.channel),alphaMapUv:D&&p(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ht||ee),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Ie||D),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:de&&_.extensions.derivatives===!0,extensionFragDepth:de&&_.extensions.fragDepth===!0,extensionDrawBuffers:de&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function S(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(E(y,_),w(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function E(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function w(_,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)}function N(_){const y=v[_.type];let C;if(y){const A=Dn[y];C=kg.clone(A.uniforms)}else C=_.uniforms;return C}function L(_,y){let C;for(let A=0,U=u.length;A<U;A++){const z=u[A];if(z.cacheKey===y){C=z,++C.usedTimes;break}}return C===void 0&&(C=new Qy(i,y,_,r),u.push(C)),C}function x(_){if(--_.usedTimes===0){const y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function M(_){l.remove(_)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:N,acquireProgram:L,releaseProgram:x,releaseShaderCache:M,programs:u,dispose:b}}function sx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,v,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),e++,m}function o(h,d,f,g,v,p){const m=a(h,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,g,v,p){const m=a(h,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||rx),n.length>1&&n.sort(d||mh),s.length>1&&s.sort(d||mh)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function ax(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new gh,i.set(n,[a])):s>=r.length?(a=new gh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ox(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new _e};break;case"SpotLight":t={position:new I,direction:new I,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function lx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cx=0;function ux(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hx(i,e){const t=new ox,n=lx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,a=new Fe,o=new Fe;function l(u,h){let d=0,f=0,g=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let v=0,p=0,m=0,S=0,E=0,w=0,N=0,L=0,x=0,M=0,b=0;u.sort(ux);const _=h===!0?Math.PI:1;for(let C=0,A=u.length;C<A;C++){const U=u[C],z=U.color,G=U.intensity,$=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=z.r*G*_,f+=z.g*G*_,g+=z.b*G*_;else if(U.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(U.sh.coefficients[X],G);b++}else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*_),U.castShadow){const J=U.shadow,Z=n.get(U);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,s.directionalShadow[v]=Z,s.directionalShadowMap[v]=q,s.directionalShadowMatrix[v]=U.shadow.matrix,w++}s.directional[v]=X,v++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(z).multiplyScalar(G*_),X.distance=$,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,s.spot[m]=X;const J=U.shadow;if(U.map&&(s.spotLightMap[x]=U.map,x++,J.updateMatrices(U),U.castShadow&&M++),s.spotLightMatrix[m]=J.matrix,U.castShadow){const Z=n.get(U);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,s.spotShadow[m]=Z,s.spotShadowMap[m]=q,L++}m++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),s.rectArea[S]=X,S++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*_),X.distance=U.distance,X.decay=U.decay,U.castShadow){const J=U.shadow,Z=n.get(U);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,s.pointShadow[p]=Z,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=U.shadow.matrix,N++}s.point[p]=X,p++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(G*_),X.groundColor.copy(U.groundColor).multiplyScalar(G*_),s.hemi[E]=X,E++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const y=s.hash;(y.directionalLength!==v||y.pointLength!==p||y.spotLength!==m||y.rectAreaLength!==S||y.hemiLength!==E||y.numDirectionalShadows!==w||y.numPointShadows!==N||y.numSpotShadows!==L||y.numSpotMaps!==x||y.numLightProbes!==b)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=S,s.point.length=p,s.hemi.length=E,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=L+x-M,s.spotLightMap.length=x,s.numSpotLightShadowsWithMaps=M,s.numLightProbes=b,y.directionalLength=v,y.pointLength=p,y.spotLength=m,y.rectAreaLength=S,y.hemiLength=E,y.numDirectionalShadows=w,y.numPointShadows=N,y.numSpotShadows=L,y.numSpotMaps=x,y.numLightProbes=b,s.version=cx++)}function c(u,h){let d=0,f=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let S=0,E=u.length;S<E;S++){const w=u[S];if(w.isDirectionalLight){const N=s.directional[d];N.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(m),d++}else if(w.isSpotLight){const N=s.spot[g];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(m),N.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(m),g++}else if(w.isRectAreaLight){const N=s.rectArea[v];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const N=s.point[f];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const N=s.hemi[p];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function _h(i,e){const t=new hx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function dx(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new _h(i,e),t.set(r,[l])):a>=o.length?(l=new _h(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class fx extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class px extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`;function _x(i,e,t){let n=new ic;const s=new ae,r=new ae,a=new it,o=new fx({depthPacking:Jm}),l=new px,c={},u=t.maxTextureSize,h={[Qn]:sn,[sn]:Qn,[en]:en},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Me(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let m=this.type;this.render=function(L,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const b=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),C=i.state;C.setBlending(_i),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const A=m!==Kn&&this.type===Kn,U=m===Kn&&this.type!==Kn;for(let z=0,G=L.length;z<G;z++){const $=L[z],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const X=q.getFrameExtents();if(s.multiply(X),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,q.mapSize.y=r.y)),q.map===null||A===!0||U===!0){const Z=this.type!==Kn?{minFilter:mt,magFilter:mt}:{};q.map!==null&&q.map.dispose(),q.map=new Xi(s.x,s.y,Z),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const J=q.getViewportCount();for(let Z=0;Z<J;Z++){const he=q.getViewport(Z);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),C.viewport(a),q.updateMatrices($,Z),n=q.getFrustum(),w(x,M,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===Kn&&S(q,M),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,_,y)};function S(L,x){const M=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(x,null,M,d,v,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(x,null,M,f,v,null)}function E(L,x,M,b){let _=null;const y=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(y!==void 0)_=y;else if(_=M.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const C=_.uuid,A=x.uuid;let U=c[C];U===void 0&&(U={},c[C]=U);let z=U[A];z===void 0&&(z=_.clone(),U[A]=z,x.addEventListener("dispose",N)),_=z}if(_.visible=x.visible,_.wireframe=x.wireframe,b===Kn?_.side=x.shadowSide!==null?x.shadowSide:x.side:_.side=x.shadowSide!==null?x.shadowSide:h[x.side],_.alphaMap=x.alphaMap,_.alphaTest=x.alphaTest,_.map=x.map,_.clipShadows=x.clipShadows,_.clippingPlanes=x.clippingPlanes,_.clipIntersection=x.clipIntersection,_.displacementMap=x.displacementMap,_.displacementScale=x.displacementScale,_.displacementBias=x.displacementBias,_.wireframeLinewidth=x.wireframeLinewidth,_.linewidth=x.linewidth,M.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const C=i.properties.get(_);C.light=M}return _}function w(L,x,M,b,_){if(L.visible===!1)return;if(L.layers.test(x.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===Kn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const A=e.update(L),U=L.material;if(Array.isArray(U)){const z=A.groups;for(let G=0,$=z.length;G<$;G++){const q=z[G],X=U[q.materialIndex];if(X&&X.visible){const J=E(L,X,b,_);L.onBeforeShadow(i,L,x,M,A,J,q),i.renderBufferDirect(M,null,A,J,L,q),L.onAfterShadow(i,L,x,M,A,J,q)}}}else if(U.visible){const z=E(L,U,b,_);L.onBeforeShadow(i,L,x,M,A,z,null),i.renderBufferDirect(M,null,A,z,L,null),L.onAfterShadow(i,L,x,M,A,z,null)}}const C=L.children;for(let A=0,U=C.length;A<U;A++)w(C[A],x,M,b,_)}function N(L){L.target.removeEventListener("dispose",N);for(const M in c){const b=c[M],_=L.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}function vx(i,e,t){const n=t.isWebGL2;function s(){let D=!1;const te=new it;let ne=null;const de=new it(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!D&&(i.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,Ye,rt,Vt,hn){hn===!0&&(Ee*=Vt,Ye*=Vt,rt*=Vt),te.set(Ee,Ye,rt,Vt),de.equals(te)===!1&&(i.clearColor(Ee,Ye,rt,Vt),de.copy(te))},reset:function(){D=!1,ne=null,de.set(-1,0,0,0)}}}function r(){let D=!1,te=null,ne=null,de=null;return{setTest:function(Ee){Ee?fe(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(Ee){te!==Ee&&!D&&(i.depthMask(Ee),te=Ee)},setFunc:function(Ee){if(ne!==Ee){switch(Ee){case Tm:i.depthFunc(i.NEVER);break;case Am:i.depthFunc(i.ALWAYS);break;case wm:i.depthFunc(i.LESS);break;case Ta:i.depthFunc(i.LEQUAL);break;case Rm:i.depthFunc(i.EQUAL);break;case Cm:i.depthFunc(i.GEQUAL);break;case Pm:i.depthFunc(i.GREATER);break;case Lm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Ee}},setLocked:function(Ee){D=Ee},setClear:function(Ee){de!==Ee&&(i.clearDepth(Ee),de=Ee)},reset:function(){D=!1,te=null,ne=null,de=null}}}function a(){let D=!1,te=null,ne=null,de=null,Ee=null,Ye=null,rt=null,Vt=null,hn=null;return{setTest:function(at){D||(at?fe(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(at){te!==at&&!D&&(i.stencilMask(at),te=at)},setFunc:function(at,Yt,Pn){(ne!==at||de!==Yt||Ee!==Pn)&&(i.stencilFunc(at,Yt,Pn),ne=at,de=Yt,Ee=Pn)},setOp:function(at,Yt,Pn){(Ye!==at||rt!==Yt||Vt!==Pn)&&(i.stencilOp(at,Yt,Pn),Ye=at,rt=Yt,Vt=Pn)},setLocked:function(at){D=at},setClear:function(at){hn!==at&&(i.clearStencil(at),hn=at)},reset:function(){D=!1,te=null,ne=null,de=null,Ee=null,Ye=null,rt=null,Vt=null,hn=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,v=[],p=null,m=!1,S=null,E=null,w=null,N=null,L=null,x=null,M=null,b=new _e(0,0,0),_=0,y=!1,C=null,A=null,U=null,z=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=X>=2);let Z=null,he={};const Re=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),Y=new it().fromArray(Re),le=new it().fromArray(W);function Se(D,te,ne,de){const Ee=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(D,Ye),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<ne;rt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(te,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(te+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Ye}const be={};be[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(i.DEPTH_TEST),l.setFunc(Ta),Ne(!1),P(Kc),fe(i.CULL_FACE),ve(_i);function fe(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function qe(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ie(D,te){return f[D]!==te?(i.bindFramebuffer(D,te),f[D]=te,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=te),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=te)),!0):!1}function F(D,te){let ne=v,de=!1;if(D)if(ne=g.get(te),ne===void 0&&(ne=[],g.set(te,ne)),D.isWebGLMultipleRenderTargets){const Ee=D.texture;if(ne.length!==Ee.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,rt=Ee.length;Ye<rt;Ye++)ne[Ye]=i.COLOR_ATTACHMENT0+Ye;ne.length=Ee.length,de=!0}}else ne[0]!==i.COLOR_ATTACHMENT0&&(ne[0]=i.COLOR_ATTACHMENT0,de=!0);else ne[0]!==i.BACK&&(ne[0]=i.BACK,de=!0);de&&(t.isWebGL2?i.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function kt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const xe={[Oi]:i.FUNC_ADD,[um]:i.FUNC_SUBTRACT,[hm]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[Zc]=i.MIN,xe[Qc]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(xe[Zc]=D.MIN_EXT,xe[Qc]=D.MAX_EXT)}const Ce={[dm]:i.ZERO,[fm]:i.ONE,[pm]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[xm]:i.SRC_ALPHA_SATURATE,[vm]:i.DST_COLOR,[gm]:i.DST_ALPHA,[mm]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[ym]:i.ONE_MINUS_DST_COLOR,[_m]:i.ONE_MINUS_DST_ALPHA,[Em]:i.CONSTANT_COLOR,[Mm]:i.ONE_MINUS_CONSTANT_COLOR,[Sm]:i.CONSTANT_ALPHA,[bm]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(D,te,ne,de,Ee,Ye,rt,Vt,hn,at){if(D===_i){m===!0&&(qe(i.BLEND),m=!1);return}if(m===!1&&(fe(i.BLEND),m=!0),D!==cm){if(D!==S||at!==y){if((E!==Oi||L!==Oi)&&(i.blendEquation(i.FUNC_ADD),E=Oi,L=Oi),at)switch(D){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFunc(i.ONE,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,N=null,x=null,M=null,b.set(0,0,0),_=0,S=D,y=at}return}Ee=Ee||te,Ye=Ye||ne,rt=rt||de,(te!==E||Ee!==L)&&(i.blendEquationSeparate(xe[te],xe[Ee]),E=te,L=Ee),(ne!==w||de!==N||Ye!==x||rt!==M)&&(i.blendFuncSeparate(Ce[ne],Ce[de],Ce[Ye],Ce[rt]),w=ne,N=de,x=Ye,M=rt),(Vt.equals(b)===!1||hn!==_)&&(i.blendColor(Vt.r,Vt.g,Vt.b,hn),b.copy(Vt),_=hn),S=D,y=!1}function ht(D,te){D.side===en?qe(i.CULL_FACE):fe(i.CULL_FACE);let ne=D.side===sn;te&&(ne=!ne),Ne(ne),D.blending===Ts&&D.transparent===!1?ve(_i):ve(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const de=D.stencilWrite;c.setTest(de),de&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function P(D){D!==am?(fe(i.CULL_FACE),D!==A&&(D===Kc?i.cullFace(i.BACK):D===om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),A=D}function T(D){D!==U&&(q&&i.lineWidth(D),U=D)}function B(D,te,ne){D?(fe(i.POLYGON_OFFSET_FILL),(z!==te||G!==ne)&&(i.polygonOffset(te,ne),z=te,G=ne)):qe(i.POLYGON_OFFSET_FILL)}function ee(D){D?fe(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function j(D){D===void 0&&(D=i.TEXTURE0+$-1),Z!==D&&(i.activeTexture(D),Z=D)}function Q(D,te,ne){ne===void 0&&(Z===null?ne=i.TEXTURE0+$-1:ne=Z);let de=he[ne];de===void 0&&(de={type:void 0,texture:void 0},he[ne]=de),(de.type!==D||de.texture!==te)&&(Z!==ne&&(i.activeTexture(ne),Z=ne),i.bindTexture(D,te||be[D]),de.type=D,de.texture=te)}function pe(){const D=he[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){Y.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function Ke(D){le.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function ot(D,te){let ne=h.get(te);ne===void 0&&(ne=new WeakMap,h.set(te,ne));let de=ne.get(D);de===void 0&&(de=i.getUniformBlockIndex(te,D.name),ne.set(D,de))}function Ge(D,te){const de=h.get(te).get(D);u.get(te)!==de&&(i.uniformBlockBinding(te,de,D.__bindingPointIndex),u.set(te,de))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,he={},f={},g=new WeakMap,v=[],p=null,m=!1,S=null,E=null,w=null,N=null,L=null,x=null,M=null,b=new _e(0,0,0),_=0,y=!1,C=null,A=null,U=null,z=null,G=null,Y.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:qe,bindFramebuffer:Ie,drawBuffers:F,useProgram:kt,setBlending:ve,setMaterial:ht,setFlipSided:Ne,setCullFace:P,setLineWidth:T,setPolygonOffset:B,setScissorTest:ee,activeTexture:j,bindTexture:Q,unbindTexture:pe,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:ye,texImage3D:ue,updateUBOMapping:ot,uniformBlockBinding:Ge,texStorage2D:He,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:Be,compressedTexSubImage2D:K,compressedTexSubImage3D:et,scissor:Ue,viewport:Ke,reset:nt}}function yx(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return f?new OffscreenCanvas(P,T):Mr("canvas")}function v(P,T,B,ee){let j=1;if((P.width>ee||P.height>ee)&&(j=ee/Math.max(P.width,P.height)),j<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const Q=T?La:Math.floor,pe=Q(j*P.width),re=Q(j*P.height);h===void 0&&(h=g(pe,re));const ce=B?g(pe,re):h;return ce.width=pe,ce.height=re,ce.getContext("2d").drawImage(P,0,0,pe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+pe+"x"+re+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return Ml(P.width)&&Ml(P.height)}function m(P){return o?!1:P.wrapS!==mn||P.wrapT!==mn||P.minFilter!==mt&&P.minFilter!==Kt}function S(P,T){return P.generateMipmaps&&T&&P.minFilter!==mt&&P.minFilter!==Kt}function E(P){i.generateMipmap(P)}function w(P,T,B,ee,j=!1){if(o===!1)return T;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=T;if(T===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),T===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),T===i.RGBA){const pe=j?wa:je.getTransfer(ee);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=pe===ct?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function N(P,T,B){return S(P,B)===!0||P.isFramebufferTexture&&P.minFilter!==mt&&P.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){return P===mt||P===Wi||P===vs?i.NEAREST:i.LINEAR}function x(P){const T=P.target;T.removeEventListener("dispose",x),b(T),T.isVideoTexture&&u.delete(T)}function M(P){const T=P.target;T.removeEventListener("dispose",M),y(T)}function b(P){const T=n.get(P);if(T.__webglInit===void 0)return;const B=P.source,ee=d.get(B);if(ee){const j=ee[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&_(P),Object.keys(ee).length===0&&d.delete(B)}n.remove(P)}function _(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const B=P.source,ee=d.get(B);delete ee[T.__cacheKey],a.memory.textures--}function y(P){const T=P.texture,B=n.get(P),ee=n.get(T);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(B.__webglFramebuffer[j]))for(let Q=0;Q<B.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(B.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(B.__webglFramebuffer[j]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[j])}else{if(Array.isArray(B.__webglFramebuffer))for(let j=0;j<B.__webglFramebuffer.length;j++)i.deleteFramebuffer(B.__webglFramebuffer[j]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let j=0;j<B.__webglColorRenderbuffer.length;j++)B.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[j]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let j=0,Q=T.length;j<Q;j++){const pe=n.get(T[j]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(T[j])}n.remove(T),n.remove(P)}let C=0;function A(){C=0}function U(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function z(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function G(P,T){const B=n.get(P);if(P.isVideoTexture&&ht(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,P,T);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function $(P,T){const B=n.get(P);if(P.version>0&&B.__version!==P.version){Y(B,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function q(P,T){const B=n.get(P);if(P.version>0&&B.__version!==P.version){Y(B,P,T);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function X(P,T){const B=n.get(P);if(P.version>0&&B.__version!==P.version){le(B,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}const J={[Si]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},Z={[mt]:i.NEAREST,[Wi]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},he={[Qm]:i.NEVER,[rg]:i.ALWAYS,[eg]:i.LESS,[lf]:i.LEQUAL,[tg]:i.EQUAL,[sg]:i.GEQUAL,[ng]:i.GREATER,[ig]:i.NOTEQUAL};function Re(P,T,B){if(T.type===On&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kt||T.magFilter===Sa||T.magFilter===vs||T.magFilter===Yn||T.minFilter===Kt||T.minFilter===Sa||T.minFilter===vs||T.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(i.texParameteri(P,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,J[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Z[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Z[T.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==mn||T.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,L(T.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,L(T.minFilter)),T.minFilter!==mt&&T.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===mt||T.minFilter!==vs&&T.minFilter!==Yn||T.type===On&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function W(P,T){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",x));const ee=T.source;let j=d.get(ee);j===void 0&&(j={},d.set(ee,j));const Q=z(T);if(Q!==P.__cacheKey){j[Q]===void 0&&(j[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[Q].usedTimes++;const pe=j[P.__cacheKey];pe!==void 0&&(j[P.__cacheKey].usedTimes--,pe.usedTimes===0&&_(T)),P.__cacheKey=Q,P.__webglTexture=j[Q].texture}return B}function Y(P,T,B){let ee=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=i.TEXTURE_3D);const j=W(P,T),Q=T.source;t.bindTexture(ee,P.__webglTexture,i.TEXTURE0+B);const pe=n.get(Q);if(Q.version!==pe.__version||j===!0){t.activeTexture(i.TEXTURE0+B);const re=je.getPrimaries(je.workingColorSpace),ce=T.colorSpace===_n?null:je.getPrimaries(T.colorSpace),Ae=T.colorSpace===_n||re===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Be=m(T)&&p(T.image)===!1;let K=v(T.image,Be,!1,s.maxTextureSize);K=Ne(T,K);const et=p(K)||o,He=r.convert(T.format,T.colorSpace);let Pe=r.convert(T.type),ye=w(T.internalFormat,He,Pe,T.colorSpace,T.isVideoTexture);Re(ee,T,et);let ue;const Ue=T.mipmaps,Ke=o&&T.isVideoTexture!==!0&&ye!==rf,ot=pe.__version===void 0||j===!0,Ge=Q.dataReady,nt=N(T,K,et);if(T.isDepthTexture)ye=i.DEPTH_COMPONENT,o?T.type===On?ye=i.DEPTH_COMPONENT32F:T.type===pi?ye=i.DEPTH_COMPONENT24:T.type===ki?ye=i.DEPTH24_STENCIL8:ye=i.DEPTH_COMPONENT16:T.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vi&&ye===i.DEPTH_COMPONENT&&T.type!==Ql&&T.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=pi,Pe=r.convert(T.type)),T.format===Ls&&ye===i.DEPTH_COMPONENT&&(ye=i.DEPTH_STENCIL,T.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ki,Pe=r.convert(T.type))),ot&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,ye,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ye,K.width,K.height,0,He,Pe,null));else if(T.isDataTexture)if(Ue.length>0&&et){Ke&&ot&&t.texStorage2D(i.TEXTURE_2D,nt,ye,Ue[0].width,Ue[0].height);for(let D=0,te=Ue.length;D<te;D++)ue=Ue[D],Ke?Ge&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,ue.width,ue.height,He,Pe,ue.data):t.texImage2D(i.TEXTURE_2D,D,ye,ue.width,ue.height,0,He,Pe,ue.data);T.generateMipmaps=!1}else Ke?(ot&&t.texStorage2D(i.TEXTURE_2D,nt,ye,K.width,K.height),Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,He,Pe,K.data)):t.texImage2D(i.TEXTURE_2D,0,ye,K.width,K.height,0,He,Pe,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ye,Ue[0].width,Ue[0].height,K.depth);for(let D=0,te=Ue.length;D<te;D++)ue=Ue[D],T.format!==gn?He!==null?Ke?Ge&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,ue.width,ue.height,K.depth,He,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,D,ye,ue.width,ue.height,K.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,ue.width,ue.height,K.depth,He,Pe,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,D,ye,ue.width,ue.height,K.depth,0,He,Pe,ue.data)}else{Ke&&ot&&t.texStorage2D(i.TEXTURE_2D,nt,ye,Ue[0].width,Ue[0].height);for(let D=0,te=Ue.length;D<te;D++)ue=Ue[D],T.format!==gn?He!==null?Ke?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,D,0,0,ue.width,ue.height,He,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,D,ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ge&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,ue.width,ue.height,He,Pe,ue.data):t.texImage2D(i.TEXTURE_2D,D,ye,ue.width,ue.height,0,He,Pe,ue.data)}else if(T.isDataArrayTexture)Ke?(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ye,K.width,K.height,K.depth),Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,He,Pe,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,K.width,K.height,K.depth,0,He,Pe,K.data);else if(T.isData3DTexture)Ke?(ot&&t.texStorage3D(i.TEXTURE_3D,nt,ye,K.width,K.height,K.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,He,Pe,K.data)):t.texImage3D(i.TEXTURE_3D,0,ye,K.width,K.height,K.depth,0,He,Pe,K.data);else if(T.isFramebufferTexture){if(ot)if(Ke)t.texStorage2D(i.TEXTURE_2D,nt,ye,K.width,K.height);else{let D=K.width,te=K.height;for(let ne=0;ne<nt;ne++)t.texImage2D(i.TEXTURE_2D,ne,ye,D,te,0,He,Pe,null),D>>=1,te>>=1}}else if(Ue.length>0&&et){Ke&&ot&&t.texStorage2D(i.TEXTURE_2D,nt,ye,Ue[0].width,Ue[0].height);for(let D=0,te=Ue.length;D<te;D++)ue=Ue[D],Ke?Ge&&t.texSubImage2D(i.TEXTURE_2D,D,0,0,He,Pe,ue):t.texImage2D(i.TEXTURE_2D,D,ye,He,Pe,ue);T.generateMipmaps=!1}else Ke?(ot&&t.texStorage2D(i.TEXTURE_2D,nt,ye,K.width,K.height),Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,Pe,K)):t.texImage2D(i.TEXTURE_2D,0,ye,He,Pe,K);S(T,et)&&E(ee),pe.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function le(P,T,B){if(T.image.length!==6)return;const ee=W(P,T),j=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+B);const Q=n.get(j);if(j.version!==Q.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const pe=je.getPrimaries(je.workingColorSpace),re=T.colorSpace===_n?null:je.getPrimaries(T.colorSpace),ce=T.colorSpace===_n||pe===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ae=T.isCompressedTexture||T.image[0].isCompressedTexture,Be=T.image[0]&&T.image[0].isDataTexture,K=[];for(let D=0;D<6;D++)!Ae&&!Be?K[D]=v(T.image[D],!1,!0,s.maxCubemapSize):K[D]=Be?T.image[D].image:T.image[D],K[D]=Ne(T,K[D]);const et=K[0],He=p(et)||o,Pe=r.convert(T.format,T.colorSpace),ye=r.convert(T.type),ue=w(T.internalFormat,Pe,ye,T.colorSpace),Ue=o&&T.isVideoTexture!==!0,Ke=Q.__version===void 0||ee===!0,ot=j.dataReady;let Ge=N(T,et,He);Re(i.TEXTURE_CUBE_MAP,T,He);let nt;if(Ae){Ue&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ue,et.width,et.height);for(let D=0;D<6;D++){nt=K[D].mipmaps;for(let te=0;te<nt.length;te++){const ne=nt[te];T.format!==gn?Pe!==null?Ue?ot&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,0,0,ne.width,ne.height,Pe,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,ue,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,0,0,ne.width,ne.height,Pe,ye,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te,ue,ne.width,ne.height,0,Pe,ye,ne.data)}}}else{nt=T.mipmaps,Ue&&Ke&&(nt.length>0&&Ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ue,K[0].width,K[0].height));for(let D=0;D<6;D++)if(Be){Ue?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,K[D].width,K[D].height,Pe,ye,K[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ue,K[D].width,K[D].height,0,Pe,ye,K[D].data);for(let te=0;te<nt.length;te++){const de=nt[te].image[D].image;Ue?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,0,0,de.width,de.height,Pe,ye,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,ue,de.width,de.height,0,Pe,ye,de.data)}}else{Ue?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Pe,ye,K[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ue,Pe,ye,K[D]);for(let te=0;te<nt.length;te++){const ne=nt[te];Ue?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,0,0,Pe,ye,ne.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,te+1,ue,Pe,ye,ne.image[D])}}}S(T,He)&&E(i.TEXTURE_CUBE_MAP),Q.__version=j.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Se(P,T,B,ee,j,Q){const pe=r.convert(B.format,B.colorSpace),re=r.convert(B.type),ce=w(B.internalFormat,pe,re,B.colorSpace);if(!n.get(T).__hasExternalTextures){const Be=Math.max(1,T.width>>Q),K=Math.max(1,T.height>>Q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Q,ce,Be,K,T.depth,0,pe,re,null):t.texImage2D(j,Q,ce,Be,K,0,pe,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ve(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,n.get(B).__webglTexture,0,Ce(T)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,n.get(B).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(P,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||ve(T)){const j=T.depthTexture;j&&j.isDepthTexture&&(j.type===On?ee=i.DEPTH_COMPONENT32F:j.type===pi&&(ee=i.DEPTH_COMPONENT24));const Q=Ce(T);ve(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,ee,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ee,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const ee=Ce(T);B&&ve(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,T.width,T.height):ve(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let j=0;j<ee.length;j++){const Q=ee[j],pe=r.convert(Q.format,Q.colorSpace),re=r.convert(Q.type),ce=w(Q.internalFormat,pe,re,Q.colorSpace),Ae=Ce(T);B&&ve(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ce,T.width,T.height):ve(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const ee=n.get(T.depthTexture).__webglTexture,j=Ce(T);if(T.depthTexture.format===Vi)ve(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(T.depthTexture.format===Ls)ve(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(P){const T=n.get(P),B=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,P)}else if(B){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=i.createRenderbuffer(),be(T.__webglDepthbuffer[ee],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),be(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(P,T,B){const ee=n.get(P);T!==void 0&&Se(ee.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&qe(P)}function F(P){const T=P.texture,B=n.get(P),ee=n.get(T);P.addEventListener("dispose",M),P.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=T.version,a.memory.textures++);const j=P.isWebGLCubeRenderTarget===!0,Q=P.isWebGLMultipleRenderTargets===!0,pe=p(P)||o;if(j){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let ce=0;ce<T.mipmaps.length;ce++)B.__webglFramebuffer[re][ce]=i.createFramebuffer()}else B.__webglFramebuffer[re]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)B.__webglFramebuffer[re]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){const re=P.texture;for(let ce=0,Ae=re.length;ce<Ae;ce++){const Be=n.get(re[ce]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&ve(P)===!1){const re=Q?T:[T];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const Ae=re[ce];B.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Be=r.convert(Ae.format,Ae.colorSpace),K=r.convert(Ae.type),et=w(Ae.internalFormat,Be,K,Ae.colorSpace,P.isXRRenderTarget===!0),He=Ce(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,et,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),be(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Re(i.TEXTURE_CUBE_MAP,T,pe);for(let re=0;re<6;re++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)Se(B.__webglFramebuffer[re][ce],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else Se(B.__webglFramebuffer[re],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);S(T,pe)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const re=P.texture;for(let ce=0,Ae=re.length;ce<Ae;ce++){const Be=re[ce],K=n.get(Be);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),Re(i.TEXTURE_2D,Be,pe),Se(B.__webglFramebuffer,P,Be,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),S(Be,pe)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?re=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ee.__webglTexture),Re(re,T,pe),o&&T.mipmaps&&T.mipmaps.length>0)for(let ce=0;ce<T.mipmaps.length;ce++)Se(B.__webglFramebuffer[ce],P,T,i.COLOR_ATTACHMENT0,re,ce);else Se(B.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,re,0);S(T,pe)&&E(re),t.unbindTexture()}P.depthBuffer&&qe(P)}function kt(P){const T=p(P)||o,B=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ee=0,j=B.length;ee<j;ee++){const Q=B[ee];if(S(Q,T)){const pe=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(Q).__webglTexture;t.bindTexture(pe,re),E(pe),t.unbindTexture()}}}function xe(P){if(o&&P.samples>0&&ve(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],B=P.width,ee=P.height;let j=i.COLOR_BUFFER_BIT;const Q=[],pe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(P),ce=P.isWebGLMultipleRenderTargets===!0;if(ce)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){Q.push(i.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&Q.push(pe);const Be=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Be===!1&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[Ae]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),ce){const K=n.get(T[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,B,ee,0,0,B,ee,j,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,re.__webglColorRenderbuffer[Ae]);const Be=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Ce(P){return Math.min(s.maxSamples,P.samples)}function ve(P){const T=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ht(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Ne(P,T){const B=P.colorSpace,ee=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===El||B!==Ft&&B!==_n&&(je.getTransfer(B)===ct?o===!1?e.has("EXT_sRGB")===!0&&ee===gn?(P.format=El,P.minFilter=Kt,P.generateMipmaps=!1):T=uf.sRGBToLinear(T):(ee!==gn||j!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}this.allocateTextureUnit=U,this.resetTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Ie,this.setupRenderTarget=F,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ve}function xx(i,e,t){const n=t.isWebGL2;function s(r,a=_n){let o;const l=je.getTransfer(a);if(r===yi)return i.UNSIGNED_BYTE;if(r===Qd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ef)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vm)return i.BYTE;if(r===zm)return i.SHORT;if(r===Ql)return i.UNSIGNED_SHORT;if(r===Zd)return i.INT;if(r===pi)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===xr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Hm)return i.ALPHA;if(r===gn)return i.RGBA;if(r===Gm)return i.LUMINANCE;if(r===Wm)return i.LUMINANCE_ALPHA;if(r===Vi)return i.DEPTH_COMPONENT;if(r===Ls)return i.DEPTH_STENCIL;if(r===El)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Xm)return i.RED;if(r===tf)return i.RED_INTEGER;if(r===qm)return i.RG;if(r===nf)return i.RG_INTEGER;if(r===sf)return i.RGBA_INTEGER;if(r===po||r===mo||r===go||r===_o)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tu||r===nu||r===iu||r===su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===iu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ru||r===au)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ru)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===au)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===lu||r===cu||r===uu||r===hu||r===du||r===fu||r===pu||r===mu||r===gu||r===_u||r===vu||r===yu||r===xu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ou)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===du)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_u)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xu)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vo||r===Eu||r===Mu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===vo)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$m||r===Su||r===bu||r===Tu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===vo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Su)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ki?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Ex extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ft extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Rt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new bi({extensions:{fragDepth:!0},vertexShader:Sx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Me(new Fn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Ax extends ks{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=new Tx,p=t.getContextAttributes();let m=null,S=null;const E=[],w=[],N=new ae;let L=null;const x=new Qt;x.layers.enable(1),x.viewport=new it;const M=new Qt;M.layers.enable(2),M.viewport=new it;const b=[x,M],_=new Ex;_.layers.enable(1),_.layers.enable(2);let y=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=E[W];return Y===void 0&&(Y=new Ho,E[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=E[W];return Y===void 0&&(Y=new Ho,E[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=E[W];return Y===void 0&&(Y=new Ho,E[W]=Y),Y.getHandSpace()};function A(W){const Y=w.indexOf(W.inputSource);if(Y===-1)return;const le=E[Y];le!==void 0&&(le.update(W.inputSource,W.frame,c||a),le.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let W=0;W<E.length;W++){const Y=w[W];Y!==null&&(w[W]=null,E[W].disconnect(Y))}y=null,C=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,S=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Xi(f.framebufferWidth,f.framebufferHeight,{format:gn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,le=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?Ls:Vi,le=p.stencil?ki:pi);const be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Xi(d.textureWidth,d.textureHeight,{format:gn,type:yi,depthTexture:new Ef(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const fe=e.properties.get(S);fe.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(W){for(let Y=0;Y<W.removed.length;Y++){const le=W.removed[Y],Se=w.indexOf(le);Se>=0&&(w[Se]=null,E[Se].disconnect(le))}for(let Y=0;Y<W.added.length;Y++){const le=W.added[Y];let Se=w.indexOf(le);if(Se===-1){for(let fe=0;fe<E.length;fe++)if(fe>=w.length){w.push(le),Se=fe;break}else if(w[fe]===null){w[fe]=le,Se=fe;break}if(Se===-1)break}const be=E[Se];be&&be.connect(le)}}const G=new I,$=new I;function q(W,Y,le){G.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const Se=G.distanceTo($),be=Y.projectionMatrix.elements,fe=le.projectionMatrix.elements,qe=be[14]/(be[10]-1),Ie=be[14]/(be[10]+1),F=(be[9]+1)/be[5],kt=(be[9]-1)/be[5],xe=(be[8]-1)/be[0],Ce=(fe[8]+1)/fe[0],ve=qe*xe,ht=qe*Ce,Ne=Se/(-xe+Ce),P=Ne*-xe;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(P),W.translateZ(Ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=qe+Ne,B=Ie+Ne,ee=ve-P,j=ht+(Se-P),Q=F*Ie/B*T,pe=kt*Ie/B*T;W.projectionMatrix.makePerspective(ee,j,Q,pe,T,B),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),_.near=M.near=x.near=W.near,_.far=M.far=x.far=W.far,(y!==_.near||C!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,C=_.far,x.near=y,x.far=C,M.near=y,M.far=C,x.updateProjectionMatrix(),M.updateProjectionMatrix(),W.updateProjectionMatrix());const Y=W.parent,le=_.cameras;X(_,Y);for(let Se=0;Se<le.length;Se++)X(le[Se],Y);le.length===2?q(_,x,M):_.projectionMatrix.copy(x.projectionMatrix),J(W,_,Y)};function J(W,Y,le){le===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ds*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null};let Z=null;function he(W,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Se=!1;le.length!==_.cameras.length&&(_.cameras.length=0,Se=!0);for(let fe=0;fe<le.length;fe++){const qe=le[fe];let Ie=null;if(f!==null)Ie=f.getViewport(qe);else{const kt=h.getViewSubImage(d,qe);Ie=kt.viewport,fe===0&&(e.setRenderTargetTextures(S,kt.colorTexture,d.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(S))}let F=b[fe];F===void 0&&(F=new Qt,F.layers.enable(fe),F.viewport=new it,b[fe]=F),F.matrix.fromArray(qe.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(qe.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),fe===0&&(_.matrix.copy(F.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Se===!0&&_.cameras.push(F)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const fe=h.getDepthInformation(le[0]);fe&&fe.isValid&&fe.texture&&v.init(e,fe,s.renderState)}}for(let le=0;le<E.length;le++){const Se=w[le],be=E[le];Se!==null&&be!==void 0&&be.update(Se,Y,c||a)}v.render(e,_),Z&&Z(W,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Re=new xf;Re.setAnimationLoop(he),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}function wx(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_f(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*E,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rx(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,E){const w=E.program;n.uniformBlockBinding(S,w)}function c(S,E){let w=s[S.id];w===void 0&&(g(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",p));const N=E.program;n.updateUBOMapping(S,N);const L=e.render.frame;r[S.id]!==L&&(d(S),r[S.id]=L)}function u(S){const E=h();S.__bindingPointIndex=E;const w=i.createBuffer(),N=S.__size,L=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],w=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let L=0,x=w.length;L<x;L++){const M=Array.isArray(w[L])?w[L]:[w[L]];for(let b=0,_=M.length;b<_;b++){const y=M[b];if(f(y,L,b,N)===!0){const C=y.__offset,A=Array.isArray(y.value)?y.value:[y.value];let U=0;for(let z=0;z<A.length;z++){const G=A[z],$=v(G);typeof G=="number"||typeof G=="boolean"?(y.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,C+U,y.__data)):G.isMatrix3?(y.__data[0]=G.elements[0],y.__data[1]=G.elements[1],y.__data[2]=G.elements[2],y.__data[3]=0,y.__data[4]=G.elements[3],y.__data[5]=G.elements[4],y.__data[6]=G.elements[5],y.__data[7]=0,y.__data[8]=G.elements[6],y.__data[9]=G.elements[7],y.__data[10]=G.elements[8],y.__data[11]=0):(G.toArray(y.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,E,w,N){const L=S.value,x=E+"_"+w;if(N[x]===void 0)return typeof L=="number"||typeof L=="boolean"?N[x]=L:N[x]=L.clone(),!0;{const M=N[x];if(typeof L=="number"||typeof L=="boolean"){if(M!==L)return N[x]=L,!0}else if(M.equals(L)===!1)return M.copy(L),!0}return!1}function g(S){const E=S.uniforms;let w=0;const N=16;for(let x=0,M=E.length;x<M;x++){const b=Array.isArray(E[x])?E[x]:[E[x]];for(let _=0,y=b.length;_<y;_++){const C=b[_],A=Array.isArray(C.value)?C.value:[C.value];for(let U=0,z=A.length;U<z;U++){const G=A[U],$=v(G),q=w%N;q!==0&&N-q<$.boundary&&(w+=N-q),C.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=$.storage}}}const L=w%N;return L>0&&(w+=N-L),S.__size=w,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function p(S){const E=S.target;E.removeEventListener("dispose",p);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class wf{constructor(e={}){const{canvas:t=Eg(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;const E=this;let w=!1,N=0,L=0,x=null,M=-1,b=null;const _=new it,y=new it;let C=null;const A=new _e(0);let U=0,z=t.width,G=t.height,$=1,q=null,X=null;const J=new it(0,0,z,G),Z=new it(0,0,z,G);let he=!1;const Re=new ic;let W=!1,Y=!1,le=null;const Se=new Fe,be=new ae,fe=new I,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return x===null?$:1}let F=n;function kt(R,O){for(let V=0;V<R.length;V++){const H=R[V],k=t.getContext(H,O);if(k!==null)return k}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",te,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&O.shift(),F=kt(O,R),F===null)throw kt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xe,Ce,ve,ht,Ne,P,T,B,ee,j,Q,pe,re,ce,Ae,Be,K,et,He,Pe,ye,ue,Ue,Ke;function ot(){xe=new Uv(F),Ce=new Cv(F,xe,e),xe.init(Ce),ue=new xx(F,xe,Ce),ve=new vx(F,xe,Ce),ht=new Bv(F),Ne=new sx,P=new yx(F,xe,ve,Ne,Ce,ue,ht),T=new Lv(E),B=new Nv(E),ee=new qg(F,Ce),Ue=new wv(F,xe,ee,Ce),j=new Ov(F,ee,ht,Ue),Q=new Hv(F,j,ee,ht),He=new zv(F,Ce,P),Be=new Pv(Ne),pe=new ix(E,T,B,xe,Ce,Ue,Be),re=new wx(E,Ne),ce=new ax,Ae=new dx(xe,Ce),et=new Av(E,T,B,ve,Q,d,l),K=new _x(E,Q,Ce),Ke=new Rx(F,ht,Ce,ve),Pe=new Rv(F,xe,ht,Ce),ye=new Fv(F,xe,ht,Ce),ht.programs=pe.programs,E.capabilities=Ce,E.extensions=xe,E.properties=Ne,E.renderLists=ce,E.shadowMap=K,E.state=ve,E.info=ht}ot();const Ge=new Ax(E,F);this.xr=Ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(z,G,!1))},this.getSize=function(R){return R.set(z,G)},this.setSize=function(R,O,V=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,G=O,t.width=Math.floor(R*$),t.height=Math.floor(O*$),V===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(z*$,G*$).floor()},this.setDrawingBufferSize=function(R,O,V){z=R,G=O,$=V,t.width=Math.floor(R*V),t.height=Math.floor(O*V),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,O,V,H){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,O,V,H),ve.viewport(_.copy(J).multiplyScalar($).floor())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,O,V,H){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,O,V,H),ve.scissor(y.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(R){ve.setScissorTest(he=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,O=!0,V=!0){let H=0;if(R){let k=!1;if(x!==null){const oe=x.texture.format;k=oe===sf||oe===nf||oe===tf}if(k){const oe=x.texture.type,ge=oe===yi||oe===pi||oe===Ql||oe===ki||oe===Qd||oe===ef,Te=et.getClearColor(),we=et.getClearAlpha(),ke=Te.r,Le=Te.g,De=Te.b;ge?(f[0]=ke,f[1]=Le,f[2]=De,f[3]=we,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=ke,g[1]=Le,g[2]=De,g[3]=we,F.clearBufferiv(F.COLOR,0,g))}else H|=F.COLOR_BUFFER_BIT}O&&(H|=F.DEPTH_BUFFER_BIT),V&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ce.dispose(),Ae.dispose(),Ne.dispose(),T.dispose(),B.dispose(),Q.dispose(),Ue.dispose(),Ke.dispose(),pe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",hn),Ge.removeEventListener("sessionend",at),le&&(le.dispose(),le=null),Yt.stop()};function nt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=ht.autoReset,O=K.enabled,V=K.autoUpdate,H=K.needsUpdate,k=K.type;ot(),ht.autoReset=R,K.enabled=O,K.autoUpdate=V,K.needsUpdate=H,K.type=k}function te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){const O=R.target;O.removeEventListener("dispose",ne),de(O)}function de(R){Ee(R),Ne.remove(R)}function Ee(R){const O=Ne.get(R).programs;O!==void 0&&(O.forEach(function(V){pe.releaseProgram(V)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,V,H,k,oe){O===null&&(O=qe);const ge=k.isMesh&&k.matrixWorld.determinant()<0,Te=nm(R,O,V,H,k);ve.setMaterial(H,ge);let we=V.index,ke=1;if(H.wireframe===!0){if(we=j.getWireframeAttribute(V),we===void 0)return;ke=2}const Le=V.drawRange,De=V.attributes.position;let _t=Le.start*ke,rn=(Le.start+Le.count)*ke;oe!==null&&(_t=Math.max(_t,oe.start*ke),rn=Math.min(rn,(oe.start+oe.count)*ke)),we!==null?(_t=Math.max(_t,0),rn=Math.min(rn,we.count)):De!=null&&(_t=Math.max(_t,0),rn=Math.min(rn,De.count));const Lt=rn-_t;if(Lt<0||Lt===1/0)return;Ue.setup(k,H,Te,V,we);let Hn,dt=Pe;if(we!==null&&(Hn=ee.get(we),dt=ye,dt.setIndex(Hn)),k.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*Ie()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(k.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),ve.setLineWidth(Ve*Ie()),k.isLineSegments?dt.setMode(F.LINES):k.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else k.isPoints?dt.setMode(F.POINTS):k.isSprite&&dt.setMode(F.TRIANGLES);if(k.isBatchedMesh)dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)dt.renderInstances(_t,Lt,k.count);else if(V.isInstancedBufferGeometry){const Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,co=Math.min(V.instanceCount,Ve);dt.renderInstances(_t,Lt,co)}else dt.render(_t,Lt)};function Ye(R,O,V){R.transparent===!0&&R.side===en&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,zr(R,O,V),R.side=Qn,R.needsUpdate=!0,zr(R,O,V),R.side=en):zr(R,O,V)}this.compile=function(R,O,V=null){V===null&&(V=R),p=Ae.get(V),p.init(),S.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==V&&R.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(E._useLegacyLights);const H=new Set;return R.traverse(function(k){const oe=k.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const Te=oe[ge];Ye(Te,V,k),H.add(Te)}else Ye(oe,V,k),H.add(oe)}),S.pop(),p=null,H},this.compileAsync=function(R,O,V=null){const H=this.compile(R,O,V);return new Promise(k=>{function oe(){if(H.forEach(function(ge){Ne.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){k(R);return}setTimeout(oe,10)}xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let rt=null;function Vt(R){rt&&rt(R)}function hn(){Yt.stop()}function at(){Yt.start()}const Yt=new xf;Yt.setAnimationLoop(Vt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(R){rt=R,Ge.setAnimationLoop(R),R===null?Yt.stop():Yt.start()},Ge.addEventListener("sessionstart",hn),Ge.addEventListener("sessionend",at),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(O),O=Ge.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,O,x),p=Ae.get(R,S.length),p.init(),S.push(p),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Re.setFromProjectionMatrix(Se),Y=this.localClippingEnabled,W=Be.init(this.clippingPlanes,Y),v=ce.get(R,m.length),v.init(),m.push(v),Pn(R,O,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(q,X),this.info.render.frame++,W===!0&&Be.beginShadows();const V=p.state.shadowsArray;if(K.render(V,R,O),W===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1)&&et.render(v,R),p.setupLights(E._useLegacyLights),O.isArrayCamera){const H=O.cameras;for(let k=0,oe=H.length;k<oe;k++){const ge=H[k];Gc(v,R,ge,ge.viewport)}}else Gc(v,R,O);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),R.isScene===!0&&R.onAfterRender(E,R,O),Ue.resetDefaultState(),M=-1,b=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Pn(R,O,V,H){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Re.intersectsSprite(R)){H&&fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Se);const ge=Q.update(R),Te=R.material;Te.visible&&v.push(R,ge,Te,V,fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Re.intersectsObject(R))){const ge=Q.update(R),Te=R.material;if(H&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),fe.copy(R.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),fe.copy(ge.boundingSphere.center)),fe.applyMatrix4(R.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const we=ge.groups;for(let ke=0,Le=we.length;ke<Le;ke++){const De=we[ke],_t=Te[De.materialIndex];_t&&_t.visible&&v.push(R,ge,_t,V,fe.z,De)}}else Te.visible&&v.push(R,ge,Te,V,fe.z,null)}}const oe=R.children;for(let ge=0,Te=oe.length;ge<Te;ge++)Pn(oe[ge],O,V,H)}function Gc(R,O,V,H){const k=R.opaque,oe=R.transmissive,ge=R.transparent;p.setupLightsView(V),W===!0&&Be.setGlobalState(E.clippingPlanes,V),oe.length>0&&tm(k,oe,O,V),H&&ve.viewport(_.copy(H)),k.length>0&&Vr(k,O,V),oe.length>0&&Vr(oe,O,V),ge.length>0&&Vr(ge,O,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function tm(R,O,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const oe=Ce.isWebGL2;le===null&&(le=new Xi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?xr:yi,minFilter:Yn,samples:oe?4:0})),E.getDrawingBufferSize(be),oe?le.setSize(be.x,be.y):le.setSize(La(be.x),La(be.y));const ge=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(A),U=E.getClearAlpha(),U<1&&E.setClearColor(16777215,.5),E.clear();const Te=E.toneMapping;E.toneMapping=vi,Vr(R,V,H),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le);let we=!1;for(let ke=0,Le=O.length;ke<Le;ke++){const De=O[ke],_t=De.object,rn=De.geometry,Lt=De.material,Hn=De.group;if(Lt.side===en&&_t.layers.test(H.layers)){const dt=Lt.side;Lt.side=sn,Lt.needsUpdate=!0,Wc(_t,V,H,rn,Lt,Hn),Lt.side=dt,Lt.needsUpdate=!0,we=!0}}we===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le)),E.setRenderTarget(ge),E.setClearColor(A,U),E.toneMapping=Te}function Vr(R,O,V){const H=O.isScene===!0?O.overrideMaterial:null;for(let k=0,oe=R.length;k<oe;k++){const ge=R[k],Te=ge.object,we=ge.geometry,ke=H===null?ge.material:H,Le=ge.group;Te.layers.test(V.layers)&&Wc(Te,O,V,we,ke,Le)}}function Wc(R,O,V,H,k,oe){R.onBeforeRender(E,O,V,H,k,oe),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(E,O,V,H,R,oe),k.transparent===!0&&k.side===en&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,E.renderBufferDirect(V,O,H,k,R,oe),k.side=Qn,k.needsUpdate=!0,E.renderBufferDirect(V,O,H,k,R,oe),k.side=en):E.renderBufferDirect(V,O,H,k,R,oe),R.onAfterRender(E,O,V,H,k,oe)}function zr(R,O,V){O.isScene!==!0&&(O=qe);const H=Ne.get(R),k=p.state.lights,oe=p.state.shadowsArray,ge=k.state.version,Te=pe.getParameters(R,k.state,oe,O,V),we=pe.getProgramCacheKey(Te);let ke=H.programs;H.environment=R.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(R.isMeshStandardMaterial?B:T).get(R.envMap||H.environment),ke===void 0&&(R.addEventListener("dispose",ne),ke=new Map,H.programs=ke);let Le=ke.get(we);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ge)return qc(R,Te),Le}else Te.uniforms=pe.getUniforms(R),R.onBuild(V,Te,E),R.onBeforeCompile(Te,E),Le=pe.acquireProgram(Te,we),ke.set(we,Le),H.uniforms=Te.uniforms;const De=H.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=Be.uniform),qc(R,Te),H.needsLights=sm(R),H.lightsStateVersion=ge,H.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function Xc(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=ba.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function qc(R,O){const V=Ne.get(R);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function nm(R,O,V,H,k){O.isScene!==!0&&(O=qe),P.resetTextureUnits();const oe=O.fog,ge=H.isMeshStandardMaterial?O.environment:null,Te=x===null?E.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Ft,we=(H.isMeshStandardMaterial?B:T).get(H.envMap||ge),ke=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!V.morphAttributes.position,_t=!!V.morphAttributes.normal,rn=!!V.morphAttributes.color;let Lt=vi;H.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Lt=E.toneMapping);const Hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=Hn!==void 0?Hn.length:0,Ve=Ne.get(H),co=p.state.lights;if(W===!0&&(Y===!0||R!==b)){const dn=R===b&&H.id===M;Be.setState(H,R,dn)}let pt=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==co.state.version||Ve.outputColorSpace!==Te||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||Ve.envMap!==we||H.fog===!0&&Ve.fog!==oe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==ke||Ve.vertexTangents!==Le||Ve.morphTargets!==De||Ve.morphNormals!==_t||Ve.morphColors!==rn||Ve.toneMapping!==Lt||Ce.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(pt=!0):(pt=!0,Ve.__version=H.version);let Ai=Ve.currentProgram;pt===!0&&(Ai=zr(H,O,k));let $c=!1,js=!1,uo=!1;const qt=Ai.getUniforms(),wi=Ve.uniforms;if(ve.useProgram(Ai.program)&&($c=!0,js=!0,uo=!0),H.id!==M&&(M=H.id,js=!0),$c||b!==R){qt.setValue(F,"projectionMatrix",R.projectionMatrix),qt.setValue(F,"viewMatrix",R.matrixWorldInverse);const dn=qt.map.cameraPosition;dn!==void 0&&dn.setValue(F,fe.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&qt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&qt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,js=!0,uo=!0)}if(k.isSkinnedMesh){qt.setOptional(F,k,"bindMatrix"),qt.setOptional(F,k,"bindMatrixInverse");const dn=k.skeleton;dn&&(Ce.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),qt.setValue(F,"boneTexture",dn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(qt.setOptional(F,k,"batchingTexture"),qt.setValue(F,"batchingTexture",k._matricesTexture,P));const ho=V.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0&&Ce.isWebGL2===!0)&&He.update(k,V,Ai),(js||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,qt.setValue(F,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(wi.envMap.value=we,wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),js&&(qt.setValue(F,"toneMappingExposure",E.toneMappingExposure),Ve.needsLights&&im(wi,uo),oe&&H.fog===!0&&re.refreshFogUniforms(wi,oe),re.refreshMaterialUniforms(wi,H,$,G,le),ba.upload(F,Xc(Ve),wi,P)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ba.upload(F,Xc(Ve),wi,P),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&qt.setValue(F,"center",k.center),qt.setValue(F,"modelViewMatrix",k.modelViewMatrix),qt.setValue(F,"normalMatrix",k.normalMatrix),qt.setValue(F,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const dn=H.uniformsGroups;for(let fo=0,rm=dn.length;fo<rm;fo++)if(Ce.isWebGL2){const jc=dn[fo];Ke.update(jc,Ai),Ke.bind(jc,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function im(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function sm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(R,O,V){Ne.get(R.texture).__webglTexture=O,Ne.get(R.depthTexture).__webglTexture=V;const H=Ne.get(R);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,O){const V=Ne.get(R);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,V=0){x=R,N=O,L=V;let H=!0,k=null,oe=!1,ge=!1;if(R){const we=Ne.get(R);we.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(F.FRAMEBUFFER,null),H=!1):we.__webglFramebuffer===void 0?P.setupRenderTarget(R):we.__hasExternalTextures&&P.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);const Le=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?k=Le[O][V]:k=Le[O],oe=!0):Ce.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?k=Ne.get(R).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[V]:k=Le,_.copy(R.viewport),y.copy(R.scissor),C=R.scissorTest}else _.copy(J).multiplyScalar($).floor(),y.copy(Z).multiplyScalar($).floor(),C=he;if(ve.bindFramebuffer(F.FRAMEBUFFER,k)&&Ce.drawBuffers&&H&&ve.drawBuffers(R,k),ve.viewport(_),ve.scissor(y),ve.setScissorTest(C),oe){const we=Ne.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,V)}else if(ge){const we=Ne.get(R.texture),ke=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,V||0,ke)}M=-1},this.readRenderTargetPixels=function(R,O,V,H,k,oe,ge){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){ve.bindFramebuffer(F.FRAMEBUFFER,Te);try{const we=R.texture,ke=we.format,Le=we.type;if(ke!==gn&&ue.convert(ke)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===xr&&(xe.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==yi&&ue.convert(Le)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===On&&(Ce.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-H&&V>=0&&V<=R.height-k&&F.readPixels(O,V,H,k,ue.convert(ke),ue.convert(Le),oe)}finally{const we=x!==null?Ne.get(x).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(R,O,V=0){const H=Math.pow(2,-V),k=Math.floor(O.image.width*H),oe=Math.floor(O.image.height*H);P.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,R.x,R.y,k,oe),ve.unbindTexture()},this.copyTextureToTexture=function(R,O,V,H=0){const k=O.image.width,oe=O.image.height,ge=ue.convert(V.format),Te=ue.convert(V.type);P.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,R.x,R.y,k,oe,ge,Te,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,R.x,R.y,O.mipmaps[0].width,O.mipmaps[0].height,ge,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,H,R.x,R.y,ge,Te,O.image),H===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(R,O,V,H,k=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=R.max.x-R.min.x+1,ge=R.max.y-R.min.y+1,Te=R.max.z-R.min.z+1,we=ue.convert(H.format),ke=ue.convert(H.type);let Le;if(H.isData3DTexture)P.setTexture3D(H,0),Le=F.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)P.setTexture2DArray(H,0),Le=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const De=F.getParameter(F.UNPACK_ROW_LENGTH),_t=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rn=F.getParameter(F.UNPACK_SKIP_PIXELS),Lt=F.getParameter(F.UNPACK_SKIP_ROWS),Hn=F.getParameter(F.UNPACK_SKIP_IMAGES),dt=V.isCompressedTexture?V.mipmaps[k]:V.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,dt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,R.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,R.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,R.min.z),V.isDataTexture||V.isData3DTexture?F.texSubImage3D(Le,k,O.x,O.y,O.z,oe,ge,Te,we,ke,dt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Le,k,O.x,O.y,O.z,oe,ge,Te,we,dt.data)):F.texSubImage3D(Le,k,O.x,O.y,O.z,oe,ge,Te,we,ke,dt),F.pixelStorei(F.UNPACK_ROW_LENGTH,De),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Hn),k===0&&H.generateMipmaps&&F.generateMipmap(Le),ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),ve.unbindTexture()},this.resetState=function(){N=0,L=0,x=null,ve.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tc?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===$a?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?zi:of}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zi?Qe:Ft}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cx extends wf{}Cx.prototype.isWebGL1Renderer=!0;class ac{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Px extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Rf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new I;class Sr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class br extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const Qs=new I,ds=new I,fs=new I,ps=new ae,er=new ae,Cf=new Fe,ca=new I,tr=new I,ua=new I,vh=new ae,Go=new ae,yh=new ae;class Ia extends ut{constructor(e=new br){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rf(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new Sr(n,3,0,!1)),hs.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Cf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ha(ca.set(-.5,-.5,0),fs,a,ds,s,r),ha(tr.set(.5,-.5,0),fs,a,ds,s,r),ha(ua.set(.5,.5,0),fs,a,ds,s,r),vh.set(0,0),Go.set(1,0),yh.set(1,1);let o=e.ray.intersectTriangle(ca,tr,ua,!1,Qs);if(o===null&&(ha(tr.set(-.5,.5,0),fs,a,ds,s,r),Go.set(0,1),o=e.ray.intersectTriangle(ca,ua,tr,!1,Qs),o===null))return;const l=e.ray.origin.distanceTo(Qs);l<e.near||l>e.far||t.push({distance:l,point:Qs.clone(),uv:Tn.getInterpolation(Qs,ca,tr,ua,vh,Go,yh,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ha(i,e,t,n,s,r){ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(er.x=r*ps.x-s*ps.y,er.y=s*ps.x+r*ps.y):er.copy(ps),i.copy(e),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Cf)}const xh=new I,Eh=new it,Mh=new it,Lx=new I,Sh=new Fe,da=new I,Wo=new Vn,bh=new Fe,Xo=new ja;class Ix extends Me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eu,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ot),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(s),e.ray.intersectsSphere(Wo)!==!1&&(bh.copy(s).invert(),Xo.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&Xo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===km?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Eh.fromBufferAttribute(s.attributes.skinIndex,e),Mh.fromBufferAttribute(s.attributes.skinWeight,e),xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Mh.getComponent(r);if(a!==0){const o=Eh.getComponent(r);Sh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lx.copy(xh).applyMatrix4(Sh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pf extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Dx extends Rt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=mt,u=mt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new Fe,Nx=new Fe;class oc{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Nx;Th.multiplyMatrices(o,t[r]),Th.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Dx(t,e,e,gn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Pf),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class bl extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new Fe,Ah=new Fe,fa=[],wh=new Ot,Ux=new Fe,nr=new Me,ir=new Vn;class Ox extends Me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),wh.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),ir.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),Ah.multiplyMatrices(n,ms),nr.matrixWorld=Ah,nr.raycast(e,fa);for(let a=0,o=fa.length;a<o;a++){const l=fa[a];l.instanceId=r,l.object=this,t.push(l)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lf extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rh=new I,Ch=new I,Ph=new Fe,qo=new ja,pa=new Vn;class lc extends ut{constructor(e=new Bt,t=new Lf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rh.fromBufferAttribute(t,s-1),Ch.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rh.distanceTo(Ch);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Ph.copy(s).invert(),qo.copy(e.ray).applyMatrix4(Ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,d=new I,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let E=m,w=S-1;E<w;E+=f){const N=g.getX(E),L=g.getX(E+1);if(c.fromBufferAttribute(p,N),u.fromBufferAttribute(p,L),qo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let E=m,w=S-1;E<w;E+=f){if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,E+1),qo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Lh=new I,Ih=new I;class Fx extends lc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lh.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lh.distanceTo(Ih);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bx extends lc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cc extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new Fe,Tl=new ja,ma=new Vn,ga=new I;class If extends ut{constructor(e=new Bt,t=new cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Dh.copy(s).invert(),Tl.copy(e.ray).applyMatrix4(Dh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);ga.fromBufferAttribute(h,p),Nh(ga,p,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)ga.fromBufferAttribute(h,g),Nh(ga,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nh(i,e,t,n,s,r,a){const o=Tl.distanceSqToPoint(i);if(o<t){const l=new I;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Ja extends Rt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],a=[],o=new I,l=new Fe;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Df extends ni{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new ae,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kx extends Df{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const _a=new I,$o=new uc,jo=new uc,Ko=new uc;class Nf extends ni{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(_a.subVectors(s[0],s[1]).add(s[0]),c=_a);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(_a.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_a),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),$o.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,p),jo.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,p),Ko.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&($o.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),jo.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ko.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set($o.calc(l),jo.calc(l),Ko.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uh(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Vx(i,e){const t=1-i;return t*t*e}function zx(i,e){return 2*(1-i)*i*e}function Hx(i,e){return i*i*e}function fr(i,e,t,n){return Vx(i,e)+zx(i,t)+Hx(i,n)}function Gx(i,e){const t=1-i;return t*t*t*e}function Wx(i,e){const t=1-i;return 3*t*t*i*e}function Xx(i,e){return 3*(1-i)*i*i*e}function qx(i,e){return i*i*i*e}function pr(i,e,t,n,s){return Gx(i,e)+Wx(i,t)+Xx(i,n)+qx(i,s)}class $x extends ni{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jx extends ni{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y),pr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kx extends ni{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yx extends ni{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jx extends ni{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uf extends ni{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y),fr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zx extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Uh(o,l.x,c.x,u.x,h.x),Uh(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var Qx=Object.freeze({__proto__:null,ArcCurve:kx,CatmullRomCurve3:Nf,CubicBezierCurve:$x,CubicBezierCurve3:jx,EllipseCurve:Df,LineCurve:Kx,LineCurve3:Yx,QuadraticBezierCurve:Jx,QuadraticBezierCurve3:Uf,SplineCurve:Zx});class hc extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,u=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zn extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function S(){const w=new I,N=new I;let L=0;const x=(t-e)/n;for(let M=0;M<=r;M++){const b=[],_=M/r,y=_*(t-e)+e;for(let C=0;C<=s;C++){const A=C/s,U=A*l+o,z=Math.sin(U),G=Math.cos(U);N.x=y*z,N.y=-_*n+p,N.z=y*G,h.push(N.x,N.y,N.z),w.set(z,x,G).normalize(),d.push(w.x,w.y,w.z),f.push(A,1-_),b.push(g++)}v.push(b)}for(let M=0;M<s;M++)for(let b=0;b<r;b++){const _=v[b][M],y=v[b+1][M],C=v[b+1][M+1],A=v[b][M+1];u.push(_,y,A),u.push(y,C,A),L+=6}c.addGroup(m,L,0),m+=L}function E(w){const N=g,L=new ae,x=new I;let M=0;const b=w===!0?e:t,_=w===!0?1:-1;for(let C=1;C<=s;C++)h.push(0,p*_,0),d.push(0,_,0),f.push(.5,.5),g++;const y=g;for(let C=0;C<=s;C++){const U=C/s*l+o,z=Math.cos(U),G=Math.sin(U);x.x=b*G,x.y=p*_,x.z=b*z,h.push(x.x,x.y,x.z),d.push(0,_,0),L.x=z*.5+.5,L.y=G*.5*_+.5,f.push(L.x,L.y),g++}for(let C=0;C<s;C++){const A=N+C,U=y+C;w===!0?u.push(U,U+1,A):u.push(U+1,U,A),M+=3}c.addGroup(m,M,w===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dc extends Zn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new dc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Za extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new I,w=new I,N=new I;for(let L=0;L<t.length;L+=3)f(t[L+0],E),f(t[L+1],w),f(t[L+2],N),l(E,w,N,S)}function l(S,E,w,N){const L=N+1,x=[];for(let M=0;M<=L;M++){x[M]=[];const b=S.clone().lerp(w,M/L),_=E.clone().lerp(w,M/L),y=L-M;for(let C=0;C<=y;C++)C===0&&M===L?x[M][C]=b:x[M][C]=b.clone().lerp(_,C/y)}for(let M=0;M<L;M++)for(let b=0;b<2*(L-M)-1;b++){const _=Math.floor(b/2);b%2===0?(d(x[M][_+1]),d(x[M+1][_]),d(x[M][_])):(d(x[M][_+1]),d(x[M+1][_+1]),d(x[M+1][_]))}}function c(S){const E=new I;for(let w=0;w<r.length;w+=3)E.x=r[w+0],E.y=r[w+1],E.z=r[w+2],E.normalize().multiplyScalar(S),r[w+0]=E.x,r[w+1]=E.y,r[w+2]=E.z}function u(){const S=new I;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const w=p(S)/2/Math.PI+.5,N=m(S)/Math.PI+.5;a.push(w,1-N)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const E=a[S+0],w=a[S+2],N=a[S+4],L=Math.max(E,w,N),x=Math.min(E,w,N);L>.9&&x<.1&&(E<.2&&(a[S+0]+=1),w<.2&&(a[S+2]+=1),N<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,E){const w=S*3;E.x=e[w+0],E.y=e[w+1],E.z=e[w+2]}function g(){const S=new I,E=new I,w=new I,N=new I,L=new ae,x=new ae,M=new ae;for(let b=0,_=0;b<r.length;b+=9,_+=6){S.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),w.set(r[b+6],r[b+7],r[b+8]),L.set(a[_+0],a[_+1]),x.set(a[_+2],a[_+3]),M.set(a[_+4],a[_+5]),N.copy(S).add(E).add(w).divideScalar(3);const y=p(N);v(L,_+0,S,y),v(x,_+2,E,y),v(M,_+4,w,y)}}function v(S,E,w,N){N<0&&S.x===1&&(a[E]=S.x-1),w.x===0&&w.z===0&&(a[E]=N/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.vertices,e.indices,e.radius,e.details)}}class Qa extends Za{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qa(e.radius,e.detail)}}class fc extends Za{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fc(e.radius,e.detail)}}class zs extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const S=[],E=m/n;let w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const L=N/t;h.x=-e*Math.cos(s+L*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+L*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(L+w,1-E),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const E=u[m][S+1],w=u[m][S],N=u[m+1][S],L=u[m+1][S+1];(m!==0||a>0)&&f.push(E,w,L),(m!==n-1||l<Math.PI)&&f.push(w,N,L)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class eo extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(v),h.y=(e+t*Math.cos(p))*Math.sin(v),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(v,p,S),a.push(p,m,S)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pc extends Bt{constructor(e=new Uf(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new ae;let u=new I;const h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function v(){for(let E=0;E<t;E++)p(E);p(r===!1?t:0),S(),m()}function p(E){u=e.getPointAt(E/t,u);const w=a.normals[E],N=a.binormals[E];for(let L=0;L<=s;L++){const x=L/s*Math.PI*2,M=Math.sin(x),b=-Math.cos(x);l.x=b*w.x+M*N.x,l.y=b*w.y+M*N.y,l.z=b*w.z+M*N.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let w=1;w<=s;w++){const N=(s+1)*(E-1)+(w-1),L=(s+1)*E+(w-1),x=(s+1)*E+w,M=(s+1)*(E-1)+w;g.push(N,L,M),g.push(L,x,M)}}function S(){for(let E=0;E<=t;E++)for(let w=0;w<=s;w++)c.x=E/t,c.y=w/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new pc(new Qx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class mc extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends mc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yt extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function eE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tE(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Oh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Of(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Ur{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nE extends Ur{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wu:r=e,o=2*t-n;break;case Ru:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:a=e,l=2*n-t;break;case Ru:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-f)*p+(1.5+f)*v+.5*g,w=f*p-f*v;for(let N=0;N!==o;++N)r[N]=m*a[u+N]+S*a[c+N]+E*a[l+N]+w*a[h+N];return r}}class iE extends Ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class sE extends Ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&eE(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=Is;class Hs extends zn{}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Er;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ff extends zn{}Ff.prototype.ValueTypeName="color";class Us extends zn{}Us.prototype.ValueTypeName="number";class rE extends Ur{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Dt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class qi extends zn{InterpolantFactoryMethodLinear(e){return new rE(this.times,this.values,this.getValueSize(),e)}}qi.prototype.ValueTypeName="quaternion";qi.prototype.DefaultInterpolation=Is;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends zn{}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Er;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends zn{}Os.prototype.ValueTypeName="vector";class aE{constructor(e,t=-1,n,s=jm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(lE(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=tE(l);l=Oh(l,1,u),c=Oh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Us(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,v){if(f.length!==0){const p=[],m=[];Of(f,p,m,g),p.length!==0&&v.push(new h(d,p,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const E=d[g];p.push(E.time),m.push(E.morphTarget===v?1:0)}s.push(new Us(".morphTargetInfluence["+v+"]",p,m))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(Os,f+".position",d,"pos",s),n(qi,f+".quaternion",d,"rot",s),n(Os,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oE(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Os;case"color":return Ff;case"quaternion":return qi;case"bool":case"boolean":return Hs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function lE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=oE(i.type);if(i.times===void 0){const t=[],n=[];Of(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const mi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cE{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const uE=new cE;class Ws{constructor(e){this.manager=e!==void 0?e:uE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const jn={};class hE extends Error{constructor(e,t){super(e),this.response=t}}class Bf extends Ws{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:n,onError:s});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=jn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:E,value:w})=>{if(E)m.close();else{v+=w.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let L=0,x=u.length;L<x;L++){const M=u[L];M.onProgress&&M.onProgress(N)}m.enqueue(w),S()}})}}});return new Response(p)}else throw new hE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{mi.add(e,c);const u=jn[e];delete jn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete jn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class dE extends Ws{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){u(),mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class kf extends Ws{constructor(e){super(e)}load(e,t,n,s){const r=new Rt,a=new dE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Or extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class fE extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yo=new Fe,Fh=new I,Bh=new I;class gc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pE extends gc{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mE extends Or{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kh=new Fe,sr=new I,Jo=new I;class gE extends gc{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(sr),Jo.copy(n.position),Jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jo),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh)}}class Vf extends Or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _E extends gc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Al extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new _E}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vE extends Or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yE extends Ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(e,l),r.manager.itemStart(e)}}class xE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(){return(typeof performance>"u"?Date:performance).now()}const _c="\\[\\]\\.:\\/",EE=new RegExp("["+_c+"]","g"),vc="[^"+_c+"]",ME="[^"+_c.replace("\\.","")+"]",SE=/((?:WC+[\/:])*)/.source.replace("WC",vc),bE=/(WCOD+)?/.source.replace("WCOD",ME),TE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),AE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),wE=new RegExp("^"+SE+bE+TE+AE+"$"),RE=["material","materials","bones","map"];class CE{constructor(e,t,n){const s=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(EE,"")}static parseTrackName(e){const t=wE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);RE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=CE;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function zh(i,e){if(e===Km)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===yl||e===af){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===yl)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Xs extends Ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NE(t)}),this.register(function(t){return new GE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new VE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new $E(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=mr.extractUrlBase(e);a=mr.resolveURL(c,this.path)}else a=mr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Bf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zf){try{a[We.KHR_BINARY_GLTF]=new jE(e)}catch(h){s&&s(h);return}r=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:a[h]=new IE;break;case We.KHR_DRACO_MESH_COMPRESSION:a[h]=new KE(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[h]=new YE;break;case We.KHR_MESH_QUANTIZATION:a[h]=new JE;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function PE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LE{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new _e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ft);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Al(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vf(u),c.distance=h;break;case"spot":c=new mE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class IE{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){const s=[];e.color=new _e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ft),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Qe))}return Promise.all(s)}}class DE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class NE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}}class UE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class OE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ft)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Qe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class BE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(o[0],o[1],o[2],Ft),Promise.all(r)}}class kE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class VE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(o[0],o[1],o[2],Ft),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Qe)),Promise.all(r)}}class zE{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class HE{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class GE{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class WE{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XE{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qE{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class $E{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const v=new Fe,p=new I,m=new Dt,S=new I(1,1,1),E=new Ox(g.geometry,g.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&S.fromBufferAttribute(l.SCALE,w),E.setMatrixAt(w,v.compose(p,m,S));for(const w in l)if(w==="_COLOR_0"){const N=l[w];E.instanceColor=new bl(N.array,N.itemSize,N.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);ut.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const zf="glTF",rr=12,Hh={JSON:1313821514,BIN:5130562};class jE{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-rr,r=new DataView(e,rr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Hh.JSON){const c=new Uint8Array(e,rr+a,o);this.content=n.decode(c)}else if(l===Hh.BIN){const c=rr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=wl[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=wl[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=ws[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}h(f)},o,c,Ft,d)})})}}class YE{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JE{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Hf extends Ur{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,v=g-c,p=-2*f+3*d,m=f-d,S=1-p,E=m-d+h;for(let w=0;w!==o;w++){const N=a[v+w+o],L=a[v+w+l]*u,x=a[g+w+o],M=a[g+w]*u;r[w]=S*N+E*L+p*x+m*M}return r}}const ZE=new Dt;class QE extends Hf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return ZE.fromArray(r).normalize().toArray(r),r}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gh={9728:mt,9729:Kt,9984:Wi,9985:Sa,9986:vs,9987:Yn},Wh={33071:mn,33648:Aa,10497:Si},Zo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eM={CUBICSPLINE:void 0,LINEAR:Is,STEP:Er},Qo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),i.DefaultMaterial}function Ii(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function iM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sM(i){let e;const t=i.extensions&&i.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+el(t.attributes):e=i.indices+":"+el(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+el(i.targets[n]);return e}function el(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const aM=new Fe;class oM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new kf(this.options.manager):this.textureLoader=new yE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ii(r,o,s),fi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(mr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Zo[s.type],o=ws[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Xt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Zo[s.type],c=ws[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,p;if(f&&f!==h){const m=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let E=t.cache.get(S);E||(v=new c(o,m*f,s.count*f/u),E=new Rf(v,f/u),t.cache.add(S,E)),p=new Sr(E,l,d%f/u,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),p=new Xt(v,l,g);if(s.sparse!==void 0){const m=Zo.SCALAR,S=ws[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,N=new S(a[1],E,s.sparse.count*m),L=new c(a[2],w,s.sparse.count*l);o!==null&&(p=new Xt(p.array.slice(),p.itemSize,p.normalized));for(let x=0,M=N.length;x<M;x++){const b=N[x];if(p.setX(b,L[x*l]),l>=2&&p.setY(b,L[x*l+1]),l>=3&&p.setZ(b,L[x*l+2]),l>=4&&p.setW(b,L[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Gh[d.magFilter]||Kt,u.minFilter=Gh[d.minFilter]||Yn,u.wrapS=Wh[d.wrapS]||Si,u.wrapT=Wh[d.wrapT]||Si,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const p=new Rt(v);p.needsUpdate=!0,d(p)}),t.load(mr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||rM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new cc,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Lf,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const h=s[We.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ft),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Qe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=en);const u=r.alphaMode||Qo.OPAQUE;if(u===Qo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Qo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){const h=r.emissiveFactor;o.emissive=new _e().setRGB(h[0],h[1],h[2],Ft)}return r.emissiveTexture!==void 0&&a!==Wt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Qe)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ii(s,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Xh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=sM(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Xh(new Bt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?tM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],p=a[f];let m;const S=c[f];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Ix(v,S):new Me(v,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?m.geometry=zh(m.geometry,af):p.mode===pn.TRIANGLE_FAN&&(m.geometry=zh(m.geometry,yl));else if(p.mode===pn.LINES)m=new Fx(v,S);else if(p.mode===pn.LINE_STRIP)m=new lc(v,S);else if(p.mode===pn.LINE_LOOP)m=new Bx(v,S);else if(p.mode===pn.POINTS)m=new If(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&iM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),fi(m,r),p.extensions&&Ii(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ii(s,h[0],r),h[0];const d=new ft;r.extensions&&Ii(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(xg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new sc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oc(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,p=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],v=h[3],p=h[4],m=[];for(let S=0,E=d.length;S<E;S++){const w=d[S],N=f[S],L=g[S],x=v[S],M=p[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const b=n._createAnimationTracks(w,N,L,x,M);if(b)for(let _=0;_<b.length;_++)m.push(b[_])}return new aE(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,aM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Pf:c.length>1?u=new ft:c.length===1?u=c[0]:u=new ut,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),fi(u,r),r.extensions&&Ii(n,u,r),r.matrix!==void 0){const h=new Fe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Ii(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof yn||d instanceof Rt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];ui[r.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ui[r.path]){case ui.weights:c=Us;break;case ui.rotation:c=qi;break;case ui.position:case ui.scale:c=Os;break;default:switch(n.itemSize){case 1:c=Us;break;case 2:case 3:default:c=Os;break}break}const u=s.interpolation!==void 0?eM[s.interpolation]:Is,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ui[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Rl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof qi?QE:Hf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lM(i,e,t){const n=e.attributes,s=new Ot;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const u=Rl(ws[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,l=new I;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Rl(ws[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Vn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Xh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=wl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return je.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),fi(i,e),lM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nM(i,e.targets,t):i})}function cM(i=1,e=1){const t=new Qa(i,0),n=t.attributes.position,s=new I;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);const o=1+(Math.sin(s.x*5.1+e)+Math.cos(s.y*4.3+e*1.7)+Math.sin(s.z*6.2+e*2.3))/6*.25;s.multiplyScalar(o),n.setXYZ(r,s.x,s.y,s.z)}return t.computeVertexNormals(),t}function uM(){const i=new Nf([new I(-.35,-.05,0),new I(-.18,.12,0),new I(0,.18,0),new I(.18,.12,0),new I(.35,-.05,0)]);return new pc(i,18,.07,7,!1)}const lr=18,Cl=55,tl=3,qh=Cl+lr,hM=new URL("/runrun2/assets/grass4-BiI8lLBM.png",import.meta.url).href,gs={trees:[new URL("/runrun2/assets/Tree_1-BEAU7sE0.gltf",import.meta.url).href,new URL("/runrun2/assets/Tree_2-BzegVaxE.gltf",import.meta.url).href,new URL("/runrun2/assets/Tree_3-ClbPr9M0.gltf",import.meta.url).href],rocks:[new URL("/runrun2/assets/Rock1-ovJUdmb0.gltf",import.meta.url).href,new URL("/runrun2/assets/Rock2-Dw6RIR-9.gltf",import.meta.url).href],shrubs:[new URL("/runrun2/assets/Bush-ClsfKB6b.gltf",import.meta.url).href,new URL("/runrun2/assets/Plant_2-BCdiMMEh.gltf",import.meta.url).href,new URL("/runrun2/assets/Plant_3-DAdbJck_.gltf",import.meta.url).href],grass:[new URL("/runrun2/assets/Grass_Big-Cy0kEWc7.gltf",import.meta.url).href,new URL("/runrun2/assets/Grass_Small-BlfTukWH.gltf",import.meta.url).href]},$h=i=>i[Math.floor(Math.random()*i.length)],lt=(i,e)=>i+Math.random()*(e-i);class dM{constructor(e){this.scene=e,this.root=new ft,e.add(this.root),this.loader=new Xs,this.assetCache=new Map,this.assetWaiters=new Map,this.decorations=[],this.motionTiles=[],this.sideMotionTiles=[],this.pathTexture=null,this._setupSkyAndFog(),this._loadEnvAssets(),this._buildGround(),this._buildPath(),this._buildCliffs(),this._buildEnvDecorations(),this._buildShadowPlane()}_loadEnvAssets(){const e=[...new Set(Object.values(gs).flat())];for(const t of e)this.assetWaiters.set(t,[]),this.loader.load(t,n=>{const s=n.scene;s.traverse(r=>{if(!r.isMesh)return;r.castShadow=!1,r.receiveShadow=!1;const a=Array.isArray(r.material)?r.material:[r.material];for(const o of a)o&&(o.side=en,o.roughness=.85,o.metalness=0,o.map&&(o.map.colorSpace=Qe,o.map.magFilter=mt,o.map.minFilter=Wi))}),this.assetCache.set(t,s);for(const r of this.assetWaiters.get(t)||[])this._attachAsset(r.group,t);this.assetWaiters.set(t,[])},void 0,n=>console.warn("[World] env asset failed:",t,n))}_attachAsset(e,t){var r;for(;e.children.length;)e.remove(e.children[0]);const n=this.assetCache.get(t);if(!n){(r=this.assetWaiters.get(t))==null||r.push({group:e});return}const s=n.clone(!0);s.position.set(0,0,0),s.rotation.set(0,0,0),e.add(s)}_placeDecor(e,t){const s=(Math.random()<.5?-1:1)*lt(t.xMin,t.xMax),r=lt(-lr,Cl);e.position.set(s,t.y??0,r),e.rotation.set(0,lt(0,Math.PI*2),0);const a=lt(t.scaleMin,t.scaleMax);e.scale.setScalar(a),e.userData.cfg=t,e.userData.assetUrl=$h(t.assets),this._attachAsset(e,e.userData.assetUrl)}_setupSkyAndFog(){const e=document.createElement("canvas");e.width=16,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#1f5f91"),n.addColorStop(.35,"#4f9fcd"),n.addColorStop(.7,"#8fc7df"),n.addColorStop(1,"#d7ecd8"),t.fillStyle=n,t.fillRect(0,0,16,512);const s=new Ja(e);s.colorSpace=Qe,this.scene.background=s,this.scene.fog=new ac(10274773,32,92)}_buildGround(){const n=new Fn(28,90,8,28);n.rotateX(-Math.PI/2);const s=new Float32Array(n.attributes.position.count*3),r=[new _e("#2b7a36"),new _e("#347f3a"),new _e("#3b8a43"),new _e("#286f34")],a=n.attributes.position;for(let c=0;c<a.count;c++){const u=a.getX(c),h=a.getZ(c),d=Math.abs(u)<tl+.55;a.setY(c,d?(Math.random()-.5)*.01:(Math.random()-.5)*.06);const f=r[Math.abs(Math.floor(u*.7+h*.35))%r.length];s[c*3+0]=f.r,s[c*3+1]=f.g,s[c*3+2]=f.b}n.setAttribute("color",new Xt(s,3)),n.computeVertexNormals();const o=new yt({color:16777215,vertexColors:!0,flatShading:!0});this.ground=new Me(n,o),this.ground.position.set(0,-.05,25),this.root.add(this.ground);const l=new Wt({color:5939529,transparent:!0,opacity:.28,depthWrite:!1});for(let c=0;c<44;c++){const u=new Fn(lt(.22,.52),lt(.8,1.8));u.rotateX(-Math.PI/2);const h=new Me(u,l),d=c%2===0?-1:1;h.position.set(d*lt(3.75,7.2),.018,lt(-lr,Cl)),h.rotation.y=lt(-.18,.18),h.userData.sidePatch=!0,this.sideMotionTiles.push(h),this.root.add(h)}}_buildPath(){const e=new Fn(tl*2+.6,90,8,58);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let a=0;a<t.count;a++)t.setY(a,(Math.random()-.5)*.012);e.computeVertexNormals(),this.pathTexture=new kf().load(hM),this.pathTexture.colorSpace=Qe,this.pathTexture.wrapS=Si,this.pathTexture.wrapT=Si,this.pathTexture.magFilter=mt,this.pathTexture.minFilter=Wi,this.pathTexture.repeat.set(1.25,14);const n=new yt({color:16777215,map:this.pathTexture,flatShading:!0}),s=new Me(e,n);s.position.set(0,.01,25),this.root.add(s);const r=new yt({color:3109928,flatShading:!0});for(const a of[-1,1]){const o=new Fn(.4,90,1,1);o.rotateX(-Math.PI/2);const l=new Me(o,r);l.position.set(a*(tl+.1),.025,25),this.root.add(l)}}_buildCliffs(){this.cliffPieces=[];const e=[new yt({color:10849907,flatShading:!0}),new yt({color:8420210,flatShading:!0}),new yt({color:11903107,flatShading:!0}),new yt({color:6252656,flatShading:!0})],t=15;for(const n of[-1,1])for(let s=0;s<t;s++){const r=cM(1.4+Math.random()*1.2,s+(n>0?60:0)),a=new Me(r,e[(s+(n>0?1:0))%e.length]),o=-lr+s/t*qh+lt(-.8,.8);a.position.set(n*lt(8.2,12),lt(3.2,7.2),o),a.rotation.set(lt(-.08,.08),lt(0,Math.PI*2),lt(-.08,.08)),a.scale.set(lt(1.25,2.25),lt(4,7.2),lt(1.35,2.7)),this.cliffPieces.push(a),this.root.add(a)}}_buildEnvDecorations(){const e=[{count:26,assets:gs.trees,xMin:4.3,xMax:6.2,scaleMin:.26,scaleMax:.46},{count:18,assets:gs.trees,xMin:5.8,xMax:8.5,scaleMin:.22,scaleMax:.38},{count:22,assets:gs.shrubs,xMin:3.4,xMax:6,scaleMin:.18,scaleMax:.38},{count:22,assets:gs.rocks,xMin:3.1,xMax:6.5,scaleMin:.35,scaleMax:.85},{count:54,assets:gs.grass,xMin:3,xMax:4.9,scaleMin:.2,scaleMax:.46}];for(const t of e)for(let n=0;n<t.count;n++){const s=new ft;this._placeDecor(s,t),this.decorations.push(s),this.root.add(s)}}_buildShadowPlane(){}_recycle(e){var t,n;if(e.position.z+=qh,(t=e.userData)!=null&&t.cfg){const s=e.userData.cfg,r=Math.random()<.5?-1:1;e.position.x=r*lt(s.xMin,s.xMax),e.rotation.y=lt(0,Math.PI*2),e.scale.setScalar(lt(s.scaleMin,s.scaleMax)),Math.random()<.45&&(e.userData.assetUrl=$h(s.assets),this._attachAsset(e,e.userData.assetUrl))}else if((n=e.userData)!=null&&n.sidePatch){const s=e.position.x<0?-1:1;e.position.x=s*lt(3.75,7.2),e.rotation.y=lt(-.18,.18)}else this.motionTiles.includes(e)&&(e.position.x=lt(-2.55,2.55),e.rotation.y=lt(-.08,.08))}update(e,t){const n=-t*e;this.pathTexture&&(this.pathTexture.offset.y=(this.pathTexture.offset.y-t*e*(this.pathTexture.repeat.y/90))%1);const s=[this.cliffPieces,this.decorations,this.motionTiles,this.sideMotionTiles];for(const r of s)if(r)for(const a of r)a.position.z+=n,a.position.z<-lr&&this._recycle(a)}}const jh=i=>1-Math.pow(1-i,3),fM=i=>i*i,pM={hips:"CC_Base_Hip",waist:"CC_Base_Waist",spine1:"CC_Base_Spine01",spine2:"CC_Base_Spine02",head:"CC_Base_Head",rightUpperArm:"CC_Base_R_Upperarm",rightForeArm:"CC_Base_R_Forearm",rightHand:"CC_Base_R_Hand",leftUpperArm:"CC_Base_L_Upperarm",leftForeArm:"CC_Base_L_Forearm",leftHand:"CC_Base_L_Hand",rightThigh:"CC_Base_R_Thigh",rightCalf:"CC_Base_R_Calf",rightFoot:"CC_Base_R_Foot",leftThigh:"CC_Base_L_Thigh",leftCalf:"CC_Base_L_Calf",leftFoot:"CC_Base_L_Foot"},Gf={WINDUP:{rightUpperArm:{y:-1.1,z:.5},rightForeArm:{x:-1.05},rightHand:{x:-.2},leftUpperArm:{y:.3,z:-1.42},leftForeArm:{x:-.4},spine2:{x:.04,y:-.28},hips:{y:-.13}},RELEASE:{rightUpperArm:{y:1.2,z:1.08},rightForeArm:{x:-.12},rightHand:{x:.45},leftUpperArm:{y:-.25,z:-1.42},leftForeArm:{x:-.65},spine2:{x:.06,y:.28},hips:{y:.14}},FOLLOW:{rightUpperArm:{y:.45,z:1.38},rightForeArm:{x:-.5},rightHand:{x:.1},leftUpperArm:{y:-.06,z:-1.42},leftForeArm:{x:-.55},spine2:{x:.08,y:.08},hips:{y:.05}}},ar=Object.keys(Gf.WINDUP),Kh=.16,mM=.28,gM=.5,_M=.26;class vM{constructor(e,t={}){this.model=e,this.b={},this.base={};for(const[n,s]of Object.entries(pM)){const r=e.getObjectByName(s);r?(this.b[n]=r,this.base[n]=r.quaternion.clone()):console.warn(`[Animator] bone not found: ${s} (${n})`)}console.log("[Animator] mapped:",Object.keys(this.b).join(", ")),e.updateWorldMatrix(!0,!0),this.localAxes={};for(const n of Object.keys(this.b)){const s=new Dt;this.b[n].getWorldQuaternion(s);const r=s.clone().invert();this.localAxes[n]={x:new I(1,0,0).applyQuaternion(r),y:new I(0,1,0).applyQuaternion(r),z:new I(0,0,1).applyQuaternion(r)}}this._poseQ={};for(const[n,s]of Object.entries(Gf)){this._poseQ[n]={};for(const r of ar)this.b[r]&&(this._poseQ[n][r]=this._computeWorldQ(r,s[r]??{}))}if(this.time=0,this.throwT=-1,this._throwStartQ=null,this._throwSpeed=1,this.releaseFired=!1,this.onRelease=null,this.lateralTilt=0,this._debugEl=null,t.debugThrow){const n=document.createElement("div");n.style.cssText="position:fixed;bottom:60px;left:8px;background:#0008;color:#0f0;font:10px monospace;padding:4px 8px;z-index:9999;pointer-events:none;white-space:pre;",document.body.appendChild(n),this._debugEl=n}this._onKey=n=>{n.code==="KeyT"&&this.triggerThrow()},window.addEventListener("keydown",this._onKey)}dispose(){window.removeEventListener("keydown",this._onKey)}setLateralTilt(e){this.lateralTilt=e}triggerThrow(e=.88){if(this.throwT>=0&&this.throwT<Kh/this._throwSpeed)return;const t=.88;this._throwSpeed=Math.max(.5,Math.min(4,e/t)),this.throwT=0,this._throwStartQ=null,this.releaseFired=!1}_computeWorldQ(e,t){const n=this.localAxes[e],s=this.base[e];if(!n||!s)return new Dt;const r=new Dt;return t.x&&r.multiply(new Dt().setFromAxisAngle(n.x,t.x)),t.y&&r.multiply(new Dt().setFromAxisAngle(n.y,t.y)),t.z&&r.multiply(new Dt().setFromAxisAngle(n.z,t.z)),s.clone().multiply(r)}_applyWorld(e,t){const n=this.b[e];if(!n||!this.localAxes[e])return;const s=this.localAxes[e],r=new Dt;t.x&&r.multiply(new Dt().setFromAxisAngle(s.x,t.x)),t.y&&r.multiply(new Dt().setFromAxisAngle(s.y,t.y)),t.z&&r.multiply(new Dt().setFromAxisAngle(s.z,t.z)),n.quaternion.copy(this.base[e]).multiply(r)}update(e){this.time+=e;const t=this.time;for(const o of Object.keys(this.b))this.b[o].quaternion.copy(this.base[o]);const n=7.5,s=Math.sin(t*n),r=Math.abs(s),a=Math.sin(t*n+Math.PI);if(this.model.parent&&(this.model.parent.position.y=Math.max(0,-s)*.018),this._applyWorld("rightThigh",{x:s*.46}),this._applyWorld("leftThigh",{x:-s*.46}),this._applyWorld("rightCalf",{x:Math.max(0,-s)*.6}),this._applyWorld("leftCalf",{x:Math.max(0,s)*.6}),this._applyWorld("rightFoot",{x:s*.14}),this._applyWorld("leftFoot",{x:-s*.14}),this._applyWorld("leftUpperArm",{x:a*.48,z:-1.42}),this._applyWorld("rightUpperArm",{x:-a*.48,z:1.42}),this._applyWorld("leftForeArm",{x:-.55-r*.2}),this._applyWorld("rightForeArm",{x:-.55-r*.2}),this._applyWorld("spine2",{x:.08+Math.sin(t*2)*.025}),this._applyWorld("hips",{y:s*.09,z:-this.lateralTilt*.22}),this._applyWorld("head",{x:-.04,z:s*.03}),this.throwT>=0){if(this._throwStartQ===null){this._throwStartQ={};for(const f of ar)this.b[f]&&(this._throwStartQ[f]=this.b[f].quaternion.clone())}this.throwT+=e;const o=this.throwT,l=this._throwSpeed,c=Kh/l,u=mM/l,h=gM/l,d=_M/l;if(o<c){const f=jh(o/c);for(const g of ar){const v=this.b[g];v&&v.quaternion.slerpQuaternions(this._throwStartQ[g]??this.base[g],this._poseQ.WINDUP[g]??this.base[g],f)}}else if(o<u){const f=fM((o-c)/(u-c));for(const g of ar){const v=this.b[g];v&&v.quaternion.slerpQuaternions(this._poseQ.WINDUP[g]??this.base[g],this._poseQ.RELEASE[g]??this.base[g],f)}}else if(o<h){const f=jh((o-u)/(h-u));for(const g of ar){const v=this.b[g];v&&v.quaternion.slerpQuaternions(this._poseQ.RELEASE[g]??this.base[g],this._poseQ.FOLLOW[g]??this.base[g],f)}}else this.throwT=-1,this._throwStartQ=null;if(!this.releaseFired&&o>=d&&(this.releaseFired=!0,this.onRelease)){const f=new I,g=this.b.rightHand??this.b.rightForeArm;g&&(g.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(g.matrixWorld)),this.onRelease(f)}if(this._debugEl){const f=o<c?"① windup (당김)":o<u?"② SWING→SNAP!":o<h?"③ follow":"done";this._debugEl.textContent=`spd   : ×${l.toFixed(2)}
phase : ${f}
throwT: ${o.toFixed(3)} s
[T]   : re-trigger`}}else this._debugEl&&(this._debugEl.textContent=`throw : idle
[T]   : trigger`)}}const Yh=2.2,yM=2.7,xM="/runrun2/assets/models/ammang.glb";class EM{constructor(e,t){this.scene=e,this.input=t,this.root=new ft,this.root.position.set(0,0,0),e.add(this.root);const n=new Me(new hc(.32,16),new Wt({color:0,transparent:!0,opacity:.28}));n.rotation.x=-Math.PI/2,n.position.y=.005,this.root.add(n),this.model=null,this.animator=null,this.x=0,this.lastX=0,this.throwTimer=0,this._hpLabelValue=null,this._hpLabel=this._makeHpLabel(),this.root.add(this._hpLabel),this._loadModel()}_makeHpLabel(){const e=new Ja(document.createElement("canvas")),t=new br({map:e,transparent:!0,depthTest:!1}),n=new Ia(t);return n.position.set(0,1.1,-.32),n.scale.set(1.75,.58,1),n.renderOrder=20,n}_updateHpLabel(e){const t=Math.ceil(e||0);if(this._hpLabelValue===t)return;this._hpLabelValue=t;const n=this._hpLabel.material.map.image;n.width=256,n.height=96;const s=n.getContext("2d");s.clearRect(0,0,n.width,n.height),s.font='900 58px "Press Start 2P", monospace',s.textAlign="center",s.textBaseline="middle",s.lineWidth=14,s.lineJoin="round",s.strokeStyle="#171717",s.fillStyle="#f7fff0",s.shadowColor="rgba(0,0,0,.75)",s.shadowBlur=5,s.shadowOffsetY=4,s.strokeText(String(t),128,52),s.shadowBlur=0,s.fillText(String(t),128,52),this._hpLabel.material.map.needsUpdate=!0}_showToast(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"))}_loadModel(){new Xs().load(xM,t=>{const n=t.scene,s=new ft;s.add(n);const a=new Ot().setFromObject(n).getSize(new I);let o=null,l=null;if(n.traverse(g=>{if(!g.isBone)return;const v=g.name.toLowerCase();!o&&v.includes("head")&&!v.includes("twist")&&(o=g),!l&&(v.includes("hip")||v.includes("pelvis"))&&(l=g)}),n.updateWorldMatrix(!0,!0),o&&l){const g=new I;o.getWorldPosition(g);const v=new I;l.getWorldPosition(v);const p=g.clone().sub(v);console.log("[Player] up vector (hip→head):",p.x.toFixed(3),p.y.toFixed(3),p.z.toFixed(3));const m=Math.abs(p.x),S=Math.abs(p.y),E=Math.abs(p.z);S>m&&S>E?p.y<0&&(n.rotation.z=Math.PI):m>S&&m>E?n.rotation.z=p.x>0?-Math.PI/2:Math.PI/2:n.rotation.x=p.z>0?-Math.PI/2:Math.PI/2}const u=new Ot().setFromObject(s).getSize(new I),h=.65,d=h/Math.max(.01,u.y);s.scale.setScalar(d);const f=new Ot().setFromObject(s);s.position.y-=f.min.y,o?new I(0,0,1).transformDirection(o.matrixWorld).z<0&&(s.rotation.y=Math.PI):s.rotation.y=Math.PI,this.root.add(s),this.modelWrap=s,this.model=n,console.log("[Player] raw size:",a,"targetH:",h,"scale:",d),this.animator=new vM(n,{debugThrow:!1})},void 0,t=>{console.error("GLB load failed",t),this._showToast("GLB load failed");const n=new Me(new Gt(.6,1.6,.4),new Wt({color:16711935,wireframe:!0}));n.position.y=.8,this.root.add(n)})}update(e,t){const n=t?t.moveSpeed:1;t&&this._updateHpLabel(t.hp),this.input.update(e,n);const s=-this.input.dir;this.x=Math.max(-Yh,Math.min(Yh,this.x+s*yM*n*e)),this.root.position.x=this.x;const r=(this.x-this.lastX)/Math.max(e,.001);if(this.lastX=this.x,this.animator){const a=Math.max(-1,Math.min(1,r/6));this.animator.setLateralTilt(a),this.animator.update(e)}}triggerThrow(e=.88){this.animator&&this.animator.triggerThrow(e)}}let St=null,Nn=null,Pl="";const Ll={},Il={},MM={title:"/runrun2/assets/sound/login_title.mp3",game:"/runrun2/assets/sound/run_bgm.mp3"},Wf={gate:new URL("/runrun2/assets/%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%90%E1%85%A1%E1%84%85%E1%85%B5-cfWR7Ztt.aac",import.meta.url).href,chest:new URL("/runrun2/assets/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A1-CS2fPFjF.aac",import.meta.url).href,augmentSelect:new URL("/runrun2/assets/%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%80%E1%85%A1%E1%86%BC-CYCJZXlP.aac",import.meta.url).href,hurt:new URL("/runrun2/assets/%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%8B%E1%85%A5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF%E1%84%84%E1%85%A2-D-BHOkJE.aac",import.meta.url).href,gameover:new URL("/runrun2/assets/%E1%84%8C%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%E1%86%BB%E1%84%8B%E1%85%B3%E1%86%AF%E1%84%84%E1%85%A2-C9pXLebf.aac",import.meta.url).href};function SM(){if(St)return;const i=window.AudioContext||window.webkitAudioContext;i&&(St=new i)}function Dl(){SM(),St&&St.state==="suspended"&&St.resume()}function Xf(){for(const[i,e]of Object.entries(MM)){if(Ll[i])continue;const t=new Audio(e);t.loop=!0,t.preload="auto",t.volume=i==="game"?.36:.42,t.load(),Ll[i]=t}}function qf(){for(const[i,e]of Object.entries(Wf)){if(Il[i])continue;const t=new Audio(e);t.preload="auto",t.volume=i==="gameover"?.72:.62,t.load(),Il[i]=t}}function bM(i){if(Xf(),Pl===i&&Nn&&!Nn.paused)return;TM();const e=Ll[i];e&&(Pl=i,Nn=e,Nn.currentTime=Nn.currentTime||0,Nn.play().catch(()=>{}))}function TM(){Nn&&(Nn.pause(),Nn.currentTime=0),Nn=null,Pl=""}function $e(i=440,e=.08,t="sine",n=.12,s=null){if(!St)return;const r=St.currentTime,a=St.createOscillator(),o=St.createGain();a.type=t,a.frequency.setValueAtTime(i,r),s&&a.frequency.exponentialRampToValueAtTime(Math.max(20,s),r+e),o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(n,r+.01),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(St.destination),a.start(r),a.stop(r+e+.02)}function Ln(i=.08,e=.12,t=900,n="lowpass"){if(!St)return;const s=St.currentTime,r=Math.max(1,Math.floor(St.sampleRate*i)),a=St.createBuffer(1,r,St.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=(Math.random()*2-1)*(1-h/r);const l=St.createBufferSource();l.buffer=a;const c=St.createBiquadFilter();c.type=n,c.frequency.value=t;const u=St.createGain();u.gain.setValueAtTime(e,s),u.gain.exponentialRampToValueAtTime(1e-4,s+i),l.connect(c),c.connect(u),u.connect(St.destination),l.start(s),l.stop(s+i+.02)}function vt(i){if(St){if(Wf[i]){qf();const e=Il[i];if(e){const t=e.cloneNode();t.volume=e.volume,t.play().catch(()=>{});return}}switch(i){case"start":$e(392,.07,"square",.08),setTimeout(()=>$e(587,.08,"square",.08),70),setTimeout(()=>$e(784,.12,"square",.09),135);break;case"banana":$e(760,.045,"triangle",.035,980),Ln(.025,.015,2600,"highpass");break;case"bananaHit":$e(520,.04,"square",.04,260),Ln(.035,.035,1200,"bandpass");break;case"poopCharge":$e(170,.06,"sawtooth",.035,230),Ln(.035,.018,420,"lowpass");break;case"poopFire":$e(130,.08,"sawtooth",.07,90),Ln(.09,.07,520,"lowpass");break;case"poopHit":$e(95,.08,"square",.06,55),Ln(.12,.08,360,"lowpass");break;case"chest":$e(659,.06,"triangle",.07),setTimeout(()=>$e(988,.12,"triangle",.08),55),Ln(.06,.025,3200,"highpass");break;case"gate":$e(440,.06,"square",.06),setTimeout(()=>$e(660,.08,"square",.05),50);break;case"augmentCommon":$e(420,.08,"triangle",.07),setTimeout(()=>$e(560,.08,"triangle",.06),80);break;case"augmentGold":$e(523,.07,"triangle",.08),setTimeout(()=>$e(784,.07,"triangle",.08),70),setTimeout(()=>$e(1046,.12,"triangle",.08),140),Ln(.12,.035,4200,"highpass");break;case"augmentPrism":$e(392,.06,"sine",.07),setTimeout(()=>$e(587,.06,"sine",.07),55),setTimeout(()=>$e(880,.08,"sine",.08),110),setTimeout(()=>$e(1318,.18,"sine",.08),170),Ln(.18,.04,5e3,"highpass");break;case"hurt":$e(180,.14,"sawtooth",.09,80),Ln(.08,.05,700,"lowpass");break;case"kill":$e(260,.05,"square",.05,180),Ln(.06,.05,900,"bandpass");break;case"boss":$e(100,.18,"sawtooth",.11,65),setTimeout(()=>$e(90,.18,"sawtooth",.1,55),160);break;case"gameover":$e(300,.18,"sawtooth",.08,120),setTimeout(()=>$e(190,.22,"sawtooth",.08,70),160);break;case"clear":$e(523,.08,"square",.08),setTimeout(()=>$e(659,.08,"square",.08),80),setTimeout(()=>$e(784,.08,"square",.08),160),setTimeout(()=>$e(1046,.18,"square",.09),240);break}}}const hi=26,Jh=40,AM=100;function wM(i){if(i<=1)return[0];const e=Math.min(.12,.5/Math.max(1,i-1));return Array.from({length:i},(t,n)=>(n-(i-1)/2)*e)}class gi{constructor(e){this.scene=e;const t=uM(),n=new yt({color:16110394,flatShading:!0,emissive:3351040,emissiveIntensity:.4});this.pool=[];for(let c=0;c<Jh;c++){const u=new Me(t,n);u.visible=!1,u.userData={life:0,vz:0,mini:!1,rangeLeft:0,bornZ:0,hitCounter:0},e.add(u),this.pool.push(u)}const s=new Bt,r=Jh*8;s.setAttribute("position",new Xt(new Float32Array(r*3),3)),this.trailLives=new Float32Array(r),this.trailMax=r,this.trailIdx=0,this.trailGeom=s;const a=new cc({color:16773210,size:.28,transparent:!0,opacity:.95,depthWrite:!1,blending:Bi});this.trail=new If(s,a),e.add(this.trail),this.sparkPool=[];const o=new zs(.06,6,4),l=new Wt({color:16771162,transparent:!0,opacity:0,depthWrite:!1,blending:Bi});for(let c=0;c<AM;c++){const u=new Me(o,l.clone());u.visible=!1,u.userData={life:0,maxLife:.35,vx:0,vy:0,vz:0},e.add(u),this.sparkPool.push(u)}this._fireTimer=0,this._pending=[]}_emitBananaSpark(e,t=!1){const n=this.sparkPool.find(a=>!a.visible);if(!n)return;const s=t?.11:.18;n.position.set(e.x+(Math.random()-.5)*s,e.y+(Math.random()-.5)*s,e.z-.14-Math.random()*.62);const r=t?.22+Math.random()*.16:.34+Math.random()*.22;n.userData.life=r,n.userData.maxLife=r,n.userData.vx=(Math.random()-.5)*.8,n.userData.vy=.25+Math.random()*.9,n.userData.vz=-2.6-Math.random()*2.8,n.material.opacity=t?.34:.52,n.scale.setScalar(t?.46+Math.random()*.28:.62+Math.random()*.48),n.visible=!0}tryAutoFire(e,t,n,s){var c;t.bananaTimer=(t.bananaTimer||0)-e;const r=t.autoSynergyLevel||((c=t.synergyLevels)==null?void 0:c.auto)||0,a=r>=4?1.4:r>=2?1.2:1,o=Math.min(t.bananaAS*a,t.bananaASCap||7);if(t.bananaTimer>0)return!1;t.bananaTimer+=1/Math.max(.1,o);const l=Math.max(.5,Math.min(4,o/.88));return this._pending.push({delay:.38/l,gs:t,playerX:n}),!0}_fireBananas(e,t){var l;vt("banana"),e.bananaFireCounter=(e.bananaFireCounter||0)+1;const n=Math.round(Math.max(1,e.bananaCount+(e.projectileSynergyBonus||0))),s=wM(n),a=(((l=e.synergyLevels)==null?void 0:l.projectile)||0)>=4&&n>=8?1.2:1,o=e.bananaRange*40*a;for(let c=0;c<n;c++){const u=this.pool.find(h=>!h.visible);if(!u)break;u.position.set(t+s[c],.42,.3),u.userData={life:o/hi,vz:hi,mini:!1,rangeLeft:o,rangeTotal:o,bornZ:.3,hitCounter:0,sparkT:0},u.visible=!0,u.rotation.set(0,0,0)}if(e.extraMiniEvery4&&e.bananaFireCounter%4===0){const c=this.pool.find(u=>!u.visible);c&&(c.position.set(t,.48,.28),c.userData={life:o/hi*.95,vz:hi*.95,mini:!0,miniMul:.3,rangeLeft:o,rangeTotal:o,bornZ:.28,hitCounter:0,sparkT:0},c.visible=!0,c.rotation.set(0,0,0))}if(e.dualWield)for(let c=0;c<n;c++){const u=this.pool.find(h=>!h.visible);if(!u)break;u.position.set(t+s[c]+.08,.48,.28),u.userData={life:o/hi*.95,vz:hi*.95,mini:!0,miniMul:.2,rangeLeft:o,rangeTotal:o,bornZ:.28,hitCounter:0,sparkT:0},u.visible=!0,u.rotation.set(0,0,0)}}spawn(e,t){const n=this.pool.find(r=>!r.visible);if(!n)return;const s=t?t.bananaRange*40:13;n.position.copy(e),n.userData={life:s/hi,vz:hi,mini:!1,rangeLeft:s,rangeTotal:s,bornZ:e.z,hitCounter:0,sparkT:0},n.visible=!0,n.rotation.set(0,0,0)}static physicalDamage(e,t,n,s={}){var c,u;let r=t.armor*(1-(t.debuffArmorPct||0));r=Math.max(0,r*(1-n.percentPen)-n.flatPen);let a=e*100/(100+r);const o=((c=n.synergyLevels)==null?void 0:c.armorPen)||0;t.armor>=50&&(a*=o>=4?1.4:o>=2?1.2:1),t.armor>=50&&n.armoredPhysicalBonus&&(a*=1+n.armoredPhysicalBonus);const l=Math.random()<n.crit;if(l&&(a*=n.critDmg),l){const h=((u=n.synergyLevels)==null?void 0:u.crit)||0;h>=4?Math.random()<.2&&(a+=a*.3):h>=2&&(n.critHitCounter=(n.critHitCounter||0)+1,n.critHitCounter%3===0&&(a*=1.2))}return s.rangeT!==void 0&&(a*=gi.rangeDamageMul(n,s.rangeT)),{dmg:a*n.allDamage,isCrit:l}}static rangeDamageMul(e,t=0){var a;const n=((a=e.synergyLevels)==null?void 0:a.range)||0;if(n<2)return 1;const s=n>=4?.4:.2;return 1+(.01+Math.max(0,Math.min(1,t))*(s-.01))}static calcHitDamage(e,t,n){var b,_,y;const r=e.userData.mini?e.userData.miniMul||.2:1,a=n.bananaDamage*(n.bananaDamageMul||1);let o=a*r;const l=((b=n.synergyLevels)==null?void 0:b.banana)||0;l>=4?(n.bananaRepeatTarget===t?n.bananaRepeatStacks=Math.min(10,(n.bananaRepeatStacks||0)+1):(n.bananaRepeatTarget=t,n.bananaRepeatStacks=0),o*=1+(n.bananaRepeatStacks||0)*.02):l>=2&&(o*=1.1);const c=((_=n.synergyLevels)==null?void 0:_.projectile)||0,u=n.bananaCount+(n.projectileSynergyBonus||0);c>=4&&u>=5&&(o*=1.15);const h=e.userData.rangeTotal||n.bananaRange*40||1,d=Math.max(0,Math.min(1,(e.position.z-(e.userData.bornZ||0))/h));t.hp/Math.max(1,t.maxHp)<=.3&&n.bananaExecuteBonus&&(o*=1+n.bananaExecuteBonus);const{dmg:f,isCrit:g}=gi.physicalDamage(o,t,n,{rangeT:d});n.bananaHitCounter=(n.bananaHitCounter||0)+1;let v=n.bananaFlatOnHit*r;n.bananaEvery5Flat&&n.bananaHitCounter%5===0&&(v+=n.bananaEvery5Flat*r);let p=0;n.bananaHpScale&&(p+=gi.physicalDamage(n.maxHp*n.bananaHpScale*r,t,n,{rangeT:d}).dmg),n.bananaCurrentHpPct&&(v+=t.hp*n.bananaCurrentHpPct*r),n.bananaFlatRatio&&(v+=a*n.bananaFlatRatio*r);let m=1;n.bananaTripleProc&&n.bananaHitCounter%3===0&&m++,n.critProc&&g&&m++;const S=((y=n.synergyLevels)==null?void 0:y.bananaOnHit)||0;let E=1;S>=4?Math.random()<.25&&m++:S>=2&&Math.random()<.2&&(E=1.2);const w=v*E*n.allDamage*m,N=p*m,L=f+N;let x=0;n.bananaToPoop&&Math.random()<n.bananaToPoop&&(x=n.poopDamage*(n.poopDamageMul||1)*n.allDamage);const M=w+x;return{physical:L,fixed:M,total:L+M,isCrit:g}}checkHits(e){const t=[];for(const n of this.pool)if(n.visible)for(const s of e){if(!s.active)continue;const r=s.type==="mob"?1.25:s.type==="mini"?1.55:1.9,a=s.type==="mob"?1.35:s.type==="mini"?1.65:2.05;if(Math.abs(n.position.x-s.mesh.position.x)<r&&Math.abs(n.position.z-s.mesh.position.z)<a){t.push({proj:n,enemy:s}),n.visible=!1;break}}return t}update(e){for(let n=this._pending.length-1;n>=0;n--){const s=this._pending[n];s.delay-=e,s.delay<=0&&(this._fireBananas(s.gs,s.playerX),this._pending.splice(n,1))}for(const n of this.pool){if(!n.visible)continue;if(n.userData.life-=e,n.userData.life<=0){n.visible=!1;continue}n.position.z+=n.userData.vz*e,n.rotation.x+=e*12,n.rotation.z+=e*8,n.userData.sparkT=(n.userData.sparkT||0)+e;const s=n.userData.mini?1:2;for(let o=0;o<s;o++)this._emitBananaSpark(n.position,n.userData.mini);const r=3+Math.floor(Math.min(2,n.userData.vz/12)),a=this.trailGeom.attributes.position.array;for(let o=0;o<r;o++){const l=this.trailIdx%this.trailMax,c=.12+Math.random()*.55;a[l*3]=n.position.x+(Math.random()-.5)*.18,a[l*3+1]=n.position.y+(Math.random()-.5)*.18,a[l*3+2]=n.position.z-c,this.trailLives[l]=.48+Math.random()*.18,this.trailIdx++}}for(const n of this.sparkPool){if(!n.visible)continue;if(n.userData.life-=e,n.userData.life<=0){n.visible=!1;continue}n.position.x+=n.userData.vx*e,n.position.y+=n.userData.vy*e,n.position.z+=n.userData.vz*e;const s=n.userData.life/n.userData.maxLife;n.material.opacity=.52*s,n.scale.multiplyScalar(1-e*1.25)}const t=this.trailGeom.attributes.position.array;for(let n=0;n<this.trailMax;n++)this.trailLives[n]>0&&(this.trailLives[n]-=e,this.trailLives[n]<=0&&(t[n*3+1]=-1e3));this.trailGeom.attributes.position.needsUpdate=!0}reset(){for(const t of this.pool)t.visible=!1;for(const t of this.sparkPool)t.visible=!1;this._pending=[],this.trailLives.fill(0);const e=this.trailGeom.attributes.position.array;for(let t=0;t<this.trailMax;t++)e[t*3+1]=-1e3;this.trailGeom.attributes.position.needsUpdate=!0}}function yc(i){const e=new Map,t=new Map,n=i.clone();return $f(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function $f(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)$f(i.children[n],e.children[n],t)}const ln={mobs:[new URL("/runrun2/assets/%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%86%E1%85%A9%E1%86%B81--xDM-hqK.gltf",import.meta.url).href,new URL("/runrun2/assets/%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%86%E1%85%A9%E1%86%B82-EmH8KrjS.gltf",import.meta.url).href,new URL("/runrun2/assets/%E1%84%8C%E1%85%A1%E1%86%B8%E1%84%86%E1%85%A9%E1%86%B83-Cital-W9.gltf",import.meta.url).href],mini:new URL("/runrun2/assets/%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-C4hv22PT.gltf",import.meta.url).href,bosses:[new URL("/runrun2/assets/1%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-CLIlCEBN.gltf",import.meta.url).href,new URL("/runrun2/assets/2%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-D5rONojL.gltf",import.meta.url).href,new URL("/runrun2/assets/3%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-DPHmNR9N.gltf",import.meta.url).href],final:new URL("/runrun2/assets/%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%87%E1%85%A9%E1%84%89%E1%85%B3-D4s6O3lK.gltf",import.meta.url).href},RM=i=>i[Math.floor(Math.random()*i.length)];function CM(i=1,e=5217082){const t=new ft,n=v=>new yt({color:v,flatShading:!0}),s=n(e),r=n(new _e(e).offsetHSL(0,0,-.1).getHex()),a=n(8018478),o=new Me(new Gt(.85,.95,.55),s);o.position.y=.95,t.add(o);const l=new Me(new Gt(.92,.18,.62),a);l.position.y=.5,t.add(l);const c=new Me(new Gt(.32,.55,.34),r);c.position.set(-.22,.27,0);const u=c.clone();u.position.x=.22,t.add(c,u);const h=new Me(new Qa(.42,0),s);h.position.y=1.7,t.add(h);const d=n(16774084);for(const v of[-.1,.1]){const p=new Me(new dc(.05,.16,4),d);p.position.set(v,1.55,.32),p.rotation.x=Math.PI,t.add(p)}const f=new Me(new Gt(.28,.85,.28),s);f.position.set(-.6,1,0);const g=f.clone();return g.position.x=.6,t.add(f,g),t.scale.setScalar(i),t}const Nl=.9;function PM(){const i=new ft,e=new Me(new Fn(Nl+.06,.1),new Wt({color:2236962,depthTest:!1})),t=new Me(new Fn(Nl,.07),new Wt({color:4517444,depthTest:!1}));return t.position.z=.003,i.add(e,t),i.rotation.x=-.3,i._fg=t,i}function LM(){const i=new ft,e=new yt({color:10465720,flatShading:!0}),t=new yt({color:7307142,flatShading:!0}),n=new Me(new Zn(.75,.86,.16,18),t);n.position.y=.08;const s=new Me(new Zn(.68,.72,.04,18),e);return s.position.y=.18,i.add(n,s),i}class IM{constructor(e,t,n,s,r,a){this.scene=e,this.type=t,this.maxHp=n,this.hp=n,this.armor=s,this.debuffArmorPct=0,this.active=!1,this.sec=0,this.mesh=new ft,this._fallback=CM(r,a),this.mesh.add(this._fallback),this.plate=LM(),this.mesh.add(this.plate),this._visual=null,this._visualCache=new Map,this._targetHeight=1.5,this._plateRadius=1,e.add(this.mesh),this.mesh.visible=!1,this.hpBar=PM(),e.add(this.hpBar),this.hpBar.visible=!1}setVisual(e,t,n){if(this._targetHeight=t,this._plateRadius=n,this.plate.scale.set(n,1,n),this._visual&&(this.mesh.remove(this._visual),this._visual=null),this._fallback.visible=!e,!e)return;const s=e.uuid||e.id,r=this._visualCache.get(s)||this._makeVisual(e,t);this._visualCache.set(s,r),r.parent&&r.parent.remove(r),this._visual=r,this.mesh.add(r)}_makeVisual(e,t){const n=yc(e);n.rotation.y=Math.PI,n.updateWorldMatrix(!0,!0);const r=new Ot().setFromObject(n).getSize(new I),a=t/Math.max(.01,r.y);n.scale.setScalar(a),n.updateWorldMatrix(!0,!0);const o=new Ot().setFromObject(n);return n.position.y-=o.min.y,n}prewarmVisual(e,t){if(!e)return;const n=e.uuid||e.id;this._visualCache.has(n)||this._visualCache.set(n,this._makeVisual(e,t))}activate(e,t,n,s,r,a=null,o=1.5,l=1){this.hp=this.maxHp=n,this.armor=s,this.debuffArmorPct=0,this.sec=r,this.active=!0,this._bodyCollided=!1,this.setVisual(a,o,l),this.mesh.position.set(e,0,t),this.mesh.visible=!0,this.hpBar.visible=!1,this._updateBar()}deactivate(){this.active=!1,this.mesh.visible=!1,this.hpBar.visible=!1}takeDamage(e){return this.hp=Math.max(0,this.hp-e),this._updateBar(),this.hp<=0}_updateBar(){const e=this.hp/this.maxHp,t=this.hpBar._fg;t.scale.x=Math.max(.001,e),t.position.x=-(Nl*(1-e))/2,t.material.color.setHex(e>.4?4517444:e>.2?15641122:15606306)}update(e,t){if(!this.active)return;this.mesh.position.z+=t;const n=this.type!=="mob"?Math.sin(performance.now()*.0012)*.04:0;this.mesh.position.y=n,this.hpBar.visible=!1}}function DM(i,e){const t=Math.max(0,e),n=Math.min(1,t/139),s=n*n*(3-2*n);let r=t<10?45+t*1.8:62+s*2600;const a=[45,135,430,1100][i];r=Math.max(r,a);const o=t<10?.08:.12;return Math.round(r*(1+(Math.random()*2-1)*o))}const NM=[[115,160,245],[420,650,980],[1450,2300,3500],[4800,7200,10500]],UM=[900,2800,6200],OM=16e3;function Ul(i){return[0,30,55,80][i]}const FM={left:-1.5,right:1.5,center:0},Ss=42,BM=[{type:"mob",size:12,scale:.9,color:5217082},{type:"mini",size:4,scale:1.15,color:2783775},{type:"boss",size:3,scale:1.5,color:8004130},{type:"final",size:1,scale:1.85,color:1706506}];class kM{constructor(e){this.scene=e,this.loader=new Xs,this.assets=new Map,this._pools={};for(const t of BM)this._pools[t.type]=Array.from({length:t.size},()=>new IM(e,t.type,100,0,t.scale,t.color));this._loadAssets()}_loadAssets(){const e=[...ln.mobs,ln.mini,...ln.bosses,ln.final];for(const t of e)this.loader.load(t,n=>{const s=n.scene;s.traverse(r=>{if(!r.isMesh)return;const a=Array.isArray(r.material)?r.material:[r.material];for(const o of a)o&&(o.side=en,o.roughness=.85,o.metalness=0,o.map&&(o.map.colorSpace=Qe,o.map.magFilter=mt,o.map.minFilter=Wi))}),this.assets.set(t,s),this._schedulePrewarm()},void 0,n=>console.warn("[Enemy] asset failed:",t,n))}_schedulePrewarm(){const e=()=>this.prewarmVisuals();typeof requestIdleCallback=="function"?requestIdleCallback(e,{timeout:1600}):setTimeout(e,120)}prewarmVisuals(){for(const n of this._pools.mob)for(const s of ln.mobs)n.prewarmVisual(this.assets.get(s),1.85);const e=this.assets.get(ln.mini);for(const n of this._pools.mini)n.prewarmVisual(e,2.65);for(const n of this._pools.boss)ln.bosses.forEach(s=>n.prewarmVisual(this.assets.get(s),3.35));const t=this.assets.get(ln.final);for(const n of this._pools.final)n.prewarmVisual(t,4.1)}_visualFor(e,t=0){if(e==="mob"){const n=RM(ln.mobs);return{proto:this.assets.get(n)??null,height:1.85,plate:1.05}}if(e==="mini")return{proto:this.assets.get(ln.mini)??null,height:2.65,plate:1.35};if(e==="boss"){const n=ln.bosses[Math.min(t,ln.bosses.length-1)];return{proto:this.assets.get(n)??null,height:3.35,plate:1.7}}return e==="final"?{proto:this.assets.get(ln.final)??null,height:4.1,plate:2.05}:{proto:null,height:1.8,plate:1}}get active(){return Object.values(this._pools).flat().filter(e=>e.active)}getFree(e){var t;return((t=this._pools[e])==null?void 0:t.find(n=>!n.active))??null}spawnMob(e,t,n,s,r=Ss){const a=this.getFree("mob");if(!a)return null;const o=this._visualFor("mob",s);return a.activate(FM[e],r,t,n,s,o.proto,o.height,o.plate),a}spawnMini(e,t,n=Ss){var a;vt("boss");const s=this.getFree("mini");if(!s)return null;const r=this._visualFor("mini",e);return s.activate(0,n,((a=NM[e])==null?void 0:a[t])??500,Ul(e)+10,e,r.proto,r.height,r.plate),s}spawnSectionBoss(e,t=Ss){vt("boss");const n=this.getFree("boss");if(!n)return null;const s=this._visualFor("boss",e);return n.activate(0,t,UM[e]??1300,Ul(e)+15,e,s.proto,s.height,s.plate),n}spawnFinalBoss(e=Ss){vt("boss");const t=this.getFree("final");if(!t)return null;const n=this._visualFor("final",3);return t.activate(0,e,OM,100,3,n.proto,n.height,n.plate),t}update(e,t){const n=-t*e;for(const s of this.active)s.update(e,n),s.mesh.position.z<-8&&s.deactivate()}checkMobCollision(e){for(const t of this.active){if(t.type!=="mob"||t._bodyCollided)continue;const n=t.mesh.position.z;if(n<2.7&&n>-2.4&&Math.abs(t.mesh.position.x-e)<1.35)return t}return null}checkBossCollision(){for(const e of this.active){if(e.type==="mob"||e._bodyCollided)continue;const t=e.type==="final"?4.2:e.type==="boss"?3.6:3.1,n=e.type==="final"?-3:-2.6;if(e.mesh.position.z<t&&e.mesh.position.z>n)return e}return null}finalBossAlive(){return this.active.find(e=>e.type==="final")??null}nearest(e,t,n){let s=null,r=1/0;for(const a of this.active){const o=a.mesh.position.z-t;if(o<0||o>n)continue;const l=Math.hypot(a.mesh.position.x-e,o);l<r&&(s=a,r=l)}return s}}const jf="ammang_3d_v1_",xc=[["damage","피해량","바나나 피해 +1",5,[10,25,50,90,150]],["atkspd","공격속도","바나나 공속 +3%",5,[10,25,50,90,150]],["hp","최대 체력","시작 체력 +15",5,[10,25,50,90,150]],["move","이동 속도","가로 이동속도 +3%",5,[10,25,50,90,150]],["flatPen","고정 방관","시작 방관 +2",5,[10,25,50,90,150]],["crit","치명타","치확 +1%",5,[10,25,50,90,150]],["critDmg","치명타 피해","치피 +2%p",5,[10,25,50,90,150]],["poopDmg","똥 피해","똥 피해 +2",5,[10,25,50,90,150]],["growth","성장","보상량 +2%",5,[10,25,50,90,150]],["luck","행운","상자 고등급 확률 +2%",5,[10,25,50,90,150]],["projectile","투사체 수","3단: 시작 투사체 +1",3,[80,180,400]],["poopStart","똥 해금","3단: 시작 똥 +1",3,[60,140,300]]];function Ol(i="tester",e="0000"){const t={};return xc.forEach(n=>t[n[0]]=0),{nickname:i,code:e,diamond:0,bestScore:0,upgrades:t}}let Tr="",Bn=null;function ys(){return Bn}function Ec(i,e="tester",t="0000"){const s={...Ol(e,t),...i||{}};return s.nickname=e,s.code=t,s.diamond=Math.max(0,Math.floor(s.diamond||0)),s.bestScore=Math.max(0,Math.floor(s.bestScore||0)),s.upgrades={...s.upgrades||{}},xc.forEach(r=>{s.upgrades[r[0]]===void 0&&(s.upgrades[r[0]]=0)}),s}function nl(i,e=(i==null?void 0:i.nickname)||"tester",t=(i==null?void 0:i.code)||"0000"){return Tr=jf+e+"_"+t,Bn=Ec(i,e,t),Ar(),Bn}function Fl(i,e){Tr=jf+i+"_"+e;const t=localStorage.getItem(Tr);return Bn=Ec(t?JSON.parse(t):null,i,e),Ar(),Bn}function Ar(){Bn&&Tr&&localStorage.setItem(Tr,JSON.stringify(Bn))}function Mc(i,e){const t=e*(i.maxHpGainMul||1);return i.maxHp+=t,i.hp+=t,t}function VM(){const i=(Bn==null?void 0:Bn.upgrades)||{};return{maxHp:100+(i.hp||0)*15,hp:100+(i.hp||0)*15,maxHpGainMul:1,baseMaxHpGainMul:1,shield:0,moveSpeed:.7*(1+(i.move||0)*.03),score:0,section:0,bananaDamage:10+(i.damage||0)+((i.projectile||0)>=1?1:0),bananaAS:.968*(1+(i.atkspd||0)*.03),bananaASGainMul:1,bananaASCap:6.5,bananaTimer:0,bananaCount:1+((i.projectile||0)>=3?1:0),bananaRange:.384+((i.projectile||0)>=2?.06:0),bananaDamageMul:1,flatPen:(i.flatPen||0)*2,percentPen:0,armoredBonus:0,bananaExecuteBonus:0,crit:(i.crit||0)*.01,critDmg:1.2+(i.critDmg||0)*.02,bananaFlatOnHit:0,bananaEvery5Flat:0,bananaHitCounter:0,bananaRepeatTarget:null,bananaRepeatStacks:0,bananaFireCounter:0,bananaHpScale:0,bananaCurrentHpPct:0,bananaFlatRatio:0,bananaTripleProc:!1,critProc:!1,dualWield:!1,bananaToPoop:0,poopUnlocked:(i.poopStart||0)>=3,poopDamage:18+(i.poopDmg||0)*2+((i.poopStart||0)>=1?2:0),poopDamageMul:1,poopCD:4,poopTimer:4,poopStored:0,poopMax:((i.poopStart||0)>=2?1:0)+((i.poopStart||0)>=3?1:0),poopRange:.45,poopEveryN:null,poopCount:0,poopBossMul:1,poopSealed:!1,poopSplash:0,poopArmorDebuff:0,poopArmorDebuffPerHit:0,poopPhysicalOnHit:0,poopMirror:0,poopRainbow:!1,poopExplodePct:0,poopKillRefund:!1,poopSynergyRunId:0,regen:0,bat:0,llama:0,batCD:0,llamaCD:0,llamaTimer:0,petEffectMul:1,allDamage:1,tags:{},synergyLevels:{},_survivalSynergyHpMul:1,projectileSynergyBonus:0,gamblerSynergyLevel:0,autoSynergyLevel:0,armoredPhysicalBonus:0,critHitCounter:0,kills:0,killAS:!1,hpOn10Kills:!1,killBananaDamage:0,deathSave:!1,shieldRegen:!1,noHitTime:0,rewardScale:1+(i.growth||0)*.02,earnedDia:0,fenceSinceGeneral:0,gateSpawnCount:0,firstPoopStorageOffered:!1,coinBlessing:!1,acquiredAugments:[],_tagApplied:{},phase:"running"}}const zM=[["bananaDamage","바나나 피해",16],["bananaAS","바나나 속도",9],["bananaRange","바나나 사거리",9],["hp","체력",24],["move","이동속도",9]],HM=[["poopMax","똥 저장",18]],GM=[["bananaDamage","바나나 피해",16],["bananaAS","바나나 속도",9],["bananaRange","사거리",9],["poopDamage","똥 피해",12],["poopCD","똥 쿨",10],["poopMax","똥 저장",10],["poopRange","똥 사거리",7],["hp","체력",24],["move","이동속도",9]],WM=new Set(["bananaCount","flatPen","percentPen","crit","critDmg"]);function il(i){let e=i.reduce((n,s)=>n+s[2],0),t=Math.random()*e;for(const n of i)if(t-=n[2],t<=0)return{key:n[0],label:n[1]};return{key:i[0][0],label:i[0][1]}}function Sc(i){return WM.has(i==null?void 0:i.key)?{key:"hp",label:"체력"}:i}function Zh(i){return i.poopMax<=0?Math.random()<.22?il(HM):il(zM):il(GM)}const Kf=[8,20,40,75];function sl(i,e){switch(i=Sc(i),i.key){case"bananaDamage":return["바나나 피해","+1"];case"bananaAS":return["바나나 공속","+1"];case"bananaRange":return["바나나 사거리","+1"];case"poopDamage":return["똥 피해","+1"];case"poopMax":return["똥 저장","+1"];case"poopCD":return["똥 쿨","+1"];case"poopRange":return["똥 사거리","+1"];case"hp":return["체력",`+${Kf[e]||8}`];case"move":return["좌우속도","+1"];default:return[i.label||"체력",""]}}function XM(i,e,t){i=Sc(i);const n=t.rewardScale;switch(i.key==="hp"||i.key==="move"?t.fenceSinceGeneral=0:t.fenceSinceGeneral=(t.fenceSinceGeneral||0)+1,i.key){case"bananaDamage":t.bananaDamage+=1*n;break;case"bananaAS":t.bananaAS*=1+.025*n*(t.bananaASGainMul||1)*((t.autoSynergyLevel||0)>=4?2:1);break;case"bananaRange":t.bananaRange*=1+.01*n;break;case"poopDamage":t.poopUnlocked=!0,t.poopDamage+=1*n;break;case"poopMax":t.poopUnlocked=!0,t.poopMax+=1,t.poopTimer=Math.max(t.poopTimer||0,t.poopCD||4);break;case"poopCD":t.poopUnlocked=!0,t.poopCD*=1-.03*n*((t.autoSynergyLevel||0)>=4?2:1);break;case"poopRange":t.poopUnlocked=!0,t.poopRange*=1+.01*n;break;case"hp":Mc(t,Kf[e]*n);break;case"move":t.moveSpeed*=1+.05*n;break}vt("gate")}function Qh(i,e,t){const r=document.createElement("canvas");r.width=512,r.height=320;const a=r.getContext("2d"),o=t==="blue",l=o?"#2f79d8":"#d44737",c=o?"#174b95":"#8c211d",u=a.createLinearGradient(0,0,0,320);o?(u.addColorStop(0,"#dff4ff"),u.addColorStop(.52,"#b9dcff"),u.addColorStop(1,"#73aeea")):(u.addColorStop(0,"#ffe3d6"),u.addColorStop(.52,"#ffb9a6"),u.addColorStop(1,"#df6658")),a.fillStyle=u,a.fillRect(0,0,512,320),a.fillStyle=o?"rgba(31,91,190,.16)":"rgba(190,38,32,.16)",a.fillRect(0,0,512,320),a.fillStyle=o?"rgba(45,103,205,.16)":"rgba(204,48,36,.16)",a.fillRect(0,320*.68,512,320*.32),a.strokeStyle=c,a.lineWidth=18,a.strokeRect(12,12,488,296),a.strokeStyle="#fff2af",a.lineWidth=6,a.strokeRect(28,28,456,264),a.textAlign="center",a.textBaseline="middle",a.lineJoin="round",a.font='900 58px "Press Start 2P", monospace',a.lineWidth=8,a.strokeStyle="#ffffff",a.fillStyle=l,a.strokeText(i,512/2,128),a.fillText(i,512/2,128),a.font='900 50px "Press Start 2P", monospace',a.lineWidth=7,a.strokeStyle="#ffffff",a.fillStyle=o?"#345bd8":"#b83328",a.strokeText(e,512/2,224),a.fillText(e,512/2,224);const h=new Ja(r);return h.colorSpace=Qe,h}const di=2.3;function qM(i,e,t,n){const s=new ft,r=new yt({color:13994549,flatShading:!0}),a=new yt({color:16769162,flatShading:!0}),o=Qh(i,e,"blue"),l=Qh(t,n,"red"),c=new yt({map:o,emissive:1118481,emissiveIntensity:.08}),u=new yt({map:l,emissive:1118481,emissiveIntensity:.08}),h=new Gt(di,1.35,.12),d=new Me(h,c);d.position.set(-di/2,.96,0),s.add(d);const f=new Me(h.clone(),u);f.position.set(di/2,.96,0),s.add(f);for(const g of[0,-di+.06,di-.06]){const v=new Me(new Zn(.095,.12,1.78,10),r);v.position.set(g,.96,0),s.add(v);const p=new Me(new Zn(.14,.1,.18,10),r);p.position.set(g,1.92,0),s.add(p);const m=new Me(new Zn(.1,.14,.16,10),r);m.position.set(g,.03,0),s.add(m)}for(const g of[.34,1.58])for(const v of[-di/2,di/2]){const p=new Me(new Zn(.035,.035,di*.72,8),a);p.rotation.z=Math.PI/2,p.position.set(v,g,.08),s.add(p)}return s._lp=d,s._rp=f,s}const ed=42,$M=.6;class jM{constructor(e,t,n){this.scene=e,this.gs=t,this.onText=n,this._active=[]}_rollOpts(e,t){let n=[Zh(e),Zh(e)];if(e.poopMax<=0&&e.gateSpawnCount<=2&&(n[Math.random()<.5?0:1]={key:"poopMax",label:"똥 저장"}),e.poopMax<=0)for(let s=0;s<n.length;s++)["poopDamage","poopCD","poopRange"].includes(n[s].key)&&(n[s]={key:"hp",label:"체력"});if((e.fenceSinceGeneral||0)>=8){const s=Math.random()<.5?0:1;n[s].key!=="poopMax"&&(n[s]=Math.random()<.68?{key:"hp",label:"체력"}:{key:"move",label:"이동속도"})}return n.map(Sc)}spawnFence(e,t=ed){const n=this.gs;n.gateSpawnCount=(n.gateSpawnCount||0)+1;const s=this._rollOpts(n,e),[r,a]=sl(s[0],e),[o,l]=sl(s[1],e),c=qM(r,a,o,l),u=Math.min(ed,t);c.position.set(0,0,u),this.scene.add(c),this._active.push({mesh:c,meshZ:u,fired:!1,showTimer:0,opts:s,sec:e})}_remove(e){this.scene.remove(e.mesh),this._active=this._active.filter(t=>t!==e)}update(e,t,n){for(const s of[...this._active]){if(s.meshZ+=-t*e,s.mesh.position.z=s.meshZ,!s.fired&&s.meshZ<=$M){s.fired=!0,s.chosenSide=n<=0?0:1;const r=s.opts[s.chosenSide],a=s.sec??this.gs.section;XM(r,a,this.gs);const[o,l]=sl(r,a);this.onText&&this.onText(`✦ ${o} ${l}`,"#ffec61");const c=s.chosenSide===0?s.mesh._lp:s.mesh._rp,u=s.chosenSide===0?s.mesh._rp:s.mesh._lp;c&&(c.material.emissive=new _e(16772676)),c&&(c.material.emissiveIntensity=.9),u&&(u.material.opacity=.25),u&&(u.material.transparent=!0)}if(s.fired){s.showTimer+=e;const r=Math.max(0,1-s.showTimer/.5);s.mesh.scale.set(1,r,1),s.showTimer>.55&&this._remove(s)}s.meshZ<-10&&this._remove(s)}}reset(){for(const e of[...this._active])this.scene.remove(e.mesh);this._active=[]}}const KM=new URL("/runrun2/assets/Chest_Open-oOf12JEX.gltf",import.meta.url).href,Yf=[["bananaDamageMul","바나나 피해 증폭",15],["bananaAS","공속",12],["bananaRange","사거리",9],["poopDamageMul","똥 피해 증폭",14],["poopCD","똥 쿨",11],["poopRange","똥 사거리",8],["hp","체력",16],["move","이동속도",6],["flatPen","방관",3],["percentPen","%방관",2],["crit","치확",3],["critDmg","치피",2],["dia","다이아",.5]];function YM(i){let e=i.reduce((n,s)=>n+s[2],0),t=Math.random()*e;for(const n of i)if(t-=n[2],t<=0)return{key:n[0],label:n[1]};return{key:i[0][0],label:i[0][1]}}function JM(i){var a;const e=Math.random(),t=(i==null?void 0:i.gamblerSynergyLevel)||((a=i==null?void 0:i.synergyLevels)==null?void 0:a.gambler)||0,n=t>=4?.4:t>=2?.6:.7,s=t>=4?.4:t>=2?.3:.25,r=e<n?1:e<n+s?2:3;return{...YM(Yf),star:r}}const Jf=[25,50,85,140],Mt={bananaDamageMul:[1,2,3],bananaAS:[3,4,6],bananaRange:[3,5,8],poopDamageMul:[1,2,3],poopCD:[5,7,10],poopRange:[3,5,8],crit:[1,2,3],critDmg:[2,4,6],flatPen:[1,2,3],percentPen:[.5,1,1.5]};function Bl(i,e){const t=(i.star||1)-1;switch(i.key){case"bananaDamageMul":return`바나나 피해 증폭 +${Mt.bananaDamageMul[t]}%`;case"bananaAS":return`바나나 공속 +${Mt.bananaAS[t]}%`;case"bananaRange":return`바나나 사거리 +${Mt.bananaRange[t]}%`;case"flatPen":return`고정 방관 +${Mt.flatPen[t]}`;case"percentPen":return`퍼센트 방관 +${Mt.percentPen[t]}%`;case"poopDamageMul":return`똥 피해 증폭 +${Mt.poopDamageMul[t]}%`;case"poopCD":return`똥 쿨 -${Mt.poopCD[t]}%`;case"poopRange":return`똥 사거리 +${Mt.poopRange[t]}%`;case"hp":return`체력 +${(Jf[e]||25)*(i.star||1)}`;case"move":return`이동속도 +${3*(i.star||1)}%`;case"crit":return`치확 +${Mt.crit[t]}%`;case"critDmg":return`치피 +${Mt.critDmg[t]}%p`;case"dia":return`다이아 +${i.star||1}`;default:return`${i.label}`}}function ZM(){const i=[];for(let e=0;e<4;e++)for(let t=1;t<=3;t++)for(const n of Yf){const s={key:n[0],label:n[1],star:t};i.push({reward:s,text:Bl(s,e)})}return i.push({reward:{key:"bananaDamageMul",star:1},text:""}),i}function QM(i,e,t,n){vt("chest");const s=i.star||1,r=t.rewardScale,a=s-1,o=(Jf[e]||25)*s*r;switch(i.key){case"bananaDamageMul":t.bananaDamageMul*=1+Mt.bananaDamageMul[a]/100*r;break;case"bananaAS":t.bananaAS*=1+Mt.bananaAS[a]/100*r*(t.bananaASGainMul||1)*((t.autoSynergyLevel||0)>=4?2:1);break;case"bananaRange":t.bananaRange*=1+Mt.bananaRange[a]/100*r;break;case"flatPen":t.flatPen+=Mt.flatPen[a]*r;break;case"percentPen":t.percentPen+=Mt.percentPen[a]/100*r;break;case"poopDamageMul":t.poopUnlocked=!0,t.poopDamageMul*=1+Mt.poopDamageMul[a]/100*r;break;case"poopCD":t.poopUnlocked=!0,t.poopCD*=1-Mt.poopCD[a]/100*r*((t.autoSynergyLevel||0)>=4?2:1);break;case"poopRange":t.poopUnlocked=!0,t.poopRange*=1+Mt.poopRange[a]/100*r;break;case"hp":Mc(t,o);break;case"move":t.moveSpeed*=1+.03*s;break;case"crit":t.crit+=Mt.crit[a]/100;break;case"critDmg":t.critDmg+=Mt.critDmg[a]/100;break;case"dia":n&&n(s);break}}const Zf=[3368669,11158783,16755200],eS=8015390,tS=5583886,nS=13936455,rl=new Map,iS=new eo(.62,.035,6,28),sS=new eo(.86,.025,6,36),rS=new fc(.08,0);function aS(i,e){return i!=null&&i.startsWith("banana")?"#ffb43c":i!=null&&i.startsWith("poop")?"#f7fbff":i==="hp"?"#69ff6e":i==="dia"?"#58b9ff":i==="crit"||i==="critDmg"?"#d990ff":["#58b9ff","#d990ff","#ffb43c"][(e||1)-1]||"#ffb43c"}function oS(i){const e=String(i).match(/^(.+?)\s*([+-].+)$/);return e?[e[1].trim(),e[2].trim()]:[String(i),""]}function cr(i,e,t){const n=`${e}|${t}|${i}`;if(rl.has(n))return rl.get(n);const s=384,r=160,a=document.createElement("canvas");a.width=s,a.height=r;const o=a.getContext("2d");o.clearRect(0,0,s,r);const l=Zf[e-1],c=l>>16&255,u=l>>8&255,h=l&255;o.fillStyle="rgba(18,24,28,0.72)",o.beginPath(),o.roundRect(8,8,s-16,r-16,18),o.fill(),o.strokeStyle=`rgb(${c},${u},${h})`,o.lineWidth=7,o.beginPath(),o.roundRect(8,8,s-16,r-16,18),o.stroke();const[d,f]=oS(i);o.textAlign="center",o.lineJoin="round",o.strokeStyle="#1a1206",o.lineWidth=11,o.fillStyle=aS(t,e),o.font="900 48px sans-serif",o.strokeText(d,s/2,72),o.fillText(d,s/2,72),f&&(o.strokeStyle="#1a1206",o.lineWidth=10,o.fillStyle="#fff1a4",o.font="900 54px sans-serif",o.strokeText(f,s/2,125),o.fillText(f,s/2,125));const g=new Ja(a);return g.needsUpdate=!0,rl.set(n,g),g}function td(i,e){const t=new ft,n=Zf[(i||1)-1],s=new yt({color:eS,flatShading:!0});new yt({color:tS,flatShading:!0});const r=new yt({color:nS,flatShading:!0}),a=new Me(new Gt(.6,.3,.46),s);a.position.y=.15,t.add(a);const o=new yt({color:n,flatShading:!0,emissive:new _e(n),emissiveIntensity:.22}),l=new Me(new Gt(.62,.18,.48),o);l.position.y=.39,t.add(l);const c=new Me(new Gt(.64,.06,.5),r);c.position.y=.28,t.add(c);const u=new Me(new Gt(.06,.36,.04),r);u.position.set(0,.18,.25),t.add(u);const h=new Me(new Gt(.1,.1,.06),r);h.position.set(0,.28,.27),t.add(h);for(const[d,f]of[[-.27,.09],[.27,.09],[-.27,.27],[.27,.27]]){const g=new Me(new Gt(.06,.06,.04),r);g.position.set(d,f,.26),t.add(g)}if(e){const d=cr(e,i||1),f=new br({map:d,transparent:!0,depthTest:!1}),g=new Ia(f);g.scale.set(2.2,.92,1),g.position.y=1.45,t.add(g),t._labelSprite=g}return t}const lS=20;class cS{constructor(e,t,n,s){this.scene=e,this.gs=t,this.onText=n,this.onEarnDia=s,this._pool=[],this._chestAsset=null,this._renderer=null,this._prewarmed=!1,this._loadChestAsset();for(let r=0;r<lS;r++){const a=new ft;a.visible=!1,a._visual=null,a._labelSprite=null,a.userData={active:!1,reward:null,bobT:0,sec:0,chestText:""},e.add(a),this._pool.push(a)}this._schedulePrewarm()}get active(){return this._pool.filter(e=>e.userData.active)}_loadChestAsset(){new Xs().load(KM,e=>{this._chestAsset=e.scene,this._chestAsset.traverse(t=>{if(!t.isMesh)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const s of n)s&&(s.side=en,s.roughness=.85,s.metalness=0,s.map&&(s.map.colorSpace=Qe,s.map.magFilter=mt,s.map.minFilter=Wi))});for(const t of this._pool){if(t._usingFallback){for(;t.children.length;)t.remove(t.children[0]);t._visual=null,t._labelSprite=null,t._tierDecor=null,t._usingFallback=!1}this._ensureChestVisual(t)}this._prewarmed=!1,this._schedulePrewarm()},void 0,e=>console.warn("[BoxSystem] chest asset failed:",e))}setRenderer(e){this._renderer=e,this._schedulePrewarm()}_schedulePrewarm(){const e=()=>this.prewarm();typeof requestIdleCallback=="function"?requestIdleCallback(e,{timeout:1200}):setTimeout(e,80)}prewarm(){var e;if(!this._prewarmed){for(const{reward:t,text:n}of ZM()){const s=cr(n,t.star||1,t.key);(e=this._renderer)!=null&&e.initTexture&&this._renderer.initTexture(s)}for(const t of this._pool){this._ensureChestVisual(t);for(let n=1;n<=3;n++)this._applyTierVisual(t,{star:n});t.visible=!1,t.userData.active=!1}this._prewarmed=!0}}_buildChestVisual(e,t){const n=new ft;if(this._chestAsset){const s=this._chestAsset.clone(!0);if(s.scale.setScalar(.52),s.rotation.y=Math.PI,n.add(s),t){const r=cr(t,e.star||1,e.key),a=new br({map:r,transparent:!0,depthTest:!1}),o=new Ia(a);o.scale.set(2.25,.94,1),o.position.y=1.65,n.add(o),n._labelSprite=o}}else{const s=td(e.star,t);[...s.children].forEach(r=>n.add(r)),s._labelSprite&&(n._labelSprite=s._labelSprite)}return n}_ensureChestVisual(e){if(e._visual)return;if(this._chestAsset){const r=this._chestAsset.clone(!0);r.scale.setScalar(.52),r.rotation.y=Math.PI,e.add(r),e._visual=r,e._usingFallback=!1}else[...td(1,"").children].forEach(a=>e.add(a)),e._visual=e.children[0]??!0,e._usingFallback=!0;const t=cr("",1,"bananaDamage"),n=new br({map:t,transparent:!0,depthTest:!1}),s=new Ia(n);s.scale.set(2.25,.94,1),s.position.y=1.65,e.add(s),e._labelSprite=s,this._ensureTierDecor(e)}_ensureTierDecor(e){if(e._tierDecor)return;const t=new Wt({color:3368669,transparent:!0,opacity:.75,depthWrite:!1,blending:Bi}),n=new Wt({color:3368669,transparent:!0,opacity:0,depthWrite:!1,blending:Bi}),s=new Wt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Bi}),r=new Me(iS,t);r.rotation.x=Math.PI/2,r.position.y=.06;const a=new Me(sS,n);a.rotation.x=Math.PI/2,a.position.y=.78;const o=[];for(let c=0;c<5;c++){const u=new Me(rS,s.clone()),h=c/5*Math.PI*2;u.position.set(Math.cos(h)*.78,.9+c%2*.18,Math.sin(h)*.42),o.push(u),e.add(u)}const l=new Vf(8965375,0,3.2);l.position.set(0,.75,0),e.add(r,a,l),e._tierDecor={ring:r,halo:a,sparks:o,light:l}}_applyTierVisual(e,t){this._ensureTierDecor(e);const n=t.star||1,s=n===3?16729343:n===2?16759861:4885759,r=n===3?5242111:n===2?16773274:8369407,a=e._tierDecor;a.ring.material.color.setHex(s),a.ring.material.opacity=n===1?.65:.95,a.ring.scale.setScalar(n===1?1:n===2?1.08:1.2),a.halo.visible=n>=2,a.halo.material.color.setHex(n===3?r:s),a.halo.material.opacity=n===2?.22:.48,a.halo.scale.setScalar(n===3?1.15:1),a.light.color.setHex(r),a.light.intensity=n===1?0:n===2?.55:1.1,a.sparks.forEach((o,l)=>{o.visible=n===3,o.material.color.setHex(l%2?s:r),o.material.opacity=n===3?.9:0})}trySpawn(e,t=.4){if(Math.random()>t)return;const n=this._pool.find(o=>!o.userData.active);if(!n)return;const s=JM(this.gs),r=this.gs.section,a=Bl(s,r);this._ensureChestVisual(n),this._applyTierVisual(n,s),n._labelSprite&&(n._labelSprite.material.map=cr(a,s.star||1,s.key),n._labelSprite.material.needsUpdate=!0),n.position.set(e.x+(Math.random()-.5)*.4,0,e.z),n.rotation.y=0,n.visible=!0,n.userData={active:!0,reward:s,bobT:Math.random()*Math.PI*2,sec:r,chestText:a}}checkPickup(e){for(const t of this._pool)if(t.userData.active&&Math.abs(t.position.x-e)<1.1&&Math.abs(t.position.z)<1.2){const{reward:n,sec:s}=t.userData;QM(n,s,this.gs,this.onEarnDia),this.onText&&this.onText(Bl(n,s),"#b8f6ff"),t.visible=!1,t.userData.active=!1}}update(e,t){var s;const n=-t*e;for(const r of this._pool)r.userData.active&&(r.position.z+=n,r.userData.bobT+=e*2.5,r.position.y=Math.sin(r.userData.bobT)*.06,r.rotation.y=0,r._tierDecor&&(r._tierDecor.ring.rotation.z+=e*(((s=r.userData.reward)==null?void 0:s.star)===3?2.2:.9),r._tierDecor.halo.rotation.z-=e*1.4,r._tierDecor.sparks.forEach((a,o)=>{const l=r.userData.bobT*1.8+o*1.25;a.position.x=Math.cos(l)*.78,a.position.z=Math.sin(l)*.42,a.position.y=.92+Math.sin(l*1.7)*.16})),r.position.z<-8&&(r.visible=!1,r.userData.active=!1))}reset(){for(const e of this._pool)e.visible=!1,e.userData.active=!1}}let Gi=null;function nd(i){return Gi==null?void 0:Gi._applyRandom(i)}function id(i){Gi==null||Gi._earnDia(i)}const cn=i=>`${i}?v=20260512b`,uS=(i,e)=>{var n;if(!e)return!1;const t=((n=i==null?void 0:i.tags)==null?void 0:n[e])||0;return e==="pet"?t===1:t===1||t===3},ur={banana:cn(new URL("/runrun2/assets/banana2-Dikfaxr3.png",import.meta.url).href),bananaOnHit:cn(new URL("/runrun2/assets/banana%20on%20hit-BjN88KIA.png",import.meta.url).href),projectile:cn(new URL("/runrun2/assets/projectile-CjABkn6E.png",import.meta.url).href),range:cn(new URL("/runrun2/assets/range-XtqSI8sW.png",import.meta.url).href),poop:cn(new URL("/runrun2/assets/poop-C4IM26HT.png",import.meta.url).href),poopOnHit:cn(new URL("/runrun2/assets/poop%20on%20hit-DwKtQmu-.png",import.meta.url).href),poopStorage:cn(new URL("/runrun2/assets/poop%20storage-DtlkZaZz.png",import.meta.url).href),auto:cn(new URL("/runrun2/assets/auto-R7izpoq5.png",import.meta.url).href),crit:cn(new URL("/runrun2/assets/crit-C7jmGp9W.png",import.meta.url).href),survival:cn(new URL("/runrun2/assets/survival-DHqmTGjn.png",import.meta.url).href),armorPen:cn(new URL("/runrun2/assets/armorpen-CiwuGrep.png",import.meta.url).href),pet:cn(new URL("/runrun2/assets/pet-DKYnlE0y.png",import.meta.url).href),gambler:cn(new URL("/runrun2/assets/gambler-CMgVgS1K.png",import.meta.url).href)},kl={banana:{2:"노란 손맛",4:"바나나 알러지 원숭이"},bananaOnHit:{2:"바나나 더하기 바나나",4:"껍질 폭주"},projectile:{2:"노란 소나기",4:"탄막 원숭이"},range:{2:"멀리서 안전하게",4:"시야 밖에서 죽임"},poop:{2:"장 트러블 예열",4:"폭풍 장운동"},poopOnHit:{2:"찰박찰박",4:"대장 파열"},poopStorage:{2:"참는 자에게 복이 있다",4:"만성 장트러블"},auto:{2:"손이 먼저 나감",4:"자동사냥 원숭이"},crit:{2:"묻고 떠블로 가",4:"터지면 장땡"},survival:{2:"끈질긴 생존본능",4:"안 죽으면 이김"},armorPen:{2:"껍질 분쇄기",4:"방어구 알러지"},pet:{2:"동물농장"},gambler:{2:"코인조망의 은총",4:"단도 0일차"}},sd=i=>i==="common"?"":i==="gold"?"골드":"프리즘",rd={common:[["다섯 번째는 서비스","바나나 5번째 적중마다 고정 피해 +25",i=>{i.bananaEvery5Flat+=25},"bananaOnHit"],["손목 스냅 장인","바나나 공격속도 +20%",i=>{i.bananaAS*=1+.2*(i.bananaASGainMul||1)},"banana"],["껍질에 가시남","바나나 적중 시 고정 피해 +3",i=>{i.bananaFlatOnHit+=3},"bananaOnHit"],["어깨 풀렸다","바나나 사거리 +30%",i=>{i.bananaRange*=1.3},"range"],["하나 더 던져봐","바나나 투사체 +1",i=>{i.bananaCount+=1},"projectile"],["껍질 벗겨버려","최대체력 30% 미만 적에게 바나나 피해 +10%",i=>{i.bananaExecuteBonus=(i.bananaExecuteBonus||0)+.1},"banana"],["참다 참다 쌌다","최대 똥 저장 수 +4",i=>{i.poopMax+=4,i.poopUnlocked=!0,i.poopTimer=Math.max(i.poopTimer||0,i.poopCD||4)},"poopStorage"],["냄새가 여기까지","똥 사거리 +30%",i=>{i.poopRange*=1.3,i.poopUnlocked=!0},"range"],["다섯 번째 똥은 다르다","5번째 똥마다 최대체력 1.2% 고정피해",i=>{i.poopEveryN={n:5,pct:.012}},"poopOnHit"],["장 운동 시작","똥 쿨타임 -18%",i=>{i.poopCD*=.82,i.poopUnlocked=!0},"auto"],["묵직한 녀석","똥 피해 +20%",i=>{i.poopDamageMul*=1.2,i.poopUnlocked=!0},"poop"],["문도는 간다","초당 최대체력 0.5% 회복",i=>{i.regen+=.005},"survival"],["왠지 세게 맞음","치명타 확률 +6%",i=>{i.crit+=.06},"crit"],["크게 맞으면 아픔","치명타 피해 +10%p",i=>{i.critDmg+=.1},"crit"],["살 찌우기","최종 최대체력 +10%",i=>{i.maxHp*=1.1,i.hp*=1.1},"survival"],["전환: 골드","무작위 골드 증강 1개 획득",()=>nd("gold"),"gambler"],["바나나가 복사가 된다고?","4번째 발사마다 30% 미니 바나나 +1",i=>{i.extraMiniEvery4=!0},"projectile"],["껍질 까는 맛","방어력 50 이상 적에게 물리피해 +8%",i=>{i.armoredPhysicalBonus=(i.armoredPhysicalBonus||0)+.08},"armorPen"]],gold:[["꽁꽁 얼은 바나나","바나나 적중 시 최대체력 2% 추가 물리피해",i=>{i.bananaHpScale+=.02},"banana"],["껍질 파열","바나나 적중 시 고정 피해 +10",i=>{i.bananaFlatOnHit+=10},"bananaOnHit"],["두 배 세 배","3번째 바나나마다 적중효과 2번 발동",i=>{i.bananaTripleProc=!0},"bananaOnHit"],["나중에 개빨라지나요?","처치 시 바나나 공속 +0.1%",i=>{i.killAS=!0},"auto"],["어깨 탈골 투척법","바나나 사거리 +60%, 피해 +10%",i=>{i.bananaRange*=1.6,i.bananaDamage*=1.1},"range"],["한 발에 두 놈","치명타 시 적중효과 추가 적용",i=>{i.critProc=!0},"bananaOnHit"],["노란 비상사태","바나나 투사체 +2, 피해 -10%",i=>{i.bananaCount+=2,i.bananaDamageMul*=.9},"projectile"],["오늘 장난 아니다","최대 똥 저장 수 +7",i=>{i.poopMax+=7,i.poopTimer=Math.max(i.poopTimer||0,i.poopCD||4)},"poopStorage"],["냄새 사거리 증가","똥 사거리 +50%",i=>{i.poopRange*=1.5},"range"],["세 번째 똥은 진심","3번째 똥마다 최대체력 2% 고정피해",i=>{i.poopEveryN={n:3,pct:.02}},"poopOnHit"],["똥마렵","똥 쿨감 +35%, 바나나 공속 성장 효율 -10%",i=>{i.poopCD*=.65,i.bananaAS*=.9,i.bananaASGainMul*=.9},"auto"],["오염 폭발","똥 적중 시 추가 물리피해 +10",i=>{i.poopPhysicalOnHit+=10},"poopOnHit"],["이건 방어 못 함","보스에게 똥 피해 +5%",i=>{i.poopBossMul*=1.05},"poop"],["냄새 묻었다","똥에 맞은 적 방어력 똥 하나당 -0.5%",i=>{i.poopArmorDebuffPerHit+=.005},"poopOnHit"],["체력이 곧 국력","적 10마리 처치마다 최대체력 +50",i=>{i.hpOn10Kills=!0},"survival"],["어차피 이판 못 깸","즉시 다이아 +50",()=>id(50),"gambler"],["전환: 프리즘","무작위 프리즘 증강 1개 획득",()=>nd("prism"),"gambler"],["느낌 왔다","치명타 확률 +12%",i=>{i.crit+=.12},"crit"],["크게 터지면 기분 좋음","치명타 피해 +20%p",i=>{i.critDmg+=.2},"crit"],["방관 중독","퍼센트 방관 +12%",i=>{i.percentPen=Math.min(i.percentPen+.12,.45)},"armorPen"],["정밀 껍질 절단","고정 방관 +4",i=>{i.flatPen+=4},"armorPen"]],prism:[["양손잡이","현재 투사체 수만큼 20% 미니 바나나 추가",i=>{i.dualWield=!0},"projectile"],["변비","똥 봉인. 바나나 공속 +100%, 적중 시 현재체력 0.7% 고정피해",i=>{i.poopSealed=!0,i.bananaAS*=2,i.bananaCurrentHpPct+=.007},"banana"],["유리 바나나","최대체력 -50%. 바나나 피해 15% 추가 고정피해",i=>{i.maxHp*=.5,i.hp=Math.min(i.hp,i.maxHp),i.maxHpGainMul*=.5,i.bananaFlatRatio+=.15},"banana"],["티끌 모아 티끌","처치 1마리당 바나나 피해 +0.5",i=>{i.killBananaDamage=.5},"banana"],["아 잘못 던졌다","바나나 7% 확률로 똥으로 변함",i=>{i.bananaToPoop=.07},"bananaOnHit"],["노란 지옥","바나나 공속 상한 9회",i=>{i.bananaASCap=9},"auto"],["엽떡 먹은 다음날","똥 12% 확률 폭발: 최대체력 3%",i=>{i.poopExplodePct=.03},"poop"],["똥쟁이","왼쪽 똥 저장고 추가. 35% 피해",i=>{i.poopMirror=.35},"poopStorage"],["무한 장운동","똥으로 처치 시 똥 10개 즉시 생성",i=>{i.poopKillRefund=!0},"poopStorage"],["박쥐","박쥐 펫 +1. 흡혈 공격",i=>{i.bat+=1},"pet"],["라마","라마 펫 +1. 침으로 방어력 감소",i=>{i.llama+=1},"pet"],["이거 방탄유리야","10초 무피해 시 최대체력 50% 보호막",i=>{i.shieldRegen=!0},"survival"],["일단 돈을 챙겨","즉시 다이아 +100",()=>id(100),"gambler"],["이거 좋은 거예요?","모든 최종 피해 +12%",i=>{i.allDamage*=1.12},"pet"],["모든 겜은 치명타가 고점이긴 함","치명타 확률 +30%",i=>{i.crit+=.3},"crit"],["한 대만 버티자","죽을 피해 1회 무시",i=>{i.deathSave=!0},"survival"],["방어구 해체자","퍼센트 방관 +30%, 고정 방관 +15",i=>{i.percentPen=Math.min(i.percentPen+.3,.75),i.flatPen+=15},"armorPen"]]};function ad(i){const e=i.tags,t=[],n=kl;i.synergyLevels||(i.synergyLevels={}),i._tagApplied||(i._tagApplied={});const s=c=>{const u=e[c]||0;return c==="pet"?u>=2?2:0:u>=4?4:u>=2?2:0},r=c=>{var d;const u=i.synergyLevels[c]||0,h=s(c);h>u&&(i.synergyLevels[c]=h,t.push(((d=n[c])==null?void 0:d[h])||c))};Object.keys(n).forEach(r);const a=i.synergyLevels.survival||0,o=i._survivalSynergyHpMul||1,l=a>=4?2:a>=2?1.3:1;if(l!==o){const c=l/o;i.maxHp*=c,i.hp*=c,i._survivalSynergyHpMul=l}return i.maxHpGainMul=(i.baseMaxHpGainMul||1)*l,i.petEffectMul=(i.synergyLevels.pet||0)>=2?1.3:1,i.projectileSynergyBonus=(i.synergyLevels.projectile||0)>=2?1:0,i.autoSynergyLevel=i.synergyLevels.auto||0,i.gamblerSynergyLevel=i.synergyLevels.gambler||0,i.coinBlessing=i.gamblerSynergyLevel>=2,t}function hS(){let i=document.getElementById("augment-overlay");return i||(i=document.createElement("div"),i.id="augment-overlay",i.innerHTML=`
    <div class="aug-modal-inner">
      <div id="augCards" class="aug-cards"></div>
    </div>`,(document.getElementById("stage")||document.getElementById("app")).appendChild(i),i)}class dS{constructor(e,t,n){Gi=this,this.gs=e,this.onApply=t,this.onEarnDia=n,this._overlay=hS()}trigger(){const e=Math.random(),t=e<.5?"common":e<.9?"gold":"prism";vt(t==="common"?"augmentCommon":t==="gold"?"augmentGold":"augmentPrism");const n=[...rd[t]];for(let a=n.length-1;a>=0;a--)this._hasAug(n[a][0])&&n.splice(a,1);const s=[];for(;s.length<3&&n.length;)s.push(n.splice(Math.floor(Math.random()*n.length),1)[0]);const r=document.getElementById("augCards");r.innerHTML="",s.forEach(a=>{const o=document.createElement("div");o.className=`aug-card ${t}`;const l=a[3],c=uS(this.gs,l),u=c?"시너지 효과 발동 가능!":sd(t);o.innerHTML=`
        <div class="aug-icon-frame">
          <img class="aug-icon" src="${ur[l]||ur.banana}" alt="">
        </div>
        <div class="aug-body">
          <div class="aug-head">
            <div class="aug-name">${a[0]}</div>
            ${u?`<div class="aug-status ${c?"synergy":""}">${u}</div>`:""}
          </div>
          <div class="aug-desc">${a[1]}</div>
        </div>`,o.onclick=()=>{vt("augmentSelect");const h=this._applyAug(a),d=()=>{this._overlay.style.display="none",this.gs.phase="running",this.onApply&&this.onApply((h==null?void 0:h.converted)||a)};if(h!=null&&h.converted){const f=h.converted;o.className=`aug-card ${h.tier}`;const g=f[3],v=sd(h.tier);o.innerHTML=`
            <div class="aug-icon-frame">
              <img class="aug-icon" src="${ur[g]||ur.gambler}" alt="">
            </div>
            <div class="aug-body">
              <div class="aug-convert">전환 성공!</div>
              <div class="aug-head">
                <div class="aug-name">${f[0]}</div>
                ${v?`<div class="aug-status">${v}</div>`:""}
              </div>
              <div class="aug-desc">${f[1]}</div>
            </div>`,this._showSynergy(`전환 성공! ${f[0]} 획득`),setTimeout(d,850)}else d()},r.appendChild(o)}),this._overlay.style.display="flex",this.gs.phase="augment"}_applyAug(e){if(this._markAug(e[0]),e[0]==="전환: 골드")return this._convertAug("gold");if(e[0]==="전환: 프리즘")return this._convertAug("prism");e[2](this.gs);const t=e[3];t&&(this.gs.tags[t]=(this.gs.tags[t]||0)+1);for(const n of ad(this.gs))this._showSynergy(`시너지 발동! ${n}`);return null}_applyRandom(e,t=!1){const n=rd[e].filter(r=>!this._hasAug(r[0])&&(!t||!r[0].startsWith("전환:")));if(!n.length)return null;const s=n[Math.floor(Math.random()*n.length)];return this._applyAug(s),s}_convertAug(e){this.gs.tags.gambler=(this.gs.tags.gambler||0)+1;const t=this._applyRandom(e,!0);for(const n of ad(this.gs))this._showSynergy(`시너지 발동! ${n}`);return t?{converted:t,tier:e}:null}_hasAug(e){return(this.gs.acquiredAugments||[]).includes(e)}_markAug(e){this.gs.acquiredAugments||(this.gs.acquiredAugments=[]),this.gs.acquiredAugments.includes(e)||this.gs.acquiredAugments.push(e)}_showSynergy(e){const t=document.getElementById("stage")||document.getElementById("app")||document.body,n=document.createElement("div");n.className="synergy-toast",n.textContent=e,t.appendChild(n),vt("augmentGold"),setTimeout(()=>n.remove(),1500)}_earnDia(e){this.onEarnDia&&this.onEarnDia(e)}}const fS=new zs(.22,7,6),pS=new yt({color:5913104,flatShading:!0}),mS=new URL("/runrun2/assets/Scary%20Poop-CG7dDLZw.glb",import.meta.url).href,gS=new zs(.26,8,6),_S=new yt({color:8014360,flatShading:!0});function ya(i,e,t){const n=e?1:-1,s=Math.floor((Math.sqrt(8*i+1)-1)/2),r=s*(s+1)/2,a=i-r,o=s+1,l=a-(o-1)/2,c=Math.pow(.95,i);return{x:t+n*(.58+s*.18),y:.34+s*.22+Math.abs(l)*.03,z:-.48,offsetX:l*.19,scale:c}}const vS=16,al=18,ol=34,od=24;class yS{constructor(e){this.mesh=new ft,this._fallback=new Me(fS,pS),this.mesh.add(this._fallback),this.mesh.visible=!1,e.add(this.mesh),this._visual=null,this.vx=0,this.vy=0,this.vz=0,this.life=0,this.target=null,this.active=!1,this.mul=1,this.curve=0,this._t=0}setVisualProto(e){if(this._visual&&(this.mesh.remove(this._visual),this._visual=null),this._fallback.visible=!e,!e)return;const t=Qf(e,.48);this._visual=t,this.mesh.add(t)}activate(e,t,n,s,r,a){this.mesh.position.set(e,t,n),this.active=!0,this.life=4,this.target=s,this.mul=r||1,this.curve=a||0,this._t=0;const o=s.type==="mob"?.9:1.25,l=s.mesh.position.x-e,c=o-t,u=s.mesh.position.z-n,h=Math.sqrt(l*l+c*c+u*u)||1;this.vx=l/h*al,this.vy=c/h*al+1.1,this.vz=u/h*al,this.mesh.visible=!0,this.rangeTotal=0,this.bornZ=n}deactivate(){this.active=!1,this.mesh.visible=!1,this.target=null}}function Qf(i,e){const t=yc(i);t.rotation.y=Math.PI,t.updateWorldMatrix(!0,!0);const s=new Ot().setFromObject(t).getSize(new I),r=e/Math.max(.01,s.y);t.scale.setScalar(r),t.updateWorldMatrix(!0,!0);const a=new Ot().setFromObject(t);return t.position.y-=a.min.y+e*.5,t}function ld(i){const e=new ft,t=new Me(gS,_S.clone());return e.add(t),e.visible=!1,e._fallback=t,e._visual=null,i.add(e),e}function cd(i,e){if(i._visual&&(i.remove(i._visual),i._visual=null),i._fallback.visible=!e,!e)return;const t=Qf(e,.42);i._visual=t,i.add(t)}const or=12;class xS{constructor(e,t){this.scene=e,this.gs=t,this._poopProto=null,this._proj=Array.from({length:vS},()=>new yS(e)),this._slots=Array.from({length:or},()=>ld(e)),this._mirrorSlots=Array.from({length:or},()=>ld(e)),this._loadPoopAsset()}_loadPoopAsset(){new Xs().load(mS,e=>{this._poopProto=e.scene,this._poopProto.traverse(t=>{if(!t.isMesh)return;const n=Array.isArray(t.material)?t.material:[t.material];for(const s of n)s&&(s.side=en,s.roughness=.85,s.metalness=0)});for(const t of this._proj)t.setVisualProto(this._poopProto);for(const t of this._slots)cd(t,this._poopProto);for(const t of this._mirrorSlots)cd(t,this._poopProto)},void 0,e=>console.warn("[PoopSystem] Scary Poop asset failed:",e))}accumulate(e){var a;const t=this.gs;if(!t.poopUnlocked||t.poopSealed||t.poopMax<=0)return;const n=t.autoSynergyLevel||((a=t.synergyLevels)==null?void 0:a.auto)||0,s=n>=4?.6:n>=2?.8:1,r=t.poopCD*s;if(t.poopTimer=(t.poopTimer||r)-e,t.poopTimer<=0){t.poopTimer+=Math.max(1.2,r);const o=t.poopStored;t.poopStored=Math.min(t.poopStored+1,t.poopMax),t.poopStored>o&&vt("poopCharge")}}tryFire(e,t,n){var f,g;const s=this.gs;if(!s.poopUnlocked||s.poopSealed||s.poopStored<=0)return;const r=s.poopRange*40;let a=null,o=1/0;for(const v of n){const p=v.mesh.position.z-t;if(p<0||p>r)continue;const m=Math.hypot(v.mesh.position.x-e,p);m<o&&(a=v,o=m)}if(!a)return;const l=s.poopStored;s.poopStored=0,l>0&&vt("poopFire"),s.poopSynergyRunId=(s.poopSynergyRunId||0)+1,s.poopSynergyRunId;const c=((f=s.synergyLevels)==null?void 0:f.poopStorage)||0,u=c>=4&&l>=7?1.2:1;for(let v=0;v<l;v++){const p=this._proj.find(S=>!S.active);if(!p)break;const m=ya(v,!1,e);p.activate(m.x,m.y,m.z,a,u,(Math.random()-.5)*.5),p.rangeTotal=r,p.bornZ=m.z}if(s.poopMirror&&l>0)for(let v=0;v<l;v++){const p=this._proj.find(S=>!S.active);if(!p)break;const m=ya(v,!0,e);p.activate(m.x,m.y,m.z,a,s.poopMirror*u,(Math.random()-.5)*.5),p.rangeTotal=r,p.bornZ=m.z}const h=((g=s.synergyLevels)==null?void 0:g.poop)||0,d=h>=4?.2:h>=2?.1:0;d>0&&setTimeout(()=>{if(this.gs!==s||!s||s.phase==="dead")return;let v=0;for(let p=0;p<l;p++)Math.random()<d&&v++;if(v>0){const p=s.poopStored;s.poopStored=Math.min(s.poopMax,s.poopStored+v),s.poopStored>p&&vt("poopCharge")}},500),c>=2&&setTimeout(()=>{if(this.gs!==s||!s||s.phase==="dead")return;const v=s.poopStored;s.poopStored=Math.min(s.poopMax,s.poopStored+3),s.poopStored>v&&vt("poopCharge")},1e3)}update(e,t,n){this.gs;const s=[],r=performance.now()*.001;for(const a of this._proj){if(!a.active)continue;if(a.life-=e,a._t+=e,a.life<=0){a.deactivate();continue}if((!a.target||!a.target.active)&&(a.target=t.find(E=>E.active)??null,!a.target)){a.deactivate();continue}const o=a.target.type==="mob"?.9:1.25,l=a.target.mesh.position.x-a.mesh.position.x,c=o-a.mesh.position.y,u=a.target.mesh.position.z-a.mesh.position.z,h=Math.sqrt(l*l+c*c+u*u)||1,d=-u/h,f=Math.sin(r*18+a.curve)*a.curve*.04;a.vx+=(l/h*ol+d*f)*e,a.vy+=c/h*ol*e,a.vz+=u/h*ol*e;const g=Math.hypot(a.vx,a.vy,a.vz);if(g>od){const E=od/g;a.vx*=E,a.vy*=E,a.vz*=E}a.mesh.position.x+=a.vx*e,a.mesh.position.y+=a.vy*e,a.mesh.position.z+=a.vz*e,a.mesh.rotation.x+=e*5;const v=Math.abs(a.mesh.position.x-a.target.mesh.position.x),p=Math.abs(a.mesh.position.z-a.target.mesh.position.z),m=Math.abs(a.mesh.position.y-o);if(Math.sqrt(v*v+m*m+p*p)<1.55||p<.45&&v<1.35&&m<1.5){const E=Math.max(0,Math.min(1,(a.mesh.position.z-(a.bornZ||0))/Math.max(1,a.rangeTotal||1)));s.push({proj:a,enemy:a.target,mul:a.mul,rangeT:E}),a.deactivate()}else(a.mesh.position.y<-1||a.mesh.position.z<-3)&&a.deactivate()}return this._updateSlots(n),s}_updateSlots(e){const t=this.gs,n=Math.min(t.poopStored,or);for(let r=0;r<or;r++){const a=r<n;if(this._slots[r].visible=a,a){const o=ya(r,!1,e);this._slots[r].position.set(o.x+o.offsetX,o.y,o.z),this._slots[r].scale.setScalar(o.scale)}}const s=t.poopMirror>0;for(let r=0;r<or;r++){const a=s&&r<n;if(this._mirrorSlots[r].visible=a,a){const o=ya(r,!0,e);this._mirrorSlots[r].position.set(o.x+o.offsetX,o.y,o.z),this._mirrorSlots[r].scale.setScalar(o.scale)}}}reset(){for(const e of this._proj)e.deactivate();for(const e of this._slots)e.visible=!1;for(const e of this._mirrorSlots)e.visible=!1}}class ES{constructor(e){this.dir=0,this._keyL=!1,this._keyR=!1,this._joyDir=0,this._touchDir=0,this._stageEl=e,window.addEventListener("keydown",n=>{(n.key==="ArrowLeft"||n.key==="a"||n.key==="A")&&(this._keyL=!0),(n.key==="ArrowRight"||n.key==="d"||n.key==="D")&&(this._keyR=!0),this._syncKeys()}),window.addEventListener("keyup",n=>{(n.key==="ArrowLeft"||n.key==="a"||n.key==="A")&&(this._keyL=!1),(n.key==="ArrowRight"||n.key==="d"||n.key==="D")&&(this._keyR=!1),this._syncKeys()}),e.addEventListener("pointerdown",n=>{this._isJoyArea(n)||(this._touchDir=n.clientX<e.getBoundingClientRect().left+e.clientWidth/2?-1:1)}),e.addEventListener("pointermove",n=>{this._isJoyArea(n)||this._touchDir===0||(this._touchDir=n.clientX<e.getBoundingClientRect().left+e.clientWidth/2?-1:1)});const t=()=>{this._touchDir=0};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("pointerleave",t),this._initJoystick()}_isJoyArea(e){const t=document.getElementById("joystick");if(!t||t.classList.contains("hidden"))return!1;const n=t.getBoundingClientRect();return e.clientX>=n.left-16&&e.clientX<=n.right+16&&e.clientY>=n.top-16&&e.clientY<=n.bottom+16}_initJoystick(){const e=document.getElementById("joystick"),t=document.getElementById("joyKnob");if(!e||!t)return;const n=38;let s=!1,r=null;const a=c=>{const u=e.getBoundingClientRect(),h=u.left+u.width/2,d=u.top+u.height/2;let f=c.clientX-h,g=c.clientY-d;const v=Math.hypot(f,g);return v>n&&(f=f/v*n,g=g/v*n),{dx:f,dy:g}},o=(c=0,u=0)=>{t.style.transform=`translate(${c}px,${u}px)`},l=()=>{s=!1,r=null,this._joyDir=0,o(0,0)};e.addEventListener("pointerdown",c=>{var d;c.preventDefault(),c.stopPropagation(),s=!0,r=c.pointerId,(d=e.setPointerCapture)==null||d.call(e,c.pointerId);const u=a(c);o(u.dx,u.dy);const h=n*.16;this._joyDir=Math.abs(u.dx)<h?0:Math.max(-1,Math.min(1,u.dx/n))}),e.addEventListener("pointermove",c=>{if(!s||c.pointerId!==r)return;c.preventDefault(),c.stopPropagation();const u=a(c);o(u.dx,u.dy);const h=n*.16;this._joyDir=Math.abs(u.dx)<h?0:Math.max(-1,Math.min(1,u.dx/n))}),e.addEventListener("pointerup",c=>{c.pointerId===r&&l()}),e.addEventListener("pointercancel",l)}_syncKeys(){const e=(this._keyR?1:0)+(this._keyL?-1:0);e!==0&&(this.dir=e)}update(e,t=1){const s=(this._keyR?1:0)+(this._keyL?-1:0)||this._joyDir||this._touchDir||0;this.dir=s}get targetX(){return this.dir}}const MS=new URL("/runrun2/assets/bat-B9L22ud1.glb",import.meta.url).href,SS=new URL("/runrun2/assets/Horse-T9Qtn7NJ.gltf",import.meta.url).href;function ud(i){i.traverse(e=>{if(!e.isMesh)return;const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&(n.side=en,n.roughness=.85,n.metalness=0)})}function bS(i,e){const t=yc(i);t.updateWorldMatrix(!0,!0);const s=new Ot().setFromObject(t).getSize(new I);t.scale.setScalar(e/Math.max(.01,s.y)),t.updateWorldMatrix(!0,!0);const r=new Ot().setFromObject(t);return t.position.y-=r.min.y,t}class TS{constructor(e){this.scene=e,this.loader=new Xs,this.bat=new ft,this.horse=new ft,this.bat.visible=!1,this.horse.visible=!1,e.add(this.bat,this.horse),this.batProto=null,this.horseProto=null,this.batAttack=null,this.batQueue=[],this.spitShots=[],this._load()}_load(){this.loader.load(MS,e=>{this.batProto=e.scene,ud(this.batProto),this._setGroupVisual(this.bat,this.batProto,.42,"bat")},void 0,e=>console.warn("[PetVisuals] bat failed:",e)),this.loader.load(SS,e=>{this.horseProto=e.scene,ud(this.horseProto),this._setGroupVisual(this.horse,this.horseProto,.7)},void 0,e=>console.warn("[PetVisuals] horse failed:",e))}_setGroupVisual(e,t,n,s=""){for(;e.children.length;)e.remove(e.children[0]);const r=bS(t,n);r.rotation.y=Math.PI,s==="bat"&&(r.rotation.z=Math.PI),e.add(r)}triggerBat(e,t,n){!e||!e.active||this.batQueue.push({target:e,t:0,dur:.54,hit:!1,onHit:t,onReturn:n})}triggerLlama(e){if(!e||!e.active)return;const t=new zs(.07,8,6),n=new Wt({color:12255075}),s=new Me(t,n);s.position.copy(this.horse.position),s.position.y+=.45,s.userData={target:e,life:.7},this.scene.add(s),this.spitShots.push(s)}update(e,t,n,s){var o,l,c,u;const r=performance.now()*.001;this.bat.visible=(t==null?void 0:t.bat)>0,this.horse.visible=(t==null?void 0:t.llama)>0;const a=new I(n-.62,1.45+Math.sin(r*6)*.08,-.7);if(this.bat.visible){if(!this.batAttack&&this.batQueue.length&&(this.batAttack=this.batQueue.shift()),this.batAttack){const h=this.batAttack;h.t+=e;const d=Math.min(1,h.t/h.dur),f=d<.5?d/.5:(1-d)/.5,g=(o=h.target)!=null&&o.active?h.target.mesh.position.clone():a.clone();g.y=((l=h.target)==null?void 0:l.type)==="mob"?1:1.6,this.bat.position.lerpVectors(a,g,f);const v=g.x-a.x;this.bat.rotation.y=(v>0?-Math.PI*.5:Math.PI*.5)+Math.sin(r*10)*.18,!h.hit&&d>=.5&&(h.hit=!0,(c=h.onHit)==null||c.call(h,h.target)),d>=1&&((u=h.onReturn)==null||u.call(h,h.target),this.batAttack=null)}else this.bat.position.copy(a),this.bat.rotation.y=Math.sin(r*10)*.25;this.bat.rotation.z=Math.sin(r*18)*.35,this.bat.scale.set(1,.88+Math.sin(r*22)*.12,1)}this.horse.visible&&(this.horse.position.set(n+.62,0,-.82),this.horse.rotation.y=Math.PI+Math.sin(r*7)*.08,this.horse.position.y=Math.abs(Math.sin(r*9))*.045);for(let h=this.spitShots.length-1;h>=0;h--){const d=this.spitShots[h];d.userData.life-=e;const f=d.userData.target;if(!(f!=null&&f.active)||d.userData.life<=0){this.scene.remove(d),this.spitShots.splice(h,1);continue}const g=f.mesh.position.clone();g.y=f.type==="mob"?.9:1.35,d.position.lerp(g,Math.min(1,e*9)),d.position.distanceTo(g)<.25&&(this.scene.remove(d),this.spitShots.splice(h,1))}}}const AS=[24.6,49.6,74.6],wS=99.5;class RS{constructor(){this.scoreEl=document.getElementById("score-value"),this.runDiaEl=document.getElementById("run-dia-value"),this.hpFillEl=document.getElementById("hp-fill"),this.hpTextEl=document.getElementById("hp-text"),this.sectionEl=document.getElementById("section-label"),this.progressEl=document.getElementById("run-progress"),this._dmgPool=[],this._dmgIdx=0,this._floatPool=[],this._floatIdx=0,this._hpPool=[],this._camera=null,this._stageEl=null,this._buildMinimap(),this._buildEnemyHpPool()}setCamera(e,t){this._camera=e,this._stageEl=t}_project(e){if(!this._camera||!this._stageEl)return null;const t=e.clone().project(this._camera);return t.z>=1?null:{x:Math.max(5,Math.min(92,(t.x*.5+.5)*100)),y:Math.max(5,Math.min(85,(-t.y*.5+.5)*100))}}_buildMinimap(){const e=document.createElement("div");e.id="minimap";const t=document.createElement("div");t.id="mm-track",AS.forEach((s,r)=>{const a=document.createElement("div");a.className="mm-dot mm-boss",a.style.bottom=s+"%",a.innerHTML="◆",t.appendChild(a)});const n=document.createElement("div");n.className="mm-dot mm-final",n.style.bottom=wS+"%",n.innerHTML="★",t.appendChild(n),this._mmPlayer=document.createElement("div"),this._mmPlayer.id="mm-player",t.appendChild(this._mmPlayer),e.appendChild(t),document.getElementById("ui-overlay").appendChild(e)}_updateMinimap(e,t){const n=Math.min(100,Math.max(0,e/t*100));this._mmPlayer&&(this._mmPlayer.style.bottom=n+"%")}_buildEnemyHpPool(){const e=document.getElementById("ui-overlay");for(let t=0;t<20;t++){const n=document.createElement("div");n.className="enemy-hp-label",n.style.display="none",e.appendChild(n),this._hpPool.push(n)}}updateEnemyHpLabels(e,t,n){for(const o of this._hpPool)o.style.display="none";const s=n.clientWidth,r=n.clientHeight;let a=0;for(const o of e){if(a>=this._hpPool.length)break;const l=this._hpPool[a++],u=new I(o.mesh.position.x,.46,o.mesh.position.z).project(t);if(u.z>=1)continue;const h=(u.x*.5+.5)*s,d=(u.y*-.5+.5)*r;if(h<-30||h>s+30||d<-20||d>r+20)continue;const f=Math.ceil(o.hp),g=f>=1e3?(f/1e3).toFixed(1)+"k":String(f),p=Math.max(0,Math.min(42,o.mesh.position.z))/42,m=o.type==="final"?1.35:o.type==="boss"?1.25:o.type==="mini"?1.15:1,S=(1.35-p*.65)*m;l.textContent=g,l.style.display="block",l.style.left=Math.round(h)+"px",l.style.top=Math.round(d)+"px",l.className=`enemy-hp-label ehp-${o.type}`,l.style.transform=`translate(-50%, -50%) scale(${S.toFixed(3)})`}}update(e,t=0,n=2400){if(this.scoreEl&&(this.scoreEl.textContent=String(Math.floor(e.score)).padStart(6,"0")),this.runDiaEl&&(this.runDiaEl.textContent=Math.floor(e.earnedDia||0).toLocaleString()),this.hpFillEl){const s=Math.max(0,e.hp/e.maxHp*100);this.hpFillEl.style.width=s+"%",this.hpFillEl.style.background=s>50?"#44ee44":s>25?"#eeaa22":"#ee3333"}if(this.hpTextEl){const s=e.shield>0?` 🛡${Math.ceil(e.shield)}`:"";this.hpTextEl.textContent=`${Math.ceil(e.hp)}/${e.maxHp}${s}`}this.sectionEl&&(this.sectionEl.textContent=`SEC ${e.section+1}`),this.progressEl&&(this.progressEl.style.width=Math.min(100,t/n*100)+"%"),this._updateMinimap(t,n)}showDamage(e,t,n,s="physical"){const r=this._getDmgEl();r.textContent=(t?"★":"")+Math.round(e);const a=s==="fixed";r.style.color=a?"#ffffff":t?"#ffd15a":"#ff8b2f",r.style.webkitTextStroke=a?"0.85px #242424":"0.85px #4a1d00",r.style.textShadow=a?"0 1px 0 #000, 0 0 4px #000":"0 1px 0 #000, 0 0 3px #7a2600",r.style.fontSize=t?"15px":"12px",r.style.fontWeight="900";const o=n?this._project(n):null;o?(r.style.left=o.x+"%",r.style.top=o.y-4+"%"):(r.style.left=30+Math.random()*40+"%",r.style.top=25+Math.random()*25+"%"),r.style.opacity="1",r.style.transform="translateY(0) translateX(-50%)",r.style.display="block",requestAnimationFrame(()=>{r.style.transition="opacity 1.15s, transform 1.15s",r.style.opacity="0",r.style.transform="translateY(-48px) translateX(-50%) scale(1.08)"}),setTimeout(()=>{r.style.display="none",r.style.transition=""},1200)}showFloatText(e,t="#ffffff",n=null){const s=this._getFloatEl();s.textContent=e,s.style.color=t;const r=n?this._project(n):null;s.style.left=(r?r.x:50)+"%",s.style.top=(r?r.y:48)+"%",s.style.fontSize="11px",s.style.webkitTextStroke="0.7px #2a1700",s.style.textShadow="0 2px 0 #000, 0 0 8px #000",s.style.fontWeight="900",s.style.opacity="1",s.style.transform="translate(-50%, 0) scale(1)",s.style.display="block",requestAnimationFrame(()=>{s.style.transition="opacity 2s, transform 2s",s.style.opacity="0",s.style.transform="translate(-50%, -72px) scale(1.14)"}),setTimeout(()=>{s.style.display="none",s.style.transition=""},2100)}_getDmgEl(){if(this._dmgPool.length<10){const e=document.createElement("div");e.className="float-dmg",document.getElementById("ui-overlay").appendChild(e),this._dmgPool.push(e)}return this._dmgPool[this._dmgIdx++%this._dmgPool.length]}_getFloatEl(){if(this._floatPool.length<8){const e=document.createElement("div");e.className="float-text",document.getElementById("ui-overlay").appendChild(e),this._floatPool.push(e)}return this._floatPool[this._floatIdx++%this._floatPool.length]}showToast(e,t=2200){const n=document.getElementById("toast");n&&(n.textContent=e,n.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>n.classList.remove("show"),t))}showSection(e){this.showToast(`✦ SECTION ${e} ✦`,2800)}showGameOver(e,t,n,s){var a;(a=document.getElementById("gameover-overlay"))==null||a.remove();const r=document.createElement("div");r.id="gameover-overlay",r.innerHTML=`
      <div class="go-box">
        <div class="go-title ${e?"go-clear":"go-dead"}">${e?"🎉 클리어!":"💀 게임 오버"}</div>
        <div class="go-stats">
          <div class="go-row"><span>점수</span><span>${Math.floor(t).toLocaleString()}</span></div>
          <div class="go-row"><span>진행도</span><span>${s}%</span></div>
          <div class="go-row dia-row"><span>💎 획득</span><span>+${n}</span></div>
        </div>
        <div class="go-btns">
          <button class="go-btn go-ranking">랭킹보기</button>
          <button class="go-btn go-restart">다시하기</button>
          <button class="go-btn go-menu">타이틀로</button>
        </div>
      </div>`,document.getElementById("ui-overlay").appendChild(r),r.querySelector(".go-restart").addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:restart"))}),r.querySelector(".go-ranking").addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:ranking"))}),r.querySelector(".go-menu").addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:menu"))})}}const CS=5.25,bs=1325,ep=4,_s=bs*ep,hd=30,tp=.6,np=1.8,PS=29;function LS(){const i=[];let e=0;for(let t=0;t<ep;t++){const n=t*bs,s=[];for(let d=0;d<hd;d++){const f=n+40+d*(bs-80)/(hd-1);s.push(f-tp),i.push({d:f,type:"gate",sec:t})}const r=[];for(let d=0;d<s.length-1;d++)r.push((s[d]+s[d+1])/2);const a=d=>d+np,o=d=>{let f=0;for(let g=1;g<r.length;g++)Math.abs(r[g]-d)<Math.abs(r[f]-d)&&(f=g);return f},l=[.25,.5,.75].map(d=>o(n+bs*d)),c=r.length-1,u=new Set(t<3?[...l,c]:l),h=[];for(let d=0;d<r.length;d++)u.has(d)||h.push(d);if(t===0)for(const d of h){const f=a(r[d]),v=e-t*35<15?1:2;i.push({d:f,type:"mobs",sec:t,count:v,mobIdx:e}),e+=v}else{const d=[];for(let f=0;f<15;f++)d.push(h[Math.round(f*(h.length-1)/14)]);d.forEach((f,g)=>{const v=a(r[f]),p=g<10?2:3;i.push({d:v,type:"mobs",sec:t,count:p,mobIdx:e}),e+=p})}l.forEach((d,f)=>{i.push({d:a(r[d]),type:"mini",sec:t,idx:f})}),t<3?i.push({d:a(r[c]),type:"sectionBoss",sec:t}):i.push({d:n+bs-12,type:"finalBoss",sec:t})}return i.sort((t,n)=>t.d-n.d)}class IS{constructor(e){this.canvas=e,this.renderer=new wf({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=Qe,this.renderer.toneMapping=Yd,this.renderer.toneMappingExposure=1.05,this.scene=new Px,this.camera=new Qt(60,9/16,.1,200),this.camera.position.set(0,7.5,-9),this.camera.lookAt(0,0,13),this._setupLights(),this.world=new dM(this.scene),this.input=new ES(this.canvas.parentElement),this.ui=new RS,this.player=new EM(this.scene,this.input),this.ui.setCamera(this.camera,this.canvas.parentElement),this.enemies=new kM(this.scene),this.projectiles=new gi(this.scene),this.poops=new xS(this.scene,null),this.petVisuals=new TS(this.scene),this.fences=new jM(this.scene,null,(t,n)=>this._showPlayerFloat(t,n)),this.boxes=new cS(this.scene,null,(t,n)=>this._showPlayerFloat(t,n),t=>this._earnDia(t)),this.boxes.setRenderer(this.renderer),this.augments=new dS(null,t=>this._showPlayerFloat(`✨ ${t[0]}`,"#ff7cff"),t=>this._earnDia(t)),this.gs=null,this.clock=new xE,this.paused=!1,this._schedule=[],this._schedIdx=0,this._mobSpawnIdx=0,this._distance=0,this._over=!1,this._finalBossSpawned=!1,this._rafStarted=!1,this._augmentTimers=[],this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._onResize()}_setupLights(){this.scene.add(new fE(12113151,5937712,1.1));const e=new Al(16776160,1.8);e.position.set(5,12,-3),this.scene.add(e);const t=new Al(13691135,.5);t.position.set(-4,4,8),this.scene.add(t),this.scene.add(new vE(16777215,.4))}_onResize(){const e=this.canvas.parentElement,t=e.clientWidth,n=e.clientHeight;this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}startGame(){Dl(),vt("start"),this.stopGameSession(!1),this.gs=VM(),this.poops.gs=this.gs,this.fences.gs=this.gs,this.boxes.gs=this.gs,this.augments.gs=this.gs,this._schedule=LS(),this._schedIdx=0,this._mobSpawnIdx=0,this._distance=PS,this._over=!1,this._finalBossSpawned=!1;for(const e of this.enemies.active)e.deactivate();this.projectiles.reset(),this.poops.reset(),this.fences.reset(),this.boxes.reset(),this.clock.start(),this._rafStarted||(this._tick=this._tick.bind(this),requestAnimationFrame(this._tick),this._rafStarted=!0)}stopGameSession(e=!0){this.paused=!1,this._over=!0,this._finalBossSpawned=!1;for(const t of this._augmentTimers)clearTimeout(t);this._augmentTimers.length=0;for(const t of this.enemies.active)t.deactivate();this.projectiles.reset(),this.poops.reset(),this.fences.reset(),this.boxes.reset(),e&&(this.gs=null,this.ui.updateEnemyHpLabels([],this.camera,this.canvas.parentElement))}_tick(){if(requestAnimationFrame(this._tick),this.paused||!this.gs)return;const e=Math.min(this.clock.getDelta(),.05);this.gs.phase==="running"&&!this._over&&this._runFrame(e),this.renderer.render(this.scene,this.camera)}_runFrame(e){const t=this.gs,n=Math.min(1,Math.max(0,this._distance/_s)),s=1+Math.pow(n,1.18),r=CS*s;for(this._distance+=r*e,t.section=Math.min(3,Math.floor(this._distance/bs)),t.score=Math.floor(this._distance/_s*2e3);this._schedIdx<this._schedule.length&&this._schedule[this._schedIdx].d<=this._distance+Ss;){const d=this._schedule[this._schedIdx++],f=d.d-this._distance+tp,g=d.d-this._distance+np;d.type==="gate"&&this.fences.spawnFence(d.sec,f),d.type==="mobs"&&this._spawnMobs(d.sec,d.count,d.mobIdx,g),d.type==="mini"&&this.enemies.spawnMini(d.sec,d.idx,g),d.type==="sectionBoss"&&this.enemies.spawnSectionBoss(d.sec,g),d.type==="finalBoss"&&!this._finalBossSpawned&&(this._finalBossSpawned=!0,this.enemies.spawnFinalBoss(g))}this.world.update(e,r),this.enemies.update(e,r),this.fences.update(e,r,this.player.x),this.boxes.update(e,r),this.player.update(e,t),t.regen&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*t.regen*e)),t.shieldRegen&&(t.noHitTime+=e,t.noHitTime>=10&&(t.shield=Math.max(t.shield,t.maxHp*.5)));const a=this.enemies.active;this.projectiles.tryAutoFire(e,t,this.player.x,a)&&this.player.triggerThrow(t.bananaAS),this.projectiles.update(e),this.poops.accumulate(e),t.poopUnlocked&&t.poopStored>0&&a.length>0&&this.poops.tryFire(this.player.x,0,a);const l=this.poops.update(e,a,this.player.x);for(const d of l)this._applyPoopHit(d.enemy,d.proj,d.mul,d.rangeT);const c=this.projectiles.checkHits(a);for(const{proj:d,enemy:f}of c){vt("bananaHit");const{physical:g,fixed:v,total:p,isCrit:m}=gi.calcHitDamage(d,f,t);g>0&&this.ui.showDamage(Math.round(g),m,f.mesh.position,"physical"),v>0&&this.ui.showDamage(Math.round(v),!1,f.mesh.position,"fixed"),f.takeDamage(p)&&this._killEnemy(f,"banana")}this.boxes.checkPickup(this.player.x);const u=this.enemies.checkMobCollision(this.player.x);u&&this._collideEnemy(u);const h=this.enemies.checkBossCollision();if(h&&this._collideEnemy(h),this._updatePets(e,a),this.petVisuals.update(e,t,this.player.x,a),this._distance>=_s+100&&!this.enemies.finalBossAlive()){this._endGame(!0);return}this.ui.update(t,this._distance,_s),this.ui.updateEnemyHpLabels(a,this.camera,this.canvas.parentElement)}_spawnMobs(e,t,n,s=Ss){for(let r=0;r<t;r++){const a=t===1?Math.random()<.5?"left":"right":r%2===0?"left":"right",o=DM(e,n+r),l=Ul(e);this.enemies.spawnMob(a,o,l,e,s+r*1.35)}}_applyPoopHit(e,t,n,s=0){var d;if(!e.active)return;vt("poopHit");const r=this.gs;r.poopCount=(r.poopCount||0)+1;const a=e.type==="final"||e.type==="boss"||e.type==="mini";let o=r.poopDamage*r.poopDamageMul*n*(a?r.poopBossMul:1)*r.allDamage;o*=gi.rangeDamageMul(r,s);const l=r.poopEveryN,c=((d=r.synergyLevels)==null?void 0:d.poopOnHit)||0,u=c>=2&&c<4?1.15:1;if(l&&r.poopCount%l.n===0){const f=a&&c<4?l.bossPct??l.pct*.5:l.pct;o+=e.maxHp*f*n*u}r.poopExplodePct&&Math.random()<.12&&(o+=e.maxHp*r.poopExplodePct*n*u),r.poopArmorDebuffPerHit&&(e.debuffArmorPct=(e.debuffArmorPct||0)+r.poopArmorDebuffPerHit*n*u),this.ui.showDamage(Math.round(o),!1,e.mesh.position,"fixed");let h=e.takeDamage(o);if(!h&&r.poopPhysicalOnHit){const{dmg:f}=gi.physicalDamage(r.poopPhysicalOnHit*n*u,e,r,{rangeT:s});this.ui.showDamage(Math.round(f),!1,e.mesh.position,"physical"),h=e.takeDamage(f)}h&&this._killEnemy(e,"poop")}_collideEnemy(e){if(!e.active||e._bodyCollided)return;e._bodyCollided=!0;const t=this.gs;let n=Math.max(0,Math.ceil(e.hp));if(t.shield>0){const r=Math.min(t.shield,n);t.shield-=r,n-=r}n>0&&(t.hp=Math.max(0,t.hp-n),t.noHitTime=0,vt("hurt"));const s=t.hp>0||t.deathSave;if(t.hp<=0)if(t.deathSave)t.deathSave=!1,t.hp=1,this.ui.showFloatText("한 대만 버팀!","#ff77ff");else{e.deactivate(),this._endGame(!1);return}s?(this.ui.showFloatText("몸빵 처치!","#ff9b42"),this._killEnemy(e,"body")):e.deactivate()}_killEnemy(e,t){if(!e.active)return;const n=this.gs;if(e.deactivate(),vt("kill"),n.kills=(n.kills||0)+1,n.killAS&&(n.bananaAS=Math.min(n.bananaASCap||7,n.bananaAS*(1+.001*(n.bananaASGainMul||1)))),n.killBananaDamage&&(n.bananaDamage+=n.killBananaDamage),n.hpOn10Kills&&n.kills%10===0&&Mc(n,50),n.poopKillRefund&&t==="poop"){const s=n.poopStored;n.poopStored=Math.min(n.poopStored+10,n.poopMax),n.poopStored>s&&vt("poopCharge")}if(n.score+=e.type==="final"?5e3:e.type==="boss"?2e3:e.type==="mini"?500:50,e.type==="final")this._endGame(!0);else if(e.type==="mob")this.boxes.trySpawn(e.mesh.position,1);else{const s=setTimeout(()=>{this._augmentTimers=this._augmentTimers.filter(r=>r!==s),!(!this.gs||this._over||this.gs.phase!=="running")&&this.augments.trigger()},250);this._augmentTimers.push(s)}}_updatePets(e,t){const n=this.gs;if(n.bat>0)for(const s of t){if(!s.active||s._batQueued||s._batHit)continue;s._batQueued=!0;const r=.1*(n.petEffectMul||1);this.petVisuals.triggerBat(s,a=>{if(!(a!=null&&a.active)||a._batHit)return;a._batHit=!0;const o=a.maxHp*r;vt("bananaHit"),this.ui.showDamage(Math.round(o),!1,a.mesh.position,"fixed");const l=a.takeDamage(o);a._batLanded=!0,l&&this._killEnemy(a,"pet")},a=>{var o,l;a!=null&&a._batLanded&&(n.hp=Math.min(n.maxHp,n.hp+n.maxHp*r),(l=(o=this.player)._updateHpLabel)==null||l.call(o,n.hp),this.ui.showFloatText(`박쥐 흡혈 +${Math.round(n.maxHp*r)}`,"#b062ff"))})}if(n.llama>0&&(n.llamaTimer=(n.llamaTimer||0)-e,n.llamaTimer<=0)){n.llamaTimer+=.9/Math.max(1,n.llama);const s=t.find(r=>r.active&&(r._llamaHits||0)<3);if(s){s._llamaHits=(s._llamaHits||0)+1;const r=s.maxHp*.03;s.debuffArmorPct=(s.debuffArmorPct||0)+.05*(n.petEffectMul||1),this.ui.showFloatText(`🦙 ${Math.round(r)}`,"#abff62"),this.petVisuals.triggerLlama(s),s.takeDamage(r)&&this._killEnemy(s,"pet")}}}_earnDia(e){this.gs&&(this.gs.earnedDia=(this.gs.earnedDia||0)+e)}_showPlayerFloat(e,t="#ffffff"){var s,r,a,o;const n=(o=(a=(r=(s=this.player)==null?void 0:s.root)==null?void 0:r.position)==null?void 0:a.clone)==null?void 0:o.call(a);n&&(n.y+=1.55,n.z+=.25),this.ui.showFloatText(e,t,n||null)}_endGame(e){if(this._over)return;this._over=!0,vt(e?"clear":"gameover");const t=this.gs,n=ys();if(n){let s=e?100:Math.max(3,Math.floor(this._distance/_s*90));s+=Math.floor(t.earnedDia||0),n.diamond=(n.diamond||0)+s,n.bestScore=Math.max(n.bestScore||0,t.score),Ar(),window.dispatchEvent(new CustomEvent("game:profile-save",{detail:{reason:"game-end"}})),this.ui.showGameOver(e,t.score,s,Math.round(this._distance/_s*100))}t.phase="dead"}}const DS=()=>{};var dd={};/**
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
 */const ip=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let s=i.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},NS=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const s=i[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=i[t++];e[n++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=i[t++],a=i[t++],o=i[t++],l=((s&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const r=i[t++],a=i[t++];e[n++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<i.length;s+=3){const r=i[s],a=s+1<i.length,o=a?i[s+1]:0,l=s+2<i.length,c=l?i[s+2]:0,u=r>>2,h=(r&3)<<4|o>>4;let d=(o&15)<<2|c>>6,f=c&63;l||(f=64,a||(d=64)),n.push(t[u],t[h],t[d],t[f])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ip(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):NS(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<i.length;){const r=t[i.charAt(s++)],o=s<i.length?t[i.charAt(s)]:0;++s;const c=s<i.length?t[i.charAt(s)]:64;++s;const h=s<i.length?t[i.charAt(s)]:64;if(++s,r==null||o==null||c==null||h==null)throw new US;const d=r<<2|o>>4;if(n.push(d),c!==64){const f=o<<4&240|c>>2;if(n.push(f),h!==64){const g=c<<6&192|h;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class US extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OS=function(i){const e=ip(i);return sp.encodeByteArray(e,!0)},Da=function(i){return OS(i).replace(/\./g,"")},FS=function(i){try{return sp.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kS=()=>BS().__FIREBASE_DEFAULTS__,VS=()=>{if(typeof process>"u"||typeof dd>"u")return;const i=dd.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zS=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&FS(i[1]);return e&&JSON.parse(e)},rp=()=>{try{return DS()||kS()||VS()||zS()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},HS=i=>{var e,t;return(t=(e=rp())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},GS=i=>{const e=HS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},ap=()=>{var i;return(i=rp())==null?void 0:i.config};/**
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
 */class WS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function XS(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=i.iat||0,r=i.sub||i.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Da(JSON.stringify(t)),Da(JSON.stringify(a)),""].join(".")}function qS(){try{return typeof indexedDB=="object"}catch{return!1}}function $S(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const jS="FirebaseError";class qs extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=jS,Object.setPrototypeOf(this,qs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,op.prototype.create)}}class op{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?KS(r,n):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new qs(s,o,n)}}function KS(i,e){return i.replace(YS,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const YS=/\{\$([^}]+)}/g;function Na(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const r=i[s],a=e[s];if(fd(r)&&fd(a)){if(!Na(r,a))return!1}else if(r!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function fd(i){return i!==null&&typeof i=="object"}/**
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
 */function Fs(i){return i&&i._delegate?i._delegate:i}/**
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
 */function lp(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function JS(i){return(await fetch(i,{credentials:"include"})).ok}class wr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class ZS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new WS;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eb(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});n.resolve(r)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);n===o&&a.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const r=this.instances.get(n);return r&&e(r,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:QS(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QS(i){return i===Ui?void 0:i}function eb(i){return i.instantiationMode==="EAGER"}/**
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
 */class tb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ZS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var tt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(tt||(tt={}));const nb={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},ib=tt.INFO,sb={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},rb=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),s=sb[e];if(s)console[s](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cp{constructor(e){this.name=e,this._logLevel=ib,this._logHandler=rb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in tt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...e),this._logHandler(this,tt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...e),this._logHandler(this,tt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...e),this._logHandler(this,tt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...e),this._logHandler(this,tt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...e),this._logHandler(this,tt.ERROR,...e)}}const ab=(i,e)=>e.some(t=>i instanceof t);let pd,md;function ob(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lb(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,Vl=new WeakMap,hp=new WeakMap,ll=new WeakMap,bc=new WeakMap;function cb(i){const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("success",r),i.removeEventListener("error",a)},r=()=>{t(xi(i.result)),s()},a=()=>{n(i.error),s()};i.addEventListener("success",r),i.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&up.set(t,i)}).catch(()=>{}),bc.set(e,i),e}function ub(i){if(Vl.has(i))return;const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("complete",r),i.removeEventListener("error",a),i.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{n(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",r),i.addEventListener("error",a),i.addEventListener("abort",a)});Vl.set(i,e)}let zl={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Vl.get(i);if(e==="objectStoreNames")return i.objectStoreNames||hp.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function hb(i){zl=i(zl)}function db(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(cl(this),e,...t);return hp.set(n,e.sort?e.sort():[e]),xi(n)}:lb().includes(i)?function(...e){return i.apply(cl(this),e),xi(up.get(this))}:function(...e){return xi(i.apply(cl(this),e))}}function fb(i){return typeof i=="function"?db(i):(i instanceof IDBTransaction&&ub(i),ab(i,ob())?new Proxy(i,zl):i)}function xi(i){if(i instanceof IDBRequest)return cb(i);if(ll.has(i))return ll.get(i);const e=fb(i);return e!==i&&(ll.set(i,e),bc.set(e,i)),e}const cl=i=>bc.get(i);function pb(i,e,{blocked:t,upgrade:n,blocking:s,terminated:r}={}){const a=indexedDB.open(i,e),o=xi(a);return n&&a.addEventListener("upgradeneeded",l=>{n(xi(a.result),l.oldVersion,l.newVersion,xi(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const mb=["get","getKey","getAll","getAllKeys","count"],gb=["put","add","delete","clear"],ul=new Map;function gd(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=gb.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||mb.includes(t)))return;const r=async function(a,...o){const l=this.transaction(a,s?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(o.shift())),(await Promise.all([c[t](...o),s&&l.done]))[0]};return ul.set(e,r),r}hb(i=>({...i,get:(e,t,n)=>gd(e,t)||i.get(e,t,n),has:(e,t)=>!!gd(e,t)||i.has(e,t)}));/**
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
 */class _b{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vb(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function vb(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hl="@firebase/app",_d="0.14.12";/**
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
 */const ei=new cp("@firebase/app"),yb="@firebase/app-compat",xb="@firebase/analytics-compat",Eb="@firebase/analytics",Mb="@firebase/app-check-compat",Sb="@firebase/app-check",bb="@firebase/auth",Tb="@firebase/auth-compat",Ab="@firebase/database",wb="@firebase/data-connect",Rb="@firebase/database-compat",Cb="@firebase/functions",Pb="@firebase/functions-compat",Lb="@firebase/installations",Ib="@firebase/installations-compat",Db="@firebase/messaging",Nb="@firebase/messaging-compat",Ub="@firebase/performance",Ob="@firebase/performance-compat",Fb="@firebase/remote-config",Bb="@firebase/remote-config-compat",kb="@firebase/storage",Vb="@firebase/storage-compat",zb="@firebase/firestore",Hb="@firebase/ai",Gb="@firebase/firestore-compat",Wb="firebase",Xb="12.13.0";/**
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
 */const Gl="[DEFAULT]",qb={[Hl]:"fire-core",[yb]:"fire-core-compat",[Eb]:"fire-analytics",[xb]:"fire-analytics-compat",[Sb]:"fire-app-check",[Mb]:"fire-app-check-compat",[bb]:"fire-auth",[Tb]:"fire-auth-compat",[Ab]:"fire-rtdb",[wb]:"fire-data-connect",[Rb]:"fire-rtdb-compat",[Cb]:"fire-fn",[Pb]:"fire-fn-compat",[Lb]:"fire-iid",[Ib]:"fire-iid-compat",[Db]:"fire-fcm",[Nb]:"fire-fcm-compat",[Ub]:"fire-perf",[Ob]:"fire-perf-compat",[Fb]:"fire-rc",[Bb]:"fire-rc-compat",[kb]:"fire-gcs",[Vb]:"fire-gcs-compat",[zb]:"fire-fst",[Gb]:"fire-fst-compat",[Hb]:"fire-vertex","fire-js":"fire-js",[Wb]:"fire-js-all"};/**
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
 */const Ua=new Map,$b=new Map,Wl=new Map;function vd(i,e){try{i.container.addComponent(e)}catch(t){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Oa(i){const e=i.name;if(Wl.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;Wl.set(e,i);for(const t of Ua.values())vd(t,i);for(const t of $b.values())vd(t,i);return!0}function jb(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Kb(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new op("app","Firebase",Yb);/**
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
 */class Jb{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
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
 */const Zb=Xb;function dp(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n={name:Gl,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Ei.create("bad-app-name",{appName:String(s)});if(t||(t=ap()),!t)throw Ei.create("no-options");const r=Ua.get(s);if(r){if(Na(t,r.options)&&Na(n,r.config))return r;throw Ei.create("duplicate-app",{appName:s})}const a=new tb(s);for(const l of Wl.values())a.addComponent(l);const o=new Jb(t,n,a);return Ua.set(s,o),o}function Qb(i=Gl){const e=Ua.get(i);if(!e&&i===Gl&&ap())return dp();if(!e)throw Ei.create("no-app",{appName:i});return e}function Rs(i,e,t){let n=qb[i]??i;t&&(n+=`-${t}`);const s=n.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&r&&a.push("and"),r&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(a.join(" "));return}Oa(new wr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",tT=1,Rr="firebase-heartbeat-store";let hl=null;function fp(){return hl||(hl=pb(eT,tT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Rr)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ei.create("idb-open",{originalErrorMessage:i.message})})),hl}async function nT(i){try{const t=(await fp()).transaction(Rr),n=await t.objectStore(Rr).get(pp(i));return await t.done,n}catch(e){if(e instanceof qs)ei.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ei.warn(t.message)}}}async function yd(i,e){try{const n=(await fp()).transaction(Rr,"readwrite");await n.objectStore(Rr).put(e,pp(i)),await n.done}catch(t){if(t instanceof qs)ei.warn(t.message);else{const n=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ei.warn(n.message)}}}function pp(i){return`${i.name}!${i.options.appId}`}/**
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
 */const iT=1024,sT=30;class rT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oT(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>sT){const a=lT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ei.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xd(),{heartbeatsToSend:n,unsentEntries:s}=aT(this._heartbeatsCache.heartbeats),r=Da(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ei.warn(t),""}}}function xd(){return new Date().toISOString().substring(0,10)}function aT(i,e=iT){const t=[];let n=i.slice();for(const s of i){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Ed(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ed(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class oT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qS()?$S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return yd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ed(i){return Da(JSON.stringify({version:2,heartbeats:i})).length}function lT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
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
 */function cT(i){Oa(new wr("platform-logger",e=>new _b(e),"PRIVATE")),Oa(new wr("heartbeat",e=>new rT(e),"PRIVATE")),Rs(Hl,_d,i),Rs(Hl,_d,"esm2020"),Rs("fire-js","")}cT("");var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mp;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,M){function b(){}b.prototype=M.prototype,x.F=M.prototype,x.prototype=new b,x.prototype.constructor=x,x.D=function(_,y,C){for(var A=Array(arguments.length-2),U=2;U<arguments.length;U++)A[U-2]=arguments[U];return M.prototype[y].apply(_,A)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,M,b){b||(b=0);const _=Array(16);if(typeof M=="string")for(var y=0;y<16;++y)_[y]=M.charCodeAt(b++)|M.charCodeAt(b++)<<8|M.charCodeAt(b++)<<16|M.charCodeAt(b++)<<24;else for(y=0;y<16;++y)_[y]=M[b++]|M[b++]<<8|M[b++]<<16|M[b++]<<24;M=x.g[0],b=x.g[1],y=x.g[2];let C=x.g[3],A;A=M+(C^b&(y^C))+_[0]+3614090360&4294967295,M=b+(A<<7&4294967295|A>>>25),A=C+(y^M&(b^y))+_[1]+3905402710&4294967295,C=M+(A<<12&4294967295|A>>>20),A=y+(b^C&(M^b))+_[2]+606105819&4294967295,y=C+(A<<17&4294967295|A>>>15),A=b+(M^y&(C^M))+_[3]+3250441966&4294967295,b=y+(A<<22&4294967295|A>>>10),A=M+(C^b&(y^C))+_[4]+4118548399&4294967295,M=b+(A<<7&4294967295|A>>>25),A=C+(y^M&(b^y))+_[5]+1200080426&4294967295,C=M+(A<<12&4294967295|A>>>20),A=y+(b^C&(M^b))+_[6]+2821735955&4294967295,y=C+(A<<17&4294967295|A>>>15),A=b+(M^y&(C^M))+_[7]+4249261313&4294967295,b=y+(A<<22&4294967295|A>>>10),A=M+(C^b&(y^C))+_[8]+1770035416&4294967295,M=b+(A<<7&4294967295|A>>>25),A=C+(y^M&(b^y))+_[9]+2336552879&4294967295,C=M+(A<<12&4294967295|A>>>20),A=y+(b^C&(M^b))+_[10]+4294925233&4294967295,y=C+(A<<17&4294967295|A>>>15),A=b+(M^y&(C^M))+_[11]+2304563134&4294967295,b=y+(A<<22&4294967295|A>>>10),A=M+(C^b&(y^C))+_[12]+1804603682&4294967295,M=b+(A<<7&4294967295|A>>>25),A=C+(y^M&(b^y))+_[13]+4254626195&4294967295,C=M+(A<<12&4294967295|A>>>20),A=y+(b^C&(M^b))+_[14]+2792965006&4294967295,y=C+(A<<17&4294967295|A>>>15),A=b+(M^y&(C^M))+_[15]+1236535329&4294967295,b=y+(A<<22&4294967295|A>>>10),A=M+(y^C&(b^y))+_[1]+4129170786&4294967295,M=b+(A<<5&4294967295|A>>>27),A=C+(b^y&(M^b))+_[6]+3225465664&4294967295,C=M+(A<<9&4294967295|A>>>23),A=y+(M^b&(C^M))+_[11]+643717713&4294967295,y=C+(A<<14&4294967295|A>>>18),A=b+(C^M&(y^C))+_[0]+3921069994&4294967295,b=y+(A<<20&4294967295|A>>>12),A=M+(y^C&(b^y))+_[5]+3593408605&4294967295,M=b+(A<<5&4294967295|A>>>27),A=C+(b^y&(M^b))+_[10]+38016083&4294967295,C=M+(A<<9&4294967295|A>>>23),A=y+(M^b&(C^M))+_[15]+3634488961&4294967295,y=C+(A<<14&4294967295|A>>>18),A=b+(C^M&(y^C))+_[4]+3889429448&4294967295,b=y+(A<<20&4294967295|A>>>12),A=M+(y^C&(b^y))+_[9]+568446438&4294967295,M=b+(A<<5&4294967295|A>>>27),A=C+(b^y&(M^b))+_[14]+3275163606&4294967295,C=M+(A<<9&4294967295|A>>>23),A=y+(M^b&(C^M))+_[3]+4107603335&4294967295,y=C+(A<<14&4294967295|A>>>18),A=b+(C^M&(y^C))+_[8]+1163531501&4294967295,b=y+(A<<20&4294967295|A>>>12),A=M+(y^C&(b^y))+_[13]+2850285829&4294967295,M=b+(A<<5&4294967295|A>>>27),A=C+(b^y&(M^b))+_[2]+4243563512&4294967295,C=M+(A<<9&4294967295|A>>>23),A=y+(M^b&(C^M))+_[7]+1735328473&4294967295,y=C+(A<<14&4294967295|A>>>18),A=b+(C^M&(y^C))+_[12]+2368359562&4294967295,b=y+(A<<20&4294967295|A>>>12),A=M+(b^y^C)+_[5]+4294588738&4294967295,M=b+(A<<4&4294967295|A>>>28),A=C+(M^b^y)+_[8]+2272392833&4294967295,C=M+(A<<11&4294967295|A>>>21),A=y+(C^M^b)+_[11]+1839030562&4294967295,y=C+(A<<16&4294967295|A>>>16),A=b+(y^C^M)+_[14]+4259657740&4294967295,b=y+(A<<23&4294967295|A>>>9),A=M+(b^y^C)+_[1]+2763975236&4294967295,M=b+(A<<4&4294967295|A>>>28),A=C+(M^b^y)+_[4]+1272893353&4294967295,C=M+(A<<11&4294967295|A>>>21),A=y+(C^M^b)+_[7]+4139469664&4294967295,y=C+(A<<16&4294967295|A>>>16),A=b+(y^C^M)+_[10]+3200236656&4294967295,b=y+(A<<23&4294967295|A>>>9),A=M+(b^y^C)+_[13]+681279174&4294967295,M=b+(A<<4&4294967295|A>>>28),A=C+(M^b^y)+_[0]+3936430074&4294967295,C=M+(A<<11&4294967295|A>>>21),A=y+(C^M^b)+_[3]+3572445317&4294967295,y=C+(A<<16&4294967295|A>>>16),A=b+(y^C^M)+_[6]+76029189&4294967295,b=y+(A<<23&4294967295|A>>>9),A=M+(b^y^C)+_[9]+3654602809&4294967295,M=b+(A<<4&4294967295|A>>>28),A=C+(M^b^y)+_[12]+3873151461&4294967295,C=M+(A<<11&4294967295|A>>>21),A=y+(C^M^b)+_[15]+530742520&4294967295,y=C+(A<<16&4294967295|A>>>16),A=b+(y^C^M)+_[2]+3299628645&4294967295,b=y+(A<<23&4294967295|A>>>9),A=M+(y^(b|~C))+_[0]+4096336452&4294967295,M=b+(A<<6&4294967295|A>>>26),A=C+(b^(M|~y))+_[7]+1126891415&4294967295,C=M+(A<<10&4294967295|A>>>22),A=y+(M^(C|~b))+_[14]+2878612391&4294967295,y=C+(A<<15&4294967295|A>>>17),A=b+(C^(y|~M))+_[5]+4237533241&4294967295,b=y+(A<<21&4294967295|A>>>11),A=M+(y^(b|~C))+_[12]+1700485571&4294967295,M=b+(A<<6&4294967295|A>>>26),A=C+(b^(M|~y))+_[3]+2399980690&4294967295,C=M+(A<<10&4294967295|A>>>22),A=y+(M^(C|~b))+_[10]+4293915773&4294967295,y=C+(A<<15&4294967295|A>>>17),A=b+(C^(y|~M))+_[1]+2240044497&4294967295,b=y+(A<<21&4294967295|A>>>11),A=M+(y^(b|~C))+_[8]+1873313359&4294967295,M=b+(A<<6&4294967295|A>>>26),A=C+(b^(M|~y))+_[15]+4264355552&4294967295,C=M+(A<<10&4294967295|A>>>22),A=y+(M^(C|~b))+_[6]+2734768916&4294967295,y=C+(A<<15&4294967295|A>>>17),A=b+(C^(y|~M))+_[13]+1309151649&4294967295,b=y+(A<<21&4294967295|A>>>11),A=M+(y^(b|~C))+_[4]+4149444226&4294967295,M=b+(A<<6&4294967295|A>>>26),A=C+(b^(M|~y))+_[11]+3174756917&4294967295,C=M+(A<<10&4294967295|A>>>22),A=y+(M^(C|~b))+_[2]+718787259&4294967295,y=C+(A<<15&4294967295|A>>>17),A=b+(C^(y|~M))+_[9]+3951481745&4294967295,x.g[0]=x.g[0]+M&4294967295,x.g[1]=x.g[1]+(y+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+y&4294967295,x.g[3]=x.g[3]+C&4294967295}n.prototype.v=function(x,M){M===void 0&&(M=x.length);const b=M-this.blockSize,_=this.C;let y=this.h,C=0;for(;C<M;){if(y==0)for(;C<=b;)s(this,x,C),C+=this.blockSize;if(typeof x=="string"){for(;C<M;)if(_[y++]=x.charCodeAt(C++),y==this.blockSize){s(this,_),y=0;break}}else for(;C<M;)if(_[y++]=x[C++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=M},n.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var M=1;M<x.length-8;++M)x[M]=0;M=this.o*8;for(var b=x.length-8;b<x.length;++b)x[b]=M&255,M/=256;for(this.v(x),x=Array(16),M=0,b=0;b<4;++b)for(let _=0;_<32;_+=8)x[M++]=this.g[b]>>>_&255;return x};function r(x,M){var b=o;return Object.prototype.hasOwnProperty.call(b,x)?b[x]:b[x]=M(x)}function a(x,M){this.h=M;const b=[];let _=!0;for(let y=x.length-1;y>=0;y--){const C=x[y]|0;_&&C==M||(b[y]=C,_=!1)}this.g=b}var o={};function l(x){return-128<=x&&x<128?r(x,function(M){return new a([M|0],M<0?-1:0)}):new a([x|0],x<0?-1:0)}function c(x){if(isNaN(x)||!isFinite(x))return h;if(x<0)return p(c(-x));const M=[];let b=1;for(let _=0;x>=b;_++)M[_]=x/b|0,b*=4294967296;return new a(M,0)}function u(x,M){if(x.length==0)throw Error("number format error: empty string");if(M=M||10,M<2||36<M)throw Error("radix out of range: "+M);if(x.charAt(0)=="-")return p(u(x.substring(1),M));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=c(Math.pow(M,8));let _=h;for(let C=0;C<x.length;C+=8){var y=Math.min(8,x.length-C);const A=parseInt(x.substring(C,C+y),M);y<8?(y=c(Math.pow(M,y)),_=_.j(y).add(c(A))):(_=_.j(b),_=_.add(c(A)))}return _}var h=l(0),d=l(1),f=l(16777216);i=a.prototype,i.m=function(){if(v(this))return-p(this).m();let x=0,M=1;for(let b=0;b<this.g.length;b++){const _=this.i(b);x+=(_>=0?_:4294967296+_)*M,M*=4294967296}return x},i.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(g(this))return"0";if(v(this))return"-"+p(this).toString(x);const M=c(Math.pow(x,6));var b=this;let _="";for(;;){const y=w(b,M).g;b=m(b,y.j(M));let C=((b.g.length>0?b.g[0]:b.h)>>>0).toString(x);if(b=y,g(b))return C+_;for(;C.length<6;)C="0"+C;_=C+_}},i.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function g(x){if(x.h!=0)return!1;for(let M=0;M<x.g.length;M++)if(x.g[M]!=0)return!1;return!0}function v(x){return x.h==-1}i.l=function(x){return x=m(this,x),v(x)?-1:g(x)?0:1};function p(x){const M=x.g.length,b=[];for(let _=0;_<M;_++)b[_]=~x.g[_];return new a(b,~x.h).add(d)}i.abs=function(){return v(this)?p(this):this},i.add=function(x){const M=Math.max(this.g.length,x.g.length),b=[];let _=0;for(let y=0;y<=M;y++){let C=_+(this.i(y)&65535)+(x.i(y)&65535),A=(C>>>16)+(this.i(y)>>>16)+(x.i(y)>>>16);_=A>>>16,C&=65535,A&=65535,b[y]=A<<16|C}return new a(b,b[b.length-1]&-2147483648?-1:0)};function m(x,M){return x.add(p(M))}i.j=function(x){if(g(this)||g(x))return h;if(v(this))return v(x)?p(this).j(p(x)):p(p(this).j(x));if(v(x))return p(this.j(p(x)));if(this.l(f)<0&&x.l(f)<0)return c(this.m()*x.m());const M=this.g.length+x.g.length,b=[];for(var _=0;_<2*M;_++)b[_]=0;for(_=0;_<this.g.length;_++)for(let y=0;y<x.g.length;y++){const C=this.i(_)>>>16,A=this.i(_)&65535,U=x.i(y)>>>16,z=x.i(y)&65535;b[2*_+2*y]+=A*z,S(b,2*_+2*y),b[2*_+2*y+1]+=C*z,S(b,2*_+2*y+1),b[2*_+2*y+1]+=A*U,S(b,2*_+2*y+1),b[2*_+2*y+2]+=C*U,S(b,2*_+2*y+2)}for(x=0;x<M;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=M;x<2*M;x++)b[x]=0;return new a(b,0)};function S(x,M){for(;(x[M]&65535)!=x[M];)x[M+1]+=x[M]>>>16,x[M]&=65535,M++}function E(x,M){this.g=x,this.h=M}function w(x,M){if(g(M))throw Error("division by zero");if(g(x))return new E(h,h);if(v(x))return M=w(p(x),M),new E(p(M.g),p(M.h));if(v(M))return M=w(x,p(M)),new E(p(M.g),M.h);if(x.g.length>30){if(v(x)||v(M))throw Error("slowDivide_ only works with positive integers.");for(var b=d,_=M;_.l(x)<=0;)b=N(b),_=N(_);var y=L(b,1),C=L(_,1);for(_=L(_,2),b=L(b,2);!g(_);){var A=C.add(_);A.l(x)<=0&&(y=y.add(b),C=A),_=L(_,1),b=L(b,1)}return M=m(x,y.j(M)),new E(y,M)}for(y=h;x.l(M)>=0;){for(b=Math.max(1,Math.floor(x.m()/M.m())),_=Math.ceil(Math.log(b)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),C=c(b),A=C.j(M);v(A)||A.l(x)>0;)b-=_,C=c(b),A=C.j(M);g(C)&&(C=d),y=y.add(C),x=m(x,A)}return new E(y,x)}i.B=function(x){return w(this,x).h},i.and=function(x){const M=Math.max(this.g.length,x.g.length),b=[];for(let _=0;_<M;_++)b[_]=this.i(_)&x.i(_);return new a(b,this.h&x.h)},i.or=function(x){const M=Math.max(this.g.length,x.g.length),b=[];for(let _=0;_<M;_++)b[_]=this.i(_)|x.i(_);return new a(b,this.h|x.h)},i.xor=function(x){const M=Math.max(this.g.length,x.g.length),b=[];for(let _=0;_<M;_++)b[_]=this.i(_)^x.i(_);return new a(b,this.h^x.h)};function N(x){const M=x.g.length+1,b=[];for(let _=0;_<M;_++)b[_]=x.i(_)<<1|x.i(_-1)>>>31;return new a(b,x.h)}function L(x,M){const b=M>>5;M%=32;const _=x.g.length-b,y=[];for(let C=0;C<_;C++)y[C]=M>0?x.i(C+b)>>>M|x.i(C+b+1)<<32-M:x.i(C+b);return new a(y,x.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=c,a.fromString=u,mp=a}).apply(typeof Md<"u"?Md:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
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
 */let $s="12.13.0";function uT(i){$s=i}/**
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
 */const Bs=new cp("@firebase/firestore");function Fa(i,...e){if(Bs.logLevel<=tt.DEBUG){const t=e.map(Ac);Bs.debug(`Firestore (${$s}): ${i}`,...t)}}function Tc(i,...e){if(Bs.logLevel<=tt.ERROR){const t=e.map(Ac);Bs.error(`Firestore (${$s}): ${i}`,...t)}}function gp(i,...e){if(Bs.logLevel<=tt.WARN){const t=e.map(Ac);Bs.warn(`Firestore (${$s}): ${i}`,...t)}}function Ac(i){if(typeof i=="string")return i;try{return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function gt(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,_p(i,n,t)}function _p(i,e,t){let n=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Tc(n),new Error(n)}function un(i,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,i||_p(e,s,n)}function Fr(i,e){return i}/**
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
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class me extends qs{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tn.UNAUTHENTICATED))}shutdown(){}}class dT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fT{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(un(typeof e.accessToken=="string",42297,{t:e}),new vp(e.accessToken,new tn(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class pT{constructor(e,t,n){this.i=e,this.o=t,this.u=n,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.l=new Map}h(){return this.u?this.u():null}get headers(){this.l.set("X-Goog-AuthUser",this.i);const e=this.h();return e&&this.l.set("Authorization",e),this.o&&this.l.set("X-Goog-Iam-Authorization-Token",this.o),this.l}}class mT{constructor(e,t,n){this.i=e,this.o=t,this.u=n}getToken(){return Promise.resolve(new pT(this.i,this.o,this.u))}start(e,t){e.enqueueRetryable(()=>t(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gT{constructor(e,t){this.m=t,this.appCheck=null,this.P=null,Kb(e)&&e.settings.appCheckToken&&(this.P=e.settings.appCheckToken),t.onInit(n=>{this.appCheck=n})}getToken(){return this.P?Promise.resolve(new Sd(this.P)):this.appCheck?this.appCheck.getToken().then(e=>e?(un(typeof e.token=="string",3470,{tokenResult:e}),new Sd(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class _T{constructor(e,t,n,s,r,a,o,l,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=h}}const Xl="(default)";class Cr{constructor(e,t){this.projectId=e,this.database=t||Xl}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database===Xl}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}function vT(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new me(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(i.options.projectId,e)}/**
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
 */function yT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class xT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=yT(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<t&&(n+=e.charAt(s[r]%62))}return n}}function bt(i,e){return i<e?-1:i>e?1:0}function ql(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++){const s=i.charAt(n),r=e.charAt(n);if(s!==r)return dl(s)===dl(r)?bt(s,r):dl(s)?1:-1}return bt(i.length,e.length)}const ET=55296,MT=57343;function dl(i){const e=i.charCodeAt(0);return e>=ET&&e<=MT}function yp(i,e,t){return i.length===e.length&&i.every((n,s)=>t(n,e[s]))}/**
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
 */const bd="__name__";class In{constructor(e,t,n){t===void 0?t=0:t>e.length&&gt(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&gt(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return In.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof In?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const r=In.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return bt(e.length,t.length)}static compareSegments(e,t){const n=In.isNumericId(e),s=In.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?In.extractNumericId(e).compare(In.extractNumericId(t)):ql(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mp.fromString(e.substring(4,e.length-2))}}class xt extends In{construct(e,t,n){return new xt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new me(se.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new xt(t)}static emptyPath(){return new xt([])}}const ST=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends In{construct(e,t,n){return new nn(e,t,n)}static isValidIdentifier(e){return ST.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bd}static keyField(){return new nn([bd])}static fromServerFormat(e){const t=[];let n="",s=0;const r=()=>{if(n.length===0)throw new me(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new me(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new me(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(n+=o,s++):(r(),s++)}if(r(),a)throw new me(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(t)}static emptyPath(){return new nn([])}}/**
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
 */class Ut{constructor(e){this.path=e}static fromPath(e){return new Ut(xt.fromString(e))}static fromName(e){return new Ut(xt.fromString(e).popFirst(5))}static empty(){return new Ut(xt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ut(new xt(e.slice()))}}/**
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
 */function xp(i,e,t){if(!t)throw new me(se.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function Td(i){if(!Ut.isDocumentKey(i))throw new me(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ad(i){if(Ut.isDocumentKey(i))throw new me(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ep(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function to(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":gt(12329,{type:typeof i})}function no(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new me(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=to(i);throw new me(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}function bT(i,e){if(e<=0)throw new me(se.INVALID_ARGUMENT,`Function ${i}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Mp(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */let xa=null;function TT(){return xa===null?xa=function(){return 268435456+Math.round(2147483648*Math.random())}():xa++,"0x"+xa.toString(16)}/**
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
 */function AT(i){return i==null}function Ba(i){return i===0&&1/i==-1/0}/**
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
 */const fl="RestConnection",wT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class RT{get T(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.R=t+"://"+e.host,this.V=`projects/${n}/databases/${s}`,this.A=this.databaseId.database===Xl?`project_id=${n}`:`project_id=${n}&database_id=${s}`}I(e,t,n,s,r){const a=TT(),o=this.p(e,t.toUriEncodedString());Fa(fl,`Sending RPC '${e}' ${a}:`,o,n);const l={"google-cloud-resource-prefix":this.V,"x-goog-request-params":this.A};this.F(l,s,r);const{host:c}=new URL(o),u=lp(c);return this.v(e,o,l,n,u).then(h=>(Fa(fl,`Received RPC '${e}' ${a}: `,h),h),h=>{throw gp(fl,`RPC '${e}' ${a} failed with error: `,h,"url: ",o,"request:",n),h})}D(e,t,n,s,r,a){return this.I(e,t,n,s,r)}F(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),n&&n.headers.forEach((s,r)=>e[r]=s)}p(e,t){const n=wT[e];let s=`${this.R}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */var wd,Xe;function Rd(i){if(i===void 0)return Tc("RPC_ERROR","HTTP error has no status"),se.UNKNOWN;switch(i){case 200:return se.OK;case 400:return se.FAILED_PRECONDITION;case 401:return se.UNAUTHENTICATED;case 403:return se.PERMISSION_DENIED;case 404:return se.NOT_FOUND;case 409:return se.ABORTED;case 416:return se.OUT_OF_RANGE;case 429:return se.RESOURCE_EXHAUSTED;case 499:return se.CANCELLED;case 500:return se.UNKNOWN;case 501:return se.UNIMPLEMENTED;case 503:return se.UNAVAILABLE;case 504:return se.DEADLINE_EXCEEDED;default:return i>=200&&i<300?se.OK:i>=400&&i<500?se.FAILED_PRECONDITION:i>=500&&i<600?se.INTERNAL:se.UNKNOWN}}/**
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
 */(Xe=wd||(wd={}))[Xe.OK=0]="OK",Xe[Xe.CANCELLED=1]="CANCELLED",Xe[Xe.UNKNOWN=2]="UNKNOWN",Xe[Xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xe[Xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xe[Xe.NOT_FOUND=5]="NOT_FOUND",Xe[Xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xe[Xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xe[Xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xe[Xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xe[Xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xe[Xe.ABORTED=10]="ABORTED",Xe[Xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xe[Xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xe[Xe.INTERNAL=13]="INTERNAL",Xe[Xe.UNAVAILABLE=14]="UNAVAILABLE",Xe[Xe.DATA_LOSS=15]="DATA_LOSS";class CT extends RT{S(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,s,r){var l;const a=JSON.stringify(s);let o;try{const c={method:"POST",headers:n,body:a};r&&(c.credentials="include"),o=await fetch(t,c)}catch(c){const u=c;throw new me(Rd(u.status),"Request failed with error: "+u.statusText)}if(!o.ok){let c=await o.json();Array.isArray(c)&&(c=c[0]);const u=(l=c==null?void 0:c.error)==null?void 0:l.message;throw new me(Rd(o.status),`Request failed with error: ${u??o.statusText}`)}return o.json()}}/**
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
 */function Cd(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function io(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}/**
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
 */class PT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ti{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new PT("Invalid base64 string: "+r):r}}(e);return new ti(t)}static fromUint8Array(e){const t=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(e);return new ti(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return bt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ti.EMPTY_BYTE_STRING=new ti("");const LT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $i(i){if(un(!!i,39018),typeof i=="string"){let e=0;const t=LT.exec(i);if(un(!!t,46558,{timestamp:i}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Tt(i.seconds),nanos:Tt(i.nanos)}}function Tt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Pr(i){return typeof i=="string"?ti.fromBase64String(i):ti.fromUint8Array(i)}/**
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
 */function xn(i,e){const t={typeString:i};return e&&(t.value=e),t}function Br(i,e){if(!Ep(i))throw new me(se.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,r="value"in e[n]?{value:e[n].value}:void 0;if(!(n in i)){t=`JSON missing required field: '${n}'`;break}const a=i[n];if(s&&typeof a!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){t=`Expected '${n}' field to equal '${r.value}'`;break}}if(t)throw new me(se.INVALID_ARGUMENT,t);return!0}/**
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
 */const Pd=-62135596800,Ld=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Ld);return new wt(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pd)throw new me(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ld}_compareTo(e){return this.seconds===e.seconds?bt(this.nanoseconds,e.nanoseconds):bt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Br(e,wt._jsonSchema))return new wt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:xn("string",wt._jsonSchemaVersion),seconds:xn("number"),nanoseconds:xn("number")};function Sp(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{}).__type__)==null?void 0:n.stringValue)==="server_timestamp"}function bp(i){const e=i.mapValue.fields.__previous_value__;return Sp(e)?bp(e):e}function Lr(i){const e=$i(i.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
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
 */const Tp="__type__",IT="__max__",Ea={},Ap="__vector__",ka="value";function ji(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Sp(i)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===IT}(i)?9007199254740991:function(t){var s,r;return((r=(((s=t==null?void 0:t.mapValue)==null?void 0:s.fields)||{})[Tp])==null?void 0:r.stringValue)===Ap}(i)?10:11:gt(28295,{value:i})}function Va(i,e){if(i===e)return!0;const t=ji(i);if(t!==ji(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Lr(i).isEqual(Lr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=$i(s.timestampValue),o=$i(r.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(s,r){return Pr(s.bytesValue).isEqual(Pr(r.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(s,r){return Tt(s.geoPointValue.latitude)===Tt(r.geoPointValue.latitude)&&Tt(s.geoPointValue.longitude)===Tt(r.geoPointValue.longitude)}(i,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Tt(s.integerValue)===Tt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=Tt(s.doubleValue),o=Tt(r.doubleValue);return a===o?Ba(a)===Ba(o):isNaN(a)&&isNaN(o)}return!1}(i,e);case 9:return yp(i.arrayValue.values||[],e.arrayValue.values||[],Va);case 10:case 11:return function(s,r){const a=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Cd(a)!==Cd(o))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(o[l]===void 0||!Va(a[l],o[l])))return!1;return!0}(i,e);default:return gt(52216,{left:i})}}function Ir(i,e){return(i.values||[]).find(t=>Va(t,e))!==void 0}function za(i,e){if(i===e)return 0;const t=ji(i),n=ji(e);if(t!==n)return bt(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return bt(i.booleanValue,e.booleanValue);case 2:return function(r,a){const o=Tt(r.integerValue||r.doubleValue),l=Tt(a.integerValue||a.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(i,e);case 3:return Id(i.timestampValue,e.timestampValue);case 4:return Id(Lr(i),Lr(e));case 5:return ql(i.stringValue,e.stringValue);case 6:return function(r,a){const o=Pr(r),l=Pr(a);return o.compareTo(l)}(i.bytesValue,e.bytesValue);case 7:return function(r,a){const o=r.split("/"),l=a.split("/");for(let c=0;c<o.length&&c<l.length;c++){const u=bt(o[c],l[c]);if(u!==0)return u}return bt(o.length,l.length)}(i.referenceValue,e.referenceValue);case 8:return function(r,a){const o=bt(Tt(r.latitude),Tt(a.latitude));return o!==0?o:bt(Tt(r.longitude),Tt(a.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Dd(i.arrayValue,e.arrayValue);case 10:return function(r,a){var d,f,g,v;const o=r.fields||{},l=a.fields||{},c=(d=o[ka])==null?void 0:d.arrayValue,u=(f=l[ka])==null?void 0:f.arrayValue,h=bt(((g=c==null?void 0:c.values)==null?void 0:g.length)||0,((v=u==null?void 0:u.values)==null?void 0:v.length)||0);return h!==0?h:Dd(c,u)}(i.mapValue,e.mapValue);case 11:return function(r,a){if(r===Ea&&a===Ea)return 0;if(r===Ea)return 1;if(a===Ea)return-1;const o=r.fields||{},l=Object.keys(o),c=a.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ql(l[h],u[h]);if(d!==0)return d;const f=za(o[l[h]],c[u[h]]);if(f!==0)return f}return bt(l.length,u.length)}(i.mapValue,e.mapValue);default:throw gt(23264,{C:t})}}function Id(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return bt(i,e);const t=$i(i),n=$i(e),s=bt(t.seconds,n.seconds);return s!==0?s:bt(t.nanos,n.nanos)}function Dd(i,e){const t=i.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const r=za(t[s],n[s]);if(r)return r}return bt(t.length,n.length)}function Nd(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function wp(i){return!!i&&"arrayValue"in i}function Ud(i){return!!i&&"nullValue"in i}function Od(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function pl(i){return!!i&&"mapValue"in i}function gr(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return io(i.mapValue.fields,(t,n)=>e.mapValue.fields[t]=gr(n)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gr(i.arrayValue.values[t]);return e}return{...i}}class Fd{constructor(e,t){this.position=e,this.inclusive=t}}/**
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
 */class Rp{}class Cn extends Rp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new DT(e,t,n):t==="array-contains"?new OT(e,n):t==="in"?new FT(e,n):t==="not-in"?new BT(e,n):t==="array-contains-any"?new kT(e,n):new Cn(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new NT(e,n):new UT(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(za(t,this.value)):t!==null&&ji(this.value)===ji(t)&&this.matchesComparison(za(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return gt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kr extends Rp{constructor(e,t){super(),this.filters=e,this.op=t,this.N=null}static create(e,t){return new kr(e,t)}matches(e){return function(n){return n.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.N!==null||(this.N=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.N}getFilters(){return Object.assign([],this.filters)}}class DT extends Cn{constructor(e,t,n){super(e,t,n),this.key=Ut.fromName(n.referenceValue)}matches(e){const t=Ut.comparator(e.key,this.key);return this.matchesComparison(t)}}class NT extends Cn{constructor(e,t){super(e,"in",t),this.keys=Cp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class UT extends Cn{constructor(e,t){super(e,"not-in",t),this.keys=Cp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cp(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>Ut.fromName(n.referenceValue))}class OT extends Cn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wp(t)&&Ir(t.arrayValue,this.value)}}class FT extends Cn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ir(this.value.arrayValue,t)}}class BT extends Cn{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ir(this.value.arrayValue,t)}}class kT extends Cn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ir(this.value.arrayValue,n))}}/**
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
 */class Ha{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class zt{static fromTimestamp(e){return new zt(e)}static min(){return new zt(new wt(0,0))}static max(){return new zt(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ga{constructor(e,t){this.comparator=e,this.root=t||Ht.EMPTY}insert(e,t){return new Ga(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Ga(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=n??Ht.RED,this.left=s??Ht.EMPTY,this.right=r??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new Ht(e??this.key,t??this.value,n??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw gt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw gt(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw gt(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw gt(57766)}get value(){throw gt(16141)}get color(){throw gt(16727)}get left(){throw gt(29726)}get right(){throw gt(36894)}copy(e,t,n,s,r){return this}insert(e,t,n){return new Ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dr{constructor(e){this.comparator=e,this.data=new Ga(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bd(this.data.getIterator())}getIteratorFrom(e){return new Bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Dr)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=n.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Dr(this.comparator);return t.data=e,t}}class Bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nr{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new Nr([])}unionWith(e){let t=new Dr(nn.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Nr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yp(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!pl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gr(t)}setAll(e){let t=nn.emptyPath(),n={},s=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=o.popLast()}a?n[o.lastSegment()]=gr(a):s.push(o.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){const t=this.field(e.popLast());pl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Va(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];pl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){io(t,(s,r)=>e[s]=r);for(const s of n)delete e[s]}clone(){return new An(gr(this.value))}}/**
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
 */class Un{constructor(e,t,n,s,r,a,o){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=r,this.data=a,this.documentState=o}static newInvalidDocument(e){return new Un(e,0,zt.min(),zt.min(),zt.min(),An.empty(),0)}static newFoundDocument(e,t,n,s){return new Un(e,1,t,zt.min(),n,s,0)}static newNoDocument(e,t){return new Un(e,2,t,zt.min(),zt.min(),An.empty(),0)}static newUnknownDocument(e,t){return new Un(e,3,t,zt.min(),zt.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(zt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=zt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Un&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class VT{constructor(e,t=null,n=[],s=[],r=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=a,this.endAt=o,this.O=null}}function kd(i,e=null,t=[],n=[],s=null,r=null,a=null){return new VT(i,e,t,n,s,r,a)}/**
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
 */class so{constructor(e,t=null,n=[],s=[],r=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=a,this.startAt=o,this.endAt=l,this.q=null,this.L=null,this.B=null,this.startAt,this.endAt}}function zT(i){return i.collectionGroup!==null}function HT(i){const e=Fr(i);if(e.q===null){e.q=[];const t=new Set;for(const r of e.explicitOrderBy)e.q.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Dr(nn.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.q.push(new Ha(r,n))}),t.has(nn.keyField().canonicalString())||e.q.push(new Ha(nn.keyField(),n))}return e.q}function GT(i){const e=Fr(i);return e.L||(e.L=WT(e,HT(i))),e.L}function WT(i,e){if(i.limitType==="F")return kd(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new Ha(s.field,r)});const t=i.endAt?new Fd(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new Fd(i.startAt.position,i.startAt.inclusive):null;return kd(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function $l(i,e){const t=i.filters.concat([e]);return new so(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}/**
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
 */function Pp(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ba(e)?"-0":e}}function XT(i,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Ba(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):Pp(i,e)}/**
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
 */class ro{constructor(){this._=void 0}}class Lp extends ro{}class qT extends ro{constructor(e){super(),this.elements=e}}class $T extends ro{constructor(e){super(),this.elements=e}}class jT extends ro{constructor(e,t){super(),this.serializer=e,this.$=t}}/**
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
 */class KT{constructor(e,t){this.field=e,this.transform=t}}class _r{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _r}static exists(e){return new _r(void 0,e)}static updateTime(e){return new _r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ao{}class Ip extends ao{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dp extends ao{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}class YT extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JT extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const ZT={asc:"ASCENDING",desc:"DESCENDING"},QT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eA={and:"AND",or:"OR"};class tA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jl(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nA(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function iA(i,e){return jl(i,e.toTimestamp())}function vr(i){return un(!!i,49232),zt.fromTimestamp(function(t){const n=$i(t);return new wt(n.seconds,n.nanos)}(i))}function wc(i,e){return Kl(i,e).canonicalString()}function Kl(i,e){const t=function(s){return new xt(["projects",s.projectId,"databases",s.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Wa(i,e){return wc(i.databaseId,e.path)}function Yl(i,e){const t=function(s){const r=xt.fromString(s);return un(Up(r),10190,{key:r.toString()}),r}(e);if(t.get(1)!==i.databaseId.projectId)throw new me(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new me(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Ut(function(s){return un(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}(t))}function Vd(i,e,t){return{name:Wa(i,e),fields:t.value.mapValue.fields}}function sA(i,e){return"found"in e?function(n,s){un(!!s.found,43571),s.found.name,s.found.updateTime;const r=Yl(n,s.found.name),a=vr(s.found.updateTime),o=s.found.createTime?vr(s.found.createTime):zt.min(),l=new An({mapValue:{fields:s.found.fields}});return Un.newFoundDocument(r,a,o,l)}(i,e):"missing"in e?function(n,s){un(!!s.missing,3894),un(!!s.readTime,22933);const r=Yl(n,s.missing),a=vr(s.readTime);return Un.newNoDocument(r,a)}(i,e):gt(7234,{result:e})}function rA(i,e){let t;if(e instanceof Ip)t={update:Vd(i,e.key,e.value)};else if(e instanceof YT)t={delete:Wa(i,e.key)};else if(e instanceof Dp)t={update:Vd(i,e.key,e.data),updateMask:uA(e.fieldMask)};else{if(!(e instanceof JT))return gt(16599,{U:e.type});t={verify:Wa(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(r,a){const o=a.transform;if(o instanceof Lp)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qT)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $T)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jT)return{fieldPath:a.field.canonicalString(),increment:o.$};throw gt(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:iA(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:gt(27497)}(i,e.precondition)),t}function aA(i,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=function(c,u){return wc(c.databaseId,u)}(i,s);const r=function(c){if(c.length!==0)return Np(kr.create(c,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const a=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:xs(d.field),direction:oA(d.dir)}}(u))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=function(c,u){return c.useProto3Json||AT(u)?u:{value:u}}(i,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{M:t,parent:s}}function oA(i){return ZT[i]}function lA(i){return QT[i]}function cA(i){return eA[i]}function xs(i){return{fieldPath:i.canonicalString()}}function Np(i){return i instanceof Cn?function(t){if(t.op==="=="){if(Od(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NAN"}};if(Ud(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Od(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NOT_NAN"}};if(Ud(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(t.field),op:lA(t.op),value:t.value}}}(i):i instanceof kr?function(t){const n=t.getFilters().map(s=>Np(s));return n.length===1?n[0]:{compositeFilter:{op:cA(t.op),filters:n}}}(i):gt(54877,{filter:i})}function uA(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Up(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function Op(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */function Rc(i){return new tA(i,!0)}/**
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
 */class hA{}class dA extends hA{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.k=!1}j(){if(this.k)throw new me(se.FAILED_PRECONDITION,"The client has already been terminated.")}I(e,t,n,s){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.I(e,Kl(t,n),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new me(se.UNKNOWN,r.toString())})}D(e,t,n,s,r){return this.j(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.D(e,Kl(t,n),s,a,o,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new me(se.UNKNOWN,a.toString())})}terminate(){this.k=!0,this.connection.terminate()}}async function fA(i,e){const t=Fr(i),n={writes:e.map(s=>rA(t.serializer,s))};await t.I("Commit",t.serializer.databaseId,xt.emptyPath(),n)}async function pA(i,e){const t=Fr(i),n={documents:e.map(o=>Wa(t.serializer,o))},s=await t.D("BatchGetDocuments",t.serializer.databaseId,xt.emptyPath(),n,e.length),r=new Map;s.forEach(o=>{const l=sA(t.serializer,o);r.set(l.key.toString(),l)});const a=[];return e.forEach(o=>{const l=r.get(o.toString());un(!!l,55234,{key:o}),a.push(l)}),a}async function mA(i,e){const t=Fr(i),{M:n,parent:s}=aA(t.serializer,GT(e));return(await t.D("RunQuery",t.serializer.databaseId,s,{structuredQuery:n.structuredQuery})).filter(r=>!!r.document).map(r=>function(o,l,c){const u=Yl(o,l.name),h=vr(l.updateTime),d=l.createTime?vr(l.createTime):zt.min(),f=new An({mapValue:{fields:l.fields}}),g=Un.newFoundDocument(u,h,d,f);return c?g.setHasCommittedMutations():g}(t.serializer,r.document,void 0))}/**
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
 */const Fp="ComponentProvider",yr=new Map;function Cc(i){if(i._terminated)throw new me(se.FAILED_PRECONDITION,"The client has already been terminated.");if(!yr.has(i)){Fa(Fp,"Initializing Datastore");const e=function(r){return new CT(r)}(function(r,a,o,l,c){return new _T(r,a,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Mp(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,l)}(i._databaseId,i.app.options.appId||"",i._persistenceKey,i.app.options.apiKey,i._freezeSettings())),t=Rc(i._databaseId),n=function(r,a,o,l){return new dA(r,a,o,l)}(i._authCredentials,i._appCheckCredentials,e,t);yr.set(i,n)}return yr.get(i)}const gA=1048576,Bp="firestore.googleapis.com",zd=!0;class Hd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new me(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bp,this.ssl=zd}else this.host=e.host,this.ssl=e.ssl??zd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gA)throw new me(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(n,s,r,a){if(s===!0&&a===!0)throw new me(se.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mp(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new me(se.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oo{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hT;switch(n.type){case"firstParty":return new mT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new me(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yr.get(t);n&&(Fa(Fp,"Removing Datastore"),yr.delete(t),n.terminate())}(this),Promise.resolve()}}function _A(i,e){const t=typeof i=="object"?i:Qb(),n=typeof i=="string"?i:"(default)",s=jb(t,"firestore/lite").getImmediate({identifier:n});if(!s._initialized){const r=GS("firestore");r&&vA(s,...r)}return s}function vA(i,e,t,n={}){var c;i=no(i,oo);const s=lp(e),r=i._getSettings(),a={...r,emulatorOptions:i._getEmulatorOptions()},o=`${e}:${t}`;s&&JS(`https://${o}`),r.host!==Bp&&r.host!==o&&gp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:o,ssl:s,emulatorOptions:n};if(!Na(l,a)&&(i._setSettings(l),n.mockUserToken)){let u,h;if(typeof n.mockUserToken=="string")u=n.mockUserToken,h=tn.MOCK_USER;else{u=XS(n.mockUserToken,(c=i._app)==null?void 0:c.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new me(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new tn(d)}i._authCredentials=new dT(new vp(u,h))}}/**
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
 */class Ti{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ti(this.firestore,e,this._query)}}class At{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Br(t,At._jsonSchema))return new At(e,n||null,new Ut(xt.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:xn("string",At._jsonSchemaVersion),referencePath:xn("string")};class Mi extends Ti{constructor(e,t,n){super(e,t,function(r){return new so(r)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new Ut(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function yA(i,e,...t){if(i=Fs(i),xp("collection","path",e),i instanceof oo){const n=xt.fromString(e,...t);return Ad(n),new Mi(i,null,n)}{if(!(i instanceof At||i instanceof Mi))throw new me(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(xt.fromString(e,...t));return Ad(n),new Mi(i.firestore,null,n)}}function kp(i,e,...t){if(i=Fs(i),arguments.length===1&&(e=xT.newId()),xp("doc","path",e),i instanceof oo){const n=xt.fromString(e,...t);return Td(n),new At(i,null,new Ut(n))}{if(!(i instanceof At||i instanceof Mi))throw new me(se.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(xt.fromString(e,...t));return Td(n),new At(i.firestore,i instanceof Mi?i.converter:null,new Ut(n))}}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(ti.fromBase64String(e))}catch(t){throw new me(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(ti.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Br(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:xn("string",vn._jsonSchemaVersion),bytes:xn("string")};/**
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
 */class Vp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pc{constructor(e){this._methodName=e}}/**
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
 */class kn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return bt(this._lat,e._lat)||bt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(Br(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:xn("string",kn._jsonSchemaVersion),latitude:xn("number"),longitude:xn("number")};/**
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
 */class Rn{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){/**
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
*/return function(n,s){if(n.length!==s.length)return!1;for(let r=0;r<n.length;++r)if(n[r]!==s[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Br(e,Rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Rn(e.vectorValues);throw new me(se.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rn._jsonSchemaVersion="firestore/vectorValue/1.0",Rn._jsonSchema={type:xn("string",Rn._jsonSchemaVersion),vectorValues:xn("object")};/**
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
 */const xA=/^__.*__$/;class EA{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Dp(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ip(e,this.data,t,this.fieldTransforms)}}function zp(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw gt(40011,{dataSource:i})}}class Lc{constructor(e,t,n,s,r,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,r===void 0&&this.G(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}ne(e){return new Lc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}J(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.ne({path:t,arrayElement:!1});return n.H(e),n}Y(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.ne({path:t,arrayElement:!1});return n.G(),n}X(e){return this.ne({path:void 0,arrayElement:!0})}Z(e){return Xa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}G(){if(this.path)for(let e=0;e<this.path.length;e++)this.H(this.path.get(e))}H(e){if(e.length===0)throw this.Z("Document fields must not be empty");if(zp(this.dataSource)&&xA.test(e))throw this.Z('Document fields cannot begin and end with "__"')}}class MA{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rc(e)}ce(e,t,n,s=!1){return new Lc({dataSource:e,methodName:t,targetDoc:n,path:nn.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hp(i){const e=i._freezeSettings(),t=Rc(i._databaseId);return new MA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function SA(i,e,t,n,s,r={}){const a=i.ce(r.merge||r.mergeFields?2:0,e,t,s);Xp("Data must be an object, but it was:",a,n);const o=Gp(n,a);let l,c;if(r.merge)l=new Nr(a.fieldMask),c=a.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Nc(e,h,t);if(!a.contains(d))throw new me(se.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);wA(u,d)||u.push(d)}l=new Nr(u),c=a.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=a.fieldTransforms;return new EA(new An(o),l,c)}class Ic extends Pc{_toFieldTransform(e){return new KT(e.path,new Lp)}isEqual(e){return e instanceof Ic}}function bA(i,e,t,n=!1){return Dc(t,i.ce(n?4:3,e))}function Dc(i,e){if(Wp(i=Fs(i)))return Xp("Unsupported field value:",e,i),Gp(i,e);if(i instanceof Pc)return function(n,s){if(!zp(s.dataSource))throw s.Z(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Z(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Z("Nested arrays are not supported");return function(n,s){const r=[];let a=0;for(const o of n){let l=Dc(o,s.X(a));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),a++}return{arrayValue:{values:r}}}(i,e)}return function(n,s){if((n=Fs(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return XT(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=wt.fromDate(n);return{timestampValue:jl(s.serializer,r)}}if(n instanceof wt){const r=new wt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jl(s.serializer,r)}}if(n instanceof kn)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vn)return{bytesValue:nA(s.serializer,n._byteString)};if(n instanceof At){const r=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(r))throw s.Z(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:wc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Rn)return function(a,o){const l=a instanceof Rn?a.toArray():a;return{mapValue:{fields:{[Tp]:{stringValue:Ap},[ka]:{arrayValue:{values:l.map(u=>{if(typeof u!="number")throw o.Z("VectorValues must only contain numeric values.");return Pp(o.serializer,u)})}}}}}}(n,s);if(Op(n))return n._toProto(s.serializer);throw s.Z(`Unsupported field value: ${to(n)}`)}(i,e)}function Gp(i,e){const t={};return function(s){for(const r in s)if(Object.prototype.hasOwnProperty.call(s,r))return!1;return!0}(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(i,(n,s)=>{const r=Dc(s,e.J(n));r!=null&&(t[n]=r)}),{mapValue:{fields:t}}}function Wp(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof wt||i instanceof kn||i instanceof vn||i instanceof At||i instanceof Pc||i instanceof Rn||Op(i))}function Xp(i,e,t){if(!Wp(t)||!Ep(t)){const n=to(t);throw n==="an object"?e.Z(i+" a custom object"):e.Z(i+" "+n)}}function Nc(i,e,t){if((e=Fs(e))instanceof Vp)return e._internalPath;if(typeof e=="string")return AA(i,e);throw Xa("Field path arguments must be of type string or ",i,!1,void 0,t)}const TA=new RegExp("[~\\*/\\[\\]]");function AA(i,e,t){if(e.search(TA)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Vp(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Xa(i,e,t,n,s){const r=n&&!n.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(r||a)&&(l+=" (found",r&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new me(se.INVALID_ARGUMENT,o+i+l)}function wA(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class qp{constructor(e,t,n,s,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $p(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Nc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $p extends qp{data(){return super.data()}}class RA{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}/**
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
 */class Uc{}class Oc extends Uc{}function CA(i,e,...t){let n=[];e instanceof Uc&&n.push(e),n=n.concat(t),function(r){const a=r.filter(l=>l instanceof Bc).length,o=r.filter(l=>l instanceof Fc).length;if(a>1||a>0&&o>0)throw new me(se.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)i=s._apply(i);return i}class Fc extends Oc{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Fc(e,t,n)}_apply(e){const t=this._parse(e);return jp(e._query,t),new Ti(e.firestore,e.converter,$l(e._query,t))}_parse(e){const t=Hp(e.firestore);return function(r,a,o,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new me(se.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Wd(h,u);const g=[];for(const v of h)g.push(Gd(l,r,v));d={arrayValue:{values:g}}}else d=Gd(l,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Wd(h,u),d=bA(o,a,h,u==="in"||u==="not-in");return Cn.create(c,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Bc extends Uc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:kr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let a=s;const o=r.getFlattenedFilters();for(const l of o)jp(a,l),a=$l(a,l)}(e._query,t),new Ti(e.firestore,e.converter,$l(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kc extends Oc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new kc(e,t)}_apply(e){const t=function(s,r,a){if(s.startAt!==null)throw new me(se.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new me(se.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ha(r,a)}(e._query,this._field,this._direction);return new Ti(e.firestore,e.converter,function(s,r){const a=s.explicitOrderBy.concat([r]);return new so(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function PA(i,e="asc"){const t=e,n=Nc("orderBy",i);return kc._create(n,t)}class Vc extends Oc{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Vc(e,t,n)}_apply(e){return new Ti(e.firestore,e.converter,function(n,s,r){return new so(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),s,r,n.startAt,n.endAt)}(e._query,this._limit,this._limitType))}}function LA(i){return bT("limit",i),Vc._create("limit",i,"F")}function Gd(i,e,t){if(typeof(t=Fs(t))=="string"){if(t==="")throw new me(se.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zT(e)&&t.indexOf("/")!==-1)throw new me(se.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(xt.fromString(t));if(!Ut.isDocumentKey(n))throw new me(se.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Nd(i,new Ut(n))}if(t instanceof At)return Nd(i,t._key);throw new me(se.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${to(t)}.`)}function Wd(i,e){if(!Array.isArray(i)||i.length===0)throw new me(se.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jp(i,e){const t=function(s,r){for(const a of s)for(const o of a.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(i.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new me(se.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new me(se.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class IA{convertValue(e,t="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw gt(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return io(e,(s,r)=>{n[s]=this.convertValue(r,t)}),n}convertVectorValue(e){var n,s,r;const t=(r=(s=(n=e.fields)==null?void 0:n[ka].arrayValue)==null?void 0:s.values)==null?void 0:r.map(a=>Tt(a.doubleValue));return new Rn(t)}convertGeoPoint(e){return new kn(Tt(e.latitude),Tt(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=bp(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=$i(e);return new wt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=xt.fromString(e);un(Up(n),9688,{name:e});const s=new Cr(n.get(1),n.get(3)),r=new Ut(n.popFirst(5));return s.isEqual(t)||Tc(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function DA(i,e,t){let n;return n=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,n}class Kp extends IA{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function NA(i){const e=Cc((i=no(i,At)).firestore),t=new Kp(i.firestore);return pA(e,[i._key]).then(n=>{un(n.length===1,15618);const s=n[0];return new qp(i.firestore,t,i._key,s.isFoundDocument()?s:null,i.converter)})}function UA(i){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new me(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((i=no(i,Ti))._query);const e=Cc(i.firestore),t=new Kp(i.firestore);return mA(e,i._query).then(n=>{const s=n.map(r=>new $p(i.firestore,t,r.key,r,i.converter));return i._query.limitType==="L"&&s.reverse(),new RA(i,s)})}function OA(i,e,t){const n=DA((i=no(i,At)).converter,e,t),s=SA(Hp(i.firestore),"setDoc",i._key,n,i.converter!==null,t);return fA(Cc(i.firestore),[s.toMutation(i._key,_r.none())])}function Xd(){return new Ic("serverTimestamp")}const qd="4.14.1";(function(){uT(`${Zb}_lite`),Oa(new wr("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{const s=e.getProvider("app").getImmediate(),r=new oo(new fT(e.getProvider("auth-internal")),new gT(s,e.getProvider("app-check-internal")),vT(s,t),s);return n&&r._setSettings(n),r},"PUBLIC").setMultipleInstances(!0)),Rs("firestore-lite",qd,""),Rs("firestore-lite",qd,"esm2020")})();var FA="firebase",BA="12.13.0";/**
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
 */Rs(FA,BA,"app");const lo={apiKey:"AIzaSyBjX6jAQXqm_QAy_-I_AEbpybJaOWmOZuc",authDomain:"bananaallergy-76b61.firebaseapp.com",projectId:"bananaallergy-76b61",storageBucket:"bananaallergy-76b61.firebasestorage.app",messagingSenderId:"199259846809",appId:"1:199259846809:web:db3e1979c978eff63a6008",measurementId:"G-SNKL3G0TH6"};console.log("[Firebase Config projectId]",lo.projectId);console.log("[Firebase Config authDomain]",lo.authDomain);console.log("[Firebase Config apiKey]",lo.apiKey);const Yp=dp(lo);console.log("[Firebase App name]",Yp.name);const zc=_A(Yp),Jp="players",Zp="rankings",kA=6e3;function Qp(i){return String(i||"").trim().toLowerCase()}function Hc(i,e){let t=null;const n=new Promise((s,r)=>{t=setTimeout(()=>r(new Error(`${e} timeout`)),kA)});return Promise.race([i,n]).finally(()=>clearTimeout(t))}async function $d(i){const e=Qp(i);if(!e)return null;const t=await Hc(NA(kp(zc,Jp,e)),"player load");return t.exists()?t.data():null}async function VA(i){const e=Qp(i==null?void 0:i.nickname);if(!e)throw new Error("missing nickname");const t={playerId:e,nickname:i.nickname,code:i.code,diamond:Math.floor(i.diamond||0),bestScore:Math.floor(i.bestScore||0),upgrades:i.upgrades||{},updatedAt:Xd()},n={playerId:e,nickname:i.nickname,bestScore:Math.floor(i.bestScore||0),updatedAt:Xd()};return await jd(Jp,e,t,"players"),await jd(Zp,e,n,"rankings"),t}async function zA(i=10){const e=CA(yA(zc,Zp),PA("bestScore","desc"),LA(i));return(await Hc(UA(e),"ranking load")).docs.map((n,s)=>{const r=n.data();return{rank:s+1,nickname:r.nickname||n.id,bestScore:Math.floor(r.bestScore||0)}})}async function jd(i,e,t,n){console.log("[Firestore path]",i,e),n==="players"?(console.log("[players payload keys]",Object.keys(t)),console.log("[players payload]",t)):n==="rankings"&&(console.log("[rankings payload keys]",Object.keys(t)),console.log("[rankings payload]",t));try{await Hc(OA(kp(zc,i,e),t,{merge:!0}),`${n} save`)}catch(s){throw console.error("[Firestore Error Code]",s==null?void 0:s.code),console.error("[Firestore Error Message]",s==null?void 0:s.message),console.error("[Firestore Error Full]",s),s}}window.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("gesturestart",i=>i.preventDefault());const HA=()=>window.matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;class GA{constructor(){var t,n,s;this.game=null,this.$title=document.getElementById("screen-title"),this.$menu=document.getElementById("screen-menu"),this.$upgrade=document.getElementById("screen-upgrade"),this.$uiOverlay=document.getElementById("ui-overlay"),this._desiredBgm="title",this._loginBusy=!1,Xf(),qf(),document.getElementById("btn-new-game").addEventListener("click",()=>this._onNewGameLogin()),document.getElementById("btn-continue").addEventListener("click",()=>this._onContinueLogin()),document.getElementById("inp-code").addEventListener("keydown",r=>{r.key==="Enter"&&this._onContinueLogin()}),document.getElementById("btn-play").addEventListener("click",()=>this._startGame()),document.getElementById("btn-upgrade").addEventListener("click",()=>this._showUpgrade()),(t=document.getElementById("btn-ranking"))==null||t.addEventListener("click",()=>this._showRanking()),document.getElementById("btn-logout").addEventListener("click",()=>this._showTitle()),document.getElementById("btn-upgrade-back").addEventListener("click",()=>this._showMenu()),(n=document.getElementById("btn-pause"))==null||n.addEventListener("click",()=>this._showPauseMenu()),(s=document.getElementById("btn-stats"))==null||s.addEventListener("click",()=>this._showStatsPanel()),window.addEventListener("game:restart",()=>this._startGame()),window.addEventListener("game:menu",()=>this._showMenu()),window.addEventListener("game:ranking",()=>this._showRanking()),window.addEventListener("game:profile-save",r=>{var a;return this._saveCloud(((a=r.detail)==null?void 0:a.reason)||"game")});const e=localStorage.getItem("ammang_last_user");if(e){const[r,a]=e.split("|");r&&a&&(document.getElementById("inp-nick").value=r,document.getElementById("inp-code").value=a)}this._showTitle(),this._ensurePauseOverlay(),this._ensureStatsOverlay(),this._initGame(),this._bindAudioUnlock()}_playBgm(e){this._desiredBgm=e,Dl(),bM(e)}_bindAudioUnlock(){const e=()=>{Dl(),this._playBgm(this._desiredBgm||"title")};window.addEventListener("pointerdown",e),window.addEventListener("touchstart",e,{passive:!0}),window.addEventListener("keydown",e),document.addEventListener("visibilitychange",()=>{document.hidden||this._playBgm(this._desiredBgm||"title")})}_initGame(){const e=document.getElementById("game-canvas");this.game=new IS(e)}_showTitle(){var e,t,n;(t=(e=this.game)==null?void 0:e.stopGameSession)==null||t.call(e),(n=this.game)!=null&&n.canvas&&(this.game.canvas.style.visibility="hidden"),this._hideRunOverlays(),this.$title.classList.remove("hidden"),this.$menu.classList.add("hidden"),this.$upgrade.classList.add("hidden"),this.$uiOverlay.classList.add("hidden"),this._playBgm("title")}_hideRunOverlays(){var t,n,s;(t=document.getElementById("gameover-overlay"))==null||t.remove();const e=document.getElementById("augment-overlay");e&&(e.style.display="none"),(n=document.getElementById("pause-overlay"))==null||n.classList.remove("show"),(s=document.getElementById("stats-overlay"))==null||s.classList.remove("show"),this.game&&(this.game.paused=!1)}_ensurePauseOverlay(){if(document.getElementById("pause-overlay"))return;const e=document.createElement("div");e.id="pause-overlay",e.innerHTML=`
      <div class="pause-box">
        <div class="pause-title">일시정지</div>
        <button id="pause-resume" class="pixel-btn btn-gold">게임 재개</button>
        <button id="pause-restart" class="pixel-btn btn-silver">다시하기</button>
        <button id="pause-title" class="pixel-btn btn-dark">타이틀로</button>
      </div>`,document.getElementById("stage").appendChild(e),document.getElementById("pause-resume").addEventListener("click",()=>{e.classList.remove("show"),this.game&&(this.game.paused=!1)}),document.getElementById("pause-restart").addEventListener("click",()=>{e.classList.remove("show"),this._startGame()}),document.getElementById("pause-title").addEventListener("click",()=>{e.classList.remove("show"),this._showMenu()})}_showPauseMenu(){var e;!this.game||this.$uiOverlay.classList.contains("hidden")||(this.game.paused=!0,(e=document.getElementById("pause-overlay"))==null||e.classList.add("show"))}_ensureStatsOverlay(){if(document.getElementById("stats-overlay"))return;const e=document.createElement("div");e.id="stats-overlay",e.innerHTML=`
      <div class="stats-box">
        <div class="stats-head">
          <div class="stats-title">현재 스탯</div>
          <button id="stats-close" class="stats-close">×</button>
        </div>
        <div id="stats-content"></div>
      </div>`,document.getElementById("stage").appendChild(e),document.getElementById("stats-close").addEventListener("click",()=>{var t;e.classList.remove("show"),this.game&&!((t=document.getElementById("pause-overlay"))!=null&&t.classList.contains("show"))&&(this.game.paused=!1)})}_showStatsPanel(){var e;!this.game||this.$uiOverlay.classList.contains("hidden")||(this.game.paused=!0,this._renderStatsPanel(),(e=document.getElementById("stats-overlay"))==null||e.classList.add("show"))}_renderStatsPanel(){var o;const e=(o=this.game)==null?void 0:o.gs;if(!e)return;const t=(l,c=0)=>Number.isFinite(l)?Number(l).toFixed(c):"-",n=(l,c=0)=>`${t((l||0)*100,c)}%`,s=[["체력",`${Math.ceil(e.hp||0)} / ${Math.ceil(e.maxHp||0)}`],["바나나 피해",t((e.bananaDamage||0)*(e.bananaDamageMul||1),1)],["바나나 공속",`${t(e.bananaAS||0,2)}/초`],["투사체",`${(e.bananaCount||0)+(e.projectileSynergyBonus||0)}개`],["바나나 사거리",t(e.bananaRange||0,1)],["똥 저장",`${e.poopStored||0} / ${e.poopMax||0}`],["똥 피해",t((e.poopDamage||0)*(e.poopDamageMul||1),1)],["똥 쿨",`${t(e.poopCD||0,2)}초`],["치확 / 치피",`${n(e.crit||0)} / ${n(e.critDmg||0)}`],["방관",`${t(e.flatPen||0)} / ${n(e.percentPen||0,1)}`],["좌우속도",t(e.moveSpeed||0,2)],["다이아",`${e.runDiamond||0}`]],a=["banana","bananaOnHit","projectile","range","poop","poopOnHit","poopStorage","auto","crit","survival","armorPen","pet","gambler"].map(l=>{var v,p,m,S;const c=((v=e.tags)==null?void 0:v[l])||0,u=l==="pet"?2:4,h=((p=e.synergyLevels)==null?void 0:p[l])||0,d=l==="pet"?2:c>=2?4:2,f=h?(m=kl[l])==null?void 0:m[h]:`다음: ${((S=kl[l])==null?void 0:S[d])||"-"}`,g=Array.from({length:u},(E,w)=>`<span class="tag-pip ${w<c?"on":""}"></span>`).join("");return`
        <div class="tag-card ${h?"active":""}">
          <img class="tag-icon" src="${ur[l]}" alt="">
          <div class="tag-meta">
            <div class="tag-pips">${g}</div>
            <div class="tag-synergy">${f}</div>
          </div>
        </div>`}).join("");document.getElementById("stats-content").innerHTML=`
      <div class="stats-grid">
        ${s.map(([l,c])=>`<div class="stat-row"><span>${l}</span><strong>${c}</strong></div>`).join("")}
      </div>
      <div class="stats-subtitle">태그 / 시너지</div>
      <div class="tag-grid">${a}</div>`}_loginFields(){const e=document.getElementById("inp-nick").value.trim()||"player",t=document.getElementById("inp-code").value.trim()||"0000";return{nick:e,code:t}}_setLoginBusy(e,t="확인 중..."){this._loginBusy=e;const n=[document.getElementById("btn-new-game"),document.getElementById("btn-continue")];n.forEach(s=>{s&&(e?(s.dataset.prevText=s.textContent,s.disabled=!0):(s.disabled=!1,s.dataset.prevText&&(s.textContent=s.dataset.prevText)))}),e&&n[0]&&(n[0].textContent=t)}_enterLocalProfile(e,t){const n=Fl(e,t);return localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu(),n}_logFirestoreError(e){console.error("[Firestore Error Code]",e==null?void 0:e.code),console.error("[Firestore Error Message]",e==null?void 0:e.message),console.error("[Firestore Error Full]",e)}_firestoreErrorText(e){return`code: ${(e==null?void 0:e.code)||"unknown"}
message: ${(e==null?void 0:e.message)||String(e)}`}async _onContinueLogin(){if(this._loginBusy)return;const{nick:e,code:t}=this._loginFields();this._setLoginBusy(!0,"불러오는 중...");try{const n=await $d(e);if(!n){window.alert("저장된 기록이 없습니다. 새로하기로 시작해주세요.");return}if(n.code!==t){window.alert("닉네임과 코드가 일치하지 않습니다.");return}nl(n,e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu()}catch(n){console.warn("[login] Firestore continue failed:",n),this._logFirestoreError(n),!!localStorage.getItem(`ammang_3d_v1_${e}_${t}`)?(window.alert(`서버 응답이 늦어서 기기 저장 기록으로 이어합니다.

${this._firestoreErrorText(n)}`),this._enterLocalProfile(e,t)):window.alert(`서버 기록을 불러오지 못했습니다. 새로하기로 시작하면 기기 저장으로 먼저 진행합니다.

${this._firestoreErrorText(n)}`)}finally{this._setLoginBusy(!1)}}async _onNewGameLogin(){if(this._loginBusy)return;const{nick:e,code:t}=this._loginFields();this._setLoginBusy(!0,"시작 중...");try{const n=await $d(e);if(n){if(n.code!==t){window.alert("이미 저장된 닉네임입니다. 코드가 일치하지 않아 새로 시작할 수 없습니다.");return}if(!window.confirm("이미 저장된 기록이 있습니다. 새로하면 기존 다이아/강화/최고기록이 초기화됩니다.")||!window.confirm("정말 새로 시작할까요? 기존 기록은 되돌릴 수 없습니다."))return}const s=Ol(e,t);nl(s,e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu(),this._saveCloud("new-game")}catch(n){console.warn("[login] Firestore new failed:",n),this._logFirestoreError(n),window.alert(`서버 확인 실패. 기기 저장으로 먼저 시작하고 서버 저장을 한 번 시도합니다.

${this._firestoreErrorText(n)}`);const s=Ol(e,t);nl(s,e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu(),this._showCloudStatus(`서버 저장 실패, 기기 저장으로 시작 (${(n==null?void 0:n.code)||"unknown"})`),this._saveCloud("new-game-after-login-fail")}finally{this._setLoginBusy(!1)}}_onLogin(){const{nick:e,code:t}=this._loginFields();Fl(e,t),localStorage.setItem("ammang_last_user",`${e}|${t}`),this._showMenu()}_showMenu(){var t,n,s;const e=ys();this._upgradeDirty&&(this._saveCloud("upgrade-exit"),this._upgradeDirty=!1),(n=(t=this.game)==null?void 0:t.stopGameSession)==null||n.call(t),(s=this.game)!=null&&s.canvas&&(this.game.canvas.style.visibility="hidden"),this._hideRunOverlays(),this.$title.classList.add("hidden"),this.$upgrade.classList.add("hidden"),this.$menu.classList.remove("hidden"),this.$uiOverlay.classList.add("hidden"),this._playBgm("title"),e&&(document.getElementById("menu-nick").textContent=e.nickname||"-",document.getElementById("menu-dia").textContent=e.diamond||0,document.getElementById("menu-best").textContent=(e.bestScore||0).toLocaleString())}_startGame(){var n;if(!ys()){this._showTitle();return}this._hideRunOverlays(),(n=this.game)!=null&&n.canvas&&(this.game.canvas.style.visibility="visible"),this.$title.classList.add("hidden"),this.$menu.classList.add("hidden"),this.$upgrade.classList.add("hidden"),this.$uiOverlay.classList.remove("hidden");const t=document.getElementById("joystick");t&&HA()&&t.classList.remove("hidden"),this.game.startGame(),this._playBgm("game"),setTimeout(()=>this.game._onResize&&this.game._onResize(),80)}_showUpgrade(){var t;const e=ys();e&&((t=this.game)!=null&&t.canvas&&(this.game.canvas.style.visibility="hidden"),this.$menu.classList.add("hidden"),this.$upgrade.classList.remove("hidden"),this._playBgm("title"),document.getElementById("upgrade-dia").textContent=e.diamond||0,this._renderUpgradeGrid())}_renderUpgradeGrid(){const e=ys(),t=document.getElementById("upgrade-grid");t.innerHTML="";for(const[n,s,r,a,o]of xc){const l=e.upgrades[n]||0,c=l>=a,u=c?null:o[l],h=document.createElement("div");h.className="upg-card"+(c?" maxed":""),h.innerHTML=`
        <div class="upg-name">${s}</div>
        <div class="upg-desc">${r}</div>
        <div class="upg-level">${l}/${a}</div>
        <div class="upg-cost">${c?"MAX":`💎 ${u}`}</div>
      `,c||h.addEventListener("click",()=>{if((e.diamond||0)<u){this._flashCost(h);return}e.diamond-=u,e.upgrades[n]=l+1,Ar(),this._upgradeDirty=!0,document.getElementById("upgrade-dia").textContent=e.diamond,this._renderUpgradeGrid()}),t.appendChild(h)}}_flashCost(e){e.style.borderColor="#ff4444",setTimeout(()=>{e.style.borderColor=""},400)}_showCloudStatus(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),clearTimeout(this._cloudStatusTimer),this._cloudStatusTimer=setTimeout(()=>t.classList.remove("show"),2600))}async _saveCloud(e="manual"){const t=ys();if(t)try{Ec(t,t.nickname,t.code),Ar(),await VA(t)}catch(n){console.warn(`[profile] cloud save failed (${e}):`,n),this._logFirestoreError(n),this._showCloudStatus(`서버 저장 실패 (${(n==null?void 0:n.code)||"unknown"})`)}}async _showRanking(){try{const e=await zA(10);this._renderRanking(e)}catch(e){console.warn("[ranking] load failed:",e),this._logFirestoreError(e),window.alert(`랭킹을 불러오지 못했습니다.

${this._firestoreErrorText(e)}`)}}_renderRanking(e){var n;(n=document.getElementById("ranking-overlay"))==null||n.remove();const t=document.createElement("div");t.id="ranking-overlay",t.innerHTML=`
      <div class="ranking-box">
        <div class="ranking-title">최고기록 TOP 10</div>
        <div class="ranking-list">
          ${(e.length?e:[{rank:"-",nickname:"기록 없음",bestScore:0}]).map(s=>`
            <div class="ranking-row">
              <span>${s.rank}</span>
              <span>${s.nickname}</span>
              <span>${Math.floor(s.bestScore||0).toLocaleString()}</span>
            </div>
          `).join("")}
        </div>
        <button class="pixel-btn btn-gold ranking-close">닫기</button>
      </div>`,document.getElementById("stage").appendChild(t),t.querySelector(".ranking-close").addEventListener("click",()=>t.remove())}}const em=new GA;window.forceStartGame=()=>{Fl("debug","0000"),em._startGame()};window.saveCloudProfileNow=()=>em._saveCloud("debug");
