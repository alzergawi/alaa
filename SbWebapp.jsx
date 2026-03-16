import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect, useRef } from "react";

const COACH_TELEGRAM = "https://t.me/AlaaMohammedd6";
const TIKTOK_URL = "https://www.tiktok.com/@c.ala1";
const TELEGRAM_URL = "https://t.me/AlaaMohammedd6";
const INSTAGRAM_URL = "https://www.instagram.com/c.alaa.moh?igsh=MXJrd2U2dHoyOTAxNg%3D%3D&utm_source=qr";

// === أيقونات التواصل (SVG) ===
function TikTokIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.07a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.5z"/></svg>);}
function TelegramIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>);}
function InstagramIcon({size=24}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);}

// === مكونات UI الأساسية ===
function AnimBG(){return(<div style={{position:"fixed",inset:0,zIndex:0,overflow:"hidden",pointerEvents:"none"}}><div style={{position:"absolute",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle, rgba(232,97,140,0.06) 0%, transparent 70%)",top:"-10%",right:"-10%",animation:"floatOrb 20s ease-in-out infinite"}}/><div style={{position:"absolute",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(232,97,140,0.04) 0%, transparent 70%)",bottom:"10%",left:"-5%",animation:"floatOrb 25s ease-in-out infinite reverse"}}/><div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(232,97,140,0.03) 0%, transparent 70%)",top:"40%",left:"50%",animation:"floatOrb 18s ease-in-out infinite"}}/></div>);}

