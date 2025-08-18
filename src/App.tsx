import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Heroicons imports
import { 
  CodeBracketIcon, 
  GlobeAsiaAustraliaIcon, 
  AcademicCapIcon,
  CommandLineIcon,
  BriefcaseIcon,
  SunIcon, 
  MoonIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Проверяем сохраненную тему или системные настройки
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  const projects = [
    {
      title: "Online School Platform",
      description: "Современная образовательная платформа с адаптивной версткой и интеграцией платежных систем",
      tech: ["React", "Next.js", "Tailwind", "Node.js"],
      link: "https://github.com/alex5200/online-school"
    },
    {
      title: "Admin Dashboard",
      description: "Админ-панель с JWT-аутентификацией, динамическими таблицами и темной темой",
      tech: ["React", "Redux", "Material UI", "NestJS"],
      link: "https://github.com/alex5200/admin-dashboard"
    },
    {
      title: "Telegram Bot Framework",
      description: "Фреймворк для создания Telegram-ботов с поддержкой команд и inline-клавиатур",
      tech: ["Node.js", "Telegraf", "TypeScript", "PostgreSQL"],
      link: "https://github.com/alex5200/telegram-bot-framework"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Native"] },
    { category: "Backend", items: ["Node.js", "NestJS", "Express", "REST API", "PostgreSQL", "Firebase"] },
    { category: "Tools", items: ["Git", "Figma", "Docker", "Vite", "Webpack", "Postman"] }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <SunIcon className="w-5 h-5 text-yellow-400" />
        ) : (
          <MoonIcon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Привет! Я <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Александр</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              Frontend-разработчик с фокусом на <span className="text-purple-600 dark:text-purple-400">Full-Stack</span> реализацию
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
              Создаю современные веб-приложения с адаптивной версткой, используя React и Next.js. 
              Опыт работы с крупными образовательными проектами и админ-панелями с JWT-аутентификацией.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                Мои проекты
              </motion.a>
              <motion.a
                href="https://github.com/alex5200"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 rounded-lg font-medium transition-colors flex items-center"
              >
                <GlobeAsiaAustraliaIcon className="w-5 h-5 mr-2" /> GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мой технический стек</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Глубокое понимание современных технологий и инструментов для создания качественных веб-решений
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  {index === 0 && <CommandLineIcon className="w-6 h-6 text-purple-600 mr-3" />}
                  {index === 1 && <BriefcaseIcon className="w-6 h-6 text-blue-600 mr-3" />}
                  {index === 2 && <CodeBracketIcon className="w-6 h-6 text-pink-600 mr-3" />}
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700/50 rounded-lg px-3 py-2 text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои проекты</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Реальные проекты, созданные с акцентом на качество кода и пользовательский опыт
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                      <CommandLineIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[60px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    Посмотреть проект <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <AcademicCapIcon className="w-12 h-12 mx-auto text-purple-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готов обсудить ваш проект</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10">
              Ищу возможность присоединиться к команде, где смогу применить свои навыки в создании качественных веб-решений. 
              Открыт к новым вызовам и сложным задачам.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.a
                href="mailto:saha.aa35@gmail.com"
                whileHover={{ y: -3 }}
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <EnvelopeIcon className="w-5 h-5 mr-3 text-purple-600" />
                Написать письмо
              </motion.a>
              
              <motion.a
                href="https://t.me/Alex1n3r"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.177 8.164a.5.5 0 0 0-.348-.057l-9.86 3.19a.5.5 0 0 0-.29.29l-1.695 5.176a.5.5 0 0 0 .627.627l5.176-1.695a.5.5 0 0 0 .29-.29l3.19-9.86a.5.5 0 0 0-.057-.348l-2.37-2.37a.5.5 0 0 0-.707 0L9.17 7.83a.5.5 0 0 0 0 .707l3.8 3.8a.5.5 0 0 0 .707 0l5.585-5.585a.5.5 0 0 0 0-.707l-2.37-2.37z" />
                </svg>
                Telegram
              </motion.a>
            </div>
            
            <p className="text-gray-500 dark:text-gray-500 italic">
              Готов пройти тестовое задание и показать свои навыки на практике
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Александр. Создано с ❤️ и React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;