import Footer from './_components/footer';
import Header from './_components/header';

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen" role="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
