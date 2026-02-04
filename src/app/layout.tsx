'use client'

import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        {/* SEO */}
        <meta
          name="keywords"
          content="Pikembipresje Real Estate, real estate Kosovo, apartments for sale, houses for sale, property rent, real estate agency"
        />
        <meta
          name="description"
          content="Pikembipresje Real Estate helps you find the perfect home, apartment, or investment property with a modern and trusted real estate experience."
        />

        {/* Open Graph */}
        <meta property="og:site_name" content="Pikembipresje Real Estate" />
        <meta property="og:url" content="https://pikembipresje.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pikembipresje Real Estate" />
        <meta
          property="og:description"
          content="Discover premium listings, modern properties, and trusted real estate services with Pikembipresje Real Estate."
        />
        <meta name="og:image" content="/images/assets/ogg.png" />

        {/* For IE */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#0D1A1C" />
        <meta name="msapplication-navbutton-color" content="#0D1A1C" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0D1A1C" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" sizes="any" />

        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <div className="main-page-wrapper">
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}
