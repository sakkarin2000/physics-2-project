import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Parallel from "./Parallel";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Lightbulbs in Parallel Circuit</title>
        <meta
          name="description"
          content="Parallel Circuit Simulation using lightbulbs"
        />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <header className="h-5 bg-red-700 flex justify-center ">
          <a className="text-white text-sm">Sparky Team</a>
        </header>
        <div className="mb-auto h-10 flex justify-center">
          <Parallel />
        </div>
      </div>
    </div>
  );
}
