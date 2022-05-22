import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Footer from "../ui/organisms/Footer";
import Header from "../ui/organisms/Header";
import HeaderController from "../ui/organisms/HeaderController";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderController />

      <main className={styles.main}>Ciao</main>

      <Footer />
    </div>
  );
};

export default Home;
