import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Городские Тепло Системы</span>
            </div>
            <p className="text-white/70 text-sm">
              Профессиональные решения в области промышленного отопления с 2009 года
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Аренда котельных</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Подключение</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Сервисное обслуживание</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Заправка топливом</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Сертификаты</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@gts.ru</li>
              <li>г. Москва, ул. Промышленная, 12</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          © 2024 Городские Тепло Системы. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
