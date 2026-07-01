import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import LeadDialog from '@/components/LeadDialog';

const services = [
  { icon: 'Factory', title: 'Производство комплектующих', text: 'Изготавливаем барабаны, роликоопоры и ролики по чертежам и техническим заданиям заказчика.' },
  { icon: 'Ruler', title: 'Подбор запчастей', text: 'Инженеры подберут комплектующие под конкретный конвейер по параметрам и условиям эксплуатации.' },
  { icon: 'Wrench', title: 'Стыковка и ремонт лент', text: 'Горячая и холодная вулканизация конвейерных лент на объекте заказчика.' },
  { icon: 'Truck', title: 'Доставка по России', text: 'Отгрузка транспортными компаниями и собственным автопарком в любой регион.' },
  { icon: 'ClipboardList', title: 'Комплектация под ключ', text: 'Полный комплект запчастей для монтажа или модернизации конвейерной линии.' },
  { icon: 'Headset', title: 'Техническая поддержка', text: 'Консультации по эксплуатации, обслуживанию и продлению ресурса оборудования.' },
];

const steps = [
  { n: '01', title: 'Заявка', text: 'Оставляете заявку или присылаете чертёж.' },
  { n: '02', title: 'Расчёт', text: 'Подбираем комплектующие и считаем стоимость.' },
  { n: '03', title: 'Производство', text: 'Изготавливаем или комплектуем со склада.' },
  { n: '04', title: 'Отгрузка', text: 'Доставляем в срок с документами и гарантией.' },
];

const Services = () => {
  return (
    <Layout>
      <section className="metal-texture text-white">
        <div className="container py-14">
          <span className="text-sm uppercase tracking-widest text-accent">Что мы делаем</span>
          <h1 className="font-display text-4xl font-700 uppercase md:text-5xl">Услуги</h1>
          <p className="mt-3 max-w-2xl text-white/75">
            Полный цикл: от подбора и производства комплектующих до доставки и обслуживания конвейеров.
          </p>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent/10 text-accent">
                <Icon name={s.icon} size={24} />
              </div>
              <h3 className="font-display text-lg font-600 uppercase text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="container">
          <h2 className="mb-10 font-display text-3xl font-700 uppercase text-foreground">Как мы работаем</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-lg border border-border bg-card p-6">
                <span className="font-display text-4xl font-700 text-accent/30">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-600 uppercase text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="flex flex-col items-center gap-5 rounded-lg metal-texture p-10 text-center text-white">
          <h2 className="font-display text-2xl font-700 uppercase md:text-3xl">Обсудим ваш проект?</h2>
          <p className="max-w-xl text-white/80">Расскажите о задаче — предложим решение и рассчитаем стоимость.</p>
          <LeadDialog
            type="form"
            title="Заявка на услугу"
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

export default Services;
