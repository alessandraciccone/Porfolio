import React, { useState } from 'react';

const CorgiConnection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const corgiImages = [
    {
      src: "/src/assets/img/CorgiC/registrazione.png",
      desc: "Form di registrazione per nuovi utenti",
    },

    {
      src: "/src/assets/img/CorgiC/login.png",
      desc: "Schermata di login dell'applicazione",
    },
    {
      src: "/src/assets/img/CorgiC/profilo.png",
      desc: "Profilo utente personalizzato",
    },
    {
      src: "/src/assets/img/CorgiC/post.png",
      desc: "Creazione di un nuovo post",
    },
    {
      src: "/src/assets/img/CorgiC/postdaleggere.png",
      desc: "Lettura e interazione con i post",
    },
    {
      src: "/src/assets/img/CorgiC/searchbar.png",
      desc: "Barra di ricerca per contenuti presente su tutto il sito",
    },
    {
      src: "/src/assets/img/CorgiC/searchbarresult.png",
      desc: "Risultati della ricerca",
    },
    {
      src: "/src/assets/img/CorgiC/quiz.png",
      desc: "Quiz divertente sui corgi",
    },
    {
      src: "/src/assets/img/CorgiC/quizRisultati.png",
      desc: "Risultati del quiz completato",
    },
    {
      src: "/src/assets/img/CorgiC/curiosità.png",
      desc: "Sezione curiosità sui corgi",
    },
    {
      src: "/src/assets/img/CorgiC/cosedafare.png",
      desc: "Lista delle cose da fare regione per regione. I dati sono richiamati dal backend",
    },
    {
      src: "/src/assets/img/CorgiC/footer.png",
      desc: "Footer con link e informazioni utili",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="corgi-connection" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-purple-400 to-purple-500 mb-8 drop-shadow-lg">
          Corgi Connection
        </h2>
        <div>
          <p className="text-lg text-gray-400 mb-4">
            Corgi Connection è un'applicazione web divertente che permette agli
            amanti dei corgi di connettersi, condividere foto e storie sui loro
            adorabili cani. Sviluppata con tecnologie moderne per offrire
            un'esperienza utente eccezionale.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Tecnologie utilizzate:
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                <span className="font-bold">Frontend</span>: React, Paper CSS,
                Bootstrap
              </li>
              <li>
                <span className="font-bold">Backend</span>: Java, Spring
              </li>
              <li>
                <span className="font-bold">Database</span>: Postgres
              </li>
              <li>
                <span className="font-bold">Autenticazione</span>: JWT
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/alessandraciccone/CorgiConnection"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Carousel Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center text-purple-300 mb-6">
              Galleria Corgi Connection
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {corgiImages.map((corgi, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-64 bg-black rounded-lg shadow-lg p-4"
                  >
                    <img
                      src={corgi.src}
                      alt={`Screenshot ${index + 1}: ${corgi.desc}`}
                      className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      loading="lazy"
                      onClick={() => openModal(corgi)}
                    />
                    <p className="text-sm text-gray-300 text-center">
                      {corgi.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal for full-size image */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
              <div className="relative max-w-4xl max-h-full p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.desc}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CorgiConnection;
