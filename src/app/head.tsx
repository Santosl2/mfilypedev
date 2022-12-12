// @ts-nocheck
export default function Head() {
  return (
    <html lang="pt-BR">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;700&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Preahvihear&display=swap"
        rel="stylesheet"
        precedence="default"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>mfilype.dev</title>

      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="icon" type="image/png" href="/images/favicon.png" />

      <meta property="og:title" content="mfilype.dev" />
      <meta
        property="og:description"
        content="My name is Matheus Filype, and i'm a FrontEnd Developer"
      />
      <meta property="og:url" content={process.env.BASE_URL} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="mfilype.dev" />
      <meta
        property="og:image"
        content="./images/37b2bc18eb35e963179d66adcee02d67.png"
      />
      <meta
        property="og:image:secure_url"
        content="./images/37b2bc18eb35e963179d66adcee02d67.png"
      />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content="mfilype.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="./images/37b2bc18eb35e963179d66adcee02d67.png"
      />
      <meta
        name="twitter:image:src"
        content="./images/37b2bc18eb35e963179d66adcee02d67.png"
      />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </html>
  );
}
