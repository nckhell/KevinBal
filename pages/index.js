import Page from "../components/layouts/main";
import { Link } from "next-prefixed";
import Head from "next/head";

export default () => (
  <Page>
    <Head>
      <link rel="canonical" href="http://kinebal.be" />
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
          Afgestudeerd in 2004 als licentiaat in de kinesitherapie. Naast mijn
          werk in de praktijk ben ik ook werkzaam op de revalidatieafdeling APRA
          van het AZ Monica Antwerpen.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest">
          Ik houd me, zowel in de praktijk als in APRA, vooral bezig met
          orthopedische geneeskunde en Manuele Therapie. Verder specialiseerde
          ik me in de Scar Academy van het brandwondencentrum in de behandeling
          van brandwonden en littekens.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest">
          In een verdere zoektocht naar een optimale behandeling verdiepte ik me
          in het Medical Taping Concept, het Mulligan Concept en Dry Needling.
          De meest recente bijscholing die ik volgde was de Anatomy Trains
          opleiding, een verdieping in de myo-fasciale anatomie.
        </p>
      </div>
    </section>
    <section className="font-sans text-center py-12 px-4 lg:px-0 bg-kevin-green">
      <div className="container flex flex-col md:flex-row bg-white max-w-xl m-auto shadow-md p-10">
        <div className="w-full md:w-3/4 text-left flex flex-col justify-center">
          <h2 className="font-medium">Wilt u graag een afspraak?</h2>
          <p className="text-grey-dark mt-2 text-lg leading-normal">
            Dat kan via telefoon of het online afsprakensysteem!
          </p>
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-1/4 flex justify-start md:justify-center items-center">
          <Link href="/contact/">
            <a
              title="Een afspraak maken"
              className="no-underline bg-kevin-green border border-transparent shadow font-semibold py-3 px-5 text-white hover:bg-transparent hover:text-kevin-green hover:border-kevin-green"
            >
              Een afspraak maken
            </a>
          </Link>
        </div>
      </div>
    </section>
    <section className="font-sans container max-w-xl m-auto text-center py-20">
      <label
        htmlFor="tagline"
        className="uppercase tracking-wide font-bold text-grey-dark"
      >
        Specialisaties
      </label>
      <h1 className="mt-2 mb-4 font-medium max-w-sm m-auto">
        U kunt bij mij terecht voor
      </h1>
      <hr className="border-b w-8 m-auto my-6" />
      <div className="flex flex-wrap justify-center items-start">
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center p-4">
          <h2 className="my-4 font-medium">Manuele therapie</h2>
          <p className="leading-normal mb-4 text-grey-dark">
            Een specifieke behandelmethode die zich richt naar het opsporen van
            dysfuncties van het bewegingsapparaat. Via specifieke
            behandeltechnieken (mobiliserende technieken en gerichte
            manipulaties) wordt de mobiliteit van gewrichten terug
            geoptimaliseerd.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center p-4">
          <h2 className="my-4 font-medium">Orthopedische revalidatie</h2>
          <p className="leading-normal mb-4 text-grey-dark">
            Gericht op pre- en postoperatieve kinesitherapie en kinesitherapie
            ter herstel na een trauma.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center p-4">
          <h2 className="my-4 font-medium">
            Brandwonden en littekenbehandeling
          </h2>
          <p className="leading-normal mb-4 text-grey-dark">
            Door middel van o.a. posturale rekkingen, manuele defibrosering en
            indien nodig depressotherapie wordt het littekenweefsel soepeler
            gemaakt. Functionaliteit van het bewegingsstelsel blijft hier
            primeren.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center p-4">
          <h2 className="my-4 font-medium">Mulligan Concept.</h2>
          <p className="leading-normal mb-4 text-grey-dark">
            Het Mulligan Concept is een manuele mobilisatietechniek voor
            gewrichten. Met de techniek proberen we op een pijnloze manier het
            natuurlijke bewegingspatroon van het gewricht te herstellen.
            Specifiek voor Mulligan is de actieve correctie.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center p-4">
          <h2 className="my-4 font-medium">
            Myofasciale therapie - Dry Needling
          </h2>
          <p className="leading-normal mb-4 text-grey-dark">
            Een methode om myofasciale klachten door middel van een droge naald
            (geen medicatie) spieren aan te prikken op specifieke triggerpunten
            ( lokaal pijnpunt in een spier, vaak met uitstraling). Het
            resulteert vaak in het afnemen van de lokale spierspanning met
            pijnvermindering en verbetering van de mobiliteit tot gevolg.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center p-4">
          <h2 className="my-4 font-medium">
            Myofasciale therapie – IASTM (Ergon)
          </h2>
          <p className="leading-normal mb-4 text-grey-dark">
            Met behulp van speciaal ontworpen klinische instrumenten worden het
            littekenweefsel en fasciale verklevingen in zachte weefsels
            behandeld. Het is gebaseerd op de theorie van myofasciale meridianen
            van Thomas Myers.
          </p>
        </div>
      </div>
    </section>
  </Page>
);
