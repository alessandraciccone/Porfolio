import React, { useState } from "react";

const MovieRandom = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const movieImages = [
    {
      src: "/src/assets/img/MRandom/HomePage.png",
      desc: "Homepage con selezione film casuale",
    },
    {
      src: "/src/assets/img/MRandom/RwstulPage.png",
      desc: "Pagina con dettagli del film apparso randomicamente, tra cui titolo, locandina, cast e trama",
    },
    {
      src: "/src/assets/img/MRandom/button.png",
      desc: "Pulsante per generare un film casuale o per andare al trailer del film generato",
    },
    {
      src: "/src/assets/img/MRandom/Footer.png",
      desc: "Footer con informazioni aggiuntive",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="movie-random" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-purple-400 to-purple-500 mb-8 drop-shadow-lg">
          Movie Random
        </h2>
        <div>
          <p className="text-lg text-gray-400 mb-4">
            Movie Random è un'applicazione web che permette agli utenti di
            scoprire nuovi film in modo casuale. Utilizzando API esterne per
            ottenere informazioni sui film, offre un'esperienza divertente per
            esplorare il mondo del cinema.
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
                <span className="font-bold">API</span>: The Movie Database
                (TMDB)
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/alessandraciccone/MovieRandom"
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
              Galleria Movie Random
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {movieImages.map((movie, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-64 bg-black rounded-lg shadow-lg p-4"
                  >
                    <img
                      src={movie.src}
                      alt={`Movie Random ${index + 1}`}
                      className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      loading="lazy"
                      onClick={() => openModal(movie)}
                    />
                    <p className="text-sm text-gray-300 text-center">
                      {movie.desc}
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

export default MovieRandom;
