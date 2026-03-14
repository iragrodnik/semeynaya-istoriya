import { useState } from 'react';
import { Calendar, Clock, Users, MessageCircle, ArrowRight, Menu, X, Shield, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 font-sans selection:bg-rose-100 dark:selection:bg-rose-900/30 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md z-50 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-semibold tracking-tight text-rose-800 dark:text-rose-400">Семейная история</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">О группе</a>
              <a href="#topics" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Темы</a>
              <a href="#test" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Тест</a>
              <a href="#contact" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors underline decoration-rose-300 dark:decoration-rose-700 underline-offset-4 font-semibold">Записаться</a>
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
            <a href="#contact" className="block text-lg font-semibold text-rose-700 dark:text-rose-400" onClick={() => setIsMenuOpen(false)}>Записаться</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 dark:bg-rose-900 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100 dark:bg-amber-900 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 leading-tight">
            У вас есть <span className="text-rose-700 dark:text-rose-400 italic font-medium">машина времени</span>? 🕰️
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
            Изучение семейной истории поможет совершить путешествие в прошлое, чтобы увидеть своих прабабушек молодыми, узнать тайны и найти ключи к сегодняшним трудностям.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-rose-700 dark:bg-rose-600 text-white rounded-full font-semibold shadow-xl shadow-rose-200 dark:shadow-rose-950/20 hover:bg-rose-800 dark:hover:bg-rose-500 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
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
            <h2 className="text-3xl font-serif font-bold dark:text-stone-100">Путешествие к своим истокам</h2>
            <div className="space-y-4 text-stone-600 dark:text-stone-400 text-lg">
              <p>
                Мы приглашаем вас в уникальное исследование. Это не просто лекция, а погружение в историю вашей семьи через призму системной терапии (ССТ).
              </p>
              <p>
                Вместе мы создаем безопасное пространство, где можно вспомнить забытое, расширить восприятие информации и увидеть повторяющиеся сценарии.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 rounded-lg"><Shield size={20} /></div>
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
              <div key={i} className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex items-center gap-6 group hover:border-rose-200 dark:hover:border-rose-800 transition-colors">
                <span className="text-3xl font-serif text-rose-100 dark:text-rose-900/40 font-bold group-hover:text-rose-200 dark:group-hover:text-rose-700 transition-colors">{i + 1}</span>
                <span className="text-lg font-medium text-stone-700 dark:text-stone-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Test Section */}
      <section id="test" className="py-20 bg-rose-50/50 dark:bg-rose-900/5 relative overflow-hidden">
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
                    className="w-5 h-5 rounded border-stone-300 dark:border-stone-700 text-rose-700 dark:text-rose-500 focus:ring-rose-500 bg-transparent"
                    checked={testResults[i]}
                    onChange={() => toggleTest(i)}
                  />
                </div>
                <span className="text-stone-700 dark:text-stone-300 leading-relaxed">{sign}</span>
              </label>
            ))}
            
            <div className="mt-8 pt-8 border-t border-stone-100 dark:border-stone-800 text-center">
              <div className="text-sm text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">Ваш результат</div>
              <div className="text-5xl font-serif font-bold text-rose-700 dark:text-rose-400">{score} <span className="text-2xl text-stone-400 dark:text-stone-600">/ 11</span></div>
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
                  <div className="p-3 bg-white dark:bg-stone-900 rounded-2xl text-rose-700 dark:text-rose-400 shadow-sm"><Calendar size={24} /></div>
                  <div>
                    <div className="text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider font-semibold">Старт</div>
                    <div className="text-xl">16 марта</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-stone-900 rounded-2xl text-rose-700 dark:text-rose-400 shadow-sm"><Clock size={24} /></div>
                  <div>
                    <div className="text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider font-semibold">Время</div>
                    <div className="text-xl">По понедельникам, 15:00 – 17:00 (6 встреч)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-stone-900 rounded-2xl text-rose-700 dark:text-rose-400 shadow-sm"><Users size={24} /></div>
                  <div>
                    <div className="text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider font-semibold">Группа</div>
                    <div className="text-xl">6–12 человек (закрытый формат)</div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-4xl font-serif font-bold text-rose-700 dark:text-rose-500">10 000 ₽</div>
                  <div className="text-stone-500 dark:text-stone-400">стоимость всего курса</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold dark:text-stone-100">Ведущие группы</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Anastasia */}
                <div className="bg-white dark:bg-stone-900 p-6 rounded-[2rem] border border-stone-200 dark:border-stone-800 text-center space-y-4 shadow-sm">
                  <div className="w-20 h-20 bg-stone-100 dark:bg-stone-800 rounded-full mx-auto ring-4 ring-rose-50 dark:ring-rose-900/10 flex items-center justify-center text-stone-400">
                    АМ
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 dark:text-stone-100 leading-tight">Анастасия Морозова</h3>
                    <p className="text-[10px] text-rose-700 dark:text-rose-400 uppercase tracking-widest mt-1 font-bold">Психолог</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <a href="https://t.me/nastyamorozovapsy" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-xl hover:text-rose-700 dark:hover:text-rose-400 transition-colors">
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>

                {/* Irina */}
                <div className="bg-white dark:bg-stone-900 p-6 rounded-[2rem] border border-stone-200 dark:border-stone-800 text-center space-y-4 shadow-sm">
                  <div className="w-20 h-20 bg-stone-100 dark:bg-stone-800 rounded-full mx-auto ring-4 ring-rose-50 dark:ring-rose-900/10 flex items-center justify-center text-stone-400">
                    ИГ
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 dark:text-stone-100 leading-tight">Ирина Гродник</h3>
                    <p className="text-[10px] text-rose-700 dark:text-rose-400 uppercase tracking-widest mt-1 font-bold">Психолог</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <a href="https://t.me/iragrodnik" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-xl hover:text-rose-700 dark:hover:text-rose-400 transition-colors">
                      <MessageCircle size={18} />
                    </a>
                    <a href="https://vk.com/igrodnik" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-xl hover:text-rose-700 dark:hover:text-rose-400 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.072 2H8.928C3.12 2 2 3.12 2 8.928v6.144C2 20.88 3.12 22 8.928 22h6.144c5.808 0 6.928-1.12 6.928-6.928V8.928C22 3.12 20.88 2 15.072 2zM17.46 14.86c.15.42.03.73-.57.73h-1.89c-.5 0-.73-.26-.85-.56 0 0-.96-2.35-2.32-3.87-.44-.44-.64-.59-.88-.59-.12 0-.3.15-.3.57v3.16c0 .5-.16.73-.59.73h-3.02c-.54 0-3.03-.38-5.76-4.04 0 0-2.88-6.72-2.88-6.72 0-.5.18-.73.61-.73H5.1c.5 0 .69.26.81.56 0 0 1.48 3.49 3.56 6.02.24.24.35.32.48.32.06 0 .15-.08.15-.32V7.12c0-.5-.14-.73-.57-.73H8.31c-.13 0-.08-.34.19-.51a4.24 4.24 0 0 1 2.5-.32c.67.06.81.4.81 1.05v3.83c0 .24.04.32.14.32.13 0 .24-.08.48-.32 1.34-1.63 2.76-5.18 2.76-5.18.1-.21.29-.56.8-.56h1.89c.5 0 .62.23.48.73-.24 1.15-2.61 4.7-2.61 4.7-.22.3-.3.44-.06.68.18.18.78.78 1.18 1.33 1.2 1.63 2.11 3.55 2.26 4.31z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto text-center space-y-8 bg-rose-700 dark:bg-rose-900/30 p-10 md:p-16 rounded-[3rem] text-white shadow-2xl shadow-rose-200 dark:shadow-none">
            <h3 className="text-3xl font-serif font-bold">Готовы исследовать свою историю?</h3>
            <p className="text-rose-100 dark:text-rose-300 text-lg">Количество мест ограничено (всего 12). Группа закрытая, старт 16 марта.</p>
            <a 
              href="https://t.me/iragrodnik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-rose-800 rounded-full font-bold text-xl hover:bg-stone-50 transition-all transform hover:-translate-y-1 shadow-xl"
            >
              Записаться в группу <ArrowRight />
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
