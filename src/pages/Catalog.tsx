import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState<string>(searchParams.get('cat') || 'all');
  const [query, setQuery] = useState('');
  const [onlyStock, setOnlyStock] = useState(false);

  useEffect(() => {
    setActive(searchParams.get('cat') || 'all');
  }, [searchParams]);

  const selectCategory = (id: string) => {
    setActive(id);
    if (id === 'all') setSearchParams({});
    else setSearchParams({ cat: id });
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const byCat = active === 'all' || p.category === active;
      const byQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const byStock = !onlyStock || p.inStock;
      return byCat && byQuery && byStock;
    });
  }, [active, query, onlyStock]);

  return (
    <Layout>
      <section className="metal-texture text-white">
        <div className="container py-14">
          <span className="text-sm uppercase tracking-widest text-accent">Продукция</span>
          <h1 className="font-display text-4xl font-700 uppercase md:text-5xl">Каталог комплектующих</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Ролики, ленты, барабаны и роликоопоры для промышленных конвейеров. Найдите нужную позицию или воспользуйтесь фильтром.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectCategory('all')}
              className={`rounded border px-4 py-2 text-sm font-500 uppercase tracking-wide transition-colors ${
                active === 'all'
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border bg-card text-foreground hover:border-accent'
              }`}
            >
              Все
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => selectCategory(c.id)}
                className={`rounded border px-4 py-2 text-sm font-500 uppercase tracking-wide transition-colors ${
                  active === c.id
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-border bg-card text-foreground hover:border-accent'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                checked={onlyStock}
                onChange={(e) => setOnlyStock(e.target.checked)}
                className="h-4 w-4 accent-[hsl(var(--accent))]"
              />
              Только в наличии
            </label>
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по названию"
                className="w-full pl-10 sm:w-64"
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-center">
            <Icon name="SearchX" size={48} className="text-muted-foreground" />
            <p className="text-muted-foreground">Ничего не найдено. Измените фильтр или запрос.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Catalog;
