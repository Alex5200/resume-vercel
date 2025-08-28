import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeBracketIcon,
  CommandLineIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@heroui/react";

import { skills } from "../data/content";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мой технический стек
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Глубокое понимание современных технологий и инструментов для
            создания качественных веб-решений
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => {
            const isToolsCategory = index === 2;
            const initialItems = isToolsCategory
              ? category.items.slice(0, 4)
              : category.items;
            const extraItems = isToolsCategory ? category.items.slice(4) : [];

            return (
              <motion.div
                key={index}
                animate={{ scale: [1, 1.03, 1] }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center mb-6">
                  {index === 0 && (
                    <CommandLineIcon className="w-6 h-6 text-purple-600 mr-3" />
                  )}
                  {index === 1 && (
                    <BriefcaseIcon className="w-6 h-6 text-blue-600 mr-3" />
                  )}
                  {index === 2 && (
                    <CodeBracketIcon className="w-6 h-6 text-pink-600 mr-3" />
                  )}
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {initialItems.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700/50 rounded-lg px-3 py-2 text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                  <AnimatePresence>
                    {showMore &&
                      extraItems.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gray-100 dark:bg-gray-700/50 rounded-lg px-3 py-2 text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                          exit={{ opacity: 0 }}
                          initial={{ opacity: 0, y: -10 }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
                {isToolsCategory && extraItems.length > 0 && (
                  <div className="mt-5 flex justify-center">
                    <Button
                      className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                      radius="full"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "Скрыть" : "Больше"}
                    </Button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
