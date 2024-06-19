import Head from 'next/head'

interface MetaTagsProps {
  title?: string
  description?: string
}

const MetaTags = ({
  title = 'Kris German | UI Designer & Developer',
  description = 'Kris German is an aspiring design engineer building brands, systems, and products.',
}: MetaTagsProps) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <link rel="icon" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    {/* Primary Meta Tags */}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" key="description" content={description} />
    <meta property="og:title" key="og:title" content={title} />
    <meta
      property="og:description"
      key="og:description"
      content={description}
    />

    <meta name="theme-color" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" key="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" key="og:site_name" content="Kris German" />
    <meta
      property="og:url"
      key="og:url"
      content="https://rabbittale.co/og.png"
    />
    <meta
      property="og:image"
      key="og:image"
      content="https://rabbittale.co/og.png"
    />

    {/* Twitter */}
    <meta
      name="twitter:card"
      key="twitter:card"
      content="summary_large_image"
    />
    <meta
      name="twitter:url"
      property="twitter:url"
      content="https://rabbittale.co"
    />
    <meta
      name="twitter:title"
      property="twitter:title"
      key="twitter:title"
      content={title}
    />
    <meta
      name="twitter:description"
      property="twitter:description"
      key="twitter:description"
      content={description}
    />
    <meta
      name="twitter:image"
      key="twitter:image"
      content="https://rabbittale.co/og.png"
    />
    <meta
      name="twitter:image:alt"
      key="twitter:image:alt"
      content="© Poker Cats Creations"
    />
    <meta name="twitter:site" key="twitter:site" content="@hasiradoo" />
    <meta name="twitter:creator" key="twitter:creator" content="@hasiradoo" />

    {/* Robots */}
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
  </Head>
)

export default MetaTags
