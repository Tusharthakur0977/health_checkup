"use client";

import { Card, Typography } from "@material-tailwind/react";
import React from "react";

const LaserBenefits = () => {
  const TABLE_HEAD = ["", "OPEN SURGERY", "LASER SURGERY"];

  const TABLE_ROWS = [
    {
      name: "Cuts",
      job: "MULTIPLE",
      date: "NO",
    },
    {
      name: "Scars & Stiches",
      job: "MULTIPLE",
      date: "NO",
    },
    {
      name: "Procedure",
      job: "PAINFUL",
      date: "MINIMAL PAIN",
    },
    {
      name: "Blood Loss",
      job: "HIGH",
      date: "LOW",
    },
    {
      name: "Infection Chances",
      job: "HIGH",
      date: "LOW",
    },
    {
      name: "Recovery",
      job: "BED REST",
      date: "FAST",
    },
    {
      name: "Hospital Duration",
      job: "3-4 DAYS",
      date: "1 DAY ONLY",
    },
    {
      name: "Technology",
      job: "OUTDATED",
      date: "OUTDATED",
    },
  ];

  return (
    <div className="w-full sm:w-[90%]  px-4 sm:px-6 py-5 sm:py-7">
      <p className="text-center font-bold text-xl sm:text:2xl mb-3">
        Benefits of Laser Surgery
      </p>
      <Card className="h-full w-full overflow-scroll bg-white shadow-xl rounded-sm px-4 py-2">
        <table className="w-full min-w-max table-auto bg-transparent">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="py-4">
                  <p className="font-bold leading-none text-xs text-start">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date }, index) => {
              return (
                <tr
                  className={`${
                    index === TABLE_ROWS.length - 1
                      ? ""
                      : "border-b border-gray-900 "
                  }`}
                  key={name}
                >
                  <td className="px-3 py-4">
                    <p className="font-semibold text-xs">{name}</p>
                  </td>
                  <td className="mx-2">
                    <p className="font-semibold text-xs text-center text-black bg-gray-300 p-2 rounded-2xl">
                      {job}
                    </p>
                  </td>
                  <td className="">
                    <p className="font-semibold text-xs text-center text-white bg-blue-500 p-2 rounded-2xl">
                      {date}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default LaserBenefits;
