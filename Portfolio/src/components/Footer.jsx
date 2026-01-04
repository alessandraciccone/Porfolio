const Footer = () => {
  return (
    <footer className="bg-gray-900 text-purple-300 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg mb-4">
          Grazie per aver visitato il mio portfolio!
        </p>
        <p className="text-sm text-purple-400">
          © 2026 Alessandra Ciccone. Tutti i diritti riservati.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/alessandraciccone"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alessandra-ciccone"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-200 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
