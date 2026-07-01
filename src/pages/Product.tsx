import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LeadDialog from '@/components/LeadDialog';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

const Product = () => {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();

  if (!product) {
    return (
      <Layout>
        <div className="container flex flex-col items-center gap-4 py-24 text-center">
          <Icon name="PackageX" size={48} className="text-muted-foreground" />
          <h1 className="font-display text-2xl uppercase">Товар не найден</h1>
          <Button asChild>
            <Link to="/catalog">Вернуться в каталог</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const addToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      priceHint: product.priceHint,
    });
    toast({ title: 'Добавлено в корзину', description: product.name });
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/40">
        <div className="container flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/catalog" className="hover:text-accent">Каталог</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Hero of product */}
      <section className="container grid gap-10 py-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg border border-border bg-secondary">
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          <Badge
            className={`absolute left-4 top-4 uppercase ${
              product.inStock ? 'bg-accent text-accent-foreground' : 'bg-graphite text-white'
            }`}
          >
            {product.inStock ? 'В наличии' : 'Под заказ'}
          </Badge>
        </div>

        <div className="flex flex-col">
          <span className="text-sm uppercase tracking-widest text-accent">{product.categoryLabel}</span>
          <h1 className="mt-1 font-display text-3xl font-700 uppercase leading-tight text-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{product.tagline}</p>

          <div className="mt-6 rounded-lg border border-border bg-card p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Цена</span>
              <span className="font-display text-3xl font-700 text-accent">{product.priceHint}</span>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button onClick={addToCart} size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="ShoppingCart" size={18} className="mr-2" /> В корзину
              </Button>
              <LeadDialog
                type="price"
                title="Узнать цену"
                description="Оставьте контакты — вышлем актуальную стоимость и наличие."
                product={product.name}
                trigger={
                  <Button size="lg" variant="outline" className="flex-1">
                    Запросить цену
                  </Button>
                }
              />
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-foreground">
              <Icon name="Truck" size={16} className="text-accent" /> Доставка по всей России
            </li>
            <li className="flex items-center gap-2 text-foreground">
              <Icon name="FileCheck" size={16} className="text-accent" /> Сертификаты и гарантия
            </li>
            <li className="flex items-center gap-2 text-foreground">
              <Icon name="Ruler" size={16} className="text-accent" /> Изготовление по размерам заказчика
            </li>
          </ul>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-secondary/40 py-14">
        <div className="container">
          <h2 className="mb-6 font-display text-2xl font-700 uppercase text-foreground">Характеристики</h2>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {product.specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between bg-card px-5 py-4">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-500 text-foreground">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-14">
        <h2 className="mb-8 font-display text-2xl font-700 uppercase text-foreground">Преимущества</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {product.features.map((f) => (
            <div key={f.title} className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent/10 text-accent">
                <Icon name={f.icon} size={24} />
              </div>
              <h3 className="font-display text-lg font-600 uppercase text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="metal-texture text-white">
        <div className="container py-14">
          <h2 className="mb-8 font-display text-2xl font-700 uppercase">Область применения</h2>
          <div className="flex flex-wrap gap-3">
            {product.applications.map((a) => (
              <span key={a} className="flex items-center gap-2 rounded border border-white/20 bg-white/5 px-4 py-2 text-sm">
                <Icon name="Check" size={16} className="text-accent" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-14">
        <div className="flex flex-col items-center gap-5 rounded-lg border border-border bg-card p-10 text-center">
          <h2 className="font-display text-2xl font-700 uppercase text-foreground">Не нашли нужный размер?</h2>
          <p className="max-w-xl text-muted-foreground">
            Изготовим {product.categoryLabel.toLowerCase()} по вашим чертежам. Оставьте заявку — рассчитаем стоимость и сроки.
          </p>
          <LeadDialog
            type="form"
            title="Заявка на изготовление"
            product={product.name}
            trigger={
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Оставить заявку
              </Button>
            }
          />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary/40 py-14">
          <div className="container">
            <h2 className="mb-8 font-display text-2xl font-700 uppercase text-foreground">Похожие товары</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Product;
