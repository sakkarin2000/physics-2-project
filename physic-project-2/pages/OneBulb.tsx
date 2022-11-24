import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import React, { useEffect, useState } from "react";
export default function MainPage() {
  const [lb_watt, setlb_watt] = useState(1);
  const [lb_num, setlb_num] = useState(1);
  const [b_volt, setb_volt] = useState(0);
  const [r_lightbulb, setr_lightbulb] = useState(1);
  const [percentLightness, setPercentLightness] = useState(0);
  const [fields, setField] = useState<JSX.Element[]>([]);
  useEffect(() => {
    setPercentLightness((b_volt * (b_volt / (r_lightbulb * lb_num))) / lb_watt);
    const arr = [];
    for (let i = 1; i <= lb_num; i++) {
      arr.push(
        <div key={i} className="sth ">
          <div
            className={percentLightness == 0 ? "lightbulb" : ""}
            style={{ opacity: percentLightness, zIndex: 1 }}
          >
            <Image
              src="/on-bulb.png"
              alt="Picture of the author"
              width={100}
              height={100}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <div>
            <Image
              src="/off-bulb.png"
              alt="Picture of the author"
              width={100}
              height={100}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </div>
      );
      setField(arr);
      console.log(arr);
    }
  }, [lb_watt, lb_num, b_volt, r_lightbulb, percentLightness]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="bg-white w-fit rounded-lg p-5 m-2 pb-8">
          <div className="flex justify-center mt-4">
            <h1 className="text-3xl font-bold underline">
              Lightbulb Circuit in Series
            </h1>
          </div>
          <div className="flex justify-center mt-4">
            <div>
              <a> Formula: I = V/R</a>
              <br></br>
              <a> Formula: P = V * I </a>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-fit">
              <div className="flex gap-2">
                <a className="w-full">Battery Voltage</a>
                <input
                  type="number"
                  onChange={(e) => {
                    setb_volt(parseFloat(e.target.value));
                  }}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Battery-Voltage"
                ></input>
              </div>
              <div className="flex gap-2">
                <a className="w-full">Lightbulb's Watt</a>
                <input
                  type="number"
                  onChange={(e) => {
                    setlb_watt(parseFloat(e.target.value));
                  }}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Lightbulb Watt"
                ></input>
              </div>
              <div className="flex gap-2">
                <a className="w-full">Lightbulb Resistance</a>
                <input
                  type="number"
                  onChange={(e) => {
                    setr_lightbulb(parseFloat(e.target.value));
                  }}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Lightbulb Resistance"
                ></input>
              </div>
              <div className="flex gap-2">
                <a className="w-full">Number of Lightbulbs</a>
                <input
                  type="number"
                  onChange={(e) => {
                    setlb_num(parseFloat(e.target.value));
                  }}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Number of lightbulbs"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div>
              <a>
                Total Current in Circuit: {b_volt / (r_lightbulb * lb_num)} A
              </a>
              <br></br>
              <a>
                Total Power Consumed in Circuit:{" "}
                {(b_volt * (b_volt / (r_lightbulb * lb_num))).toFixed(3)} Watt
              </a>
              <br></br>
              <a>
                Lightness each lightbulb: {(percentLightness * 100).toFixed(3)}{" "}
                %
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex content-center justify-items-center flex-row gap-2 w-screen h-[8rem]">
        {fields}
      </div>
    </div>
  );
}
