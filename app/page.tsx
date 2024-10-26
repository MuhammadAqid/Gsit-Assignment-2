import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/header-section/header'
import Hero from "./components/hero-section/hero";
import Footer from "./components/footer-section/footer";
import Contact from "./components/contact-section/contact"
export default function Home() {
  return (
    <div className={styles.main}>
      <Header></Header>
      <Hero></Hero>
      <Contact></Contact>
      <Footer></Footer>
    </div>
      );
}
