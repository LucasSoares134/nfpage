import { FiUserCheck, FiCamera, FiStar, FiLayout } from 'react-icons/fi';
import Image from 'next/image';

export default function Experience() {
  const opemSteps = [
    { icon: <FiUserCheck size={32}/>, title: "O: ORQUESTRAÇÃO", desc: "Alinhamento interno de propósito, valores e identidade."},
    { icon: <FiCamera size={32}/>, title: "P: PRESENÇA", desc: "Ativação da sua presença de forma autêntica."},
    { icon: <FiStar size={32}/>, title: "E: ESSÊNCIA", desc: "Reconexão à sua essência inegociável."},
    { icon: <FiLayout size={32}/>, title: "M: MANIFESTO", desc: "Expressão consciente no mundo, seja na imagem ou comunicação."},
  ];

  return (
    <section id="experiencia" className="py-20 bg-[#1a1a1a] text-white"> {/* NOVO FUNDO ESCURO */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Logo O.P.E.M. */}
        <div className="flex justify-center items-center gap-4 mb-4">
             <Image 
                src="/Imagens/Logo.PNG" // Usando a logo para o O.P.E.M.
                alt="Logo NF"
                width={30}
                height={30}
                className="w-8 h-8 opacity-60 filter invert" // Invertendo para branco
            />
            <h2 className="font-serif text-3xl md:text-4xl text-white">
                O.P.E.M.
            </h2>
        </div>
        
        <h3 className="text-xl text-[#756a5b] mb-4">AQUI ALÉM DAS FOTOS VOCÊ ATIVA O SEU POSICIONAMENTO.</h3>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          O método O.P.E.M. é uma jornada de alinhamento interno e expressão externa, o processo de tornar visível o extraordinário que já habita em você.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {opemSteps.map((step, idx) => (
            <div key={idx} className="p-8 border border-gray-700 rounded-xl hover:shadow-2xl transition duration-300 group">
              <div className="w-16 h-16 mx-auto bg-gray-900 rounded-full flex items-center justify-center text-[#756a5b] mb-4 group-hover:bg-[#756a5b] group-hover:text-white transition">
                {step.icon}
              </div>
              <h3 className="font-serif text-xl mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}