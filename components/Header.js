import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "#0A3142",          // azul do seu logo
      padding: "15px 25px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      
      {/* LOGO / NOME */}
      <h2 style={{ margin: 0 }}>
        <Link 
          href="/" 
          style={{ 
            textDecoration: "none", 
            color: "#FF780A",          // laranja do logo
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          HC Projetos
        </Link>
      </h2>

      {/* MENU */}
      <nav style={{ display: "flex", gap: "22px" }}>
        {[
          ["Visualize Seu Móvel", "/visualize"],
          ["Projeto Técnico", "/tecnico"],
          ["Premium", "/premium"],
          ["Como Funciona", "/como-funciona"],
          ["Blog", "/blog"],
          ["Portfólio", "/portfolio"],
          ["Sobre", "/sobre"],
          ["Contato", "/contato"],
        ].map(([label, url]) => (
          <Link
            key={url}
            href={url}
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontSize: "16px",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => e.target.style.color = "#FF780A"}
            onMouseLeave={(e) => e.target.style.color = "#ffffff"}
          >
            {label}
          </Link>
        ))}

        {/* Botão destaque */}
        <Link
          href="/orcamento"
          style={{
            padding: "8px 16px",
            backgroundColor: "#FF780A",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
        >
          Orçamento
        </Link>
      </nav>

    </header>
  );
}
