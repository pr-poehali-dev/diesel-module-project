import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-secondary via-secondary to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Аренда дизельных блочно-модульных котельных
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Профессиональные решения для отопления промышленных и коммерческих объектов
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Icon name="Zap" size={20} className="mr-2" />
                Получить предложение
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-white/80">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-white/80">Сервис</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15</div>
                <div className="text-sm text-white/80">Лет опыта</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/6c8453d8-c412-4390-b4b4-52ad223d9e85/files/0c59f37e-c4e0-424d-9d41-6618afc8b58e.jpg" 
              alt="Блочно-модульная котельная на базе 20-футового контейнера"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
