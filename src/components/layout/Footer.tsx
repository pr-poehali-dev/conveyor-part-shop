import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="metal-texture text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-accent">
              <Icon name="Cog" className="text-accent-foreground" size={20} />
            </div>
            <span className="font-display text-lg font-700 uppercase">Конвейер-Запчасть</span>
          </div>
          <p className="text-sm text-white/70">
            Комплектующие для конвейерного оборудования: ролики, ленты, барабаны и роликоопоры.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm uppercase tracking-widest text-accent">Разделы</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/catalog" className="hover:text-accent">Каталог</Link></li>
            <li><Link to="/services" className="hover:text-accent">Услуги</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Блог</Link></li>
            <li><Link to="/contacts" className="hover:text-accent">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm uppercase tracking-widest text-accent">Каталог</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/catalog?cat=rollers" className="hover:text-accent">Ролики</Link></li>
            <li><Link to="/catalog?cat=belts" className="hover:text-accent">Ленты</Link></li>
            <li><Link to="/catalog?cat=drums" className="hover:text-accent">Барабаны</Link></li>
            <li><Link to="/catalog?cat=idlers" className="hover:text-accent">Роликоопоры</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-display text-sm uppercase tracking-widest text-accent">Контакты</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="text-accent" /> +7 (800) 000-00-00
            </li>
            <li className="flex items-center gap-2">
              <Icon name="Mail" size={16} className="text-accent" /> zakaz@konveyer-zapchast.ru
            </li>
            <li className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-accent" /> Россия, г. Москва
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} Конвейер-Запчасть. Все права защищены.</span>
          <span>Поставка комплектующих для конвейеров по всей России</span>
        </div>
      </div>
    </footer>
  );
}
