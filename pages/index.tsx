import type { NextPage } from "next";
import Head from "next/head";

import styles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Playground</title>
        <meta name="description" content="A place for all things to be" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <p>Card</p>
          <p>
            Numero <strong>Uno</strong>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
