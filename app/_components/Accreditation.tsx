import Image from "next/image";
import React from "react";

const Accreditation = () => {
  return (
    <div className="w-full sm:w-[95%] p-8 flex flex-col gap-4 bg-white">
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold text-center">
          Our <span className="text-[#22577a]">Accreditation</span>
        </p>
        <div className="h-1 w-[30%] self-center rounded-sm bg-[#22577a]" />
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 justify-items-center">
        <Image src="/images/cap.jpg" alt="" width={200} height={100} />
        <Image src="/images/ISO.jpg" alt="" width={170} height={70} />
        <Image
          src="/images/NABL.png"
          alt=""
          className="col-span-2"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default Accreditation;