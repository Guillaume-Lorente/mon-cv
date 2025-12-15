'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { sendContact } from './actions';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, params: { sitekey: string }) => number;
      reset: (id?: number) => void;
    };
  }
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, { ok: false });
  const SITE_KEY: string | undefined = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  // Render explicite dès que script + div sont prêts
  useEffect(() => {
    if (!SITE_KEY) return;
    if (!scriptReady) return;
    if (!recaptchaRef.current) return;
    if (!window.grecaptcha) return;

    // évite de re-render 2x
    if (widgetIdRef.current === null) {
      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: SITE_KEY,
      });
    }
  }, [SITE_KEY, scriptReady]);

  useEffect(() => {
  if (state.ok && !pending) {
    formRef.current?.reset();                               
    formRef.current?.querySelector('input')?.focus();       
    if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
}
  }
}, [state.ok, pending]);

  return (
    <>
      {SITE_KEY && (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setScriptReady(true)}
        />
      )}

      <form ref={formRef} action={formAction} className="grid gap-3 max-w-xl">
        <input
          required
          name="firstName"
          placeholder="Votre prénom"
          autoComplete="given-name"
          className="border rounded-md px-3 py-2"
        />
        <input
          required
          name="name"
          placeholder="Votre nom"
          autoComplete="family-name"
          className="border rounded-md px-3 py-2"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Votre email"
          autoComplete="email"
          className="border rounded-md px-3 py-2"
        />
        <input
          required
          name="subject"
          placeholder="Objet du message"
          className="border rounded-md px-3 py-2"
        />
        <textarea
          required
          name="message"
          placeholder="Votre message"
          className="border rounded-md px-3 py-2 min-h-32"
        />

        {/* Honeypot invisible */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        {SITE_KEY && (
          <div
            ref={recaptchaRef}
            // petit garde-fou visuel pour éviter “vide”
            className="min-h-[78px]"
          />
        )}

        <Button type="submit" disabled={pending} className="mt-1">
          {pending ? 'Envoi…' : 'Envoyer'}
        </Button>

        {state.message && (
          <div
            className={cn(
              'mt-3 rounded-lg border p-3 text-sm',
              state.ok
                ? 'border-primary-300 bg-primary-50 text-primary-900'
                : 'border-destructive/30 bg-destructive/10 text-destructive'
            )}
          >
            <div className="flex items-center gap-2">
              {state.ok ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
              <span>{state.message}</span>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
