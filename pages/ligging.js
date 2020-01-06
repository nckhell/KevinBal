import Page from "../components/layouts/main";
import Map from "../components/maps/map";
import Head from "next/head";

const mapStyle = {
  height: "450px"
};

export default () => (
  <Page
    activePath="ligging"
    title="Ligging"
    description="Kinesitherapeut Kevin Bal heeft zijn praktijk in Kontich (2550), Reepkenslei 45"
  >
    <Head>
      <link rel="canonical" href="http://kinebal.be/ligging/" />
    </Head>
    <section className="container m-auto flex flex-col py-10 max-w-xl text-center px-6">
      <div className="w-full flex flex-col justify-center items-start items-center">
        <label
          htmlFor="tagline"
          className="uppercase tracking-wide text-grey-dark font-bold"
        >
          Kontich
        </label>
        <h1 className="my-4 font-normal">Waar ligt de praktijk?</h1>
        <hr className="border-b w-8 m-auto my-6" />
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
          De praktijk is gelegen in het midden van de zeer rustige Reepkenslei.
          Zowel met de wagen, met de fiets als met het openbaar vervoer is de
          praktijk zeer vlot bereikbaar. Er is ruime parkeergelegenheid in de
          straat.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
          Het openbaar vervoer heeft een bushalte in de straat (bus 91 – 92 -
          191). Meer info hieromtrent vindt u op www.delijn.be/reisinfo.
          Uiteraard kan u ook te voet, met de fiets of met de bromfiets komen.
        </p>
      </div>
    </section>
    <section className="font-sans text-center py-12 px-4 lg:px-0 bg-kevin-green">
      <div className="container flex flex-col md:flex-row bg-white max-w-xl m-auto shadow-md">
        <div
          style={mapStyle}
          className="w-full max-w-xl relative overflow-hidden container max-w-xl m-auto"
        >
          <Map></Map>
        </div>
      </div>
    </section>
  </Page>
);
