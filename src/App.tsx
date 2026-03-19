import { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight, Menu, X, Shield, Sparkles } from 'lucide-react';
import { TelegramIcon, VKIcon } from './Icons';
import ThemeSwitcher from './ThemeSwitcher';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [testResults, setTestResults] = useState(new Array(11).fill(false));

  const toggleTest = (index: number) => {
    const newResults = [...testResults];
    newResults[index] = !newResults[index];
    setTestResults(newResults);
  };

  const score = testResults.filter(Boolean).length;

  const topics = [
    "Жизненный цикл семьи",
    "Параметры семейной системы",
    "Семейные правила. Семейная история и мифы.",
    "Границы. Сиблинги.",
    "Стабилизаторы / треугольники",
    "Календарь знаменательных дат. Семейный архив."
  ];

  const signs = [
    "Оптимальный уровень дифференциации (автономности) членов семьи.",
    "Низкий уровень тревоги.",
    "Четкие границы между поколениями при наличии связи.",
    "Вклад каждого в гармоничные отношения.",
    "Минимальная симбиотичность при решении проблем.",
    "Диады справляются без привлечения третьего.",
    "Общение на эмоциональном и интеллектуальном уровнях.",
    "Климат важнее общепринятых стандартов.",
    "Ощущение, что нравится жить в этой семье.",
    "Взаимная обратная связь вместо разрядки.",
    "Четкое знание своих и чужих обязанностей."
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 font-sans selection:bg-accent-light transition-colors duration-300">
      <ThemeSwitcher />
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md z-50 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-semibold tracking-tight text-accent">Семейная история</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-accent transition-colors">О группе</a>
              <a href="#topics" className="hover:text-accent transition-colors">Темы</a>
              <a href="#test" className="hover:text-accent transition-colors">Тест</a>
              <a href="#contact" className="hover:text-accent transition-colors underline decoration-accent/50 underline-offset-4 font-semibold">Записаться</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-stone-600 dark:text-stone-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-4 py-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4">
            <a href="#about" className="block text-lg" onClick={() => setIsMenuOpen(false)}>О группе</a>
            <a href="#topics" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Темы</a>
            <a href="#test" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Тест</a>
            <a href="#contact" className="block text-lg font-semibold text-accent" onClick={() => setIsMenuOpen(false)}>Записаться</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-light rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100 dark:bg-amber-900 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 leading-tight">
            Рассказываем истории, рисуем генограмму и изучаем семейную системную терапию
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
            На группе осваиваем теорию ССТ (семейная системная терапия). Разбираемся, как устроена и развивается семейная система.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-semibold shadow-xl shadow-accent-light hover:bg-accent-hover transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Присоединиться к группе <ArrowRight size={20} />
            </a>
            <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 rounded-full font-semibold border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700 transition-all flex items-center justify-center gap-2">
              Узнать больше
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-stone-900/50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold dark:text-stone-100">Приглашаем в команду исследователей</h2>
            <div className="space-y-4 text-stone-600 dark:text-stone-400 text-lg">
              <p className="font-medium">Всего 6–12 человек, чтобы вместе:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✅</span>
                  <span>Создать безопасное пространство, где не страшно вспоминать и говорить.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✅</span>
                  <span>Разобраться в хитросплетениях вашей семейной системы, опираясь на законы системы.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✅</span>
                  <span>Увидеть повторяющиеся сценарии и, возможно, найти ключи к сегодняшним трудностям.</span>
                </li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent-light text-accent rounded-lg"><Shield size={20} /></div>
                  <span className="text-sm font-medium dark:text-stone-300">Безопасное пространство</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg"><Sparkles size={20} /></div>
                  <span className="text-sm font-medium dark:text-stone-300">Осознание сценариев</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-100 dark:bg-stone-800 aspect-video rounded-3xl overflow-hidden relative group shadow-2xl ring-1 ring-stone-200 dark:ring-stone-700">
             <div className="absolute inset-0 flex items-center justify-center text-stone-400 dark:text-stone-500 font-serif italic px-8 text-center">
               Здесь может быть ваше семейное древо или атмосферное фото
             </div>
             <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-all" />
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-20 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 dark:text-stone-100">Программа встреч</h2>
          <div className="grid gap-4">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center gap-6 group hover:border-accent-light transition-colors">
                <span className="text-3xl font-serif text-accent-light font-bold group-hover:text-accent-light transition-colors">{i + 1}</span>
                <span className="text-lg font-medium text-stone-700 dark:text-stone-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Test Section */}
      <section id="test" className="py-20 bg-accent-light dark:bg-stone-950 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold dark:text-stone-100">11 признаков здоровой семьи</h2>
            <p className="text-stone-600 dark:text-stone-400 italic">По М. Боуэну (2001). Отметьте то, что характерно для вашей семьи:</p>
          </div>
          
          <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-xl p-6 md:p-10 space-y-4 ring-1 ring-stone-200 dark:ring-stone-800">
            {signs.map((sign, i) => (
              <label key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800/50 cursor-pointer transition-colors border border-transparent hover:border-stone-100 dark:hover:border-stone-700">
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-stone-300 dark:border-stone-700 text-accent focus:ring-accent bg-transparent"
                    checked={testResults[i]}
                    onChange={() => toggleTest(i)}
                  />
                </div>
                <span className="text-stone-700 dark:text-stone-300 leading-relaxed">{sign}</span>
              </label>
            ))}
            
            <div className="mt-8 pt-8 border-t border-stone-100 dark:border-stone-800 text-center">
              <div className="text-sm text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">Ваш результат</div>
              <div className="text-5xl font-serif font-bold text-accent">{score} <span className="text-2xl text-stone-400 dark:text-stone-600">/ 11</span></div>
              <p className="mt-4 text-stone-600 dark:text-stone-400">
                {score === 0 ? "Начните отмечать пункты, чтобы узнать состояние вашей семейной системы." :
                 score >= 9 ? "Ваша семья — отличный пример функционирующей системы!" : 
                 score >= 5 ? "У вашей системы есть хорошие ресурсы для развития." : 
                 "Это отличный повод исследовать свою семейную историю глубже."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info & CTA Section */}
      <section id="contact" className="py-24 bg-stone-100 dark:bg-black text-stone-900 dark:text-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold dark:text-stone-100">Организационные детали</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-stone-900 rounded-2xl text-accent shadow-sm"><Calendar size={24} /></div>
                  <div>
                    <div className="text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider font-semibold">Старт</div>
                    <div className="text-xl">16 марта</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-stone-900 rounded-2xl text-accent shadow-sm"><Clock size={24} /></div>
                  <div>
                    <div className="text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider font-semibold">Время</div>
                    <div className="text-xl">По понедельникам, 15:00 – 17:00 (6 встреч)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-stone-900 rounded-2xl text-accent shadow-sm"><Users size={24} /></div>
                  <div>
                    <div className="text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider font-semibold">Группа</div>
                    <div className="text-xl">6–12 человек (закрытый формат)</div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-4xl font-serif font-bold text-accent">10 000 ₽</div>
                  <div className="text-stone-500 dark:text-stone-400">стоимость всего курса</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold dark:text-stone-100">Ведущие группы</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Anastasia */}
                <div className="bg-white dark:bg-stone-900 p-6 rounded-[2rem] border border-stone-200 dark:border-stone-800 text-center space-y-4 shadow-sm">
                  <img src="/M.jpg" alt="Анастасия Морозова" className="w-20 h-20 rounded-full mx-auto ring-4 ring-accent-light object-cover" />
                  <div>
                    <h3 className="font-bold text-stone-800 dark:text-stone-100 leading-tight">Анастасия Морозова</h3>
                    <p className="text-[10px] text-accent uppercase tracking-widest mt-1 font-bold">Психолог</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <a href="https://t.me/nastyamorozovapsy" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-xl hover:text-accent transition-colors">
                      <TelegramIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Irina */}
                <div className="bg-white dark:bg-stone-900 p-6 rounded-[2rem] border border-stone-200 dark:border-stone-800 text-center space-y-4 shadow-sm">
                  <img src="/G.jpg" alt="Ирина Гродник" className="w-20 h-20 rounded-full mx-auto ring-4 ring-accent-light object-cover" />
                  <div>
                    <h3 className="font-bold text-stone-800 dark:text-stone-100 leading-tight">Ирина Гродник</h3>
                    <p className="text-[10px] text-accent uppercase tracking-widest mt-1 font-bold">Психолог</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <a href="https://t.me/iragrodnik" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-xl hover:text-accent transition-colors">
                      <TelegramIcon className="w-5 h-5" />
                    </a>
                    <a href="https://vk.com/igrodnik" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-xl hover:text-accent transition-colors">
                      <VKIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto text-center space-y-8 bg-accent p-10 md:p-16 rounded-[3rem] text-white shadow-2xl shadow-accent-light dark:shadow-none">
            <h3 className="text-3xl font-serif font-bold">Готовы исследовать свою историю?</h3>
            <p className="text-rose-100 dark:text-rose-300 text-lg">Количество мест ограничено (всего 12). Группа закрытая, старт 16 марта.</p>
            <a 
              href="https://t.me/iragrodnik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-accent rounded-full font-bold text-xl hover:bg-stone-50 transition-all transform hover:-translate-y-1 shadow-xl"
            >
              <TelegramIcon className="w-6 h-6 text-accent" /> Записаться в группу <ArrowRight />
            </a>
            <p className="text-xs text-rose-200 dark:text-rose-400 uppercase tracking-widest font-semibold pt-4">Запись после предварительного знакомства</p>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-stone-400 dark:text-stone-600 text-sm border-t border-stone-100 dark:border-stone-900">
        &copy; {new Date().getFullYear()} Семейная история. Создано с любовью.
      </footer>
    </div>
  );
};

export default App;
