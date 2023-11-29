import "../styles/global.sass";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import History from "@/components/History";
import Ambitions from "@/components/Ambitions";
import Members from "@/components/Members";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <History />
      <Ambitions />
      <Members />
      <Footer />
    </main>
  );
}
