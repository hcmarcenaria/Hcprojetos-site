export default function Tecnico() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      {/* TÍTULO */}
      <section style={{ marginTop: "20px", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "15px", fontWeight: "bold" }}>
          Projeto Técnico Completo
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "32px", color: "#444" }}>
          Para quem deseja precisão, medidas exatas e um projeto que o marceneiro
          possa executar sem erro. Ideal para quem já está pronto para avançar além do visual.
        </p>
      </section>


      {/* O QUE INCLUI */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          O que está incluído:
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Planta baixa completa e organizada</li>
          <li>Todas as medidas exatas</li>
          <li>Modelo 3D detalhado do ambiente</li>
          <li>Cortes e vistas profissionais</li>
          <li>PDF final completo e formatado</li>
          <li>Sugestões de ferragens e acabamentos</li>
          <li>(Opcional) Lista de corte para marcenaria</li>
        </ul>
      </section>


      {/* QUANDO ESCOLHER */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Quando escolher esse serviço?
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Quando você quer precisão total</li>
          <li>Quando já fechou com um marceneiro</li>
          <li>Quando deseja evitar erros na execução</li>
          <li>Quando está planejando vários ambientes</li>
          <li>Quando quer levar um projeto impecável para orçamento</li>
        </ul>
      </section>


      {/* BENEFÍCIOS */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Por que esse serviço é tão importante?
        </h2>

        <p style={{ fontSize: "18px", color: "#555", lineHeight: "28px" }}>
          O Projeto Técnico Completo elimina dúvidas, reduz erros, economiza tempo e evita
          aquele famoso “não era bem isso que eu queria”.  
        </p>

        <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
          Com um bom projeto técnico, o marceneiro recebe tudo pronto para executar com segurança.
        </p>
      </section>


      {/* CTA */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Quer solicitar seu Projeto Técnico Completo?
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
          Solicitar Orçamento
        </a>
      </section>

    </div>
  );
}
