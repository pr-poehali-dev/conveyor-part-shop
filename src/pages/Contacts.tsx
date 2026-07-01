import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { sendLead } from '@/lib/leads';

const contacts = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (800) 000-00-00', href: 'tel:+78000000000' },
  { icon: 'Mail', label: 'Email', value: 'zakaz@konveyer-zapchast.ru', href: 'mailto:zakaz@konveyer-zapchast.ru' },
  { icon: 'MapPin', label: 'Адрес', value: 'Россия, г. Москва', href: undefined },
  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт, 9:00–18:00', href: undefined },
];

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: 'Заполните имя и телефон', variant: 'destructive' });
      return;
    }
    setLoading(true);
    const res = await sendLead({ type: 'form', ...form });
    setLoading(false);
    if (res.ok) {
      toast({ title: 'Заявка отправлена', description: 'Мы свяжемся с вами в ближайшее время.' });
      setForm({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <Layout>
      <section className="metal-texture text-white">
        <div className="container py-14">
          <span className="text-sm uppercase tracking-widest text-accent">Связаться с нами</span>
          <h1 className="font-display text-4xl font-700 uppercase md:text-5xl">Контакты</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Ответим на вопросы, подберём комплектующие и подготовим коммерческое предложение.
          </p>
        </div>
      </section>

      <section className="container grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-display text-2xl font-700 uppercase text-foreground">Реквизиты для связи</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((c) => (
              <div key={c.label} className="rounded-lg border border-border bg-card p-5">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-accent/10 text-accent">
                  <Icon name={c.icon} size={20} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="font-500 text-foreground hover:text-accent">{c.value}</a>
                ) : (
                  <div className="font-500 text-foreground">{c.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 font-display text-2xl font-700 uppercase text-foreground">Написать нам</h2>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="c-name">Имя *</Label>
              <Input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Иван Иванов" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="c-phone">Телефон *</Label>
                <Input id="c-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-email">Email</Label>
                <Input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="mail@company.ru" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="c-message">Сообщение</Label>
              <Textarea id="c-message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Опишите задачу или укажите нужные позиции" />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
              {loading ? 'Отправляем…' : 'Отправить'}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
