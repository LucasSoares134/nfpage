import { FiCheck } from 'react-icons/fi';

export default function ValueBanner() {
  const benefits = [
    "DIREÇÃO FOTOGRÁFICA PENSADA PARA TRADUZIR QUEM VOCÊ É COM CLAREZA",
    "LOOKS ESTRATÉGICOS QUE REFORÇAM SUA MENSAGEM E ARQUÉTIPO",
    "PRODUÇÃO COMPLETA (MAKE, CABELO, ACESSÓRIOS, CENÁRIOS E AMBIENTAÇÕES)",
    "LEITURA DE IMAGEM E MENTORIA PÓS-ENSAIO PARA APLICAR SUAS FOTOS COM INTELIGÊNCIA",
    "EXPERIÊNCIA SENSORIAL: CAFÉ, CONFORTO, CUIDADO, ESCUTA E ACOLHIMENTO"
  ];

  return (
    <section className="relative w-full py-20 bg-[#2a2a2a]">
      {/* Background Image Overlay - USANDO A FOTO 7.JPG DA NATALIA */}
      <div className="absolute inset-0 z-0">
        {/* Usando 7.jpg da pasta Natalia como fundo */}
        <img 
          src="/Imagens/Natalia/7.jpg" 
          alt="Natália Figueiredo no estúdio" 
          className="w-full h-full object-cover opacity-10" // Opacidade baixa para o texto ser legível
        />
        <div className="absolute inset-0 bg-[#756a5b]/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-white">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-snug">
            O QUE VOCÊ VIVE COMIGO:
          </h2>
          <ul className="space-y-4">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="bg-white/20 p-1 rounded-full mt-1"><FiCheck className="text-white" /></span>
                <span className="text-lg font-light tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}