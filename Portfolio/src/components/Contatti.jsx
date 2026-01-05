import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    // Configurazione EmailJS - SOSTITUISCI CON I TUOI VALORI
    const serviceId = "service_kk09ng4";
    const templateId = "template_gwn1bjd";
    const publicKey = "CmoFSgvJSahPcyeMA";

    const templateParams = {
      title: "Nuovo messaggio dal form contatti",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Messaggio inviato con successo!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Errore nell'invio del messaggio. Riprova.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contatti" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contatti
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-700 mb-6 text-center">
            Hai domande o vuoi collaborare? Scrivimi!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Il tuo nome"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="tua@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Scrivi il tuo messaggio..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Invio in corso..." : "Invia Messaggio"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("successo") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contatti;
