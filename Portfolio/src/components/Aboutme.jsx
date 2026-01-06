import meme from "../assets/img/meme.png";
const Aboutme = () => {
  return (
    <section id="about-me" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src={meme}
          alt="Alessandra Ciccone"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-purple-400 shadow-lg"
        />
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8 drop-shadow-lg">
          Chi sono?
        </h2>
        <div className="flex justify-center mb-8">
          <a
            href="/MyCv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Scarica il mio CV
          </a>
        </div>
        <p className="text-lg text-gray-400 leading-relaxed">
          Mi chiamo Alessandra Ciccone, sono nata a Roma e oggi vivo a Pescara.
          Dopo un diploma in ambito turistico e studi universitari in Storia
          dell'Arte, ho intrapreso esperienze lavorative che hanno arricchito il
          mio profilo: come redattrice giornalistica per la rivista Lo Sbuffo,
          dove ho scritto articoli su WordPress, e successivamente come Customer
          Service Advisor presso Amazon, sviluppando capacità di problem
          solving, comunicazione efficace e gestione dello stress.
          <br />
          <br />
          Nel febbraio 2025 ho deciso di dare una svolta alla mia carriera
          tornando alla mia vera passione: la tecnologia. Mi sono iscritta a un
          corso intensivo full‑time di Full Stack Development, presso Epicode,
          dove ho acquisito solide competenze in:
          <br />•{" "}
          <span className="text-red-800 underline font-bold">Frontend</span>:
          Bootstrap, React, Redux, JavaScript, CSS, Tailwind
          <br />•{" "}
          <span className="text-blue-500 underline font-bold">Backend</span>:
          Java, Spring Boot, API REST
          <br />•{" "}
          <span className="text-green-500 underline font-bold">Database</span>:
          PostgreSQL e gestione sicura dei dati
          <br />
          <br />
          Attualmente sto ampliando le mie conoscenze studiando{" "}
          <span className="text-purple-500">Python</span>,{" "}
          <span className="text-indigo-500">Dart</span> e{" "}
          <span className="text-pink-500">Angular</span>, con l'obiettivo di
          diventare una professionista versatile e aggiornata. Sono una persona
          curiosa, resiliente e pronta a imparare qualsiasi nuova tecnologia
          necessaria.
          <br />
          <br />
          <strong className="text-yellow-400">Lingue</strong>
          <br />• <span className="text-teal-500">Inglese</span>: livello
          intermedio (B1/B2)
          <br />• <span className="text-cyan-500">Spagnolo</span>: livello base
          <br />
          <br />
          <strong className="text-yellow-400">Obiettivi professionali</strong>
          <br />• in presenza a Pescara e dintorni
          <br />• ibrido tra Pescara e Roma
          <br />• full remote per progetti nazionali e internazionali
          <br />
          <br />
          Il mio obiettivo è crescere come sviluppatrice in un ambiente
          stimolante, contribuendo con passione e creatività a progetti digitali
          innovativi.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
