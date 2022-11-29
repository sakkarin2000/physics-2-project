import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Parallel from "./Parallel";

export default function Home() {
  return (
    <div>
      <div className="">
        <Parallel />
      </div>
    </div>
  );
}
