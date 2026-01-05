import React, { useState } from "react";

const netflixImages = [
  {
    src: "/src/assets/img/NetflixImg/1img.png",
    desc: "Homepage con anteprime e suggerimenti personalizzati",
  },
  {
    src: "/src/assets/img/NetflixImg/2imgandfooter.png",
    desc: "Schermata del player video e footer con informazioni aggiuntive",
  },
];

const Netflix = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="netflix" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 mb-8 drop-shadow-lg">
          Netflix Clone
        </h2>
        <div>
          <p className="text-lg text-center text-gray-400 mb-4">
            Netflix Clone è un progetto che replica l'interfaccia e le
            funzionalità principali di Netflix.
          </p>

          <p className="text-sm text-center text-gray-400 mb-4">
            {" "}
            I placeholder sono dovuto alla momentanea indisponibilità di alcune
            risorse.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Tecnologie utilizzate:
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                <span className="font-bold">Frontend</span>: React, Bootstrap
              </li>
              <li>
                <span className="font-bold">API</span>: OMDb API (Open Movie
                Database API)
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/alessandraciccone/NetflixClone"
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
              Galleria Netflix Clone
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
                {netflixImages.map((img, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-64 bg-black rounded-lg shadow-lg p-4"
                  >
                    <img
                      src={img.src}
                      alt={`Netflix Clone ${index + 1}`}
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
      </div>
    </section>
  );
};

export default Netflix;
