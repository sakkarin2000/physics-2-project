import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Parallel from "./Parallel";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen justify-between">
        <div className="mb-auto h-10">
          <Parallel />
        </div>

        <footer className="h-5 bg-red-700 flex justify-center ">
          <a className="text-white text-sm">Sparky Team</a>
        </footer>
      </div>
    </div>
  );
}