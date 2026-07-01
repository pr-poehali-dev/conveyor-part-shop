import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          className={`absolute left-3 top-3 uppercase ${
            product.inStock
              ? 'bg-accent text-accent-foreground'
              : 'bg-graphite text-white'
          }`}
        >
          {product.inStock ? 'В наличии' : 'Под заказ'}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
          {product.categoryLabel}
        </span>
        <h3 className="font-display text-lg font-600 leading-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-700 text-accent">{product.priceHint}</span>
          <span className="flex items-center gap-1 text-sm font-500 text-foreground transition-colors group-hover:text-accent">
            Подробнее <Icon name="ArrowRight" size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
