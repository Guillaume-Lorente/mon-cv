'use server';

import { transporter } from '@/lib/email';

type State = { ok: boolean; message?: string };

export async function sendContact(_: State, formData: FormData): Promise<State> {
  const firstName = (formData.get('firstName') || '').toString().trim();
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const subject = (formData.get('subject') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();
  const honey = (formData.get('company') || '').toString();
  const token = (formData.get('g-recaptcha-response') || '').toString();

  if (honey) return { ok: false, message: 'Bot détecté.' };
  if (!firstName || !name || !email || !subject || !message) {
    return { ok: false, message: 'Merci de remplir tous les champs requis.' };
  }

  // (Optionnel) reCAPTCHA côté serveur si clé dispo
  if (process.env.RECAPTCHA_SECRET_KEY) {
    try {
      const secret = process.env.RECAPTCHA_SECRET_KEY!;
      const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret, response: token }),
        cache: 'no-store',
      }).then(r => r.json());
      if (!verify.success) return { ok: false, message: 'Vérification reCAPTCHA échouée.' };
    } catch {
      return { ok: false, message: 'Erreur reCAPTCHA.' };
    }
  }

  const fullName = `${firstName} ${name}`.trim();
  const subjectLine = `[Contact] ${subject} — ${fullName}`;

  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: subjectLine,
      text: `De: ${fullName} <${email}>\nSujet: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5">
          <p><strong>De :</strong> ${fullName} &lt;${email}&gt;</p>
          <p><strong>Objet :</strong> ${subject}</p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });
    return { ok: true, message: 'Message envoyé ✅' };
  } catch (e) {
    console.error(e);
    return { ok: false, message: "Impossible d'envoyer le message." };
  }
}

