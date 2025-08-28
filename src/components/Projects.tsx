import { motion } from "framer-motion";
import {
  CommandLineIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

import { projects } from "../data/content";

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои проекты</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Реальные проекты, созданные с акцентом на качество кода и
            пользовательский опыт
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              rel="noopener noreferrer"
              target="_blank"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  Посмотреть проект{" "}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
