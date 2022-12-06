import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import React, { useEffect, useState } from "react";
export default function Parallel() {
  const [lb_watt, setlb_watt] = useState(25);
  const [lb_num, setlb_num] = useState(1);
  const [b_volt, setb_volt] = useState(16);
  const [r_lightbulb, setr_lightbulb] = useState(9.5);
  const [percentLightness, setPercentLightness] = useState(0);
  const [fields, setField] = useState<JSX.Element[]>([]);
  useEffect(() => {
    setPercentLightness((b_volt * (b_volt / (r_lightbulb * lb_num))) / lb_watt);
    const arr = [];
    for (let i = 1; i <= lb_num; i++) {
      arr.push(
        <div
          key={i}
          className={
            i == 1
              ? "bg-white w-[400px] h-fit border-[8px] border-dashed border-amber-500 rounded-t-lg"
              : i == lb_num
              ? "bg-white w-[400px] h-fit border-[8px] border-dashed border-amber-500 border-t-[0px] rounded-b-lg"
              : "bg-white w-[400px] h-fit border-[8px] border-dashed border-amber-500 border-t-[0px] "
          }
        >
          <div className="sth">
            <div
              className={percentLightness == 0 ? "lightbulb" : ""}
              style={{
                opacity: percentLightness,
                zIndex: 10,
              }}
            >
              <Image
                src="/on-bulb_cropped.png"
                alt="Picture of the author"
                width={100}
                height={100}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <div style={{ zIndex: 9 }}>
              <Image
                src="/off-bulb_cropped.png"
                alt="Picture of the author"
                width={100}
                height={100}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
        </div>
      );
      setField(arr);
      console.log(arr);
    }
  }, [lb_watt, lb_num, b_volt, r_lightbulb, percentLightness]);

  return (
    <div className="flex gap-10 ml-10">
      <div className="flex justify-center mt-4 h-fit">
        <div className="bg-white w-fit rounded-lg p-5 m-2 pb-8">
          <div className="flex justify-center mt-4">
            <h1 className="text-3xl font-bold underline">
              Lightbulb Circuit in Parallel
            </h1>
          </div>
          <div className="flex justify-center mt-4">
            <div>
              <a>Using Ohm's Law</a>
              <br></br>
              <a> Current Formula : I = V/R</a>
              <br></br>
              <a> Power Formula: P = V * I </a>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-fit">
              <div className="flex gap-2">
                <a className="w-full mt-2">Battery Voltage</a>
                <input
                  type="number"
                  onChange={(e) => {
                    setb_volt(parseFloat(e.target.value));
                  }}
                  defaultValue={b_volt}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Battery-Voltage"
                ></input>
              </div>
              <div className="flex gap-2">
                <a className="w-full mt-2">Lightbulb&apos;s Watt</a>
                <input
                  type="number"
                  defaultValue={lb_watt}
                  onChange={(e) => {
                    setlb_watt(parseFloat(e.target.value));
                  }}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Lightbulb Watt"
                ></input>
              </div>
              <div className="flex gap-2">
                <a className="w-full mt-2">Lightbulb Resistance</a>
                <input
                  type="number"
                  defaultValue={r_lightbulb}
                  disabled={true}
                  onChange={(e) => {
                    setr_lightbulb(parseFloat(e.target.value));
                  }}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  placeholder="Lightbulb Resistance"
                ></input>
              </div>
              <div className="flex gap-2">
                <a className="w-full mt-2">Number of Lightbulbs</a>
                <input
                  type="number"
                  onChange={(e) => {
                    if (parseInt(e.target.value) <= 50) {
                      setlb_num(parseFloat(e.target.value));
                    }
                  }}
                  className="mt-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  defaultValue={lb_num}
                  placeholder="Number of lightbulbs"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div>
              <a>
                Total Current in Circuit:{" "}
                {(b_volt / (r_lightbulb * lb_num)).toFixed(3)} A
              </a>
              <br></br>
              <a className="text-gray-500">
                I = V/R ={" "}
                {b_volt + "/" + "(" + r_lightbulb + "*" + lb_num + ")"} A
              </a>
              <br></br>
              <a>
                Total Power Consumed in Circuit:{" "}
                {(b_volt * (b_volt / (r_lightbulb * lb_num))).toFixed(3)} Watt
              </a>
              <br></br>
              <a className="text-gray-500">
                P = V * I ={" "}
                {b_volt + "*" + (b_volt / (r_lightbulb * lb_num)).toFixed(3)}{" "}
                Watt
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
      <div>
        <div className="absolute ml-[167px] mt-[55px] z-40 text-white bg-red-600 p-1 rounded-sm px-3">
          {b_volt + " V"}
        </div>
        <div className="absolute ml-[144px] z-30 ">
          <Image
            src="/car-battery.png"
            alt="Battery img"
            width={100}
            height={100}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="flex justify-center mt-[35px]">
          <div className="mt-10">{fields}</div>
        </div>
      </div>
    </div>
  );
}
