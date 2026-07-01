import { useState, ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';
import { sendLead, LeadType } from '@/lib/leads';

interface LeadDialogProps {
  trigger: ReactNode;
  type: LeadType;
  title?: string;
  description?: string;
  product?: string;
  withMessage?: boolean;
}

export default function LeadDialog({
  trigger,
  type,
  title = 'Оставить заявку',
  description = 'Мы перезвоним в течение рабочего дня и подготовим предложение.',
  product,
  withMessage = true,
}: LeadDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: 'Заполните имя и телефон', variant: 'destructive' });
      return;
    }
    setLoading(true);
    const res = await sendLead({ type, product, ...form });
    setLoading(false);
    if (res.ok) {
      toast({ title: 'Заявка отправлена', description: 'Наш менеджер скоро свяжется с вами.' });
      setForm({ name: '', phone: '', email: '', message: '' });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display uppercase">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {product && (
          <div className="flex items-center gap-2 rounded bg-secondary px-3 py-2 text-sm">
            <Icon name="Package" size={16} className="text-accent" />
            <span className="text-foreground">{product}</span>
          </div>
        )}
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="ld-name">Имя *</Label>
            <Input
              id="ld-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Иван Иванов"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ld-phone">Телефон *</Label>
            <Input
              id="ld-phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ld-email">Email</Label>
            <Input
              id="ld-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="mail@company.ru"
            />
          </div>
          {withMessage && (
            <div className="space-y-1.5">
              <Label htmlFor="ld-message">Комментарий</Label>
              <Textarea
                id="ld-message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Укажите модель, размеры или количество"
              />
            </div>
          )}
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
            {loading ? 'Отправляем…' : 'Отправить заявку'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
