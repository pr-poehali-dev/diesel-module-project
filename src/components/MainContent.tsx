import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const MainContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправка формы:', formData);
  };

  return (
    <>
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл обслуживания дизельных блочно-модульных котельных
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Boxes" className="text-primary" size={28} />
                </div>
                <CardTitle>Аренда котельных</CardTitle>
                <CardDescription>Гибкие условия аренды блочно-модульных котельных от 1 месяца</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Plug" className="text-accent" size={28} />
                </div>
                <CardTitle>Подключение</CardTitle>
                <CardDescription>Монтаж и подключение оборудования под ключ с пусконаладочными работами</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="text-primary" size={28} />
                </div>
                <CardTitle>Сервис и обслуживание</CardTitle>
                <CardDescription>Круглосуточная техподдержка и регулярное техническое обслуживание</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Fuel" className="text-accent" size={28} />
                </div>
                <CardTitle>Заправка топливом</CardTitle>
                <CardDescription>Оперативная доставка и заправка дизельным топливом с контролем качества</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наше оборудование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные блочно-модульные котельные европейского производства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/6c8453d8-c412-4390-b4b4-52ad223d9e85/files/009779c4-e94f-4080-b0ea-030b24cadd12.jpg"
                alt="Котельная малой мощности"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Малой мощности</CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Gauge" size={16} className="text-primary" />
                    <span>Мощность: 100-500 кВт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Home" size={16} className="text-primary" />
                    <span>Площадь: 1000-5000 м²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span>КПД: до 92%</span>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-primary border-2">
              <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                Популярное
              </div>
              <img 
                src="https://cdn.poehali.dev/projects/6c8453d8-c412-4390-b4b4-52ad223d9e85/files/b8d0775a-87f7-4596-8ca7-7c024e863fe4.jpg"
                alt="Котельная средней мощности"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Средней мощности</CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Gauge" size={16} className="text-primary" />
                    <span>Мощность: 500-2000 кВт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Building2" size={16} className="text-primary" />
                    <span>Площадь: 5000-20000 м²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span>КПД: до 94%</span>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/6c8453d8-c412-4390-b4b4-52ad223d9e85/files/a5a98a01-9fe5-4846-992b-b700e044273d.jpg"
                alt="Котельная большой мощности"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Большой мощности</CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Gauge" size={16} className="text-primary" />
                    <span>Мощность: 2000+ кВт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Factory" size={16} className="text-primary" />
                    <span>Площадь: 20000+ м²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span>КПД: до 95%</span>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Преимущества работы с Городские Тепло Системы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Clock" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Быстрый монтаж</h3>
                <p className="text-muted-foreground">Установка и запуск котельной за 3-5 дней</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Надёжность</h3>
                <p className="text-muted-foreground">Сертифицированное оборудование с гарантией</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="HeadphonesIcon" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Поддержка 24/7</h3>
                <p className="text-muted-foreground">Круглосуточная диспетчерская служба</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Settings" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Автоматизация</h3>
                <p className="text-muted-foreground">Удалённый мониторинг и управление</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Leaf" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Экологичность</h3>
                <p className="text-muted-foreground">Соответствие стандартам Евро-5</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="PiggyBank" className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Экономия</h3>
                <p className="text-muted-foreground">Оптимизация расхода топлива до 30%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешного внедрения наших решений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" className="text-primary" size={24} />
                </div>
                <CardTitle>Бизнес-центр "Альфа"</CardTitle>
                <CardDescription>
                  Установка котельной 1500 кВт для автономного отопления 15000 м² офисных помещений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>Москва</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Factory" className="text-accent" size={24} />
                </div>
                <CardTitle>Завод "ПромТех"</CardTitle>
                <CardDescription>
                  Комплекс из 3 котельных общей мощностью 5000 кВт для производственных цехов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>Санкт-Петербург</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Warehouse" className="text-primary" size={24} />
                </div>
                <CardTitle>Складской комплекс</CardTitle>
                <CardDescription>
                  Мобильная котельная 800 кВт для временного отопления на период строительства
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>Казань</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74951234567" className="text-primary hover:underline">+7 (495) 123-45-67</a>
                    <div className="text-sm text-muted-foreground">Круглосуточно</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@gts.ru" className="text-primary hover:underline">info@gts.ru</a>
                    <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Промышленная, д. 12</div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваш объект и требования"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
