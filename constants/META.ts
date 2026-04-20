import type { Metadata } from "next";
import { APP } from "./APP";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const METADATA: Metadata = {
  title: {
    default: APP.title,
    template: `%s | ${APP.name}`,
  },
  description: APP.description,
  keywords: APP.keywords.split(", "),
  creator: APP.creator,
  // META
  generator: "Next.js",
  applicationName: APP.name,
  category: APP.category,
  classification: APP.classification,
  referrer: "origin-when-cross-origin",
  publisher: APP.owner,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL(APP.website),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest
  // manifest: `/manifest.json`,
  // OPEN GRAPH
  openGraph: {
    type: "website",
    url: APP.website,
    siteName: APP.name,
    title: APP.title,
    description: APP.description,
    images: {
      url: APP.socialPreview.src,
      alt: "",
      width: APP.socialPreview.width,
      height: APP.socialPreview.height,
    },
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: APP.title,
    description: APP.description,
    creator: APP.twitterCreator,
    images: {
      url: APP.socialPreview.src,
      alt: "",
    },
  },
  // ROBOTS
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
