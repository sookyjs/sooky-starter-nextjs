import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const Home = () => {
return (
    <>
    <Header />
    <main className="min-h-screen flex flex-col justify-between">
      <Hero />
    </main>
    <Footer />
    </>
  )
}

export default Home