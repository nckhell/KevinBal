import { Link, prefixURL } from 'next-prefixed'
import Head from 'next/head'

import '../../static/styles/tailwind.css'

export default class Page extends React.Component {
  render() {
    const { 
      children, 
      activePath = 'home',
      title = 'Welkom',
      description = 'Kevin Bal is een kinesitherapeut met een praktijk in Kontich (Reepkenslei). Zijn specialisaties zijn manuele kinesitherapie en orthopedische revalidatie.'
    } = this.props;

    return (
      <div>
        <Head>
          <title>{ title } | Kevin Bal Kinesitherapeut</title>
          <meta name="description" content={ description } />
          <meta charSet='utf-8' />
          <meta name="robots" content="index, follow" />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" type="image/x-icon" href={prefixURL('/static/favicon.ico')} />
        </Head>
        <header className="border-t-8 border-kevin-green">
            <nav className="pt-8 flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <img src={prefixURL('/static/img/full_logo.svg')} className="h-32 md:h-48" alt="Kevin Bal Kinesitherapie" />
              </div>
              <div className="w-5/6 flex justify-center pt-8 flex-wrap text-xl">
                <Link href="/">
                  <a className={ (activePath == 'home' ? 'underline ' : 'no-underline ' ) + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"}>
                  Home
                  </a>
                </Link>
                <Link href="/info">
                  <a className={ (activePath == 'info' ? 'underline ' : 'no-underline ' ) + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"}>
                  Info
                  </a>
                </Link>
                <Link href="/visie">
                  <a className={ (activePath == 'visie' ? 'underline ' : 'no-underline ' ) + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"}>
                  Visie
                  </a>
                </Link>
                <Link href="/ligging">
                  <a className={ (activePath == 'ligging' ? 'underline ' : 'no-underline ' ) + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4 md:mr-12"}>
                  Ligging
                  </a>
                </Link>
                <Link href="/contact">
                  <a className={ (activePath == 'contact' ? 'underline ' : 'no-underline ' ) + "block sm:inline-block sm:mt-0 text-kevin-green hover:underline mr-8 mb-4"}>
                  Contact
                  </a>
                </Link>
              </div>
            </nav>
        </header>

        <div className='flex-1'>
          { children }
        </div>

        <footer className="font-sans bg-grey-lighter text-white py-5 px-4 pin-b">
          <div className="mx-auto max-w-xl overflow-hidden flex justify-between items-center">
            <ul className="text-sm text-grey-dark list-reset flex items-center">
              <li>
                <a href="/" className="block mr-4">
                  <img src={prefixURL('/static/img/logo.svg')} className="w-8" alt="logo" />
                </a>
              </li>
              <li>Reepkenslei 45 - 2550 Kontich - 0477 92 72 02</li>
            </ul>
            <p className="inline-block py-2 px-3 text-grey-darker text-xs"> ©2019 Kevin Bal Kinesitherapie.</p>
          </div>
        </footer>
      </div>
    );
  }
}