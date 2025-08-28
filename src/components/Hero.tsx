import { motion } from "framer-motion";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
          initial={{ opacity: 0.1, y: 30, x: -10 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Привет! Я{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Александр
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            Frontend-разработчик с фокусом на{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Full-Stack
            </span>{" "}
            реализацию
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
            Создаю современные веб-приложения с адаптивной версткой, используя
            React и Next.js. Опыт работы с крупными образовательными проектами и
            админ-панелями с JWT-аутентификацией.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              href="#projects"
              whileHover={{ y: -3 , scale: 1.5}}
              animate={{ y: [null, 30, 0] }}
            >
              Мои проекты
            </motion.a>
            <motion.a
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 rounded-lg font-medium transition-colors flex items-center"
              href="https://github.com/alex5200"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ y: -3 , scale: 1.5 }}
              animate={{ x: [null, 30, 20] }}

            >
              <GlobeAsiaAustraliaIcon className="w-5 h-5 mr-2" /> GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
