'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header className="w-full z-50 fixed top-0 left-0 transition-all duration-300">
      
      {/* 1. Top Bar - Tom Terroso (AGORA COM LOGO) */}
      <div className="bg-[#756a5b] text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
            {/* LOGO NO CANTO ESQUERDO DA FAIXA MARROM */}
            <Image 
                src="/Imagens/Natalia/Logo.PNG"
                alt="Logo NF"
                width={20}
                height={20}
                className="w-5 h-5"
            />
            <p className="font-medium tracking-wide">REPOSICIONAMENTO DE IMAGEM COM ESTRATÉGIA</p>
        </div>
        
        <Link 
          href="#contato" 
          className="hidden md:inline-block bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition text-xs uppercase tracking-wider"
        >
          Fale com a fotógrafa
        </Link>
      </div>

      {/* 2. Main Header - Menu Principal */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-[#fdfbf7]/95 backdrop-blur-md shadow-md py-2' : 'bg-[#fdfbf7] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* LOGO da Cliente (Substituindo o Texto) */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
                src="/Imagens/Natalia/Logo.PNG"
                alt="Logo Natália Figueiredo"
                width={35}
                height={35}
                className="w-9 h-9"
            />
             <span className="font-serif text-2xl md:text-3xl font-bold text-[#756a5b] tracking-tight">
                Natália Figueiredo
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-[#756a5b] font-medium text-sm uppercase tracking-widest transition"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contato"
              className="bg-[#756a5b] text-white px-5 py-2 rounded-sm text-sm uppercase tracking-widest hover:bg-[#5e5448] transition shadow-lg"
            >
              Contato
            </Link>
          </nav>

          {/* Botão Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#756a5b] text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Abre ao clicar) */}
      {isOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-t border-gray-100 absolute w-full h-screen flex flex-col items-center py-10 space-y-6 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif text-[#756a5b]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="bg-[#756a5b] text-white px-8 py-3 rounded text-lg uppercase tracking-widest"
            >
              Contato
            </Link>
        </div>
      )}
    </header>
  );
}