import React, { useState } from "react";

const ClimateChange = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const climateImages = [
    { src: "/ClimateC/FormR.png", desc: "Form registrazione" },

    { src: "/ClimateC/FormL.png", desc: "Form login" },
    { src: "/ClimateC/HomePage.png", desc: "Homepage dell'applicazione" },
    { src: "/ClimateC/HomP.png", desc: "Schermata ricerca città" },

    { src: "/ClimateC/Trend.png", desc: "Trend climatici" },
    { src: "/ClimateC/Statistiche.png", desc: "Statistiche climatiche" },

    {
      src: "/ClimateC/Grafico.png",
      desc: "Grafico delle statistiche climatiche",
    },
    { src: "/ClimateC/Profilo.png", desc: "Profilo utente" },

    { src: "/ClimateC/Preferiti.png", desc: "Pagina dei preferiti" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="climate-change" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-green-300 via-blue-400 to-blue-500 mb-8 drop-shadow-lg">
          Climate Change
        </h2>
        <div>
          <p className="text-lg text-gray-400 mb-4">
            Climate Change è un'applicazione web che mostra dati e statistiche
            sul cambiamento climatico, con funzionalità di visualizzazione
            grafica e aggiunta ai preferiti. Utilizza le Nasa Open APIs per
            recuperare dati aggiornati sul clima globale. L'app consente agli
            utenti di registrarsi, effettuare il login e salvare le loro
            località preferite per monitorare i cambiamenti climatici nel tempo.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              Tecnologie utilizzate:
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                <span className="font-bold">Frontend</span>: React, TailwindCSS
              </li>
              <li>
                <span className="font-bold">Backend</span>: Java, Spring Boot
              </li>
              <li>
                <span className="font-bold">Database</span>: PostgreSQL
              </li>
              <li>
                <span className="font-bold">Autenticazione</span>: JWT
              </li>
              <li>
                <span className="font-bold">API</span>: Nasa Open APIs
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/alessandraciccone/ClimateChange"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Carousel Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center text-blue-300 mb-6">
              Galleria Climate Change
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {climateImages.map((img, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-64 bg-black rounded-lg shadow-lg p-4"
                  >
                    <img
                      src={img.src}
                      alt={`Screenshot ${index + 1}: ${img.desc}`}
                      className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      loading="lazy"
                      onClick={() => openModal(img)}
                    />
                    <p className="text-sm text-gray-300 text-center">
                      {img.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal for full-size image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={closeModal}
            >
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

export default ClimateChange;
