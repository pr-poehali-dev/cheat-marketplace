import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const games = [
  { id: 1, name: 'CS2', icon: '🎯', features: ['Aimbot', 'ESP', 'Radar'], status: 'Undetected' },
  { id: 2, name: 'Valorant', icon: '⚡', features: ['Wallhack', 'Triggerbot', 'Glow'], status: 'Undetected' },
  { id: 3, name: 'Apex Legends', icon: '🔫', features: ['No Recoil', 'ESP', 'Aim Assist'], status: 'Undetected' },
  { id: 4, name: 'Fortnite', icon: '🏆', features: ['Aimbot', 'ESP', 'Skeleton'], status: 'Undetected' },
  { id: 5, name: 'Warzone', icon: '💣', features: ['UAV', 'ESP', 'Aimbot'], status: 'Undetected' },
  { id: 6, name: 'Rust', icon: '🛡️', features: ['ESP', 'Aimbot', 'No Recoil'], status: 'Undetected' },
];

const plans = [
  { id: 'day', name: '1 День', price: 500, period: 'день', popular: false },
  { id: 'week', name: '7 Дней', price: 2500, period: 'неделя', popular: true },
  { id: 'month', name: '30 Дней', price: 7500, period: 'месяц', popular: false },
  { id: 'lifetime', name: 'Навсегда', price: 25000, period: 'lifetime', popular: false },
];

const faqs = [
  { q: 'Безопасно ли использовать читы?', a: 'Мы используем передовые технологии защиты от античитов. Все наши продукты регулярно обновляются и тестируются.' },
  { q: 'Как получить лицензионный ключ?', a: 'После оплаты ключ автоматически отправляется на вашу почту в течение 1-5 минут.' },
  { q: 'Есть ли гарантия возврата?', a: 'Мы предоставляем возврат средств в течение 24 часов, если продукт не работает по нашей вине.' },
  { q: 'Как часто обновляются читы?', a: 'Обновления выходят в течение 2-6 часов после каждого патча игры.' },
  { q: 'Работает ли на Windows 11?', a: 'Да, все наши продукты полностью совместимы с Windows 10 и Windows 11.' },
];

const reviews = [
  { id: 1, author: 'Александр М.', rating: 5, text: 'Лучшие читы, которыми я пользовался. Работают стабильно, поддержка отвечает быстро.' },
  { id: 2, author: 'Дмитрий К.', rating: 5, text: 'Купил на месяц, не пожалел. ESP работает идеально, бан не получил.' },
  { id: 3, author: 'Игорь С.', rating: 5, text: 'Отличное соотношение цены и качества. Рекомендую!' },
];

export default function Index() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">CheatHub</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#games" className="text-sm hover:text-primary transition-colors">Игры</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
            Купить
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Icon name="Shield" className="w-3 h-3 mr-1" />
            100% Undetected
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Премиум читы для профессиональных игроков
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите конкурентное преимущество с нашими надежными и безопасными решениями. 
            Поддержка 24/7 и мгновенная выдача лицензий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="games" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Поддерживаемые игры</h3>
          <p className="text-muted-foreground">Выберите вашу игру и получите доступ к лучшим функциям</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card 
              key={game.id} 
              className="hover:border-primary/50 transition-all cursor-pointer hover:scale-105"
              onClick={() => setSelectedGame(game.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">{game.icon}</span>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                    {game.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{game.name}</CardTitle>
                <CardDescription>Расширенные возможности</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {game.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Icon name="Eye" className="w-4 h-4 mr-2" />
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Тарифные планы</h3>
          <p className="text-muted-foreground">Выберите оптимальный период лицензии</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Популярный</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-foreground">{plan.price}₽</span>
                  {plan.period !== 'lifetime' && <span className="text-muted-foreground">/{plan.period}</span>}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" className="w-4 h-4 text-green-400" />
                  <span>Все функции</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" className="w-4 h-4 text-green-400" />
                  <span>Мгновенная выдача</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" className="w-4 h-4 text-green-400" />
                  <span>Обновления</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" className="w-4 h-4 text-green-400" />
                  <span>Поддержка 24/7</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  <Icon name="CreditCard" className="w-4 h-4 mr-2" />
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h3>
          <p className="text-muted-foreground">Ответы на популярные вопросы</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="reviews" className="container mx-auto px-4 py-20 bg-gradient-to-b from-background to-card/50">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h3>
          <p className="text-muted-foreground">Что говорят наши пользователи</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.author}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Поддержка 24/7</h3>
          <p className="text-muted-foreground mb-8">
            Свяжитесь с нами любым удобным способом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Telegram
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="MessageSquare" className="w-5 h-5 mr-2" />
              Discord
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Mail" className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">CheatHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CheatHub. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Правила использования
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Конфиденциальность
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
