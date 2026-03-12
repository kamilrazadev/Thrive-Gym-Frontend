import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
