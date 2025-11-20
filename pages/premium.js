export default function Premium() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      {/* TÍTULO */}
      <section style={{ marginTop: "20px", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "15px", fontWeight: "bold" }}>
          Ambiente Completo / Premium
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "32px", color: "#444" }}>
          Para quem quer transformar vários ambientes do apartamento ou casa de forma completa,
          organizada e com total precisão.
        </p>
      </section>


      {/* O QUE INCLUI */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          O que está incluído:
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Projeto 3D completo de todos os ambientes desejados</li>
          <li>Revisões ilimitadas</li>
          <li>Planta baixa com todas as medidas</li>
          <li>Cortes e vistas profissionais</li>
          <li>PDF final separado por ambientes</li>
          <li>Sugestões de ergonomia, fluxo e iluminação</li>
          <li>Opção de lista de corte (sob demanda)</li>
        </ul>
      </section>


      {/* PARA QUEM É */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Para quem é esse serviço?
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Casais montando o primeiro apartamento</li>
          <li>Pessoas que querem harmonia entre todos os cômodos</li>
          <li>Quem quer evitar retrabalho ou erros de marcenaria</li>
          <li>Clientes que querem um projeto completo para enviar a vários marceneiros</li>
        </ul>
      </section>


      {/* BENEFÍCIOS */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Benefícios do Ambiente Premium
        </h2>

        <ul style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Ambientes combinando entre si</li>
          <li>Fluxo de circulação otimizado</li>
          <li>Ganho de funcionalidade e conforto</li>
          <li>Projeto final impecável para execução</li>
          <li>Maior valorização do imóvel</li>
          <li>Processo organizado do início ao fim</li>
        </ul>
      </section>


      {/* CTA */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Quer transformar seu apartamento inteiro?
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
          Solicitar Orçamento do Ambiente Premium
        </a>
      </section>

    </div>
  );
}
