import Page from '../components/layouts/main'
import Map from '../components/maps/map'

const mapStyle = {
    height: '450px'
  };

export default () => (
  <Page
    activePath="ligging"
    title="Ligging"
    description="Kinesitherapeut Kevin Bal heeft zijn praktijk in Kontich (2550), Reepkenslei 45"
    >
    <section className="container m-auto flex flex-col py-10 max-w-xl text-center px-6">
        <div className="w-full flex flex-col justify-center items-start items-center">
            <label htmlFor="tagline" className="uppercase tracking-wide text-grey-dark font-bold">Kontich</label>
            <h1 className="my-4 font-normal">Waar ligt de praktijk?</h1>
            <hr className="border-b w-8 m-auto my-6" />
            <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
            De centrale ligging aan de Singel (Desguinlei) maakt dat de praktijk zeer goed bereikbaar is met de wagen vanuit Antwerpen en vanuit de periferie. Er is ruime parkeergelegenheid aan de parking van de Desguinlei (gratis), de parking van het Centrum voor Basiseducatie Antwerpen (gratis) of in de straat (betalend tussen 9-19u via sms naar 4411).
            </p>
            <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
            Het openbaar vervoer heeft verschillende bus- en tramhaltes (tramlijn 2 en 6 - bus 17, 22, 28, 30, 298) in de directe omgeving van de praktijk. Meer info hieromtrent vindt u op www.delijn.be/reisinfo. Uiteraard kan je ook te voet, met de fiets of met de bromfiets komen. Treinstation Antwerpen Zuid is op 750m gelegen van de praktijk. 
            </p>
        </div>
    </section>
    <section className="font-sans text-center py-12 px-4 lg:px-0 bg-kevin-green">
        <div className="container flex flex-col md:flex-row bg-white max-w-xl m-auto shadow-md">
            <div style={ mapStyle } className="w-full max-w-xl relative overflow-hidden container max-w-xl m-auto">
                <Map></Map>
            </div>
        </div>
      </section>
  </Page>
)