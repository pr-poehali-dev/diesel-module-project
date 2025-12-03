import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">Городские Тепло Системы</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#services" className="text-white hover:text-accent transition-colors">Услуги</a>
          <a href="#equipment" className="text-white hover:text-accent transition-colors">Оборудование</a>
          <a href="#advantages" className="text-white hover:text-accent transition-colors">Преимущества</a>
          <a href="#portfolio" className="text-white hover:text-accent transition-colors">Портфолио</a>
          <a href="#contacts" className="text-white hover:text-accent transition-colors">Контакты</a>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Icon name="Phone" size={18} className="mr-2" />
          Заказать звонок
        </Button>
      </div>
    </nav>
  );
};

export default Header;
