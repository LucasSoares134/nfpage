'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ClientsResults() {
  // ATENÇÃO: Extensão .JPG (Maiúscula) conforme sua pasta de arquivos
  const clients = [
    { name: "Cliente 1", role: "Advogada Empresarial", img: "/Imagens/Clientes/1.JPG", quote: "Minha presença nas redes se tornou inesquecível." },
    { name: "Cliente 2", role: "Neurocirurgião", img: "/Imagens/Clientes/2.JPG", quote: "Atraio clientes que valorizam meu diferencial." },
    { name: "Cliente 3", role: "Mentora de Negócios", img: "/Imagens/Clientes/3.JPG", quote: "Minha imagem comunica o valor do meu ticket." },
    { name: "Cliente 4", role: "CEO Tech", img: "/Imagens/Clientes/4.JPG", quote: "Posicionamento visual que acompanha meu nível." },
    { name: "Cliente 5", role: "Arquiteta", img: "/Imagens/Clientes/5.JPG", quote: "Você passa a ser vista como líder na sua área." },
    { name: "Cliente 6", role: "Médico", img: "/Imagens/Clientes/6.JPG", quote: "Sua imagem agora está à altura do seu trabalho." },
    { name: "Cliente 7", role: "Empreendedor", img: "/Imagens/Clientes/7.jpeg", quote: "Mais valor e autoridade imediata na sua marca." },
    { name: "Cliente 8", role: "Coach", img: "/Imagens/Clientes/8.JPG", quote: "O visual que faltava para elevar o ticket." },
  ];

  return (
    <section id="clientes" className="py-20 bg-white"> {/* Fundo Branco */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#756a5b] mb-12">
          NOSSO PORTFÓLIO E RESULTADOS
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="pb-12"
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition h-full flex flex-col justify-between"> {/* Card com fundo suave */}
                  <img 
                    src={client.img} 
                    alt={client.name} 
                    className="w-full h-64 object-cover rounded mb-4"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-gray-800">{client.name}</h3>
                    <p className="text-xs text-[#756a5b] uppercase tracking-wider mb-3">{client.role}</p>
                    <p className="text-gray-600 text-sm italic">"{client.quote}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}