import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Natália Figueiredo | Reposicionamento de Imagem com Estratégia",
  description: "Especialista em posicionamento de imagem e criadora de narrativas visuais que revelam essência, autoridade e valor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-[#fdfbf7] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}