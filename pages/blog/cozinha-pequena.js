import Head from "next/head";

export const meta = {
  title: "5 Ideias Para Aproveitar Uma Cozinha Pequena",
  resumo:
    "Dicas práticas e inteligentes para transformar cozinhas pequenas em ambientes funcionais, bonitos e organizados.",
  data: "2025-11-23",
};

export default function ArtigoCozinhaPequena() {
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
            Cozinhas pequenas são cada vez mais comuns em apartamentos e casas
            modernas. E, ao contrário do que muitos pensam, elas podem ser
            extremamente funcionais — desde que sejam bem planejadas.
          </p>

          <p>
            A seguir, reunimos cinco soluções fáceis de aplicar e que fazem
            muita diferença no dia a dia.
          </p>

          <hr style={{ margin: "25px 0" }} />

          <h2>1. Use tons claros para ampliar o espaço visual</h2>
          <p>
            Cores claras refletem mais luz e criam a sensação de amplitude.
            Isso vale para:
          </p>
          <ul>
            <li>Portas dos armários</li>
            <li>Tampos e revestimentos</li>
            <li>Paredes e teto</li>
          </ul>
          <p>
            Tons como branco, areia, gelo e fendi dão leveza e deixam o ambiente
            visualmente mais “aberto”.
          </p>

          <h2>2. Armários superiores até o teto</h2>
          <p>
            Em cozinha pequena, guardar bem é essencial. Levar os armários até o
            teto aumenta muito a capacidade de armazenamento e evita acúmulo de
            poeira na parte de cima.
          </p>
          <p>
            Use a parte mais alta para itens menos usados, como travessas,
            formas e eletros grandes.
          </p>

          <h2>3. Prateleiras abertas para reduzir sensação de aperto</h2>
          <p>
            Substituir alguns armários superiores por prateleiras deixa o
            ambiente mais leve e moderno.
          </p>
          <ul>
            <li>Ótimo para temperos e louças do dia a dia.</li>
            <li>Ajuda a economizar espaço.</li>
            <li>Quebra a sensação de parede “fechada”.</li>
          </ul>

          <h2>4. Portas de correr onde for possível</h2>
          <p>
            Portas convencionais precisam de área livre para abrir. Já portas de
            correr não ocupam espaço externo e facilitam a circulação em áreas
            estreitas.
          </p>
          <p>
            Elas funcionam bem em:
          </p>
          <ul>
            <li>Despensas</li>
            <li>Armários baixos</li>
            <li>Portais de acesso</li>
          </ul>

          <h2>5. Iluminação quente para deixar o ambiente confortável</h2>
          <p>
            Uma boa iluminação muda totalmente a sensação de uma cozinha
            pequena. Aposte em luzes quentes e indiretas para deixar o ambiente
            aconchegante.
          </p>
          <ul>
            <li>Fitas de LED embaixo dos armários</li>
            <li>Luzes embutidas</li>
            <li>Pontos de luz na bancada</li>
          </ul>

          <hr style={{ margin: "25px 0" }} />

          <h2>Conclusão</h2>
          <p>
            Com planejamento inteligente, uma cozinha pequena pode ser moderna,
            bonita e extremamente funcional. Pequenas escolhas de layout e
            iluminação fazem toda a diferença no dia a dia.
          </p>

          <p style={{ marginTop: "20px" }}>
            Se você quer um projeto pensado exclusivamente para o seu espaço,
            a HC Projetos pode criar sua cozinha ideal de forma prática e
            acessível.
          </p>
        </article>
      </main>
    </>
  );
}
