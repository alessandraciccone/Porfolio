const GDrop = () => {
  const gdropImages = [
    {
      src: "/src/assets/img/GDrop/Home.png",
      desc: "Homepage del gioco con navigazione principale",
    },
    {
      src: "/src/assets/img/GDrop/RegistrazioneELogin.png",
      desc: "Schermata di registrazione e login",
    },
    {
      src: "/src/assets/img/GDrop/SearchBar.png",
      desc: "Barra di ricerca per trovare giochi",
    },
    {
      src: "/src/assets/img/GDrop/ResultPage.png",
      desc: "Pagina dei risultati di ricerca",
    },
    {
      src: "/src/assets/img/GDrop/Footer.png",
      desc: "Footer con informazioni e link utili",
    },
  ];

  return (
    <section id="g-drop" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-purple-400 to-purple-500 mb-8 drop-shadow-lg">
          Game Drop
        </h2>
        <div>
          <p className="text-lg text-gray-400 mb-4">
            GamDrop è un sito che, previa registrazione e login, ti permette di
            inserire il tuo mood nella searchbar. In base all’umore selezionato,
            il sistema ti propone una serie di giochi adatti a come ti senti.
            Cliccando su “Gioca ora”, vieni reindirizzato direttamente al sito
            del gioco scelto.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
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
                <span className="font-bold">Database</span>: PostegresSQL
              </li>
              <li>
                <span className="font-bold">Autenticazione</span>: JWT
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/alessandraciccone/GGame"
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
              Galleria Game Drop
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {gdropImages.map((gdrop, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-64 bg-black rounded-lg shadow-lg p-4"
                  >
                    <img
                      src={gdrop.src}
                      alt={`Game Drop ${index + 1}`}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                      loading="lazy"
                    />
                    <p className="text-sm text-gray-300 text-center">
                      {gdrop.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDrop;
