/* Native Canvas adaptation of love.py. No network requests or dependencies. */
'use strict';
const canvas = document.getElementById('heart');
const ctx = canvas.getContext('2d');
const phrases = ['I love you','Seni seviyorum','Te amo',"Je t’aime",'Ich liebe dich','Ti amo','Eu te amo','Я тебя люблю','사랑해','愛してる','我爱你','मैं तुमसे प्यार करता हूँ',"Σ’ αγαπώ",'Ik hou van jou','Jag älskar dig','Kocham cię','ฉันรักเธอ','Anh yêu em','Aku cinta kamu','Я тебе кохаю','دوستت دارم'];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let seed = 11, items = [], start = null, frame = 0, size = 0;
function random(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
function heart(a){return [16*Math.sin(a)**3*21,(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))*21+20];}
const polygon=Array.from({length:720},(_,i)=>heart(2*Math.PI*i/720));
const ymax=Math.max(...polygon.map(p=>p[1])),ymin=Math.min(...polygon.map(p=>p[1])),cy=(ymax+ymin)/2;
function spans(y){const xs=[];polygon.forEach(([x1,y1],i)=>{const [x2,y2]=polygon[(i+1)%polygon.length];if((y1<=y&&y<y2)||(y2<=y&&y<y1))xs.push(x1+(y-y1)*(x2-x1)/(y2-y1));});xs.sort((a,b)=>a-b);return xs.filter((_,i)=>i%2===0).map((x,i)=>[x,xs[i*2+1]]);}
function font(n){return `600 ${n}px "Noto Sans", Vazirmatn, Arial, sans-serif`;}
function build(){seed=11;items=[];let bag=[];function next(){if(!bag.length){bag=[...phrases];for(let i=bag.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}}return bag.pop();}
  for(let y=ymax-11;y>ymin+11;y-=22){for(const a of spans(y+10)){for(const b of spans(y-10)){const lo=Math.max(a[0],b[0])+4,hi=Math.min(a[1],b[1])-4;if(hi-lo<14)continue;let cur=lo+random()*8;const row=[];
    while(cur<hi){let fit=null;for(let j=0;j<12;j++){const text=next(),n=12+Math.floor(random()*4);ctx.font=font(n);const w=ctx.measureText(text).width;if(cur+w<=hi){fit={x:cur+w/2,y,text,n,w,dx:random()*20-10};break;}}if(!fit)break;row.push(fit);cur+=fit.w+7;}
    const left=row.length?hi-(row.at(-1).x+row.at(-1).w/2):0;row.forEach((p,i)=>{p.x=row.length===1?(lo+hi)/2:p.x+left*i/(row.length-1);p.edge=i===0||i===row.length-1;p.rad=Math.min(1,Math.hypot(p.x/336,(p.y-cy)/304.5));p.color=[170+Math.round(70*p.rad+random()*15),8+Math.round(random()*20),30+Math.round(random()*23)];p.order=-p.rad+random()*.08;items.push(p);});
  }}}
  items.sort((a,b)=>a.edge!==b.edge?(a.edge?-1:1):a.edge?((Math.atan2(a.x,a.y-cy)+Math.PI*2)%(Math.PI*2))-((Math.atan2(b.x,b.y-cy)+Math.PI*2)%(Math.PI*2)):a.order-b.order);
}
function resize(){size=canvas.clientWidth;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(size*dpr);canvas.height=Math.round(size*dpr);ctx.setTransform(dpr*size/800,0,0,dpr*size/800,canvas.width/2,canvas.height/2);}
function draw(now){if(start===null)start=now;const elapsed=reducedMotion.matches?12000:now-start;ctx.clearRect(-400,-400,800,800);ctx.textAlign='center';ctx.textBaseline='middle';
  items.forEach((p,i)=>{const age=elapsed-i/items.length*10000;if(age<0)return;const u=Math.min(1,age/672),ease=1-(1-u)**3;let flash=u<1?.75*Math.sin(Math.PI*Math.max(0,(u-.55)/.45)):reducedMotion.matches?0:Math.max(0,Math.sin((elapsed-11000)/800+i*9.73))**35*.5;const col=p.color.map((v,j)=>Math.round(v+( [255,199,199][j]-v)*flash));ctx.globalAlpha=ease;ctx.font=font(p.n);ctx.fillStyle=`rgb(${col.join(',')})`;ctx.shadowColor=`rgba(245,40,90,${p.edge?.35:.15})`;ctx.shadowBlur=p.edge?5:2;ctx.fillText(p.text,p.x+p.dx*(1-ease),-p.y-(1-ease)*34);});
  ctx.globalAlpha=1;ctx.shadowBlur=0;if(!reducedMotion.matches)frame=requestAnimationFrame(draw);
}
function replay(){cancelAnimationFrame(frame);start=null;frame=requestAnimationFrame(draw);}
async function initialize(){await Promise.allSettled([document.fonts.load('600 14px "Noto Sans"',phrases.join(' ')),document.fonts.load('400 14px Vazirmatn','دوستت دارم')]);build();resize();replay();}
initialize();document.getElementById('replay').addEventListener('click',replay);new ResizeObserver(()=>{resize();if(reducedMotion.matches)replay();}).observe(canvas);reducedMotion.addEventListener('change',replay);
document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(frame);else replay();});
