import Head from "next/head";

export const meta = {
  title: "Como Medir Seu Ambiente para Pedir Móveis Planejados",
  resumo:
    "Aprenda a tirar medidas da sua casa de forma simples e correta para solicitar projetos de móveis planejados sem erro.",
  data: "2025-11-23"
};

export default function ArtigoMedidas() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.resumo} />
      </Head>

      <main style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
        
        <h1 style={{ fontSize: "32px", marginBottom: "10px", fontWeight: "bold" }}>
          {meta.title}
        </h1>

        {/* Data */}
        <p style={{ color: "#555", marginBottom: "20px" }}>
          <strong>Publicado em:</strong> 23 de novembro de 2025
        </p>

        <article style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
          <p>
            Medir seu ambiente corretamente é o primeiro passo para ter móveis planejados
            que realmente encaixem no espaço — sem folgas excessivas, cortes desnecessários
            ou problemas na instalação.
          </p>

          <p>
            A boa notícia é que você não precisa de ferramentas caras ou conhecimento técnico:
            seguindo alguns passos simples, qualquer pessoa consegue tirar medidas com precisão.
          </p>

          <hr style={{ margin: "25px 0" }} />

          <h2>1. Meça a largura total de cada parede</h2>
          <p>
            Use uma trena comum e meça de canto a canto. Caso a parede tenha recortes,
            pilares ou rebaixos, registre tudo.
          </p>

          <ul>
            <li>Anote cada medida separadamente.</li>
            <li>Se houver desnível, meça em pelo menos 2 alturas.</li>
          </ul>

          <h2>2. Meça a altura do piso ao teto</h2>
          <p>
            A altura pode variar em diferentes pontos da casa. Sempre tire:
          </p>
          <ul>
            <li>1 medida no canto esquerdo</li>
            <li>1 medida no centro</li>
            <li>1 medida no canto direito</li>
          </ul>

          <h2>3. Meça portas, janelas e vãos</h2>
          <p>
            Registre qualquer abertura que afete a instalação dos móveis.
          </p>
          <ul>
            <li>Largura e altura da porta</li>
            <li>Sentido de abertura</li>
            <li>Altura da janela até o chão</li>
            <li>Profundidade de bancadas, peitoris ou nichos</li>
          </ul>

          <h2>4. Identifique pontos elétricos e hidráulicos</h2>
          <p>
            Esses pontos definem onde pode ou não ficar gavetas, eletros e módulos altos.
          </p>
          <ul>
            <li>Tomadas e interruptores</li>
            <li>Saídas de água</li>
            <li>Ralos e sifões</li>
            <li>Saída do fogão ou cooktop</li>
          </ul>

          <h2>5. Faça fotos das paredes</h2>
          <p>
            As fotos ajudam o projetista a entender irregularidades, iluminação e detalhes
            que não aparecem apenas nas medidas.
          </p>

          <h2>6. Faça um desenho simples</h2>
          <p>
            Não precisa ser bonito — apenas um rascunho mostrando a posição das paredes e
            onde ficam portas, janelas e pontos elétricos já é suficiente.
          </p>

          <hr style={{ margin: "25px 0" }} />

          <h2>Conclusão</h2>
          <p>
            Com essas informações, já conseguimos criar um projeto visual preciso o suficiente
            para você entender o resultado final, comparar orçamentos com mais segurança e evitar
            erros durante a fabricação ou instalação.
          </p>

          <p style={{ marginTop: "20px" }}>
            Se preferir que nossa equipe faça as medidas e o planejamento completo,
            a HC Projetos está preparada para te ajudar desde a primeira etapa.
          </p>
        </article>
      </main>
    </>
  );
}
