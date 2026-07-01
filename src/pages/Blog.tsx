import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { blogPosts } from '@/data/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

const Blog = () => {
  return (
    <Layout>
      <section className="metal-texture text-white">
        <div className="container py-14">
          <span className="text-sm uppercase tracking-widest text-accent">Полезное</span>
          <h1 className="font-display text-4xl font-700 uppercase md:text-5xl">Блог</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Статьи о выборе, эксплуатации и обслуживании конвейерного оборудования и комплектующих.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-accent">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-display text-xl font-600 leading-tight text-foreground group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{formatDate(post.date)}</span>
                <span className="flex items-center gap-1 text-accent">
                  Читать <Icon name="ArrowRight" size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
