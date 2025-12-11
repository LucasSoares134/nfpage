/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desativa a otimização de imagem padrão para acelerar o deploy
  images: {
    unoptimized: true, 
  },
  
  // Apenas configura o caminho para o build, corrigindo o erro do Turbopack
  output: 'standalone', 

  // Remove a chave experimental que estava causando o erro de Turbopack
  experimental: {
    // outputFileTracingRoot: './studio-natalia', <--- REMOVER!
  }
};

export default nextConfig;