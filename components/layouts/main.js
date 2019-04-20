import Link from 'next/link'
import Head from 'next/head'

export default class Page extends React.Component {
  render() {
    const { children, title = 'This is the default title' } = this.props;
    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" type="text/css" href="/static/styles/index.css" />
        </Head>
        <header>
          <nav>
            <Link href='/'><a>Home</a></Link> |
            <Link href='/about'><a>About</a></Link> |
            <Link href='/contact'><a>Contact</a></Link>
          </nav>
        </header>

        { children }

        <footer>
          {'I`m here to stay'}
        </footer>
      </div>
    );
  }
}