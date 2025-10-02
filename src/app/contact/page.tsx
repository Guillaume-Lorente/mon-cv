import type { Metadata } from 'next';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact — Guillaume Lorente',
  description: 'Écrivez-moi via ce formulaire.',
};

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <header>
        <h1 className="text-3xl font-bold">Me contacter</h1>
        <p className="mt-2 text-muted-foreground">
  N’hésitez pas à me joindre !
</p>

      </header>
      <ContactForm />
    </div>
  );
}