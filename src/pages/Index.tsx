import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import LeadDialog from '@/components/LeadDialog';
import { products, categories } from '@/data/products';

const HERO = 'https://cdn.poehali.dev/projects/b415b45c-979e-4225-9e40-94dd7ded346d/files/b6dfbf91-3b6c-446d-9cc3-fc65d1d1aaed.jpg';

const advantages = [
  { icon: 'Factory', title: 'Собственное производство', text: 'Изготавливаем барабаны и роликоопоры по чертежам заказчика.' },
  { icon: 'Truck', title: 'Отгрузка по всей России', text: 'Доставка транспортными компаниями и своим автопарком.' },
  { icon: 'PackageCheck', title: 'Склад в наличии', text: 'Ходовые ролики и ленты всегда есть на складе.' },
  { icon: 'BadgeCheck', title: 'Гарантия качества', text: 'Комплектующие с сертификатами и заявленным ресурсом.' },
];

const catIcons: Record<string, string> = {
  rollers: 'Circle',
  belts: 'AlignJustify',
  drums: 'Cylinder',
  idlers: 'Triangle',
};

const Index = () => {
  const popular = products.slice(0, 4);

  return (
    <Layout>
      <section className="relative overflow-hidden metal-texture text-white">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/80 to-graphite/40" />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">
              <Icon name="Wrench" size={14} /> Комплектующие для конвейеров
            </div>
            <h1 className="font-display text-4xl font-700 uppercase leading-tight md:text-6xl">
              Запчасти для конвейерного оборудования
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Ролики, ленты, барабаны и роликоопоры для промышленных конвейеров.
              Со склада и под заказ — с гарантией и доставкой по России.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/catalog">
                  Перейти в каталог <Icon name="ArrowRight" size={18} className="ml-2" />
                </Link>
              </Button>
              <LeadDialog
                type="form"
                title="Подбор комплектующих"
                description="Опишите задачу — подберём запчасти и рассчитаем стоимость."
                trigger={
                  <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                    Получить консультацию
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="container grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                <Icon name={a.icon} size={24} />
              </div>
              <div>
                <h3 className="font-display text-base font-600 uppercase text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">Каталог</span>
            <h2 className="font-display text-3xl font-700 uppercase text-foreground">Категории продукции</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/catalog?cat=${c.id}`}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded bg-graphite text-white transition-colors group-hover:bg-accent">
                <Icon name={catIcons[c.id]} size={26} />
              </div>
              <div>
                <div className="font-display text-lg font-600 uppercase text-foreground">{c.label}</div>
                <span className="flex items-center gap-1 text-sm text-accent">
                  Смотреть <Icon name="ArrowRight" size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-sm uppercase tracking-widest text-accent">Хиты продаж</span>
              <h2 className="font-display text-3xl font-700 uppercase text-foreground">Популярные позиции</h2>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link to="/catalog">Весь каталог</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="metal-texture text-white">
        <div className="container flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-700 uppercase md:text-4xl">
            Нужна консультация по подбору запчастей?
          </h2>
          <p className="max-w-xl text-white/80">
            Пришлите чертёж или опишите ваш конвейер — инженеры подберут комплектующие и рассчитают стоимость.
          </p>
          <LeadDialog
            type="form"
            title="Заявка на подбор"
            trigger={
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Оставить заявку
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
