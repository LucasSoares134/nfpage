import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-[#1a1a1a] text-white"> {/* NOVO FUNDO ESCURO */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center items-center gap-4 mb-4">
             <Image 
                src="/Imagens/Logo.PNG" // Usando a logo
                alt="Logo NF"
                width={30}
                height={30}
                className="w-8 h-8 opacity-60 filter invert" // Invertendo para branco
            />
            <h2 className="font-serif text-3xl text-white mb-4">Feedback dos Clientes</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700"> {/* Card Escuro */}
            <p className="text-gray-300 italic mb-6">"Quero agradecer imensamente pela sua paciência, e captar a minha essência. Eu que nem levo jeito pra foto deu esse resultado incrível! Você é uma profissional diferenciada."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
              <div><p className="font-bold text-white">Cliente 1</p><p className="text-sm text-gray-400">Executiva</p></div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700"> {/* Card Escuro */}
            <p className="text-gray-300 italic mb-6">"Ficou impecável! Exatamente a proposta que queria para essa nova fase. Vem aí o lançamento muito bem posicionada. Obrigada Natália."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
              <div><p className="font-bold text-white">Cliente 2</p><p className="text-sm text-gray-400">Empresária</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}