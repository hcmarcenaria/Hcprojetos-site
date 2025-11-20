export default function Home() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      {/* HERO SECTION */}
      <section style={{ marginTop: "20px", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "15px", fontWeight: "bold" }}>
          Visualize Seus Móveis Antes de Fazer!
        </h1>

        <p style={{ fontSize: "20px", lineHeight: "32px", color: "#444" }}>
          A HC Projetos ajuda você a enxergar seu ambiente planejado antes de contratar marceneiro.
          Rápido, online e acessível — perfeito para quem nunca fez planejado e não sabe por onde começar.
        </p>

        <a 
          href="/visualize" 
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 22px",
            fontSize: "18px",
            backgroundColor: "#FF780A",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Criar Meu Projeto Visual
        </a>
      </section>


      {/* SOBRE A HC PROJETOS */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>O que é a HC Projetos?</h2>
        <p style={{ fontSize: "18px", lineHeight: "28px", color: "#555" }}>
          A HC Projetos existe para ajudar pessoas que sonham em ter móveis planejados, 
          mas não sabem por onde começar. Nosso foco é entregar clareza, visualização e 
          segurança antes de qualquer orçamento ou execução.
        </p>
      </section>


      {/* SERVIÇO PRINCIPAL */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Visualize Seu Móvel — Serviço Principal</h2>

        <p style={{ fontSize: "18px", lineHeight: "28px", color: "#555" }}>
          Você envia fotos, medidas e inspirações.  
          Nós entregamos de 5 a 6 imagens renderizadas mostrando seu ambiente planejado, 
          com cores, disposição e estilo — tudo de forma clara e realista.
          É simples para nós, mas surpreendente para quem é leigo.
        </p>

        <a 
          href="/visualize" 
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 18px",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "17px"
          }}
        >
          Conhecer o Serviço
        </a>
      </section>


      {/* COMO FUNCIONA */}
      <section style={{ marginBottom: "70px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Como Funciona?</h2>

        <ol style={{ fontSize: "18px", color: "#555", lineHeight: "30px" }}>
          <li>Você envia fotos, plantas ou inspirações.</li>
          <li>Conversa com a gente para definir estilo e ideias.</li>
          <li>Criamos seu projeto visual ou técnico.</li>
          <li>Você recebe tudo por WhatsApp e PDF.</li>
          <li>Leva para qualquer marceneiro pedir orçamento.</li>
        </ol>
      </section>


      {/* CTA FINAL */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Pronto para transformar seu ambiente?
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

	{/* LINK PARA PORTFÓLIO */}
<section style={{ marginBottom: "80px" }}>
  <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
    	<br />
	Veja alguns exemplos de projetos
  </h2>

  <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
    Confira alguns renders e projetos já criados para clientes.
  </p>

  <a 
    href="/portfolio"
    style={{
      padding: "12px 22px",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "18px"
    }}
  >
    Ver Portfólio
  </a>
</section>

      </section>

	{/* SEÇÃO SOBRE */}
<section style={{ marginBottom: "60px" }}>
  <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Quem somos?</h2>
  <p style={{ fontSize: "18px", color: "#555", marginBottom: "15px" }}>
    Conheça a história, propósito e valores da HC Projetos.
  </p>

  <a 
    href="/sobre"
    style={{
      padding: "10px 18px",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "17px"
    }}
  >
    Sobre nós
  </a>
</section>

{/* SEÇÃO CONTATO */}
<section style={{ marginBottom: "100px" }}>
  <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Fale com a gente</h2>
  <p style={{ fontSize: "18px", color: "#555", marginBottom: "15px" }}>
    Entre em contato pelo WhatsApp ou envie suas informações pelo site.
  </p>

  <a 
    href="/contato"
    style={{
      padding: "10px 18px",
      backgroundColor: "#FF780A",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "17px"
    }}
  >
    Ir para Contato
  </a>
</section>


    </div>
  );
}