function FadeIn({children,delay=0,style={}}){
  const ref=useRef(null);
  const[visible,setVisible]=useState(false);
  useEffect(()=>{
    const el=ref.current;
    if(!el)return;
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){setVisible(true);obs.disconnect();}
    },{threshold:0.15});
    obs.observe(el);
    return()=>obs.disconnect();
  },[]);
  return(
    <div ref={ref} style={{
      opacity:visible?1:0,
      transform:visible?"translateY(0)":"translateY(40px)",
      transition:`opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
      width:"100%",
      boxSizing:"border-box",
      ...style
    }}>{children}</div>
  );
}

function Card({children,gold,glow,onClick,style={}}){const[hover,setHover]=useState(false);return(<div onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{background:gold?"linear-gradient(135deg, rgba(232,97,140,0.07) 0%, rgba(255,255,255,0.98) 100%)":"rgba(255,255,255,0.98)",border:gold?"1px solid rgba(232,97,140,0.3)":"1px solid rgba(0,0,0,0.08)",borderRadius:20,padding:"28px 24px",cursor:onClick?"pointer":"default",transition:"all 0.4s cubic-bezier(0.4,0,0.2,1)",transform:hover&&onClick?"translateY(-6px) scale(1.02)":"translateY(0) scale(1)",boxShadow:hover&&glow?"0 20px 60px rgba(232,97,140,0.12)":hover&&onClick?"0 12px 40px rgba(0,0,0,0.08)":"0 2px 12px rgba(0,0,0,0.04)",backdropFilter:"blur(20px)",position:"relative",overflow:"hidden",...style}}>{gold&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg, transparent, #e8618c, transparent)"}}/>}{children}</div>);}

function Btn({children,primary,outline,href,onClick,full,small,style={}}){const[h,setH]=useState(false);const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,padding:small?"10px 20px":"14px 32px",fontSize:small?14:16,fontWeight:600,fontFamily:"'Tajawal', sans-serif",borderRadius:14,cursor:"pointer",transition:"all 0.3s ease",textDecoration:"none",border:"none",width:full?"100%":"auto",background:primary?(h?"linear-gradient(135deg, #f7a8c4 0%, #d4567e 100%)":"linear-gradient(135deg, #e8618c 0%, #c94d76 100%)"):outline?"transparent":(h?"rgba(232,97,140,0.08)":"rgba(232,97,140,0.04)"),color:primary?"#fff":outline?"#e8618c":"#444",border:outline?"1px solid rgba(232,97,140,0.5)":"none",transform:h?"translateY(-2px)":"none",boxShadow:h&&primary?"0 8px 30px rgba(232,97,140,0.3)":"none",...style};const Tag=href?"a":"button";const extra=href?{href,target:"_blank",rel:"noopener noreferrer"}:{onClick};return <Tag {...extra} style={base} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{children}</Tag>;}

function Badge({children,color="#e8618c"}){return(<span style={{display:"inline-block",padding:"4px 14px",borderRadius:50,fontSize:12,fontWeight:700,background:`${color}15`,color,border:`1px solid ${color}33`,letterSpacing:0.5}}>{children}</span>);}

function Stat({value,label,icon}){return(<div style={{textAlign:"center",padding:"20px 12px"}}><div style={{fontSize:36,marginBottom:4}}>{icon}</div><div style={{fontSize:32,fontWeight:800,color:"#e8618c",fontFamily:"'Tajawal', sans-serif",lineHeight:1.2}}>{value}</div><div style={{fontSize:14,color:"rgba(0,0,0,0.45)",marginTop:4}}>{label}</div></div>);}

function SectionTitle({title,sub}){return(<div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontSize:32,fontWeight:800,color:"#1a1a2e",margin:"0 0 12px",fontFamily:"'Tajawal', sans-serif"}}>{title}</h2>{sub&&<p style={{fontSize:16,color:"rgba(0,0,0,0.45)",margin:0,maxWidth:600,marginInline:"auto",lineHeight:1.6}}>{sub}</p>}<div style={{width:60,height:3,background:"linear-gradient(90deg, #e8618c, transparent)",margin:"16px auto 0",borderRadius:2}}/></div>);}

function VideoPlayer({src,style={}}){const[playing,setPlaying]=useState(false);const videoRef=useRef(null);const handlePlay=()=>{if(videoRef.current){if(playing){videoRef.current.pause();}else{videoRef.current.play();}setPlaying(!playing);}};return(<div style={{position:"relative",borderRadius:16,overflow:"hidden",border:"1px solid rgba(232,97,140,0.2)",background:"#000",cursor:"pointer",...style}} onClick={handlePlay}><video ref={videoRef} src={src} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} onEnded={()=>setPlaying(false)} onError={(e)=>{e.target.style.display="none";}} playsInline preload="metadata"/>{!playing&&(<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.4)"}}><div style={{width:64,height:64,borderRadius:"50%",background:"rgba(232,97,140,0.9)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 30px rgba(232,97,140,0.4)"}}><div style={{width:0,height:0,borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderLeft:"20px solid #fff",marginLeft:4}}/></div></div>)}</div>);}

function CardImage({src,height=160,radius=14}){return(<div style={{width:"100%",height,borderRadius:radius,overflow:"hidden",marginBottom:16,background:"rgba(0,0,0,0.03)",border:"1px solid rgba(0,0,0,0.06)"}}><img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} onError={(e)=>{e.target.style.opacity="0.3";}}/></div>);}

// === النافبار ===
function Nav({active,setActive}){
  const[open,setOpen]=useState(false);
  const[scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>50);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  const items=[{id:"home",label:"الرئيسية"},{id:"gointel",label:"GO Intel"},{id:"goos",label:"GO OS"},{id:"golap",label:"GO Lap"},{id:"golibrary",label:"GO Library"},{id:"packages",label:"الباقات"},{id:"success",label:"قصص النجاح"},{id:"contact",label:"تواصل"}];
  return(<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrolled?"rgba(255,255,255,0.97)":"rgba(255,255,255,0.85)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(0,0,0,0.06)",transition:"all 0.3s ease"}}><div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}><div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>{setActive("home");window.scrollTo({top:0,behavior:"smooth"});}}><span style={{fontSize:28}}>✦</span><span style={{fontSize:20,fontWeight:800,color:"#e8618c",fontFamily:"'Tajawal', sans-serif"}}>كوتش الاء</span></div><div style={{display:"flex",gap:8,alignItems:"center"}} className="nav-desktop">{items.map(it=>(<button key={it.id} onClick={()=>{setActive(it.id);setOpen(false);}} style={{background:active===it.id?"rgba(232,97,140,0.1)":"transparent",color:active===it.id?"#e8618c":"rgba(0,0,0,0.55)",border:"none",padding:"8px 16px",borderRadius:10,cursor:"pointer",fontSize:14,fontWeight:600,fontFamily:"'Tajawal', sans-serif",transition:"all 0.3s ease"}}>{it.label}</button>))}</div><button className="nav-mobile-toggle" onClick={()=>setOpen(!open)} style={{background:"none",border:"none",color:"#e8618c",fontSize:24,cursor:"pointer",display:"none"}}>{open?"✕":"☰"}</button></div>{open&&(<div className="nav-mobile-menu" style={{padding:"8px 24px 20px",display:"flex",flexDirection:"column",gap:4,borderTop:"1px solid rgba(0,0,0,0.06)",background:"rgba(255,255,255,0.98)"}}>{items.map(it=>(<button key={it.id} onClick={()=>{setActive(it.id);setOpen(false);}} style={{background:active===it.id?"rgba(232,97,140,0.1)":"transparent",color:active===it.id?"#e8618c":"rgba(0,0,0,0.55)",border:"none",padding:"12px 16px",borderRadius:10,cursor:"pointer",fontSize:15,fontWeight:600,fontFamily:"'Tajawal', sans-serif",textAlign:"right",transition:"all 0.3s ease"}}>{it.label}</button>))}</div>)}</nav>);
}

// === Hero ===
function Hero({setActive}){const[showModal,setShowModal]=useState(false);return(<section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 24px 60px",position:"relative"}}>{showModal&&<BookingModal onClose={()=>setShowModal(false)}/>}
  <FadeIn style={{width:"100%",maxWidth:900,marginBottom:40}}><div style={{borderRadius:24,overflow:"hidden",border:"1px solid rgba(232,97,140,0.2)",boxShadow:"0 20px 80px rgba(232,97,140,0.08)"}}><img src="/images/hero-banner.jpg" alt="كوتش الاء محمد" style={{width:"100%",display:"block"}} onError={(e)=>{e.target.parentElement.parentElement.style.display="none";}}/></div></FadeIn>
  <FadeIn><div style={{width:180,height:180,borderRadius:"50%",overflow:"hidden",border:"4px solid rgba(232,97,140,0.4)",boxShadow:"0 0 60px rgba(232,97,140,0.12), 0 0 120px rgba(232,97,140,0.05)",margin:"0 auto 32px",background:"linear-gradient(135deg, rgba(232,97,140,0.1), rgba(255,255,255,0.9))",position:"relative"}}><img src="/images/coach-profile.jpg" alt="كوتش الاء محمد" style={{width:"110%",height:"110%",objectFit:"cover",display:"block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}} onError={(e)=>{e.target.style.display="none";}}/><div style={{position:"absolute",inset:-4,borderRadius:"50%",border:"2px solid transparent",borderTopColor:"#e8618c",borderBottomColor:"#e8618c",animation:"spinRing 8s linear infinite",pointerEvents:"none"}}/></div></FadeIn>
  <div style={{textAlign:"center",maxWidth:800,position:"relative",zIndex:1,width:"100%",boxSizing:"border-box"}}>
    <FadeIn delay={0.05}><Badge>✦ مدربة معتمدة بالأسواق المالية وريادة الأعمال</Badge></FadeIn>
    <FadeIn delay={0.15}><h1 style={{fontSize:"clamp(36px, 7vw, 64px)",fontWeight:900,lineHeight:1.15,margin:"24px 0 0",fontFamily:"'Tajawal', sans-serif",background:"linear-gradient(135deg, #1a1a2e 0%, #e8618c 50%, #1a1a2e 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% 200%",animation:"shimmer 4s ease infinite"}}>كوتش الاء محمد</h1></FadeIn>
    <FadeIn delay={0.25}><p style={{fontSize:22,color:"#e8618c",margin:"16px 0 0",fontWeight:700,fontFamily:"'Tajawal', sans-serif",letterSpacing:1}}>✦ كوتش الاء محمد — مدربة معتمدة بالأسواق المالية ✦</p></FadeIn>
    <FadeIn delay={0.3}><button onClick={()=>setShowModal(true)} className="cta3d-btn">📋 احجز استشارتك مع كوتش الاء</button></FadeIn>
    <FadeIn delay={0.35}><p style={{fontSize:18,color:"rgba(0,0,0,0.5)",margin:"20px auto 0",maxWidth:550,lineHeight:1.8}}>مستشارة وخبيرة في <strong style={{color:"#e8618c"}}>SB Model</strong> و<strong style={{color:"#e8618c"}}>X</strong><br/>مدربة معتمدة بالأسواق المالية وريادة الأعمال<br/>تداول • استثمار • تجارة إلكترونية • ريادة أعمال</p></FadeIn>

    <FadeIn delay={0.4}>
      <div style={{
        width:"100%",
        maxWidth:600,
        margin:"32px auto 0",
        padding:"0 16px",
        boxSizing:"border-box"
      }}>
        <p style={{fontSize:15,color:"#e8618c",fontWeight:700,marginBottom:12,fontFamily:"'Tajawal', sans-serif",textAlign:"center"}}>🎬 تعرّفي على كوتش الاء محمد</p>
        <div style={{
          position:"relative",
          width:"100%",
          paddingBottom:"56.25%",
          height:0,
          overflow:"hidden",
          borderRadius:16,
          border:"1px solid rgba(232,97,140,0.2)",
          background:"#000",
          boxShadow:"0 10px 30px rgba(0,0,0,0.1)"
        }}>
          <iframe
            src="https://www.youtube.com/embed/0WQrnPqGctQ"
            style={{
              position:"absolute",
              top:0,
              left:0,
              width:"100%",
              height:"100%",
              border:0
            }}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </FadeIn>

    <FadeIn delay={0.5}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:16,margin:"40px auto",maxWidth:650}}><Stat icon="🏆" value="+2,779" label="متدرب"/><Stat icon="📅" value="+9" label="سنوات خبرة"/><Stat icon="🌍" value="+15" label="دولة عربية"/><Stat icon="⭐" value="SB" label="Model"/></div></FadeIn>
    <FadeIn delay={0.6}><div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginTop:16}}><Btn primary onClick={()=>setActive("packages")}>📦 ابدأ الآن</Btn><Btn outline onClick={()=>setActive("gointel")}>🚀 استكشف GO Intel</Btn></div></FadeIn>
  </div>
</section>);}

function MarketGroup({title,color,items}){return(<div style={{marginBottom:32}}><h4 style={{fontSize:18,fontWeight:700,color:color||"#e8618c",marginBottom:16,fontFamily:"'Tajawal', sans-serif"}}>{title}</h4><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14}}>{items.map((m,i)=>(<FadeIn key={i} delay={i*0.06}><Card gold style={{textAlign:"center",padding:"20px 16px"}}><CardImage src={m.image} height={120}/><div style={{fontSize:17,fontWeight:700,color:"#1a1a2e"}}>{m.name}</div></Card></FadeIn>))}</div></div>);}

// === 1. GO Intel ===
function GoIntel({setActive}){
  const forexMarkets=[
    {name:"Currencies",image:"/images/go intel-forex-currencies.jpg"},
    {name:"Forex",image:"/images/go intel-forex-forex.jpg"},
    {name:"Gold",image:"/images/go intel-forex-gold.jpg"},
    {name:"Oil",image:"/images/go intel-forex-oil.jpg"}
  ];
  const stockMarkets=[
    {name:"CFD",image:"/images/go intel-stocks-cfd.jpg"},
    {name:"Investing",image:"/images/go intel-stocks-investing.jpg"},
    {name:"Halal Investing",image:"/images/go intel-stocks-halal.jpg"}
  ];
  const cryptoMarkets=[
    {name:"Spot",image:"/images/go intel-crypto-spot.jpg"},
    {name:"Futures",image:"/images/go intel-crypto-futures.jpg"},
    {name:"CFD",image:"/images/go intel-crypto-cfd.jpg"}
  ];

  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle title="GO Intel" sub="معلومات تداول فورية عبر الأسواق الرئيسية"/>
      <FadeIn><Card gold style={{textAlign:"center",marginBottom:48,padding:"40px 24px"}}><p style={{fontSize:18,color:"rgba(0,0,0,0.65)",lineHeight:2,margin:0}}><strong style={{color:"#e8618c"}}>GO INTEL</strong> تقدم معلومات تداول فورية عبر الأسواق الرئيسية.<br/>بدلاً من مطاردة الشارتات طوال اليوم، يحصل الأعضاء على سياق سوق واضح ورؤى قابلة للتنفيذ ليعرفوا ما يهم ومتى يهم.</p></Card></FadeIn>
      <FadeIn><h3 style={{textAlign:"center",fontSize:24,fontWeight:800,color:"#e8618c",margin:"0 0 24px",fontFamily:"'Tajawal', sans-serif"}}>🌐 الأسواق المدعومة</h3></FadeIn>
      <MarketGroup title="💱 Forex" color="#3b82f6" items={forexMarkets}/>
      <MarketGroup title="📈 Stocks" color="#a855f7" items={stockMarkets}/>
      <MarketGroup title="🪙 Crypto" color="#d97706" items={cryptoMarkets}/>
    </section>
  );
}

// === 2. GO OS ===
function GoOS({setActive}){
  const whatItDoes=[
    "يحلل بيانات السوق والهيكل والزخم والاحتمالية في الوقت الفعلي",
    "يفلتر ضوضاء السوق ويزيل التحيز العاطفي من القرارات",
    "يُشغّل جميع تنبيهات ورؤى وأدوات وطبقات ذكاء GO",
    "يعمل كنظام تشغيل تداول شخصي — وليس مجرد تغذية إشارات عامة"
  ];
  
  const features=[
    {title:"ذكاء تداول شخصي",image:"/images/go os-Personalized Trading Intelligence.jpg",desc:"كل تجربة مخصصة حسب أهدافك (دخل، استمرارية، نمو)، تحمّلك للمخاطر، والأسواق المفضلة. لا توجد لوحتا تحكم متماثلتان."},
    {title:"إشارات مبنية على الذكاء",image:"/images/go os-Intelligence-Based Signals.jpg",desc:"تُولّد الإشارات من نماذج ذكاء حية وليس قواعد ثابتة. تدرك الاستراتيجية وظروف السوق وتشرح 'لماذا' توجد الإشارة وليس فقط 'ماذا تفعل'."},
    {title:"محرك الاستراتيجيات",image:"/images/go os-Strategy Code Engine.jpg",desc:"منطق استراتيجي متقدم يعمل تحت الواجهة، يفك شفرة تحولات هيكل السوق، مناطق السيولة، ونفاذ الزخم ليفكر في أطر عمل وليس مؤشرات."},
    {title:"تحليل الشارت بالصور",image:"/images/go os-Screenshot & Chart Analysis.jpg",desc:"يمكن للمستخدمين رفع أو تصوير الشارتات الحية. يقوم GO OS بتحليل الصورة وتحديد الهيكل والاتجاه، وكشف أخطاء التنفيذ المحتملة."},
    {title:"تتبع الأداء الحي",image:"/images/go os-Real-Time Performance Tracking.jpg",desc:"يتتبع كل إشارة وتفاعل، ويقدم نسب الفوز/الخسارة ومقاييس أداء الاستراتيجية بدقة وشفافية."},
    {title:"أخبار وبيانات فورية",image:"/images/go os-Live News & Data Intelligence.jpg",desc:"يدمج GO OS الأخبار الماكروية والسوقية الفورية، ويترجمها إلى سياق قابل للتنفيذ وليس مجرد عناوين. يفهم التأثير وليس المعلومات فقط."},
    {title:"تواصل متعدد اللغات",image:"/images/go os-Multilingual, Real-Time Communication.jpg",desc:"يتواصل GO OS بطلاقة عبر لغات متعددة في الوقت الفعلي، مما يجعل المشاركة العالمية سلسة وشاملة وقابلة للتوسع."},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle title="GO OS" sub="نظام التشغيل الذكي في قلب منظومة GO"/>
      <FadeIn><Card gold style={{textAlign:"center",marginBottom:48,padding:"40px 24px"}}><p style={{fontSize:18,color:"rgba(0,0,0,0.65)",lineHeight:2,margin:0}}><strong style={{color:"#e8618c"}}>GO OS</strong> هو نظام التشغيل الذكي في قلب منظومة GO.<br/>يعمل كعقل يربط البيانات، الاستراتيجية، السلوك، والنتائج — محولاً التعقيد إلى <strong style={{color:"#e8618c"}}>وضوح في الوقت الفعلي</strong>.<br/>إنه يفهم السياق، يتكيف مع المستخدم، ويتطور مع كل تفاعل.</p></Card></FadeIn>
      <FadeIn delay={0.1}><Card style={{marginBottom:40,padding:"32px 28px"}}><h3 style={{fontSize:22,fontWeight:800,color:"#e8618c",margin:"0 0 20px",fontFamily:"'Tajawal', sans-serif"}}>ماذا يفعل GO OS</h3><div style={{display:"flex",flexDirection:"column",gap:12}}>{whatItDoes.map((item,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"flex-start"}}><span style={{color:"#e8618c",flexShrink:0,marginTop:2}}>✦</span><span style={{fontSize:15,color:"rgba(0,0,0,0.65)",lineHeight:1.7}}>{item}</span></div>))}</div></Card></FadeIn>
      <FadeIn delay={0.2}><h3 style={{textAlign:"center",fontSize:24,color:"#e8618c",fontWeight:800,fontFamily:"'Tajawal', sans-serif",marginBottom:28}}>⚡ المميزات الأساسية</h3></FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:20}}>{features.map((f,i)=>(<FadeIn key={i} delay={0.25+i*0.06}><Card style={{height:"100%"}}><CardImage src={f.image} height={160}/><h4 style={{fontSize:18,fontWeight:700,color:"#e8618c",margin:"0 0 12px",fontFamily:"'Tajawal', sans-serif"}}>{f.title}</h4><p style={{fontSize:14,color:"rgba(0,0,0,0.55)",margin:0,lineHeight:1.8,textAlign:"right"}}>{f.desc}</p></Card></FadeIn>))}</div>
      <FadeIn delay={0.5}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اشترك للوصول</Btn></div></FadeIn>
    </section>
  );
}

// === 3. GO Lap ===
function GoLap({setActive}){
  const strategies=[
    {title:"Maestro",desc:"استراتيجية عالية المستوى تركز على هيكل السوق، السيولة، وتدفق المؤسسات. صممت للمتداولين الذين يريدون فهمًا كاملاً للسوق من الأعلى للأسفل، لرؤية ما يفوته الآخرون.",image:"/images/go lap-strategies-maestro.avif"},
    {title:"Seeker",desc:"استراتيجية دقيقة مصممة لتحديد أفضل إعدادات التداول بالصبر والوضوح والتنفيذ المنضبط. اعثر على الفرصة.",image:"/images/go lap-strategies-seeker.avif"},
    {title:"SMC",desc:"مفاهيم الأموال الذكية (SMC) تحلل كيف تقود المؤسسات السعر من خلال السيولة، عدم التوازن، وهيكل السوق. يركز هذا النهج على الدقة والصبر والتداول بانسجام مع سلوك المؤسسات بدلاً من مؤشرات التجزئة.",image:"/images/go lap-strategies-smc.avif"},
    {title:"Strike 90",desc:"Strike90 هي استراتيجية تنفيذ تعتمد على الوقت، مصممة للاستفادة من النافذة الأكثر سيولة وتقلبًا في جلسة نيويورك. أول 90 دقيقة بعد افتتاح السوق.",image:"/images/go lap-strategies-strike90.avif"},
    {title:"Technical Analysis",desc:"التحليل الفني هو نهج منظم لدراسة سلوك السعر باستخدام أنماط الرسم البياني، الاتجاهات، الدعم والمقاومة، والزخم. يساعد المتداولين على تحديد اتجاه السوق، نقاط الدخول، ومستويات المخاطرة بناءً على بيانات السعر التاريخية.",image:"/images/go lap-strategies-technical analysis.avif"},
  ];

  const indicators=[
    {title:"Defender",desc:"صمم Defender للمساعدة في حماية رأس مالك من خلال الوعي المنضبط بالمخاطر. يدعم اتخاذ قرارات بطيئة ودقيقة لمساعدة المتداولين على البقاء محميين خلال ظروف السوق المتقلبة. احمِ ما تكسبه.",image:"/images/go lap-indicators-defender.avif"},
    {title:"Hunter",desc:"صمم Hunter للمتداولين الحاسمين الذين يبحثون عن فرص المضاربة المدفوعة بالزخم. يساعد في تحديد حركات السوق عالية الطاقة والتنفيذ بسرعة وثقة وهيكلية. اضرب بنية.",image:"/images/go lap-indicators-hunter.avif"},
    {title:"Maestro",desc:"يقدم Maestro رؤى متقدمة للسوق من خلال تسليط الضوء على الهيكل، الزخم، ومناطق الاهتمام الرئيسية. مصمم لمساعدتك على إدراك ما يغفل عنه الآخرون والحفاظ على السيطرة بثقة.",image:"/images/go lap-indicators-maestro.avif"},
    {title:"Seeker",desc:"يقوم Seeker بمسح السوق للمساعدة في تحديد إعدادات تداول عالية الاحتمالية لمناطق القنص. مبني للصبر والدقة، ويدعم المتداولين الذين يتحركون بذكاء وثبات وحساب.",image:"/images/go lap-indicators-seeker.avif"},
    {title:"Strike 90",desc:"مؤشر مخصص لاستراتيجية Strike 90 لتحديد الفرص الزمنية الدقيقة.",image:"/images/go lap-indicators-strike90.avif"},
  ];

  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle title="GO Lap" sub="أدوات ومؤشرات واستراتيجيات متقدمة"/>
      
      <FadeIn delay={0.1}>
        <h3 style={{textAlign:"center",fontSize:26,color:"#e8618c",fontWeight:800,fontFamily:"'Tajawal', sans-serif",marginBottom:8,marginTop:32}}>⚔️ الاستراتيجيات</h3>
        <p style={{textAlign:"center",fontSize:14,color:"rgba(0,0,0,0.4)",marginBottom:28}}>استراتيجيات التداول المتقدمة</p>
      </FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:20,marginBottom:48}}>
        {strategies.map((s,i)=>(<FadeIn key={i} delay={0.15+i*0.06}><Card style={{height:"100%"}}><CardImage src={s.image} height={160}/><div style={{textAlign:"right"}}><h4 style={{fontSize:18,fontWeight:700,color:"#e8618c",margin:"0 0 10px",fontFamily:"'Tajawal', sans-serif"}}>{s.title}</h4><p style={{fontSize:14,color:"rgba(0,0,0,0.55)",margin:0,lineHeight:1.7}}>{s.desc}</p></div></Card></FadeIn>))}
      </div>

      <FadeIn delay={0.2}>
        <h3 style={{textAlign:"center",fontSize:26,color:"#e8618c",fontWeight:800,fontFamily:"'Tajawal', sans-serif",marginBottom:8}}>📡 المؤشرات</h3>
        <p style={{textAlign:"center",fontSize:14,color:"rgba(0,0,0,0.4)",marginBottom:28}}>المؤشرات الذكية</p>
      </FadeIn>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:20}}>
        {indicators.map((ind,i)=>(<FadeIn key={i} delay={0.25+i*0.06}><Card style={{height:"100%"}}><CardImage src={ind.image} height={160}/><div style={{textAlign:"right"}}><h4 style={{fontSize:18,fontWeight:700,color:"#a855f7",margin:"0 0 10px",fontFamily:"'Tajawal', sans-serif"}}>{ind.title}</h4><p style={{fontSize:14,color:"rgba(0,0,0,0.55)",margin:0,lineHeight:1.7}}>{ind.desc}</p></div></Card></FadeIn>))}
      </div>
      
      <FadeIn delay={0.4}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اشترك للوصول</Btn></div></FadeIn>
    </section>
  );
}

// === 4. GO Library ===
function GoLibrary({setActive}){
  const levels=[
    {title:"Market Foundation",titleAr:"أساسيات السوق",desc:"تعلم كيف يعمل سوق الفوركس فعليًا من حسابات حركة السعر والجلسات إلى كيفية تأثير المؤسسات على الرسوم البيانية. يبني هذا الأساس الفهم والثقة المطلوبة قبل وضع صفقتك الأولى.",image:"/images/go library-market foundation.avif",items:["ما هو التداول؟","مقدمة سريعة عن عالم التداول وكيف تبدأ رحلتك"]},
    {title:"Applied Foundation",titleAr:"الأساسيات التطبيقية",desc:"خذ المفاهيم الأساسية وطبقها في ظروف السوق الحقيقية. تعلم قراءة الشارت، تحديد الاتجاه، إدارة المخاطر، وتنفيذ الصفقات المنظم للانتقال من النظرية إلى التطبيق.",image:"/images/go library-applied foundation-forex basics.avif",items:["أساسيات الفوركس — تعلّم أساسيات تداول الفوركس","أساسيات الأسهم — تعلّم أساسيات الأسهم","أساسيات الكريبتو — تعلّم أساسيات العملات الرقمية"]},
    {title:"Advanced Foundation",titleAr:"الأساسيات المتقدمة",desc:"أتقن هيكل السوق المتقدم، السيولة، والتنفيذ الدقيق. يركز هذا المستوى على الاستمرارية، علم النفس، وتحسين الاستراتيجية للمتداولين المستعدين للعمل بثقة وسيطرة.",image:"/images/go library-advanced foundation-market structure.avif",items:["هيكل السوق — تعلّم أساسيات هيكل السوق وتحليله"]},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle title="GO Library" sub="مكتبة معرفية رقمية شاملة لرفع مستوى الوعي والمعرفة"/>
      <div style={{display:"flex",flexDirection:"column",gap:24}}>{levels.map((lvl,i)=>(<FadeIn key={i} delay={i*0.1}><Card style={{padding:"32px 28px"}}><CardImage src={lvl.image} height={200}/><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexWrap:"wrap",gap:8}}><h3 style={{fontSize:22,fontWeight:800,color:"#e8618c",margin:0,fontFamily:"'Tajawal', sans-serif"}}>{lvl.titleAr}</h3><Badge>{lvl.title}</Badge></div><p style={{fontSize:16,color:"rgba(0,0,0,0.65)",lineHeight:1.9,margin:"0 0 20px"}}>{lvl.desc}</p>{lvl.items.map((item,j)=>(<div key={j} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><span style={{color:"#e8618c",flexShrink:0,fontSize:12,marginTop:3}}>◆</span><span style={{fontSize:14,color:"rgba(0,0,0,0.5)",lineHeight:1.7}}>{item}</span></div>))}</Card></FadeIn>))}</div>
      <FadeIn delay={0.4}><div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 اشترك للوصول</Btn></div></FadeIn>
    </section>
  );
}

// === الباقات ===
function Packages(){
  const pkgs=[
    {id:"lite",name:"LITE Package",tag:"للأفراد الجدد",price:"349",origPrice:"999",days:"30",color:"#16a34a",recommended:false,eTrading:["2 قنوات توصيات","تداول مدعوم بالذكاء الاصطناعي","مؤشرات خاصة","نظام ذكي لتقييم أدائك وانضباطك"],strategy:"استراتيجية الدخول R1+R2",strategyDetails:["ملف جاهز لإدارة المخاطر","خطة تطبيق يومية"],eModel:true},
    {id:"pro",name:"Pro Package",tag:"للمستثمرين المتوسطين",price:"999",origPrice:"2,999",days:"60",color:"#e8618c",recommended:true,eTrading:["5 قنوات توصيات بالـ AI","تداول مدعوم بالذكاء الاصطناعي","مؤشرات خاصة بالـ AI","تداول لايف يومي مع المحللين","كورس الحسابات الممولة والربح بالـ AI"],strategy:"🍊 استراتيجية برتقالة الفجر",strategyDetails:["استراتيجية التداول الذكية","تعمل على MT5","تركّز على نقاط الدخول بدقة عالية"],eModel:true},
    {id:"ultra",name:"ULTRA Package",tag:"للمحترفين",price:"1,699",origPrice:"4,999",days:"90",color:"#7c3aed",recommended:false,eTrading:["12 قناة توصيات بالـ AI","4 مؤشرات التداول بالـ AI","تداول لايف يومي مع المحللين","تداول بالـ AI","جلسات خاصة لتحليل حسابك وأخطائك","كورس الحسابات الممولة والربح بالـ AI","كورس نفسي لبناء عقلية المتداول"],strategy:"⚡ الجيل الجديد من SB MODEL",strategyDetails:["مستويات SB MODEL بالـ AI","مستوى SB-Raven","نقلة نوعية في التحليل الموجي والتداول الذكي"],eModel:true},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="📦" title="الباقات التعليمية" sub="استثمر في مستقبلك المالي — نظام مُجرّب ومبني على نتائج حقيقية"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24,alignItems:"stretch"}}>
        {pkgs.map((p,i)=>(<FadeIn key={p.id} delay={i*0.12}><div style={{position:"relative",height:"100%"}}>{p.recommended&&(<div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",zIndex:2,background:"linear-gradient(135deg, #e8618c, #c94d76)",color:"#fff",padding:"6px 24px",borderRadius:50,fontSize:13,fontWeight:800,fontFamily:"'Tajawal', sans-serif",whiteSpace:"nowrap"}}>⭐ يُوصى بها</div>)}<Card gold={p.recommended} glow={p.recommended} style={{height:"100%",display:"flex",flexDirection:"column",border:p.recommended?"1px solid rgba(232,97,140,0.4)":"1px solid rgba(0,0,0,0.08)"}}><div style={{textAlign:"center",marginBottom:20}}><Badge color={p.color}>{p.tag}</Badge><h3 style={{fontSize:26,fontWeight:800,color:p.color,margin:"16px 0 4px",fontFamily:"'Tajawal', sans-serif"}}>{p.name}</h3><div style={{color:"rgba(0,0,0,0.35)",fontSize:14,textDecoration:"line-through"}}>قيمة المحتوى {p.origPrice}$</div><div style={{display:"flex",alignItems:"baseline",justifyContent:"center",gap:4,marginTop:8}}><span style={{fontSize:44,fontWeight:900,color:"#1a1a2e",fontFamily:"'Tajawal', sans-serif"}}>{p.price}</span><span style={{fontSize:18,color:"rgba(0,0,0,0.4)"}}>$</span></div><div style={{fontSize:14,color:"rgba(0,0,0,0.35)"}}>{p.days} يوم</div></div><div style={{borderTop:"1px solid rgba(0,0,0,0.06)",paddingTop:16,marginBottom:12}}><div style={{fontSize:13,fontWeight:700,color:p.color,marginBottom:10,letterSpacing:1}}>📊 e-Trading</div>{p.eTrading.map((item,j)=>(<div key={j} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><span style={{color:p.color,flexShrink:0}}>✅</span><span style={{fontSize:14,color:"rgba(0,0,0,0.6)"}}>{item}</span></div>))}</div><div style={{borderTop:"1px solid rgba(0,0,0,0.06)",paddingTop:12,marginBottom:12}}><div style={{fontSize:14,fontWeight:700,color:p.color,marginBottom:8}}>{p.strategy}</div>{p.strategyDetails.map((s,j)=>(<div key={j} style={{display:"flex",gap:8,marginBottom:6}}><span style={{color:p.color,flexShrink:0}}>•</span><span style={{fontSize:13,color:"rgba(0,0,0,0.5)"}}>{s}</span></div>))}</div><div style={{borderTop:"1px solid rgba(0,0,0,0.06)",paddingTop:12,marginBottom:20}}><div style={{fontSize:13,fontWeight:700,color:p.color,marginBottom:8}}>💰 e-Model (الدخل السلبي)</div>{["Weekly Commission — عمولات أسبوعية","Leverage Profit — مضاعفة الأرباح","Business Asset 24/7 — أصل رقمي","Fast Payout — سحب سريع"].map((m,j)=>(<div key={j} style={{display:"flex",gap:8,marginBottom:5}}><span style={{color:p.color,flexShrink:0,fontSize:12}}>💎</span><span style={{fontSize:13,color:"rgba(0,0,0,0.45)"}}>{m}</span></div>))}</div><div style={{marginTop:"auto"}}><Btn primary={p.recommended} outline={!p.recommended} full href={COACH_TELEGRAM}>اشترك الآن — {p.price}$</Btn></div></Card></div></FadeIn>))}
      </div>
      <FadeIn delay={0.3}><div style={{textAlign:"center",marginTop:32}}><p style={{color:"rgba(0,0,0,0.35)",fontSize:14}}>🎁 خصم <strong style={{color:"#e8618c"}}>15%</strong> عند الدفع بالكريبتو!</p></div></FadeIn>
    </section>
  );
}

// === قصص النجاح ===
function SuccessStories({setActive}){
  const stories=[
    {flag:"🇮🇶",name:"متدرب مرتضى من العراق",text:"بدأ بمبلغ 21,000$ وخلال 27 يوم وصل إلى 3,000$ وسحب 2 مليون دينار عراقي",highlight:"21,000$ → 3,000$",video:"/videos/success-murtaza.MP4"},
    {flag:"🏅",name:"مدرب في مشروع X",text:"قبل ما يدخل معي كان خسران 20,000$ والآن حقق 400,000$ خلال 30 يوم فقط!",highlight:"20K$ → 400K$",video:"/videos/success-projectx-trainer.MP4"},
    {flag:"🎓",name:"قصة نجاح حليمة",text:"تجمعات مع المتدربين وأخذ تعليمات وأسرار تساعدهم في مجال التداول والأسواق المالية",highlight:"تدريب حي",video:"/videos/success-halima.MP4"},
  ];
  return(
    <section style={{padding:"80px 24px",maxWidth:1200,margin:"0 auto"}}>
      <SectionTitle icon="🏆" title="قصص نجاح متدربيني" sub="آراء المتدربين تحت إشرافي"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24}}>
        {stories.map((s,i)=>(<FadeIn key={i} delay={i*0.1}><Card gold style={{textAlign:"center"}}><div style={{marginBottom:16}}><VideoPlayer src={s.video} style={{aspectRatio:"16/9",borderRadius:14}}/></div><div style={{fontSize:36,marginBottom:8}}>{s.flag}</div><h4 style={{fontSize:18,fontWeight:700,color:"#e8618c",margin:"0 0 8px",fontFamily:"'Tajawal', sans-serif"}}>{s.name}</h4><p style={{fontSize:14,color:"rgba(0,0,0,0.55)",lineHeight:1.8,margin:"0 0 16px"}}>{s.text}</p><div style={{display:"inline-block",padding:"8px 24px",borderRadius:50,background:"rgba(232,97,140,0.1)",color:"#e8618c",fontSize:18,fontWeight:800,fontFamily:"'Tajawal', sans-serif"}}>{s.highlight}</div></Card></FadeIn>))}
      </div>
      <div style={{textAlign:"center",marginTop:40}}><Btn primary onClick={()=>setActive("packages")}>📦 ابدأ رحلتك الآن</Btn></div>
    </section>
  );
}

// === نافذة حجز المكالمة الاستشارية ===
function BookingModal({onClose}){
  const[form,setForm]=useState({name:"",age:"",country:"",program:"",phone:""});
  const[sent,setSent]=useState(false);
  const isValid=form.name&&form.age&&form.country&&form.program&&form.phone;
  const inputStyle={width:"100%",background:"rgba(0,0,0,0.03)",border:"1px solid rgba(232,97,140,0.25)",borderRadius:12,padding:"12px 16px",fontSize:15,color:"#1a1a2e",fontFamily:"'Tajawal', sans-serif",outline:"none",boxSizing:"border-box",transition:"border 0.3s ease",direction:"rtl"};
  const handleSend=()=>{
    if(!isValid)return;
    const msg=`📋 طلب حجز مكالمة استشارية مجانية\n\n✦ الاسم: ${form.name}\n✦ العمر: ${form.age}\n✦ الدولة: ${form.country}\n✦ البرنامج المختار: ${form.program}\n✦ رقم الهاتف: ${form.phone}`;
    window.open(`https://t.me/AlaaMohammedd6?text=${encodeURIComponent(msg)}`,"_blank");
    setSent(true);
  };
  return(
    <div style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",boxSizing:"border-box"}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:"#fff",border:"1px solid rgba(232,97,140,0.2)",borderRadius:24,padding:"36px 28px",width:"100%",maxWidth:480,position:"relative",boxShadow:"0 30px 80px rgba(0,0,0,0.15), 0 0 60px rgba(232,97,140,0.05)",direction:"rtl",maxHeight:"90vh",overflowY:"auto",boxSizing:"border-box"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg, transparent, #e8618c, transparent)",borderRadius:"24px 24px 0 0"}}/>
        <button onClick={onClose} style={{position:"absolute",top:16,left:16,background:"rgba(0,0,0,0.05)",border:"none",color:"rgba(0,0,0,0.4)",fontSize:18,width:34,height:34,borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        {!sent?(<>
          <div style={{textAlign:"center",marginBottom:24}}>
            <div style={{fontSize:40,marginBottom:8}}>📋</div>
            <h3 style={{fontSize:20,fontWeight:800,color:"#e8618c",margin:"0 0 6px",fontFamily:"'Tajawal', sans-serif"}}>حجز مكالمة استشارية مجانية</h3>
            <p style={{fontSize:14,color:"rgba(0,0,0,0.4)",margin:0}}>15 دقيقة مع كوتش الاء محمد</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {[
              {key:"name",   label:"١- الاسم",                         placeholder:"أدخل اسمك الكامل",      type:"text"},
              {key:"age",    label:"٢- العمر",                         placeholder:"أدخل عمرك",              type:"number"},
              {key:"country",label:"٣- الدولة",                        placeholder:"الدولة التي تسكن فيها",  type:"text"},
              {key:"program",label:"٤- البرنامج التعليمي والاستثماري", placeholder:"البرنامج الذي اخترته",   type:"select"},
              {key:"phone",  label:"٥- رقم الهاتف",                    placeholder:"رقم الهاتف مع رمز البلد",type:"tel"},
            ].map(({key,label,placeholder,type})=>(
              <div key={key}>
                <label style={{display:"block",fontSize:13,fontWeight:700,color:"#e8618c",marginBottom:6,fontFamily:"'Tajawal', sans-serif"}}>{label}</label>
                {type==="select"?(
                  <select value={form[key]} onChange={e=>setForm(p=>({...p,[key]:e.target.value}))}
                    style={{...inputStyle,appearance:"none",WebkitAppearance:"none",cursor:"pointer"}}
                    onFocus={e=>e.target.style.border="1px solid rgba(232,97,140,0.6)"}
                    onBlur={e=>e.target.style.border="1px solid rgba(232,97,140,0.25)"}>
                    <option value="" disabled style={{background:"#fff",color:"rgba(0,0,0,0.3)"}}>-- اختر الباقة --</option>
                    <option value="LITE Package" style={{background:"#fff",color:"#1a1a2e"}}>LITE Package — 349$</option>
                    <option value="Pro Package"  style={{background:"#fff",color:"#1a1a2e"}}>Pro Package — 999$</option>
                    <option value="ULTRA Package" style={{background:"#fff",color:"#1a1a2e"}}>ULTRA Package — 1,699$</option>
                  </select>
                ):(
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={e=>setForm(p=>({...p,[key]:e.target.value}))}
                    style={inputStyle}
                    onFocus={e=>e.target.style.border="1px solid rgba(232,97,140,0.6)"}
                    onBlur={e=>e.target.style.border="1px solid rgba(232,97,140,0.25)"}
                  />
                )}
              </div>
            ))}
          </div>
          <button onClick={handleSend} disabled={!isValid} style={{width:"100%",padding:"14px",borderRadius:14,border:"none",marginTop:24,background:isValid?"linear-gradient(135deg, #e8618c, #c94d76)":"rgba(232,97,140,0.15)",color:isValid?"#fff":"rgba(0,0,0,0.25)",fontSize:16,fontWeight:700,fontFamily:"'Tajawal', sans-serif",cursor:isValid?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            <TelegramIcon size={20}/> إرسال عبر تلجرام
          </button>
          <p style={{textAlign:"center",fontSize:12,color:"rgba(0,0,0,0.3)",marginTop:10}}>سيتم فتح تلجرام تلقائياً مع بياناتك</p>
        </>):(
          <div style={{textAlign:"center",padding:"20px 0"}}>
            <div style={{fontSize:60,marginBottom:16}}>✅</div>
            <h3 style={{fontSize:22,fontWeight:800,color:"#e8618c",fontFamily:"'Tajawal', sans-serif",marginBottom:8}}>تم الإرسال بنجاح!</h3>
            <p style={{fontSize:15,color:"rgba(0,0,0,0.55)",lineHeight:1.8}}>تم فتح تلجرام مع بياناتك.<br/>سيتواصل معك كوتش الاء قريباً 🎯</p>
            <button onClick={onClose} style={{marginTop:24,padding:"12px 32px",borderRadius:14,border:"1px solid rgba(232,97,140,0.3)",background:"transparent",color:"#e8618c",fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"'Tajawal', sans-serif"}}>إغلاق</button>
          </div>
        )}
      </div>
    </div>
  );
}

// === التواصل ===
function Contact(){
  const[showModal,setShowModal]=useState(false);
  return(
    <section style={{padding:"80px 24px",maxWidth:700,margin:"0 auto"}}>
      {showModal&&<BookingModal onClose={()=>setShowModal(false)}/>}
      <SectionTitle icon="📞" title="تواصل معنا" sub="نحن هنا لمساعدتك في أي وقت"/>
      <FadeIn><Card gold style={{padding:"36px 28px"}}>
        <div style={{textAlign:"center",marginBottom:12}}><div style={{width:90,height:90,borderRadius:"50%",overflow:"hidden",border:"3px solid rgba(232,97,140,0.35)",margin:"0 auto",background:"rgba(232,97,140,0.05)"}}><img src="/images/coach-profile.jpg" alt="كوتش الاء محمد" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} onError={(e)=>{e.target.style.display="none";e.target.parentElement.innerHTML='<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px">👤</div>';}}/></div></div>
        <h4 style={{textAlign:"center",color:"#e8618c",fontSize:20,fontWeight:700,margin:"0 0 20px"}}>كوتش الاء محمد</h4>
        <div style={{display:"flex",justifyContent:"center",gap:14,marginBottom:24}}>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #010101, #333)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 15px rgba(0,0,0,0.15)",textDecoration:"none"}}><TikTokIcon size={26}/></a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #2AABEE, #229ED9)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 15px rgba(42,171,238,0.2)",textDecoration:"none"}}><TelegramIcon size={26}/></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 15px rgba(221,42,123,0.2)",textDecoration:"none"}}><InstagramIcon size={26}/></a>
        </div>
        <Btn primary full href={COACH_TELEGRAM} style={{marginBottom:12}}>💬 تواصل عبر تلجرام</Btn>
        <button onClick={()=>setShowModal(true)} style={{width:"100%",padding:"14px",borderRadius:14,marginTop:8,border:"1px solid rgba(232,97,140,0.4)",background:"rgba(232,97,140,0.05)",color:"#e8618c",fontSize:16,fontWeight:700,fontFamily:"'Tajawal', sans-serif",cursor:"pointer",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(232,97,140,0.12)"}
          onMouseLeave={e=>e.currentTarget.style.background="rgba(232,97,140,0.05)"}>
          📋 احجز مكالمة استشارية مجانية
        </button>
      </Card></FadeIn>
    </section>
  );
}

// === الأسئلة الشائعة ===
function FAQ(){
  const[openIdx,setOpenIdx]=useState(null);
  const faqs=[
    {q:"هل العمل معك في هذا المجال حلال أم حرام؟",a:"حلال بشكل كامل وهذه تعمل بحلك الخاص بدا أحد تتأكد"},
    {q:"كم أحتاج من الوقت؟",a:"يومياً ساعتين وإذا كان لديك وقت أكثر بيكون ذلك أفضل لك"},
    {q:"كيف أبدأ؟",a:"معنا حتى لو كان المجال جديد عليك لكن التزامك معي يضمن لك الفهم والتعلم 100%"},
    {q:"متى سأبدأ تحقيق الأرباح؟",a:"من شهر إلى شهرين، ولكن يعتمد ذلك على الصبر والمثابرة والالتزام"},
    {q:"كم يمكن أن أحقق فعلاً من الأرباح؟",a:"يعتمد على عدة عوامل مثل رأس المال ووضع السوق والفرص المتاحة"},
    {q:"هل هذا المجال مناسب لأي فئة أو تجربة؟",a:"نعم النظام مصمم للمبتدئين ولمن يبتعهم خبرة أيضاً"},
    {q:"ليس لدي خبرة في استخدام اللابتوب والإنترنت؟",a:"لا مشكلة العمل سهل وبسيط ولا يتطلب خبرة تقنية"},
    {q:"هل يمكنني التعلم من الهاتف إذا لم يكن لدي لابتوب؟",a:"نعم يمكنك التعلم من الهاتف"},
    {q:"هل يمكنني الدخول في هذا المجال دون حساب بنكي؟",a:"نعم هناك طرق دفع مختلفة ومحافظ إلكترونية ونساعدك في ذلك"},
    {q:"ما وضع الضريبة في دولتي عند تحقيق الأرباح؟",a:"في الدول الأوروبية يتم فرض ضرائب على الأرباح عند السحب. للدول العربية لا توجد ضرائب على الأرباح."},
  ];
  return(
    <section style={{padding:"60px 24px 80px",maxWidth:700,margin:"0 auto"}}>
      <SectionTitle icon="❓" title="أسئلة وأجوبة"/>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>{faqs.map((f,i)=>(<FadeIn key={i} delay={i*0.04}><div onClick={()=>setOpenIdx(openIdx===i?null:i)} style={{background:openIdx===i?"rgba(232,97,140,0.05)":"rgba(0,0,0,0.02)",border:openIdx===i?"1px solid rgba(232,97,140,0.25)":"1px solid rgba(0,0,0,0.06)",borderRadius:14,padding:"16px 20px",cursor:"pointer",transition:"all 0.3s ease"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:15,fontWeight:600,color:openIdx===i?"#e8618c":"#1a1a2e"}}>{f.q}</span><span style={{color:"#e8618c",fontSize:18,transition:"transform 0.3s",transform:openIdx===i?"rotate(45deg)":"rotate(0)"}}>+</span></div>{openIdx===i&&(<p style={{fontSize:14,color:"rgba(0,0,0,0.5)",margin:"12px 0 0",lineHeight:1.8,borderTop:"1px solid rgba(0,0,0,0.06)",paddingTop:12}}>{f.a}</p>)}</div></FadeIn>))}</div>
    </section>
  );
}

function Footer(){return(<footer style={{borderTop:"1px solid rgba(0,0,0,0.06)",padding:"40px 24px",textAlign:"center",background:"rgba(0,0,0,0.02)"}}><div style={{fontSize:24,marginBottom:8}}>✦</div><div style={{color:"#e8618c",fontSize:18,fontWeight:700,fontFamily:"'Tajawal', sans-serif"}}>كوتش الاء محمد — مدربة معتمدة بالأسواق المالية</div><div style={{display:"flex",justifyContent:"center",gap:16,marginTop:20}}><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" style={{width:44,height:44,borderRadius:12,background:"rgba(0,0,0,0.05)",border:"1px solid rgba(0,0,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:"#333",textDecoration:"none"}}><TikTokIcon size={22}/></a><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:44,height:44,borderRadius:12,background:"rgba(42,171,238,0.08)",border:"1px solid rgba(42,171,238,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#2AABEE",textDecoration:"none"}}><TelegramIcon size={22}/></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{width:44,height:44,borderRadius:12,background:"rgba(221,42,123,0.08)",border:"1px solid rgba(221,42,123,0.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"#DD2A7B",textDecoration:"none"}}><InstagramIcon size={22}/></a></div><div style={{color:"rgba(0,0,0,0.3)",fontSize:13,marginTop:16}}>© 2026 كوتش الاء محمد — جميع الحقوق محفوظة</div></footer>);}

// === App ===
function App(){
  const[active,setActive]=useState("home");
  useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"});},[active]);
  const renderSection=()=>{switch(active){case"gointel":return<GoIntel setActive={setActive}/>;case"goos":return<GoOS setActive={setActive}/>;case"golap":return<GoLap setActive={setActive}/>;case"golibrary":return<GoLibrary setActive={setActive}/>;case"packages":return<Packages/>;case"success":return<SuccessStories setActive={setActive}/>;case"contact":return<Contact/>;default:return(<><Hero setActive={setActive}/><GoIntel setActive={setActive}/><GoOS setActive={setActive}/><GoLap setActive={setActive}/><GoLibrary setActive={setActive}/><Packages/><SuccessStories setActive={setActive}/><FAQ/><Contact/></>);}};
  return(
    <div style={{minHeight:"100vh",background:"#ffffff",color:"#1a1a2e",fontFamily:"'Tajawal', sans-serif",direction:"rtl",position:"relative",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#ffffff;overflow-x:hidden;}
        ::selection{background:rgba(232,97,140,0.2);color:#1a1a2e;}
        ::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:#f8f8f8;}::-webkit-scrollbar-thumb{background:rgba(232,97,140,0.3);border-radius:3px;}
        @keyframes shimmer{0%,100%{background-position:200% 50%;}50%{background-position:0% 50%;}}
        @keyframes floatOrb{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(30px,-40px) scale(1.05);}66%{transform:translate(-20px,20px) scale(0.95);}}
        @keyframes spinRing{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
        @media(max-width:768px){.nav-desktop{display:none !important;}.nav-mobile-toggle{display:block !important;}}
        @media(min-width:769px){.nav-mobile-menu{display:none !important;}}

        /* 3D CTA Button */
        .cta3d-btn {
          margin-top: 16px;
          padding: 14px 36px;
          font-size: 17px;
          font-weight: 700;
          font-family: 'Tajawal', sans-serif;
          color: #fff;
          background: linear-gradient(135deg, #e8618c 0%, #d44a78 50%, #e8618c 100%);
          background-size: 200% 200%;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow:
            0 6px 0 #b03d62,
            0 8px 20px rgba(232, 97, 140, 0.35),
            inset 0 1px 0 rgba(255,255,255,0.25);
          transform: translateY(0);
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          animation: btnShimmer 3s ease infinite, btnPulse 2.5s ease-in-out infinite;
          letter-spacing: 0.5px;
          overflow: hidden;
          z-index: 1;
        }
        .cta3d-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
          z-index: 2;
        }
        .cta3d-btn:hover::before {
          left: 120%;
        }
        .cta3d-btn:hover {
          transform: translateY(-3px);
          box-shadow:
            0 9px 0 #b03d62,
            0 14px 35px rgba(232, 97, 140, 0.45),
            inset 0 1px 0 rgba(255,255,255,0.3);
          background-size: 100% 100%;
        }
        .cta3d-btn:active {
          transform: translateY(4px);
          box-shadow:
            0 2px 0 #b03d62,
            0 4px 10px rgba(232, 97, 140, 0.2),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: all 0.06s ease;
        }
        @keyframes btnShimmer {
          0%, 100% { background-position: 200% 50%; }
          50% { background-position: 0% 50%; }
        }
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 6px 0 #b03d62, 0 8px 20px rgba(232,97,140,0.35), inset 0 1px 0 rgba(255,255,255,0.25); }
          50% { box-shadow: 0 6px 0 #b03d62, 0 8px 30px rgba(232,97,140,0.5), inset 0 1px 0 rgba(255,255,255,0.25); }
        }

        iframe, video, img { max-width: 110% !important; box-sizing: border-box !important; }
        section { overflow: hidden; width: 100%; box-sizing: border-box; }
        div { max-width: 100%; }
      `}</style>
      <AnimBG/><Nav active={active} setActive={setActive}/>
      <div style={{position:"relative",zIndex:1}}>{renderSection()}<Footer/></div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
