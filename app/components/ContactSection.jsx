'use client';
import { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({ nome: '', empresa: '', email: '', whatsapp: '', objetivo: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DADOS FORMULÁRIO ENVIADOS (Para Kommo):", formData);
    alert("Obrigado! Em breve entraremos em contato.");
    // Aqui entrará a lógica da API route/Kommo
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <section id="contato" className="py-20 bg-[#756a5b] text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="font-serif text-4xl mb-6">Pronto para um ensaio com intenção?</h2>
          <p className="text-white/80 mb-8 text-lg">
            (62) 99155-5467 | nfstudionataliafigueiredo@gmail.com
          </p>
          
          <div className="space-y-4">
            <a 
              href="https://wa.me/5562991555467" /* WHATSAPP */
              target="_blank" 
              className="flex items-center gap-4 bg-[#25D366] text-white px-6 py-4 rounded hover:bg-[#20bd5a] transition w-fit"
            >
              <FiMessageCircle size={24} />
              <span className="font-bold tracking-wide">Chamar no WhatsApp</span>
            </a>
            
            <p className="text-sm text-white/60 pt-4">Ou preencha o formulário para uma avaliação/análise de perfil exclusiva.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-2xl text-gray-800">
          <div className="space-y-4">
            <div><label className="block text-sm font-bold text-gray-600 mb-1">Nome Completo</label><input type="text" name="nome" onChange={handleChange} className="w-full bg-gray-50 border p-3 rounded" required /></div>
            <div><label className="block text-sm font-bold text-gray-600 mb-1">E-mail</label><input type="email" name="email" onChange={handleChange} className="w-full bg-gray-50 border p-3 rounded" required /></div>
            <div><label className="block text-sm font-bold text-gray-600 mb-1">Objetivo do Ensaio</label><textarea name="objetivo" onChange={handleChange} className="w-full bg-gray-50 border p-3 rounded" rows="3"></textarea></div>
            <button type="submit" className="w-full bg-[#756a5b] text-white font-bold py-4 rounded hover:bg-[#5e5448] transition uppercase">SOLICITAR AVALIAÇÃO</button>
          </div>
        </form>

      </div>
    </section>
  );
}