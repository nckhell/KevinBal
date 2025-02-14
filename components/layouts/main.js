import React from "react";
import { Link, prefixURL } from "next-prefixed";
import Head from "next/head";

export default class Page extends React.Component {
  render() {
    const {
      children,
      activePath = "home",
      title = "Welkom",
      description = "Kevin Bal is een kinesitherapeut met een praktijk in Kontich (Reepkenslei). Zijn specialisaties zijn manuele kinesitherapie en orthopedische revalidatie.",
    } = this.props;

    return (
      <div>
        <Head>
          <title>{title} | Kevin Bal Kinesitherapeut Kontich</title>
          <meta name="description" content={description} />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={prefixURL("/favicon.ico")}
          />
        </Head>
        <header className="border-t-8 border-[#8bb79b]">
          <nav className="pt-8 flex flex-wrap justify-center">
            <h1 className="hidden">Kevin Bal Kinesitherapie</h1>
            <div className="w-full flex justify-center">
              <img
                src={prefixURL("/img/full_logo.svg")}
                className="h-32 md:h-48"
                alt="Kevin Bal Kinesitherapie"
              />
            </div>
            <div className="w-5/6 flex justify-center pt-8 flex-wrap text-xl">
              <Link legacyBehavior href="/">
                <a
                  title="Home"
                  className={
                    (activePath == "home" ? "underline " : "no-underline ") +
                    "block sm:inline-block sm:mt-0 text-[#8bb79b] hover:underline mr-8 mb-4 md:mr-12"
                  }
                >
                  Home
                </a>
              </Link>
              <Link legacyBehavior href="/over-kevin/">
                <a
                  title="Over Kevin"
                  className={
                    (activePath == "over-kevin"
                      ? "underline "
                      : "no-underline ") +
                    "block sm:inline-block sm:mt-0 text-[#8bb79b] hover:underline mr-8 mb-4 md:mr-12"
                  }
                >
                  Over Kevin
                </a>
              </Link>
              <Link legacyBehavior href="/visie/">
                <a
                  title="visie"
                  className={
                    (activePath == "visie" ? "underline " : "no-underline ") +
                    "block sm:inline-block sm:mt-0 text-[#8bb79b] hover:underline mr-8 mb-4 md:mr-12"
                  }
                >
                  Visie
                </a>
              </Link>
              <Link legacyBehavior href="/ligging/">
                <a
                  title="ligging"
                  className={
                    (activePath == "ligging" ? "underline " : "no-underline ") +
                    "block sm:inline-block sm:mt-0 text-[#8bb79b] hover:underline mr-8 mb-4 md:mr-12"
                  }
                >
                  Ligging
                </a>
              </Link>
              <Link legacyBehavior href="/contact/">
                <a
                  title="contact"
                  className={
                    (activePath == "contact" ? "underline " : "no-underline ") +
                    "block sm:inline-block sm:mt-0 text-[#8bb79b] hover:underline mr-8 mb-4"
                  }
                >
                  Contact
                </a>
              </Link>
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="font-sans bg-slate-600 text-white py-5 px-4 pin-b">
          <div className="mx-auto max-w-xl overflow-hidden flex justify-between items-center">
            <ul className="text-sm text-grey-dark list-reset flex items-center">
              <li>
                <a href="/" className="block mr-4">
                  <img
                    src={prefixURL("/img/logo.svg")}
                    className="w-8"
                    alt="logo"
                  />
                </a>
              </li>
              <li>Reepkenslei 45 - 2550 Kontich - 0468 47 31 90</li>
            </ul>
            <p className="inline-block py-2 px-3 text-grey-darker text-xs">
              {" "}
              ©2019 Kevin Bal Kinesitherapie.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
