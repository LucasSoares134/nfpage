import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Parte Superior */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-serif text-xl mb-4 text-[#756a5b]">Atendimento</h4>
            <p className="text-gray-400 text-sm">Rua Jose Hermano, n 819 st Campinas</p>
            <p className="text-gray-400 text-sm">Goiânia-Go</p>
            <p className="text-gray-400 text-sm mt-2">Atendimento Online e Presencial</p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-4 text-[#756a5b]">Contato</h4>
            <p className="flex items-center gap-2 text-gray-400 text-sm mb-2"><FiMail/> nfstudionataliafigueiredo@gmail.com</p>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><FiInstagram/> @nataliafigueiredo_nf</p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4 text-[#756a5b]">Serviços</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Reposiocionamento de Imagem</li>
              <li>Fotografia Corporativa Estratégica</li>
              <li>Mentoria O.P.E.M.</li>
            </ul>
          </div>
          
          <div>
             <h4 className="font-serif text-xl mb-4 text-[#756a5b]">Pagamento</h4>
             <p className="text-gray-400 text-sm">Pix / Cartão de Crédito / Link de Pagamento.</p>
          </div>
        </div>

        {/* Parte Inferior - Créditos */}
        <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-600 text-xs">
                © {new Date().getFullYear()} Natália Figueiredo Fotografia. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}