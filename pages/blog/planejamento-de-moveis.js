import Head from "next/head";

export const meta = {
  title: "Planejamento de Móveis: O Que Saber Antes de Pedir um Projeto",
  resumo:
    "Descubra os pontos essenciais para planejar móveis sob medida sem erros — do espaço ao orçamento.",
  data: "2025-11-23",
};

export default function ArtigoPlanejamento() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.resumo} />
      </Head>

      <main
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {meta.title}
        </h1>

        {/* Data */}
        <p style={{ color: "#555", marginBottom: "20px" }}>
          <strong>Publicado em:</strong> 23 de novembro de 2025
        </p>

        <article
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
          }}
        >
          <p>
            Antes de pedir um móvel planejado, é importante entender alguns
            pontos que vão influenciar o resultado final, o custo e a
            durabilidade do projeto. Muitas pessoas focam apenas no preço,
            mas um bom planejamento evita retrabalho, atrasos e escolhas erradas.
          </p>

          <p>
            A seguir, você vai ver os principais fatores que precisam ser
            considerados antes de solicitar um projeto de marcenaria.
          </p>

          <hr style={{ margin: "25px 0" }} />

          <h2>1. Entenda suas necessidades reais</h2>
          <p>
            Parece óbvio, mas muita gente decide o móvel olhando apenas fotos de
            inspiração. Antes disso, você deve se perguntar:
          </p>
          <ul>
            <li>O que esse móvel precisa guardar?</li>
            <li>Quem vai usar diariamente?</li>
            <li>Qual a frequência de uso das gavetas e portas?</li>
            <li>Tem eletros que precisam ser encaixados?</li>
          </ul>
          <p>
            Quanto mais clara estiver sua necessidade, mais preciso será o projeto.
          </p>

          <h2>2. Meça (ou peça para medir) o ambiente corretamente</h2>
          <p>
            Medidas erradas são o erro mais comum em projetos. Elas afetam:
          </p>
          <ul>
            <li>Altura dos módulos</li>
            <li>Profundidade das bancadas</li>
            <li>Espaço de abertura de portas e gavetas</li>
            <li>Local exato de tomadas e hidrômetro</li>
          </ul>

          <p>
            Se você não tem segurança para medir, peça para o profissional ou
            utilize apps de medição com fotos.
          </p>

          <h2>3. Escolha o material certo (não apenas o mais barato)</h2>
          <p>
            MDF e MDP têm finalidades diferentes. O ideal geralmente é combinar
            os dois:
          </p>
          <ul>
            <li><strong>MDF</strong>: portas, frentes e peças verticais.</li>
            <li><strong>MDP</strong>: caixas e prateleiras largas.</li>
          </ul>
          <p>
            Em áreas úmidas, considere materiais especiais ou compensado naval.
          </p>

          <h2>4. Pense na funcionalidade antes da estética</h2>
          <p>
            Um móvel bonito, mas mal planejado, deixa o ambiente desconfortável.
          </p>
          <ul>
            <li>Gavetas precisam abrir totalmente.</li>
            <li>Portas não podem bater em eletros.</li>
            <li>Altura da bancada deve seguir ergonomia.</li>
            <li>Circulação livre é mais importante que decoração.</li>
          </ul>

          <h2>5. Considere o orçamento real — não apenas o preço inicial</h2>
          <p>
            O orçamento final varia conforme:
          </p>
          <ul>
            <li>Tipo de material</li>
            <li>Ferragens escolhidas</li>
            <li>Espessuras do MDF/MDP</li>
            <li>Acabamentos premium</li>
            <li>Eletros embutidos</li>
          </ul>

          <p>
            Não existe “móvel barato e bom”. Mas existe móvel bem planejado, com
            o investimento distribuído no que realmente importa.
          </p>

          <h2>6. Veja referências antes de fechar</h2>
          <p>
            Procure avaliações, fotos reais, projetos anteriores e verifique
            como o profissional resolve problemas.
          </p>

          <h2>7. Peça um projeto visual para evitar surpresas</h2>
          <p>
            O desenho 3D ou técnico garante que você veja exatamente o que está
            comprando — antes de fabricar.
          </p>
          <p>
            Isso reduz erros, evita reclamações e deixa tudo claro para ambas as
            partes.
          </p>

          <hr style={{ margin: "25px 0" }} />

          <h2>Conclusão</h2>
          <p>
            Planejar móveis vai muito além de escolher cores e prateleiras. É
            entender o espaço, a necessidade e como cada detalhe influencia o
            resultado. Com essas orientações, você já está muito à frente da
            maioria das pessoas que pedem orçamento.
          </p>

          <p style={{ marginTop: "20px" }}>
            Se quiser um projeto visual feito com precisão — antes de fechar
            com qualquer marceneiro — a HC Projetos está pronta para te ajudar.
          </p>
        </article>
      </main>
    </>
  );
}
