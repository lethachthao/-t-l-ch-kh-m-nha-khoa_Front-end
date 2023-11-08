import Header from './_components/header';

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />

      <main className="relative" role="main">
        {children}
      </main>
    </>
  );
}
