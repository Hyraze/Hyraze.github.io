/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Hanish Rao",
  titleTemplate: "%s | Hanish Rao",
  defaultTitle: "Hanish Rao",
  description: "The personal website of Hanish Rao",
  canonical: "https://hanishrao.me",
  openGraph: {
    url: "https://hanishrao.me",
    title: "Hanish Rao",
    description: "The personal website of Hanish Rao",
    images: [
      {
        url: "https://og-image.xyz/og/Hanish Rao/Software Engineer/hanishrao.me/https/menlo/prettyheroic/{{h}}ffffff/data.png",
        alt: "hanishrao.me og-image",
      },
    ],
    site_name: "hanishrao",
  },
  twitter: {
    handle: "@hanishrao",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
