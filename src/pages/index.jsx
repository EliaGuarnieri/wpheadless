import { useContext } from 'react'
import { ScrollContext } from 'context'

import { Prism as Code } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

import Head from 'next/head'
import Image from 'next/image'
import Container from 'components/Container'
import Section from 'components/Section'

import styles from 'styles/Pages/Home.module.scss'


const Home = () => {

  const scrollbars = useContext(ScrollContext)

  const scrollTo = (e, target) => {
    e.preventDefault()

    const anchorTarget = document.querySelector(target)

    if(!anchorTarget) return

    const distance = anchorTarget.getBoundingClientRect().top - 60
    scrollbars.current.view.scroll({top: distance, behavior: 'smooth'})
  }

  const Anchor = ({to, children}) => <a href="#" onClick={(e) => scrollTo(e, to)}>{children}</a>

  return (
    <>
      <Head>
        <title>Home - TASD Project</title>
      </Head>

      <Container>
        <div className={styles.title}>
          <h1>Creare un blog con Next.js e WordPress come headless CMS</h1>
          <p>Ovvero come perdere la testa e ritrovarsi in una SPA</p>
        </div>

        <Section>
          <h2>tl;dr</h2>
          <p>
            In questa pagina ho fatto un breve <Anchor to='#incipit'>accenno</Anchor> ai pregi e i difetti di WordPress e li ho messi a confronto con Next.js; ho presentato la struttura del <Anchor to='#project'>progetto</Anchor>; ho <Anchor to='#hosting'>indicato</Anchor> le piattaforme di hosting utilizzate e come ho risolto il problema dell&apos;<Anchor to="#updating">aggiornamento dei contenuti</Anchor>.
            Infine ho elencato qualche possibile <Anchor to="#next">sviluppo futuro</Anchor>.
          </p>
          <p>
            In fondo è possibile trovare una <Anchor to="#sources">lista</Anchor> dei pacchetti più importanti utilizzati, le fonti e i link utili.
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
            I Blog sono un ottimo strumento per diffondere le idee, raccontare storie e presentare prodotti. Quando si parla di Blog la prima cosa che viene in mente è <a href="https://it.WordPress.org/about/">WordPress</a>, un <abbr title="Content Management System">CMS</abbr> open source <strong>molto potente, facile da utilizzare e conosciuto</strong>. Per quanto WordPress sia indubbiamente un grande strumento, i siti creati con esso possono risultare molto lenti soprattutto se non si fa attenzione e se si installano centinaia di plugin!
          </p>
          <p>
            Negli ultimi anni sta prendendo sempre più piede lo sviluppo di <abbr title="Single Page Applications">SPA</abbr>, siti web che presentano un&apos;esperienza molto simile a quella di un&apos;applicazione nativa (per dispositivi mobili o desktop). Riscrivendo il contenuto delle pagine dinamicamente solo nei punti in cui avviene una modifica, <strong>le SPA risultano essere molto più rapide ed efficienti di un sito web sviluppato con WordPress</strong> e la velocità è uno degli aspetti chiave per la <abbr title="Search Engine Optimizations">SEO</abbr>.
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
            A tutti questi CMS manca però una cosa importantissima: <strong>non sono WordPress!</strong> Può sembrare una banalità, ma il fatto che WordPress sia in circolazione da così tanto tempo fa sì che, bene o male, anche persone con meno competenze tecniche sappiano come produrre contenuti con esso.
          </p>
          <p>
            Quindi, <strong>perché non tagliare la testa a WordPress?</strong>
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
            Un Headless CMS è un CMS che si occupa solamente della gestione dei contenuti demandando la loro visualizzazione ad altri. WordPress supporta una modalità headless esponendo delle <a href='https://developer.WordPress.org/rest-api/'>REST API</a> <em>out of the box</em>, ma installando <a href="https://WordPress.org/plugins/wp-graphql/">WPGraphQL plugin</a> è possibile effettuare delle queries ai dati di WordPress con <a href="https://graphql.org/">GraphQL</a>.
          </p>

          <p>
            E questo è davvero tutto quello che è necessario fare per utilizzare WordPress come headless CMS!
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
            Completata la parte di WordPress è tempo di passare al frontend e quindi alla visualizzazione delle risorse create con WordPress. Next.js è un ottimo strumento per la creazione di web application.
            Prendendo spunto dal fantastico repository <a href="https://github.com/colbyfayock/next-WordPress-starter">Next.js WordPress Starter</a> è possibile partire con uno scheletro di applicazione potenzialmente già pronto all&apos;uso. Partendo da questa base ho sviluppato il mio progetto.
          </p>

          <Code language='bash' style={atomDark}>
{
`// Bash
yarn create next-app -e https://github.com/colbyfayock/next-wordpress-starter wpheadless
# or
npx create-next-app -e https://github.com/colbyfayock/next-wordpress-starter wpheadless`
}
          </Code>

          <p>
            Con questo comando si crea una Next App a partire dal repository. Prima di iniziare a personalizzare il progetto è necessario connettere WordPress alla Next App. Per fare questo basta creare il file <code>.env.local</code> nella root del progetto e inserire:
          </p>

          <Code language='textile' style={atomDark}>
{
`// .env.local
WORDPRESS_GRAPHQL_ENDPOINT="[URL di WordPress]/graphql"`
}
          </Code>

          <p>e richiamare nel file di configurazione <code>next.config.js</code> la variabile:</p>

          <Code language='javascript' style={atomDark}>
{
`module.exports = {
  ...

  env: {
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT
  }
}`
}
          </Code>
        </Section>

        <Section id="project">
          <h2>Il Progetto</h2>

          <p>
            La struttura del progetto ricalca il repository di partenza, con piccole modifiche:
          </p>

          <Code language='textile' style={atomDark}>
{
`📁
├── .next
├── node_modules
├── public
│   ├── image            # Immagini statiche
│   └── ...
├── src
│   ├── components        # I componenti
│   ├── context           # I context
│   ├── data              # Le queries GraphQL
│   ├── hooks             # I custom hook
│   ├── Layout
│   ├── lib               # Le utilities functions
│   └── pages             # Le routes
│       ├── authors
│       ├── categories
│       ├── posts
│       ├── _app.js       # Entry point dell'app
│       └── index.jsx     # Home page
├── styles                # Gli stili globali e delle pagine
├── Templates             # I template
├── next.config.js        # File di configurazione di Next
└── ...`
}
          </Code>
        </Section>

        <Section>
          <h3>I componenti</h3>

          <p>
            Ho cercato di rendere i componenti più isolati possibile così da poterli riutilizzare in un altri progetti futuri. Ho seguito il seguente pattern per la struttura della cartella di ogni componente:
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
          <h3>Estrazione dei dati da WordPress</h3>

          <p>
            Come detto nell&apos;incipit i dati da WordPress vengono estratti con GraphQL. Per semplificare la gestione delle chiamate ho utilizzato la libreria <a href='https://www.apollographql.com/docs/react/'>Apollo Client</a>.
          </p>

          <p>
            Le queries si trovano nella cartella <code>data</code> e vengono utilizzate dalle funzioni contenute nella cartella <code>lib</code>.
          </p>

          <p>
            Il data fetching vero e proprio avviene a livello di pagina con le funzioni <a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-paths">getStaticPaths</a>, che genera le routes statiche per tutte le risorse estratte da WordPress, e <a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props">getStaticProps</a>, che estrae le risorse e le passa come props al componente. Entrambe le funzioni vengono chiamate in fase di build. Queste due funzioni sono il cuore del progetto e, quindi, mi sembra doveroso approfondirne la struttura:
          </p>

          <Code language='jsx' style={atomDark} showLineNumbers>
{
`/*
 * Uso di getStaticProps e getStaticPaths nella pagina del blog
 * @see src/pages/posts/page/[page].jsx
 */

const Blog = ({ posts, pagination }) => {
  // Render posts
}

// Questa funzione viene chiamata durante la build lato server.
// Non verrà mai chiamata lato client, è quindi possibile interagire con il database
export async function getStaticProps({ params = {} } = {}) {

  // Chiama la funzione che si occupa di contattare l'API endpoint di WP
  const allPosts = await getAllPosts();
  const { posts, pagination } = await getPaginatedPosts(allPosts.posts, params?.page);

  // Ritornando { props: { posts, pagination}}, il componente Blog riceve
  // 'posts' e 'pagination' durante la build
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

// Questa funzione viene chiamata durante la build lato server.
export async function getStaticPaths() {

  // Chiama la funzione che si occupa di contattare l'API endpoint di WP
  // per ottenere tutti i post e il numero di pagine.
  const { posts } = await getAllPosts();
  const pagesCount = await getPagesCount(posts);

  // Definisce i path che vogliamo pre-renderizzare a partire dai post ottenuti
  // e li passa come parametri alla route dinamica
  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });
  return {
    paths,
    fallback: false, // Tutti le altre routes ritornano 404
  };
}`
}
          </Code>
        </Section>

        <Section>
          <h3>Problematiche incontrate e risolte</h3>
          <p>
            Durante la transizione delle pagine, la pagina in uscita perdeva gli stili. Indagando sulla problematica ho individuato il problema nel fatto che i moduli scss venivano scollegati prima della fine della transizione. Facendo un paio di ricerche, sono incappato in una <a href="https://github.com/vercel/next.js/issues/17464">issue</a> ancora open nel Repository di Next nella quale viene proposto un <em>workaround</em> temporaneo fino alla risoluzione del problema.
          </p>

          <Code language='jsx' style={atomDark} showLineNumbers>
{
`/*
 * Workaround transizione delle pagine
 * @see src/pages/_app.js per vedere come è stato implementato nel progetto
 *
 * @link https://github.com/vercel/next.js/issues/17464#issuecomment-711330281
 */

// Add that code to _app.tsx / _app.jsx

import Router from "next/router";

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );`
}
          </Code>
        </Section>

        <Section id="hosting">
          <h2>Hosting dell&apos;applicazione</h2>

          <p>
            WordPress è stato messo online su altervista:
          </p>

          <p>
            <strong>Indirizzo</strong>: <a href='https://headlesswp.altervista.org/wp-admin'>https://headlesswp.altervista.org/wp-admin</a><br/>
            <strong>Nome utente:</strong> e.guarnieri4@campus.unimib.it<br/>
            <strong>Password:</strong> mRcpE4EcJU4P
          </p>

          <p>
            L&apos;applicazione creata con Next.js è stata messa online su <a href="https://www.netlify.com/">Netlify</a> che permette l&apos;hosting direttamente da repository e, automatizzando la fase di build, pubblica i contenuti staticamente tramite <abbr title="Content Delivery Network">CDN</abbr>. L&apos;unica accortezza è stata quella di riportare l&apos;URL salvato nella variabile d&apos;ambiente nell&apos;<a href='https://docs.netlify.com/configure-builds/environment-variables/'>Build environment variables</a> di Netlify per renderla disponibile durante la build e permettere la connessione all&apos;endpoint di WordPress.
          </p>
        </Section>

        <Section id="updating">
          <h2>Aggiornamento dei contenuti</h2>

          <p>
            Essendo i contenuti scaricati in fase di build e inseriti in pagine statiche secondo l&apos;approccio <abbr title="Javascript API Markup">JAMStack</abbr> sarebbe necessario rilanciare una build ogni volta che viene modificato lo stato di un post su WordPress.
          </p>

          <p>
            Per ovviare a questa limitazione ho installato su WordPress <a href='https://it.WordPress.org/plugins/wp-webhooks/'>WP Webhooks</a> che permette di impostare dei <em>Trigger</em> che, a seguito di determinati eventi, inviano dati a servizi esterni.
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
            WordPress, grazie anche a <a href="https://yoast.com/WordPress/plugins/seo/">Yoast SEO</a>, fa un lavoro eccellente per i motori di ricerca. Sfruttare questo lavoro in questa applicazione è sicuramente il primo passo per uno sviluppo futuro. Yoast infatti, grazie a un <a href="https://wordpress.org/plugins/add-wpgraphql-seo/">plugin</a>, espone su GraphQL tutte le informazioni della SEO impostate su WordPress.
          </p>

          <p>
            In questo momento le due piattaforme (WordPress e Next) sono slegate. Se faccio l&apos;anteprima di un articolo da WordPress non lo visualizzo sul frontend sviluppato con Next, ma in quello di WordPress. Grazie alla <a href="https://nextjs.org/docs/advanced-features/preview-mode">Preview Mode</a> di Next dovrebbe essere possibile integrare meglio WordPress e Next per creare ancora di più un&apos;esperienza senza soluzione di continuità tra la produzione e la visualizzazione dei contenuti.
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
            <li>Articolo che ha guidato il progetto, <a href="https://next-wordpress-starter.spacejelly.dev/posts/how-to-create-a-headless-wordpress-blog-with-next-js-wordpress-starter/">How to Create a Headless WordPress Blog with Next.js WordPress Starter</a>.</li>
            <li>Repository da cui sono partito, <a href="https://github.com/colbyfayock/next-WordPress-starter">@colbyfayock/next-WordPress-starter</a>.</li>
          </ul>

          <h3>Link utili</h3>
          <ul>
            <li>Repository con il codice sorgente, <a href="https://github.com/EliaGuarnieri/wpheadless">@EliaGuarnieri/wpheadless</a>.</li>
            <li>Accesso all&apos;Admin di WordPress, <a href="https://headlesswp.altervista.org/wp-admin">Altervista</a>.</li>
          </ul>
        </Section>

      </Container>
    </>
  )
}

export default Home
