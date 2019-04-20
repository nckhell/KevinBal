import Page from '../components/layouts/main'

export default () => (
  <Page
    activePath="info"
    title="Info"
    description="Informatie over de kinesitherapiepraktijk van Kevin Bal te Kontich"
    >
      <section className="container m-auto flex flex-col py-10 max-w-xl text-center px-6">
            <label htmlFor="tagline" className="uppercase tracking-wide text-grey-dark font-bold">Aandachtspunten</label>
            <h1 className="my-4 font-normal">Informatie</h1>
            <hr className="border-b w-8 m-auto my-6" />
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
            Dankzij de verscheidenheid aan disciplines staat er bij KINE GROEP ZUID een team voor u klaar dat elkaar goed aanvult om u zo een therapie op maat te kunnen aanbieden.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        Tijdens een behandeling hechten wij veel belang aan een individuele aanpak bestaande uit manuele therapie in ruime zin aangevuld met actieve oefentherapie afgestemd op patiënt en pathologie. De samenwerking tussen patiënt en therapeut staat hierbij uiteraard centraal. Door middel van zachte mobilisaties, harmonieuze technieken en gerichte manipulaties trachten we de beperkte mobiliteit van gewrichten te vergroten waarna gerichte oefentherapie kan opgestart worden om zo het weefselherstel te bevorderen. Belangrijk hierbij is het evenwicht tussen belasting en belastbaarheid te bewaren en de patiënt functioneel, progressief en doelgericht op te trainen.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        Door ons team wordt er dagelijks therapiecontinuïteit geboden van 08.00u 's morgens tot 21.00u 's avonds, ook tijdens vakantieperioden. Alle behandelingen gebeuren dagelijks na afspraak en omvatten een gemidelde duur van 30 minuten. Van onze kant uit doen wij steeds ons uiterste best om u niet te lang te laten wachten en voor iedereen de nodige tijd te voorzien. Uiteraard stellen wij het ook op prijs dat u zich aan de gemaakte afspraken houdt. Buiten uw wil om kunnen er zich soms omstandigheden voordoen dewelke u niet in staat stellen de afspraak na te komen. We vragen u om bij belet 12u op voorhand te verwittigen om eventueel een andere patiënt te kunnen verzorgen. Mocht u niet in de mogelijkheid zijn ons tijdig te verwittigen of indien u een afspraak vergeet, dan verwachten wij dat u zo sportief bent om de voor u vrij gehouden tijd te vergoeden.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        Buiten de behandeltijd die wij voor u vrijhouden, heeft u als patiënt het recht om afhankelijk van uw planning vroeger te komen of later te blijven om de aangeleerde oefeningen uit te voeren in onze oefenzaal. Omkleden kan steeds in onze kleedruimte dewelke voorzien zijn van lockers of in de doucheruimte die steeds ter uwer beschikking is om u op te frissen na de oefensessies.
        </p>
        <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        Indien een patiënt zich niet naar onze praktijk kan verplaatsen, maken wij graag ruimte voor een huisbezoek. Het spreekt voor zich dat dit enkel gebeurt als de pathologie dit vereist en als uw locatie in onze omgeving ligt.
        </p>
      </section>
  </Page>
)