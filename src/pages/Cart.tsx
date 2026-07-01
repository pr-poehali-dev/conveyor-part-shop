import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { sendLead } from '@/lib/leads';

const Cart = () => {
  const { items, removeItem, updateQty, clear, totalCount } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: 'Заполните имя и телефон', variant: 'destructive' });
      return;
    }
    setLoading(true);
    const res = await sendLead({
      type: 'order',
      ...form,
      items: items.map((i) => ({ name: i.name, qty: i.qty })),
    });
    setLoading(false);
    if (res.ok) {
      toast({ title: 'Заказ оформлен', description: 'Менеджер свяжется для подтверждения и расчёта.' });
      clear();
      setForm({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <Layout>
      <section className="metal-texture text-white">
        <div className="container py-14">
          <span className="text-sm uppercase tracking-widest text-accent">Оформление</span>
          <h1 className="font-display text-4xl font-700 uppercase md:text-5xl">Корзина</h1>
        </div>
      </section>

      <section className="container py-14">
        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
            <p className="text-muted-foreground">Корзина пуста. Добавьте товары из каталога.</p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                    <img src={item.image} alt={item.name} className="h-24 w-24 shrink-0 rounded object-cover" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <Link to={`/product/${item.slug}`} className="font-display font-600 text-foreground hover:text-accent">
                          {item.name}
                        </Link>
                        <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive" aria-label="Удалить">
                          <Icon name="Trash2" size={18} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="flex h-8 w-8 items-center justify-center rounded border border-border hover:border-accent"
                          >
                            <Icon name="Minus" size={14} />
                          </button>
                          <span className="w-8 text-center font-500">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded border border-border hover:border-accent"
                          >
                            <Icon name="Plus" size={14} />
                          </button>
                        </div>
                        <span className="font-display font-700 text-accent">{item.priceHint}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={clear} className="mt-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive">
                <Icon name="Trash2" size={14} /> Очистить корзину
              </button>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-1 font-display text-xl font-700 uppercase text-foreground">Оформить заказ</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Позиций в заказе: {totalCount}. Итоговую стоимость менеджер рассчитает и подтвердит.
              </p>
              <form onSubmit={submit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="o-name">Имя *</Label>
                  <Input id="o-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Иван Иванов" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="o-phone">Телефон *</Label>
                  <Input id="o-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="o-email">Email</Label>
                  <Input id="o-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="mail@company.ru" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="o-message">Комментарий</Label>
                  <Textarea id="o-message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Адрес доставки, пожелания" />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
                  {loading ? 'Отправляем…' : 'Оформить заказ'}
                </Button>
              </form>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
