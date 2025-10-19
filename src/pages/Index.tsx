import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedConfig, setSelectedConfig] = useState('premium');
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Платёж обрабатывается",
      description: "Ваш VPN-доступ будет активирован в течение минуты",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Icon name="Shield" size={40} className="text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">CarpetVPN</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Быстрый и надёжный доступ к интернету без границ
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="config">
              <Icon name="Settings" size={18} className="mr-2" />
              Конфигурация
            </TabsTrigger>
            <TabsTrigger value="payment">
              <Icon name="CreditCard" size={18} className="mr-2" />
              Оплата
            </TabsTrigger>
            <TabsTrigger value="instructions">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Инструкции
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6 animate-scale-in">
            <Card>
              <CardHeader>
                <CardTitle>Защитите свои данные</CardTitle>
                <CardDescription>
                  Премиальный VPN-сервис с высокой скоростью и надёжной защитой
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                    <Icon name="Zap" size={32} className="text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Высокая скорость</h3>
                    <p className="text-sm text-muted-foreground">Стабильность подключения</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                    <Icon name="Lock" size={32} className="text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Шифрование</h3>
                    <p className="text-sm text-muted-foreground">AES-256</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                    <Icon name="Globe" size={32} className="text-primary mb-2" />
                    <h3 className="font-semibold mb-1">США и Нидерланды</h3>
                    <p className="text-sm text-muted-foreground">Быстрые серверы</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setActiveTab('config')} className="w-full" size="lg">
                  Начать использовать
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="config" className="space-y-6 animate-scale-in">
            <Card>
              <CardHeader>
                <CardTitle>Выберите конфигурацию</CardTitle>
                <CardDescription>
                  Оптимальные настройки для вашего устройства
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div
                    onClick={() => setSelectedConfig('premium')}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedConfig === 'premium'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          Premium VPN
                          <Badge variant="default">Рекомендуем</Badge>
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          WireGuard протокол, максимальная скорость
                        </p>
                      </div>
                      {selectedConfig === 'premium' && (
                        <Icon name="CheckCircle2" size={24} className="text-primary" />
                      )}
                    </div>
                    <Separator className="my-3" />
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Скорость до 1 Гбит/с
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Неограниченный трафик
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        5 одновременных подключений
                      </li>
                    </ul>
                  </div>

                  <div
                    onClick={() => setSelectedConfig('standard')}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedConfig === 'standard'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">Standard VPN</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          OpenVPN протокол, стабильное соединение
                        </p>
                      </div>
                      {selectedConfig === 'standard' && (
                        <Icon name="CheckCircle2" size={24} className="text-primary" />
                      )}
                    </div>
                    <Separator className="my-3" />
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Скорость до 500 Мбит/с
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Неограниченный трафик
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        3 одновременных подключения
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setActiveTab('payment')} className="w-full" size="lg">
                  Продолжить
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6 animate-scale-in">
            <Card>
              <CardHeader>
                <CardTitle>Оплата доступа</CardTitle>
                <CardDescription>
                  Защищённая оплата банковской картой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Конфигурация:</span>
                    <span className="font-semibold">
                      {selectedConfig === 'premium' ? 'Premium VPN' : 'Standard VPN'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Срок:</span>
                    <span className="font-semibold">30 дней</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Итого:</span>
                    <span className="text-2xl font-bold text-primary">150 ₽</span>
                  </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Номер карты</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Срок действия</Label>
                      <Input id="expiry" placeholder="MM/YY" maxLength={5} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" maxLength={3} type="password" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email для подтверждения</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" required />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Lock" size={18} className="mr-2" />
                    Оплатить 150 ₽
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Защищённая оплата. Ваши данные надёжно зашифрованы
                  </p>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructions" className="space-y-6 animate-scale-in">
            <Card>
              <CardHeader>
                <CardTitle>Инструкции по подключению</CardTitle>
                <CardDescription>
                  Простая настройка за 3 минуты
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Smartphone" size={20} className="text-primary" />
                    iOS / Android
                  </h3>
                  <ol className="space-y-2 text-sm ml-7">
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">1.</span>
                      <span>Скачайте приложение WireGuard из App Store или Google Play</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">2.</span>
                      <span>Откройте письмо с конфигурацией на вашей почте</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">3.</span>
                      <span>Отсканируйте QR-код или импортируйте файл .conf</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">4.</span>
                      <span>Нажмите кнопку "Подключить" в приложении</span>
                    </li>
                  </ol>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Monitor" size={20} className="text-primary" />
                    Windows / macOS / Linux
                  </h3>
                  <ol className="space-y-2 text-sm ml-7">
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">1.</span>
                      <span>Скачайте клиент WireGuard с официального сайта</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">2.</span>
                      <span>Установите и запустите программу</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">3.</span>
                      <span>Нажмите "Import tunnel(s) from file" и выберите файл .conf</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-[20px]">4.</span>
                      <span>Активируйте туннель переключателем</span>
                    </li>
                  </ol>
                </div>

                <Separator />

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="HelpCircle" size={18} className="text-primary" />
                    Нужна помощь?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Если у вас возникли проблемы с подключением, свяжитесь с нами
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Telegram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;