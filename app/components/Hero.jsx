'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  // LINKS REAIS DA CLIENTE - 5 fotos da pasta /Imagens/Natalia
  const images = [
    "/Imagens/Natalia/1.jpg", 
    "/Imagens/Natalia/2.jpg", 
    "/Imagens/Natalia/3.jpg", 
    "/Imagens/Natalia/4.jpg", 
    "/Imagens/Natalia/5.jpg", 
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Esquerda: Texto + CTA */}
        <div className="space-y-6 md:pr-8 animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-[#756a5b]/10 text-[#756a5b] text-xs font-bold uppercase tracking-widest rounded-full">
            RETRATOS COM PROPÓSITO
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight">
            TRANSFORMANDO PERCEPÇÕES, <span className="italic text-[#756a5b]">REVELANDO ESSÊNCIA</span>.
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Realizamos ensaios que traduzem essência, posicionam marcas pessoais e comunicam valor com imagem.
          </p>

          <blockquote className="border-l-4 border-[#756a5b] pl-4 italic text-gray-500 font-serif text-xl my-6">
            “A FOTOGRAFIA É O RESULTADO. O REPOSICIONAMENTO É A VIRADA.”
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="#contato" 
              className="bg-[#756a5b] text-white px-8 py-4 rounded shadow-lg hover:bg-[#5e5448] transition text-center uppercase tracking-widest font-medium"
            >
              Quero meu ensaio estratégico
            </Link>
            <Link 
              href="#portfolio" 
              className="border border-[#756a5b] text-[#756a5b] px-8 py-4 rounded hover:bg-[#756a5b] hover:text-white transition text-center uppercase tracking-widest font-medium"
            >
              Ver portfólio
            </Link>
          </div>
        </div>

        {/* Direita: Swiper Carrossel */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            effect="fade"
            loop={true}
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={src} 
                  alt={`Retrato Corporativo ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}