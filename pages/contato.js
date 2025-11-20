export default function Contato() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        Contato
      </h1>

      <p style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
        Entre em contato conosco para solicitar um projeto, tirar dúvidas ou enviar informações
        sobre o seu ambiente.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px" }}>WhatsApp</h2>
      <a 
        href="https://wa.me/5512991831380"
        target="_blank"
        style={{ fontSize: "20px", color: "#FF780A" }}
      >
        (12) 99183-1380
      </a>

      <h2 style={{ fontSize: "28px", marginTop: "30px" }}>E-mail</h2>
      <p style={{ fontSize: "18px", color: "#555" }}>
        hcmarcenariaemovelaria@hotmail.com
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px" }}>Localização</h2>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Jacareí – SP<br />
        Atendemos toda a região e também pedidos online do Brasil inteiro.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px" }}>Horário de Atendimento</h2>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Segunda a Sábado<br />
        08h às 20h
      </p>

      <div style={{ height: "80px" }}></div>
    </div>
  );
}
