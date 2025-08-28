const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-500">
        <p>© {new Date().getFullYear()} Александр. Создано с ❤️ и React</p>
      </div>
    </footer>
  );
};

export default Footer;
