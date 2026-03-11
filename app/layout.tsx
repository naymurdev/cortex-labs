import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import Headers from "@/components/common/header";
import { siteConfig } from "@/lib/utils";
import PageWrapper from "@/components/common/page-wrapper";
import { BackgroundProvider } from "@/contexts/background-context";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

// export const metadata: Metadata = {
//   title: "Evlogia",
//   description:
//     "We are an AI-driven company creating intelligent solutions to empower businesses and individuals, from predictive analytics to automation.",
// };

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "ai company",
    "contextlabs",
    "context labs",
    "ai interfaces",
    "intelligent solutions",
    "workflow automation",
  ],
  authors: [
    {
      name: "naymur rahman",
      url: "https://naymur-rahman.com/",
    },
  ],
  creator: "naymur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@naymur_dev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${satoshi.className}`}>
          <BackgroundProvider>
            <PageWrapper>
              <Headers />
              <main className="w-full h-screen sm:h-svh min-h-screen">
                {children}
              </main>
            </PageWrapper>
          </BackgroundProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
