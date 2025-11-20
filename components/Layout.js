import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      
      <Header />

      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

      <Footer />

    </div>
  );
}
