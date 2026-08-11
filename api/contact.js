function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}})}
function safe(v,max=4000){return String(v||'').trim().slice(0,max)}
function escapeHtml(v){return safe(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
export default {
  async fetch(request){
    if(request.method!=='POST') return json({ok:false,error:'Method not allowed'},405);
    let body; try{body=await request.json()}catch{return json({ok:false,error:'Invalid JSON'},400)}
    const name=safe(body.name,120), email=safe(body.email,254), type=safe(body.type,120), message=safe(body.message,5000), website=safe(body.website,200);
    if(website) return json({ok:true}); // honeypot
    if(!name||!email||!message||!/^\S+@\S+\.\S+$/.test(email)) return json({ok:false,error:'Please complete the required fields'},400);
    const key=process.env.RESEND_API_KEY, from=process.env.CONTACT_FROM_EMAIL, to=process.env.CONTACT_TO_EMAIL||'info@filisin.am';
    if(!key||!from) return json({ok:false,error:'Email service is not configured'},503);
    const subject=`Filishin website enquiry — ${name}`;
    const text=`Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\n${message}`;
    const html=`<h2>New Filishin website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Project type:</strong> ${escapeHtml(type)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g,'<br>')}</p>`;
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{'authorization':`Bearer ${key}`,'content-type':'application/json'},body:JSON.stringify({from,to:[to],subject,text,html,reply_to:email})});
    if(!response.ok){const detail=await response.text().catch(()=>"");console.error('Resend error',response.status,detail.slice(0,500));return json({ok:false,error:'Email provider rejected the request'},502)}
    return json({ok:true});
  }
};
