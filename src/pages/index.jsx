import { Prism as Code } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

import Head from 'next/head'
import Image from 'next/image'
import Container from 'components/Container'
import Section from 'components/Section'

import styles from 'styles/Pages/Home.module.scss'


const Home = () => {

  const scrollTo = (e, target) => {
    e.preventDefault()

    const anchorTarget = document.querySelector(target)

    if(!anchorTarget) return
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Head>
        <title>Home - TASD Project</title>
      </Head>

      <Container>
        <div className={styles.title}>
          <h1>Creare un blog con Next.js e Wordpress come headless CMS</h1>
          <p>Ovvero come perdere la testa e ritrovarsi in una SPA</p>
        </div>

        <Section>
          <h2>tl;dr</h2>
          <p>
            In questa pagina ho dato un breve <a href="#" onClick={(e) => scrollTo(e, '#incipit')}>accenno</a> ai pregi e i difetti di Wordpress e li ho messi a confronto con Next.js; ho esposto la struttura del <a href="#" onClick={(e) => scrollTo(e, '#project')}>progetto</a>; ho <a href="#" onClick={(e) => scrollTo(e, '#hosting')}>indicato</a> le piattaforme di hosting utilizzate e come ho risolto il problema dell&apos;<a href="#" onClick={(e) => scrollTo(e, '#updating')}>aggiornamento dei contenuti</a>.
            Infine ho elencato qualche possibile <a href="#" onClick={(e) => scrollTo(e, '#next')}>sviluppo futuro</a>
          </p>
          <p>
            Infondo è possibile trovare una <a href="#" onClick={(e) => scrollTo(e, '#sources')}>lista</a> dei pacchetti più importanti utilizzati e le fonti utilizzate.
          </p>

          <p>
            Il codice sorgente è disponibile sul mio GitHub <a href="https://github.com/EliaGuarnieri/wpheadless">@EliaGuarnieri/wpheadless</a>.
          </p>
        </Section>

        <Section id="incipit">
          <h2>Incipit</h2>
          <div className={styles.imageWrapper}>
            <Image
              src={'/image/vs.png'}
              width={500}
              height={196}
            />
          </div>
          <p>
            I Blog sono un ottimo strumento per diffondere le idee, raccontare storie e presentare prodotti. Quando si parla di Blog la prima cosa che viene in mente è <a href="https://it.wordpress.org/about/">Wordpress</a>, un <abbr title="Content Management System">CMS</abbr> open source <strong>molto potente, facile da utilizzare e conosciuto</strong>. Per quanto Wordpress sia indubbiamente un grande strumento i siti creati con esso risultano molto lenti soprattutto se non si fa attenzione e si installano centinaia di plugin!
          </p>
          <p>
            Negli ultimi anni sta prendendo sempre più piede lo sviluppo di <abbr title="Single Page Applications">SPA</abbr>, siti web che presentano un&apos;esperienza molto simile a quella di un&apos;applicazione nativa (per dispositivi mobili o desktop), riscrivendo il contenuto delle pagine dinamicamente solo nei punti in cui avviene una modifica. Questa tecnica fa si che <strong>le SPA siano molto più rapide di un sito web sviluppato con Wordpress</strong> e la velocità è uno degli aspetti chiave per la <abbr title="Search Engine Optimizations">SEO</abbr>.
          </p>
          <p>
            La libreria più famosa per semplificare la creazione di SPA è senza dubbio <a href="https://it.reactjs.org/">React</a>. Ma per creare da zero un&apos;applicazione web con React bisogna considerare diversi aspetti:
          </p>
          <ul>
            <li>Il codice deve essere raggruppato usando un bundler come webpack e trasformato usando un compilatore come Babel.</li>
            <li>È necessario eseguire ottimizzazioni di produzione come la suddivisione del codice.</li>
            <li>È necessario eseguire il pre-rendering statico di alcune pagine per far sì che siano comprensibili ai motori di ricerca.</li>
            <li>Potrebbe essere necessario scrivere del codice lato server per connettere l&apos;applicazione React a un <abbr title="DataBase Management System">DBMS</abbr>.</li>
          </ul>
          <p>
            Per fortuna un framework come <a href="https://nextjs.org/">Next.js</a> semplifica la gestione di questi aspetti. In particolare permette il pre-rendering delle pagine cosicché siano interpretabili dai motori di ricerca.
          </p>
          <p>
            Per quanto riguarda la componente CMS esistono svariate soluzioni da abbinare a Next.js. Una lista non esaustiva di CMS da abbinare può essere: <a href="https://www.datocms.com/">DatoCMS</a>, <a href="https://buttercms.com/">ButterCMS</a>, <a href="https://strapi.io/">Strapi</a>, ...
          </p>
          <p>
            A tutti questi CMS manca però una cosa importantissima: <strong>non sono Wordpress!</strong> Può sembrare una banalità, ma il fatto che Wordpress sia in circolazione da così tanto tempo fa sì che bene o male anche persone meno tecniche sappiano come produrre contenuti con esso.
          </p>
          <p>
            Quindi, <strong>perché non tagliare la testa a Wordpress?</strong>
          </p>

          <h3>Tagliategli la testa!</h3>
          <div className={styles.imageWrapper}>
            <Image
              src={'/image/tagliategli-la-testa.gif'}
              width={500}
              height={281}
            />
          </div>

          <p>
            Un Headless CMS è un CMS che si occupa solamente della gestione dei contenuti demandando la loro visualizzazione ad altri. Wordpress supporta una modalità headless esponendo delle <a href='https://developer.wordpress.org/rest-api/'>REST API</a> <em>out of the box</em>, ma installando <a href="https://wordpress.org/plugins/wp-graphql/">WPGraphQL plugin</a> è possibile effettuare delle query ai dati di Wordpress con <a href="https://graphql.org/">GraphQL</a>.
          </p>

          <p>
            E questo è davvero tutto quello che è necessario fare per utilizzare Wordpress come headless CMS!
          </p>

          <h3>L&apos;unione fa la forza</h3>
          <div className={styles.imageWrapper}>
            <Image
              src={'/image/plus.png'}
              width={500}
              height={196}
            />
          </div>

          <p>
            Completata la parte di Wordpress è tempo di passare a Next.js. Prendendo spunto dal fantastico repository <a href="https://github.com/colbyfayock/next-wordpress-starter">Next.js WordPress Starter</a> è possibile partire con uno scheletro di applicazione potenzialmente già pronto all&apos;uso.
          </p>

          <p>
            Completata la parte di Wordpress è tempo di passare a Next.js. Prendendo spunto dal fantastico repository <a href="https://github.com/colbyfayock/next-wordpress-starter">Next.js WordPress Starter</a> è possibile partire con uno scheletro di applicazione potenzialmente già pronto all&apos;uso. Partendo da questa base ho sviluppato il mio progetto.
          </p>
        </Section>

        <Section id="project">
          <h2>Il Progetto</h2>

          <p>
            La struttura del progetto ricalca il repository di partenza, con piccole modifiche:
          </p>

          <Code language='textile' style={atomDark}>
{
`.
├── .next
├── node_modules
├── public
│   ├── image             # Immagini statiche
│   └── ...
├── src
│   ├── components        # I componenti
│   ├── data              # Le query GraphQL
│   ├── hooks             # I custom hook
│   ├── Layout
│   ├── lib               # Le utilities functions
│   └── pages             # Le routes
│       ├── authors
│       ├── categories
│       ├── posts
│       ├── _app.js       # Entry point dellapp
│       └── index.jsx     # Home page
├── styles                # Gli stili globali e delle pagine
├── Templates             # I template
├── next.config.js        # File di configurazione di Next
└── ...`
}
          </Code>
        </Section>

        <Section>
          <h3> I componenti</h3>

          <p>
            Ho cercato di rendere i componenti più isolati possibile così da poterli riutilizzare in un altri progetti futuri. Ho seguito il seguente pattern per la struttura della cartella di ogni componente
          </p>

            <Code language='textile' style={atomDark}>
{
`📁
├── index.js        # Per l'esportazione del componente
├── *.jsx           # Il codice del componente
└── *.module.scss   # Lo stile del componente`
}
          </Code>

          <p>
            Questo pattern permette di separare gli stili dal componente e ne semplifica l&apos;importazione.
          </p>

          <Code language='jsx' style={atomDark}>
{
`// Con il file index.js
import TheComponent from 'components/TheComponent'

// Senza il file index.js
import TheComponent from 'components/TheComponent/TheComponent'
`
}
          </Code>
        </Section>

        <Section>
          <h3>Estrazione dei dati da Wordpress</h3>

          <p>
            Come detto nell&apos;incipit i dati da Wordpress vengono estratti con GraphQL. Per semplificare la gestione delle chiamate ho utilizzato la libreria <a href='https://www.apollographql.com/docs/react/'>Apollo Client</a>.
          </p>

          <p>
            Le queries si trovano nella cartella <code>data</code> e vengono utilizzate dalle funzioni contenute nella cartella <code>lib</code>.
          </p>

          <p>
            Il data fetching vero e proprio avviene a livello di pagina con le funzioni <a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-paths">getStaticPaths</a>, che genera le routes statiche per tutte le risorse estrarre da Wordpress, e <a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">getStaticProps</a>, che estrae i dati richiesti. Entrambe le funzioni vengono chiamate in fase di build.
          </p>

          <Code language='jsx' style={atomDark} showLineNumbers>
{
`/*
 * Uso di getStaticProps e getStaticPaths nella pagina del blog
 * @see src/pages/posts/page/[page].jsx
 */

export async function getStaticProps({ params = {} } = {}) {
  const allPosts = await getAllPosts();
  const { posts, pagination } = await getPaginatedPosts(allPosts.posts, params?.page);
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();
  const pagesCount = await getPagesCount(posts);
  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });
  return {
    paths,
    fallback: false,
  };
}`
}
          </Code>
        </Section>

        <Section id="hosting">
          <h2>Hosting dell&apos;applicazione</h2>

          <p>
            Wordpress è stato messo online su altervista:
          </p>

          <p>
            <strong>Indirizzo</strong>: <a href='https://headlesswp.altervista.org/wp-admin'>https://headlesswp.altervista.org/wp-admin</a><br/>
            <strong>Nome utente:</strong> e.guarnieri4@campus.unimib.it<br/>
            <strong>Password:</strong> mRcpE4EcJU4P
          </p>

          <p>
            L&apos;applicazione creata con Next.js è stata messa online su <a href="https://www.netlify.com/">Netlify</a> che permette l&apos;hosting direttamente da repository e, automatizzando la fase di build, pubblica i contenuti staticamente tramite <abbr title="Content Delivery Network">CDN</abbr>.
          </p>
        </Section>

        <Section id="updating">
          <h2>Aggiornamento dei contenuti</h2>

          <p>
            Essendo i contenuti scaricati in fase di build e inseriti in pagine statiche secondo l&apos;approccio <abbr title="Javascript API Markup">JAMStack</abbr> sarebbe necessario rilanciare una build ogni volta che viene modificato lo stato di un post su Wordpress.
          </p>

          <p>
            Per ovviare a questa limitazione ho installato su Wordpress <a href='https://it.wordpress.org/plugins/wp-webhooks/'>WP Webhooks</a> che permette di impostare dei <em>Trigger</em> che, a seguito di determinati eventi, inviano dati a servizi esterni.
          </p>

          <p>
            Su Netlify è poi possibile impostare dei <a href="https://docs.netlify.com/configure-builds/build-hooks/">Build hooks</a> che, quando invocati, lanciano una nuova build dell&apos;applicazione.
          </p>

          <p>
            Combinando questi due meccanismi ho automatizzato il processo di build ogni volta che viene pubblicato, aggiornato o eliminato un post.
          </p>
        </Section>

        <Section id="next">
          <h2>What&apos;s next?</h2>

          <p>
            Wordpress, grazie anche a <a href="https://yoast.com/wordpress/plugins/seo/">Yoas SEO</a>, fa un lavoro eccellente per i motori di ricerca. Sfruttare questo lavoro in questa applicazione è sicuramente il primo passo per uno sviluppo futuro. Yoast infatti, grazie a un plugin, espone su GraphQL tutte le informazioni della SEO impostate su Wordpress.
          </p>

          <p>
            In questo momento le due piattaforme (Wordpress e Next) sono slegate. Se faccio l&apos;anteprima di un articolo da Wordpress non lo visualizzo sul frontend sviluppato con Next, ma in quello di Wordpress. Grazie alla <a href="https://nextjs.org/docs/advanced-features/preview-mode">Preview Mode</a> di Next dovrebbe essere possibile integrare meglio WordPress e Next per creare ancora di più un&apos;esperienza senza soluzione di continuità tra la produzione e la visualizzazione dei contenuti
          </p>

        </Section>

        <Section>
          <h2>Per finire</h2>
          <h3>Pacchetti</h3>
          <ul>
            <li>Consumare le API, <a href="https://www.apollographql.com/docs/react/">@apollo/client</a>.</li>
            <li>Animazioni tra le pagine, <a href="https://www.framer.com/motion/">framer-motion</a>.</li>
            <li>Personalizzare la barra di scorrimento, <a href="https://www.npmjs.com/package/react-custom-scrollbars-2">react-custom-scrollbars-2</a>.</li>
            <li>Higlighting del codice, <a href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">react-syntax-highlighter</a>.</li>
            <li>Carosello articoli recenti, <a href="https://swiperjs.com/">swiper</a>.</li>
          </ul>


          <h3>Fonti</h3>
          <ul>
            <li>Articolo che a guidato il progetto, <a href="https://next-wordpress-starter.spacejelly.dev/posts/how-to-create-a-headless-wordpress-blog-with-next-js-wordpress-starter/">How to Create a Headless WordPress Blog with Next.js WordPress Starter</a>.</li>
            <li>Repository con da cui sono partito, <a href="https://github.com/colbyfayock/next-wordpress-starter">@colbyfayock/next-wordpress-starter</a>.</li>
          </ul>

          <h3>Link utili</h3>
          <ul>
            <li>Repository con il codice sorgente, <a href="https://github.com/EliaGuarnieri/wpheadless">@EliaGuarnieri/wpheadless</a>.</li>
            <li>Accesso all&apos;Admin di Wordpress, <a href="https://headlesswp.altervista.org/wp-admin">Altervista</a>.</li>
          </ul>
        </Section>

      </Container>
    </>
  )
}

export default Home
