import Page from "../components/layouts/main";
import Head from "next/head";

export default () => (
  <Page
    activePath="contact"
    title="Contact"
    description="Een afspraak maken bij kinesitherapeut Kevin Bal te Kontich kan telefonisch of online"
  >
    <Head>
      <link rel="canonical" href="http://kinebal.be/contact/" />
    </Head>
    <section className="container m-auto flex flex-col py-10 max-w-xl text-center px-6">
      <label
        htmlFor="tagline"
        className="uppercase tracking-wide text-grey-dark font-bold"
      >
        Een afpsraak maken?
      </label>
      <h1 className="my-4 font-normal">Dat kan telefonisch of online.</h1>
      <hr className="border-b w-8 m-auto my-6" />
      <p className="text-justify text-lg leading-normal mb-4 text-grey-darkest mt-1 lg:mt-4 max-w-lg m-auto">
        Indien de afspraakmogelijkheden die online worden aangeboden naar uw
        gevoel te ver in de toekomst liggen en u liever sneller behandeld wordt,
        kan u mij steeds telefonisch contacteren. We trachten dan in wederzijds
        overleg zo spoedig als mogelijk een behandelmoment in te plannen.
      </p>
    </section>
    <div className="font-sans text-center py-12 px-4 lg:px-0 bg-kevin-green">
      <div className="container flex flex-col md:flex-row bg-white max-w-xl m-auto shadow-md md:p-10">
        <div className="container m-auto flex flex-col py-2 max-w-xl text-center px-6">
          <div className="w-full w-1/2 flex flex-row justify-between md:justify-center items-center md:p-2 md:p-8 items-center md:items-start">
            <div className="flex items-center border-r p-4 w-1/2">
              <div>
                <h2 className="text-kevin-green pb-2 font-medium">
                  Telefonisch
                </h2>
                <p className="text-grey-darkest text-lg leading-normal">
                  Op het nummer{" "}
                  <a
                    href="tel:0468473190"
                    className="no-underine text-kevin-green"
                    title="0468 47 31 90"
                  >
                    0468 47 31 90
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 w-1/2 ">
              <div>
                <h2 className="text-kevin-green pb-2 font-medium">Online</h2>
                <p className="text-grey-darkest text-lg leading-normal pb-4">
                  <b>Let op:</b> duid de juiste locatie aan (Kevin Bal
                  Kontich).
                </p>
                <div>
                  <a
                    href="http://www.q-top.be/Online-planner/NL/?root=kq35040"
                    target="_blank"
                    title="Een online afspraak maken bij Kevin Bal"
                    className="inline-block no-underline bg-kevin-green border border-transparent shadow font-semibold py-3 px-5 text-white hover:bg-transparent hover:text-kevin-green hover:border-kevin-green"
                  >
                    Online afspraak maken
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
