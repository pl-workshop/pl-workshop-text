import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout title={`pl-workshop`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/intro")}
            >
              はじめる
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
