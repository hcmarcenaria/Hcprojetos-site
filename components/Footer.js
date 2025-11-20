export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A3142",   // azul do logo
        padding: "30px 20px",
        marginTop: "60px",
        color: "#ffffff",
        textAlign: "center",
        borderTop: "3px solid #FF780A", // detalhe moderno em laranja
      }}
    >
      <h3 style={{ margin: 0, fontSize: "22px", color: "#FF780A" }}>
        HC Projetos
      </h3>

      <p style={{ margin: "10px 0", fontSize: "16px" }}>
        CNPJ: 41.251.913/0001-68 • Jacareí – SP
      </p>

      <p style={{ margin: "5px 0", fontSize: "16px" }}>
        WhatsApp: (12) 99183-1380 •  
        <a
          href="mailto:hcmarcenariaemovelaria@hotmail.com"
          style={{ color: "#FF780A", textDecoration: "none", marginLeft: "5px" }}
        >
          hcmarcenariaemovelaria@hotmail.com
        </a>
      </p>

      <p style={{ marginTop: "15px", fontSize: "14px", opacity: 0.8 }}>
        © {new Date().getFullYear()} HC Projetos — Todos os direitos reservados.
      </p>
    </footer>
  );
}
