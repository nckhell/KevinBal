import React from "react";
import Page from "../components/layouts/main";
import Head from "next/head";

export default () => (
  <Page
    activePath="visie"
    title="Visie"
    description="Kinesitherapeut Kevin Bal geeft je graag wat meer inzicht over zijn visie en manier van werken"
  >
    <Head>
      <link legacyBehavior rel="canonical" href="http://kinebal.be/visie/" />
    </Head>
    <section className="container m-auto flex flex-col py-10 max-w-3xl text-center px-6">
      <label
        htmlFor="tagline"
        className="uppercase tracking-wide text-grey-dark font-bold text-3xl"
      >
        Manier van werken
      </label>
      <h1 className="my-4 font-normal text-2xl">Visie</h1>
      <hr className="border-b w-8 m-auto my-6" />
      <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 lg m-auto">
        Als echte Kontichnaar was het altijd zijn wens om in zijn eigen gemeente
        aan de slag te gaan als kinesitherapeut. Na 15 jaar ervaring te hebben
        opgedaan in zijn praktijk in Antwerpen en in het revalidatiecentrum APRA
        was de tijd rijp om ook in Kontich een praktijk op te starten.
      </p>
      <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 m-auto">
        Zeker in deze setting wil hij de nadruk leggen op een individuele en
        manuele aanpak. Indien de aard van de aandoening dit vereist zal dit
        aangevuld worden met actieve oefentherapie afgestemd op patiënt en
        pathologie. De samenwerking tussen patiënt en therapeut staat hierbij
        uiteraard centraal. Door middel van zachte mobilisaties, harmonieuze
        technieken en gerichte manipulaties wordt er getracht de beperkte
        mobiliteit van gewrichten te vergroten waarna gerichte oefentherapie kan
        opgestart worden om zo het weefselherstel te bevorderen. Belangrijk
        hierbij is het evenwicht tussen belasting en belastbaarheid te bewaren
        en de patiënt functioneel, progressief en doelgericht op te trainen. De
        patiënt van zijn kant draagt in zijn herstel zeker ook een
        verantwoordelijkheid. Alle oefeningen en adviezen voor thuis zullen dan
        ook nageleefd moeten worden om het gezamenlijk doel te bereiken.{" "}
      </p>
      <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 m-auto">
        Alle behandelingen gebeuren na afspraak en omvatten een gemiddelde duur
        van 30 minuten. Hij doet steeds zijn uiterste best om u niet te lang te
        laten wachten en voor iedereen de nodige tijd te voorzien. Het wordt dan
        ook sterk geapprecieerd dat u zich aan de gemaakte afspraken houdt.
        Buiten uw wil om kunnen er zich soms omstandigheden voordoen dewelke u
        niet in staat stellen de afspraak na te komen. Er wordt u gevraagd om
        bij belet 12u op voorhand te verwittigen om eventueel een andere patiënt
        te kunnen verzorgen. Mocht u niet in de mogelijkheid zijn tijdig te
        verwittigen of indien u een afspraak vergeet, dan wordt er verwacht dat
        u zo sportief bent om de voor u vrij gehouden tijd te vergoeden.
      </p>
    </section>
  </Page>
);
