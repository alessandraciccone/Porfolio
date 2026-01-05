import React from "react";

const RapportoPro = () => {
  return (
    <section id="rapporto-pro" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 mb-8 drop-shadow-lg">
          Rapporto Pro
        </h2>
        <p className="text-lg text-gray-400 mb-4 text-center">
          RapportoPro è una piattaforma pensata per semplificare la gestione dei rapporti di intervento. L’utente può inserire i propri comuni di competenza e caricare i rapporti in due modalità: tramite un form manuale — che invia automaticamente un’email al comune e genera un file scaricabile del rapporto — oppure caricando direttamente un file esistente in formato JPG, PNG o PDF. Il sistema centralizza e organizza i documenti, rendendo il processo più rapido, ordinato e professionale.
        </p>
      </div>
    </section>
  );
};

export default RapportoPro;
