import nodemailer from 'nodemailer'

// ─── Transporter (singleton paresseux) ────────────────────────────────────────

let _transporter = null

function getTransporter() {
  if (_transporter) return _transporter
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_USER || !SMTP_PASS) return null          // SMTP non configuré → dégradé silencieux

  _transporter = nodemailer.createTransport({
    host:   SMTP_HOST  || 'smtp.gmail.com',
    port:   Number(SMTP_PORT) || 587,
    secure: false,                                    // STARTTLS
    auth:   { user: SMTP_USER, pass: SMTP_PASS },
  })
  return _transporter
}

// ─── Helpers de rendu ─────────────────────────────────────────────────────────

function row(label, value) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:10px 16px;background:#f9fafb;font-size:13px;
                 color:#6b7280;font-weight:600;white-space:nowrap;width:140px;
                 border-bottom:1px solid #e5e7eb">${label}</td>
      <td style="padding:10px 16px;font-size:14px;color:#111827;
                 border-bottom:1px solid #e5e7eb">${value}</td>
    </tr>`
}

function baseLayout(title, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${title}</title></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 16px">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;
           background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#1B7A4B 0%,#1A6E5E 50%,#1E3A8A 100%);
                   padding:36px 40px;text-align:center">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;
                    color:rgba(255,255,255,.7);font-weight:600">SkillUp Consulting CI</p>
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3">
            ${title}
          </h1>
        </td>
      </tr>

      <!-- Body -->
      <tr><td style="padding:36px 40px">${bodyHtml}</td></tr>

      <!-- Footer -->
      <tr>
        <td style="background:#1f2937;padding:24px 40px;text-align:center">
          <p style="margin:0 0 4px;font-size:13px;color:#9ca3af">
            📞 +225 01 02 21 14 21 &nbsp;|&nbsp; +225 05 76 38 76 76
          </p>
          <p style="margin:0 0 4px;font-size:13px;color:#9ca3af">
            ✉️ <a href="mailto:infos.skillup24@gmail.com"
                  style="color:#6ee7b7;text-decoration:none">infos.skillup24@gmail.com</a>
          </p>
          <p style="margin:12px 0 0;font-size:11px;color:#6b7280">
            © 2025 SkillUp Consulting CI — Abidjan, Côte d'Ivoire
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body></html>`
}

// ─── Email 1 : notification interne (à l'équipe SkillUp) ─────────────────────

export async function sendNotificationEmail(contact) {
  const transporter = getTransporter()
  if (!transporter) {
    console.info('[mailer] SMTP non configuré — notification ignorée.')
    return
  }

  const { nom, email, telephone, sujet, message } = contact
  const now = new Date().toLocaleString('fr-CI', { timeZone: 'Africa/Abidjan' })

  const bodyHtml = `
    <h2 style="margin:0 0 8px;font-size:18px;color:#1B7A4B;font-weight:700">
      Nouveau message de contact
    </h2>
    <p style="margin:0 0 24px;font-size:14px;color:#6b7280">Reçu le ${now}</p>

    <table width="100%" cellpadding="0" cellspacing="0"
           style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:28px">
      ${row('Nom', nom)}
      ${row('Email', `<a href="mailto:${email}" style="color:#1B7A4B">${email}</a>`)}
      ${row('Téléphone', telephone || '<em style="color:#9ca3af">Non renseigné</em>')}
      ${row('Sujet', sujet || '<em style="color:#9ca3af">Non précisé</em>')}
    </table>

    <h3 style="margin:0 0 10px;font-size:15px;color:#374151;font-weight:600">Message :</h3>
    <div style="background:#f9fafb;border-left:4px solid #1B7A4B;border-radius:0 10px 10px 0;
                padding:16px 20px;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap">${message}</div>

    <div style="margin-top:28px;padding:16px 20px;background:#eff6ff;border-radius:10px;
                border:1px solid #bfdbfe">
      <p style="margin:0;font-size:13px;color:#1e40af">
        💡 <strong>Action recommandée :</strong> répondre à cet email ou appeler
        <a href="tel:${telephone}" style="color:#1B7A4B;font-weight:600">${telephone || 'le contact'}</a>
        dans les <strong>24 heures</strong>.
      </p>
    </div>`

  await transporter.sendMail({
    from:    process.env.SMTP_FROM || `"SkillUp Consulting CI" <${process.env.SMTP_USER}>`,
    to:      [process.env.SMTP_USER, 'ci_consultskillup24@yahoo.com'].filter(Boolean).join(', '),
    replyTo: email,
    subject: `📩 Nouveau contact — ${sujet || 'Demande générale'} (${nom})`,
    html:    baseLayout('Nouveau message de contact', bodyHtml),
  })

  console.info(`[mailer] Notification envoyée pour ${email}`)
}

// ─── Email 2 : accusé de réception (à l'expéditeur) ──────────────────────────

export async function sendConfirmationEmail(contact) {
  const transporter = getTransporter()
  if (!transporter) return

  const { nom, email, sujet, message } = contact
  const prenom = nom.split(' ')[0]

  const bodyHtml = `
    <p style="font-size:16px;color:#374151;margin:0 0 20px">
      Bonjour <strong>${prenom}</strong>,
    </p>
    <p style="font-size:14px;color:#4b5563;line-height:1.7;margin:0 0 20px">
      Nous avons bien reçu votre message et nous vous en remercions.
      Notre équipe reviendra vers vous <strong>dans les 24 heures</strong> avec une réponse adaptée.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0"
           style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:28px">
      ${row('Objet', sujet || 'Demande générale')}
      ${row('Votre message', `<span style="white-space:pre-wrap;color:#6b7280">${message.slice(0, 200)}${message.length > 200 ? '…' : ''}</span>`)}
    </table>

    <div style="background:linear-gradient(135deg,#1B7A4B,#1E3A8A);border-radius:12px;
                padding:24px 28px;margin-bottom:28px;text-align:center">
      <p style="margin:0 0 6px;font-size:13px;color:rgba(255,255,255,.75);
                text-transform:uppercase;letter-spacing:2px;font-weight:600">
        Notre engagement
      </p>
      <p style="margin:0;font-size:16px;color:#ffffff;font-weight:700;line-height:1.4">
        « Réduire l'écart entre la théorie et les exigences<br>réelles du monde professionnel »
      </p>
    </div>

    <p style="font-size:13px;color:#9ca3af;text-align:center;margin:0">
      Si votre demande est urgente, contactez-nous directement :<br>
      <a href="tel:+2250102211421" style="color:#1B7A4B;font-weight:600">+225 01 02 21 14 21</a>
      &nbsp;|&nbsp;
      <a href="tel:+2250576387676" style="color:#1B7A4B;font-weight:600">+225 05 76 38 76 76</a>
    </p>`

  await transporter.sendMail({
    from:    process.env.SMTP_FROM || `"SkillUp Consulting CI" <${process.env.SMTP_USER}>`,
    to:      email,
    subject: `SkillUp Consulting CI — Nous avons bien reçu votre message`,
    html:    baseLayout('Message bien reçu ✅', bodyHtml),
  })

  console.info(`[mailer] Confirmation envoyée à ${email}`)
}
