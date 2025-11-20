export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO AZUL */}
      <section
        style={{
          backgroundColor: "#0A3142",
          color: "#ffffff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px", fontWeight: "bold" }}>
          Visualize Seus Móveis Antes de Fazer
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "30px",
            opacity: 0.9,
          }}
        >
          Criamos projetos visuais e técnicos para ajudar você a ter clareza antes de contratar
          marcenaria. Rápido, moderno e totalmente online.
        </p>

        <a
          href="/orcamento"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "14px 30px",
            backgroundColor: "#FF780A",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Solicitar Meu Projeto
        </a>
      </section>

      {/* SEÇÃO 1 — SOBRE A HC */}
      <section style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "#0A3142" }}>
          O que é a HC Projetos?
        </h2>

        <p style={{ fontSize: "18px", color: "#444", lineHeight: "30px" }}>
          A HC Projetos ajuda pessoas que sonham com móveis planejados mas não sabem por onde
          começar. Criamos visualização realista e projetos profissionais que facilitam sua
          decisão e evitam erros na hora da execução.
        </p>
      </section>

      {/* SEÇÃO 2 — SERVIÇO PRINCIPAL */}
      <section
        style={{
          backgroundColor: "#F4F7F9",
          padding: "60px 20px",
          borderTop: "3px solid #0A3142",
          borderBottom: "3px solid #0A3142",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "#0A3142" }}>
            Visualize Seu Móvel – Serviço Principal
          </h2>

          <p style={{ fontSize: "18px", color: "#444", lineHeight: "30px" }}>
            Você envia fotos, medidas e referências. Nós criamos 5 a 6 imagens renderizadas do seu
            ambiente planejado — cores, estilo, disposição e sensação do resultado final.
          </p>

          <a
            href="/visualize"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 22px",
              backgroundColor: "#0A3142",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "17px",
            }}
          >
            Conhecer Serviço
          </a>
        </div>
      </section>

      {/* SEÇÃO 3 — COMO FUNCIONA */}
      <section style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#0A3142" }}>
          Como Funciona?
        </h2>

        <div style={{ fontSize: "18px", color: "#444", lineHeight: "30px" }}>
          <p>1. Você envia fotos, medidas e inspirações.</p>
          <p>2. Conversamos para entender o estilo desejado.</p>
          <p>3. Criamos a versão visual ou técnica conforme sua escolha.</p>
          <p>4. Você recebe tudo em PDF e WhatsApp.</p>
          <p>5. Leva para qualquer marceneiro pedir orçamento.</p>
        </div>

        <a
          href="/como-funciona"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#FF780A",
            color: "#ffffff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "17px",
          }}
        >
          Entender o Processo
        </a>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          backgroundColor: "#0A3142",
          padding: "60px 20px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Pronto para transformar seu ambiente?
        </h2>

        <a
          href="/orcamento"
          style={{
            padding: "14px 30px",
            backgroundColor: "#FF780A",
            color: "#ffffff",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Solicitar Orçamento
        </a>
      </section>
    </div>
  );
}
