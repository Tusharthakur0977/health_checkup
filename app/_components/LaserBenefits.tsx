"use client";

import { Card } from "@material-tailwind/react";
import React from "react";
import { TABLE_HEAD, TABLE_ROWS } from "../_data/TableData";

const LaserBenefits = () => {
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
            {TABLE_ROWS.map(({ name, withoutLaser, withLaser }, index) => {
              return (
                <tr className="border-t border-gray-900" key={name}>
                  <td className="px-3 py-4">
                    <p className="font-semibold text-xs">{name}</p>
                  </td>
                  <td className="pr-3">
                    <p className="font-semibold text-xs text-center text-black bg-gray-300 p-1 rounded-2xl">
                      {withoutLaser}
                    </p>
                  </td>
                  <td className="pr-3">
                    <p className="font-semibold text-xs text-center text-white bg-blue-500 p-1 rounded-2xl">
                      {withLaser}
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
