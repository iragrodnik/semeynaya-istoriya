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
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-semibold tracking-tight text-rose-800">Семейная история</span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-rose-600 transition-colors">О группе</a>
              <a href="#topics" className="hover:text-rose-600 transition-colors">Темы</a>
              <a href="#test" className="hover:text-rose-600 transition-colors">Тест</a>
              <a href="#contact" className="hover:text-rose-600 transition-colors underline decoration-rose-300 underline-offset-4">Записаться</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4">
            <a href="#about" className="block text-lg" onClick={() => setIsMenuOpen(false)}>О группе</a>
            <a href="#topics" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Темы</a>
            <a href="#test" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Тест</a>
            <a href="#contact" className="block text-lg font-semibold text-rose-700" onClick={() => setIsMenuOpen(false)}>Записаться</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-800 leading-tight">
            У вас есть <span className="text-rose-700 italic">машина времени</span>? 🕰️
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Изучение семейной истории поможет совершить путешествие в прошлое, чтобы увидеть своих прабабушек молодыми, узнать тайны и найти ключи к сегодняшним трудностям.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-rose-700 text-white rounded-full font-semibold shadow-xl shadow-rose-200 hover:bg-rose-800 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Присоединиться к группе <ArrowRight size={20} />
            </a>
            <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-stone-700 rounded-full font-semibold border border-stone-200 hover:bg-stone-50 transition-all flex items-center justify-center gap-2">
              Узнать больше
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">Путешествие к своим истокам</h2>
            <div className="space-y-4 text-stone-600 text-lg">
              <p>
                Мы приглашаем вас в уникальное исследование. Это не просто лекция, а погружение в историю вашей семьи через призму системной терапии (ССТ).
              </p>
              <p>
                Вместе мы создаем безопасное пространство, где можно вспомнить забытое, расширить восприятие информации и увидеть повторяющиеся сценарии.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-rose-50 text-rose-700 rounded-lg"><Shield size={20} /></div>
                  <span className="text-sm font-medium">Безопасное пространство</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-50 text-amber-700 rounded-lg"><Sparkles size={20} /></div>
                  <span className="text-sm font-medium">Осознание сценариев</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-100 aspect-video rounded-3xl overflow-hidden relative group shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-serif italic">
               Здесь может быть ваше семейное древо или атмосферное фото
             </div>
             <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all" />
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Программа встреч</h2>
          <div className="grid gap-4">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 flex items-center gap-6 group hover:border-rose-200 transition-colors">
                <span className="text-3xl font-serif text-rose-100 font-bold group-hover:text-rose-200 transition-colors">{i + 1}</span>
                <span className="text-lg font-medium text-stone-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Test Section */}
      <section id="test" className="py-20 bg-rose-50/50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold">11 признаков здоровой семьи</h2>
            <p className="text-stone-600 italic">По М. Боуэну (2001). Отметьте то, что характерно для вашей семьи:</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-4">
            {signs.map((sign, i) => (
              <label key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors border border-transparent hover:border-stone-100">
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-stone-300 text-rose-700 focus:ring-rose-500"
                    checked={testResults[i]}
                    onChange={() => toggleTest(i)}
                  />
                </div>
                <span className="text-stone-700 leading-relaxed">{sign}</span>
              </label>
            ))}
            
            <div className="mt-8 pt-8 border-t border-stone-100 text-center">
              <div className="text-sm text-stone-500 uppercase tracking-widest mb-2">Ваш результат</div>
              <div className="text-5xl font-serif font-bold text-rose-700">{score} <span className="text-2xl text-stone-400">/ 11</span></div>
              <p className="mt-4 text-stone-600">
                {score >= 9 ? "Ваша семья — отличный пример функционирующей системы!" : 
                 score >= 5 ? "У вашей системы есть хорошие ресурсы для развития." : 
                 "Это отличный повод исследовать свою семейную историю глубже."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info & CTA Section */}
      <section id="contact" className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Организационные детали</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-stone-800 rounded-2xl text-rose-400"><Calendar size={24} /></div>
                <div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider font-semibold">Старт</div>
                  <div className="text-xl">16 марта</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-stone-800 rounded-2xl text-rose-400"><Clock size={24} /></div>
                <div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider font-semibold">Время</div>
                  <div className="text-xl">По понедельникам, 15:00 – 17:00 (6 встреч)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-stone-800 rounded-2xl text-rose-400"><Users size={24} /></div>
                <div>
                  <div className="text-sm text-stone-400 uppercase tracking-wider font-semibold">Группа</div>
                  <div className="text-xl">6–12 человек (закрытый формат)</div>
                </div>
              </div>
              <div className="pt-6">
                <div className="text-3xl font-serif font-bold text-rose-400">10 000 ₽</div>
                <div className="text-stone-400">стоимость всего курса</div>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 p-8 md:p-12 rounded-[2.5rem] space-y-8">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold italic">Ведущие группы</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center space-y-2">
                   <div className="w-20 h-20 bg-stone-700 rounded-full mx-auto" />
                   <p className="text-sm font-medium">Анастасия Морозова</p>
                </div>
                <div className="text-center space-y-2">
                   <div className="w-20 h-20 bg-stone-700 rounded-full mx-auto" />
                   <p className="text-sm font-medium">Ирина Гродник</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full py-4 bg-white text-stone-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-rose-50 transition-colors">
                <MessageCircle size={24} /> Написать в Telegram
              </button>
              <button className="w-full py-4 border-2 border-stone-700 text-stone-300 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-stone-700 transition-colors">
                Вопросы и запись
              </button>
            </div>
            <p className="text-center text-xs text-stone-500 leading-relaxed uppercase tracking-widest">
              Места ограничены. Запись после предварительного знакомства.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-stone-400 text-sm border-t border-stone-100">
        &copy; {new Date().getFullYear()} Семейная история. Создано с любовью.
      </footer>
    </div>
  );
};

export default App;
