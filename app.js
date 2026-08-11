var LOCAL_FALLBACK="assets/media/projects/uwc-dilijan/01.jpg";
function escAttr(value){return String(value||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function RIMG(path,alt,w,h,priority){alt=alt||"";if(path&&path.indexOf('assets/')===0)path='/'+path;var load=priority?' loading="eager" fetchpriority="high"':' loading="lazy"';return '<img'+load+' decoding="async" alt="'+escAttr(alt)+'" src="'+escAttr(path)+'">';}
function IMG(kw,lock,w,h,alt){var map={quarry:"assets/media/manufacturing-base/dilijan-crushing-washing-line/01.jpg",factory:"assets/media/manufacturing-base/balahovit-concrete-production/01.jpg"};return RIMG(map[kw]||LOCAL_FALLBACK,alt,w,h,false);}

/* ---------- project data ---------- */

/* ---------- reusable ---------- */
function heroBlock(o){
  var sub=o.sub?" sub":"";
  var bg=o.img?RIMG(o.img,o.t,1900,1100,true):RIMG(o.kw==="factory"?"assets/media/manufacturing-base/balahovit-concrete-production/01.jpg":"assets/media/manufacturing-base/dilijan-crushing-washing-line/01.jpg",o.t,1900,1100,true);
  return '<section class="hero'+sub+'"><div class="bg">'+bg+'</div>'+
    (o.ticker?'<div class="wrap"><div class="ticker mono">'+o.ticker+'</div></div>':'')+
    '<div class="wrap hero-content"><span class="eyebrow light">'+o.eyebrow+'</span>'+
    '<h1 class="disp">'+o.t+'</h1>'+(o.lead?'<p class="lead">'+o.lead+'</p>':'')+
    (o.acts?'<div class="acts">'+o.acts+'</div>':'')+'</div>'+
    (o.cue?'<div class="scroll-cue">SCROLL '+o.cue+'</div>':'')+'</section>';
}
function shead(num,title,desc){return '<div class="shead rv"><div class="snum">'+num+'</div><div><h2 class="disp">'+title+'</h2>'+(desc?'<p class="desc">'+desc+'</p>':'')+'</div></div>';}
function clientsBlock(){return '<div class="clients rv">'+CLIENTS.map(function(c){return '<div class="client"><b>'+c[0]+'</b><small>'+c[1]+'</small></div>';}).join('')+'</div>';}
function ctaBand(){return '<section class="ctaband"><div class="wrap"><div><h2>Let\'s build<br>the future.</h2><p>Planning a public, commercial, hospitality or residential project? Start the conversation with our team.</p><a class="mail" href="/contact">Start a project →</a></div><div class="side"><div class="r"><div class="k">Head office</div><div class="v">Armenia, Khanjyan 47/17</div></div><div class="r"><div class="k">Founded</div><div class="v">2005</div></div><div class="r"><div class="k">Coverage</div><div class="v">Nationwide</div></div></div></div></section>';}
function pcardHTML(p,feat){return '<button type="button" class="pcard'+(feat?' feat':'')+'" data-code="'+p.code+'" aria-label="View project: '+escAttr(p.t)+'"><div class="media">'+RIMG(p.img,p.t,1000,720)+'</div><span class="sect">'+p.sect+'</span><div class="pinfo"><div class="code">'+p.code+'</div><h3>'+p.t+'</h3><div class="loc">'+p.loc+'</div></div></button>';}
function newsCard(n){return '<article class="ncard"><div class="media">'+RIMG(n.img,n.t,760,480)+'</div><div class="nb"><div class="nmeta"><span>'+n.d+'</span><b>'+n.cat+'</b></div><h4>'+n.t+'</h4><div class="rd">Archive record</div></div></article>';}

/* ---------- pages ---------- */
var PAGES={};

PAGES["/"]=function(){
  var cards=COMPETENCES.slice(0,6).map(function(c){var im=c.cimg?RIMG(c.cimg,c.t,800,560):IMG(c.ckw,c.clock,800,560,c.t);return '<a class="card hoverable rv" href="/competences"><span class="capnum">'+c.i+'</span><div class="media">'+im+'</div><div class="body"><h3>'+c.t+'</h3><p>'+c.d+'</p><div class="tags">'+c.tags.map(function(t){return '<b>'+t+'</b>';}).join('')+'</div></div></a>';}).join('');
  var feats=PROJECTS.filter(function(p){return p.feat;}).slice(0,4).map(function(p){return pcardHTML(p,true);}).join('');
  var news=NEWS.slice(0,3).map(newsCard).join('');
  return heroBlock({img:"assets/media/projects/uwc-dilijan/01.jpg",eyebrow:"Armenian Construction Enterprise · Since 2005",
    t:'We build<br>Armenia\'s <em>landmarks</em>.',
    lead:"From the Presidential Palace to the international campus of UWC Dilijan — Filishin designs, builds and delivers the works that shape the nation, backed by its own concrete, asphalt and aggregate production.",
    acts:'<a class="btn btn-primary" href="/projects">Explore projects</a><a class="btn btn-light" href="/about">Discover Filishin</a>',
    ticker:'40.1792° N&nbsp; 44.4991° E&nbsp; ·&nbsp; <span>EST. 2005</span>&nbsp; ·&nbsp; YEREVAN — DILIJAN — SEVAN — VANADZOR — ARMAVIR — KAPAN',cue:"↓"})+
  '<section class="trust"><div class="wrap"><div class="t"><div class="num" data-count="20" data-suffix="+"><b>20+</b></div><div class="cap">Years building</div></div><div class="t"><div class="num" data-count="250" data-suffix="+">250+</div><div class="cap">Professionals</div></div><div class="t"><div class="num" data-count="30" data-suffix="+">30+</div><div class="cap">Signature projects</div></div><div class="t"><div class="num">100<span>%</span></div><div class="cap">Own supply chain</div></div></div></section>'+
  '<section class="blk"><div class="wrap">'+shead("01 / What we do","Six competences.<br>One standard.","Whatever the brief, the same engineering discipline and self-supplied materials underpin the work — from a private villa to a building of national importance.")+'<div class="cards">'+cards+'</div><div class="center mt rv"><a class="arrow-link" href="/competences">All competences →</a></div></div></section>'+
  '<section class="blk alt"><div class="wrap">'+shead("02 / Selected work","Proof, poured<br>in concrete.","A selection of landmark works delivered across Armenia. Click any project for detail.")+'<div class="pgrid rv">'+feats+'</div><div class="center mt rv"><a class="arrow-link" href="/projects">View full portfolio (30+) →</a></div></div></section>'+
  '<section class="blk dark"><div class="wrap split"><div class="col-media media rv">'+RIMG("assets/media/manufacturing-base/dilijan-crushing-washing-line/01.jpg","Manufacturing base",900,720)+'</div><div class="rv"><span class="eyebrow light">03 / Vertical integration</span><h2 class="disp" style="margin-top:18px;color:#fff">From quarry<br>to keys.</h2><p>Filishin is one of the few Armenian builders that owns its material supply end to end. Aggregate is crushed and washed in the Dilijan region; concrete and asphalt are produced at our Balahovit base. That control is why clients trust us with schedule and quality on their most important works.</p><div class="acts" style="margin-top:26px"><a class="btn btn-light" href="/environment">Our environment &amp; base</a></div></div></div></section>'+
  '<section class="blk"><div class="wrap">'+shead("04 / Trust","Chosen by those<br>who can\'t compromise.","State institutions, international schools, leading banks and major developers choose Filishin for works where failure is not an option.")+clientsBlock()+'<p class="note rv">◆ Independently audited — N-AUDIT LLC financial audit on record · Pan-National Trust Awards 2014 winner.</p></div></section>'+
  '<section class="blk alt"><div class="wrap">'+shead("05 / Journal","Latest<br>news.","")+'<div class="newsgrid rv">'+news+'</div><div class="center mt rv"><a class="arrow-link" href="/news">All news →</a></div></div></section>'+
  ctaBand();
};

PAGES["/about"]=function(){
  return heroBlock({sub:true,img:"assets/media/projects/presidential-palace/01.jpg",eyebrow:"About Filishin",t:'Two decades of<br>ground broken.',lead:"An enterprise built on engineering discipline, self-supplied materials and delivery on works of national significance — founded in 2005 by Suren Hakobyan."})+
  '<section class="blk"><div class="wrap split rev"><div class="col-media media rv">'+RIMG("assets/media/projects/presidential-summer-residence/01.jpg","Filishin work",900,720)+'</div><div class="rv"><span class="eyebrow">Our story</span><h2 class="disp" style="margin:18px 0 20px">The future being<br>built today.</h2><p>Filishin LLC is an Armenian construction company founded in 2005 by Suren Hakobyan. From a Yerevan contractor it has grown into one of the country\'s most trusted builders — completing construction, reconstruction and development across the most demanding sectors.</p><p>The portfolio spans public and institutional buildings, educational facilities, commercial projects, hospitality developments and residential construction — with a project history across Yerevan, Dilijan, Sevan, Vanadzor, Armavir, Kapan and beyond.</p><p>Every project draws on a single integrated capability: our own aggregate operations in the Dilijan region and concrete and asphalt production in Balahovit — control from the quarry to the final finish.</p><div class="sig">— Suren Hakobyan, Founder &amp; Director</div></div></div></section>'+
  '<section class="blk alt"><div class="wrap">'+shead("Milestones","A record you<br>can build on.","Two decades of delivery, told through the projects, honours and capabilities that defined them.")+
    '<div class="timeline rv"><div class="tl"><div class="yr">2005</div><h4>Filishin is founded</h4><p>Suren Hakobyan establishes the company in Yerevan, focused on quality construction and reconstruction.</p></div><div class="tl"><div class="yr">2010–2011</div><h4>Governance &amp; audit</h4><p>Independent financial audit of FY 2010 completed by N-AUDIT LLC, report dated 28 April 2011.</p></div><div class="tl"><div class="yr">2014</div><h4>UWC Dilijan &amp; national recognition</h4><p>Delivery of an international residential campus, and a win at the Pan-National Trust Awards 2014.</p></div><div class="tl"><div class="yr">2016</div><h4>Prime Minister\'s Commemorative Medal</h4><p>Director Suren Hakobyan is awarded the Prime Minister\'s commemorative medal.</p></div><div class="tl"><div class="yr">Today</div><h4>250+ professionals, nationwide</h4><p>A vertically integrated enterprise operating across six regions with its own materials base.</p></div></div>'+
    '<div class="kpis rv"><div class="kpi"><div class="n" data-count="2005">2005</div><div class="l">Established</div></div><div class="kpi"><div class="n" data-count="250" data-suffix="+">250+</div><div class="l">Employees</div></div><div class="kpi"><div class="n" data-count="30" data-suffix="+">30+</div><div class="l">Signature projects</div></div><div class="kpi"><div class="n"><b>2</b></div><div class="l">Production bases</div></div></div>'+
  '</div></section>'+
  '<section class="blk"><div class="wrap">'+shead("Credentials","Licensed,<br>audited, awarded.","Filishin\'s standing is a matter of record — from independent audit to national recognition.")+
    '<div class="creds rv"><div class="cred"><div class="k">Documentation</div><h4>Licences</h4><p>Construction and professional licences preserved in Filishin\'s corporate archive.</p></div><div class="cred"><div class="k">Corporate audit</div><h4>N-AUDIT LLC</h4><p>Independent auditor\'s report on the FY 2010 financial statements, dated 28 April 2011.</p></div><div class="cred"><div class="k">Recognition</div><h4>National awards</h4><p>Pan-National Trust Awards 2014 winner; Prime Minister\'s Commemorative Medal, 2016.</p></div></div>'+
    '<div class="awards rv">'+AWARDS.map(function(a){return '<div class="award"><div class="yr">'+a[0]+'</div><b>'+a[1]+'</b><span>'+a[2]+'</span></div>';}).join('')+'</div>'+
  '</div></section>'+
  '<section class="blk alt"><div class="wrap">'+shead("What we stand for","Values that<br>hold weight.","")+'<div class="pillars rv"><div class="pillar"><div class="ic">V-01</div><h4>Engineering discipline</h4><p>Every decision is made on the drawing before it is made on site.</p></div><div class="pillar"><div class="ic">V-02</div><h4>Own the supply chain</h4><p>Control of materials means control of quality, cost and schedule.</p></div><div class="pillar"><div class="ic">V-03</div><h4>Deliver on trust</h4><p>State and institutional clients rely on our discretion and rigour.</p></div><div class="pillar"><div class="ic">V-04</div><h4>Build to last</h4><p>Seismic-aware structures engineered for generations, not handovers.</p></div></div></div></section>'+ ctaBand();
};

PAGES["/competences"]=function(){
  var rows=COMPETENCES.map(function(c){var im=c.cimg?RIMG(c.cimg,c.t,900,680):IMG(c.ckw,c.clock,900,680,c.t);return '<div class="crow rv"><div class="cm media">'+im+'</div><div><div class="idx">'+c.i+'</div><h3>'+c.t+'</h3><p>'+c.d+'</p><p class="c-long">'+c.long+'</p><ul>'+c.list.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul></div></div>';}).join('');
  var lic=LICENCES.map(function(l){return '<a class="lic hoverable rv" href="/'+l.img+'" target="_blank" rel="noopener"><div class="media">'+RIMG(l.img,l.t,700,900)+'</div><div class="lic-b"><b>'+l.t+'</b><small>'+l.n+' · open ⤢</small></div></a>';}).join('');
  return heroBlock({sub:true,img:"assets/media/projects/anelik-bank/01.jpg",eyebrow:"Competences",t:'What we build,<br>and how well.',lead:"Six integrated competences delivered under one roof — from architectural and structural design to monolithic construction and the materials that go into them."})+
  '<section class="blk"><div class="wrap">'+shead("Capabilities","End-to-end<br>delivery.","We take responsibility across the whole chain: architectural and structural design, monolithic and general construction, reconstruction and turnkey finishing — plus the concrete, asphalt and aggregate we produce ourselves.")+'<div style="border-top:1px solid var(--line)">'+rows+'</div></div></section>'+
  '<section class="blk alt"><div class="wrap">'+shead("Documentation","Licensed<br>to build.","Original corporate licence scans preserved from the Filishin archive. Open any document to view it at source resolution.")+'<div class="licgrid rv">'+lic+'</div><p class="note rv">◆ Backed by an independent financial audit — N-AUDIT LLC, report on the FY 2010 statements dated 28 April 2011.</p></div></section>'+ ctaBand();
};

PAGES["/projects"]=function(){
  var chips=["All","Public","Education","Commercial","Hospitality","Residential","Mixed-use"];
  return heroBlock({sub:true,img:"assets/media/projects/villa-rest-parz-lich/01.jpg",eyebrow:"Portfolio · 30+ projects",t:'Landmarks,<br>delivered.',lead:"From presidential facilities and international campuses to hotels, banks and residential complexes — an authentic portfolio spanning every sector we serve."})+
  '<section class="blk"><div class="wrap">'+shead("Selected projects","The full<br>portfolio.","Every project with its location, timeline and a technical note. Filter by sector, or tap any image to enlarge.")+'<div class="filterbar rv"><div class="filters" id="filters">'+chips.map(function(c,i){return '<button class="chip'+(i===0?' on':'')+'" data-filter="'+c+'">'+c+'</button>';}).join('')+'</div><div class="pcount mono" id="pcount"></div></div><div class="prows" id="pgrid"></div></div></section>'+ ctaBand();
};

PAGES["/environment"]=function(){
  return heroBlock({sub:true,img:"assets/media/projects/villa-rest-parz-lich/01.jpg",eyebrow:"Environment · Materials · Responsibility",t:'Built from<br>the ground up.',lead:"Owning our supply chain isn't only about quality — it's how we keep sourcing, transport and community impact under our own control."})+
  '<section class="blk"><div class="wrap">'+shead("Sustainability","Responsibility,<br>engineered in.","We control the parts of the build that matter most: where our materials come from, how far they travel, and how our work serves the communities around it.")+
    '<div class="pillars rv"><div class="pillar"><div class="ic">E-01</div><h4>Responsible sourcing</h4><p>Aggregate extracted and processed under our own crushing-and-washing operations in the Dilijan region.</p></div><div class="pillar"><div class="ic">E-02</div><h4>Shorter transport</h4><p>Producing concrete and asphalt in-house cuts haulage distance and emissions per project.</p></div><div class="pillar"><div class="ic">E-03</div><h4>Water &amp; washing</h4><p>Crushing-and-washing managed for clean, graded output with controlled water use.</p></div><div class="pillar"><div class="ic">E-04</div><h4>Seismic durability</h4><p>Structures engineered to last generations — the most sustainable building is one that endures.</p></div></div>'+
  '</div></section>'+
  '<section class="blk alt"><div class="wrap">'+shead("Manufacturing base","Two facilities,<br>one supply chain.","The backbone of every Filishin project — turning raw stone into finished structures.")+
    '<div class="cards" style="grid-template-columns:1fr 1fr"><div class="card hoverable rv"><div class="media" style="aspect-ratio:16/10">'+RIMG("assets/media/manufacturing-base/dilijan-crushing-washing-line/01.jpg","Dilijan aggregate",900,560)+'</div><div class="body"><div class="idx">Facility 01 · Dilijan Region</div><h3>Crushing &amp; washing line</h3><p>Extraction, crushing and washing of graded aggregate — the first controlled step of the supply chain.</p></div></div><div class="card hoverable rv"><div class="media" style="aspect-ratio:16/10">'+RIMG("assets/media/manufacturing-base/balahovit-concrete-production/01.jpg","Balahovit concrete",900,560)+'</div><div class="body"><div class="idx">Facility 02 · Balahovit</div><h3>Concrete production</h3><p>Aggregate feeds our Balahovit plant, where mixes are batched and dispatched region-wide.</p></div></div></div>'+
    '<div class="addr rv"><div class="a"><div class="t">Facility 01 · Crushing &amp; Washing</div><h4>Dilijan region</h4><p>Armenia, 3908, Tavush Marz, Haghartsin village, 1st St. 10th Blind Alley, 15 (Dilijan region)</p></div><div class="a"><div class="t">Facility 02 · Concrete Production</div><h4>Balahovit</h4><p>Armenia, 2213, Kotayk Marz, Balahovit village, 8th St. (Abovyan region)</p></div></div>'+
    '<div class="flow rv"><div class="s"><b>01 · EXTRACT</b>Raw stone, Dilijan</div><div class="s"><b>02 · CRUSH + WASH</b>Graded aggregate</div><div class="s"><b>03 · BATCH</b>Balahovit plant</div><div class="s"><b>04 · POUR</b>On-site structure</div><div class="s"><b>05 · FINISH</b>Handover</div></div>'+
  '</div></section>'+
  '<section class="blk"><div class="wrap">'+shead("Charity &amp; community","Building<br>beyond.","Community initiatives from the Filishin archive — because the future being built today has to serve the people who live in it.")+'<div class="chlist rv">'+CHARITY.map(function(c){return '<div class="chcard"><div class="tg">'+c.tg+'</div><h4>'+c.t+'</h4><p>'+c.d+'</p></div>';}).join('')+'</div></div></section>'+ ctaBand();
};

PAGES["/team"]=function(){
  return heroBlock({sub:true,img:"assets/media/projects/vanadzor-medical-center/user-cover.jpg",eyebrow:"People",t:'Our people<br>are the structure.',lead:"A lean leadership core over four operating divisions — accountability in a straight line from client to crew, across 250+ professionals."})+
  '<section class="blk"><div class="wrap">'+shead("Team structure","How we\'re<br>organised.","One founder, one executive board, four divisions. Clear lines, clear ownership.")+
    '<div class="org rv"><div class="node"><div class="role">Founder &amp; Director</div><div class="name">Suren Hakobyan<small>Sets standards · owns delivery</small></div></div><div class="conn"></div><div class="node"><div class="role">Executive Management</div><div class="name">Operations Board<small>Strategy · finance · client relations</small></div></div><div class="fanout"></div><div class="divs"><div class="dnode"><div class="role">Division 01</div><h4>Design &amp; Engineering</h4><ul><li>Architectural design</li><li>Structural design</li><li>Seismic compliance</li></ul></div><div class="dnode"><div class="role">Division 02</div><h4>Construction &amp; Site</h4><ul><li>Project management</li><li>Site foremen &amp; crews</li><li>Subcontractor control</li></ul></div><div class="dnode"><div class="role">Division 03</div><h4>Materials &amp; Supply</h4><ul><li>Aggregate — Dilijan</li><li>Concrete — Balahovit</li><li>Logistics &amp; plant</li></ul></div><div class="dnode"><div class="role">Division 04</div><h4>Quality, Safety &amp; Audit</h4><ul><li>Material testing</li><li>Independent audit</li><li>Site safety (HSE)</li></ul></div></div></div>'+
  '</div></section>'+
  '<section class="blk alt"><div class="wrap split"><div class="col-media media rv">'+RIMG("assets/media/projects/sos-sargsyan-theatre/user-cover.jpg","How Filishin is managed",900,720)+'</div><div class="rv"><span class="eyebrow">Management philosophy</span><h2 class="disp" style="margin:18px 0 20px">Managed for<br>involvement.</h2><p>A construction company is only as good as the judgement of the people on its sites. Filishin is run on modern management principles rather than top-down command: decisions are pushed to the level where the work actually happens, and the engineers, foremen and crews doing the building have a real voice in how it is done.</p><p>That means clear ownership, open information between divisions, and managers whose job is to remove obstacles for their teams — not simply to issue instructions. It is how 250+ people stay aligned across six regions, two production bases and dozens of live sites at once.</p></div></div></section>'+
  '<section class="blk"><div class="wrap">'+shead("How we lead","People<br>principles.","Eight commitments that shape how we hire, develop, involve and look after the people who build for Filishin.")+
    '<div class="principles rv">'+
      '<div class="principle"><div class="pn">P-01</div><h4>Empowered site leadership</h4><p>Foremen and project managers own their sites and are trusted to make the call where the work happens.</p></div>'+
      '<div class="principle"><div class="pn">P-02</div><h4>Involvement &amp; voice</h4><p>The people doing the work feed back into planning and method — good ideas travel up, not just down.</p></div>'+
      '<div class="principle"><div class="pn">P-03</div><h4>Ownership &amp; accountability</h4><p>Clear lines from client to crew mean everyone knows what they are responsible for, and owns the result.</p></div>'+
      '<div class="principle"><div class="pn">P-04</div><h4>Training &amp; mentorship</h4><p>Skills are passed from senior builders to the next generation; we invest in developing our own people.</p></div>'+
      '<div class="principle"><div class="pn">P-05</div><h4>Safety-first culture</h4><p>No schedule justifies an unsafe site. HSE is a shared, non-negotiable responsibility across every division.</p></div>'+
      '<div class="principle"><div class="pn">P-06</div><h4>Recognition &amp; respect</h4><p>We honour craft and long service — including the master builders who shaped the company before us.</p></div>'+
      '<div class="principle"><div class="pn">P-07</div><h4>Stability &amp; wellbeing</h4><p>Steady, year-round work across regions and our own production base gives our people security and fair conditions.</p></div>'+
      '<div class="principle"><div class="pn">P-08</div><h4>One team, four divisions</h4><p>Design, site, materials and quality work as a single team — collaboration across divisions, not silos.</p></div>'+
    '</div>'+
  '</div></section>'+
  '<section class="blk alt"><div class="wrap split rev"><div class="col-media media rv">'+RIMG("assets/media/projects/uwc-dilijan/01.jpg","Life at Filishin",900,720)+'</div><div class="rv"><span class="eyebrow">Culture</span><h2 class="disp" style="margin:18px 0 20px">Craft, carried<br>by people.</h2><p>From engineers and project managers to plant operators and skilled craft crews, Filishin is 250+ people who take the standard personally. We honour the builders who came before — a memorial plaque to honored builder Edik Hakobyan stands in Yerevan — and invest in the next generation of Armenian builders.</p><div class="acts" style="margin-top:24px"><a class="btn btn-primary" href="/contact">Join the team</a></div></div></div></section>'+ ctaBand();
};

PAGES["/collaboration"]=function(){
  var stages=[
    ["01","Brief &amp; Feasibility","We translate your goals, site and budget into a buildable, costed scope — and tell you honestly what is, and isn't, possible.","Vision · site · budget","Feasibility study &amp; scope"],
    ["02","Design &amp; Engineering","Architectural and structural design is coordinated in-house, so clashes and risks are resolved on the drawing — before the first pour.","Requirements · approvals","Coordinated design set"],
    ["03","Supply &amp; Mobilise","Our own aggregate, concrete and asphalt are scheduled against the build programme, and the site is mobilised — never waiting on third parties.","Go-ahead to build","Materials plan · live site"],
    ["04","Build &amp; Assure","Construction proceeds under continuous quality testing and safety oversight, with transparent progress you can verify at every milestone.","Milestone approvals","QA'd structure"],
    ["05","Handover &amp; Audit","We hand over a verified, independently audited building — with the documentation and records that let you operate and trust it.","Final sign-off","Keys · full records"]
  ];
  var journey=stages.map(function(s){return '<div class="jstage rv"><div class="jnum">'+s[0]+'</div><div class="jbody"><h3>'+s[1]+'</h3><p>'+s[2]+'</p><div class="gate"><div class="g you"><span class="gl">You bring</span><span class="gv">'+s[3]+'</span></div><div class="g we"><span class="gl">We deliver</span><span class="gv">'+s[4]+'</span></div></div></div></div>';}).join('');
  var models=[
    ["M-01","General contracting","Single-point delivery from contract to keys. One accountable team runs the whole build — design coordination, procurement, construction, subcontractors and handover — so responsibility never slips between parties.","Best when you want one company answerable for the entire result."],
    ["M-02","Design &amp; build","Architecture, structural design and construction under one integrated responsibility. Constructability is built into the design from day one, protecting both cost and programme.","Best when you want design and build owned by the same team."],
    ["M-03","Reconstruction &amp; renovation","Renovation, reconstruction and capital repair of existing structures — including operating businesses and sensitive public buildings — with structural strengthening where the building needs it.","Best for upgrading, extending or restoring what already stands."],
    ["M-04","Materials supply","Concrete, asphalt and graded aggregate supplied to third-party projects from our Dilijan and Balahovit bases — tested, consistent and delivered to programme.","Best when you need reliable materials, not a full contractor."]
  ];
  var acc=models.map(function(m,i){return '<div class="acc'+(i===0?' open':'')+'"><button class="acc-h"><span class="acc-idx">'+m[0]+'</span><span class="acc-t">'+m[1]+'</span><span class="acc-plus"></span></button><div class="acc-b"><p>'+m[2]+'</p><p class="acc-when">→ '+m[3]+'</p></div></div>';}).join('');
  var marq=CLIENTS.concat(CLIENTS).map(function(c){return '<span>'+c[0]+'</span>';}).join('');
  return heroBlock({sub:true,img:"assets/media/projects/syunik-regional-customs-house/01.jpg",eyebrow:"Collaboration",t:'One path, from<br>brief to keys.',lead:"A single disciplined route from first sketch to signed handover — clients, architects and authorities aligned at every gate."})+
  '<section class="blk"><div class="wrap"><div class="collab-head rv"><span class="eyebrow">The Filishin method</span><h2 class="disp">Five gates,<br>one accountable team.</h2><p>No diffusion of responsibility. Each stage is a gate — with what you bring and what we hand back — so you always know exactly where the project stands.</p></div><div class="journey">'+journey+'</div></div></section>'+
  '<section class="qband"><div class="wrap rv"><span class="eyebrow light">Why it works</span><blockquote>One team carries your project from the first sketch to the signed handover — the reason <b>nothing falls between the cracks.</b></blockquote></div></section>'+
  '<section class="blk"><div class="wrap"><div class="collab-head rv"><span class="eyebrow">Ways to engage</span><h2 class="disp">How we<br>partner.</h2><p>Work with us as your general contractor, as a design-&amp;-build partner, on reconstruction and renovation, or purely as a materials supplier. Expand each model to see how it works and when it fits.</p></div><div class="accordion rv">'+acc+'</div></div></section>'+
  '<section class="blk alt"><div class="wrap"><div class="collab-head rv"><span class="eyebrow">Trusted by</span><h2 class="disp">Clients &amp; partners.</h2><p>Filishin has worked with public institutions, developers, financial organizations and private clients across Armenia.</p></div></div><div class="cmarq rv" aria-hidden="true"><div class="cmarq-t">'+marq+'</div></div><div class="wrap">'+clientsBlock()+'<p class="note rv">◆ Independently audited — N-AUDIT LLC financial audit on record.</p></div></section>'+ ctaBand();
};

PAGES["/news"]=function(){
  return heroBlock({sub:true,img:"assets/media/projects/sos-sargsyan-theatre/user-cover.jpg",eyebrow:"Company journal",t:'News &amp;<br>milestones.',lead:"Company updates, honours and project milestones — restored from the original Filishin archive."})+
  '<section class="blk"><div class="wrap">'+shead("Archive","From the<br>Filishin journal.","A selection of dated stories documenting the company's projects, awards and community work.")+'<div class="newsgrid rv">'+NEWS.map(newsCard).join('')+'</div></div></section>'+ ctaBand();
};

PAGES["/contact"]=function(){
  return heroBlock({sub:true,img:"assets/media/projects/erebuni-administrative-business-complex/02.jpg",eyebrow:"Contact",t:'Let\'s build<br>the future.',lead:"Tell us about your project. Our team responds to every serious enquiry."})+
  '<section class="blk"><div class="wrap contact-grid"><div class="cinfo rv"><div class="row"><div class="l">Head office</div><div class="v">Armenia, Khanjyan 47/17</div></div><div class="row"><div class="l">Phone</div><div class="v"><a href="tel:+37412202788">+374-12-202788</a></div></div><div class="row"><div class="l">Email</div><div class="v"><a href="mailto:info@filisin.am">info@filisin.am</a></div></div><div class="row"><div class="l">Production — Dilijan</div><div class="v" style="font-size:.98rem">Armenia, 3908, Tavush Marz, Haghartsin village, 1st St. 10th Blind Alley, 15<br>(Dilijan region)</div></div><div class="row"><div class="l">Production — Balahovit</div><div class="v" style="font-size:.98rem">Armenia, 2213, Kotayk Marz, Balahovit village, 8th St.<br>(Abovyan region)</div></div><div class="row"><div class="l">Hours</div><div class="v">Mon–Fri · 09:00–18:00</div></div><div class="row"><div class="l">Coverage</div><div class="v" style="font-size:.98rem">Yerevan · Dilijan · Sevan · Vanadzor · Armavir · Kapan</div></div></div>'+
  '<div class="rv"><h3 class="disp" style="font-size:1.6rem;margin-bottom:24px">Start a project</h3><form id="cform"><div class="field"><label>Name</label><input required name="name" placeholder="Your name"></div><div class="field"><label>Email</label><input required type="email" name="email" placeholder="you@company.com"></div><div class="field"><label>Project type</label><select name="type"><option>Public / Institutional</option><option>Education</option><option>Commercial / Financial</option><option>Hospitality</option><option>Residential / Mixed-use</option><option>Materials supply</option></select></div><div class="field"><label>Message</label><textarea required name="msg" placeholder="Tell us about your project, site and timeline."></textarea></div><div class="hp-field" aria-hidden="true"><label>Website<input tabindex="-1" autocomplete="off" name="website"></label></div><button class="btn btn-primary" type="submit">Send enquiry →</button><p class="form-status" id="formStatus" role="status" aria-live="polite"></p></form></div></div></section>';
};

/* ---------- projects render/filter/modal ---------- */
function metaCells(p){
  var m='<div><div class="l">Location</div><div class="v">'+p.loc+'</div></div>';
  if(p.addr&&p.addr!=="—") m+='<div><div class="l">Address</div><div class="v">'+p.addr+'</div></div>';
  m+='<div><div class="l">Years</div><div class="v">'+(p.yr&&p.yr!=="—"?p.yr:"Delivered")+'</div></div>';
  m+='<div><div class="l">Sector</div><div class="v">'+p.sect+'</div></div>';
  return m;
}
function prowHTML(p,i){
  var rev=(i%2===1)?' rev':'';
  return '<article class="prow'+rev+' rv">'+
    '<button type="button" class="pr-media media" data-code="'+p.code+'" aria-label="View project: '+escAttr(p.t)+'">'+RIMG(p.img,p.t,1000,760)+'<span class="pr-zoom">View ⤢</span></button>'+
    '<div class="pr-body">'+
      '<div class="pr-eyebrow"><span class="code">'+p.code+'</span><span class="dot">·</span><span class="pr-sect">'+p.sect+'</span></div>'+
      '<h3>'+p.t+'</h3>'+
      '<div class="pr-meta">'+metaCells(p)+'</div>'+
      '<p class="pr-ov">'+p.ov+'</p>'+
      '<div class="pr-tech"><span class="pr-tl">Technical</span><p>'+p.tech+'</p></div>'+
    '</div></article>';
}
function renderProjects(filter){
  var grid=document.getElementById('pgrid'); if(!grid) return; filter=filter||"All";
  var list=PROJECTS.filter(function(p){return filter==="All"||p.sect===filter;});
  var cnt=document.getElementById('pcount'); if(cnt) cnt.innerHTML=("0"+list.length).slice(-2)+" / "+PROJECTS.length+" <span>projects</span>";
  grid.innerHTML=list.map(function(p,i){return prowHTML(p,i);}).join('');
  document.querySelectorAll('#filters .chip').forEach(function(c){c.classList.toggle('on',c.dataset.filter===filter);});
  bindReveals();
  if(window.applyLang)applyLang();
}
var lastModalTrigger=null;
function openModal(code,opts){
  opts=opts||{};
  var p=PROJECTS.filter(function(x){return x.code===code;})[0]; if(!p) return;
  lastModalTrigger=opts.trigger||document.activeElement;
  document.getElementById('modalBody').innerHTML='<div class="media">'+RIMG(p.img,p.t,1400,700,true)+'</div><div class="mbody"><div class="code">'+p.code+'</div><h3 id="modalTitle">'+p.t+'</h3><div class="meta">'+metaCells(p)+'</div><p style="color:var(--ink-2);margin-bottom:16px">'+p.ov+'</p><div class="pr-tech"><span class="pr-tl">Technical description</span><p>'+p.tech+'</p></div></div>';
  var m=document.getElementById('modal'); m.classList.add('open'); m.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
  if(opts.updateUrl!==false){history.pushState({project:code},'', '/projects/'+encodeURIComponent(code));updatePageMeta('/projects',code);}
  if(window.applyLang)applyLang();
  setTimeout(function(){var c=m.querySelector('.close'); if(c)c.focus();},0);
}
function closeModal(opts){
  opts=opts||{};
  var m=document.getElementById('modal'); if(!m.classList.contains('open')) return;
  m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');
  if(opts.updateUrl!==false && /^\/projects\/FL-\d+/i.test(location.pathname)){history.pushState({},'', '/projects');updatePageMeta('/projects');}
  var focusTarget=lastModalTrigger; lastModalTrigger=null; if(focusTarget&&document.contains(focusTarget))setTimeout(function(){focusTarget.focus();},0);
}

/* ---------- reveal + counters ---------- */
var revealIO;
function bindReveals(){
  var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(!revealIO){revealIO=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');if(e.target.dataset.count!==undefined)countUp(e.target);revealIO.unobserve(e.target);}});},{threshold:.12});}
  document.querySelectorAll('.rv:not(.in)').forEach(function(el){reduce?el.classList.add('in'):revealIO.observe(el);});
  document.querySelectorAll('[data-count]').forEach(function(el){if(el.dataset.done)return;reduce?el.textContent=(+el.dataset.count)+(el.dataset.suffix||""):revealIO.observe(el);});
}
function countUp(el){if(el.dataset.done)return;el.dataset.done="1";var target=+el.dataset.count,suf=el.dataset.suffix||"",start=null,dur=1200;function step(ts){if(!start)start=ts;var p=Math.min((ts-start)/dur,1);el.textContent=Math.floor(p*target)+(p<1?"":suf);if(p<1)requestAnimationFrame(step);else el.textContent=target+suf;}requestAnimationFrame(step);}

/* ---------- router ---------- */
var TITLES={"/":"Building Armenia's Future","/about":"About","/competences":"Competences","/projects":"Projects","/environment":"Environment","/team":"People","/collaboration":"Collaboration","/news":"News","/contact":"Contact"};
var DESCRIPTIONS={
  "/":"Filishin LLC is an Armenian construction enterprise founded in 2005 by Suren Hakobyan — delivering landmark public, educational, commercial, hospitality and residential works, backed by its own aggregate, asphalt and concrete production.",
  "/about":"An enterprise built on engineering discipline, self-supplied materials and delivery on works of national significance — founded in 2005 by Suren Hakobyan.",
  "/competences":"Six integrated competences delivered under one roof — from architectural and structural design to monolithic construction and the materials that go into them.",
  "/projects":"From presidential facilities and international campuses to hotels, banks and residential complexes — an authentic portfolio spanning every sector we serve.",
  "/environment":"Owning our supply chain isn't only about quality — it's how we keep sourcing, transport and community impact under our own control.",
  "/team":"A lean leadership core over four operating divisions — accountability in a straight line from client to crew, across 250+ professionals.",
  "/collaboration":"A single disciplined route from first sketch to signed handover — clients, architects and authorities aligned at every gate.",
  "/news":"Company updates, honours and project milestones — restored from the original Filishin archive.",
  "/contact":"Tell us about your project. Our team responds to every serious enquiry."
};
function routeInfo(){
  var hash=location.hash||"";
  if(hash.indexOf('#/')===0){
    var legacy=hash.slice(1),bits=legacy.split('?'),lp=bits[0]||"/",q=new URLSearchParams(bits[1]||"");
    return {path:lp,project:q.get('project'),filter:q.get('filter'),legacy:true};
  }
  var pathname=location.pathname.replace(/\.html$/,'').replace(/\/$/,'')||"/";
  var m=pathname.match(/^\/projects\/(FL-\d+)$/i);
  if(m)return {path:"/projects",project:m[1].toUpperCase(),filter:new URLSearchParams(location.search).get('filter'),legacy:false};
  var known=TITLES[pathname]?pathname:"/";
  return {path:known,project:null,filter:new URLSearchParams(location.search).get('filter'),legacy:false};
}
function projectByCode(code){return PROJECTS.filter(function(p){return p.code===code;})[0]||null;}
function canonicalPath(path,projectCode){return projectCode?('/projects/'+projectCode):path;}
function updatePageMeta(path,projectCode){
  var p=projectCode?projectByCode(projectCode):null;
  var part=p?p.t:(TITLES[path]||TITLES["/"]);
  var desc=p?p.ov:(DESCRIPTIONS[path]||DESCRIPTIONS["/"]);
  document.title="Filishin LTD — "+part;
  var d=document.querySelector('meta[name="description"]'); if(d)d.setAttribute('content',desc);
  var ogt=document.querySelector('meta[property="og:title"]'); if(ogt)ogt.setAttribute('content',document.title);
  var ogd=document.querySelector('meta[property="og:description"]'); if(ogd)ogd.setAttribute('content',desc);
  var twt=document.querySelector('meta[name="twitter:title"]'); if(twt)twt.setAttribute('content',document.title);
  var twd=document.querySelector('meta[name="twitter:description"]'); if(twd)twd.setAttribute('content',desc);
  var canonical=document.querySelector('link[rel="canonical"]'); var cp=canonicalPath(path,projectCode); if(canonical)canonical.href='https://filishin.am'+(cp==='/'?'/':cp);
  var ogu=document.querySelector('meta[property="og:url"]'); if(ogu)ogu.setAttribute('content','https://filishin.am'+(cp==='/'?'/':cp));
  var img=p?p.img:'assets/media/projects/uwc-dilijan/01.jpg'; var abs='https://filishin.am/'+img.replace(/^\//,'');
  var ogi=document.querySelector('meta[property="og:image"]');if(ogi)ogi.setAttribute('content',abs);var twi=document.querySelector('meta[name="twitter:image"]');if(twi)twi.setAttribute('content',abs);
}
function route(){
  var info=routeInfo(),path=info.path;
  if(info.legacy){var clean=info.project?('/projects/'+info.project):path;history.replaceState({},'',clean);info=routeInfo();path=info.path;}
  var page=PAGES[path]||PAGES["/"];
  closeModal({updateUrl:false});
  document.getElementById('app').innerHTML=page();
  updatePageMeta(path,info.project);
  window.scrollTo(0,0);
  document.querySelectorAll('#navLinks a').forEach(function(a){var ap=(a.getAttribute('href')||'/').split('?')[0].replace(/\/$/,'')||'/';a.classList.toggle('active',ap===path);});
  document.querySelectorAll('.has-sub').forEach(function(h){h.classList.toggle('active-sec',h.dataset.sec===path);});
  closeDrops();
  document.getElementById('navLinks').classList.remove('open');
  var burger=document.getElementById('burger');if(burger)burger.setAttribute('aria-expanded','false');
  bindReveals();
  if(window.applyLang)applyLang();
  if(path==="/projects"){
    renderProjects(info.filter?decodeURIComponent(info.filter):"All");
    var f=document.getElementById('filters');f&&f.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;renderProjects(b.dataset.filter);});
    if(info.project)setTimeout(function(){openModal(info.project,{updateUrl:false});},0);
  }
  if(path==="/contact"){var form=document.getElementById('cform');form&&form.addEventListener('submit',async function(e){e.preventDefault();var d=new FormData(form),status=document.getElementById('formStatus'),btn=form.querySelector('button[type="submit"]');var payload={name:d.get('name'),email:d.get('email'),type:d.get('type'),message:d.get('msg'),website:d.get('website')||''};if(status){status.className='form-status';status.textContent=window.filishinTranslate?filishinTranslate('Sending…'):'Sending…';}if(btn)btn.disabled=true;try{var r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('send failed');if(status){status.className='form-status ok';status.textContent=window.filishinTranslate?filishinTranslate('Message sent successfully.'):'Message sent successfully.';}form.reset();}catch(err){if(status){status.className='form-status err';status.textContent=window.filishinTranslate?filishinTranslate('Automatic sending is unavailable. Your email app will open instead.'):'Automatic sending is unavailable. Your email app will open instead.';}var body=encodeURIComponent("Name: "+payload.name+"\nProject type: "+payload.type+"\n\n"+payload.message+"\n\n— "+payload.email);setTimeout(function(){window.location.href="mailto:info@filisin.am?subject="+encodeURIComponent("Project enquiry — "+payload.name)+"&body="+body;},250);}finally{if(btn)btn.disabled=false;}});}
}
document.getElementById('app').addEventListener('click',function(e){var h=e.target.closest('.acc-h');if(h){var acc=h.parentElement;var isOpen=acc.classList.toggle('open');h.setAttribute('aria-expanded',String(isOpen));return;}var pc=e.target.closest('[data-code]');if(pc&&pc.dataset.code){var wasProjects=routeInfo().path==='/projects';history.pushState({project:pc.dataset.code},'', '/projects/'+encodeURIComponent(pc.dataset.code));if(wasProjects){openModal(pc.dataset.code,{trigger:pc,updateUrl:false});updatePageMeta('/projects',pc.dataset.code);}else route();}});
document.getElementById('modal').addEventListener('click',function(e){if(e.target.hasAttribute('data-close'))closeModal();});
document.addEventListener('keydown',function(e){var m=document.getElementById('modal');if(e.key==="Escape"&&m.classList.contains('open')){closeModal();return;}if(e.key==="Tab"&&m.classList.contains('open')){var f=[].slice.call(m.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')).filter(function(x){return !x.disabled&&x.offsetParent!==null;});if(!f.length)return;var first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
document.getElementById('burger').addEventListener('click',function(){var links=document.getElementById('navLinks'),b=this;var open=links.classList.toggle('open');b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',open?'Close menu':'Menu');try{delete b['__o_aria-label'];}catch(e){}if(window.applyLang)applyLang();});
function closeDrops(){document.querySelectorAll('.has-sub.open').forEach(function(h){h.classList.remove('open');var b=h.querySelector('.navbtn');if(b)b.setAttribute('aria-expanded','false');});}
document.getElementById('navLinks').addEventListener('click',function(e){var btn=e.target.closest('.navbtn');if(!btn)return;e.preventDefault();var hs=btn.parentElement;var wasOpen=hs.classList.contains('open');closeDrops();if(!wasOpen){hs.classList.add('open');btn.setAttribute('aria-expanded','true');}});
document.addEventListener('click',function(e){if(!e.target.closest('.has-sub'))closeDrops();});
document.addEventListener('click',function(e){
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var a=e.target.closest('a[href]');if(!a||a.target==='_blank'||a.hasAttribute('download'))return;
  var u;try{u=new URL(a.href,location.href);}catch(err){return;}
  if(u.origin!==location.origin||!/^https?:$/.test(u.protocol))return;
  var path=u.pathname.replace(/\/$/,'')||'/';if(!TITLES[path]&&path.indexOf('/projects/')!==0)return;
  e.preventDefault();history.pushState({},'',u.pathname+u.search);route();
});
document.addEventListener('keydown',function(e){if(e.key==="Escape")closeDrops();});
(function(){var nav=document.getElementById('nav');var on=function(){nav.classList.toggle('solid',window.scrollY>10);};on();window.addEventListener('scroll',on,{passive:true});})();
(function(){var r=document.documentElement,b=document.getElementById('themeBtn');function sync(){var cur=r.getAttribute('data-theme');var isDark=cur?cur==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches;b.setAttribute('aria-pressed',String(isDark));b.setAttribute('aria-label',isDark?'Switch to light theme':'Switch to dark theme');}sync();b.addEventListener('click',function(){var cur=r.getAttribute('data-theme');var isDark=cur?cur==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches;var next=isDark?'light':'dark';r.setAttribute('data-theme',next);try{localStorage.setItem('fl_theme',next);}catch(e){}sync();try{delete b['__o_aria-label'];}catch(e){}if(window.applyLang)applyLang();});})();
document.getElementById('yr').textContent=new Date().getFullYear();
window.addEventListener('popstate',route);
window.addEventListener('hashchange',route);
route();
