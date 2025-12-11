import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#fdfbf7]"> {/* Fundo Branco Suave */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Foto da Fotógrafa (Link real) */}
        <div className="order-2 md:order-1 relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#756a5b] rounded-lg z-0"></div>
          <img 
            src="/Imagens/Natalia/6.jpg" 
            alt="Natália Figueiredo" 
            className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Texto NOVO (Conteúdo Final) */}
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="font-serif text-4xl text-[#756a5b]">QUEM É NATÁLIA FIGUEIREDO</h2>
          <h3 className="text-xl font-medium text-gray-800">
            Especialista em Posicionamento de Imagem, Estrategista de Marcas Pessoais e Fotógrafa Retratista.
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Comecei como maquiadora profissional, me tornei especialista em Visagismo e Estilo, e encontrei na Fotografia uma forma de <strong className="text-[#756a5b]">transformar histórias em presença e posicionamento</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Há mais de 4 anos atuo exclusivamente com <strong className="text-[#756a5b]">Fotografia Corporativa Estratégica</strong> e Reposicionamento de Imagem no Digital, impactando profissionais que desejam ser vistos de forma intencional e marcante.
          </p>
          
          <div className="pt-4">
            {/* LOGO DA CLIENTE (Link corrigido para .PNG maiúsculo) */}
            <Image 
              src="/Imagens/Logo.PNG" 
              alt="Assinatura NF" 
              width={100} // Ajustei o width para o componente Image
              height={100}
              className="h-16 w-auto opacity-70"
            />
          </div>
        </div>

      </div>
    </section>
  );
}