import { motion } from "framer-motion";
import { AcademicCapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <AcademicCapIcon className="w-12 h-12 mx-auto text-purple-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готов обсудить ваш проект
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Ищу возможность присоединиться к команде, где смогу применить свои
            навыки в создании качественных веб-решений. Открыт к новым вызовам и
            сложным задачам.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              href="mailto:saha.aa35@gmail.com"
              whileHover={{ y: -3 }}
            >
              <EnvelopeIcon className="w-5 h-5 mr-3 text-purple-600" />
              Написать письмо
            </motion.a>

            <motion.a
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              href="https://t.me/Alex1n3r"
              rel="noopener noreferrer"
              target="_blank"
              whileHover={{ y: -3 }}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.177 8.164a.5.5 0 0 0-.348-.057l-9.86 3.19a.5.5 0 0 0-.29.29l-1.695 5.176a.5.5 0 0 0 .627.627l5.176-1.695a.5.5 0 0 0 .29-.29l3.19-9.86a.5.5 0 0 0-.057-.348l-2.37-2.37a.5.5 0 0 0-.707 0L9.17 7.83a.5.5 0 0 0 0 .707l3.8 3.8a.5.5 0 0 0 .707 0l5.585-5.585a.5.5 0 0 0 0-.707l-2.37-2.37z"
                  fill="currentColor"
                />
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
  );
};

export default Contact;
