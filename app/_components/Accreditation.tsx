import Image from "next/image";
import React from "react";

const Accreditation = () => {
  return (
    <div className="w-full sm:w-[95%] p-8 flex flex-col gap-4 bg-white">
      <div className="flex flex-col gap-1 mb-3">
        <p className="text-xl sm:text-2xl font-bold text-center">
          Our Partner&apos;s{" "}
          <span className="text-[#22577a]">Accreditation</span>
        </p>
        <div className="h-1 w-[30%] sm:w-[10%] self-center rounded-sm bg-[#22577a]" />
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 justify-items-center">
        <Image loading="eager" src="/images/cap.jpg" alt="" width={200} height={100} />
        <Image src="/images/ISO.jpg" alt="" width={1070} height={670} />
        <Image
          src="/images/NABL.png"
          alt=""
          className="col-span-2 sm:col-span-1"
          width={261}
          height={300}
        />
      </div>
    </div>
  );
};

export default Accreditation;
