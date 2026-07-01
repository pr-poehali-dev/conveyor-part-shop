import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { getPostBySlug, blogPosts } from '@/data/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <div className="container flex flex-col items-center gap-4 py-24 text-center">
          <Icon name="FileX" size={48} className="text-muted-foreground" />
          <h1 className="font-display text-2xl uppercase">Статья не найдена</h1>
          <Button asChild><Link to="/blog">В блог</Link></Button>
        </div>
      </Layout>
    );
  }

  const other = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <Layout>
      <div className="border-b border-border bg-secondary/40">
        <div className="container flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/blog" className="hover:text-accent">Блог</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{post.title}</span>
        </div>
      </div>

      <article className="container max-w-3xl py-12">
        <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-accent">{post.category}</span>
          <span>•</span>
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-display text-3xl font-700 uppercase leading-tight text-foreground md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-8 space-y-5">
          {post.content.map((p, i) => (
            <p key={i} className="text-foreground leading-relaxed">{p}</p>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <Button asChild variant="outline">
            <Link to="/blog"><Icon name="ArrowLeft" size={16} className="mr-2" /> Все статьи</Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/catalog">В каталог</Link>
          </Button>
        </div>
      </article>

      {other.length > 0 && (
        <section className="bg-secondary/40 py-14">
          <div className="container max-w-3xl">
            <h2 className="mb-6 font-display text-xl font-700 uppercase text-foreground">Читайте также</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {other.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent">
                  <span className="text-xs uppercase tracking-widest text-accent">{p.category}</span>
                  <h3 className="mt-1 font-display text-lg font-600 text-foreground group-hover:text-accent">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
