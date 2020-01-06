import Page from "../components/layouts/main";
import Head from "next/head";

export default () => (
  <Page
    activePath="over-kevin"
    title="Over Kevin"
    description="Informatie over Kevin Bal"
  >
    <Head>
      <link rel="canonical" href="http://kinebal.be/info/" />
    </Head>
    <section className="my-16 font-sans container m-auto flex flex-col md:flex-row text-center lg:max-w-xl lg:text-left sm:items-center">
      <div className="w-3/5 self-center md:w-1/3 md:container">
        <img className="shadow-md" src="static/img/Kevin.png" alt="Kevin Bal" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start p-8 items-center md:items-start">
        <label
          htmlFor="tagline"
          className="uppercase tracking-wide text-grey-dark font-bold"
        >
          Kinesitherapeut
        </label>
        <h1 className="my-4 font-normal">Kevin Bal</h1>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest">
          Kevin Bal is afgestudeerd in 2004 als licentiaat in de kinesitherapie.
          Meteen startte hij samen met Sven Meiresone de groepspraktijk Kine
          Groep Zuid op in Antwerpen. Tot op heden is dat een gerenommeerde
          kinepraktijk in het zuiden van Antwerpen. Hij combineert deze
          zelfstandige praktijk met zijn activiteiten op de revalidatieafdeling
          APRA van het AZ Monica Antwerpen. Op beide locaties houdt hij zich
          vooral bezig met orthopedische geneeskunde en Manuele Therapie.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest">
          Verder specialiseerde hij zich in de Scar Academy van het
          brandwondencentrum in de behandeling van brandwonden en littekens. De
          vaardigheden van de manuele lymfedrainage vergaarde hij aan de
          Hogeschool Universiteit Brussel.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest">
          Voor de opleidingen Dry Needling, Mulligan Concept en Medical Taping
          Concept werd hij gedoceerd door onze noorderburen.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest">
          De laatste jaren verdiepte hij zich verder in de myofasciale anatomie
          en de behandelmodaliteiten daarvan. Hiervoor volgde hij de Anatomy
          Trains opleiding en past hij de Ergon soft Tissue Technique toe.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest">
          Dit, samen met alle andere jaarlijkse kortere peer reviews, lezingen
          en symposia, vormen een brede basis om een kwalitatieve en onderbouwde
          therapie aan te bieden.
        </p>
      </div>
    </section>
  </Page>
);
