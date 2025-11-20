export default function Visualize() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      {/* TÍTULO PRINCIPAL */}
      <section style={{ marginTop: "20px", marginBottom: "40px" }}>
        <h1 style={{
          fontSize: "36px",
          marginBottom: "15px",
          fontWeight: "bold"
        }}>
          Visualize Seu Móvel
        </h1>

        <p style={{
          fontSize: "20px",
          lineHeight: "32px",
          color: "#444"
        }}>
          O primeiro passo perfeito para quem quer móveis planejados, mas não sabe por onde começar.
        </p>
      </section>


      {/* COMO FUNCIONA */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          O que você precisa enviar:
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Fotos do ambiente</li>
          <li>Planta com medidas (se tiver)</li>
          <li>Inspirações do Pinterest ou Instagram</li>
          <li>Uma descrição simples do que deseja</li>
        </ul>
      </section>


      {/* O QUE VOCÊ ENTREGA */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          O que você recebe:
        </h2>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          De 5 a 6 imagens renderizadas do ambiente planejado, com:
        </p>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Cores e estilo</li>
          <li>Puxadores e detalhes visuais</li>
          <li>Disposição dos móveis</li>
          <li>Sensação realista do ambiente pronto</li>
        </ul>

        <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
          Com essas imagens, você já pode pedir orçamento para qualquer marceneiro do Brasil.
        </p>
      </section>


      {/* O QUE NÃO INCLUI */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          O que NÃO está incluído:
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Plantas técnicas</li>
          <li>Medidas exatas</li>
          <li>Cortes e vistas técnicas</li>
          <li>Lista de materiais</li>
          <li>Lista de corte</li>
        </ul>

        <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
          Este é um produto visual, rápido e acessível — perfeito para quem quer clareza antes de decidir.
        </p>
      </section>


      {/* CTA */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Pronto para visualizar seu ambiente?
        </h2>

        <a 
          href="/orcamento"
          style={{
            padding: "14px 28px",
            backgroundColor: "#FF780A",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "20px"
          }}
        >
          Solicitar meu Projeto Visual
        </a>
      </section>

    </div>
  );
}
