import { ReactNode } from "react";
import styles from "./Layout.module.css";
import Intro from "../intro/Intro";
import Navbar from "./navbar/Navbar";
import Head from "next/head";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Rafadana</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Muhammad Rafadana Mountheira" />
        <meta name="description" content="Rafadana's official website" />

        <meta name="theme-color" content="#3499D9" />
        <meta property="og:description" content="Rafadana's official website" />
        <meta property="og:title" content="Rafadana" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
