import Header from './components/Header';
import Hero from './components/Hero';
import ValueBanner from './components/ValueBanner';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Experience from './components/Experience';
import ClientsResults from './components/ClientsResults';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueBanner />
      <VideoSection />
      <About />
      <Experience />
      <ClientsResults />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}