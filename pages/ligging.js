import React from "react";
import Page from "../components/layouts/main";
import Head from "next/head";
import { Link } from "next-prefixed";

const mapStyle = {
  height: "450px",
};

export default () => (
  <Page
    activePath="ligging"
    title="Ligging"
    description="Kinesitherapeut Kevin Bal heeft zijn praktijk in Kontich (2550), Reepkenslei 45"
  >
    <Head>
      <link legacyBehavior rel="canonical" href="http://kinebal.be/ligging/" />
    </Head>
    <section className="container m-auto flex flex-col py-10 max-w-xl text-center px-6">
      <div className="w-full flex flex-col justify-center items-start items-center">
        <label
          htmlFor="tagline"
          className="uppercase tracking-wide text-grey-dark font-bold text-3xl"
        >
          Kontich
        </label>
        <h1 className="my-4 font-normal text-2xl">Waar ligt de praktijk?</h1>
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
    <section className="font-sans text-center py-12 px-4 lg:px-0 bg-[#8bb79b]">
      <div className="container flex flex-col md:flex-row max-w-xl m-auto">
        <div
          style={mapStyle}
          className="w-full max-w-xl relative overflow-hidden container max-w-xl m-auto"
        >
          <Link
            legacyBehavior
            href="https://www.google.com/maps/place/Reepkenslei+45,+2550+Kontich/@51.1216144,4.4389478,15.49z/data=!4m6!3m5!1s0x47c3f0738d6e9231:0xb7da30cae0e5303d!8m2!3d51.1198914!4d4.4447134!16s%2Fg%2F11c19tj8z6?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          >
            <a>
              <img src="/img/map.png" alt="Reepkenslei 45 - 2550 Kontich" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  </Page>
);
