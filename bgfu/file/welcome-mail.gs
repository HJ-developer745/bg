// Google Apps Script: sends the welcome email from YOUR Gmail (free, ~100 emails/day).
// Change SECRET, then paste the same value in CONFIG.MAIL.secret in script.js.
const SECRET = 'change-this-secret';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  if (d.secret !== SECRET || !/^[^\s@]+@gmail\.com$/.test(d.to)) return ContentService.createTextOutput('denied');
  const img = String(d.img).startsWith('https://') ? d.img : '';
  const html = `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto;background:#fff8ef;border-radius:16px;overflow:hidden;border:1px solid #f0dcc4">
    ${img ? `<img src="${esc(img)}" alt="Gifts of India" style="width:100%;display:block">` : ''}
    <div style="padding:28px;text-align:center;color:#2b1d12">
      <h1 style="margin:0 0 12px;color:#c25a0b">Namaste ${esc(d.name)} 🙏</h1>
      <p style="font-size:16px;line-height:1.6">${esc(d.message)}</p>
      <p style="font-size:12px;color:#7a6552;margin-top:24px">Gifts of India · Stories that grow with you</p>
    </div></div>`;
  MailApp.sendEmail({to: d.to, subject: 'Welcome to Gifts of India 🙏', htmlBody: html, name: 'Gifts of India'});
  return ContentService.createTextOutput('ok');
}
