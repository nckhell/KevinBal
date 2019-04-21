import Page from '../components/layouts/main'
import Head from 'next/head';

export default () => (
  <Page
    activePath="visie"
    title="Visie"
    description="Kinesitherapeut Kevin Bal geeft je graag wat meer inzicht over zijn visie en manier van werken"
    >
      <Head>
        <link rel="canonical" href="http://kinebal.be/visie/" />
      </Head>
      <section className="container m-auto flex flex-col py-10 max-w-xl text-center px-6">
        <label htmlFor="tagline" className="uppercase tracking-wide text-grey-dark font-bold">Mijn manier van werken</label>
        <h1 className="my-4 font-normal">Visie</h1>
        <hr className="border-b w-8 m-auto my-6" />
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
            Tekst
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        </p>
      </section>
  </Page>
)